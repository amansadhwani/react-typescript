import "./App.css";
import Greet from "./Components/Greet";
import Person from "./Components/Person";
import PersonList from "./Components/PersonList";
import Status from "./Components/Status";
import Heading from "./Components/Heading";
import Oscar from "./Components/Oscar";
import Button from "./Components/Button";
import Input from "./Components/Input";
import Container from "./Components/Container";
import { LoggedIn } from "./Components/State/LoggedIn";
import Counter from "./Components/State/Counter";
import UserC from "./Components/context/User";
import UserContextProvider from "./Components/context/UserContext";
import Private from "./Components/ComponentProp/Private";
import Profile from "./Components/ComponentProp/Profile";
import Folder from "./Components/Folder";
//import folderData from './Components/data/folderData'
import TodoMain from "./Components/RoadSideCoder/TodoMain";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const personName = {
    first: "aman",
    last: "sadhwani",
  };
  const nameList = [
    {
      first: "aman",
      last: "sadhwani",
    },
    {
      first: "Rafael",
      last: "Nadal",
    },
    {
      first: "Roger ",
      last: "Federer",
    },
  ];

  const folderData = {
    name: "root",
    isFolder: true,
    items: [
      {
        name: "public",
        isFolder: true,
        items: [
          {
            name: "public nested 1",
            isFolder: false,
          },
          {
            name: "public nested 2",
            isFolder: false,
          },
        ],
      },
      {
        name: "public2",
        isFolder: true,
        items: [
          {
            name: "public nested 3",
            isFolder: false,
          },
          {
            name: "public nested 4",
            isFolder: false,
          },
          {
            name: "public nested 5",
            isFolder: false,
          },
        ],
      },
    ],
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Greet name={"AMAN"} isLoggedIn={true} />
        {/* <Greet name={"AMAN"} messageCount={444} isLoggedIn={true} /> // optional props */}
        <Person name={personName} />
        <PersonList name={nameList} />
        <Status status={"loading"} />
        <Oscar>
          <Heading>Heading </Heading>
        </Oscar>
        <Button
          handleClick={(event, id) =>
            console.log(`i am clicked ${event} ${id}`)
          }
        ></Button>
        <Input value="" handleChange={(event) => console.log("changed")} />
        <Container styles={{ border: "1px solid black", padding: "1rem" }} />
        <LoggedIn></LoggedIn>
        <Counter />
        <h2>
          COntext starts
          <UserContextProvider>
            <UserC />
          </UserContextProvider>
          COntext ends component props starts
          <Private isLoggedIn={true} Component={Profile} />
          <Folder name={folderData} />
        </h2>

        <h1>
          Todo with typescript
          <TodoMain />
        </h1>
      </div>
      <Routes>
      {/* <Route  path="/insurance" element={<MainApp/>} /> */}
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
