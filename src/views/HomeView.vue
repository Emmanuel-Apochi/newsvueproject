<script setup>
import axios from 'axios'
import{RouterLink, RouterView} from 'vue-router'
import { onMounted, computed } from 'vue';
import { useStore } from 'vuex';
import {useRoute} from 'vue-router'

const store = useStore();
const router =useRoute();

onMounted(async () => {
  await store.dispatch('fetchNews');
});
const news = computed (() => store.state.news);

onMounted(async () => {
  await store.dispatch('fetchHeadline');
});
const headline = computed (() => store.state.headline);

import NewsCard from '@/components/NewsCard.vue'
</script>

<template>
  
  <div class="card ml item mb-5 img-fluid container " style="width:200rem;">
    <div class="heading-section mt-3">
  <h1 class="heading"><strong>HEADLINE</strong></h1>
  </div>
  <router-link :to="`/newsdetails/${headline.uuid}`">
  <img :src="headline.image_url" class="card-img-top ht" alt="image">
  <div class="card-body"> </div>
    <h5 class="card-title">{{ headline.title }} </h5>
    </router-link>
    <p class="card-text">{{ headline.categories }} </p>
    <p class="card-text"><small class="text-body-secondary">{{ headline.description }}</small></p>
  </div>
 


<h1 class="heading container">TOP NEWS</h1>

    <div class="card-container container">
      <div  v-for="news in news" :key="news">
      <div class="col-md-6">
        <div class="card" style="width: 18rem;">
          <router-link :to="`/newsdetails/${news.uuid}`">
      <img :src="news.image_url" class="card-img-top img-fluid" alt="image">
      <div class="card-body"> </div>
        <h3>{{news.title}} </h3>
        <p class="card-title">{{news.description}}</p>
        </router-link>
          <p class="card-text">{{news.published_at}} </p>
        <div><strong><RouterLink to="/categories">{{ news.categories}} </RouterLink></strong>
        </div><br>
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