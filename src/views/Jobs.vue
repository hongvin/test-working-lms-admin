<template>

  <d-container fluid class="main-content-container px-4">
    <!-- Page Header -->
    <div class="page-header row no-gutters py-4">
      <div class="col-12 col-sm-4 text-center text-sm-left mb-0">
        <h3 class="page-title">Job Vacancy</h3>
      </div>
    </div>

<d-card class="card-small" style="margin-top:30px;">

            <d-card-header class="border-bottom">
              <h6 class="m-0">Add a New Job</h6>
            </d-card-header>

            <d-list-group flush>
              <d-list-group-item>
                <d-row>
                  <d-col>
                    <d-form>

                      <div class="form-group">
                        <label for="feInputAddress">Company Name</label>
                        <d-input id="feInputAddress" placeholder="Company Name..." />
                      </div>
                      <div class="form-group">
                        <label for="feInputAddress">Job Title</label>
                        <d-input id="feInputAddress" placeholder="Job..." />
                      </div>

                      <div class="form-group">
                        <label for="feInputAddress2">Responsibilities</label>
                        <d-input id="feInputAddress2" placeholder="Responsibilities..." />
                      </div>

                      <d-form-row>
                        <d-col md="6" class="form-group">
                          <label for="feInputCity">Competancies</label>
                          <d-input id="feInputCity" />
                        </d-col>
                        <d-col md="6" class="form-group">
                          <label for="feInputZip">IR 4.0 Pillars</label>
                          <d-input id="feInputZip" />
                        </d-col>
                      </d-form-row>
                      <d-form-row>
                        <d-col md="10" class="form-group">
                        </d-col>
                        <d-col md="2" class="form-group" style="text-align:right;">
                        <d-button theme="primary" class="mb-2 mr-1">Post</d-button>
                        </d-col>
                      </d-form-row>
                    </d-form>
                  </d-col>
                </d-row>
              </d-list-group-item>
            </d-list-group>

          </d-card>
          <br />
    <!-- Current -->
    <div class="row">
      <div class="col">
        <div v-for="(post, idx) in news"
                :key="idx" class="card card-small mb-4">
          <div  class="card-header border-bottom">
            <h6 class="m-0">{{ post.title }}
            <d-badge
                      pill
                      :class="[
                        'card-post__category',
                        'bg-' + post.color,
                      ]"
                      >{{ post.avail }}</d-badge
                    ></h6>
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
              <h6 class="m-0">Responsibility</h6>
            </d-card-header>
                    <p class="card-text d-inline-block mb-3">{{ post.body }}</p></d-card>
                      </d-col>
                      <d-col lg="4">
                        <d-card>
                          <d-card-header class="border-bottom">
              <h6 class="m-0">Skills Needed</h6>
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
    avail:'Open',
    color:'info',
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mollis quam odio, eget commodo purus sollicitudin et. Vestibulum et ornare ex, nec ultrices turpis. Nulla ac lobortis urna, in malesuada lacus. Ut finibus mi in sem rhoncus, congue mattis lacus vehicula. Quisque nec vulputate massa. Duis suscipit et quam at commodo. In aliquet nisl nulla, eu tempus libero dictum nec. Suspendisse sit amet pulvinar justo, in feugiat nibh. Phasellus risus dolor, dapibus nec magna ac, accumsan blandit enim. Etiam diam tellus, maximus a accumsan a, sodales nec nisi. Morbi porttitor efficitur velit, vel rhoncus elit blandit vitae. Morbi nec massa nec odio lacinia porta. Sed nisi nulla, condimentum at semper eu, sollicitudin ac ante. Praesent hendrerit bibendum diam in iaculis. Praesent imperdiet lectus et blandit maximus.",
  },
  {
    title: "DEF Company",
    avail:'Closed',
    color:'warning',
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

