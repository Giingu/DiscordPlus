// ==UserScript==
// @author            @Giingu
// @name              Discord++_V2_Development | Take your discord web experience to the next level
// @version           1.2.9.4
// @iconURL           https://i.ibb.co/7znt13j/30162036.png
// @namespace         https://greasyfork.org/en/users/735799
// @license           MIT
// @name:es           Discord++_V2_Development | Lleva tu experiencia de discord web al siguiente nivel
// @name:ja           Discord++ |「DISCORD」Webエクスペリエンスを次のレベルに引き上げる
// @name:fr           Discord++ | Faites passer votre expérience Web Discord au niveau supérieur
// @name:ko           Discord++ | Take your Discord web experience to the next level
// @name:zh-CN        Discord++ | 使您的discord web体验更上一层楼
// @name:zh-TW        Discord++ | 使您的discord web體驗更上一層樓
// @name:pt           Discord++ | Leve sua experiência de discórdia na web para o próximo nível
// @name:pt-PT        Discord++ | Leve sua experiência de discórdia na web para o próximo nível
// @name:pt-BR        Discord++ | Leve sua experiência de discórdia na web para o próximo nível
// @name:ro           Discord++ | Luați experiența dvs. web discord la nivelul următor
// @name:ru           Discord++ | Поднимите свой опыт работы с Discord в Интернете на новый уровень
// @name:it           Discord++ | Porta la tua esperienza web con Discord al livello successivo
// @description       Discord++ adds tons of features to your web browser discord! Custom backgrounds, Account-Switcher, Log deleted messages, custom colors, smooth and new animations, better optimization, no rate limits, and much much more! It also comes with it's own theme (it can be disabled).
// @description:es    Discord ++ agrega toneladas de características a discord web! Fondos personalizados, registro de mensajes eliminados, colores personalizados, animaciones nuevas y suaves, mejor optimización, sin límites de velocidad y mucho más. También viene con su propio tema (se puede desactivar).
// @description:ja    Discord ++はあなたのウェブブラウザの不和にたくさんの機能を追加します！ カスタム背景、ログ削除されたメッセージ、カスタムカラー、スムーズで新しいアニメーション、より良い最適化、レート制限なし、その他多数！ また、独自のテーマが付属しています（無効にすることができます）。
// @description:fr    Discord ++ ajoute des tonnes de fonctionnalités à la discorde de votre navigateur Web! Arrière-plans personnalisés, journal des messages supprimés, couleurs personnalisées, animations fluides et nouvelles, meilleure optimisation, aucune limite de débit et bien plus encore! Il est également livré avec son propre thème (il peut être désactivé).
// @description:ko    Discord ++는 웹 브라우저의 discord에 수많은 기능을 추가합니다! 사용자 정의 배경, 로그 삭제 메시지, 사용자 정의 색상, 매끄럽고 새로운 애니메이션, 더 나은 최적화, 속도 제한 없음, 그리고 훨씬 더! 또한 자체 테마와 함께 제공됩니다 (비활성화 할 수 있음).
// @description:zh-CN Discord ++为您的Web浏览器的不和谐添加了许多功能！ 自定义背景，记录已删除的消息，自定义颜色，平滑和新的动画，更好的优化，无速率限制等等！ 它还带有它自己的主题（可以禁用）。
// @description:zh-TW Discord ++為您的Web瀏覽器的不和諧添加了許多功能！ 自定義背景，記錄已刪除的消息，自定義顏色，平滑和新的動畫，更好的優化，無速率限制等等！ 它還帶有它自己的主題（可以禁用）。
// @description:pt-BR Discord ++ adiciona toneladas de recursos à discórdia do seu navegador da web! Planos de fundo personalizados, logs de mensagens excluídos, cores personalizadas, animações novas e suaves, melhor otimização, sem limites de taxa e muito, muito mais! Ele também vem com seu próprio tema (pode ser desativado).
// @description:pt-PT Discord ++ adiciona toneladas de recursos à discórdia do seu navegador da web! Planos de fundo personalizados, logs de mensagens excluídos, cores personalizadas, animações novas e suaves, melhor otimização, sem limites de taxa e muito, muito mais! Ele também vem com seu próprio tema (pode ser desativado).
// @description:pt    Discord ++ adiciona toneladas de recursos à discórdia do seu navegador da web! Planos de fundo personalizados, logs de mensagens excluídos, cores personalizadas, animações novas e suaves, melhor otimização, sem limites de taxa e muito, muito mais! Ele também vem com seu próprio tema (pode ser desativado).
// @description:ro    Discord ++ adaugă multe funcții discordiei browserului dvs. web! Fundaluri personalizate, jurnale de mesaje șterse, culori personalizate, animații netede și noi, optimizare mai bună, fără limite de rată și multe altele! De asemenea, vine cu propria temă (poate fi dezactivată).
// @description:ru    Discord ++ добавляет множество функций в Discord вашего веб-браузера! Пользовательские фоны, удаленные журналы сообщений, пользовательские цвета, плавная и новая анимация, улучшенная оптимизация, отсутствие ограничений по скорости и многое другое! Он также имеет собственную тему (ее можно отключить).
// @description:it    Discord ++ aggiunge tonnellate di funzionalità alla discordia del tuo browser web! Sfondi personalizzati, registri dei messaggi eliminati, colori personalizzati, animazioni nuove e fluide, migliore ottimizzazione, nessun limite di velocità e molto altro ancora! Inoltre viene fornito con il proprio tema (può essere disabilitato).
// @match             https://discordapp.com/activ*
// @match             https://discordapp.com/channel*
// @match             https://discord.com/activ*
// @match             https://discord.com/channel*
// @match             https://discord.com/channels/*
// @require           https://greasyfork.org/scripts/21927-arrive-js/code/arrivejs.js?version=198809
// @require           http://code.jquery.com/jquery-latest.js
// @require           https://cdn.jsdelivr.net/lodash/4.17.2/lodash.min.js
// @require           https://code.jquery.com/jquery-3.1.1.min.js
// @require           http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js
// @grant             GM_getResourceText
// @resource          STYLE_CSS https://raw.githubusercontent.com/Giingu/DiscordPlus/development/theme/style.css
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
/*||| Multiple Accounts ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
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

( function()
{
    'use strict';

    let css = `
    .Loading {
    line-height: 1;
    user-select: none;
    text-rendering: optimizeLegibility;
    -webkit-box-direction: normal;
    margin: 0;
    padding: 0;
    border: 0;
    font-weight: inherit;
    font-style: inherit;
    font-family: inherit;
    font-size: 100%;
    vertical-align: baseline;
    outline: 0;
    transform: translateZ(0);
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    z-index: 3000;
    overflow: hidden;
    forced-color-adjust: none;
    opacity: 1;
    }
/* original gradient spinner by Mahdi Farra on CodePen */

/*    \/ \/ \/    FOR DEMO ONLY    \/ \/ \/    */

@import url('https://fonts.googleapis.com/css2?family=Red+Hat+Display:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'); /* import "red hat display" from google fonts" */
*{
  font-family: 'Red Hat Display', sans-serif; /* set "red hat display" as default font */
  text-align: center;
}
.dplusloading{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0;
  padding: 0;
  height: 100vh;
}

/*    /\ /\ /\    FOR DEMO ONLY    /\ /\ /\    */

:root{
  --spinner-size: 150px; /* change the size of the spinner */
  --loading-screen-background: #1C1C1C; /* change the background color of the loading screen */
  --font-family: 'Red Hat Display', sans-serif; /* change the font used for the bottom text of the loading screen */
  --text-color: white; /* change the color used for the bottom text of the loading screen */
}
.spinner-container{
  display: flex;
  align-items: center;
  justify-content: center;
}
.loading-screen{
  background-color: var(--loading-screen-background, #1C1C1C);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: fixed;
  top:0;
  right:0;
  left:0;
  bottom:0;
  z-index: 500;
  cursor: none;
}
.spinner {
  width: var(--spinner-size, 64px) !important;
  height: var(--spinner-size, 64px) !important;
  background: linear-gradient(180deg, #0f6fff 0%, rgba(0, 0, 0, 0.1) 25%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: spin 2s cubic-bezier(.52,.1,.27,.87) infinite;
  position: relative;
}
.spinner::after {
  content: "";
  width: calc(100% - 4px);
  height: calc(100% - 4px);
  border-radius: 50%;
  background: var(--loading-screen-background, #1C1C1C);
  z-index: 01;
}
.spinner-container img{
  height: calc(var(--spinner-size, 64px) / 100 * 75);
  width: calc(var(--spinner-size, 64px) / 100 * 75);
  border-radius: 50%;
  object-fit: cover;
  position: absolute;
  z-index: 02;
	object-position: center;
}
.loading-screen p{
  font-family: var(--font-family, sans-serif);
  color: var(--text-color, white);
  opacity: .5;
  font-weight: 300;
}
@keyframes spin {
  100% {
    transform: rotate(360deg);
  }
}
    `;

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
$("body").append ( `
<div id="MainFrame">
    <div class="Loading">
<div class="dplusloading">
<div class="loading-screen" id="loading-screen">
  <div class="spinner-container">
    <img src="https://i.imgur.com/TZ2JFe8.png"/>
    <div class="spinner"></div>
  </div>
  <p>Loading Discord++</p>
</div>

<h1 style="font-weight: normal; margin: 0;">User profile picture loader</h1>
<p style="font-weight: normal; margin: 0; opacity: .5;">You can use this template for any websites, just copy the code and adapt to your website. Feel free to like the pen !</p>

<h3 style="font-weight: normal; margin: 0; opacity: .75; position: fixed; bottom: 15px;">By Lolou's Studio on Codepen</h3>
  </div>
 </div>
</div>
` );