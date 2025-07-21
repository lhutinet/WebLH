<template>
    <div v-if="modelValue === name">
        <slot />
    </div>
</template>

<script setup>
defineProps({
    modelValue: String,
    name: String
})
</script>
