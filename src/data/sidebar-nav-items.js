export default function () {
  return [{
    title: 'Dashboard',
    to: {
      name: 'overview',
    },
    htmlBefore: '<i class="material-icons">edit</i>',
    htmlAfter: '',
  }, {
    title: 'Profile',
    htmlBefore: '<i class="material-icons">vertical_split</i>',
    
    to: {
      name: 'profile',
    },
    htmlAfter: '&nbsp;<span class="badge badge-danger">2</span>'
  }, {
    title: 'News & Updates',
    htmlBefore: '<i class="material-icons">assessment</i>',
    to: {
      name: 'news',
    },
  }, {
    title: 'Jobs',
    htmlBefore: '<i class="material-icons">table_chart</i>',
    to: {
      name: 'jobs',
    },
  },
    {
      title: 'Programmes',
      htmlBefore: '<i class="material-icons">rule</i>',
      to: {
        name: 'programmes',
      },
    
  
  }];
}
