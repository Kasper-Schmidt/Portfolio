<template>
  <div>


          
      <div id="skills-section">
            <h1>Skills</h1>
            <div class="container">

            <p>HTML</p>
            <div class="progress">
            <div class="progress-bar" data-progress="95">
                  <span>95%</span>
            </div>
            </div>

            <p>CSS/Sass</p>
            <div class="progress">
            <div class="progress-bar" data-progress="90">
                  <span>90%</span>
            </div>
            </div>

            <p>Javascript</p>
            <div class="progress">
            <div class="progress-bar" data-progress="75">
                  <span>75%</span>
            </div>
            </div>

            <p>Vue.js</p>
            <div class="progress">
            <div class="progress-bar" data-progress="70">
                  <span>70%</span>
            </div>
            </div>

            <p>GSAP</p>
            <div class="progress">
            <div class="progress-bar" data-progress="85">
                  <span>85%</span>
            </div>
            </div>

             <p>PHP</p>
            <div class="progress">
            <div class="progress-bar" data-progress="55">
                  <span>55%</span>
            </div>
            </div>

            </div>
      </div> 
    
  </div>
</template>

<script>
export default {

}






</script>





<style>


.skills-section h1 {
    margin-top:1%;
    text-align: center;
}

.container {
    width: 30%;
    margin:20px auto;

}

p {
    margin-bottom: 0px;
    margin-top: 2%;
    text-align: left;
    margin-left: 1%;
}

.progress {
    width: 100%;
    height: 18px;
    background-color: darkgrey;
    border-radius: 980px;
}

.progress .progress-bar {
    width: 50%;
    opacity: 1;
    height: 100%;
    background-color: #1d9612;
    border-radius: 980px;
    position: relative;
    transition: all 1s;

}

.progress-bar span {
    position: absolute;
    top: 0;
    right: 0;
    color: white;
} 



</style>