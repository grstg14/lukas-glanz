<template>
    <v-overlay 
      v-model="showContact"
      opacity="0.8"
      color="black"
    >
      <!--.<div style="width:50vw; height:50vh;">
        <div style="text-align:center; margin-bottom:10vh;" class="display-1">CONTACT</div>
        <div style="width:50%; text-align:center; float:left; ">Press & Booking</div><div style="text-align:center;">dfkadfkafk@fkdfssksdfksdf</div>
        <div style="text-align:center; margin-top:10vh;"><v-btn x-large @click="$emit('closeContactOverlay')">CLOSE</v-btn></div>
      </div>-->

      <v-card
        width="30vw"
      >
        <v-card-title class="display-1">Contact</v-card-title>
        <v-card-text class="body-1">
          <v-list dense>
            <v-list-item>
              <v-list-item-content>
                for press or booking contact:            
              </v-list-item-content>
            </v-list-item>
            
            <v-list-item>
              <v-list-item-content>
                <span class="headline">contact@lukasglanz.com</span>
              </v-list-item-content>
            </v-list-item>

            <v-list-item>
              <v-list-item-action><v-btn text><v-icon class="mr-2">mdi-file-pdf</v-icon>Download Presskit</v-btn>
              </v-list-item-action>
            </v-list-item>
          </v-list>
        </v-card-text>
        <v-card-actions>
          <v-btn @click="$emit('closeContactOverlay')">CLOSE</v-btn>
        </v-card-actions>
      </v-card>
      
    </v-overlay>
</template>

<script>
export default {
  props: {
    show: Boolean
  },

  data() {
    return {

    }
  },

  computed: {
    showContact() {
      return this.show ? true : false
    }
  }
}
</script>