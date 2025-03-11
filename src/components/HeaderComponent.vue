<script lang="ts" setup></script>

<template>
  <nav class="w-full text-white shadow-md p-8" style="background-color: var(--tertiary-color)">
    <div class="container mx-auto flex items-center justify-between py-4 px-6">
      <!-- Logo -->
      <div class="logo">
        <box-icon class="w-10 h-10 col" name="box" color="white" type="solid"> </box-icon>
      </div>

      <!-- Menu -->
      <div class="hidden md:flex space-x-6 gap-3">
        <router-link to="/" class="nav-link" active-class="text-yellow-400"> Home </router-link>
        <router-link to="/popular" class="nav-link" active-class="text-yellow-400">
          Populares
        </router-link>
      </div>

      <!-- Menu Mobile -->
      <div class="md:hidden">
        <button id="menu-toggle" class="text-white focus:outline-none">☰</button>
      </div>
    </div>
  </nav>
</template>

<style scoped></style>
