<template>
    <div class="flex flex-col items-center" v-if="status.user === 'success' && user">

        <div class="relative mb-8 full-width">
            <div class="w-100 h-64 overflow-hidden z-10">
                <img src="https://cdn.pixabay.com/photo/2017/03/26/12/13/countryside-2175353_960_720.jpg" alt="user background image" class="object-cover w-full">
            </div>

            <div class="absolute flex items-center bottom-0 left-0 -mb-8 ml-12 z-20">
                <div class="w-32">
                    <img src="https://cdn.pixabay.com/photo/2014/07/09/10/04/man-388104_960_720.jpg" alt="user profile image" class="object-cover w-32 h-32 border-4 border-gray-200 rounded-full shadow-lg">
                </div>

                <p class="text-2xl text-gray-100 ml-4">{{ user.data.attributes.name }}</p>
            </div>
            <div class="absolute flex items-center bottom-0 right-0 mb-4 mr-12 z-20">
                <button v-if="friendButtonText && friendButtonText !== 'Accept'"
                        class="py-1 px-3 bg-gray-400 rounded"
                        @click="$store.dispatch('sendFriendRequest',$route.params.userId)"
                        :disabled='isFriendRequestDisabled'>
                    {{friendButtonText}}
                </button>
                <button v-if="friendButtonText && friendButtonText === 'Accept'"
                        class="mr-2 py-1 px-3 bg-blue-500 rounded"
                        @click="$store.dispatch('acceptFriendRequest',$route.params.userId)">
                    {{friendButtonText}}
                </button>
                <button v-if="friendButtonText && friendButtonText === 'Accept'"
                        class="mr-2 py-1 px-3 bg-gray-500 rounded"
                        @click="$store.dispatch('ignoreFriendRequest',$route.params.userId)">
                    Ignore
                </button>
            </div>

        </div>

<!--        <Slider/>-->

        <div v-if="status.posts === 'loading' ">Loading posts...</div>

        <div v-else-if="posts.data.length < 1">No posts found. Get started...</div>

        <Post v-else v-for="(post,postKey) in posts.data" :key="postKey" :post="post" />


    </div>
</template>

<script>
    import Post from '../../components/Post';
    import Slider from '../../components/Slider';
    import {mapGetters} from 'vuex';


    export default {
        name: "Show",
        components:{
            Post,
            Slider
        },
        data() {
            return {
                friendRequestDisable: false
            }
        },
        mounted() {
            this.$store.dispatch('fetchUser',this.$route.params.userId);
            this.$store.dispatch('fetchUserPosts',this.$route.params.userId);


        },

        computed:{
            ...mapGetters({
                user: 'user',
                posts: 'posts',
                friendButtonText: 'friendButtonText',
                status: 'status',
              }),
            isFriendRequestDisabled: function(){
                //console.log(this.$store.state.Profile.user.data.attributes.friendship);
                if(this.$store.state.Profile.user.data.attributes.friendship !== null){
                    return !this.friendRequestDisable;
                }

            }

        },
    }
</script>

<style scoped>
.full-width{
    width: 100%;
}
</style>
