<template>
  <div class="tree">
    <tree-node :node="rootNode"></tree-node>
  </div>
</template>
<script>
  import TreeNode from "./treenode.vue"

  export default {
    data() {
    	return{
        rootNode: {
          name: 'Root',
          children: [
            {name: 'A',id:1, children:[{name: 'A1',id:2, children:[]}, {name: 'A2', id:3,children:[{name: 'A3', id:4,children:[]}]}]},
            {name: 'B', id:4,children:[{name: 'B1', id:5,children:[]}, {name: 'B2', id:6,children:[]}]},
            {name: 'C', id:7,children:[{name: 'C1', id:8,children:[]}, {name: 'C2', id:9,children:[]}]},
          ]
        },
        rootNode:{
          children: [
            {
              id: 23,
              name: "董事会",
              principal_id: null,
              principal_name: null,
              can_delete: false,
              created_at: "2017-08-16T15:21:48+08:00",
              updated_at: "2017-08-16T15:21:46+08:00",
              children: []
            },
            {
              id: 24,
              name: "业务部",
              principal_id: 335,
              principal_name: null,
              can_delete: false,
              created_at: "2017-08-17T14:52:33+08:00",
              updated_at: "2017-08-17T14:52:30+08:00",
              children: [
                {
                  id: 25,
                  name: "咨询一部",
                  principal_id: 336,
                  principal_name: null,
                  can_delete: false,
                  created_at: "2017-08-17T14:52:34+08:00",
                  updated_at: "2017-08-17T14:52:30+08:00",
                  children: [
                    {
                      id: 26,
                      name: "咨询一组",
                      principal_id: null,
                      principal_name: null,
                      can_delete: true,
                      created_at: "2017-08-17T14:52:35+08:00",
                      updated_at: "2017-08-17T14:52:30+08:00",
                      children: []
                    },
                    {
                      id: 27,
                      name: "咨询三组",
                      principal_id: 338,
                      principal_name: null,
                      can_delete: false,
                      created_at: "2017-08-17T14:52:36+08:00",
                      updated_at: "2017-08-17T14:52:30+08:00",
                      children: []
                    },
                    {
                      id: 28,
                      name: "咨询五组",
                      principal_id: 337,
                      principal_name: null,
                      can_delete: false,
                      created_at: "2017-08-17T14:52:37+08:00",
                      updated_at: "2017-08-17T14:52:30+08:00",
                      children: []
                    },
                    {
                      id: 29,
                      name: "咨询八组",
                      principal_id: 339,
                      principal_name: null,
                      can_delete: false,
                      created_at: "2017-08-17T14:52:38+08:00",
                      updated_at: "2017-08-17T14:52:30+08:00",
                      children: []
                    }
                  ]
                },
                {
                  id: 30,
                  name: "咨询二部",
                  principal_id: 346,
                  principal_name: null,
                  can_delete: false,
                  created_at: "2017-08-17T14:52:39+08:00",
                  updated_at: "2017-08-17T14:52:30+08:00",
                  children: [
                    {
                      id: 31,
                      name: "咨询二组",
                      principal_id: 348,
                      principal_name: null,
                      can_delete: false,
                      created_at: "2017-08-17T14:52:40+08:00",
                      updated_at: "2017-08-17T14:52:30+08:00",
                      children: []
                    },
                    {
                      id: 32,
                      name: "咨询四组",
                      principal_id: 347,
                      principal_name: null,
                      can_delete: false,
                      created_at: "2017-08-17T14:52:41+08:00",
                      updated_at: "2017-08-17T14:52:30+08:00",
                      children: []
                    },
                    {
                      id: 33,
                      name: "咨询六组",
                      principal_id: null,
                      principal_name: null,
                      can_delete: false,
                      created_at: "2017-08-17T14:52:42+08:00",
                      updated_at: "2017-08-17T14:52:30+08:00",
                      children: []
                    },
                    {
                      id: 34,
                      name: "咨询七组",
                      principal_id: 349,
                      principal_name: null,
                      can_delete: false,
                      created_at: "2017-08-17T14:52:43+08:00",
                      updated_at: "2017-08-17T14:52:30+08:00",
                      children: []
                    }
                  ]
                },
                {
                  id: 35,
                  name: "项目一部",
                  principal_id: 357,
                  principal_name: null,
                  can_delete: false,
                  created_at: "2017-08-17T14:52:44+08:00",
                  updated_at: "2017-08-17T14:52:30+08:00",
                  children: [
                    {
                      id: 36,
                      name: "项目一组",
                      principal_id: null,
                      principal_name: null,
                      can_delete: false,
                      created_at: "2017-08-17T14:52:45+08:00",
                      updated_at: "2017-08-17T14:52:30+08:00",
                      children: []
                    },
                    {
                      id: 37,
                      name: "项目四组",
                      principal_id: 358,
                      principal_name: null,
                      can_delete: false,
                      created_at: "2017-08-17T14:52:46+08:00",
                      updated_at: "2017-08-17T14:52:30+08:00",
                      children: []
                    },
                    {
                      id: 38,
                      name: "项目五组",
                      principal_id: 359,
                      principal_name: null,
                      can_delete: false,
                      created_at: "2017-08-17T14:52:47+08:00",
                      updated_at: "2017-08-17T14:52:30+08:00",
                      children: []
                    }
                  ]
                },
                {
                  id: 39,
                  name: "项目二部",
                  principal_id: 366,
                  principal_name: null,
                  can_delete: false,
                  created_at: "2017-08-17T14:52:48+08:00",
                  updated_at: "2017-08-17T14:52:30+08:00",
                  children: [
                    {
                      id: 40,
                      name: "项目二组",
                      principal_id: 367,
                      principal_name: null,
                      can_delete: false,
                      created_at: "2017-08-17T14:52:49+08:00",
                      updated_at: "2017-08-17T14:52:30+08:00",
                      children: []
                    },
                    {
                      id: 41,
                      name: "项目三组",
                      principal_id: null,
                      principal_name: null,
                      can_delete: false,
                      created_at: "2017-08-17T14:52:50+08:00",
                      updated_at: "2017-08-17T14:52:30+08:00",
                      children: []
                    },
                    {
                      id: 42,
                      name: "项目六组",
                      principal_id: 368,
                      principal_name: null,
                      can_delete: false,
                      created_at: "2017-08-17T14:52:51+08:00",
                      updated_at: "2017-08-17T14:52:30+08:00",
                      children: []
                    }
                  ]
                }
              ]
            },
            {
              id: 43,
              name: "企业服务部",
              principal_id: 375,
              principal_name: null,
              can_delete: false,
              created_at: "2017-08-17T14:52:52+08:00",
              updated_at: "2017-08-17T14:52:31+08:00",
              children: [
                {
                  id: 44,
                  name: "审核组",
                  principal_id: 378,
                  principal_name: null,
                  can_delete: false,
                  created_at: "2017-08-17T14:52:53+08:00",
                  updated_at: "2017-08-17T14:52:31+08:00",
                  children: []
                }
              ]
            }
          ]
        },
      }
    },
    components: {
      'tree-node': TreeNode
    },
    created(){

    }
  }
</script>

