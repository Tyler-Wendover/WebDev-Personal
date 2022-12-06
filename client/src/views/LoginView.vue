<script setup lang="ts">
import session, { login } from "../stores/session";
import { getUser, getUsers, type User } from "../stores/users";
import { reactive, ref } from "vue";

const email = ref("");
const name = ref("");
const password = ref("");
const username = ref("");
const isAdmin = ref(false);

const users = reactive([] as User[]);
getUsers().then(x=>users.push(...x.users));

async function signIn( username: string, password: string ) {
  console.log("signing in");
  for( let user of users ) {
    if( user.username === username && user.password === password ) {
      session.user = user;
      console.log("user found");
      console.log(session.user);
      return;
    } else {
      console.log("user not found");
    }
  }
}


</script>

<template>
  <div class="container">
    <div class="notification is-primary">
      <!--Temporary for the Midterm-->
      <button class="delete"></button>
      <h1>Sign In using:</h1>
      <h2>Username: admin , Password: admin</h2>
      <h2>for admin privilages</h2>
    </div>
    <form class="box" @submit.prevent="signIn(username, password)">
      <div class="field">
        <label class="label is-medium">Username</label>
        <input
          class="input is-medium is-dark"
          type="text"
          placeholder="Username"
          v-model="username"
          required
        />
      </div>
      <div>
        <label class="label is-medium" for="password">Password</label>
        <input
          class="input is-medium is-dark"
          type="password"
          placeholder="Password"
          v-model="password"
          required
        />
      </div>
      <div>
        <button class="button new-primary">
          Login
        </button>
      </div>
    </form>
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
