//使うとき自分で修正する必要がある変数
var NICKNAME_AIR_CONDITIONER = 'AAA'; //Remo APP の中でエアコンのニックネームに修正
var NICKNAME_LIGHT = '1';//Remo APP の中で照明のニックネームに修正
var ACCESS_TOKEN = '7-dnGioAaXxQhCN4F3XLvFUIzB2YT4pgQKGJT9tQSrg.3ivPOAG7O8PvcRXBl8aN9zMv76UrWd7lPYn16I21Yk0';//自分のアクセストークンに修正

//通常変数
var airconId = getAirConditionerId();//取得されるエアコンのIDを格納する変数、エアコンを制御するために必要です。
var TIME_ZONE = 'Asia/Tokyo';//デフォルトでは、Asia/Tokyo（日本標準時）が使用されています。