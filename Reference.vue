<template>
    <div>
      <h1>Dogs for Adoption</h1>
    <b-table striped hover :items="dogs">
      <template v-slot:cell(name)="data">
        <router-link :to="`/pets/dogs/${data.index}`">{{ data.value }}</router-link>
      </template>

      <template v-slot:cell(picture)="picture">
        <b-avatar variant="info" :src="`${picture.value}`" class="mr-3"></b-avatar>
      </template>


    </b-table>
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

</style>