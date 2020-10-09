import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  //insert firebase config here
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

export const migrateDocumentsToFirestore = async (
  collectionKey,
  objectsToAdd
) => {
  let collectionRef = firestore.collection(collectionKey);

  let batch = firestore.batch();

  objectsToAdd.forEach((object) => {
    let newDocumentRef = collectionRef.doc(object.name);
    batch.set(newDocumentRef, object);
  });

  return await batch.commit();
};

export default firebase;
