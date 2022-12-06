<script setup lang="ts">
import { reactive, ref } from "vue";
import { getPosts, createPost, deletePost, type Post } from "../stores/userPosts";
import session, { who } from "../stores/session";
import { useRoute, useRouter } from "vue-router";

const posts = reactive([] as Post[]);
getPosts().then(x=>posts.push(...x.posts));

let isActive = ref(false);

const post = ref({} as Post);
const router = useRouter();

async function makePost() {
  console.log("making post");
  post.value.username = session.user?.username;
  post.value.name = session.user?.name;
  const data = await createPost(post.value);
  posts.splice(0, 0, data);
  router.push("/my-activity");
}

async function deleteConfirmation(post: Post) {
  if (confirm(`Are you sure you want to delete ${post.title}?`)) {
    await deletePost(post._id);
    console.log("deleted");
    console.log(post._id);
    posts.splice(posts.indexOf(post), 1);
  }
}
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
            <form class="modal-card" @submit.prevent="makePost">
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
                    v-model="post.title"
                  />
                </div>
                <div class="field">
                  <label class="label">Description</label>
                  <input
                    class="input"
                    type="text"
                    placeholder="Text input"
                    id="content"
                    v-model="post.content"
                  />
                </div>
                <div class="field">
                  <label class="label">Date</label>
                  <input class="input" type="text" placeholder="Text input" v-model="post.date" />
                </div>
                
              </section>
              <footer class="modal-card-foot">
                <button
                  class="button is-success"
                  @click="isActive = !isActive"
                >
                  Save changes
                </button>
                <button class="button" @click="isActive = !isActive">
                  Cancel
                </button>
              </footer>
            </form>
          </div>
          <!--Outputs the posts in reverse order-->
          <div v-for="post in posts" :key="post._id">
            <div v-if="post.username == session.user?.username">
              <article class="media">
                <div class="media-content">
                  <div class="content">
                    <p>
                      <strong>{{ post.name }}</strong>
                      <small>@{{ post.username }} -</small>
                      <small> {{ post.date }}</small>
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
                  <button class="delete new-primary" @click="deleteConfirmation(post)"></button>
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
