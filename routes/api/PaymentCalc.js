class PaymentCalc{
    constructor(expenses, names) {
        this.expenses = expenses;
        this.names = names;
        this.results = [];
    }
    getResults() {
        return this.results;
    }
    index_of(arr1, arr2) {
        const res = [];
        for(let i = 0; i < arr1.length; i++) {
            if (arr2.includes(arr1[i])) {
                res.push(i);
            }
        }
        return res;
    }
    costMatrix() {
        const n = this.expenses.length;
        const m = this.names.length;
        const M = Array.from(Array(m), _ => Array(m).fill(0));
        for(let i=0; i<n; i++) {
            const name_index = this.index_of(this.names, this.expenses[i].who)[0];
            const amount = this.expenses[i].amount;
            if (this.expenses[i].involved.length === this.names.length) {
                const charge = amount / m;
                for(let k=0; k<m; k++) {
                    M[name_index][k] += charge;
                }
            } else {
                const debtors = this.expenses[i].involved;
                const debtors_index = this.index_of(this.names, debtors);
                const charge = amount/debtors.length;
                debtors_index.forEach(idx => { M[name_index][idx] += charge});
            }
        }
        return M;
    }
    finalPayments() {
        const graph = this.costMatrix();
        const N = this.names.length;
        function min_idx(arr) {
            return arr.indexOf(Math.min(...arr))
        }
        function max_idx(arr) {
            return arr.indexOf(Math.max(...arr));
        }
        const minCashFlowRec = (amount) => {
            const mxCredix = max_idx(amount);
            const mxDebit = min_idx(amount);
            if (Math.abs(amount[mxCredix]) < 0.01 && Math.abs(amount[mxDebit]) < 0.01) {
                return;
            }
            const min_amount = Math.min(-amount[mxDebit], amount[mxCredix]);
            if (Math.abs(min_amount) < 0.01) {
                return;
            }
            amount[mxCredix] -= min_amount;
            amount[mxDebit] += min_amount;
            const payment = {
                from: this.names[mxDebit],
                amount: min_amount.toFixed(2),
                to: this.names[mxCredix]
            };
            this.results.push(payment);

            minCashFlowRec(amount);
        }
        const minCashFlowWrap = (graph) => {
            const amount = Array(N).fill(0);
            for(let p=0; p<N; p++) {
                for(let i=0; i<N; i++) {
                    amount[p] += (graph[p][i] - graph[i][p]);

                }
            }
            return minCashFlowRec(amount);
        }
        return minCashFlowWrap(graph);
    }
}

const all_names = ['Person1', 'Person2', 'Person3'];

const payments = [
    {
        who: "Person2",
        amount: 8.0,
        involved: ['Person1'],
    },
    {
        who: "Person1",
        amount: 17.0,
        involved: all_names,
    },
    {
        who: "Person3",
        amount: 4.0,
        involved: ['Person3', 'Person2', 'Person1']
    },
    {
        who: "Person3",
        amount: 20.0,
        involved: ['Person2']
    },
    {
        who: "Person1",
        amount: 100,
        involved: ["Person3"],
    }
];
/*
const a = new PaymentCalc(payments, all_names);
a.finalPayments();
console.log(a.getResults());
*/
module.exports = PaymentCalc;