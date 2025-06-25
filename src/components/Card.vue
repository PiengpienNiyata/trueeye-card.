<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  site: string
  approver: string
  username: string
  used: number
  total: number
}>()

const percent = computed(() => (props.used / props.total) * 100)

const status = computed(() => {
  if (percent.value === 100) return 'success'
  if (percent.value < 20) return 'error'
  return 'warning'
})

const barColor = computed(() => {
  if (status.value === 'success') return 'bg-green-500'
  if (status.value === 'warning') return 'bg-yellow-400'
  return 'bg-red-500'
})

const textColor = computed(() => {
  if (status.value === 'success') return 'text-green-600'
  if (status.value === 'warning') return 'text-yellow-500'
  return 'text-red-600'
})
</script>

<template>
  <div class="p-4 rounded-xl shadow-md bg-white">
    <h2 class="font-bold text-lg">{{ props.site }}</h2>
    <p>ชื่อผู้รับผิดชอบ <span class="font-medium">{{ props.approver }}</span></p>
    <p>Username <span class="font-medium">{{ props.username }}</span></p>
    <p class="mt-2 font-semibold">
      สิทธิ์การใช้งาน
      <span :class="textColor">{{ props.used }} /{{ props.total }}</span>
    </p>
    <div class="mt-1 w-full h-2 bg-gray-200 rounded overflow-hidden">
      <div :class="barColor" :style="{ width: `${percent}%` }" class="h-full"></div>
    </div>
    <div class="mt-2 text-right text-xl">
      <span v-if="status === 'success'">
        <img src="/src/assets/check.svg" alt="Check Icon" class="inline-block w-6 h-6" />
      </span>
      <span v-else-if="status === 'warning'">
        <img src="/src/assets/warning.svg" alt="Warning Icon" class="inline-block w-6 h-6" />
      </span>
      <span v-else>
        <img src="/src/assets/error.svg" alt="Error Icon" class="inline-block w-6 h-6" />
      </span>
    </div>
  </div>
</template>
