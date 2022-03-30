<template>
<div class="adobe">
  <div class="container">
    <div class="row">

            <h2>Læring fra lektionerne</h2>

            <div class="progress-outer">
                <p>Photoshop</p>
                <div class="progress">
                    <div class="progress-bar progress-bar-info progress-bar-striped active" style="width:75%; "></div>
                    <div class="progress-value">75%</div>
                </div>
            </div>

            <div class="progress-outer">
                <p>Illustrator</p>
                <div class="progress">
                    <div class="progress-bar progress-bar-success progress-bar-striped active" style="width:80%; "></div>
                    <div class="progress-value">80%</div>
                </div>
            </div>

            <div class="progress-outer">
                <p>XD</p>
                <div class="progress">
                    <div class="progress-bar progress-bar-warning progress-bar-striped active" style="width:90%; "></div>
                    <div class="progress-value">90%</div>
                </div>
            </div>

            <div class="progress-outer">
                <p>InDesgin</p>
                <div class="progress">
                    <div class="progress-bar progress-bar-warning progress-bar-striped active" style="width:70%; "></div>
                    <div class="progress-value">70%</div>
                </div>
            </div>

            <div class="progress-outer">
                <p>Premiere Pro</p>
                <div class="progress">
                    <div class="progress-bar progress-bar-warning progress-bar-striped active" style="width:85%; "></div>
                    <div class="progress-value">85%</div>
                </div>
            </div>

             <div class="progress-outer">
                <p>After Effects</p>
                <div class="progress">
                    <div class="progress-bar progress-bar-warning progress-bar-striped active" style="width:80%; "></div>
                    <div class="progress-value">80%</div>
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


.adobe {
    height: auto;
    width:100%;
    
}

progress-outer{
    background: #fff;
    border-radius: 50px;
    padding: 25px;
    margin: 10px 10px;
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