/**
 * @fileoverview app component 
 */
// import UserProfileClass from "./components/user-profile/user-profile-class.component";
// import UserListClass from "./components/user-list/user-list-class.component";
import './App.scss';
import UserProfile from "./components/user-profile/user-profile.component";
import UserList from "./components/user-list/user-list.component";

/**
 * @function App create a component 
 */
function App() {
  return (
    <div className="App">
      {/* <UserListClass /> */}
      {/* <UserProfileClass name="Walker" email="walker@walker.com" /> */}
      <UserList dataSource="https://jsonplaceholder.typicode.com/users" />
      <UserProfile
        name="Walker"
        email="walker@walker.com"
        dataSource="https://jsonplaceholder.typicode.com/posts" />
    </div>
  );
}

export default App;
