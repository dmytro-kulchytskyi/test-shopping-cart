<template>
  <div>
    <NavBar />
    <div class="container mt-6">
      <div class="columns">
        <div class="column is-12 column--align-center">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import NavBar from "./components/NavBar";
export default {
  name: "App",
  components: {
    NavBar,
  },
};
</script>
<style>
html,
body {
  height: 100%;
  background: #f2f6fa;
}
</style>
