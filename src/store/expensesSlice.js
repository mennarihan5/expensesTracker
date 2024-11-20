import { createSlice } from "@reduxjs/toolkit";

const expensesSlice = createSlice({
    name: 'expenses',
    initialState: {
        items: []
    },
    reducers: {
        addExpense: (state, action) => {
            state.items.push({id: Date.now(), ...action.payload})
        }

        deleteExpense:
    }

})