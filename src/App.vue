<template>
  <div id="app">
<!--    <img alt="Vue logo" src="./assets/logo.png">-->
    <TailwindConverter/>
  </div>
</template>

<script>
import TailwindConverter from './components/TailwindConverter.vue';

export default {
  name: 'App',
  components: {
    TailwindConverter
  }
}
</script>