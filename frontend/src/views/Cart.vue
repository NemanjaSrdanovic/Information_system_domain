<template>
  <div class="cart" >
      <Cart />
      <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Cart from '@/components/Cart.vue'
import Footer from '@/components/Footer.vue'

export default {
   name: 'Login',
  components: {
    Cart,
    Footer
  }
};
</script>


<style >

#body{

  background-color: black;

}

</style>