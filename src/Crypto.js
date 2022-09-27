import { useState, useEffect} from 'react';
import { io } from 'socket.io-client';
import { CryptoApi } from './api';
import { CryptoForm } from './CryptoForm';
import { Calculations } from './Calculations';
import {re, ini} from './StarterCode'
import { Graph } from './Graph';
// require('dotenv').config()
import './styles/Crypto.css'


const {REACT_APP_API_KEY , REACT_APP_SECRET_KEY} = process.env
console.log(process.env, REACT_APP_API_KEY , REACT_APP_SECRET_KEY,  '^^^^^^^^^^^^^^^')
const apiKey = process.env.REACT_APP_API_KEY
const secretKey = process.env.REACT_APP_SECRET_KEY
// const apiKey = "PKJ25VIKNH5KJT9BQIEJ"
// const secretKey = "xJ9gYs1L2Ulte3LyTysf3w1pjV0QEEJkhGkBkcrZ"
const auth = {"action": "auth", "key": `${apiKey}`, "secret": `${secretKey}`};
const crypto_url = 'wss://stream.data.alpaca.markets/v1beta2/crypto';




export const Crypto = () => {

  const [cryptoData, setCryptoData] = useState('')
  const [cryptoName, setCryptoName] = useState('BTC')
  const [cryptoBars, setCryptoBars] = useState(re)
  const [convertedBars, setConvertedBars] = useState(ini)
  let [wss, setWss] = useState(null)
  const [tracker, setTracker] =useState(0)

  useEffect(()=>{
    
    if(tracker > 0){
      wss.close()
      console.log(tracker, 'tracker')
    }
    setTracker(tracker + 1)
    console.log(cryptoName, 'tracker')

    wss = new WebSocket(crypto_url)
    const subscription = {"action":"subscribe","quotes":[`${cryptoName}/USD`],"bars":[`${cryptoName}/USD`]}

    wss.addEventListener('open', ws =>{
      console.log(wss.readyState, 'READYSTATE 2.... && wss coonnected')
      wss.send(JSON.stringify(auth))
      wss.send(JSON.stringify(subscription))  
      setWss(wss)
    })
    // console.log('chesse')
    wss.addEventListener('message', ({data})=>{
        // console.log(JSON.parse(data)[0])
        setCryptoData(JSON.parse(data)[0])
        // setState(JSON.parse(data)[0].bp)  
                                     
    }) 
    wss.addEventListener('close', (data)=>{
      console.log(wss.readyState, 'READYSTATE 3...')
      // wss.close()
      console.log('WSS disconnected, NOW WSS READY TO RE-connect', cryptoName, subscription)
      // connectAlpaca(cryptoName, subscription)
  })  
    },[cryptoName])



    useEffect(()=>{
      async function getData(){
          try{
            const results = await CryptoApi.getStats(cryptoName)
            setCryptoBars(results.data.data.bars)
            // console.log(results)
          }catch(e){
            console.log(e)
          }
      }
      getData()
    },[cryptoName])


    useEffect(()=>{
      const results = Calculations.calculate(cryptoBars)
      setConvertedBars(results)
    }, [cryptoBars])

    const getCryptoCharts = async time => {
      let t = {timeframe: time}
      console.log(cryptoName, t)
      const results = await CryptoApi.getStats(cryptoName, t)
      console.log(results, 'results in Crypto.js')
      setCryptoBars(results.data.data.bars)
    }
  


    const getCryptoName = (data) => {
      setCryptoName(data)
    }

    return (
      <div>
        <div className='crypto-body'>
        <div className='crypto-data'>
          <CryptoForm getCryptoName={getCryptoName}/>
          <p className='crypto-name'>{cryptoName}</p>
          <div className='price-container'>
              <p className='crypto-price'>{cryptoData.bp}</p>
          </div> 
          <Graph crypto={convertedBars} timeFunc={getCryptoCharts}/>      
        </div> 
        <div className='amount-container'>
            <p className='crypto-amount'>{cryptoData.bs}</p>
        </div>
      </div>
      </div>
   
    )
}
