<template>
  <div class="home">

    <Song />
  </div>
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
