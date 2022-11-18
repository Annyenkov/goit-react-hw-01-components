import PropTypes from "prop-types";
import { Avatar, AvatarData, Card, CardStat, CardStatItem, UserInfo, UserName } from './profile.styled'

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  followers,
  views,
  likes,
}) => {
  return (
    <Card>
  <AvatarData>
    <Avatar
      src={avatar}
      alt="User avatar"
    />
        <UserName>{ username }</UserName>
        <UserInfo>@{ tag }</UserInfo>
        <UserInfo>{ location }</UserInfo>
  </AvatarData>

  <CardStat>
    <CardStatItem>
      <span>Followers</span>
          <span>{ followers }</span>
    </CardStatItem>
    <CardStatItem>
      <span>Views</span>
          <span>{ views }</span>
    </CardStatItem>
    <CardStatItem>
      <span>Likes</span>
          <span>{ likes }</span>
    </CardStatItem>
  </CardStat>
</Card>
  )
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
}