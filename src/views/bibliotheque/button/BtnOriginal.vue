<template>
  <div class="btnCont">
    <button class="btnOriginal" @click="copyCode"> Copie moi!</button>
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

  &:hover {
    background: rgba(31, 31, 31, 0.353);
    color: white;
    box-shadow:
      2px 2px 7px 1px #1c6ea4,
      2px 2px 7px 1px #72a41c;
  }
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
.btnCont {
  display: flex;
  align-items: center;
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
</style>
