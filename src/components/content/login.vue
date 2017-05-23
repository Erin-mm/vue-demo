<template>
  <div class="login">
    <p class="mention">没登录玩啥？</p>
    <form @submit.prevent="login">
      <label>
        <input type="text" v-model="userName" placeholder="please enter your e-mail">
      </label>
      <label>
        <input type="password" v-model="password" placeholder="please enter your password"><em>hint(123abc)</em>
      </label>
      <button type="submit">login</button>
      <p v-if="error" class="error">Bad login information !</p>
    </form>
  </div>
</template>
<script>
  import auth from '../../auth'
  export default{
    data() {
      return {
        userName: 'hello@erin.com',
        password: '',
        error: false,
        user: {
          name: 'Guys',
        }
      }
    },
    methods: {
      login(){
        auth.login(this.userName, this.password, loggedIn => {
          if (!loggedIn){
          this.error = true
        } else{
          let name = this.user.name
          this.$store.dispatch('changeUser', name)
          this.$router.replace(this.$route.query.redirect || '/home')
        }
      })
      }
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
  .mention {
    color: #444;
    font-size: 20px;
  }

  em {
    display: inline-block;
    margin-left: 5px;
    color: #aaa;
    font-size: 12px;
  }

  .error {
    color: red;
  }

</style>
