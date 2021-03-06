import { all } from "redux-saga/effects";

import devices from "./devices";
import installer from "./installer";
import packages from "./packages";
import system from "./system";
import status from "./status";
import chains from "./chains";
import activity from "./activity";
import navbar from "./navbar";
import dashboard from "./dashboard";

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([
    devices.saga(),
    installer.saga(),
    packages.saga(),
    system.saga(),
    status.saga(),
    chains.saga(),
    activity.saga(),
    navbar.saga(),
    dashboard.saga()
  ]);
}
