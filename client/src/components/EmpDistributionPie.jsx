import Chart from "react-apexcharts";
import PropTypes from 'prop-types';

export const EmpDistributionPie = ({ size, labelcolor, justifycontent }) => {
  const labels = ["Employee 1", "Employee 2", "Employee 3", "Employee 4", "Employee 5",
  "Employee 6", "Employee 7", "Employee 8", "Employee 9", "Employee 10",
  "Employee 11", "Employee 12", "Employee 13", "Employee 14", "Employee 15",
  "Employee 16", "Employee 17", "Employee 18", "Employee 19", "Employee 20"]

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
        colors: labelcolor || "#fff"
      }
    },
    stroke: {
      width: 1
    }
  };

  const seriesDoughnut = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
    100, 100, 100, 100, 100, 100, 100, 100, 100, 100];

  return (
    <div className={`mt-5 d-flex flex-row ${justifycontent || 'justify-content-end'} me-5`}>
      <Chart
        options={optionsDoughnut}
        series={seriesDoughnut}
        type="donut"
        width={size || 370}
      />
    </div>
  );
};

EmpDistributionPie.propTypes = {
  size: PropTypes.number,
  labelcolor: PropTypes.string,
  justifycontent: PropTypes.string
};