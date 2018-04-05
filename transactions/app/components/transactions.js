import React from 'react';
import BaseComponent from "./baseComponent";
import * as transactionApi from "../api/transaction-api";
import {connect} from "react-redux";
import _ from "lodash";

class Transactions extends BaseComponent {
    componentDidMount() {
        transactionApi.getTransactions()
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
                                <div className="data-row-cell">{transaction.bankName}</div>
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
        transactions: store.transactionState.transactions.map(transaction => {
            let bankName = transaction.bankId;
            const bank = _.find(store.bankState.banks, {id: Number(transaction.bankId)})
            if (bank) bankName = bank.name;
            return Object.assign({}, transaction, { bankName: bankName });
        })
    };
};

export default connect(mapStateToProps)(Transactions);
