var endpoint = "http://lod.hozo.jp/repositories/osaka-events";
var query = (function () {/*
PREFIX lodosaka: <http://data.lodosaka.jp/osaka-events/events20150626.ttl#>
SELECT DISTINCT *
WHERE{
  ?uri <http://www.w3.org/2003/01/geo/wgs84_pos#lat> ?lat ;
  <http://www.w3.org/2003/01/geo/wgs84_pos#long> ?long;
  lodosaka:問い合わせ電話番号 ?tel;
  lodosaka:問い合わせ先名称 ?name;
  lodosaka:主催 ?promoter;
  #lodosaka:参加費 ?fee;
  #lodosaka:参加対象 ?target;
  #lodosaka:イベントカテゴリー ?category;
  #lodosaka:詳細スケジュール（備考） ?schedule;
  lodosaka:終了日 ?end;
  lodosaka:開始日 ?start;
  #lodosaka:親イベント名 ?parent_name;
  #lodosaka:最寄駅 ?station;
  lodosaka:開催場所の住所 ?address;
  lodosaka:開催場所のマップナビ大阪URL ?mapnavi;
  lodosaka:開催場所 ?place;
  lodosaka:イベント内容 ?event;
  lodosaka:データ更新日 ?update;
  lodosaka:データ作成日 ?created;
  #lodosaka:整理番号 ?no;
  #lodosaka:URL ?url;
  #lodosaka:image-url ?image;
  #lodosaka:画像ファイル名 ?image_file;
  #lodosaka:問い合わせ【その他】 ?contact;
  #lodosaka:問い合わせ先メールアドレス ?mail;
  #lodosaka:イベント要約 ?summary;
  #lodosaka:イベント内容（英語） ?abstract;
  #lodosaka:イベントタイトル（英語） ?title_eng;
  <http://www.w3.org/2000/01/rdf-schema#label> ?title.
  optional {
  	?uri lodosaka:image-url ?image.
  }
}
*/}).toString().match(/\n([\s\S]*)\n/)[1];

var maxZoom = 19;
var baseUrl = "http://j.tile.openstreetmap.jp/{z}/{x}/{y}.png";
var baseAttribution = 'Map data &copy; OpenStreetMap contributors, Tiles Courtesy of OpenStreetMap Japan';
var subdomains = '1234';
var clusterOptions = {showCoverageOnHover: false, maxClusterRadius: 50};
var labelColumn = "title";
var labelLatitude = "lat";
var labelLongitude = "long";
var opacity = 1.0;
