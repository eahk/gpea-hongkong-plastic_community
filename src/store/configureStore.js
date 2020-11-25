import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
import { rootReducer } from "./reducers";
import { persistStore } from "redux-persist";
import rootSaga from "./sagas";

let store;
const sagaMiddleware = createSagaMiddleware();
const isClient = typeof window !== "undefined";

const bindMiddleware = middleware => {
  if (process.env.NODE_ENV !== "production") {
    const { composeWithDevTools } = require("redux-devtools-extension");
    return composeWithDevTools(applyMiddleware(...middleware, logger));
  }
  return applyMiddleware(...middleware);
};

if (isClient) {
  const { persistReducer } = require("redux-persist");
  const storage = require("redux-persist/lib/storage").default;
  const persistConfig = {
    key: "root",
    storage,
    whitelist: ["user", "cart"]
  };
  store = createStore(
    persistReducer(persistConfig, rootReducer),
    bindMiddleware([sagaMiddleware])
  );
  store.__PERSISTOR = persistStore(store);
} else {
  store = createStore(rootReducer, bindMiddleware([sagaMiddleware]));
}

store.sagaTask = sagaMiddleware.run(rootSaga);

const configureStore = store;

export default configureStore;
