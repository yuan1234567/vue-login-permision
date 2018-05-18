const getters = {
    routers: state => state.permission.routers,
    addRouters: state => state.permission.addRouters,
    roles: state => state.user.roles
}
export default getters