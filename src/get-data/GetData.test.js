import React from 'react';
import ReactDOM from "react-dom";
import {GetData} from "./GetData";

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<GetData data={[]}/>, div);
})