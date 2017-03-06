import { takeLatest } from 'redux-saga';
import searchMediaSaga from './mediaSagas';
import * as types from '../constants/actionTypes';

export default function* watchSearchMedia() {
  yield* takeLatest(types.SEARCH_MEDIA_REQUEST, searchMediaSaga);
}
