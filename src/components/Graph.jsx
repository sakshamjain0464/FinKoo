import { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import { fetchGraphData } from "../utils/utils";
import {
  Chart,
  LineController,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js";

import { Radio } from "react-loader-spinner";

Chart.register(
  LineController,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement
);

function Graph() {
  const [selectedOption, setSelectedOption] = useState("Week");
  const [loading, setLoading] = useState(false);
  const from = useSelector((state) => state.converter.fromValue);
  const to = useSelector((state) => state.converter.toValue);

  const handleOptionChange = async (e) => {
    setSelectedOption(e.target.value);
    await handleFetchGraphData(e.target.value);
  };

  const chartRef = useRef(null);

  async function handleFetchGraphData(mode) {
    if (chartRef.current) {
      chartRef.current.destroy();
    }

    setLoading(true);

    const { dates, rateList } = await fetchGraphData(mode, from, to);

    if (dates && rateList) {
      const data = {
        labels: dates,
        datasets: [
          {
            label: `1 ${from} = x ${to}`,
            data: rateList,
            fill: false,
            backgroundColor: "#6239eb",
            borderColor: "rgba(168, 85, 247, 0.2)",
          },
        ],
      };

      chartRef.current = new Chart(
        document.getElementById("chart").getContext("2d"),
        {
          type: "line",
          data: data,
          options: {
            responsive: true,
            maintainAspectRatio: false,
            tooltip: {
              enabled: true,
            },
          },
        }
      );
    }
    setLoading(false);
  }

  useEffect(() => {
    handleFetchGraphData(selectedOption);
  }, [to]);

  return (
    <div className="w-full mt-10 min-h-[50vh] h-fit flex flex-col gap-3">
      <div className="flex flex-col text-center items-center py-3 text-3xl font-medium tracking-widest">
        <h1>Exchange Rates of {to} with EUR</h1>
      </div>
      <div className="w-full flex flex-wrap justify-center">
        <input
          type="radio"
          id="option1"
          name="option"
          value="Week"
          checked={selectedOption === "Week"}
          onChange={handleOptionChange}
          className=""
        />
        <label htmlFor="option1">Week</label>

        <input
          type="radio"
          id="option2"
          name="option"
          value="Month"
          checked={selectedOption === "Month"}
          onChange={handleOptionChange}
          className=""
        />
        <label htmlFor="option2">Month</label>

        <input
          type="radio"
          id="option3"
          name="option"
          value="Year"
          checked={selectedOption === "Year"}
          onChange={handleOptionChange}
          className=""
        />
        <label htmlFor="option3">Year</label>
      </div>
      <div className="h-[70%] w-full mt-5">
        {loading && (
          <div className="flex justify-center items-center w-full h-full">
            <Radio
              visible={true}
              height="80"
              width="80"
              ariaLabel="radio-loading"
              colors={['rgb(168 85 247)', 'rgb(168 85 247)', 'rgb(168 85 247)']}
            />
          </div>
        )}
        <canvas id="chart" height={"100%"} width={"100%"}></canvas>
      </div>
    </div>
  );
}

export default Graph;
