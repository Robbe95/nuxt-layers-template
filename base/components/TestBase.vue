<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query'
import { AppButton } from '@wisemen/vue-core'

const query = useQuery()
</script>

<template>
  <div>
    test base
    <AppButton>
      <slot />
    </AppButton>
  </div>
</template>
