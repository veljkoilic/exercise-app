<template>
  <div id="app">
    <router-link to="/">HOME</router-link>
    <router-link to="/hello">HELLO</router-link>
    <router-view></router-view>
        
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import login from './components/login.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    login
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
  display: flex;
  widows: 100vw;
  height: 100vh;
  background: #DFE0E3;
}
</style>
