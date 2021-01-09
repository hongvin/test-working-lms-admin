<template>

  <d-container fluid class="main-content-container px-4">
    <!-- Page Header -->
    <div class="page-header row no-gutters py-4">
      <div class="col-12 col-sm-10 text-center text-sm-left mb-0">
        <h3 class="page-title">Job Vacancy</h3>
      </div>
      <div><d-button 
      v-on:click="showAdd = !showAdd">
      <span v-if="showAdd">Add a new job</span>
      <span v-else>Hide</span>
      </d-button>
      </div>
    </div>

<d-card class="card-small" style="margin-top:30px;" v-if="!showAdd">

            <d-card-header class="border-bottom">
              <h6 class="m-0">Add a New Job</h6>
            </d-card-header>

            <d-list-group flush>
              <d-list-group-item>
                <d-row>
                  <d-col>
                    <d-form>

                      <div class="form-group">
                        <label for="feInputAddress">Job Title</label>
                        <d-input id="feInputAddress" placeholder="Title..." />
                      </div>
                      <div class="form-group">
                        <label for="feInputAddress">Job Description</label>
                        <d-input id="feInputAddress" placeholder="Job..." />
                      </div>

                      <d-form-row>
                        <d-col md="6" class="form-group">
                          <label for="feInputCity">Competancies</label>
                          <d-form-select v-model="selectedComp" :options="competancies" />
                        </d-col>
                        <d-col md="6" class="form-group">
                          <label for="feInputZip">IR 4.0 Pillars</label>
                          <d-form-select v-model="selectedPillar" :options="pillars" />
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
        <div class="card card-small mb-4">
          <div class="card-header border-bottom">
            <h6 class="m-0">Active Job Postings</h6>
          </div>
          <div class="card-body p-0 pb-3 text-center">
            <table class="table mb-0">
              <thead class="bg-light">
                <tr>
                  <th scope="col" class="border-0">#</th>
                  <th scope="col" class="border-0">Job Title</th>
                  <th scope="col" class="border-0">Date Posted</th>
                  <th scope="col" class="border-0">IR4.0 Pillars & Competancies</th>
                  <th scope="col" class="border-0">Number of Applications</th>
                  <th scope="col" class="border-0">Applicants</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item,idx) in openings" :key="idx">
                  <td>{{ idx+1 }}</td>
                  <td>{{ item.Title }}</td>
                  <td>{{ item.Date }}</td>
                  <td>{{ item.IR4 }}</td>
                  <td>{{ item.Number }}</td>
                  <td><d-button>List of applicants</d-button></td>
                </tr>
              </tbody>
            </table>
          </div>
          <d-col class="text-right view-report">
          <a href="#">See more &rarr;</a>
        </d-col>
        </div>
      </div>
    </div>

    <!-- closed -->
    <div class="row">
      <div class="col">
        <div class="card card-small mb-4">
          <div class="card-header border-bottom">
            <h6 class="m-0">Closed Job Postings</h6>
          </div>
          <div class="card-body p-0 pb-3 text-center">
            <table class="table mb-0">
              <thead class="bg-light">
                <tr>
                  <th scope="col" class="border-0">#</th>
                  <th scope="col" class="border-0">Job Title</th>
                  <th scope="col" class="border-0">Date Posted</th>
                  <th scope="col" class="border-0">IR4.0 Pillars & Competancies</th>
                  <th scope="col" class="border-0">Number of Applications</th>
                  <th scope="col" class="border-0">Applicants</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item,idx) in closed" :key="idx">
                  <td>{{ idx+1 }}</td>
                  <td>{{ item.Title }}</td>
                  <td>{{ item.Date }}</td>
                  <td>{{ item.IR4 }}</td>
                  <td>{{ item.Number }}</td>
                  <td><d-button>List of applicants</d-button></td>
                </tr>
              </tbody>
            </table>
          </div>
          <d-col class="text-right view-report">
          <a href="#">See more &rarr;</a>
        </d-col>
        </div>
      </div>
    </div>
  </d-container>

</template>

<script>
const openings = [
  {
    Title: "ABC Company",
    Date:'1 Jan 2021',
    IR4:'Pillars1',
    Number: "12",
  },
  {
    Title: "ABC Company",
    Date:'1 Jan 2021',
    IR4:'Pillars1',
    Number: "12",
  },
];

const closed = [
  {
    Title: "ABC Company",
    Date:'1 Jan 2021',
    IR4:'Pillars1',
    Number: "12",
  },
  {
    Title: "ABC Company",
    Date:'1 Jan 2021',
    IR4:'Pillars1',
    Number: "12",
  },
];

const competancies=[
                { value: null, text: 'Select one...' },
                { value: 'c1', text: 'Competancy 1' },
                { value: 'c2', text: 'Competancy 2' }
];
const pillars=[
                { value: null, text: 'Select one...' },
                { value: 'p1', text: 'Pillar 1' },
                { value: 'p2', text: 'Pillar 2' }
]
export default {
  data() {
    return {
      openings,
      closed,
      competancies,
      pillars,
      selectedComp:null,
      selectedPillar:null,
      showAdd:false,
    };
  },
};
</script>

