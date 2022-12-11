<template>
  <div>
    <FilterBar />
    <CoachGrid />
  </div>
</template>

<script>
import CoachGrid from "@/components/CoachsGrid.vue";
import FilterBar from "@/components/FilterBar.vue";
export default {
  name: "Coachs",
  components: {
    CoachGrid,
    FilterBar,
  },
};
</script>
