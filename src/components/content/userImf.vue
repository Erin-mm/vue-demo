<template>
  <div class="user-imf">
    <ul>
      <li class="title"><em>id</em><span>name</span></li>
      <li v-for="user in users">
        <em>{{user.id}}</em>
        <span>{{user.name}}</span>
        <i class="delete" @click="onDelete(user)">delete</i>
        <router-link class="modify" @click="onModify(user)" :to="'/user/modify/' + user.id" tag="i">modify</router-link>
      </li>
    </ul>
    <router-link to="/user/create" tag="span" class="add">+ add a new user</router-link>
  </div>
</template>
<script>
  import {mapGetters, mapActions} from 'vuex'
  export default{
    computed: {
      ...mapGetters({
        users: 'users'
      })
    },
    created() {
      if (this.$store.state.users.length) {
        this.users = this.$store.state.users;
      } else {
        this.$store.dispatch('getUsers')
      }
    },
    methods: {
      ...mapActions([
        'deleteUser'
      ]),
      onDelete(user){
        if (confirm(`确定删除 ${user.name}?`)) {
          this.deleteUser(user)

        }
      }
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
  .user-imf {
    .add{
      display: inline-block;
      margin-top: 0;
      color: cornflowerblue;
      cursor: pointer;
      width:auto;
      margin-top:20px;
    }
    ul {
      padding: 0;
      margin: 0;
    }
    li {
      padding: 2px 0;
      list-style: none;
      margin-right: 40px;
    }
    em {
      display: inline-block;
      color: #666;
      font-size: 16px;
      font-style: normal;
      margin-right: 10px;
    }
    span {
      display: inline-block;
      width: 100px;
      text-align: left;
      color: #aaa;
    }
    .delete, .modify {
      display: inline-block;
      background: #ff5644;
      margin-left: 10px;
      color: #FFFFFF;
      font-size: 12px;
      font-style: normal;
      padding: 1px 2px;
      -webkit-border-radius: 3px;
      -moz-border-radius: 3px;
      border-radius: 3px;
      cursor: pointer;
    }
    .modify {
      background: #b444ff;
    }
    .title{
      em,span{
        color: #666;
        font-weight:bold;
      }
    }
  }
</style>
