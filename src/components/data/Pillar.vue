<template>
  <div class="card card-small h-100">

    <!-- Card Header -->
    <div class="card-header border-bottom">
      <h6 class="m-0">{{title}}</h6>
    </div>

    <!-- Chart -->
    <div class="card-body d-flex py-0">
      <canvas height="220" ref="canvas" class="blog-users-by-device m-auto"></canvas>
    </div>

    <d-card-footer class="border-top">
      <d-row>

        <!-- View Full Report -->
        <d-col class="text-right view-report">
          <a href="#">View full report &rarr;</a>
        </d-col>

      </d-row>
    </d-card-footer>
  </div>
</template>

<script>
import Chart from '../../utils/chart';

const defaultChartData = {
  datasets: [{
    hoverBorderColor: '#ffffff',
    data: [30,20,30,40,50,20,30,50,20],
    backgroundColor: [
      'rgba(0,123,255,0.9)',
      'rgba(0,123,255,0.8)',
      'rgba(0,123,255,0.7)',
      'rgba(0,123,255,0.6)',
      'rgba(0,123,255,0.5)',
      'rgba(0,123,255,0.4)',
      'rgba(0,123,255,0.3)',
      'rgba(0,123,255,0.2)',
      'rgba(0,123,255,0.1)',
    ],
  }],
  labels: ['Augmented Reality', 'System Integration', 'Cloud Computing','Big Data', 'IoT','3D Printing','Cyber Security','Autonomous Robots','Simulation'],
};

export default {
  name: 'complexity',
  props: {
    /**
       * The chart config.
       */
    chartConfig: {
      type: Object,
      default() {
        return {};
      },
    },
    /**
       * The chart options.
       */
    chartOptions: {
      type: Object,
      default() {
        return {};
      },
    },
    /**
       * The chart data.
       */
    chartData: {
      type: Object,
      default() {
        return defaultChartData;
      },
    },
    /**
       * The chart title.
       */
    title: {
      type: String,
      default: 'IR 4.0 Learning',
    },
  },
  mounted() {
    const chartConfig = {
      type: 'horizontalBar',
      data: this.chartData,
      options: {
        ...{
          scales:{
            yAxes:[{
              display: true,
              ticks:{
                suggestedMin: 0, 
                beginAtZero: true,
                steps:10,
                stepValue:10,
                max:100,
              }
            }]
          },
          legend: {
            display:false,
            position: 'bottom',
            labels: {
              padding: 25,
              boxWidth: 20,
            },
          },
          
          cutoutPercentage: 0,
          tooltips: {
            custom: false,
            mode: 'index',
            position: 'nearest',
          },
        },
        ...this.chartOptions,
      },
    };

    new Chart(this.$refs.canvas, chartConfig);
  },
};
</script>

