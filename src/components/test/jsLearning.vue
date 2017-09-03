<template>
<div>
{{st('1')}}
</div>
</template>
<script>
export default{
beforeCreate () {
  this.st('0')
},
created () {
  this.st('1')
},
 mounted () {
   this.st('2')
 },
  methods: {
    st(s){
      var arr = s.split('')
      console.log(arr)
    }
  }
}
</script>