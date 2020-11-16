<template>
<div>

  <form v-if="!isR">
    <div>
      用户名:<input v-model="name" type="text">
    </div>
    <div>
    密码:<input v-model="password" type="text">
    </div>
    <div>
    <button @click="log">登录</button>
    <button @click="reg">注册</button>
    </div>
  </form>

  <form v-else>
    <div>
    用户名:<input v-model="name" type="text">
    </div>
    <div>
    密码:<input v-model="password" type="text">
    </div>
    <div>
      再次输入密码:<input v-model="repeat" type="text">
    </div>

<div>
  <button @click="adduser">确定</button>
    <button @click="cancel">取消</button>
</div>

  </form>
</div>
</template>

<script>


export default {
  name:'login',
  data: function() {
    return {
      isR: false,
      name:'',
      password:'',
      repeat:''
    }
  },
  methods: {
    log: function() {
      // if(localStorage.getItem('name')===this.name&&localStorage.getItem('password')===password){
        this.name='';
        this.password='';
        this.$router.push('home/list');
      // }else{
        // alert('用户名密码错误')
      // }
      this.name='';
      this.password='';
    },
    reg: function() {
      this.isR=true
    },
    adduser: function() {
      if(this.password===this.repeat){
      localStorage.setItem('name',this.name);
      localStorage.setItem('password',this.password);
      this.name='';
      this.password='';
      reqeat='';
      this.isR=false;
      }else{
        alert("密码输入不一致");
      }
    },
    cancel: function() {
      this.isR=false
    }
  }
}
</script>

<style scoped>

</style>



