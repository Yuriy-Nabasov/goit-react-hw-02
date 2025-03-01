import Section from "../Section/Section";
import Container from "../Container/Container";
import Heading from "../Heading/Heading";
import "./App.css";
import Profile from "../Profile/Profile";
import FriendList from "../FriendList/FriendList";
import TransactionHistory from "../TransactionHistory/TransactionHistory";
import userData from "../userData.json";
import friends from "../friends.json";
import transactions from "../transactions.json";

function App() {
  return (
    <Section>
      <Container>
        <Heading title="Task 1. Social network profile" bottom />
        <Profile
          name={userData.username}
          tag={userData.tag}
          location={userData.location}
          image={userData.avatar}
          stats={userData.stats}
        />
        <Heading title="Task 2. Frends list" top bottom />
        <FriendList friends={friends} />
        <Heading title="Task 3. Transaction history" top bottom />
        <TransactionHistory items={transactions} />
      </Container>
    </Section>
  );
}

export default App;
