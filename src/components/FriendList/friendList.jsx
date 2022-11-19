import React from "react";
import PropTypes from "prop-types";
import { FriendListItem } from "./FriendListItem";
import { List, Item } from "./FriendList.styled";


export function FriendList({ items }) {
  return (
      <List>
      {items.map(({ id, avatar, name, isOnline }) => (
        <Item key={id}>
          <FriendListItem
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
        </Item>
        
      ))}
    </List>
  )
}

FriendList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  }),),
}
