import Chart from "react-apexcharts";
import PropTypes from 'prop-types';

export const EmpDistributionPie = ({ size, labelcolor, justifycontent }) => {
  const optionsDoughnut = {
    labels: ["Employee 1", "Employee 2", "Employee 3", "Employee 4", "Employee 5"],
    responsive: [{
      options: {
        chart: {
          width: 200
        }
      }
    }],
    colors: ["#C19EE0", "#822FAF", "#5A3B72", "#6247AA", "#C05299"],
    legend: {
      position: 'left',
      labels: {
        colors: labelcolor || "#fff"
      }
    },
    stroke: {
      width:1
    }
  };

  const seriesDoughnut = [100, 500, 700, 200, 1000, 200, 100];

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