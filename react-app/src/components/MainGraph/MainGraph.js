import { LineChart, XAxis, YAxis, Tooltip, CartesianGrid, Line, ReferenceLine } from 'recharts'
import { useState } from 'react';
import Odometer from 'react-odometerjs'

import './MainGraph.css'



function MainGraph({graphData}){
    const [hoverPrice, setHoverPrice] = useState(graphData[graphData.length -1].price)

    function handleMouseHover(e){
        if(e.activePayload){
            setHoverPrice(e.activePayload[0].payload.price)
        }
    }
    function resetHoverPrice(){
        return setHoverPrice(graphData[graphData.length - 1].price);
    }

    return (
      <div>
        <Odometer value={hoverPrice} format="(,ddd).dd" />
        {graphData && (
          <div>
            <LineChart
              data={graphData}
              width={800}
              height={600}
              onMouseMove={handleMouseHover}
              onMouseLeave={resetHoverPrice}
            >
              <XAxis dataKey="time" hide/>
              <YAxis
                domain={[
                  graphData[0].price - 5,
                  graphData[graphData.length - 1].price + 5,
                ]}
              hide/>
              <Line
                dataKey="price"
                stroke="#00C805"
                dot={false}
                strokeWidth={2}
              />
              <Tooltip
                wrapperStyle={{
                  borderColor: "white",
                  boxShadow: "2px 2px 3px 0px rgb(204, 204, 204)",
                }}
                contentStyle={{ backgroundColor: "rgba(255, 255, 255, 0.8)" }}
                labelStyle={{ fontWeight: "bold", color: "#666666" }}
              />
              <ReferenceLine
                ifOverflow="extendDomain"
                y={graphData[0].price}
                strokeWidth={2}
                strokeHeight={1.5}
                strokeDasharray="1 6"
                stroke="lightgrey"
              />
            </LineChart>
          </div>
        )}
      </div>
    );
    
}

export default MainGraph
