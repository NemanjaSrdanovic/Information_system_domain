<template>
<div class="row row-cols-1 row-cols-md-4 g-4" style="margin: 10px;"> 
  <div class="col" v-for="(product,i) in products" :key="i">
    <div class="card text-white bg-dark ms-3 border-primary" style="max-width: 18rem;">
      <img src="@/assets/cardImg.jpg" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">{{product.title}}</h5>
        <p class="card-text">{{product.description}}</p>
      <a href="#" class="btn btn-primary">Add to Cart</a>
      </div>
    </div>
  </div>  


<nav aria-label="Page navigation example" style="margin: 10px;">
  <ul class="pagination">
    <li class="page-item disabled">
      <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#">Next</a>
    </li>
  </ul>
</nav>
</div>
</template>

<script>
export default {
  data(){
    return{
      products:[
        {title:'Lenovo', description:'This is a longer card with supporting text below as a natural lead-in to additional content.'},
        {title:'Samsung', description:'This is a longer card with supporting text below as a natural lead-in to additional content.'},
        {title:'Nokia', description:'This is a longer card with supporting text below as a natural lead-in to additional content.'},
        {title:'Apple', description:'This is a longer card with supporting text below as a natural lead-in to additional content.'},
        {title:'Huawei', description:'This is a longer card with supporting text below as a natural lead-in to additional content.'},
        {title:'Xiaomi', description:'This is a longer card with supporting text below as a natural lead-in to additional content.'},
        {title:'Accer', description:'This is a longer card with supporting text below as a natural lead-in to additional content.'},
        {title:'Assus', description:'This is a longer card with supporting text below as a natural lead-in to additional content.'},
        {title:'Dell', description:'This is a longer card with supporting text below as a natural lead-in to additional content.'},
        {title:'Hama', description:'This is a longer card with supporting text below as a natural lead-in to additional content.'},
        {title:'Levis', description:'This is a longer card with supporting text below as a natural lead-in to additional content.'},
        {title:'Amazon', description:'This is a longer card with supporting text below as a natural lead-in to additional content.'}
      ]
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>



</style>
