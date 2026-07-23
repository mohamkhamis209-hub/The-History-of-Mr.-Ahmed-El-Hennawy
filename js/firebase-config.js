import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { 
    getFirestore, collection, addDoc, getDocs, deleteDoc, 
    doc, updateDoc, query, where, getDoc, setDoc 
} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { 
    getStorage, ref, uploadBytes, getDownloadURL 
} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyCl3rsc9LR2iTKHbZy4dLjRrtIru1CwqLY",
  authDomain: "alfa-70944.firebaseapp.com",
  projectId: "alfa-70944",
  storageBucket: "alfa-70944.firebasestorage.app",
  messagingSenderId: "98747444316",
  appId: "1:98747444316:web:4230169acaafc34ca8ca99",
  measurementId: "G-0HLR050EYD"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { 
    db, storage, ref, uploadBytes, getDownloadURL,
    collection, addDoc, getDocs, deleteDoc, doc, updateDoc, query, where, getDoc, setDoc
};
