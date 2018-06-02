<template>
<div class="notifications container-fluid">
<button><i v-on:click="showNotifications" class="fas fa-bell"></i></button>
<div class="notificationBox col-sm-6 offset-sm-3"  v-if="show" >
  <div v-bind:key="notification" v-for="notification in notifications"  class="singleNotification" :class="{ seen: notification.seen}">
    <div class="icon"><i class="fas" :class="notification.icon"></i></div>
    <div class="message"><h3 v-text="notification.message"></h3></div>
    <div class="time"><p>{{notification.time}}</p> </div>
  </div>


  
</div>
</div>

</template>

<script>
export default {
  name: 'notifications',
  props: {
    
  },
  computed:{

  },
  mounted(){
    axios.get('https://api.myjson.com/bins/dsljq').then(response => this.notifications = response.data);
  },
  data(){
    return{
      notifications:[
        

//         
//   {
//     "time": 132626235324,
//     "message": "This is the first message",
//     "icon": "fa-check-circle",
//     "seen": false
//   },
//   {
//     "time": 132626235324,
//     "message": "This is the second message",
//     "icon": "fa-check-circle",
//     "seen": false
//   }
// 


      ],
      show: false

      
    }
  },
  methods:{
      FormatedDate(notification){
        console.log(formattedTime);
      var date = new Date(notification.time*1000);
      // Hours part from the timestamp
      var hours = date.getHours();
      // Minutes part from the timestamp
      var minutes = "0" + date.getMinutes();
      // Seconds part from the timestamp
      var seconds = "0" + date.getSeconds();

      // Will display time in 10:30:23 format
      var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
      var index = this.notifications.indexOf(notification);

      this.notifications[index].time = formattedTime;
    },
    showNotifications(){
        this.show ? this.show = false : this.show = true;
        for(var i = 0; i < this.notifications.length; i+=1){
          this.notifications[i].seen = true;
          console.log(this.notifications[i].seen);
        }
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  scoped lang='scss'>
.notificationBox{
  margin-top: 20px;
  height: 500px;
  background: #2D3142;
  overflow-y: scroll;
  
  -ms-overflow-style: none;  // IE 10+
  overflow: -moz-scrollbars-none;  // Firefox
  &::-webkit-scrollbar { 
  display: none;  // Safari and Chrome
  }
      .seen{
      border: 2px solid red;
    }

  .singleNotification{
    margin: 8px 0;
    background: #4F5D75;
    height: 100px;
    display: flex;
    flex-direction: flex-start;
    justify-content: space-between;
    align-items: center;
    border-radius: 3px;

    .message{
      margin-left: 50px;
      h3{
        font-size: 20px;
        color: #FFFFFF;
      }
    }
    .icon{
        margin-left: 10px;

        i{
          font-size: 40px;
          color: #EF8354;
        }
        
      }

      .time{
        align-self: flex-end;
              
      p{
        color: rgba(255,255,255,0.2);
        margin-right: 20px;
      }
    }
  }

  
}
button{
  margin-top: 100px;
  background-color: lightgray;
  border-radius: 4px;
  border: none;
  i{
    color: #7a7a7a;
    font-size: 30px;
  }

}

</style>
