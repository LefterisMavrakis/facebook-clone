const state = {
    posts: null,
    postsStatus:null,
};

const getters = {
    posts: state => {
        return state.posts
    },
    postStatus: state => {
        return state.postsStatus
    }
};

const actions = {
    fetchPosts({commit,state}){
        axios.get('/api/posts')
            .then(res => {
                commit('setPosts',res.data);
            }).catch(error=>{
            console.log('Unable to fetch posts');
        });

    },
    fetchUserPosts({commit, dispatch}, userId) {
        commit('setPostsStatus', 'loading');

        axios.get('/api/users/' + userId + '/posts')
            .then(res => {
                commit('setPosts', res.data);
                commit('setPostsStatus', 'success');
            })
            .catch(error => {
                commit('setPostsStatus', 'error');
            });
    }
};

const mutations = {
    setPosts(state,posts){
        state.posts = posts;
    },
    setPostsStatus(state, status) {
        state.postsStatus = status;
    },
};


export default {
    state,getters,actions,mutations
}
