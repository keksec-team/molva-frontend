import { combineReducers } from 'redux';
import themeReducer from "./themeReducer";
import languageReducer from "./languageReducer";

export default combineReducers({
    style: themeReducer,
    language: languageReducer
});
