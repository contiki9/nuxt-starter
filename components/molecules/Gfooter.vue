<template>
  <v-footer app>
    <v-col
      class="text-center"
      cols="12"
    >
      {{ new Date().getFullYear() }} — <strong>Nuxt-Starter</strong>
    </v-col>
  </v-footer>
</template>

<script>
    export default {
        name: "Gfooter",
        data(){
          return{

          }
        },
    }
</script>

<style scoped lang="scss">

</style>
