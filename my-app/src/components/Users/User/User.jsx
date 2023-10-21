import {Link, useOutletContext, useParams} from "react-router-dom";
import styles from "./User.module.scss";
import {useEffect, useState} from "react";

const User = () => {
  const {userId} = useParams();
  const [users] = useOutletContext();
  const [user, setUser] = useState({});
  
  useEffect(() => {
    const userTest = users.filter(item => item.id === +userId);
    setUser(...userTest);
  }, [userId]);
  
  return (
    <div className={styles.user}>
      <p>Name: {user.name}</p>
      <a href={`tel:${user.phone}`}>Phone: {user.phone}</a>
      <p>Email: {user.email}</p>
      <p>Website: {user.website}</p>
      <Link to={`/user/${userId}/albums`} >Album</Link>
    </div>
  );
};
export default User;