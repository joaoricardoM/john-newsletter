import { useState } from "react";

import ArticlesList from "./components/ArticleList/ArticleList";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";

const App = () => {
  const [user, setUser] = useState();
  const hasUser = Boolean(user);
  return (
    <div className="h-screen">
      <Header user={user} />
      {hasUser && <ArticlesList />}
      {hasUser || <Form onSubmit={setUser} />}
    </div>
  );
};

export default App;
