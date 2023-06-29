function getAirConditionerId() {
  var data = getNatureRemoData("appliances");
  var airconId = ""; // 空调设备的ID

  // 遍历设备信息，找到空调设备并提取ID
  for (var i = 0; i < data.length; i++) {
    var device = data[i];
    if (device.nickname === NICKNAME_AIR_CONDITIONER) {
      airconId = device.id;
      break; // 找到空调设备后立即退出循环
    }
  }


  return airconId;
}

function setAirconOn() {
  var url = "https://api.nature.global/1/appliances/" + airconId + "/aircon_settings";
  
  const payload = {"button" : ""};
  const headers = {'Authorization': 'Bearer ' + ACCESS_TOKEN,}; 

  var options = {
    "method": 'post',
    "headers": headers,
    "payload": payload,
  };
  
  Logger.log("Sending this request: " + url);
 
  var response = UrlFetchApp.fetch(url, options);
  
  Logger.log("Received this response: " + response.getContentText());
}



function setAirconOff() {
  var url = "https://api.nature.global/1/appliances/" + airconId + "/aircon_settings";
  
  const payload = {"button" : "power-off"};
  const headers = {'Authorization': 'Bearer ' + ACCESS_TOKEN,}; 

  var options = {
    "method": 'post',
    "headers": headers,
    "payload": payload,
  };
  
  Logger.log("Sending this request: " + url);
  
  var response = UrlFetchApp.fetch(url, options);
  
  Logger.log("Received this response: " + response.getContentText());
}
