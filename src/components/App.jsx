import {Profile} from "./Profile/profile";
import { Statistics } from "./Statistics/statistics";
import { FriendList } from "./FriendList/friendList";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";
import user from "../user.json";
import data from "../data.json";
import friends from "../friends.json";
import transactions from "../transactions.json";
import { Container } from "./App.styled";

export function App() {
  return (
    <Container>
      <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      followers={user.stats.followers}
      views={user.stats.views}
      likes={user.stats.likes}
      />
      <Statistics items={data} />
      <FriendList items={friends} />
      <TransactionHistory items={ transactions } />
    </Container>
  )
}


