<template>
  <div class="account">
      <AdminSidebar />

  </div>
</template>

<script>
// @ is an alias to /src
import AdminSidebar from '@/components/AdminSidebar.vue'


export default {
   name: 'Account',
  components: {
    AdminSidebar,
  }
};
</script>

