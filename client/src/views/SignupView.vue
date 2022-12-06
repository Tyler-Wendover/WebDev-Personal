<script setup lang="ts">
import session, { login } from "../stores/session";
import { reactive, ref } from 'vue';
import { createUser, getUser, getUsers, type User } from '@/stores/users';
import { useRoute, useRouter } from "vue-router";

const email = ref("");
const name = ref("");
const password = ref("");
const username = ref("");

const route = useRoute();
const router = useRouter();

const newUser = ref({} as User);

const users = reactive([] as User[]);
getUsers().then(x=>users.push(...x.users));


async function signUp() {
  console.log("Signing up");
  for( let user of users ) {
    if( user.username === newUser.value.username ) {
      console.log("user already exists");
      return;
    } else {
      console.log("creating user");
      newUser.value.isAdmin = false;
      const data = await createUser(newUser.value);
      session.user = data;
      console.log(session.user);
      router.push("/my-activity");
      return;
      
    }
  }
};
</script>

<template>
  <div class="container">
    <form class="box" @submit.prevent="signUp">
      <div>
        <label class="label is-medium" for="text">Name</label>
        <input
          class="input is-medium is-dark"
          type="text"
          id="name"
          name="name"
          v-model="newUser.name"
          required
        />
      </div>
      <div>
        <label class="label is-medium" for="text">Username</label>
        <input
          class="input is-medium is-dark"
          type="text"
          id="username"
          name="username"
          v-model="newUser.username"
          required
        />
      </div>
      <div>
        <label class="label is-medium" for="email">Email</label>
        <input
          class="input is-medium is-dark"
          type="email"
          id="email"
          name="email"
          v-model="newUser.email"
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
          v-model="newUser.password"
          required
        />
      </div>
      <div>
      <button class="button new-primary" type="submit">Register</button>
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
