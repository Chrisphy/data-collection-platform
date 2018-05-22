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
},
tooltip: {
  format: {
      title: function () { return 'A Badass Title '; },
      value: function (value, ratio, id) {
          var format = function(value) {
             var one = $scope.numbers.numberOne;
             var two = $scope.numbers.numberTwo;
             parseInt(one, two);
             var total = one + two;
             return ("$" + value);
          }
          return format(value);
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





//Clock

function clock() {// We create a new Date object and assign it to a variable called "time".
var time = new Date(),
    
    // Access the "getHours" method on the Date object with the dot accessor.
    hours = time.getHours(),
    
    // Access the "getMinutes" method with the dot accessor.
    minutes = time.getMinutes(),
    
    
    seconds = time.getSeconds();

document.querySelectorAll('.clock')[0].innerHTML = harold(hours) + ":" + harold(minutes) + ":" + harold(seconds);
  
  function harold(standIn) {
    if (standIn < 10) {
      standIn = '0' + standIn
    }
    return standIn;
  }
}
setInterval(clock, 1000);