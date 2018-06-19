<template>
  <div id="app">
    <navigation></navigation>
    <router-view :workout-list='workoutList' :workoutPlan='plan'></router-view>
  </div>
</template>

<script>
import welcome from './components/views/welcome.vue'
import navigation from './components/navigation.vue'
import createWorkout from './components/views/createWorkout.vue'
import selectWorkout from './components/views/selectWorkout.vue'

export default {
  name: 'app',
  components: {
    welcome,
    navigation,
    createWorkout,
    selectWorkout
  },
  data(){
    return{
      workoutList: [],
      plan:[]

    }
  },  
  mounted(){
      window.EventBus.$on('workoutCreated', (workouts) => {
          this.workoutList.push(workouts);

        
      });
      window.EventBus.$on('workoutStarted', (plan) => {
      this.plan = plan;
      
    });
  }

}
</script>

<style  lang='scss'>
body{
    background: #CCC5B9;

  #app {
    border-radius: 8px;
    position: absolute;
    left: 50%;
    top: 15%;
    transform: translate(-50%);
    background: #1C1018;
    margin-top: 0;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    width: 350px;
    height: 650px;

    .login{
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
    }
  }
}
</style>
