import React from 'react';
import BaseComponent from "./baseComponent";
import * as transactionApi from "../api/transaction-api";
import {connect} from "react-redux";

class Transactions extends BaseComponent {
    componentDidMount() {
        transactionApi.getTransactions()
    }

    getBankName(bankId) {
        return this.props.banks.find(b => b.id == bankId).name;
    }

    render() {
        return (
            <div>
                <h1>Transactions</h1>
                <div>
                    <div className="data-row">
                        <div className="data-row-cell">ID</div>
                        <div className="data-row-cell">Amount</div>
                        <div className="data-row-cell">Bank</div>
                        <div className="buttons" />
                    </div>
                    {this.props.transactions.map(transaction => {
                        return (
                            <div key={transaction.id} className="data-row">

                                <div className="data-row-cell">{transaction.id}</div>
                                <div className="data-row-cell">{transaction.amount}</div>
                                <div className="data-row-cell">{this.getBankName(transaction.bankId)}</div>
                                <div className="buttons"><button onClick={transactionApi.deleteTransaction.bind(null, transaction.id)} className="delete">Delete</button></div>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

const mapStateToProps = function(store) {
    return {
        transactions: store.transactionState.transactions,
        banks: store.bankState.banks
    };
};

export default connect(mapStateToProps)(Transactions);
