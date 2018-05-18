<template>
    <div class="header">
        <div class="logo">后台管理系统</div>
        <div class="user-info">
            
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
               
            }
        }
    }
</script>
<style scoped>
    .header {
        position: relative;
        box-sizing: border-box;
        width: 100%;
        height: 70px;
        font-size: 22px;
        line-height: 70px;
        color: #fff;
        background-color: #242f42;
    }
    .header .logo{
        float: left;
        width:250px;
        text-align: center;
    }
    .user-info {
        float: right;
        padding-right: 50px;
        font-size: 16px;
        color: #fff;
    }
</style>
