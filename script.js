// روابط Firebase: تأكد أنك أضفت هذه في index.html قبل </head>
//
// <script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js"></script>
// <script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore-compat.js"></script>

const firebaseConfig = {
  apiKey: "AIzaSyDeqHPCe__G-5tHV8I61y_9YvS9elmtIX0",
  authDomain: "sham-webs.firebaseapp.com",
  projectId: "sham-webs",
  storageBucket: "sham-webs.firebasestorage.app",
  messagingSenderId: "636838916676",
  appId: "1:636838916676:web:eddbc42046466ccdea8211",
  measurementId: "G-1DYDKQDJ04"
};

// تهيئة Firebase وربط قاعدة البيانات
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// تسجيل رقم الجوال
document.getElementById("signupForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const phone = document.getElementById("phone").value;

  db.collection("signups").add({
    phone: phone,
    timestamp: Date.now()
  })
  .then(() => {
    document.getElementById("message").innerText = "✅ تم تسجيل رقمك بنجاح!";
  })
  .catch((error) => {
    console.error("خطأ في Firebase:", error);
    document.getElementById("message").innerText = "❌ حدث خطأ، حاول مرة أخرى.";
  });
});