<template>
  <div class="podcast">
    <img :src=item.imgee class="card-img-top">
    <h4 class="card-title">{{item.title}}</h4>
    <p class="card-text">By: {{item.author}}</p>
    <p class="card-text">Release date: {{item.rlsDate}}</p>
    <p class="card-text">Genre: {{item.genre}}</p>
  </div>
</template>

<script>
import {Podcast} from "@/models/LibraryItems";

export default {
  name: "PodcastDetails",
  props: {item:Podcast}
}
</script>

<style scoped>

</style>