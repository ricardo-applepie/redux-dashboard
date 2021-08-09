import { createSlice } from '@reduxjs/toolkit'


export const dummydata = createSlice({
    name: 'dummydata',
    initialState: {
        fieldsList: [
            { id: 1, name: "Customer First Name", icon: "A", state: false },
            { id: 2, name: "Order Number", icon: "123", state: false },
            { id: 3, name: "Street Address", icon: "A", state: false }
        
        ],
        selectedFields: [

        ]
    },
    reducers: {
        toggleFields: (state, action) => {
            const newitem = state.fieldsList.find(fielditem => fielditem.id === action.payload.id)
            if (newitem) {
                const val=newitem.state = true;
                state.selectedFields.push(newitem)
                console.log([...state.selectedFields])
            }
        },
        falseFields: (state, action) => {
            const newitem = state.fieldsList.find(fielditem => fielditem.id === action.payload.id)
            if (newitem) {
                newitem.state = false;
            }

        }
    },

})

// Action creators are generated for each case reducer function
export const { toggleFields, falseFields } = dummydata.actions

export default dummydata.reducer;