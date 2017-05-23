<template>
  <div class="nav">
    <p>hello <span>{{this.$store.state.name}}</span> !</p>
    <ul>
      <router-link tag="li" to="/home" active-class="active">首页</router-link>
      <router-link tag="li" to="/user" active-class="active">用户列表</router-link>
    </ul>
    <div class="quit" @click="quit">退出</div>
  </div>
</template>
<script>
  import auth from '../auth'
  //  import api from '../config/api'
  export default{
    name: 'navg',
    methods: {
      quit(){
        let name = 'world'
        auth.logout()
        this.$store.dispatch('changeUser', name)
        this.$router.push('/login')
      }
    }
  }
</script>
<style>
  .nav {
    float: left;
    background: #40aaff;
    height: 200px;
    width: 120px;
    color: #ffffff;
  }

  .nav p {
    margin-top:10px;
    text-align: center;
  }

  .nav ul {
    padding: 0;
  }

  .nav li {
    list-style: none;
    padding: 10px;
    cursor: pointer;
  }

  .active {
    background: #1e50a2;
  }

  .quit {
    cursor: pointer;
    color: #FFFFFF;
    padding: 10px;
    text-decoration: none;
  }

  .quit:hover {
    color: #8c77f8;
  }
</style>
