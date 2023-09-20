import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

import { ref, onUnmounted, computed } from "vue";

firebase.initializeApp({
  apiKey: "AIzaSyADKrW1gDITcxiMDCoYaV1xEZVwrqZvLYk",
  authDomain: "vue-test-wa-clone.firebaseapp.com",
  projectId: "vue-test-wa-clone",
  storageBucket: "vue-test-wa-clone.appspot.com",
  messagingSenderId: "24401365631",
  appId: "1:24401365631:web:40bd22b4412731a99d0d4a",
  measurementId: "G-G2821Y00JY",
});

const auth = firebase.auth();
export function useAuth() {
  const user = ref(null);
  const unsubscribe = auth.onAuthStateChanged((_user) => (user.value = _user));
  onUnmounted(unsubscribe);
  const isLogin = computed(() => user.value !== null);

  const signIn = async () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    try {
      await auth.signInWithPopup(googleProvider);
    } catch (error) {
      console.error("Oops! somthing went wrong");
      throw error;
    }
  };
  const signOut = () => auth.signOut();

  return { user, isLogin, signIn, signOut };
}

const firestore = firebase.firestore();
const messagesCollection = firestore.collection("messages");
const messagesQuery = messagesCollection
  .orderBy("createdAt", "desc")
  .limit(100);

export function useChat() {
  const messages = ref([]);
  const unsubscribe = messagesQuery.onSnapshot((snapshot) => {
    messages.value = snapshot.docs
      .map((doc) => ({ id: doc.id, ...doc.data() }))
      .reverse();
  });
  onUnmounted(unsubscribe);
  const { user, isLogin } = useAuth();
  const sendMessage = (text, currentUser) => {
    if (!isLogin.value) return;
    const { photoURL, uid, displayName } = user.value;
    messagesCollection
      .add({
        userName: displayName,
        userId: uid,
        userchatWith: currentUser,
        userPhotoURL: photoURL,
        text: text,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then((res) => {
        console.log(res, "Message send successfully!");
      })
      .catch((error) => {
        throw error;
      });
  };
  return { messages, sendMessage };
}
