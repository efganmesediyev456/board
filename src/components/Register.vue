<template>
    <div>
        <section class = "ftco-section">
            <div class = "container">

                <div class = "row justify-content-center">
                    <div class = "col-md-6 col-lg-5">

                        <div class = "login-wrap p-4 p-md-5">
                            <div class = "icon d-flex align-items-center">
                                <span class = "fa fa-user-o"></span>
                            </div>
                            <h3 class = "text-center mb-4">Register</h3>
                            <form action = "#" class = "login-form">
                                <div class = "form-group">
                                    <input v-model = "data.name" type = "text" class = "form-control rounded-left"
                                            placeholder = "Username" required>
                                </div>
                                <div class = "form-group">
                                    <input v-model = "data.email" type = "text" class = "form-control rounded-left"
                                            placeholder = "Email" required>
                                </div>
                                <div class = "form-group d-flex">
                                    <input v-model = "data.password" type = "password"
                                            class = "form-control rounded-left" placeholder = "Password" required>
                                </div>
                                <div class = "form-group d-flex">
                                    <input v-model = "data.password_confirmation" type = "password"
                                            class = "form-control rounded-left" placeholder = "Password Repeat"
                                            required>
                                </div>
                                <div style = "text-align: center;
                                 font-weight: 700;font-size: 14px;color: #8d448b; margin:10px 0;" >
                                    Əgər Hesabınız varsa sayta daxil ola bilrsiniz
                                    <router-link style = "text-decoration: none;" to = "/login">
                                        Login
                                    </router-link>
                                </div>

                                <div class = "form-group">
                                    <button style="height: 50px" type = "button" @click = "submit()"
                                            class = "btn btn-primary rounded submit p-3 px-5">Register
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
    import "../assets/fontawesome.css";
    // import("../assets/style.css")


    import axios from "axios"

    export default {

        name: "Register",
        data() {
            return {
                data: {
                    email: "",
                    password: "",
                    password_confirmation:"",
                    name:""
                }
            }
        },
        mounted:function () {
            if(localStorage.getItem("user")){
                this.$router.push("/home")
            }
        },

        methods: {

            submit() {

                let self = this;

                axios.post('http://localhost:8000/api/register', this.data)
                    .then(function (e) {


                        console.log(e)
                       let user={
                           "name":e.data.data.name,
                           "email":e.data.data.email,

                       }
                       localStorage.setItem("user",JSON.stringify(user))
                       localStorage.setItem("token",e.data.token)
                        self.$router.push("/home")
                    })
                    .catch(function (error) {


                        if (error.response) {
                            for (let a in error.response.data.errors) {
                                for (let j in error.response.data.errors[a]) {


                                    self.$toast.error(error.response.data.errors[a][j], {
                                        position:
                                            "top-right"
                                    });

                                }
                            }
                        }

                    })




            }
        }
    }
</script>
<style scoped>

    body{
        font-size: 15px;
        background-color: bisque!important;
    }
    .ftco-section {

        /*margin: auto;*/
        width: 100%;

    }

    section {
        display: block;
    }

    @media (max-width: 576px) {

        .login-wrap{
            width: 400px;

        }
        }






    .text-center {
        text-align: center !important;
    }

    .mb-5, .my-5 {
        margin-bottom: 3rem !important;
    }

    h1, h2, h3, h4, h5, .h1, .h2, .h3, .h4, .h5 {
        line-height: 1.5;
        font-weight: 400;
        font-family: "Lato", Arial, sans-serif;
        color: #000;
    }

    .login-wrap {
        position: relative;
        background: #fff;
        border-radius: 10px;
        -webkit-box-shadow: 0px 10px 34px -15px rgb(0 0 0 / 24%);
        -moz-box-shadow: 0px 10px 34px -15px rgba(0, 0, 0, 0.24);
        box-shadow: 0px 10px 34px -15px rgb(0 0 0 / 24%);
    }
    .p-md-5 {
        padding: 3rem !important;
    }
    .login-wrap .icon {
        width: 80px;
        height: 80px;
        background: #8d448b;
        border-radius: 50%;
        font-size: 30px;
        margin: 0 auto;
        margin-bottom: 10px;
    }

    .align-items-center {
        -webkit-box-align: center !important;
        -ms-flex-align: center !important;
        align-items: center !important;
    }

    .justify-content-center {
        -webkit-box-pack: center !important;
        -ms-flex-pack: center !important;
        justify-content: center !important;
        position:absolute;
        top:50%;
        left: 50%;
        transform: translate(-50%,-50%);
        width: 600px;
        height: 500px;
    }
    .login-wrap h3 {
        font-weight: 700;
        font-size: 20px;
        color: #8d448b;
    }

    .form-control {
        margin-top: 20px;
        width: 100%;
        height: 48px;
        background: rgba(0, 0, 0, 0.15);
        color: #000;
        font-size: 16px;
        -webkit-box-shadow: none;
        box-shadow: none;
        border: 1px solid transparent;
        padding-left: 20px;
        padding-right: 20px;
        -webkit-transition: all 0.2s ease-in-out;
        -o-transition: all 0.2s ease-in-out;
        transition: all 0.2s ease-in-out;
        outline: none;
    }
    .rounded-left {
        border-top-left-radius: 0.25rem !important;
        border-bottom-left-radius: 0.25rem !important;
    }
    .w-50 {
        width: 50% !important;
    }
    .checkbox-primary {
        color: #8d448b;
    }

    element.style {
    }
    .checkbox-primary {
        color: #8d448b;
    }
    .checkbox-wrap {
        display: block;
        position: relative;
        padding-left: 30px;
        margin-bottom: 12px;
        cursor: pointer;
        font-size: 16px;
        font-weight: 500;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
    .form-group .submit {
        position: absolute;
        top: 20px;
        left: 0;
        right: 0;
        margin: 0 auto;
    }
    .btn.btn-primary {
        background: #8d448b !important;
        border: 1px solid #8d448b !important;
        color: #fff !important;
        padding: 25px!important;
        width: 200px;
    }

    .form-group{
        position: relative;
    }

    element.style {
    }
    .form-group .submit {
        position: absolute;
        top: 20px;
        left: 0;
        right: 0;
        margin: 0 auto;
    }
    .btn.btn-primary {
        background: #8d448b !important;
        border: 1px solid #8d448b !important;
        color: #fff !important;
    }
    button:not(:disabled), [type="button"]:not(:disabled), [type="reset"]:not(:disabled), [type="submit"]:not(:disabled) {
        cursor: pointer;
    }
    .btn {
        cursor: pointer;
        border-radius: 40px;
        -webkit-box-shadow: none !important;
        box-shadow: none !important;
        font-size: 15px;
    }
    .pl-5, .px-5 {
        padding-left: 3rem !important;
    }

    .p-3 {
        padding: 1rem !important;
    }

    .rounded {
        border-radius: 0.25rem !important;
    }
    .btn-primary {
        color: #fff;
        background-color: #007bff;
        border-color: #007bff;
    }
    .login-wrap .icon span {
        color: #fff;
    }
    .fa {
        display: inline-block;
        position: absolute;
        margin-top:25px;
        margin-left: 26px;
    }
</style>