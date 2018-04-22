import React from 'react';
import BaseComponent from "./baseComponent";
import {connect} from "react-redux";
import * as transactionApi from "../api/transaction-api";
import * as bankApi from "../api/bank-api";

class Add extends BaseComponent {
    constructor() {
        super();

        this.state = {
            id: "",
            amount: "",
            bankId: ""
        };
    }

    componentDidMount() {
        super.componentDidMount();
        if (this.props.banks.length == 0) {
            bankApi.getBanks();
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        transactionApi.addTransaction(Object.assign({}, this.state));
        this.props.history.push("/");
    };

    render() {
        return (
            <div>
                <h1>Add transaction</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="field-label">Id (string):</div>
                    <div><input className="field-editor" type="text" value={this.state.id} onChange={e => this.setState({ id: e.target.value })} /></div>
                    <div className="field-label">Amount (integer):</div>
                    <div><input className="field-editor" type="text" value={this.state.amount} onChange={e => this.setState({ amount: e.target.value.replace(/[^0-9]/g, "") })} /></div>
                    <div className="field-label">Bank:</div>
                    <div>
                        <select className="field-editor" onChange={e => this.setState({ bankId: e.target.options[e.target.selectedIndex].dataset.id })}>
                            <option key="" data-id=""></option>
                            {this.props.banks.map(bank => { return (
                                <option key={bank.id} data-id={bank.id}>{bank.name}</option>
                            );})}
                        </select>
                    </div>
                    <div className="buttons"><button disabled={!this.state.id || !this.state.amount || !this.state.bankId}>Add</button></div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = function(store) {
    return {
        banks: store.bankState.banks
    };
};

export default connect(mapStateToProps)(Add);
