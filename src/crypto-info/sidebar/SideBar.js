import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios'
import Loader from '../../loader/Loader';

const SideBar = () => {

    const [Coins , setCoins] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        const loadCoin = async () => {
            // Till the data is fetch using API 
            // the Loading page will show.
            setLoading(true);

            // Await make wait until that 
            // promise settles and return its result
            const response = await axios.get(
            `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=9&page=9&sparkline=false`);

            // After fetching data stored it in posts state.
            setCoins(response.data);

            // Closed the loading page
            setLoading(false);
            }
            // Call the function
            loadCoin();
        }, [])

    return ( 
        <>
            {
                loading ? (<Loader />) :
                (
                    <div>
                    <h1 className='font-bold text-blue-100 text-right my-2'>نگاه کلی به بازار</h1>      
                    {
                        Coins.map((coin , i)=>(
                            <div className="flex mb-4 rounded-md" key={i} style={{backgroundColor:"#0F1C2E"}}>
                                <div className="w-full flex justify-between py-2 px-4">
                                    <div className="w-4/12 flex">
                                        <img src={coin.image} alt="crypto" className='w-4/12 h-10'/>
                                        <h1 className='mt-3 ml-2 text-sm text-blue-200'>{coin.name}</h1>
                                    </div>
                                    <div className="w-6/12 text-right">
                                        <p className="text-blue-300">${coin.total_volume.toLocaleString()}</p>
                                        {coin.price_change_24h < 0 ? (
                                                <p className="text-xs red text-right">{coin.price_change_24h.toFixed(2)}%</p>
                                            ):(
                                                <p className="text-xs green text-right">{coin.price_change_24h.toFixed(2)}%</p>
                                        )}
                                    </div>
        
                                </div>
                            </div>
                        ))
                    }
                </div>
                )
            }
        </>

     );
}

export default SideBar