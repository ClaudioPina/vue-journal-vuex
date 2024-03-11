<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">

    <h1>Hola Mundo</h1>

    <button @click="hoToDaybook" class="btn btn-primary">Primary</button>
    <button @click="hoToDaybook" class="btn btn-secondary">Secondary</button>
    <button @click="hoToDaybook" class="btn btn-success">Success</button>

  </div>
</template>

<script>
export default {
  methods: {
    hoToDaybook(){
      this.$router.push({ name: "no-entry" })
    }
  }
}
</script>