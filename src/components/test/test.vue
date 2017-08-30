<template>
  <div class="test">
    <ul>
      <li><router-link :to="{name:'watchTest'}">watch</router-link></li>
      <li><router-link :to="{name:'globalWatcher'}">全局监听方法</router-link></li>
    </ul>
    <router-view></router-view>
  </div>
</template>
<script>
	export default{

  }
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
  .test{
    ul{
      li{
        a{
          color: #5c5c5c;
        }
      }
    }
  }

</style>
