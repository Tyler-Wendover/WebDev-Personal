<script setup lang="ts">
import session, { goLogin, isSignedIn, logout } from "../stores/session";
</script>

<template>
  <div class="buttons" v-if="session.user == null">
    <!-- Add Back when signup works
    <a class="button new-primary">
      <strong>Sign up</strong>
    </a>
    -->
    
    <a class="button new-primary" @click="isSignedIn()"> Log in </a>
  </div>
  <div v-else>
    <h1>Welcome {{ session.user.username }}</h1>
    <a @click="logout(); goLogin();">Log out</a>
  </div>
</template>

<style scoped></style>
