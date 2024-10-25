<script setup>
import{RouterLink, RouterView} from 'vue-router'
import { onMounted, computed } from 'vue';
import { useStore } from 'vuex';
import {useRoute} from 'vue-router'


const store = useStore();
const route = useRoute();

onMounted(async () => {
  await store.dispatch('fetchNewsdetailsByUuid', route.params.uuid);
});
const selectedNewsdetails = computed (() => store.state.selectedNewsdetails);

</script>

<template>



    <div class="container mt-5 mb-5">
        <img :src="selectedNewsdetails.image_url" alt="image">
        <p>{{selectedNewsdetails.description}}</p>
        <p>{{selectedNewsdetails.published_at}} </p>
    <RouterLink class="tx" >Source: {{selectedNewsdetails.source}}</RouterLink> <br>
    <button class="but"><a :href="selectedNewsdetails.url">View article</a></button>
    </div>
    <RouterView />
   
</template>
<style scoped>
    .but{
        background-color: #02c96c;
        color: aliceblue;
        border-radius: 5px;
        margin-top: 15px;
        border:none;
        height:50px;
        width: 120px;   
    }
    a{
        color: white;
        text-decoration: none;
    }
    .tx{
        color: black;
    }
</style>