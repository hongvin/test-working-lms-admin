<template>
  <d-container fluid class="main-content-container px-4">
    <!-- Page Header -->
    <div class="page-header row no-gutters py-4">
      <div class="col-12 col-sm-4 text-center text-sm-left mb-0">
        <h3 class="page-title">Client</h3>
      </div>
    </div>

    <!-- Current -->
    <div class="row">
      <div class="col">
        <div v-for="(post, idx) in news"
                :key="idx" class="card card-small mb-4">
          <div  class="card-header border-bottom">
            <h6 class="m-0">{{ post.title }}</h6>
          </div>
          <div class="card-body p-2 pb-3 text-center">
            <d-row>
              <d-col
                
                lg="12"
                sm="12"
                class="mb-4"
              >
                <d-card
                  class="card-small card-post card-post--aside card-post--1"
                >
                  <d-card-body>
                    <d-row>
                      <d-col lg="4">
                        <d-card>
                          <d-card-header class="border-bottom">
              <h6 class="m-0">Technology Solution Implemented</h6>
            </d-card-header>
                    <p class="card-text d-inline-block mb-3">{{ post.body }}</p></d-card>
                      </d-col>
                      <d-col lg="4">
                        <d-card>
                          <d-card-header class="border-bottom">
              <h6 class="m-0">Description</h6>
            </d-card-header>
                    <p class="card-text d-inline-block mb-3">{{ post.body }}</p></d-card>
                      </d-col>
                      <d-col lg="4">
                        <d-card>
                          <d-card-header class="border-bottom">
              <h6 class="m-0">IR 4.0 Pillars</h6>
            </d-card-header>
                    <p class="card-text d-inline-block mb-3">{{ post.body }}</p></d-card>
                      </d-col>
                      </d-row>
                    <br />

                  </d-card-body>
                </d-card>
              </d-col>
            </d-row>
          </div>
        </div>
      </div>
    </div>
  </d-container>
</template>

<script>
const news = [
  {
    title: "ABC Company",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mollis quam odio, eget commodo purus sollicitudin et. Vestibulum et ornare ex, nec ultrices turpis. Nulla ac lobortis urna, in malesuada lacus. Ut finibus mi in sem rhoncus, congue mattis lacus vehicula. Quisque nec vulputate massa. Duis suscipit et quam at commodo. In aliquet nisl nulla, eu tempus libero dictum nec. Suspendisse sit amet pulvinar justo, in feugiat nibh. Phasellus risus dolor, dapibus nec magna ac, accumsan blandit enim. Etiam diam tellus, maximus a accumsan a, sodales nec nisi. Morbi porttitor efficitur velit, vel rhoncus elit blandit vitae. Morbi nec massa nec odio lacinia porta. Sed nisi nulla, condimentum at semper eu, sollicitudin ac ante. Praesent hendrerit bibendum diam in iaculis. Praesent imperdiet lectus et blandit maximus.",
  },
  {
    title: "DEF Company",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mollis quam odio, eget commodo purus sollicitudin et. Vestibulum et ornare ex, nec ultrices turpis. Nulla ac lobortis urna, in malesuada lacus. Ut finibus mi in sem rhoncus, congue mattis lacus vehicula. Quisque nec vulputate massa. Duis suscipit et quam at commodo. In aliquet nisl nulla, eu tempus libero dictum nec. Suspendisse sit amet pulvinar justo, in feugiat nibh. Phasellus risus dolor, dapibus nec magna ac, accumsan blandit enim. Etiam diam tellus, maximus a accumsan a, sodales nec nisi. Morbi porttitor efficitur velit, vel rhoncus elit blandit vitae. Morbi nec massa nec odio lacinia porta. Sed nisi nulla, condimentum at semper eu, sollicitudin ac ante. Praesent hendrerit bibendum diam in iaculis. Praesent imperdiet lectus et blandit maximus.",
  },
];

export default {
  data() {
    return {
      news,
    };
  },
};
</script>

