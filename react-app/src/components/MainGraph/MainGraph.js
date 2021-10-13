import { LineChart, XAxis, YAxis, Tooltip, Line, ReferenceLine, ResponsiveContainer} from 'recharts';
import { useState } from 'react';
import Odometer from 'react-odometerjs';

import './MainGraph.css';
import '../PortfolioPage/Portfolio.css'



function MainGraph({graphData, isWatchList=false, isPos}){
  const [hoverPrice, setHoverPrice] = useState(graphData[graphData.length -1].price);
  const [percentDiff, setPercentDiff] = useState(graphData[graphData.length-1]["%"]);
  // console.log(graphData[graphData.length -1])

  const refPoint = Math.sign(graphData[graphData.length - 1]["%"]);

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
    <div className="graph-wrapper">
      {isWatchList === false && (
        <div>
          <Odometer value={hoverPrice} format="(,ddd).dd" />
          <p className={`${isPos} p-diff`}>{percentDiff}%</p>
        </div>
      )}
      {graphData && (
        <ResponsiveContainer
          width="100%"
          height={300}
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
              stroke={refPoint === 1 ? "#00C805" : "#FE5001"}
              dot={false}
              strokeWidth={2}
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
