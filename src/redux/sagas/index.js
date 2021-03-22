import { put, takeEvery, call } from 'redux-saga/effects'
import { api, apiLinkedIn, headers } from '../../constants/api'
import { 
    userReject,
    userRequest, 
    userResponse,
    contactsReject,
    contactsResponse,
    contactsRequest,
    linkedInReject, 
    linkedInResponse, 
    linkedInRequest,
    gitHubReject,
    gitHubResponse,
    gitHubRequest
} from '../action/user';

export default function* watchFetchUser() {
    yield takeEvery('USER', fetchUserAsync);
    yield takeEvery('CONTACTS', fetchContactsAsync);
    yield takeEvery('LINKED_IN', fetchLinkedInAsync);
    yield takeEvery('GITHUB', fetchGithubAsync);
}

function* fetchContactsAsync() {
    try {
        yield put(contactsRequest())
        const res = yield api.get('/?results=300');
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

function* fetchLinkedInAsync() {
    try {
        yield put(linkedInRequest())
        const res = yield apiLinkedIn.get('/andrey-khomutovskiy');
        yield put(linkedInResponse(res))
    } catch (e) {
        yield put(linkedInReject())
    }
}


function* fetchGithubAsync() {
    try {
        yield put(gitHubRequest())
        const res = yield apiLinkedIn.get('/GCoder-13' );
        yield put(gitHubResponse(res.data))
    } catch (e) {
        yield put(gitHubReject())
    }
}
