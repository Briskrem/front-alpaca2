import ReactApexChart from "react-apexcharts";
import './styles/Graph.css'

export const Graph = ({crypto, timeFunc}) => {

    // console.log(crypto)
    return (
        <div className="ApexChartContainer">
            <span>max</span>
            <ReactApexChart options={crypto.options} series={crypto.series} type="candlestick" height={250} />
            <div className='cryptoButtonContainer'> 
                <button onClick={()=>timeFunc('1Min')}>1Min</button>
                <button onClick={()=>timeFunc('1Hour')}>1Hr</button>
                <button onClick={()=>timeFunc('1Day')}>1D</button>
                <button onClick={()=>timeFunc('1Week')}>1W</button>
                <button onClick={()=>timeFunc('1Month')}>1M</button>
            </div>
        </div>

    )
}
//getCryptoCharts functions wrapped as timefunc dont forget ()=>timefunc()