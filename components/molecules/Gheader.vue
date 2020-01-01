<template>
  <v-card
    color="grey lighten-4"
    flat
    tile
  >

    <v-toolbar dense>
      <v-toolbar-title>Title</v-toolbar-title>
      <v-spacer></v-spacer>
      <template v-if="this.$vuetify.breakpoint.mdAndUp">
        <v-toolbar-items v-for='(menu, i) in menus' :key='i'>
          <v-btn text :to='menu.link'>{{ menu.title }}</v-btn>
        </v-toolbar-items>
      </template>
      <template v-else>
        <v-menu bottom left>
          <template v-slot:activator="{ on }">
            <v-btn icon v-on="on">
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </template>

          <v-list>
            <v-list-item
              v-for="(menu, i) in menus"
              :key="i"
              @click=""
            >
              <v-list-item-title>
                <v-btn text :to="menu.link">{{ menu.title }}</v-btn>
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </template>
    </v-toolbar>
  </v-card>

</template>

<script>
    export default {
        name: "Gheader",
        data(){
          return{

          }
        },
        computed:{
            menus(){
                return [
                    {
                        title:'ホーム',
                        link:'/',
                    },
                    {
                        title:'お問い合わせ',
                        link:'/contact',
                    },
                ]
            }
        },
    }
</script>

<style scoped>

</style>
