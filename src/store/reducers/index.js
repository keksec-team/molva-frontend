import { combineReducers } from 'redux';
import themeReducer from "./themeReducer";
import languageReducer from "./languageReducer";
import controlsReducer from "./controlsReducer";

export default combineReducers({
    style: themeReducer,
    language: languageReducer,
    controls: controlsReducer
});
