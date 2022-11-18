import PropTypes from "prop-types";
import { Item, Indicator, Avatar } from "./friendList.styled";

export const FriendListItem = ({
  avatar,
  name,
  isOnline,
}) => {
  return (
    <Item>
      <Indicator bg={isOnline} ></Indicator>
      <Avatar src={avatar} alt="User avatar" width="48" />
      <p>{name}</p>
    </Item>
  )
}

FriendListItem.prototypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
}