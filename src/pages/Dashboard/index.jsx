import React, { useEffect, useState } from "react";
import NavBar from "../../components/NavBar";
import ChartLineMobile from "../../components/Charts/ChartLineMobile";
import ChartLinePC from "../../components/Charts/ChartLinePC";
import ChartPiePC from "../../components/Charts/ChartPiePC";
import Transaction from "../../components/Transaction";
import getMockData from "../../services/getMockData";
import Header from "../../components/Header";


//Main page of the app, displays all the data and changes its appearance if the screen is mobile or PC
export default function Dashboard() {
    //State to store the data from the service
    const [data, setData] = useState({});

    //Getting the data from the service in a useEffect so it doesn't asks for the data if we already have it(getMockData would have a fetch inside if it was real)
    useEffect(() => {
        setData(getMockData())
    }, [])

    return (
        <div id="main-container">
            <Header />
            <div className="dashboardMainRow">
                <div className="dashboardFirstCol">
                    <div className="TransactionsGroup">
                        <Transaction numTransactions={data.tLastMonth} period={'LAST MONTH'} />
                        <Transaction numTransactions={data.tToday} period={'TODAY'} />
                    </div>
                    <div className="notVisibleOnMobile">
                        <ChartPiePC
                            labels={data.conversion && data.conversion.labels}
                            infoData={data.conversion && data.conversion.data}
                        />
                    </div>
                </div>
                <div className="dashboardSecondCol">
                    <div className="notVisibleOnMobile">
                        <ChartLinePC
                            labels={data.weeklyExpenses && data.weeklyExpenses.labels}
                            infoData={data.weeklyExpenses && data.weeklyExpenses.data} 
                            revenue={data && data.totalRevenue}
                            />
                    </div>
                </div>
            </div>
            <div className="notVisibleOnPC">
                <ChartLineMobile
                    labels={data.transactionsLastYear && data.transactionsLastYear.labels}
                    infoData={data.transactionsLastYear && data.transactionsLastYear.data}
                />
                <NavBar />
            </div>

        </div>
    );
}