<template>
  <nav class="navbar flex justify-between items-center">
    <div>
      <h1 style="font-size: 1.5rem">Filmes</h1>
    </div>
    <ul class="nav-links">
      <li><a href="#">Filmes</a></li>
      <li><a href="#">Series</a></li>
      <li><a href="#">Lançamentos</a></li>
    </ul>
    <div class="profile"></div>
  </nav>
</template>
<script setup lang="ts"></script>
<style>
.navbar {
  background-color: var(--secondary-color);
  padding: 1rem 1.3rem;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 20px;
}

.nav-links li a {
  color: white;
  text-decoration: none;
  padding: 8px 12px;
  border-radius: 5px;
}

.nav-links li a:hover {
  background-color: var(--tertiary-color);
}
</style>
