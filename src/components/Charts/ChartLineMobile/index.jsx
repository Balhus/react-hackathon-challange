import './ChartLineMobile.css'
import LineChart from '../LineChart'

//Chart showed in the mobile version, gets 2 parameters
//labels -> labels to put in the chart
//infoData -> data to show in the charts
export default function ChartMobile({labels, infoData}) {

    return (
        <div className="ChartMobileContainer">
            <div className="ChartMobileBox">
                <h1 className='ChartMobileTitle'>Transactions Last Year</h1>
                <div className="ChartMobilePeriodBox">
                    <div className="ChartMobilePeriod ChartMobile-active">Monthly</div>
                    <div className="ChartMobilePeriod">Daily</div>
                </div>
                <div className='ChartMobileLines'>
                    <LineChart labels={labels} infoData={infoData} pointRad={5}/>
                </div>
            </div>
        </div>
    );
}