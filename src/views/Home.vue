<template>
  <v-container>
    <v-row style="height:15vh;">
      <v-col>
        <div class="text-center" style="font-size: 0.8em;">
          1st<span style="margin-left:10px; letter-spacing: 0.3em">Single</span>
        </div>
        <div class="text-center font-weight-bold">
          <div style="font-size:1.1em; letter-spacing: 1em; text-indent:1em;">touch</div>
        </div>
        <div class="text-center">
          <span style="font-size:0.7em; letter-spacing:0.2; text-decoration:underline;">listen</span>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-img :src="require('@/assets/lu.jpg')" max-width="300px" class="signs mx-auto"/>
      </v-col>
    </v-row>
    <v-row>
      <v-col style="text-align:center;">
        <div class="text-center">8&nbsp;<span style="font-weight:bold; font-size:1em;">&#xb7;</span>&nbsp;2020/2021</div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src
import Song from '@/components/Song.vue'

export default {
  name: 'Home',
  components: {
    Song
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
  

  @keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}

</style>