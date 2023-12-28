<template>
  <div class="pagination">
    <ButtonComponent
      text="<"
      @click="previousPage"
    />
    <span class="current-page">{{ currentPage }}</span>
    <ButtonComponent
      text=">"
      @click="nextPage"
    />
  </div>
</template>

<script setup lang="ts">
import './PaginationComponent.css';

const store = useMoviesStore();
const { currentPage } = storeToRefs(store);
const { nextPage, previousPage } = store;
</script>
