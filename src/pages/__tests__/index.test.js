import { Index } from '..';
import renderer from 'react-test-renderer';
import mockNews from '../../../mock/mockNews';

describe('Page: index', () => {
  it('Render correctly', () => {    
    let mockData1 = {
      data: [],
      total: 0,
      loading: false,
    }, mockData2 = {
      data: [],
      total: 0,
      loading: true,
    };

    let mockData3 = {
      data: mockNews,
      total: 0,
      loading: true
    };

    const loadingPage = renderer.create(<Index news={mockData1} />);
    const emptyDataPage = renderer.create(<Index news={mockData2} />);
    const dataPage = renderer.create(<Index news={mockData3} />);

    let tree = loadingPage.toJSON();
    expect(tree).toMatchSnapshot();

    tree = emptyDataPage.toJSON();
    expect(tree).toMatchSnapshot();

    tree = dataPage.toJSON();
    expect(tree).toMatchSnapshot();

  });
});
