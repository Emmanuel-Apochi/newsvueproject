<script setup>
defineProps({
    title: String,
    description: String,
    published_at: String,
    uuid: String,
    image_url: String,
    categories: String,
})
</script>

<template>
    <h1 class="heading container">TOP NEWS</h1>

    <div class="card-container container">
      <div  v-for="news in news" :key="news">
      <div class="col-md-6">
        <div class="card" style="width: 18rem;">
          <router-link :to="`/newsdetails/${uuid}`">
      <img :src="image_url" class="card-img-top img-fluid" alt="image">
      <div class="card-body"> </div>
        <h3>{{title}} </h3>
        <p class="card-title">{{description}}</p>
        <p class="card-text">{{published_at}} </p>
        </router-link>
        <div><strong><RouterLink>{{ categories}} </RouterLink></strong>
        </div><br>
      </div>
     </div>
     </div>
      </div>
</template>