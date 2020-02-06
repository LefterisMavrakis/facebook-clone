<template>
    <div class="w-1/3 bg-white p-4 border-r border-gray-400">
        <h2 class="font-bold text-2xl tracking-tight">{{pageTitle}}</h2>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';

    export default {
        name: "Sidebar",
        computed:{
            ...mapGetters({
                pageTitle : 'pageTitle'
            })
        }

    }
</script>

<style scoped>

</style>
