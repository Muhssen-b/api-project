import React from 'react'
import './coin.css'

const coin = ({name, marketCap, image, price, volume, coin, search, symbol, priceChange}) => {

  
    return (
        <div className="coin-container">
            <div className="coin-row">
                <div className="coin">
                    <img src={image} alt="crypto" className="coin-image" />
                        <h1>{name}</h1>
                        <p className="coin-symbol">
                            {symbol}
                        </p>
                        </div>
                        <div className="coin-data">
                            <p className="coin-price">${price.toFixed(2)}</p>
                            <p className="coin-volume">${volume.toLocaleString() }</p>
                        </div>
                        <div className="">
                        {priceChange < 0 ? (
                            <p className="red">
                                {priceChange.toFixed(2)}%
                            </p>
                        ) : (<p className="green">
                            {priceChange.toFixed(2)}%
                            </p>
                        )}
                        </div>
                        <div className="coin-market-cap">
                            Mkt Cap 
                            ${marketCap.toLocaleString()}
                        </div>

                    
                </div>
            </div>

            
       
    )
}

export default coin
