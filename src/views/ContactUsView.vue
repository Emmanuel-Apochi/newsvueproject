<script setup>
import {RouterLink,RouterView} from 'vue-router'
</script>


<template>
    <div class="container">
        <h1 class="mt-5 alert alert-success">REACH OUT TO FAD NEWS </h1>

        <hr>
      <form action="https://formsubmit.co/doche2654@gmail.com" method="POST">
        <div class="row mt-3">
            <div class="col-md-6">

                <input type="text" class="form-control" name="" id="" placeholder="Firstname">
            </div>
            <div class="col-md-6">
                <input type="text" class="form-control" name="" id="" placeholder="Surname">
            </div>
        </div>

        <div class="row mt-3">
            <div class="col-md-6">
                <input type="email" class="form-control" name="" id="" placeholder="Email">
            </div>
            <div class="col-md-6">
                <input type="number" class="form-control" name="" placeholder="Phone">
            </div>
        </div>
         <div>
            <textarea name="" id="" cols="30" rows="10" placeholder="Message" class="mt-5 form-control"></textarea>
        </div>
        <button class="mt-2 btn btn-primary" type="submit">Submit</button>
      </form>

    </div>
</template>



<style scoped>
.container{background-color: #f0f0f0;
padding: 20px;
background-position: 6%;
color: #083cca;
font-size: 24px;
z-index: 1;
align-items: center;}
</style>