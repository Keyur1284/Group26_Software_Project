import Chart from "react-apexcharts";

export const TotalExpPie = () => {
  const optionsDoughnut = {
    labels: ["Used", "Unused"],
    responsive: [{
      options: {
        chart: {
          width: 200
        }
      }
    }],
    colors: ["#41BBD9", "#0353A4"],
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

  const seriesDoughnut = [100, 500];

  return (
    <div className="mt-5 d-flex flex-row justify-content-end me-5">
      <Chart
        options={optionsDoughnut}
        series={seriesDoughnut}
        type="donut"
        width="350"
      />
    </div>
  );
};