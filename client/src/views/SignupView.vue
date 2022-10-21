<script setup lang="ts">
const signUp = () => {
  console.log("Sign up");
};
</script>

<template>
  <div class="container">
    <form @submit.prevent="signUp()">
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
        <label class="label is-medium" for="email">Email</label>
        <input
          class="input is-medium is-dark"
          type="email"
          id="email"
          name="email"
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
    </form>

    <div>
      <button class="button new-primary" type="submit">Login</button>
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
