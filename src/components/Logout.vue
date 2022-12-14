<template>
  <div></div>
</template>

<script>
export default {
  name: "Logout",
  data: () => ({}),
  methods: {},
  mounted() {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    localStorage.removeItem("role");

    location.href = "/";
  },
};
</script>
<style></style>
