import axios from 'axios'

// const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3002";
const BASE_URL = 'https://u-back-e938.vercel.app'
// axios.defaults.withCredentials = true;

export class CryptoApi{

    static async getStats(endpoint, data={timeframe:'1Day'}, method='GET'){
        // console.log(endpoint,data,'inside get stats for bars') 
        const url = `${BASE_URL}/crypto/stats/${endpoint}`; 
        const params = (method == 'GET') ? data : {}
        
        try{
            const resp = await axios({url, method, params, data})
            // console.log(resp, 'PICTURE PERFECT')
            return resp
        }catch(e){
            console.log(e)
        }
    }
}