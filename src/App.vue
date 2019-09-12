<template>
  <div>
  in main app
  <div id="app">
    <ActivityStream/>
  </div>
  </div>
</template>

<script>
import ActivityStream from './components/ActivityStream.vue'
export default {
  components:{
    ActivityStream
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
