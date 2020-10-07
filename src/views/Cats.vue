<template>
    <div class="catsWrapper">

      <b-container fluid class="p-4 bg-dark imageContainer">
            <b-row>
              <b-col>
             <b-img 
                v-for="(cat, index) in cats" 
                :key="index"
                class="portraitImage" 
                thumbnail 
                fluid 
                :src="`${cat.picture}`"
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
        'cats'
      ]),
    }
  }
</script>
<style>
.catsWrapper {
  margin: 100px 10vh 30px 10vh;
}

</style>