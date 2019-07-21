import BasicLayout from '..';
import renderer from 'react-test-renderer';

describe('Layout: BasicLayout', () => {
  it('Render correctly', () => {
    const tree = renderer.create(<BasicLayout />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

