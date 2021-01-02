<template>
  <div>
    <v-footer
      padless
      absolute
      class="font-weight-medium caption"
      color="transparent"
    >
      <v-col :class="($vuetify.breakpoint.mobile) ?  'ma-0 pa-0 ml-1' : false">
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
          <template v-if="$vuetify.breakpoint.mobile">
            <v-btn
            @click="showContact=true"
            icon
            >
              <v-icon color="white">mdi-email-outline</v-icon>
            </v-btn>
          </template>
        </div>
      </v-col>
      <v-col :class="($vuetify.breakpoint.mobile) ?  'ma-0 pa-0 ml-1' : ''" align="center">
        <a href="http://www.lilyliveredmusic.com" target="_blank"><v-img contain max-width="100" :src="require('@/assets/lily.webp')"/></a>
      </v-col>
      <v-col :class="($vuetify.breakpoint.mobile) ?  'ma-0 pa-0 ml-1 text-right' : 'text-right'">
        <template v-if="!$vuetify.breakpoint.mobile">
            <v-btn
            @click="showContact=true"
            text
            color="white"
            class="ma-0 pa-0"
            >
              CONTACT
            </v-btn>
          </template>
        <v-btn
           @click="showImprint=true"
           text
           color="white"
           
          >
            IMPRESSUM
          </v-btn>
          
          
      </v-col>
    </v-footer>

    <contact-overlay :show="showContact" @close="showContact=false"/>
    <imprint-overlay :show="showImprint" @close="showImprint=false"/>
  
  </div>
</template>

<script>
import ContactOverlay from './ContactOverlay'
import ImprintOverlay from './ImprintOverlay'
  export default {
    components: {
      ContactOverlay,
      ImprintOverlay
    },

    data() {
      return {
        showContact: false,
        showImprint: false,
      }
    }
}
</script>
