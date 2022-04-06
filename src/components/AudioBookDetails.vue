<template>
  <div class="audio-book">
    <img :src=item.imgee class="card-img-top">
    <h4 class="card-title">{{item.bookTitle}}</h4>
    <h6 class="card-subtitle mb-2 text muted">{{item.author}}</h6>
    <p class="card-text">{{item.rlsDate}}</p>
    <p class="card-text">{{item.description}}</p>
  </div>
</template>

<script>
import {AudioBook} from "@/models/LibraryItems";

export default {
  name: "AudioBookDetails",
  props: {item:AudioBook}
}
</script>

<style scoped>

</style>