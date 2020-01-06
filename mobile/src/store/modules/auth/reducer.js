import produce from 'immer';

const INITIAL_STATE = {
  signed: false,
  loading: false,
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/SIGN_IN_REQUEST':
        draft.loading = true;
        break;
      case '@auth/SIGN_IN_SUCCESS':
        draft.signed = true;
        draft.loading = false;
        break;
      case '@auth/SIGN_UP_REQUEST':
        draft.loading = true;
        break;
      case '@auth/SIGN_UP_SUCCESS':
        draft.loading = false;
        break;
      case '@auth/SIGN_FAILURE':
        draft.loading = false;
        break;
      case '@auth/SIGN_OUT':
        draft.signed = false;
        break;
      case '@user/UPDATE_PROFILE_REQUEST':
        draft.loading = true;
        break;
      case '@user/UPDATE_PROFILE_FAILURE':
        draft.loading = false;
        break;
      case '@user/UPDATE_PROFILE_SUCCESS':
        draft.loading = false;
        break;
      default:
    }
  });
}
