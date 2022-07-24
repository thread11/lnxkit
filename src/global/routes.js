import Base64 from  '../module/Base64.js';
import Bookmark from  '../module/Bookmark.js';
import Hex from  '../module/Hex.js';
import Json from  '../module/Json.js';
import NotFound from '../module/NotFound.js';
import Octal from  '../module/Octal.js';
import Qrcode from  '../module/Qrcode.js';
import Time from  '../module/Time.js';
import Tz from  '../module/Tz.js';
import Unicode from  '../module/Unicode.js';
import Url from  '../module/Url.js';
import Yaml from  '../module/Yaml.js';

const routes = [
  { path: '/', component: Json },
  { path: '/json', component: Json, isMenu: true, text: 'JSON' },
  { path: '/yaml', component: Yaml, isMenu: true, text: 'YAML' },
  { path: '/url', component: Url, isMenu: true, text: 'URL' },
  { path: '/unicode', component: Unicode, isMenu: true, text: 'UNICODE' },
  { path: '/octal', component: Octal, isMenu: true, text: 'OCTAL' },
  { path: '/hex', component: Hex, isMenu: true, text: 'HEX' },
  { path: '/base64', component: Base64, isMenu: true, text: 'BASE64' },
  { path: '/time', component: Time, isMenu: true, text: 'TIME' },
  { path: '/tz', component: Tz, isMenu: false, text: 'TZ' },
  { path: '/qrcode', component: Qrcode, isMenu: true, text: 'QRCODE' },
  { path: '/bk', component: Bookmark, isMenu: false, text: 'BK' },
  { path: '/kb', component: Bookmark, isMenu: false, text: 'BK' },
  { path: '*', component: NotFound },
];

export default routes;
