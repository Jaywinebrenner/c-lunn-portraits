<template>
    <div class="humansWrapper">

      <modal 
          name="modalZero"
          :width="720"
         :height="720"
         :adaptive="true"
          >
           <img :src="`${humans[0].picture}`" />
        </modal>

         <modal 
          name="modalOne"
          :width="720"
         :height="720"
         :adaptive="true"
          >
           <img :src="`${humans[1].picture}`" />
        </modal>

         <modal 
          name="modalTwo"
          :width="720"
         :height="720"
         :adaptive="true"
          >
           <img :src="`${humans[2].picture}`" />
        </modal>

         <modal 
          name="modalThree"
          :width="720"
         :height="720"
         :adaptive="true"
          >
           <img :src="`${humans[3].picture}`" />
        </modal>


    <b-container fluid class="p-4 bg-dark imageContainer">
      <b-row>
        <b-col>
        <b-img 
        @click="showZero()"
          class="portraitImage" 
          thumbnail 
          fluid 
          :src="`${humans[0].picture}`"
          alt="Image 1">
        </b-img>

         <b-img 
         @click="showOne()"
          class="portraitImage" 
          thumbnail 
          fluid 
          :src="`${humans[1].picture}`"
          alt="Image 2">
        </b-img>

         <b-img 
         @click="showTwo()"
          class="portraitImage" 
          thumbnail 
          fluid 
          :src="`${humans[2].picture}`"
          alt="Image 3">
        </b-img>

         <b-img 
         @click="showThree()"
          class="portraitImage" 
          thumbnail 
          fluid 
          :src="`${humans[3].picture}`"
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
        'humans'
      ])
    }
  }
</script>
<style>

.imageContainer {
  margin-bottom: 20vh;
}

.humansWrapper {
    margin: 100px 10vh 30px 10vh;
}

.portraitImage {
  width: 35vh;
  margin: 0 10px 10px 0;
}

</style>

