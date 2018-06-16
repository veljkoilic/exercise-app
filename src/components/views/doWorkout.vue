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
  data(){
    return{
      shoudlTakePause: false,
      pauseCounter: 30
    }
  },
  methods:{
    clickToStart(){
      //prikazi prvi
      // Na svakih 2sekunde smanji workout.reps
      // if workout.reps = 0, onda workout.sets -- a workout.reps = initialReps -> ovo definisati u varijabli.
      // kada je workout.reps =  0, i++
      var i = 0;
      var originalReps = this.plan[i].reps;
      
      const WorkoutCountdown = setInterval(()=> {
        if(i < this.plan.length){
        this.plan[i].active = true;
        if(this.plan[i].reps > 0){
          this.plan[i].reps--;

        }

        if(this.plan[i].reps == 0){
            if(this.plan[i].sets == 0){
            this.plan[i].active = false;
            this.shoudlTakePause = true;
            setInterval(() => {
              i++;
              
            }, 5000);            
            
          }
          if(this.plan[i].sets > 0){
          this.plan[i].sets --;
          this.plan[i].reps = originalReps;
          }

        }
        console.log(this.plan[i].reps)
        }
        //OVO ZAUSTAVLJA INTERVAL 
        // else{
        //   clearInterval(WorkoutCountdown);
        // }
      },300);


      
    












      // // this.plan[0].active = true;
      // for (let i = 0; i < this.plan.length; i++) {
      //   setInterval(()=>{this.plan[i].active = true;}, 2500)
      //   console.log('sklek');
      // }


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
