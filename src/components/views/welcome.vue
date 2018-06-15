<template>
  <div class="welcome">
    <h1>SELECT WORKOUT TO START</h1>
  </div>
</template>

<script>
export default {
  name: 'welcome',
  props: {
    msg: String
  }
}
</script>

<style  scoped lang='scss'>
body{
  h1{
    font-size: 30px;
    color: #fff;
    position: absolute;
    top:40%;
    transform: translateY(-50%);

  }

}

</style>
