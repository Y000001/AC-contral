function CreateRecodeSheet() {
  var sheetName = "recode"; // シート名
  var startTime = "0800"; // デフォルト開始時間
  var endTime = "1800"; // デフォルト終了時間
  var airconStatus = 1; // エアコンの状態、デフォルトはオン（1）

  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet(); // スプレッドシートを取得
  var sheet = spreadsheet.getSheetByName(sheetName); // シートを取得

  if (sheet) {
    Logger.log("名前が'" + sheetName + "'のシートは既に存在しています！");
    setScheduleTrigger(); // トリガーを設定
    return sheet;
  }

  // 新しいシートを作成
  sheet = spreadsheet.insertSheet(sheetName);

  // 開始時間とタイトルを設定
  sheet.getRange("A1").setValue("開始時間"); // 開始時間
  sheet.getRange("B1").setNumberFormat("@").setValue("'" + startTime);

  // 終了時間とタイトルを設定
  sheet.getRange("A2").setValue("終了時間"); // 終了時間
  sheet.getRange("B2").setNumberFormat("@").setValue("'" + endTime);

  // 本日の使用時間とタイトルを設定
  sheet.getRange("A3").setValue("本日の使用時間"); // 本日の使用時間
  sheet.getRange("B3").setValue("0時間0分");

  // エアコンの状態とタイトルを設定
  sheet.getRange("A4").setValue("エアコンの状態"); // エアコンの状態
  sheet.getRange("B4").setValue(airconStatus);

  Logger.log("名前が'" + sheetName + "'のシートを作成し、開始時間、終了時間、本日の使用時間、エアコンの状態を設定しました！");
  setScheduleTrigger(); // トリガーを設定
  return sheet;
}
