<template>
  <div class="card" style="max-width: 18rem;" :class="{'border-success': item.isAvailable()}">
    <div class="card body">
      <component :is="typeOfItem" :item="item"></component>
    </div>
    <div class="card-footer">
      <button v-if="item.isAvailable()" @click="item.checkOut()">Check Out</button>
      <button v-else @click="item.checkIn()">Check In</button>

      <button @click="item.remove()">Remove</button>
      <button @click="$emit('add-cart', item)">Add to Cart</button>
    </div>
  </div>
</template>

<script>
import MusicDetails from "@/components/MusicDetails";
import PodcastDetails from "@/components/PodcastDetails";
import AudioBookDetails from "@/components/AudioBookDetails";

export default {
  name: "LibraryItem",
  components: {MusicDetails, PodcastDetails, AudioBookDetails},
  props: {
    item: {
      type: Object,
      required: true,
    },
    removeMethod: {
      type: Function,
    }
  },
  computed: {
    typeOfItem() {
      return this.item.constructor.name + 'Details'
    }
  }
}
</script>

<style scoped>

</style>