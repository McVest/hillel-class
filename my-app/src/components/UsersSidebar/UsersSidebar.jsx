import {Link} from "react-router-dom";
import styles from "./UsersSidebar.module.scss";

const UsersSidebar = ({users}) => {
  return (
    <div className={styles.usersSidebar}>
      {users.map((user, index) => (
        <div key={`${user.id}${user.username}`} className={styles.usersItem} style={index % 2 === 0 ? { background: '#e7e7e7' } : null}>
          <p className={styles.userName}>Username: {user.username}</p>
          <p className={styles.userEmail}>Email: {user.email}</p>
          {/*<button className={styles.userLink}>*/}
            <Link to={`/user/${user.id}`} >users {user.id}</Link>
          {/*</button>*/}
        </div>
      ))}
    </div>
  );
};

export default UsersSidebar;