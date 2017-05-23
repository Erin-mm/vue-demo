<template>
  <div class="create">
    <p>please type the username,then press the 'enter'</p>
    <input type="text" @keyup.enter="onCreate" v-model.trim="name">
  </div>
</template>
<script>
  import {mapActions} from 'vuex'
  export default{
    data(){
      return {
        name: ''
      }
    },
    methods: {
      ...mapActions([
        'addUser'
      ]),
      onCreate(){
        if (this.name) {
          let users = this.$store.state.users
          console.log(users.length)
          let userId = ''
          if (users.length == 0) {
            userId = 1
          } else {
            userId = users[users.length - 1].id + 1 //找到最后一个用户id+1
          }
          this.addUser({
            id: userId,
            name: this.name
          })
          this.name = ''
          this.$router.push('/user')
        }

      }
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
</style>
