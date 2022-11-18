import React from "react";
import { FriendListItem } from "./friendListItem";
import { List } from "./friendList.styled";


export function FriendList({ items }) {
  return (
      <List>
      {items.map(item => (
        <FriendListItem
          key={item.id}
          avatar={item.avatar}
          name={item.name}
          isOnline={item.isOnline}
        />
      ))}
    </List>
  )
}


