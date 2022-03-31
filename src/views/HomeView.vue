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
            Multimediedesignerstuderende <br />
            Advanced Mastermind Forex Trader ved BSAPPSFX
          </p>

          <div class="knapsome">
            <button class="kontaktmig">Kontakt</button>
            <div class="someicon">
              <a
                href="https://www.facebook.com/kasper.schmidt.9"
                target="_blank"
                ><i class="fa fa-facebook"></i
              ></a>
              <a href="https://www.instagram.com/schmidtkasper/" target="_blank"
                ><i class="fa fa-instagram"></i
              ></a>
              <i class="fa fa-linkedin"></i>
            </div>
          </div>
        </div>
      </div>

      <div class="hoj">
        <img src="" alt="" />
        <div class="hvidcirkel"></div>
      </div>
    </div>
  </div>
</section>


<section>
  <div class="personlighed">
  <PersonlighedComponent/>
  </div>
</section>


<section>
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
  </section>
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
    PersonlighedComponent
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
}

p {
  font-size: 20px;
  margin: 0px;
}

.knapsome {
  display: flex;
}

.kontaktmig {
  width: 90px;
  height: 40px;
  border-radius: 980px;
  color: white;
  background-color: #1d9612;
  border: none;
  margin-top: 15px;
}

.someicon {
  margin-top: 25px;
  margin-left: 8px;
}

.fa {
  color: green;
  font-size: 150%;
  margin-left: 8px;
}

.hoj {
  width: 40%;
  height: 100vh;
}

.hvidcirkel {
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background-color: white;
  margin-left: 40px;
  margin-top: 50px;
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
width: 30%;
height: auto;
}

.mellem {
width: 40%;
height: auto;
align-content: center;

}

.kodeboks {
width: 30%;
height: auto;
align-content: center;
}
</style>