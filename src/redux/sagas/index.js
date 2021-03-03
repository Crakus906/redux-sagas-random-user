import { put, takeEvery, call } from 'redux-saga/effects'
import { api } from '../../constants/api'
import { 
    userReject,
    userRequest, 
    userResponse,
    contactsReject,
    contactsResponse,
    contactsRequest
} from '../action/user';

export default function* watchFetchUser() {
    yield takeEvery('USER', fetchUserAsync);
    yield takeEvery('CONTACTS', fetchContactsAsync);
}

function* fetchContactsAsync() {
    try {
        yield put(contactsRequest())
        const res = yield api.get('/?results=50');
        yield put(contactsResponse(res.data.results))
    } catch (e) {
        yield put(contactsReject())
    }
}

function* fetchUserAsync() {
    try {
        yield put(userRequest())
        const res = yield api.get('/?results');
        yield put(userResponse(res.data.results[0]))
    } catch (e) {
        yield put(userReject())
    }
}