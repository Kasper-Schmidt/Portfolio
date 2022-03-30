<!-- <template>  
  <div>


          
      <div id="skills-section">
            <h2>Læring fra lektioner</h2>
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
setup(){
    const skillsSection = document.getElementById('skills-section');

const progressBars = document.querySelectorAll('.progress-bar');

function showProgress(){
    progressBars.forEach(progressBar=> {
    const value = progressBar.dataset.progress;
    progressBar.style.opacity = 1;
    progressBar.style.width = `${value}%`
    });
}

function hideProgress(){
    progressBars.forEach(p => {
        p.style.opacity = 0;
        p.style.width = 0;
    });
}

window.addEventListener('scroll',() => {
    const sectionPos = skillsSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight;

    if(sectionPos < screenPos) {
        showProgress();
    }
    else {
        hideProgress();
    }
});
}
}






</script>





<style lang="scss" scoped>


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



</style> -->


<template>
<div class="kodning">
  <div class="container">
    <div class="row">

            <h2>Læring fra lektionerne</h2>

            <div class="progress-outer">
                <p>HTML</p>
                <div class="progress">
                    <div class="progress-bar progress-bar-info progress-bar-striped active" style="width:90%; "></div>
                    <div class="progress-value">90%</div>
                </div>
            </div>

            <div class="progress-outer">
                <p>CSS/Sass</p>
                <div class="progress">
                    <div class="progress-bar progress-bar-success progress-bar-striped active" style="width:95%; "></div>
                    <div class="progress-value">95%</div>
                </div>
            </div>

            <div class="progress-outer">
                <p>Javascript</p>
                <div class="progress">
                    <div class="progress-bar progress-bar-warning progress-bar-striped active" style="width:70%; "></div>
                    <div class="progress-value">70%</div>
                </div>
            </div>

            <div class="progress-outer">
                <p>Vuejs</p>
                <div class="progress">
                    <div class="progress-bar progress-bar-warning progress-bar-striped active" style="width:75%; "></div>
                    <div class="progress-value">75%</div>
                </div>
            </div>

             <div class="progress-outer">
                <p>Frameworks</p>
                <div class="progress">
                    <div class="progress-bar progress-bar-warning progress-bar-striped active" style="width:70%; "></div>
                    <div class="progress-value">70%</div>
                </div>
            </div>

            <div class="progress-outer">
                <p>Greensock</p>
                <div class="progress">
                    <div class="progress-bar progress-bar-warning progress-bar-striped active" style="width:85%; "></div>
                    <div class="progress-value">85%</div>
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










<style lang="scss" scoped>

.row {
    width: 100%;
}

.kodning {
    height: auto;
    width:100%;
    
}

progress-outer{
    background: #fff;
    border-radius: 50px;
    padding: 5px;
    margin: 2px 2px;
}
.progress{
    height: 30px;
    margin: 10px;
    overflow: visible;
    border-radius: 50px;
    background: #eaedf3;

}
.progress .progress-bar{
    border-radius: 50px;
    background-color: #1d9612;
    box-shadow:-1px 3px 10px #16947e;
    margin:0px;
    

}



p {
    font-size:15px;
    text-align: left;
    margin: 5% 0px 0px 2%;
  
}

.progress {
    margin:0;
    height: 20px;
}

.progress .progress-value{
    position: relative;
    left: -45px;
    font-size: 14px;
    font-weight: bold;
    color: #fff;
    letter-spacing: 2px;
}

.progress-bar.active{
    animation: reverse progress-bar-stripes 0.5s linear infinite, animate-positive 2s;
}
@-webkit-keyframes animate-positive{
    0% { width: 0%; }
}
@keyframes animate-positive {
    0% { width: 0%; }
}

</style>