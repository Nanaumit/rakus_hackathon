'use strict';

// 退室メッセージをサーバに送信する
function exit() {
    // ユーザ名を取得
    const userName = $('#userName').val();
    // 退室メッセージイベントを送信する
    socket.emit("exitMyselfEvent", userName);
    // 退室
    location.href = '/';
}

// サーバから受信した退室メッセージを画面上に表示する
socket.on('exitOtherEvent', function (data) {
    $('#thread').prepend('<div class="d-inline-flex rounded-pill p-2 bg-secondary opacity-75 justify-content-center text-white">' + data + '</div>');
});
