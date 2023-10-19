import { defineStore } from "pinia";

export const useCounterStore = defineStore('counter',{
    state: () => ({count:0}),
    getters:{
        counting() : number{
            return this.count;
        }
    },
    actions:{
        increament(){
            this.count++;
        }
    }
})