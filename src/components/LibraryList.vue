<template>
  <library-item @add-cart="update" v-for="(item, i) in library" :key="i" :item="item"></library-item>
</template>

<script>
import LibraryItem from "@/components/LibraryItem";

export default {
  name: "LibraryList",
  components: {LibraryItem},
  data(){
    return {
      page: 1
    }
  },
  props:{
    library: {
      type: [],
      required: true,
    }
  },

  methods: {
    update(y){
      this.$emit('update-cart', y)
    }
  }
}
</script>

<style scoped>

</style>