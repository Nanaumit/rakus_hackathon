"use strict";

// 入室メッセージをサーバに送信する
// 入力されたユーザ名を取得する
const userName = $("#userName").val();
// 入室メッセージイベントを送信する
socket.emit("enterMyselfEvent", userName);

// サーバから受信した入室メッセージを画面上に表示する
socket.on("enterOtherEvent", function (name) {
    $("#thread").prepend("<div class='d-inline-flex rounded-pill p-2 bg-secondary opacity-75 justify-content-center text-white'>" + name + "さんが入室しました。</div>");
    socket.emit("getAllUsernameEvent");
});
