<template>
    <ul class="navbar-nav ml-lg-auto">

        <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
        </li>
        <li class="nav-item">
            <router-link class="nav-link" to="/about">About</router-link>
        </li>


        <li class="nav-item">
            <a class="nav-link" href="#">Discover
                <span class="sr-only">(current)</span>
            </a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">Profile</a>
        </li>
        <li class="nav-item dropdown">
            <a class="nav-link" href="#" id="navbar-primary_dropdown_1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Settings</a>
            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbar-primary_dropdown_1">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Something else here</a>
            </div>
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
                <i class="fa fa-google-plus"></i>
                <span class="nav-link-inner--text d-lg-none">Google +</span>
            </a>
        </li>
        <li class="nav-item">
            <a class="nav-link nav-link-icon" href="#">
                <i class="fa fa-instagram"></i>
                <span class="nav-link-inner--text d-lg-none">Instagram</span>
            </a>
        </li>

    </ul>
</template>
<script>
export default {};
</script>
<style>
</style>
