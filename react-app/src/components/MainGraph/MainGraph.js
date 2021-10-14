import { LineChart, XAxis, YAxis, Tooltip, Line, ReferenceLine, ResponsiveContainer} from 'recharts';
import { useEffect, useState } from 'react';
import {useSelector} from 'react-redux'
import Odometer from 'react-odometerjs';

import './MainGraph.css';
import '../PortfolioPage/Portfolio.css'



function MainGraph({graphData, isWatchList=false, isPos}){
  const theme = useSelector(state => state.theme)
  const [hoverPrice, setHoverPrice] = useState(graphData[graphData.length -1].price);
  const [percentDiff, setPercentDiff] = useState(graphData[graphData.length-1]["%"]);

  function lineColor(){
    if(theme === "light"){
      if(isPos === "pos"){
        return "#2eda12";
      }else{
        return "#FE5001";
      }
    }else{
      if (isPos === "pos") {
        return "#5dd8ff";
      } else {
        return "#FE5001";
      }
    }
  }

  useEffect(()=> {
    setPercentDiff(graphData[graphData.length - 1]["%"]);
  }, [graphData])

  function handleMouseHover(e){
    if (!isWatchList) {
      if(e.activePayload){
          setHoverPrice(e.activePayload[0].payload.price);
          setPercentDiff(e.activePayload[0].payload["%"]);

      };
    };
  };
  
  function resetHoverPrice(){
        setHoverPrice(graphData[graphData.length - 1].price);
        setPercentDiff(graphData[graphData.length - 1]["%"]);
  }

  return (
    <div className={isWatchList? "graph-wrapper-wl" : "graph-wrapper"}>
      {isWatchList === false && (
        <div>
          <div className='odometer-container'>
            <span className='dollar-sign'>$</span>
            <Odometer value={hoverPrice} format="(,ddd).dd" />
          </div>
          <p className={`${isPos} p-diff`}>{percentDiff}%</p>
        </div>
      )}
      {graphData && (
        <ResponsiveContainer
          width={isWatchList ? "90%" : "100%"}
          height={isWatchList ? 45 : 300}
          className="graph-container"
        >
          <LineChart
            data={graphData}
            onMouseMove={handleMouseHover}
            onMouseLeave={resetHoverPrice}
          >
            <XAxis dataKey="time" hide />
            <YAxis
              domain={[
                graphData[0].price - 5,
                graphData[graphData.length - 1].price + 5,
              ]}
              hide
            />
            <Line
              dataKey="price"
              stroke={lineColor()}
              dot={false}
              strokeWidth={isWatchList ? 1 : 2}
            />
            {isWatchList === false && (
              <Tooltip
                wrapperStyle={{
                  borderColor: "white",
                  boxShadow: "2px 2px 3px 0px rgb(204, 204, 204)",
                }}
                contentStyle={{ backgroundColor: "rgba(255, 255, 255, 0.8)" }}
                labelStyle={{ fontWeight: "bold", color: "#666666" }}
              />
            )}
            <ReferenceLine
              ifOverflow="extendDomain"
              y={graphData[0].price}
              strokeWidth={2}
              strokeHeight={1.5}
              strokeDasharray="1 6"
              stroke="#7F7F7F"
            />
          </LineChart>
        </ResponsiveContainer>
      )}
    </div>
  );  
};

export default MainGraph;
