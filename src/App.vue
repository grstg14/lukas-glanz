<template>
  <v-app id="app">

    <v-container fluid class="mt-0 pt-0">
      <v-row style="height:90vh;">
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
                <v-fade-transition mode="out-in"> <!-- ein "unsichtbarer" Wrapper, der lediglich für coole 'fade-out' Animationen beim wechseln der Route sorgt -->
                  <router-view></router-view>     <!-- hier wird der Inhalt der aktuellen Route angezeigt(siehe URL-Leiste im Browser und die entsprechenden Route-Links in router.js) -->
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
    <v-footer
      padless
      absolute
      class="font-weight-medium caption"
      color="black"
      style="color:#fff; max-height:10vh; border:1px solid red; overflow:hidden;"
    >
      <v-col class="text-left">
        <div v-if="$vuetify.breakpoint.mobile">
          <v-icon color="white">mdi-information-outline</v-icon>
        </div>
        <div v-else>
          <div>Artwork by Matthias Kropfitsch</div>
          <div>Digitalized by Johanna Schuh</div>
        </div>
      </v-col>
      <v-col class="text-center">
        Lili Livered Music
      </v-col>
      <v-col class="text-right">
        IMPRESSUM
      </v-col>
    </v-footer>
    
    
    <contact-overlay :show="showContact" @closeContactOverlay="showContact=false"/>
  
  </v-app>
</template>

<script>
import Header from './components/Header';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import SocialMedia from './components/SocialMedia'
import ContactOverlay from './components/ContactOverlay'


export default {
  name: 'App',

  components: {
    Header,
    Footer,
    Navigation,
    SocialMedia,
    ContactOverlay
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