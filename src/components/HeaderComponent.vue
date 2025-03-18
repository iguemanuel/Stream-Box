<script setup lang="ts"></script>

<template>
  <nav class="navbar">
    <div class="logo">
      <h1>🎬 Stream View</h1>
    </div>
    <ul class="nav-links">
      <li><RouterLink to="/">Home</RouterLink></li>
      <li><RouterLink to="/series">Séries</RouterLink></li>
      <li><RouterLink to="/releases">Filmes</RouterLink></li>
      <li><RouterLink to="/favorites">Favoritos</RouterLink></li>
    </ul>
    <div class="search">
      <input type="text" placeholder="Buscar..." />
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  background: linear-gradient(135deg, #1f1f1f, #292929);
  color: white;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  border-bottom: 2px solid var(--tertiary-color);
}

.logo h1 {
  font-size: 1.8rem;
  font-weight: bold;
  letter-spacing: 1px;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 1.5rem;
}

.nav-links li a {
  color: white;
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 500;
  padding: 8px 14px;
  border-radius: 6px;
  transition: background 0.3s ease-in-out;
}

.nav-links li a:hover {
  background: rgba(255, 69, 0, 0.8);
  color: white;
}

.search input {
  padding: 8px 12px;
  border: none;
  border-radius: 20px;
  outline: none;
  transition: all 0.3s ease-in-out;
  background: #333;
  color: white;
  width: 160px;
}

.search input::placeholder {
  color: #aaa;
}

.search input:focus {
  width: 200px;
  background: #444;
}

/* Responsividade */
@media (max-width: 768px) {
  .navbar {
    flex-direction: column;
    gap: 10px;
  }

  .nav-links {
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }

  .search input {
    width: 100%;
    max-width: 200px;
  }
}
</style>
