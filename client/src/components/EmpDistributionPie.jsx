import Chart from "react-apexcharts";
import PropTypes from 'prop-types';
import { useSelector } from "react-redux";

export const EmpDistributionPie = () => {

  const { employeeWiseExpenseArray } = useSelector(state => state.statistic);

  const color_palette = ["#64B5F6", "#2196F3", "#1976D2", "#0D47A1",  //blue
    "#E0AAFF", "#C77DFF", "#9D4EDD", "#5A189A", "#310055", //purple
    "#FFE0E9", "#FF9EBB", "#E05780", "#8A2846", "#522E38", //pink
    "#99E2B4", "#67B99A", "#469D89", "#248277", "#036666" //green
  ]
 
  const optionsDoughnut = {
    labels: employeeWiseExpenseArray?.map((employee) => `${employee.employeeName}`),
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
        colors: "#fff"
      }
    },
    stroke: {
      width: 1
    }
  };

  const seriesDoughnut = employeeWiseExpenseArray?.map((employee) => employee.employeeTotalMoneySpent);

  return (
    <div className={`mt-5 d-flex flex-row justify-content-center ms-1`}>
      <Chart
        options={optionsDoughnut}
        series={seriesDoughnut}
        type="donut"
        width={390}
      />
    </div>
  );
};