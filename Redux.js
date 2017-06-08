import {createStore} from 'redux';

const initialState = {
  id: '000-111-222-333-444',
  balance: 0,
  revenue: 0.0025,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_ACCOUNT_ID':
      state = {
        ...state,
        id: action.newValue
      };
      break;
          
    case 'DEPOSIT':
      state = {
        ...state,
        balance: state.balance + action.newValue
      };
      break;
    case 'CHANGE_ACCOUNT_REVENUE':
      state = {
        ...state,
        revenue: action.newValue
      };
      break;

          
    default:
      break;
  }
  return state;
};

const store = createStore(reducer);

store.dispatch({
  type: 'CHANGE_ACCOUNT_ID',
  newValue: "999-888-666-777"
});



store.dispatch({
  type: 'DEPOSIT',
  newValue: 100000000
});

store.dispatch({
  type: 'CHANGE_ACCOUNT_REVENUE',
  newValue: 0.075
});

