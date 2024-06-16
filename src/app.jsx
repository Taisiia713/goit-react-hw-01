import friends from "./friends.json";
import Friends from "./components/friends/friends";
console.log(friends);
export default function App() {
  return <Friends friends={friends} />;
}
