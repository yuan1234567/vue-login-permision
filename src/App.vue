<template>
  <div id="app">
    测试
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
      data(){
          return {
              
          }
      }
  }
</script>

<style>
div,body,ul,p{margin: 0;}
ul{padding: 0;}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
