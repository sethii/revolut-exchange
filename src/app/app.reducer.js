import { combineReducers } from 'redux';

import {
  appReducer,
  currenciesReducer,
  walletsReducer,
  exchangeReducer
} from './redux';

export default combineReducers({
  app: appReducer,
  currencies: currenciesReducer,
  wallets: walletsReducer,
  exchange: exchangeReducer
});
