var DataTable = ReactDataComponents.DataTable;

// Generate random data
var idCount;
var personCount;
var DateCount;

var i= 0;



var data = [];
for (var i = 0; i < 100; i++) {
  data.push({
    id: i,
    idCount: i,
    personCount: Math.floor(Math.random() * 50),
    DateCount: chance.date({string:true, year: 2018}),
  });
}

var columns = [{ title: 'ID', prop: 'idCount' }, { title: 'Person Count', prop: 'personCount' }, { title: 'Date', prop: 'DateCount' }];


function createGraph(){
  var chart = c3.generate({
    bindto: '.chart',
    data: {
      x: 'x',
//        xFormat: '%Y%m%d', // 'xFormat' can be used as custom format of 'x'
      columns: [
          ['x', '2018-01-01', '2018-01-02', '2018-01-03', '2018-01-04', '2018-01-05', '2018-01-06'],
          ['Number of people', 30, 20, 40, 15, 17, 32],
      ]
  },
  axis: {
    x: {
        type: 'timeseries',
        tick: {
            format: '%Y-%m-%d'
        }
    }
}
  });
}



ReactDOM.render(  
  React.createElement(    
    DataTable
// className="container"
, { keys: 'id',
  columns: columns,
  initialData: data,
  initialPageLength: 10,
  pageLengthOptions:[10,20,50],
  // initialPageLength={5}
  // initialSortBy={{ prop: 'city', order: 'descending' }}
  // pageLengthOptions={[ 5, 20, 50 ]}
}, createGraph()), document.getElementById("table"));





