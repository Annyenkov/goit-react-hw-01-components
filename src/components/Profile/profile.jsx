import PropTypes from "prop-types";
import { Avatar, AvatarData, Card, CardStat, CardStatItem, UserInfo, UserName } from './Profile.styled'

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats,
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
          <span>{ stats.followers }</span>
    </CardStatItem>
    <CardStatItem>
      <span>Views</span>
          <span>{ stats.views }</span>
    </CardStatItem>
    <CardStatItem>
      <span>Likes</span>
          <span>{ stats.likes }</span>
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
  stats: PropTypes.shape(PropTypes.number.isRequired,),
}