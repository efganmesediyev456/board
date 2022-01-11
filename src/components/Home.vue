
<template>
    <div>
        <Header></Header>
        <Boards></Boards>
    </div>
</template>
<script>
    import Header from "./Header"
    import Boards from "./Boards"
    export default {
        name: "Home",
        components:{
            Header, Boards
        },
        mounted:function () {
            if(!localStorage.getItem("user")){
                this.$router.push("/login")
            }
        }
    }
</script>
<style scoped></style>