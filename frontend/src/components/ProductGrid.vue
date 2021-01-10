<template>
  <div>
    {{ setPageItems() }}
    <div class="row row-cols-1 row-cols-md-4 g-4" style="margin: 10px">
      <div class="col" v-for="(product, i) in pageProducts" :key="i">
        <div
          class="card text-white bg-dark ms-3 border-primary"
          style="max-width: 18rem"
        >
          <img src="@/assets/cardImg.jpg" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{{ product.name }}</h5>
            <p class="card-text">{{ product.description }}</p>
            <button class="btn btn-primary" type="button" data-container="body" data-toggle="popover" data-placement="top" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." v-on:click="addItemToCart(product.id)"
              >Add to Cart</button
            >
          </div>
        </div>
      </div>
    </div>

    <div class="d-flex justify-content-center">
      <nav
        aria-label="Page navigation"
        style="margin: 35px; margin-top: 20px; margin-bottom: 450px"
      >
        <ul class="pagination pagination-circle">
          <li class="page-item active">
            <a
              class="page-link"
              href="#"
              aria-label="Previous"
              v-on:click="
                setPageNum(page - 1);
                setPageItems();
              "
            >
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>

          <li
            class="page-item"
            v-for="index in Math.ceil(products.length / itemsPerPage)"
            :key="index"
          >
            <a
              class="page-link"
              href="#"
              v-on:click="
                setPageNum(index - 1);
                setPageItems();
              "
              >{{ index }}</a
            >
          </li>

          <li class="page-item active">
            <a
              class="page-link"
              href="#"
              aria-label="Next"
              v-on:click="
                setPageNum(page + 1);
                setPageItems();
              "
            >
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
import ProductService from "@/services/ProductService";
import CartService from "@/services/CartService";
import axios from "axios";

export default {
  data() {
    return {
      products: [
        //24
        /*
        {title:'Lenovo', description:'Page 1'},
        {title:'Samsung', description:'Page 1'},
        {title:'Nokia', description:'Page 1'},
        {title:'Apple', description:'Page 1'},
        {title:'Huawei', description:'Page 1'},
        {title:'Xiaomi', description:'Page 1.'},
        {title:'Accer', description:'Page 1.'},
        {title:'Assus', description:'Page 1.'},
        {title:'Dell', description:'Page 1.'},
        {title:'Hama', description:'Page 1.'},
        {title:'Levis', description:'Page 1.'},
        {title:'Amazon', description:'Page 1.'},
        {title:'Lenovo', description:'Page 2.'},
        {title:'Samsung', description:'Page 2.'},
        {title:'Nokia', description:'Page 2.'},
        {title:'Apple', description:'Page 2.'},
        {title:'Huawei', description:'Page 2.'},
        {title:'Xiaomi', description:'Page 2.'},
        {title:'Accer', description:'Page 2.'},
        {title:'Assus', description:'Page 2.'},
        {title:'Dell', description:'Page 2.'},
        {title:'Hama', description:'Page 2.'},
        {title:'Levis', description:'Page 2.'},
        {title:'Hama', description:'Page 2.'},   
        {title:'Amazon', description:'Page 3.'},
        {title:'Amazon', description:'Page 3.'},
        {title:'Amazon', description:'Page 3.'},
        {title:'Amazon', description:'Page 3.'},
        {title:'Amazon', description:'Page 3.'},
        {title:'Amazon', description:'Page 3.'},
        {title:'Amazon', description:'Page 3.'},
        {title:'Amazon', description:'Page 3.'},
        {title:'Amazon', description:'Page 3.'},
        {title:'Amazon', description:'Page 3.'},
        {title:'Amazon', description:'Page 3.'},
        {title:'Amazon', description:'Page 3.'},
        {title:'Amazon', description:'Page 4.'}
        
      */
      ],
      pageProducts: [],
      page: 0,
      itemsPerPage: 12,
    };
  },

  methods: {
    getProducts() {
      ProductService.getProducts()
        .then(
          (response) => (
            console.log(response.data), (this.products = response.data)
          )
        )
        .catch((error) => {
          console.log(error);
        });

      console.log("Products in Products: " + this.products.length);
    },

    setPageItems() {
      console.log("Products in Items: " + this.products.length);

      this.pageProducts = this.products.slice(
        this.page * this.itemsPerPage,
        this.page * this.itemsPerPage + this.itemsPerPage
      );
    },

    setPageNum(pageNum) {
      if (pageNum == Math.ceil(this.products.length / this.itemsPerPage))
        this.page = Math.ceil(this.products.length / this.itemsPerPage - 1);
      else if (pageNum < 0) this.page = 0;
      else this.page = pageNum;
    },

    addItemToCart(id) {
      CartService.addCartItem(id)
        .then((response) => console.log(response))
        .catch((error) => {
          console.log(error);
        });
    },
  },


  beforeMount() {
    axios.get("http://localhost:8000/login/mayo@gmail.com/123456"); // OBRISATI

    this.getProducts();
  },
};

</script>


