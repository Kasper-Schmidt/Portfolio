<template>
  <div>
  
  <div class="top">

  <transition
  appear
  id="popdown-container"
  >
    <div class="popdown">
        <div class="kontaktpopup">
          <p class="close" @click="closeContact()">X</p>
          <h1>Kontakt Mig</h1>
          <p class="minitekst">Mail</p>
          <input id="tekstfelt" type="text">
          <p class="minitekst">Navn</p>
          <input id="tekstfelt" type="text" >
          <p class="minitekst">Besked</p>
          <textarea id="tekstfeltbesked" type="text" rows="3" col="1" ></textarea>
        </div>
      </div>
  </transition>
        <img id="kontaktbillede" src="../assets/kontaktbillede.jpg" alt="">

    <div class="kontaktbokse">
      <div class="boks">
        <img id="telefonbillede" src="../assets/kontaktbilledetelefon.png" alt="">
        <h2>Kontakt via telefon</h2>
        <p>Kontakt mig via telefon, og lad os finde ud af det sammen</p>
        <p>24 60 78 87</p>
        <button id="kontaktknap" >Kontakt</button>
      </div>
   
       <div class="boks">
        <img id="telefonbillede" src="../assets/kontaktbilledemail.png" alt="">
        <h2>Kontakt via mail</h2>
        <p>Kontakt mig via mail, og lad os finde ud af det sammen</p>
        <p>kasper.schmidt1@hotmail.com</p>
        <button id="kontaktknap" @click="animateContactForm()">Kontakt</button>
    </div> 

  </div>

  </div>

  </div>


</template>

<script>

import gsap from 'gsap'
import getProjects from '../modules/getProjects'

export default {
  name: "HomeView",
  components: {
    
  },
  setup() {
  
    let animateContactForm = () => {
    
    gsap.timeline()
      .to(".popdown", {
         duration: 1, opacity:1, y: 620
      })
     }

        let closeContact = () => {
    
    gsap.timeline()
      .to(".popdown", {
         duration: 0.5, opacity:0,
      })
     }




    const { projects } = getProjects();

    return {
   
      projects, 
      animateContactForm,
      closeContact
    }

  
  }
  }
  // }
</script>

<style scoped>
* {
  max-width: 100%;
}
.top {
  display: flex;
  position: relative;
}

#kontaktbillede {
  width: 100%;
  height:100%;
  height: auto;
}

.kontaktbokse {
  gap:50px;
  display: flex;
  position: absolute;
  transform:translate(90%,30%);

}

.close {
  font-size: 18px;
  text-align: right;  
  color:white;
  margin:2px 8px 0 0;
  padding:0;
  cursor: pointer;
}


#telefonbillede {
  height: 40px;
  width: 40px;
  margin:8px;
}

h2 {
  font-size: 20px;
  color: #000000;
}

p {
  font-size: 16px;
  color: #3f3f3f;
  padding: 0 3% 0 3%;
  font-family: 'Roboto', sans-serif;

}

.boks {
  width: 300px;
  height: 250px;
  background-color: #ffffff;
  /* border-radius: 10%; */
  /* border: 1px solid #3f3f3f; */
 /*  display: flex;
  align-items: center;
  flex-direction: column; */
  
}

#kontaktknap {
  width: 175px;
  height: 30px;
  background-color: #16947e;
  border:1px solid black;
  border-radius: 5px;
  color:#ffffff;
}

#kontaktknap:hover {
  background-color: #0d6859;
}

.kontaktpopup {
    width:400px;
    height:auto;
    background: rgb(230,230,230);
    background: linear-gradient(0deg, rgba(230,230,230,1) 0%, rgba(29,150,18,1) 100%);    opacity: 1;
    margin-bottom:50px;
    border-radius: 20px;
    border: 1px solid black;
    margin-top:5%;
    margin-left:5%;
    transform:translate(15%,-170%)

}

h1 {
    padding:10px;
}

.popdown {
  opacity: 0;
  position: relative;
  transform:translate(0%,50%); 

}

#popdown-container {
  position: absolute;
}

.minitekst {
  font-family: 'Roboto', sans-serif;
  font-size:15px;
  margin-bottom:0;
  margin-top:10px;
  margin-left: 14%;
  text-align: left;

}

#tekstfelt {
    width: 75%;
}

#tekstfeltbesked {
    width: 75%;
    height: 80px;
    margin-bottom:20px;

}


/* Media: Responsive til tablet størrelse */

@media all and (max-width:750px) {
#kontaktbillede {
  width: auto;
  height: 300px;
}

.kontaktbokse {
  gap:30px;
  transform:translate(30%,30%);

}

.boks {
  width: 250px;
  height: 200px;
  background-color: #ffffff;
}

p {
  margin:4px;
}

#telefonbillede {
  height: 30px;
  width: 30px;
  margin:4px;
}

.kontaktpopup {
  z-index: +99999;
}


}


/* Media: Responsive til mobil størrelse */
@media all and (max-width:350px) {

#kontaktbillede {
  width: auto;
  height: 175px;
}


.kontaktbokse {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transform:translate(12%,45%);
    gap:15px;




}

.boks {
  border: 1px solid black;


}

.top {
  height: 615px;
}

.kontaktpopup {
  display: none;


}


.close {
  display: none;
}








}





</style>