import {
  take,
  delay,
  put,
  call,
  fork,
  takeEvery,
  takeLatest,
  cancelled,
  cancel,
} from "redux-saga/effects";

export function* testSaga() {
  while (true) {
    console.log("Starting saga");
    //take waits to get a specific message from a dispatch before being called again
    const state = yield take(`TEST_MESSAGE`);
    // better to use the result1 format to help with debugging down the line
    const result1 = yield call(double, 2);
    console.log(result1);
    const result2 = yield double(3);
    console.log(result2);
    console.log("Finished saga function", state);
  }
}

// this is a way to cancel a fork if ever it is needed
function* inifinitySaga() {
  let index = 0;
  console.log("starting infinite saga");
  while (true) {
    index++;
    try {
      console.log(`inside infinite saga, with index: ${index}`);
      yield delay(1000);
    } catch (err) {
      console.log(`ERROR: ${err}`);
    } finally {
      console.log(`The fork is cancelled ? ${yield cancelled()}`);
    }
  }
}

export function* testSagaCancelled() {
  yield take("TEST_MESSAGE_4");
  const handleCancel = yield fork(inifinitySaga);
  yield delay(3000);
  yield cancel(handleCancel);
}

//take latest is good to stop spam clicking if for some reason we don't have a control on the front end UI.
// it will cancel the first click and take the latest click and make a new fork
export function* testSagaTakeLatest() {
  yield takeLatest("TEST_MESSAGE_5", inifinitySaga);
}

export function* dispatchTest() {
  let index = 0;

  while (true) {
    yield delay(5000);
    //put is similar to dispatch where it sends a message
    // yield put({ type: "TEST_MESSAGE_2", value: 1000 });
    // yield put({ type: "TEST_MESSAGE_3", index });
    //   yield put({ type: "TEST_MESSAGE_4", index });
    // yield put({ type: "TEST_MESSAGE_5", index });
    index++;
  }
}

const double = (number) => {
  return number * 2;
};

function* doNothing() {
  console.log("I have been called");
  yield delay(1000);
  console.log("I'm doing nothing");
}

export function* testSagaFork() {
  while (true) {
    yield take("TEST_MESSAGE_2");
    // difference here is fork does not wait for the result. It does all the functions in parallel
    // so that after the delay they all return at the same time.
    yield fork(doNothing);
    yield fork(doNothing);
    yield fork(doNothing);
  }
}

function* testSagaTakeEveryProcess({ index }) {
  console.log(`Starting process for index ${index}`);
  yield delay(3000);
  console.log(`Ending process for index ${index}`);
}

export function* testSagaTakeEvery() {
  const { index } = yield takeEvery("TEST_MESSAGE_3", testSagaTakeEveryProcess);

  index && console.log(`Finish TakeEvery from index ${index}`);
}

// everytime this is called it gives back an different result starting at
// 1 and going down to 5 with every call
export function* count() {
  yield 1;
  //code between these yields is specific to this section and
  //will only run in its section
  yield 2;
  yield 3;
  yield 4;
  //changing the last 1 to return so that on the last call of our function our
  // value doesn't come back as undefined
  return 5;
}

// generator functions are functions that we can exit and enter at any point
//yield values are the point at which we can leave and entre the functions

// everytime is function is called with a number as 'x' the squared number is stored
// in memory and every time we would call .next() the number would be squared.
function* square(x) {
  while (true) {
    x = x * 2;
    yield x;
  }
}
