<template>
  <div class="music">
    <img :src=item.imgee class="card-img-top">
    <h4 class="card-title">{{item.songTitle}}</h4>
    <p class="card-text">By: {{item.artist}}</p>
    <p class="card-text">Genre: {{item.genre}}</p>
    <p class="card-text">Track Number: {{item.songNumber}}</p>
  </div>
</template>

<script>
import {Music} from "@/models/LibraryItems";

export default {
  name: "MusicDetails",
  props: {item:Music},
}
</script>

<style scoped>

</style>