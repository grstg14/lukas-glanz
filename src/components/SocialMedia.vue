<template>
  <v-container fluid>
    <v-row>
      <v-col 
        v-for="(item, i) in items" :key="i"
        style="max-width:20px;" 
        class="item"
      >
        <a 
          :href="item.link"
          target="_blank"
        >
          <v-row justify="center">
            <v-icon small dark class="ml-0">{{item.icon}}</v-icon>
          </v-row>
          <v-row 
            style="max-width: 40px;"
            v-if="!$vuetify.breakpoint.mobile" 
            class="socialMediaCaption mt-2"
            justify="center"  
          >
            {{item.caption}}
          </v-row>
        </a>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          'caption': 'Instagram',
          'link': 'https://instagram.com/lukasglanzz',
          'icon': 'mdi-instagram'
        },
        {
          'caption': 'Facebook',
          'link': 'https://facebook.com/lukas.glanz',
          'icon': 'mdi-facebook'
        },
        {
          'caption': 'Youtube',
          'link': 'https://www.youtube.com/channel/UCNxYTzqYockZkMJ646Y2WPA',
          'icon': 'mdi-youtube'
        },
        {
          'caption': 'Spotify',
          'link': 'https://artists.spotify.com/c/artist/6ul0q6JSbGHxf7Y6vHuIDb/profile/overview',
          'icon': 'mdi-spotify'
        },
        {
          'caption': 'Itunes',
          'link': 'https://music.apple.com/de/album/touch-single/1540043016',
          'icon': 'mdi-music'
        }
      ]
    }
  }
}
</script>
<style scoped>
  .item {
    cursor: pointer;
    color: #ccc;
    filter: blur(0px);
    transition: color 1s ease, filter 1s ease;
  }
  .item:hover {
    color: #fff;
    filter:blur(1px);
  }
  .socialMediaCaption {
    writing-mode: vertical-rl; 
    text-orientation: upright;
    letter-spacing: 0.3em;
    text-transform: uppercase;
  }

  a{
    text-decoration: none;
  }
</style>
