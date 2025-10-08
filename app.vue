<template>
  <div class="layout-wrapper">
    <AppNavbar />

    <div class="main-content">
      <NuxtPage />
    </div>

    <AppFooter />
  </div>
</template>

<script setup>
import AppNavbar from '~/components/layouts/AppNavbar.vue'
import AppFooter from '~/components/layouts/AppFooter.vue'
</script>

<style>
.layout-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex: 1;
}
</style>
