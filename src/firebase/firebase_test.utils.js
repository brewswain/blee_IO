import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  //insert firebase config here
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

// We just want to create our database information programmatically
export const createCollectionInFirestore = async () => {
  const collectionRef = firestore.doc(`components/${componentData.uid}`);
  const snapShot = await collectionRef.get();

  if (!snapShot.exists) {
    // probably need to do some destructuring here
    const createdAt = new Date();

    try {
      await collectionRef.set({
        createdAt,
      });
    } catch (error) {
      console.error("Error creating document:", error.message);
    }
  }
};

export default firebase;
