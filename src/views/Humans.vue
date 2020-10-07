<template>
    <div class="humansWrapper">

    <b-container fluid class="p-4 bg-dark imageContainer">
      <b-row>
        <b-col>
          <b-img 
          v-for="(human, index) in humans" 
          :key="index"
          class="portraitImage" 
          thumbnail 
          fluid 
          :src="`${human.picture}`"
          :load="log(human)" 
          alt="Image 1"></b-img>
          
          <!-- <b-img class="portraitImage" thumbnail fluid src="https://i.imgur.com/9D5uvQM.jpg" alt="Image 1"></b-img>

          <b-img class="portraitImage" thumbnail fluid src="https://i.imgur.com/OfSPMxo.jpg" alt="Image 1"></b-img>

          <b-img class="portraitImage" thumbnail fluid src="https://i.imgur.com/oV6HSJL.jpg" alt="Image 1"></b-img>

          <b-img class="portraitImage" thumbnail fluid src="https://i.imgur.com/f5lScI2.jpg" alt="Image 1"></b-img> -->
        </b-col>
      </b-row>
    </b-container>


  </div>
</template>

<script>
import { mapState } from 'vuex'

  export default {
    data() {
      return {}
    },
    computed: {
      ...mapState([
        'humans'
      ])
    },
    methods: {
      log(item) {
        console.log(item)
      }
    }
  }
</script>
<style>


.portraitImage {
  width: 40vh;
  margin: 5px;
}

.imageContainer {
  margin-bottom: 0vh;
}

.humansWrapper {
  margin: 100px 10vh 30px 10vh;
}

</style>