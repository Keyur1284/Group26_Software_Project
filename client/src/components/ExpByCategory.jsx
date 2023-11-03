import Chart from "react-apexcharts";

export const ExpByCategory = () => {
  const labels = ["Category 1", "Category 2", "Category 3", "Category 4",
    "Category 5", "Category 6", "Category 7", "Category 8"];

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

  const seriesDoughnut = [1200, 400, 1505, 700, 900, 1000, 250, 500];

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