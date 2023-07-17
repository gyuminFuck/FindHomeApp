import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyARg8nCVVGiTVnSl-piYu_hQqdEdBv1HyA",
  authDomain: "findhome-afcec.firebaseapp.com",
  projectId: "findhome-afcec",
  storageBucket: "findhome-afcec.appspot.com",
  messagingSenderId: "129216616932",
  appId: "1:129216616932:web:a38a77bc75fb1cff8ccff1",
  measurementId: "G-WK8F9JJ6K3",
};

//config 등록
firebase.initializeApp(firebaseConfig);

// firebase의 firestore 인스터스를 변수에 저장
const firestore = firebase.firestore();

//필요한 곳에서 사용할수 있도록 내보내기
export default firestore;
