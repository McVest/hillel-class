import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import styles from "./User.module.scss";

const UserAlbums = () => {
  const {userId, albumId} = useParams();
  const [albums, setAlbums] = useState([]);
  const [photos, setPhotos] = useState([]);
  
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}/albums`)
      .then((response) => response.json())
      .then((data) => setAlbums(data));
  }, [userId]);
  
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`)
      .then((response) => response.json())
      .then((data) => setPhotos(data));
  }, [userId, albumId]);
  console.log(photos);
  return (
    <div className={styles.userAlbum}>
      {albumId === 'albums' ? (
        albums.map(album => <div key={`${album.title}${album.id}`}>
            <p>Album title: {album.title}</p>
            <Link to={`/user/${userId}/albums/${album.id}`}>album {album.id}</Link>
          </div>
        )
      ) : (
        photos.length !== 0 && photos.map(photo => (
          <div className={styles.photo}>
            <p className={styles.photoTitle}>Photo title: {photo.title}</p>
            <img src={photo.url} alt={photo.title} className={styles.photoImg}/>
          </div>
        ))
      )}
    </div>
  );
};
export default UserAlbums;