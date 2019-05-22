<template>
    <ul class="navbar-nav ml-lg-auto">

        <li class="nav-item">
            <router-link class="nav-link" to="/login">Login</router-link>
        </li>
        <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
        </li>
        <li class="nav-item">
            <router-link class="nav-link" to="/profile">Profile</router-link>
        </li>
        <li class="nav-item">
            <router-link class="nav-link" to="/transactions">Transactions</router-link>
        </li>

         <li class="nav-item">
            <a class="nav-link nav-link-icon" href="#">
                <i class="fa fa-facebook-square"></i>
                <span class="nav-link-inner--text d-lg-none">Share</span>
            </a>
        </li>
        <li class="nav-item">
            <a class="nav-link nav-link-icon" href="#">
                <i class="fa fa-twitter"></i>
                <span class="nav-link-inner--text d-lg-none">Tweet</span>
            </a>
        </li>
        <li class="nav-item">
            <a class="nav-link nav-link-icon" href="#">
                <i class="fa fa-pinterest"></i>
                <span class="nav-link-inner--text d-lg-none">Pin</span>
            </a>
        </li>
        <li class="nav-item">
            <a class="nav-link nav-link-icon" href="#">
                <i class="fa fa-instagram"></i>
                <span class="nav-link-inner--text d-lg-none">Instagram</span>
            </a>
        </li>

        <li class="nav-item">
             <a class="nav-link nav-link-icon" href="/login"  @click="logout()">Logout</a>
        </li>

    </ul>
</template>
<script>
    export default {
        methods: {
            logout: function() {
                console.log('logging out')
                localStorage.setItem("authenticated", "false")

                this.$router.push({
                    path: "/login"
                });
            }
        }
    };
</script>
<style>
</style>
