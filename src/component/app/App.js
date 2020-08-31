import React from 'react';
import './App.css';
import Main from "./main/Main";
import {Provider} from 'react-redux';
import store from "../../store/store";
import ApplyTheme from "./helper/ApplyTheme";

function App() {
    return (
        <Provider store={store}>
            <ApplyTheme>
                <Main/>
            </ApplyTheme>
        </Provider>
    );
}

export default App;
