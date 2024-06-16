import css from "./friendListItem.module.css";

export default function FriendListItem({
  oneFriend: { avatar, name, isOnline },
}) {
  return (
    <>
      <img src={avatar} alt="Avatar" width="60" />
      <p className={css.name}>{name}</p>

      {isOnline ? (
        <p className={css.online}>Online</p>
      ) : (
        <p className={css.offline}>Offline</p>
      )}
    </>
  );
}
