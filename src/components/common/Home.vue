<template>
    <div class="wrapper">
			<v-head></v-head>
            <v-sidebar :routes="routes"></v-sidebar>
            <div class="content">
                <router-view></router-view>
            </div>
    </div>
</template>

<script>
import vHead from './Header'
import VSidebar from './Sidebar'
import store from '../../store/'
    export default {
        components:{
           vHead,
           VSidebar
        },
        computed:{
            routes() {
                return store.getters.routers
            }
        }
        
    }
</script>
<style scoped>
.content{
    background: none repeat scroll 0 0 #fff;
    position: absolute;
    left: 250px;
    right: 0;
    top: 70px;
    bottom:0;
    width: auto;
    padding:40px;
    box-sizing: border-box;
    overflow-y: scroll;
}
</style>

