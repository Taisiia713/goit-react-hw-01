import css from "./UserStats.module.css";

export default function UserStats({ followers, views, likes }) {
  return (
    <ul className={css.ul}>
      <li className={css.li}>
        <span className={css.litext}>Followers</span>
        <span className={css.linumbers}>{followers}</span>
      </li>
      <li className={css.li}>
        <span className={css.litext}>Views</span>
        <span className={css.linumbers}>{views}</span>
      </li>
      <li className={css.li}>
        <span className={css.litext}>Likes</span>
        <span className={css.linumbers}>{likes}</span>
      </li>
    </ul>
  );
}
