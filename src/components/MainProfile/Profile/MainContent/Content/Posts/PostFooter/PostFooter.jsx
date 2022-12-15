import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ShortcutOutlinedIcon from '@mui/icons-material/ShortcutOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import BlockOutlinedIcon from '@mui/icons-material/BlockOutlined';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import CancelPresentationOutlinedIcon from '@mui/icons-material/CancelPresentationOutlined';
import SignalCellularAltOutlinedIcon from '@mui/icons-material/SignalCellularAltOutlined';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined';
import { useState } from 'react';
import { ClickAwayListener, Divider } from '@mui/material';
import BookmarksOutlinedIcon from '@mui/icons-material/BookmarksOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import CropSquareOutlinedIcon from '@mui/icons-material/CropSquareOutlined';
import {
  ElementBox, FooterBox, FooterText, SelectBox, SelectItem,
} from './styles';
import { actionOnPost, deletePostComment, postReactionsServer } from '../../../../../profileServer';
import ModeratorList from '../../../ModeratorList/ModeratorList';

/**
 * footer for a post conatining all icons
 *
 * @component PostFooter
 * @property {string} subTitle - to check if a post is a spam or approved
 * @property {string} numberOfComments - get number of comments in the post
 * @returns {React.Component} PostFooter
 */
function PostFooter(props) {
  const {
    postid, subTitle, numComments, isSaved,
    nsfw,
    spoiler,
    sendReplies,
    locked,
  } = props;

  const [showList, setShowList] = useState(false);
  const [saved, setSaved] = useState(isSaved);
  const [moderatorList, setModeratorList] = useState(false);
  const [isNsfw, setIsNsfw] = useState(nsfw);
  const [isSpoiler, setIsSpoiler] = useState(spoiler);
  const [isSendReplies, setIsSendReplies] = useState(sendReplies);

  // handle disable the list when click away
  const handleClick = () => {
    setShowList((prev) => !prev);
  };

  const handleClickAway = () => {
    setShowList(false);
  };

  // switch icon to hidden post and vice verse
  const handleClickHide = () => {
    postReactionsServer(postid, 'hide', 1);
  };

  const handleNsfw = () => {
    actionOnPost(postid, isNsfw ? 'unmark_nsfw' : 'mark_nsfw');
    setIsNsfw((prev) => !prev);
  };
  const handleSpoiler = () => {
    actionOnPost(postid, isSpoiler ? 'unspoiler' : 'spoiler');
    setIsSpoiler((prev) => !prev);
  };
  const handleSendReplies = () => {
    setIsSendReplies((prev) => !prev);
  };
  const handleDelete = () => {
    deletePostComment('posts', postid);
  };

  // switch icon to saved post and vice versa
  const handleSave = () => {
    postReactionsServer(postid, saved ? 'unsave' : 'save', saved);
    setSaved((prev) => !prev);
  };

  const handleModListClickAway = () => {
    setModeratorList(false);
  };

  const handleModList = () => {
    setModeratorList((prev) => !prev);
  };
  return (
    <FooterBox>
      <ElementBox>
        <ChatBubbleOutlineOutlinedIcon />
        <FooterText variant="caption" responsiveshare={true.toString()}>
          {numComments}
        </FooterText>
      </ElementBox>

      <ElementBox>
        <ShortcutOutlinedIcon />
        <FooterText variant="caption" responsiveshare={true.toString()}>Share</FooterText>
      </ElementBox>
      <ElementBox condition2={(subTitle === 'Edited').toString()} responsive3icons={true.toString()}>
        <CheckCircleOutlineOutlinedIcon />
        <FooterText variant="caption" responsiveapprove={true.toString()}>Approve</FooterText>
      </ElementBox>
      <ElementBox condition={(subTitle === 'Spam').toString()} responsive3icons={true.toString()}>
        <BlockOutlinedIcon />
        <FooterText variant="caption" responsiveapprove={true.toString()}>Removed</FooterText>
      </ElementBox>
      <ElementBox responsive3icons={true.toString()}>
        <CancelPresentationOutlinedIcon />
        <FooterText variant="caption" responsive={true.toString()}>Spam</FooterText>
      </ElementBox>
      <ClickAwayListener onClickAway={handleModListClickAway}>
        <ElementBox>
          <AdminPanelSettingsOutlinedIcon onClick={handleModList} />
          {moderatorList && (
          <ModeratorList
            postid={postid}
            nsfw={nsfw}
            spoiler={spoiler}
            locked={locked}
          />
          )}
        </ElementBox>
      </ClickAwayListener>
      <ElementBox responsive={true.toString()}>
        <SignalCellularAltOutlinedIcon sx={{ color: '#b279ff' }} />
        <FooterText variant="caption">Insights</FooterText>
      </ElementBox>
      <ClickAwayListener onClickAway={handleClickAway}>
        <ElementBox>
          <MoreHorizOutlinedIcon onClick={handleClick} data-testid="show-more" />
          {showList && (
          <SelectBox data-testid="more-menu">
            <SelectItem>
              <ModeEditOutlinedIcon sx={{ marginRight: 1 }} />
              Edit Post
            </SelectItem>
            <Divider />
            {!saved ? (
              <SelectItem onClick={() => { handleSave(); }}>
                <BookmarkBorderOutlinedIcon sx={{ marginRight: 1 }} />
                Save
              </SelectItem>
            )
              : (
                <SelectItem condition={true.toString()} onClick={() => { handleSave(); }}>
                  <BookmarksOutlinedIcon sx={{ marginRight: 1 }} />
                  Unsave
                </SelectItem>
              )}
            <Divider />
            <SelectItem>
              <PushPinOutlinedIcon sx={{ marginRight: 1 }} />
              Pin Post To Profile
            </SelectItem>
            <Divider />
            <SelectItem onClick={() => { handleClickHide(); }}>
              <VisibilityOffOutlinedIcon sx={{ marginRight: 1 }} />
              Hide
            </SelectItem>
            <Divider />
            <SelectItem onClick={() => { handleDelete(); }}>
              <DeleteOutlineOutlinedIcon sx={{ marginRight: 1 }} />
              Delete
            </SelectItem>
            <Divider />
            {!isSpoiler ? (
              <SelectItem onClick={() => { handleSpoiler(); }}>
                <CropSquareOutlinedIcon sx={{ marginRight: 1 }} />
                Mark As Spoiler
              </SelectItem>
            )
              : (
                <SelectItem onClick={() => { handleSpoiler(); }}>
                  <CheckBoxIcon sx={{ marginRight: 1 }} />
                  Mark As Spoiler
                </SelectItem>
              )}
            <Divider />
            {!isNsfw ? (
              <SelectItem onClick={() => { handleNsfw(); }}>
                <CropSquareOutlinedIcon sx={{ marginRight: 1 }} />
                Mark As NSFW
              </SelectItem>
            )
              : (
                <SelectItem onClick={() => { handleNsfw(); }}>
                  <CheckBoxIcon sx={{ marginRight: 1 }} />
                  Mark As NSFW
                </SelectItem>
              )}
            <Divider />
            {!isSendReplies ? (
              <SelectItem onClick={() => { handleSendReplies(); }}>
                <CropSquareOutlinedIcon sx={{ marginRight: 1 }} />
                Send Me Reply Notifications
              </SelectItem>
            ) : (
              <SelectItem onClick={() => { handleSendReplies(); }}>
                <CheckBoxIcon sx={{ marginRight: 1 }} />
                Send Me Reply Notifications
              </SelectItem>
            )}

          </SelectBox>
          )}
        </ElementBox>
      </ClickAwayListener>
    </FooterBox>
  );
}

export default PostFooter;
