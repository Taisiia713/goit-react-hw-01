import css from "../profile/Profile.module.css";
import UserStats from "../userStats/UserStats";
import UserData from "../userData/UserData";

export default function Profile({
  user: {
    avatar,
    username,
    tag,
    location,
    stats: { followers, views, likes },
  },
}) {
  return (
    <div className={css.container}>
      <UserData
        avatar={avatar}
        username={username}
        tag={tag}
        location={location}
      />
      <UserStats followers={followers} views={views} likes={likes} />
    </div>
  );
}
