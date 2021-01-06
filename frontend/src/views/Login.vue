<template>
  <div class="login">
      <SignIn />
      <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import SignIn from '@/components/SignIn.vue'
import Footer from '@/components/Footer.vue'

export default {
   name: 'Login',
  components: {
    SignIn,
    Footer
  }
};
</script>
