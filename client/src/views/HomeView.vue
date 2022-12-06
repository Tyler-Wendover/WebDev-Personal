<script setup lang="ts">
import session from "../stores/session";
</script>

<template>
  <main>
    <h1 class="title">Welcome</h1>
    <div class="container" v-if="(session.user === null)">
      <div class="notification new-primary">
        <h1>Please sign in to view other pages.</h1>
      </div>
      <router-link to="/login" class="button new-primary">Log in</router-link>
      <router-link to="/register" class="button new-primary">Sign up</router-link>`
    </div>
  </main>
</template>

<style scoped>
.button {
  margin: 0px 10px 0px 0px;
}
</style>