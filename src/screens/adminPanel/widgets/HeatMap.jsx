import { ResponsiveCalendar } from '@nivo/calendar';
import {mockHeatMapData as data} from "../mockData";
import { useTheme } from "@mui/material";
import { tokens } from "../../theme";

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
import React from 'react'

const HeatMap = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
<ResponsiveCalendar
        data={data}
        theme={{
          axis: {
            domain: {
              line: {
                stroke: "#FFFFFF",
              },
            },
            legend: {
              text: {
                fill: "#FFFFFF",
              },
            },
            ticks: {
              line: {
                stroke: colors.blueAccent[600],
                strokeWidth: 1,
              },
              text: {
                fill: "#FFFFFF",
              },
            },
          },
          legends: {
            text: {
              fill: "#FFFFFF",
            },
          },
          tooltip: {
            container: {
              color: colors.primary[500],
            },
          },
        }}
        from="2024-01-01"
        to="2024-12-31"
        emptyColor="#eeeeee"
        colors={[ '#61cdbb', '#97e3d5', '#e8c1a0', '#f47560' ]}
        margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
        yearSpacing={60}
        monthSpacing={20}
        monthBorderColor="#ebebeb"
        dayBorderWidth={2}
        dayBorderColor="#fafafa"
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'row',
                translateY: 36,
                itemCount: 4,
                itemWidth: 42,
                itemHeight: 36,
                itemsSpacing: 14,
                itemDirection: 'right-to-left'
            }
        ]}
    />
  )
}

export default HeatMap
