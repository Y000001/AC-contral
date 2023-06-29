
function controlAirConditionerBasedOnSchedule() {
var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("recode");

// 開始時間、終了時間、エアコンの状態を取得する
var startTime = sheet.getRange("B1").getValue();
var endTime = sheet.getRange("B2").getValue();

// 現在の時間を取得する
var now = new Date();
var currentHour = now.getHours().toString().padStart(2, '0');
var currentMinute = now.getMinutes().toString().padStart(2, '0');
var currentTime = currentHour + currentMinute;

// 開始時間に達したかをチェックする
if (currentTime === startTime) {
controlAirConditioner(airconId, "power-on");
sheet.getRange("B4").setValue(1); // エアコンの状態をオン（1）に設定する
}

// 終了時間に達したかをチェックする
if (currentTime === endTime) {
controlAirConditioner(airconId, "power-off");
sheet.getRange("B4").setValue(0); // エアコンの状態をオフ（0）に設定する
}
}