<template>
  <div></div>
</template>

<script>

  export default {
    name: "Logout",
    data: () => ({

    }),
    methods: {

      
    },
    mounted() {
        localStorage.removeItem('token');
        location.href = "/"
    }
    
  }
</script>
<style>

</style>
