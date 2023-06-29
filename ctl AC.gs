var airconId = getAirConditionerId();

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


function controlAirConditioner(airconId, command) {
  const headers = {
    'Authorization': 'Bearer ' + 'ZB7Xxi7xB9KSpTjVpEwNFY9dytZIGM4-yBkroHphPn4.tbE-tIEQna4LhBsiCxpP07Tp61yG932D1jZDqw6ifBI',
  };

  const url = 'https://api.nature.global/1/appliances/' + airconId + '/aircon_settings';
  const payload = {
    button: command, 
  };

  const options = {
    method: 'post',
    headers: headers,
    payload: JSON.stringify(payload),
  };

  var response = UrlFetchApp.fetch(url, options);
  var result = JSON.parse(response.getContentText());
  console.log('空调设备状态:', result.settings.button);
}