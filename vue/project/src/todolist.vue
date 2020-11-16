<template>
  <div>
    <div>
      <input v-model='inputValue'>
      <button @click='handClick'>提交</button>
    </div>
    <ul>

     <todo-item v-for="(Value,index)  in list"
     :key="index"
     :val='Value'
     :index='index'
     @delete_='delet'
     ></todo-item>

    </ul>
  </div>
</template>

<script>
import todoitem from './components/item'

export default {
  components: {
    'todo-item':todoitem
  },
  data: function() {
    return {
      inputValue:'',
      list:[]
    }
  },
  methods:{
    handClick: function() {
      if(this.inputValue!=''){
      this.list.unshift(this.inputValue);
      this.inputValue='';
      }
    },
    delet: function(index) {
      this.list.splice(index,1);
    }
  }

}
</script>

<style>

</style>
