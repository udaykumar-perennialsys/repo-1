<template>
  <div>
    <div class="sort-product">
      <select @change="productCat()" class="sorts">
        <option value="All">Search Product by Category(ALL)</option>
        <option value="men's clothing">Men's Clothing</option>
        <option value="women's clothing">Women's clothing</option>
        <option value="jewelery">Jewelery</option>
        <option value="electronics">Electronics</option>
      </select>
    </div>
    <Loader v-if="isLoading" />
    <div v-else class="product-container">
      <div class="product" v-for="(product, index) in allProduct" :key="index">
        <div class="product-title">
          <router-link :to="{ name: 'product', params: { id: product.id } }">{{
            product.title
          }}</router-link>
        </div>
        <img :src="product.image" alt="" class="product-image" />
        <!-- <div class="product-description">
          {{ product.description }}
        </div> -->
        <div class="product-price">
          {{ `Price:- $${product.price}/-` }}
        </div>
        <div>
          <button class="add-to-cart-btn" @click="addToCart(product)">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Product from "@/framework/sub-modules/store/modules/product";
import { Products } from "../interface";
import router from "@/router";
import Loader from "../components/Loader.vue";
@Component({
  components: {
    Loader,
  },
})
export default class Home extends Vue {
  public allProduct: Products[] = [];
  public cart: Products[] = [];
  public isLoading = false;
  public productCategory: string[] = [];
  public cartItems = localStorage.getItem("cart") as string;
  public cartProducts = JSON.parse(this.cartItems) || [];
  public allCartItem: Products[] = [];

  public mounted(): void {
    this.getProductDetail();
    // this.getProductCategory();
  }

  public async getProductDetail(): Promise<void> {
    this.isLoading = true;
    try {
      await Product.getAllProducts();
      this.allProduct = Product.allProducts;
    } catch (error) {
      // console.log(error)
    } finally {
      this.isLoading = false;
    }
  }
  // public async getProductCategory(): Promise<void> {
  //   try {
  //     //
  //     const response = await Product.getProductCategory();
  //     this.productCategory = response;
  //   } catch (error) {
  //     //
  //   }
  // }

  public async productCat(): Promise<void> {
    const elem = event?.target as HTMLInputElement;
    this.isLoading = true;
    try {
      if (elem.value !== "All") {
        await Product.getProductByCategory(elem.value);
        this.allProduct = Product.allProducts;
      } else {
        this.getProductDetail();
      }
    } catch (error) {
      console.log(error);
    } finally {
      this.isLoading = false;
    }
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  public goToProductDetail(id: number) {
    router.push({
      name: "product",
      params: { id: `${id}` },
    });
  }

  public addToCart(product: Products): void {
    product.count === undefined ? (product.count = 1) : product.count;
    !this.cartProducts.includes(product)
      ? this.cartProducts.push(product)
      : (product.count = product.count + 1);
    localStorage.setItem("cart", JSON.stringify(this.cartProducts));
  }
}
</script>

<style>
.sort-product {
  width: 78vw;
  margin: auto;
  display: flex;
}
.sorts {
  width: 250px;
  height: 50px;
}
option {
  padding: 10px !important;
}
.product-container {
  display: grid;
  grid-template: "div div div";
  padding: 50px 150px;
  grid-gap: 20px;
}
.product {
  max-width: 300px;
  min-width: 200px;
  padding: 20px 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  box-shadow: 0 1px 3px #000000;
  border-radius: 8px;
}
@media (max-width: 910px) {
  .product-container {
    grid-template: "div div";
  }
}

@media (max-width: 768px) {
  .product-container {
    grid-template: "div";
  }
}
.product-title {
  height: 50px;
  color: rgb(52, 50, 50);
}
.product-image {
  width: 150px;
  height: 150px;
  border-radius: 50%;
}
.product-description {
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 13px;
}
.product-price {
  font-weight: bold;
}
.add-to-cart-btn {
  padding: 10px;
  width: 200px;
  background: teal;
  color: #ffffff;
  border-radius: 8px;
  border: none;
  outline: none;
}
/* loader */
</style>
