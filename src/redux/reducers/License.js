import {
	GETLICENSE
} from '../constants/License';

const initState = {
	licenseData: [],

}

const license = (state = initState, action) => {
	switch (action.type) {
		case 'GETLICENSE':
			return {
				...state,

				licenseData: [...state.licenseData, action.licenseData]
			}

		default:
			return state;
	}
}

export default license