<!-- The footer for the website -->

<!-- The styles for the footer -->
<style>
  
  .footer {
    display: grid;
    align-items: center;
    grid-template-columns: 1fr 1fr 1fr;
    position: absolute;
    bottom: 0;
    width: 100vw;
    height: 3.5rem;
    font-family: Helvetica;
    padding: 5px 20px;
  }
  
  .symbol {
    display: inline-block;
    transform: scale(-1, 1);
  }
  
  .copyleft {
    font-size: 0.75rem;
    flex-direction: row;
    color: inherit;
    text-decoration: none;
  }

  .source-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .source {
    font-size: 11px;
    margin-bottom: 2px;
  }

  .icon-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .icon-wrapper img {
    width: 25px;
    height: 25px;
  }

  .telegram-bot-wrapper {
    justify-self: end;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5em;
    text-decoration: none;
    color: #229ED9;
  }

  .telegram-bot-wrapper:is(:link, :hover, :visited, :active) {
    color: #229ED9;
  }

  .telegram-bot-wrapper > img {
    width: 1.85em;
    height: 1.85em;
  }

</style>

<!-- The main HTML for the footer -->
<footer class="footer">
  <a href="https://github.com/hankertrix/Inline-Skate-Info/blob/main/LICENSE.txt" class="copyleft" title="Copyright notice and License" rel="noopener noreferrer">
    <div>
      Copyleft&nbsp;<span class="symbol">©</span>&nbsp;Hankertrix 2023.&nbsp;
      <div>All Wrongs Reserved.</div>
    </div>
  </a>
  <div class="source-wrapper">
    <a href="https://github.com/hankertrix/Inline-Skate-Info" target="_blank" class="source" title="View source code on GitHub" rel="noopener noreferrer">Source:</a>
    <div class="icon-wrapper">
      <a href="https://github.com/hankertrix/Inline-Skate-Info" target="_blank" title="View source code on Github" rel="noopener noreferrer">
        <img src="/images/GitHub-Invertocat-Logo.svg" alt="View source code on GitHub" />
      </a>
      <a href="https://replit.com/@hankertrix/Inline-Skate-Info?v=1" target="_blank" title="View source code on Replit" rel="noopener noreferrer">
        <img src="/images/Replit-Logo.svg" alt="View source code on Replit" />
      </a>
    </div>
  </div>
  <a href="https://t.me/inlineskatebot" target="_blank" rel="noopener noreferrer" title="Chat with the Telegram bot" class="telegram-bot-wrapper">
    <img src="/images/Telegram-Logo.svg" alt="Telegram Logo" />
    <div>Telegram Bot</div>
  </a>
</footer>