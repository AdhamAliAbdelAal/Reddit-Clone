import {
  Avatar, Box, Typography,
} from '@mui/material';
import { useState } from 'react';
import {
  PostContainer, PostInfo, PostInfoLink, PostTitle,
  PostRich, PostMedia, Image, Video,
  // Flair,
} from './styles';
import RedditButton from '../RedditButton/RedditButton';

/**
 * Posts in search by posts
 * @component

 * @return {React.Component} - Posts in search by posts
 */

function Post() {
  const [type] = useState('');

  // const posts=[
  //   {
  //     createdAt='2 years ago'

  //     title='Update: My (32F) husband (36M) became a robot and I don’t know how to help him.'
  //     ownerIcon="https://styles.redditmedia.com/t5_3ptyd/styles/communityIcon_p18jqwszxcv51.png"
  //     ownerName='toptalent'
  //     authorName='righteous_boldness07'

  //     flairText={posts?.flairId?.flairText}
  //     flairBackgroundColor={posts?.flairId?.flairBackgroundColor}
  //     flairColor={posts?.flairId?.flairColor}

  //     text={posts?.text}
  //     images="[EgyBest].Breaking.Bad.S01E02.BluRay.360p.x264.mp4"
  //     videos={posts?.videos}
  //     kind={posts?.kind}

  //     votes={posts?.votes}
  //     postVoteStatus={posts?.postVoteStatus}
  //     commentCount={posts?.commentCount}

  //     key={posts?.id}
  //   }
  // ]
  return (
    <PostContainer my={2} sx={{ '&:hover': { border: 1 } }}>
      <Box width="100%" p={1}>
        <PostInfo py={1}>
          <Avatar
            src="https://styles.redditmedia.com/t5_3ptyd/styles/communityIcon_p18jqwszxcv51.png"
            sx={{
              width: 20,
              height: 20,
            }}
            alt="Profile Image"
          />
          <PostInfoLink to="/r/toptalent" color="#000" fontWeight="bolder">
            r/toptalent
          </PostInfoLink>
          <Box color="#787C7E" fontWeight={300} display="flex" gap="4px" flexWrap="wrap">
            <span>
              •
            </span>
            <div>Posted By</div>
            <PostInfoLink to="/user/righteous_boldness07" color="inherit" fontWeight="normal">
              u/righteous_boldness07 2 years ago
            </PostInfoLink>
          </Box>
        </PostInfo>
        <PostTitle to="/">
          <Typography variant="h6" component="h3" sx={{ fontSize: 18 }}>
            Update: My (32F) husband (36M) became a robot and I don’t know how to help him.
            {' '}
            <RedditButton
              sx={{ '&:hover': { opacity: 0.85, backgroundColor: '#f0f1f3', boxShadow: 'none' } }}
              backgroundColor="#edeff1"
              fontSize={10}
              padding="2px 10px"
              variant="contained"
              fontWeight="normal"
            >
              <Box>
                /r/all
              </Box>
              {/* {
            flairText
            && (
            <Flair
              disableRipple
              backgroundColor={flairBackgroundColor}
              flairColor={flairColor}
            >
              {flairText}
            </Flair>
            )
          } */}
            </RedditButton>
          </Typography>
          <PostMedia>
            {(type === 'Video')
            && <Video src="[EgyBest].Breaking.Bad.S01E02.BluRay.360p.x264.mp4" alt="" />}
            {(type === 'Image')
             && <Image src="reddit.png" alt="" />}
          </PostMedia>
        </PostTitle>
        <PostRich mt={5}>
          <Typography variant="span" sx={{ marginRight: 3 }}>120k upvotes </Typography>
          <Typography variant="span" sx={{ marginRight: 3 }}>120k comments </Typography>
        </PostRich>
      </Box>

    </PostContainer>
  );
}

export default Post;
