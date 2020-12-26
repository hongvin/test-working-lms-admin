<template>
  <d-container fluid class="main-content-container px-4">
    <!-- Page Header -->
    <d-row no-gutters class="page-header py-4">
      <d-col col sm="4" class="text-center text-sm-left mb-4 mb-sm-0">
        <!-- <span class="text-uppercase page-subtitle">Dashboard</span> -->
        <h3 class="page-title">Dashboard</h3>
      </d-col>
    </d-row>

    <d-row>
      <!-- Complexity -->
      <d-col lg="12" md="12" sm="12" class="mb-4">
        <o-complexity />
      </d-col>
    </d-row>

  </d-container>
</template>

<script>
import Competency from '@/components/data/Competency.vue';

export default {
  components: {
    oComplexity: Competency
  },
};
</script>

