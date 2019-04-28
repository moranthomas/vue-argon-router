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
                  title="Brand Logo"
                  class="mt-4 lead text-white"
                  :content-id="`navbar-${menu.type}`">
            <div class="row" slot="content-header" slot-scope="{closeMenu}">
                <div class="col-6 collapse-brand">
                    <a href="./index.html">
                        <img src="img/brand/blue.png">
                    </a>
                </div>
                <div class="col-6 collapse-close">
                    <close-button @click="closeMenu" :target="`navbar-${menu.type}`">

                    </close-button>
                </div>
            </div>
            <component :is="menu.menuComponent"></component>
        </base-nav>
    </section>



    </div>
    <router-view/>
  </div>
</template>

<script>
import BaseNav from "@/components/BaseNav";
import CloseButton from "@/components/CloseButton";
import NavMenu from "./views/NavMenu";

export default {
  components: {
    BaseNav,
    CloseButton,
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
