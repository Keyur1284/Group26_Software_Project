import Chart from "react-apexcharts";
import { useSelector } from "react-redux";

export const ExpByCategory = () => {

  const { categoryWiseExpenseArray } = useSelector(state => state.statistic)

  const labels = categoryWiseExpenseArray.map((category) => category.category)

  const color_palette = ["#BBDEFB", "#64B5F6", "#2196F3", "#1976D2", "#0D47A1",  //blue
    "#E0AAFF", "#C77DFF", "#9D4EDD", "#5A189A", "#310055", //purple
    "#FFE0E9", "#FF9EBB", "#E05780", "#8A2846", "#522E38", //pink
    "#99E2B4", "#67B99A", "#469D89", "#248277", "#036666" //green
  ]

  const optionsDoughnut = {
    labels: labels,
    responsive: [{
      options: {
        chart: {
          width: 200
        }
      }
    }],
    colors: color_palette,
    legend: {
      position: 'left',
      labels: {
        colors: "#000"
      }
    },
    stroke: {
      width: 1
    }
  };

  const seriesDoughnut = categoryWiseExpenseArray.map((category) => category.categoryTotalMoneySpent)

  return (
    <div className="mt-5 d-flex flex-row justify-content-center me-5">
      <Chart
        options={optionsDoughnut}
        series={seriesDoughnut}
        type="donut"
        width="800"
      />
    </div>
  );
};