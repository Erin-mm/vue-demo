<template>
  <div class="modify">
    <p>modify the username</p>
    <p>id: <span class="id">{{ user.id }}</span></p>
    <input type="text" v-model.trim="name">
    <router-link to="/user" tag="button">cancel</router-link>
    <button @click="onModify()" class="confirm">confirm</button>
  </div>
</template>
<script>
  import {mapGetters, mapActions} from 'vuex'
  export default{
    data(){
      return{
        name:''
      }
    },
    computed: {
      ...mapGetters({
        user: 'getUser'
      })
    },
    methods: {
      ...mapActions([
        'editUser'
      ]),
      onModify(){
        if (this.name) {
        	if(confirm(`确定把${this.user.name}修改为${this.name}?`)){
            let user = this.user
            let name = this.name
            this.editUser({
              user,
              name
            })
            this.$router.push('/user')
          }
        }else{
        	alert('请输入修改内容')
        }
      }
    },
    created() {
      let userId = this.$route.params.id;
      this.$store.dispatch('getUser', userId);

      if (!this.$store.state.currentUser) {
        this.$router.push('/user');
      }
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
  .modify {
    .id {
      color: red;
      font-weight: bold;
    }
    button.confirm {
      background: #ff8b0c;
    }
  }
</style>
