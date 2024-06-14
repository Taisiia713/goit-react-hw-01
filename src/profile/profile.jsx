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

import UserData from "../userData/userData";
import UserStats from "../userStats/userStats";

export default function Profile() {
  return (
    <div>
      <UserData user={userProfile} />
      <UserStats userInfo={userProfile} />
    </div>
  );
}
