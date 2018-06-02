<template>
  <div id="app">
    <router-link to="/login">Log in </router-link>
    <router-link to="/notifications">Notifications</router-link>
    <router-view></router-view>
  </div>
  
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import login from './components/login.vue'
import notifications from './components/notifications.vue'


export default {
  name: 'app',
  components: {
    HelloWorld,
    login,
    notifications
  }
}
</script>

<style scoped lang='scss'>
#app {
  margin-top: 0;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  widows: 100vw;
  height: 100vh;
  background: #DFE0E3;
  a{
    
    background: #f1f1f1;
    padding: 10px;
    margin: 12px;
    border-radius: 5px;
    &:hover{
      background: darken($color: #f1f1f1, $amount: 10);
      text-decoration: none;
    }
  }
  .login{
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
}
</style>
