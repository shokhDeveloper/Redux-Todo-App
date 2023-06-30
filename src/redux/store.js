import { createStore } from "redux";
import { Combine } from "./combine";
import { applyMiddleware } from "redux";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
export const store = createStore(Combine, composeWithDevTools() )