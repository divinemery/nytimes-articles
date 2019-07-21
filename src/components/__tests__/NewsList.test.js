import NewsList  from '../NewsList.js';
import renderer from 'react-test-renderer';
import mockNews from '../../../mock/mockNews';

describe('Component: NewsList', () => {
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

    const loadingCmp = renderer.create(<NewsList news={mockData1} />);
    const emptyDataCmp = renderer.create(<NewsList news={mockData2} />);
    const dataCmp = renderer.create(<NewsList news={mockData3} />);

    let tree = loadingCmp.toJSON();
    expect(tree).toMatchSnapshot();

    tree = emptyDataCmp.toJSON();
    expect(tree).toMatchSnapshot();

    tree = dataCmp.toJSON();
    expect(tree).toMatchSnapshot();

  });
});
