import { Box, Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import { useState } from 'react';
import numFormatter from '../../../utils/MembersNum';
import { followRequest } from './FollowServer';
import {
  TextP, Text, TextContainer, OneSuggeest, Joined,
} from './style';
/**
 * Search by people
 * @component
 * @property  {function} handleJoin send follow to backend
 * @property  {function} handleMouseIn when hover set buttom value to unfollow
 * @property  {function} handleMouseOut when out of hover set button value to follow

 * @return {React.Component} - Search by people
 */
function Peoples(props) {
  const { people } = props;
  const [follow, setFollow] = useState(people?.isFollowed);
  const handleJoin = () => {
    followRequest(people?.fixedName, follow);
    setFollow((prev) => !prev);
  };

  const [hover, setHover] = useState(false);

  const handleMouseIn = () => {
    setHover(true);
  };
  const handleMouseOut = () => {
    setHover(false);
  };
  return (
    <OneSuggeest sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <Box sx={{ display: 'flex' }}>
        <Avatar alt="Remy Sharp" src={people?.profilePicture} />
        <TextContainer>
          <Text to={`/user/${people?.userName}`}>
            U/
            {people?.displayName}
          </Text>
          <Typography component="span" mx="4px" sx={{ fontSize: '6px', display: 'flex', alignItems: 'center' }}>
            •
          </Typography>
          <TextP>
            {numFormatter(people.postKarma + people.commentKarma)}
            {' '}
            karma
          </TextP>
          <div>
            {people?.description}
          </div>
        </TextContainer>
      </Box>
      <Joined
        variant="outlined"
        onClick={handleJoin}
        onMouseEnter={handleMouseIn}
        onMouseLeave={handleMouseOut}
      >
        {(people?.isFollowed) ? (hover ? 'Unfollow' : 'Following') : 'follow'}
      </Joined>
    </OneSuggeest>
  );
}
export default Peoples;
