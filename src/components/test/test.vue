<template>
  <div class="test">
    <ul>
      <li><router-link :to="{name:'watchTest'}">watch</router-link></li>
      <li><router-link :to="{name:'jsLearning'}">jsLearning</router-link></li>
      <li><router-link :to="{name:'globalWatcher'}">全局监听方法</router-link></li>
      <li><router-link :to="{name:'regularExpression'}">正则表达式</router-link></li>
      <li><router-link :to="{name:'accordions'}">折叠面板</router-link></li>
    </ul>
    <router-view class="display-box"></router-view>
  </div>
</template>
<script>
	export default{

  }
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
  .test{
    ul{
      width:100px;
      float:left;
      padding-left:20px;
      li{
        a{
          color: #5c5c5c;
        }
      }
    }
    .display-box{
      float:left;
      margin-left:30px;
    }
  }

</style>
