<template>
  <div id="app">
    <step-progression
      :steps="steps"
      :currentStep="currentStep"
      :currentStepColor="currentStepColor"
      :defaultColor="defaultColor"
    />
    <step-one v-if="currentStep === 1" />
    <step-two v-if="currentStep === 2" />
    <step-three v-if="currentStep === 3" />

    <button
      v-if="currentStep < steps"
      @click="increaseStep(currentStep, steps);"
      class="btn btn-primary continue"
      type="button"
    >
      Next >
    </button>
    <h1 class="success" v-else>SUCCESS :)</h1>
  </div>
</template>

<script>
import StepProgression from "vue-step-progression";
import StepOne from "Progress_s1";
import StepTwo from "./components/StepTwo";
import StepThree from "./components/StepThree";

export default {
  name: "App",
  components: {
    StepProgression,
    StepOne,
    StepTwo,
    StepThree
  },
  // define data on parent component and pass to the StepProgression component
  data() {
    return {
      steps: StepProgression.props.steps.default,
      currentStep: StepProgression.props.currentStep.default,
      currentStepColor: StepProgression.props.currentStepColor.default,
      defaultColor: StepProgression.props.defaultColor.default
    };
  },
  methods: {
    increaseStep(currentStep, steps) {
      if (currentStep < steps) {
        this.currentStep++;
      } else {
        return;
      }
    }
  }
};
</script>

<style>
#app {
  padding: 25px;
}

.continue {
  margin-top: 50px;
}

.success {
  margin-top: 100px;
  text-align: center;
  color: #5cb85c;
}

h1 {
  margin-top: 50px;
  text-transform: uppercase;
}
</style>
