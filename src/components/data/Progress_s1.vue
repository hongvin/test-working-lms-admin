<template>
    <d-card class="card-small">
          <d-card-header class="border-bottom">
      <h6 class="m-0">{{ progressstage1 }}</h6>
      <div class="block-handle"></div>
    </d-card-header>
          <d-card-body>
          <h6 class="text-semibold text-fiord-blue">Learning Objective</h6>
          <span class="text-semibold text-fiord-blue">{{objectivestage1}}</span>
          <br> <br>
          <h6 class="text-semibold text-fiord-blue">IR 4.0 Pillars</h6>
          <span class="text-semibold text-fiord-blue">{{ir4stage1}}</span>
          <br> <br>
          <h6 class="text-semibold text-fiord-blue">Competencies</h6>
          <span class="text-semibold text-fiord-blue">{{compstage1}}</span>
    </d-card-body>
    </d-card>
</template>
<script>
export default {
  name: "ao-top-referrals",
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
