<template>
  <div class="btnCont tooltip ">


    <div class="circle" @click="copyCode">
      <p>Cm!</p>

    </div>
    <span class="tooltip-text">Btn BtnNeumorphic</span>

    <!-- <div class="circle long">
            <p>Submit</p>
        </div> -->

  </div>

</template>


<style scoped>
.circle {
  position: relative;
  display: flex;
  width: 100px;
  height: 100px;
  border-radius: 150px;
  align-items: center;
  justify-content: center;
}

.circle::before {
  content: '';
  position: absolute;
  inset: 0;
  left: 0;
  top: 0;
  display: block;
  width: 100px;
  height: 100px;
  cursor: pointer;
  transition: 0.3s ease-out;
  border-radius: 150px;
  filter: blur(7px);
  box-shadow:
    8px 8px 20px #63767d,
    -8px -8px 20px #fff;
}

/* 
.long {
    width: 250px;
    height: 100px;
}

.long::before {
    content: '';
    position: absolute;
    inset: 0;
    width: 250px;
    height: 100px;
} */

.circle:hover::before {
  box-shadow:
    8px 8px 20px #63767d,
    -8px -8px 20px #fff,
    inset -8px -8px 20px #fff,
    inset 8px 8px 20px #63767d;
}

.circle p {
  position: relative;
  color: #797979;
  cursor: pointer;
  transition: scale 0.3s ease-out;
  text-shadow:
    8px 4px 5px #63767d,
    -1px -1px 7px #fff;
}

.circle:hover p {
  font-size: 0.9rem;
}
</style>

<script setup>
const codeToCopy = `

  <body>
    <section>
      <div class="circle">
        <p>Circle</p>
      </div>
      <div class="circle long">
        <p>Submit</p>
      </div>
    </section>
  </body>

<style>
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: sans-serif;
    font-size: 20px;
  }
  body {
    display: flex;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background: #bdc8d6;
  }
  section {
    display: flex;
    width: 100vw;
    height: 100vh;
    align-items: center;
    justify-content: space-around;
  }

  .circle {
    position: relative;
    display: flex;
    width: 150px;
    height: 150px;
    border-radius: 150px;
    align-items: center;
    justify-content: center;
  }
  .circle::before {
    content: '';
    position: absolute;
    inset: 0;
    left: 0;
    top: 0;
    display: block;
    width: 150px;
    height: 150px;
    cursor: pointer;
    transition: 0.3s ease-out;
    border-radius: 150px;
    filter: blur(7px);
    box-shadow:
      8px 8px 20px #63767d,
      -8px -8px 20px #fff;
  }
  .long {
    width: 250px;
    height: 100px;
  }
  .long::before {
    content: '';
    position: absolute;
    inset: 0;
    width: 250px;
    height: 100px;
  }

  .circle:hover::before {
    box-shadow:
      8px 8px 20px #63767d,
      -8px -8px 20px #fff,
      inset -8px -8px 20px #fff,
      inset 8px 8px 20px #63767d;
  }
  .circle p {
    position: relative;
    color: #797979;
    cursor: pointer;
    transition: scale 0.3s ease-out;
    text-shadow:
      8px 4px 5px #63767d,
      -1px -1px 7px #fff;
  }
  .circle:hover p {
    font-size: 0.9rem;
  }
</style>



`;

const copyCode = async () => {
  try {
    await navigator.clipboard.writeText(codeToCopy.trim());
    alert('Code copié dans le presse-papiers !');
  } catch (e) {
    console.error(e);
    alert('Erreur : ' + e.message);
  }
};
</script>
