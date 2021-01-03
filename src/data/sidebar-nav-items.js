export default function () {
  return [{
    title: 'Dashboard',
    to: {
      name: 'overview',
    },
    // htmlBefore: '<i class="material-icons">edit</i>',
    htmlAfter: '',
  }, {
    title: 'Profile',
    // htmlBefore: '<i class="material-icons">vertical_split</i>',
    
    to: {
      name: 'profile',
    },
    // htmlAfter: '&nbsp;<span class="badge badge-danger">2</span>'
  }, {
    title: 'News & Updates',
    // htmlBefore: '<i class="material-icons">assessment</i>',
    to: {
      name: 'news',
    },
  }, {
    title: 'Job Vacancy',
    // htmlBefore: '<i class="material-icons">table_chart</i>',
    to: {
      name: 'jobs',
    },
  
  }];
}
