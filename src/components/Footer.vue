<template>
  <div>
    <v-footer
      padless
      absolute
      class="font-weight-medium caption"
      color="transparent"
      style="color:#fff; max-height:10vh; border:1px solid red;"
    >
      <v-col class="text-left">
        <div>
          
          <v-tooltip right>
            <template v-slot:activator="{ on, attrs }">
              <v-icon
                color="white"
                dark
                v-bind="attrs"
                v-on="on"
              >
                mdi-information-outline
              </v-icon>
            </template>
            <span>Artwork by Mathias Kropfitsch, Digitalized by Johanna Schuh</span>
          </v-tooltip>
          <v-tooltip right>
            <template v-slot:activator="{ on, attrs }">
              <v-icon
                class="ml-2"
                color="white"
                dark
                v-bind="attrs"
                v-on="on"
              >
                mdi-email-outline
              </v-icon>
            </template>
            <span>contact: sophie<v-icon color="white" small>mdi-at</v-icon>lilyliveredmusic.com</span>
          </v-tooltip>
        </div>
      </v-col>
      <v-col align="center">
        <a href="http://www.lilyliveredmusic.com" target="_blank"><v-img contain max-width="100" :src="require('@/assets/lily.png')"/></a>
      </v-col>
      <v-col class="text-right">
        <v-btn
           @click="showImprint=true"
           text
           color="white"
          >
            IMPRESSUM
          </v-btn>
      </v-col>
    </v-footer>

    <contact-overlay :show="showImprint" @close="showImprint=false"/>
  
  </div>
</template>

<script>
import ContactOverlay from './ContactOverlay'
  export default {
    components: {
      ContactOverlay
    },

    data() {
      return {
        showImprint: false,
      }
    }
}
</script>

<style>

</style>