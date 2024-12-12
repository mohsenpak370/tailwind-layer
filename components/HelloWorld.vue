<script setup lang="ts">
const { myLayer } = useAppConfig()
</script>

<template>
  <div class="h-screen bg-red-400">
    <h1>Hello World!</h1>
    <pre>{{ myLayer }}</pre>
  </div>
</template>
