import './Transaction.css';

//Shows a box with the number of transactions and in wich period of time have them been done
//numTransactions -> Number of total transactions in period 
//period -> When were this transactions made (Last Month, Today)
export default function Transaction({numTransactions, period}) {

    return (
        <div className="TransactionBox">
            <h1 className="TransactionTitle">Transactions</h1>
            <div className="TransactionNumber">{numTransactions}</div>
            <div className="TransactionPeriod">{period}</div>
        </div>
    );
}