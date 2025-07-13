<template>
  <div class="btnCont tooltip">
    <button class="btnRond " @click="copyCode"> CM </button><span class="tooltip-text">BtnRond</span>


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
</style>
