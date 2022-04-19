<template>

  <div class="kontaktpopup">
      <h1>Kontakt Mig</h1>
      <p>Mail</p>
      <input id="tekstfelt" type="text">
      <p>Navn</p>
      <input id="tekstfelt" type="text" >
      <p>Besked</p>
      <textarea id="tekstfeltbesked" type="text" rows="3" col="1" ></textarea>

  </div>

</template>


<script>
export default {

}
</script>







<style lang="scss" scoped>
.kontaktpopup {
    width:400px;
    height:auto;
    background: rgb(230,230,230);
    background: linear-gradient(0deg, rgba(230,230,230,1) 0%, rgba(29,150,18,1) 100%);    opacity: 1;
    margin-bottom:50px;
    border-radius: 20px;
    border: 1px solid black;

}

h1 {
    padding:10px;
}

p {
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

</style>