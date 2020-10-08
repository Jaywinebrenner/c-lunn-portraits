<template>
    <div class="dogsWrapper">


    <b-container fluid class="p-4 bg-dark imageContainer">
      <b-row>
        <b-col>
        <b-img 
          v-for="(dog, index) in dogs" 
          :key="index"
          class="portraitImage" 
          thumbnail 
          fluid 
          :src="`${dog.picture}`"

          alt="Image 1"></b-img>
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
        'dogs'
      ])
    }
  }
</script>
<style>

.imageContainer {
  margin-bottom: 20vh;
}

.dogsWrapper {
    margin: 100px 10vh 30px 10vh;
}

</style>