<template>
  <div class="nav">
    <router-link to="/" class="brand">Home</router-link>
    <nav>
      <router-link class="nav-item" to="/login">login</router-link>
      <router-link class="nav-item" to="/registrace">Registrace</router-link>
    </nav>

    <router-view></router-view>
  </div>
</template>

<style scoped>
.brand {
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 1.5em;
  color: #39b982;
  text-decoration: none;
}
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
}
.nav-item {
  box-sizing: border-box;
  margin: 0 5px;
  color: rgba(0, 0, 0, 0.5);
  text-decoration: none;
}
</style>
<script>
export default {
  name: "MainNavbar",
};
</script>
