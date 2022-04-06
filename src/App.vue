<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="#">iTunes</a>
    </nav>

    <div class="boxthing">
      <form class="search-form" @submit.prevent="searchBooks">
        <div class="row align-items-center">
          <div class="col">
            <label for="searchBar"><strong>Enter Song Name</strong></label>
            <input type="text" style="width: fit-content" class="form-control" id="searchBar" name="search"
                   placeholder="The Marias" v-model="searchTerm">
          </div>
          <div class="col">
            <button type="submit" class="btn btn-outline-primary" id="fetch">Fetch</button>
          </div>
        </div>
      </form>
    </div>

    <div class="container-fluid mt-3" id="chickenNuggets">
      <library-list :library="LibraryThingyThing" @update-cart="update"></library-list>
    </div>

    <div class="container-fluid mt-3">
      <h3><strong>Cart</strong></h3>
      <bag-list :bag="bag"></bag-list>
      <button @click="clearCart">Check Out</button>
    </div>
  </div>
</template>

<script>
import LibraryList from "@/components/LibraryList";
import BagList from "@/components/BagList";
import BagCollection from "@/models/BagCollection";
import LibraryCollection from "@/models/LibraryCollection";
import {Music, Podcast, AudioBook} from "@/models/LibraryItems";

const axios = require('axios').default;

export default {
  name: 'App',
  components: {
    LibraryList,
    BagList,
  },

  data() {
    return {
      searchTerm: '',
      searchResults: [],
      bag: new BagCollection(),
      LibraryThingyThing: new LibraryCollection(),
    }
  },

  methods: {
    update(y){
      console.log('bag thing',y)
      this.bag.addItem(y)
    },

    clearCart(){
      this.bag.forEach(x => x.checkOut())
      this.bag.splice(0)
    },

    randoFunk(){
      for (let i = 0; i < this.searchResults.length; i++){
        console.log('results', this.searchResults[i].kind)
        if (this.searchResults[i].kind === 'song'){
          this.LibraryThingyThing.addItem(new Music(this.searchResults[i].artworkUrl100 ,this.searchResults[i].trackName, this.searchResults[i].artistName, this.searchResults[i].primaryGenreName, this.searchResults[i].trackNumber))
        }
        else if (this.searchResults[i].kind === 'podcast'){
          this.LibraryThingyThing.addItem(new Podcast(this.searchResults[i].artworkUrl100, this.searchResults[i].trackName, this.searchResults[i].artistName, this.searchResults[i].releaseDate, this.searchResults[i].primaryGenreName))
        } else {
          this.LibraryThingyThing.addItem(new AudioBook(this.searchResults[i].artworkUrl100, this.searchResults[i].artistName, this.searchResults[i].collectionName, this.searchResults[i].releaseDate, this.searchResults[i].description))
        }
      }

      console.log('shtuff',this.LibraryThingyThing)

    },

    searchBooks() {
      // prepare and perform search
      if(this.searchTerm){
        // clear results
        this.searchResults = [];

        // build request arguments
        let url = 'https://itunes.apple.com/search?';
        let config = {
          params:{
            term: this.searchTerm,
            media: 'music, podcast, audiobook',
            entity:'song, podcast, audiobook',
            limit:200,
          },
          responseType: 'json'
        }

        // TODO: build ajax request arguments
        axios.get(url,config)
            .then(response => {
              console.log('api response', response);

              if (response.data.results.length > 0){
                //or without a customer decorator
                this.searchResults = response.data.results
              }
            }).catch(error => {
          console.error('AJAX SEARCH ERROR:', error)

        }).finally(()=>{
          this.randoFunk()
          console.log('song',this.searchResults)
        })
      }
    },
  }
}
</script>

<style>
#chickenNuggets{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding-top: 1rem;
}

.search-form{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>