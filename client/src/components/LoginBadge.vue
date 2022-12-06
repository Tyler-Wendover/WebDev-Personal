<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import session, { goLogin, isSignedIn, logout, goRegister, } from "../stores/session";

const router = useRouter();
const isActive = ref(false);
</script>

<template>
  <div class="buttons" v-if="session.user == null">
    <a class="button new-primary" @click="goRegister()">
      <strong>Sign up</strong>
    </a>
    <a class="button new-primary" @click="goLogin()"> Log in </a>
  </div>
  <div v-else>
    <div class="dropdown" :class="{ 'is-active': isActive}">
      <div class="dropdown-trigger">
        <button
          class="button new-primary"
          aria-haspopup="true"
          aria-controls="dropdown-menu3"
          @click="isActive = !isActive"
        >
          <span>@ {{ session.user.username}}</span>
          <span class="icon is-small">
            <i class="fas fa-angle-down" aria-hidden="true"></i>
          </span>
        </button>
      </div>
      <div class="dropdown-menu" id="dropdown-menu3" role="menu">
        <div class="dropdown-content">
          <a href="#" class="dropdown-item"> Profile </a>
          <a v-if="(session.user.isAdmin === true)" class="dropdown-item" @click="router.push('/users')"> Admin </a>
          <a @click="goLogin(); logout()" class="dropdown-item"> Logout </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
button {
  margin-top: 5px;
}
</style>
