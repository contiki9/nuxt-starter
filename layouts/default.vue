<template>
    <v-app>
      <app-header />
      <nuxt />
      <app-footer />
    </v-app>
</template>


<script>
    import TheHeader from '~/components/molecules/TheHeader.vue'
    import TheFooter from '~/components/molecules/TheFooter.vue'

    export default {
        components: {
            'app-header':TheHeader,
            'app-footer':TheFooter,
        }
    }
</script>


