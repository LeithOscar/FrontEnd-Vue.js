import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter',{

    state:()=>({
        counter: 0,
        numberOfChanges:0
    }),

    actions:{
        incrementBy(value: number){
            this.counter += value
            this.numberOfChanges +=1;
        },
        decrementBy(value: number){
            if(this.counter != 0){
                this.counter -= value
                this.numberOfChanges +=1;
            }
        }

    }
})