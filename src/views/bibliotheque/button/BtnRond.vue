<template>
  <div class="btnCont ">
    <button class="btnRond  tooltip" @click="copyCode"> CM <span class="tooltip-text">BtnRond</span> </button>


  </div>



</template>

<script setup>
const codeToCopy = `
<body>
  <button class="btnOriginal">CM</button>
</body>

<style>
.btnRond {
  height: 70px;
  width: 70px;
  border-radius: 300px;
  box-shadow: 5px 5px 22px 0px rgba(133, 133, 133, 0.79), inset 5px 5px 22px 0px rgba(133, 133, 133, 0.79);
  border: 3px ridge rgba(2, 85, 199, 0.26);
  cursor: pointer;
}

.btnRond:hover {
  transform: scale(1.1);
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
/* a copier ------------ */
.btnRond {
  height: 70px;
  width: 70px;
  border-radius: 300px;
  box-shadow: 5px 5px 22px 0px rgba(133, 133, 133, 0.79), inset 5px 5px 22px 0px rgba(133, 133, 133, 0.79);
  border: 3px ridge rgba(2, 85, 199, 0.26);
  cursor: pointer;
}

.btnRond:hover {
  transform: scale(1.1);
}

/* fin a copier ------------ */
.btnCont {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 120px;
  width: 120px;
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
