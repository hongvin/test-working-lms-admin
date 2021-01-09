<template>
  <d-container fluid class="main-content-container px-4">
    <!-- Page Header -->
    <div class="page-header row no-gutters py-4">
      <div class="col-12 col-sm-4 text-center text-sm-left mb-0">
        <h3 class="page-title">News & Update</h3>
      </div>
    </div>

    <d-container fluid class="main-content-container px-4 pb-4">
    <!-- Page Header -->
    <d-row no-gutters class="page-header py-4">
      <!-- Page Title -->
      <d-col col sm="4" class="text-center text-sm-left mb-4 mb-sm-0">
        <h3 class="page-title">Add New Post</h3>
      </d-col>
    </d-row>

    <d-row>
      <!-- Editor -->
      <d-col lg="9" md="12">
        <anp-editor />
      </d-col>

      <!-- Sidebar Widgets -->
      <d-col lg="3" md="12">
        <anp-sidebar-actions />
        <anp-sidebar-categories />
      </d-col>
    </d-row>
  </d-container>

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
                  <div
                    class="card-post__image"
                    :style="{
                      backgroundImage: 'url(\'' + post.img + '\')',
                    }"
                  >
                    
                  </div>
                  <d-card-body>
                    <p class="card-text d-inline-block mb-3">{{ post.body }}</p>
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
import SidebarActions from '@/components/add-new-post/SidebarActions.vue';
import SidebarCategories from '@/components/add-new-post/SidebarCategories.vue';
import Editor from '@/components/add-new-post/Editor.vue';
import 'quill/dist/quill.snow.css';

const news = [
  {
    title: "IoT is expanding in Malaysia",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mollis quam odio, eget commodo purus sollicitudin et. Vestibulum et ornare ex, nec ultrices turpis. Nulla ac lobortis urna, in malesuada lacus. Ut finibus mi in sem rhoncus, congue mattis lacus vehicula. Quisque nec vulputate massa. Duis suscipit et quam at commodo. In aliquet nisl nulla, eu tempus libero dictum nec. Suspendisse sit amet pulvinar justo, in feugiat nibh. Phasellus risus dolor, dapibus nec magna ac, accumsan blandit enim. Etiam diam tellus, maximus a accumsan a, sodales nec nisi. Morbi porttitor efficitur velit, vel rhoncus elit blandit vitae. Morbi nec massa nec odio lacinia porta. Sed nisi nulla, condimentum at semper eu, sollicitudin ac ante. Praesent hendrerit bibendum diam in iaculis. Praesent imperdiet lectus et blandit maximus.",
    img: require("@/assets/images/iot2.jpeg"),
  },
  {
    title: "IoT is expanding in Canada",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mollis quam odio, eget commodo purus sollicitudin et. Vestibulum et ornare ex, nec ultrices turpis. Nulla ac lobortis urna, in malesuada lacus. Ut finibus mi in sem rhoncus, congue mattis lacus vehicula. Quisque nec vulputate massa. Duis suscipit et quam at commodo. In aliquet nisl nulla, eu tempus libero dictum nec. Suspendisse sit amet pulvinar justo, in feugiat nibh. Phasellus risus dolor, dapibus nec magna ac, accumsan blandit enim. Etiam diam tellus, maximus a accumsan a, sodales nec nisi. Morbi porttitor efficitur velit, vel rhoncus elit blandit vitae. Morbi nec massa nec odio lacinia porta. Sed nisi nulla, condimentum at semper eu, sollicitudin ac ante. Praesent hendrerit bibendum diam in iaculis. Praesent imperdiet lectus et blandit maximus.",
    img: require("@/assets/images/iot1.jpeg"),
  },
];

export default {
  components: {
    anpEditor: Editor,
    anpSidebarActions: SidebarActions,
    anpSidebarCategories: SidebarCategories,
  },
  data() {
    return {
      news,
    };
  },
};
</script>

