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
        <div v-if="$vuetify.breakpoint.mobile">
          
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
            <span>Artwork by Matthias Kropfitsch, Digitalized by Johanna Schuh</span>
          </v-tooltip>
        </div>
        <div v-else>
          <div>Artwork by Matthias Kropfitsch</div>
          <div>Digitalized by Johanna Schuh</div>
        </div>
      </v-col>
      <v-col class="text-center">
        <a href="https://www.facebook.com/LilyLiveredMusic" target="_blank">Lily Livered Music</a>
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