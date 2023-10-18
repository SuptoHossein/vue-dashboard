<script setup>
import headerTop from '../../components/header.vue';
import sidebar from '../../components/sidebar.vue'
</script>

<template>
    <div class="w-full h-tull flex">
        <sidebar />
        <div class="w-full h-full">
            <headerTop />
            <div class="w-full h-[calc(100vh-500px)]">
                <RouterView></RouterView>
            </div>
        </div>
    </div>
</template>