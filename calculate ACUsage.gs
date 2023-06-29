function calculateAndRecordACUsageDuration() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var dataSheet = ss.getSheetByName('NatureRemo'); 
  var recordSheet = ss.getSheetByName('recode');  
  var totalDurationCell = recordSheet.getRange('B3'); 
  
  var data = dataSheet.getDataRange().getValues();
  var totalDuration = 0;
  var startTime = null;
  
  //使用時間を計算
  for (var i = 1; i < data.length; i++) { 
    var currentACState = data[i][4]; // AC_Stateの位置に合わせて設置する必要がある。
    
    if (currentACState === 1 && startTime === null) {
      startTime = new Date(data[i][0]);
    } else if (currentACState === 0 && startTime !== null) {
      var endTime = new Date(data[i][0]);
      var duration = endTime - startTime;
      totalDuration += duration;
      startTime = null;
    }
  }
  
  // 将总时长转换为小时和分钟
  var totalMinutes = Math.round(totalDuration / (1000 * 60));
  var hours = Math.floor(totalMinutes / 60);
  var minutes = totalMinutes % 60;
  
  var formattedDuration = hours + '時間 ' + minutes + '分';
  totalDurationCell.setValue(formattedDuration); 
}
