import Chart from "react-apexcharts";

export const ExpByCategory = () => {
  const labels = ["Category 1", "Category 2", "Category 3", "Category 4", "Category 5", "Category 6", "Category 7", "Category 8"];
  
  const generateRandomColor = () => {
    const randomRed = Math.floor(Math.random() * 100 + 100); // Generate a random red component (100-200)
    const randomGreen = Math.floor(Math.random() * 100 + 100); // Generate a random green component (100-200)
    const randomBlue = Math.floor(Math.random() * 100 + 100); // Generate a random blue component (100-200)
  
    const randomColor = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;
    return randomColor;
  }
  

  const optionsDoughnut = {
    labels: labels,
    responsive: [{
      options: {
        chart: {
          width: 200
        }
      }
    }],
    colors: labels.map(() => generateRandomColor()), // Generate colors dynamically
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