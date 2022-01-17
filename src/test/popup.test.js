
import { Popup } from "../components/popUp/popUp";

import reducer, { toggleFields } from '../redux/reducers/dummydata';
import { render, unmountComponentAtNode } from "react-dom";

 // Just written basic test on variables for now , nothing much to test for now .

let container = null;
beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
});
afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

const fieldstobeDummyData = [
    { id: 1, name: "Customer First Name", icon: "A", state: false },
    { id: 2, name: "Order Number", icon: "123", state: false },
    { id: 3, name: "Street Address", icon: "A", state: false }
]

test('test reducer', () => {
    expect(fieldstobeDummyData).toEqual(
        [
            { id: 1, name: "Customer First Name", icon: "A", state: false },
            { id: 2, name: "Order Number", icon: "123", state: false },
            { id: 3, name: "Street Address", icon: "A", state: false }
        ]
    );
});


const Selectedfields = [
    { id: 1, name: "Customer First Name", icon: "A", state: false },
    { id: 2, name: "Order Number", icon: "123", state: false },
    { id: 3, name: "Street Address", icon: "A", state: false }
]

test('test reducer', () => {
    expect(Selectedfields).toEqual(
        [
            { id: 1, name: "Customer First Name", icon: "A", state: false },
            { id: 2, name: "Order Number", icon: "123", state: false },
            { id: 3, name: "Street Address", icon: "A", state: false }
        ]
    );
    expect(Selectedfields[0]).toEqual(
        
            { id: 1, name: "Customer First Name", icon: "A", state: false }
        
        
    );
});



