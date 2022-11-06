import { useTheme } from '@mui/system';
import { useReducer } from 'react';
import { ReactionIconButton, Votes, Voting } from './styles';
import VoteIcon from '../VoteIcons/VoteIcon/VoteIcon';
import VotedIcon from '../VoteIcons/VotedIcon/VotedIcon';

function Reactions({ flexDirection }) {
  const theme = useTheme();
  const reducer = (state, action) => {
    switch (action) {
      case 'upvote':
        return 1;
      case 'downvote':
        return -1;
      default:
        return 0;
    }
  };
  const [reaction, dispatch] = useReducer(reducer, 0);
  return (
    <Voting flexDirection={flexDirection} gap={0.5}>
      {(reaction === 1)
        ? (
          <ReactionIconButton onClick={() => dispatch('cancel upvote')}>
            <VotedIcon
              color={theme.palette.secondary.main}
              direction="up"
            />
          </ReactionIconButton>
        )
        : (
          <ReactionIconButton onClick={() => dispatch('upvote')}>
            <VoteIcon
              color={theme.palette.secondary.main}
              direction="up"
            />
          </ReactionIconButton>
        )}
      <Votes color={(reaction === 0 ? '#000' : (reaction === 1 ? theme.palette.secondary.main : theme.palette.primary.main))}>
        {156 + reaction}
      </Votes>
      {(reaction === -1)
        ? (
          <ReactionIconButton onClick={() => dispatch('cancel downvote')}>
            <VotedIcon
              color={theme.palette.primary.main}
              direction="down"
            />
          </ReactionIconButton>
        )
        : (
          <ReactionIconButton onClick={() => dispatch('downvote')}>
            <VoteIcon
              color={theme.palette.primary.main}
              direction="down"
            />
          </ReactionIconButton>
        )}
    </Voting>
  );
}

export default Reactions;
