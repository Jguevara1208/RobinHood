import React from 'react'
import './SplashPage.css'
import { Link } from 'react-router-dom'

export default function Index() {
    return (
        <div>
            <div class="container-1">
                <div class="subcontainer-1">
                    <h1>Investing for Everyone</h1>
                    <span>
                        Commission-free investing, plush the tools
                        you need to put your money in motion. Sign up
                        and get your first stock for free! Certain limits
                        apply
                    </span>
                    <Link to={'/sign-up'}> Sign Up </Link>
                </div>
            <img src={"https://pamplinmedia.com/images/artimg/00003641830392-0652.jpg"} alt={"We are all investors"}></img>
            </div>
            <div class="container-2">
                <img src={"https://pamplinmedia.com/images/artimg/00003641830392-0652.jpg"} alt={"We are all investors"}></img>
                <div class="subcontainer-2">
                    <h1>We are all investors</h1>
                    <Link>See the campaign</Link>
                </div>
            </div>
            <div class="container-3">
                <div>
                    <h1>Introducing Fractional Shares</h1>
                    <h3>Invest in thousands of stocks, with just 1$</h3>
                </div>
                <div class="subcontainer-3">
                    <div>
                        <h4>Invest Any Amount</h4>
                        <p>Choose how much you want to invest, and we’ll convert from dollars to parts of a whole share.</p>
                    </div>
                    <div>
                        <h4>Build a balanced Portfolio</h4>
                        <p>Customize your portfolio with pieces of different companies and funds to help reduce risk.</p>
                    </div>
                    <div>
                        <h4>Trade in real time</h4>
                        <p>Trades placed during market hours are executed at that time, so you’ll always know the share price.</p>
                    </div>
                </div>
                


                <video height="563px" width="650px" class="video-1" autoplay="" controlslist="nodownload nofullscreen noremoteplayback" loop="" preload="auto">
                    <source class="img-1" src="https://cdn.robinhood.com/assets/robinhood/brand/_next/static/images/3x__327bf4cc768a323497d5aaa7416319c2.mp4" type="video/mp4"></source>
                    <img draggable="false" role="presentation" src="https://cdn.robinhood.com/assets/robinhood/brand/_next/static/images/1x__36a396f664677ed80a2459d1dca75f00.png" srcset="https://cdn.robinhood.com/assets/robinhood/brand/_next/static/images/1x__36a396f664677ed80a2459d1dca75f00.png, https://cdn.robinhood.com/assets/robinhood/brand/_next/static/images/2x__c7dcadbbb72fc298e85e94844f68342c.png 2x, https://cdn.robinhood.com/assets/robinhood/brand/_next/static/images/3x__7c5da6ba049983f3558423906f16f0af.png 3x"></img></video>
            <img src={"https://cdn.robinhood.com/assets/robinhood/brand/_next/static/images/2x__ff9c36e27d7018cf707b95d8675793a3.png"}></img>




            </div>
        </div>
    )
}
