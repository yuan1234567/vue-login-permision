<template>
	<div>
		<form action="" v-on:submit.prevent="submit">
			<input type="text" value="admin" v-model="userform.username">
			<input type="passwoed" value="123456" v-model="userform.password">
			<input type="submit" value="确 定" style="width:100px;height:30px;background:blue;color:#fff;">
		</form>
	</div>
</template>
<script>
    export default {
        data() {
			return{
				btn: false,
				userform:{
					username: 'admin',
        			password: 'admin'
				}
			}
		},
		methods: {
           submit() {
				this.btn = true
				if(!this.userform.username || !this.userform.password) return
				this.$store.dispatch("user_signin",this.userform)
				//this.loadRoutes()
				this.$router.push('/readme')
				//this.$router.replace({ path: '/readme' })
				//this.$router.push('/readme')
			}
		}
    }
</script>
<style scoped>
	
</style>
