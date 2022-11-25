import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import Profile from '../components/MyProfile';

describe('snapshot testing', () => {
  test('snapshot for Profile component', () => {
    const rendererComponent = renderer
      .create(
        <Provider store={store}>
          <Profile />
        </Provider>,
      )
      .toJSON();
    expect(rendererComponent).toMatchSnapshot();
  });
});
