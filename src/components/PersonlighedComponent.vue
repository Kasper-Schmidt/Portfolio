<template>
  <div class="row d-flex mt-100">
    <div class="col-md-6">

        <div class="progress blue"> <span class="progress-left"> <span class="progress-bar"></span> </span> <span class="progress-right"> <span class="progress-bar"></span> </span>
            <div class="progress-value">68%</div>
            
        </div>

        <div class="progress yellow"> <span class="progress-left"> <span class="progress-bar"></span> </span> <span class="progress-right"> <span class="progress-bar"></span> </span>
            <div class="progress-value">73%</div>
        </div>

        <div class="progress green"> <span class="progress-left"> <span class="progress-bar"></span> </span> <span class="progress-right"> <span class="progress-bar"></span> </span>
            <div class="progress-value">58%</div>
        </div>

        <div class="progress gold"> <span class="progress-left"> <span class="progress-bar"></span> </span> <span class="progress-right"> <span class="progress-bar"></span> </span>
            <div class="progress-value">69%</div>
        </div>

        <div class="progress brown"> <span class="progress-left"> <span class="progress-bar"></span> </span> <span class="progress-right"> <span class="progress-bar"></span> </span>
            <div class="progress-value">71%</div>
        </div>

    </div>
</div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>





.progress {
    width: 150px;
    height: 150px !important;
    float: left;
    line-height: 150px;
    background: none;
    margin: 20px;
    box-shadow: none;
    position: relative
}

.progress:after {
    content: "";
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 12px solid #fff;

}

.progress>span {
    width: 50%;
    height: 100%;
    overflow: hidden;
    position: absolute;
    top: 0;
    z-index: 1
}

.progress .progress-left {
    left: 0
}

.progress .progress-bar {
    width: 100%;
    height: 100%;
    background: none;
    border-width: 12px;
    border-style: solid;
    position: absolute;
    top: 0
}

.progress .progress-left .progress-bar {
    left: 100%;
    border-top-right-radius: 80px;
    border-bottom-right-radius: 80px;
    border-left: 0;
    -webkit-transform-origin: center left;
    transform-origin: center left
}

.progress .progress-right {
    right: 0
}

.progress .progress-right .progress-bar {
    left: -100%;
    border-top-left-radius: 80px;
    border-bottom-left-radius: 80px;
    border-right: 0;
    -webkit-transform-origin: center right;
    transform-origin: center right;
    animation: loading-1 1.8s linear forwards
}

.progress .progress-value {
    width: 90%;
    height: 90%;
    border-radius: 50%;
    font-size: 24px;
    color: black;
    line-height: 135px;
    text-align: center;
    position: absolute;
    top: 5%;

}

.progress.blue .progress-bar {
    border-color: #2dbf20;
}

.progress.blue .progress-left .progress-bar {
    animation: loading-2 1.5s linear forwards 1.8s
}

.progress.yellow .progress-bar {
    border-color: #2dbf20;
}

.progress.yellow .progress-left .progress-bar {
    animation: loading-3 1.5s linear forwards 1.8s
}

.progress.green .progress-bar {
    border-color: #2dbf20;
}

.progress.green .progress-left .progress-bar {
    animation: loading-4 1.5s linear forwards 1.8s
}

.progress.gold .progress-bar {
    border-color: #2dbf20;
}

.progress.gold .progress-left .progress-bar {
    animation: loading-5 1.5s linear forwards 1.8s
}

.progress.brown .progress-bar {
    border-color: #2dbf20;
}

.progress.brown .progress-left .progress-bar {
    animation: loading-6 1.5s linear forwards 1.8s
}



@keyframes loading-1 {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg)
    }

    100% {
        -webkit-transform: rotate(180deg);
        transform: rotate(180deg)
    }
}

@keyframes loading-2 {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(deg)
    }

    100% {
        -webkit-transform: rotate(65deg);
        transform: rotate(65deg)
    }
}

@keyframes loading-3 {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg)
    }

    100% {
        -webkit-transform: rotate(83deg);
        transform: rotate(83deg)
    }
}

@keyframes loading-4 {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg)
    }

    100% {
        -webkit-transform: rotate(29deg);
        transform: rotate(29deg)
    }
}

@keyframes loading-5 {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg)
    }

    100% {
        -webkit-transform: rotate(68.4deg);
        transform: rotate(68.4deg)
    }
}

@keyframes loading-6 {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg)
    }

    100% {
        -webkit-transform: rotate(75.4deg);
        transform: rotate(75.4deg)
    }
}


</style>