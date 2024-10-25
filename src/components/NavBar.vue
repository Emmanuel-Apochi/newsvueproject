<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>
<template>
<!-- <nav class="navbar bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
      <img src="images/fad 2.jpg" alt="Logo" width="30" height="24" class="d-inline-block align-text-top">
    </a>
  </div>
</nav> -->
  <nav class="navbar navbar-expand-lg bg-body-tertiary" >
    <div class="container-fluid alert alert-primary">
      <a class="navbar-brand" href="#">FAD News</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink to="/" class="nav-link">Home</RouterLink>
          </li>
          <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            News Categories
          </a>
          <ul class="dropdown-menu">
          <div class="container"> 
            <li> <RouterLink to="/categories/business" class="nav-link option"><i class="fa-solid fa-briefcase"></i>Business</RouterLink></li>
            <li><hr class="dropdown-divider"></li>
            <li> <RouterLink to="/categories/technology" class="nav-link"><i class="fa-solid fa-briefcase"></i>Technology</RouterLink></li>
            <li><hr class="dropdown-divider"></li>
             <li> <RouterLink to="/categories/travel" class="nav-link"><i class="fa-solid fa-briefcase"></i>Travel</RouterLink></li>
             <li><hr class="dropdown-divider"></li>
              <li> <RouterLink to="/categories/energy" class="nav-link"><i class="fa-solid fa-briefcase"></i>Energy</RouterLink></li>
            <li><hr class="dropdown-divider"></li>
              <li> <RouterLink to="/categories/earth" class="nav-link"><i class="fa-solid fa-briefcase"></i>Earth</RouterLink></li>
          <li><hr class="dropdown-divider"></li>
              <li> <RouterLink to="/categories/general" class="nav-link"><i class="fa-solid fa-briefcase"></i>General</RouterLink></li>
          </div>
          </ul>
          </li>
           <li class="nav-item">
            <RouterLink to="/about" class="nav-link">About Us</RouterLink>
          </li>
          <li class="nav-item">
             <RouterLink to="/contactus" class="nav-link">Contact Us</RouterLink>
          </li>
        </ul>
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
</nav>
<RouterView />
</template>