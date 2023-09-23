import { g as getBasePath, S as SPACING, M as MAX_CHARACTERS, C as CACHE_TIME, E as EXIT_MESSAGE, a as MESSAGE_ENTITY_LIMIT, O as OPERATION_CANCELLED_MSG, D as DEV, b as CATEGORY_SPACING$1, L as LABEL_SPACING$1 } from "../../../chunks/constants.js";
import { Scenes, Composer, Telegraf, session } from "telegraf";
import * as filters from "telegraf/filters";
import { readFile, readdir } from "node:fs/promises";
import * as pathLib from "path";
const ENABLE_SETTING_WEBHOOK = false;
const charToHtmlEntity = {
  ">": "&gt;",
  "<": "&lt;",
  "&": "&amp;"
};
function isObject(obj) {
  return Object.prototype.toString.call(obj) === "[object Object]";
}
function mergeObjects(baseObj, objToMerge, errorOnConflict = true, overwriteBaseObject = false) {
  for (const [key, value] of Object.entries(objToMerge)) {
    if (key in baseObj) {
      if (errorOnConflict)
        throw new Error(`The key '${key}' exists in both the base object and the object to merge.`);
      else if (overwriteBaseObject)
        baseObj[key] = value;
    } else
      baseObj[key] = value;
  }
  return baseObj;
}
function mergeListOfObjects(listOfObjects) {
  let baseObj;
  for (const obj of listOfObjects) {
    if (!baseObj) {
      baseObj = obj;
      continue;
    } else {
      mergeObjects(baseObj, obj);
    }
  }
  return baseObj;
}
async function loadJsonDirectory(path) {
  async function loadJsonDir(dirPath, tasks2) {
    const dirents = await readdir(dirPath, { withFileTypes: true });
    for (const dirent of dirents) {
      if (dirent.name.endsWith(".json"))
        tasks2.push(
          readFile(pathLib.join(dirPath, dirent.name), "utf8")
        );
      else if (dirent.isDirectory()) {
        await loadJsonDir(
          pathLib.join(dirPath, dirent.name),
          tasks2
        );
      }
    }
    return tasks2;
  }
  const tasks = [];
  await loadJsonDir(path, tasks);
  const jsonFiles = await Promise.all(tasks);
  const jsons = jsonFiles.map((jsonFile) => JSON.parse(jsonFile));
  return mergeListOfObjects(jsons);
}
async function loadJsonData(path, root = "./src/lib/data/") {
  let filePath = `${root ? root : "./src/lib/"}${path}`;
  filePath = filePath.replace(/\/{2,}/g, "/");
  if (filePath.endsWith("/"))
    return loadJsonDirectory(filePath);
  filePath = `${filePath}${filePath.endsWith(".json") ? "" : ".json"}`;
  const file = await readFile(filePath, "utf8");
  return JSON.parse(file);
}
function convertStaticFilePathToUrl(path) {
  if (!path.startsWith("./static/")) {
    throw new Error("The file is not in the static folder.");
  } else
    return `${getBasePath()}${path.replace(/\.\/static/g, "")}`;
}
function convertToLabel(label) {
  return label.replace(/(?<=\/ ?|^)\w|[\[(].*?[)\]]/g, (str) => str.includes(" ") ? titlecase(str) : str.toUpperCase());
}
function dictGet(dict, key, default_value = null) {
  if (key in dict)
    return dict[key];
  else
    return default_value;
}
function dictGetSearch(dict, searchTerm) {
  let result = dictGet(dict, searchTerm);
  if (result != null)
    return result;
  for (const [_, innerDict] of Object.entries(dict)) {
    if (typeof innerDict === "string")
      continue;
    result = dictGetSearch(innerDict, searchTerm);
    if (result != null)
      return result;
  }
  return result;
}
function getLastMatch(str, matchStr) {
  const matchStrLen = matchStr.length;
  let lastMatchIndex = 0;
  for (let i = str.length - matchStrLen; i >= 0; --i) {
    const token = str.slice(i, i + matchStrLen);
    if (token === matchStr) {
      lastMatchIndex = i;
      break;
    }
  }
  return [lastMatchIndex, matchStr];
}
function getLastMatchChained(text, ...matchStrings) {
  let lastMatchIndex = 0;
  let matchStr = matchStrings[matchStrings.length - 1];
  for (const matchString of matchStrings) {
    [lastMatchIndex, matchStr] = getLastMatch(text, matchString);
    if (lastMatchIndex !== 0)
      break;
  }
  return [lastMatchIndex, matchStr];
}
function titlecase(str) {
  const strLen = str.length;
  if (strLen < 1)
    return str;
  str = str.toLowerCase();
  const chars = new Array(strLen);
  chars[0] = str[0].toUpperCase();
  for (let i = 1; i < strLen; ++i) {
    const currentChar = str[i];
    const charBefore = str[i - 1];
    if (!charBefore.trim())
      chars[i] = currentChar.toUpperCase();
    else
      chars[i] = currentChar;
  }
  return chars.join("");
}
function strFormat(str, ...args) {
  if (!args.length)
    return str;
  const argsType = typeof args[0];
  args = argsType === "string" || argsType === "number" ? [...args] : args[0];
  for (const arg in args) {
    str = str.replace(new RegExp(`\\{${arg}\\}`, "gi"), args[arg]);
  }
  return str;
}
function getTitleFromFilename(filename, formatFunc = titlecase) {
  filename = filename.replace(/\.\w*$/, "");
  filename = filename.replace(/[_\-]/g, " ");
  return formatFunc(filename).trim();
}
function getFilenameFromPath(path, removeFileExt = false, formatted = true) {
  let slashIndex = 0;
  for (let i = path.length - 1; i >= 0; i--) {
    if (path[i] === "/") {
      slashIndex = i;
      break;
    }
  }
  let filename = path.slice(slashIndex + 1, path.length);
  if (removeFileExt)
    filename = filename.replace(/\.\w+$/, "");
  if (!formatted)
    return filename;
  else
    return titlecase(filename.replace(/-|_/g, " "));
}
function removeHtml(text) {
  return text.replace(/<\/?.*?(?:>|$)/g, "");
}
function stripHtml(text) {
  return text.replace(
    /[&<>]/g,
    // The HTML characters in the given text are replaced with their respective HTML entities using the charToHtmlEntity dictionary
    (char) => dictGet(charToHtmlEntity, char, char)
  );
}
function hyperlink(text, link) {
  return `<a href="${link}">${text}</a>`;
}
function monospace(text) {
  return `<code>${text}</code>`;
}
function italicise(text) {
  return `<i>${text}</i>`;
}
function bold(text) {
  return `<b>${text}</b>`;
}
function boldFirstLine(text) {
  const splittedText = text.trim().split("\n");
  const strippedFirstLine = stripHtml(splittedText[0]);
  const firstLine = bold(strippedFirstLine);
  return `${firstLine}
${splittedText.slice(1).join("\n") ?? ""}`.trim();
}
function addDays(date, days) {
  let newDate = new Date(date.getTime());
  newDate.setDate(date.getDate() + days);
  return newDate;
}
function addHours(date, hours) {
  let newDate = new Date(date.getTime());
  newDate.setHours(date.getHours() + hours);
  return newDate;
}
function getDayStr(date, format = "short") {
  return Intl.DateTimeFormat("en-SG", {
    weekday: format
  }).format(date);
}
function getTimeStr(date) {
  return Intl.DateTimeFormat("en-SG", {
    hour: "numeric",
    minute: "numeric"
  }).format(date).replace(/ |:00/g, "").trim();
}
const messageEntityRegex = /<.+?>/g;
const removeBotUsernameRegex = /@inlineskatebot/g;
const removeCommandRegex = /^\/[\w\-]+/;
function removeBotUsername(message) {
  return message.replace(removeBotUsernameRegex, "").trim();
}
function removeCommand(message) {
  return message.replace(removeCommandRegex, "").trim();
}
function getMessageEntityCount(message) {
  const matches = message.match(messageEntityRegex);
  return matches ? matches.length : 0;
}
function getMsgSegment(startIndex, endIndex, message, maxLength = MAX_CHARACTERS, maxEntity = MESSAGE_ENTITY_LIMIT) {
  let msgSegment = "";
  const msgLen = message.length;
  while (true) {
    msgSegment = message.slice(startIndex, endIndex);
    if (getMessageEntityCount(msgSegment) > maxEntity) {
      const messageEntities = Array.from(msgSegment.matchAll(messageEntityRegex));
      const messageEntity = messageEntities[maxEntity];
      return msgSegment.slice(0, messageEntity.index);
    } else if (msgSegment.length < maxLength || endIndex >= msgLen)
      break;
    const msgSegmentWithoutHtml = removeHtml(msgSegment);
    const segmentWithoutHtmlLen = msgSegmentWithoutHtml.length;
    if (segmentWithoutHtmlLen === maxLength)
      break;
    endIndex += maxLength - segmentWithoutHtmlLen;
  }
  return msgSegment;
}
function splitMessage(message, maxLength = MAX_CHARACTERS, maxEntity = MESSAGE_ENTITY_LIMIT) {
  if (removeHtml(message).length <= maxLength && getMessageEntityCount(message) <= maxEntity) {
    return [message];
  }
  const msgLen = message.length;
  const msges = [];
  let startIndex = 0;
  let endIndex = startIndex + maxLength;
  while (endIndex < msgLen) {
    const msgSegment = getMsgSegment(startIndex, endIndex, message, maxLength, maxEntity);
    const [lastMatchIndex, matchStr] = getLastMatchChained(msgSegment, "\n\n", "\n");
    const msgSegmentEndIndex = startIndex + lastMatchIndex + matchStr.length;
    msges.push(message.slice(startIndex, msgSegmentEndIndex).trim());
    startIndex = msgSegmentEndIndex;
    endIndex = startIndex + maxLength;
  }
  msges.push(message.slice(startIndex, endIndex));
  return msges;
}
async function ctxReply(ctx, reply, options = {}) {
  for (const segment of splitMessage(reply)) {
    await ctx.reply(segment, {
      parse_mode: "HTML",
      disable_web_page_preview: true,
      reply_to_message_id: ctx.message.message_id,
      ...options
    });
  }
}
function generateInlineQueryReply(title, message, id, options = {}, queryTitle = "") {
  queryTitle = queryTitle || title;
  const queryReply = {
    type: "article",
    id: `${id}`,
    title: queryTitle,
    description: removeHtml(message),
    input_message_content: {
      message_text: `${bold(title)}${SPACING}${message}`,
      parse_mode: "HTML",
      disable_web_page_preview: true,
      ...options
    }
  };
  return queryReply;
}
async function answerInlineQuery(ctx, messages, title = null, options = {}) {
  if (typeof messages === "string")
    messages = [messages];
  if (!title) {
    const splittedMsg = messages[0].trim().split("\n");
    const firstPart = splittedMsg[0];
    title = removeHtml(firstPart).trim();
    messages[0] = splittedMsg.slice(1).join("\n").trim();
  }
  const firstMsg = messages[0];
  if (messages.length === 1 && removeHtml(firstMsg).length + title.length + SPACING.length <= MAX_CHARACTERS) {
    const queryReply = generateInlineQueryReply(title, firstMsg, 1, options);
    return await ctx.answerInlineQuery([queryReply], { cache_time: CACHE_TIME });
  }
  const replies = [];
  let index = 0;
  for (const msgPart of messages) {
    const segments = splitMessage(msgPart, MAX_CHARACTERS - title.length - SPACING.length);
    for (const segment of segments) {
      const titleWithPageNum = removeHtml(`${title} page ${++index}`);
      const queryReply = generateInlineQueryReply(title, segment, index, options, titleWithPageNum);
      replies.push(queryReply);
    }
  }
  await ctx.answerInlineQuery(replies, { cache_time: CACHE_TIME });
}
async function sendDocGroupFromPaths(ctx, ...paths) {
  if (paths.length < 1)
    return;
  const docObjs = [];
  for (const path of paths) {
    const docObj = {
      type: "document",
      media: {
        source: path,
        filename: getFilenameFromPath(path)
      }
    };
    docObjs.push(docObj);
  }
  await ctx.sendMediaGroup(docObjs);
}
async function messageAndFileCommandHandler(ctx, fn) {
  const [message, files] = await fn();
  await ctxReply(ctx, message);
  await sendDocGroupFromPaths(ctx, ...files);
}
async function messageAndFileInlineQueryHandler(ctx, fn, isHyperlinked = true, joiningSection = "\n\n") {
  let [message, files] = await fn();
  message = `${message}${joiningSection}${files.map(
    (path) => {
      const fileUrl = convertStaticFilePathToUrl(path);
      if (isHyperlinked)
        return hyperlink(getFilenameFromPath(path, true), fileUrl);
      else
        return fileUrl;
    }
  ).join("\n\n")}`;
  await answerInlineQuery(ctx, message);
}
async function isAdmin(ctx) {
  return true;
}
async function canDeleteMessages(ctx) {
  const bot2 = await ctx.getChatMember(ctx.botInfo.id);
  if (bot2.status === "administrator" && bot2.can_delete_messages)
    return true;
  else
    return false;
}
async function deleteMessages(ctx, ...message_ids) {
  const deletingAllowed = await canDeleteMessages(ctx);
  if (!deletingAllowed)
    return false;
  const tasks = message_ids.map((id) => ctx.deleteMessage(id));
  await Promise.all(tasks);
  return true;
}
function markMessageForDeletion(ctx, ...message_ids) {
  const messagesToDelete = ctx.wizard.state.messagesToDelete;
  if (Array.isArray(messagesToDelete))
    ctx.wizard.state.messagesToDelete = messagesToDelete.concat(message_ids);
}
function wrapCallbackWithMessageDeleter(callback) {
  return async (ctx, input) => {
    await callback(ctx, input);
    const messagesToDelete = ctx.wizard.state.messagesToDelete;
    if (Array.isArray(messagesToDelete))
      await deleteMessages(ctx, ...messagesToDelete);
  };
}
async function promptUserForInput(ctx, message) {
  const botMessage = await ctx.reply(`${message} ${EXIT_MESSAGE}`, { parse_mode: "HTML", reply_to_message_id: ctx.message.message_id });
  markMessageForDeletion(ctx, ctx.message.message_id, botMessage.message_id);
}
async function exitValidator(ctx) {
  await ctx.reply(OPERATION_CANCELLED_MSG);
  await ctx.scene.leave();
}
const cancelCommand = ["cancel", exitValidator];
function createWizardScene(name, handler2) {
  return new Scenes.WizardScene(name, handler2);
}
const DEFAULT_POLL_OPTIONS = ["Coming"];
const pollMessageRegex = /^\/?\bpoll_?(?:msg|message)?\b/i;
function generateInlineKeyboard(pollOptions = DEFAULT_POLL_OPTIONS) {
  const inlineKeyboard = [];
  for (const pollOption of pollOptions) {
    inlineKeyboard.push([{
      text: pollOption,
      callback_data: pollOption
    }]);
  }
  return inlineKeyboard;
}
function generatePollMessage(message, pollOptions) {
  message = message.replace(pollMessageRegex, "").trim();
  message = removeBotUsername(message);
  const pollPortion = `${pollOptions.map((option) => `${bold(option)}`).join(SPACING)}${SPACING}👥 Nobody responded`;
  const inlineKeyboard = generateInlineKeyboard(pollOptions);
  async function callback(ctx, input) {
    input = boldFirstLine(input);
    return await ctx.reply(`${input}

${pollPortion}`, {
      parse_mode: "HTML",
      reply_to_message_id: ctx.message.message_id,
      reply_markup: {
        inline_keyboard: inlineKeyboard
      }
    });
  }
  return { message, callback };
}
function getPollOptionSegment(message, pollOption) {
  const pollOptionIndex = message.indexOf(pollOption) === -1 ? 0 : message.indexOf(pollOption);
  let newLineAfterPollOptionIndex = message.indexOf("\n", pollOptionIndex);
  newLineAfterPollOptionIndex = newLineAfterPollOptionIndex === -1 ? 0 : newLineAfterPollOptionIndex;
  let doubleNewLineIndex = message.indexOf("\n\n", newLineAfterPollOptionIndex + 1);
  doubleNewLineIndex = doubleNewLineIndex === -1 ? message.length : doubleNewLineIndex;
  const pollOptionSegment = message.slice(newLineAfterPollOptionIndex, doubleNewLineIndex).trim();
  return pollOptionSegment;
}
function createPollPortion(message, pollOption, isSelected, name) {
  const pollOptionSegment = getPollOptionSegment(message, pollOption);
  let names;
  let removed = null;
  if (pollOptionSegment.length === 0)
    names = [];
  else
    names = pollOptionSegment.split("\n");
  if (isSelected && name) {
    if (names.includes(name)) {
      names = names.filter((aName) => aName !== name);
      removed = true;
    } else {
      names.push(name);
      removed = false;
    }
  }
  const pollPortion = `${bold(`${pollOption}${names.length === 0 ? "" : ` (${names.length}👥)`}`)}
${names.join("\n")}`;
  return { pollPortion, names, nameRemoved: removed };
}
function reformPollMessage(message, pollMessage, selectedPollOption, pollOptions, name) {
  const reformedPollMessageList = [];
  let peopleResponded = [];
  let removed = null;
  reformedPollMessageList.push(pollMessage);
  for (const pollOption of pollOptions) {
    const isSelected = pollOption === selectedPollOption;
    const { pollPortion, names, nameRemoved } = createPollPortion(message, pollOption, isSelected, isSelected ? name : "");
    reformedPollMessageList.push(pollPortion);
    peopleResponded = peopleResponded.concat(names);
    if (nameRemoved !== null)
      removed = nameRemoved;
  }
  const numResponded = new Set(peopleResponded).size;
  const respondedPortion = `👥 ${numResponded === 0 ? "Nobody" : numResponded === 1 ? "1 person" : `${numResponded} people`} responded`;
  reformedPollMessageList.push(respondedPortion);
  const reformedPollMessage = reformedPollMessageList.join("\n\n");
  return { reformedPollMessage, removed };
}
function getName(user) {
  return `${user.first_name} ${user.last_name ?? ""}`.trim();
}
function getPollOptions(inline_keyboard) {
  const pollOptions = [];
  for (const inlineKeyboardButton of inline_keyboard) {
    const text = inlineKeyboardButton[0].text;
    pollOptions.push(text);
  }
  return pollOptions;
}
function getPollMessage(message, pollOptions) {
  const firstPollOptionIndex = message.indexOf(pollOptions[0]);
  return boldFirstLine(message.slice(0, firstPollOptionIndex).trim());
}
function createDateMapping(trainingDates2) {
  const dateMapping = {};
  for (const date of trainingDates2) {
    const dateObj = new Date(date);
    dateMapping[dateObj.getDay()] = dateObj;
  }
  return dateMapping;
}
async function handleTrgMsg(ctx, msg) {
  const { callback } = generatePollMessage(msg, DEFAULT_POLL_OPTIONS);
  if (!msg) {
    const wrappedCallback = wrapCallbackWithMessageDeleter(callback);
    return await ctx.scene.enter("validate", { message: `No training message was found for this chat, so please enter the desired training message. If you want to set up a poll message for this chat, please contact ${DEV}.`, callback: wrappedCallback, messagesToDelete: [] });
  }
  await callback(ctx, msg);
  await deleteMessages(ctx, ctx.message.message_id);
}
function setTimeOnUpcomingTrainingDate(upcomingTrainingDate, dateMapping) {
  const trainingDate = dateMapping[upcomingTrainingDate.getDay()];
  const correctedTrainingDate = new Date(upcomingTrainingDate.getTime());
  correctedTrainingDate.setHours(
    trainingDate.getHours(),
    trainingDate.getMinutes(),
    0
  );
  return correctedTrainingDate;
}
function getUpcomingTrainingDates(dateMapping, numOfTrainingDates = 1) {
  const currentDate = /* @__PURE__ */ new Date();
  const upcomingTrainingDates = [];
  let tempDate = currentDate;
  while (true) {
    if (tempDate.getDay() in dateMapping) {
      if (tempDate > currentDate)
        upcomingTrainingDates.push(
          setTimeOnUpcomingTrainingDate(
            tempDate,
            dateMapping
          )
        );
      else if (tempDate === currentDate) {
        const trainingDate = dateMapping[tempDate.getDay()];
        if (tempDate.getHours() < trainingDate.getHours())
          upcomingTrainingDates.push(
            setTimeOnUpcomingTrainingDate(
              tempDate,
              dateMapping
            )
          );
        else if (tempDate.getHours() === trainingDate.getHours() && tempDate.getMinutes() <= trainingDate.getMinutes())
          upcomingTrainingDates.push(
            setTimeOnUpcomingTrainingDate(tempDate, dateMapping)
          );
      }
      if (upcomingTrainingDates.length === numOfTrainingDates)
        break;
    }
    tempDate = addDays(tempDate, 1);
  }
  return upcomingTrainingDates.length === 1 ? upcomingTrainingDates[0] : upcomingTrainingDates;
}
const trainingLocation$1 = "NTU MPC 1";
const trainingDates$1 = ["2022-12-28T19:00:00.000", "2022-12-30T19:00:00.000"];
const trainingMsg$1 = "👾{last} {day} CCA Training @{location} @{date} 👾";
function formatMsg(date, location, trgMsg, isLast) {
  const timeString = getTimeStr(date);
  const dateString = Intl.DateTimeFormat("en-SG", {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric"
  }).format(date).replace(/,/, "");
  const fullDateString = `${timeString}, ${dateString}`;
  return strFormat(trgMsg, {
    day: getDayStr(date),
    location,
    date: fullDateString,
    last: isLast ? " LAST" : ""
  });
}
async function handler$6(ctx, message) {
  const isLast = message.toLowerCase() === "last";
  if (message && !isLast)
    return await handleTrgMsg(ctx, message);
  const upcomingTrainingDate = getUpcomingTrainingDates(
    createDateMapping(trainingDates$1)
  );
  const formattedMsg = formatMsg(upcomingTrainingDate, trainingLocation$1, trainingMsg$1, isLast);
  await handleTrgMsg(ctx, formattedMsg);
}
const help$1 = `To use the /trg_msg command, simply type the command and the training message will be sent to the group. You can indicate that the training is the last training for a while by simply typing the word 'last' after the command, like this:
${monospace(`/trg_msg last`)}

If you would like to change the training message to a custom one, provide the training message after you have typed the command, like this:
${monospace(`/trg_msg ${stripHtml("<custom training message (optional)>")}`)}`;
const ntu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  handler: handler$6,
  help: help$1
}, Symbol.toStringTag, { value: "Module" }));
const trainingLocation = "MPCs 14/15 & 16/17";
const trainingDates = ["2023-02-21T18:30:00.000", "2023-02-23T18:30:00.000"];
const rentalMsg = `
For this week's rentals, please contact {username} and let us know your SIZE IN EU.  (〃'▽'〃)

Thereafter, make payment via https://nusfastpay.nus.edu.sg/skaterental and send screenshot of payment page to @weiiiiixiang

Collection and return of rentals will be at the cage at 6.30pm and 9.30pm. (๑•‌ ₃ •‌๑)

P.S. rentals are first come first serve. (。•‌︿•‌。)
`;
const trainingMsg = `Skate Session for {weekType}

As always, poll to join cca or remove your name otherwise! (ó﹏ò｡)
{rentals}
Venues: {location}`;
const usernameRegex = /@\w+/i;
const typeOfWeekRegexStr = "(?:exam|recess|reading|summer|winter)";
const weekRegex = new RegExp(String.raw`${typeOfWeekRegexStr}?[ _\-]?(?:weeks?|breaks?)[ _\-]?\d*`, "i");
const noRentalsRegex = /no[ _\-]?re(?:nt|tn)(?:al)?s?/i;
const sceneName = "nusValidator";
function getRegexMatch(match, defaultValue = null) {
  if (!match)
    return defaultValue;
  else
    return match[0];
}
function normaliseWeek(week) {
  const weekType = getRegexMatch(
    week.match(new RegExp(typeOfWeekRegexStr, "i")),
    ""
  );
  const weekNum = getRegexMatch(
    week.match(/\d+/),
    ""
  );
  const middleWord = ["summer", "winter"].includes(weekType) ? "Break Week" : "Week";
  const weekStr = `${titlecase(weekType)} ${middleWord} ${weekNum}`.trim();
  return weekStr;
}
function getRequiredArgs(message) {
  message = message.trim();
  const noRentals = !!message.match(noRentalsRegex);
  const username = getRegexMatch(message.match(usernameRegex));
  let week = getRegexMatch(message.match(weekRegex));
  if (week != null)
    week = normaliseWeek(week);
  return [week, noRentals, username];
}
function generateTrgMsg(message, location, noRentals, weekType, username = "") {
  const formattedMsg = strFormat(message, {
    location,
    rentals: noRentals ? "" : rentalMsg,
    username,
    weekType
  });
  return formattedMsg;
}
function formatDate(date) {
  const dateStr = Intl.DateTimeFormat("en-SG", {
    day: "2-digit",
    month: "short"
  }).format(date);
  return `${dateStr} (${getDayStr(date).replace(/Tue/, "Tues").replace(/Thu/, "Thurs")}) ${getTimeStr(date)} - ${getTimeStr(
    addHours(date, 3)
  )}`;
}
function generatePollOptions(dateMapping) {
  const upcomingTrainingDates = getUpcomingTrainingDates(dateMapping, 2);
  return upcomingTrainingDates.map((date) => formatDate(date));
}
function createTrainingPollMsg(message, location, noRentals, weekType, username, trainingDates2) {
  return generatePollMessage(
    generateTrgMsg(
      message,
      location,
      noRentals,
      weekType,
      username
    ),
    generatePollOptions(
      createDateMapping(trainingDates2)
    )
  );
}
function createCustomTrgMsg(message, trainingDates2) {
  return generatePollMessage(
    message,
    generatePollOptions(
      createDateMapping(trainingDates2)
    )
  );
}
async function handler$5(ctx, msg) {
  if (!msg)
    return await ctx.scene.enter(sceneName, {
      messagesToDelete: []
    });
  const [week, noRentals, username] = getRequiredArgs(msg);
  if (msg.length > 50) {
    const { message: message2, callback: callback2 } = createCustomTrgMsg(msg, trainingDates);
    await callback2(ctx, message2);
    await deleteMessages(ctx, ctx.message.message_id);
  } else if (username == null || week == null)
    return await ctx.scene.enter(sceneName, {
      noRentals,
      weekType: week,
      username,
      messagesToDelete: []
    });
  const { message, callback } = createTrainingPollMsg(trainingMsg, trainingLocation, noRentals, week, username, trainingDates);
  await callback(ctx, message);
  await deleteMessages(ctx, ctx.message.message_id);
}
const helpExamples = [
  "/trg_msg week 4 @skateRentalIC",
  "/trg_msg reading week @skateRentalIC",
  "/trg_msg exam week 1 @skateRentalIC",
  "/trg_msg recess week @skateRentalIC",
  "/trg_msg winter week 2 @skateRentalIC",
  "/trg_msg week 8 no rentals",
  "/trg_msg summer week 3 no rentals"
];
const help = `To use the /trg_msg command, you need to provide the week. If there are rentals for the week, you need to provide the username of the person who is in charge of the rentals. Otherwise, you should input the phrase 'no rentals', like this:
${monospace(
  `/trg_msg ${stripHtml(
    "<week> <username of the person in charge of skate rentals or 'no rentals'>"
  )}`
)}

Here are some examples:
${helpExamples.map(
  (example) => ` ${monospace(example)}`
).join("\n")}

Alternatively, you can write your own training message. The bot will automatically generate the training dates as the poll options. All you need to do is to type your training message after the command, like this:
${monospace(
  `/trg_msg ${stripHtml(
    "<custom training message>"
  )}`
)}`;
const nusValidator = new Composer();
nusValidator.command(...cancelCommand);
nusValidator.on(filters.message("text"), async (ctx) => {
  const state = ctx.wizard.state;
  const { weekType, username } = state;
  let msg = removeCommand(ctx.message.text);
  msg = removeBotUsername(msg);
  const [givenWeekType, noRentals, givenUsername] = getRequiredArgs(msg);
  if (noRentals)
    state.noRentals = noRentals;
  if (!state.noRentals && !username) {
    if (!givenUsername) {
      return await promptUserForInput(ctx, `Please enter the username of the person who is in charge of skate rentals this week. If there are no rentals this week, simply enter the phrase '${monospace("no rentals")}' instead of the username.`);
    } else
      state.username = givenUsername;
  }
  if (!weekType) {
    if (!givenWeekType) {
      return await promptUserForInput(ctx, "Please enter the week for this week's skate training.");
    } else
      state.weekType = givenWeekType;
  }
  const { message, callback } = createTrainingPollMsg(trainingMsg, trainingLocation, state.noRentals, state.weekType, state.username, trainingDates);
  markMessageForDeletion(ctx, ctx.message.message_id);
  const wrappedCallback = wrapCallbackWithMessageDeleter(callback);
  await wrappedCallback(ctx, message);
  await ctx.scene.leave();
});
const validateScene$1 = createWizardScene(sceneName, nusValidator);
const nus = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  handler: handler$5,
  help,
  validateScene: validateScene$1
}, Symbol.toStringTag, { value: "Module" }));
const trgMsgModules = {
  ntu,
  nus
};
const trainingMsgScenes = [
  validateScene$1
];
const regex$8 = /^\/?(?:train(?:ing)?|trg|trng?)_?(?:msg|message)?/i;
function getModuleMapping() {
  const moduleMapping = process.env.MODULE_MAPPING;
  return JSON.parse(moduleMapping.replaceAll(`'`, `"`));
}
async function handler$4(ctx, message) {
  const moduleMapping = getModuleMapping();
  const relevantData = moduleMapping.filter((data) => data[0] === ctx.chat.id);
  if (relevantData.length === 0)
    return await handleTrgMsg(ctx, message);
  const [_, moduleStr] = relevantData[0];
  const trgMsgFunction = trgMsgModules[moduleStr].handler;
  await trgMsgFunction(ctx, message);
}
function generateHelpText(chatID) {
  const moduleMapping = getModuleMapping();
  const relevantData = moduleMapping.filter((data) => data[0] === chatID);
  if (relevantData.length === 0)
    return `The training message has not been set up for this chat. Please contact ${DEV} if you would like to set up a training message.`;
  const [_, trgMsgModuleStr] = relevantData[0];
  const helpText = trgMsgModules[trgMsgModuleStr].help;
  return helpText;
}
const validateHandler = new Composer();
validateHandler.command(...cancelCommand);
validateHandler.on(filters.message("text"), async (ctx) => {
  const state = ctx.wizard.state;
  const message = state.message;
  let input = removeCommand(ctx.message.text);
  input = removeBotUsername(input);
  function defaultValidator(input2) {
    return !!input2;
  }
  const validator = state.validator ?? defaultValidator;
  if (!validator(input)) {
    return await promptUserForInput(ctx, message);
  }
  markMessageForDeletion(ctx, ctx.message.message_id);
  const callback = state.callback;
  await callback(ctx, input);
  await ctx.scene.leave();
});
const validateScene = createWizardScene("validate", validateHandler);
const scenes = [
  validateScene,
  ...trainingMsgScenes
];
const stage = new Scenes.Stage(scenes);
const regex$7 = /^\/?\b(?:skates?)?[ _\-]?boots?[ _\-]?(?:types?)?\b/i;
const BOOT_TYPE_SPACING = "\n\n\n\n";
const LABEL_SPACING = "\n\n";
async function generateMsg$4() {
  const data = await loadJsonData("differences/boot-types");
  const msgList = [];
  msgList.push(bold("The different types of skate boots"));
  for (const [bootType, info] of Object.entries(data.bootTypes)) {
    const infoList = [];
    infoList.push(bold(bootType));
    for (const [label, value] of Object.entries(info)) {
      if (label === "characteristics")
        infoList.push(
          value.map(
            (characteristic) => `- ${characteristic}`
          ).join("\n")
        );
      else if (typeof value === "string")
        infoList.push(`${bold(
          titlecase(label)
        )}: ${value}`);
      else
        infoList.push(`${bold(
          titlecase(label)
        )}:
${value.map(
          (val) => `- ${val}`
        ).join("\n")}`);
    }
    msgList.push(infoList.join(LABEL_SPACING));
  }
  if (data.credits)
    msgList.push(`Credits: ${data.credits}`);
  return msgList.join(BOOT_TYPE_SPACING);
}
const BRAND_CATEGORY = {
  Skates: "skate-brands",
  Frames: "frame-brands",
  Wheels: "wheel-brands",
  Liners: "liner-brands"
};
const regex$6 = /^\/?\bbrands?\b/i;
const BRANDS_SPACING = SPACING;
const CATEGORY_SPACING = "\n\n\n\n\n";
async function loadBrandsJson(category) {
  return await loadJsonData(`brands/${category}`);
}
async function generateText(category) {
  const data = await loadBrandsJson(category);
  const brandsMsgList = [];
  brandsMsgList.push(bold(
    getTitleFromFilename(category)
  ));
  for (const [brandName, info] of Object.entries(data)) {
    brandsMsgList.push(`${bold(
      hyperlink(brandName, info.link)
    )}
${info.description}`);
  }
  return brandsMsgList.join(BRANDS_SPACING);
}
async function handler$3(message) {
  message = removeBotUsername(message);
  const msg = message.toLowerCase().replace(regex$6, "").trim();
  let jsonFiles;
  const brandCategories = await loadJsonData("brands/brand-categories");
  const category = dictGet(brandCategories, msg);
  if (category)
    jsonFiles = [category];
  else
    jsonFiles = [
      BRAND_CATEGORY.Skates,
      BRAND_CATEGORY.Frames,
      BRAND_CATEGORY.Wheels,
      BRAND_CATEGORY.Liners
    ];
  const textList = await Promise.all(jsonFiles.map((file) => generateText(file)));
  return textList.join(CATEGORY_SPACING);
}
const PLACES = {
  RetailersInSingapore: "retailers-in-singapore",
  SingaporeRentalShops: "places-to-rent",
  OverseasRetailers: "overseas-retailers",
  OnlineRetailers: "online-retailers",
  SkateParks: "skate-parks",
  SkatingRinks: "skating-rinks"
};
const whereToBuyRegex = /^\/?\b(?:(?:(?:places?|where)(?:[ _\-]?to[ _\-]?buy))|buy(?:ing)?)\b/i;
const whereToRentRegex = /^\/?\b(?:(?:(?:places?|where)(?:[ _\-]?to[ _\-]?rent))|rent(?:ing)?)\b/i;
const skateParksRegex = /^\/?\b(?:skate)?[ _\-]?(?:park|ramp)s?\b/i;
const skatingRinksRegex = /^\/?\b(?:skat(?:e|ing))?[ _\-]?rinks?\b/i;
const PLACES_SPACING = SPACING;
const TITLE_SPACING = "";
async function loadPlacesJson(place) {
  return await loadJsonData(`places/${place}`);
}
async function generatePlacesText(place, formatFunc = titlecase, separator = ": ") {
  const json = await loadPlacesJson(place);
  const infoStrList = [];
  infoStrList.push(`${bold(
    getTitleFromFilename(place, formatFunc)
  )}${TITLE_SPACING}`);
  for (let [placeName, placeInfo] of Object.entries(json)) {
    const placeInfoStrList = [];
    if (typeof placeInfo.website === "string")
      placeInfoStrList.push(
        bold(
          hyperlink(placeName, placeInfo.website)
        )
      );
    else
      placeInfoStrList.push(bold(placeName));
    for (const [key, value] of Object.entries(placeInfo)) {
      if (["website", "mapLink"].includes(key))
        continue;
      const label = bold(
        `${titlecase(key)}${separator}`
      );
      if (key === "address" && typeof placeInfo.mapLink === "string") {
        placeInfoStrList.push(`${label}${hyperlink(value, placeInfo.mapLink)}`);
      } else
        placeInfoStrList.push(`${label}${value}`);
    }
    infoStrList.push(placeInfoStrList.join(LABEL_SPACING$1));
  }
  return infoStrList.join(PLACES_SPACING).trim();
}
async function whereToBuyHandler(message) {
  message = removeBotUsername(message);
  const msg = message.toLowerCase().replace(whereToBuyRegex, "").trim();
  let jsonFiles;
  if (msg === "all")
    jsonFiles = [
      PLACES.RetailersInSingapore,
      PLACES.OverseasRetailers,
      PLACES.OnlineRetailers
    ];
  else {
    const categories = await loadJsonData(
      "places/where-to-buy-categories"
    );
    const category = dictGet(categories, msg);
    if (category)
      jsonFiles = [category];
    else
      jsonFiles = [PLACES.RetailersInSingapore];
  }
  const replyStrList = await Promise.all(jsonFiles.map((place) => generatePlacesText(place)));
  return replyStrList.join(CATEGORY_SPACING$1);
}
async function uncategorisedPlacesHandler(places) {
  return await generatePlacesText(places);
}
const regex$5 = /^\/?\b(?:students?)[ _\-]?discount[ _\-]?(?:info(?:rmation)?)?\b/i;
async function getDiscountApplicableStoresDetails(listSlice) {
  const data = await loadPlacesJson(PLACES.RetailersInSingapore);
  const detailStrList = [];
  for (const [store, info] of Object.entries(data).slice(...listSlice)) {
    const infoStrList = [];
    infoStrList.push(bold(
      hyperlink(store, info.website)
    ));
    for (const [label, value] of Object.entries(info)) {
      if (["description", "website", "mapLink"].includes(label))
        continue;
      else if (label === "address") {
        infoStrList.push(`${bold(
          `${titlecase(label)}:`
        )} ${hyperlink(value, info.mapLink)}`);
      } else
        infoStrList.push(`${bold(
          `${titlecase(label)}:`
        )} ${value}`);
    }
    detailStrList.push(infoStrList.join("\n"));
  }
  return detailStrList.join(SPACING);
}
async function generateDiscountInfo() {
  const { title, messageParts, pdfFiles, listSlice } = await loadJsonData("misc/discount-info");
  const details = await getDiscountApplicableStoresDetails(listSlice);
  const message = `${bold(title)}


${messageParts.join("\n\n")}


${details}`.trim();
  return [message, pdfFiles];
}
const regex$4 = /^\/?\bfr[ _\-]?diff?(?:erences?)?\b/i;
async function generateMsg$3() {
  const data = await loadJsonData("differences/fr-diff");
  const msgList = [];
  msgList.push(bold("Similarities and differences between the FRX, FRW, FR1, FR2 and FR3"));
  const similarities = `${bold(
    italicise("Similarities:")
  )}
${data.similarities.map((similarity) => `- ${similarity}`).join("\n")}`;
  msgList.push(similarities);
  const differences = data.differences;
  msgList.push(bold(
    italicise("Differences:")
  ));
  for (const [model, modelDifferences] of Object.entries(differences)) {
    const text = `${bold(model)}:
${modelDifferences.map((diffs) => `- ${diffs}`).join("\n")}`;
    msgList.push(text);
  }
  msgList.push(`References:
${data.references.map(
    (reference, index) => `${index + 1}. ${reference}`
  ).join("\n")}`);
  return msgList.join(SPACING);
}
var Lists = /* @__PURE__ */ ((Lists2) => {
  Lists2["TrickLists"] = "trick-lists";
  Lists2["Rulebooks"] = "rulebooks";
  Lists2["BuyingGuides"] = "buying-guides";
  Lists2["MaintenanceGuides"] = "maintenance-guides";
  Lists2["Glossaries"] = "glossaries";
  Lists2["MiscResources"] = "misc-resources";
  return Lists2;
})(Lists || {});
const trickListsRegex = /^\/?\b(?:others?[ _\-]?)?tricks?[ _\-]?lists?\b/i;
const rulebooksRegex = /^\/?\brules?[ _\-]?(?:book)?s?\b/i;
const buyingGuidesRegex = /^\/?\bbuy(?:ing)?[ _\-]?guides?\b/i;
const maintenanceGuidesRegex = /^\/?\bmain(?:tenance|tain(?:[ea]nce|ing)?)[ _\-]?(?:guides?)\b/i;
const glossariesRegex = /^\/?\b(?:(?:glossar(?:y|ies?)|dict?(?:ionar(?:y|ie?))?s?)(?:[ _\-]?of[ _\-]?term(?:s|inology|inologies?)?)?)\b/i;
const miscResourcesRegex = /^\/?\b(?:misc(?:ell?an[ea]ous)?s?|ran(?:dom)?s?)?[ _\-]?(?:resour?ce|guide)s?\b/i;
async function generateListsText(lists) {
  const data = await loadJsonData(`/lists/${lists}.json`);
  const { heading, links, files } = data;
  const processedLinks = [];
  for (const [linkTitle, link] of links.values()) {
    let processedLink;
    if (linkTitle.length !== 0)
      processedLink = hyperlink(linkTitle, link);
    else
      processedLink = link;
    processedLinks.push(processedLink);
  }
  const message = `${bold(heading)}${SPACING}${processedLinks.join("\n\n")}`;
  return [message, files];
}
function convertKeysToLowercase(obj) {
  return Object.fromEntries(Object.entries(obj).map(([key, value]) => {
    if (isObject(value))
      return [`${key}`.toLowerCase(), convertKeysToLowercase(value)];
    else
      return [`${key}`.toLowerCase(), value];
  }));
}
async function loadTerminology() {
  const json = await loadJsonData("terminology/terminology");
  json["Tricks"]["Grinds"] += ` Use the ${monospace("/tricks grinds")} command to see the list of grind tricks.`;
  json["Tricks"]["Slides"] += ` Use the ${monospace("/tricks slides")} command to see the list of slide tricks.`;
  json["Tricks"]["Stops"] += ` Use the ${monospace("/tricks stops")} command to see the list of stops.`;
  return convertKeysToLowercase(json);
}
async function loadSkateRecs() {
  const json = await loadJsonData("misc/skate-recs");
  json["recommendations"]["Urban / Freestyle Skates"][0]["FRX"]["reason"] += ` If you want to know the differences between the FRX and the FRW, use the ${monospace("/fr_diff")} command.`;
  return json;
}
async function loadFundamentalTricks() {
  const json = await loadJsonData("tricks/fundamentals");
  json["Forward stride"]["description"] += ` You can use the ${monospace("/tricks scootering")} and the ${monospace("/tricks double push")} commands to learn more about the two tricks.`;
  json["Improving your stride"]["description"] += ` You can use the ${monospace("/tricks double push")} command to learn more about the double push.`;
  json["Traversing stairs"]["description"] += ` Use the ${monospace("/tricks stair ride")} command to learn more.`;
  return json;
}
const TRICK_FILEPATH_MAP = {
  /*-------------
  The mapping is:
  "file path": [
    "category to display in the help function",
    "Heading",
    loadFunction (null if no loadFunction is required)
  ]
  -------------*/
  // Trick files that don't have any folders
  "basics": ["basics", "Basic tricks", null],
  "fundamentals": ["fundamentals", "Fundamental tricks", loadFundamentalTricks],
  "turns": ["turns", "Turns", null],
  "stops": ["stops", "Stops", null],
  "jumps": ["jumps", "Jumps", null],
  "wizard": ["wizard", "Wizard tricks", null],
  "misc": ["misc", "Miscellaneous tricks", null],
  // Trick files that have folders
  // Re-enable the aggressive tricks once the data for it is complete
  // Aggressive
  // "aggressive/": ["aggressive", "Aggressive tricks", null],
  // "aggressive/basics": ["aggressive basics", "Aggressive skating basics", null],
  // "aggressive/class-A": ["class a aggressive", "Class A aggressive tricks", null],
  // "aggressive/class-A/others": ["class a aggressive others", "Others, class A aggressive tricks", null],
  // "aggressive/class-A/spins": ["class a aggressive spins", "Spins, class A aggressive tricks", null],
  // "aggressive/class-B": ["class b aggressive", "Class B aggressive tricks", null],
  // "aggressive/class-B/airs": ["class b aggressive airs", "Airs, class B aggressive tricks", null],
  // "aggressive/class-B/grinds": ["class b aggressive grinds", "Grinds, class B aggressive tricks", null],
  // "aggressive/class-B/others": ["class b aggressive others", "Others, class B aggressive tricks", null],
  // "aggressive/class-B/spins": ["class b aggressive spins", "Spins, class B aggressive tricks", null],
  // "aggressive/class-B/stalls": ["class b aggressive stalls", "Stalls, class B aggressive tricks", null],
  // "aggressive/class-C": ["class c aggressive", "Class C aggressive tricks", null],
  // "aggressive/class-C/airs": ["class c aggressive airs", "Airs, class C aggressive tricks", null],
  // "aggressive/class-C/grabs": ["class c aggressive grabs", "Grabs, class C aggressive tricks", null],
  // "aggressive/class-C/grinds": ["class c aggressive grinds", "Grinds, class C aggressive tricks", null],
  // "aggressive/class-C/others": ["class c aggressive others", "Others, class C aggressive tricks", null],
  // "aggressive/class-C/spins": ["class c aggressive spins", "Spins, class C aggressive tricks", null],
  // "aggressive/class-C/stalls": ["class c aggressive stalls", "Stalls, class C aggressive tricks", null],
  // "aggressive/class-D": ["class d aggressive", "Class D aggressive tricks", null],
  // "aggressive/class-D/airs": ["class d aggressive airs", "Airs, class D aggressive tricks", null],
  // "aggressive/class-D/grabs": ["class d aggressive grabs", "Grabs, class D aggressive tricks", null],
  // "aggressive/class-D/grinds": ["class d aggressive grinds", "Grinds, class D aggressive tricks", null],
  // "aggressive/class-D/others": ["class d aggressive others", "Others, class D aggressive tricks", null],
  // "aggressive/class-D/spins": ["class d aggressive spins", "Spins, class D aggressive tricks", null],
  // "aggressive/class-D/stalls": ["class d aggressive stalls", "Stalls, class D aggressive tricks", null],
  // "aggressive/class-E": ["class e aggressive", "Class E aggressive tricks", null],
  // "aggressive/class-E/airs": ["class e aggressive airs", "Airs, class E aggressive tricks", null],
  // "aggressive/class-E/grabs": ["class e aggressive grabs", "Grabs, class E aggressive tricks", null],
  // "aggressive/class-E/grinds": ["class e aggressive grinds", "Grinds, class E aggressive tricks", null],
  // "aggressive/class-E/others": ["class e aggressive others", "Others, class E aggressive tricks", null],
  // "aggressive/class-E/spins": ["class e aggressive spins", "Spins, class E aggressive tricks", null],
  // "aggressive/class-E/stalls": ["class e aggressive stalls", "Stalls, class E aggressive tricks", null],
  // Slalom
  "slalom/": ["slalom", "Slalom tricks", null],
  "slalom/class-A/": ["class a slalom", "Class A slalom tricks", null],
  "slalom/class-A/jumps": ["class a slalom jumps", "Jumps, class A slalom tricks, category", null],
  "slalom/class-A/others": ["class a slalom others", "Others, class A slalom tricks", null],
  "slalom/class-A/sitting": ["class a slalom sitting", "Sitting, class A slalom tricks", null],
  "slalom/class-A/spins": ["class a slalom spins", "Spins, class A slalom tricks", null],
  "slalom/class-A/wheelings": ["class a slalom wheelings", "Wheelings, class A slalom tricks", null],
  "slalom/class-B/": ["class b slalom", "Class B slalom tricks", null],
  "slalom/class-B/jumps": ["class b slalom jumps", "Jumps, class B slalom tricks", null],
  "slalom/class-B/others": ["class b slalom others", "Others, class B slalom tricks", null],
  "slalom/class-B/sitting": ["class b slalom sitting", "Sitting, class B slalom tricks", null],
  "slalom/class-B/spins": ["class b slalom spins", "Spins, class B slalom tricks", null],
  "slalom/class-B/wheelings": ["class b slalom wheelings", "Wheelings, class B slalom tricks", null],
  "slalom/class-C/": ["class c slalom", "Class C slalom tricks", null],
  "slalom/class-C/jumps": ["class c slalom jumps", "Jumps, class C slalom tricks", null],
  "slalom/class-C/others": ["class c slalom others", "Others, class C slalom tricks", null],
  "slalom/class-C/sitting": ["class c slalom sitting", "Sitting, class C slalom tricks", null],
  "slalom/class-C/spins": ["class c slalom spins", "Spins, class C slalom tricks", null],
  "slalom/class-C/wheelings": ["class c slalom wheelings", "Wheelings, class C slalom tricks", null],
  "slalom/class-D/": ["class d slalom", "Class D slalom tricks", null],
  "slalom/class-D/jumps": ["class d slalom jumps", "Jumps, class D slalom tricks", null],
  "slalom/class-D/others": ["class d slalom others", "Others, class D slalom tricks", null],
  "slalom/class-D/sitting": ["class d slalom sitting", "Sitting, class D slalom tricks", null],
  "slalom/class-D/spins": ["class d slalom spins", "Spins, class D slalom tricks", null],
  "slalom/class-D/wheelings": ["class d slalom wheelings", "Wheelings, class D slalom tricks", null],
  "slalom/class-E/": ["class e slalom", "Class E slalom tricks", null],
  "slalom/class-E/jumps": ["class e slalom jumps", "Jumps, class E slalom tricks", null],
  "slalom/class-E/others": ["class e slalom others", "Others, class E slalom tricks", null],
  "slalom/class-E/sitting": ["class e slalom sitting", "Sitting, class E slalom tricks", null],
  "slalom/class-E/spins": ["class e slalom spins", "Spins, class E slalom tricks", null],
  "slalom/class-E/wheelings": ["class e slalom wheelings", "Wheelings, class E slalom tricks", null],
  // Slides
  "slides/": ["slides", "Slides", null],
  "slides/class-A/": ["class a slides", "Class A slides", null],
  "slides/class-A/family-1": ["class a family 1 slides", "Class A, family 1 slides", null],
  "slides/class-A/family-2": ["class a family 2 slides", "Class A, family 2 slides", null],
  "slides/class-A/family-3": ["class a family 3 slides", "Class A, family 3 slides", null],
  "slides/class-A/family-4": ["class a family 4 slides", "Class A, family 4 slides", null],
  "slides/class-A/family-5": ["class a family 5 slides", "Class A, family 5 slides", null],
  "slides/class-B/": ["class b slides", "Class B slides", null],
  "slides/class-B/family-1": ["class b family 1 slides", "Class B, family 1 slides", null],
  "slides/class-B/family-2": ["class b family 2 slides", "Class B, family 2 slides", null],
  "slides/class-B/family-3": ["class b family 3 slides", "Class B, family 3 slides", null],
  "slides/class-B/family-4": ["class b family 4 slides", "Class B, family 4 slides", null],
  "slides/class-B/family-5": ["class b family 5 slides", "Class B, family 5 slides", null],
  "slides/class-C/": ["class c slides", "Class C slides", null],
  "slides/class-C/family-1": ["class c family 1 slides", "Class C, family 1 slides", null],
  "slides/class-C/family-2": ["class c family 2 slides", "Class C, family 2 slides", null],
  "slides/class-C/family-4": ["class c family 4 slides", "Class C, family 4 slides", null],
  "slides/class-C/family-5": ["class c family 5 slides", "Class C, family 5 slides", null],
  "slides/class-D/": ["class d slides", "Class D slides", null],
  "slides/class-D/family-1": ["class d family 1 slides", "Class D, family 1 slides", null],
  "slides/class-D/family-2": ["class d family 2 slides", "Class D, family 2 slides", null],
  "slides/class-D/family-4": ["class d family 4 slides", "Class D, family 4 slides", null],
  "slides/class-D/family-5": ["class d family 5 slides", "Class D, family 5 slides", null],
  "slides/class-E/": ["class e slides", "Class E slides", null],
  "slides/class-E/family-1": ["class e family 1 slides", "Class E, family 1 slides", null],
  "slides/class-E/family-2": ["class e family 2 slides", "Class E, family 2 slides", null],
  "slides/class-E/family-4": ["class e family 4 slides", "Class E, family 4 slides", null]
};
const regex$3 = /^\/?\btricks?\b/i;
const TRICK_SPACING = SPACING;
async function loadTricksJson(file) {
  const [_, __, loadFunction] = dictGet(TRICK_FILEPATH_MAP, file, [null, null, null]);
  if (loadFunction != null)
    return await loadFunction();
  const filepath = `tricks/${file}`;
  const json = await loadJsonData(filepath);
  return json;
}
function generateTrickText(trickName, trickObj, noHeading = false) {
  const textList = [];
  if (!noHeading) {
    textList.push(bold(trickName));
  }
  for (const [label, value] of Object.entries(trickObj)) {
    if (Array.isArray(value)) {
      if (value.length === 0)
        continue;
      const heading = bold(
        `${titlecase(label)}:`
      );
      if (value.length === 1) {
        const newHeading = heading.replace(/s(?=:)/, "");
        const [channelName, link] = value[0];
        textList.push(`${newHeading} ${hyperlink(channelName, link)}`);
      } else
        textList.push(
          `${heading}
${value.map(
            ([channelName, link], index) => `${index + 1}. ${hyperlink(channelName, link)}`
          ).join("\n")}`
        );
    } else if (label === "description" && value)
      textList.push(value);
    else if (value) {
      textList.push(
        `${bold(`${label}:`)} ${value}`
      );
    }
  }
  return textList.join(LABEL_SPACING$1);
}
async function getTrickText(jsonFiles, trick = "") {
  const jsons = await Promise.all(jsonFiles.map((file) => loadTricksJson(file)));
  const trickTextList = [];
  for (const json of jsons) {
    if (trick) {
      trickTextList.push(
        generateTrickText(trick, json[trick], true)
      );
    } else {
      const generatedText = [];
      for (const [trickName, trickObj] of Object.entries(json)) {
        generatedText.push(
          generateTrickText(trickName, trickObj)
        );
      }
      trickTextList.push(generatedText.join(TRICK_SPACING));
    }
  }
  return trickTextList.join(CATEGORY_SPACING$1);
}
async function handler$2(message) {
  message = message.replace(regex$3, "").trim();
  message = removeBotUsername(message);
  const msg = message.toLowerCase();
  let jsonFiles;
  let trickName = "";
  let heading = "";
  if (!msg) {
    jsonFiles = ["fundamentals"];
    heading = "Fundamental tricks";
  } else {
    const tricksMapping = await loadTricksJson("tricks-mapping");
    const info = dictGet(tricksMapping, msg);
    if (!info)
      return [message, `No trick was found for '${message}'.`];
    const [jsonFile, trick] = info;
    jsonFiles = [jsonFile];
    trickName = trick;
    if (trick) {
      heading = trickName;
    } else {
      heading = dictGet(TRICK_FILEPATH_MAP, jsonFile, ["Category not found", "Trick heading not found", null])[1];
    }
  }
  const trickText = await getTrickText(jsonFiles, trickName);
  return [heading, trickText];
}
const firstSentenceRegex = /^.*?(?:\.|$)/m;
function getCommandDict() {
  const commandDict = {
    "start": {
      explanation: "Starts the bot and displays a basic overview of what the bot does."
    },
    "help": {
      explanation: "Displays information about how to use the bot and its commands."
    },
    "terminology": {
      explanation: "Displays the common terms that are regularly used in inline skating. You can search for a term or display a category of terms with this command.",
      usage: "<category or term (optional)>",
      categories: [
        "all",
        "general terms",
        "styles of inline skate",
        "parts of an inline skate",
        "tricks"
      ]
    },
    "tricks": {
      explanation: "Displays information about inline skating tricks. You can choose to either display a specific category of tricks or search for a trick. The videos are ranked by their usefulness, so the most useful video is first and the least useful video is last.",
      usage: "<category or trick name (optional)>",
      categories: Object.values(TRICK_FILEPATH_MAP).map((info) => info[0])
    },
    "trick_lists": {
      explanation: "Provides a list of trick lists for you to peruse."
    },
    "rulebooks": {
      explanation: "Provides a list of official rulebooks for you to peruse."
    },
    "buying_guides": {
      explanation: "Provides a list of buying guides for you to peruse."
    },
    "maintenance_guides": {
      explanation: "Provides a list of maintenance guides for you to peruse."
    },
    "glossaries": {
      explanation: "Provides a list of glossaries for you to peruse."
    },
    "misc_resources": {
      explanation: "Provides a list of miscellaneous resources for you to peruse."
    },
    "skate_boot_types": {
      explanation: "Displays information about the different types of skate boots."
    },
    "skate_recs": {
      explanation: "Displays the recommended skates for beginners."
    },
    "discount_info": {
      explanation: "Displays information about the tertiary student discount. This discount is only available to tertiary students studying in Singapore."
    },
    "where_to_buy": {
      explanation: "Displays information about the places you can buy skates from. You can display a specific category of places, such as online-only stores.",
      usage: "<category (optional)>",
      categories: [
        "all",
        "local",
        "overseas",
        "online"
      ]
    },
    "where_to_rent": {
      explanation: "Displays information about the places where you can rent inline skates in Singapore."
    },
    "skate_parks": {
      explanation: "Displays information about skate parks in Singapore."
    },
    "skating_rinks": {
      explanation: "Displays information about skating rinks in Singapore."
    },
    "brands": {
      explanation: "Displays information about the brands related to inline skating. You can display a specific category of brands, such as brands that only sell wheels.",
      usage: "<category (optional)>",
      categories: [
        "all",
        ...Object.values(BRAND_CATEGORY).map(
          (category) => category.replace(/[ _\-]brands?/g, "")
        )
      ]
    },
    "fr_differences": {
      explanation: "Displays information about the differences between the various FR skates."
    },
    "triskate_differences": {
      explanation: "Displays information about the differences between triskates and regular 4-wheeled inline skates."
    },
    "accessories": {
      explanation: "Displays information about the accessories that you can buy for inline skating."
    },
    "protective_gear": {
      explanation: "Displays information about the protective gear you can buy."
    },
    "clothing": {
      explanation: "Displays information about the clothing you can buy, which are mostly just socks."
    },
    "maintenance_items": {
      explanation: "Displays information about the maintenance items you might need to maintain your skates."
    },
    "poll_msg": {
      explanation: "Gets the bot to send a @countmeinbot style poll message but with only one option called 'Coming'. You can also add the bot as an admin to your group to have the bot automatically delete the messages you sent to create the poll.",
      usage: "<poll message>"
    },
    "trg_msg": {
      explanation: `Gets the bot to send the training message that has been set up for your group. You will have to add the bot to your group and have the developer set up a training message for you. Use the /trg_msg_help command to see how to use the /trg_msg command. It functions the same way as the /poll_msg command if you have not set up a training message. Also, you can add the bot as an admin to your group to have the bot automatically delete the messages you sent to create the poll. If you want to set up a training message, please contact ${DEV}.`
    },
    "trg_msg_help": {
      explanation: "Displays how to use the /trg_msg command if you have set it up."
    },
    "qr_code": {
      explanation: "Gets the bot to turn your text into a QR code.",
      usage: "<text that you want to convert to a QR code>"
    },
    "get_chat_id": {
      explanation: "Gets the bot to send the chat ID of the chat. This command is just here to facilitate the creation of the training message for the /trg_msg command."
    },
    "source": {
      explanation: "View the source code for the bot. Under the GNU Affero General Public License (AGPL) Version 3, a developer is required to make the source code available to all users who use his application."
    }
  };
  return commandDict;
}
function getCommandHelpMsg() {
  const commandDict = getCommandDict();
  const commandHelpList = [];
  for (const [command, info] of Object.entries(commandDict)) {
    const infoList = [];
    infoList.push(`/${command}`);
    for (const [label, value] of Object.entries(info)) {
      if (label === "usage") {
        infoList.push(`${bold(
          titlecase(`${label}:`)
        )} ${monospace(
          `/${command} ${stripHtml(value)}`
        )}`);
      } else if (label === "categories") {
        infoList.push(`${bold(
          `Available ${label}:`
        )}
${value.map(
          (category) => `- ${monospace(`/${command} ${category}`)}`
        ).join("\n")}`);
      } else {
        infoList.push(value);
      }
    }
    commandHelpList.push(infoList.join("\n"));
  }
  return commandHelpList.join("\n\n");
}
function generateMsg$2() {
  const preface = `Hi, this bot aims to be the one-stop shop for all things inline skating! This bot is created with Singaporean skaters in mind, so all prices are in SGD and 'local' refers to Singapore. The skate recommendations may include skates exclusive to Singapore and the student discount is only relevant to tertiary students studying in Singapore.

Here is how you can use the bot:`;
  const commandHelpMsg = `${bold("Bot Commands")}${SPACING}${getCommandHelpMsg()}`;
  const otherBotFeaturesHelpMsg = `
  
${bold("Other Features")}
  
The bot is also capable of deleting the messages that are sent when a someone joins or leaves the group. All you need to do is to make the bot an admin and give it the permission to delete messages.

`.trim();
  const inlineModeHelp = `

${bold("Inline Mode")}


To use the bot's inline mode, first type the bot's username, @inlineskatebot, then type the command that you want and any other arguments that the command takes. The bot will then respond with the result of that command.
Here's an example: ${monospace("@inlineskatebot /terminology general terms")}

All commands are available in inline mode, except for /start, /help, /poll_msg, /trg_msg, /trg_msg_help and /source.

Do note that if you use the /qr_code command in inline mode, the developer will be able to see the QR code you have generated. If you are not comfortable with this, then please do not use the /qr_code command in inline mode. This is due to Telegram's Bot API not supporting the ability to answer inline queries with images created in memory. Instead, Telegram only allows images that have been uploaded online through a link, or images that have been uploaded to Telegram through an image ID. Thus, the QR code is first sent to a private group chat on Telegram, where the bot and the developer are the only members, before the QR code is sent to the user. Once again, if you are not comfortable with this, please do not use the /qr_code command in inline mode.

All other commands are completely anonymous, even when used in inline mode. You can verify this by using the /source command to view the source code of the bot.

  `.trim();
  return [preface, commandHelpMsg, otherBotFeaturesHelpMsg, inlineModeHelp];
}
function generateCommandMsg() {
  const commandDict = getCommandDict();
  const msgList = [];
  for (const [command, info] of Object.entries(commandDict)) {
    msgList.push(`${command} - ${info.explanation.match(firstSentenceRegex)[0]}`);
  }
  return msgList.join("\n");
}
var ProductTypes = /* @__PURE__ */ ((ProductTypes2) => {
  ProductTypes2["Accessories"] = "accessories";
  ProductTypes2["ProtectiveGear"] = "protective-gear";
  ProductTypes2["Clothing"] = "clothing";
  ProductTypes2["MaintenanceItems"] = "maintenance-items";
  return ProductTypes2;
})(ProductTypes || {});
const accessoriesRegex = /^\/?\bacc(?:s|essor(?:y|ies))?\b/i;
const protectiveGearRegex = /^\/?\b(?:protect(?:ion|ive)?[ _\-]?(?:gears?)?|guards?|helmets?)\b/i;
const clothingRegex = /^\/?\b(?:(?:apparel|cloth(?:ing)?)[ _\-]?(?:items?)?|socks?)\b/i;
const maintenanceItemsRegex = /^\/?\bmain(?:tenance|tain(?:[ea]nce|ing)?)[ _\-]?items?\b/i;
async function generateProductsText(productType) {
  const data = await loadJsonData(`/products/${productType}.json`);
  const finalMsgList = [];
  const title = getTitleFromFilename(productType);
  finalMsgList.push(`${bold(title)}
`);
  for (const [item, info] of Object.entries(data)) {
    const text = `${hyperlink(item, info.link)} - ${info.price}`;
    finalMsgList.push(text);
  }
  return finalMsgList.join("\n\n");
}
const qrCodeRegex = /^\/?\bqr[ _\-]?(?:code)?s?\b/i;
async function handler$1(message) {
  message = message.replace(qrCodeRegex, "").trim();
  if (!message)
    return [message, ""];
  const qrCodeLib = await import("qrcode");
  const qrCode = await qrCodeLib.toDataURL(message);
  const qrCodeDataUrl = qrCode.replace(/^data:image\/\w+;base64,/, "").trim();
  return [message, qrCodeDataUrl];
}
const regex$2 = /^\/?\b(?:(?:skates?)?[ _\-]?recc?(?:s|omm?endations?)?|(?:recc?(?:s|ed)?|recc?omm?end(?:ed)?)[ _\-]?(?:skates?)?)\b/i;
async function generateMsg$1() {
  const data = await loadSkateRecs();
  const preface = `${bold("Skate recommendations")}${SPACING}${data.preface}`;
  const recsList = [];
  recsList.push(preface);
  for (const [style, [recommendations, otherRecs]] of Object.entries(data.recommendations)) {
    const styleRecsList = [];
    styleRecsList.push(`${bold(style)}
`);
    for (const [index, [skate, info]] of Object.entries(Object.entries(recommendations))) {
      styleRecsList.push(`${bold(
        `${parseInt(index) + 1}. ${hyperlink(skate, info.link)}`
      )}
${bold("Price:")} ${info.price}
${info.reason}`);
    }
    const otherRecsList = [];
    otherRecsList.push(bold("Other recommendations"));
    for (const [index, [otherRec, link]] of Object.entries(Object.entries(otherRecs))) {
      otherRecsList.push(`${parseInt(index) + 1}. ${hyperlink(otherRec, link)}`);
    }
    recsList.push(`${styleRecsList.join("\n\n")}${SPACING}${otherRecsList.join("\n")}`);
  }
  return recsList;
}
const regex$1 = /^\/?\bterm(?:s|inolog(?:y|ies))?\b/i;
function generateTerminologyText(data, separator = ": ") {
  if (typeof data === "string")
    return data;
  const strList = [];
  function iterateDict(data2) {
    if (typeof data2 === "string")
      return strList.push(data2);
    for (const [key, value] of Object.entries(data2)) {
      if (isObject(value)) {
        strList.push(
          bold(
            italicise(
              convertToLabel(key)
            )
          )
        );
        iterateDict(value);
      } else {
        const label = bold(`${convertToLabel(key)}${separator}`);
        strList.push(`${label}${value}`);
      }
    }
    strList.push("\n\n");
  }
  iterateDict(data);
  return strList.join("\n\n");
}
async function handler(message) {
  message = message.replace(regex$1, "").trim();
  message = removeBotUsername(message);
  const msg = message.toLowerCase();
  const terminology = await loadTerminology();
  let data = null;
  let term = "";
  if (!msg) {
    term = "general terms";
    data = dictGet(terminology, term);
  } else if (msg === "all") {
    term = "all terms";
    data = terminology;
  } else {
    const terminologyTerms = await loadJsonData("terminology/terminology-terms");
    term = dictGet(terminologyTerms, msg, msg);
    data = dictGetSearch(terminology, term);
  }
  term = convertToLabel(term);
  if (data == null)
    return [message, `No definition was found for '${message}'.`];
  else if (typeof data === "string")
    return [term, data];
  else {
    return [term, generateTerminologyText(data)];
  }
}
const regex = /^\/?\b(?:tri[ _\-]?skates?[ _\-]?(?:diff?(?:erences?)?)?|3[ _\-]?vs[ _\-]?4[ _\-]?(?:wheels?)?|wheels?[ _\-]?compar(?:e|ison)s?)\b/i;
async function generateMsg() {
  const data = await loadJsonData("differences/triskate-diff");
  const msgList = [];
  msgList.push(bold("Differences between triskates and regular skates"));
  for (const [label, info] of Object.entries(data)) {
    const infoList = [];
    if (Array.isArray(info)) {
      infoList.push(
        bold(`${titlecase(label)} of triskates:`)
      );
      for (const infoItem of info) {
        infoList.push(`- ${infoItem}`);
      }
    } else {
      infoList.push(
        bold(`Relevant ${label}`)
      );
      for (const [index, [key, value]] of Object.entries(Object.entries(info))) {
        infoList.push(`${parseInt(index) + 1}. ${hyperlink(key, value)}`);
      }
    }
    msgList.push(infoList.join("\n"));
  }
  return msgList.join(SPACING);
}
const bot = new Telegraf(process.env.BOT_TOKEN);
bot.use(session());
bot.use(stage.middleware());
bot.command("start", async (ctx) => {
  const startMsg = `Hello! This bot aims to be the ultimate resource for all things inline skating!

${hyperlink("Here", getBasePath())} is the bot's website if you prefer to view the information presented here on a website.

If you find that the resource is not ultimate enough, or that the information presented is wrong, inaccurate or outdated, please contact ${DEV}. Please contact ${DEV} as well if you have any feedback, suggestions, enquiries or bug reports.

Use the /help command to see what the bot can do.`;
  await ctxReply(ctx, startMsg);
});
bot.command("help", async (ctx) => {
  const sections = generateMsg$2();
  const helpMsg = sections.join("\n\n\n");
  await ctxReply(ctx, helpMsg);
});
bot.command([
  "terminology",
  "term",
  "terms"
], async (ctx) => {
  const msgText = ctx.message.text;
  const [term, definition] = await handler(msgText);
  let reply;
  if (definition.startsWith("No definition was found for")) {
    reply = definition;
  } else
    reply = `${bold(term)}${SPACING}${definition}`;
  await ctxReply(ctx, reply);
});
bot.inlineQuery(regex$1, async (ctx) => {
  const queryText = ctx.inlineQuery.query;
  const [term, definition] = await handler(queryText);
  await answerInlineQuery(ctx, definition, term);
});
bot.command([
  "tricks",
  "trick"
], async (ctx) => {
  const [trickName, trickText] = await handler$2(ctx.message.text);
  const reply = `${bold(trickName)}${SPACING}${trickText}`;
  await ctxReply(ctx, reply);
});
bot.inlineQuery(regex$3, async (ctx) => {
  const [trick, reply] = await handler$2(ctx.inlineQuery.query);
  await answerInlineQuery(ctx, reply, trick);
});
bot.command([
  "trick_lists",
  "trick_list",
  "tricklists",
  "tricklist"
], async (ctx) => {
  await messageAndFileCommandHandler(ctx, () => generateListsText(
    Lists.TrickLists
  ));
});
bot.inlineQuery(trickListsRegex, async (ctx) => {
  await messageAndFileInlineQueryHandler(ctx, () => generateListsText(
    Lists.TrickLists
  ));
});
bot.command([
  "rulebooks",
  "rulebook",
  "rule_books",
  "rule_book"
], async (ctx) => {
  await messageAndFileCommandHandler(ctx, () => generateListsText(
    Lists.Rulebooks
  ));
});
bot.inlineQuery(rulebooksRegex, async (ctx) => {
  await messageAndFileInlineQueryHandler(ctx, () => generateListsText(
    Lists.Rulebooks
  ));
});
bot.command([
  "buying_guides",
  "buying_guide",
  "buyingguides",
  "buyingguide"
], async (ctx) => {
  await messageAndFileCommandHandler(ctx, () => generateListsText(
    Lists.BuyingGuides
  ));
});
bot.inlineQuery(buyingGuidesRegex, async (ctx) => {
  await messageAndFileInlineQueryHandler(ctx, () => generateListsText(
    Lists.BuyingGuides
  ));
});
bot.command([
  "maintenance_guides",
  "maintenance_guide",
  "maintain_guides",
  "maintain_guide",
  "maintaining_guides",
  "maintaining_guide",
  "maintenanceguides",
  "maintenanceguide",
  "maintainguides",
  "maintainguide",
  "maintainingguides",
  "maintainingguide"
], async (ctx) => {
  await messageAndFileCommandHandler(ctx, () => generateListsText(
    Lists.MaintenanceGuides
  ));
});
bot.inlineQuery(maintenanceGuidesRegex, async (ctx) => {
  await messageAndFileInlineQueryHandler(ctx, () => generateListsText(
    Lists.MaintenanceGuides
  ));
});
bot.command([
  "glossaries",
  "glossary",
  "dictionaries",
  "dictionary"
], async (ctx) => {
  await messageAndFileCommandHandler(ctx, () => generateListsText(
    Lists.Glossaries
  ));
});
bot.inlineQuery(glossariesRegex, async (ctx) => {
  await messageAndFileInlineQueryHandler(ctx, () => generateListsText(
    Lists.Glossaries
  ));
});
bot.command([
  "misc_resources",
  "misc_resource",
  "miscresources",
  "miscresource",
  "miscellaneous_resources",
  "miscellaneous_resource",
  "miscellaneousresources",
  "miscellaneousresource"
], async (ctx) => {
  await messageAndFileCommandHandler(ctx, () => generateListsText(
    Lists.MiscResources
  ));
});
bot.inlineQuery(miscResourcesRegex, async (ctx) => {
  await messageAndFileInlineQueryHandler(ctx, () => generateListsText(
    Lists.MiscResources
  ));
});
bot.command([
  "skate_boot_types",
  "skate_boot_type",
  "skateboot_type",
  "skateboot_types",
  "boot_type",
  "boot_types",
  "skateboottypes",
  "skateboottype",
  "skateboottype",
  "skateboottypes",
  "boottype",
  "boottypes"
], async (ctx) => {
  const msg = await generateMsg$4();
  await ctxReply(ctx, msg);
});
bot.inlineQuery(regex$7, async (ctx) => {
  const msg = await generateMsg$4();
  await answerInlineQuery(ctx, msg);
});
bot.command([
  "skate_recs",
  "skate_rec",
  "skate_recommendation",
  "skate_recommendations",
  "skaterec",
  "skaterecs",
  "skaterecommendation",
  "skaterecommendations"
], async (ctx) => {
  const skateRecs = await generateMsg$1();
  for (const skateRec of skateRecs)
    await ctxReply(ctx, skateRec);
});
bot.inlineQuery(regex$2, async (ctx) => {
  const skateRecs = await generateMsg$1();
  await answerInlineQuery(ctx, skateRecs.slice(1), "Skate recommendations");
});
bot.command([
  "discount_info",
  "discountinfo",
  "discount"
], async (ctx) => {
  await messageAndFileCommandHandler(ctx, generateDiscountInfo);
});
bot.inlineQuery(regex$5, async (ctx) => {
  await messageAndFileInlineQueryHandler(ctx, generateDiscountInfo, true, "\n\n\n\n\nLinks to the PDF catalogues:\n\n\n");
});
bot.command([
  "where_to_buy",
  "wheretobuy"
], async (ctx) => {
  let reply = await whereToBuyHandler(ctx.message.text);
  reply = `${bold("Inline skate retailers")}


${reply}`;
  await ctxReply(ctx, reply);
});
bot.inlineQuery(whereToBuyRegex, async (ctx) => {
  const reply = await whereToBuyHandler(ctx.inlineQuery.query);
  await answerInlineQuery(ctx, reply, "Inline skate retailers");
});
bot.command([
  "where_to_rent",
  "wheretorent"
], async (ctx) => {
  const reply = await uncategorisedPlacesHandler(
    PLACES.SingaporeRentalShops
  );
  await ctxReply(ctx, reply);
});
bot.inlineQuery(whereToRentRegex, async (ctx) => {
  const reply = await uncategorisedPlacesHandler(
    PLACES.SingaporeRentalShops
  );
  await answerInlineQuery(ctx, reply);
});
bot.command([
  "skate_parks",
  "skate_park",
  "skateparks",
  "skatepark"
], async (ctx) => {
  const reply = await uncategorisedPlacesHandler(
    PLACES.SkateParks
  );
  await ctxReply(ctx, reply);
});
bot.inlineQuery(skateParksRegex, async (ctx) => {
  const reply = await uncategorisedPlacesHandler(
    PLACES.SkateParks
  );
  await answerInlineQuery(ctx, reply);
});
bot.command([
  "skating_rinks",
  "skating_rink",
  "rinks",
  "rink"
], async (ctx) => {
  const reply = await uncategorisedPlacesHandler(
    PLACES.SkatingRinks
  );
  await ctxReply(ctx, reply);
});
bot.inlineQuery(skatingRinksRegex, async (ctx) => {
  const reply = await uncategorisedPlacesHandler(
    PLACES.SkatingRinks
  );
  await answerInlineQuery(ctx, reply);
});
bot.command([
  "brands",
  "brand"
], async (ctx) => {
  const reply = await handler$3(ctx.message.text);
  await ctxReply(ctx, reply);
});
bot.inlineQuery(regex$6, async (ctx) => {
  const reply = await handler$3(ctx.inlineQuery.query);
  await answerInlineQuery(ctx, reply, "Brands");
});
bot.command([
  "fr_differences",
  "fr_difference",
  "fr_diff",
  "frdifferences",
  "frdifference",
  "frdiff"
], async (ctx) => {
  const msg = await generateMsg$3();
  await ctxReply(ctx, msg);
});
bot.inlineQuery(regex$4, async (ctx) => {
  const msg = await generateMsg$3();
  await answerInlineQuery(ctx, msg);
});
bot.command([
  "triskate_differences",
  "triskate_difference",
  "triskate_diff",
  "triskatedifferences",
  "triskatedifference",
  "triskatediff",
  "triskates",
  "triskate"
], async (ctx) => {
  const msg = await generateMsg();
  await ctxReply(ctx, msg);
});
bot.inlineQuery(regex, async (ctx) => {
  const msg = await generateMsg();
  await answerInlineQuery(ctx, msg);
});
bot.command([
  "accessories",
  "accessory",
  "accs",
  "acc"
], async (ctx) => {
  const accessoriesText = await generateProductsText(ProductTypes.Accessories);
  await ctxReply(ctx, accessoriesText);
});
bot.inlineQuery(accessoriesRegex, async (ctx) => {
  const accessoriesText = await generateProductsText(ProductTypes.Accessories);
  await answerInlineQuery(ctx, accessoriesText);
});
bot.command([
  "protective_gear",
  "protectivegear",
  "protection",
  "protect"
], async (ctx) => {
  const protectiveGearText = await generateProductsText(ProductTypes.ProtectiveGear);
  await ctxReply(ctx, protectiveGearText);
});
bot.inlineQuery(protectiveGearRegex, async (ctx) => {
  const protectiveGearText = await generateProductsText(ProductTypes.ProtectiveGear);
  await answerInlineQuery(ctx, protectiveGearText);
});
bot.command([
  "clothing",
  "clothing_item",
  "clothing_items",
  "clothingitem",
  "clothingitems",
  "apparel",
  "socks"
], async (ctx) => {
  const clothingText = await generateProductsText(ProductTypes.Clothing);
  await ctxReply(ctx, clothingText);
});
bot.inlineQuery(clothingRegex, async (ctx) => {
  const clothingText = await generateProductsText(ProductTypes.Clothing);
  await answerInlineQuery(ctx, clothingText);
});
bot.command([
  "maintenance_items",
  "maintenance_item",
  "maintainance_items",
  "maintainance_item",
  "maintainence_items",
  "maintainence_item",
  "maintenanceitems",
  "maintenanceitem",
  "maintainanceitems",
  "maintainanceitem",
  "maintainenceitems",
  "maintainenceitem"
], async (ctx) => {
  const maintenanceItemsText = await generateProductsText(ProductTypes.MaintenanceItems);
  await ctxReply(ctx, maintenanceItemsText);
});
bot.inlineQuery(maintenanceItemsRegex, async (ctx) => {
  const maintenanceItemsText = await generateProductsText(ProductTypes.MaintenanceItems);
  await answerInlineQuery(ctx, maintenanceItemsText);
});
bot.command([
  "poll_msg",
  "pollmsg"
], async (ctx) => {
  if (!await isAdmin())
    return;
  let messageText = ctx.message.text;
  const pollOptions = DEFAULT_POLL_OPTIONS;
  const { message, callback } = generatePollMessage(messageText, pollOptions);
  if (!message) {
    const wrappedCallback = wrapCallbackWithMessageDeleter(callback);
    return await ctx.scene.enter("validate", { message: "Please enter the poll message.", callback: wrappedCallback, messagesToDelete: [] });
  }
  await callback(ctx, message);
  await deleteMessages(ctx, ctx.message.message_id);
});
bot.command([
  "trg_msg",
  "trgmsg"
], async (ctx) => {
  if (!await isAdmin())
    return;
  process.env.TZ = "Asia/Singapore";
  let msg = ctx.message.text;
  msg = msg.replace(regex$8, "").trim();
  msg = removeBotUsername(msg);
  await handler$4(ctx, msg);
});
bot.on("callback_query", async (ctx) => {
  const callbackQuery = ctx.callbackQuery;
  const pollOption = callbackQuery.data;
  const message = callbackQuery.message;
  const messageText = message.text;
  if (messageText.indexOf(pollOption) === -1)
    return await ctx.answerCbQuery(`The option "${pollOption}" doesn't exist on the poll you are responding to.`);
  const pollOptions = getPollOptions(message.reply_markup.inline_keyboard);
  const pollMessage = getPollMessage(messageText, pollOptions);
  const name = getName(callbackQuery.from);
  const { reformedPollMessage, removed } = reformPollMessage(messageText, pollMessage, pollOption, pollOptions, name);
  await ctx.answerCbQuery(`Your name has been ${removed ? "removed from" : "added to"} '${pollOption}'!`);
  return await ctx.editMessageText(reformedPollMessage, {
    parse_mode: "HTML",
    reply_markup: {
      inline_keyboard: message.reply_markup.inline_keyboard
    }
  });
});
bot.command([
  "trg_msg_help",
  "trg_help",
  "msg_help",
  "trgmsghelp",
  "trghelp",
  "msghelp"
], async (ctx) => {
  const helpText = generateHelpText(ctx.chat.id);
  await ctxReply(ctx, helpText);
});
bot.command([
  "qr_code",
  "qrcode"
], async (ctx) => {
  const msgText = ctx.message.text;
  const [_, qrCodeDataURL] = await handler$1(msgText);
  if (qrCodeDataURL)
    return await ctx.replyWithPhoto({
      source: Buffer.from(qrCodeDataURL, "base64")
    });
  async function callback(ctx2, input) {
    const [_2, qrCodeDataURL2] = await handler$1(input);
    return await ctx2.replyWithPhoto({
      source: Buffer.from(qrCodeDataURL2, "base64")
    });
  }
  await ctx.scene.enter("validate", { message: "Please enter the text you want to convert to a QR code.", callback });
});
bot.inlineQuery(qrCodeRegex, async (ctx) => {
  const queryText = ctx.inlineQuery.query;
  const [message, qrCodeDataURL] = await handler$1(queryText);
  if (!qrCodeDataURL)
    return;
  const photoMessage = await ctx.telegram.sendPhoto(process.env.QR_CODE_GROUP_ID, { source: Buffer.from(qrCodeDataURL, "base64") }, { caption: message });
  const qrCode = photoMessage.photo.pop();
  const qrCodeFileId = qrCode.file_id;
  const queryReply = {
    type: "photo",
    id: "QR Code",
    photo_file_id: qrCodeFileId,
    caption: message
  };
  await ctx.answerInlineQuery([queryReply], { cache_time: 2 ** 31 - 1 });
});
bot.command([
  "get_chat_id",
  "get_id",
  "chat_id",
  "getchatid",
  "getid",
  "chatid"
], async (ctx) => {
  await ctxReply(ctx, "The chat ID of this chat is:");
  const chatID = ctx.message.chat.id;
  await ctxReply(ctx, `${chatID}`);
});
bot.command([
  "source",
  "src"
], async (ctx) => {
  const sources = [
    hyperlink("Codeberg", "https://codeberg.org/Hanker/Inline-Skate-Info"),
    hyperlink("GitHub", "https://github.com/hankertrix/Inline-Skate-Info"),
    hyperlink("Replit", "https://replit.com/@hankertrix/Inline-Skate-Info?v=1")
  ];
  const msg = `View the source code of the bot on:

${sources.join("\n")}`;
  await ctxReply(ctx, msg);
});
bot.command([
  "commands",
  "command"
], async (ctx) => {
  if (ctx.message.chat.id != parseInt(process.env.DEV_ID))
    return;
  const msg = generateCommandMsg();
  await ctxReply(ctx, msg);
});
bot.on(filters.message("new_chat_members"), async (ctx) => {
  await deleteMessages(ctx, ctx.message.message_id);
});
bot.on(filters.message("left_chat_member"), async (ctx) => {
  await deleteMessages(ctx, ctx.message.message_id);
});
const POST = async function({ request, url }) {
  try {
    if (url.searchParams.get("setWebhook") === "true" && ENABLE_SETTING_WEBHOOK) {
      const webhookUrl = `${getBasePath()}/telegram-hook?secretHash=${process.env.SECRET_HASH}`;
      const isSet = await bot.telegram.setWebhook(webhookUrl);
      const message = isSet ? `Webhook URL has been set to ${webhookUrl}.` : "Failed to set the webhook url.";
      console.log(message);
    } else if (url.searchParams.get("secretHash") === process.env.SECRET_HASH) {
      const body = await request.json();
      await bot.handleUpdate(body);
    }
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.toString());
    } else
      console.error(error);
  }
  return new Response("200 OK", { status: 200, statusText: "OK" });
};
export {
  POST
};
