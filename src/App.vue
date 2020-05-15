<template>
  <v-app :style="{'background': 'rgba(0,0,0,1)', 'color':'#ffffff', 'background-image': 'url(' + require('./assets/mountain_bw2.jpg') + ')', 'background-size': '100% 100%'}">

    <v-layout>
      <v-col cols="1"></v-col>
      <v-col cols="10">
        <v-row>
          <Header @contact="showContact=true"/>
        </v-row>
        <v-row>
        <v-col
            cols="3"
          >
          <v-row>
            <div style="height: 500px; boder:solid red;">
            
              <v-layout>
                <v-col >
                  <v-row class="mt-18">
                    <v-col>
                    .
                    </v-col>   
                  </v-row>
                  <v-row class="mt-18">
                    <v-col>
                    .
                    </v-col>   
                  </v-row>
                  <v-row class="mt-18">
                    <v-col>
                    .
                    </v-col>   
                  </v-row>
                  <v-row class="mt-18">
                    <v-col>
                    t o u c h
                    </v-col>   
                  </v-row>
                  <v-row>
                    <v-col>
                    t o u c h
                    </v-col>   
                  </v-row>
                  <v-row>
                    <v-col>
                  t o u c h
                    </v-col>   
                  </v-row>
                  
                </v-col>
              </v-layout>
            </div>
            </v-row>
          <v-row
          >
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</v-row>
          </v-col>
          <v-col cols="9">
            <v-content>
              <v-layout>
                <v-col>
                
                <v-row class="mt-10"> <Song/>
                </v-row>
                </v-col>
              </v-layout>
            
            </v-content>
          </v-col>
        </v-row>
      </v-col>
     <v-col cols="1">
       <v-row justify="start">
         <v-col cols="1">
          <div style="text-align:center; margin-top:60px;">
            <div><v-icon x-small dark>mdi-instagram</v-icon></div>
            <div class="caption" style="text-align:center;">I<br>N<br>S<br>T<br>A<br>G<br>R<br>A<br>M</div>
          </div>
        </v-col>
         <v-col cols="1">
          <div style="text-align:center; margin-top:60px;">
            <div><v-icon x-small dark>mdi-facebook</v-icon></div>
            <div >F<br>A<br>C<br>E<br>B<br>O<br>O<br>K</div>
          </div>
        </v-col>
         <v-col cols="1">
          <div style="text-align:center; margin-top:60px;">
            <div><v-icon x-small dark>mdi-youtube</v-icon></div>
            <div style="text-align:center;">Y<br>O<br>U<br>T<br>U<br>B<br>E</div>
          </div>
        </v-col>

         
      </v-row>
    </v-col>

        
       
      
      
    </v-layout>
    <v-overlay v-model="showContact">
      <div>CONTACT
      </div>
      <div>Press & Booking
      </div>
      <v-btn @click="showContact=false">CLOSE</v-btn>
    </v-overlay>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import Song from './components/Song';
import Header from './components/Header';

export default {
  name: 'App',

  components: {
    HelloWorld,
    Song,
    Header
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