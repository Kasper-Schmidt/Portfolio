<template>

 

 <div class="container-md"> <!-- switch to margin x over MD size(fluid and !fluid) -->
  <div class="row">

   <div v-for="project in projects" :key="project" class="col-12 col-sm-6 col-md-4 mb-4" >
      <div class="card" style="">
        <img :src="project.projectURL" class="card-img-top" alt="...">
        <div class="card-body justify-content-start">
          <h5 id="cardOne" class="card-title ">{{project.projectTitle}}</h5>
          <p class="card-text">{{project.projectDescription}}</p>
          <p class="category">Category: <span class="categoryclass">{{project.projectCategory}}</span></p>
          <a href="#" class="btn btn-primary">Show more {{project.projectID}}</a>
        </div>
      </div>
    </div>
  </div>
</div>



</template>







<script>
import { ref } from 'vue'

export default {
  setup() {
    

    let projects = ref([
      {
        projectID: 1,
        projectTitle: "Nirvana",
        projectDescription: "Fan-page for Nirvana",
        projectURL: "https://images.unsplash.com/photo-1572177812156-58036aae439c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvamVjdHN8ZW58MHx8MHx8&w=1000&q=80",
        projectCategory: "Web",
      }, 
      {
        projectID: 2,
        projectTitle: "Mini Me",
        projectDescription: "An illustration of me drawn in Illustrator",
        projectURL: "https://images.unsplash.com/photo-1572177812156-58036aae439c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvamVjdHN8ZW58MHx8MHx8&w=1000&q=80",
        projectCategory: "Drawing",
      },
           {
        projectID: 3,
        projectTitle: "Esbjerg Commercial",
        projectDescription: "Commercial for Esbjerg Event Festival",
        projectURL: "https://images.unsplash.com/photo-1572177812156-58036aae439c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvamVjdHN8ZW58MHx8MHx8&w=1000&q=80",
        projectCategory: "Video",
      },
           {
        projectID: 4,
        projectTitle: "Esbjerg Commercial",
        projectDescription: "Shows events for Esbjerg Event Festival",
        projectURL: "https://images.unsplash.com/photo-1572177812156-58036aae439c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvamVjdHN8ZW58MHx8MHx8&w=1000&q=80",
        projectCategory: "Video",
      },
            {
        projectID: 5,
        projectTitle: "Video Portfolio",
        projectDescription: "Video about me",
        projectURL: "https://images.unsplash.com/photo-1572177812156-58036aae439c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvamVjdHN8ZW58MHx8MHx8&w=1000&q=80",
        projectCategory: "Video",
      }
    ])

    return {
      projects,

 

      
    }
  }
}
</script>






<style lang="scss" scoped>




</style>