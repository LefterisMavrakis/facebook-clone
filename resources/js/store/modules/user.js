const state = {
    user:null,
    userStatus:null,
};

const getters = {
    authUser: state => {
        return state.user;
    }
};

const actions = {
    fetchAuthUser({commit,state}){
        axios.get('/api/auth-user')
            .then(res => {
                commit('setAuthUser',res.data);
                //console.log(res);
            })
            .catch(error => {
                console.log(error.res.data);
            });
    }
};

const mutations = {
    setAuthUser(state,user){
        state.user = user;
    }
};


export default {
    state,getters,actions,mutations
}
