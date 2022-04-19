<template>

 <div class="container-md"> <!-- switch to margin x over MD size(fluid and !fluid) -->
  <div class="row">
<transition-group
  appear
  @before-enter="beforeEnter"
  @enter="enter"
  >
   <div v-for="(project, index) in projects" :key="project" class="col-12 col-sm-6 kort" :data-index="index">
      <div class="card" style="">
        <img :src="project.projectURL" class="card-img-top" alt="...">
        <div class="card-body justify-content-start">
          <h5 id="cardOne" class="card-title ">{{project.projectTitle}}</h5>
          <p class="card-text">{{project.projectDescription}}</p>          
          <p id="categorytekst">Category: <span :class="project.projectCategory" id="projectCategoryText">{{project.projectCategory}}</span></p>          
          <a href="#" class="btn btn-primary">Show more <!-- {{project.projectID}} --></a>
        </div>
      </div>
    </div>
    </transition-group>
  </div>
</div>

</template>







<script>
import { ref } from 'vue'
import gsap from 'gsap'


export default {
  setup() {

    const beforeEnter = (el) => {
      el.style.transform = 'translateY(+60px)'
      el.style.opacity = 0
    }
 
    const enter = (el, done) => {
      gsap.to(el, {
        duration: 0.5,
        y:0,
        opacity: 1,
        onComplete:done,
        delay: el.dataset.index * 0.2,
      })
    }

  

    

    let projects = ref([
     
      {
        projectID: 1,
        projectTitle: "Mini Me",
        projectDescription: "En illustration af mig tegnet i Adobe Illustrator",
        projectURL: require("../assets/MiniMe.jpg"),
        projectCategory: "Drawing",
      },
             {
        projectID: 2,
        projectTitle: "Telesikring",
        projectDescription: "Webdesign for Telesikring",
        projectURL: require("../assets/Telesikringforside.jpg"),
        projectCategory: "Webdesign",
      },
              {
        projectID: 3,
        projectTitle: "Verner Panton Hjemmeside",
        projectDescription: "Hjemmeside der omhandler Verner Panton",
        projectURL: require("../assets/vernerpantonforside.jpg"),
        projectCategory: "Web",
      },
           {
        projectID: 4,
        projectTitle: "Halloween Fest",
        projectDescription: "Plakat til Halloween fest",
        projectURL: require("../assets/halloweenforside.jpg"),
        projectCategory: "Drawing",
      },
           {
        projectID: 5,
        projectTitle: "Esbjerg Reklamevideo",
        projectDescription: "Reklamevideo for vores Esbjerg Event Festival i projektuge",
        projectURL: "https://images.unsplash.com/photo-1572177812156-58036aae439c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvamVjdHN8ZW58MHx8MHx8&w=1000&q=80",
        projectCategory: "Video",
      },
           {
        projectID: 6,
        projectTitle: "Esbjerg Reklamevideo",
        projectDescription: "Reklamevideo for vores Esbjerg Event Festival i projektuge",
        projectURL: "https://images.unsplash.com/photo-1572177812156-58036aae439c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvamVjdHN8ZW58MHx8MHx8&w=1000&q=80",
        projectCategory: "Video",
      },
            {
        projectID: 7,
        projectTitle: "Video Portfolio",
        projectDescription: "Videoportfolio af mig",
        projectURL: "https://images.unsplash.com/photo-1572177812156-58036aae439c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvamVjdHN8ZW58MHx8MHx8&w=1000&q=80",
        projectCategory: "Video",
      },
       
     
       {
        projectID: 8,
        projectTitle: "Nirvana",
        projectDescription: "Hjemmeside om Nirvana",
        projectURL: "https://images.unsplash.com/photo-1572177812156-58036aae439c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvamVjdHN8ZW58MHx8MHx8&w=1000&q=80",
        projectCategory: "Web",
      }, 
    ])

    return {
      projects, beforeEnter, enter,

 

      
    }
  }
}
</script>






<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;1,100&display=swap');


#cardOne {
  margin:0px 0px 7px 0px;
  font-size: 19px;
  
}

.card-img-top {
  max-height: 350px;
  max-width: 815px;
}


.card {
  margin-bottom:4%;
  border: 1px solid #afafaf;
}

.card-text {
  margin:2px;
  text-align: left;
  font-family: 'Roboto', sans-serif;
    font-size: 16px;

}

.category {
  margin:2px;
  text-align: left;
  font-family: 'Roboto', sans-serif;
}

#categorytekst {
font-style: italic;
  font-size: 15px;
}

p {
  text-align: left;
}

p span {
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
}

.btn {
  margin-top:8px;
  background-color: #1d9612;
  border:none;
  display: flex;
  align-content: center;
  max-width: 100px;
  
}

#projectCategoryText {
  font-weight: bold;
  font-size: 14px;
  
  
}

  $categoryVideoText: rgb(139, 31, 185);
  $categoryPhotoText: rgb(15, 115, 15);
  $categoryWebText: rgb(32, 32, 176);
  $categoryPosterText: darkred;
  $categoryDrawingText: rgb(255, 0, 0);
  $categoryWebdesignText:orange;
  

.Video {
  color: $categoryVideoText
}
.Web {
  color: $categoryWebText;


}
.Photo {
  color: $categoryPhotoText
}
.Poster {
  color: $categoryPosterText
}
.Drawing {
  color: $categoryDrawingText
}
.Webdesign {
  color: $categoryWebdesignText
}

</style>