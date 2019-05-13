import AmplifyService from "@services/amplify/AmplifyService";
import NavigationService from "@navigators/NavigationService";
import { takeLatest, call, put } from "redux-saga/effects";
import { types } from "@reducers/auth";

export const sagas = [submitLoginWithAwsCognitoSaga(), testmeSaga()];

function* testmeSaga() {
  yield takeLatest(types.TESTME_SAGA, testme);
}
function* testme(action) {
  console.log("testme saga");
  try {
    yield call(NavigationService.navigate, "Profile");
  } catch (e) {
    console.log(e);
  }
}

function* submitLoginWithAwsCognitoSaga() {
  yield takeLatest(types.LOGIN_REQUEST_SAGA, submitLoginWithAwsCognito);
}
function* submitLoginWithAwsCognito(action) {
  console.log("submit with cognito");
  try {
    const { email, password } = action.payloadl;
    yield put({ type: types.LOGIN_REQUEST });
    yield call(AmplifyService.signIn, email, password);
    const cognitoUser = yield call(AmplifyService.isAuthenticatedUser);
    yield put({
      type: types.LOGIN_SUCCESS,
      payload: cognitoUser.attributes,
    });
    yield put(NavigationActions.navigate({ routeName: "Main" }));
  } catch (e) {
    yield put({ type: types.LOGIN_FAIL, payload: e.message });
  }
}
