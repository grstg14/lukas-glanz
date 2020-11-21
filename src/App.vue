<template>
  <v-app id="app">

    <v-container fluid class="mt-0 pt-0">
      <v-row style="height:80vh;">
        <v-col cols="2" :align-self="$vuetify.breakpoint.mobile ? 'start' : 'center'" :class="$vuetify.breakpoint.mobile ? 'mt-12' : ''">
          <div style="writing-mode: vertical-rl; text-orientation: upright;">LILY LIVERED MUSIC</div>
        </v-col>

        <v-col cols="8">
          <v-container class="mt-0 pt-0">
            <v-row style="height:10vh;">
              <v-col align="center">
                <Header />
              </v-col>
              
            </v-row>
            <v-row>
              <v-col>
                <v-fade-transition mode="out-in">
                  <router-view></router-view>    
                </v-fade-transition>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
        <v-col cols="2">
          <v-container class="mt-0 pt-0"> 
            <v-row>
              <v-col>
                <social-media />
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
    <Footer />
  </v-app>
</template>

<script>
import Header from './components/Header';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import SocialMedia from './components/SocialMedia'



export default {
  name: 'App',

  components: {
    Header,
    Footer,
    Navigation,
    SocialMedia
  },

  data() {
   
   return {
      showContact: false
    }
  },

  mounted() {
    console.log(this.$vuetify)
  }
  
};
</script>
<style scoped>
  #app {
    background-color: #000;
    color: #fff;
  }
</style>