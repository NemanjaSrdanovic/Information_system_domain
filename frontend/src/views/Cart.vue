<template>
  <div class="cart" style="margin-top: 100px; color:white">
      <Cart />
  </div>
</template>

<script>
// @ is an alias to /src
import Cart from '@/components/Cart.vue'

export default {
   name: 'Login',
  components: {
    Cart
  }
};
</script>

