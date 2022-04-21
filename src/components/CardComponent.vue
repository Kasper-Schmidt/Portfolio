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
           
          <router-link :to="{ name: 'Projektdetalje', params:{ id : project.projectID }}">
            <a href="#" class="btn btn-primary">Vis mere <!-- {{project.projectID}} --></a>
          </router-link> 
        
        </div>
      </div>
    </div>
    </transition-group>
  </div>
</div>

</template>





<script>
import gsap from 'gsap'
import getProjects from '../modules/getProjects'


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

    const { projects } = getProjects();

    return {
      beforeEnter, enter, projects

 

      
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
  // box-shadow: 3px 3px #00000088;
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
  background-color: #16947e;
  border:none;
  display: flex;
  align-content: center;
  width: 82px;
  border-radius:5px;
}

.btn:hover {
    background-color: #0d6859;

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

a {
  text-decoration: none;
}


</style>