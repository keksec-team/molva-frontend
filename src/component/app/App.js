import React from 'react';
import './App.css';
import Main from "./main/Main";
import {Provider} from 'react-redux';
import store from "../../store/store";
import ApplyTheme from "./helper/ApplyTheme";

function App() {
    return (
        <div className="app">
            <Provider store={store}>
                <ApplyTheme>
                    <Main/>
                </ApplyTheme>
            </Provider>
        </div>
    );
}

export default App;
