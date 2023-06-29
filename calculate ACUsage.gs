function calculateAndRecordACUsageDuration() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var dataSheet = ss.getSheetByName('NatureRemo'); // 替换为你的数据表名称
  var recordSheet = ss.getSheetByName('recode'); // 替换为你的工作表名称
  var totalDurationCell = recordSheet.getRange('B3'); // 替换为你要记录总时长的单元格位置
  
  var data = dataSheet.getDataRange().getValues();
  var totalDuration = 0;
  var startTime = null;
  
  for (var i = 1; i < data.length; i++) { // 从第二行开始遍历数据
    var currentACState = data[i][4]; // 根据你的数据表结构，调整索引位置
    
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
  
  var formattedDuration = hours + '小时 ' + minutes + '分钟';
  totalDurationCell.setValue(formattedDuration); // 将总时长写入目标单元格
}
