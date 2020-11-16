<template>
    <div>
      <p>
        标题:
        <input v-model="title" type="text">
      </p>
      <p>
        内容:
        <input v-model="content" type="textarea">

      </p>
       <button @click="add">添加</button>
    </div>
</template>

<script>
import store from '../vuex/store'

export default {
  store,
  data: function() {
    return {
      title:'',
      content:''
    }
  },
  methods:{
    add: function() {

      store.commit('addItem',{
        title:this.title,
        content:this.content
      });
      this.title='';
      this.content='';
      this.$router.push('/home/list')
    }
  }
}
</script>

<style scoped>

</style>



