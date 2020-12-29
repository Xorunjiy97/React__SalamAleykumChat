import { combineReducers } from 'redux';
import chat from '../managers/chat/reducer';
import user from '../managers/user/reducer';
import view from '../managers/view/reducer';

export default combineReducers({
   chat,
   user,
   view
});