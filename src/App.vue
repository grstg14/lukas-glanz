<template>
  <v-app :style="{'background': 'rgba(0,0,0,1)', 'color':'#ffffff', 'background-image': 'url(' + require('./assets/mountain_bw2.jpg') + ')', 'background-size': '100% 100%'}">

    <v-layout>
      <v-col cols="1"></v-col>

      <!-- Navigation & News -->
      <v-col cols="10">
        <v-row>
          <Header @contact="showContact=true"/>
        </v-row>
        
        <v-row>
          <v-col
            cols="3"
          >
            <v-row>
              <Navigation />
            </v-row>
            <v-row>
              <Newsboard />
            </v-row>
          </v-col>

          <!-- Main Content -->
          <v-col cols="9">
            <v-fade-transition mode="out-in"> <!-- ein "unsichtbarer" Wrapper, der lediglich für coole 'fade-out' Animationen beim wechseln der Route sorgt -->
                <router-view></router-view>     <!-- hier wird der Inhalt der aktuellen Route angezeigt(siehe URL-Leiste im Browser und die entsprechenden Route-Links in router.js) -->
            </v-fade-transition>
              <!--<v-content>
                <v-layout>
                  <v-col> 
                    <v-row class="mt-10">
                      <Song/>
                    </v-row>
                  </v-col>
                </v-layout>
              </v-content>-->
              
            
          </v-col>
        </v-row>
      </v-col>
      <!-- Social Media -->
      <v-col cols="1">
        <social-media />
      </v-col>
    </v-layout>
    
    <contact-overlay :show="showContact" @closeContactOverlay="showContact=false"/>
  
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import Song from './components/Song';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Newsboard from './components/Newsboard'
import SocialMedia from './components/SocialMedia'
import ContactOverlay from './components/ContactOverlay'

export default {
  name: 'App',

  components: {
    HelloWorld,
    Song,
    Header,
    Navigation,
    Newsboard,
    SocialMedia,
    ContactOverlay
  },

  data() {
    return {
      showContact: false
    }
  }
};
</script>
<style scoped>

</style>