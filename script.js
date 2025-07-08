const firebaseConfig = {
  apiKey: "AIzaSyDeqHPCe__G-5tHV8I61y_9YvS9elmtIX0",
  authDomain: "sham-webs.firebaseapp.com",
  projectId: "sham-webs",
  storageBucket: "sham-webs.appspot.com",
  messagingSenderId: "636838916676",
  appId: "1:636838916676:web:eddbc42046466ccdea8211",
  measurementId: "G-1DYDKQDJ04"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

document.getElementById("signupForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const phone = document.getElementById("phone").value;

  db.collection("signups").add({
    phone: phone,
    timestamp: Date.now()
  })
  .then(() => {
    document.getElementById("message").innerText = "✅ تم تسجيل رقمك بنجاح!";
    document.getElementById("signupForm").reset();
  })
  .catch((error) => {
    console.error("خطأ في Firebase:", error);
    document.getElementById("message").innerText = "❌ حدث خطأ، حاول مرة أخرى.";
  });
});
