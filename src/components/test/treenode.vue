<template>
  <div>
    <li>
      <span @mouseenter="showOprators" @mouseleave="hideOprators">
          <a>{{node.name}}</a>
          <small v-if="show_oprators">
              <a @click="editNode">edit</a> | <a @click="removeNode">remove</a> | <a @click="addNode">add</a>
          </small>
      </span>
        <ul v-show="node.children.length"><tree-node v-for="node in node.children" :node.sync="node" :key="node.id"></tree-node></ul>
    </li>
  </div>
</template>
<script>
	export default{
    data: function(){
      return {
        show_oprators: false,
      }
    },
    name: 'tree-node',
    props: ['node'],
    methods:{
      showOprators: function(){ this.show_oprators = true; },
      hideOprators: function(){ this.show_oprators = false; },

      addNode: function(){
        var name = prompt("Input the name of new node", "new node");
        if (!!name && !!name.trim()){
          this.node.children.push({name: name.trim(), children:[]});
        }
      },
      removeNode: function(){
        if (confirm('Do you want to remove node: ' + this.node.name)){
          var current_node = this.node;
          this.$parent.node.children = this.$parent.node.children.filter(function(node){
            return node !== current_node;
          });
        }
      },
      editNode: function(){
        var name = prompt("Input the name of new node", this.node.name);
        if (!!name && !!name.trim()){
          this.node.name = name.trim();
        }
      }
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
</style>
