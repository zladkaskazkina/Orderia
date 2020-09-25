<template>
  <div id="app">
    <h1>APP</h1>
    <router-link to="/">Home</router-link>
    <router-link to="/login">login</router-link>
    <router-link to="/registrace">Registrace</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>
