import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import MainProfile from '../../../../../MainProfile';
import PostFooterListResponsive from './PostFooterListResponsive';
import ListingContextProvider from '../../../../../../../contexts/ListingContext';

test('test snapshot', async () => {
  const tree = renderer.create(
    <Router>
      <ListingContextProvider>
        <MainProfile>
          <PostFooterListResponsive />
        </MainProfile>
      </ListingContextProvider>
    </Router>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
