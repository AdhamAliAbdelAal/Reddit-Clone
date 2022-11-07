import Post from '../../Post/Post';
/**
 * This component is the timeline (the container which contains all posts retrieved to be displayed)
 *
 * @component PostList
 * @property {Array.<post>} posts -post objects fetched
 * @returns {React.Component} List of all posts
 */

function PostList(props) {
  const { posts } = props;
  return (
    <>
      {posts.map((post) => {
        const {
          id, title, image, owner, creator, flairText, flairBackgroundColor, popularity, flairColor, url, kind, votes, commentCount,
        } = post;
        return (
          <Post
            title={title}
            image={image}
            owner={owner}
            creator={creator}
            flairText={flairText}
            flairBackgroundColor={flairBackgroundColor}
            popularity={popularity}
            flairColor={flairColor}
            url={url}
            kind={kind}
            votes={votes}
            commentCount={commentCount}
            key={id}
          />
        );
      })}
    </>
  );
}

export default PostList;
