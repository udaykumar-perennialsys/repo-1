import {
  VuexModule,
  Module,
  Mutation,
  getModule,
  Action,
} from "vuex-module-decorators";
import { Products, RequestBodyProduct } from "../../interface";
import store from "../../store";
import { addNewProduct, getAllProduct, getSingleProduct } from "../../service";
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
  };

  @Mutation
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  public updateProdectDetail(product: Products[]): void {
    this.allProducts = product;
  }
  public updateSingleProduct(product: Products) {
    console.log(product);
    this.singleProduct = product;
  }

  @Action({ commit: "updateProdectDetail" })
  async getAllProducts() {
    const products = await getAllProduct();
    return products;
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
}

export default getModule(ProductsModule);
