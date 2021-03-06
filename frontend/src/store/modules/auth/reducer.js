import produce from 'immer';

const INITIAL_STATE = {
  token: null,
  signed: false,
  loading: false,
  // Como não existem ações de profile, achei desnecessário criar um reducer separado
  profile: null,
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/SIGN_IN_REQUEST':
        draft.loading = true;
        break;
      case '@auth/SIGN_IN_SUCCESS':
        draft.token = action.payload.token;
        draft.profile = action.payload.user;
        draft.signed = true;
        draft.loading = false;
        break;
      case '@auth/SIGN_FAILURE':
        draft.loading = false;
        break;
      case '@auth/SIGN_OUT':
        draft.token = null;
        draft.profile = null;
        draft.signed = false;
        break;
      default:
    }
  });
}
