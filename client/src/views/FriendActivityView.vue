<script setup lang="ts">
import { computed, reactive, ref, watch } from "vue";
import { getPosts, type Post } from "../stores/userPosts";

const posts = reactive([] as Post[]);
getPosts().then((x) => posts.push(...x.posts));

let isActive = ref(false);
</script>

<template>
  <div class="container">
    <div class="columns">
      <div class="column is-half is-offset-one-quarter">
        <h1 class="title">What everyone's up to</h1>
        <hr class="new-primary">
        <div v-for="post in posts" :key="post._id">
          <article class="media">
            <div class="media-content">
              <div class="content">
                <p>
                  <strong>{{ post.name }}</strong>
                  <small>@{{ post.username }} -</small>
                  <small> {{ post.date }}</small>
                  <br />
                  <strong class="subtitle">{{ post.title}}</strong> 
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
          </article>
          <hr>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
