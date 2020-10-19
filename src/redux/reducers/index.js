import { combineReducers } from 'redux';
import Auth from './Auth';
import License from './License';
import Theme from './Theme';

const reducers = combineReducers({
    theme: Theme,
    auth: Auth,
    license: License
});

export default reducers;