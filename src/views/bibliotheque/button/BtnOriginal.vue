<template>
  <div class="btnCont">
    <button class="btnOriginal tooltip" @click="copyCode"> Copie moi!<span class="tooltip-text">Btn original</span>
    </button>
  </div>



</template>

<script setup>
const codeToCopy = `
<body>
  <button class="btnOriginal">copie moi</button>
</body>

<style>
.btnOriginal {
  width: 120px;
  height: 30px;
  border-radius: 20px;
  box-shadow: 2px 2px 7px 1px #1c6ea4;
  }
 .btnOriginal:hover {
    background: rgba(31, 31, 31, 0.353);
    color: white;
    box-shadow:
      2px 2px 7px 1px #1c6ea4,
      2px 2px 7px 1px #72a41c;

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

<style scoped>
/* ----------------a copier ----------------- */
.btnCont {
  display: flex;
  align-items: center;
  justify-content: center;

  height: 80px;
  width: 100%;


  .btnOriginal {
    width: 120px;
    height: 30px;
    border-radius: 20px;
    box-shadow: 2px 2px 7px 1px #1c6ea4;

    &:hover {
      background: rgba(31, 31, 31, 0.353);
      color: white;
      box-shadow:
        2px 2px 7px 1px #1c6ea4,
        2px 2px 7px 1px #72a41c;
    }
  }
}

/* ----------fin a copier--------------- */
.btnCont {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 120px;
  max-width: 150px;
}


.tooltip {
  position: relative;
  /* display: inline-block; */


}

.tooltip-text {
  visibility: hidden;
  width: 140px;
  background-color: rgb(49, 49, 49);
  color: #fff;
  text-align: center;
  padding: 5px;
  border-radius: 6px;
  position: absolute;
  z-index: 200;
  bottom: 25%;
  /* Au-dessus du bouton */
  left: 125%;
  /* transform: translateX(-25%); */
  opacity: 0;
  transition: opacity 0.3s;
}

.tooltip:hover .tooltip-text {
  visibility: visible;
  opacity: 1;
}
</style>
