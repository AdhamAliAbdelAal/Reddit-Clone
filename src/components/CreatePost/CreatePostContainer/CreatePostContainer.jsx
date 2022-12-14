import { useMediaQuery, useTheme } from '@mui/material';
import { useCommunitiesInCreatePostContext } from '../../../contexts/CommunitiesInCreatePostContext';
import MainContent from '../../MainContent/MainContent';
import SideBar from '../../SideBar/SideBar';
import CreatePostForm from './CreatePostForm/CreatePostForm';
import { MainContainer, OuterContainer } from './styles';
/**
 * This component works as a container for all create post page components
 * and a repository the data fetched in
 *
 * @component CreatePostContainer
 * @returns {React.Component} Container represents the create post page
 */

function CreatePostContainer() {
  const theme = useTheme();
  const match = useMediaQuery(theme.breakpoints.up('md'));
  const { communities, communitiesError } = useCommunitiesInCreatePostContext();
  return (
    <OuterContainer>
      <MainContainer>
        <MainContent width={740}>
          {!communitiesError ? (communities && <CreatePostForm />) : 'error in communities fetching'}
        </MainContent>
        {match
        && (
        <SideBar />
        )}
      </MainContainer>
    </OuterContainer>
  );
}

export default CreatePostContainer;
