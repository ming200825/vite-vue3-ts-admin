import { createStore } from 'vuex';
import permission from './modules/permission';

import getters from './getters';
export default createStore({
	getters,
	modules: {
		permission,

	}
});
