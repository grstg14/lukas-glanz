<template>
    <v-overlay 
      v-model="showContact"
      opacity="0.8"
      color="black"
    >
      <v-card
        min-width="30vw"
      >
        <v-card-title class="display-1">IMPRINT</v-card-title>
        <v-card-text class="body-1">
          
          <v-list dense>
            <v-list-item class="text-body-1"> 
              Lukas Glanz<br/>
              Neubaug&uuml;rtel 20/11<br/>
              1070 Wien, Austria
            </v-list-item>
            <!--<v-list-item>
              <v-list-item-content>
                for press or booking contact:            
              </v-list-item-content>
            </v-list-item>-->
            <v-list-item>
              <v-list-item-content>
                <span>contact <v-icon small>mdi-at</v-icon> lukasglanz.com</span>
              </v-list-item-content>
            </v-list-item>

            <v-list-item v-if="false">
              <v-list-item-action><v-btn text><v-icon class="mr-2">mdi-file-pdf</v-icon>Download Presskit</v-btn>
              </v-list-item-action>
            </v-list-item>

            <v-list-item class="pr-0">
              <div style="max-height:20vh; max-width:30vw; overflow-y: scroll;" class="grey--text text--darken-1">
                <p>
                  The website informs about the work of the artist Lukas Glanz and strives to be up-to-date. 
                  All information provided is for information purposes only, without warranty for accuracy and completeness. 
                  Lukas Glanz and Lilylivered Music exclude liability for damages, and compensation for (consequential) damages of any kind that may arise as a result of accessing or using the website and the information contained therein.
                </p>
                <p>
                  <u>Copyright:</u><br>The content of this site is protected by copyright.
                </p>
                <p>
                  <u>Hyperlinks:</u><br>The site contains links to other internet sites. Liability for their content and the completeness or authenticity of the information contained therein is herewith excluded.
                </p>
              </div>
                
              
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