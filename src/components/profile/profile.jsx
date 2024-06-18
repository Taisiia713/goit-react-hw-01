const userProfile = {
  username: "Jacques Gluke",
  tag: "jgluke",
  location: "Ocho Rios, Jamaica",
  avatar: "https://cdn-icons-png.flaticon.com/512/2922/2922506.png",
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};

import css from "../profile/Profile.module.css";
import UserStats from "../userStats/UserStats";
import UserData from "../userData/UserData";

export default function Profile() {
  return (
    <div className={css.container}>
      <UserData user={userProfile} />
      <UserStats user={userProfile} />
    </div>
  );
}
