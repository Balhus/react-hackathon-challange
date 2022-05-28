import { Line } from 'react-chartjs-2';
import {
    Chart,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

//Options to further customize the graphic
const options = {
    plugins: {
        filler: {
            propagate: false,
        },
        legend: {
            display: false,
        }
    },
    scales: {
        y: {
            grid: {
                color: "white"
            }
        },
        x: {
            offset: true,

        }
    }
}

//Changing the font color of the labels
Chart.defaults.color = "#999999";

//Necesary dependencies to use the chart
Chart.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

//Creates a Line Charts with the given data, labels and properties.
//labels -> labels to put in the chart
//infoData -> data to show in the charts
//pointRad -> radius of the points
export default function LineChart({ labels, infoData, pointRad }) {
    //Data to be used in the graphic
    const data = {
        labels: labels,
        datasets: [{
            label: 'My First Dataset',
            data: infoData,
            fill: 'start',
            borderColor: 'rgb(105, 121, 248)',
            tension: 0.5,
            pointBorderColor: 'white',
            pointBackgroundColor: 'rgb(105, 121, 248)',
            pointRadius: pointRad,
            backgroundColor: 'rgba(105, 121, 248, 0.2)'
        }]
    };

    return (
        <>
            <Line id="myChart" data={data} options={options} />
        </>
    )
}