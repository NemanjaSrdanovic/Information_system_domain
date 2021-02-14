<template>
  <div class="register">
      <Migrate />
  </div>
</template>

<script>
// @ is an alias to /src
import Migrate from '@/components/Migrate.vue'

export default {
   name: 'Register',
  components: {
    Migrate,
  }
};
</script>
