<template>
  <div class="navdiv">
    <div class="navndiv">
        <a href="/">
          <img id="mitlogo" src="../assets/mitlogo.png" alt="">
        </a>
    </div>
    <nav>
        <router-link to="/" class="hover-underline-animation" >Hjem     </router-link>     |
        <router-link to="/projekter" class="hover-underline-animation">Projekter     </router-link>     |
        <router-link to="/Kontakt" class="hover-underline-animation">Kontakt</router-link>
    </nav>

    <div class="cvboks">
      <a href="https://docs.google.com/document/d/161nJWIXML9WvawkmZlZY1etunDE4kS-IxIN02e-EfNQ/edit?usp=sharing" target=_blank>
      <button id="opencv">Åben CV</button>
      </a>
    </div>
  </div>
</template>

<script>


export default {

}


</script>










<style lang="scss" scoped>

* {
  margin:0;
  padding: 0;
}

.navdiv {
  padding:10px;
  display: flex;
  align-items: center;
  background-color:#d6d6d6;

}

.navndiv {
  margin:0px;
  display: flex;
}

nav {
  margin-left: 450px;
  font-size: 17px;
}

#mitlogo {
  width: 70px;
  height: 70px;
}



.hover-underline-animation {
  display: inline-block;
  position: relative;
  text-decoration: none;

}

.hover-underline-animation:hover {
  color: #696969;

}

.hover-underline-animation:after {
  content: '';
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: #16947e;
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
  
}

.hover-underline-animation:hover:after {
  transform: scaleX(1);
  transform-origin: bottom left;
  color: #696969;

}

p {
  font-size: 20px;
  color: #696969;
  margin:0px;
  padding:0px;
}

span {
  font-size: 20px;
  color: #1d9612;
  font-weight: bold;
}


#opencv {
  width:90px;
  height: 40px;
  background-color: #16947e;
  border: 1px solid #000000;
  margin-left:400px;
  border-radius: 10px;
  color:white;
}

#opencv:hover {
      background-color: #0d6859;

}

</style>

