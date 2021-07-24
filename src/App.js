import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
import { SearchInput } from "./components/molecules/SearchInput";
import { UserCard } from "./components/organisms/user/UserCard";

import "./styles.css";

const user = {
  name: "bonzo",
  image: "https://source.unsplash.com/NE0XGVKTmcA",
  email: "123@example.com",
  phone: "000-0000-0000",
  company: {
    name: "test株式会社"
  },
  website: "https://www.google.com/"
};

export default function App() {
  return (
    <div className="App">
      <PrimaryButton>テスト</PrimaryButton>
      <SecondaryButton>検索</SecondaryButton>
      <br />
      <SearchInput />
      <UserCard user={user} />
    </div>
  );
}
