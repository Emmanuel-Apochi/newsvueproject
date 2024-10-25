<script setup>
import axios from 'axios';
import{RouterLink, RouterView} from 'vue-router';
import { onMounted, computed } from 'vue';
import { useStore } from 'vuex';
import {useRoute} from 'vue-router';

const store = useStore();
const route = useRoute();

onMounted(async () => {
  await store.dispatch('fetchCategoriesByCategories', route.params.categories);
});
const selectedCategories = computed (() => store.state.selectedCategories);
</script>


<template>
  
  <div class="card-container container">
      <div  v-for="selectedCategories in selectedCategories" :key="selectedCategories.uuid">
      <div class="col-md-6">
        <div class="card" style="width: 18rem;">
          <!-- <router-link :to="`/categories/${selectedCategories.categories}`"> -->
      <img :src="selectedCategories.image_url" class="card-img-top img-fluid" alt="image">
      <div class="card-body"> </div>
        <h3>{{selectedCategories.title}} </h3>
        <p class="card-title">{{selectedCategories.description}}</p>
        <p class="card-text">{{selectedCategories.published_at}} </p>
        <div><strong><RouterLink to="/categories">{{ selectedCategories.categories}} </RouterLink></strong>
        </div><br>
          <!-- </router-link> -->
      </div>
     </div>
     </div>
      </div>
      <RouterView />
</template>

<style scoped>
  .card-container{
    display: grid;
  grid-template-columns: repeat(auto-fill,minmax(250px,1fr));
  gap: 70px;
  padding: 20px;
}

</style>