export class Calculations{

    static calculate(data){
        // console.log(data, 'data in calcullate')
        // console.log(Object.values(data))
        data = Object.values(data)[0]
        
        let convertedArray = []
        // data.MSFT.map(candle => {
        data.map(candle => {
            let open = candle.o
            let high = candle.h
            let low = candle.l
            let close = candle.c
            let time = candle.t

            let dat = {
                x: new Date(time),
                y:[open, high, low, close]
            }

            convertedArray.push(dat)
        })

        const initial = {
      
            series: [{
              data: convertedArray
            }],
            options: {
              chart: {
                type: 'candlestick',
                height: 150
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
        // console.log(convertedArray, ' GIVE MEEEEE CHANGEEEEE PLEASEEEE')

        return initial
        
    }
}
