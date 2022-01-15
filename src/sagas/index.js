// import * as testSaga from "./testSaga";
import * as transactionSagas from "./transactionSaga";
import * as transactionSagasDeletion from "./transactionSagaDeletion";
import * as transactionSagasAddition from "./transactionSagaAdd";
import * as transactionSagasEdit from "./transactionSagaEdit";

export const initSaga = (sagaMiddleware) => {
  //   Object.values(testSaga).forEach(sagaMiddleware.run.bind(sagaMiddleware));
  Object.values(transactionSagas).forEach(
    sagaMiddleware.run.bind(sagaMiddleware)
  );
  Object.values(transactionSagasDeletion).forEach(
    sagaMiddleware.run.bind(sagaMiddleware)
  );
  Object.values(transactionSagasAddition).forEach(
    sagaMiddleware.run.bind(sagaMiddleware)
  );
  Object.values(transactionSagasEdit).forEach(
    sagaMiddleware.run.bind(sagaMiddleware)
  );
};
