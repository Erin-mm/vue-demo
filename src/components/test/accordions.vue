<template>
  <div class="accordions">
    <ul>
      <li v-for="(v,i) in list" @click.stop="openChild(i)">
        <p>{{v.name}}</p>
         <ul v-if="childShow(i)">
           <li v-for="(child,i) in v.children"><p>{{child.name}}</p></li>
         </ul>
      </li>
    </ul>
    <p class="aa">I want to buy dress</p>
    <textarea name="" id="" cols="30" rows="10"></textarea>
  </div>
</template>
<script>
	export default{
		data(){
			return{
				list:[
          {name:'阶段一',children:[{name:'阶段一子集'},{name:'阶段一子集'},{name:'阶段一子集'}]},
          {name:'阶段二',children:[{name:'阶段二子集'},{name:'阶段二子集'},{name:'阶段二子集'}]},
          {name:'阶段三',children:[{name:'阶段三子集'},{name:'阶段三子集'},{name:'阶段三子集'}]},
        ],
        stepId:-100,
        arr:[],
        isTrue:false,
        count: -1,
      }
    },
    methods:{
      openChild(i){
        this.arr.push(i)
        this.stepId = i
        this.childShow(i)
        this.count++
        console.log(this.count)
        console.log(this.arr)
        console.log(this.arr[this.count])
        console.log(this.arr[this.count-1])
        if(this.arr[this.count]==this.arr[this.count-1]){
             this.isTrue = true
//             this.arr = []
            console.log(this.arr)
            console.log(this.isTrue)
          }else{
        		this.isTrue = false
//            this.arr = []
            console.log(this.arr)
            console.log(this.isTrue)
          }
      },
      childShow(i,mark){
      	mark = this.isTrue
        if(this.stepId ===i){
          return true
        }else if(mark){
        	alert(33)
        	return false
        }else{
        	return false
        }
      },

    }
  }
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
  .accordions{
    li{
      width:100px;
      text-indent:1em;
      cursor: pointer;
      p{
        margin-bottom:0;
      }
    }
    .aa{
      writing-mode: vertical-rl;
      text-orientation: upright;
    }
    textarea{
      caret-color: #6cfcc4
    }
  }
</style>
