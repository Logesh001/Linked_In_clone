import { combineReducers } from "redux";
import articleReducer from "./articleReducer";
import userReducer from "./userReducer";

const rootReducer=combineReducers({
    userState:userReducer,
    articleState:articleReducer,
});

export default rootReducer;
/*import { combineReducers } from "redux";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
    userState: userReducer,
});

export default rootReducer;
*/