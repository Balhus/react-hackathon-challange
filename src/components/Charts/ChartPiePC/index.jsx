import './ChartPiePC.css'
import PieChart from '../PieChart'

//Pie Chart showed in the PC version, gets 2 parameters
//labels -> labels to put in the chart
//infoData -> data to show in the charts
export default function ChartPiePC({ labels, infoData }) {

    return (
        <div className="ChartPiePCContainer">
            <div className="ChartPiePCBox">
                <div className="ChartPiePCHeader">
                    <h1 className='ChartPiePCTitle'>Conversion</h1>
                    <div className="ChartPiePCPlusInfoBox">
                        <p>...</p>
                    </div>
                </div>
                <div className="ChartPiePCLinesContainer">
                    <div className='ChartPiePCLines'>
                        <PieChart labels={labels} infoData={infoData} />
                    </div>
                </div>

            </div>
        </div>
    );
}