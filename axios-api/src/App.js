import React from "react";
import UserDetails from "./components/userdetails/UserDetails";
import DataContextprovider from "./context/DataContext";

export default function App() {
  return (
    <div className="App">
      <DataContextprovider>
        <UserDetails />
      </DataContextprovider>
    </div>
  );
}
