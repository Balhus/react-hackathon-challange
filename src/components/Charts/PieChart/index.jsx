import { Pie } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';

//Options to further customize the graphic
const options = {
    plugins: {
        legend: {
            position: 'bottom',
            labels:{ 
                usePointStyle: true
            }
        }
    },
}

//Changing the font color of the labels
Chart.defaults.color = "#999999";

//Necesary dependencies to use the chart
Chart.register(ArcElement, Tooltip, Legend);


//Creates a Pie Chart with the given data and labels.
//labels -> labels to put in the chart
//infoData -> data to show in the charts
export default function PieChart({ labels, infoData }) {
    //Data to be used in the graphic
    const data = {
        labels: labels,
        datasets: [{
            label: 'My First Dataset',
            data: infoData,
            fill: false,
            backgroundColor: [
                'rgba(0, 122, 255, 1)',
                'rgba(251, 136, 50, 1)',
                'rgba(144, 19, 254, 1)',
                'rgba(230, 229, 230, 1)',
            ],
            borderColor: [
                'rgba(0, 122, 255, 1)',
                'rgba(251, 136, 50, 1)',
                'rgba(144, 19, 254, 1)',
                'rgba(230, 229, 230, 1)',
            ],
            tension: 0.5,
            pointBorderColor: 'white',
            pointBackgroundColor: 'rgb(105, 121, 248)',
            pointRadius: 3,
            pointStyle: 'circle',
        }]
    };

    return (
        <>
            <Pie data={data} options={options} />
        </>
    )
}