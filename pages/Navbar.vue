<template>
  <div class="navigation">
    <div class="logo">
      <router-link to="/" class="logo-comp"
        ><img src="../../../../public/image/logo.png" alt=""
      /></router-link>
    </div>
    <div class="nav-links">
      <div class="full-navbar">
        <router-link to="/">Home</router-link>
        <router-link to="/add-new-product">Add New Product</router-link>
        <router-link to="/cart">Cart</router-link>
      </div>
      <div class="menu-navbar" @click="toggleNavBar()">
        <div
          :class="
            !showMenuIcon ? 'hamburger-menu' : 'hamburger-menu cross-menu'
          "
        >
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
        </div>
        <div v-if="showMenuIcon" class="menu-items">
          <router-link to="/">Home</router-link>
          <router-link to="/add-new-product">Add New Product</router-link>
          <router-link to="/cart">Cart</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({
  components: {},
})
export default class Navbar extends Vue {
  public showMenuIcon = false;

  public toggleNavBar(): void {
    this.showMenuIcon = !this.showMenuIcon;
  }
}
</script>

<style>
.navigation {
  padding: 20px 70px;
  box-shadow: 0 1px 3px #000000;
  margin-bottom: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  background: white;
}
.nav-links {
  display: flex;
  align-items: center;
  gap: 20px;
}
.full-navbar {
  display: flex;
  align-items: center;
  gap: 20px;
  font-weight: bold;
}
a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}
.router-link-exact-active {
  color: #fff;
  background: teal;
  padding: 10px;
  border-radius: 8px;
}
.menu-navbar {
  display: none;
}
.logo-comp {
  background: transparent;
}

.logo-comp img {
  width: 100px;
  height: 50px;
}
@media screen and (max-width: 700px) {
  .menu-navbar {
    display: block;
  }
  .full-navbar {
    display: none;
  }
  .logo-comp {
    background: transparent;
  }

  .router-link-exact-active {
    color: #fff;
    padding: 0px;
    border-radius: 0px;
    padding-bottom: 10px;
    border-bottom: 1px solid white;
  }
}
@media screen and (max-width: 500px) {
  .logo-comp img {
    width: 50px;
    height: 50px;
  }
  .navigation {
    padding: 20px;
  }
}
.hamburger-menu {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  background: teal;
  padding: 5px;
}
.line {
  width: 40px;
  height: 5px;
  background: white;
  border-radius: 8px;
}
.cross-menu .line:nth-child(1) {
  -webkit-transform: translateY(13px) rotate(45deg);
  -ms-transform: translateY(13px) rotate(45deg);
  -o-transform: translateY(13px) rotate(45deg);
  transform: translateY(13px) rotate(45deg);
}
.cross-menu .line:nth-child(3) {
  -webkit-transform: translateY(-16px) rotate(-45deg);
  -ms-transform: translateY(-16px) rotate(-45deg);
  -o-transform: translateY(-16px) rotate(-45deg);
  transform: translateY(-16px) rotate(-45deg);
}
.cross-menu .line:nth-child(2) {
  opacity: 0;
}

.menu-items {
  position: absolute;
  width: 100%;
  min-width: 400px;
  background: teal;
  top: 90px;
  left: 0px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 20px 70px;
}
.menu-items a {
  color: white;
  text-decoration: none;
}
</style>
