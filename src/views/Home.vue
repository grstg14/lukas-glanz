<template>
  <v-container>
    <v-row style="height:15vh;">
      
      <v-col>
        <a 
          href="http://hyperurl.co/jdxo1y"
          target="_blank"
          class="listenLink"
        >
          <div class="text-center font-weight-bold">
            <div style="font-size:1.1em; letter-spacing: 1em; text-indent:1em;">touch</div>
          </div>
          <div class="text-center">
              <span style="font-size:0.7em; letter-spacing:0.2; text-decoration:underline;">listen</span>
          </div>
        </a>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-img :src="require('@/assets/lu_trans.png')" max-width="40vh" max-height="40vh" class="signs mx-auto"/>
      </v-col>
    </v-row>
    <v-row>
      <v-col style="text-align:center;">
        <div class="text-center" style="font-size: 0.8em;">
          8
          &nbsp;
          <span style="font-weight:900; font-size:1.1em;">&#xb7;</span>
          &nbsp;
          <span style="text-indentation:0.3em; letter-spacing:0.3em;">2020/2021</span>
        </div>
      </v-col>
    </v-row>
    <v-row v-if="$vuetify.breakpoint.mobile">
      <SocialMedia :medium="true" :iconWidth="40"/>
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src
import SocialMedia from '@/components/SocialMedia.vue'

export default {
  name: 'Home',
  components: {
    SocialMedia
  }
}
</script>

<style scoped>
  .signs {
    animation: rotation 180s infinite linear;
  }

  .signs:hover {
      animation-play-state: paused;

  }
  
  .listenLink {
    text-decoration:none;
  }

  @media (min-width:768px) {
    .listenLink {
      transition: font-size 1s ease-out;
    }
    .listenLink:hover {
      font-size:1.25em;
    }
  }

  @keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}

</style>