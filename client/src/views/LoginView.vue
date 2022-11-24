<script setup lang="ts">
  import { login } from '@/stores/session';
  import { ref } from "vue";
  import session, { getInfo } from "../stores/session";
</script>

<template>
  <div class="container">
    <div class="notification is-primary">
      <!--Temporary for the Midterm-->
      <button class="delete"></button>
        <h1>Sign In using:</h1>
        <h2>Username: admin , Password: admin</h2>
        <h2>Username: tyler , Password: password</h2>
        <h2>Username: john ,  Password: password</h2>
    </div>
    <div>
      <label class="label is-medium" for="text">Username</label>
      <input
        class="input is-medium is-dark"
        type="text"
        id="username"
        name="username"
        required
      />
    </div>
    <div>
      <label class="label is-medium" for="password">Password</label>
      <input
        class="input is-medium is-dark"
        type="password"
        id="password"
        name="password"
        required
      />
    </div>
    <div>
      <button class="button new-primary" type="submit" @click="getInfo()">
        Login
      </button>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.label {
  margin: 10px 0 0 0;
}
.input {
  margin: 0 0 10px 0;
  width: 400px;
}
.button {
  margin: 10px 0 0 0;
}
</style>
