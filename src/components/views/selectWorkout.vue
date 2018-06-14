<template>
  <div class="selectWorkout">
      <h1></h1>
  </div>
</template>

<script>
export default {
  name: 'selectWorkout',
  props: {
    
  },
    data(){
    return {
        allWorkouts: []
    }
},
  mounted(){
    window.EventBus.$on('workoutListCreated',(workoutList) => {
        this.allWorkouts = workoutList;
        console.log(allWorkouts);

    });
  }
    
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  scoped lang='scss'>
.selectWorkout{
    h1{
        color: #fff;
        font-size: 30px;
        margin-top: 20px;
    }
}

</style>
