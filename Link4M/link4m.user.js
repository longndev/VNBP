// ==UserScript==
// @name         Link4M Bypass (VNBP)
// @namespace    https://link4m.net/
// @version      4.4.0
// @description  bypass link4m cho các con dân cụt tay của vnbp
// @match        https://link4m.net/*
// @match        https://link4m.com/*
// @match        https://*.link4m.net/*
// @match        https://*.link4m.com/*
// @match        https://link4m.org/*
// @run-at       document-start
// @icon         https://raw.githubusercontent.com/longndev/VNBP/refs/heads/main/Link4M/assets/link4m.png
// @connect      *
// @author       VNBP (@inoolonely)
// @updateURL    https://github.com/longndev/VNBP/raw/refs/heads/main/Link4M/link4m.user.js
// @downloadURL  https://github.com/longndev/VNBP/raw/refs/heads/main/Link4M/link4m.user.js
// @require      https://raw.githubusercontent.com/longndev/VNBP/refs/heads/main/Link4M/link4m.js
// @connect      img.link4m.net
// @connect      api.ocr.space
// @connect      website-analytics.net
// @connect      s1.meeapi.com
// @connect      s1.what-on.com
// @connect      s2.dvseo.net
// @connect      fonts.googleapis.com
// @connect      translate.goog
// @connect      *
// @grant        GM_xmlhttpRequest
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_deleteValue
// @grant        unsafeWindow
// ==/UserScript==
// VN: + Xin vui lòng đừng cố gắng skid hoặc deobfuscate code này để remake tool mà không có sự cho phép của VNBypass (https://discord.com/invite/4WNZx7DMQ4)
//     + Xin bạn vui lòng không trở thành một thằng skidder tật não
//     + Nếu muốn đóng góp về các phương pháp bypass mới xin vui lòng join https://discord.com/invite/4WNZx7DMQ4, chúng tôi luôn sẵn sàng tiếp nhận những thông tin mới
// EN: + Please do not attempt to "skid" or deobfuscate this code to remake the tool without permission from VNBypass (https://discord.com/invite/4WNZx7DMQ4)
//     + Please do not be a brain-dead skidder.
//     + If you wish to contribute new bypass methods, please join https://discord.com/invite/4WNZx7DMQ4; we are always open to new information.
