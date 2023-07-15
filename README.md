# [Inline Skate Info](https://inline-skate-info.netlify.app)

This project aims to be the ultimate resource for inline skating! It is built using [SvelteKit](https://kit.svelte.dev) and deployed to [Netlify](https://www.netlify.com). The project is entirely written in [TypeScript](https://www.typescriptlang.org), with the exception of HTML and CSS in HTML amd Svelte files of course. The website search is provided by [Pagefind](https://pagefind.app) and the [Telegram bot](https://t.me/inlineskatebot) portion of the project is made using [telegraf.js](https://telegraf.js.org).

You can view the resources using either the [Telegram bot](https://t.me/inlineskatebot) or the [website](https://inline-skate-info.netlify.app).

<br>

## [Telegram Bot](https://t.me/inlineskatebot)

To use the Telegram bot, simply search [@inlineskatebot](https://t.me/inlineskatebot) on Telegram or click [this link](https://t.me/inlineskatebot) and use the `/start` command to start the bot.

Use the `/help` command to see how to use the bot.

Below is a list of the available commands for the Telegram bot. Use the `/help` command when interacting with the Telegram bot to get more details about each command.

### List of bot commands

- `/start` - Starts the bot and displays a basic overview of what the bot does.
- `/help` - Displays information about how to use the bot and its commands.
- `/terminology` - Displays the common terms that are regularly used in inline skating.
- `/tricks` - Displays information about inline skating tricks.
- `/trick_lists` - Provides a list of trick lists for you to peruse.
- `/rulebooks` - Provides a list of official rulebooks for you to peruse.
- `/buying_guides` - Provides a list of buying guides for you to peruse.
- `/maintenance_guides` - Provides a list of maintenance guides for you to peruse.
- `/glossaries` - Provides a list of glossaries for you to peruse.
- `/misc_resources` - Provides a list of miscellaneous resources for you to peruse.
- `/skate_boot_types` - Displays information about the different types of skate boots.
- `/skate_recs` - Displays the recommended skates for beginners.
- `/discount_info` - Displays information about the tertiary student discount.
- `/where_to_buy` - Displays information about the places you can buy skates from.
- `/where_to_rent` - Displays information about the places where you can rent inline skates in Singapore.
- `/skate_parks` - Displays information about skate parks in Singapore.
- `/skating_rinks` - Displays information about skating rinks in Singapore.
- `/brands` - Displays information about the brands related to inline skating.
- `/fr_differences` - Displays information about the differences between the various FR skates.
- `/triskate_differences` - Displays information about the differences between triskates and regular 4-wheeled inline skates.
- `/accessories` - Displays information about the accessories that you can buy for inline skating.
- `/protective_gear` - Displays information about the protective gear you can buy.
- `/clothing` - Displays information about the clothing you can buy, which are mostly just socks.
- `/maintenance_items` - Displays information about the maintenance items you might need to maintain your skates.
- `/poll_msg` - Gets the bot to send a @countmeinbot style poll message but with only one option called 'Coming'.
- `/trg_msg` - Gets the bot to send the training message that has been set up for your group.
- `/trg_msg_help` - Displays how to use the /trg_msg command if you have set it up.
- `/qr_code` - Gets the bot to turn your text into a QR code.
- `/get_chat_id` - Gets the bot to send the chat ID of the chat.
- `/source` - View the source code for the bot.

<br>

## [Website](https://inline-skate-info.netlify.app)

Click [this link](https://inline-skate-info.netlify.app) to visit the website!

<br>

## Privacy

This project respects your privacy by collecting nearly no data about you. The website contains no ads, no trackers and no telemetry. It also doesn't use any cookies. The website only uses local storage to store your theme. You can verify this by auditing the source code.

The Telegram bot also doesn't collect any data about you except when you use the `/qr_code` command in inline mode. This is due to Telegram's Bot API not allowing the bot to send images stored in memory in inline mode. Telegram only allow bots to send an image that has either been uploaded to a website or has been sent in a Telegram chat previously. As such, the bot will send the generated QR code to a private Telegram group consisting of only the bot and the developer before sending the generated QR code to the chat in inline mode.

All this is to say that the developer will be able to see the QR code that you generated using the `/qr_code` command in inline mode. If you are uncomfortable with this, please do not use the `/qr_code` command in inline mode.

Other than the `/qr_code` command in inline mode, all other commands do not collect any information or send any data about you to anyone. Once again, you can verify this by looking through the source code. To reiterate once more, if you're uncomfortable with the developer being able to see the QR code generated by using the `/qr_code` command in inline mode, please do not use the `/qr_code` command in inline mode.

<br>

## License

This project is licensed under GNU Affero General Public License Version 3 (GNU AGPL v3). For the full license, look at the [LICENSE.txt](https://codeberg.org/Hanker/Inline-Skate-Info/src/branch/main/LICENSE.txt) file.

<br>

## Contributors

A massive thank you to Michelle for her help with the icons and her help with gathering all of the slalom trick videos. This project would have taken far, far longer to complete without her help. Thank you to Ron and Aden too for answering all of my questions regarding slides and slalom tricks respectively. Lastly, thank you to another Michelle for her input on the colours associated with inline skating, as the light and dark theme of the website is based on her colour suggestions.