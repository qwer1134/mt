<template>
    <div>
       <router-view/>
       <ul class="action">
         <li class="list"><router-link :to="{name:'list'}">新闻列表</router-link></li>
         <li class="list"><router-link :to="{name:'user'}">个人中心</router-link></li>
       </ul>
    </div>

</template>

<script>


export default {
  name:'home'
}
</script>

<style scoped>
li{
  list-style: none;
}
.action{
position: fixed;
width: 100%;
height: 60px;
line-height: 60px;

bottom: 0;
left: 0;
display:flex;
flex-flow: row nowrap;
justify-content: space-around;
}
.list{
  font-size: 16px;
  flex: 1;
  text-align: center;

}
</style>



