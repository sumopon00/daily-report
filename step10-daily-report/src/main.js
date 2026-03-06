// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4L8Pn0VE_EF5Gff2XlieoX4ZDJh9AnCY",
  authDomain: "daily-report-37acf.firebaseapp.com",
  projectId: "daily-report-37acf",
  storageBucket: "daily-report-37acf.firebasestorage.app",
  messagingSenderId: "143148449655",
  appId: "1:143148449655:web:5665304bff8d292f7deb72"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const fetchHistoryData = async () => {
      let tags = "";

      const querySnapshot = await getDocs(collection(db, "reports"));

      querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data()}`);
            tags += `<tr><td>${doc.data().data}</td><td>${doc.data().name}</td>
            <td>${doc.data().work}</td><td>${doc.data().comment}</td></tr>`
      });
      document.getElementById("js-history").innerHTML = tags;
};

if (document.getElementById("js-history")) {
      fetchHistoryData();
}