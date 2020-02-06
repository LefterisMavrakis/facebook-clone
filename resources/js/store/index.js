import Vue from 'vue';
import Vuex from 'vuex';
import User from './modules/user'
import Title from './modules/title'
import Posts from './modules/posts'
import Profile from './modules/profile'

Vue.use(Vuex);

export default new Vuex.Store({
    modules:{
        User,
        Title,
        Posts,
        Profile
    }
});
