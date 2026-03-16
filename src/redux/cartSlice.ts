import { createSlice,PayloadAction } from "@reduxjs/toolkit"

interface Product{

id:number
title:string
price:number
image:string
quantity:number

}

interface CartState{

items:Product[]

}

const initialState:CartState={
items:[]
}

const cartSlice = createSlice({

name:"cart",

initialState,

reducers:{

addToCart:(state,action:PayloadAction<Product>)=>{

const exist = state.items.find(i=>i.id===action.payload.id)

if(exist){

exist.quantity++

}else{

state.items.push({...action.payload,quantity:1})

}

},

increaseQty:(state,action:PayloadAction<number>)=>{

const item = state.items.find(i=>i.id===action.payload)

if(item) item.quantity++

},

decreaseQty:(state,action:PayloadAction<number>)=>{

const item = state.items.find(i=>i.id===action.payload)

if(item && item.quantity>1) item.quantity--

},

removeFromCart:(state,action:PayloadAction<number>)=>{

state.items = state.items.filter(i=>i.id!==action.payload)

}

}

})

export const {addToCart,increaseQty,decreaseQty,removeFromCart} = cartSlice.actions

export default cartSlice.reducer