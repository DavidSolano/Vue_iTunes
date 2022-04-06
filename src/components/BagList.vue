<template>
  <div class="card-columns">
    <LibraryItem v-for="(item, i) in bag" :key="i" :item="item"></LibraryItem>
  </div>
</template>

<script>
import LibraryItem from "@/components/LibraryItem";

export default {
  name: "BagList",
  components: {LibraryItem},
  props: {
    bag: {
      type: []
    }
  }
}
</script>

<style scoped>

</style>