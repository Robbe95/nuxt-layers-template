<script setup lang="ts">
import { AppButton } from '@wisemen/vue-core'

const { myLayer } = useAppConfig()
</script>

<template>
  <div>
    <h1>Hello World! im the app</h1>
    <AppButton>{{ myLayer }}</AppButton>
  </div>
</template>
