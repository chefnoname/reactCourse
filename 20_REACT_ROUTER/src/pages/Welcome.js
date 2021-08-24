import { Route } from "react-router-dom";

const Welcome = () => {
  return (
    <>
      <h1>Howdily Hodilly</h1>
      <Route path="/welcome/new-user">
        <p>Welcome new-User</p>
      </Route>
    </>
  );
};

export default Welcome;
