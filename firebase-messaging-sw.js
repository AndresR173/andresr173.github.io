importScripts("https://www.gstatic.com/firebasejs/8.6.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.6.1/firebase-messaging.js");

firebase.initializeApp({
  apiKey: "AIzaSyAlPm0TIpcpV_WSWaQxMegZUJBdmQ6XMiQ",
  authDomain: "tu-ciudad-en-red.firebaseapp.com",
  databaseURL: "https://tu-ciudad-en-red.firebaseio.com",
  projectId: "tu-ciudad-en-red",
  storageBucket: "tu-ciudad-en-red.appspot.com",
  messagingSenderId: "20495679942",
  appId: "1:20495679942:web:763208cd02aa112b6b72c7",
});
// Necessary to receive background messages:
const messaging = firebase.messaging();

// Optional:
messaging.onBackgroundMessage((m) => {
  console.log("onBackgroundMessage", m);
});