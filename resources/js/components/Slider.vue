<template>
    <div class="relative mb-100">
        <div class="imagesWrapper">
            <div v-for="i in [currentIndex]" :key="i">
                <img :src="currentImg" />
            </div>
        </div>
        <div class="flex items-center absolute bottom-10 left-10">
            <a class="prev" @click="prev" href="#">&#10094; Previous</a>
            <a class="next" @click="next" href="#">&#10095; Next</a>
            <a class="pause" @click="pause" href="#">|| Pause</a>
            <a class="pause" @click="startSlide" href="#">|> play</a>
        </div>

    </div>
</template>
<script>
    export default {
        name: "Slider",
        data() {
            return {
                images: [
                    "https://cdn.pixabay.com/photo/2015/12/12/15/24/amsterdam-1089646_1280.jpg",
                    "https://cdn.pixabay.com/photo/2016/02/17/23/03/usa-1206240_1280.jpg",
                    "https://cdn.pixabay.com/photo/2015/05/15/14/27/eiffel-tower-768501_1280.jpg",
                    "https://cdn.pixabay.com/photo/2016/12/04/19/30/berlin-cathedral-1882397_1280.jpg"
                ],
                timer: null,
                currentIndex: 0
            };
        },

        mounted: function() {
            this.startSlide();
        },

        methods: {
            startSlide: function() {
                this.timer = setInterval(this.next, 4000);
            },

            next: function() {
                this.currentIndex += 1;
            },
            prev: function() {
                this.currentIndex -= 1;
            },
            pause: function(){
                clearInterval(this.timer);
            }
        },

        computed: {
            currentImg: function() {
                //console.log(Math.abs(this.currentIndex) % this.images.length);
                return this.images[Math.abs(this.currentIndex) % this.images.length];

            }
        }
    };
</script>
<style scoped>
    .fade-enter-active,
    .fade-leave-active {
        transition: all 0.9s ease;
        overflow: hidden;
        visibility: visible;
        position: absolute;
        width:100%;
        opacity: 1;
    }

    .fade-enter,
    .fade-leave-to {
        visibility: hidden;
        width:100%;
        opacity: 0;
    }

    img {
        height:600px;
        width:100%
    }



    .next {
        right: 0;
    }

    .prev {
        left: 0;
    }

    .prev:hover, .next:hover {
        background-color: rgba(0,0,0,0.9);
    }
</style>
