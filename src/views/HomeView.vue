<template>
<section>
  <div class="home">
    <div class="venhoj">
      <div class="ven">
        <div class="h1boks">
          <h2>Kasper</h2>
          <h1>Schmidt</h1>
        </div>
        <div class="videnboks">
          <p>
            Multimediedesignstuderende <br />
            Advanced Mastermind Forex Trader ved BSAPPSFX
          </p>

          <div class="knapsome">
            <a href="/Kontakt">
              <button class="kontaktmig">Kontakt</button>
            </a>
            <div class="someicon">
              
           <!--    <a
                href="https://www.facebook.com/kasper.schmidt.9"
                target="_blank"
              >
                <i class="fa fa-facebook"></i>
              </a>

              <a href="https://www.instagram.com/schmidtkasper/" target="_blank">
                <i class="fa fa-instagram"></i>
              </a> -->
              
               <a href="https://www.linkedin.com/in/schmidt-kasper/" target="_blank">
                <i class="fa fa-linkedin"></i>
              </a>

            </div>
          </div>
        </div>
      </div>

      <div class="hoj">
        <img src="" alt="" />
        <div class="hvidcirkel"></div>
        <img id="migbillede" src="../assets/Migforside.png" alt="">
      </div>
    </div>
  </div>
</section>



  <div class="personlighed">
  <PersonlighedComponent/>
  </div>




  <div class="progbars">
    <div class="adobeboks">
      <AdobeComponent />
    </div>

    <div class="mellem">

    </div>

    <div class="kodeboks">
      <KodeComponent />
    </div>
  </div>


</template>




<script>
import AdobeComponent from "@/components/AdobeComponent.vue";
import KodeComponent from "../components/KodeComponent.vue";
import PersonlighedComponent from "@/components/PersonlighedComponent.vue";



export default {
  name: "HomeView",
  components: {
    KodeComponent,
    AdobeComponent,
    PersonlighedComponent,
  },
};
</script>









<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap");



section {
  height: 100vh;
}

.home {
  height: 100vh;
  width: 100vw;
  background-color: #e6e6e6;
  margin-bottom:2%;
}

.venhoj {
  width: 100%;
  height: 100vh;
  display: flex;
}

.ven {
  width: 60%;
  height: auto;
}

.h1boks {
  margin: 150px 0px 0px 100px;
  text-align: left;
}

h1 {
  color: #1d9612;
  font-size: 55px;
  font-family: "Poppins", sans-serif;
}

h2 {
  font-size: 45px;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  color: #696969;
}

.videnboks {
  text-align: left;
  margin: 40px 0px 0px 100px;
  font-family: 'Roboto', sans-serif;

}

p {
  font-size: 20px;
  margin: 0px;
  font-family: 'Roboto', sans-serif;

}

.knapsome {
  display: flex;

}

.kontaktmig {
  width: 90px;
  height: 40px;
  border-radius: 980px;
  color: white;
  background-color: #16947e;
  border: none;
  margin-top: 15px;
  font-family: 'Roboto', sans-serif;
  font-size: 17px;
}

.kontaktmig:hover {
  background-color: #0d6859;
}



.someicon {
  margin-top: 25px;
  margin-left: 8px;
}

.fa {
  color: #16947e;
  font-size: 150%;
  margin-left: 8px;
}

.fa:hover {
  color: #0d6859;

}

.hoj {
  width: 40%;
  height: 100vh;
}

.hvidcirkel {
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background-color: white;
  margin-top: 60px;
}

#migbillede {
  height: auto;
  width: 75%;
  transform:translate(-20%,-83.2%);
}

.progbars {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom:2%;
}



.personlighed {
  height: 400px;
  width:100%
}

.adobeboks {
width: 35%;
height: auto;
margin-left:4%;
}

.mellem {
width: 30%;
height: auto;
align-content: center;

}

.kodeboks {
width: 35%;
height: auto;
align-content: center;
margin-right:4%;

}

/* Media: Responsive til tablet størrelse */
@media all and (max-width:750px) {
  .h1boks {
    margin: 75px 0px 0px 50px;
  }

  .ven {
    width: 50%;
  }

  .hoj {
    width: 50%;
  }

  .videnboks {
  margin: 30px 0px 0px 50px;
  width: 60%;
  
}

#migbillede {
  height: auto;
  width: 100%;
  transform:translate(-5%,-82.5%);
}

.personboks {
  display:flex;
}

.adobeboks {
  width: 45%;
}

.mellem {
  width: 10%;

}

.kodeboks {
  width: 45%;

}

.personlighed {
  height: 500px;
}








}










/* Media: Responsive til mobil størrelse */
@media all and (max-width:350px) {

#migbillede {
  display:none;
}

.hvidcirkel {
    display:none;

}

.ven {
  width: 80%;
}

.h1boks {
    margin: 75px 0px 0px 25px;
}

.videnboks {
  margin: 30px 0px 0px 25px;
  width: 80%;
  
}

.personlighed {
  height: 1050px;
}

.progbars {
  flex-direction: column;
}

.adobeboks {
  width: 90%;
  margin-bottom:10%;
}

.kodeboks {
  width: 90%;
}









}


</style>