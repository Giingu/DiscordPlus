// ==UserScript==
// @author       @Giingu
// @name         Discord++_V2_Development | Take your discord web experience to the next level
// @version      1.2.9.4
// @iconURL      https://i.ibb.co/7znt13j/30162036.png
// @namespace    https://greasyfork.org/en/users/735799
// @license      MIT
// @name:es      Discord++_V2_Development | Lleva tu experiencia de discord web al siguiente nivel
// @name:ja      Discord++ |「DISCORD」Webエクスペリエンスを次のレベルに引き上げる
// @name:fr      Discord++ | Faites passer votre expérience Web Discord au niveau supérieur
// @name:ko      Discord++ | Take your Discord web experience to the next level
// @name:zh-CN   Discord++ | 使您的discord web体验更上一层楼
// @name:zh-TW   Discord++ | 使您的discord web體驗更上一層樓
// @name:pt      Discord++ | Leve sua experiência de discórdia na web para o próximo nível
// @name:pt-PT   Discord++ | Leve sua experiência de discórdia na web para o próximo nível
// @name:pt-BR   Discord++ | Leve sua experiência de discórdia na web para o próximo nível
// @name:ro      Discord++ | Luați experiența dvs. web discord la nivelul următor
// @name:ru      Discord++ | Поднимите свой опыт работы с Discord в Интернете на новый уровень
// @name:it      Discord++ | Porta la tua esperienza web con Discord al livello successivo
// @description    Discord++ adds tons of features to your web browser discord! Custom backgrounds, Account-Switcher, Log deleted messages, custom colors, smooth and new animations, better optimization, no rate limits, and much much more! It also comes with it's own theme (it can be disabled).
// @description:es Discord ++ agrega toneladas de características a discord web! Fondos personalizados, registro de mensajes eliminados, colores personalizados, animaciones nuevas y suaves, mejor optimización, sin límites de velocidad y mucho más. También viene con su propio tema (se puede desactivar).
// @description:ja    Discord ++はあなたのウェブブラウザの不和にたくさんの機能を追加します！ カスタム背景、ログ削除されたメッセージ、カスタムカラー、スムーズで新しいアニメーション、より良い最適化、レート制限なし、その他多数！ また、独自のテーマが付属しています（無効にすることができます）。
// @description:fr    Discord ++ ajoute des tonnes de fonctionnalités à la discorde de votre navigateur Web! Arrière-plans personnalisés, journal des messages supprimés, couleurs personnalisées, animations fluides et nouvelles, meilleure optimisation, aucune limite de débit et bien plus encore! Il est également livré avec son propre thème (il peut être désactivé).
// @description:ko    Discord ++는 웹 브라우저의 discord에 수많은 기능을 추가합니다! 사용자 정의 배경, 로그 삭제 메시지, 사용자 정의 색상, 매끄럽고 새로운 애니메이션, 더 나은 최적화, 속도 제한 없음, 그리고 훨씬 더! 또한 자체 테마와 함께 제공됩니다 (비활성화 할 수 있음).
// @description:zh-CN Discord ++为您的Web浏览器的不和谐添加了许多功能！ 自定义背景，记录已删除的消息，自定义颜色，平滑和新的动画，更好的优化，无速率限制等等！ 它还带有它自己的主题（可以禁用）。
// @description:zh-TW Discord ++為您的Web瀏覽器的不和諧添加了許多功能！ 自定義背景，記錄已刪除的消息，自定義顏色，平滑和新的動畫，更好的優化，無速率限制等等！ 它還帶有它自己的主題（可以禁用）。
// @description:pt-BR Discord ++ adiciona toneladas de recursos à discórdia do seu navegador da web! Planos de fundo personalizados, logs de mensagens excluídos, cores personalizadas, animações novas e suaves, melhor otimização, sem limites de taxa e muito, muito mais! Ele também vem com seu próprio tema (pode ser desativado).
// @description:pt-PT Discord ++ adiciona toneladas de recursos à discórdia do seu navegador da web! Planos de fundo personalizados, logs de mensagens excluídos, cores personalizadas, animações novas e suaves, melhor otimização, sem limites de taxa e muito, muito mais! Ele também vem com seu próprio tema (pode ser desativado).
// @description:pt Discord ++ adiciona toneladas de recursos à discórdia do seu navegador da web! Planos de fundo personalizados, logs de mensagens excluídos, cores personalizadas, animações novas e suaves, melhor otimização, sem limites de taxa e muito, muito mais! Ele também vem com seu próprio tema (pode ser desativado).
// @description:ro Discord ++ adaugă multe funcții discordiei browserului dvs. web! Fundaluri personalizate, jurnale de mesaje șterse, culori personalizate, animații netede și noi, optimizare mai bună, fără limite de rată și multe altele! De asemenea, vine cu propria temă (poate fi dezactivată).
// @description:ru Discord ++ добавляет множество функций в Discord вашего веб-браузера! Пользовательские фоны, удаленные журналы сообщений, пользовательские цвета, плавная и новая анимация, улучшенная оптимизация, отсутствие ограничений по скорости и многое другое! Он также имеет собственную тему (ее можно отключить).
// @description:it Discord ++ aggiunge tonnellate di funzionalità alla discordia del tuo browser web! Sfondi personalizzati, registri dei messaggi eliminati, colori personalizzati, animazioni nuove e fluide, migliore ottimizzazione, nessun limite di velocità e molto altro ancora! Inoltre viene fornito con il proprio tema (può essere disabilitato).
// @match        https://discordapp.com/activ*
// @match        https://discordapp.com/channel*
// @match        https://discord.com/activ*
// @match        https://discord.com/channel*
// @match        https://discord.com/channels/*
// @require      https://greasyfork.org/scripts/21927-arrive-js/code/arrivejs.js?version=198809
// @require      http://code.jquery.com/jquery-latest.js
// @require      https://cdn.jsdelivr.net/lodash/4.17.2/lodash.min.js
// @require      https://code.jquery.com/jquery-3.1.1.min.js
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js
// @grant        GM_getResourceText
// @resource     LOADER_CSS https://github.com/Giingu/DiscordPlus/blob/development/theme/css/loader.css
// @resource     LOADER_HTML https://github.com/Giingu/DiscordPlus/blob/development/theme/html/loader.html
// ==/UserScript==
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||| @grant compatibility |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
function GM_addStyle(css) {
  const style = document.getElementById("GM_addStyleBy8626") || (function() {
    const style = document.createElement('style');
    style.type = 'text/css';
    style.id = "GM_addStyleBy8626";
    document.head.appendChild(style);
    return style;
  })();
  const sheet = style.sheet;
  sheet.insertRule(css, (sheet.rules || sheet.cssRules || []).length);
}
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||| Discord++ Loader |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
function closeLoadingScreen(loadingScreen) {
  loadingScreen.style.transitionDuration = ".5s";
  loadingScreen.style.transitionTimingFunction = "cubic-bezier(0,.75,.25,1)";
  loadingScreen.style.opacity = 0;
  loadingScreen.style.borderRadius = "40px";
  loadingScreen.style.transform = "scale(0.75)";
  loadingScreen.style.cursor = "initial";
  setTimeout(() => {
    loadingScreen.parentNode.removeChild(loadingScreen);
  }, 500)
}

document.body.onload = ()=>{
  lscreen = document.getElementById("loading-screen");
  setTimeout(()=>{closeLoadingScreen(lscreen)}, 5000);
}

(function() {
    'use strict';
    const css = GM_getResourceText("LOADER_CSS");
    let styleElement = document.createElement( 'style' );
    styleElement.type = 'text/css';
    if( styleElement.styleSheet )
    {
        styleElement.styleSheet.cssText = css;
    }
    else
    {
        styleElement.appendChild( document.createTextNode( css ) );
    }
    document.head.appendChild( styleElement );
} )();

$("body").append (GM_getResourceText("LOADER_HTML"));