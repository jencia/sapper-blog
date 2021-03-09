<svelte:head>
  <title>诀死行者的博客 - 关于我</title>
</svelte:head>

<div class="container">
  {@html content.html}
</div>

<script>
  import content from './about.md'
</script>