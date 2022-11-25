import { Provider } from 'react-redux';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import Missions from '../components/Missions';
import store from '../redux/configureStore';

describe('snapshots testing', () => {
  test('snapshots for Missions component', () => {
    const rendererComponents = renderer
      .create(
        <Provider store={store}>
          <Missions />
        </Provider>,
      )
      .toJSON();
    expect(rendererComponents).toMatchSnapshot();
  });
});
