//修正する必要がある変数
var NICKNAME_AIR_CONDITIONER = 'エアコン'; //Remo APP の中でエアコンのニックネームに修正,デフォルトはエアコン
var NICKNAME_LIGHT = '照明';//Remo APP の中で照明のニックネームに修正、デフォルトは照明
var ACCESS_TOKEN = '自分のアクセストークン';//自分のアクセストークンに修正

//通常変数
var airconId = getAirConditionerId();//取得されるエアコンのIDを格納する変数、エアコンを制御するために必要です。
var TIME_ZONE = 'Asia/Tokyo';//デフォルトでは、Asia/Tokyo（日本標準時）が使用されています。
