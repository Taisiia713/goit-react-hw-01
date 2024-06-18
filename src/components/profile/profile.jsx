import css from "../profile/Profile.module.css";
import UserStats from "../userStats/UserStats";
import UserData from "../userData/UserData";
import userData from "../../userData.json";

export default function Profile() {
  return (
    <div className={css.container}>
      <UserData user={userData} />
      <UserStats user={userData} />
    </div>
  );
}
