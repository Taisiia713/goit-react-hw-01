import css from "./FriendListItem.module.css";

export default function FriendListItem({ oneFriend }) {
  const { avatar, name, isOnline } = oneFriend;
  return (
    <div>
      <img src={avatar} alt="Avatar" width="60" />
      <p className={css.name}>{name}</p>
      {isOnline ? (
        <p className={css.online}>Online</p>
      ) : (
        <p className={css.offline}>Offline</p>
      )}
    </div>
  );
}
