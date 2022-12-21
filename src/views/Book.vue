<template>
<div class="book">
  <div id="main">
    <div class="card"></div>
    <div class="img">
    </div>
    <div class="article">
    </div>
    <div class="block"> <span class="page">01</span></div>

    <div class="para">
<!--      文本内容-->
      <p>When we’re strangers that pass each other / in the street, it will come<br> down to this tilt / of the head —
        acknowledging another / version of<br> events set in a new-build / years from now, a mess of a place filled /
        with<br> books and records, our kids thick as thieves / redefining all notions of<br> mischief. <br>
        Perhaps our paths will cross in a city / of seven hills as the light draws<br> your face / out from the bliss of
        anonymity. / Maybe you’ll be stroking the<br> goose-down nape / of a small child with eyes the exact shade / of
        those I<br> met across a room at the startof this pain-in-the-heart, this febrile<br> dance.
      </p>
    </div>
    <!-- <div id="dot"></div> -->
  </div>
</div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Book"
}
</script>

<style scoped>
#main {
  background: #CCB7B0 !important;
  /*overflow: hidden;*/
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-46%);
  z-index: 1;
  animation: fadeIn 4s ease-in;

}

.card {
  height: 90vh;
  width: 900px;


  background: #CCB7B0 !important;
}
.img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-100%) translateY(-50%);
  height:100%;
  width: 450px;
  background-image: url(https://www.retrorenovation.com/wp-content/uploads/2014/09/retro-botanical-barkcloth22.jpg
  );
  background-size: contain;
  background-repeat: repeat;
}
.headline {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(100%) translateY(-150%);
  text-align: center;
  font-family: 'Playfair Display SC', serif;
}
.para {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(8%) translateY(-140%);
   text-align: left;
  font-family: 'Playfair Display', serif;
  font-size: 10px;
}

#dot {
  position: absolute;
  height: 100px;
  width: 200px;
  top: 50%;
  left: 50%;
  transform: translateX(140%) translateY(200%);
  background-image: url(http://www.appladesign.net/domains/create/documents/dots_266.png);
  background-size: contain;
  background-repeat: repeat;
  z-index: 2;
}
#dot:before {
  content: "";
  position: absolute;
  height: 200px;
  width: 100px;
  top: 50%;
  left: 50%;
  transform: translateX(-850%) translateY(-280%);
  background-image: url(http://www.appladesign.net/domains/create/documents/dots_266.png);
  background-size: contain;
  background-repeat: repeat;
}
.article {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(35%) translateY(-510%);
  text-align: center;
  font-family: 'Playfair Display SC', serif;
}


.block {
  background: grey;
  opacity: .5;
  position: absolute;
  height: 5px;
  width: 40%;
  top: 5%;
  left: 53%;
}
.page{
  display: flex;
  justify-content: right;
  top: -40%;right: -8%;
  transform: translateX(5%) translateY(-30%);
  position: absolute;
}
/* .block:before {
  content: "";
  background: grey;
  opacity: .5;
  position: absolute;
  height: 5px;
  width: 80px;
  top: 500px;
  left: -145px;
} */
/* Keyframes */

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>