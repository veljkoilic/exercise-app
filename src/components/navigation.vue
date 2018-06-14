<template>
  <div class="navigation">
    <nav>
      <ul class="container-fluid">
        <li class="col-sm-4"><router-link class="col-sm-12" to="/create-workout"><i class="fas fa-dumbbell"></i></router-link></li>
        <li class="col-sm-4"><router-link class="col-sm-12" to="/"><i class="far fa-circle"></i></router-link></li>
        <li @click="sendEmitToSendEmitToSelectWorkout()" class="col-sm-4"><router-link class="col-sm-12" to="/select-workout"><i class="fas fa-angle-double-right"></i></router-link></li>
        
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'navigation',
  props: {
    
  },
  methods:{
    sendEmitToSendEmitToSelectWorkout(){
      window.EventBus.$emit("pageChange");
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  scoped lang='scss'>
nav{
  position: fixed;
  bottom: 0;

  
  ul{
    padding: 0;
    list-style-type: none;
    width: 350px;

    li{
      &:hover{
        background: lighten($color: #1C1018, $amount: 7)
      }
      display: inline-block;
      border-top: 1px solid #fff;
      &:nth-child(1){
      border-right: 1px solid #fff;
    }
      &:nth-child(2){
      border-right: 1px solid #fff;
    }
    
 
      a{
        
        color: #fff;
        padding: 5px;
        font-size: 25px;
        
        
      }
    }
  }
}

</style>
