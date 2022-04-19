<template>
  <div class="new-product-container">
    <input type="text" placeholder="Product title" v-model="title" />
    <input type="text" placeholder="Product price" v-model="price" />
    <input
      type="text"
      placeholder="Product description"
      v-model="description"
    />
    <input type="text" placeholder="Product image" v-model="image" />
    <!-- <input type="text" placeholder="Product category" v-model="category" /> -->
    <select @change="productCat()">
      <option value="">Select category</option>
      <option value="men's clothing">Men's clothing</option>
      <option value="women's clothing">Women's clothing</option>
      <option value="electronics">Electronics</option>
      <option value="jewelery">Jewelery</option>
    </select>
    <button class="submit-btn" v-if="isLoading">
      <i v-if="isLoading" class="fa fa-spinner fa-spin"></i>
    </button>
    <button v-else class="submit-btn" @click="addNewProduct()">ADD</button>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";
import Product from "@/framework/sub-modules/store/modules/product";
export default class NewProduct extends Vue {
  public title = "";
  public price = "";
  public description = "";
  public image = "";
  public category = "";
  public isLoading = false;

  public async productCat(): Promise<void> {
    const elem = event?.target as HTMLInputElement;
    if (elem.value !== "All") {
      this.category = elem.value;
    } else {
      this.category = "";
    }
  }

  public async addNewProduct(): Promise<void> {
    if (
      this.title !== "" &&
      this.price !== "" &&
      this.description !== "" &&
      this.image !== "" &&
      this.category !== ""
    ) {
      const newProduct = {
        title: this.title,
        price: this.price,
        description: this.description,
        image: this.image,
        category: this.category,
      };
      this.isLoading = true;
      try {
        await Product.addNewProduct(newProduct);
        alert("Product added successfully");
      } catch (error) {
        //console.log(error);
      } finally {
        this.title = "";
        this.price = "";
        this.description = "";
        this.image = "";
        this.category = "";
        this.isLoading = false;
      }
    } else {
      alert("Please fill all the fields");
    }
  }
}
</script>

<style>
*,
*::before,
*::after {
  box-sizing: border-box;
}
.new-product-container {
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
  width: 40vw;
  height: 100%;
  padding: 40px;
  box-shadow: 0px 1px 3px black;
  border-radius: 8px;
}
.new-product-container input {
  border: none;
  width: 90%;
  height: 20px;
  border-bottom: 1px solid black;
  outline: none;
  border-radius: 8px;
  padding: 10px;
  font-size: 18px;
  color: rgb(79, 77, 77);
}
.submit-btn {
  width: 150px;
  padding: 10px;
  font-size: 18px;
  border-radius: 8px;
  border: none;
  background: teal;
  color: white;
}
.new-product-container select {
  width: 31vw;
  height: 40px;
  /* appearance: none; */
  background-color: transparent;
  border: none;
  padding: 0 1em 0 10px;
  margin: 0;
  font-family: inherit;
  font-size: 18px;
  /* cursor: inherit; */
  line-height: inherit;
  outline: none;
  border-bottom: 1px solid black;
  border-radius: 8px;
  color: rgb(79, 77, 77);
}
</style>
