<template>
  <div>
    <Loader v-if="isLoading" />
    <!-- {{ singleProduct }} -->
    <div v-else class="detail-container">
      <div class="product-img">
        <img class="p-image" :src="singleProduct.image" alt="" />
      </div>
      <div class="product-details">
        <div>
          {{ singleProduct.title }}
        </div>
        <div>
          {{ singleProduct.description }}
        </div>
        <div class="product-price">
          {{ `Price:- $${singleProduct.price}/-` }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Product from "@/framework/sub-modules/store/modules/product";
import { Products } from "../interface";
import Loader from "./Loader.vue";
@Component({
  components: {
    Loader,
  },
})
export default class ProductDetail extends Vue {
  public isLoading = false;
  public singleProduct: Products = {
    title: "",
    price: 0,
    description: "",
    category: "",
    image: "",
    rating: {
      rate: 0,
      count: 0,
    },
    count: 0,
  };

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  public async mounted(): Promise<void> {
    await this.getSingleProduct();
  }

  public async getSingleProduct(): Promise<void> {
    this.isLoading = true;
    try {
      const response = await Product.getProductDetail(+this.$route.params.id);
      this.singleProduct = response;
    } catch (error) {
      //
    } finally {
      this.isLoading = false;
    }
  }
}
</script>

<style>
.detail-container {
  width: 60vw;
  height: 70vh;
  place-items: center;
  margin: auto;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  box-shadow: 0 1px 3px #000000;
  border-radius: 8px;
  margin-bottom: 100px;
}
.product-img {
  flex: 1;
  display: flex;
  justify-content: center;
}
.p-image {
  width: 50%;
  height: 50%;
}
.product-details {
  padding: 10px 0px;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 50px;
}
.product-details div:nth-child(2) {
  text-align: left;
  font-size: 15px;
}
.product-details div:nth-child(1) {
  text-decoration: underline;
  font-size: 18px;
}

@media (max-width: 768px) {
  .detail-container {
    height: auto;
    flex-direction: column;
    padding: 50px 20px;
  }
  .p-image {
    width: 200px;
    height: 250px;
  }
}
</style>
