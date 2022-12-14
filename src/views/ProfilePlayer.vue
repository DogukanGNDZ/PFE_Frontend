<template>
  <div>Test {{ this.$route.params.id }}</div>
</template>

<script>
import axios from "axios";
import { server } from "../helper";

export default {
  name: "ProfilePlayer",
  data() {
    return {
      infoPlayer: [],
    };
  },
  mounted() {
    const id = this.$route.params.id;
    console.log(id);
    axios
      .get(server.baseURLDev + "users/id/" + id)
      .then((response) => console.log(response.data))
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>
