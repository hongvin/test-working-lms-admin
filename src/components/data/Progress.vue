<template>
  <d-card class="card-small">
    <!-- Card Header -->
    <d-card-header class="border-bottom">
      <h6 class="m-0">{{ title }}</h6>
      <div class="block-handle"></div>
    </d-card-header>


<v-stepper :steps="steps" :linear="false"  v-model="step" style="margin-right: 5%; margin-left: 5%; color: #000000 !important;">
<template slot="step-1" ><div style="color:#000000 !important;"> {{ progressstage1 }}</div> </template>
          <template slot="step-2"><div style="color:#000000 !important;"> {{ progressstage2 }}</div> </template>
          <template slot="step-3"><div style="color:#000000 !important;"> {{ progressstage3 }}</div> </template>
</v-stepper>

    <d-row style="margin-right: 5%; margin-left: 5%">
      <template v-if="step === 1"> 
        
      <d-col lg="12" md="12" sm="12" class="mb-4">
        <d-card-body class="p-0">
          <d-card class="card-small">
            <d-card-header class="border-bottom">
              <h6 class="m-0">{{ progressstage1 }}</h6>
              <div class="block-handle"></div>
            </d-card-header>
            <d-card-body>
              <h6 class="text-semibold text-fiord-blue">Learning Objective</h6>
              <span class="text-semibold text-fiord-blue">{{
                objectivestage1
              }}</span>
              <br />
              <br />
              <h6 class="text-semibold text-fiord-blue">IR 4.0 Pillars</h6>
              <span class="text-semibold text-fiord-blue">{{ ir4stage1 }}</span>
              <br />
              <br />
              <h6 class="text-semibold text-fiord-blue">Competencies</h6>
              <span class="text-semibold text-fiord-blue">{{
                compstage1
              }}</span>
            </d-card-body>
          </d-card>
        </d-card-body>
      </d-col></template>
      <template v-if="step === 2">
      <d-col lg="12" md="12" sm="12" class="mb-4">
        <d-card-body class="p-0">
          <d-card class="card-small">
            <d-card-header class="border-bottom">
              <h6 class="m-0">{{ progressstage2 }}</h6>
              <div class="block-handle"></div>
            </d-card-header>
            <d-card-body>
              <h6 class="text-semibold text-fiord-blue">Learning Objective</h6>
              <span class="text-semibold text-fiord-blue">{{
                objectivestage2
              }}</span>
              <br />
              <br />
              <h6 class="text-semibold text-fiord-blue">IR 4.0 Pillars</h6>
              <span class="text-semibold text-fiord-blue">{{ ir4stage2 }}</span>
              <br />
              <br />
              <h6 class="text-semibold text-fiord-blue">Competencies</h6>
              <span class="text-semibold text-fiord-blue">{{
                compstage2
              }}</span>
            </d-card-body>
          </d-card>
        </d-card-body>
      </d-col></template>
      <template v-if="step === 3">
      <d-col lg="12" md="12" sm="12" class="mb-4">
        <d-card-body class="p-0">
          <d-card class="card-small">
            <d-card-header class="border-bottom">
              <h6 class="m-0">{{ progressstage3 }}</h6>
              <div class="block-handle"></div>
            </d-card-header>
            <d-card-body>
              <h6 class="text-semibold text-fiord-blue">Learning Objective</h6>
              <span class="text-semibold text-fiord-blue">{{
                objectivestage3
              }}</span>
              <br />
              <br />
              <h6 class="text-semibold text-fiord-blue">IR 4.0 Pillars</h6>
              <span class="text-semibold text-fiord-blue">{{ ir4stage3 }}</span>
              <br />
              <br />
              <h6 class="text-semibold text-fiord-blue">Competencies</h6>
              <span class="text-semibold text-fiord-blue">{{
                compstage3
              }}</span>
            </d-card-body>
          </d-card>
        </d-card-body>
      </d-col></template>
    </d-row>

    <d-card-footer class="border-top">
      <d-row>
        <!-- View Full Report -->
        <d-col class="text-right view-report">
          <a href="#">View full report &rarr;</a>
        </d-col>
      </d-row>
    </d-card-footer>
  </d-card>
</template>

<script>
import { VStepper } from 'vue-stepper-component'
export default {
  name: "ao-top-referrals",
  components:{
    VStepper
  },
  data: () => ({steps: 3, step: undefined}),
  props: {
    /**
     * The component's title.
     */
    title: {
      type: String,
      default: "Progress",
    },
    progressstage1: {
      type: String,
      default: "Fundamentals of IoT",
    },
    objectivestage1: {
      type: String,
      default: "Students able to learn the fundamentals",
    },
    ir4stage1: {
      type: String,
      default: "IoT, AI, Cloud",
    },
    compstage1: {
      type: String,
      default: "Problem Solving, Programming",
    },
    progressstage2: {
      type: String,
      default: "Fundamentals of IoT 2",
    },
    objectivestage2: {
      type: String,
      default: "Students able to learn the fundamentals 2",
    },
    ir4stage2: {
      type: String,
      default: "IoT, AI, Cloud",
    },
    compstage2: {
      type: String,
      default: "Problem Solving, Programming",
    },
    progressstage3: {
      type: String,
      default: "Advance IoT",
    },
    objectivestage3: {
      type: String,
      default: "Students able to learn the advance",
    },
    ir4stage3: {
      type: String,
      default: "IoT, AI, Cloud",
    },
    compstage3: {
      type: String,
      default: "Problem Solving, Programming",
    },
  },
};
</script>
