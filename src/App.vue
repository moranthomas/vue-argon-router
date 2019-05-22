<template>
  <div id="app">
    <div id="nav">
      <section class="">
        <!-- Navbar default -->
        <base-nav v-for="menu in menus"
                  :key="menu.type"
                  :type="menu.type"
                  effect="dark"
                  expand
                  title="Ethereum Developers Meetup"
                  class="mt-4 lead text-white"
                  :content-id="`navbar-${menu.type}`">
        <img src="../public/img/eth-logo.jpg" width="50px" height="50px"/>
        <component :is="menu.menuComponent"></component>

        </base-nav>

      </section>
    </div>
    <router-view/>
  </div>
</template>

<script>
import BaseNav from "@/components/BaseNav";
import NavMenu from "./views/NavMenu";

export default {
  components: {
    BaseNav,
    NavMenu
  },
  data() {
    return {
      menus: [
        { type: "default", menuComponent: NavMenu },
        //{ type: "primary", menuComponent: Menu2 },
        //{ type: "danger", menuComponent: Menu2 },
        //{ type: "info", menuComponent: Menu2 }
      ]
    };
  }
};
</script>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  margin: 0px 30px 30px 30px;
}

#nav a {
  font-weight: bold;
  /*color: #2c3e50;*/
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
