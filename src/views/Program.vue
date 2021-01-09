<template>
  <div class="main-content-container container-fluid px-4">
    <!-- Page Header -->
    <div class="page-header row no-gutters py-4">
      <div class="col-12 col-sm-4 text-center text-sm-left mb-0">
        <h3 class="page-title">Programmes</h3>
      </div>
    </div>
    <div class="form-group">
      <div class="row">
        <div class="col-4">
          <d-form-select v-model="selected" :options="options" />
        </div>
      <div class="col-8">
                          <d-input type="text" placeholder="Pillars / Competency" v-model="filterResults"/>
      </div>
                      </div>
    </div>

    <!-- Past Learning -->
    <div class="row">
      <div class="col">
        <div class="card card-small mb-4">
          <div class="card-header border-bottom">
            <h6 class="m-0">Programmes for You</h6>
          </div>
          <div class="card-body p-0 pb-3 text-center">
            <table class="table mb-0">
              <thead class="bg-light">
                <tr>
                  <th scope="col" class="border-0">#</th>
                  <th scope="col" class="border-0">Program</th>
                  <th scope="col" class="border-0">Duration</th>
                  <th scope="col" class="border-0">Pillars</th>
                  <th scope="col" class="border-0">Competancies</th>
                  <th scope="col" class="border-0">Match</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item,idx) in filteredResults" :key="idx">
                  <td>{{ idx+1 }}</td>
                  <td>{{ item.Program }}</td>
                  <td>{{ item.Duration }}</td>
                  <!-- <td>{{ item.Skills }}</td> -->
                  <!-- <td v-html="highlightMatches(item.Skills)"></td> -->
                  <td v-html="highlightMatches(item.Pillars)"></td>
                  <!-- <td>{{ item.Competancies }}</td> -->
                  <td v-html="highlightMatches(item.Competancies)"></td>
                  <td>{{ item.Match }}</td>
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
  </div>
</template>

<script>
const program = [
  {
    Program: "Communication Skills",
    Duration: "1 Month",
    Pillars: "Pillar",
    Competancies: "Communication",
    Match: "80%"
  },
  {
    Program: "Communication Skills",
    Duration: "1 Month",
    Pillars: "Pillar",
    Competancies: "Communication",
    Match: "80%"
  },
    {
    Program: "Communication Skills",
    Duration: "1 Month",
    Pillars: "Pillar",
    Competancies: "Communication",
    Match: "80%"
  }
]
const options=[
                { value: null, text: 'Filter by...' },
                { value: 'pillar', text: 'Filter by Pillars' },
                { value: 'competancy', text: 'Filter by Competancies' }
]

export default {
  data() {
    return {
      filterResults:'',
      program,
      selected: null,
      options
    };
  },
  computed: {
    filteredResults(){
      return this.program.filter(row => {
        const pillars = row.Pillars.toString().toLowerCase();
        const competancy = row.Competancies.toString().toLowerCase();
        const searchPillar = this.filterResults.toLowerCase();

        if (this.selected == "pillar"){
        return pillars.includes(searchPillar);
        }
        else if (this.selected == "competancy"){
        return competancy.includes(searchPillar);}
        else{
        return competancy.includes(searchPillar) || pillars.includes(searchPillar);}
      });
    }
  },
  methods: {
  highlightMatches(text) {
    const matchExists = text.toLowerCase().includes(this.filterResults.toLowerCase());
    if (!matchExists) return text;

    const re = new RegExp(this.filterResults, 'ig');
    return text.replace(re, matchedText => `<strong>${matchedText}</strong>`);
  }
},
};
</script>
