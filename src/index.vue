<template>
  <div>
  <main>
    <div class="card">
<h1 class="card__title card__title--big">lol</h1>
      <div class="card__footer">
    <p>bjr</p>
    <myComp :tto="da" `class="daz" :ref="adz" />
  </div>
    </div>
  </main>
  </div>
</template>

<script>
  export default {
methods: {
  name() {
    const test = {
    toto:     "totazd",
  tata  : 2
}

console.log(test);
  }
},
  }
</script>

<style lang="scss" scoped>
.card {
  &__title {
    font-size: 18px;
    &--big{
      font-size: "30px";
    }
  }
&__footer{
  height: 1px;
  width: 1px;
  padding: 12px;
}
}
</style>