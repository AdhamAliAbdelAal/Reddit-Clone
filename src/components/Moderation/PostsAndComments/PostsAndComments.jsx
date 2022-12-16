import PostType from './PostType/PostType';
import {
  AboutString, AboutSubString, Add, AddFlair, Container,
  Disc, FlexBox, FlexBoxColumn, LeftAlighne, SortString, TotalContainer,
} from './style';
import SuggestionSort from './SuggestionSort/SuggestionSort';

function PostsAndComments() {
  return (
    <TotalContainer>
      <AddFlair><Add>Save Change</Add></AddFlair>
      <LeftAlighne>
        <Container>
          <AboutString>
            Posts and Comment settings
          </AboutString>
          <Disc sx={{ marginTop: '20px' }}>Comments</Disc>
          <FlexBox>
            <FlexBoxColumn>
              <SortString>
                Suggested sort
              </SortString>
              <Disc>All comment feeds in community will default to this sort setting</Disc>
            </FlexBoxColumn>
            <SuggestionSort />
          </FlexBox>
          <Disc>posts</Disc>

          <AboutSubString>
            Post type options
          </AboutSubString>

          <PostType />

        </Container>
      </LeftAlighne>
    </TotalContainer>

  );
}
export default PostsAndComments;
