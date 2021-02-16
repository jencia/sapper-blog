<div class="layout">
  <Header {segment}/>

  <main>
    <slot></slot>
  </main>

  <footer>
    &copy; 2020-2023 jswalk.com
    <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=35020602001857">
      <img src="logo-beian.png" alt="备案logo"/>
      闽公网安备 35020602001857号
    </a>
  </footer>
</div>

<script>
  import Header from '../components/Header.svelte';

  export let segment;
</script>

<style>
  .layout {
    display: flex;
    flex-direction: column;
    min-height: 100%;
    min-height: 100vh;
  }

  main {
    flex: 1;
    position: relative;
    margin: 0 auto;
    max-width: 1400px;
    background-color: white;
    padding: 1em 2em;
    box-sizing: border-box;
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  footer {
    color: #AAA;
    font-size: 1em;
    font-family: Rubik, sans-serif;
    margin: 1em auto;
    max-width: 1400px;
    padding: 1em 2em;
    text-align: center;
    width: 100%;
  }
  footer img {
    width: 16px;
    height: 16px;
    vertical-align: text-top;
  }
  footer a {
    text-decoration: none;
  }
</style>