<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Sidebar from '@/components/Sidebar.vue'
</script>

<template>
  <div class="flex h-screen bg-gray-50">
    <Sidebar />

    <div class="flex-grow flex flex-col overflow-hidden">
      <header class="bg-white shadow h-[120px] flex items-center justify-center z-10">
      </header>

      <main class="flex-grow overflow-y-auto p-6">
        <RouterView />
      </main>
    </div>
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
}
</style>
