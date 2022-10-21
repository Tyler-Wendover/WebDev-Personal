<script setup lang="ts">
import { ref } from "vue";
import post, { makePost } from "../stores/userPosts";
import postData from "../assets/posts.json";
import session, { who } from "../stores/session";
let isActive = ref(false);
</script>

<template>
  <div>
    <div class="container">
      <div class="columns">
        <div class="column is-half is-offset-one-quarter">
          <button
            class="button new-primary is-fullwidth"
            @click="isActive = !isActive"
          >
            Add Workout
          </button>
          <div
            id="make-workout"
            class="modal"
            :class="{ 'is-active': isActive }"
          >
            <div class="modal-background"></div>
            <div class="modal-card">
              <header class="modal-card-head">
                <p class="modal-card-title">Add Workout</p>
                <button
                  class="delete"
                  aria-label="close"
                  @click="isActive = !isActive"
                ></button>
              </header>
              <section class="modal-card-body">
                <div class="field">
                  <label class="label">Title</label>
                  <input
                    class="input"
                    type="text"
                    placeholder="Text input"
                    id="title"
                  />
                </div>
                <div class="field">
                  <label class="label">Description</label>
                  <input
                    class="input"
                    type="text"
                    placeholder="Text input"
                    id="content"
                  />
                </div>
                <div class="field">
                  <label class="label">Date</label>
                  <input class="input" type="text" placeholder="Text input" />
                </div>
                <div class="field">
                  <label class="label">Picture</label>
                  <input class="input" type="text" placeholder="Text input" />
                </div>
              </section>
              <footer class="modal-card-foot">
                <!--This part not fully working. was trying to make posts in local storage-->
                <button
                  class="button is-success"
                  @click="
                    makePost();
                    isActive = !isActive;
                  "
                >
                  Save changes
                </button>
                <button class="button" @click="isActive = !isActive">
                  Cancel
                </button>
              </footer>
            </div>
          </div>
          <div v-for="post in postData" :key="post.id">
            <div v-if="post.username == session.user.username">
              <article class="media">
                <figure class="media-left">
                  <p class="image is-64x64">
                    <img src="" />
                  </p>
                </figure>
                <div class="media-content">
                  <div class="content">
                    <p>
                      <strong>{{ post.name }}</strong>
                      <small>@{{ post.username }}</small>
                      <small>{{ post.date }}</small>
                      <br />
                      {{ post.content }}
                    </p>
                  </div>
                  <nav class="level is-mobile">
                    <div class="level-left">
                      <a class="level-item">
                        <span class="icon is-small">
                          <i class="fas fa-reply"></i>
                        </span>
                      </a>
                      <a class="level-item">
                        <span class="icon is-small">
                          <i class="fas fa-retweet"></i>
                        </span>
                      </a>
                      <a class="level-item">
                        <span class="icon is-small">
                          <i class="fas fa-heart"></i>
                        </span>
                      </a>
                    </div>
                  </nav>
                </div>
                <div class="media-right">
                  <button class="delete"></button>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.button {
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>
