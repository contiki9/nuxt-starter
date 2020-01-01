<template>
    <v-app>
      <app-gheader />
      <nuxt />
      <app-gfooter />
    </v-app>
</template>


<script>
    import Gheader from '~/components/molecules/Gheader.vue'
    import Gfooter from '~/components/molecules/Gfooter.vue'

    export default {
        components: {
            'app-gheader':Gheader,
            'app-gfooter':Gfooter,
        }
    }
</script>


