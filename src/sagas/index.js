import { fork } from 'redux-saga/effects';
import watchSearchMedia from './watcher';

export default function* startForman() {
  yield fork(watchSearchMedia);
}
