import db from "../firebase";

export const getPosts = (setPosts) => {
     db.collection('questions')
    .orderBy('timestamp',"desc")
    .onSnapshot((snapshot) =>
    setPosts(
      snapshot.docs.map((doc) => ({
        id: doc.id,
        question: doc.data(),
      }))
    )
  );
};