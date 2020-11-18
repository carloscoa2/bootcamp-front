<template>
  <div id="app">
    <h1>Instamovies</h1>
    <div id="nav">
      <router-link to="/batman">batman</router-link> |
      <router-link to="/">superman</router-link> |
      <router-link to="/wonderWoman">wonderWoman</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 20px;
}

#nav {
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
  margin-bottom: 20px;
  margin-top: 20px;
}
</style>
