import {Outlet, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import styles from './users.module.scss'
import {Header, UsersSidebar} from "../index";


const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);
  console.log(users);
  return (
    <div className={styles.users}>
      <Header/>
      <div style={{display: 'flex'}} className='content'>
        {users.length !== 0 &&  (
          <>
            <UsersSidebar users={users}/>
            <Outlet context={[users]}/>
          </>
        )}
      </div>
    </div>
  )
    ;
};

export default Users;