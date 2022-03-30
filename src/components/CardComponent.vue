<template>

<div class="ydreboks">
<div class="col-12 col-sm-6 col-md-4 mb-4"  v-for="project in projects" :key="project.projectName">
      <div class="card">
        <img :src="project.projectImg" class="card-img-top" alt="...">
        <div class="card-body justify-content-start">
          <h5 class="card-title">{{project.projectName}}</h5>
          <p class="card-text">{{project.projectDescription}}</p>
          <a href="#" class="btn btn-primary">See more</a>
        </div>
      </div>
</div>
</div>


</template>







<script>
import { ref } from 'vue'
export default {
  setup() {
    const projects = ref([
      {
        projectName: "Nirvana",
        projectDescription: "Den første hjemmeside jeg har lavet.",
        projectImg: "https://images.unsplash.com/photo-1572177812156-58036aae439c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvamVjdHN8ZW58MHx8MHx8&w=1000&q=80"
      },
       {
        projectName: "Exempel2",
        projectDescription: "Dogs are nice",
        projectImg: "https://images.unsplash.com/photo-1572177812156-58036aae439c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvamVjdHN8ZW58MHx8MHx8&w=1000&q=80"
      },
       {
        projectName: "Exempel3",
        projectDescription: "AMDBSS",
        projectImg: "https://images.unsplash.com/photo-1572177812156-58036aae439c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvamVjdHN8ZW58MHx8MHx8&w=1000&q=80"
      }
    ])
    return { projects }
  }
}
</script>






<style lang="scss" scoped>

.ydreboks {
 margin: 1% 1% 1% 1%;
 display: flex;
 gap:1%;
}

.card-text {
    text-align: left;
}


h5 {
    text-align: left;
}



</style>