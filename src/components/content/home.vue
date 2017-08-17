<template>
  <div class="home">
    快告诉我你看到了什么！没错你已经成为宇宙中第1.23646*10^10000个登录进来的人
    是不是很激动！是不是很荣幸！尽情的欢呼与雀跃吧！
    <div class="test-btn"><router-link :to="{name:'test'}">这里是测试入口</router-link></div>
  </div>
</template>
<script>
  export default{}
</script>
<style lang="scss" rel="stylesheet/scss" scoped="">
  .home {
    width: 300px;
    color: #666;
    .test-btn{
      margin-top:20px;
      a{
        color: #3c8ced;
        text-decoration: none;
      }
    }
  }
</style>
