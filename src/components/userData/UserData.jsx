import css from "./UserData.module.css";

export default function UserData({ avatar, username, tag, location }) {
  return (
    <div className={css.container}>
      <img className={css.img} src={avatar} alt="User avatar" />
      <p className={css.username}>{username}</p>
      <p className={css.tag}>@{tag}</p>
      <p className={css.location}>{location}</p>
    </div>
  );
}
