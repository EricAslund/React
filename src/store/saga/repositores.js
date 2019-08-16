import { call, put, select } from "redux-saga/effects";
import api from '../../api';
import { Creators as RepositoryActions } from "../ducks/repositores";

export function* addRepositores(action) {
    try {

        const { data } = yield call(api.get, `/repos/${action.payload.nameRepository}`);
        console.log("Objeto retornado", action)

        yield put(RepositoryActions.addRepositor(data));


    } catch (err) {
        console.log('erro', err);
        yield put(RepositoryActions.erro());
        // state = { ...state, emptyRepo: !state.emptyRepo }

        // this.setState({ emptyRepo: !this.state.emptyRepo })
        // setTimeout(() => {
        //     this.setState({ emptyRepo: !this.state.emptyRepo });
        // }, 3000);
    }
}
export function* submitrefresh(action) {
    try {
        const { data } = yield call(api.get, `/repos/${action.payload.fullnameR}`);
        yield put(RepositoryActions.refresh(data));
    } catch (err) {
        console.log('erro', err);
        yield put(RepositoryActions.erro());
    }

}