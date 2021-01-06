<template>
  <div class="account">
      <AdminSidebar />
      <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import AdminSidebar from '@/components/AdminSidebar.vue'
import Footer from '@/components/Footer.vue'

export default {
   name: 'Account',
  components: {
    AdminSidebar,
    Footer
  }
};
</script>

