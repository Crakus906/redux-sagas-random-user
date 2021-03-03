/* eslint-disable import/no-anonymous-default-export */
const initState = {
    currentUser: null,
    contants: null,
    search: '',
    gender: '',
}

export default (state = initState, { type, payload }) => {
    switch (type) {
      case 'USER_REQUEST':
        return {
          ...state,
          currentUser: null,
        };
        case 'USER_RESPONSE':
          return {
            ...state,
            currentUser: payload,
          };
        case 'USER_REJECT':
          return {
            ...state,
            currentUser: null,
          };
        case 'CONTACTS_REQUEST':
          return {
            ...state,
            contants: null,
          };
        case 'CONSTACTS_RESPONSE':
          return {
            ...state,
            contants: payload,
          };
        case 'CONTACTS_REJECT':
          return {
            ...state,
            contants: null,
            };
        case 'SEARCH': 
          return {
            ...state,
            search: payload,
          }
        case 'GENDER': 
          return {
            ...state,
            gender: payload,
          }
      default:
        return state;
    }
  };