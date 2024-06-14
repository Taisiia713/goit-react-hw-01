import "../userData.json";

export default function UserData({
  user: { avatar, username, tag, location },
}) {
  return (
    <>
      <img src={avatar}></img>
      <p>{username}</p>
      <p>@{tag}</p>
      <p>{location}</p>
    </>
  );
}
