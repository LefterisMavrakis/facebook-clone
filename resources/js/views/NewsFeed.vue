<template>
    <div class="flex flex-col items-center py-4">
        <NewPost />

        <p v-if="loading">Loading posts..</p>
        <Post v-else v-for="post in posts.data" :key="post.data.post_id" :post="post" />
    </div>
</template>

<script>
    import NewPost from '../components/NewPost';
    import Post from '../components/Post';
    import {mapGetters} from 'vuex';

    export default {
        name: "NewsFeed",

        components: {
            NewPost,
            Post,
        },
        mounted(){
            this.$store.dispatch('fetchPosts');
        },
        computed:{
            ...mapGetters({
                posts : 'posts'
            })
        }

    }
</script>

<style scoped>

</style>
