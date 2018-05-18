// //JSON.parse(sessionStorage.getItem('user')) || {},
export default {
    state: {
        roles: [],
        username: ''
    },
    mutations: {
        USER_SIGNIN: (state, user) => {
            sessionStorage.setItem('user', JSON.stringify(user))
            state.user = JSON.parse(sessionStorage.getItem('user')).username //{"username":"admin","password":"admin"}
            Object.assign(state, user)
        }
    },
    actions: {
        user_signin: (context, user) => {
            context.commit("USER_SIGNIN", user)
        }
    }
}