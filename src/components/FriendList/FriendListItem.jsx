import PropTypes from "prop-types";
import { Indicator, Avatar } from "./FriendList.styled";

export const FriendListItem = ({
  avatar,
  name,
  isOnline,
}) => {
  return (
    <>
      <Indicator bg={isOnline} ></Indicator>
      <Avatar src={avatar} alt="User avatar" width="48" />
      <p>{name}</p>
    </>
  )
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
}