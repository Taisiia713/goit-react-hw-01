import FriendListItem from "../../components/friendListItem/FriendListItem";
import css from "./Friends.module.css";

export default function Friends({ friends }) {
  return (
    <div>
      <ul className={css.container}>
        {friends.map((friend) => (
          <li className={css.item} key={friend.id}>
            <FriendListItem oneFriend={friend} />
          </li>
        ))}
      </ul>
    </div>
  );
}
