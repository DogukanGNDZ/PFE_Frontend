<template>
  <div>
    <!-- <FilterBar /> -->
    <TeamsGrid />
  </div>
</template>

<script>
// import FilterBar from "@/components/FilterBar.vue";
import TeamsGrid from "@/components/TeamsGrid.vue";
export default {
  name: "Teams",
  components: {
    TeamsGrid,
    // FilterBar,
  },
};
</script>
