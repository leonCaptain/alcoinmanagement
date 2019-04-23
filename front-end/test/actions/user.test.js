
import {
	expect
} from 'chai';
import * as actions from '../../src/actions/user';

describe('userdata actions', () => {
	it('get userdata should create userSuccess action', () => {
		expect(actions.userSuccess('userdata')).to.deep.equal({
			type: 'LOAD_USER_SUCCESS',
			payload:'userdata' ,
		});
	});
});
