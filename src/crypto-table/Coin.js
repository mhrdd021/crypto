import './Coin.css'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Banner from '../banner/Banner';
import Loader from '../loader/Loader';
const MainCrypto = () => {
//push page to top
useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "بازارهای معاملاتی";
    }, []);

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
            `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false`);

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
            (<div>
                <Banner />
                <h1 className='font-bold text-xl md:text-3xl text-center text-blue-100 mb-4'>بازارهای معاملاتی</h1>
                    {
                        Coins.map((coin , i)=>(
                            <div className="coin-container" key={i}>
                                <div className="coin-row">
                                    <Link to={`/Coin/${coin.id}`}>
                                        <div className="coin pl-4 md:pl-0">
                                            <img src={coin.image} alt="crypto"/>
                                            <h1>{coin.name}</h1>
                                            <p className="coin-symbol">({coin.symbol})</p>
                                        </div>
                                    </Link>
                                    <div className="coin-data">
                                        <p className="coin-volume">${coin.total_volume.toLocaleString()}</p>
                                        {coin.price_change_24h < 0 ? (
                                                <p className="coin-percent red">{coin.price_change_24h.toFixed(2)}%</p>
                                            ):(
                                                <p className="coin-percent green">{coin.price_change_24h.toFixed(2)}%</p>
                                        )}
                                        <p className="coin-marketcap">MKT Cap: ${coin.market_cap_change_24h.toLocaleString()}</p>
                                    </div>
                                    
                                    <Link to={`/Coin/${coin.id}`}>
                                        <button value={coin.id} className="bg-zinc-600 rounded-md mr-4 py-1 px-2 coinLink">
                                                جزئیات
                                        </button>
                                    </Link>

                                </div>
                            </div>
                        ))
                    }
            </div>)
        }
        </>

     );
}
 
export default MainCrypto;