<!-- The footer for the website -->

<!-- The main HTML for the footer -->
<footer class="footer">
  <a
    class="copyleft"
    href="https://codeberg.org/Hanker/Inline-Skate-Info/src/branch/main/LICENCE.txt"
    target="_blank"
    title="Copyright notice and licence"
    rel="noopener noreferrer"
  >
    <div class="text">
      Copyleft&nbsp;<span class="symbol">©</span>&#32;2025 Hankertrix.
      <div class="rights-notice">All Wrongs Reserved.</div>
    </div>
  </a>
  <div class="source-wrapper">
    <a
      class="source"
      href="https://codeberg.org/Hanker/Inline-Skate-Info"
      target="_blank"
      title="View the source code on Codeberg"
      rel="noopener noreferrer">Source:</a
    >
    <div class="icon-wrapper">
      <a
        class="codeberg-logo"
        href="https://codeberg.org/Hanker/Inline-Skate-Info"
        target="_blank"
        title="View the source code on Codeberg"
        rel="noopener noreferrer"
      >
        <img
          src="/images/codeberg-logo.svg"
          alt="View the source code on Codeberg"
        />
      </a>
      <a
        class="github-logo"
        href="https://github.com/hankertrix/Inline-Skate-Info"
        target="_blank"
        title="View the source code on GitHub"
        rel="noopener noreferrer"
      >
        <img
          src="/images/github-invertocat-logo.svg"
          alt="View the source code on GitHub"
        />
      </a>
    </div>
  </div>
  <a
    href="https://t.me/inlineskatebot"
    target="_blank"
    rel="noopener noreferrer"
    title="Chat with the Telegram bot"
    class="telegram-bot-wrapper"
  >
    <img src="/images/telegram-logo.svg" alt="Telegram Logo" />
    <div><b>Telegram Bot</b></div>
  </a>
</footer>

<!-- The styles for the footer -->
<style>
  .footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: var(--footer-height);
    display: grid;
    align-items: center;
    grid-template-columns: repeat(3, 1fr);
    font-family: Helvetica;
    padding: 5px 20px;
  }

  .symbol {
    display: inline-block;
    transform: scale(-1, 1);
  }

  .copyleft {
    font-size: 0.75rem;
    width: fit-content;
    text-decoration: none;
  }

  .source-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .source {
    font-size: 11px;
    margin-bottom: 2px;
  }

  .icon-wrapper {
    --icon-size: 25px;

    display: flex;
    flex-direction: row;
    gap: 4px;
  }

  .icon-wrapper img {
    width: var(--icon-size);
    height: var(--icon-size);
  }

  .telegram-bot-wrapper {
    justify-self: end;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5em;
    text-decoration: none;
    text-align: center;
    color: #229ed9;
  }

  .telegram-bot-wrapper > img {
    width: 1.85em;
    height: 1.85em;
  }

  /* Styles for mobile devices */
  @media only screen and (max-width: 700px) {
    .footer {
      padding: 5px 10px;
    }
  }

  @media only screen and (max-width: 370px) {
    .rights-notice {
      display: none;
    }
  }
</style>
