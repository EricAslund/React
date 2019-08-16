import { all, takeLatest } from "redux-saga/effects";
import { addRepositores, submitrefresh } from "./repositores";
import { Types as FavoriteTypes } from "../ducks/repositores";

export default function* rootSaga() {
    yield all([takeLatest(FavoriteTypes.LISTREPOS__SUBMIT, addRepositores), takeLatest(FavoriteTypes.LISTREPOS__SUBMITREFRESH, submitrefresh)]);
}