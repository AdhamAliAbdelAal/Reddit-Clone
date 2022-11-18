import useFetch from '../../../hooks/useFetch';

const homePageServer = (postClass) => {
  const postsUrl = `/users/${postClass || 'best'}`;
  const [dbPosts, postsError] = useFetch(postsUrl);

  const posts = dbPosts?.map((post) => {
    const {
      text: flairText,
      backgroundColor: flairBackgroundColor,
      textColor: flairColor,
    } = post.flairId;
    return ({
      ...post,
      flairText,
      flairBackgroundColor,
      flairColor,
    });
  });
  return [posts, postsError];
};

export default homePageServer;
