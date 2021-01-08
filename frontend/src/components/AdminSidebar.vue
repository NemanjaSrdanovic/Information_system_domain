<template>

<!--Section: Block Content-->
<section style=" margin-left: 15px; margin-right: 15px;">

  <!--Grid row-->
  <div class="row">

    <!--Grid column-->
    <div class="col-lg-3" style ="margin-top: 100px">

      <!-- Card -->
      <div class="card text-white bg-dark border-primary mb-3">
        <div class="card-body">

<nav id="sidebar">
    <div style="color:white;  text-align:center ">
      <h3>Admin Sidebar</h3>
    </div>
    <ul style="color:white">
       <li class="active">
         <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Home</a>
        <ul class="collapse list-unstyled" id="homeSubmenu">
          <li><a href="#" v-on:click="showTable(1)">Home1</a></li>
          <li><a href="#" v-on:click="showTable(2)">Home2</a></li>
        </ul>
       </li>
      <li><a href="#">About</a></li>
      <li class="active">
         <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Page</a>
        <ul class="collapse list-unstyled" id="pageSubmenu">
          <li><a href="#">Home1</a></li>
          <li><a href="#">Home2</a></li>
        </ul>
      </li>
      <li><a href="#">Policy</a></li>
      <li><a href="#">Contact</a></li>
    </ul>  
  </nav>

        </div>
      </div>
  <!-- Card -->

    </div>
    <!--Grid column-->

    <!--Grid column-->
    <div class="col-lg-8" style="margin-top: 100px">

      <!-- Card -->
<div class="card bg-dark border-primary mb-3"  >
<div class="card-body ">

    <div style="text-align:center; margin-bottom:20px">
      <!-- to change to month change type and format-->
      <date-picker style="text: center" v-model="range" lang="en" range confirm
      type="date" format="YYYY-MM-dd"></date-picker> 
    </div>

<table v-if="showCategoryTable" class="table table-hover table-dark ">
  <thead class="thead-primary">
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(product,index) in products" :key="index">
      <th scope="row">{{index}}</th>
      <td>{{product.title}}</td>
      <td>{{product.description}}</td>
      <td>@mdo</td>
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

</template>


<script>

import DatePicker from 'vue2-datepicker'
import 'vue2-datepicker/index.css';

export default {

  components:{
    DatePicker

  },
  
  data(){
    return{
      products:[ //24 
      
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
          
      ],

      range:'',
      showCategoryTable: false,
      showProductTable: false,
      categoryTableId: 1,
      productTableId: 2
    }
  },

  methods: {

    showTable(tableId){

        if(tableId==this.categoryTableId){

          this.showCategoryTable=true;
          this.showProductTable=false;

        }else if(tableId==this.productTableId){
          this.showCategoryTable=false;
          this.showProductTable=true;
        }else{
          this.showProductTable=false;
          this.showProductTable=false;
        }
    }
  }
}
</script>

<style scoped>

a,
a:hover,
a:focus{
	color: inherit;
	text-decoration: none;
	transition: all 0.3s;
}

#sidebar ul li a{
	padding: 10px;
	font-size: 1.1em;
	display: block;
}

#sidebar ul li a:hover{
	color: #fff;
	background:#0066ff;
}


a[data-toggle="collapse"]{
	position: relative;
}

.dropdown-toggle::after{
	display: block;
	position: absolute;
	top: 50%;
	right: 20%;
	transform: translateY(-50%);
}
ul ul a{
	font-size: 0.9em !important;
	padding-left: 30px !important;
}

ul li
{
    list-style-type: none;
}

.table-hover tbody tr:hover td, .table-hover tbody tr:hover th {
    background: #0066ff;
}


</style>