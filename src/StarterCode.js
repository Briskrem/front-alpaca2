//this is converted/processed
export const ini = {
      
    series: [{
      data: [{
          x: new Date(1538778600000),
          y: [8888.81, 8888.5, 8888.04, 8888.33]
        },
        {
          x: new Date(1538856000000),
          y: [6593.34, 6604.76, 6582.63, 6593.86]
        },
        {
          x: new Date(1538857800000),
          y: [6593.86, 6604.28, 6586.57, 6600.01]
        },
        {
          x: new Date(1538884800000),
          y: [6604.98, 6606, 6604.07, 6606]
        },
      ]
    }],
    options: {
      chart: {
        type: 'candlestick',
        height: 350
      },
      title: {
        text: 'CandleStick Chart',
        align: 'left'
      },
      xaxis: {
        type: 'datetime'
      },
      yaxis: {
        tooltip: {
          enabled: true
        }
      }
    },
  };


// this is not converted (RAW)
export const re = [[
    {c : 0, h: 0, l:0, n:0, o:0, t:"2017-10-13T04:00:00Z",v:15335742, vw:77.514716 }
    ]]
// export const re = [[
//       {c : 77.12, h : 77.29, l : 76.37, n : 100377, o : 76.4, t : "2017-10-12T04:00:00Z", v : 17281202, vw : 77.01185},
//       {c : 77.49 , h: 77.87, l:77.29, n:85776, o:77.57, t:"2017-10-13T04:00:00Z",v:15335742, vw:77.514716 }
//       ]]
