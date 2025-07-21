<template>
    <div>
        <div class="flex border-b mb-4">
            <button v-for="tab in tabs" :key="tab" :class="[
                'px-4 py-2',
                tab === modelValue ? 'border-b-2 border-blue-500 font-bold' : 'text-gray-500'
            ]" @click="$emit('update:modelValue', tab)">
                {{ tab }}
            </button>
        </div>
        <slot />
    </div>
</template>

<script setup>
defineProps({
    modelValue: String
})
defineEmits(['update:modelValue'])

const tabs = []
</script>
