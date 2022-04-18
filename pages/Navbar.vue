<template>
  <div class="navigation">
    <div class="logo">
      <router-link to="/" class="logo-comp"
        ><img
          src="https://cdn.dribbble.com/users/24078/screenshots/15522433/media/e92e58ec9d338a234945ae3d3ffd5be3.jpg?compress=1&resize=400x300"
          alt=""
      /></router-link>
    </div>
    <div class="nav-links">
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li>
          <router-link to="/add-new-product">Add New Product</router-link>
        </li>
        <li>
          <router-link to="/cart">Cart</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({
  components: {},
})
export default class Navbar extends Vue {}
</script>

<style>
.navigation {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px 50px;
  box-shadow: 0 1px 3px #000000;
  margin-bottom: 50px;
  position: sticky;
  top: 0;
  background: white;
}
.logo {
  float: left;
}
.nav-links {
  float: right;
}
.nav-links ul {
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  gap: 50px;
}
a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}
.router-link-exact-active {
  color: #ffffff;
  background: teal;
  padding: 10px;
  border-radius: 8px;
}
.logo-comp {
  background: none;
}
.logo-comp img {
  width: 100px;
  height: 30px;
}
</style>
