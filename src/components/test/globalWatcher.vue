<template>
  <div>
    <span @click.stop="clickme">点击我</span>
    <div v-show="isShow">我出现了</div>
    <div class="block">
      <span class="demonstration">默认</span>
    </div>
  </div>
</template>
<script>
	export default{
    data(){
      return {
        isShow: false,
    }
    },
    mounted(){
      document.addEventListener('click',  this.hideOnClickDocument, false);
    },
    methods: {
      clickme(){
        this.isShow = true
      },
      hideOnClickDocument(e){
//      	if(this.contains(e.target)||this===e.target){
//      		return false
//        }
        this.isShow = false
      },
  },

  }
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
</style>
