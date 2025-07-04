// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDeqHPCe__G-5tHV8I61y_9YvS9elmtIX0",
  authDomain: "sham-webs.firebaseapp.com",
  projectId: "sham-webs",
  storageBucket: "sham-webs.firebasestorage.app",
  messagingSenderId: "636838916676",
  appId: "1:636838916676:web:eddbc42046466ccdea8211",
  measurementId: "G-1DYDKQDJ04"
};
// تحديد تاريخ الانطلاق (مثال: 1 أغسطس 2025)
const launchDate = new Date("2025-08-01T10:00:00").getTime();
const countdownElement = document.getElementById("countdown");

const interval = setInterval(() => {
  const now = new Date().getTime();
  const distance = launchDate - now;

  if (distance < 0) {
    clearInterval(interval);
    countdownElement.innerHTML = "🎉 انطلقنا!";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);
  const seconds = Math.floor((distance / 1000) % 60);

  countdownElement.innerHTML = `${days} يوم، ${hours} ساعة، ${minutes} دقيقة، ${seconds} ثانية`;
}, 1000);

// نموذج التسجيل
document.getElementById("signupForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const phone = document.getElementById("phone").value;
  document.getElementById("message").innerText = `✅ تم استلام رقمك: ${phone}، سنبلغك فور الانطلاق`;
});
