import { Alert } from 'react-native';
import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '~/services/api';

import { signInSuccess, signFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const { id } = payload;

    // const response = yield call(api.get, 'students');

    // console.tron.log(response.data);

    // if (!response.data[id]) {
    //   Alert.alert('Erro no login', 'Não existe um estudante com esse ID.');
    //   return;
    // }

    yield put(signInSuccess(id));
  } catch (error) {
    Alert.alert('Falha na autenticação', 'Houve um erro no login');
    yield put(signFailure());
  }
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
