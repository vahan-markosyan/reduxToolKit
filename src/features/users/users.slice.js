import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    items:[
        {id:101,name:"Tiko",gender:"male",salary:150000},
        {id:102,name:"Vzgo",gender:"male",salary:200000},
        {id:103,name:"Garso",gender:"male",salary:300000},
        {id:104,name:"Anna",gender:"female",salary:400000}
    ]
}

export const UserSlice = createSlice({
    name:"Users",
    initialState,
    reducers:{
        salaryUp:function(state,action) {
            console.log(state)
            console.log(action)
            const person = state.items.find(user => user.id == action.payload)
            if(person) {
                person.salary += 50000
            }

        },

        salaryDown:function(state,action) {
            const person = state.items.find(user => user.id == action.payload)
            if(person) {
                if(person.salary >= 50000) {
                    person.salary -= 50000
                }
            }
        },

        deleteUser:function(state,action) {
           state.items = state.items.filter(user => user.id != action.payload)
        },

        swipeUp:function(state,action) {
            const current = state.items.findIndex(user => user.id == action.payload)
            const next = state.items[current - 1]
            if(current != 0) {
                [state.items[current],state.items[current-1]]=[state.items[current-1],state.items[current]]
            }
        },

        swipeDown:function(state,action) {
            const current = state.items.findIndex(user => user.id == action.payload)
            const next = state.items[current + 1]
            if(current != state.items.length-1 && next != state.items.length) {
                [state.items[current],state.items[current+1]]=[state.items[current+1],state.items[current]]
            }
        }   
        }

    }
)

export const reducer = UserSlice.reducer
export const {salaryUp, salaryDown, deleteUser, swipeUp, swipeDown} = UserSlice.actions