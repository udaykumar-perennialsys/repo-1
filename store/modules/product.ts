import {
  VuexModule,
  Module,
  Mutation,
  getModule,
  Action,
} from "vuex-module-decorators";
import { Products, RequestBodyProduct } from "../../interface";
import store from "../../store";
import {
  addNewProduct,
  getAllCategory,
  getAllProduct,
  getproductByCategory,
  getSingleProduct,
} from "../../service";
@Module({
  namespaced: true,
  name: "products",
  store,
  dynamic: true,
})
class ProductsModule extends VuexModule {
  public allProducts: Products[] = [];
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
  public productCategory: string[] = [];

  @Mutation
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  public updateProdectDetail(product: Products[]): void {
    this.allProducts = product;
  }
  public updateSingleProduct(product: Products) {
    this.singleProduct = product;
  }

  public updateProductCtaegory(category: string[]) {
    this.productCategory = category;
  }

  @Action({ commit: "updateProdectDetail" })
  async getAllProducts() {
    const products = await getAllProduct();
    return products;
  }
  @Action({ commit: "updateProdectDetail" })
  async getProductByCategory(category: string) {
    const product = await getproductByCategory(category);
    return product;
  }
  @Action({ commit: "updateSingleProduct" })
  async getProductDetail(id: number) {
    const product = await getSingleProduct(id);
    return product;
  }
  @Action({})
  async addNewProduct(product: RequestBodyProduct) {
    const response = await addNewProduct(product);
    return response;
  }
  @Action({ commit: "updateProductCtaegory" })
  async getProductCategory() {
    const category = await getAllCategory();
    return category;
  }
}

export default getModule(ProductsModule);
