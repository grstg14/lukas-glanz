<template>
    <v-overlay 
      v-model="showContact"
      opacity="0.8"
      color="black"
    >
      <v-card
        :style="{'max-width': $vuetify.breakpoint.mobile ? '100vw' : '30vw'}"
      >
        <v-card-title class="display-1">CONTACT</v-card-title>
        <v-card-text class="text-h6">
          <v-list dense>
            <v-list-item>
              <v-list-item-content class="text-center">
                <span>sophie <v-icon small>mdi-at</v-icon> lilyliveredmusic.com</span>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card-text>
        <v-card-actions>
          <v-btn block @click="$emit('close')">CLOSE</v-btn>
        </v-card-actions>
      </v-card>
      
    </v-overlay>
</template>

<script>
export default {
  props: {
    show: Boolean
  },

  computed: {
    showContact() {
      return this.show ? true : false
    }
  }
}
</script>