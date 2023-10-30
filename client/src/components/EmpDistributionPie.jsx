import Chart from "react-apexcharts";

export const EmpDistributionPie = () => {
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
        colors: "#fff"
      }
    },
    stroke: {
      width:1
    }
  };

  const seriesDoughnut = [100, 500, 700, 200, 1000];

  return (
    <div className="mt-5 d-flex flex-row justify-content-end me-5">
      <Chart
        options={optionsDoughnut}
        series={seriesDoughnut}
        type="donut"
        width="370"
      />
    </div>
  );
};