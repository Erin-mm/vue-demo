<template>
  <div class="app">
    <div ref="msgDiv">{{msg}}</div>
    <div v-if="msg1">Message got outside $nextTick: {{msg1}}</div>
    <div v-if="msg2">Message got inside $nextTick: {{msg2}}</div>
    <div v-if="msg3">Message got outside $nextTick: {{msg3}}</div>
    <span @click="changeMsg">
      Change the Message
    </span>
  </div>
</template>
<script>
  var name = "The Window";
  var object = {
    name : "My Object",
    getNameFunc : function(){
    	var that = this
      return function(){
        return that.name;
      };
    }
  };
  alert(object.getNameFunc()());

  export default{
  	data(){
  		return{
        msg: 'Hello Vue.',
        msg1: '',
        msg2: '',
        msg3: ''
      }
    },
    methods:{
      changeMsg() {
        this.msg = "Hello world."
        this.msg1 = this.$refs.msgDiv.innerHTML
        this.$nextTick(() => {
          this.msg2 = this.$refs.msgDiv.innerHTML
        })
        this.msg3 = this.$refs.msgDiv.innerHTML
      }
    }
  }
</script>
