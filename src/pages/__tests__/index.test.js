import {Index} from '..';
import renderer from 'react-test-renderer';

describe('Page: index', () => {
  it('Render correctly', () => {
    const tree = renderer.create(<Index />).toJSON();
    console.log("tree", tree);
    expect(tree).toMatchSnapshot();
  });
});
