//external imports
import { Bar } from "react-chartjs-2";
import { useMemo } from "react";

//internal imports
import torqueData from "./data.json";
import { extractTorqueData } from "./utils";

function OpenTorque(props) {
  //sample data for chartjs data.
  const data = useMemo(() => {
    //memoize data.
    const { dataset, labels } = extractTorqueData({
      //extract relevant data for those that are Open.
      data: torqueData,
      currentProfile: 1, //assume that you are only looking at profile 1.
      currentDirection: "Open",
    });
    return {
      //prepare data structure for chartJS
      labels,
      datasets: [
        {
          label: "Average open torque", //for Average open torque bar
          data: dataset,
          backgroundColor: "#668ac4", //blue color
          parsing: {
            yAxisKey: "AverageTorque",
          },
        },
        {
          label: "Last open torque", //for Last open torque bar
          data: dataset,
          parsing: {
            yAxisKey: "LastTorque",
          },
        },
      ],
    };
  }, [torqueData]);
  return (
    <>
      <h2> OPEN </h2>
      <Bar
        data={data}
        options={{
          scales: {
            xAxis: {
              display: true,
              text: "Valve Position",
            },
            yAxis: {
              display: true,
              text: "Required Torque (%)",
            },
          },

          title: {
            display: true,
            text: "Open",
            fontSize: 20,
          },
          legend: {
            display: true,
            position: "right",
          },
        }}
      />
    </>
  );
}
export default OpenTorque;
