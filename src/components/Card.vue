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
  <div class="p-4 rounded-xl bg-white " style="box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.1);">
    <h2 class="font-bold text-lg mb-1">{{ props.site }}</h2>

    <p class="flex justify-between items-center mb-1">
      <span>ชื่อผู้รับผิดชอบ</span>
      <span class="font-medium text-right">{{ props.approver }}</span>
    </p>

    <p class="flex justify-between items-center mb-2">
      <span>Username</span>
      <span class="font-medium text-right">{{ props.username }}</span>
    </p>

    <div class="mb-1 font-semibold flex items-center justify-between">
      <p class="mb-0">
        <span class="text-gray-400 font-medium">สิทธิ์การใช้งาน</span>
        <br>
        <span :class="textColor">{{ props.used }} /{{ props.total }}</span>
      </p>
      <div class="text-xl flex-shrink-0 mt-5">
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
    <div class="mt-1 w-full h-3 bg-gray-200 overflow-hidden" style="border-radius: 64px;">
      <div :class="barColor" :style="{ width: `${percent}%` }" class="h-full"></div>
    </div>
  </div>
</template>
