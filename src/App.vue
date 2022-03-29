<template>
  <NavigationComponent />
  <router-view/>
  <FooterComponent />
</template>

<script>

import FooterComponent from './components/FooterComponent.vue'
import NavigationComponent from './components/NavigationComponent.vue'


export default {
  setup() {
    
  },
  components:{
    FooterComponent,
    NavigationComponent
  }
}
</script>





<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin:0px;
  padding:0px;
}

nav {

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #1d9612;;
    }
  }
}


</style>
