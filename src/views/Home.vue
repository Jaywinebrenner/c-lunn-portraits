<template>

<div class="homeWrapper">
  
  
  <p>10"x10" oil based enamel portraits on sanded gesso panels. Dog/cat base price: $2,100. Other animal and human paintings considered case by case.</p>
  <img v-if="!showPetForm" class="catPic" :src="'https://i.imgur.com/C3NVMvI.jpg'" /> 


  <b-form @submit="handleSubmit" v-if="showPetForm">
      <b-form-group id="input-group-3" label="Portrait Type:" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="formData.species"
          :options="['Cat', 'Dog', 'Human']"
          required
        ></b-form-select>
      </b-form-group>

      <b-form-group id="input-group-4" label="Image File:" label-for="input-4">
        <b-form-file
      v-model="file1"
      :state="Boolean(file1)"
      placeholder="Choose a file or drop it here..."
      drop-placeholder="Drop file here..."
    ></b-form-file>
    <div class="mt-3">Selected file: {{ file1 ? file1.name : '' }}</div>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>

    <div class="adminButtonWrapper">
      <button @click="toggleShowPetForm" class="btn btn-primary">ADMIN- Post New Portrait</button>
    </div>


</div>


</template>

<script>


export default {
  name: 'home',
  data() {
    return {
      showPetForm: false,
      formData: {
        name: '',
        age: 0,
        species: null
      }
    }
  },
  methods: {
    toggleShowPetForm() {
      this.showPetForm = !this.showPetForm
    },
    handleSubmit() {

    }
  }
}
</script>

<style scoped>

h1 {
  margin-bottom: 0px;
}
.catPic {
  width: 70vh;
  /* height: 70vh; */
}

.adminButtonWrapper {
  margin-top: 20px;
}

.homeWrapper {
  margin: 80px 10vh 30px 10vh;
}
</style>
