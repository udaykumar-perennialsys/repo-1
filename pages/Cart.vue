<template>
  <div>
    <div v-for="item in products" :key="item.id" class="cart-details">
      <img :src="item.image" alt="" />
      <h5>{{ item.title }}</h5>
      <h4 class="cart-price">{{ `Price: $${item.price}` }}</h4>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Products } from "../interface";

@Component({
  components: {},
})
export default class Cart extends Vue {
  public products: Products[] = [];
  public mounted(): void {
    const pro = localStorage.getItem("cart") as string;
    this.products = JSON.parse(pro);
  }
}
</script>

<style>
.cart-details {
  box-shadow: 0px 1px 3px black;
  width: 50vw;
  margin: auto;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}
.cart-details img {
  width: 100px;
  height: 100px;
}
.cart-price {
  min-width: 150px;
}
</style>
