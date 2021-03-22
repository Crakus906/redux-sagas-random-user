// import { put, takeEvery} from 'redux-saga/effects'
// import { apiLinkedIn } from '../../constants/api'
// import { 
//     linkedInReject, linkedInResponse, linkedInRequest
// } from '../action/user';

// export default function* watchFetchLinkedIn() {;
//     yield takeEvery('LINKED_IN', fetchLInkedInAsync);
// }

// function* fetchLInkedInAsync() {
//     try {
//         yield put(linkedInRequest())
//         const res = yield apiLinkedIn.get('/andrey-khomutovskiy');
//         yield put(linkedInResponse(res.data.results))
//     } catch (e) {
//         yield put(linkedInReject())
//     }
// }
