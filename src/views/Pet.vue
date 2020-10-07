<template>
<div>
<div>
 <button class="backButton">Back</button>
</div>
  <!-- {{ $route.params.species }}
   {{ $route.params.id }} -->
   <!-- <h4>
   {{ animal.name }}
   </h4>
   <p>{{ animal.age}}</p> -->

   <img class="image" :src="`${animal.picture}`">


</div>
</template>

<script>
import { mapState } from 'vuex'

  export default {

    data() {
      return {
        animal: {}
      }
    },
    computed: {
      ...mapState([
        'dogs', 
        'cats',
        'humans'
      ])
    },
  
    mounted() {
      const animal = this[this.$route.params.species][this.$route.params.id]
      this.animal = animal
    }
   
  }
</script>

<style>
.image {
  width: 60vh;
  display: inline-block;
}
</style>