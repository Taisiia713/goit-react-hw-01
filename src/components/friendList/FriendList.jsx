import Friends from "../friends/Friends";

export default function FriendList({ friends }) {
  return (
    <div>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <Friends
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
          id={id}
        />
      ))}
    </div>
  );
}
