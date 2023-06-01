<!-- The footer for the website -->

<!-- The styles for the footer -->
<style>
  
  .footer {
    display: grid;
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
  
</style>

<!-- The main HTML for the footer -->
<footer class="footer">
  <a href="https://github.com/hankertrix/Inline-Skate-Info/LICENSE.txt" class="copyleft" title="Copyright notice and License" rel="noopener noreferrer">
    <div>
      Copyleft&nbsp;<span class="symbol">©</span>&nbsp;Hankertrix 2023.&nbsp;
      <div>All Wrongs Reserved.</div>
    </div>
  </a>
</footer>