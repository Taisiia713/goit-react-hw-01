import friends from "../../friends.json";
import FriendListItem from "../friendListItem/friendListItem";
import css from "./friends.module.css";

export default function Friends() {
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
