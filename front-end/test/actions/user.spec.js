import * as actions from '../../src/actions/user'



describe('actions', () => {
  it('should create an action to get userdata', () => {
    const data = 'Finish docs'
    const expectedAction = {
      type: LOAD_USER_SUCCESS,
      payload: data,
    }
    expect(actions.userSuccess (data)).toEqual(expectedAction)
  })
})