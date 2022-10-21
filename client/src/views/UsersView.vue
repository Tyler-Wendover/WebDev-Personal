<script setup lang="ts">
import userData from "../assets/users.json";
import session, { User } from "../stores/session";
</script>

<template>
  <div>
    <div v-if="session.user?.isAdministrator == true">
    <table class="table is-bordered is-fullwidth">
      <thead>
        <tr>
          <th>Username</th>
          <th>Email</th>
          <th>Password</th>
          <th>Is Admin</th>
        </tr>
      </thead>
      <tbody v-for="user in userData" :key="user.id">
        <tr>
          <td>{{ user.username }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.password }}</td>
          <td>{{ user.isAdmin }}</td>
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
