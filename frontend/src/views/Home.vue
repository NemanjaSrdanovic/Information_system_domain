<template>
  <div class="home">
    <Carousel/>
    <h3></h3>
    <h1 style="text-align: center; color:#ffff;">Products</h1>
    <h3></h3>
    <ProductGrid/>
    <Footer/>

  </div>
</template>

<script>
// @ is an alias to /src
import Carousel from '@/components/Carousel.vue'
import ProductGrid from '@/components/ProductGrid.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
    Carousel,
    ProductGrid,
    Footer
  }
};
</script>

<style >

#body{

  background-color: black;
   border-spacing: 15px;
}

</style>

