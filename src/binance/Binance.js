import React from 'react'
import { useEffect } from 'react';

const Binance = () => {
//push page to top
useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "بازارهای معاملاتی";
    }, []);

  return (
    <div className='w-full'>
        <iframe className='w-full h-screen mt-20'
        src="https://s.tradingview.com/widgetembed/?frameElementId=tradingview_01860&amp;symbol=BINANCE%3ABTCUSDT&amp;interval=D&amp;hidesidetoolbar=0&amp;symboledit=0&amp;saveimage=1&amp;toolbarbg=f4f7f9&amp;studies=%5B%5D&amp;hideideas=1&amp;theme=dark&amp;timezone=Asia%2FTehran&amp;withdateranges=1&amp;studies_overrides=%7B%7D&amp;overrides=%7B%7D&amp;enabled_features=%5B%22header_fullscreen_button%22%2C%22side_toolbar_in_fullscreen_mode%22%2C%22header_in_fullscreen_mode%22%2C%22header_undo_redo%22%2C%22header_settings%22%5D&amp;disabled_features=%5B%22header_saveload%22%5D&amp;locale=en&amp;utm_source=wallex.ir&amp;utm_medium=widget&amp;utm_campaign=chart&amp;utm_term=BINANCE%3ABTCUSDT#%7B%22page-uri%22%3A%22wallex.ir%2Fapp%2Ftrade%2FBTCTMN%22%7D">

        </iframe>
    </div>
  )
}

export default Binance