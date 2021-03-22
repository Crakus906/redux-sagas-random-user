/* eslint-disable import/no-anonymous-default-export */
const initState = {
    likenIn: null,
}

export default (state = initState, { type, payload }) => {
    switch (type) {
      case 'LINKED_IN_REQUEST':
        return {
          ...state,
          linkedIn: 'null',
        };
        case 'LINKED_IN_RESPONSE':
          return {
            ...state,
            linkedIn: payload,
          };
        case 'LINKED_IN_REJECT':
          return {
            ...state,
            linkedIn: 'REJECT',
          };
      default:
        return state;
    }
};