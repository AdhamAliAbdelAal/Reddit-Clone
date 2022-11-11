import { Box, CardMedia, Typography } from '@mui/material';
import AddAPhotoOutlinedIcon from '@mui/icons-material/AddAPhotoOutlined';
import FilterVintageIcon from '@mui/icons-material/FilterVintage';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import PersonIcon from '@mui/icons-material/Person';
import CakeIcon from '@mui/icons-material/Cake';
import AddIcon from '@mui/icons-material/Add';
import { useContext, useEffect, useState } from 'react';
import {
  AddPhoto, WideButton, EngineIcon, ProfilePic, ProfileBox,
  UserInfoBox, UserName, InfoBox,
  EntityBox, FollowersArrow, AddSocialLink, AddPost, MoreOptions, OptionsButtons,
} from './styles';
import { UserContext } from '../../../../../context/UserProvider';
import { UserInfoContext } from '../../../../../context/UserInfoProvider';

/**
 * UserInfo Box in sidebar containing all info of a user
 *
 * @component UserInfo
 * @returns {React.Component} UserInfo
 */
function UserInfo() {
  const [karma, setKarma] = useState();
  const [cake, setCake] = useState();
  const [followers, setFollowers] = useState();

  const { username } = useContext(UserContext);
  const { info } = useContext(UserInfoContext);

  // to be fetched here
  useEffect(() => {
    setKarma(info.postKarma);
    // check with back end
    setFollowers(info.followersCount);
    const month = info.createdAt?.split('-')[1];
    const date = new Date();
    date.setMonth(month - 1);

    setCake(`${date.toLocaleString('en-US', {
      month: 'long',
    })} ${info.createdAt?.split('-')[2]}, ${info.createdAt?.split('-')[0]}`);
  }, [info]);

  const [showList, setShowList] = useState(false);
  const handleClickList = () => {
    setShowList((prev) => !prev);
  };

  return (
    <UserInfoBox>
      <CardMedia
        component="img"
        height="94"
        image="https://styles.redditmedia.com/t5_75eaom/styles/profileBanner_rml44oyq8ey91.jpeg?width=1280&height=384&crop=1280:384,smart&s=4a75a7f2d0376de5633d8c52db59cc40c6a3be3c"
        alt="cover image"
        data-testid="cover-photo"
      />
      <AddPhoto sx={{
        border: (theme) => `thin solid ${theme.palette.primary.main}`,
        transform: 'translate(730% ,-130%)',
      }}
      >
        <AddAPhotoOutlinedIcon color="primary" fontSize="small" disabled />
      </AddPhoto>

      <ProfileBox>
        <Box sx={{ display: 'flex' }}>
          <Box>
            <ProfilePic src="https://styles.redditmedia.com/t5_75eaom/styles/profileIcon_3f5f41637ms91.jpg?width=256&height=256&crop=256:256,smart&s=90b18e5fd7a10cd089f67d62b9b89ee2b3fbbb21" alt="user photo" />
            <AddPhoto sx={{
              border: (theme) => `thin solid ${theme.palette.primary.main}`,
              position: 'absolute',
              transform: 'translate(180% ,-100%)',
            }}
            >
              <AddAPhotoOutlinedIcon color="primary" fontSize="small" />
            </AddPhoto>

          </Box>
          <EngineIcon color="primary" />
        </Box>
        <UserName variant="caption">
          u/
          {username}
        </UserName>
        <br />
        <WideButton variant="contained" color="primary" endIcon={<ArrowForwardIosOutlinedIcon />}>
          Create Avatar
        </WideButton>
        <InfoBox>
          <EntityBox>
            <Typography variant="body2" sx={{ marginBottom: '5px' }}>Karma</Typography>
            <Box sx={{ display: 'flex' }}>
              <FilterVintageIcon fontSize="string" color="primary" sx={{ marginRight: '4px' }} />
              <Typography variant="caption" sx={{ color: '#7c7c7c' }}>{karma}</Typography>
            </Box>
          </EntityBox>
          <EntityBox>
            <Typography variant="body2" sx={{ marginBottom: '5px' }}>Cake Day</Typography>
            <Box sx={{ display: 'flex' }}>
              <CakeIcon fontSize="string" color="primary" sx={{ marginRight: '4px' }} />
              <Typography variant="caption" sx={{ color: '#7c7c7c' }}>{cake}</Typography>
            </Box>
          </EntityBox>
          <EntityBox>
            <Typography variant="body2" sx={{ marginBottom: '5px' }}>Followers</Typography>
            <Box sx={{ display: 'flex' }}>
              <PersonIcon fontSize="string" color="primary" sx={{ marginRight: '4px' }} />
              <Typography variant="caption" sx={{ color: '#7c7c7c' }}>{followers}</Typography>
              <FollowersArrow fontSize="string" color="disabled" />
            </Box>
          </EntityBox>
        </InfoBox>
        <AddSocialLink startIcon={<AddIcon />} variant="contained">Add social link</AddSocialLink>
        <br />
        <AddPost variant="contained">Add Post</AddPost>
        {showList
            && (
            <>
              <OptionsButtons data-testid="option">Profile moderation</OptionsButtons>
              <OptionsButtons>Add to Custom Feed</OptionsButtons>
              <OptionsButtons>Invite someone to chat</OptionsButtons>
              <MoreOptions onClick={() => { handleClickList(); }}>Fewer options</MoreOptions>
            </>
            )}
        {!showList
            && <MoreOptions data-testid="show-more" onClick={() => { handleClickList(); }}>More options</MoreOptions>}
      </ProfileBox>

    </UserInfoBox>
  );
}

export default UserInfo;
