<template>
  <div class="projektområde">

    <CardComponent />
    <ProjekterComponent />
  </div>
</template>










<script>
import CardComponent from '../components/CardComponent.vue'
import ProjekterComponent from '../components/ProjekterComponent.vue'
export default {
  components:{
    ProjekterComponent,
    CardComponent
  }
}
</script>
 





<style lang="scss" scoped>

.projektområde {
  margin-top:5%;
}

</style>