<template>
    <div class="sidebar">
        <ul class="munu">

            <li v-for="item in routes" v-if="!item.hidden&&item.children">
                <template v-if="item.children.length>1">
                    <p>2{{item.name}}</p>
                    <ul class="submenu">
                        <li v-for="childitem in item.children">
                            <router-link :to="childitem.path" v-if="!childitem.hidden">1{{childitem.name}}</router-link>
                        </li>
                    </ul>
                </template>

                <template v-else>
                    <router-link :to="item.path">3{{item.name}}</router-link>
                </template>

            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        routes: {
            type: Array
        }
    },
    data() {
        return {
            
        }
    }
}
</script>

<style scoped>
.sidebar{
    display: block;
    position: absolute;
    width: 250px;
    left: 0;
    top: 70px;
    bottom:0;
    color: #fff;
    background: #2E363F;
}
.sidebar ul li{
    line-height: 40px;
    list-style-type: none;
    text-align: left;
    text-indent: 40px;
    clear: both;
}
.submenu li{
    text-indent: 60px !important;
}
.sidebar ul a{
    color: #fff;
    text-decoration: none;
}
</style>
