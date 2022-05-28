import './ChartLinePC.css'
import LineChart from '../LineChart'
import { AiOutlineArrowUp, AiOutlineCalendar } from 'react-icons/ai'

//Line Chart showed in the PC version, gets 3 parameters
//labels -> labels to put in the chart
//infoData -> data to show in the charts
//revenue -> total revenue, this value is from the service and Dashboard gives it to this component
export default function ChartLinePC({ labels, infoData, revenue }) {

    return (
        <div className="ChartLinePCContainer">
            <div className="ChartLinePCBox">
                <div className="ChartLinePCHeader">
                    <h1 className='ChartLinePCTitle'>Weekly expenses</h1>
                    <div className="ChartLinePCCalendarBox">
                        <span>Oct - Nov 2019</span> <AiOutlineCalendar />
                    </div>
                </div>
                <div className='ChartLinePCLines'>
                    <LineChart labels={labels} infoData={infoData} pointRad={0}/>
                </div>
                <div className="ChartLinePCFooter">
                    <h1 className='totalRevenueTitle'>Total Revenue</h1>
                    <p className='totalRevenueValue'>{revenue}</p>
                    <div className='revenueChangeIndicator'><AiOutlineArrowUp /> 7.00% </div>
                </div>
            </div>
        </div>
    );
}