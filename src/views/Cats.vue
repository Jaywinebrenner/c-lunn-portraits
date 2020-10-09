<template>
    <div class="catsWrapper">

      <modal 
         name="modalZero"
         :width='"100%"'
         :height='"80%"'
         :adaptive="true"
         :class="largeImageWrapper"
          >
          <img class="largeImage" :src="`${cats[0].picture}`" />
        </modal>

         <modal 
          name="modalOne"
          :width='"100%"'
          :height='"80%"'
         :adaptive="true"
         :class="largeImageWrapper"
          >
           <img class="largeImage" :src="`${cats[1].picture}`" />
        </modal>

         <modal 
          name="modalTwo"
          :width='"100%"'
          :height='"80%"'
         :adaptive="true"
         :class="largeImageWrapper"
          >
           <img class="largeImage" :src="`${cats[2].picture}`" />
        </modal>

         <modal 
          name="modalThree"
          :width='"100%"'
          :height='"80%"'
         :adaptive="true"
         :class="largeImageWrapper"
          >
           <img class="largeImage" :src="`${cats[3].picture}`" />
        </modal>


    <b-container fluid class="p-4 bg-dark imageContainer">
      <b-row>
        <b-col>
        <b-img 
        @click="showZero()"
          class="portraitImage" 
          thumbnail 
          fluid 
          :src="`${cats[0].picture}`"
          alt="Image 1">
        </b-img>

         <b-img 
         @click="showOne()"
          class="portraitImage" 
          thumbnail 
          fluid 
          :src="`${cats[1].picture}`"
          alt="Image 2">
        </b-img>

         <b-img 
         @click="showTwo()"
          class="portraitImage" 
          thumbnail 
          fluid 
          :src="`${cats[2].picture}`"
          alt="Image 3">
        </b-img>

         <b-img 
         @click="showThree()"
          class="portraitImage" 
          thumbnail 
          fluid 
          :src="`${cats[3].picture}`"
          alt="Image 4">
        </b-img>
         
          
      </b-col>
      
    </b-row>

    </b-container>


  </div>
</template>

<script>
import { mapState } from 'vuex'

  export default {
    methods: {
    showZero () {
        this.$modal.show('modalZero'); 
        },
    hideZero () {
      this.$modal.hide('modalZero'); 
        },
    showOne () {
        this.$modal.show('modalOne'); 
        },
    hideOne () {
      this.$modal.hide('modalOne'); 
        },
    showTwo () {
        this.$modal.show('modalTwo'); 
        },
    hideTwo () {
      this.$modal.hide('modalTwo'); 
        },
    showThree () {
        this.$modal.show('modalThree'); 
        },
    hideThree () {
      this.$modal.hide('modalThree'); 
        },
    mount () {
        this.show()
      },
    },
    data() {
      return {}
    },
    computed: {
      ...mapState([
        'cats'
      ])
    }
  }
</script>
<style>

.imageContainer {
  margin-bottom: 20vh;
}

.catsWrapper {
    margin: 100px 10vh 30px 10vh;
}

.portraitImage {
  width: 35vh;
  margin: 0 10px 10px 0;
}

.largeImageWrapper {
   display: flex;
  align-items: center;
  justify-content: center;
}

.largeImage {
  width: 100%;
 text-align: center;


}

</style>

