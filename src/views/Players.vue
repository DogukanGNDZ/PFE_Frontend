<template>
  <div>
    <!-- <FilterBar /> -->
    <PlayerGrid />
  </div>
</template>

<script>
import PlayerGrid from "@/components/PlayersGrid.vue";
// import FilterBar from "@/components/FilterBar.vue";
export default {
  name: "Player",
  components: {
    PlayerGrid,
    // FilterBar,
  },
};
</script>
