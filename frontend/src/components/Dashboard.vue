<template>
  <!--Section: Block Content-->
  <section v-if="employeeLoggedIn" style="margin-left: 15px; margin-right: 15px">
    <!--Grid row-->
    <div class="row">
      <!--Grid column-->
      <div class="col-lg-3" style="margin-top: 100px; margin-bottom: 450px">
        <!-- Card -->
        <div class="card text-white bg-dark border-primary mb-3">
          <div class="card-body">
            <nav id="sidebar">
              <div style="color: white; text-align: center">
                <h3>Dashboard</h3>
              </div>
              <ul style="color: white">
                <li class="active">
                  <a
                    href="#homeSubmenu"
                    data-toggle="collapse"
                    aria-expanded="false"
                    class="dropdown-toggle"
                    v-on:click="
                      showTable(0);
                      resetVariables();
                      closeDropdown();
                    "
                    >Reports
                  </a>
                  <ul class="collapse list-unstyled" id="homeSubmenu">
                    <li>
                      <a
                        href="#/account"
                        v-on:click="
                          showTable(1);
                          resetVariables();
                        "
                        >Category sales report
                      </a>
                    </li>
                    <li>
                      <a
                        href="#/account"
                        v-on:click="
                          showTable(2);
                          resetVariables();
                        "
                        >Product sales report</a
                      >
                    </li>
                  </ul>
                </li>
                <li class="active">
                  <a
                    href="#pageSubmenu"
                    data-toggle="collapse"
                    aria-expanded="false"
                    class="dropdown-toggle"
                    >Products</a
                  >
                  <ul class="collapse list-unstyled" id="pageSubmenu">
                    <li><a href="#">Add product</a></li>
                    <li><a href="#">Edit product</a></li>
                    <li><a href="#">Remove product</a></li>
                  </ul>
                </li>
                <li><a href="#">Charts</a></li>
                <li><a href="#">Profile</a></li>
                <li><a href="#">Support</a></li>
              </ul>
            </nav>
          </div>
        </div>
        <!-- Card -->
      </div>
      <!--Grid column-->

      <!--Grid column-->
      <div
        class="col-lg-8"
        style="margin-top: 100px; margin-bottom: 450px"
        v-if="showCategoryTable || showProductTable"
      >
        <!-- Card -->
        <div class="card bg-dark border-primary mb-3">
          <div class="card-body">
            <div style="text-align: center; margin-bottom: 20px">
              <date-picker
                style="text: center"
                v-model="range"
                lang="en"
                range
                confirm
                type="date"
                value-type="format"
                format="YYYY-MM-DD"
                placeholder="Chose the report range"
              ></date-picker>

              <button
                type="button"
                class="btn btn-primary active btn-sm"
                style="margin-left: 10px"
                v-on:click="getCategoryData(range)"
              >
                Load
              </button>
            </div>

            <table
              class="table table-hover table-dark"
              v-if="showCategoryTable"
            >
              <thead class="thead-primary">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Category</th>
                  <th scope="col">Item name</th>
                  <th scope="col">Items sold</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(product, index) in categoryReportTable"
                  :key="index"
                >
                  <th scope="row">{{ index }}</th>
                  <td>{{ product.title }}</td>
                  <td>{{ product.description }}</td>
                  <td>1</td>
                </tr>
              </tbody>
            </table>

            <table class="table table-hover table-dark" v-if="showProductTable">
              <thead class="thead-primary">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">User name</th>
                  <th scope="col">Item name</th>
                  <th scope="col">Items sold</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(product, index) in productReportTable" :key="index">
                  <th scope="row">{{ index }}</th>
                  <td>{{ product.title }}</td>
                  <td>{{ product.description }}</td>
                  <td>1</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <!-- Card -->
      </div>
      <!--Grid column-->
    </div>
    <!--Grid row-->
  </section>
  <!--Section: Block Content-->

  <div v-else><SignInSignUp /></div>

</template>


<script>
import SignInSignUp from "@/components/SignIn_SignUp.vue";
import AuthService from "@/services/AuthService";
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";

export default {
  components: {
    SignInSignUp,
    DatePicker
  },

  data() {
    return {
      products: [
   

        { title: "Lenovo", description: "Page 1" },
        { title: "Samsung", description: "Page 1" },
        { title: "Nokia", description: "Page 1" },
        { title: "Apple", description: "Page 1" },
        { title: "Huawei", description: "Page 1" },
        { title: "Xiaomi", description: "Page 1." },
        { title: "Accer", description: "Page 1." },
        { title: "Assus", description: "Page 1." },
        { title: "Dell", description: "Page 1." },
        { title: "Hama", description: "Page 1." },
        { title: "Levis", description: "Page 1." },
        { title: "Amazon", description: "Page 1." },
        { title: "Lenovo", description: "Page 2." },
        { title: "Samsung", description: "Page 2." },
      ],

      range: "",
      showCategoryTable: false,
      showProductTable: false,
      categoryTableId: 1,
      productTableId: 2,
      categoryReportTable: [],
      productReportTable: [],
      employeeLoggedIn: false
    };
  },

  methods: {
    showTable(tableId) {
      if (tableId == this.categoryTableId) {
        this.showCategoryTable = true;
        this.showProductTable = false;
      } else if (tableId == this.productTableId) {
        this.showCategoryTable = false;
        this.showProductTable = true;
      } else {
        this.showProductTable = false;
        this.showProductTable = false;
      }
    },

    getCategoryData(range) {
      console.log("RANGE:");
      console.log(range);

      //UBACITI AXIOS

      this.categoryReportTable = this.products.slice(0, 5);
    },

    resetVariables() {
      this.categoryReportTable = [];
      this.productReportTable = [];
      this.range = "";
    },
    closeDropdown() {
      if (this.showCategoryTable == true || this.showProductTable == true) {
        location.reload();
      }
    },

    isEmployeeLogedIn() {
      AuthService.isEmployeeLogedIn()
        .then((response) => (this.employeeLoggedIn = response.data))
        .catch((error) => {
          console.log(error);
        });

    }
  },
    beforeMount() {
    this.isEmployeeLogedIn();
  }
};
</script>

<style scoped>
a,
a:hover,
a:focus {
  color: inherit;
  text-decoration: none;
  transition: all 0.3s;
}

#sidebar ul li a {
  padding: 10px;
  font-size: 1.1em;
  display: block;
}

#sidebar ul li a:hover {
  color: #fff;
  background: #0066ff;
}

a[data-toggle="collapse"] {
  position: relative;
}

.dropdown-toggle::after {
  display: block;
  position: absolute;
  top: 50%;
  right: 20%;
  transform: translateY(-50%);
}
ul ul a {
  font-size: 0.9em !important;
  padding-left: 30px !important;
}

ul li {
  list-style-type: none;
}

.table-hover tbody tr:hover td,
.table-hover tbody tr:hover th {
  background: #0066ff;
}
</style>