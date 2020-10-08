<template>
  <div id="app">
    <div id="nav">
    <h1 class="cLunnText">C. Lunn Portraits</h1>
      <router-link to="/">Home</router-link> |
      <router-link to="/Cats">Cats</router-link> |
      <router-link to="/Dogs">Dogs</router-link> |
      <router-link to="/humans">Humans</router-link> 
    </div>
      <hr>
    <b-container>
    <router-view/>
    </b-container>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.cLunnText {
  font-family: 'Times New Roman', Times, serif;
}

#nav {
  background-color: white;
  position: fixed;
  z-index: 1;
  top: 0;
  
  width: 100%;
  padding: 10px;

  

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #a8222f;
    }
  }
}
</style>
