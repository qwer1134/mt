<template>
<div>
  <ul>
    <li v-for="(list, index) in pageList" :key="index">{{list.title}}{{list.content}}</li>
  </ul>
</div>
</template>

<script>
import store from '../vuex/store'

export default {
  name:'list',
  store,
  computed: {
    pageList: function() {
      return store.state.lists
    }
  }
}
</script>

<style scoped>

</style>



