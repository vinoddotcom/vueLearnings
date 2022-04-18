import { defineStore } from "pinia";

type Transaction = {
  id: number;
  type: "charge" | "refund" | "payment";
  amount: number;
  status: "pending" | "processed";
};

type BankDetails = {
  blance: number;
  transactions: Transaction[];
};

export const useBankStore = defineStore("storeId", {
  state: () => {
    return {
      blance: 0,
      transactions: [],
    } as BankDetails;
  },
  getters: {
    processedTransaction: (state) =>
      state.transactions.filter((t) => t.status === "processed"),
      pendingTransaction: (state) =>
      state.transactions.filter((t) => t.status === "pending"),
    runningBalance(state): number {
      return (
        this.blance +
        this.processedTransaction
          .map((t) => t.amount)
          .reduce((acc, curr) => acc + curr, 0)
      );
    },
    pendingBalance(state): number {
        return (
          this.blance +
          this.pendingTransaction
            .map((t) => t.amount)
            .reduce((acc, curr) => acc + curr, 0)
        );
      },
  },
  actions: {
      charge(amount: number) {
          const id = Date.now()
          this.transactions.push({
              id,
              type: 'charge',
              amount,
              status: 'pending'
          })
          return id;
      },
    
   
      processeTransaction(transactionId: number){
          setTimeout(() => {
            this.transactions =this.transactions.map((t)=>{
               if(t.id === transactionId){
                 return {...t, status: 'processed'};
               }
               return t;
              });

            }, 5000);
      }
  },
});
