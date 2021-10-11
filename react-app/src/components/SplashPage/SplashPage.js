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
                <h1>Introducing Fractional Shares</h1>
                <h3>Invest in thousands of stocks, with just 1$</h3>
                <div>
                    <h4>Invest Any Amount</h4>
                    <p>
                    Choose how much you want to invest, and we’ll convert from dollars to parts of a whole share.
                    </p>
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
        </div>
    )
}
