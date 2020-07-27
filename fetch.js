var firebaseConfig = {
    apiKey: "AIzaSyDLMMQtK8Lsq4_gTagcU1WCvuFu27SMkIw",
    authDomain: "careertop.firebaseapp.com",
    databaseURL: "https://careertop.firebaseio.com",
    projectId: "careertop",
    storageBucket: "careertop.appspot.com",
    messagingSenderId: "959328374379",
    appId: "1:959328374379:web:1b311968e88e368fc66b2e",
    measurementId: "G-803897YR2W"

};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
//const cafeList = document.querySelector('#cafe-list');
var c = 0;

function addHtmlTableRow(doc, c) {

    (function () {
        "use strict";

        function create(b, c, d, e, f, g, h, i, j, k) {
            var boardDiv = document.createElement(b);
            boardDiv.id = c;
            boardDiv.className = d;
            boardDiv.innerText = e;
            boardDiv.href = f;
            boardDiv.alt = g;
            boardDiv.src = h;
            boardDiv.value = i;
            boardDiv.type = j;
            boardDiv.action = k;
            return boardDiv;
        }

        function createAndModify(a, b, c, d, e, f, g, h, i, j, k) {
            var board = document.getElementById(a);
            board.appendChild(create(b, c, d, e, f, g, h, i, j, k));
        }
        createAndModify("row", "div", doc.data().name + "1", "col-lg-4 col-md-6", "", "", "");
        createAndModify(doc.data().name + "1", "div", doc.data().name + "2", "card h-100", "");
        createAndModify(doc.data().name + "2", "div", doc.data().name + "3", "single-post post-style-1", "", "");
        createAndModify(doc.data().name + "3", "div", doc.data().name + "4", "blog-image", "", "", "");
        createAndModify(doc.data().name + "4", "img", doc.data().name + "5", "", "", "", "Blog image", "images/event1.jpg", "", "");
        createAndModify(doc.data().name + "3", "a", doc.data().name + "6", "avatar", "", "#", "", "", "", "");
        createAndModify(doc.data().name + "6", "img", doc.data().name + "7", "", "", "", "Blog image", "images/pp.jpeg", "", "");
        createAndModify(doc.data().name + "3", "div", doc.data().name + "8", "blog-info", "", "", "");
        createAndModify(doc.data().name + "8", "h4", doc.data().name + "9", "title", "", "", "");
        createAndModify(doc.data().name + "9", "a", doc.data().name + "10", "", "", "");
        createAndModify(doc.data().name + "10", "b", doc.data().name + "11", "", doc.data().hname, "", "", "");
        createAndModify(doc.data().name + "8", "ul", doc.data().name + "12", "post-footer", "", "", "");
        createAndModify(doc.data().name + "12", "li", doc.data().name + "13", "", "", "");
        createAndModify(doc.data().name + "13", "a", doc.data().name + "14", "", "", "event/event1.html", "", "", "", "", "");
        createAndModify(doc.data().name + "14", "i", doc.data().name + "15", "ion-eye", "", "", "");
    }());

}
db.collection('data').orderBy('time').get().then(snapshot => {
    snapshot.docs.forEach(doc => {
        c++;
        addHtmlTableRow(doc, c);
    });
});
