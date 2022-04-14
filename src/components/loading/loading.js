import React from 'react'
import Gif from './loading.gif'


const Loading = () => {


    return(
        <>
            <style jsx>{`
                .loading{
                    width: 100%;
                    height: 100vh;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                
                .loading img{
                    width: 350px;
                    height: 350px;
                }
            `}</style>
            <div className="loading">
               <img src={Gif} alt="loading"/>
            </div>
        </>
    )
}

export default Loading