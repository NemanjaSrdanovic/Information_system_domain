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
          <li><a href="#">Home1</a></li>
          <li><a href="#">Home2</a></li>
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

</style>