import React from 'react'
import Accordian from '../components/Accordian.jsx'
import RandomColor from '../components/RandomColor.jsx'
import StarRating from '../components/StarRating.jsx'
import ImageSlider from '../components/ImageSlider.jsx'
import LoadmoreCard from '../components/LoadmoreCard.jsx'
import TreeView from '../components/TreeView.jsx'
import QrCode from '../components/QrCode.jsx'
import LighDark from '../components/LighDark.jsx'

const Home = () => {
    return (
        <div>
            <Accordian />
            <RandomColor />
            <StarRating />
            <ImageSlider />
            <LoadmoreCard />
            <TreeView />
            <QrCode />
            <LighDark />
        </div>
    )
}

export default Home