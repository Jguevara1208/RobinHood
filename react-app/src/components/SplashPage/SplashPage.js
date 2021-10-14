import React from 'react'
import './SplashPage.css'
import { Link } from 'react-router-dom'
import { AiOutlineArrowUp, AiOutlineArrowDown } from 'react-icons/ai';

export default function Index() {
    
    const [visibleTool, setVisibleTool] = React.useState(0)
    
    
    function increaseVisibleToolValue () {
        if (visibleTool < 2 ){
            setVisibleTool((visibleTool) => visibleTool + 1)
        }
    }

    function decreaseVisibleToolValue () {
        if (visibleTool > 0) {
            setVisibleTool(visibleTool - 1)
        }else{
            setVisibleTool(2)
        }
    }
    
    React.useEffect(() => {
        const sliderInterval = setInterval(
            () => { setVisibleTool((visibleTool + 1)% 3 ) },
            3500);
        return () => {
            clearInterval(sliderInterval);
        }
    })


    return (
        <div>
            <div className="investing-for-everyone-container">
                <div className="subcontainer-1">
                    <h1>Investing for Everyone</h1>
                    <p className="investing-for-everyone-desc">
                        Commission-free investing, plush the tools
                        you need to put your money in motion. Sign up
                        and get your first stock for free! Certain limits
                        apply
                    </p>
                    <Link className="sign-up-button" to={'/sign-up'}> Sign Up </Link>
                </div>
                <div className="home-video-1">
                    <div className="home-video-2">
                        <div className="home-video-3">
                            <video height="563px" width="650px" className="video-1" autoPlay controlsList="nodownload nofullscreen noremoteplayback" loop muted playsInline="" preload="auto">
                                <source className="img-1" src="https://cdn.robinhood.com/assets/robinhood/brand/_next/static/images/3x__327bf4cc768a323497d5aaa7416319c2.mp4" type="video/mp4" />
                                <img draggable="false" role="presentation" src="https://cdn.robinhood.com/assets/robinhood/brand/_next/static/images/1x__36a396f664677ed80a2459d1dca75f00.png"
                                    srcSet="https://cdn.robinhood.com/assets/robinhood/brand/_next/static/images/1x__36a396f664677ed80a2459d1dca75f00.png, https://cdn.robinhood.com/assets/robinhood/brand/_next/static/images/2x__c7dcadbbb72fc298e85e94844f68342c.png 2x, https://cdn.robinhood.com/assets/robinhood/brand/_next/static/images/3x__7c5da6ba049983f3558423906f16f0af.png 3x" />
                            </video>
                            <img className="video-img" draggable="false" src="https://cdn.robinhood.com/assets/robinhood/brand/_next/static/images/2x__ff9c36e27d7018cf707b95d8675793a3.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>

        <div className="ipo-access-main-container">
                <img className="ipo-main-img" src="https://robinhood.com/us/en/_next/static/images/balloon__ef7d8a9bb1c7845fcb7a6799c35d513e.svg"></img>
                <div className="ipo-container">
                    <div>
                        <h1>Introducing IPO Access</h1>
                        <p>Get in at the IPO price. Now you can become one of the first public investors in upcoming IPOs.</p>
                    </div>
                    
                        <div className="ipo-info-container-main">
                            <div className="ipo-info-container">
                                <img className="ipo-info-img" src="https://robinhood.com/us/en/_next/static/images/comeall__c29b103566f44e51d624989e65ecf3be.svg"></img>
                                <div>
                                    <h3>It's your turn</h3>
                                    <p>No minimum account balances or special status requirements</p>
                                </div>
                            </div>
                            <div className="ipo-info-container">
                                <img className="ipo-info-img" src="https://robinhood.com/us/en/_next/static/images/one-first__d86b9ee63a8475364159f2d21ea5f01f.svg"></img>
                                <div>
                                    <h3>Be one of the first</h3>
                                    <p>Request shares in new companies before their stock starts trading on public exchanges</p>
                                </div>
                            </div>
                            <div className="ipo-info-container">
                                <img className="ipo-info-img" src="https://robinhood.com/us/en/_next/static/images/fair-shot__fb09db580d0ada2e8626a6e46094bb27.svg"></img>
                                <div>
                                    <h3>Get a fair shot</h3>
                                    <p>While IPO shares are limited, IPO Access gives you the same opportunity to invest, regardless of order size or account value</p>
                                </div>
                            </div>
                        </div>
                </div>

        </div>
            
            <div className="fractional-shares-container">
                    <div className="ipo-header">
                        <h1>Introducing Fractional Shares</h1>
                        <p>Invest in thousands of stocks, with just 1$</p>
                    </div>
                <div className="subcontainer-3">
                    <div className="fractional-shares-info">
                        <h4>Invest Any Amount</h4>
                        <p>Choose how much you want to invest, and we’ll convert from dollars to parts of a whole share.</p>
                    </div>
                    <div className="fractional-shares-info">
                        <h4>Build a balanced Portfolio</h4>
                        <p>Customize your portfolio with pieces of different companies and funds to help reduce risk.</p>
                    </div>
                    <div className="fractional-shares-info">
                        <h4>Trade in real time</h4>
                        <p>Trades placed during market hours are executed at that time, so you’ll always know the share price.</p>
                    </div>
                    <img className="fractional-shares-side-img" src="https://robinhood.com/us/en/_next/static/images/1x__1358464522fc1bd88f9bf62a40f42192.png"></img>
                </div>
            </div>

            <div className="tools-container">
                <div className="tools-buttons-container">
                    <button className="tool-button" onClick={decreaseVisibleToolValue}><AiOutlineArrowUp /></button>
                    <button className={visibleTool === 0 ? `tool-button-active` : `tool-button`} onClick={e => setVisibleTool(0)}>Learn</button>
                    <button className={visibleTool === 1 ? `tool-button-active` : `tool-button`} onClick={e => setVisibleTool(1)}>Manage</button>
                    <button className={visibleTool === 2 ? `tool-button-active` : `tool-button`} onClick={e => setVisibleTool(2)}>Customize</button>
                    <button className="tool-button" onClick={increaseVisibleToolValue}><AiOutlineArrowDown /></button>
                </div>
                <div className="tools-container">
                    {
                        visibleTool === 0 && (
                            <div className="info-container">
                            <img className="tool-img" src={'/images/learn.png'}></img>
                                <div className="subcontainer-4">
                                    <h1 className="par-tools">Learn As You Go</h1>
                                    <p className="par-tools">Our goal is to make investing in financial markets more affordable, more intuitive, and more fun, no matter how much experience you have (or don’t have).</p>
                                </div>
                            </div>
                        )
                    }

                    {
                        visibleTool === 1 && (
                            <div className="info-container">
                                <img className="tool-img" src={'/images/manage.png'}></img>
                                <div className="subcontainer-4">
                                    <h1 className="par-tools">Manage Your Portfolio</h1>
                                    <p className="par-tools">Keep your portfolio in your pocket. Everything you need to manage your assets is available in a single app.</p>
                                </div>
                            </div>
                        )
                    }

                    {
                        visibleTool === 2 && (
                            <div className="info-container">
                                <img className="tool-img" src="/images/customize.png"></img>
                                <div className="subcontainer-4">
                                    <h1 className="par-tools">Keep Tabs on Your Money</h1>
                                    <p className="par-tools">Set up customized news and notifications to stay on top of your assets as casually or as relentlessly as you like. Controlling the flow of info is up to you.</p>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
            <div className="footer-contact-info">
                    <a href="https://github.com/Jguevara1208/RobinHood">Github</a>
            </div>

        </div>
    )
}
