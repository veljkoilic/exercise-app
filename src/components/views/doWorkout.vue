<template>
  <div class="doWorkout">
    <ul >
        <li v-bind:key="exercise.name
        " v-for="exercise in plan"
        v-if="exercise.active == true">
        NAME: {{exercise.name}} REPS: {{exercise.reps}} SETS: {{exercise.sets}}  
        </li>
      </ul>
      <button @click="clickToStart()">START</button>
  </div>
</template>

<script>
export default {

  name: 'doWorkout',
  props:{
    plan : Array
  },
  methods:{
    clickToStart(){
      // this.plan[0].active = true;
      for (let i = 0; i < this.plan.length; i++) {
        setInterval(function(){this.plan[i].active = true;}, 2500)
        console.log('sklek');
      }


    }
  }




}
</script>
 
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  scoped lang='scss'>
.doWorkout{
  ul{
    color: #fff;
    list-style-type: none;
    padding: 0;
    li{
      font-size: 30px;
    }
  }
  button{
    position: absolute;
    bottom: 200px;
    left: 50%;
    transform: translateX(-50%);
    background: gray;
    color: #fff;
    border: none;
  }
}
</style>
