<template>
  <div class="app">
    <navg></navg>
    <cnt></cnt>
  </div>
</template>
<script>
  import cnt from './components/cnt.vue'
  import navg from './components/navg.vue'
  export default{
    components: {
      cnt,
      navg
    }
  }
</script>
<style>
  body,html{
    height:100%;
  }
  div,p,ul,li{
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  ul,li{
    margin:0;
    list-style: none;
  }
  a{
    text-decoration: none;
  }
  .app{
    height:100%;
  }
</style>
