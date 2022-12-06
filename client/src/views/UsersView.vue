<script setup lang="ts">
import { reactive, ref } from "vue";
import userData from "../../../server/data/users.json";
import session from "../stores/session";
import { deleteUser, getUser, getUsers, type User } from "../stores/users";

const users = reactive([] as User[]);
getUsers().then(x=>users.push(...x.users));

async function deleteConfirmation(user: User) {
  if (confirm(`Are you sure you want to delete ${user.name}?`)) {
    await deleteUser(user._id);
    console.log("deleted");
    console.log(user._id);
    users.splice(users.indexOf(user), 1);
  }
}
</script> 

<template>
  <div>
    <div v-if="session.user?.isAdmin == true">
    <table class="table is-bordered is-fullwidth">
      <thead>
        <tr>
          <th>Username</th>
          <th>Email</th>
          <th>Password</th>
          <th>Is Admin</th>
        </tr>
      </thead>
      <tbody v-for="user in users" :key="user._id">
        <tr>
          <td>{{ user.username }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.password }}</td>
          <td>{{ user.isAdmin }}</td>
          <td>
            <button class="button is-danger" @click="deleteConfirmation(user)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <div v-else>
    <h1 class="title">You need to be an admin to view this page</h1>
  </div>
  </div>
  
</template>

<style scoped></style>
