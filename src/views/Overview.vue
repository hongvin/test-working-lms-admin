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
      <d-col lg v-for="(stats, idx) in smallStats" :key="idx" class="mb-4">
        <small-stats :id="`small-stats-${idx}`" variation="1" :chart-data="stats.datasets" :label="stats.label" :value="stats.value" :percentage="stats.percentage" :increase="stats.increase" :decrease="stats.decrease" />
      </d-col>
</d-row>
    <d-row>
      <!-- IR4.0 -->
      <d-col lg="6" md="6" sm="12" class="mb-4">
        <o-pillar />
      </d-col>
      <!-- Complexity -->
      <d-col lg="6" md="6" sm="12" class="mb-4">
        <o-complexity />
      </d-col>
    </d-row>

  </d-container>
</template>

<script>
import Competency from '@/components/data/Competency.vue';
import Pillar from '@/components/data/Pillar.vue';
import SmallStats from '@/components/data/Stat.vue';
export default {
  components: {
    SmallStats,
    oComplexity: Competency,
    oPillar: Pillar,
  },
  computed:{
    smallStats() {
      return [{
        label: 'Total Follower',
        value: '2,390',
        percentage: '4.7%',
        increase: true,
        labels: ['Label', 'Label', 'Label', 'Label', 'Label', 'Label'],
        datasets: [{
          label: 'Today',
          fill: 'start',
          borderWidth: 1.5,
          backgroundColor: 'rgba(0, 184, 216, 0.1)',
          borderColor: 'rgb(0, 184, 216)',
          data: [1, 2, 1, 3, 5, 4, 7],
        }],
      }, 
      {
        label: 'Impression',
        value: '182',
        percentage: '12.4',
        increase: true,
        labels: ['Label', 'Label', 'Label', 'Label', 'Label', 'Label'],
        datasets: [{
          label: 'Today',
          fill: 'start',
          borderWidth: 1.5,
          backgroundColor: 'rgba(23,198,113,0.1)',
          borderColor: 'rgb(23,198,113)',
          data: [1, 2, 3, 3, 3, 4, 4],
        }],
      }, 
      {
        label: 'Reach',
        value: '1,028',
        percentage: '3.8%',
        increase: false,
        decrease: true,
        labels: ['Label', 'Label', 'Label', 'Label', 'Label', 'Label'],
        datasets: [{
          label: 'Today',
          fill: 'start',
          borderWidth: 1.5,
          backgroundColor: 'rgba(255,180,0,0.1)',
          borderColor: 'rgb(255,180,0)',
          data: [2, 3, 3, 3, 4, 3, 3],
        }],
      }
      ]
    }
  }
};
</script>

