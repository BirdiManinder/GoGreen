import React from "react";
import { Adsense } from '@ctrl/react-adsense';
import './css/AdsenseStylesheet.css';

function AdsenseExample() {
        //console.log("Ads Shown")
        return (
            <Adsense
                className='ExampleAdSlot'
                client="ca-pub-8783640532957105"
                slot="3460995955"
                adTest='on' //Dev Only
            />
        )

}

export default AdsenseExample