importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js','https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js');
firebase.initializeApp({apiKey:"AIzaSyB5DB0Z8_6UGLkHIs3m5UiflNDXdDp1IpQ",authDomain:"medicos-alas.firebaseapp.com",projectId:"medicos-alas",storageBucket:"medicos-alas.firebasestorage.app",messagingSenderId:"710012164824",appId:"1:710012164824:web:a1d4a678d3f05977a455ad"});
firebase.messaging();
self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',e=>{const u=new URL(e.request.url);if(e.request.method==='GET'&&u.origin===location.origin){e.respondWith(fetch(e.request))}});
