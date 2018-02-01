import { combineReducers } from 'redux';
import Users from './user/reducers/user.reducer';
import Login from './login/reducers/login-reducer';
import Register from './register/reducers/register-reducer';
const reducers = combineReducers({
   Users,
   Login,
   Register
});

export default reducers;