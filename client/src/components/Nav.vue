<script setup lang="ts">
import { ref } from "vue";
import { RouterLink } from "vue-router";
import session, { isSignedIn } from "../stores/session";
import LoginBadge from "./LoginBadge.vue";
let isActive = ref(false);
</script>

<template>
  <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <a
          :class="{ 'is-active': isActive }"
          @click="isActive = !isActive"
          role="button"
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div
        id="navbarBasicExample"
        class="navbar-menu"
        :class="{ 'is-active': isActive }"
      >
        <div class="navbar-start">
          <router-link to="/" class="navbar-item"> Home </router-link>

          <router-link class="navbar-item" to="/my-activity" @click="isSignedIn()">
            My Activity
          </router-link>

          <router-link class="navbar-item" to="/friend-activity" @click="isSignedIn()">
            Friend Activity
          </router-link>

        </div>

        <div class="navbar-end">
          <LoginBadge />
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.router-link-active {
  border-bottom: #aa00aa 5px solid;
}
.navbar {
  border-bottom: #aa00aa 5px solid;
}
</style>
