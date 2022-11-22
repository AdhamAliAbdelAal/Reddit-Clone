import { useMediaQuery, useTheme } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import generateRandomUsernamesServer from '../../../utils/generateRandomUsernamesServer';
import MainContent from '../../MainContent/MainContent';
import { MainContainer, OuterContainer } from './styles';
import SideBar from '../../SideBar/SideBar';
import Communities from './Communities/Communities';
import RedditPremium from './RedditPremium/RedditPremium';
import PersonalReddit from './PersonalReddit/PersonalReddit';
import HomePageFooter from './HomePageFooter/HomePageFooter';
import PostsClassification from './PostsClassification/PostsClassification';
import CreatePostInHome from './CreatePostInHome/CreatePostInHome';
import BackToTop from '../../BackToTop/BackToTop';
import PostList from './PostList/PostList';
import communities from './CommunitiesStaticData';
import homePageServer from './homePageServer';

/**
 * This component works as a container for all home page components
 * and a repository the data fetched in
 *
 * @component HomePageContainer
 * @returns {React.Component} Container represents the home page
 */

function HomePageContainer() {
  const { postClass } = useParams();
  // variables
  const theme = useTheme();
  const match = useMediaQuery(theme.breakpoints.up('md'));

  const [click, setClick] = useState(false);
  const generatedUsernames = generateRandomUsernamesServer(5, click);
  // console.log(generatedUsernames);
  // states
  const [posts, postsError] = homePageServer(postClass);

  return (
    <OuterContainer>
      <MainContainer>
        <MainContent width={640}>
          <CreatePostInHome />
          <PostsClassification />
          {!postsError ? (posts && <PostList posts={posts} />) : 'error in fetching posts'}
          <div>{generatedUsernames?.map((e) => (<div key={e}>{e}</div>))}</div>
          <button
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              setClick(!click);
            }}
          >
            reload

          </button>
        </MainContent>
        {match
        && (
        <SideBar>
          <Communities communities={communities} />
          <RedditPremium />
          <PersonalReddit />
          <HomePageFooter />
          <BackToTop />
        </SideBar>
        )}
      </MainContainer>
    </OuterContainer>
  );
}

export default HomePageContainer;
