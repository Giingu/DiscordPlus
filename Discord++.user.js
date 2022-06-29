// ==UserScript==
// @name Energized Discord++ | Take your discord web experience to the next level
// @version 1.2.8
// @iconURL   https://i.ibb.co/7znt13j/30162036.png
// @namespace https://greasyfork.org/en/users/735799
// @license      MIT
// @updateURL    https://github.com/FoxsCode/DiscordPlus/raw/main/Discord%2B%2B.user.js
// @downloadURL  https://github.com/FoxsCode/DiscordPlus/raw/main/Discord%2B%2B.user.js
// @name:es Energized Discord++ | Lleva tu experiencia de discord web al siguiente nivel
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
// @author @Giingu
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
// @connect      cdn.jsdelivr.net
// @connect      discord.com
// @connect      cdn.discordapp.com
// @connect      media.discordapp.net
// @connect      images-ext-1.discordapp.net
// @connect      images-ext-2.discordapp.net
// @grant        unsafeWindow
// @grant        GM_registerMenuCommand
// @grant        GM.registerMenuCommand
// @grant        GM_unregisterMenuCommand
// @grant        GM_getResourceURL
// @grant        GM_getResourceText
// @grant        GM_xmlhttpRequest
// @grant        GM.setValue
// @grant        GM.getValue
// @grant        GM_log
// @grant        GM_info
// @grant        GM_download
// @grant        GM_setClipboard
// @grant GM_addStyle
// @match        https://twitter.com/*
// @match        https://tweetdeck.twitter.com/*
// @match        https://discordapp.com/activ*
// @match        https://discordapp.com/channel*
// @match        https://discord.com/activ*
// @match        https://discord.com/channel*
// @match        https://discord.com/channels/*
// @match        https://discord.com/*
// @require      https://cdn.jsdelivr.net/npm/@violentmonkey/dom@1
// @require      https://greasyfork.org/scripts/21927-arrive-js/code/arrivejs.js?version=198809
// @require      https://raw.githubusercontent.com/uzairfarooq/arrive/master/minified/arrive.min.js
// @require      http://code.jquery.com/jquery-latest.js
// @require      https://code.jquery.com/ui/1.12.1/jquery-ui.min.js
// @require      https://cdn.jsdelivr.net/lodash/4.17.2/lodash.min.js
// @require      https://code.jquery.com/jquery-3.1.1.min.js
// @require      https://code.jquery.com/jquery-3.5.1.min.js
// @require      https://code.jquery.com/jquery-3.6.0.min.js
// @antifeature  tracking
// ==/UserScript==
/* jshint esversion: 6 */
/* require-jsdoc  */
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||| @grant compatibility |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
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

/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||| Context Menu Extended ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
(function() {
	'use strict';

	const console = {
		log: GM_log
	};

	class DiscordContextMenuExtender {

		constructor() {
			this.compatibilityItems = ['ClipboardItem', 'MutationObserver'];
			this.currentElement = null;
			this.style = `.my-focused{background-color:var(--brand-experiment-560);color:#fff;} .my-focused > *{color:#fff !important;}`;
		}

		cc(tag, options = {}, parent = false, init = undefined) {
			const children = options.children || [];
			delete options.children;
			const element = Object.assign(document.createElement(tag), options);
			for (const child of children) element.appendChild(child);
			if (typeof init == 'function') init(element);
			return parent && parent.nodeType === Node.ELEMENT_NODE ? parent.appendChild(element) : element;
		}

		ss(selector, searchIn = document, all = false) {
			return all ? searchIn.querySelectorAll(selector) : searchIn.querySelector(selector);
		}

		checkForСompatibility() {
			for (let item of this.compatibilityItems) {
				if (!(item in unsafeWindow)) return false;
			}
			return true;
		}

		init() {
			if (!this.checkForСompatibility()) return alert('Sorry, your browser does not support this feature');
			document.addEventListener('DOMContentLoaded', this.onDOMContentLoaded.bind(this));
			unsafeWindow.addEventListener('pointerdown', this.onPointerDown.bind(this));
			this.shutDownConsole();
			this.setTriggerOnElement('#message', 'addedNodes', this.onContextMenu.bind(this));
		}

		onDOMContentLoaded() {
			this.addStyles();
		}

		addStyles() {
			this.cc('style', {
				textContent: this.style
			}, document.head);
		}

		shutDownConsole() {
			for (const key in Object.getOwnPropertyDescriptors(unsafeWindow.console)) unsafeWindow.console[key] = () => {};
		}

		onPointerDown(e) {
			if (e.which == 3) this.currentElement = e.target;
		}

		onContextMenu(menu) {
			const currentMessageBlock = this.currentElement.closest('[id*="chat-messages"]');
			const media = this.currentElement.closest('[class*=embedMedia]') || this.currentElement.closest('[class*="messageAttachment"]');
			const group = this.ss('[role="group"]', menu, true)[1];

			if (media !== null) {
				let mediaType;
				if (mediaType = this.ss('img', media)) {
					group.after(this.cc('div', {
						role: "group",
						className: this.ss('[role="group"]', menu, true).className,
						children: [
							this.generateSplitLine(),
							this.generateContextButton(mediaType, menu, group, 'Copy Image', async() => {
								await this.copyImage(mediaType);
								menu.remove();
							}),
							this.generateContextButton(mediaType, menu, group, 'Save Image', async() => {
								await this.downloadImage(mediaType);
								menu.remove();
							}),
							this.generateSplitLine(),
							this.generateContextButton(mediaType, menu, group, 'Copy Link', () => {
								GM_setClipboard(this.getFullOfDiscordImage(mediaType.src).split('?')[0]);
								menu.remove();
							}),
							this.generateContextButton(mediaType, menu, group, 'Open Link', async() => {
								window.open(this.getFullOfDiscordImage(mediaType.src).split('?')[0], '_blank');
								menu.remove();
							})
						]
					}));
					this.fixMenuPosition(menu);
				} else if ((mediaType = this.ss('video:not([aria-label="GIF"])', media))) {
					group.after(this.cc('div', {
						role: "group",
						className: this.ss('[role="group"]', menu, true).className,
						children: [
							this.generateSplitLine(),
							this.generateContextButton(mediaType, menu, group, 'Copy Link', () => {
								GM_setClipboard(this.getFullOfDiscordImage(mediaType.src).split('?')[0]);
								menu.remove();
							}),
							this.generateContextButton(mediaType, menu, group, 'Open Link', async() => {
								window.open(this.getFullOfDiscordImage(mediaType.src).split('?')[0], '_blank');
								menu.remove();
							})
						]
					}));
					this.fixMenuPosition(menu);
				} else if ((mediaType = this.ss('video[aria-label="GIF"]', media))) {
					group.after(this.cc('div', {
						role: "group",
						className: this.ss('[role="group"]', menu, true).className,
						children: [
							this.generateSplitLine(),
							this.generateContextButton(mediaType, menu, group, 'Copy Link', () => {
								GM_setClipboard(this.getFullOfDiscordImage(mediaType.src).split('?')[0]);
                                menu.remove();
							}),
							this.generateContextButton(mediaType, menu, group, 'Open Link', async() => {
								window.open(this.getFullOfDiscordImage(mediaType.src).split('?')[0], '_blank');
								menu.remove();
							})
						]
					}));
					this.fixMenuPosition(menu);
				} else {
					console.log('unknown type');
				}
			} else {
				console.log('null');
			}
		}

		fixMenuPosition(menu) {
			const rectM = menu.getBoundingClientRect();
			if (rectM.y + rectM.height > window.innerHeight) {
				const def = rectM.y + rectM.height - window.innerHeight;
				const top = menu.parentNode.style.top.replace('px', '');
				menu.parentNode.style.top = top - def + 'px';
			}
		}

		generateSplitLine() {
			return this.cc('div', {
				role: 'separator',
				style: 'box-sizing:border-box;margin:4px;border-bottom:1px solid var(--background-modifier-accent);'
			});
		}

		generateContextButton(mediaType, menu, group, text, onclick) {
			return this.cc('div', {
				role: "group",
				children: [
					this.cc('div', {
						className: group.children[1].className,
						children: [
							this.cc('div', {
								textContent: text,
								style: group.children[1].firstChild.className,
							})
						],
						onclick: onclick,
						onmouseenter: function() {
							const focused = menu.querySelector('[class*="focused"]');
							if (focused) focused.classList.remove(Array.from(focused.classList).find(_class => _class.startsWith('focused')));
							this.classList.add('my-focused');
						},
						onmouseleave: function() {
							this.classList.remove('my-focused');
						}
					})
				]
			})
		}

		setTriggerOnElement(selector, action, callback, once, searchIn) {
			const observer = new MutationObserver(function(mutations) {
				for (const mutation of mutations) {
					const nodes = mutation[action] || [];
					for (const node of nodes) {
						const element = node.matches && node.matches(selector) ? node : (node.querySelector ? node.querySelector(selector) : null);
						if (element) {
							if (once) {
								observer.disconnect();
								return callback(element);
							} else {
								callback(element);
							}
						}
					}
				}
			});

			observer.observe(searchIn || document, {
				attributes: false,
				childList: true,
				subtree: true
			});

			return observer;
		}

		async downloadImage(image) {
			const blob = await this.requestImage(this.getFullOfDiscordImage(image.src), 'blob');
			const dataURL = await this.blobToBase64(blob);
			this.cc('a', {
				href: dataURL,
				download: image.src.split('/').pop().split('?')[0]
			}).click();
		}

		async imageToPNGBlob(blob) {
			const dataURL = await this.blobToBase64(blob);
			console.log(dataURL);
		}

		blobToBase64(blob) {
			return new Promise((resolve) => {
				const reader = new FileReader();
				reader.onloadend = () => resolve(reader.result);
				reader.readAsDataURL(blob);
			});
		}

		async copyImage(image) {
			await (this.getExtension(image.src) != 'png' ? this.copyNonPNGImage(image) : this.copyPNGImage(image));
		}

		async copyNonPNGImage(image) {
			const blob = await this.requestImage(image.src, 'blob');
			const dataURL = await this.blobToBase64(blob);
			const pngBlob = await this.imageDataURLToPNGBlob(dataURL);
			this.copyImageFromBlob(pngBlob);
		}

		imageDataURLToPNGBlob(dataURL) {
			return new Promise(resolve => {
				const img = this.cc('img', {
					src: dataURL,
					onload: () => {
						const canvas = this.cc('canvas', {
							style: 'position:fixed;top:0px;left:0px;z-index:1000;',
							width: img.width,
							height: img.height
						});
						const context = canvas.getContext('2d');
						context.drawImage(img, 0, 0, img.width, img.height);
						canvas.toBlob(blob => resolve(blob));
					}
				});
			});
		}

		async copyPNGImage(image) {
			const imageBlob = await this.requestImage(this.getFullOfDiscordImage(image.src), 'blob');
			this.copyImageFromBlob(imageBlob);
		}

		copyImageFromBlob(blob) {
			const item = new unsafeWindow.ClipboardItem({
				"image/png": blob
			});
			navigator.clipboard.write([item]);
		}

		requestImage(imageURL, responseType) {
			return new Promise(function(resolve, reject) {
				GM_xmlhttpRequest({
					methods: "GET",
					responseType: responseType,
					url: imageURL,
					onload: function(data) {
						resolve(data.response);
					},
					onerror: function(e) {
						reject(e);
					}
				});
			});
		}

		getFullOfDiscordImage(imageURL) {
			return imageURL.replace('media.discordapp.net', 'cdn.discordapp.com');
		}

		getNoneDefaultStyle(node) {
			const styles = [];
			const supportElement = this.cc(node.tagName, {
				visible: false
			}, document.body);
			const elementStyles = window.getComputedStyle(node);
			const defaultStyles = window.getComputedStyle(supportElement);
			for (const key of elementStyles) {
				if (elementStyles[key] !== defaultStyles[key] && defaultStyles[key] !== '') styles.push([key, elementStyles[key]]);
			}
			supportElement.remove();
			return styles;
		}

		packInlineStyle(style) {
			return style.reduce(function(pre, cur) {
				return pre + ";" + cur[0] + ":" + cur[1];
			}, "") + ";";
		}

		getExtension(filename) {
			return filename.split('.').pop().split('?')[0];
		}
	}

	const DCME = new DiscordContextMenuExtender();
	DCME.init();

})();

/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||| Verification Bypass ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/

(function() {
    'use strict';
    setTimeout(function(){
        document.querySelector('[aria-label="VERIFICATION"]').remove();
        document.querySelector("#app-mount > div:nth-of-type(2)").children[0].children[1].children[0].style = ""
    }, 15000);
})();

/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||| Energized Discord Theme ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/

(function() {
let css = `
/*
    SETTINGS
*/
/* Enhancements | Modal Blur - Blurs the black tinted background behind modals like image previews if enabled */
.backdrop-2ByYRN,.backdropWithLayer-3_uhz4{backdrop-filter:blur(var(--background-blur-intensity))}
/* Enhancements | Translucent - Makes discord transparent (works best with Glasscord and Acryllic) */
:root{--glasscord-win-blur: blurbehind !important;--glasscord-macos-vibrancy: fullscreen-ui !important;--glasscord-linux-blur: true !important}:root{--blur0: clamp(0px, var(--blur-strength), 26px);--blur-bg-0: rgba(0,0,0,0.05);--blur-bg-1: rgba(0,0,0,0.10);--blur-bg-2: rgba(0,0,0,0.15);--blur-bg-3: rgba(0,0,0,0.20);--blur-bg-4: rgba(0,0,0,0.25);--blur-bg-5: rgba(0,0,0,0.30);--blur-bg-6: rgba(0,0,0,0.35);--blur-bg-7: rgba(0,0,0,0.40);--blur-bg-8: rgba(0,0,0,0.45);--blur-bg-9: rgba(0,0,0,0.50);--text-filter: contrast(300%)}body{background-image:var(--wallpaper);background-size:cover;background-position:center}#app-mount{margin:var(--window-border);width:calc(100% - var(--window-border) * 2);height:calc(100% - var(--window-border) * 2);backdrop-filter:blur(var(--blur0)) saturate(125%) brightness(125%);background:rgba(0,0,0,.45);background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAieSURBVGhDddqBkVXHDoTh3cVOwmlAGhAGpGGHYdIwYUAchMHTN7x/rL2FVSVL02q15syZPcaLn//+++/fn8Y+f/78NPnT27dvn56fn08Os/727dutwfjXr19vvV6m9+PHj7eHbV56capvPaZWLpa/e/fuxLTZqf348eP3SY6P2IlTO7naNBxsBl88Xj0crwjXq0fUl8N43PKtVb88nXjhe76akzgA0TZT0VpjwvHU21R8663TwM2BbXzz64fz5vGd4+7eai+fPn06rzkb8AkmetXyGXxqIoypj9C5AnwED85wujbpxEsTHsZo2Ud72f1dp0d+uvKXBDJNmsP2ptoAa4NtTGS4emFs11haMA+PW8/eB6xZ9pjBuDq3XzOeB/Rq7sYSrcm6jRjsh9mbib/75Ey/AXtjnSDDM1wdFq8+1j70dSgM1izcW3dfBzzuvk3h1R0OH42Dqct3xFHDi797OU1eTa/1nifC1eOrq21vrnrc8/l1KhPPk03h5tM0Pf+aE5iN3ByXbZ7T6sTSYzPsniBTk/c2aeD2hpqfVrp64mXyN//8888biz/++OPp/fv3h/z9+/enP//88+nDhw8H0/jXX3+dGl5COHJD4V++fDn8DIYDU2u4aEM9mHmc6TFXnweB48PjlTOz5xnOfb2vuWsAsw4TN5bD+GzmrGfw5RV/hYlw2mbr5/BcPTwN/Hj1cuuX+cc9YSfUqcE8rbcQJg/DZXgMNkNOznY/PA1xHubms6ET8fhs+vDlGUxP+7Nuvhz3RdJmCMgbrLnGLV6NtQFOHO4B9LC0rRvK4fUwmh4q27Px+qNPOKMBE+8bQf7VGyjyeJpxPBxnPWgaRdZmW4vl9dHec/vznl41D2Cutciri+er1QZF3r8rYDaE2KC9AWuulni9cePVx/BaNxMns87q9bZoq7W2t3rfzBfgjYUvAcDXhVkjMpgN9TUh5Kuhry/dHs7qoUErHqyaL2EazaeLx1lfqX2gm6PnfCnn9O5P/hDPV0WcUzu5r4M1DgwPLqqFFatXE2E0qnF6YXJY8+uLGy8dWFq4+p81uGeebgrnCYc8tZ+vdRpePb21ems9TsuaqacBs2ZdA/bYM5t5xWXWNOLFSbc3lL34hwJxD2QTEYttnpi8H0DrfvgYrGF04ofJmbWamfU+auhn4QzWHtOKh/jqdfHHa8Hj8HrEHGfkjuvj8rjpxAmX02yWGC5Xk+9++O6X++m/DeUaFPmuh53G/wsS2xvaPem0CfVimtbxcWm1Tq8ZsDTjWJvtFR2SpjaUSAMbXtyCHCamtYfGS/NRj3cI8vbCt9b2ZtbLz79HpjD5z/sm39F9ZdN0/N7Jsen95c9I/dZZP2uZ+sbSmg2+wkXeXLU4TH72OILniTzQNByHWefW8HiiE+H1OalyuB4xzTB5mmF64+2T371pma0nLX72JAG2yYYk8Lg2IH5rnAZXl9djHaZPPMMnx9+YmGbY1qyvtZoZ5z91B7xXqJxP7dU1kYte6wicqzDClwuXj/DVe7Q9i169RSbHo0c/bboZztZBuk/a6XUicjVRjU/f5e4+uVr83VMu4tAXq+sJk4el1UzeG4hXz0tPL3bi/ZGZDfmeXGtmjVvfDDk1fXDmjaVfjlcvq5fBcj1xqzN7Y7DzJsbMPf9m7wEaoCDvAYjK+1KIDWM429LqwfaXjTWPNYfjwJvD6nuM7YvRN+y8ogHPaxJH7NXrhcebk7hXpXq4XOxqdg3ipm8t7uu08a0fT14MLzfr/ocVEwe8J8pa9xb4iNxTriaf4bfXCZ+TGiviMPV46YvWYfrpMfryzWfy7MWdM0iR758PRCIECPXKDZnTOVGNxdtGr03sDdDH5TBre+h62UNabZYOTj1pqcPOr0xZBKaJKG9QedYpszamvg8FznYvHo659fWw1eN2yI+WHi4/c0bw3L1Z3DtnPcI3cnXrMH2wavUX00wHpsd69nJrsPriqsOLm1N978P6WXGS85RTPLETkrMROdHTM2uOV95Jcn2je7j79Ioz/L4VGqyauWr1s3L1anrD9D57qr2hBJmGHqYG6zaQGGv9+PBi1yP9jH6z2O591JKL+PIO2hr3N0liCW9iFi9/rDeMd4JiJ595YG9+f1TEZqpbi+bQlYvZ1pPjIdx7zafwKrqLojc3fa/ubB5OJ74c1jpvlp6N45qhLuoLK9ajlk4z79+PeKoBj8udEJw9rkf4YJ3UDLl395zOmLy63nrgTM7hLH06s7H7JuHx6P2X/efPCAHW5kSYaAje3lQ5a0NMzcbE5sRt89ZqIh4rsseH0NfDXl6vcQTPa+LW8Gq7PqL3NccVYWJ43PjV04bTTD9MpFFMMw4P2/m5WiMw+U/rlbJOLIM7AT4C961lnY6aPvVOWq81l3fCs5kTt1Zvjl5cvH3daG67f2PF2gBvEKwN9hAswW1qDdDfJuY0D4bfBvF8uRgs2/PwaVSH95BMzcOdw/DKPMwI3GsynBOn4dT2Op7Xqiaqi+U45Xp49dZq9XOacFj55obRxtk5P/9hNeBwf16rKZ4TnOJ97epcDY7HrOF4ToqWeidavxhWD15m3Ww63kT70pumtchxWbm/P3yj0d/DRfLb7jbWb8qJ+C16v4WHcRzcNqhOr3V9eBlNmN/s48uZ2Kz+ftJv7PtNvhqj3WyGA3x1BeRzCvcaWON0nWDWRVg9sNZzijffvPrSCKffDL1cncPxYfXFjzca//6+Vmxoza3F6hrD5cS26N5EDkuHtxG5WvFXc6vTac6OeO7g2WBNyHtgm9cEF+PI1R8fMDekgT0MXK8114vzmLcW065P3DV+/hg/wLlvIusTx2f4/cT1+WSiNRuNE/HgtPB9XuvjcrV+hrZVF5vdB4DvPvuzL1j7vv/jGat5TuVEZFjiTK6ZGRwvrKF5G0wbJs+t9+Zgeral8zinvX779u3pf6Ar4821qINrAAAAAElFTkSuQmCC);background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAieSURBVGhDddqBkVXHDoTh3cVOwmlAGhAGpGGHYdIwYUAchMHTN7x/rL2FVSVL02q15syZPcaLn//+++/fn8Y+f/78NPnT27dvn56fn08Os/727dutwfjXr19vvV6m9+PHj7eHbV56capvPaZWLpa/e/fuxLTZqf348eP3SY6P2IlTO7naNBxsBl88Xj0crwjXq0fUl8N43PKtVb88nXjhe76akzgA0TZT0VpjwvHU21R8663TwM2BbXzz64fz5vGd4+7eai+fPn06rzkb8AkmetXyGXxqIoypj9C5AnwED85wujbpxEsTHsZo2Ud72f1dp0d+uvKXBDJNmsP2ptoAa4NtTGS4emFs11haMA+PW8/eB6xZ9pjBuDq3XzOeB/Rq7sYSrcm6jRjsh9mbib/75Ey/AXtjnSDDM1wdFq8+1j70dSgM1izcW3dfBzzuvk3h1R0OH42Dqct3xFHDi797OU1eTa/1nifC1eOrq21vrnrc8/l1KhPPk03h5tM0Pf+aE5iN3ByXbZ7T6sTSYzPsniBTk/c2aeD2hpqfVrp64mXyN//8888biz/++OPp/fv3h/z9+/enP//88+nDhw8H0/jXX3+dGl5COHJD4V++fDn8DIYDU2u4aEM9mHmc6TFXnweB48PjlTOz5xnOfb2vuWsAsw4TN5bD+GzmrGfw5RV/hYlw2mbr5/BcPTwN/Hj1cuuX+cc9YSfUqcE8rbcQJg/DZXgMNkNOznY/PA1xHubms6ET8fhs+vDlGUxP+7Nuvhz3RdJmCMgbrLnGLV6NtQFOHO4B9LC0rRvK4fUwmh4q27Px+qNPOKMBE+8bQf7VGyjyeJpxPBxnPWgaRdZmW4vl9dHec/vznl41D2Cutciri+er1QZF3r8rYDaE2KC9AWuulni9cePVx/BaNxMns87q9bZoq7W2t3rfzBfgjYUvAcDXhVkjMpgN9TUh5Kuhry/dHs7qoUErHqyaL2EazaeLx1lfqX2gm6PnfCnn9O5P/hDPV0WcUzu5r4M1DgwPLqqFFatXE2E0qnF6YXJY8+uLGy8dWFq4+p81uGeebgrnCYc8tZ+vdRpePb21ems9TsuaqacBs2ZdA/bYM5t5xWXWNOLFSbc3lL34hwJxD2QTEYttnpi8H0DrfvgYrGF04ofJmbWamfU+auhn4QzWHtOKh/jqdfHHa8Hj8HrEHGfkjuvj8rjpxAmX02yWGC5Xk+9++O6X++m/DeUaFPmuh53G/wsS2xvaPem0CfVimtbxcWm1Tq8ZsDTjWJvtFR2SpjaUSAMbXtyCHCamtYfGS/NRj3cI8vbCt9b2ZtbLz79HpjD5z/sm39F9ZdN0/N7Jsen95c9I/dZZP2uZ+sbSmg2+wkXeXLU4TH72OILniTzQNByHWefW8HiiE+H1OalyuB4xzTB5mmF64+2T371pma0nLX72JAG2yYYk8Lg2IH5rnAZXl9djHaZPPMMnx9+YmGbY1qyvtZoZ5z91B7xXqJxP7dU1kYte6wicqzDClwuXj/DVe7Q9i169RSbHo0c/bboZztZBuk/a6XUicjVRjU/f5e4+uVr83VMu4tAXq+sJk4el1UzeG4hXz0tPL3bi/ZGZDfmeXGtmjVvfDDk1fXDmjaVfjlcvq5fBcj1xqzN7Y7DzJsbMPf9m7wEaoCDvAYjK+1KIDWM429LqwfaXjTWPNYfjwJvD6nuM7YvRN+y8ogHPaxJH7NXrhcebk7hXpXq4XOxqdg3ipm8t7uu08a0fT14MLzfr/ocVEwe8J8pa9xb4iNxTriaf4bfXCZ+TGiviMPV46YvWYfrpMfryzWfy7MWdM0iR758PRCIECPXKDZnTOVGNxdtGr03sDdDH5TBre+h62UNabZYOTj1pqcPOr0xZBKaJKG9QedYpszamvg8FznYvHo659fWw1eN2yI+WHi4/c0bw3L1Z3DtnPcI3cnXrMH2wavUX00wHpsd69nJrsPriqsOLm1N978P6WXGS85RTPLETkrMROdHTM2uOV95Jcn2je7j79Ioz/L4VGqyauWr1s3L1anrD9D57qr2hBJmGHqYG6zaQGGv9+PBi1yP9jH6z2O591JKL+PIO2hr3N0liCW9iFi9/rDeMd4JiJ595YG9+f1TEZqpbi+bQlYvZ1pPjIdx7zafwKrqLojc3fa/ubB5OJ74c1jpvlp6N45qhLuoLK9ajlk4z79+PeKoBj8udEJw9rkf4YJ3UDLl395zOmLy63nrgTM7hLH06s7H7JuHx6P2X/efPCAHW5kSYaAje3lQ5a0NMzcbE5sRt89ZqIh4rsseH0NfDXl6vcQTPa+LW8Gq7PqL3NccVYWJ43PjV04bTTD9MpFFMMw4P2/m5WiMw+U/rlbJOLIM7AT4C961lnY6aPvVOWq81l3fCs5kTt1Zvjl5cvH3daG67f2PF2gBvEKwN9hAswW1qDdDfJuY0D4bfBvF8uRgs2/PwaVSH95BMzcOdw/DKPMwI3GsynBOn4dT2Op7Xqiaqi+U45Xp49dZq9XOacFj55obRxtk5P/9hNeBwf16rKZ4TnOJ97epcDY7HrOF4ToqWeidavxhWD15m3Ww63kT70pumtchxWbm/P3yj0d/DRfLb7jbWb8qJ+C16v4WHcRzcNqhOr3V9eBlNmN/s48uZ2Kz+ftJv7PtNvhqj3WyGA3x1BeRzCvcaWON0nWDWRVg9sNZzijffvPrSCKffDL1cncPxYfXFjzca//6+Vmxoza3F6hrD5cS26N5EDkuHtxG5WvFXc6vTac6OeO7g2WBNyHtgm9cEF+PI1R8fMDekgT0MXK8114vzmLcW065P3DV+/hg/wLlvIusTx2f4/cT1+WSiNRuNE/HgtPB9XuvjcrV+hrZVF5vdB4DvPvuzL1j7vv/jGat5TuVEZFjiTK6ZGRwvrKF5G0wbJs+t9+Zgeral8zinvX779u3pf6Ar4821qINrAAAAAElFTkSuQmCC),linear-gradient(to bottom, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.1) 100%)}.lookOutlined-3sRXeN:not(.colorGrey-2DXtkV){background:rgba(255,255,255,.2)}.spine-29OFwR,.placeholder-1_mJY1,.slateTextArea-27tjG0 span[data-slate-string=true]{filter:var(--text-filter)}.spine-29OFwR{color:var(--text-muted)}.theme-dark .descriptionWrapper-eOmU90,.theme-light .descriptionWrapper-eOmU90,.theme-dark .markValue-2U_-UG,.theme-light .markValue-2U_-UG{color:var(--text-muted)}.expandedFolderBackground-1cujaW{background-color:var(--blur-bg-4)}.members-3WRCEx,.scroller-WSmht3,.privateChannels-oVe7HL{background-color:var(--blur-bg-3)}.sidebar-1tnWFu .container-1NXEtd{background-color:var(--blur-bg-3)}.theme-dark .connection-107AGH,.theme-light .connection-107AGH,.theme-dark .accountList-305sx3,.theme-light .accountList-305sx3,.theme-dark .searchResultsWrap-5RVOkx,.theme-light .searchResultsWrap-5RVOkx,.theme-dark .emptyCard-KDifrB,.theme-light .emptyCard-KDifrB,.theme-dark .wrapper-2RrXDg,.theme-light .wrapper-2RrXDg,.theme-dark .nowPlayingColumn-1eCBCN .outer-2JOHae,.theme-light .nowPlayingColumn-1eCBCN .outer-2JOHae{background-color:var(--blur-bg-3)}.theme-dark .container-3i3IzO,.theme-light .container-3i3IzO,.theme-dark .card-PQEqCK,.theme-light .card-PQEqCK,.theme-dark .accountBtn-1YkMgV .accountBtnInner-3XK70s,.theme-light .accountBtn-1YkMgV .accountBtnInner-3XK70s,.theme-dark .settingCard-xZSDjS,.theme-light .settingCard-xZSDjS,.theme-dark .cardPrimary-3qRT__,.theme-light .cardPrimary-3qRT__,.theme-dark .cardPrimaryEditable-2mz_3i,.theme-light .cardPrimaryEditable-2mz_3i,.theme-dark .accountProfileCard-lbN7n-,.theme-light .accountProfileCard-lbN7n-,.theme-dark .codeRedemptionRedirect-3SBiCp,.theme-light .codeRedemptionRedirect-3SBiCp,.theme-dark .paymentPane-ut5qKZ,.theme-light .paymentPane-ut5qKZ,.theme-dark .cardPrimaryOutline-1ofwVz,.theme-light .cardPrimaryOutline-1ofwVz,.theme-dark .premiumSubscriptionAccountCredit-1UInYJ,.theme-light .premiumSubscriptionAccountCredit-1UInYJ,.theme-dark .guilds-35jvvn .cardWrapper-CyvwQv,.theme-light .guilds-35jvvn .cardWrapper-CyvwQv,.theme-dark .detailsBlock-FoDTGA,.theme-light .detailsBlock-FoDTGA,.theme-dark .expandedInfo-1W31i3,.theme-light .expandedInfo-1W31i3,.theme-dark .feature-2IUcBI,.theme-light .feature-2IUcBI,.theme-dark .searchResult-O9NDji,.theme-light .searchResult-O9NDji,.theme-dark .reaction-2A2y9y,.theme-light .reaction-2A2y9y,.theme-dark .section-3G9aLW,.theme-light .section-3G9aLW,.theme-dark .wrapperAudio-1Bzv_Z,.theme-light .wrapperAudio-1Bzv_Z,.theme-dark .embedFull-1HGV2S,.theme-light .embedFull-1HGV2S{background-color:var(--blur-bg-4)}.theme-dark .markup-eYLPri code,.theme-light .markup-eYLPri code,.theme-dark .background-3d_SjE,.theme-light .background-3d_SjE,.theme-dark .hoverablePayment-lE1s4t:hover,.theme-light .hoverablePayment-lE1s4t:hover,.theme-dark .searchHeader-1r_ZSh,.theme-light .searchHeader-1r_ZSh,.theme-dark .panels-3wFtMD>.container-YkUktl>.flex-2S1XBF:hover,.theme-light .panels-3wFtMD>.container-YkUktl>.flex-2S1XBF:hover,.theme-dark .peopleListItem-u6dGxF.active-2UF8Zh,.theme-light .peopleListItem-u6dGxF.active-2UF8Zh,.theme-dark .peopleListItem-u6dGxF:hover,.theme-light .peopleListItem-u6dGxF:hover,.theme-dark .panels-3wFtMD,.theme-light .panels-3wFtMD,.theme-dark .container-ZMc96U.themed-Hp1KC_,.theme-light .container-ZMc96U.themed-Hp1KC_{background-color:var(--blur-bg-8)}.theme-dark .connectionHeader-2rV1ze,.theme-light .connectionHeader-2rV1ze,.theme-dark .sidebarRegion-1VBisG,.theme-light .sidebarRegion-1VBisG,.theme-dark .container-1-ERn5:not(.hasBanner-2IrYih) .header-3OsQeK,.theme-light .container-1-ERn5:not(.hasBanner-2IrYih) .header-3OsQeK,.theme-dark .searchBar-3TnChZ,.theme-light .searchBar-3TnChZ{background-color:var(--blur-bg-5)}.theme-dark .paginator-1eqD2g,.theme-light .paginator-1eqD2g{background:transparent}.privateChannels-oVe7HL{margin-bottom:0;padding-bottom:0}.listItem-GuPuDH{--background-tertiary: transparent}.sidebar-1tnWFu,.folder-1hbNCn,.folder-1hbNCn.hover-qTxTR_,.standardSidebarView-E9Pc3j,.bg-1QIAus,.app-2CXKsg,.appMount-2yBXZl,body,.chat-2ZfjoI,.threadSidebar-1o3BTy,.scroller-29cQFV,.container-36u7Lw,.nowPlayingColumn-1eCBCN,.container-1oAagU,.scroller-2XLwLg,.header-2EadGG,.scroller-1TOeMq,.layer-86YKbF:not(.baseLayer-W6S8cY),.members-3WRCEx>div{background-color:transparent}.theme-dark .fieldList-in8WkP,.theme-light .fieldList-in8WkP,.theme-dark .sidebarRegionScroller-FXiQOh,.theme-light .sidebarRegionScroller-FXiQOh,.theme-dark .sidebar-nqHbhN,.theme-light .sidebar-nqHbhN,.theme-dark .contentRegion-3HkfJJ,.theme-light .contentRegion-3HkfJJ,.theme-dark .header-6h98Y_,.theme-light .header-6h98Y_,.theme-dark .container-36u7Lw,.theme-light .container-36u7Lw,.theme-dark .channelName-3w2Y3c,.theme-light .channelName-3w2Y3c,.theme-dark .panels-3wFtMD>.container-YkUktl>.flex-2S1XBF,.theme-light .panels-3wFtMD>.container-YkUktl>.flex-2S1XBF,.theme-dark .wrapper-15CKyy,.theme-light .wrapper-15CKyy,.theme-dark .wrapper-22ayhK,.theme-light .wrapper-22ayhK,.theme-dark .container-2cd8Mz,.theme-light .container-2cd8Mz{background-color:transparent}.messagesWrapper-RpOMA3::after{background:transparent}.theme-dark .form-3gdLxP:before,.theme-light .form-3gdLxP:before{background:transparent}.theme-dark .children-3xh0VB::after,.theme-light .children-3xh0VB::after,.wrapper-1_HaEi,.scroller-3X7KbA,.circleIconButton-1QV--U,.childWrapper-1j_1ub{background:transparent}.scroller-3iiyhZ{margin-bottom:70px}.container-36u7Lw{position:fixed;bottom:0;width:394px;margin:auto 0}.layer-86YKbF.animating-1rIrGV:first-child:not(:last-child){--opq: none}.vpc-shiki{background-color:transparent !important}
/* Functions | Collapsing channels list - Channels list collapses and uncollapses on hover, giving you more room to read */
.sidebar-1tnWFu{transition:.2s ease .175s;width:0px;min-width:0px;resize:none}.sidebar-1tnWFu .container-1zzFcN,.sidebar-1tnWFu .panel-2ZFCRb{padding:0;transition:.2s ease .175s}.sidebar-1tnWFu .button-12Fmur,.sidebar-1tnWFu .badge-3RBqXG{width:0;transition:.2s ease .175s}.sidebar-1tnWFu .searchBar-3TnChZ,.sidebar-1tnWFu .badge-3RBqXG{padding:0;transition:.2s ease .175s}.sidebar-1tnWFu .button-38aScr{padding:0;transition:.2s ease .175s}.sidebar-1tnWFu .icon-10cLkJ{opacity:0;transition:.2s ease-in-out .175s}.sidebar-1tnWFu .container-YkUktl .button-38aScr,.sidebar-1tnWFu .container-YkUktl .button-12Fmur{padding:unset;width:32px}.sidebar-1tnWFu .container-YkUktl>.flex-2S1XBF{opacity:0;pointer-events:none;transition:.2s ease-in-out .175s}.wrapper-1_HaEi:hover+.base-2jDfDU>.content-1SgpWY>.sidebar-1tnWFu,.sidebar-1tnWFu:hover{width:var(--channels-width)}.wrapper-1_HaEi:hover+.base-2jDfDU>.content-1SgpWY>.sidebar-1tnWFu .container-1zzFcN,.wrapper-1_HaEi:hover+.base-2jDfDU>.content-1SgpWY>.sidebar-1tnWFu .panel-2ZFCRb,.sidebar-1tnWFu:hover .container-1zzFcN,.sidebar-1tnWFu:hover .panel-2ZFCRb{padding:8px}.wrapper-1_HaEi:hover+.base-2jDfDU>.content-1SgpWY>.sidebar-1tnWFu .button-12Fmur,.sidebar-1tnWFu:hover .button-12Fmur{width:32px}.wrapper-1_HaEi:hover+.base-2jDfDU>.content-1SgpWY>.sidebar-1tnWFu .searchBar-3TnChZ,.sidebar-1tnWFu:hover .searchBar-3TnChZ{padding:0 10px}.wrapper-1_HaEi:hover+.base-2jDfDU>.content-1SgpWY>.sidebar-1tnWFu .button-38aScr,.sidebar-1tnWFu:hover .button-38aScr{padding:2px 16px}.wrapper-1_HaEi:hover+.base-2jDfDU>.content-1SgpWY>.sidebar-1tnWFu .badge-3RBqXG,.sidebar-1tnWFu:hover .badge-3RBqXG{padding:2px;width:14px}.wrapper-1_HaEi:hover+.base-2jDfDU>.content-1SgpWY>.sidebar-1tnWFu .icon-10cLkJ,.sidebar-1tnWFu:hover .icon-10cLkJ{opacity:1}.wrapper-1_HaEi:hover+.base-2jDfDU>.content-1SgpWY>.sidebar-1tnWFu .container-YkUktl .button-12Fmur,.sidebar-1tnWFu:hover .container-YkUktl .button-12Fmur{padding:unset;width:32px}.wrapper-1_HaEi:hover+.base-2jDfDU>.content-1SgpWY>.sidebar-1tnWFu .container-YkUktl>.flex-2S1XBF,.sidebar-1tnWFu:hover .container-YkUktl>.flex-2S1XBF{pointer-events:auto;opacity:1}
/* Functions | Collapsing members list - Members list collapses and uncollapses on hover, giving you more room to read */
.membersWrap-3NUR2t{min-width:25px;width:25px !important}.membersWrap-3NUR2t .members-3WRCEx{width:1px !important}.membersWrap-3NUR2t .members-3WRCEx .member-2gU6Ar{opacity:0}.membersWrap-3NUR2t .members-3WRCEx .membersGroup-2eiWxl{opacity:0}.membersWrap-3NUR2t:hover{width:var(--members-width) !important}.membersWrap-3NUR2t:hover .members-3WRCEx{width:var(--members-width) !important}.membersWrap-3NUR2t:hover .members-3WRCEx .member-2gU6Ar{opacity:1}.membersWrap-3NUR2t:hover .members-3WRCEx .membersGroup-2eiWxl{opacity:1}.membersWrap-3NUR2t{transition:.2s ease .175s}.membersWrap-3NUR2t .members-3WRCEx{transition:.2s ease .175s}.membersWrap-3NUR2t .members-3WRCEx .member-2gU6Ar,.membersWrap-3NUR2t .members-3WRCEx .membersGroup-2eiWxl{transition:.2s ease-in-out .175s}
/* Functions | macOS Buttons - Replaces window buttons with macOS style buttons (Windows) */
.winButton-3UMjdg{width:14px;height:14px;margin:4px;border-radius:11px;position:relative;transition:background-color ease-in-out .1s;filter:none}.winButton-3UMjdg::after{content:"";width:14px;height:14px;display:block;position:fixed;opacity:0;transition:opacity ease-in-out .2s,background-color ease-in-out .1s}.winButton-3UMjdg:focus::after,.winButton-3UMjdg:hover::after{opacity:1}.winButton-3UMjdg svg{width:0;height:0}.winButton-3UMjdg:nth-child(4){background-color:#fac536}.winButton-3UMjdg:nth-child(4)::after{-webkit-mask-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14'%3E%3Crect ry='1' y='6' x='3' height='2' width='8'/%3E%3C/svg%3E");background-color:#7d631b}.winButton-3UMjdg:nth-child(4)::after:focus{background-color:#da9e10}.winButton-3UMjdg:nth-child(4)::after:focus::after{background-color:#6d4f08}.winButton-3UMjdg:nth-child(3){background-color:#39ea49}.winButton-3UMjdg:nth-child(3)::after{-webkit-mask-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14'%3E%3Cpath fill='%231D7525' d='M5.414 3.862L10 8.448V4.862c0-.415-.585-1-1-1zM4 5.276v3.586c0 .416.585 1 1 1h3.586z'/%3E%3C/svg%3E");background-color:#1d7525}.powercord.maximized .winButton-3UMjdg:nth-child(3)::after{-webkit-mask-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14'%3E%3Cpath fill='%231D7525' d='M11.214 6.862H7.819A.821.821 0 017 6.043V2.648l4.214 4.214m-8.428 0h3.395c.45 0 .819.369.819.819v3.395L2.786 6.862'/%3E%3C/svg%3E");background-color:#1d7525}.winButton-3UMjdg:nth-child(3):focus{background-color:#13c11e}.winButton-3UMjdg:nth-child(3):focus::after{background-color:#0a610f}.winButton-3UMjdg:nth-child(2){background-color:#f25056}.winButton-3UMjdg:nth-child(2)::after{-webkit-mask-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14'%3E%3Cpath fill='%2379282B' d='M4.172 4.034a.998.998 0 000 1.414l1.414 1.414-1.414 1.414a.998.998 0 000 1.415.998.998 0 001.414 0L7 8.276l1.414 1.415a.998.998 0 001.414 0 .998.998 0 000-1.415L8.414 6.862l1.414-1.414a.998.998 0 000-1.414.998.998 0 00-1.414 0L7 5.448 5.586 4.034a.998.998 0 00-1.414 0z'/%3E%3C/svg%3E");background-color:#79282b}.winButton-3UMjdg:nth-child(2):focus{background-color:#d52735}.winButton-3UMjdg:nth-child(2):focus::after{background-color:#6b141b}
/* Functions | Channel Icons - Make channels change icon based on what they're called! (eg #github would have a github icon instead of #) */
[aria-label*=github].mainContent-20q_Hp[href^="/channels/"]>div svg>path{d:path("M8.02581 18.2495C8.02581 18.3432 7.91455 18.4182 7.77425 18.4182C7.61461 18.4323 7.50334 18.3573 7.50334 18.2495C7.50334 18.1557 7.61461 18.0808 7.7549 18.0808C7.90003 18.0667 8.02581 18.1417 8.02581 18.2495ZM6.52128 18.0386C6.48741 18.1323 6.58417 18.2401 6.7293 18.2682C6.85508 18.3151 7.00021 18.2682 7.02924 18.1745C7.05827 18.0808 6.96635 17.973 6.82122 17.9308C6.69544 17.898 6.55514 17.9448 6.52128 18.0386ZM8.65956 17.9589C8.51926 17.9917 8.42251 18.0808 8.43702 18.1886C8.45154 18.2823 8.57732 18.3432 8.72245 18.3104C8.86274 18.2776 8.9595 18.1886 8.94498 18.0948C8.93047 18.0058 8.79985 17.9449 8.65956 17.9589ZM11.8428 0C5.13284 0 0 4.93495 0 11.4352C0 16.6326 3.37674 21.0802 8.19997 22.6455C8.8192 22.7533 9.0369 22.383 9.0369 22.0784C9.0369 21.7878 9.02239 20.185 9.02239 19.2008C9.02239 19.2008 5.63597 19.9038 4.92482 17.8043C4.92482 17.8043 4.37332 16.4405 3.57993 16.089C3.57993 16.089 2.47209 15.3532 3.65733 15.3672C3.65733 15.3672 4.86193 15.461 5.5247 16.5764C6.58417 18.3854 8.35962 17.8652 9.05142 17.5559C9.16268 16.806 9.47714 16.2858 9.82545 15.9765C7.12116 15.6859 4.39267 15.3063 4.39267 10.7978C4.39267 9.50904 4.76034 8.86229 5.53438 8.03746C5.4086 7.73283 4.99739 6.47683 5.66016 4.85528C6.67125 4.55065 8.9982 6.12065 8.9982 6.12065C9.96575 5.8582 11.0059 5.72229 12.0363 5.72229C13.0667 5.72229 14.1069 5.8582 15.0744 6.12065C15.0744 6.12065 17.4014 4.54597 18.4124 4.85528C19.0752 6.48152 18.664 7.73283 18.5382 8.03746C19.3123 8.86698 19.7864 9.51372 19.7864 10.7978C19.7864 15.3204 16.9369 15.6812 14.2326 15.9765C14.6777 16.3467 15.0551 17.0497 15.0551 18.1511C15.0551 19.7304 15.0405 21.6847 15.0405 22.069C15.0405 22.3737 15.2631 22.7439 15.8775 22.6361C20.7152 21.0802 23.9952 16.6326 23.9952 11.4352C23.9952 4.93495 18.5527 0 11.8428 0ZM4.70229 16.164C4.63939 16.2108 4.65391 16.3186 4.73615 16.4077C4.81355 16.4826 4.92482 16.5154 4.98771 16.4545C5.0506 16.4077 5.03609 16.2999 4.95385 16.2108C4.87644 16.1358 4.76518 16.103 4.70229 16.164ZM4.17981 15.7843C4.14595 15.8453 4.19432 15.9203 4.29108 15.9671C4.36848 16.014 4.46524 15.9999 4.4991 15.9343C4.53296 15.8734 4.48459 15.7984 4.38783 15.7515C4.29108 15.7234 4.21367 15.7375 4.17981 15.7843ZM5.74724 17.4528C5.66983 17.5137 5.69886 17.6543 5.81013 17.7433C5.9214 17.8511 6.06169 17.8652 6.12458 17.7902C6.18747 17.7293 6.15845 17.5887 6.06169 17.4996C5.95526 17.3918 5.81013 17.3778 5.74724 17.4528ZM5.19574 16.7638C5.11833 16.8107 5.11833 16.9326 5.19574 17.0403C5.27314 17.1481 5.40376 17.195 5.46665 17.1481C5.54405 17.0872 5.54405 16.9654 5.46665 16.8576C5.39892 16.7498 5.27314 16.7029 5.19574 16.7638Z");transform:scale(1) !important}[aria-label*=github].mainContent-20q_Hp[href^="/channels/"]>div svg[viewbox="0 0 40 40"]>path{transform:scale(1.7) !important}[aria-label*=offtopic].mainContent-20q_Hp[href^="/channels/"]>div svg>path,[aria-label*=off-topic].mainContent-20q_Hp[href^="/channels/"]>div svg>path,[aria-label*=chat].mainContent-20q_Hp[href^="/channels/"]>div svg>path,[aria-label*=ontopic].mainContent-20q_Hp[href^="/channels/"]>div svg>path,[aria-label*=on-topic].mainContent-20q_Hp[href^="/channels/"]>div svg>path,[aria-label*=general].mainContent-20q_Hp[href^="/channels/"]>div svg>path,[aria-label*=horssujet].mainContent-20q_Hp[href^="/channels/"]>div svg>path,[aria-label*=hors-sujet].mainContent-20q_Hp[href^="/channels/"]>div svg>path,[aria-label*=discuter].mainContent-20q_Hp[href^="/channels/"]>div svg>path,[aria-label*=ontopique].mainContent-20q_Hp[href^="/channels/"]>div svg>path,[aria-label*=sur-le-sujet].mainContent-20q_Hp[href^="/channels/"]>div svg>path,[aria-label*=général].mainContent-20q_Hp[href^="/channels/"]>div svg>path{d:path("M15 4v7H5.17L4 12.17V4h11m1-2H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm5 4h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1z");transform:scale(1) !important}[aria-label*=offtopic].mainContent-20q_Hp[href^="/channels/"]>div svg[viewbox="0 0 40 40"]>path,[aria-label*=off-topic].mainContent-20q_Hp[href^="/channels/"]>div svg[viewbox="0 0 40 40"]>path,[aria-label*=chat].mainContent-20q_Hp[href^="/channels/"]>div svg[viewbox="0 0 40 40"]>path,[aria-label*=ontopic].mainContent-20q_Hp[href^="/channels/"]>div svg[viewbox="0 0 40 40"]>path,[aria-label*=on-topic].mainContent-20q_Hp[href^="/channels/"]>div svg[viewbox="0 0 40 40"]>path,[aria-label*=general].mainContent-20q_Hp[href^="/channels/"]>div svg[viewbox="0 0 40 40"]>path,[aria-label*=horssujet].mainContent-20q_Hp[href^="/channels/"]>div svg[viewbox="0 0 40 40"]>path,[aria-label*=hors-sujet].mainContent-20q_Hp[href^="/channels/"]>div svg[viewbox="0 0 40 40"]>path,[aria-label*=discuter].mainContent-20q_Hp[href^="/channels/"]>div svg[viewbox="0 0 40 40"]>path,[aria-label*=ontopique].mainContent-20q_Hp[href^="/channels/"]>div svg[viewbox="0 0 40 40"]>path,[aria-label*=sur-le-sujet].mainContent-20q_Hp[href^="/channels/"]>div svg[viewbox="0 0 40 40"]>path,[aria-label*=général].mainContent-20q_Hp[href^="/channels/"]>div svg[viewbox="0 0 40 40"]>path{transform:scale(1.7) !important}[aria-label*=info].mainContent-20q_Hp[href^="/channels/"]>div svg>path,[aria-label*=useful].mainContent-20q_Hp[href^="/channels/"]>div svg>path,[aria-label*=utile].mainContent-20q_Hp[href^="/channels/"]>div svg>path{d:path("M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z");transform:scale(1) !important}[aria-label*=info].mainContent-20q_Hp[href^="/channels/"]>div svg[viewbox="0 0 40 40"]>path,[aria-label*=useful].mainContent-20q_Hp[href^="/channels/"]>div svg[viewbox="0 0 40 40"]>path,[aria-label*=utile].mainContent-20q_Hp[href^="/channels/"]>div svg[viewbox="0 0 40 40"]>path{transform:scale(1.7) !important}[aria-label*=help].mainContent-20q_Hp[href^="/channels/"]>div svg>path,[aria-label*=faq].mainContent-20q_Hp[href^="/channels/"]>div svg>path,[aria-label*=support].mainContent-20q_Hp[href^="/channels/"]>div svg>path,[aria-label*=aider].mainContent-20q_Hp[href^="/channels/"]>div svg>path{d:path("M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z");transform:scale(1) !important}[aria-label*=help].mainContent-20q_Hp[href^="/channels/"]>div svg[viewbox="0 0 40 40"]>path,[aria-label*=faq].mainContent-20q_Hp[href^="/channels/"]>div svg[viewbox="0 0 40 40"]>path,[aria-label*=support].mainContent-20q_Hp[href^="/channels/"]>div svg[viewbox="0 0 40 40"]>path,[aria-label*=aider].mainContent-20q_Hp[href^="/channels/"]>div svg[viewbox="0 0 40 40"]>path{transform:scale(1.7) !important}[aria-label*=starboard].mainContent-20q_Hp[href^="/channels/"]>div svg>path,[aria-label*=tribord].mainContent-20q_Hp[href^="/channels/"]>div svg>path{d:path("M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z");transform:scale(1) !important}[aria-label*=starboard].mainContent-20q_Hp[href^="/channels/"]>div svg[viewbox="0 0 40 40"]>path,[aria-label*=tribord].mainContent-20q_Hp[href^="/channels/"]>div svg[viewbox="0 0 40 40"]>path{transform:scale(1.7) !important}[aria-label*=gaming].mainContent-20q_Hp[href^="/channels/"]>div svg>path,[aria-label*=game].mainContent-20q_Hp[href^="/channels/"]>div svg>path,[aria-label*=jeu].mainContent-20q_Hp[href^="/channels/"]>div svg>path{d:path("M 21 6 H 3 c -1.1 0 -2 0.9 -2 2 v 8 c 0 1.1 0.9 2 2 2 h 18 c 1.1 0 2 -0.9 2 -2 V 8 c 0 -1.1 -0.9 -2 -2 -2 z m 0 10 H 3 V 8 h 18 v 8 z M 6 15 h 2 v -2 h 2 v -2 H 8 V 9 H 6 v 2 H 4 v 2 h 2 z M 13 13.5 A 1 1 0 0 0 16 13.5 A 1 1 0 0 0 13 13.5 M 17 10.5 A 1 1 0 0 0 20 10.5 A 1 1 0 0 0 17 10.5");transform:scale(1) !important}[aria-label*=gaming].mainContent-20q_Hp[href^="/channels/"]>div svg[viewbox="0 0 40 40"]>path,[aria-label*=game].mainContent-20q_Hp[href^="/channels/"]>div svg[viewbox="0 0 40 40"]>path,[aria-label*=jeu].mainContent-20q_Hp[href^="/channels/"]>div svg[viewbox="0 0 40 40"]>path{transform:scale(1.7) !important}[aria-label*=program].mainContent-20q_Hp[href^="/channels/"]>div svg>path,[aria-label*=coding].mainContent-20q_Hp[href^="/channels/"]>div svg>path,[aria-label*=dev].mainContent-20q_Hp[href^="/channels/"]>div svg>path,[aria-label*=programme].mainContent-20q_Hp[href^="/channels/"]>div svg>path,[aria-label*=codage].mainContent-20q_Hp[href^="/channels/"]>div svg>path{d:path("M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z");transform:scale(1) !important}[aria-label*=program].mainContent-20q_Hp[href^="/channels/"]>div svg[viewbox="0 0 40 40"]>path,[aria-label*=coding].mainContent-20q_Hp[href^="/channels/"]>div svg[viewbox="0 0 40 40"]>path,[aria-label*=dev].mainContent-20q_Hp[href^="/channels/"]>div svg[viewbox="0 0 40 40"]>path,[aria-label*=programme].mainContent-20q_Hp[href^="/channels/"]>div svg[viewbox="0 0 40 40"]>path,[aria-label*=codage].mainContent-20q_Hp[href^="/channels/"]>div svg[viewbox="0 0 40 40"]>path{transform:scale(1.7) !important}[aria-label*=meme].mainContent-20q_Hp[href^="/channels/"]>div svg>path{d:path("M15 4v7h-9.83l-1.17 1.17v-8.17h11m1-2h-13c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1v-9c0-.55-.45-1-1-1zm5 4h-2v9h-13v2c0 .55.45 1 1 1h11l4 4v-15c0-.55-.45-1-1-1zM12 5a1 1 0 000 2a1 1 0 000-2zM7 5a1 1 0 000 2a1 1 0 000-2zm-1 3h7q-3.5 4-7 0Z");transform:scale(1) !important}[aria-label*=meme].mainContent-20q_Hp[href^="/channels/"]>div svg[viewbox="0 0 40 40"]>path{transform:scale(1.7) !important}[aria-label*=bot].mainContent-20q_Hp[href^="/channels/"]>div svg>path{d:path("M20,9V7c0-1.1-0.9-2-2-2h-3c0-1.66-1.34-3-3-3S9,3.34,9,5H6C4.9,5,4,5.9,4,7v2c-1.66,0-3,1.34-3,3s1.34,3,3,3v4 c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2v-4c1.66,0,3-1.34,3-3S21.66,9,20,9z M18,19L6,19V7h12V19z M9,13c-0.83,0-1.5-0.67-1.5-1.5 S8.17,10,9,10s1.5,0.67,1.5,1.5S9.83,13,9,13z M16.5,11.5c0,0.83-0.67,1.5-1.5,1.5s-1.5-0.67-1.5-1.5S14.17,10,15,10 S16.5,10.67,16.5,11.5z M8,15h8v2H8V15z");transform:scale(1) !important}[aria-label*=bot].mainContent-20q_Hp[href^="/channels/"]>div svg[viewbox="0 0 40 40"]>path{transform:scale(1.7) !important}[aria-label*=log].mainContent-20q_Hp[href^="/channels/"]>div svg>path,[aria-label*=registre].mainContent-20q_Hp[href^="/channels/"]>div svg>path{d:path("M19.5 3.5L18 2l-1.5 1.5L15 2l-1.5 1.5L12 2l-1.5 1.5L9 2 7.5 3.5 6 2 4.5 3.5 3 2v20l1.5-1.5L6 22l1.5-1.5L9 22l1.5-1.5L12 22l1.5-1.5L15 22l1.5-1.5L18 22l1.5-1.5L21 22V2l-1.5 1.5zM19 19.09H5V4.91h14v14.18zM6 15h12v2H6zm0-4h12v2H6zm0-4h12v2H6z");transform:scale(1) !important}[aria-label*=log].mainContent-20q_Hp[href^="/channels/"]>div svg[viewbox="0 0 40 40"]>path,[aria-label*=registre].mainContent-20q_Hp[href^="/channels/"]>div svg[viewbox="0 0 40 40"]>path{transform:scale(1.7) !important}[aria-label*=quote].mainContent-20q_Hp[href^="/channels/"]>div svg>path,[aria-label*=citation].mainContent-20q_Hp[href^="/channels/"]>div svg>path{d:path("M18.62 18h-5.24l2-4H13V6h8v7.24L18.62 18zm-2-2h.76L19 12.76V8h-4v4h3.62l-2 4zm-8 2H3.38l2-4H3V6h8v7.24L8.62 18zm-2-2h.76L9 12.76V8H5v4h3.62l-2 4z");transform:scale(1) !important}[aria-label*=quote].mainContent-20q_Hp[href^="/channels/"]>div svg[viewbox="0 0 40 40"]>path,[aria-label*=citation].mainContent-20q_Hp[href^="/channels/"]>div svg[viewbox="0 0 40 40"]>path{transform:scale(1.7) !important}[aria-label*=bug].mainContent-20q_Hp[href^="/channels/"]>div svg>path,[aria-label*=bogue].mainContent-20q_Hp[href^="/channels/"]>div svg>path{d:path("M20 8h-2.81c-.45-.78-1.07-1.45-1.82-1.96L17 4.41 15.59 3l-2.17 2.17C12.96 5.06 12.49 5 12 5s-.96.06-1.41.17L8.41 3 7 4.41l1.62 1.63C7.88 6.55 7.26 7.22 6.81 8H4v2h2.09c-.05.33-.09.66-.09 1v1H4v2h2v1c0 .34.04.67.09 1H4v2h2.81c1.04 1.79 2.97 3 5.19 3s4.15-1.21 5.19-3H20v-2h-2.09c.05-.33.09-.66.09-1v-1h2v-2h-2v-1c0-.34-.04-.67-.09-1H20V8zm-4 4v3c0 .22-.03.47-.07.7l-.1.65-.37.65c-.72 1.24-2.04 2-3.46 2s-2.74-.77-3.46-2l-.37-.64-.1-.65C8.03 15.48 8 15.23 8 15v-4c0-.23.03-.48.07-.7l.1-.65.37-.65c.3-.52.72-.97 1.21-1.31l.57-.39.74-.18c.31-.08.63-.12.94-.12.32 0 .63.04.95.12l.68.16.61.42c.5.34.91.78 1.21 1.31l.38.65.1.65c.04.22.07.47.07.69v1zm-6 2h4v2h-4zm0-4h4v2h-4z");transform:scale(1) !important}[aria-label*=bug].mainContent-20q_Hp[href^="/channels/"]>div svg[viewbox="0 0 40 40"]>path,[aria-label*=bogue].mainContent-20q_Hp[href^="/channels/"]>div svg[viewbox="0 0 40 40"]>path{transform:scale(1.7) !important}
/* Functions | Context Menu Icons - Adds icons to right click menus */
.menu-1QACrS{--icon-color: currentColor;--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 447 447'%3E%3Cpath fill='%23fff' d='M182.5 78.6l70-70c11.9-11.9 31.2-11.9 43.1 0s11.9 31.2 0 43.1l-70 70zm91.7 91.7l70-70c11.9-11.9 31.2-11.9 43.1 0s11.9 31.2 0 43.1l-70 70zM303 257L138.9 92.9c-2.7-2.7-2.7-7 0-9.7L163 59.1c2.7-2.7 7-2.7 9.7 0l164.1 164.1c2.7 2.7 2.7 7 0 9.7L312.7 257c-2.7 2.7-7 2.7-9.7 0zm-146.6 75.4l-92.9-92.9c-17-17-17-44.6 0-61.6l85.1-85.1L303 247.4l-85 85c-17 17-44.7 17-61.6 0zm-61-2.9l-29-29c-2.7-2.7-2.7-7 0-9.7l29-29 38.7 38.7-29 29c-2.7 2.6-7 2.6-9.7 0zm48.3 115.8L81 382.6c-21.3-21.3-21.3-55.9 0-77.2l9.7 9.7c-16 16-16 42 0 57.9l62.8 62.8c2.7 2.7 2.7 7 0 9.7s-7.1 2.5-9.8-.2z'/%3E%3C/svg%3E")}.item-1OdjEX::before{content:"";width:22px;height:22px;left:15px;margin-right:6px;margin-top:-2px;background:var(--icon-color);-webkit-mask:var(--icon) center/contain no-repeat;mask:var(--icon) center/contain no-repeat;flex-shrink:0}.layerContainer-2v_Sit>.layer-2aCOJ3>.styleFlexible-x0_sIC{min-width:224px}.submenuPaddingContainer-_k62dJ .item-1OdjEX::before,#status-picker .item-1OdjEX::before,#channel-attach .item-1OdjEX::before,.item-1OdjEX.hideInteraction-2jPGL_::before{content:none}.menu-1QACrS#message-actions .item-1OdjEX{flex-direction:row-reverse}.menu-1QACrS#message-actions .item-1OdjEX .iconContainer-1-SsTR,.menu-1QACrS#message-actions .item-1OdjEX .imageContainer-1wSPgI{margin-left:0}.menu-1QACrS#message-actions .item-1OdjEX .label-2gNW3x:not(:only-child){margin-left:8px}.menu-1QACrS#message-actions .item-1OdjEX::before{content:none}.menu-1QACrS#guild-header-popout .item-1OdjEX{flex-direction:row-reverse}.menu-1QACrS#guild-header-popout .item-1OdjEX .iconContainer-1-SsTR,.menu-1QACrS#guild-header-popout .item-1OdjEX .imageContainer-1wSPgI{margin-left:0}.menu-1QACrS#guild-header-popout .item-1OdjEX .label-2gNW3x:not(:only-child){margin-left:8px}.menu-1QACrS#guild-header-popout .item-1OdjEX::before{content:none}.menu-1QACrS#audio-device-context .item-1OdjEX{flex-direction:row-reverse}.menu-1QACrS#audio-device-context .item-1OdjEX .iconContainer-1-SsTR,.menu-1QACrS#audio-device-context .item-1OdjEX .imageContainer-1wSPgI{margin-left:0}.menu-1QACrS#audio-device-context .item-1OdjEX .label-2gNW3x:not(:only-child){margin-left:8px}.menu-1QACrS#audio-device-context .item-1OdjEX::before{content:none}.item-1OdjEX#user-settings-cog-My_Account{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M12 6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0 10c2.7 0 5.8 1.29 6 2H6c.23-.72 3.31-2 6-2m0-12C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 10c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z'/%3E%3C/svg%3E")}.item-1OdjEX#user-settings-cog-Profile_Customization{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM7.07 18.28c.43-.9 3.05-1.78 4.93-1.78s4.51.88 4.93 1.78C15.57 19.36 13.86 20 12 20s-3.57-.64-4.93-1.72zm11.29-1.45c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33A7.95 7.95 0 014 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.49-1.64 4.83zM12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6zm0 5c-.83 0-1.5-.67-1.5-1.5S11.17 8 12 8s1.5.67 1.5 1.5S12.83 11 12 11z'/%3E%3C/svg%3E")}.item-1OdjEX#user-settings-cog-Privacy___Safety{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z'/%3E%3C/svg%3E")}.item-1OdjEX#user-settings-cog-Authorized_Apps{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z'/%3E%3C/svg%3E")}.item-1OdjEX#user-settings-cog-Connections{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M17 7h-4v2h4c1.65 0 3 1.35 3 3s-1.35 3-3 3h-4v2h4c2.76 0 5-2.24 5-5s-2.24-5-5-5zm-6 8H7c-1.65 0-3-1.35-3-3s1.35-3 3-3h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-2zm-3-4h8v2H8z'/%3E%3C/svg%3E")}.item-1OdjEX#user-settings-cog-Subscriptions{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23fff' width='18' height='18'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z'/%3E%3C/svg%3E")}.item-1OdjEX#user-settings-cog-Discord_Nitro{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h24v24H0z'/%3E%3Cg fill='%2380A6FF'%3E%3Cpath fill-rule='nonzero' d='M14 5a7 7 0 100 14 7 7 0 000-14zM3 11h1a1 1 0 100-2H1a1 1 0 110-2h5a1 1 0 100-2H3.5a1.5 1.5 0 010-3H14c5.523 0 10 4.477 10 10s-4.477 10-10 10c-5.185 0-9.449-3.947-9.95-9H3a1 1 0 010-2z'/%3E%3Cpath d='M14 17a5 5 0 110-10 5 5 0 010 10zm1.827-7.55a1 1 0 00-.835-.45h-1.926a1 1 0 00-.836.45l-1.315 2a1 1 0 000 1.1l1.315 2a1 1 0 00.836.45h1.926a1 1 0 00.835-.45l1.316-2a1 1 0 000-1.1l-1.316-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")}.item-1OdjEX#user-settings-cog-Nitro_Server_Boost{--icon: url("data:image/svg+xml,%3Csvg fill='%23FFF' height='24' width='24' viewBox='0 0 8 12' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4 0L0 4v4l4 4 4-4V4L4 0zm3 7.59l-3 3-3-3V4.41l3-3 3 3v3.18z'/%3E%3Cpath d='M2 4.83v2.34l2 2 2-2V4.83l-2-2-2 2z'/%3E%3C/svg%3E")}.item-1OdjEX#user-settings-cog-Library_Inventory{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M20 6h-2.18c.11-.31.18-.65.18-1a2.996 2.996 0 00-5.5-1.65l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 12 7.4l3.38 4.6L17 10.83 14.92 8H20v6z'/%3E%3C/svg%3E")}.item-1OdjEX#user-settings-cog-Billing{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath fill='none' d='M0 0h24v24H0z'/%3E%3Cpath d='M19 14V6c0-1.1-.9-2-2-2H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zm-2 0H3V6h14v8zm-7-7c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm13 0v11c0 1.1-.9 2-2 2H4v-2h17V7h2z'/%3E%3C/svg%3E")}.item-1OdjEX#user-settings-cog-Appearance{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M14 6l-4.22 5.63 1.25 1.67L14 9.33 19 16h-8.46l-4.01-5.37L1 18h22L14 6zM5 16l1.52-2.03L8.04 16H5z'/%3E%3C/svg%3E")}.item-1OdjEX#user-settings-cog-Accessibility{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18v2z'/%3E%3C/svg%3E")}.item-1OdjEX#user-settings-cog-Voice___Video{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M12 15c1.66 0 2.99-1.34 2.99-3L15 6c0-1.66-1.34-3-3-3S9 4.34 9 6v6c0 1.66 1.34 3 3 3zm-1.2-9.1c0-.66.54-1.2 1.2-1.2s1.2.54 1.2 1.2l-.01 6.2c0 .66-.53 1.2-1.19 1.2s-1.2-.54-1.2-1.2V5.9zm6.5 6.1c0 3-2.54 5.1-5.3 5.1S6.7 15 6.7 12H5c0 3.41 2.72 6.23 6 6.72V22h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z'/%3E%3C/svg%3E")}.item-1OdjEX#user-settings-cog-Text___Images{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M2 6H0v5h.01L0 20c0 1.1.9 2 2 2h18v-2H2V6zm5 9h14l-3.5-4.5-2.5 3.01L11.5 9zM22 4h-8l-2-2H6c-1.1 0-1.99.9-1.99 2L4 16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 12H6V4h5.17l1.41 1.41.59.59H22v10z'/%3E%3C/svg%3E")}.item-1OdjEX#user-settings-cog-Notifications{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z'/%3E%3C/svg%3E")}.item-1OdjEX#user-settings-cog-Keybinds{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M0 0h24v24H0V0zm0 0h24v24H0V0z' fill='none'/%3E%3Cpath d='M20 7v10H4V7h16m0-2H4c-1.1 0-1.99.9-1.99 2L2 17c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-9 3h2v2h-2zm0 3h2v2h-2zM8 8h2v2H8zm0 3h2v2H8zm-3 0h2v2H5zm0-3h2v2H5zm3 6h8v2H8zm6-3h2v2h-2zm0-3h2v2h-2zm3 3h2v2h-2zm0-3h2v2h-2z'/%3E%3C/svg%3E")}.item-1OdjEX#user-settings-cog-Language{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23fff' width='18' height='18'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95a15.65 15.65 0 00-1.38-3.56A8.03 8.03 0 0118.92 8zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56A7.987 7.987 0 015.08 16zm2.95-8H5.08a7.987 7.987 0 014.33-3.56A15.65 15.65 0 008.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a8.03 8.03 0 01-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z'/%3E%3C/svg%3E")}.item-1OdjEX#user-settings-cog-Windows{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23fff' width='18' height='18'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M21 2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7v2H8v2h8v-2h-2v-2h7c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H3V4h18v12z'/%3E%3C/svg%3E")}.item-1OdjEX#user-settings-cog-Streamer_Mode{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M15 8v8H5V8h10m1-2H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4V7c0-.55-.45-1-1-1z'/%3E%3C/svg%3E")}.item-1OdjEX#user-settings-cog-Advanced{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M3 17v2h6v-2H3zM3 5v2h10V5H3zm10 16v-2h8v-2h-8v-2h-2v6h2zM7 9v2H3v2h4v2h2V9H7zm14 4v-2H11v2h10zm-6-4h2V7h4V5h-4V3h-2v6z'/%3E%3C/svg%3E")}.item-1OdjEX#user-settings-cog-Game_Activity{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M13 4v2.67l-1 1-1-1V4h2m7 7v2h-2.67l-1-1 1-1H20M6.67 11l1 1-1 1H4v-2h2.67M12 16.33l1 1V20h-2v-2.67l1-1M15 2H9v5.5l3 3 3-3V2zm7 7h-5.5l-3 3 3 3H22V9zM7.5 9H2v6h5.5l3-3-3-3zm4.5 4.5l-3 3V22h6v-5.5l-3-3z'/%3E%3C/svg%3E")}.item-1OdjEX#user-settings-cog-Overlay{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23fff' width='18' height='18'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M19 19H5V5h7V3H5a2 2 0 00-2 2v14a2 2 0 002 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z'/%3E%3C/svg%3E") }.item-1OdjEX#user-settings-cog-changelog{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M14 17H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2zm2-6H5c-1.11 0-2 .89-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zM5 5h14v14H5'/%3E%3C/svg%3E") }.item-1OdjEX#user-settings-cog-Hypesquad_Online{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='34' height='32'%3E%3Cdefs%3E%3Cpath id='a' d='M0 0h33.985v22.936H0z'/%3E%3C/defs%3E%3Cg fill='none' fill-rule='evenodd' transform='translate(0 5)'%3E%3Cmask id='b' fill='%23fff'%3E%3Cuse xlink:href='%23a'/%3E%3C/mask%3E%3Cpath fill='%23F8A532' d='M33.374.065L19.936 8.62c-.232.148-.42.353-.544.594L17.344 13.2a.398.398 0 01-.703 0l-2.05-3.985a1.54 1.54 0 00-.543-.594L.611.065C.274-.15-.138.208.045.556L5.616 11.16c.133.254-.056.554-.35.554H1.932c-.382 0-.54.475-.229.69l15.06 10.462a.404.404 0 00.458 0l15.06-10.461c.311-.216.154-.69-.228-.69h-3.334c-.294 0-.484-.301-.35-.555L33.938.556c.184-.348-.228-.706-.565-.491' mask='url(%23b)'/%3E%3C/g%3E%3C/svg%3E")}.item-1OdjEX#user-settings-cog-Experiments{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' fill='%23fff' width='24'%3E%3Cpath fill='none' d='M0 0h24v24H0z'/%3E%3Cpath d='M7 19c-1.1 0-2 .9-2 2h14c0-1.1-.9-2-2-2h-4v-2h3c1.1 0 2-.9 2-2h-8c-1.66 0-3-1.34-3-3 0-1.09.59-2.04 1.46-2.56C8.17 9.03 8 8.54 8 8c0-.21.04-.42.09-.62A5.01 5.01 0 005 12c0 2.76 2.24 5 5 5v2H7z'/%3E%3Cpath d='M10.56 5.51C11.91 5.54 13 6.64 13 8c0 .75-.33 1.41-.85 1.87l.59 1.62.94-.34.34.94 1.88-.68-.34-.94.94-.34-2.74-7.53-.94.34-.34-.94-1.88.68.34.94-.94.35.56 1.54z'/%3E%3Ccircle cx='10.5' cy='8' r='1.5'/%3E%3C/svg%3E")}.item-1OdjEX#user-settings-cog-Developer_Options{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' fill='%23fff' width='24'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M3 17v2h6v-2H3zM3 5v2h10V5H3zm10 16v-2h8v-2h-8v-2h-2v6h2zM7 9v2H3v2h4v2h2V9H7zm14 4v-2H11v2h10zm-6-4h2V7h4V5h-4V3h-2v6z'/%3E%3C/svg%3E")}.item-1OdjEX#textarea-context-sticker-suggestions{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M17 3v9h-5v5H3V3h14m0-2H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h10l6-6V3c0-1.1-.9-2-2-2zm-7 11H5v-2h5v2zm5-4H5V6h10v2z'/%3E%3C/svg%3E")}.item-1OdjEX#textarea-context-add-to-dictionary{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath fill='none' d='M0 0h24v24H0z'/%3E%3Cpath d='M17 19.22H5V7h7V5H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-7h-2v7.22z'/%3E%3Cpath d='M19 2h-2v3h-3c.01.01 0 2 0 2h3v2.99c.01.01 2 0 2 0V7h3V5h-3V2zM7 9h8v2H7zM7 12v2h8v-2h-3zM7 15h8v2H7z'/%3E%3C/svg%3E")}.item-1OdjEX#textarea-context-spellcheck{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M12.45 16h2.09L9.43 3H7.57L2.46 16h2.09l1.12-3h5.64l1.14 3zm-6.02-5L8.5 5.48 10.57 11H6.43zm15.16.59l-8.09 8.09L9.83 16l-1.41 1.41 5.09 5.09L23 13l-1.41-1.41z'/%3E%3C/svg%3E")}.item-1OdjEX#textarea-context-languages{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M12.87 15.07l-2.54-2.51.03-.03A17.52 17.52 0 0014.07 6H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z'/%3E%3C/svg%3E")}.item-1OdjEX[id|=textarea-context-correction]{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath fill='none' d='M0 0h24v24H0z'/%3E%3Cpath d='M16.81 8.94l-3.75-3.75L4 14.25V18h3.75l9.06-9.06zM6 16v-.92l7.06-7.06.92.92L6.92 16H6zM19.71 6.04a.996.996 0 000-1.41l-2.34-2.34a1.001 1.001 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83zM2 20h20v4H2z'/%3E%3C/svg%3E")}.item-1OdjEX[id*=copy]{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z'/%3E%3C/svg%3E")}.item-1OdjEX#textarea-context-paste{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M19 2h-4.18C14.4.84 13.3 0 12 0S9.6.84 9.18 2H5c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm7 18H5V4h2v3h10V4h2v16z'/%3E%3C/svg%3E")}.item-1OdjEX#textarea-context-cut{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M9.64 7.64c.23-.5.36-1.05.36-1.64 0-2.21-1.79-4-4-4S2 3.79 2 6s1.79 4 4 4c.59 0 1.14-.13 1.64-.36L10 12l-2.36 2.36C7.14 14.13 6.59 14 6 14c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4c0-.59-.13-1.14-.36-1.64L12 14l7 7h3v-1L9.64 7.64zM6 8c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2zm0 12c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2zm6-7.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5zM19 3l-6 6 2 2 7-7V3h-3z'/%3E%3C/svg%3E")}.item-1OdjEX#guild-context-mute-guild{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M0 15h2V9H0v6zm3 2h2V7H3v10zm19-8v6h2V9h-2zm-3 8h2V7h-2v10zM16.5 3h-9C6.67 3 6 3.67 6 4.5v15c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5v-15c0-.83-.67-1.5-1.5-1.5zM16 19H8V5h8v14z'/%3E%3C/svg%3E")}.item-1OdjEX#guild-context-unmute-guild{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6zM7.58 4.08L6.15 2.65C3.75 4.48 2.17 7.3 2.03 10.5h2a8.445 8.445 0 013.55-6.42zm12.39 6.42h2c-.15-3.2-1.73-6.02-4.12-7.85l-1.42 1.43a8.495 8.495 0 013.54 6.42z'/%3E%3C/svg%3E")}.item-1OdjEX#guild-context-invite-people{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M22 9V7h-2v2h-2v2h2v2h2v-2h2V9zM8 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zM8 13c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4zm6 5H2v-.99C2.2 16.29 5.3 15 8 15s5.8 1.29 6 2v1zM12.51 4.05C13.43 5.11 14 6.49 14 8s-.57 2.89-1.49 3.95C14.47 11.7 16 10.04 16 8s-1.53-3.7-3.49-3.95zM16.53 13.83C17.42 14.66 18 15.7 18 17v3h2v-3c0-1.45-1.59-2.51-3.47-3.17z'/%3E%3C/svg%3E")}.item-1OdjEX#guild-context-hide-muted-channels[aria-checked=true]{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M12 6a9.77 9.77 0 018.82 5.5C19.17 14.87 15.79 17 12 17s-7.17-2.13-8.82-5.5A9.77 9.77 0 0112 6m0-2C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4zm0 5a2.5 2.5 0 010 5 2.5 2.5 0 010-5m0-2c-2.48 0-4.5 2.02-4.5 4.5S9.52 16 12 16s4.5-2.02 4.5-4.5S14.48 7 12 7z'/%3E%3C/svg%3E")}.item-1OdjEX#guild-context-hide-muted-channels[aria-checked=false]{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M12 6a9.77 9.77 0 018.82 5.5 9.647 9.647 0 01-2.41 3.12l1.41 1.41c1.39-1.23 2.49-2.77 3.18-4.53C21.27 7.11 17 4 12 4c-1.27 0-2.49.2-3.64.57l1.65 1.65C10.66 6.09 11.32 6 12 6zm-1.07 1.14L13 9.21c.57.25 1.03.71 1.28 1.28l2.07 2.07c.08-.34.14-.7.14-1.07C16.5 9.01 14.48 7 12 7c-.37 0-.72.05-1.07.14zM2.01 3.87l2.68 2.68A11.738 11.738 0 001 11.5C2.73 15.89 7 19 12 19c1.52 0 2.98-.29 4.32-.82l3.42 3.42 1.41-1.41L3.42 2.45 2.01 3.87zm7.5 7.5l2.61 2.61c-.04.01-.08.02-.12.02a2.5 2.5 0 01-2.5-2.5c0-.05.01-.08.01-.13zm-3.4-3.4l1.75 1.75a4.6 4.6 0 00-.36 1.78 4.507 4.507 0 006.27 4.14l.98.98c-.88.24-1.8.38-2.75.38a9.77 9.77 0 01-8.82-5.5c.7-1.43 1.72-2.61 2.93-3.53z'/%3E%3C/svg%3E")}.item-1OdjEX#guild-context-guild-settings{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M19.43 12.98c.04-.32.07-.64.07-.98 0-.34-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46a.5.5 0 00-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65A.488.488 0 0014 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1a.566.566 0 00-.18-.03c-.17 0-.34.09-.43.25l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98 0 .33.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46a.5.5 0 00.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.06.02.12.03.18.03.17 0 .34-.09.43-.25l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zm-1.98-1.71c.04.31.05.52.05.73 0 .21-.02.43-.05.73l-.14 1.13.89.7 1.08.84-.7 1.21-1.27-.51-1.04-.42-.9.68c-.43.32-.84.56-1.25.73l-1.06.43-.16 1.13-.2 1.35h-1.4l-.19-1.35-.16-1.13-1.06-.43c-.43-.18-.83-.41-1.23-.71l-.91-.7-1.06.43-1.27.51-.7-1.21 1.08-.84.89-.7-.14-1.13c-.03-.31-.05-.54-.05-.74s.02-.43.05-.73l.14-1.13-.89-.7-1.08-.84.7-1.21 1.27.51 1.04.42.9-.68c.43-.32.84-.56 1.25-.73l1.06-.43.16-1.13.2-1.35h1.39l.19 1.35.16 1.13 1.06.43c.43.18.83.41 1.23.71l.91.7 1.06-.43 1.27-.51.7 1.21-1.07.85-.89.7.14 1.13zM12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z'/%3E%3C/svg%3E")}.item-1OdjEX#guild-context-notifications{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z'/%3E%3C/svg%3E")}.item-1OdjEX#guild-context-privacy{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M12,1L3,5v6c0,5.55,3.84,10.74,9,12c5.16-1.26,9-6.45,9-12V5L12,1z M19,11c0,1.85-0.51,3.65-1.38,5.21l-1.45-1.45 c1.29-1.94,1.07-4.58-0.64-6.29c-1.95-1.95-5.12-1.95-7.07,0c-1.95,1.95-1.95,5.12,0,7.07c1.71,1.71,4.35,1.92,6.29,0.64 l1.72,1.72c-1.19,1.42-2.73,2.51-4.47,3.04C7.98,19.69,5,15.52,5,11V6.3l7-3.11l7,3.11V11z M12,15c-1.66,0-3-1.34-3-3s1.34-3,3-3 s3,1.34,3,3S13.66,15,12,15z'/%3E%3C/svg%3E")}.item-1OdjEX#guild-context-change-nickname{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M14.06 9.02l.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z'/%3E%3C/svg%3E")}.item-1OdjEX#guild-context-create-channel{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z'/%3E%3C/svg%3E")}.item-1OdjEX#guild-context-create-category{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M20 6h-8l-2-2H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm0 12H4V6h5.17l2 2H20v10zm-8-4h2v2h2v-2h2v-2h-2v-2h-2v2h-2z'/%3E%3C/svg%3E")}.item-1OdjEX#guild-context-leave-guild{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z'/%3E%3C/svg%3E")}.item-1OdjEX#message-search-google{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M12.24 11.19v2.46h5.88c-.18 1.38-.64 2.39-1.34 3.1c-.86.86-2.2 1.8-4.54 1.8c-3.62 0-6.45-2.92-6.45-6.54s2.83-6.54 6.45-6.54c1.95 0 3.38.77 4.43 1.76L18.4 5.5C16.94 4.08 14.98 3 12.24 3C7.28 3 3.11 7.04 3.11 12s4.17 9 9.13 9c2.68 0 4.7-.88 6.28-2.52c1.62-1.62 2.13-3.91 2.13-5.75c0-.57-.04-1.1-.13-1.54H12.24z'/%3E%3C/svg%3E")}.item-1OdjEX#message-add-reaction{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M7 9.5C7 8.67 7.67 8 8.5 8s1.5.67 1.5 1.5S9.33 11 8.5 11 7 10.33 7 9.5zm5 8c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5zm3.5-6.5c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zM22 1h-2v2h-2v2h2v2h2V5h2V3h-2V1zm-2 11c0 4.42-3.58 8-8 8s-8-3.58-8-8 3.58-8 8-8c1.46 0 2.82.4 4 1.08V2.84A9.929 9.929 0 0011.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12c0-1.05-.17-2.05-.47-3H19.4c.38.93.6 1.94.6 3z'/%3E%3C/svg%3E")}.item-1OdjEX#message-reactions{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Ccircle cx='15.5' cy='9.5' r='1.5'/%3E%3Ccircle cx='8.5' cy='9.5' r='1.5'/%3E%3Cpath d='M12 18c2.28 0 4.22-1.66 5-4H7c.78 2.34 2.72 4 5 4z'/%3E%3Cpath d='M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z'/%3E%3C/svg%3E")}.item-1OdjEX#message-edit{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M14.06 9.02l.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z'/%3E%3C/svg%3E")}.item-1OdjEX#message-pin{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M 14 5 v 5 c 0 1.12 0.37 2.16 1 3 H 9 c 0.65 -0.86 1 -1.9 1 -3 V 5 H 14 M 17 3 H 7 C 6.45 3 6 3.45 6 4 c 0 0.55 0.45 1 1 1 c 0 0 0 0 0 0 l 1 0 v 5 c 0 1.66 -1.34 3 -3 3 v 2 h 5.97 v 6 l 1 1 l 1 -1 v -6 H 19 v -2 c 0 0 0 0 0 0 c -1.66 0 -3 -1.34 -3 -3 V 5 l 1 0 c 0 0 0 0 0 0 c 0.55 0 1 -0.45 1 -1 C 18 3.45 17.55 3 17 3 L 17 3 z'/%3E%3C/svg%3E")}.item-1OdjEX#message-unpin{--icon: url("data:image/svg+xml,%3Csvg height='24' width='24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 9H8c0 1.66-1.34 3-3 3v2h5.97v7l1 1 1-1v-9H9c.65-.86 1-1.9 1-3zM14 4v5c0 1.12.495 1.941 1.125 2.781L17.5 14H19v-2c-1.66 0-3-1.34-3-3V4h1c.55 0 1-.45 1-1s-.45-1-1-1m0 0H7c-.55 0-1 .45-1 1s.45 1 1 1h1v.991l2 1.818V4h4'/%3E%3Cpath d='M5.47 3.92L4.06 5.33l14.62 14.62 1.41-1.41L5.47 3.92z'/%3E%3C/svg%3E")}.item-1OdjEX#message-reply{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z'/%3E%3C/svg%3E")}.item-1OdjEX#message-thread{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='none'%3E%3Cpath fill='black' d='M4 16v-2h4v-4H4V8h4V4h2v4h4V4h2v4h4v2h-4v2h-2v-2h-4v4h2v2h-2v4H8v-4H4z'/%3E%3Cpath fill='black' d='M13.44 12.96a.96.96 0 00-.96.96v6.301c0 .53.43.96.96.96h.96a.24.24 0 01.24.24v2.039a.24.24 0 00.4.178l2.446-2.21a.96.96 0 01.643-.247h4.43a.96.96 0 00.96-.96V13.92a.96.96 0 00-.96-.96h-9.12z'/%3E%3C/svg%3E")}.item-1OdjEX#message-mark-unread{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M12 6a9.77 9.77 0 018.82 5.5 9.647 9.647 0 01-2.41 3.12l1.41 1.41c1.39-1.23 2.49-2.77 3.18-4.53C21.27 7.11 17 4 12 4c-1.27 0-2.49.2-3.64.57l1.65 1.65C10.66 6.09 11.32 6 12 6zm-1.07 1.14L13 9.21c.57.25 1.03.71 1.28 1.28l2.07 2.07c.08-.34.14-.7.14-1.07C16.5 9.01 14.48 7 12 7c-.37 0-.72.05-1.07.14zM2.01 3.87l2.68 2.68A11.738 11.738 0 001 11.5C2.73 15.89 7 19 12 19c1.52 0 2.98-.29 4.32-.82l3.42 3.42 1.41-1.41L3.42 2.45 2.01 3.87zm7.5 7.5l2.61 2.61c-.04.01-.08.02-.12.02a2.5 2.5 0 01-2.5-2.5c0-.05.01-.08.01-.13zm-3.4-3.4l1.75 1.75a4.6 4.6 0 00-.36 1.78 4.507 4.507 0 006.27 4.14l.98.98c-.88.24-1.8.38-2.75.38a9.77 9.77 0 01-8.82-5.5c.7-1.43 1.72-2.61 2.93-3.53z'/%3E%3C/svg%3E")}.item-1OdjEX#message-apps{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z'/%3E%3C/svg%3E")}.item-1OdjEX#message-copy-link{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M17 7h-4v2h4c1.65 0 3 1.35 3 3s-1.35 3-3 3h-4v2h4c2.76 0 5-2.24 5-5s-2.24-5-5-5zm-6 8H7c-1.65 0-3-1.35-3-3s1.35-3 3-3h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-2zm-3-4h8v2H8z'/%3E%3C/svg%3E")}.item-1OdjEX#message-save-image{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M19 12v7H5v-7H3v7c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7h-2zm-6 .67l2.59-2.58L17 11.5l-5 5-5-5 1.41-1.41L11 12.67V3h2v9.67z'/%3E%3C/svg%3E")}.item-1OdjEX#message-copy-native-link{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M17 7h-4v2h4c1.65 0 3 1.35 3 3s-1.35 3-3 3h-4v2h4c2.76 0 5-2.24 5-5s-2.24-5-5-5zm-6 8H7c-1.65 0-3-1.35-3-3s1.35-3 3-3h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-2zm-3-4h8v2H8z'/%3E%3C/svg%3E")}.item-1OdjEX#message-tts{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M17 20c-.29 0-.56-.06-.76-.15-.71-.37-1.21-.88-1.71-2.38-.51-1.56-1.47-2.29-2.39-3-.79-.61-1.61-1.24-2.32-2.53C9.29 10.98 9 9.93 9 9c0-2.8 2.2-5 5-5s5 2.2 5 5h2c0-3.93-3.07-7-7-7S7 5.07 7 9c0 1.26.38 2.65 1.07 3.9.91 1.65 1.98 2.48 2.85 3.15.81.62 1.39 1.07 1.71 2.05.6 1.82 1.37 2.84 2.73 3.55A3.999 3.999 0 0021 18h-2c0 1.1-.9 2-2 2zM7.64 2.64L6.22 1.22C4.23 3.21 3 5.96 3 9s1.23 5.79 3.22 7.78l1.41-1.41C6.01 13.74 5 11.49 5 9s1.01-4.74 2.64-6.36zM11.5 9a2.5 2.5 0 005 0 2.5 2.5 0 00-5 0z'/%3E%3C/svg%3E")}.item-1OdjEX#message-open-native-link{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M19 4H5a2 2 0 00-2 2v12a2 2 0 002 2h4v-2H5V8h14v10h-4v2h4c1.1 0 2-.9 2-2V6a2 2 0 00-2-2zm-7 6l-4 4h3v6h2v-6h3l-4-4z'/%3E%3C/svg%3E")}.item-1OdjEX#message-remove-reactions{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Ccircle cx='9' cy='13' r='1.25'/%3E%3Cpath d='M17.5 10c.75 0 1.47-.09 2.17-.24.21.71.33 1.46.33 2.24 0 1.22-.28 2.37-.77 3.4l1.49 1.49A9.981 9.981 0 0022 12c0-5.52-4.48-10-10-10-1.78 0-3.44.47-4.89 1.28l5.33 5.33c1.49.88 3.21 1.39 5.06 1.39zm-6.84-5.88c.43-.07.88-.12 1.34-.12 2.9 0 5.44 1.56 6.84 3.88-.43.07-.88.12-1.34.12-2.9 0-5.44-1.56-6.84-3.88zM1.89 3.72l2.19 2.19A9.958 9.958 0 002 12c0 5.52 4.48 10 10 10 2.29 0 4.4-.78 6.09-2.08l2.19 2.19 1.41-1.41L3.31 2.31 1.89 3.72zm14.77 14.77A7.91 7.91 0 0112 20c-4.41 0-8-3.59-8-8 0-.05.01-.1 0-.14a9.946 9.946 0 003.64-2.39l9.02 9.02zM6.23 8.06c-.53.55-1.14 1.03-1.81 1.41.26-.77.63-1.48 1.09-2.13l.72.72z'/%3E%3C/svg%3E")}.item-1OdjEX#message-delete{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z'/%3E%3C/svg%3E")}.item-1OdjEX#message-report-message-btn{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3zM19 14.9L14.9 19H9.1L5 14.9V9.1L9.1 5h5.8L19 9.1v5.8z'/%3E%3Ccircle cx='12' cy='16' r='1'/%3E%3Cpath d='M11 7h2v7h-2z'/%3E%3C/svg%3E")}.menu-1QACrS#message-actions .submenuContainer-3EVTeH>.item-1OdjEX{flex-direction:unset}.menu-1QACrS#message-actions .submenuContainer-3EVTeH>.item-1OdjEX .iconContainer-1-SsTR,.menu-1QACrS#message-actions .submenuContainer-3EVTeH>.item-1OdjEX .imageContainer-1wSPgI{margin-left:8px}.menu-1QACrS#message-actions .submenuContainer-3EVTeH>.item-1OdjEX .label-2gNW3x:not(:only-child){margin-left:0}.menu-1QACrS#message-actions .submenuContainer-3EVTeH>.item-1OdjEX::before{content:"";--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z'/%3E%3C/svg%3E")}.item-1OdjEX#image-context-save-image{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M19 12v7H5v-7H3v7c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7h-2zm-6 .67l2.59-2.58L17 11.5l-5 5-5-5 1.41-1.41L11 12.67V3h2v9.67z'/%3E%3C/svg%3E")}.item-1OdjEX#image-context-open-native-link{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M19 4H5a2 2 0 00-2 2v12a2 2 0 002 2h4v-2H5V8h14v10h-4v2h4c1.1 0 2-.9 2-2V6a2 2 0 00-2-2zm-7 6l-4 4h3v6h2v-6h3l-4-4z'/%3E%3C/svg%3E")}.item-1OdjEX[id*=mark][id$=read]{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M18 7l-1.41-1.41-6.34 6.34 1.41 1.41L18 7zm4.24-1.41L11.66 16.17 7.48 12l-1.41 1.41L11.66 19l12-12-1.42-1.41zM.41 13.41L6 19l1.41-1.41L1.83 12 .41 13.41z'/%3E%3C/svg%3E")}.item-1OdjEX#user-context-user-profile{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M12 6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0 10c2.7 0 5.8 1.29 6 2H6c.23-.72 3.31-2 6-2m0-12C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 10c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z'/%3E%3C/svg%3E")}.item-1OdjEX#user-context-mention{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M12 1.95c-5.52 0-10 4.48-10 10s4.48 10 10 10h5v-2h-5c-4.34 0-8-3.66-8-8s3.66-8 8-8 8 3.66 8 8v1.43c0 .79-.71 1.57-1.5 1.57s-1.5-.78-1.5-1.57v-1.43c0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5c1.38 0 2.64-.56 3.54-1.47.65.89 1.77 1.47 2.96 1.47 1.97 0 3.5-1.6 3.5-3.57v-1.43c0-5.52-4.48-10-10-10zm0 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z'/%3E%3C/svg%3E")}.item-1OdjEX#user-context-message-user{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M4 4h16v12H5.17L4 17.17V4m0-2c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H4zm2 10h8v2H6v-2zm0-3h12v2H6V9zm0-3h12v2H6V6z'/%3E%3C/svg%3E")}.item-1OdjEX#user-context-call{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M6.54 5c.06.89.21 1.76.45 2.59l-1.2 1.2c-.41-1.2-.67-2.47-.76-3.79h1.51m9.86 12.02c.85.24 1.72.39 2.6.45v1.49c-1.32-.09-2.59-.35-3.8-.75l1.2-1.19M7.5 3H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.49c0-.55-.45-1-1-1-1.24 0-2.45-.2-3.57-.57a.84.84 0 00-.31-.05c-.26 0-.51.1-.71.29l-2.2 2.2a15.149 15.149 0 01-6.59-6.59l2.2-2.2c.28-.28.36-.67.25-1.02A11.36 11.36 0 018.5 4c0-.55-.45-1-1-1z'/%3E%3C/svg%3E")}.item-1OdjEX#user-context-note{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath fill='none' d='M0 0h24v24H0z'/%3E%3Cpath d='M3 10h11v2H3v-2zm0-2h11V6H3v2zm0 8h7v-2H3v2zm15.01-3.13l.71-.71a.996.996 0 011.41 0l.71.71c.39.39.39 1.02 0 1.41l-.71.71-2.12-2.12zm-.71.71l-5.3 5.3V21h2.12l5.3-5.3-2.12-2.12z'/%3E%3C/svg%3E")}.item-1OdjEX#user-context-add-friend-nickname{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17l-.59.59-.58.58V4h16v12zm-9.5-2H18v-2h-5.5zm3.86-5.87c.2-.2.2-.51 0-.71l-1.77-1.77c-.2-.2-.51-.2-.71 0L6 11.53V14h2.47l5.89-5.87z'/%3E%3C/svg%3E")}.item-1OdjEX#user-context-close-dm{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z'/%3E%3C/svg%3E")}.item-1OdjEX#user-context-watch-stream{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M9 10v8l7-4zm12-4h-7.58l3.29-3.29L16 2l-4 4h-.03l-4-4-.69.71L10.56 6H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 14H3V8h18v12z'/%3E%3C/svg%3E")}.item-1OdjEX[id|=user-context-spotify-play]{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='32' width='32' viewBox='0 0 168 168'%3E%3Cpath fill='%231ED760' d='M83.837 20.21c-35.15 0-63.645 28.495-63.645 63.644 0 35.151 28.496 63.644 63.645 63.644 35.153 0 63.645-28.493 63.645-63.644 0-35.147-28.492-63.64-63.646-63.64l.001-.003zm29.187 91.793a3.965 3.965 0 01-5.457 1.315c-14.943-9.127-33.754-11.195-55.908-6.133a3.968 3.968 0 01-1.766-7.737c24.244-5.539 45.04-3.154 61.816 7.099a3.967 3.967 0 011.315 5.456zm7.79-17.33c-1.436 2.336-4.492 3.073-6.825 1.636-17.107-10.515-43.185-13.56-63.42-7.418a4.969 4.969 0 01-6.193-3.306 4.97 4.97 0 013.31-6.189c23.113-7.013 51.848-3.616 71.494 8.457 2.333 1.436 3.07 4.491 1.634 6.822v-.001zm.669-18.045c-20.513-12.183-54.355-13.303-73.94-7.36a5.952 5.952 0 11-3.456-11.392c22.482-6.825 59.855-5.506 83.471 8.514a5.946 5.946 0 012.083 8.157 5.948 5.948 0 01-8.155 2.081z'/%3E%3C/svg%3E")}.item-1OdjEX[id|=user-context-spotify-sync]{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath fill='none' d='M0 0h24v24H0z'/%3E%3Cpath d='M12 3a9 9 0 00-9 9v7c0 1.1.9 2 2 2h4v-8H5v-1c0-3.87 3.13-7 7-7s7 3.13 7 7v1h-4v8h4c1.1 0 2-.9 2-2v-7a9 9 0 00-9-9zM7 15v4H5v-4h2zm12 4h-2v-4h2v4z'/%3E%3C/svg%3E")}.item-1OdjEX#user-context-ask-to-join{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M11 7L9.6 8.4l2.6 2.6H2v2h10.2l-2.6 2.6L11 17l5-5-5-5zm9 12h-8v2h8c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-8v2h8v14z'/%3E%3C/svg%3E")}.item-1OdjEX#user-context-mute[aria-checked=false]{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M10.8 4.9c0-.66.54-1.2 1.2-1.2s1.2.54 1.2 1.2l-.01 3.91L15 10.6V5c0-1.66-1.34-3-3-3-1.54 0-2.79 1.16-2.96 2.65l1.76 1.76V4.9zM19 11h-1.7c0 .58-.1 1.13-.27 1.64l1.27 1.27c.44-.88.7-1.87.7-2.91zM4.41 2.86L3 4.27l6 6V11c0 1.66 1.34 3 3 3 .23 0 .44-.03.65-.08l1.66 1.66c-.71.33-1.5.52-2.31.52-2.76 0-5.3-2.1-5.3-5.1H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28a7.13 7.13 0 002.55-.9l4.2 4.2 1.41-1.41L4.41 2.86z'/%3E%3C/svg%3E")}.item-1OdjEX#user-context-mute[aria-checked=true]{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm-1-9c0-.55.45-1 1-1s1 .45 1 1v6c0 .55-.45 1-1 1s-1-.45-1-1V5zm6 6c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z'/%3E%3C/svg%3E")}.item-1OdjEX#user-context-deafen[aria-checked=false]{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M12 4c3.87 0 7 3.13 7 7v1h-4v.17L16.83 14H19v2.17l2 2V11a9 9 0 00-9-9c-2.02 0-3.88.67-5.38 1.8l1.43 1.43A6.878 6.878 0 0112 4zM2.1 2.1L.69 3.51l3.33 3.33A8.98 8.98 0 003 11v7c0 1.1.9 2 2 2h4v-8H5v-1c0-.94.19-1.83.52-2.65L15 17.83V20h2.17l1 1H12v2h7c.34 0 .65-.09.93-.24l.55.55 1.41-1.41L2.1 2.1zM7 14v4H5v-4h2z'/%3E%3C/svg%3E")}.item-1OdjEX#user-context-deafen[aria-checked=true]{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M19 14v4h-2v-4h2M7 14v4H6c-.55 0-1-.45-1-1v-3h2m5-13a9 9 0 00-9 9v7c0 1.66 1.34 3 3 3h3v-8H5v-2c0-3.87 3.13-7 7-7s7 3.13 7 7v2h-4v8h4v1h-7v2h6c1.66 0 3-1.34 3-3V10a9 9 0 00-9-9z'/%3E%3C/svg%3E")}.item-1OdjEX#user-context-disable-video[aria-checked=false]{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M9.56 8l-2-2-4.15-4.14L2 3.27 4.73 6H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.21 0 .39-.08.55-.18L19.73 21l1.41-1.41-8.86-8.86L9.56 8zM5 16V8h1.73l8 8H5zm10-8v2.61l6 6V6.5l-4 4V7c0-.55-.45-1-1-1h-5.61l2 2H15z'/%3E%3C/svg%3E")}.item-1OdjEX#user-context-disable-video[aria-checked=true]{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M15 8v8H5V8h10m1-2H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4V7c0-.55-.45-1-1-1z'/%3E%3C/svg%3E")}.item-1OdjEX#user-context-change-nickname{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M14.06 9.02l.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83a.996.996 0 000-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z'/%3E%3C/svg%3E")}.item-1OdjEX#user-context-apps{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z'/%3E%3C/svg%3E")}.item-1OdjEX#user-context-invite-to-server{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M22 9V7h-2v2h-2v2h2v2h2v-2h2V9zM8 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zM8 13c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4zm6 5H2v-.99C2.2 16.29 5.3 15 8 15s5.8 1.29 6 2v1zM12.51 4.05C13.43 5.11 14 6.49 14 8s-.57 2.89-1.49 3.95C14.47 11.7 16 10.04 16 8s-1.53-3.7-3.49-3.95zM16.53 13.83C17.42 14.66 18 15.7 18 17v3h2v-3c0-1.45-1.59-2.51-3.47-3.17z'/%3E%3C/svg%3E")}.item-1OdjEX#user-context-add-friend{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M20 9V6h-2v3h-3v2h3v3h2v-3h3V9h-3zM9 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm6.39 8.56C13.71 13.7 11.53 13 9 13s-4.71.7-6.39 1.56A2.97 2.97 0 001 17.22V20h16v-2.78c0-1.12-.61-2.15-1.61-2.66zM15 18H3v-.78c0-.38.2-.72.52-.88C4.71 15.73 6.63 15 9 15c2.37 0 4.29.73 5.48 1.34.32.16.52.5.52.88V18z'/%3E%3C/svg%3E")}.item-1OdjEX#user-context-remove-friend{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M14 8c0-2.21-1.79-4-4-4S6 5.79 6 8s1.79 4 4 4 4-1.79 4-4zm-2 0c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zM2 18v2h16v-2c0-2.66-5.33-4-8-4s-8 1.34-8 4zm2 0c.2-.71 3.3-2 6-2 2.69 0 5.77 1.28 6 2H4zM17 10h6v2h-6z'/%3E%3C/svg%3E")}.item-1OdjEX#user-context-block{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8 0-1.85.63-3.55 1.69-4.9L16.9 18.31A7.902 7.902 0 0112 20zm6.31-3.1L7.1 5.69A7.902 7.902 0 0112 4c4.42 0 8 3.58 8 8 0 1.85-.63 3.55-1.69 4.9z'/%3E%3C/svg%3E")}.item-1OdjEX#user-context-mute-channel{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M0 15h2V9H0v6zm3 2h2V7H3v10zm19-8v6h2V9h-2zm-3 8h2V7h-2v10zM16.5 3h-9C6.67 3 6 3.67 6 4.5v15c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5v-15c0-.83-.67-1.5-1.5-1.5zM16 19H8V5h8v14z'/%3E%3C/svg%3E")}.item-1OdjEX#user-context-remove{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z'/%3E%3C/svg%3E")}.item-1OdjEX#user-context-kick{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M20 17.17l-3.37-3.38c.64.22 1.23.48 1.77.76.97.51 1.58 1.52 1.6 2.62zm1.19 4.02l-1.41 1.41-2.61-2.6H4v-2.78c0-1.12.61-2.15 1.61-2.66 1.29-.66 2.87-1.22 4.67-1.45L1.39 4.22 2.8 2.81l18.39 18.38zM15.17 18l-3-3H12c-2.37 0-4.29.73-5.48 1.34-.32.16-.52.5-.52.88V18h9.17zM12 6c1.1 0 2 .9 2 2 0 .86-.54 1.59-1.3 1.87l1.48 1.48a3.999 3.999 0 10-5.53-5.53l1.48 1.48A1.99 1.99 0 0112 6z'/%3E%3C/svg%3E")}.item-1OdjEX#user-context-ban{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M2.3 20.28l9.6-9.6-1.4-1.42-.72.71a.996.996 0 01-1.41 0l-.71-.71a.996.996 0 010-1.41l5.66-5.66a.996.996 0 011.41 0l.71.71c.39.39.39 1.02 0 1.41l-.71.69 1.42 1.43a.996.996 0 011.41 0c.39.39.39 1.03 0 1.42l1.41 1.41.71-.71c.39-.39 1.03-.39 1.42 0l.7.71c.39.39.39 1.03 0 1.42l-5.65 5.65c-.39.39-1.03.39-1.42 0l-.7-.7a.99.99 0 010-1.42l.7-.71-1.41-1.41-9.61 9.61a.996.996 0 01-1.41 0c-.39-.39-.39-1.03 0-1.42M20 19a2 2 0 012 2v1H12v-1a2 2 0 012-2h6z'/%3E%3C/svg%3E")}.item-1OdjEX#user-context-voice-mute[aria-checked=false]{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M10.8 4.9c0-.66.54-1.2 1.2-1.2s1.2.54 1.2 1.2l-.01 3.91L15 10.6V5c0-1.66-1.34-3-3-3-1.54 0-2.79 1.16-2.96 2.65l1.76 1.76V4.9zM19 11h-1.7c0 .58-.1 1.13-.27 1.64l1.27 1.27c.44-.88.7-1.87.7-2.91zM4.41 2.86L3 4.27l6 6V11c0 1.66 1.34 3 3 3 .23 0 .44-.03.65-.08l1.66 1.66c-.71.33-1.5.52-2.31.52-2.76 0-5.3-2.1-5.3-5.1H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28a7.13 7.13 0 002.55-.9l4.2 4.2 1.41-1.41L4.41 2.86z'/%3E%3C/svg%3E")}.item-1OdjEX#user-context-voice-mute[aria-checked=true]{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm-1-9c0-.55.45-1 1-1s1 .45 1 1v6c0 .55-.45 1-1 1s-1-.45-1-1V5zm6 6c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z'/%3E%3C/svg%3E")}.item-1OdjEX#user-context-voice-deafen[aria-checked=false]{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M12 4c3.87 0 7 3.13 7 7v1h-4v.17L16.83 14H19v2.17l2 2V11a9 9 0 00-9-9c-2.02 0-3.88.67-5.38 1.8l1.43 1.43A6.878 6.878 0 0112 4zM2.1 2.1L.69 3.51l3.33 3.33A8.98 8.98 0 003 11v7c0 1.1.9 2 2 2h4v-8H5v-1c0-.94.19-1.83.52-2.65L15 17.83V20h2.17l1 1H12v2h7c.34 0 .65-.09.93-.24l.55.55 1.41-1.41L2.1 2.1zM7 14v4H5v-4h2z'/%3E%3C/svg%3E")}.item-1OdjEX#user-context-voice-deafen[aria-checked=true]{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M19 14v4h-2v-4h2M7 14v4H6c-.55 0-1-.45-1-1v-3h2m5-13a9 9 0 00-9 9v7c0 1.66 1.34 3 3 3h3v-8H5v-2c0-3.87 3.13-7 7-7s7 3.13 7 7v2h-4v8h4v1h-7v2h6c1.66 0 3-1.34 3-3V10a9 9 0 00-9-9z'/%3E%3C/svg%3E")}.item-1OdjEX#user-context-roles{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M12.36 6l.4 2H18v6h-3.36l-.4-2H7V6h5.36M14 4H5v17h2v-7h5.6l.4 2h7V6h-5.6L14 4z'/%3E%3C/svg%3E")}.item-1OdjEX#user-context-permissions{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M14 12h4v1.5h-4zM14 15h4v1.5h-4z'/%3E%3Cpath d='M20 7h-5V4c0-1.1-.9-2-2-2h-2c-1.1 0-2 .9-2 2v3H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm-9 0V4h2v5h-2V7zm9 13H4V9h5c0 1.1.9 2 2 2h2c1.1 0 2-.9 2-2h5v11z'/%3E%3Ccircle cx='9' cy='13.5' r='1.5'/%3E%3Cpath d='M11.08 16.18c-.64-.28-1.34-.43-2.08-.43s-1.44.15-2.08.43c-.56.24-.92.78-.92 1.39V18h6v-.43c0-.61-.36-1.15-.92-1.39z'/%3E%3C/svg%3E")}.item-1OdjEX#user-context-voice-move{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M19 15l-6 6-1.42-1.42L15.17 16H4V4h2v10h9.17l-3.59-3.58L13 9l6 6z'/%3E%3C/svg%3E")}.item-1OdjEX#user-context-leave-thread{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z'/%3E%3C/svg%3E")}.item-1OdjEX#gdm-context-change-icon{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M18 20H4V6h9V4H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-9h-2v9zm-7.79-3.17l-1.96-2.36L5.5 18h11l-3.54-4.71zM20 4V1h-2v3h-3c.01.01 0 2 0 2h3v2.99c.01.01 2 0 2 0V6h3V4h-3z'/%3E%3C/svg%3E");-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex;padding:6px 8px;min-height:32px}.item-1OdjEX#gdm-context-change-icon .labelContainer-2vJzYL{padding:0;min-height:0}.item-1OdjEX#gdm-context-remove-icon{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M19 5v11.17l2 2V5c0-1.1-.9-2-2-2H5.83l2 2H19zM2.81 2.81L1.39 4.22 3 5.83V19c0 1.1.9 2 2 2h13.17l1.61 1.61 1.41-1.41L2.81 2.81zM5 19V7.83l7.07 7.07-.82 1.1L9 13l-3 4h8.17l2 2H5z'/%3E%3C/svg%3E")}.item-1OdjEX#gdm-context-unmute-channel{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6zM7.58 4.08L6.15 2.65C3.75 4.48 2.17 7.3 2.03 10.5h2a8.445 8.445 0 013.55-6.42zm12.39 6.42h2c-.15-3.2-1.73-6.02-4.12-7.85l-1.42 1.43a8.495 8.495 0 013.54 6.42z'/%3E%3C/svg%3E")}.item-1OdjEX#gdm-context-leave-channel{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z'/%3E%3C/svg%3E")}.item-1OdjEX#guild-context-folder-settings{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M19.43 12.98c.04-.32.07-.64.07-.98 0-.34-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46a.5.5 0 00-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65A.488.488 0 0014 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1a.566.566 0 00-.18-.03c-.17 0-.34.09-.43.25l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98 0 .33.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46a.5.5 0 00.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.06.02.12.03.18.03.17 0 .34-.09.43-.25l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zm-1.98-1.71c.04.31.05.52.05.73 0 .21-.02.43-.05.73l-.14 1.13.89.7 1.08.84-.7 1.21-1.27-.51-1.04-.42-.9.68c-.43.32-.84.56-1.25.73l-1.06.43-.16 1.13-.2 1.35h-1.4l-.19-1.35-.16-1.13-1.06-.43c-.43-.18-.83-.41-1.23-.71l-.91-.7-1.06.43-1.27.51-.7-1.21 1.08-.84.89-.7-.14-1.13c-.03-.31-.05-.54-.05-.74s.02-.43.05-.73l.14-1.13-.89-.7-1.08-.84.7-1.21 1.27.51 1.04.42.9-.68c.43-.32.84-.56 1.25-.73l1.06-.43.16-1.13.2-1.35h1.39l.19 1.35.16 1.13 1.06.43c.43.18.83.41 1.23.71l.91.7 1.06-.43 1.27-.51.7 1.21-1.07.85-.89.7.14 1.13zM12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z'/%3E%3C/svg%3E")}.item-1OdjEX#guild-context-folder-collapse{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z'/%3E%3C/svg%3E")}.item-1OdjEX#spotify-toggle-no-accounts{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M15.18 10.94c.2-.44.32-.92.32-1.44C15.5 7.57 13.93 6 12 6c-.52 0-1 .12-1.44.32l4.62 4.62z'/%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM4 12c0-1.85.63-3.55 1.69-4.9l2.86 2.86a3.47 3.47 0 002.99 2.99l2.2 2.2c-.57-.1-1.15-.15-1.74-.15-2.32 0-4.45.8-6.14 2.12A7.957 7.957 0 014 12zm8 8c-1.74 0-3.34-.56-4.65-1.5C8.66 17.56 10.26 17 12 17s3.34.56 4.65 1.5c-1.31.94-2.91 1.5-4.65 1.5zm6.31-3.1L7.1 5.69A7.902 7.902 0 0112 4c4.42 0 8 3.58 8 8 0 1.85-.63 3.54-1.69 4.9z'/%3E%3C/svg%3E")}.item-1OdjEX#channel-context-hide-voice-names{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M12 6a9.77 9.77 0 018.82 5.5 9.647 9.647 0 01-2.41 3.12l1.41 1.41c1.39-1.23 2.49-2.77 3.18-4.53C21.27 7.11 17 4 12 4c-1.27 0-2.49.2-3.64.57l1.65 1.65C10.66 6.09 11.32 6 12 6zm-1.07 1.14L13 9.21c.57.25 1.03.71 1.28 1.28l2.07 2.07c.08-.34.14-.7.14-1.07C16.5 9.01 14.48 7 12 7c-.37 0-.72.05-1.07.14zM2.01 3.87l2.68 2.68A11.738 11.738 0 001 11.5C2.73 15.89 7 19 12 19c1.52 0 2.98-.29 4.32-.82l3.42 3.42 1.41-1.41L3.42 2.45 2.01 3.87zm7.5 7.5l2.61 2.61c-.04.01-.08.02-.12.02a2.5 2.5 0 01-2.5-2.5c0-.05.01-.08.01-.13zm-3.4-3.4l1.75 1.75a4.6 4.6 0 00-.36 1.78 4.507 4.507 0 006.27 4.14l.98.98c-.88.24-1.8.38-2.75.38a9.77 9.77 0 01-8.82-5.5c.7-1.43 1.72-2.61 2.93-3.53z'/%3E%3C/svg%3E")}.item-1OdjEX#channel-context-mute-channel{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M0 15h2V9H0v6zm3 2h2V7H3v10zm19-8v6h2V9h-2zm-3 8h2V7h-2v10zM16.5 3h-9C6.67 3 6 3.67 6 4.5v15c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5v-15c0-.83-.67-1.5-1.5-1.5zM16 19H8V5h8v14z'/%3E%3C/svg%3E")}.item-1OdjEX#channel-context-channel-notifications{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z'/%3E%3C/svg%3E")}.item-1OdjEX#channel-context-edit-channel{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M14.06 9.02l.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83a.996.996 0 000-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z'/%3E%3C/svg%3E")}.item-1OdjEX#channel-context-invite-people{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M22 9V7h-2v2h-2v2h2v2h2v-2h2V9zM8 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zM8 13c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4zm6 5H2v-.99C2.2 16.29 5.3 15 8 15s5.8 1.29 6 2v1zM12.51 4.05C13.43 5.11 14 6.49 14 8s-.57 2.89-1.49 3.95C14.47 11.7 16 10.04 16 8s-1.53-3.7-3.49-3.95zM16.53 13.83C17.42 14.66 18 15.7 18 17v3h2v-3c0-1.45-1.59-2.51-3.47-3.17z'/%3E%3C/svg%3E")}.item-1OdjEX#channel-context-clone-channel{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M18 2H9c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H9V4h9v12zM3 15v-2h2v2H3zm0-5.5h2v2H3v-2zM10 20h2v2h-2v-2zm-7-1.5v-2h2v2H3zM5 22c-1.1 0-2-.9-2-2h2v2zm3.5 0h-2v-2h2v2zm5 0v-2h2c0 1.1-.9 2-2 2zM5 6v2H3c0-1.1.9-2 2-2z'/%3E%3C/svg%3E")}.item-1OdjEX#channel-context-create-text-channel{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z'/%3E%3C/svg%3E")}.item-1OdjEX#channel-context-create-voice-channel{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z'/%3E%3C/svg%3E")}.item-1OdjEX#channel-context-delete-channel{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z'/%3E%3C/svg%3E")}.item-1OdjEX#channel-context-collapse-category{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z'/%3E%3C/svg%3E")}.item-1OdjEX#channel-context-collapse-all-categories{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M4 15h16v-2H4v2zm0 4h16v-2H4v2zm0-8h16V9H4v2zm0-6v2h16V5H4z'/%3E%3C/svg%3E")}.item-1OdjEX#user-profile-actions-user-remove{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M14 8c0-2.21-1.79-4-4-4S6 5.79 6 8s1.79 4 4 4 4-1.79 4-4zm-2 0c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zM2 18v2h16v-2c0-2.66-5.33-4-8-4s-8 1.34-8 4zm2 0c.2-.71 3.3-2 6-2 2.69 0 5.77 1.28 6 2H4zM17 10h6v2h-6z'/%3E%3C/svg%3E")}.item-1OdjEX#user-profile-actions-user-block{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8 0-1.85.63-3.55 1.69-4.9L16.9 18.31A7.902 7.902 0 0112 20zm6.31-3.1L7.1 5.69A7.902 7.902 0 0112 4c4.42 0 8 3.58 8 8 0 1.85-.63 3.55-1.69 4.9z'/%3E%3C/svg%3E")}.item-1OdjEX#user-profile-actions-user-message{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M4 4h16v12H5.17L4 17.17V4m0-2c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H4zm2 10h8v2H6v-2zm0-3h12v2H6V9zm0-3h12v2H6V6z'/%3E%3C/svg%3E")}.item-1OdjEX#thread-context-thread-notifications{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z'/%3E%3C/svg%3E")}.item-1OdjEX#thread-context-join-thread{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M11 7L9.6 8.4l2.6 2.6H2v2h10.2l-2.6 2.6L11 17l5-5-5-5zm9 12h-8v2h8c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-8v2h8v14z'/%3E%3C/svg%3E")}.item-1OdjEX#thread-context-leave-thread{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z'/%3E%3C/svg%3E")}.item-1OdjEX#thread-context-edit-thread{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M14.06 9.02l.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83a.996.996 0 000-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z'/%3E%3C/svg%3E")}.item-1OdjEX#thread-context-open{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M20 6v12h-5v-12h5m0-2h-5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5c1.1 0 2-.9 2-2v-12c0-1.1-.9-2-2-2zM9 6v12h-5v-12h5m0-2h-5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5c1.1 0 2-.9 2-2v-12c0-1.1-.9-2-2-2z'/%3E%3C/svg%3E")}.item-1OdjEX#thread-context-archive-thread{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M19 3H5c-1.1 0-2 .9-2 2v14a2 2 0 002 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5v-3h3.56c.69 1.19 1.97 2 3.45 2s2.75-.81 3.45-2H19v3zm0-5h-4.99c0 1.1-.9 2-2 2s-2-.9-2-2H5V5h14v9z'/%3E%3C/svg%3E")}.item-1OdjEX#thread-context-auto-archive-thread{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M20.54 5.23l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27zM6.24 5h11.52l.81.97H5.44l.8-.97zM5 19V8h14v11H5zm8.45-9h-2.9v3H8l4 4 4-4h-2.55z'/%3E%3C/svg%3E")}.item-1OdjEX#thread-context-unarchive-thread{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M17.65 6.35A7.958 7.958 0 0012 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0112 18c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z'/%3E%3C/svg%3E")}.item-1OdjEX#thread-context-delete-channel{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z'/%3E%3C/svg%3E")}.item-1OdjEX#friend-row-start-video-call{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M15 8v8H5V8h10m1-2H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4V7c0-.55-.45-1-1-1z'/%3E%3C/svg%3E")}.item-1OdjEX#friend-row-start-voice-call{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M6.54 5c.06.89.21 1.76.45 2.59l-1.2 1.2c-.41-1.2-.67-2.47-.76-3.79h1.51m9.86 12.02c.85.24 1.72.39 2.6.45v1.49c-1.32-.09-2.59-.35-3.8-.75l1.2-1.19M7.5 3H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.49c0-.55-.45-1-1-1-1.24 0-2.45-.2-3.57-.57a.84.84 0 00-.31-.05c-.26 0-.51.1-.71.29l-2.2 2.2a15.149 15.149 0 01-6.59-6.59l2.2-2.2c.28-.28.36-.67.25-1.02A11.36 11.36 0 018.5 4c0-.55-.45-1-1-1z'/%3E%3C/svg%3E")}.item-1OdjEX#friend-row-remove-friend{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M14 8c0-2.21-1.79-4-4-4S6 5.79 6 8s1.79 4 4 4 4-1.79 4-4zm-2 0c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zM2 18v2h16v-2c0-2.66-5.33-4-8-4s-8 1.34-8 4zm2 0c.2-.71 3.3-2 6-2 2.69 0 5.77 1.28 6 2H4zM17 10h6v2h-6z'/%3E%3C/svg%3E")}.item-1OdjEX[id|=now-playing-menu]::before{content:none}.item-1OdjEX#now-playing-menu-message::before,.item-1OdjEX[id|=now-playing-menu-join]::before,.item-1OdjEX[id|=now-playing-menu-play]::before,.item-1OdjEX[id|=now-playing-menu-spotify-play]::before,.item-1OdjEX#now-playing-menu-xbox-connect::before{content:"" !important}.item-1OdjEX#now-playing-menu-message{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M4 4h16v12H5.17L4 17.17V4m0-2c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H4zm2 10h8v2H6v-2zm0-3h12v2H6V9zm0-3h12v2H6V6z'/%3E%3C/svg%3E")}.item-1OdjEX[id|=now-playing-menu-join]{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M11 7L9.6 8.4l2.6 2.6H2v2h10.2l-2.6 2.6L11 17l5-5-5-5zm9 12h-8v2h8c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-8v2h8v14z'/%3E%3C/svg%3E")}.item-1OdjEX[id|=now-playing-menu-play]{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M21 6H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 10H3V8h18v8zM6 15h2v-2h2v-2H8V9H6v2H4v2h2z'/%3E%3Ccircle cx='14.5' cy='13.5' r='1.5'/%3E%3Ccircle cx='18.5' cy='10.5' r='1.5'/%3E%3C/svg%3E")}.item-1OdjEX[id|=now-playing-menu-spotify-play]{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='32' width='32' viewBox='0 0 168 168'%3E%3Cpath fill='%231ED760' d='M83.837 20.21c-35.15 0-63.645 28.495-63.645 63.644 0 35.151 28.496 63.644 63.645 63.644 35.153 0 63.645-28.493 63.645-63.644 0-35.147-28.492-63.64-63.646-63.64l.001-.003zm29.187 91.793a3.965 3.965 0 01-5.457 1.315c-14.943-9.127-33.754-11.195-55.908-6.133a3.968 3.968 0 01-1.766-7.737c24.244-5.539 45.04-3.154 61.816 7.099a3.967 3.967 0 011.315 5.456zm7.79-17.33c-1.436 2.336-4.492 3.073-6.825 1.636-17.107-10.515-43.185-13.56-63.42-7.418a4.969 4.969 0 01-6.193-3.306 4.97 4.97 0 013.31-6.189c23.113-7.013 51.848-3.616 71.494 8.457 2.333 1.436 3.07 4.491 1.634 6.822v-.001zm.669-18.045c-20.513-12.183-54.355-13.303-73.94-7.36a5.952 5.952 0 11-3.456-11.392c22.482-6.825 59.855-5.506 83.471 8.514a5.946 5.946 0 012.083 8.157 5.948 5.948 0 01-8.155 2.081z'/%3E%3C/svg%3E")}.item-1OdjEX#now-playing-menu-xbox-connect{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 788 444' width='32' height='32'%3E%3Cg transform='matrix(3 0 0 3 -790 -445)'%3E%3Cg fill='%23FFF'%3E%3Cpath d='M394 202.3c.1 0 .2.1.3.2 29.9 22.7 81 78.9 65.4 94.7-37.6 32.9-93.9 32.9-131.5 0-15.7-15.9 35.5-72.1 65.4-94.7.2-.1.3-.2.4-.2M446.1 136.7c-15.3-9.1-31.9-14.7-52.1-14.7-20.1 0-36.7 5.5-52.1 14.7-.2.1-.3.3-.2.5.1.2.3.2.5.2 19.3-4.2 48.8 12.6 51.5 14.2.1.1.3.1.4 0 2.8-1.7 32.1-18.4 51.5-14.2.2.1.4 0 .5-.2.2-.2.1-.4 0-.5M324.1 150.8c-.2.1-.3.2-.4.3-35.6 35.3-39.5 91.6-9.1 131.4.1.2.3.2.5.2.2-.1.2-.3.1-.5-7.6-23.5 31.3-80.6 51.5-104.5.1-.1.1-.2.1-.3 0-.1-.1-.3-.2-.3-30.4-30.4-40.8-27.2-42.5-26.3M421.4 177c-.1.1-.2.2-.2.3 0 .1.1.2.1.3 20 23.9 59 81 51.5 104.5-.1.2-.1.4.1.5.2.1.4 0 .5-.2 30.3-39.9 26.4-96-9.1-131.4-.1-.1-.3-.2-.4-.3-1.7-.8-12.1-4-42.5 26.3'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")}.item-1OdjEX[id|=video-device-context-video-device]{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M15 8v8H5V8h10m1-2H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4V7c0-.55-.45-1-1-1z'/%3E%3C/svg%3E")}.item-1OdjEX#video-device-context-report-stream-problem{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z'/%3E%3C/svg%3E")}.item-1OdjEX#rtc-channel-VOICE_ACTIVITY{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M9 13c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2zm0 8c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm-6 4c.22-.72 3.31-2 6-2c2.7 0 5.8 1.29 6 2H3zM15.08 7.05c.84 1.18.84 2.71 0 3.89l1.68 1.69c2.02-2.02 2.02-5.07 0-7.27l-1.68 1.69zM20.07 2l-1.63 1.63c2.77 3.02 2.77 7.56 0 10.74L20.07 16c3.9-3.89 3.91-9.95 0-14z'/%3E%3C/svg%3E")}.item-1OdjEX#rtc-channel-PUSH_TO_TALK{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M7 22h2v2H7zm5-9c1.66 0 3-1.34 3-3V4c0-1.66-1.34-3-3-3S9 2.34 9 4v6c0 1.66 1.34 3 3 3zm-1-9c0-.55.45-1 1-1s1 .45 1 1v6c0 .56-.44 1-1 1c-.55 0-1-.45-1-1V4zm0 18h2v2h-2zm4 0h2v2h-2zm4-12h-1.7c0 3-2.54 5.1-5.3 5.1S6.7 13 6.7 10H5c0 3.41 2.72 6.23 6 6.72V20h2v-3.28c3.28-.49 6-3.31 6-6.72z'/%3E%3C/svg%3E")}.item-1OdjEX#rtc-channel-show-voice-states[aria-checked=true]{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M12 6a9.77 9.77 0 018.82 5.5C19.17 14.87 15.79 17 12 17s-7.17-2.13-8.82-5.5A9.77 9.77 0 0112 6m0-2C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4zm0 5a2.5 2.5 0 010 5 2.5 2.5 0 010-5m0-2c-2.48 0-4.5 2.02-4.5 4.5S9.52 16 12 16s4.5-2.02 4.5-4.5S14.48 7 12 7z'/%3E%3C/svg%3E")}.item-1OdjEX#rtc-channel-show-voice-states[aria-checked=false]{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M12 6a9.77 9.77 0 018.82 5.5 9.647 9.647 0 01-2.41 3.12l1.41 1.41c1.39-1.23 2.49-2.77 3.18-4.53C21.27 7.11 17 4 12 4c-1.27 0-2.49.2-3.64.57l1.65 1.65C10.66 6.09 11.32 6 12 6zm-1.07 1.14L13 9.21c.57.25 1.03.71 1.28 1.28l2.07 2.07c.08-.34.14-.7.14-1.07C16.5 9.01 14.48 7 12 7c-.37 0-.72.05-1.07.14zM2.01 3.87l2.68 2.68A11.738 11.738 0 001 11.5C2.73 15.89 7 19 12 19c1.52 0 2.98-.29 4.32-.82l3.42 3.42 1.41-1.41L3.42 2.45 2.01 3.87zm7.5 7.5l2.61 2.61c-.04.01-.08.02-.12.02a2.5 2.5 0 01-2.5-2.5c0-.05.01-.08.01-.13zm-3.4-3.4l1.75 1.75a4.6 4.6 0 00-.36 1.78 4.507 4.507 0 006.27 4.14l.98.98c-.88.24-1.8.38-2.75.38a9.77 9.77 0 01-8.82-5.5c.7-1.43 1.72-2.61 2.93-3.53z'/%3E%3C/svg%3E")}.item-1OdjEX#subscription-context-apply{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M6.99 11L3 15l3.99 4v-3H14v-2H6.99v-3zM21 9l-3.99-4v3H10v2h7.01v3L21 9z'/%3E%3C/svg%3E")}.item-1OdjEX#subscription-context-cancel{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.59-13L12 10.59 8.41 7 7 8.41 10.59 12 7 15.59 8.41 17 12 13.41 15.59 17 17 15.59 13.41 12 17 8.41z'/%3E%3C/svg%3E")}.item-1OdjEX#stream-context-watch{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M9 10v8l7-4zm12-4h-7.58l3.29-3.29L16 2l-4 4h-.03l-4-4-.69.71L10.56 6H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 14H3V8h18v12z'/%3E%3C/svg%3E")}.item-1OdjEX#stream-context-mute[aria-checked=false]{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M10.8 4.9c0-.66.54-1.2 1.2-1.2s1.2.54 1.2 1.2l-.01 3.91L15 10.6V5c0-1.66-1.34-3-3-3-1.54 0-2.79 1.16-2.96 2.65l1.76 1.76V4.9zM19 11h-1.7c0 .58-.1 1.13-.27 1.64l1.27 1.27c.44-.88.7-1.87.7-2.91zM4.41 2.86L3 4.27l6 6V11c0 1.66 1.34 3 3 3 .23 0 .44-.03.65-.08l1.66 1.66c-.71.33-1.5.52-2.31.52-2.76 0-5.3-2.1-5.3-5.1H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28a7.13 7.13 0 002.55-.9l4.2 4.2 1.41-1.41L4.41 2.86z'/%3E%3C/svg%3E")}.item-1OdjEX#stream-context-mute[aria-checked=true]{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm-1-9c0-.55.45-1 1-1s1 .45 1 1v6c0 .55-.45 1-1 1s-1-.45-1-1V5zm6 6c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z'/%3E%3C/svg%3E")}.item-1OdjEX#channel-call-overflow-popout-no-video-hide[aria-checked=true],.item-1OdjEX#user-context-no-video-hide[aria-checked=true],.item-1OdjEX#stream-context-no-video-hide[aria-checked=true]{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M12 6a9.77 9.77 0 018.82 5.5C19.17 14.87 15.79 17 12 17s-7.17-2.13-8.82-5.5A9.77 9.77 0 0112 6m0-2C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4zm0 5a2.5 2.5 0 010 5 2.5 2.5 0 010-5m0-2c-2.48 0-4.5 2.02-4.5 4.5S9.52 16 12 16s4.5-2.02 4.5-4.5S14.48 7 12 7z'/%3E%3C/svg%3E")}.item-1OdjEX#channel-call-overflow-popout-no-video-hide[aria-checked=false],.item-1OdjEX#user-context-no-video-hide[aria-checked=false],.item-1OdjEX#stream-context-no-video-hide[aria-checked=false]{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M12 6a9.77 9.77 0 018.82 5.5 9.647 9.647 0 01-2.41 3.12l1.41 1.41c1.39-1.23 2.49-2.77 3.18-4.53C21.27 7.11 17 4 12 4c-1.27 0-2.49.2-3.64.57l1.65 1.65C10.66 6.09 11.32 6 12 6zm-1.07 1.14L13 9.21c.57.25 1.03.71 1.28 1.28l2.07 2.07c.08-.34.14-.7.14-1.07C16.5 9.01 14.48 7 12 7c-.37 0-.72.05-1.07.14zM2.01 3.87l2.68 2.68A11.738 11.738 0 001 11.5C2.73 15.89 7 19 12 19c1.52 0 2.98-.29 4.32-.82l3.42 3.42 1.41-1.41L3.42 2.45 2.01 3.87zm7.5 7.5l2.61 2.61c-.04.01-.08.02-.12.02a2.5 2.5 0 01-2.5-2.5c0-.05.01-.08.01-.13zm-3.4-3.4l1.75 1.75a4.6 4.6 0 00-.36 1.78 4.507 4.507 0 006.27 4.14l.98.98c-.88.24-1.8.38-2.75.38a9.77 9.77 0 01-8.82-5.5c.7-1.43 1.72-2.61 2.93-3.53z'/%3E%3C/svg%3E")}.item-1OdjEX#manage-streams-report-stream-problem,.item-1OdjEX#channel-call-overflow-popout-report-stream-problem,.item-1OdjEX#stream-context-report-stream-problem{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z'/%3E%3C/svg%3E")}.item-1OdjEX#user-context-focus-video{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14c1.1 0 2-.9 2-2V5a2 2 0 00-2-2zm0 16H5V7h14v12zm-7-8.5c1.84 0 3.48.96 4.34 2.5-.86 1.54-2.5 2.5-4.34 2.5s-3.48-.96-4.34-2.5c.86-1.54 2.5-2.5 4.34-2.5M12 9c-2.73 0-5.06 1.66-6 4 .94 2.34 3.27 4 6 4s5.06-1.66 6-4c-.94-2.34-3.27-4-6-4zm0 5.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z'/%3E%3C/svg%3E")}.item-1OdjEX#manage-streams-stream-settings{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zM7.5 13h2v2H11V9H9.5v2.5h-2V9H6v6h1.5zM18 14v-4c0-.55-.45-1-1-1h-4v6h4c.55 0 1-.45 1-1zm-1.5-.5h-2v-3h2v3z'/%3E%3C/svg%3E")}.item-1OdjEX#manage-streams-change-windows,.item-1OdjEX#manage-streams-stop-streaming{flex-direction:row-reverse}.item-1OdjEX#manage-streams-change-windows .iconContainer-1-SsTR,.item-1OdjEX#manage-streams-change-windows .imageContainer-1wSPgI,.item-1OdjEX#manage-streams-stop-streaming .iconContainer-1-SsTR,.item-1OdjEX#manage-streams-stop-streaming .imageContainer-1wSPgI{margin-left:0}.item-1OdjEX#manage-streams-change-windows .label-2gNW3x:not(:only-child),.item-1OdjEX#manage-streams-stop-streaming .label-2gNW3x:not(:only-child){margin-left:8px}.item-1OdjEX#manage-streams-change-windows::before,.item-1OdjEX#manage-streams-stop-streaming::before{content:none}.item-1OdjEX[id|=pc]::before{content:none}.item-1OdjEX[id|=bdfdb]::before{content:none}.item-1OdjEX#guild-context-cutecord-add-cute-guild,.item-1OdjEX#user-context-cutecord-add-cute-user{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M20 9V6h-2v3h-3v2h3v3h2v-3h3V9h-3zM9 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm6.39 8.56C13.71 13.7 11.53 13 9 13s-4.71.7-6.39 1.56A2.97 2.97 0 001 17.22V20h16v-2.78c0-1.12-.61-2.15-1.61-2.66zM15 18H3v-.78c0-.38.2-.72.52-.88C4.71 15.73 6.63 15 9 15c2.37 0 4.29.73 5.48 1.34.32.16.52.5.52.88V18z'/%3E%3C/svg%3E")}.item-1OdjEX#guild-context-cutecord-add-meanie-guild,.item-1OdjEX#user-context-cutecord-add-meanie-user{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M14 8c0-2.21-1.79-4-4-4S6 5.79 6 8s1.79 4 4 4 4-1.79 4-4zm-2 0c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zM2 18v2h16v-2c0-2.66-5.33-4-8-4s-8 1.34-8 4zm2 0c.2-.71 3.3-2 6-2 2.69 0 5.77 1.28 6 2H4zM17 10h6v2h-6z'/%3E%3C/svg%3E")}.item-1OdjEX#user-context-local-nicknames-edit{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M16.81 8.94l-3.75-3.75L4 14.25V18h3.75l9.06-9.06zM6 16v-.92l7.06-7.06.92.92L6.92 16H6zM19.71 6.04a.996.996 0 000-1.41l-2.34-2.34a1.001 1.001 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83zM2 20h20v4H2z'/%3E%3C/svg%3E")}.item-1OdjEX#user-context-local-nicknames-reset{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M14.06 9.02l.92.92-1.11 1.11 1.41 1.41 2.52-2.52-3.75-3.75-2.52 2.52 1.41 1.41 1.12-1.1zm6.65-1.98a.996.996 0 000-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29s-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83zM2.81 2.81L1.39 4.22l7.32 7.32L3 17.25V21h3.75l5.71-5.71 7.32 7.32 1.41-1.41L2.81 2.81zM5.92 19H5v-.92l5.13-5.13.92.92L5.92 19z'/%3E%3C/svg%3E")}.item-1OdjEX#message-item-0-0-1{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M18 2H9c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H9V4h9v12zM3 15v-2h2v2H3zm0-5.5h2v2H3v-2zM10 20h2v2h-2v-2zm-7-1.5v-2h2v2H3zM5 22c-1.1 0-2-.9-2-2h2v2zm3.5 0h-2v-2h2v2zm5 0v-2h2c0 1.1-.9 2-2 2zM5 6v2H3c0-1.1.9-2 2-2z'/%3E%3C/svg%3E")}.item-1OdjEX#message-item-0-0-2{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M19 12v7H5v-7H3v7c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7h-2zm-6 .67l2.59-2.58L17 11.5l-5 5-5-5 1.41-1.41L11 12.67V3h2v9.67z'/%3E%3C/svg%3E")}.item-1OdjEX#message-item-0-0-3{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M11 7L9.6 8.4l2.6 2.6H2v2h10.2l-2.6 2.6L11 17l5-5-5-5zm9 12h-8v2h8c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-8v2h8v14z'/%3E%3C/svg%3E")}.item-1OdjEX#message-item-0-0-4{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z'/%3E%3C/svg%3E")}.item-1OdjEX#message-PluginDownloaderContextLink{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M10.5 4.5c.28 0 .5.22.5.5v2h6v6h2c.28 0 .5.22.5.5s-.22.5-.5.5h-2v6h-2.12c-.68-1.75-2.39-3-4.38-3s-3.7 1.25-4.38 3H4v-2.12c1.75-.68 3-2.39 3-4.38 0-1.99-1.24-3.7-2.99-4.38L4 7h6V5c0-.28.22-.5.5-.5m0-2A2.5 2.5 0 008 5H4c-1.1 0-1.99.9-1.99 2v3.8h.29c1.49 0 2.7 1.21 2.7 2.7s-1.21 2.7-2.7 2.7H2V20c0 1.1.9 2 2 2h3.8v-.3c0-1.49 1.21-2.7 2.7-2.7s2.7 1.21 2.7 2.7v.3H17c1.1 0 2-.9 2-2v-4a2.5 2.5 0 000-5V7c0-1.1-.9-2-2-2h-4a2.5 2.5 0 00-2.5-2.5z'/%3E%3C/svg%3E")}.item-1OdjEX#message-ThemeDownloaderContextLink{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M18 4V3c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V6h1v4H9v11c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-9h8V4h-3zm-2 2H6V4h10v2z'/%3E%3C/svg%3E")}
/*
    EXTERNAL MODULES
*/
/* Add-Ons | Discolored - Colorize Discord's boring SVGs! */
/* 🛩️ Airplane */
[style*='background-image: url("/assets/88d6e5a673e816bf927dc8fe11d42d29.svg");'],
[style*='background-image: url("/assets/9937df80bc9c58a3e67709f58402f4db.svg");'] {
    background-image: url('https://nyri4.github.io/Discolored/assets/airplane.svg') !important;
}

/* 🕹️ Arcades */
[style*='background-image: url("/assets/beec347635d7597215747fcaf461e569.svg");'],
[style*='background-image: url("/assets/9581653a5a4d0b7b56187044a9db301a.svg");'] {
    background-image: url('https://nyri4.github.io/Discolored/assets/arcades.svg') !important;
}

/* 🔨 Ban Hammer */
[style*='background-image: url("/assets/d6b031b6f8ec4761e1dac30e4e33f235.svg");'],
[style*='background-image: url("/assets/8f841811896e9d1eefcd13bcdaca9579.svg");'] {
    background-image: url('https://nyri4.github.io/Discolored/assets/ban_hammer.svg') !important;
}

/* 🚀 Boost */
.theme-dark .channelNotice-3-mDJt, .theme-light .channelNotice-3-mDJt {
    background-image: url('https://nyri4.github.io/Discolored/assets/boost.svg');
    background-repeat: no-repeat;
}

/* 🔎💥 Broken magnifying glass */
.theme-dark .errorImage-19HeaA, .theme-light .errorImage-19HeaA {
    background: url('https://nyri4.github.io/Discolored/assets/broken.svg') center/cover;
}

/* 🏰 Castle */
.theme-dark .verification-2oQUwN .image-cLINxN, .theme-light .verification-2oQUwN .image-cLINxN {
    background: url('https://nyri4.github.io/Discolored/assets/castle.svg') 50%/80% no-repeat;
}

/* ⚙️ Channel settings here and u didn't finished */
[src="/assets/3726fbfb6d657f9baf0582017ec8238c.svg"],
[src="/assets/075cd4741407c7fb961e0758155a05e1.svg"] {
    content: url('https://nyri4.github.io/Discolored/assets/channel_settings.svg');
}

/* ⚙️ Category settings */
[src="/assets/79a16912d0c0f2b7b430f8906bdfff9d.svg"],
[src="/assets/40afd79566cad1d0b437bf41a9c410df.svg"] {
    content: url('https://nyri4.github.io/Discolored/assets/category_settings.svg');
}

/* 👥 🖼️ Community banner */
.previewCard-DOrO3c .splashImage-352DQ1 {
    content: url('https://nyri4.github.io/Discolored/assets/community_banner.svg');
}

/* 🖥️ Computer */
[style*='background-image: url("/assets/c115d59ca13c0f942965a82a0f05bf01.svg");'],
[style*='background-image: url(/assets/ad530d02033b87bb89752f915c2fbe3c.svg");'] {
    background-image: url('https://nyri4.github.io/Discolored/assets/computer.svg') !important;
}

/* 💥 Crash */
.theme-dark .image-35kDIs, .theme-light .image-35kDIs {
    background-image: url('https://nyri4.github.io/Discolored/assets/crash.svg');
}

/* 🎮 Developer Options */
[style*='background-image: url("/assets/350e1c6739823620f031d023a48ac9d4.svg");'],
[style*='background-image: url("/assets/3123277eb2e7083fde983985dcd209a6.svg");'] {
    background-image: url('https://nyri4.github.io/Discolored/assets/dev_options.svg') !important;
}

/* 😃 Emojis */
[style*='background-image: url("/assets/b21e574729a2e2b9243d811be7333677.svg");'],
[style*='background-image: url("/assets/2a35872721f98f9de6218eaedbd54a78.svg");'] {
    background-image: url('https://nyri4.github.io/Discolored/assets/emojis.svg') !important;
}

/* 📭 Empty */
.theme-dark .image-3rvd0n, .theme-light .image-3rvd0n,
.theme-dark .emptyImage-2pCD2j, .theme-light .emptyImage-2pCD2j {
    background-image: url('https://nyri4.github.io/Discolored/assets/empty.svg');
}

/* 😊 Friend */
.theme-dark .channelNotice-tO6Tus.invite-OjTXrW, .theme-light .channelNotice-tO6Tus.invite-OjTXrW {
    background: url('https://nyri4.github.io/Discolored/assets/friend.svg') no-repeat center 20px;
    background-size: 40%;
}

/* 🤷‍♂️ GIF not found */
.theme-dark .sadImage-2_mw0p, .theme-light .sadImage-2_mw0p {
    background-image: url('https://nyri4.github.io/Discolored/assets/gif_not_found.svg');
}

/* 🤷‍ GIF picker end */
.theme-dark .endContainer-3FEUTM:after, .theme-light .endContainer-3FEUTM:after {
    background-image: url('https://nyri4.github.io/Discolored/assets/gif_picker_end.svg');
}

/* 👥 Groups */
.theme-dark .noFriends-1Y8EWR .errorStateIcon-3y6XWh, .theme-light .noFriends-1Y8EWR .errorStateIcon-3y6XWh5 {
    background-image: url('https://nyri4.github.io/Discolored/assets/groups.svg');
}

/* 🎁 Gift Inventory */
.theme-dark .emptyStateImage-2qGUMK, .theme-light .emptyStateImage-2qGUMK {
    background-image: url('https://nyri4.github.io/Discolored/assets/gift_inventory.svg');
}

/* 🏠 Houses */
.theme-dark .emptyIconGuilds-2NNSTU, .theme-light .emptyIconGuilds-2NNSTU {
    background-image: url('https://nyri4.github.io/Discolored/assets/houses.svg');
}

/* ✨ Integrations */
.theme-dark .footerImage-4UrEF0, .theme-light .footerImage-4UrEF0 {
    background-image: url('https://nyri4.github.io/Discolored/assets/integrations.svg');
}

/* 🔑 Key */
.theme-dark .channelNotice-tO6Tus.guildMFAWarning-3GEzs8, .theme-light .channelNotice-tO6Tus.guildMFAWarning-3GEzs8 {
    background: url('https://nyri4.github.io/Discolored/assets/key.svg') no-repeat center 20px;
    background-size: 40%;
}

/* 💎 Nitro */
[src="/assets/b60ecd82d8fa5a8e21739e7025692429.svg"] {
    content: url('https://nyri4.github.io/Discolored/assets/nitro.svg');
}

/* ❌ No channel */
[style*='background-image: url("/assets/ed2007aab2da31a5436e70a28b4d59f9.svg");'],
[style*='background-image: url("/assets/7ad95b56788fc31c3e5eec667129ba68.svg");'] {
    background-image: url('https://nyri4.github.io/Discolored/assets/no_channel.svg') !important;
}

/* ⌨️ No keybinds */
[style*='background-image: url("/assets/12d9bda733d6432d605e8011c22c3e56.svg");'],
[style*='background-image: url("/assets/8de4b17bb44ad5ef9f21f2f6f16aa8d1.svg");']  {
    background-image: url('https://nyri4.github.io/Discolored/assets/no_keybinds.svg') !important;
}

/* 🙁 No Mutuals */
.theme-dark .emptyIconFriends-2LNxTX, .theme-light .emptyIconFriends-2LNxTX {
    background-image: url('https://nyri4.github.io/Discolored/assets/no_mutuals.svg');
    background-size: 100%;
}

/* 🔎 🗣️ No results conversation */
.theme-dark .emptyState-1OLqEw, .theme-light .emptyState-1OLqEw {
    background-image: url('https://nyri4.github.io/Discolored/assets/no_results_conv.svg');
    background-size: 20%;
}

/* 🔎 No results search bar*/
.theme-dark .noResultsImage-1-dP2n, .theme-light .noResultsImage-1-dP2n {
    background-image: url('https://nyri4.github.io/Discolored/assets/no_results.svg');
}

/* 📱 Phones */
.theme-dark .verificationBlock-xhj3fR .image-cLINxN.phone-2wue_-, .theme-light .verificationBlock-xhj3fR .image-cLINxN.phone-2wue_- {
    background-image: url('https://nyri4.github.io/Discolored/assets/phones.svg');
}

/* 🖼️ Pictures */
[style*='background-image: url("/assets/f1e026332f1d6e902bcbbc07892bc849.svg");'],
[style*='background-image: url("/assets/fd65da49c3073002049383baeb24e658.svg");'] {
    background-image: url('https://nyri4.github.io/Discolored/assets/pictures.svg') !important;
}

/* 📌 Pinned */
[style*='background-image: url("/assets/ef3a1ed683cfcf029971b12a26462072.svg");'],
[style*='background-image: url("/assets/96ad9c7f6f636a7fb2028e2a07847776.svg");'] {
    background-image: url('https://nyri4.github.io/Discolored/assets/pinned.svg') !important;
}

/* 💩 Poo */
.theme-dark .imageError-dy476I, .theme-light .imageError-dy476I,
.theme-dark .invalidPoop--w1123, .theme-light .invalidPoop--w1123,
.theme-dark .guildIconExpired-2BFmZC, .theme-light .guildIconExpired-2BFmZC {
    background-image: url('https://nyri4.github.io/Discolored/assets/poop.svg');
}

/* 📜 Scroll */
[style*='background-image: url("/assets/6f3eec6ec5f47f36e3bce40e6176bfbe.svg");'],
[style*='background-image: url("/assets/ba5f6c10149932705aef4f169ad75e5a.svg");'] {
    background-image: url('https://nyri4.github.io/Discolored/assets/scroll.svg') !important;
}

/* 🔎 Searching */
.theme-dark .searchIndexBackground-2pbSFD, .theme-light .searchIndexBackground-2pbSFD {
    background-image: url('https://nyri4.github.io/Discolored/assets/searching.svg');
}

/* 🔥 Server outage */
.theme-dark .art-_juKdZ, .theme-light .art-_juKdZ {
    background-image: url('https://nyri4.github.io/Discolored/assets/server_outage.svg');
}

/* 🟢 Spotify error */
.theme-dark .artworkSpotifySessionEnded-D18iXB, .theme-light .artworkSpotifySessionEnded-D18iXB {
    background-image: url('https://nyri4.github.io/Discolored/assets/spotify_error.svg');
}

/* 🤷‍♂️ Sticker not found */
[style*='background-image: url("/assets/bee123bfad40a3fb4bb42f8d318dd867.svg");'],
[style*='background-image: url("/assets/bee123bfad40a3fb4bb42f8d318dd867.svg");'] {
    background-image: url('https://nyri4.github.io/Discolored/assets/sticker_not_found.svg') !important;
}

/* 🔴 Streamer Mode */
.theme-dark .streamerModeEnabledImage-2EveVD, .theme-light .streamerModeEnabledImage-2EveVD,
.theme-dark .emptyIconStreamerMode-3P4I-V, .theme-light .emptyIconStreamerMode-3P4I-V {
    background-image: url('https://nyri4.github.io/Discolored/assets/streamer_mode.svg');
}

/* ↔️ Switch */
.theme-dark .channelNotice-tO6Tus.quickswitcher-35bYg4, .theme-light .channelNotice-tO6Tus.quickswitcher-35bYg4 {
    background: url('https://nyri4.github.io/Discolored/assets/switch.svg') no-repeat center 20px;
}

/* 📹 Test Video */
[src="/assets/ca9e397003df8b46709315d7a248c7de.svg"],
[src="/assets/4f1b647aa3292d7d0c30658b659ed9f3.svg"] {
    content: url('https://nyri4.github.io/Discolored/assets/test_video.svg');
}

/* 🗝️ Treasure Chest */
[src="/assets/67430d140a79af95585a19d304731dc5.svg"],
[src="/assets/d6779172ed9209b5ad49df923ea7820c.svg"] {
    content: url('https://nyri4.github.io/Discolored/assets/treasure_chest.svg');
}

/* 🎁 Unclaimed */
.theme-dark .imageUnclaimed-5nJyYs, .theme-light .imageUnclaimed-5nJyYs {
    background-image: url('https://nyri4.github.io/Discolored/assets/unclaimed.svg');
}

/* 🔊 Vocal full */
.fullArt-KDeDyg {
    background-image: url('https://nyri4.github.io/Discolored/assets/vocal_full.svg');
    background-size: 100%;
}

/* ⛏️ Wumpus Mining */
[style*='background-image: url("/assets/8c998f8fb62016fcfb4901e424ff378b.svg");'],
[style*='background-image: url("/assets/645df33d735507f39c78ce0cac7437f0.svg");'] {
    background-image: url('https://nyri4.github.io/Discolored/assets/wumpus_mining.svg') !important;
}

/* 🗻 Wumpus Mountains */
[style*='background-image: url("/assets/b669713872b43ca42333264abf9c858e.svg");'],
[style*='background-image: url("/assets/c84361b810ca7c10d6e8ddb6ea722ebe.svg");'],
[style*='background-image: url("/assets/b36c705f790dad253981f1893085015a.svg");'],
[style*='background-image: url("/assets/36c9a2fb7d0593a581a92373121c2848.svg");'] {
    background-image: url('https://nyri4.github.io/Discolored/assets/wumpus_mountain.svg') !important;
}

/* 💤 Wumpus Sleeping */
[style*='background-image: url("/assets/b36de980b174d7b798c89f35c116e5c6.svg");'],
[style*='background-image: url("/assets/fd879a28807b66b38d54e7db6ea18a69.svg");'] {
    background-image: url('https://nyri4.github.io/Discolored/assets/wumpus_sleeping.svg') !important;
}

/* 🍵 Wumpus Tea Party */
[style*='background-image: url("/assets/b5eb2f7d6b3f8cc9b60be4a5dcf28015.svg");'],
[style*='background-image: url("/assets/6b7098de4cc16f7e431ad8f9aae7f6db.svg");'],
.theme-dark .notFriends-lSusTz .errorStateIcon-3y6XWh, .theme-light .notFriends-lSusTz .errorStateIcon-3y6XWh {
    background-image: url('https://nyri4.github.io/Discolored/assets/wumpus_tea_party.svg') !important;
}

/* 💬 Group chat */
[class^="partyFull-"] {
    background-image: url('https://nyri4.github.io/Discolored/assets/weapons.svg') !important;
}

/* 🏓 @everyone */
.everyonePopout-nEbJY3 g > :nth-child(2) > :first-child path { fill: #0000003d;}
.everyonePopout-nEbJY3 g > :nth-child(3) > :first-child path { fill: #99ABD8;}
.everyonePopout-nEbJY3 g > :nth-child(3) > :nth-child(2) path { fill: #7A8EC7;}
.everyonePopout-nEbJY3 g > :nth-child(4) > :first-child path { fill: #B3CAFB;}
.everyonePopout-nEbJY3 g > :nth-child(4) > :nth-child(2) path { fill: #C2D2F1;}
.everyonePopout-nEbJY3 g > :nth-child(4) > :nth-child(3) path,
.everyonePopout-nEbJY3 g > :nth-child(4) > :nth-child(4) path { fill: #A0B2DC;}
.everyonePopout-nEbJY3 g > :nth-child(4) > :nth-child(5) path,
.everyonePopout-nEbJY3 g > :nth-child(4) > :nth-child(6) path { fill: #7A8EC7;}
.everyonePopout-nEbJY3 g > :nth-child(4) > :nth-child(7) path { fill: #8BA0D2;}
.everyonePopout-nEbJY3 g > :nth-child(4) > :nth-child(8) path { fill: #C2D2F1;}
.everyonePopout-nEbJY3 g > :nth-child(6) > :nth-child(2) path { fill: #99ABD8;}
.everyonePopout-nEbJY3 g > :nth-child(10) > :first-child path { fill: #E0C310;}
.everyonePopout-nEbJY3 g > :nth-child(11) > :first-child path { fill: #FBD907;}
/* Add-Ons | Google Emojis */
@import url(https://mwittrien.github.io/BetterDiscordAddons/Themes/_res/ThemeDevBadge.css);
@import url(https://mwittrien.github.io/BetterDiscordAddons/Themes/EmojiReplace/src/Google/spritesheets.css);
@import url(https://mwittrien.github.io/BetterDiscordAddons/Themes/EmojiReplace/src/Google/people.css);
@import url(https://mwittrien.github.io/BetterDiscordAddons/Themes/EmojiReplace/src/Google/nature.css);
@import url(https://mwittrien.github.io/BetterDiscordAddons/Themes/EmojiReplace/src/Google/food.css);
@import url(https://mwittrien.github.io/BetterDiscordAddons/Themes/EmojiReplace/src/Google/activity.css);
@import url(https://mwittrien.github.io/BetterDiscordAddons/Themes/EmojiReplace/src/Google/travel.css);
@import url(https://mwittrien.github.io/BetterDiscordAddons/Themes/EmojiReplace/src/Google/objects.css);
@import url(https://mwittrien.github.io/BetterDiscordAddons/Themes/EmojiReplace/src/Google/symbols.css);
@import url(https://mwittrien.github.io/BetterDiscordAddons/Themes/EmojiReplace/src/Google/flags.css);
/* Add-Ons | BadgesEverywhere - Colored Badges */
@import url("https://fonts.googleapis.com/css2?family=Slabo+13px&display=swap");
@keyframes devbadge {
  0% {
    background-image: url("https://media.discordapp.net/attachments/756856464374628352/848838640197304341/thing1.png");
  }
  6.25% {
    background-image: url("https://media.discordapp.net/attachments/756856464374628352/848838641575919616/thing2.png");
  }
  12.5% {
    background-image: url("https://media.discordapp.net/attachments/756856464374628352/848838643107889173/thing3.png");
  }
  18.75% {
    background-image: url("https://media.discordapp.net/attachments/756856464374628352/848838644717977660/thing4.png");
  }
  25% {
    background-image: url("https://media.discordapp.net/attachments/756856464374628352/848838646499901500/thing5.png");
  }
  31.25% {
    background-image: url("https://media.discordapp.net/attachments/756856464374628352/848838647398006804/thing6.png");
  }
  37.5% {
    background-image: url("https://media.discordapp.net/attachments/756856464374628352/848838648417615903/thing7.png");
  }
  43.75% {
    background-image: url("https://media.discordapp.net/attachments/756856464374628352/848838649788497940/thing8.png");
  }
  50% {
    background-image: url("https://media.discordapp.net/attachments/756856464374628352/848838650111852544/thing9.png");
  }
  56.25% {
    background-image: url("https://media.discordapp.net/attachments/756856464374628352/848838652200353792/thing10.png");
  }
  62.5% {
    background-image: url("https://media.discordapp.net/attachments/756856464374628352/848841593095454780/thing11.png");
  }
  68.75% {
    background-image: url("https://media.discordapp.net/attachments/756856464374628352/848838686955012126/thing12.png");
  }
  75% {
    background-image: url("https://media.discordapp.net/attachments/756856464374628352/848838692889034752/thing13.png");
  }
  81.25% {
    background-image: url("https://media.discordapp.net/attachments/756856464374628352/848838702435139615/thing14.png");
  }
  87.5% {
    background-image: url("https://media.discordapp.net/attachments/756856464374628352/848838706067537951/thing15.png");
  }
  93.75% {
    background-image: url("https://media.discordapp.net/attachments/756856464374628352/848838717279174666/thing16.png");
  }
  100% {
    background-image: url("https://media.discordapp.net/attachments/756856464374628352/848838640197304341/thing1.png");
  }
}
@keyframes dance {
  10%,
  90% {
    transform: translate(-0.5px) scale(1.5);
  }
  20%,
  80% {
    transform: translate(1px) scale(1.5);
  }
  30%,
  50%,
  70% {
    transform: translate(-2px) scale(1.5);
  }
  40%,
  60% {
    transform: translate(2px) scale(1.5);
  }
}
.container-1gYwHN > * {
  justify-content: flex-end;
  margin: var(--badge-margin);
}
.clickable-1knRMS > img {
  height: var(--badge-size) !important;
  width: var(--badge-size) !important;
}
/* Hype Squad Badges*/
img[src="/assets/e666a84a7a5ea2abbbfa73adf22e627b.svg"] {
  transition-delay: 2s;
  padding: var(--badge-size) var(--badge-size) 0px 0px;
  overflow: hidden;
  box-sizing: border-box;
  background-image: url("https://discord.com/assets/e666a84a7a5ea2abbbfa73adf22e627b.svg");
}
div:hover > img[src="/assets/e666a84a7a5ea2abbbfa73adf22e627b.svg"] {
  background-image: url("https://media.discordapp.net/attachments/756856464374628352/849218085961596948/events.gif");
  transform: translateY(-1.5px);
  transition-delay: 0s;
}
div[aria-label*="HypeSquad"] > img {
  transition-duration: 0.4s;
  transform: scale(1.15);
  padding: var(--badge-size) var(--badge-size) 0px 0px;
  overflow: hidden;
  box-sizing: border-box;
}
div[aria-label*="HypeSquad"]:hover > img {
  filter: drop-shadow(0px 0px 2px var(--hypesquad-colour));
}
div:hover > img[src="/assets/efcc751513ec434ea4275ecda4f61136.svg"] {
  --hypesquad-colour: rgb(156, 132, 239);
  background-image: url("https://media.discordapp.net/attachments/756856464374628352/848502137436635156/braverysquadbadge.png");
  transform: scale(1.35);
}
div:hover > img[src="/assets/ec8e92568a7c8f19a052ef42f862ff18.svg"] {
  --hypesquad-colour: rgb(244, 123, 103);
  background-image: url("https://media.discordapp.net/attachments/756856464374628352/848503338579656714/brilliancesquadbadge.png");
  transform: scale(1.35);
}
div:hover > img[src="/assets/9f00b18e292e10fc0ae84ff5332e8b0b.svg"] {
  --hypesquad-colour: rgb(69, 221, 192);
  background-image: url("https://media.discordapp.net/attachments/756856464374628352/848503229583065088/balancesquadbadge.png");
  transform: scale(1.35);
}
img[src="/assets/efcc751513ec434ea4275ecda4f61136.svg"] {
  background-image: url("https://discord.com/assets/995ecfdbdf94ad84dd4d802c104e4630.svg");
}
img[src="/assets/ec8e92568a7c8f19a052ef42f862ff18.svg"] {
  background-image: url("https://discord.com/assets/473dadec13ab7e90e209cc60fccb31c5.svg");
}
img[src="/assets/9f00b18e292e10fc0ae84ff5332e8b0b.svg"] {
  background-image: url("https://discord.com/assets/58f11abcf3c13812bff969baaeb84d82.svg");
}
/* Nitro badge */
img[src="/assets/24d05f3b46a110e538674edbac0db4cd.svg"] {
  transition-duration: 1s;
  filter: contrast(1) hue-rotate(0deg);
}
div:hover > img[src="/assets/24d05f3b46a110e538674edbac0db4cd.svg"] {
  transform: scale(1.2);
  filter: contrast(1.2) hue-rotate(-390deg);
}
/* Booster badges */
div:hover > img[src="/assets/ca18353be0e57a2b3b3132fa1c08d6b4.svg"],
div:hover > img[src="/assets/22f99ed6e34eaca48950254c70f8fe8d.svg"],
div:hover > img[src="/assets/4a2618502278029ce88adeea179ed435.svg"],
div:hover > img[src="/assets/fbafa6adb7c49a6a2c3822521ff2af2f.svg"],
div:hover > img[src="/assets/0599f90e32c15b532647163edd72f70a.svg"],
div:hover > img[src="/assets/e07c08cdc72bcc78b69c76d2c7ceb344.svg"],
div:hover > img[src="/assets/c7f26927db5e7806790f4e968038630a.svg"],
div:hover > img[src="/assets/c6d88d1d12afe03bdc4ebb747f8d196b.svg"],
div:hover > img[src="/assets/d96ed283b74de75692487b7499fb8d09.svg"] {
  content: url("https://cdn.discordapp.com/emojis/845808489238757426.gif");
}
img[src="/assets/ca18353be0e57a2b3b3132fa1c08d6b4.svg"],
img[src="/assets/22f99ed6e34eaca48950254c70f8fe8d.svg"],
img[src="/assets/4a2618502278029ce88adeea179ed435.svg"],
img[src="/assets/fbafa6adb7c49a6a2c3822521ff2af2f.svg"],
img[src="/assets/0599f90e32c15b532647163edd72f70a.svg"],
img[src="/assets/e07c08cdc72bcc78b69c76d2c7ceb344.svg"],
img[src="/assets/c7f26927db5e7806790f4e968038630a.svg"],
img[src="/assets/c6d88d1d12afe03bdc4ebb747f8d196b.svg"],
img[src="/assets/d96ed283b74de75692487b7499fb8d09.svg"] {
  height: calc(var(--badge-size) - 2.59px) !important;
  width: calc(var(--badge-size) - 2.59px) !important;
  transform: translate(0.5px, 1.9px);
}
/* Early Supporter */
img[src="/assets/b802e9af134ff492276d94220e36ec5c.svg"] {
  padding: var(--badge-size) var(--badge-size) 0px 0px;
  overflow: hidden;
  box-sizing: border-box;
  background-image: url("https://discord.com/assets/b802e9af134ff492276d94220e36ec5c.svg");
  transition-duration: 0.5s;
}
.clickable-1knRMS:hover
  > img[src="/assets/b802e9af134ff492276d94220e36ec5c.svg"] {
  transform: scale(1.16);
}
.clickable-1knRMS[aria-label*="Early Supporter"]:hover::after {
  transform: scale(1) translate(12.5px, -11px);
}
.clickable-1knRMS[aria-label*="Early Supporter"]::after {
  background-color: transparent;
  content: "❤";
  color: #dd504d;
  position: absolute;
  z-index: 100000;
  font-size: calc(var(--badge-size) * 0.5454);
  transform: scale(0) translate(50px, -100px);
  transition-duration: 0.5s;
}
/* Verified dev */
div:hover > img[src="/assets/4441e07fe0f46b3cb41b79366236fca6.svg"] {
  animation: devbadge 5s infinite normal linear;
  padding: var(--badge-size) var(--badge-size) 0px 0px;
  overflow: hidden;
  box-sizing: border-box;
}
/* Partner badge */
img[src="/assets/34306011e46e87f8ef25f3415d3b99ca.svg"] {
  background-image: url("https://media.discordapp.net/attachments/855157744305831966/857513752501026817/partnerbadge.png");
  transition-delay: 2s;
  padding: var(--badge-size) var(--badge-size) 0px 0px;
  overflow: hidden;
  box-sizing: border-box;
  filter: contrast(1.35);
  zoom: 90%;
  transform: translateY(2.4px);
}
div:hover > img[src="/assets/34306011e46e87f8ef25f3415d3b99ca.svg"] {
  background-image: url("https://media.discordapp.net/attachments/756856464374628352/848503285556051988/partnerbadge.gif");
  transition-delay: 0s;
}
/* Certified moderator badge */
img[src="/assets/c981e58b5ea4b7fedd3a643cf0c60564.svg"] {
  transition-duration: 1.4s;
  transition-delay: 0.1s;
}
div:hover > img[src="/assets/c981e58b5ea4b7fedd3a643cf0c60564.svg"] {
  transform: rotateY(540deg) scale(1.2);
  transition-delay: 0s;
}
/* Bug hunter badges */
img[src="/assets/8353d89b529e13365c415aef08d1d1f4.svg"],
img[src="/assets/f599063762165e0d23e8b11b684765a8.svg"] {
  transition-duration: 0.5s;
}
div:hover > img[src="/assets/5c6bb5c4640972078fc993f1b5f503ce.svg"],
div:hover > img[src="/assets/f599063762165e0d23e8b11b684765a8.svg"] {
  transform: rotateY(180deg) rotate(-90deg);
}
/* Staff badge */
img[src="/assets/48d5bdcffe9e7848067c2e187f1ef951.svg"] {
  transition-duration: 0.5s;
  padding: var(--badge-size) var(--badge-size) 0px 0px;
  overflow: hidden;
  box-sizing: border-box;
  background-image: url("https://discord.com/assets/48d5bdcffe9e7848067c2e187f1ef951.svg");
}
div:hover > img[src="/assets/48d5bdcffe9e7848067c2e187f1ef951.svg"] {
  transform: scale(1.1);
  filter: brightness(0.8) contrast(1.5) saturate(0.975);
  background-image: url("https://media.discordapp.net/attachments/756856464374628352/849207087409528842/staff.png");
}
.warningCircleIcon-3R0DL,
.warningCircleIcon-mFju_mw {
  transition-duration: 0.2s;
  height: var(--badge-size);
  width: var(--badge-size);
  transform: scale(1);
}
.warningCircleIcon-1YXIHu:hover,
.warningCircleIcon-mFju_m:hover {
  transform: scale(1.5);
  animation: dance 0.82s 0.25s normal ease;
}
.warningCircleIcon-1YXIHu:hover path,
.warningCircleIcon-mFju_m:hover path {
  d: path(
    "M 10 0 Z M 9 4 H 11 V 11 H 9 V 4 Z M 10 15.25 C 9.31 15.25 8.75 14.691 8.75 14 C 8.75 13.31 9.31 12.75 10 12.75 C 10.69 12.75 11.25 13.31 11.25 14 C 11.25 14.691 10.69 15.25 10 15.25 Z"
  );
}
/* initialization */
a[href*="https://support.discord.com"]:after
{
  animation: initialize 2.75s 2 normal linear 4s;
  transform: translate(30000px);
  content: "hi";
  font-size: 22px;
  position: absolute;
}
@keyframes initialize {
  0% {
    background: url("https://media.discordapp.net/attachments/756856464374628352/848503285556051988/partnerbadge.gif");
  }
  20% {
    background: url("https://cdn.discordapp.com/emojis/845808489238757426.gif");
  }
  40% {
    background: url("https://media.discordapp.net/attachments/756856464374628352/849218085961596948/events.gif");
  }
  60% {
    background: url("https://media.discordapp.net/attachments/756856464374628352/848502137436635156/braverysquadbadge.png");
  }
  80% {
    background: url("https://media.discordapp.net/attachments/756856464374628352/848503338579656714/brilliancesquadbadge.png");
  }
  100% {
    background: url("https://media.discordapp.net/attachments/756856464374628352/848503229583065088/balancesquadbadge.png");
  }
}
.toolbar-3_r2xA::after {
  animation: devbadge 5.5s 2 4s normal linear;
  transform: translate(1000px);
  content: "hi";
  font-size: 22px;
  position: absolute;
}

/* badges everywhere */
.badges img,
.badges-XRnWAp img {
  height: var(--badges-everywhere-size) !important;
  width: var(--badges-everywhere-size) !important;
}
/* early supporter, staff, partner, hypesqaud events, verified dev, bug hunter*/
.badges img[src="/assets/d66ce47c4ab7817190af9544f97e98cc.svg"],
.badges img[src="/assets/f62be1ec9bdd82d3d77158ad81830e68.svg"],
.badges img[src="/assets/53828e0c0fb6676440ad11b5d2586241.svg"],
.badges img[src="/assets/f5354673c9cff61c1dcc70081ef774e5.svg"],
.badges > div:hover > img[src="/assets/877dc8bece1590e63fac6d5a0cd2a225.svg"],
.badges > div[aria-label*="HypeSquad"] > img,
.badges
  img[src="/assets/46f6a28f462889f1a36cfca2591fcade.svg"]
  .badges
  img[src="/assets/46f6a28f462889f1a36cfca2591fcade.svg"] {
  padding: var(--badges-everywhere-size) var(--badges-everywhere-size) 0px 0px;
  /* overflow: hidden; */
  /* background-color: white; */
}
.badges img[src="/assets/53828e0c0fb6676440ad11b5d2586241.svg"] {
  transform: translate(1px, 0.3px);
}
.badges > div[aria-label*="Early Supporter"]:hover::after {
  font-size: calc(var(--badges-everywhere-size) * 0.5454);
  transform: scale(1) translate(10.5px, -15.5px);
}
.badges img[src="/assets/1d3c9e1123aee11a325af328609d1274.svg"],
.badges img[src="/assets/dd50d32cf4fee241b2fa022d8c0435ae.svg"],
.badges img[src="/assets/7294cc730410a1caeceeca736f800b42.svg"],
.badges img[src="/assets/ce54a4f8c0e133a6f2d60336e7acac7d.svg"],
.badges img[src="/assets/c0c9db2de008e61a1a720581ca175fa1.svg"],
.badges img[src="/assets/556158300f0dca136d3c902586ff1316.svg"],
.badges img[src="/assets/ba38c1c57dfccb94127e53b7ac502a90.svg"],
.badges img[src="/assets/42ecb902decfc8e83a7446a0904b1e18.svg"],
.badges img[src="/assets/496aa1174817ec391612f745dc8e0725.svg"] {
  height: calc(var(--badges-everywhere-size) - 1.9px) !important;
  width: calc(var(--badges-everywhere-size) - 1.9px) !important;
  transform: translateY(1.2px);
  overflow: visible;
}
.badges-XRnWAp img[src="/assets/1d3c9e1123aee11a325af328609d1274.svg"],
.badges-XRnWAp img[src="/assets/dd50d32cf4fee241b2fa022d8c0435ae.svg"],
.badges-XRnWAp img[src="/assets/7294cc730410a1caeceeca736f800b42.svg"],
.badges-XRnWAp img[src="/assets/ce54a4f8c0e133a6f2d60336e7acac7d.svg"],
.badges-XRnWAp img[src="/assets/c0c9db2de008e61a1a720581ca175fa1.svg"],
.badges-XRnWAp img[src="/assets/556158300f0dca136d3c902586ff1316.svg"],
.badges-XRnWAp img[src="/assets/ba38c1c57dfccb94127e53b7ac502a90.svg"],
.badges-XRnWAp img[src="/assets/42ecb902decfc8e83a7446a0904b1e18.svg"],
.badges-XRnWAp img[src="/assets/496aa1174817ec391612f745dc8e0725.svg"] {
  height: calc(var(--badges-everywhere-size) - 1.9px) !important;
  width: calc(var(--badges-everywhere-size) - 1.9px) !important;
  padding: 0px 0px 0px 0px;
  overflow: visible;
}
.badges-XRnWAp img[src="/assets/d66ce47c4ab7817190af9544f97e98cc.svg"],
.badges-XRnWAp img[src="/assets/f62be1ec9bdd82d3d77158ad81830e68.svg"],
.badges-XRnWAp img[src="/assets/53828e0c0fb6676440ad11b5d2586241.svg"],
.badges-XRnWAp img[src="/assets/f5354673c9cff61c1dcc70081ef774e5.svg"],
.badges-XRnWAp
  > div:hover
  > img[src="/assets/877dc8bece1590e63fac6d5a0cd2a225.svg"],
.badges-XRnWAp > div[aria-label*="HypeSquad"] > img,
.badges-XRnWAp
  img[src="/assets/46f6a28f462889f1a36cfca2591fcade.svg"]
  .badges-XRnWAp
  img[src="/assets/46f6a28f462889f1a36cfca2591fcade.svg"] {
  padding: var(--badges-everywhere-size) var(--badges-everywhere-size) 0px 0px;
  overflow: hidden;
}
.badges-XRnWAp img[src="/assets/53828e0c0fb6676440ad11b5d2586241.svg"] {
  transform: translate(1px, 0.3px);
}
.badges-XRnWAp [src="/assets/473dadec13ab7e90e209cc60fccb31c5.svg"],
.badges-XRnWAp [src="/assets/995ecfdbdf94ad84dd4d802c104e4630.svg"],
.badges-XRnWAp [src="/assets/58f11abcf3c13812bff969baaeb84d82.svg"] {
  transition-duration: 0.4s;
  transform: scale(1.15);
  padding: var(--badges-everywhere-size) var(--badges-everywhere-size) 0px 0px;
  overflow: hidden;
  box-sizing: border-box;
}
/* coolkid */
.userPopout-2j1gM4[aria-label="mr_miner"] .headerText-1-WmDq::after {
  content: "Better Badges Dev";
  font-size: 13px;
  -webkit-text-fill-color: rgb(226, 117, 253);
  font-family: "Slabo 13px", sans-serif;
  font-weight: 500;
}
.userPopout-2j1gM4[aria-label="mr_miner"]
  .headerTagDiscriminatorNoNickname-dfcvHa:after {
  content: "" !important;
}

/* temp fix for discord stupidity*/

@import url("https://fonts.googleapis.com/css2?family=Slabo+13px&display=swap");
@keyframes devbadge {
  0% {
    background-image: url("https://media.discordapp.net/attachments/756856464374628352/848838640197304341/thing1.png");
  }
  6.25% {
    background-image: url("https://media.discordapp.net/attachments/756856464374628352/848838641575919616/thing2.png");
  }
  12.5% {
    background-image: url("https://media.discordapp.net/attachments/756856464374628352/848838643107889173/thing3.png");
  }
  18.75% {
    background-image: url("https://media.discordapp.net/attachments/756856464374628352/848838644717977660/thing4.png");
  }
  25% {
    background-image: url("https://media.discordapp.net/attachments/756856464374628352/848838646499901500/thing5.png");
  }
  31.25% {
    background-image: url("https://media.discordapp.net/attachments/756856464374628352/848838647398006804/thing6.png");
  }
  37.5% {
    background-image: url("https://media.discordapp.net/attachments/756856464374628352/848838648417615903/thing7.png");
  }
  43.75% {
    background-image: url("https://media.discordapp.net/attachments/756856464374628352/848838649788497940/thing8.png");
  }
  50% {
    background-image: url("https://media.discordapp.net/attachments/756856464374628352/848838650111852544/thing9.png");
  }
  56.25% {
    background-image: url("https://media.discordapp.net/attachments/756856464374628352/848838652200353792/thing10.png");
  }
  62.5% {
    background-image: url("https://media.discordapp.net/attachments/756856464374628352/848841593095454780/thing11.png");
  }
  68.75% {
    background-image: url("https://media.discordapp.net/attachments/756856464374628352/848838686955012126/thing12.png");
  }
  75% {
    background-image: url("https://media.discordapp.net/attachments/756856464374628352/848838692889034752/thing13.png");
  }
  81.25% {
    background-image: url("https://media.discordapp.net/attachments/756856464374628352/848838702435139615/thing14.png");
  }
  87.5% {
    background-image: url("https://media.discordapp.net/attachments/756856464374628352/848838706067537951/thing15.png");
  }
  93.75% {
    background-image: url("https://media.discordapp.net/attachments/756856464374628352/848838717279174666/thing16.png");
  }
  100% {
    background-image: url("https://media.discordapp.net/attachments/756856464374628352/848838640197304341/thing1.png");
  }
}
@keyframes dance {
  10%,
  90% {
    transform: translate(-0.5px) scale(1.5);
  }
  20%,
  80% {
    transform: translate(1px) scale(1.5);
  }
  30%,
  50%,
  70% {
    transform: translate(-2px) scale(1.5);
  }
  40%,
  60% {
    transform: translate(2px) scale(1.5);
  }
}
.container-1gYwHN > * {
  justify-content: flex-end;
  margin: var(--badge-margin);
}
.clickable-1knRMS > img {
  height: var(--badge-size) !important;
  width: var(--badge-size) !important;
}
/* Hype Squad Badges*/
img[src="/assets/f5354673c9cff61c1dcc70081ef774e5.svg"] {
  transition-delay: 2s;
  padding: var(--badge-size) var(--badge-size) 0px 0px;
  overflow: hidden;
  box-sizing: border-box;
  background-image: url("https://discord.com/assets/f5354673c9cff61c1dcc70081ef774e5.svg");
}
div:hover > img[src="/assets/f5354673c9cff61c1dcc70081ef774e5.svg"] {
  background-image: url("https://media.discordapp.net/attachments/756856464374628352/849218085961596948/events.gif");
  transform: translateY(-1.5px);
  transition-delay: 0s;
}
div[aria-label*="HypeSquad"] > img {
  transition-duration: 0.4s;
  transform: scale(1.15);
  padding: var(--badge-size) var(--badge-size) 0px 0px;
  overflow: hidden;
  box-sizing: border-box;
}
div[aria-label*="HypeSquad"]:hover > img {
  filter: drop-shadow(0px 0px 2px var(--hypesquad-colour));
}
div:hover > img[src="/assets/995ecfdbdf94ad84dd4d802c104e4630.svg"] {
  --hypesquad-colour: rgb(156, 132, 239);
  background-image: url("https://media.discordapp.net/attachments/756856464374628352/848502137436635156/braverysquadbadge.png");
  transform: scale(1.35);
}
div:hover > img[src="/assets/473dadec13ab7e90e209cc60fccb31c5.svg"] {
  --hypesquad-colour: rgb(244, 123, 103);
  background-image: url("https://media.discordapp.net/attachments/756856464374628352/848503338579656714/brilliancesquadbadge.png");
  transform: scale(1.35);
}
div:hover > img[src="/assets/58f11abcf3c13812bff969baaeb84d82.svg"] {
  --hypesquad-colour: rgb(69, 221, 192);
  background-image: url("https://media.discordapp.net/attachments/756856464374628352/848503229583065088/balancesquadbadge.png");
  transform: scale(1.35);
}
img[src="/assets/995ecfdbdf94ad84dd4d802c104e4630.svg"] {
  background-image: url("https://discord.com/assets/995ecfdbdf94ad84dd4d802c104e4630.svg");
}
img[src="/assets/473dadec13ab7e90e209cc60fccb31c5.svg"] {
  background-image: url("https://discord.com/assets/473dadec13ab7e90e209cc60fccb31c5.svg");
}
img[src="/assets/58f11abcf3c13812bff969baaeb84d82.svg"] {
  background-image: url("https://discord.com/assets/58f11abcf3c13812bff969baaeb84d82.svg");
}
/* Nitro badge */
img[src="/assets/e04ce699dcd2fd50d352a384511687a9.svg"] {
  transition-duration: 1s;
  filter: contrast(1) hue-rotate(0deg);
}
div:hover > img[src="/assets/e04ce699dcd2fd50d352a384511687a9.svg"] {
  transform: scale(1.2);
  filter: contrast(1.2) hue-rotate(-390deg);
}
/* Booster badges */
div:hover > img[src="/assets/1d3c9e1123aee11a325af328609d1274.svg"],
div:hover > img[src="/assets/dd50d32cf4fee241b2fa022d8c0435ae.svg"],
div:hover > img[src="/assets/7294cc730410a1caeceeca736f800b42.svg"],
div:hover > img[src="/assets/ce54a4f8c0e133a6f2d60336e7acac7d.svg"],
div:hover > img[src="/assets/c0c9db2de008e61a1a720581ca175fa1.svg"],
div:hover > img[src="/assets/556158300f0dca136d3c902586ff1316.svg"],
div:hover > img[src="/assets/ba38c1c57dfccb94127e53b7ac502a90.svg"],
div:hover > img[src="/assets/42ecb902decfc8e83a7446a0904b1e18.svg"],
div:hover > img[src="/assets/496aa1174817ec391612f745dc8e0725.svg"] {
  content: url("https://cdn.discordapp.com/emojis/845808489238757426.gif");
}
img[src="/assets/1d3c9e1123aee11a325af328609d1274.svg"],
img[src="/assets/dd50d32cf4fee241b2fa022d8c0435ae.svg"],
img[src="/assets/7294cc730410a1caeceeca736f800b42.svg"],
img[src="/assets/ce54a4f8c0e133a6f2d60336e7acac7d.svg"],
img[src="/assets/c0c9db2de008e61a1a720581ca175fa1.svg"],
img[src="/assets/556158300f0dca136d3c902586ff1316.svg"],
img[src="/assets/ba38c1c57dfccb94127e53b7ac502a90.svg"],
img[src="/assets/42ecb902decfc8e83a7446a0904b1e18.svg"],
img[src="/assets/496aa1174817ec391612f745dc8e0725.svg"] {
  height: calc(var(--badge-size) - 2.59px) !important;
  width: calc(var(--badge-size) - 2.59px) !important;
  /* transform: translate(0.5px, 1.9px); */
}
/* Early Supporter */
img[src="/assets/d66ce47c4ab7817190af9544f97e98cc.svg"] {
  padding: var(--badge-size) var(--badge-size) 0px 0px;
  overflow: hidden;
  box-sizing: border-box;
  background-image: url("https://discord.com/assets/d66ce47c4ab7817190af9544f97e98cc.svg");
  transition-duration: 0.5s;
}
div:hover > img[src="/assets/d66ce47c4ab7817190af9544f97e98cc.svg"] {
  transform: scale(1.16);
}
div[aria-label*="Early Supporter"]:hover::after {
  transform: scale(1) translate(12.5px, -11px);
}
div[aria-label*="Early Supporter"]::after {
  background-color: transparent;
  content: "❤";
  color: #dd504d;
  position: absolute;
  z-index: 100000;
  font-size: calc(var(--badge-size) * 0.5454);
  transform: scale(0) translate(50px, -100px);
  transition-duration: 0.5s;
}
/* Verified dev */
div:hover > img[src="/assets/877dc8bece1590e63fac6d5a0cd2a225.svg"] {
  animation: devbadge 5s infinite normal linear;
  padding: var(--badge-size) var(--badge-size) 0px 0px;
  overflow: hidden;
  box-sizing: border-box;
}
/* Partner badge */
img[src="/assets/53828e0c0fb6676440ad11b5d2586241.svg"] {
  background-image: url("https://media.discordapp.net/attachments/855157744305831966/857513752501026817/partnerbadge.png");
  transition-delay: 2s;
  padding: var(--badge-size) var(--badge-size) 0px 0px;
  overflow: hidden;
  box-sizing: border-box;
  filter: contrast(1.35);
  zoom: 90%;
  transform: translateY(2.4px);
}
div:hover > img[src="/assets/53828e0c0fb6676440ad11b5d2586241.svg"] {
  background-image: url("https://media.discordapp.net/attachments/756856464374628352/848503285556051988/partnerbadge.gif");
  transition-delay: 0s;
}
/* Certified moderator badge */
img[src="/assets/2af69d4f9d2ff38a7cf76fab0907ea7a.svg"] {
  transition-duration: 1.4s;
  transition-delay: 0.1s;
}
div:hover > img[src="/assets/2af69d4f9d2ff38a7cf76fab0907ea7a.svg"] {
  transform: rotateY(540deg) scale(1.2);
  transition-delay: 0s;
}
/* Bug hunter badges */
img[src="/assets/5c6bb5c4640972078fc993f1b5f503ce.svg"],
img[src="/assets/46f6a28f462889f1a36cfca2591fcade.svg"] {
  transition-duration: 0.5s;
}
div:hover > img[src="/assets/5c6bb5c4640972078fc993f1b5f503ce.svg"],
div:hover > img[src="/assets/46f6a28f462889f1a36cfca2591fcade.svg"] {
  transform: rotateY(180deg) rotate(-90deg);
}
/* Staff badge */
img[src="/assets/f62be1ec9bdd82d3d77158ad81830e68.svg"] {
  transition-duration: 0.5s;
  padding: var(--badge-size) var(--badge-size) 0px 0px;
  overflow: hidden;
  box-sizing: border-box;
  background-image: url("https://discord.com/assets/f62be1ec9bdd82d3d77158ad81830e68.svg");
}
div:hover > img[src="/assets/f62be1ec9bdd82d3d77158ad81830e68.svg"] {
  transform: scale(1.1);
  filter: brightness(0.8) contrast(1.5) saturate(0.975);
  background-image: url("https://media.discordapp.net/attachments/756856464374628352/849207087409528842/staff.png");
}
.warningCircleIcon-3R0DL,
.warningCircleIcon-mFju_mw {
  transition-duration: 0.2s;
  height: var(--badge-size);
  width: var(--badge-size);
  transform: scale(1);
}
.warningCircleIcon-1YXIHu:hover,
.warningCircleIcon-mFju_m:hover {
  transform: scale(1.5);
  animation: dance 0.82s 0.25s normal ease;
}
.warningCircleIcon-1YXIHu:hover path,
.warningCircleIcon-mFju_m:hover path {
  d: path(
    "M 10 0 Z M 9 4 H 11 V 11 H 9 V 4 Z M 10 15.25 C 9.31 15.25 8.75 14.691 8.75 14 C 8.75 13.31 9.31 12.75 10 12.75 C 10.69 12.75 11.25 13.31 11.25 14 C 11.25 14.691 10.69 15.25 10 15.25 Z"
  );
}
/* initialization */
a[href*="https://support.discord.com"]:after
{
  animation: initialize 2.75s 2 normal linear 4s;
  transform: translate(30000px);
  content: "hi";
  font-size: 22px;
  position: absolute;
}
@keyframes initialize {
  0% {
    background: url("https://media.discordapp.net/attachments/756856464374628352/848503285556051988/partnerbadge.gif");
  }
  20% {
    background: url("https://cdn.discordapp.com/emojis/845808489238757426.gif");
  }
  40% {
    background: url("https://media.discordapp.net/attachments/756856464374628352/849218085961596948/events.gif");
  }
  60% {
    background: url("https://media.discordapp.net/attachments/756856464374628352/848502137436635156/braverysquadbadge.png");
  }
  80% {
    background: url("https://media.discordapp.net/attachments/756856464374628352/848503338579656714/brilliancesquadbadge.png");
  }
  100% {
    background: url("https://media.discordapp.net/attachments/756856464374628352/848503229583065088/balancesquadbadge.png");
  }
}
.toolbar-3_r2xA::after {
  animation: devbadge 5.5s 2 4s normal linear;
  transform: translate(1000px);
  content: "hi";
  font-size: 22px;
  position: absolute;
}

/* badges everywhere */
.badges img,
.badges-XRnWAp img {
  height: var(--badges-everywhere-size) !important;
  width: var(--badges-everywhere-size) !important;
}
.badges img[src="/assets/d66ce47c4ab7817190af9544f97e98cc.svg"],
.badges img[src="/assets/f62be1ec9bdd82d3d77158ad81830e68.svg"],
.badges img[src="/assets/53828e0c0fb6676440ad11b5d2586241.svg"],
.badges img[src="/assets/f5354673c9cff61c1dcc70081ef774e5.svg"],
.badges > div:hover > img[src="/assets/877dc8bece1590e63fac6d5a0cd2a225.svg"],
.badges > div[aria-label*="HypeSquad"] > img,
.badges
  img[src="/assets/46f6a28f462889f1a36cfca2591fcade.svg"]
  .badges
  img[src="/assets/46f6a28f462889f1a36cfca2591fcade.svg"] {
  padding: var(--badges-everywhere-size) var(--badges-everywhere-size) 0px 0px;
  overflow: hidden;
}
.badges img[src="/assets/53828e0c0fb6676440ad11b5d2586241.svg"] {
  transform: translate(1px, 0.3px);
}
.badges > div[aria-label*="Early Supporter"]:hover::after {
  font-size: calc(var(--badges-everywhere-size) * 0.5454);
  transform: scale(1) translate(10.5px, -15.5px);
}
.badges img[src="/assets/1d3c9e1123aee11a325af328609d1274.svg"],
.badges img[src="/assets/dd50d32cf4fee241b2fa022d8c0435ae.svg"],
.badges img[src="/assets/7294cc730410a1caeceeca736f800b42.svg"],
.badges img[src="/assets/ce54a4f8c0e133a6f2d60336e7acac7d.svg"],
.badges img[src="/assets/c0c9db2de008e61a1a720581ca175fa1.svg"],
.badges img[src="/assets/556158300f0dca136d3c902586ff1316.svg"],
.badges img[src="/assets/ba38c1c57dfccb94127e53b7ac502a90.svg"],
.badges img[src="/assets/42ecb902decfc8e83a7446a0904b1e18.svg"],
.badges img[src="/assets/496aa1174817ec391612f745dc8e0725.svg"] {
  height: calc(var(--badges-everywhere-size) - 1.9px) !important;
  width: calc(var(--badges-everywhere-size) - 1.9px) !important;
  transform: translateY(1.2px);
  overflow: visible;
}
.badges-XRnWAp img[src="/assets/1d3c9e1123aee11a325af328609d1274.svg"],
.badges-XRnWAp img[src="/assets/dd50d32cf4fee241b2fa022d8c0435ae.svg"],
.badges-XRnWAp img[src="/assets/7294cc730410a1caeceeca736f800b42.svg"],
.badges-XRnWAp img[src="/assets/ce54a4f8c0e133a6f2d60336e7acac7d.svg"],
.badges-XRnWAp img[src="/assets/c0c9db2de008e61a1a720581ca175fa1.svg"],
.badges-XRnWAp img[src="/assets/556158300f0dca136d3c902586ff1316.svg"],
.badges-XRnWAp img[src="/assets/ba38c1c57dfccb94127e53b7ac502a90.svg"],
.badges-XRnWAp img[src="/assets/42ecb902decfc8e83a7446a0904b1e18.svg"],
.badges-XRnWAp img[src="/assets/496aa1174817ec391612f745dc8e0725.svg"] {
  height: calc(var(--badges-everywhere-size) - 1.9px) !important;
  width: calc(var(--badges-everywhere-size) - 1.9px) !important;
  padding: 0px 0px 0px 0px;
  overflow: visible;
}
.badges-XRnWAp img[src="/assets/d66ce47c4ab7817190af9544f97e98cc.svg"],
.badges-XRnWAp img[src="/assets/f62be1ec9bdd82d3d77158ad81830e68.svg"],
.badges-XRnWAp img[src="/assets/53828e0c0fb6676440ad11b5d2586241.svg"],
.badges-XRnWAp img[src="/assets/f5354673c9cff61c1dcc70081ef774e5.svg"],
.badges-XRnWAp
  > div:hover
  > img[src="/assets/877dc8bece1590e63fac6d5a0cd2a225.svg"],
.badges-XRnWAp > div[aria-label*="HypeSquad"] > img,
.badges-XRnWAp
  img[src="/assets/46f6a28f462889f1a36cfca2591fcade.svg"]
  .badges-XRnWAp
  img[src="/assets/46f6a28f462889f1a36cfca2591fcade.svg"] {
  padding: var(--badges-everywhere-size) var(--badges-everywhere-size) 0px 0px;
  overflow: hidden;
}
.badges-XRnWAp img[src="/assets/53828e0c0fb6676440ad11b5d2586241.svg"] {
  transform: translate(1px, 0.3px);
}
.badges-XRnWAp [src="/assets/473dadec13ab7e90e209cc60fccb31c5.svg"],
.badges-XRnWAp [src="/assets/995ecfdbdf94ad84dd4d802c104e4630.svg"],
.badges-XRnWAp [src="/assets/58f11abcf3c13812bff969baaeb84d82.svg"] {
  transition-duration: 0.4s;
  transform: scale(1.15);
  padding: var(--badges-everywhere-size) var(--badges-everywhere-size) 0px 0px;
  overflow: hidden;
  box-sizing: border-box;
}
/* coolkid */
.userPopout-2j1gM4[aria-label="mr_miner"] .headerText-1-WmDq::after {
  content: "Better Badges Dev";
  font-size: 13px;
  -webkit-text-fill-color: rgb(226, 117, 253);
  font-family: "Slabo 13px", sans-serif;
  font-weight: 500;
}
.userPopout-2j1gM4[aria-label="mr_miner"]
  .headerTagDiscriminatorNoNickname-dfcvHa:after {
  content: "" !important;
}
/* Add-Ons | BadgesEverywhere - White Badges */

:root{
  --badge-size: 18px !important;
  --badge-margin: 1.5px;
  --badges-everywhere-size:15px;
}
.container-1gYwHN>*{
  justify-content: flex-end;
  margin: var(--badge-margin);
}
.clickable-1knRMS > img{
  height: var(--badge-size) !important;
  width: var(--badge-size) !important;
  padding: var(--badge-size) var(--badge-size) 0px 0px;
  overflow: hidden;
  box-sizing: border-box;
}
/* discord staff */
img[src="/assets/48d5bdcffe9e7848067c2e187f1ef951.svg"]{
  background-image: url("https://discord.com/assets/7cfd90c8062139e4804a1fa59f564731.svg") !important
}
/* partner */
img[src="/assets/34306011e46e87f8ef25f3415d3b99ca.svg"]{
  background-image: url("https://discord.com/assets/a6a741e07b5ec2d1583f8b98df3c2143.svg") !important;
}
/* hypesquad events*/
img[src="/assets/e666a84a7a5ea2abbbfa73adf22e627b.svg"]{
  background-image: url("https://discord.com/assets/3a050fcc884255231b99b7033c776070.svg") !important;
}
/* bravery|brilliance|balance */
img[src="/assets/efcc751513ec434ea4275ecda4f61136.svg"]{
  transform: scale(0.85);
  background-image: url("https://discord.com/assets/1115767aed344e96a27a12e97718c171.svg") !important;
}
img[src="/assets/ec8e92568a7c8f19a052ef42f862ff18.svg"]{
  transform: scale(0.85);
  background-image: url("https://discord.com/assets/d3478c6bd5cee0fc600e55935ddc81aa.svg") !important;
}
img[src="/assets/9f00b18e292e10fc0ae84ff5332e8b0b.svg"]{
  transform: scale(0.85);
  background-image: url("https://discord.com/assets/2a085ed9c86f3613935a6a8667ba8b89.svg") !important;
}
/*verified bot dev*/
img[src="/assets/4441e07fe0f46b3cb41b79366236fca6.svg"]{
  background-image: url("https://discord.com/assets/785d81fdbedd133e213da693aba98774.svg") !important;
}
/* early supporter */
img[src="/assets/b802e9af134ff492276d94220e36ec5c.svg"]{
  background-image: url("https://discord.com/assets/ce15562552e3d70c56d5408cfeed2ffd.svg") !important;
}
/* nitro */
img[src="/assets/24d05f3b46a110e538674edbac0db4cd.svg"]{
  background-image: url("https://discord.com/assets/379d2b3171722ef8be494231234da5d1.svg") !important;
}
/* bug hunter */
img[src="/assets/8353d89b529e13365c415aef08d1d1f4.svg"], img[src="/assets/f599063762165e0d23e8b11b684765a8.svg"]{
  background-image: url("https://discord.com/assets/df26f079738a4dcd07cbce6eb3c957f1.svg") !important;
}
/* server booster */
img[src="/assets/ca18353be0e57a2b3b3132fa1c08d6b4.svg"],
img[src="/assets/22f99ed6e34eaca48950254c70f8fe8d.svg"],
img[src="/assets/4a2618502278029ce88adeea179ed435.svg"],
img[src="/assets/fbafa6adb7c49a6a2c3822521ff2af2f.svg"],
img[src="/assets/0599f90e32c15b532647163edd72f70a.svg"],
img[src="/assets/556158300f0dca136d3c902586ff1316.svg"],
img[src="/assets/c7f26927db5e7806790f4e968038630a.svg"],
img[src="/assets/c6d88d1d12afe03bdc4ebb747f8d196b.svg"],
img[src="/assets/d96ed283b74de75692487b7499fb8d09.svg"]{
  filter: brightness(1.1) opacity(100%) grayscale(1.05);
  padding: 0px 0px 0px 0px;
  overflow:auto;
  box-sizing: border-box;
}
/* certifed moderator */
img[src="/assets/c981e58b5ea4b7fedd3a643cf0c60564.svg"] {
 padding: 0px 0px 0px 0px;
 overflow:visible;
   box-sizing: border-box;
   filter: brightness(4);
}
.warningCircleIcon-1YXIHu path{
  fill: white;
}
.warningCircleIcon-1YXIHu, .warningCircleIcon-mFju_m{
  height: var(--badge-size);
  width: var(--badge-size);
}
/* badges everywhere */
.badges img{
  height: var(--badges-everywhere-size) !important;
  width: var(--badges-everywhere-size) !important;
  padding: var(--badges-everywhere-size) var(--badges-everywhere-size) 0px 0px;
  box-sizing: border-box;
}
/* powercord badges */
.powercord-badge path{
  fill: white;
}
/* coolkid */
.userPopout-2j1gM4[aria-label="mr_miner"] .headerText-1-WmDq::after{
  content:"Better Badges Dev";
  font-size: 13px;
  -webkit-text-fill-color: rgb(226, 117, 253);
  font-family: 'Slabo 13px', sans-serif;
  font-weight: 500;
}
.userPopout-2j1gM4[aria-label="mr_miner"] .headerTagDiscriminatorNoNickname-dfcvHa:after{
  content: "" !important;
}/*
    DO NOT REMOVE
*/
@import"https://fonts.googleapis.com/css2?family=Roboto:wght@400&family=Google+Sans:wght@400&family=Google+Sans:wght@500&family=Google+Sans:wght@700&display=swap";@import"https://hyblocker.github.io/pixelcord/modules/misc/settings_i18n.css";:root{--dummy:""}[data-popout-root].newBrand,html.newBrand,:root{--window-roundedness: 12px;--snackbar-bg: #333;--snackbar-shadow: 0 3px 5px -1px rgb(0 0 0 / 20%), 0 6px 10px 0 rgb(0 0 0 / 14%), 0 1px 18px 0 rgb(0 0 0 / 12%);--snackbar-radius: 4px;--snackbar-height: 32px;--snackbar-padding: 14px 16px;--switch-knob-color: #ECECEC;--switch-slider-color: rgba(135, 135, 135,0.65);--button-radius: 4px;--background-blur-intensity: 10px;--chatbox-top-padding: 16px;--header-weight: 600;--subtitle-weight: 500;--section-weight: 900;--font-header: "Google Sans", "Migu 1M", sans-serif;--font-code: "Roboto Mono", monospace;--font-primary: var(--font-header);--font-secondary: var(--font-header);--font-display: var(--font-header);--card-padding: 12px;--channels-width: 300px;--pip-width: 320px;--pip-radius: 12px;--tooltip-bg: #2a2a2a;--tooltip-text: #ffffff;--checkbox-size: 15px;--settings-list-width: 316px;--settings-padding: 8px;--settings-header-height: 84px;--members-width: 240px;--wallpaper: url("https://cdn.discordapp.com/attachments/861011844553244685/877485732783063050/1623950302486.jpg");--blur-strength: 4px;--window-border: 0px}.callContainer-HtHELf,.theme-dark{--accent: var(--primary-400);--accent-selected-highlight: rgba(52, 164, 255, 12%);--accent-highlight: var(--primary-200);--accent-text: white;--baseline: #272a2b;--chip: #595A5E;--chip-active: #737479;--chip-text: white;--navdrawer-color: var(--card-2-bg);--navdrawer-hover: rgba(255, 255, 255, 0.05);--navdrawer-active: rgba(255, 255, 255, 0.1);--navdrawer-separator: rgba(255, 255, 255, 0.1);--separator: rgba(255, 255, 255, 0.18);--combobox-outline: rgba(255, 255, 255, 0.1);--title-color: #aaa;--list-color: #fff;--logo-color: #fff;--header-color: #fff;--interactive-muted: #6b6b6b;--channels-default: #9b9fa5;--ripple-default: rgba(255, 255, 255, 0.36);--danger: rgb(207, 102, 121);--danger-highlight: rgb(255, 118, 118);--online: #66c296;--online-highlight: #43b581;--idle: #fbec52;--dnd: var(--danger);--stream: #9176c1;--offline: #868d96}.theme-light{--accent: var(--primary-700);--accent-selected-highlight: rgba(28, 116, 233, 12%);--accent-highlight: var(--primary-500);--accent-text: white;--text-semidark: rgb(149, 149, 149);--baseline: #f8f9fa;--chip: #D7D7D7;--chip-active: #c7c7c7;--chip-text: rgb(53, 53, 53);--navdrawer-color: var(--card-2-bg);--navdrawer-hover: rgba(0, 0, 0, 0.05);--navdrawer-active: rgba(0, 0, 0, 0.1);--navdrawer-separator: rgba(0, 0, 0, 0.1);--separator: rgba(0, 0, 0, 0.18);--combobox-outline: rgba(0, 0, 0, 0.1);--title-color: #606060;--list-color: #202124;--logo-color: #202124;--header-color: #202124;--interactive-muted: #8f929c;--channels-default: #46494c;--ripple-default: rgba(0, 0, 0, 0.36);--danger: rgb(255, 70, 70);--danger-highlight: rgb(255, 118, 118);--online: #43b581;--online-highlight: #66c296;--idle: #faa61a;--dnd: var(--danger);--stream: #643da7;--offline: #636b75}:root{--primary-900: #1f41b6;--primary-800: #1d61d5;--primary-700: #1a73e8;--primary-600: #1386fc;--primary-500: #0095ff;--primary-400: #34a4ff;--primary-300: #5cb5ff;--primary-200: #8dcaff;--primary-100: #bbdeff;--primary-50: #e3f2ff;--complementary-900: #d15b0e;--complementary-800: #db7212;--complementary-700: #e28016;--complementary-600: #e88f1a;--complementary-500: #ec9a1e;--complementary-400: #eea834;--complementary-300: #f0b755;--complementary-200: #f4cc85;--complementary-100: #f8e0b5;--complementary-50: #fcf3e1}.theme-light{--card-0-bg: white;--card-1-bg: white;--card-2-bg: white;--card-3-bg: white;--card-4-bg: white;--card-5-bg: white;--card-6-bg: white;--card-7-bg: white;--card-8-bg: white;--card-9-bg: white;--card-10-bg: white;--card-11-bg: white;--card-12-bg: white;--card-13-bg: white;--card-14-bg: white;--card-15-bg: white;--card-16-bg: white;--card-17-bg: white;--card-18-bg: white;--card-19-bg: white;--card-20-bg: white;--card-21-bg: white;--card-22-bg: white;--card-23-bg: white;--card-24-bg: white}.callContainer-HtHELf,.theme-dark{--card-0-bg: #121212;--card-1-bg: #1D1D1D;--card-2-bg: #222222;--card-3-bg: #242424;--card-4-bg: #272727;--card-5-bg: #292828;--card-6-bg: #2C2C2C;--card-7-bg: #2C2C2D;--card-8-bg: #2D2D2D;--card-9-bg: #2E2E2D;--card-10-bg: #2E2F2F;--card-11-bg: #302F30;--card-12-bg: #313130;--card-13-bg: #323231;--card-14-bg: #333332;--card-15-bg: #333434;--card-16-bg: #353535;--card-17-bg: #353536;--card-18-bg: #363536;--card-19-bg: #363636;--card-20-bg: #363736;--card-21-bg: #363737;--card-22-bg: #373737;--card-23-bg: #373737;--card-24-bg: #373737}:root,html,[data-popout-root].oldBrand,html.oldBrand,html,[data-popout-root].newBrand,html.newBrand{--text-positive: var(--online);--status-positive-background: var(--online);--status-positive-text: var(--accent-text);--brand-experiment: var(--accent);--brand-experiment-500: var(--accent);--brand-experiment-560: var(--accent);--control-brand-foreground: var(--accent)}.theme-light,.theme-dark{--text-link: var(--accent)}.theme-light .icon-3B9vQh,.theme-light .lookFilled-1Gx00P.colorGreen-29iAKY,.theme-light .text-2GsXbW{color:#fff}.theme-light .avatarUploaderIndicator-2G-aIZ{background-color:#fff;top:0;right:0;left:auto;width:28px;height:28px}.theme-dark{--faded-text-interactive-normal: var(--interactive-normal);--accento: var(--accent)}.theme-dark .theme-light{--interactive-normal: var(--faded-text-interactive-normal);--accent: var(--accento)}[data-popout-root].newBrand,html.newBrand,:root{--mouseX: 0px;--mouseY: 0px;--clickX: 0px;--clickY: 0px;--opq: 1}:root{--chip-height: 24px}.emptyCard-KDifrB,.wrapper-2RrXDg,.nowPlayingColumn-1eCBCN .outer-2JOHae{transition:box-shadow .2s ease-in-out,background-color .2s ease-in-out;margin-bottom:16px}.theme-light .emptyCard-KDifrB,.theme-light .wrapper-2RrXDg,.theme-light .nowPlayingColumn-1eCBCN .outer-2JOHae{background-color:var(--card-4-bg);box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0,0,0,.12)}.theme-dark .emptyCard-KDifrB,.theme-dark .wrapper-2RrXDg,.theme-dark .nowPlayingColumn-1eCBCN .outer-2JOHae{background-color:var(--card-4-bg)}.theme-light .section-3G9aLW{background-color:var(--card-2-bg);box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 1px 5px 0px rgba(0,0,0,.12)}.theme-dark .section-3G9aLW{background-color:var(--card-2-bg)}.theme-light .theme-light .outer-2JOHae.active-1W_Gl9,.theme-light .theme-dark .outer-2JOHae.active-1W_Gl9,.theme-light .theme-light .outer-2JOHae.interactive-2zD88a:hover,.theme-light .theme-dark .outer-2JOHae.interactive-2zD88a:hover{background-color:var(--card-8-bg);box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0,0,0,.12)}.theme-dark .theme-light .outer-2JOHae.active-1W_Gl9,.theme-dark .theme-dark .outer-2JOHae.active-1W_Gl9,.theme-dark .theme-light .outer-2JOHae.interactive-2zD88a:hover,.theme-dark .theme-dark .outer-2JOHae.interactive-2zD88a:hover{background-color:var(--card-8-bg)}.theme-light .body-16rSsp .separator-2OaeRP,.theme-dark .body-16rSsp .separator-2OaeRP,.theme-light .body-16rSsp .separator-2OaeRP,.theme-dark .body-16rSsp .separator-2OaeRP{background-color:transparent;height:var(--card-padding)}.theme-light .inset-SbsSFp,.theme-dark .inset-SbsSFp{background-color:transparent}.theme-light .peopleListItem-u6dGxF.active-2UF8Zh,.theme-light .peopleListItem-u6dGxF:hover{background-color:var(--card-3-bg);box-shadow:0px 3px 3px -2px rgba(0, 0, 0, 0.2),0px 3px 4px 0px rgba(0, 0, 0, 0.14),0px 1px 8px 0px rgba(0,0,0,.12)}.theme-dark .peopleListItem-u6dGxF.active-2UF8Zh,.theme-dark .peopleListItem-u6dGxF:hover{background-color:var(--card-3-bg)}.theme-light .actionButton-3-B2x-.highlight-3DSi7b,.theme-light .peopleListItem-u6dGxF.active-2UF8Zh .actionButton-3-B2x-,.theme-light .peopleListItem-u6dGxF:hover .actionButton-3-B2x-{background-color:var(--card-8-bg);box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0,0,0,.12)}.theme-dark .actionButton-3-B2x-.highlight-3DSi7b,.theme-dark .peopleListItem-u6dGxF.active-2UF8Zh .actionButton-3-B2x-,.theme-dark .peopleListItem-u6dGxF:hover .actionButton-3-B2x-{background-color:var(--card-8-bg)}.actionButton-3-B2x-.actionAccept-2nmnLv:hover{color:var(--online)}.theme-dark .text-27cdrj,.theme-light .text-27cdrj,.theme-dark .title-2CL_z0,.theme-light .title-2CL_z0{color:var(--text-muted)}.attachment-1PZZB2{overflow:visible}.theme-light .attachment-1PZZB2{background-color:var(--card-6-bg);box-shadow:0px 3px 5px -1px rgba(0, 0, 0, 0.2),0px 6px 10px 0px rgba(0, 0, 0, 0.14),0px 1px 18px 0px rgba(0,0,0,.12)}.theme-dark .attachment-1PZZB2{background-color:var(--card-6-bg)}.wrapperAudio-1Bzv_Z,.embedFull-1HGV2S{transition:box-shadow .2s ease,background-color .2s ease-in-out}.theme-light .wrapperAudio-1Bzv_Z,.theme-light .embedFull-1HGV2S{background-color:var(--card-6-bg);box-shadow:0px 3px 5px -1px rgba(0, 0, 0, 0.2),0px 6px 10px 0px rgba(0, 0, 0, 0.14),0px 1px 18px 0px rgba(0,0,0,.12)}.theme-dark .wrapperAudio-1Bzv_Z,.theme-dark .embedFull-1HGV2S{background-color:var(--card-6-bg)}.theme-light .wrapperAudio-1Bzv_Z:hover,.theme-light .embedFull-1HGV2S:hover{background-color:var(--card-12-bg);box-shadow:0px 7px 8px -4px rgba(0, 0, 0, 0.2),0px 12px 17px 2px rgba(0, 0, 0, 0.14),0px 5px 22px 4px rgba(0,0,0,.12)}.theme-dark .wrapperAudio-1Bzv_Z:hover,.theme-dark .embedFull-1HGV2S:hover{background-color:var(--card-12-bg)}.embedHorizontal-2GF6zV,.embedVertical-2vpt72,.tile-2mmK5T,.wrapper-1HIH0j{transition:box-shadow .2s ease,background-color .2s ease-in-out}.theme-light .embedHorizontal-2GF6zV,.theme-light .embedVertical-2vpt72,.theme-light .tile-2mmK5T,.theme-light .wrapper-1HIH0j{background-color:var(--card-8-bg);box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0,0,0,.12)}.theme-dark .embedHorizontal-2GF6zV,.theme-dark .embedVertical-2vpt72,.theme-dark .tile-2mmK5T,.theme-dark .wrapper-1HIH0j{background-color:var(--card-8-bg)}.theme-light .embedHorizontal-2GF6zV:hover,.theme-light .embedVertical-2vpt72:hover,.theme-light .tile-2mmK5T:hover,.theme-light .wrapper-1HIH0j:hover{background-color:var(--card-12-bg);box-shadow:0px 7px 8px -4px rgba(0, 0, 0, 0.2),0px 12px 17px 2px rgba(0, 0, 0, 0.14),0px 5px 22px 4px rgba(0,0,0,.12)}.theme-dark .embedHorizontal-2GF6zV:hover,.theme-dark .embedVertical-2vpt72:hover,.theme-dark .tile-2mmK5T:hover,.theme-dark .wrapper-1HIH0j:hover{background-color:var(--card-12-bg)}.theme-light .panels-3wFtMD{background-color:var(--card-8-bg);box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0,0,0,.12)}.theme-dark .panels-3wFtMD{background-color:var(--card-8-bg)}.theme-light .panels-3wFtMD{border-right:1px solid var(--navdrawer-separator)}.theme-light .panels-3wFtMD>.container-YkUktl>.flex-2S1XBF{background-color:var(--card-8-bg)}.theme-dark .panels-3wFtMD>.container-YkUktl>.flex-2S1XBF{background-color:var(--card-8-bg)}.platform-win .sidebar-1tnWFu{overflow-x:hidden;overflow-y:visible}.subtext-2HDqJ7{line-height:14px}.nameTag-sc-gpq.canCopy-IgTwyV{user-select:none}.theme-light .feature-2IUcBI{background-color:var(--card-4-bg);box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0,0,0,.12)}.theme-dark .feature-2IUcBI{background-color:var(--card-4-bg)}.theme-light .header-ISPHUQ{background-color:var(--card-4-bg);box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0,0,0,.12)}.theme-dark .header-ISPHUQ{background-color:var(--card-4-bg)}.theme-light .body-2S0G9D{box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 1px 5px 0px rgba(0,0,0,.12)}.card-3Zmutq{overflow:visible}.theme-light .guild-Hq0WWA{background-color:var(--card-4-bg);box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0,0,0,.12)}.theme-dark .guild-Hq0WWA{background-color:var(--card-4-bg)}.guildSubscriptionSlots-JPXXvN,.guildHeader-3nh5RK{background-color:transparent}.guildName-1B3vm5{font-weight:var(--header-weight)}.guildSubscriptionDuration-z1eXWb,.guildSubscriptionCreationDate-2b_pKA{font-weight:var(--subtitle-weight)}.theme-light .perk-2WeBWW{background-color:var(--card-4-bg);box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0,0,0,.12)}.theme-dark .perk-2WeBWW{background-color:var(--card-4-bg)}.planOptionDiscount-2UFc37{background-color:var(--online)}.theme-light .tierMarkerBackground-G8FoN4,.theme-light .perksModal-fSYqOq{background-color:var(--card-0-bg)}.theme-dark .tierMarkerBackground-G8FoN4,.theme-dark .perksModal-fSYqOq{background-color:var(--card-0-bg)}.theme-light .ctaBar-2UsjF2{background-color:var(--card-4-bg);box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0,0,0,.12)}.theme-dark .ctaBar-2UsjF2{background-color:var(--card-4-bg)}.root-2zfUH6{transform:unset}.root-2zfUH6::before{content:"";position:fixed;background-color:#000;top:0;left:0;width:100vw;height:100vh;opacity:.85;pointer-events:none;-webkit-app-region:none}.root-2zfUH6 .perksModal-fSYqOq{width:960px;height:80vh;left:calc(50% - 480px);top:10%;border-radius:8px}.root-2zfUH6 .closeIcon-3_iQ6l{right:calc(100% + 64px)}.root-2zfUH6 .closeContent-I3JbQJ{top:calc(10% + 32px)}.root-2zfUH6 .carousel-2M5OVB{left:24px !important}.root-2zfUH6 .closeButton-PCZcma path{fill:var(--interactive-normal) !important}.root-2zfUH6 .closeButton-PCZcma path:hover{fill:var(--interactive-hover) !important}.bannerVisible-Vkyg1I .iconTierOne-s_oiRb,.bannerVisible-Vkyg1I .iconTierTwo-1JOWNK{color:#ff73fa}.theme-light .perks-26lTSw{background-color:var(--card-4-bg);box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0,0,0,.12)}.theme-dark .perks-26lTSw{background-color:var(--card-4-bg)}.theme-light .upsellFooter-1H_OCF{background-color:var(--card-2-bg);box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 1px 5px 0px rgba(0,0,0,.12)}.theme-dark .upsellFooter-1H_OCF{background-color:var(--card-2-bg)}.theme-light .planSelectRow-2YPEKQ .actions-10aT1z{background-color:var(--card-2-bg);box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 1px 5px 0px rgba(0,0,0,.12)}.theme-dark .planSelectRow-2YPEKQ .actions-10aT1z{background-color:var(--card-2-bg)}.message-39hdqk{margin:86px auto auto auto}.theme-light .loadingPopout-1feYe_{background-color:var(--card-6-bg);box-shadow:0px 3px 5px -1px rgba(0, 0, 0, 0.2),0px 6px 10px 0px rgba(0, 0, 0, 0.14),0px 1px 18px 0px rgba(0,0,0,.12)}.theme-dark .loadingPopout-1feYe_{background-color:var(--card-6-bg)}.headerFill-adLl4x{background-color:transparent}.topSectionPlaying-1J5E4n{background-color:var(--accent)}.connectedAccount-1xKpli{border-color:transparent}.theme-light .connectedAccount-1xKpli{background-color:var(--card-4-bg);box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0,0,0,.12)}.theme-dark .connectedAccount-1xKpli{background-color:var(--card-4-bg)}.betaBadge-1Ve-yb{background-color:var(--accent) !important}.aboutMeTitle-3pjiS7,.bodyTitle-3FWCs2,.userInfoSectionHeader-2mYYun,.headerText-3g1XK9,.theme-dark .newPopoutActivityStyles .headerText-3g1XK9,.theme-dark .newProfileActivityStyles .headerText-3g1XK9,.theme-light .newPopoutActivityStyles .headerText-3g1XK9 .theme-light .newProfileActivityStyles .headerText-3g1XK9{font-weight:var(--section-weight);font-size:14px;color:var(--header-color)}.base-21yXnu.muted-eZM05q{font-weight:var(--section-weight);font-size:14px}.body-2wLx-E{background-color:transparent}.userPopout-2j1gM4{background-color:var(--background-floating)}.userPopout-2j1gM4 .colorStandard-21JIj7{font-size:14px;line-height:18px}.connectedAccountIcon-2vls0t,.connectionIcon-3nqZDW,.accountBtnInner-3XK70s{display:block;-moz-box-sizing:border-box;box-sizing:border-box;width:30px;height:30px;padding-left:30px;background-size:32px 32px}.connectedAccountIcon-2vls0t[aria-label*=GitHub],.connectedAccountIcon-2vls0t[alt*=GitHub],.connectionIcon-3nqZDW[aria-label*=GitHub],.connectionIcon-3nqZDW[alt*=GitHub],.accountBtnInner-3XK70s[aria-label*=GitHub],.accountBtnInner-3XK70s[alt*=GitHub]{background-image:url("data:image/svg+xml,%3Csvg version='1.0' xmlns='http://www.w3.org/2000/svg' width='32pt' height='32pt' viewBox='0 0 255 255'%3E%3Cpath d='M114 32.1c-35.2 4.5-66.4 30.7-77.9 65.3-16.7 50.4 10.8 104.7 61.3 121.5 50.4 16.7 104.7-10.8 121.5-61.3C241.2 90.1 185.1 22.9 114 32.1z' fill='%23fff'/%3E%3Cpath d='M112 48.4c-15.7 3.3-28.4 10.1-39.9 21C54.9 86 47.6 103.2 47.6 127c-.1 15.2 1.4 21.5 8.5 36 4.5 9 6.4 11.7 14.3 19.6 9.6 9.6 20.7 17.1 29.1 19.4 6.5 1.8 7.5.7 7.5-8.9v-7.6l-5.7.4c-10.7.6-17.7-3.3-21.7-12.3-2.4-5.3-5.4-9-9.5-11.7-3-1.9-2.1-3.9 1.7-3.9s8.6 3.2 12.2 8.2c3.9 5.4 9.4 8.8 14 8.7 6.4-.2 8.2-1.2 9.7-5.4.7-2.2 1.8-4.4 2.3-4.9 1.8-1.8 1.1-2.4-3.2-3.1-20.5-3.4-30.8-16-30.9-37.7 0-8.9 1.4-14.1 5.9-20.6 1.4-2.1 1.7-3.6 1.1-6.7-.8-4.4.5-14.3 2-15.8s7.7.1 15.5 4.2c5.8 3 7.8 3.6 10.2 2.9 6-1.6 18.2-2 27.2-.8l9.4 1.2 7.1-3.6c4-2 9.1-3.9 11.3-4.2l4.1-.6L171 85c.7 3 1 7.6.7 10.9-.5 5-.3 6.1 2.3 10.1 4.8 7.5 6.2 17.4 3.9 28.2-3.3 15.4-12.4 24-28.7 27l-6 1.1 2.2 3.6c1.8 3.2 2.1 5.4 2.4 19.3.4 18.9.6 19.1 8.9 16.3 12.7-4.4 28.9-17.2 37.5-29.9 5-7.3 9-16.1 11.4-25.1 2.5-9.5 2.5-29.3 0-38.5-7.7-28.3-29.2-50.2-56.8-58-9.5-2.7-27.7-3.5-36.8-1.6z'/%3E%3C/svg%3E") !important}.connectedAccountIcon-2vls0t[aria-label*=Reddit],.connectedAccountIcon-2vls0t[alt*=Reddit],.connectionIcon-3nqZDW[aria-label*=Reddit],.connectionIcon-3nqZDW[alt*=Reddit],.accountBtnInner-3XK70s[aria-label*=Reddit],.accountBtnInner-3XK70s[alt*=Reddit]{background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' width='32' height='32'%3E%3Cg transform='matrix(.76 0 0 .76 2.5 2.5)'%3E%3Ccircle fill='%23FF4500' cx='10' cy='10' r='10'/%3E%3Cpath fill='%23FFF' d='M16.67 10a1.46 1.46 0 00-2.47-1 7.12 7.12 0 00-3.85-1.23L11 4.65l2.14.45a1 1 0 10.13-.61L10.82 4a.31.31 0 00-.37.24l-.74 3.47a7.14 7.14 0 00-3.9 1.23 1.46 1.46 0 10-1.61 2.39 2.87 2.87 0 000 .44c0 2.24 2.61 4.06 5.83 4.06s5.83-1.82 5.83-4.06a2.87 2.87 0 000-.44 1.46 1.46 0 00.81-1.33zm-10 1a1 1 0 111 1 1 1 0 01-1-1zm5.81 2.75a3.84 3.84 0 01-2.47.77 3.84 3.84 0 01-2.47-.77.27.27 0 01.38-.38A3.27 3.27 0 0010 14a3.28 3.28 0 002.09-.61.27.27 0 11.39.4zm-.18-1.71a1 1 0 111-1 1 1 0 01-1.01 1.04z'/%3E%3C/g%3E%3C/svg%3E") !important}.connectedAccountIcon-2vls0t[aria-label*=Spotify],.connectedAccountIcon-2vls0t[alt*=Spotify],.connectionIcon-3nqZDW[aria-label*=Spotify],.connectionIcon-3nqZDW[alt*=Spotify],.accountBtnInner-3XK70s[aria-label*=Spotify],.accountBtnInner-3XK70s[alt*=Spotify]{background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='32' width='32' viewBox='0 0 168 168'%3E%3Cpath fill='%231ED760' d='M83.837 20.21c-35.15 0-63.645 28.495-63.645 63.644 0 35.151 28.496 63.644 63.645 63.644 35.153 0 63.645-28.493 63.645-63.644 0-35.147-28.492-63.64-63.646-63.64l.001-.003zm29.187 91.793a3.965 3.965 0 01-5.457 1.315c-14.943-9.127-33.754-11.195-55.908-6.133a3.968 3.968 0 01-1.766-7.737c24.244-5.539 45.04-3.154 61.816 7.099a3.967 3.967 0 011.315 5.456zm7.79-17.33c-1.436 2.336-4.492 3.073-6.825 1.636-17.107-10.515-43.185-13.56-63.42-7.418a4.969 4.969 0 01-6.193-3.306 4.97 4.97 0 013.31-6.189c23.113-7.013 51.848-3.616 71.494 8.457 2.333 1.436 3.07 4.491 1.634 6.822v-.001zm.669-18.045c-20.513-12.183-54.355-13.303-73.94-7.36a5.952 5.952 0 11-3.456-11.392c22.482-6.825 59.855-5.506 83.471 8.514a5.946 5.946 0 012.083 8.157 5.948 5.948 0 01-8.155 2.081z'/%3E%3C/svg%3E") !important}.connectedAccountIcon-2vls0t[aria-label*=Steam],.connectedAccountIcon-2vls0t[alt*=Steam],.connectionIcon-3nqZDW[aria-label*=Steam],.connectionIcon-3nqZDW[alt*=Steam],.accountBtnInner-3XK70s[aria-label*=Steam],.accountBtnInner-3XK70s[alt*=Steam]{background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 233 233' width='32' height='32'%3E%3Cpath d='M30.717 141.008c10.939 36.487 44.776 63.072 84.824 63.072 48.898 0 88.54-39.642 88.54-88.54 0-48.9-39.642-88.54-88.54-88.54-46.923 0-85.318 36.502-88.35 82.658 5.73 9.621 7.965 15.572 3.527 31.35z'/%3E%3Cpath fill='%23fff' d='M110.98 93.365c0 .149 0 .298.008.437l-21.666 31.474c-3.51-.16-7.032.456-10.371 1.831a24.09 24.09 0 00-4.146 2.189L27.23 109.711s-1.101 18.11 3.486 31.608l33.633 13.878c1.69 7.547 6.866 14.166 14.504 17.35 12.497 5.222 26.906-.729 32.104-13.231a24.661 24.661 0 001.893-10.116l31-22.154c.25.008.51.016.76.016 18.552 0 33.63-15.124 33.63-33.697 0-18.575-15.078-33.685-33.63-33.685-18.544 0-33.63 15.11-33.63 33.685zm-5.198 63.777c-4.024 9.66-15.124 14.243-24.773 10.222-4.452-1.854-7.812-5.251-9.751-9.302l10.948 4.537c7.116 2.964 15.28-.41 18.237-7.524 2.967-7.121-.399-15.299-7.51-18.263l-11.318-4.689c4.367-1.657 9.331-1.717 13.97.213 4.676 1.946 8.304 5.609 10.227 10.29s1.915 9.85-.03 14.516m38.828-41.328c-12.35 0-22.405-10.07-22.405-22.45 0-12.368 10.055-22.441 22.405-22.441 12.358 0 22.412 10.073 22.412 22.442 0 12.379-10.054 22.449-22.412 22.449M127.822 93.33c0-9.313 7.539-16.866 16.826-16.866 9.295 0 16.834 7.553 16.834 16.866 0 9.313-7.54 16.859-16.834 16.859-9.287 0-16.826-7.546-16.826-16.86z'/%3E%3C/svg%3E") !important}.connectedAccountIcon-2vls0t[aria-label*=Twitch],.connectedAccountIcon-2vls0t[alt*=Twitch],.connectionIcon-3nqZDW[aria-label*=Twitch],.connectionIcon-3nqZDW[alt*=Twitch],.accountBtnInner-3XK70s[aria-label*=Twitch],.accountBtnInner-3XK70s[alt*=Twitch]{background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 40 40'%3E%3Cpath fill='%239147ff' d='M13 8l-5 5v18h6v5l5-5h4l9-9V8z'/%3E%3Cpath fill='%23fff' d='M26 25l4-4V10H14v15h4v4l4-4z'/%3E%3Cpath d='M20 14h2v6h-2v-6zm7 0v6h-2v-6h2z' fill='%239147ff'/%3E%3C/svg%3E") !important}.connectedAccountIcon-2vls0t[aria-label*=Twitter],.connectedAccountIcon-2vls0t[alt*=Twitter],.connectionIcon-3nqZDW[aria-label*=Twitter],.connectionIcon-3nqZDW[alt*=Twitter],.accountBtnInner-3XK70s[aria-label*=Twitter],.accountBtnInner-3XK70s[alt*=Twitter]{background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 255 255'%3E%3Cpath d='M198.088 72.764c.105 1.593.105 3.193.105 4.804 0 49.137-37.095 105.797-104.93 105.797v-.035c-20.044.035-39.661-5.754-56.53-16.664 2.912.352 5.841.533 8.777.54 16.605.01 32.736-5.608 45.803-15.95-15.78-.305-29.62-10.676-34.454-25.822a36.415 36.415 0 0016.647-.64c-17.203-3.509-29.584-18.743-29.584-36.444v-.475a36.376 36.376 0 0016.74 4.658c-16.207-10.922-21.2-32.654-11.414-49.646 18.727 23.226 46.348 37.347 76.008 38.842-2.97-12.909 1.084-26.444 10.67-35.526 14.853-14.074 38.215-13.353 52.178 1.617a73.609 73.609 0 0023.42-9.029c-2.754 8.607-8.514 15.92-16.213 20.56a72.866 72.866 0 0021.181-5.847 75.325 75.325 0 01-18.404 19.26zm0 0' fill='%231da1f2'/%3E%3C/svg%3E") !important}.connectedAccountIcon-2vls0t[aria-label*="Xbox Live"],.connectedAccountIcon-2vls0t[alt*="Xbox Live"],.connectionIcon-3nqZDW[aria-label*="Xbox Live"],.connectionIcon-3nqZDW[alt*="Xbox Live"],.accountBtnInner-3XK70s[aria-label*="Xbox Live"],.accountBtnInner-3XK70s[alt*="Xbox Live"]{background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 788 444' width='32' height='32'%3E%3Cg transform='matrix(3 0 0 3 -790 -445)'%3E%3Ccircle cx='394' cy='222' r='98' fill='%23107C10'/%3E%3Cg fill='%23FFF'%3E%3Cpath d='M394 202.3c.1 0 .2.1.3.2 29.9 22.7 81 78.9 65.4 94.7-37.6 32.9-93.9 32.9-131.5 0-15.7-15.9 35.5-72.1 65.4-94.7.2-.1.3-.2.4-.2M446.1 136.7c-15.3-9.1-31.9-14.7-52.1-14.7-20.1 0-36.7 5.5-52.1 14.7-.2.1-.3.3-.2.5.1.2.3.2.5.2 19.3-4.2 48.8 12.6 51.5 14.2.1.1.3.1.4 0 2.8-1.7 32.1-18.4 51.5-14.2.2.1.4 0 .5-.2.2-.2.1-.4 0-.5M324.1 150.8c-.2.1-.3.2-.4.3-35.6 35.3-39.5 91.6-9.1 131.4.1.2.3.2.5.2.2-.1.2-.3.1-.5-7.6-23.5 31.3-80.6 51.5-104.5.1-.1.1-.2.1-.3 0-.1-.1-.3-.2-.3-30.4-30.4-40.8-27.2-42.5-26.3M421.4 177c-.1.1-.2.2-.2.3 0 .1.1.2.1.3 20 23.9 59 81 51.5 104.5-.1.2-.1.4.1.5.2.1.4 0 .5-.2 30.3-39.9 26.4-96-9.1-131.4-.1-.1-.3-.2-.4-.3-1.7-.8-12.1-4-42.5 26.3'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E") !important}.connectedAccountIcon-2vls0t[aria-label*="Battle.net"],.connectedAccountIcon-2vls0t[alt*="Battle.net"],.connectionIcon-3nqZDW[aria-label*="Battle.net"],.connectionIcon-3nqZDW[alt*="Battle.net"],.accountBtnInner-3XK70s[aria-label*="Battle.net"],.accountBtnInner-3XK70s[alt*="Battle.net"]{background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32px' height='32px' viewBox='0 0 600 580.4'%3E%3Cg transform='translate(70,70) scale(0.76,0.76)'%3E%3Cpath d='M473.5 197.6c-75.9-35.1-185.1-57.4-287.8-49.1 5.1-34 17.9-57.7 38.7-62.7 28.7-6.9 60 12 89.8 46.3 19.5 2.5 42.7 7 58.9 10.7C318.7 40.5 245.7-16.8 190.2 4.4 148 20.5 126.4 78.6 129 156.7c-55 11.7-97.9 32.5-125.4 62.4-1.4 1.6-4.5 5.7-3.4 7.6.9 1.5 3.6-.2 4.9-1 31.8-22.3 72.6-34.3 125.7-41.9 7.6 83.3 42.8 189 101.4 273.8-32 12.6-58.9 13.4-73.6-2.2-20.3-21.4-19.6-58-4.8-101-7.6-18.2-15.3-40.5-20.1-56.3-61.6 98.3-74.8 190.2-28.7 227.7 35.1 28.5 96.2 18.2 162.5-23.1 37.6 41.8 77.1 68.5 116.7 77.3 2.1.4 7.2 1.1 8.3-.8.9-1.5-2-3.1-3.3-3.7-35.2-16.4-66-45.7-99.1-87.9 68.4-48.2 142.3-131.6 186.4-224.7 26.9 21.5 41 44.3 34.9 64.9-8.4 28.3-40.4 46-85.1 54.6-12 15.7-27.4 33.5-38.7 45.6 115.8 4 202-30.5 211.4-89.1 7.2-44.6-32.4-92.4-101.3-129.2 17.4-53.5 20.8-101 8.6-139.7-.7-2-2.6-6.8-4.9-6.8-1.7 0-1.7 3.3-1.6 4.7 3.6 38.6-6.3 80-26.3 129.7zM260.2 444.3c-49-78.6-77.2-171.2-77.1-264.8 92.6-3.1 186.9 18.7 267.9 65.7-43.6 81.7-109.6 152.5-190.8 199.1z' fill='%23148eff'%3E%3C/path%3E%3C/g%3E%3C/svg%3E") !important}.connectedAccountIcon-2vls0t[aria-label*=YouTube],.connectedAccountIcon-2vls0t[alt*=YouTube],.connectionIcon-3nqZDW[aria-label*=YouTube],.connectionIcon-3nqZDW[alt*=YouTube],.accountBtnInner-3XK70s[aria-label*=YouTube],.accountBtnInner-3XK70s[alt*=YouTube]{background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' version='1.0' width='32pt' height='32pt' viewBox='0 0 255 255'%3E%3Cpath d='M65.8 174.8h123.1V83H65.8z' fill='%23fff'/%3E%3Cpath d='M88.5 54c-40.7 1.5-49.3 3.3-56.9 12.1-6.1 7.2-8.2 16.9-9.6 44.7-.9 19.7.2 48.2 2.5 61.7 1.8 10.5 4.9 16.3 11.3 21.2 7.4 5.6 16 6.9 58.7 8.3 40.5 1.5 95.9-.1 112.2-3.1 14.7-2.7 21.4-10.8 24.3-29.1 4.3-27.6 2.2-86.8-3.5-97.9-4.2-8-10.9-12.8-20.5-14.8-14.5-2.9-79.5-4.6-118.5-3.1zm45.6 58.2c14.8 8.4 26.9 15.5 26.9 15.8 0 .5-52 30.2-54 30.8-.6.2-1-10.7-1-30.7 0-17.1.3-31.1.6-31.1s12.7 6.9 27.5 15.2z' fill='%23D9252A'/%3E%3C/svg%3E") !important}.connectedAccountIcon-2vls0t[aria-label*=Facebook],.connectedAccountIcon-2vls0t[alt*=Facebook],.connectionIcon-3nqZDW[aria-label*=Facebook],.connectionIcon-3nqZDW[alt*=Facebook],.accountBtnInner-3XK70s[aria-label*=Facebook],.accountBtnInner-3XK70s[alt*=Facebook]{background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 44 44'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M36.792 38.62c1.01 0 1.828-.819 1.828-1.828V7.328c0-1.01-.819-1.828-1.828-1.828H7.328c-1.01 0-1.828.818-1.828 1.828v29.464c0 1.01.818 1.828 1.828 1.828h29.464z' fill='%23395185'/%3E%3Cpath d='M27.58 38.62V25.74h4.162l.63-4.914H27.58V17.65c0-1.44.345-2.422 2.374-2.422l2.59-.001v-4.45c-.449-.06-1.985-.195-3.773-.195-3.733 0-6.288 2.318-6.288 6.575v3.669H18.38v4.914h4.103v12.88h5.097z' fill='%23FFFFFE'/%3E%3C/g%3E%3C/svg%3E") !important}.connectedAccountIcon-2vls0t[aria-label*="League of Legends"],.connectedAccountIcon-2vls0t[alt*="League of Legends"],.connectionIcon-3nqZDW[aria-label*="League of Legends"],.connectionIcon-3nqZDW[alt*="League of Legends"],.accountBtnInner-3XK70s[aria-label*="League of Legends"],.accountBtnInner-3XK70s[alt*="League of Legends"]{background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 44.97 50.8' width='32px' height='32px'%3E%3Cpath d='M5.1 0l3.85 4.98V43.5L4.72 50.8h34.44l5.81-7.3H19.48V0zm17.5 5.24v4.1A18.15 18.15 0 0134.97 40.4h5.34a22.25 22.25 0 004.18-12.92A22.25 22.25 0 0022.6 5.24zM5.83 12.49A22.25 22.25 0 000 27.48c.01 5.54 2.1 10.89 5.84 14.98v-7.29a18.15 18.15 0 01-1.74-7.7c0-2.66.6-5.28 1.74-7.69z' fill='%23cea146' paint-order='markers stroke fill'/%3E%3C/svg%3E") !important}.connectedAccountIcon-2vls0t[aria-label*=Skype],.connectedAccountIcon-2vls0t[alt*=Skype],.connectionIcon-3nqZDW[aria-label*=Skype],.connectionIcon-3nqZDW[alt*=Skype],.accountBtnInner-3XK70s[aria-label*=Skype],.accountBtnInner-3XK70s[alt*=Skype]{background-image:url("%3Csvg height='32' width='32' viewBox='0 0 1000 990.833' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M568.79 346.16a221.895 221.16 0 01-221.895 221.16A221.895 221.16 0 01125 346.16 221.895 221.16 0 01346.895 125a221.895 221.16 0 01221.894 221.16m309.244 317.604A221.97 221.236 0 01656.063 885a221.97 221.236 0 01-221.971-221.236 221.97 221.236 0 01221.97-221.236 221.97 221.236 0 01221.971 221.236m-25.029-157.117a351.45 350.284 0 01-351.45 350.284 351.45 350.284 0 01-351.449-350.284 351.45 350.284 0 01351.45-350.284 351.45 350.284 0 01351.449 350.284' fill='%230078D7'/%3E%3Cpath d='M402.73 494.487c-55.85-31.965-64-122.846-11.379-161.72 45.024-36.015 106.955-40.878 162.044-32.408 23.737 4.45 49.97 11.46 65.803 30.87 12.65 20.822-4.197 54.464-30.242 49.124-25.168-3.44-46.403-20.998-72.417-21.028-27.68-2.97-62.057 3.452-76.184 30.158-9.305 23.451 7.583 49.784 30.383 57.1 49.903 25.363 109.369 38.216 146.876 82.81 38.39 49.086 21.289 132.53-37.088 157.967-53.808 26.118-116.991 21.86-173.327 6.942-21.168-6.618-46.77-18.836-50.504-43.159-2.7-25.82 25.35-44.399 48.45-33.828 26.703 8.023 50.202 26.806 79.166 26.654 26.515 2.318 60.293-5.899 70.241-33.616 6.866-23.313-9.052-47.942-30.95-56.078-38.987-22.561-83.697-33.89-120.872-59.788z' fill='%23fff' fill-rule='evenodd'/%3E%3C/svg%3E") !important}.accountBtnInner-3XK70s{width:52px;height:52px}.connectedAccountName-j0meX4 .childContainer-U_a6Yh path,.connectedAccountNameInner-t24B11 .childContainer-U_a6Yh path{fill:var(--accent-text) !important}.platform-win .sidebar-1tnWFu,.platform-mac .sidebar-1tnWFu,.platform-linux .sidebar-1tnWFu{border-radius:0}.sidebar-1tnWFu{resize:horizontal;width:var(--channels-width);max-width:max(50vw, 256px);min-width:256px}.sidebar-1tnWFu.hidden-38rxp9{min-width:unset;max-width:unset}.scroller-WSmht3,.privateChannels-oVe7HL{background-color:var(--navdrawer-color)}.channel-1Shao0{max-width:100%}.bannerImage-ubW8K-,.animatedContainer-2laTjx{width:100%;padding-top:56.25%;height:0}.scroller-WSmht3 .content-2a4AW9 div[style*="height: 84px"]:first-child,.scroller-1ox3I2 .content-2a4AW9 div[style*="height: 84px"]:first-child{height:0 !important;padding-top:calc(56.25% - 51px)}.bannerImg-2PzH6z{position:absolute;top:0;width:100%;height:100%}.theme-light .container-1-ERn5:not(.hasBanner-2IrYih) .header-3OsQeK{background-color:var(--card-6-bg);box-shadow:0px 3px 5px -1px rgba(0, 0, 0, 0.2),0px 6px 10px 0px rgba(0, 0, 0, 0.14),0px 1px 18px 0px rgba(0,0,0,.12)}.theme-dark .container-1-ERn5:not(.hasBanner-2IrYih) .header-3OsQeK{background-color:var(--card-6-bg)}.scrolling-20Of9p .content-2a4AW9{pointer-events:all}.membersWrap-3NUR2t{width:var(--members-width)}.members-3WRCEx{width:var(--members-width)}.member-2gU6Ar{max-width:var(--members-width)}.theme-light .container-ZMc96U.themed-Hp1KC_,.theme-light .searchBar-3TnChZ{background-color:var(--card-6-bg);box-shadow:0px 3px 5px -1px rgba(0, 0, 0, 0.2),0px 6px 10px 0px rgba(0, 0, 0, 0.14),0px 1px 18px 0px rgba(0,0,0,.12)}.theme-dark .container-ZMc96U.themed-Hp1KC_,.theme-dark .searchBar-3TnChZ{background-color:var(--card-6-bg)}.sidebar-1tnWFu .container-1NXEtd .container-1-ERn5:not(.hasBanner-2IrYih).theme-light{background-color:var(--card-6-bg);box-shadow:0px 3px 5px -1px rgba(0, 0, 0, 0.2),0px 6px 10px 0px rgba(0, 0, 0, 0.14),0px 1px 18px 0px rgba(0,0,0,.12)}.sidebar-1tnWFu .container-1NXEtd .container-1-ERn5:not(.hasBanner-2IrYih).theme-dark{background-color:var(--card-6-bg)}.theme-light .form-3gdLxP:before{background:transparent}.theme-dark .children-3xh0VB::after,.theme-light .children-3xh0VB::after{background:-webkit-gradient(linear, left top, right top, from(transparent), to(var(--card-6-bg)));background:linear-gradient(90deg, transparent 0, var(--card-6-bg))}.scroller-WSmht3,.scroller-1ox3I2{border-right:1px solid var(--navdrawer-separator)}.divider-2rZFJK{border-color:var(--navdrawer-separator)}.divider-q3P9HC{background:var(--navdrawer-separator)}.app-2CXKsg,.appMount-2yBXZl,body,.chat-2ZfjoI,.threadSidebar-1o3BTy,.scroller-29cQFV,.container-36u7Lw,.nowPlayingColumn-1eCBCN,.container-1oAagU,.scroller-2XLwLg,.header-2EadGG,.scroller-1TOeMq,.layer-86YKbF:not(.baseLayer-W6S8cY),.content-3spvdd{background-color:var(--card-0-bg)}.theme-dark .container-2cd8Mz,.theme-dark .wrapper-15CKyy,.theme-dark .wrapper-22ayhK{background-color:var(--card-0-bg)}.theme-light .container-2cd8Mz,.theme-light .wrapper-15CKyy,.theme-light .wrapper-22ayhK{background-color:var(--card-0-bg)}.theme-light .placeholder-1_mJY1{font-weight:500}.theme-dark .placeholder-1_mJY1{font-weight:600}.thin-31rlnD::-webkit-scrollbar-thumb{background-color:var(--navdrawer-separator)}.setIdentityLink-hOFsMl,.botText-1fD6Qk,.username-h_Y3Us{user-select:none}.ephemeralMessage-11q8XZ,.message-2CShn3.systemMessage-1H1Z20.isSystemMessage-QNv9ZH .messageContent-2t3eCI,.message-2CShn3.systemMessage-1H1Z20.isSystemMessage-QNv9ZH.wrapper-30-Nkg .systemMessageContainer-3F3V9U{user-select:none}.message-2CShn3::after{transition:background-size .3s cubic-bezier(0, 0, 0.2, 1),opacity .6s cubic-bezier(0, 0, 0.2, 1);opacity:0;background-size:500%;background-image:radial-gradient(circle at calc(var(--clickX) + 50%) calc(var(--clickY) + 50%), var(--ripple-default) 24%, transparent 25%, transparent 100%);background-repeat:no-repeat;background-position:50% 50%;background-attachment:local;background-clip:padding-box;object-fit:contain;content:"";pointer-events:none;position:absolute;width:100%;height:100%;top:0px;left:0px}.message-2CShn3:not(:active)::after{transition:0s;opacity:.3;background-size:0%}.container-2sjPya{z-index:1}.cozy-VmLDNB.hasThread-3h-KJV::before{top:28px}.cozy-VmLDNB.hasThread-3h-KJV.isSystemMessage-QNv9ZH::before{border-left:2px solid var(--background-accent);border-bottom:2px solid var(--background-accent);border-bottom-left-radius:8px;bottom:29px;content:"";left:35px;position:absolute;top:48px;width:31px}.cozy-VmLDNB.hasThread-3h-KJV::after{top:0px}.cozy-VmLDNB.hasThread-3h-KJV.isSystemMessage-QNv9ZH::after{border-left:none;border-bottom:none;border-bottom-left-radius:0;bottom:unset;left:0px;position:absolute;top:0px;width:100%}.messagesWrapper-RpOMA3::after{content:"";width:100%;height:var(--chatbox-top-padding);position:absolute;bottom:0px;z-index:2;background:-webkit-gradient(linear, left top, left bottom, from(transparent), to(var(--card-0-bg)));background:linear-gradient(180deg, transparent 0, var(--card-0-bg))}.theme-light .card-PQEqCK{background-color:var(--card-4-bg);box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0,0,0,.12)}.theme-dark .card-PQEqCK{background-color:var(--card-4-bg)}.checkmark-bW9BK8{background-color:var(--online)}.replyAvatar-sHd2sU{cursor:pointer}.topic-11NuQZ.expandable-3CaLeS{-webkit-app-region:none}.followButton-1N-GGp{-webkit-app-region:none}.scroller-3X7KbA,.circleIconButton-3lUBQk,.childWrapper-1j_1ub{background-color:var(--card-6-bg)}.theme-light .scroller-WSmht3,.theme-light .scroller-1ox3I2,.theme-light .channelNotice-tO6Tus{box-shadow:inset 2px 3px 1px -2px rgba(0,0,0,.2),inset 2px 2px 2px 0px rgba(0,0,0,.14),inset 2px 1px 5px 0px rgba(0,0,0,.12)}.channelNotice-tO6Tus{border-right:1px solid var(--navdrawer-separator)}.hasBanner-2IrYih~.scroller-1ox3I2{box-shadow:inset 2px -3px 1px -2px rgba(0,0,0,.2),inset 2px -2px 2px 0px rgba(0,0,0,.14),inset 2px -1px 5px 0px rgba(0,0,0,.12)}.guildSeparator-33mFX6{background-color:var(--navdrawer-separator)}.circleIconButton-3lUBQk{color:var(--online)}.circleIconButton-3lUBQk.selected-2tb4pB{background-color:var(--online)}.bg-1QIAus{background-color:var(--card-6-bg)}.platform-osx .guilds-2JjMmN::before{content:"";height:32px;width:72px;position:absolute}.theme-light.platform-osx .guilds-2JjMmN{background-color:var(--card-6-bg)}.theme-dark.platform-osx .guilds-2JjMmN{background-color:var(--card-6-bg)}.layers-OrUESM{overflow:visible}.layer-86YKbF.baseLayer-W6S8cY:not(.stop-animations):not(.animating-1rIrGV) .sidebar-1tnWFu.theme-dark::before{content:"";background-color:var(--card-8-bg);position:absolute;width:calc(var(--channels-width) + 72px);max-width:calc(var(--channels-width) + 72px);height:24px;display:inline-block;z-index:3000;position:fixed;top:0;left:0;box-shadow:none}.wordmarkWindows-2dq6rw{color:var(--logo-color)}path[d="M3.57642276,0.141304348 L0,0.141304348 L0,4.22826087 L2.38069106,6.40217391 L2.38069106,2.43478261 L3.66260163,2.43478261 C4.47052846,2.43478261 4.86910569,2.83695652 4.86910569,3.4673913 L4.86910569,6.5 C4.86910569,7.13043478 4.49207317,7.55434783 3.66260163,7.55434783 L0,7.55434783 L0,9.85869565 L3.57642276,9.85869565 C5.49390244,9.86956522 7.29288618,8.90217391 7.29288618,6.66304348 L7.29288618,3.39130435 C7.29288618,1.13043478 5.49390244,0.141304348 3.57642276,0.141304348 Z M22.3310976,6.67391304 L22.3310976,3.32608696 C22.3310976,2.11956522 24.4640244,1.83695652 25.1103659,3.05434783 L27.0817073,2.23913043 C26.3168699,0.510869565 24.8949187,0 23.7207317,0 C21.803252,0 19.9073171,1.13043478 19.9073171,3.32608696 L19.9073171,6.67391304 C19.9073171,8.88043478 21.803252,10 23.6776423,10 C24.8841463,10 26.3276423,9.39130435 27.1247967,7.81521739 L25.0134146,6.82608696 C24.4963415,8.17391304 22.3310976,7.84782609 22.3310976,6.67391304 Z M15.8030488,3.7826087 C15.0597561,3.61956522 14.5642276,3.34782609 14.5319106,2.88043478 C14.575,1.75 16.2878049,1.7173913 17.2896341,2.79347826 L18.8731707,1.55434783 C17.8821138,0.326086957 16.7617886,0 15.598374,0 C13.8424797,0 12.1404472,1 12.1404472,2.91304348 C12.1404472,4.77173913 13.5408537,5.76086957 15.0813008,6 C15.8676829,6.10869565 16.7402439,6.42391304 16.7186992,6.97826087 C16.654065,8.02173913 14.5426829,7.9673913 13.5839431,6.7826087 L12.0650407,8.23913043 C12.9591463,9.40217391 14.1764228,10 15.3182927,10 C17.074187,10 19.0239837,8.9673913 19.0993902,7.08695652 C19.2071138,4.69565217 17.5050813,4.09782609 15.8030488,3.7826087 Z M8.59634146,9.85869565 L11.0093496,9.85869565 L11.0093496,0.141304348 L8.59634146,0.141304348 L8.59634146,9.85869565 Z M49.2835366,0.141304348 L45.7071138,0.141304348 L45.7071138,4.22826087 L48.0878049,6.40217391 L48.0878049,2.43478261 L49.3589431,2.43478261 C50.1668699,2.43478261 50.5654472,2.83695652 50.5654472,3.4673913 L50.5654472,6.5 C50.5654472,7.13043478 50.1884146,7.55434783 49.3589431,7.55434783 L45.6963415,7.55434783 L45.6963415,9.85869565 L49.2727642,9.85869565 C51.1902439,9.86956522 52.9892276,8.90217391 52.9892276,6.66304348 L52.9892276,3.39130435 C53,1.13043478 51.2010163,0.141304348 49.2835366,0.141304348 Z M31.7353659,0 C29.753252,0 27.7819106,1.09782609 27.7819106,3.33695652 L27.7819106,6.66304348 C27.7819106,8.89130435 29.7640244,10 31.7569106,10 C33.7390244,10 35.7103659,8.89130435 35.7103659,6.66304348 L35.7103659,3.33695652 C35.7103659,1.10869565 33.7174797,0 31.7353659,0 Z M33.2865854,6.66304348 C33.2865854,7.35869565 32.5109756,7.7173913 31.7461382,7.7173913 C30.9705285,7.7173913 30.1949187,7.36956522 30.1949187,6.66304348 L30.1949187,3.33695652 C30.1949187,2.61956522 30.9489837,2.23913043 31.7030488,2.23913043 C32.4894309,2.23913043 33.2865854,2.58695652 33.2865854,3.33695652 L33.2865854,6.66304348 Z M44.3605691,3.33695652 C44.3067073,1.05434783 42.7770325,0.141304348 40.8056911,0.141304348 L36.9815041,0.141304348 L36.9815041,9.86956522 L39.4268293,9.86956522 L39.4268293,6.77173913 L39.8577236,6.77173913 L42.0768293,9.85869565 L45.0930894,9.85869565 L42.4861789,6.52173913 C43.6495935,6.15217391 44.3605691,5.14130435 44.3605691,3.33695652 Z M40.8487805,4.65217391 L39.4268293,4.65217391 L39.4268293,2.43478261 L40.8487805,2.43478261 C42.3784553,2.43478261 42.3784553,4.65217391 40.8487805,4.65217391 Z"],path[d="M17.2882 11.7709C16.7475 11.6335 16.2618 11.4319 15.8311 11.1569V9.4983C16.161 9.75489 16.5917 9.95649 17.1416 10.1214C17.6914 10.2864 18.2229 10.3689 18.7361 10.3689C18.9743 10.3689 19.1576 10.3414 19.2767 10.2772C19.3959 10.2131 19.46 10.1398 19.46 10.0481C19.46 9.94733 19.4233 9.86485 19.3592 9.80071C19.2951 9.73656 19.1668 9.68158 18.9743 9.62659L17.7739 9.36084C17.0866 9.20506 16.6009 8.97596 16.3077 8.70105C16.0144 8.42613 15.877 8.05042 15.877 7.59223C15.877 7.20735 16.0053 6.86829 16.2527 6.58421C16.5093 6.30013 16.8667 6.0802 17.334 5.92442C17.8014 5.76863 18.342 5.68616 18.9743 5.68616C19.5333 5.68616 20.0465 5.74114 20.5138 5.86944C20.9812 5.98857 21.3661 6.14435 21.6685 6.32763V7.89464C21.3569 7.71136 20.9904 7.56474 20.5871 7.45477C20.1748 7.34481 19.7533 7.28982 19.3226 7.28982C18.6994 7.28982 18.3878 7.39979 18.3878 7.61056C18.3878 7.71136 18.4337 7.78467 18.5345 7.83966C18.6353 7.89464 18.8094 7.94046 19.066 7.99544L20.0648 8.17871C20.7155 8.28868 21.2011 8.49028 21.5219 8.77436C21.8426 9.05844 21.9984 9.47081 21.9984 10.0298C21.9984 10.6346 21.7326 11.1203 21.2011 11.4685C20.6696 11.8259 19.9182 12 18.9468 12C18.3787 11.9817 17.8289 11.9084 17.2882 11.7709Z"]{d:path("m 51.392591,12.523131 c -2.811672,0.09689 -4.029695,-3.5895394 -2.519759,-5.6293008 0.94199,-1.7854597 3.698947,-1.4124734 4.566069,-0.414678 -0.16231,-1.0979421 -0.06284,-2.2103831 -0.08996,-3.3158125 0.537036,0.1659557 1.812838,-0.4068545 1.662258,0.4467177 0,2.9028292 0,5.8056584 0,8.7084876 -0.567686,-0.138434 -1.812906,0.400664 -1.559965,-0.558397 0.01169,-0.53967 -1.405343,1.233032 -2.058643,0.762983 z m 0.281306,-1.547179 c 2.063968,0.0665 2.435,-3.3025536 0.457121,-3.7624568 -1.797931,-0.5457825 -2.977597,2.0255312 -1.694225,3.2286168 0.319754,0.331736 0.774074,0.537095 1.237104,0.53384 z M 43.516078,5.7973793 c 0.502838,0.1703181 1.762139,-0.4158262 1.572752,0.4467177 -0.02029,1.029027 1.455792,-1.423271 2.410274,-0.6033536 0.665798,0.1151306 0.679975,2.5251726 -0.437941,1.553572 -1.738709,-0.2543733 -1.998507,1.7089574 -1.870041,2.9932276 0,0.710334 0,1.420668 0,2.131002 -0.541562,-0.165692 -1.8206,0.406092 -1.675044,-0.446718 0,-2.0248157 0,-4.0496317 0,-6.0744477 z m -4.615955,6.7257517 c -2.265041,0.151733 -4.019135,-2.263071 -3.36927,-4.3921972 0.545629,-2.7357103 4.576286,-3.4329645 6.147158,-1.2123295 1.580241,1.9695821 0.318464,5.4059567 -2.291998,5.5765557 l -0.239748,0.02098 z m 0,-1.547179 c 2.088479,0.110567 2.45483,-3.3260867 0.466711,-3.7656534 -1.723178,-0.5358069 -2.966523,1.7740149 -1.889221,3.0751774 0.329184,0.440455 0.874894,0.697367 1.42251,0.690476 z m -7.313922,1.547179 c -2.277132,0.150654 -3.961515,-2.295436 -3.318123,-4.4081805 0.528243,-2.9126436 5.181684,-3.4945595 6.310187,-0.7320328 -0.999031,0.5125816 -1.728029,0.8301471 -2.507772,-0.1758158 -2.74028,-0.8126224 -3.017941,4.2144751 -0.22816,3.7544651 1.016488,-0.379145 1.438786,-1.239216 2.506288,-0.369633 0.775986,0.802246 -1.869695,2.159787 -2.76242,1.931197 z M 25.256869,3.1633397 c 0.541563,0.1656915 1.820601,-0.4060922 1.675045,0.4467177 0,2.9028292 0,5.8056584 0,8.7084876 -0.541563,-0.165692 -1.820601,0.406092 -1.675045,-0.446718 0,-2.9028289 0,-5.8056581 0,-8.7084873 z m -4.449736,9.3597913 c -2.22638,0.126013 -3.942373,-2.257115 -3.305336,-4.3506407 0.473145,-2.4550253 3.914184,-3.4931816 5.619711,-1.6302916 0.806686,0.8209735 1.587628,3.4534864 -0.311239,2.9121482 -1.260158,0 -2.520316,0 -3.780474,0 0.214043,2.2589631 2.854849,1.4844221 3.753176,0.8124621 1.830201,0.304698 0.342177,1.786035 -0.806314,2.0865 -0.377268,0.120101 -0.774406,0.169962 -1.169524,0.169822 z m 1.547179,-4.2579379 c 0.02275,-2.1797063 -3.863271,-1.0777467 -2.912759,0 0.97092,0 1.941839,0 2.912759,0 z M 12.700455,9.0068159 C 11.950308,7.9370037 11.20016,6.8671915 10.450013,5.7973793 c 0.664025,0.063115 1.463111,-0.1256538 2.043724,0.093021 0.432281,0.5653996 0.76494,1.3165896 1.255219,1.7738228 0.443466,-0.5891676 0.743752,-1.4362942 1.275259,-1.8668436 0.554777,0.065507 1.612602,-0.128103 1.869333,0.090926 -0.741319,1.0395035 -1.482638,2.0790069 -2.223957,3.1185104 0.762934,1.1039101 1.525867,2.2078191 2.288801,3.3117291 -0.663732,-0.06331 -1.463694,0.12604 -2.043292,-0.09331 -0.436083,-0.579354 -0.774105,-1.340574 -1.268437,-1.811897 -0.409171,0.635068 -0.818343,1.270135 -1.227514,1.905203 -0.579338,-0.06256 -1.631711,0.124551 -1.91891,-0.0922 0.733405,-1.073175 1.466811,-2.146349 2.200216,-3.2195241 z M 8.5192406,5.0813297 C 6.1360708,4.8874194 8.4026235,1.4695521 9.5133988,3.5821009 9.8173146,4.2542777 9.2614431,5.1085727 8.5192406,5.0813297 Z M 7.675325,5.7973793 c 0.5415626,0.1656915 1.8206004,-0.4060922 1.6750446,0.4467177 0,2.024816 0,4.049632 0,6.074448 -0.5415626,-0.165692 -1.8206004,0.406092 -1.6750446,-0.446718 0,-2.0248157 0,-4.0496317 0,-6.0744477 z M 0.00338157,3.1633397 C 1.7243269,3.2800822 3.5933313,2.8085208 5.1499881,3.7323434 7.545378,5.2452646 6.0162047,9.2893659 3.2256048,8.9556695 2.6758131,9.0906876 1.4580928,8.557777 1.7295726,9.5140666 c 0,0.9348264 0,1.8696524 0,2.8044784 -0.5170845,-0.169992 -1.74755528,0.373402 -1.72619103,-0.335038 0,-2.9400559 0,-5.8801116 0,-8.8201673 z M 3.2767512,7.3189847 C 5.2819537,7.4481524 4.8360976,4.2711364 2.941713,4.8000245 2.1613729,4.721543 1.4376629,4.6996916 1.7295726,5.6934598 1.8967603,6.2170196 1.319823,7.4847044 2.1762903,7.3189847 c 0.3668203,0 0.7336406,0 1.1004609,0 z");transform:translate(0, 0)}path[d="M3 4.78717H6.89554C7.83025 4.78717 8.62749 4.93379 9.27812 5.22703C9.92875 5.52027 10.4144 5.92348 10.7352 6.44582C11.0559 6.96815 11.2208 7.5638 11.2208 8.24192C11.2208 8.90171 11.0559 9.49736 10.7168 10.038C10.3778 10.5695 9.8646 11.0002 9.17732 11.3118C8.49003 11.6234 7.6378 11.7791 6.6197 11.7791H3V4.78717ZM6.57388 10.0014C7.2071 10.0014 7.69278 9.84559 8.03184 9.52485C8.3709 9.21328 8.54501 8.77343 8.54501 8.23276C8.54501 7.72875 8.38923 7.32555 8.08682 7.02314C7.78442 6.72073 7.32623 6.56495 6.71225 6.56495H5.49255V10.0014H6.57388Z"],path[d="M24.4735 11.5602C23.9054 11.2761 23.4655 10.9004 23.1814 10.4239C22.8882 9.94733 22.7507 9.40666 22.7507 8.80185C22.7507 8.20621 22.8974 7.66554 23.1998 7.19819C23.5022 6.72167 23.942 6.35512 24.5194 6.0802C25.0967 5.81445 25.7931 5.677 26.5995 5.677C27.5984 5.677 28.4231 5.88776 29.0829 6.3093V8.1329C28.8538 7.97712 28.5789 7.83965 28.2673 7.74802C27.9558 7.64721 27.6259 7.6014 27.2777 7.6014C26.6545 7.6014 26.178 7.71137 25.8206 7.94046C25.4724 8.16956 25.2983 8.46279 25.2983 8.82934C25.2983 9.18673 25.4632 9.47998 25.8115 9.70907C26.1505 9.93817 26.6453 10.0573 27.2868 10.0573C27.6167 10.0573 27.9466 10.0115 28.2673 9.91067C28.5881 9.80987 28.8722 9.69991 29.1013 9.55329V11.3219C28.3681 11.7618 27.5159 11.9817 26.5537 11.9817C25.7381 11.9817 25.0509 11.8351 24.4735 11.5602Z"],path[d="M31.6955 11.5602C31.1182 11.2761 30.6783 10.9004 30.3759 10.4147C30.0735 9.929 29.9177 9.38834 29.9177 8.78353C29.9177 8.18788 30.0735 7.64722 30.3759 7.17986C30.6783 6.71251 31.1182 6.34595 31.6863 6.0802C32.2545 5.81445 32.9418 5.677 33.7299 5.677C34.518 5.677 35.2053 5.80529 35.7743 6.0802C36.3425 6.34595 36.7824 6.71251 37.0848 7.17986C37.3872 7.64722 37.5338 8.17872 37.5338 8.78353C37.5338 9.37918 37.3872 9.929 37.0848 10.4147C36.7824 10.9004 36.3517 11.2852 35.7743 11.5602C35.1961 11.8351 34.518 11.9817 33.7299 11.9817C32.951 11.9817 32.2728 11.8351 31.6955 11.5602ZM34.7287 9.79155C34.967 9.55329 35.0953 9.22339 35.0953 8.82934C35.0953 8.42614 34.9762 8.11457 34.7287 7.87632C34.4813 7.63806 34.1514 7.51892 33.7391 7.51892C33.3084 7.51892 32.9785 7.63806 32.731 7.87632C32.4928 8.11457 32.3645 8.42614 32.3645 8.82934C32.3645 9.23255 32.4836 9.55329 32.731 9.79155C32.9785 10.039 33.3084 10.1581 33.7391 10.1581C34.1514 10.1489 34.4905 10.0298 34.7287 9.79155Z"],path[d="M43.6644 6.0435V8.19699C43.4078 8.03204 43.0779 7.94956 42.6747 7.94956C42.1432 7.94956 41.7308 8.11451 41.4467 8.43524C41.1626 8.75598 41.016 9.25999 41.016 9.93811V11.7709H38.5693V5.9427H40.9702V7.80295C41.0985 7.12482 41.3184 6.62082 41.6117 6.30008C41.9049 5.97935 42.2898 5.80524 42.7572 5.80524C43.1054 5.80524 43.4078 5.88771 43.6644 6.0435Z"],path[d="M51.9136 4.58649V11.7801H49.4659V10.4696C49.2552 10.9645 48.9436 11.3402 48.5221 11.5968C48.1005 11.8534 47.5782 11.9817 46.9551 11.9817C46.4052 11.9817 45.9195 11.8442 45.5072 11.5785C45.0948 11.3127 44.7741 10.937 44.5542 10.4696C44.3342 9.99313 44.2242 9.46163 44.2242 8.87514C44.2151 8.26117 44.3342 7.71134 44.5816 7.22566C44.8199 6.73998 45.1681 6.36426 45.608 6.08935C46.0479 5.81444 46.5519 5.67698 47.12 5.67698C48.2838 5.67698 49.0627 6.18099 49.4659 7.19817V4.58649H51.9136ZM49.0994 9.7457C49.3468 9.50744 49.4751 9.18671 49.4751 8.80183C49.4751 8.42612 49.356 8.12371 49.1086 7.89462C48.8611 7.66552 48.5312 7.5464 48.1189 7.5464C47.7065 7.5464 47.3766 7.66553 47.1292 7.90378C46.8818 8.14204 46.7626 8.44444 46.7626 8.82932C46.7626 9.2142 46.8818 9.51661 47.1292 9.75487C47.3766 9.99313 47.6973 10.1123 48.1097 10.1123C48.5221 10.1123 48.852 9.99313 49.0994 9.7457Z"],path[d="M13.4751 6.29095C14.1789 6.29095 14.7489 5.77778 14.7489 5.14547C14.7489 4.51317 14.1789 4 13.4751 4C12.7723 4 12.2014 4.51317 12.2014 5.14547C12.2014 5.77778 12.7723 6.29095 13.4751 6.29095Z"],path[d="M14.7489 7.07812C13.97 7.41719 12.9986 7.42635 12.2014 7.07812V11.7792H14.7489V7.07812Z"]{d:path("")}.winButton-3UMjdg{color:var(--logo-color);filter:grayscale(1) contrast(9)}.winButtonClose-3Q8ZH5{filter:none}.theme-light .container-2RRFHK{background-color:var(--card-0-bg)}.theme-dark .container-2RRFHK{background-color:var(--card-0-bg)}.tipTitle-3FYEQp{font-weight:var(--section-weight);font-size:14px;color:var(--header-color)}.header-3lOo5J{color:var(--header-color)}.sidebar-1tnWFu>.scrollerBase-_bVAAt{background-color:var(--navdrawer-color);border-right:1px solid var(--navdrawer-separator)}.theme-light .sidebar-1tnWFu>.scrollerBase-_bVAAt{box-shadow:inset 2px 3px 1px -2px rgba(0,0,0,.2),inset 2px 2px 2px 0px rgba(0,0,0,.14),inset 2px 1px 5px 0px rgba(0,0,0,.12)}.theme-light .pageWrapper-2PwDoS{background-color:var(--card-0-bg)}.theme-dark .pageWrapper-2PwDoS{background-color:var(--card-0-bg)}.theme-light .card-2TuZPZ{background-color:var(--card-6-bg);box-shadow:0px 3px 5px -1px rgba(0, 0, 0, 0.2),0px 6px 10px 0px rgba(0, 0, 0, 0.14),0px 1px 18px 0px rgba(0,0,0,.12)}.theme-dark .card-2TuZPZ{background-color:var(--card-6-bg)}.theme-light .guildSidebar-UHnQqs{background-color:var(--card-6-bg);box-shadow:0px 3px 5px -1px rgba(0, 0, 0, 0.2),0px 6px 10px 0px rgba(0, 0, 0, 0.14),0px 1px 18px 0px rgba(0,0,0,.12)}.theme-dark .guildSidebar-UHnQqs{background-color:var(--card-6-bg)}.theme-light .modal-2TOYtq{background-color:var(--card-4-bg);box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0,0,0,.12)}.theme-dark .modal-2TOYtq{background-color:var(--card-4-bg)}.theme-light .formFieldWrapper-2LV3S6,.theme-light .settingsFormFieldWrapper-U99c9i{background-color:var(--card-2-bg);box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 1px 5px 0px rgba(0,0,0,.12)}.theme-dark .formFieldWrapper-2LV3S6,.theme-dark .settingsFormFieldWrapper-U99c9i{background-color:var(--card-2-bg)}.theme-light .messageGroupWrapper-1jf_7C{background-color:var(--card-4-bg);box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0,0,0,.12)}.theme-dark .messageGroupWrapper-1jf_7C{background-color:var(--card-4-bg)}.header-1w9Q93{z-index:11}.theme-light .header-1w9Q93{background-color:var(--card-2-bg);box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 1px 5px 0px rgba(0,0,0,.12)}.theme-dark .header-1w9Q93{background-color:var(--card-2-bg)}.messagesPopoutWrap-3zryHW{animation:pixelcord-spawn-anim .2s ease-in-out;transform-origin:top right}.theme-light .messagesPopoutWrap-3zryHW{background-color:var(--card-8-bg);box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0,0,0,.12)}.theme-dark .messagesPopoutWrap-3zryHW{background-color:var(--card-8-bg)}.footer-5ji8u1{background-color:transparent}.base-21yXnu[style*="color: hsl(139, "]{color:var(--online) !important}.footer-5ji8u1{height:auto}.theme-light .optionContainer-yOpaLq{background-color:var(--card-2-bg);box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 1px 5px 0px rgba(0,0,0,.12)}.theme-dark .optionContainer-yOpaLq{background-color:var(--card-2-bg)}.container-2dXT_2{border-color:transparent}.theme-light .container-2dXT_2{background-color:var(--card-6-bg);box-shadow:0px 3px 5px -1px rgba(0, 0, 0, 0.2),0px 6px 10px 0px rgba(0, 0, 0, 0.14),0px 1px 18px 0px rgba(0,0,0,.12)}.theme-dark .container-2dXT_2{background-color:var(--card-6-bg)}.notice-2olXi7{background-color:var(--accent);color:var(--accent-text)}.button-YGmtzG:hover{background-color:var(--accent-highlight);color:var(--accent-text)}.item-1BCeuB[aria-disabled=false]{cursor:pointer}.item-1BCeuB[aria-disabled=false] .checkboxWrapper-2fDzaA{cursor:pointer}.container-x8Y1ix{border-color:transparent}.theme-light .container-x8Y1ix{background-color:var(--card-4-bg);box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0,0,0,.12)}.theme-dark .container-x8Y1ix{background-color:var(--card-4-bg)}.theme-dark{--card-0-bg-dark: var(--card-0-bg);--card-1-bg-dark: var(--card-1-bg);--card-2-bg-dark: var(--card-2-bg);--card-3-bg-dark: var(--card-3-bg);--card-4-bg-dark: var(--card-4-bg);--card-5-bg-dark: var(--card-5-bg);--card-6-bg-dark: var(--card-6-bg);--card-7-bg-dark: var(--card-7-bg);--card-8-bg-dark: var(--card-8-bg);--card-9-bg-dark: var(--card-9-bg);--card-10-bg-dark: var(--card-10-bg);--card-11-bg-dark: var(--card-11-bg);--card-12-bg-dark: var(--card-12-bg);--card-13-bg-dark: var(--card-13-bg);--card-14-bg-dark: var(--card-14-bg);--card-15-bg-dark: var(--card-15-bg);--card-16-bg-dark: var(--card-16-bg);--card-17-bg-dark: var(--card-17-bg);--card-18-bg-dark: var(--card-18-bg);--card-19-bg-dark: var(--card-19-bg);--card-20-bg-dark: var(--card-20-bg);--card-21-bg-dark: var(--card-21-bg);--card-22-bg-dark: var(--card-22-bg);--card-23-bg-dark: var(--card-23-bg);--card-24-bg-dark: var(--card-24-bg)}.theme-dark .theme-light{--card-0-bg: var(--card-0-bg-dark);--card-1-bg: var(--card-1-bg-dark);--card-2-bg: var(--card-2-bg-dark);--card-3-bg: var(--card-3-bg-dark);--card-4-bg: var(--card-4-bg-dark);--card-5-bg: var(--card-5-bg-dark);--card-6-bg: var(--card-6-bg-dark);--card-7-bg: var(--card-7-bg-dark);--card-8-bg: var(--card-8-bg-dark);--card-9-bg: var(--card-9-bg-dark);--card-10-bg: var(--card-10-bg-dark);--card-11-bg: var(--card-11-bg-dark);--card-12-bg: var(--card-12-bg-dark);--card-13-bg: var(--card-13-bg-dark);--card-14-bg: var(--card-14-bg-dark);--card-15-bg: var(--card-15-bg-dark);--card-16-bg: var(--card-16-bg-dark);--card-17-bg: var(--card-17-bg-dark);--card-18-bg: var(--card-18-bg-dark);--card-19-bg: var(--card-19-bg-dark);--card-20-bg: var(--card-20-bg-dark);--card-21-bg: var(--card-21-bg-dark);--card-22-bg: var(--card-22-bg-dark);--card-23-bg: var(--card-23-bg-dark);--card-24-bg: var(--card-24-bg-dark)}.theme-dark .theme-light .lookBlank-3eh9lL,.theme-dark .theme-light .theme-light .lookLink-9FtZy-{color:var(--faded-text-interactive-normal)}.theme-dark .theme-light .input-2g-os5{color:#fff}.theme-dark .theme-light .iconContainer-GFfNaA circle{fill:var(--accent)}.theme-dark .theme-light .iconContainer-GFfNaA path[d="M73.3332 11.4075H68.5924V6.66675H67.4072V11.4075H62.6665V12.5927H67.4072V17.3334H68.5924V12.5927H73.3332V11.4075Z"]{color:var(--accent-text)}.theme-dark .theme-light .sampleLink-5BWNy9{color:var(--faded-text-interactive-normal)}.theme-dark .theme-light .input-m1-Y7Q{background-color:transparent}.root-1Emen5{background-color:#000}.wrapper-1gVUIN.video-3n15R6{transition:height .2s ease-in-out}.theme-light .root-cw9rWQ{background-color:var(--card-4-bg);box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0,0,0,.12)}.theme-dark .root-cw9rWQ{background-color:var(--card-4-bg)}.endButton-oUxeLG .contents-18-Yxp{content:""}.endButton-oUxeLG .contents-18-Yxp span{content:"";color:transparent}.endButton-oUxeLG.button-38aScr{border-radius:50%}.endButton-oUxeLG:first-child{-webkit-mask-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M0 0h24v24H0V0z' fill='none'/%3E%3Cpath d='M15.61 7.41L14.2 6l-6 6 6 6 1.41-1.41L11.03 12l4.58-4.59z'/%3E%3C/svg%3E");-webkit-mask-size:38px 38px;width:38px;background-color:var(--header-primary)}.endButton-oUxeLG:last-child{-webkit-mask-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M0 0h24v24H0V0z' fill='none'/%3E%3Cpath d='M10.02 6L8.61 7.41 13.19 12l-4.58 4.59L10.02 18l6-6-6-6z'/%3E%3C/svg%3E");-webkit-mask-size:38px 38px;width:38px;background-color:var(--header-primary)}.pageControl-1XvHg0>div:nth-child(3):not(.pageButton-1GMGeJ):not(.inputWrapper-1YNMmM),.pageControl-1XvHg0>div:nth-child(5):not(.pageButton-1GMGeJ):not(.inputWrapper-1YNMmM){cursor:text;position:relative;border-radius:0}.pageControl-1XvHg0>div:nth-child(3):not(.pageButton-1GMGeJ):not(.inputWrapper-1YNMmM):after,.pageControl-1XvHg0>div:nth-child(5):not(.pageButton-1GMGeJ):not(.inputWrapper-1YNMmM):after{background-color:var(--accent);bottom:9px;content:"";height:2px;position:absolute;left:calc(50% - 5px);transition-duration:.2s;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);visibility:hidden;width:10px}.pageControl-1XvHg0>div:nth-child(3):not(.pageButton-1GMGeJ):not(.inputWrapper-1YNMmM):hover::after,.pageControl-1XvHg0>div:nth-child(5):not(.pageButton-1GMGeJ):not(.inputWrapper-1YNMmM):hover::after{left:calc(0px);visibility:visible;width:100%}.pageControl-1XvHg0>div:nth-child(3):not(.pageButton-1GMGeJ):not(.inputWrapper-1YNMmM) .gap-35QmZH,.pageControl-1XvHg0>div:nth-child(5):not(.pageButton-1GMGeJ):not(.inputWrapper-1YNMmM) .gap-35QmZH{cursor:text;transition:font-size .2s ease-in-out}.pageControl-1XvHg0>div:nth-child(3):not(.pageButton-1GMGeJ):not(.inputWrapper-1YNMmM):hover .gap-35QmZH,.pageControl-1XvHg0>div:nth-child(5):not(.pageButton-1GMGeJ):not(.inputWrapper-1YNMmM):hover .gap-35QmZH{font-size:0}.theme-light .searchResult-O9NDji{background-color:var(--card-2-bg);box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 1px 5px 0px rgba(0,0,0,.12)}.theme-dark .searchResult-O9NDji{background-color:var(--card-2-bg)}.theme-light .searchResultsWrap-5RVOkx{background-color:var(--card-8-bg);box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0,0,0,.12)}.theme-dark .searchResultsWrap-5RVOkx{background-color:var(--card-8-bg)}.theme-light .searchHeader-1r_ZSh{background-color:var(--card-2-bg);box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 1px 5px 0px rgba(0,0,0,.12)}.theme-dark .searchHeader-1r_ZSh{background-color:var(--card-2-bg)}.theme-light .channelName-3w2Y3c{background-color:var(--card-8-bg)}.theme-dark .channelName-3w2Y3c{background-color:var(--card-8-bg)}.container-2McqkF{animation:pixelcord-spawn-anim .18s ease-in-out;transform-origin:top}.theme-light .container-2McqkF{background-color:var(--card-4-bg);box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0,0,0,.12)}.theme-dark .container-2McqkF{background-color:var(--card-4-bg)}.resultsGroup-1BPR25 .header-3A13BX{font-weight:var(--section-weight);font-size:14px;color:var(--header-color)}.theme-light .resultsGroup-1BPR25 .header-3A13BX,.theme-light .resultsGroup-1BPR25 .plusIcon-2V7coV,.theme-light .resultsGroup-1BPR25 .searchClearHistory-2Be-92,.theme-light .resultsGroup-1BPR25 .searchLearnMore-7__o_n a{color:var(--header-color)}.theme-dark .resultsGroup-1BPR25 .header-3A13BX,.theme-dark .resultsGroup-1BPR25 .plusIcon-2V7coV,.theme-dark .resultsGroup-1BPR25 .searchClearHistory-2Be-92,.theme-dark .resultsGroup-1BPR25 .searchLearnMore-7__o_n a{color:var(--header-color)}.container-36u7Lw{position:sticky;bottom:0;z-index:2}.theme-light .container-36u7Lw{background-color:var(--card-8-bg)}.theme-dark .container-36u7Lw{background-color:var(--card-8-bg)}.totalResults-2On644 .spinnerWrapper-6lH0US{position:absolute;width:48px;height:48px;left:calc(50% - 48px * 0.5);top:calc(50vh - 48px * 0.5 - 7px);justify-content:center}.totalResults-2On644 .spinnerWrapper-6lH0US .inner-26JK4f{width:48px;height:48px}.platform-win .totalResults-2On644 .spinnerWrapper-6lH0US{top:calc(50vh - 48px * 0.5 - 7px)}.theme-light .queryContainer-ZunrLZ{background-color:var(--card-2-bg);box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 1px 5px 0px rgba(0,0,0,.12)}.theme-dark .queryContainer-ZunrLZ{background-color:var(--card-2-bg)}.theme-dark .option-2KkUJO:after{background:-webkit-gradient(linear, left top, right top, from(rgba(54, 57, 63, 0)), color-stop(80%, var(--card-4-bg)));background:linear-gradient(90deg, rgba(54, 57, 63, 0), var(--card-4-bg) 80%)}.theme-light .option-2KkUJO:after{background:-webkit-gradient(linear, left top, right top, from(rgba(54, 57, 63, 0)), color-stop(80%, var(--card-4-bg)));background:linear-gradient(90deg, rgba(54, 57, 63, 0), var(--card-4-bg) 80%)}.theme-light .option-2KkUJO.selected-rZcOL-{background-color:var(--card-2-bg);box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 1px 5px 0px rgba(0,0,0,.12)}.theme-dark .option-2KkUJO.selected-rZcOL-{background-color:var(--card-2-bg)}.searchHeaderTabList-3CZMQB.side-2ur1Qk::after{content:none}.drawerSizingWrapper-1txdWG{animation:pixelcord-spawn-anim .186s ease-in-out;transform-origin:bottom right}.stickerInspected-mwnU6w .inspectedIndicator-27zwNZ,.emojiItem-277VFM.emojiItemSelected-2Lg50V{background-color:var(--accent)}.theme-light .wrapper-22rqw6{background-color:var(--card-8-bg);box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0,0,0,.12)}.theme-dark .wrapper-22rqw6{background-color:var(--card-8-bg)}.inspector-DFKXwB{overflow:visible}.theme-light .inspector-DFKXwB{background-color:var(--card-6-bg);box-shadow:0px 3px 5px -1px rgba(0, 0, 0, 0.2),0px 6px 10px 0px rgba(0, 0, 0, 0.14),0px 1px 18px 0px rgba(0,0,0,.12)}.theme-dark .inspector-DFKXwB{background-color:var(--card-6-bg)}.theme-light .contentWrapper-3vHNP2,.theme-light .header-JHwfVI,.theme-light .header-uVCAlo,.theme-light .header-11eigE{background-color:var(--card-2-bg);box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 1px 5px 0px rgba(0,0,0,.12)}.theme-dark .contentWrapper-3vHNP2,.theme-dark .header-JHwfVI,.theme-dark .header-uVCAlo,.theme-dark .header-11eigE{background-color:var(--card-2-bg)}.theme-light .emojiPicker-6YCk8a,.theme-light .wrapper-1NNaWG{background-color:var(--card-2-bg)}.theme-dark .emojiPicker-6YCk8a,.theme-dark .wrapper-1NNaWG{background-color:var(--card-2-bg)}.theme-light .diversitySelectorOptions-3DhNYs{background-color:var(--card-4-bg);box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0,0,0,.12)}.theme-dark .diversitySelectorOptions-3DhNYs{background-color:var(--card-4-bg)}.layer-2aCOJ3 div[role=dialog]{animation:pixelcord-spawn-anim .2s ease-in-out;transform-origin:top right}.layer-2aCOJ3 div[role=dialog] .messagesPopoutWrap-3zryHW{animation:none}.messages-23can0,.messageContainer-3VTXBC{animation:pixelcord-spawn-anim .2s ease-in-out;transform-origin:top center}.theme-light .messages-23can0,.theme-light .messageContainer-3VTXBC{background-color:var(--card-4-bg);box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0,0,0,.12)}.theme-dark .messages-23can0,.theme-dark .messageContainer-3VTXBC{background-color:var(--card-4-bg)}.channelHeader-DFRX8q{padding:12px 9px 12px 32px;margin:0 -9px 0 -16px}.channelHeader-DFRX8q .collapseButton-39-IRc{left:3px;transition:transform .2s ease}.theme-light .channelHeader-DFRX8q,.theme-light .container-2ebMPP{background-color:var(--card-8-bg)}.theme-dark .channelHeader-DFRX8q,.theme-dark .container-2ebMPP{background-color:var(--card-8-bg)}.theme-light .tutorial-Nb3Zz5{background-color:var(--card-4-bg);box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0,0,0,.12)}.theme-dark .tutorial-Nb3Zz5{background-color:var(--card-4-bg)}.threadSidebar-1o3BTy,.chat-2ZfjoI.threadSidebarOpen-1LSXvU{border-radius:0}.chat-2ZfjoI.threadSidebarOpen-1LSXvU{resize:horizontal;min-width:400px;max-width:calc(70% - 400px)}.chat-2ZfjoI:not(.threadSidebarOpen-1LSXvU){width:unset !important;flex:1 1 auto}.threadSidebar-1o3BTy{width:unset;flex:1 1 auto}.threadSidebar-1o3BTy{overflow:visible}.threadSidebar-1o3BTy::before{content:"";height:calc(100% - 48px);width:8px;position:absolute;left:-8px;top:48px;z-index:1}.theme-light .threadSidebar-1o3BTy::before{background-color:var(--card-6-bg);box-shadow:0px 3px 5px -1px rgba(0, 0, 0, 0.2),0px 6px 10px 0px rgba(0, 0, 0, 0.14),0px 1px 18px 0px rgba(0,0,0,.12)}.theme-dark .threadSidebar-1o3BTy::before{background-color:var(--card-6-bg)}.threadSidebar-1o3BTy::after{content:"";height:48px;width:8px;position:absolute;left:-8px;top:0px;z-index:101}.theme-light .threadSidebar-1o3BTy::after{background-color:var(--card-6-bg)}.theme-dark .threadSidebar-1o3BTy::after{background-color:var(--card-6-bg)}.theme-light .container-3i3IzO{background-color:var(--card-4-bg);box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0,0,0,.12)}.theme-dark .container-3i3IzO{background-color:var(--card-4-bg)}.textAreaThreadCreation-1CbEub{min-height:44px}.channelTextAreaInner-1WnnRS{border-color:transparent}.channelTextArea-3O-WhA{background-color:transparent}.theme-light .container-18GwIk{background-color:var(--card-4-bg);box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0,0,0,.12)}.theme-dark .container-18GwIk{background-color:var(--card-4-bg)}.theme-light .modal-ZdazA8{background-color:var(--card-4-bg) !important}.theme-dark .modal-ZdazA8{background-color:var(--card-4-bg) !important}.header-3_zmOb{z-index:11}.theme-light .header-3_zmOb{background-color:var(--card-6-bg);box-shadow:0px 3px 5px -1px rgba(0, 0, 0, 0.2),0px 6px 10px 0px rgba(0, 0, 0, 0.14),0px 1px 18px 0px rgba(0,0,0,.12)}.theme-dark .header-3_zmOb{background-color:var(--card-6-bg)}.container-2rzKKA{animation:pixelcord-spawn-anim .2s ease-in-out;transform-origin:top right}.theme-light .container-2rzKKA{background-color:var(--card-8-bg);box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0,0,0,.12)}.theme-dark .container-2rzKKA{background-color:var(--card-8-bg)}.chatHeaderBar-2fUORh{margin:12px;padding:6px 24px;border-radius:24px}.theme-light .chatHeaderBar-2fUORh{background-color:var(--card-8-bg);box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0,0,0,.12)}.theme-dark .chatHeaderBar-2fUORh{background-color:var(--card-8-bg)}.threadSuggestionBar-3ExSyc{display:none}.replyBar-1oi75v{border-radius:17px}.theme-light .replyBar-1oi75v{background-color:var(--card-2-bg);box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 1px 5px 0px rgba(0,0,0,.12)}.theme-dark .replyBar-1oi75v{background-color:var(--card-2-bg)}.attachedBars-2BCP3l{background-color:transparent;padding-bottom:.25rem}.clipContainer-31nYlH{overflow:visible}.theme-light .popout-TdhJ6Z{background-color:var(--card-4-bg);box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0,0,0,.12)}.theme-dark .popout-TdhJ6Z{background-color:var(--card-4-bg)}.container-3O_wAf{background-color:var(--navdrawer-color)}.theme-light .calendarPicker-sDhzdi .react-datepicker__navigation.react-datepicker__navigation--next,.theme-dark .calendarPicker-sDhzdi .react-datepicker__navigation.react-datepicker__navigation--next,.theme-light .calendarPicker-sDhzdi .react-datepicker__navigation.react-datepicker__navigation--previous,.theme-dark .calendarPicker-sDhzdi .react-datepicker__navigation.react-datepicker__navigation--previous{border-color:transparent}.calendarPicker-sDhzdi .react-datepicker__day.react-datepicker__day--selected,.calendarPicker-sDhzdi .react-datepicker__current-month{font-weight:var(--section-weight);font-size:14px;color:var(--header-color)}.theme-light .datePicker-70cO23 .datePickerHint-17MnA8 .hint-3D5yHh,.theme-dark .datePicker-70cO23 .datePickerHint-17MnA8 .hint-3D5yHh{color:var(--text-muted)}.calendarPicker-sDhzdi .react-datepicker__month{border-radius:3px}.theme-light .calendarPicker-sDhzdi .react-datepicker__month{background-color:var(--card-4-bg);box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0,0,0,.12)}.theme-dark .calendarPicker-sDhzdi .react-datepicker__month{background-color:var(--card-4-bg)}.theme-light .stageSection-3mAD8V{background-color:var(--card-0-bg)}.theme-dark .stageSection-3mAD8V{background-color:var(--card-0-bg)}.theme-light .container-S9SaVf{background-color:var(--card-4-bg);box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0,0,0,.12)}.theme-dark .container-S9SaVf{background-color:var(--card-4-bg)}.theme-light .container-1ILvLB section{background-color:var(--card-8-bg);box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0,0,0,.12)}.theme-dark .container-1ILvLB section{background-color:var(--card-8-bg)}.theme-light .container-1ILvLB .header-2C89wJ{background-color:var(--card-2-bg);box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 1px 5px 0px rgba(0,0,0,.12)}.theme-dark .container-1ILvLB .header-2C89wJ{background-color:var(--card-2-bg)}.theme-light .debugButton-OTfjlB,.theme-dark .debugButton-OTfjlB{color:var(--accent)}.rtcConnectionStatusConnected-1c73OK,.rtcConnectionQualityFine-3zZrSa .pingForeground-1BRBTc,.circleIconButton-1QV--U,.colorStatusGreen-2HKYOW{color:var(--online)}.iconLive-nQxzyp{color:var(--online) !important}.colorStreamerMode-8uoRWd{background-color:var(--stream)}.speaking-3K28iH,.avatarSpeaking-33RRJU,.avatarSpeaking-2pCGrZ{-webkit-box-shadow:inset 0 0 0 2px var(--accent),inset 0 0 0 3px var(--background-secondary);box-shadow:inset 0 0 0 2px var(--accent),inset 0 0 0 3px var(--background-secondary)}.border-2BJQjd.speaking-3RWJBr{-webkit-box-shadow:inset 0 0 0 2px var(--accent),inset 0 0 0 3px var(--background-floating);box-shadow:inset 0 0 0 2px var(--accent),inset 0 0 0 3px var(--background-floating)}.border-2Vy6FN.speaking-7QZEkv{-webkit-box-shadow:inset 0 0 0 2px var(--accent),inset 0 0 0 3px #000;box-shadow:inset 0 0 0 2px var(--accent),inset 0 0 0 3px #000}.prioritySpeaking-30Bobo,.iconPriortySpeakerSpeaking-3VY2Fk,.userSettingsVoice-1_dzjw .sliderBar-2T41Pw.speaking-NGQNT9{background-color:var(--accent)}.added-mQcv9V{color:var(--online)}.added-mQcv9V::after{background-color:var(--online)}.progress-1DcfFh{color:var(--idle)}.progress-1DcfFh::after{background-color:var(--idle)}.fixed-cTX7Hp{color:var(--danger)}.fixed-cTX7Hp::after{background-color:var(--danger)}.scroller-2GkvCq{overflow:visible}.theme-light .scroller-2GkvCq{background-color:var(--card-4-bg);box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0,0,0,.12)}.theme-dark .scroller-2GkvCq{background-color:var(--card-4-bg)}.reactionSelected-1aMb2K{overflow:visible}.theme-light .reactionSelected-1aMb2K{background-color:var(--card-2-bg);box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 1px 5px 0px rgba(0,0,0,.12)}.theme-dark .reactionSelected-1aMb2K{background-color:var(--card-2-bg)}.reactionDefault-1Sjj1f,.reactionSelected-1aMb2K{-webkit-app-region:none}.tagFaded-1S1bJ-{user-select:none}.theme-light .container-KM8BU6,.theme-dark .container-KM8BU6,.theme-light .reactors-1VXca7,.theme-dark .reactors-1VXca7{background:none}.side-2ur1Qk>.item-3XjbnG[aria-controls=discord-nitro-tab]:not(.role-3pGE29)[style*="color: rgb(114, 137, 218);"],.side-2ur1Qk>.item-3XjbnG[aria-controls=guild-premium-tab]:not(.role-3pGE29)[style*="color: rgb(114, 137, 218);"]{color:var(--accent) !important}.side-2ur1Qk>.item-3XjbnG[aria-controls=discord-nitro-tab]:not(.role-3pGE29)[style*="color: rgb(255, 255, 255);"],.side-2ur1Qk>.item-3XjbnG[aria-controls=guild-premium-tab]:not(.role-3pGE29)[style*="color: rgb(255, 255, 255);"]{background-color:var(--accent-highlight) !important;color:var(--accent-text) !important}.sidebar-nqHbhN{width:calc(var(--settings-list-width) + 36px);max-width:calc(var(--settings-list-width) + 36px);position:absolute;left:0;padding:36px 6px 60px 20px}.theme-light .sidebar-nqHbhN{background-color:var(--card-8-bg)}.theme-dark .sidebar-nqHbhN{background-color:var(--card-8-bg)}.sidebarRegionScroller-FXiQOh{width:calc(var(--settings-list-width) + 36px);max-width:calc(var(--settings-list-width) + 36px);z-index:3003;left:0;display:block;position:absolute;height:calc(100% - var(--settings-header-height) + 24px);margin-top:calc(var(--settings-header-height) - 24px)}.theme-light .sidebarRegionScroller-FXiQOh{background-color:var(--card-8-bg)}.theme-dark .sidebarRegionScroller-FXiQOh{background-color:var(--card-8-bg)}.sidebarRegion-1VBisG{width:calc(var(--settings-list-width) + 36px);max-width:calc(var(--settings-list-width) + 36px)}.theme-light .sidebarRegion-1VBisG{background-color:var(--card-8-bg);box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0,0,0,.12)}.theme-dark .sidebarRegion-1VBisG{background-color:var(--card-8-bg)}.contentRegionScroller-2_GT_N,.titleContainer-3fPic2{background-color:transparent}.theme-light .contentRegion-3HkfJJ,.theme-light .header-6h98Y_{background-color:var(--card-0-bg)}.theme-dark .contentRegion-3HkfJJ,.theme-dark .header-6h98Y_{background-color:var(--card-0-bg)}.theme-light .detailsBlock-FoDTGA,.theme-light .expandedInfo-1W31i3{background-color:var(--card-4-bg);box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0,0,0,.12)}.theme-dark .detailsBlock-FoDTGA,.theme-dark .expandedInfo-1W31i3{background-color:var(--card-4-bg)}.codeRedemptionRedirect-3SBiCp{border-width:0}.theme-light .codeRedemptionRedirect-3SBiCp{background-color:var(--card-4-bg);box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0,0,0,.12)}.theme-dark .codeRedemptionRedirect-3SBiCp{background-color:var(--card-4-bg)}.paymentPane-ut5qKZ{border-radius:var(--button-radius)}.theme-light .paymentPane-ut5qKZ{background-color:var(--card-6-bg);box-shadow:0px 3px 5px -1px rgba(0, 0, 0, 0.2),0px 6px 10px 0px rgba(0, 0, 0, 0.14),0px 1px 18px 0px rgba(0,0,0,.12)}.theme-dark .paymentPane-ut5qKZ{background-color:var(--card-6-bg)}.paymentHistory-2Zf4ZE .verticalFit-21XL0v{overflow:visible}.theme-light .paginator-1eqD2g,.theme-dark .paginator-1eqD2g,.theme-light .payment-2bOh4k,.theme-dark .payment-2bOh4k{background-color:transparent}.h5-2RwDNl{font-weight:var(--section-weight);font-size:14px}.accountBtn-1YkMgV .accountBtnInner-3XK70s{transform:scale(1);transition:box-shadow .2s ease,background-color .2s ease-in-out,transform .2s ease-in-out}.theme-light .accountBtn-1YkMgV .accountBtnInner-3XK70s{background-color:var(--card-2-bg);box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 1px 5px 0px rgba(0,0,0,.12)}.theme-dark .accountBtn-1YkMgV .accountBtnInner-3XK70s{background-color:var(--card-2-bg)}.accountBtn-1YkMgV .accountBtnInner-3XK70s:hover{transform:scale(1.1)}.theme-light .accountBtn-1YkMgV .accountBtnInner-3XK70s:hover{background-color:var(--card-4-bg);box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0,0,0,.12)}.theme-dark .accountBtn-1YkMgV .accountBtnInner-3XK70s:hover{background-color:var(--card-4-bg)}.theme-light .accountList-305sx3{background-color:var(--card-6-bg);box-shadow:0px 3px 5px -1px rgba(0, 0, 0, 0.2),0px 6px 10px 0px rgba(0, 0, 0, 0.14),0px 1px 18px 0px rgba(0,0,0,.12)}.theme-dark .accountList-305sx3{background-color:var(--card-6-bg)}.theme-light .connection-107AGH{background-color:var(--card-4-bg);box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0,0,0,.12)}.theme-dark .connection-107AGH{background-color:var(--card-4-bg)}.theme-light .connectionHeader-2rV1ze{background-color:var(--card-2-bg);box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 1px 5px 0px rgba(0,0,0,.12)}.theme-dark .connectionHeader-2rV1ze{background-color:var(--card-2-bg)}.previewMessage-2uxBrA{background-color:transparent}.previewMessage-2uxBrA .cozy-VmLDNB .messageContent-2t3eCI{user-select:none}.theme-dark .tierHeaderUnlocked-1OpOLf,.tierHeaderUnlocked-1OpOLf{color:var(--header-color)}.theme-light .theme-dark .tierHeaderUnlocked-1OpOLf,.theme-light .tierHeaderUnlocked-1OpOLf{background-color:var(--card-4-bg);box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0,0,0,.12)}.theme-dark .theme-dark .tierHeaderUnlocked-1OpOLf,.theme-dark .tierHeaderUnlocked-1OpOLf{background-color:var(--card-4-bg)}.theme-dark .tierHeaderLocked-30MLlO,.tierHeaderLocked-30MLlO{color:var(--header-color)}.theme-light .theme-dark .tierHeaderLocked-30MLlO,.theme-light .tierHeaderLocked-30MLlO{background-color:var(--card-2-bg);box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 1px 5px 0px rgba(0,0,0,.12)}.theme-dark .theme-dark .tierHeaderLocked-30MLlO,.theme-dark .tierHeaderLocked-30MLlO{background-color:var(--card-2-bg)}.emojiRow-zIc7ZX .emojiAliasInput-1y-NBz .emojiInput-1aLNse,.emojiRow-zIc7ZX:focus-within .emojiAliasInput-1y-NBz .emojiInput-1aLNse,.emojiRow-zIc7ZX:hover .emojiAliasInput-1y-NBz .emojiInput-1aLNse{opacity:1}.emojiAliasPlaceholder-3H_iZA{opacity:0}.theme-light .tierBody-1d3UiS,.theme-light .tierBody-1d3UiS,.theme-light .upsellContainer-L9xv7w,.theme-light .checklistContainer-mFJZEJ,.theme-light .developerPortalCtaWrapper-2XNafh,.theme-light .previewContainer-1SS3uO,.theme-light .container-2w0lh0,.theme-light .featureCard-1RR4Tl,.theme-light .descriptionBox-1EKQKL{background-color:var(--card-4-bg);box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0,0,0,.12)}.theme-dark .tierBody-1d3UiS,.theme-dark .tierBody-1d3UiS,.theme-dark .upsellContainer-L9xv7w,.theme-dark .checklistContainer-mFJZEJ,.theme-dark .developerPortalCtaWrapper-2XNafh,.theme-dark .previewContainer-1SS3uO,.theme-dark .container-2w0lh0,.theme-dark .featureCard-1RR4Tl,.theme-dark .descriptionBox-1EKQKL{background-color:var(--card-4-bg)}.theme-light .guildSection-2Zyzy8,.theme-light .upsellFooter-ZYsio_,.theme-light .analyticsCard-2fnrVG,.theme-light .checklistHeader-1KWcEY,.theme-light .welcomeChannel-1rFrIO,.theme-light .enableContainer-6E-puu,.theme-light .header-2Y0-A-{background-color:var(--card-2-bg);box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 1px 5px 0px rgba(0,0,0,.12)}.theme-dark .guildSection-2Zyzy8,.theme-dark .upsellFooter-ZYsio_,.theme-dark .analyticsCard-2fnrVG,.theme-dark .checklistHeader-1KWcEY,.theme-dark .welcomeChannel-1rFrIO,.theme-dark .enableContainer-6E-puu,.theme-dark .header-2Y0-A-{background-color:var(--card-2-bg)}.enableContainer-6E-puu{z-index:1}.theme-light .container-2O1UgZ{background-color:var(--card-8-bg);box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0,0,0,.12)}.theme-dark .container-2O1UgZ{background-color:var(--card-8-bg)}.selectedBrand-1AtwYE.focused-qp-W9B,.selectedBrand-1AtwYE:hover{background:var(--accent-highlight)}.upsellContainer-3UlEOE .base-21yXnu{color:#fff}.descriptionIcon-36p1fN circle[fill*="hsl(0,"]{fill:transparent}.theme-light .scroller-3_YDR2{background-color:var(--card-0-bg)}.theme-dark .scroller-3_YDR2{background-color:var(--card-0-bg)}.radioBar-3w9XY-[style*="--radio-bar-accent-color:hsl(139, "]{--radio-bar-accent-color: var(--online) !important}.radioBar-3w9XY-[style*="--radio-bar-accent-color:hsl(37, "]{--radio-bar-accent-color: var(--idle) !important}.radioBar-3w9XY-[style*="--radio-bar-accent-color:hsl(359, "]{--radio-bar-accent-color: var(--danger) !important}.theme-light .container-3EtAkD{background-color:var(--card-4-bg);box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0,0,0,.12)}.theme-dark .container-3EtAkD{background-color:var(--card-4-bg)}.baseLayer-W6S8cY.animating-1rIrGV[aria-hidden=false]+.animating-1rIrGV[aria-label=USER_SETTINGS]{transform:scale(1) !important;animation:settings-circle-out .34s ease forwards}.baseLayer-W6S8cY.animating-1rIrGV[aria-hidden=true]+.animating-1rIrGV[aria-label=USER_SETTINGS]{transform:scale(1) !important;animation:settings-circle-in .34s ease forwards}.baseLayer-W6S8cY.animating-1rIrGV,.baseLayer-W6S8cY.stop-animations{transform:scale(1) !important}.baseLayer-W6S8cY.animating-1rIrGV:only-child,.baseLayer-W6S8cY.stop-animations:only-child{opacity:1 !important}.layers-OrUESM>.layer-86YKbF.animating-1rIrGV *,.layers-OrUESM>.layer-86YKbF.animating-1rIrGV{pointer-events:auto !important;will-change:unset}@keyframes settings-circle-in{from{clip-path:circle(0% at calc(var(--channels-width) - var(--settings-padding) + (30px)) calc(100% - 32px - var(--settings-padding)))}to{clip-path:circle(70.7% at 50% 50%)}}@keyframes settings-circle-out{from{clip-path:circle(70.7% at 50% 50%)}to{clip-path:circle(0% at calc(var(--channels-width) - var(--settings-padding) + (30px)) calc(100% - 32px - var(--settings-padding)))}}.sidebarRegionScroller-FXiQOh::before{content:"";width:100%;height:var(--settings-header-height);display:inline-block;z-index:3003;position:fixed;top:0;left:0;background-color:var(--accent);transition:150ms ease-in-out;box-shadow:none}.theme-light .sidebarRegionScroller-FXiQOh::before{box-shadow:0px 8px 10px -5px rgba(0, 0, 0, 0.2),0px 16px 24px 2px rgba(0, 0, 0, 0.14),0px 6px 30px 5px rgba(0,0,0,.12)}.sidebarRegionScroller-FXiQOh::after{content:"";background-color:var(--accent);display:inline-block;z-index:3003;position:fixed;top:0;left:0;width:100%}.preview-rua1rr .avatar-2e8lTP{z-index:0}.sidebar-nqHbhN .themed-2-lozF.selected-g-kMVV.item-3XjbnG{position:initial}.sidebar-nqHbhN .themed-2-lozF.selected-g-kMVV.item-3XjbnG[aria-controls]::after{content:attr(aria-controls)}.sidebar-nqHbhN .themed-2-lozF.selected-g-kMVV.item-3XjbnG[aria-label]::after{content:attr(aria-label)}.sidebar-nqHbhN .themed-2-lozF.selected-g-kMVV.item-3XjbnG::after{transform:scale(1);opacity:1;background:none;top:calc((var(--settings-header-height) - 8px) * 0.5);left:var(--settings-header-height);width:auto;height:auto;font-size:24px;font-family:"No Dash",var(--font-header);font-weight:var(--header-weight);font-kerning:normal;font-feature-settings:"kern";color:var(--accent-text);display:block;position:fixed;z-index:3003}.sidebar-nqHbhN .themed-2-lozF.item-3XjbnG[aria-controls=pc-updater-tab]~.item-3XjbnG:not([aria-controls=changelog-tab]):not([aria-controls="Hypesquad Online-tab"]):not([aria-controls=Experiments-tab]):not([aria-controls="Developer Options-tab"]):not([aria-controls=logout-tab])::after,.sidebar-nqHbhN .themed-2-lozF.item-3XjbnG[aria-controls^=gm-]::after{text-transform:capitalize}.contentRegion-3HkfJJ{height:100%;margin-top:calc(var(--settings-header-height) - 24px)}.platform-web .contentRegion-3HkfJJ{margin-top:var(--settings-header-height)}.contentContainer-3hXFtK{z-index:0}.noticeRegion-qjyUVg{bottom:var(--settings-header-height)}.side-2ur1Qk>.item-3XjbnG{margin-right:14px}.betaBadge-1VY8Cw[style^="background-color: hsl(235,"]{background-color:var(--accent) !important}.side-2ur1Qk .themed-2-lozF.selected-g-kMVV.item-3XjbnG,.side-2ur1Qk .themed-2-lozF.selected-g-kMVV.item-3XjbnG:hover,.topPill-3DJJNV .themed-2-lozF.selected-g-kMVV.item-3XjbnG,.topPill-3DJJNV .themed-2-lozF.selected-g-kMVV.item-3XjbnG:hover{background-color:var(--accent-selected-highlight);color:var(--accent)}.theme-dark .list-1uSVgu .tabBar-3N44FC .tab-1tp4jL.active-3WMEyE,.theme-light .list-1uSVgu .tabBar-3N44FC .tab-1tp4jL.active-3WMEyE,.theme-dark .header-145e10 .tabBar-1qdMr5 .tab-TRrPC8.active-1grPyy,.theme-light .header-145e10 .tabBar-1qdMr5 .tab-TRrPC8.active-1grPyy,.theme-dark .header-3_zmOb .tabBar-2WhZ9G .tab-2Jo-cu.active-346HgG,.theme-light .header-3_zmOb .tabBar-2WhZ9G .tab-2Jo-cu.active-346HgG{background-color:var(--accent-selected-highlight);color:var(--accent)}.premiumLabel-V52REm.selected-2m-n75,.serverBoostTabItem-2hFTIN.selected-2m-n75{color:var(--accent)}.background-3iPORX.selectedBackground-1qyzak{display:none}.item-3XjbnG .dot-e8DTw_{margin-left:6px}.toolsContainer-25FL6V{position:fixed;top:0;z-index:3005;padding-top:calc((var(--settings-header-height) - 24px) * 0.5);left:calc((var(--settings-header-height) - 48px) * 0.5)}.closeButton-PCZcma{border:none;opacity:.8}.closeButton-PCZcma svg{width:24px;height:24px}.closeButton-PCZcma path[d="M18.4 4L12 10.4L5.6 4L4 5.6L10.4 12L4 18.4L5.6 20L12 13.6L18.4 20L20 18.4L13.6 12L20 5.6L18.4 4Z"]{d:path("M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z");fill:var(--accent-text)}.theme-light .closeButton-PCZcma:hover,.theme-dark .closeButton-PCZcma:hover{background:none;opacity:1}.closeButton-PCZcma:hover+.keybind-13vtq8{opacity:1;transform:scale(1)}.closeButton-PCZcma+.keybind-13vtq8{opacity:0;transform:scale(0);transform-origin:center top;transition:opacity 100ms ease-in-out 323ms,transform 100ms ease-in-out 323ms;visibility:hidden;font-size:0}.closeButton-PCZcma+.keybind-13vtq8::after{content:"";visibility:visible;padding:0;overflow-wrap:break-word;text-rendering:optimizelegibility;user-select:none;vertical-align:baseline;pointer-events:none;width:0;height:0;border:5px solid transparent;border-top-color:var(--tooltip-bg);position:absolute;bottom:100%;left:50%;margin-left:-5px;-webkit-transform:rotate(180deg);transform:rotate(180deg)}.closeButton-PCZcma+.keybind-13vtq8::before{content:"Back";visibility:visible;position:relative;top:8px;background-color:var(--tooltip-bg);border-radius:4px;padding:8px;line-height:14px;font-weight:500;font-size:13px;color:var(--tooltip-text);transition:150ms ease-in-out;pointer-events:none}html[lang=zh-CN] .closeButton-PCZcma+.keybind-13vtq8::before{content:"后退"}html[lang=zh-TW] .closeButton-PCZcma+.keybind-13vtq8::before{content:"返回"}html[lang=cs] .closeButton-PCZcma+.keybind-13vtq8::before{content:"Zpět"}html[lang=da] .closeButton-PCZcma+.keybind-13vtq8::before{content:"Tilbage"}html[lang=nl] .closeButton-PCZcma+.keybind-13vtq8::before{content:"Terug"}html[lang=fr] .closeButton-PCZcma+.keybind-13vtq8::before{content:"Retour"}html[lang=de] .closeButton-PCZcma+.keybind-13vtq8::before{content:"Zurück"}html[lang=el] .closeButton-PCZcma+.keybind-13vtq8::before{content:"Πίσω"}html[lang=hu] .closeButton-PCZcma+.keybind-13vtq8::before{content:"Vissza"}html[lang=it] .closeButton-PCZcma+.keybind-13vtq8::before{content:"Indietro"}html[lang=ja] .closeButton-PCZcma+.keybind-13vtq8::before{content:"戻る"}html[lang=ko] .closeButton-PCZcma+.keybind-13vtq8::before{content:"뒤로 가기"}html[lang=pl] .closeButton-PCZcma+.keybind-13vtq8::before{content:"Wstecz"}html[lang=pt-PT] .closeButton-PCZcma+.keybind-13vtq8::before{content:"Back"}html[lang=pt-BR] .closeButton-PCZcma+.keybind-13vtq8::before{content:"Voltar"}html[lang=ru] .closeButton-PCZcma+.keybind-13vtq8::before{content:"Назад"}html[lang=sk] .closeButton-PCZcma+.keybind-13vtq8::before{content:"Back"}html[lang=es-ES] .closeButton-PCZcma+.keybind-13vtq8::before{content:"Atrás"}html[lang=sv-SE] .closeButton-PCZcma+.keybind-13vtq8::before{content:"Tillbaka"}html[lang=tr] .closeButton-PCZcma+.keybind-13vtq8::before{content:"Geri"}html[lang=bg] .closeButton-PCZcma+.keybind-13vtq8::before{content:"Назад"}html[lang=uk] .closeButton-PCZcma+.keybind-13vtq8::before{content:"Назад"}html[lang=fi] .closeButton-PCZcma+.keybind-13vtq8::before{content:"Takaisin"}html[lang=no] .closeButton-PCZcma+.keybind-13vtq8::before{content:"Tilbake"}html[lang=hr] .closeButton-PCZcma+.keybind-13vtq8::before{content:"Natrag"}html[lang=ro] .closeButton-PCZcma+.keybind-13vtq8::before{content:"Înapoi"}html[lang=lt] .closeButton-PCZcma+.keybind-13vtq8::before{content:"Atgal"}html[lang=th] .closeButton-PCZcma+.keybind-13vtq8::before{content:"ย้อนกลับ"}html[lang=vi] .closeButton-PCZcma+.keybind-13vtq8::before{content:"Trở lại"}html[lang=hi] .closeButton-PCZcma+.keybind-13vtq8::before{content:"वापस जाएं"}.theme-light .background-3d_SjE{box-shadow:0px 3px 5px -1px rgba(0, 0, 0, 0.2),0px 6px 10px 0px rgba(0, 0, 0, 0.14),0px 1px 18px 0px rgba(0,0,0,.12)}.theme-dark .background-3d_SjE{background-color:var(--card-4-bg)}.theme-dark .fieldList-in8WkP{background-color:var(--card-4-bg)}.theme-light .avatar-3mTjvZ{border-color:var(--card-6-bg);background-color:var(--card-6-bg)}.theme-dark .avatar-3mTjvZ{border-color:var(--card-6-bg);background-color:var(--card-6-bg)}.descriptionIcon-36p1fN path[fill*="hsl(139, "]{fill:var(--online)}.descriptionIcon-36p1fN path[fill*="hsl(359, "]{fill:var(--danger)}.theme-light .settingCard-xZSDjS,.theme-light .cardPrimary-3qRT__,.theme-light .cardPrimaryEditable-2mz_3i,.theme-light .accountProfileCard-lbN7n-{background-color:var(--card-6-bg);box-shadow:0px 3px 5px -1px rgba(0, 0, 0, 0.2),0px 6px 10px 0px rgba(0, 0, 0, 0.14),0px 1px 18px 0px rgba(0,0,0,.12)}.theme-dark .settingCard-xZSDjS,.theme-dark .cardPrimary-3qRT__,.theme-dark .cardPrimaryEditable-2mz_3i,.theme-dark .accountProfileCard-lbN7n-{background-color:var(--card-6-bg)}.theme-light .cardPrimaryOutline-1ofwVz,.theme-light .premiumSubscriptionAccountCredit-1UInYJ,.theme-light .guilds-35jvvn .cardWrapper-CyvwQv{background-color:var(--card-4-bg);box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0,0,0,.12)}.theme-dark .cardPrimaryOutline-1ofwVz,.theme-dark .premiumSubscriptionAccountCredit-1UInYJ,.theme-dark .guilds-35jvvn .cardWrapper-CyvwQv{background-color:var(--card-4-bg)}.cardPrimaryOutline-1ofwVz{border-color:transparent}.notches-2w7UZJ.gray-3wP137{-webkit-mask:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='20' fill='hsl(220, 7.7%25, 22.9%25)'%3E%3Cpath fill-rule='evenodd' d='M0 0h8v20H0V0zm4 2a2 2 0 00-2 2v12a2 2 0 104 0V4a2 2 0 00-2-2z'/%3E%3C/svg%3E");mask-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='20' fill='hsl(220, 7.7%25, 22.9%25)'%3E%3Cpath fill-rule='evenodd' d='M0 0h8v20H0V0zm4 2a2 2 0 00-2 2v12a2 2 0 104 0V4a2 2 0 00-2-2z'/%3E%3C/svg%3E")}.theme-light .notches-2w7UZJ.gray-3wP137{background-image:none;background-color:var(--card-0-bg)}.theme-dark .notches-2w7UZJ.gray-3wP137{background-image:none;background-color:var(--card-0-bg)}.theme-light .userSettingsVoice-1_dzjw .previewOverlay-2reuWf{border-color:transparent}.theme-dark .userSettingsVoice-1_dzjw .previewOverlay-2reuWf{border-color:transparent}.theme-light .userSettingsVoice-1_dzjw .previewOverlay-2reuWf{background-color:var(--card-4-bg);box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0,0,0,.12)}.theme-dark .userSettingsVoice-1_dzjw .previewOverlay-2reuWf{background-color:var(--card-4-bg)}.userSettingsVoice-1_dzjw .previewContainer-37c2Si{overflow:visible}.defaultValue-19SZ-q .markValue-2U_-UG{color:var(--accent)}.permissionCheckmark-2XFmCt{-webkit-mask:url(https://canary.discord.com/assets/718074e12775def7df7e2a01d6bf2bf8.svg) no-repeat;background:var(--online)}.featureImage-91H2fC,.featureTitle-3N9Stg,.hero-1aNo0v{-webkit-user-drag:none}.overlayToggleIconOff-3hGOmN .fill-MYciTJ{fill:var(--danger)}.overlayToggleIconOff-3hGOmN .fill-MYciTJ+rect{fill:var(--danger)}.flowerStar-2tNFCR path{fill:var(--accent);opacity:.5}.flowerStar-2tNFCR path+.childContainer-U_a6Yh path{fill:var(--accent-text)}.trendingArrow-1JMCSr path[fill^="hsl(139,"]{fill:var(--online)}.trendingArrow-1JMCSr path[fill^="hsl(359,"]{fill:var(--danger)}.trendingArrow-1JMCSr path[fill^="hsl(38,"]{fill:var(--idle)}.theme-light .box-J4N4jE{background-color:var(--card-4-bg);box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0,0,0,.12)}.theme-dark .box-J4N4jE{background-color:var(--card-4-bg)}.deny-1GO6vI{color:var(--danger)}.deny-1GO6vI.selected-3jieYB{background-color:var(--danger)}.allow-1h61-Z{color:var(--online)}.allow-1h61-Z.selected-3jieYB{background-color:var(--online)}.item-4m-12I{cursor:pointer}.theme-light .addGamePopout-3yePJc{background-color:var(--card-4-bg);box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0,0,0,.12)}.theme-dark .addGamePopout-3yePJc{background-color:var(--card-4-bg)}.selectedBackground-1qyzak{display:none}.premiumLabel-V52REm>svg{display:none}a{-webkit-user-drag:none;user-drag:none}.timestamp-p1Df1m{user-select:none}.backdrop-2ByYRN,.backdropWithLayer-3_uhz4{transition:opacity .1s ease-in-out}.backdrop-2ByYRN[style*="opacity: 0.85; background: hsl(0,"],.backdropWithLayer-3_uhz4[style*="opacity: 0.85; background: hsl(0,"]{background:hsla(0, calc(var(--saturation-factor, 1) * 0%), 0%, 0.85) !important;opacity:1 !important}.item-3XjbnG{overflow:hidden}.item-3XjbnG::after{transition:transform .3s cubic-bezier(0, 0, 0.2, 1),width .3s cubic-bezier(0, 0, 0.2, 1),height .3s cubic-bezier(0, 0, 0.2, 1),opacity .6s cubic-bezier(0, 0, 0.2, 1);content:"";opacity:0;pointer-events:none;position:absolute;width:100%;height:100%;top:calc(0px + var(--clickY));left:calc(0px + var(--clickX));transform:scale(5);background:radial-gradient(circle at center, var(--ripple-default) 24%, transparent 25%, transparent 100%)}.item-3XjbnG:not(:active)::after{transition:0s;opacity:.3;transform:scale(0)}.channel-1Shao0{overflow:hidden}.channel-1Shao0::after{transition:transform .3s cubic-bezier(0, 0, 0.2, 1),width .3s cubic-bezier(0, 0, 0.2, 1),height .3s cubic-bezier(0, 0, 0.2, 1),opacity .6s cubic-bezier(0, 0, 0.2, 1);content:"";opacity:0;pointer-events:none;position:absolute;width:100%;height:100%;top:calc(0px + var(--clickY));left:calc(0px + var(--clickX));transform:scale(5);background:radial-gradient(circle at center, var(--ripple-default) 24%, transparent 25%, transparent 100%)}.channel-1Shao0:not(:active)::after{transition:0s;opacity:.3;transform:scale(0)}.content-1gYQeQ{overflow:hidden}.content-1gYQeQ::after{transition:transform .3s cubic-bezier(0, 0, 0.2, 1),width .3s cubic-bezier(0, 0, 0.2, 1),height .3s cubic-bezier(0, 0, 0.2, 1),opacity .6s cubic-bezier(0, 0, 0.2, 1);content:"";opacity:0;pointer-events:none;position:absolute;width:100%;height:100%;top:calc(0px + var(--clickY));left:calc(0px + var(--clickX));transform:scale(5);background:radial-gradient(circle at center, var(--ripple-default) 24%, transparent 25%, transparent 100%)}.content-1gYQeQ:not(:active)::after{transition:0s;opacity:.3;transform:scale(0)}.container-1oeRFJ{overflow:hidden}.container-1oeRFJ::after{transition:transform .3s cubic-bezier(0, 0, 0.2, 1),width .3s cubic-bezier(0, 0, 0.2, 1),height .3s cubic-bezier(0, 0, 0.2, 1),opacity .6s cubic-bezier(0, 0, 0.2, 1);content:"";opacity:0;pointer-events:none;position:absolute;width:100%;height:100%;top:calc(0px + var(--clickY));left:calc(0px + var(--clickX));transform:scale(5);background:radial-gradient(circle at center, var(--ripple-default) 24%, transparent 25%, transparent 100%)}.container-1oeRFJ:not(:active)::after{transition:0s;opacity:.3;transform:scale(0)}.listRow-2nO1T6::after{transition:background-size .3s cubic-bezier(0, 0, 0.2, 1),opacity .6s cubic-bezier(0, 0, 0.2, 1);opacity:0;background-size:500%;background-image:radial-gradient(circle at calc(var(--clickX) + 50%) calc(var(--clickY) + 50%), var(--ripple-default) 24%, transparent 25%, transparent 100%);background-repeat:no-repeat;background-position:50% 50%;background-attachment:local;background-clip:padding-box;object-fit:contain;content:"";pointer-events:none;position:absolute;width:100%;height:48px;margin-top:0px;margin-left:0px}.listRow-2nO1T6:not(:active)::after{transition:0s;opacity:.3;background-size:0%}.result-u66Ywh[aria-selected=true]::after{transition:background-size .3s cubic-bezier(0, 0, 0.2, 1),opacity .6s cubic-bezier(0, 0, 0.2, 1);opacity:0;background-size:500%;background-image:radial-gradient(circle at calc(var(--clickX) + 50%) calc(var(--clickY) + 50%), var(--ripple-default) 24%, transparent 25%, transparent 100%);background-repeat:no-repeat;background-position:50% 50%;background-attachment:local;background-clip:padding-box;object-fit:contain;content:"";pointer-events:none;position:absolute;width:100%;height:100%;top:0px;left:0px}.result-u66Ywh[aria-selected=true]:not(:active)::after{transition:0s;opacity:.3;background-size:0%}.wrapper-3kah-n.selected-1Drb7Z .childWrapper-1j_1ub,.wrapper-3kah-n:hover .childWrapper-1j_1ub,.notice-12Koq-{background-color:var(--accent);color:var(--accent-text)}.foreground-2JnqVD{stroke:var(--accent)}.colorBrand-3cPPsm,.colorBrand-21Le_q,.operations-3q3u6E>a{color:var(--accent)}.avatarUploaderInner-yEhTv5,.theme-dark .activeButton-LRWFC_,.theme-dark .activeButton-LRWFC_:hover,.theme-light .activeButton-LRWFC_,.theme-light .activeButton-LRWFC_:hover,.categoryItem-1QIroW.selectedCategoryItem-FHKU_o .itemInner-gPkiWb,.navButtonActive-1EqC5l{background-color:var(--accent)}.categoryItem-1QIroW.selectedCategoryItem-FHKU_o .itemInner-gPkiWb{background-color:var(--accent-selected-highlight)}.mention-3XBnnZ{opacity:1}.connectedAccount-36nQx7{border-color:transparent}.theme-light .connectedAccount-36nQx7{background-color:var(--card-2-bg);box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 1px 5px 0px rgba(0,0,0,.12)}.theme-dark .connectedAccount-36nQx7{background-color:var(--card-2-bg)}.folder-1hbNCn,.folderIconWrapper-1_bOZe svg{color:var(--accent) !important}.progressBar-1T6LYX.small-1bZsRQ.animating-2CraY5{background-color:var(--accent) !important}.lookLink-9FtZy-.colorBrand-3pXr91{color:var(--accent)}.container-1oeRFJ{position:relative}.theme-dark .categoryFadeBlurple-1HuV1x,.theme-light .categoryFadeBlurple-1HuV1x{background-color:var(--accent);opacity:.8}.theme-dark .categoryFadeBlurple-1HuV1x:hover,.theme-light .categoryFadeBlurple-1HuV1x:hover{background-color:var(--accent);opacity:.95}.theme-light .focused-q9B2e4:after,.theme-light .result-3OpoO7:hover:after{-webkit-box-shadow:inset 0 0 0 2px var(--accent),inset 0 0 0 3px #dcddde;box-shadow:inset 0 0 0 2px var(--accent),inset 0 0 0 3px #dcddde}.subtitle-3PyFgf,.name-3Vmqxm{font-weight:400}.modeMuted-2T4MDZ .subtitle-3PyFgf,.modeMuted-2T4MDZ .name-3Vmqxm{color:var(--interactive-muted)}.modeUnread-3Cxepe .subtitle-3PyFgf,.modeUnread-3Cxepe .name-3Vmqxm{color:var(--interactive-muted)}.wrapper-NhbLHG.modeSelected-3DmyhH .channelName-3KPsGw,.wrapper-NhbLHG.modeSelected-3DmyhH .subtitle-3PyFgf,.selected-1-Z6gm.container-1oeRFJ .name-3Vmqxm{font-weight:var(--header-weight)}.wrapper-NhbLHG.modeSelected-3DmyhH .channelName-3KPsGw,.wrapper-NhbLHG.modeSelected-3DmyhH .subtitle-3PyFgf{color:var(--accent)}.baseAvatar-3Nvk7n,.tierTitle-y7BLPl,.tierRequirements-dGesMA,.tierUnlocked-25K6Kv,.textBadge-1fdDPJ{user-select:none}.betaTag-3mHD-Y[style*="background-color: hsl(227,"]{background-color:var(--accent) !important}.valueIcon-16gHtO{margin-right:6px}.info-1sUqUG:last-child{position:relative}.info-1sUqUG:last-child::after{content:"Pixelcord v3.5.2";font-size:12px;line-height:16px;color:var(--text-muted);-webkit-box-sizing:border-box;box-sizing:border-box;display:inline-block;width:calc(100% - 20px);position:absolute;bottom:-44px;left:10px}.info-1sUqUG:last-child::before{content:"";position:absolute;width:calc(100% - 20px);margin:8px 10px;height:1px;-webkit-box-sizing:border-box;box-sizing:border-box;background-color:var(--background-modifier-accent);bottom:-19px;left:0}.side-2ur1Qk::after{content:"";width:100%;height:24px}.isUnread-3Lojb- .content-3spvdd{color:var(--danger)}.ownerIcon-255uKo{color:var(--idle)}.numberBadge-37OJ3S[style*="background-color: hsl(359"],.status-1ZXjSF{color:#fff !important;background-color:var(--danger) !important}.statusOffline-2R-ArP{background-color:var(--offline)}::spelling-error{text-decoration:wavy var(--danger)}.iconBadge-3qSJIw{background-color:var(--offline)}.iconBadge-3qSJIw.participating-1NvRVd{background-color:var(--online)}.updateIconForeground-2V_zo4{fill:var(--online)}.circleIconButton-1QV--U.selected-1JjBPm,.statusOnline-Iw3r2o{background-color:var(--online)}.base-3IDx3L[style*="background-color: hsl(359, "]{background-color:var(--danger) !important}.roleFlare-TnQbP8[style*="background-color: hsl(139, "]{background-color:var(--online) !important}.theme-light .bannerVisible-Vkyg1I .header-3OsQeK{color:#fff}.bsi-clientStatuses svg path[fill*="hsl(139, "],.bsi-statusIcon path[fill*="hsl(139, "],.status-12NUUC rect[fill*="hsl(139, "],.wrapper-1VLyxH rect[fill*="hsl(139, "]{stroke:var(--online);fill:var(--online)}.bsi-clientStatuses svg path[fill*="hsl(38, "],.bsi-statusIcon path[fill*="hsl(38, "],.status-12NUUC rect[fill*="hsl(38, "],.wrapper-1VLyxH rect[fill*="hsl(38, "]{stroke:var(--idle);fill:var(--idle)}.bsi-clientStatuses svg path[fill*="hsl(359, "],.bsi-statusIcon path[fill*="hsl(359, "],.status-12NUUC rect[fill*="hsl(359, "],.wrapper-1VLyxH rect[fill*="hsl(359, "]{stroke:var(--danger);fill:var(--danger)}.bsi-clientStatuses svg path[fill*="hsl(262, "],.bsi-statusIcon path[fill*="hsl(262, "],.status-12NUUC rect[fill*="hsl(262, "],.wrapper-1VLyxH rect[fill*="hsl(262, "]{stroke:var(--stream);fill:var(--stream)}.bsi-clientStatuses svg path[fill*="hsl(214, "],.bsi-statusIcon path[fill*="hsl(214, "],.status-12NUUC rect[fill*="hsl(214, "],.wrapper-1VLyxH rect[fill*="hsl(214, "]{stroke:var(--offline);fill:var(--offline)}.status-2DiCMd[style*="background-color: hsl(139, "]{background-color:var(--online) !important}.status-2DiCMd[style*="background-color: hsl(38, "]{background-color:var(--idle) !important}.status-2DiCMd[style*="background-color: hsl(359, "]{background-color:var(--danger) !important}.status-2DiCMd[style*="background-color: hsl(214, "]{background-color:var(--offline) !important}.doesNot-36YbF_,.iconServer-GeSR0b,.strikethrough-2G7pYT{color:var(--danger)}.theme-light .dots-1BwzZQ:not(.themed-3T-OPr){color:#fff}.checklistIcon-6Kez2J path[fill^="hsl(359, "]{fill:var(--danger)}.theme-light .popoutContainer-2wbmiM,.theme-light .emojiSection-3QtaWO{background-color:var(--card-8-bg);box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0,0,0,.12)}.theme-dark .popoutContainer-2wbmiM,.theme-dark .emojiSection-3QtaWO{background-color:var(--card-8-bg)}.theme-light .uploadModal-2ie9O_,.theme-light .root-g14mjS{background-color:var(--card-2-bg);box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 1px 5px 0px rgba(0,0,0,.12)}.theme-dark .uploadModal-2ie9O_,.theme-dark .root-g14mjS{background-color:var(--card-2-bg)}.theme-light .uploadModal-2ie9O_ .footer-VCsJQY.hasSpoilers-33hwf_,.theme-light .footer-31IekZ{background-color:var(--card-8-bg);box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0,0,0,.12)}.theme-dark .uploadModal-2ie9O_ .footer-VCsJQY.hasSpoilers-33hwf_,.theme-dark .footer-31IekZ{background-color:var(--card-8-bg)}.theme-light .root-g14mjS,.theme-light .quickswitcher-pKcM9U{background-color:var(--card-8-bg);box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0,0,0,.12)}.theme-dark .root-g14mjS,.theme-dark .quickswitcher-pKcM9U{background-color:var(--card-8-bg)}.theme-light .selectorButton-3sW6Qm,.theme-light .card-1SdQ2-{background-color:var(--card-2-bg);box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 1px 5px 0px rgba(0,0,0,.12)}.theme-dark .selectorButton-3sW6Qm,.theme-dark .card-1SdQ2-{background-color:var(--card-2-bg)}.theme-light .selectorButtonSelected-3Z0WNU,.theme-dark .selectorButtonSelected-3Z0WNU{background-color:var(--accent);color:var(--accent-text)}.scroller-2qwVWY{background-color:transparent}.uploadModalIn-2w48Zf .uploadDropModal-13Kd20.error-3lNz4C{background-color:var(--danger)}.emojiButtonContainer-1cdx-p{z-index:1}.emojiButtonContainer-1cdx-p .button-38aScr{overflow:visible}.modal-3Crloo{animation:pixelcord-spawn-anim .2s ease-in-out}.menu-1QACrS{animation:pixelcord-spawn-anim .2s ease-in-out;transform-origin:center}.menu-1QACrS#message-actions{transform-origin:top right}.menu-1QACrS#channel-attach{transform-origin:bottom left}.menu-1QACrS#friend-row{transform-origin:center left}.menu-1QACrS#guild-settings-role-context,.menu-1QACrS#user-profile-actions{transform-origin:top left}.menu-1QACrS#guild-header-popout{transform-origin:top center}.layer-2aCOJ3 .popoutWrapper-3ks_kl[role=dialog]{transform-origin:bottom left}.layer-2aCOJ3 .userPopout-2j1gM4[role=dialog]{transform-origin:center}.layer-2aCOJ3 .container-2O1UgZ[role=dialog]{transform-origin:top center}.uploadModal-2ie9O_ .footer-VCsJQY.hasSpoilers-33hwf_{overflow-y:hidden}.downloadLink-1OAglv{width:128px}.layerContainer-2v_Sit .layer-2aCOJ3 .layer-2aCOJ3{z-index:1003}.layerContainer-2v_Sit .layer-2aCOJ3 .layer-2aCOJ3 .layer-2aCOJ3{z-index:1004}.layerContainer-2v_Sit .layer-2aCOJ3 .layer-2aCOJ3 .layer-2aCOJ3 .layer-2aCOJ3{z-index:1005}.layerContainer-2v_Sit .layer-2aCOJ3 .layer-2aCOJ3 .layer-2aCOJ3 .layer-2aCOJ3 .layer-2aCOJ3{z-index:1006}.layerContainer-2v_Sit .layer-2aCOJ3 .layer-2aCOJ3 .layer-2aCOJ3 .layer-2aCOJ3 .layer-2aCOJ3 .layer-2aCOJ3{z-index:1007}.layerContainer-2v_Sit .layer-2aCOJ3 .layer-2aCOJ3 .layer-2aCOJ3 .layer-2aCOJ3 .layer-2aCOJ3 .layer-2aCOJ3 .layer-2aCOJ3{z-index:1008}.layerContainer-2v_Sit .layer-2aCOJ3 .layer-2aCOJ3 .layer-2aCOJ3 .layer-2aCOJ3 .layer-2aCOJ3 .layer-2aCOJ3 .layer-2aCOJ3 .layer-2aCOJ3{z-index:1009}.layerContainer-2v_Sit .layer-2aCOJ3 .layer-2aCOJ3 .layer-2aCOJ3 .layer-2aCOJ3 .layer-2aCOJ3 .layer-2aCOJ3 .layer-2aCOJ3 .layer-2aCOJ3 .layer-2aCOJ3{z-index:1010}.messagesErrorBar-1IQ1rH{background-color:var(--danger);border-radius:var(--snackbar-radius);height:var(--snackbar-height)}.theme-light .table-17_dGF{background-color:var(--card-4-bg);box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0,0,0,.12)}.theme-dark .table-17_dGF{background-color:var(--card-4-bg)}.theme-dark .theme-light .root-g14mjS .base-21yXnu{color:#fff}.theme-dark .theme-light .root-g14mjS .colorStandard-21JIj7{color:#dcddde}.theme-dark .theme-light .root-g14mjS .colorHeaderSecondary-g5teka{color:#b9bbbe}.theme-dark .theme-light .root-g14mjS .close-1mLglB{color:#dcddde}.theme-dark .theme-light .root-g14mjS .close-1mLglB::hover{color:#b9bbbe}.theme-dark .theme-light .container-x8Y1ix .arrow-2yY1Tm{box-sizing:border-box;-webkit-mask-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M0 0h24v24H0V0z' fill='none'/%3E%3Cpath d='M10.02 6L8.61 7.41 13.19 12l-4.58 4.59L10.02 18l6-6-6-6z'/%3E%3C/svg%3E");-webkit-mask-size:38px 38px;width:38px;height:38px;padding-left:38px;background-color:#dcddde}.theme-dark .theme-light .container-x8Y1ix::hover .arrow-2yY1Tm{background-color:red}.layerContainer-2v_Sit .layer-2aCOJ3{transition:top 100ms ease-in-out,bottom 100ms ease-in-out,left 100ms ease-in-out,right 100ms ease-in-out}.popoutContainer-2wbmiM{transition:width 150ms ease-in-out,height 150ms ease-in-out}.dotMembers-71yF9W{background-color:var(--offline)}.dotOnline-r4Z_bf{background-color:var(--online)}.theme-light .message-G6O-Wv{background-color:var(--card-2-bg);box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 1px 5px 0px rgba(0,0,0,.12)}.theme-dark .message-G6O-Wv{background-color:var(--card-2-bg)}.inviteRow-3vmB7i{transition:background-color 150ms ease-in-out,box-shadow 150ms ease-in-out}.theme-light .inviteRow-3vmB7i{background-color:var(--card-8-bg);box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0,0,0,.12)}.theme-dark .inviteRow-3vmB7i{background-color:var(--card-8-bg)}.theme-light .inviteRow-3vmB7i:hover{background-color:var(--card-4-bg);box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0,0,0,.12)}.theme-dark .inviteRow-3vmB7i:hover{background-color:var(--card-4-bg)}.theme-light .inviteRow-3vmB7i:not(:hover){box-shadow:none;background-color:transparent}.theme-light .contentWarningPopout-WKdbDG{background-color:var(--card-6-bg);box-shadow:0px 3px 5px -1px rgba(0, 0, 0, 0.2),0px 6px 10px 0px rgba(0, 0, 0, 0.14),0px 1px 18px 0px rgba(0,0,0,.12)}.theme-dark .contentWarningPopout-WKdbDG{background-color:var(--card-6-bg)}.separator-1So4YB{border-color:var(--separator)}.wrapper-1ZcZW-{color:var(--accent);background-color:transparent}.interactive:hover{background-color:var(--accent);color:var(--accent-text)}.theme-light .path-lhsLSV,.theme-dark .path-lhsLSV{stroke:var(--accent)}.pictureInPictureVideo-2iKsGg{width:var(--pip-width);height:calc(var(--pip-width) * 0.5625)}.theme-light .elevationHigh-3KUiqj{border-radius:var(--pip-radius)}.theme-light .theme-light .elevationHigh-3KUiqj{box-shadow:0px 11px 15px -7px rgba(0, 0, 0, 0.2),0px 24px 38px 3px rgba(0, 0, 0, 0.14),0px 9px 46px 8px rgba(0,0,0,.12)}.pictureInPictureWindow-3ms5Zy{overflow:visible}.members-3WRCEx,.members-3WRCEx>div{border-radius:0}.privateChannels-oVe7HL{margin:calc(-1 * var(--card-padding));padding:var(--card-padding)}.container-ZMc96U.themed-Hp1KC_,.container-ZMc96U.transparent-1lUmft{-webkit-app-region:drag}.topPill-3DJJNV .item-3XjbnG,.container-ZMc96U.transparent-1lUmft .button-38aScr,.title-17SveM,.title-17SveM,.toolbar-3_r2xA{-webkit-app-region:none}.theme-light .wrapper-2SplAX{background-color:var(--card-6-bg);box-shadow:0px 3px 5px -1px rgba(0, 0, 0, 0.2),0px 6px 10px 0px rgba(0, 0, 0, 0.14),0px 1px 18px 0px rgba(0,0,0,.12)}.theme-dark .wrapper-2SplAX{background-color:var(--card-6-bg)}.theme-light .autocomplete-3NRXG8{background-color:var(--card-8-bg);box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0,0,0,.12)}.theme-dark .autocomplete-3NRXG8{background-color:var(--card-8-bg)}.base-2v-uc0{transition:box-shadow .2s ease,background-color .2s ease-in-out}.theme-light .selected-3H3-RC,.theme-dark .selected-3H3-RC{background-color:var(--accent-selected-highlight)}.theme-light .selected-3H3-RC .colorInteractiveActive-30E9n8,.theme-light .selected-3H3-RC .colorInteractiveNormal-36ZhyZ,.theme-light .selected-3H3-RC .icon-nmEpWl,.theme-dark .selected-3H3-RC .colorInteractiveActive-30E9n8,.theme-dark .selected-3H3-RC .colorInteractiveNormal-36ZhyZ,.theme-dark .selected-3H3-RC .icon-nmEpWl{color:var(--accent)}.theme-light .iconBadge-1D5-9X{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0,0,0,.12)}.members-3WRCEx,.members-3WRCEx>div{background-color:var(--navdrawer-color)}.theme-dark .form-3gdLxP:before,.theme-light .form-3gdLxP:before{background:-webkit-gradient(linear, left top, left bottom, from(transparent), to(var(--card-0-bg)));background:linear-gradient(180deg, transparent 0, var(--card-0-bg))}.auto-2K3UW5::-webkit-scrollbar-track{background-color:transparent}.theme-light .auto-2K3UW5::-webkit-scrollbar-thumb{background-color:#dfdfdf}.theme-dark .auto-2K3UW5::-webkit-scrollbar-thumb{background-color:var(--card-24-bg)}.wrapper-1gVUIN,.gradientTop-1UBZHm,.gradientBottom-uB_-4E{border-top-left-radius:var(--card-roundedness);border-top-right-radius:var(--card-roundedness)}.theme-light .container-ZMc96U.transparent-1lUmft.theme-dark{box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 1px 5px 0px rgba(0,0,0,.12);background-color:#fff;--header-primary: #060607;--interactive-normal: #4f5660;--interactive-hover: #2e3338;--interactive-active: #060607;--interactive-muted: #c7ccd1;--danger: var(--danger);--accent: var(--accent);--online: var(--online)}.theme-light .container-ZMc96U.transparent-1lUmft.theme-dark .controlIcon-10O-4h{color:var(--interactive-normal)}.theme-light .container-ZMc96U.transparent-1lUmft.theme-dark .playingText-16QsYy{color:var(--header-primary)}.notice-2HEN-u{border-radius:var(--card-roundedness)}.theme-light .notice-2HEN-u{box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0,0,0,.12)}.callContainer-BGIngG .scroller-35tvpe{border-radius:var(--card-roundedness)}.chat-2ZfjoI .wrapper-1gVUIN.minimum-fXpVNc+.content-1jQy2l:nth-child(3){border-top-left-radius:0;border-top-right-radius:0}.theme-light .wrapper-2vIMkT{background-color:var(--card-6-bg);box-shadow:0px 3px 5px -1px rgba(0, 0, 0, 0.2),0px 6px 10px 0px rgba(0, 0, 0, 0.14),0px 1px 18px 0px rgba(0,0,0,.12)}.theme-dark .wrapper-2vIMkT{background-color:var(--card-6-bg)}.mediaBarGrabber-FvJKJg,.mediaBarProgress-38I317,.mediaBarProgress-38I317:after,.mediaBarProgress-38I317:before{background-color:var(--accent)}body::before{color:var(--danger)}.inline-1zjmuk .pro-3GwLMX[style*="color: hsl(139, "],.inline-1zjmuk .tip-Jl__cG[style*="color: hsl(139, "]{color:var(--online) !important}.required---V9PF,.powercord-settings-item .description-30xx7u strong strong{color:var(--danger) !important}.errorImage-1n5rtg{background-image:none;-webkit-mask-image:url(/assets/c4e2488e2b572c805ffc3cce9ca92376.svg);background-color:var(--danger)}.wanderingCubesItem-3Us-UG{background-color:var(--accent)}.wrapper-22ayhK{background-color:var(--danger)}.secured-2wavXv:before{-webkit-mask:url(/assets/9d817c6b23267c30d63b2979684a42c2.svg) 50% no-repeat;background:var(--online)}.container-2o3qEW{background-color:var(--navdrawer-color)}.isUnread-3Lojb-{border-color:var(--danger)}.unreadPill-3nEWYM{background-color:var(--danger);color:#fff}.unreadPillCapStroke-1nE1Q8{color:var(--danger);fill:var(--danger)}.iconBadge-3Mmg92,.mention-3XBnnZ{background-color:var(--danger)}.numberBadge-37OJ3S[style*="background-color: rgb(240, 71, 71)"]{background-color:var(--danger) !important}.colorable-3rVGna.red-3T8maV,.lookFilled-1Gx00P.colorRed-1TFJan{background-color:var(--danger);color:#fff}.container-YkUktl .redIcon-1ppjsM{color:var(--danger)}.theme-light .wrapper-1ZcZW-,.theme-dark .wrapper-1ZcZW-{background-color:var(--accent-selected-highlight);color:var(--accent)}.theme-light .wrapper-1ZcZW-:hover,.theme-dark .wrapper-1ZcZW-:hover{color:var(--accent-highlight)}.reaction-2A2y9y{border-radius:.25rem;border:none}.theme-light .reaction-2A2y9y.reactionMe-3I9gFK,.theme-dark .reaction-2A2y9y.reactionMe-3I9gFK{background-color:rgba(26,115,232,.25);color:var(--accent)}.theme-light .reaction-2A2y9y.reactionMe-3I9gFK:hover,.theme-dark .reaction-2A2y9y.reactionMe-3I9gFK:hover{background-color:rgba(0,149,255,.25)}.theme-light .reaction-2A2y9y.reactionMe-3I9gFK .reactionCount-1zkLcN,.theme-dark .reaction-2A2y9y.reactionMe-3I9gFK .reactionCount-1zkLcN{color:var(--accent)}::placeholder,body,button,input,select,textarea,::-webkit-input-placeholder{font-family:var(--font-header)}.textContainer-36wgKK pre,code,.multiInputLast-35zVz0 input{font:14px/20px var(--font-code) !important;font-weight:400;font-stretch:100%}.username-h_Y3Us,.title-3hptVQ,.title-17SveM,.modalTitle-2skSKy .content-1i_k8f{font-weight:var(--header-weight)}.channelName-3KPsGw,.name-3Vmqxm{font-weight:500}.keybindShortcut-3zF1P9 span{font-weight:600}@keyframes pixelcord-spawn-anim{from{transform:scale(0);opacity:0}to{transform:scale(1);opacity:1}}.button-38aScr{border-radius:var(--button-radius);overflow:hidden}.button-38aScr::after{transition:transform .3s cubic-bezier(0, 0, 0.2, 1),width .3s cubic-bezier(0, 0, 0.2, 1),height .3s cubic-bezier(0, 0, 0.2, 1),opacity .6s cubic-bezier(0, 0, 0.2, 1);content:"";opacity:0;pointer-events:none;position:absolute;width:100%;height:100%;top:calc(0px + var(--clickY));left:calc(0px + var(--clickX));transform:scale(5);background:radial-gradient(circle at center, var(--ripple-default) 24%, transparent 25%, transparent 100%)}.button-38aScr:not(:active)::after{transition:0s;opacity:.3;transform:scale(0)}.button-38aScr.lookFilled-1Gx00P.colorBrand-3pXr91,.button-38aScr.lookFilled-1Gx00P.colorBrand-3pXr91:hover{color:var(--accent-text);background-color:var(--accent);overflow:hidden}.button-38aScr.lookFilled-1Gx00P.colorBrand-3pXr91::after,.button-38aScr.lookFilled-1Gx00P.colorBrand-3pXr91:hover::after{transition:transform .3s cubic-bezier(0, 0, 0.2, 1),width .3s cubic-bezier(0, 0, 0.2, 1),height .3s cubic-bezier(0, 0, 0.2, 1),opacity .6s cubic-bezier(0, 0, 0.2, 1);content:"";opacity:0;pointer-events:none;position:absolute;width:100%;height:100%;top:calc(0px + var(--clickY));left:calc(0px + var(--clickX));transform:scale(5);background:radial-gradient(circle at center, var(--accent-highlight) 24%, transparent 25%, transparent 100%)}.button-38aScr.lookFilled-1Gx00P.colorBrand-3pXr91:not(:active)::after,.button-38aScr.lookFilled-1Gx00P.colorBrand-3pXr91:hover:not(:active)::after{transition:0s;opacity:.3;transform:scale(0)}.button-38aScr.lookFilled-1Gx00P.colorBrand-3pXr91:active{background-color:var(--accent-highlight)}.theme-light .button-38aScr{box-shadow:0px 2px 1px -1px rgba(0, 0, 0, 0.2),0px 1px 1px 0px rgba(0, 0, 0, 0.14),0px 1px 3px 0px rgba(0,0,0,.12)}.theme-dark .button-38aScr{box-shadow:0 0 0 1px #333}.lookInverted-2D7oAl.colorBrand-3pXr91:hover{background-color:var(--online);transform:scale(1.025);transition:200ms transform ease-in-out}.colorDefault-CDqZdO.focused-3qFvc8{background-color:var(--accent);color:var(--accent-text)}.colorDanger-3n-KnP.focused-3qFvc8{background-color:var(--danger);color:var(--accent-text)}.colorDefault-CDqZdO:active:not(.hideInteraction-2jPGL_){background-color:var(--accent-highlight);color:var(--accent-text)}.colorDanger-3n-KnP:active:not(.hideInteraction-2jPGL_){background-color:var(--danger-highlight);color:var(--accent-text)}.labelContainer-2vJzYL{overflow:hidden}.labelContainer-2vJzYL::after{transition:transform .3s cubic-bezier(0, 0, 0.2, 1),width .3s cubic-bezier(0, 0, 0.2, 1),height .3s cubic-bezier(0, 0, 0.2, 1),opacity .6s cubic-bezier(0, 0, 0.2, 1);content:"";opacity:0;pointer-events:none;position:absolute;width:100%;height:100%;top:calc(0px + var(--clickY));left:calc(0px + var(--clickX));transform:scale(5);background:radial-gradient(circle at center, var(--accent-highlight) 24%, transparent 25%, transparent 100%)}.labelContainer-2vJzYL:not(:active)::after{transition:0s;opacity:.3;transform:scale(0)}.labelContainer-2vJzYL.colorDefault-CDqZdO{overflow:hidden}.labelContainer-2vJzYL.colorDefault-CDqZdO::after{transition:transform .3s cubic-bezier(0, 0, 0.2, 1),width .3s cubic-bezier(0, 0, 0.2, 1),height .3s cubic-bezier(0, 0, 0.2, 1),opacity .6s cubic-bezier(0, 0, 0.2, 1);content:"";opacity:0;pointer-events:none;position:absolute;width:100%;height:100%;top:calc(0px + var(--clickY));left:calc(0px + var(--clickX));transform:scale(5);background:radial-gradient(circle at center, var(--danger-highlight) 24%, transparent 25%, transparent 100%)}.labelContainer-2vJzYL.colorDefault-CDqZdO:not(:active)::after{transition:0s;opacity:.3;transform:scale(0)}.item-1BCeuB::after{transition:background-size .3s cubic-bezier(0, 0, 0.2, 1),opacity .6s cubic-bezier(0, 0, 0.2, 1);opacity:0;background-size:500%;background-image:radial-gradient(circle at calc(var(--clickX) + 50%) calc(var(--clickY) + 50%), var(--ripple-default) 24%, transparent 25%, transparent 100%);background-repeat:no-repeat;background-position:50% 50%;background-attachment:local;background-clip:padding-box;object-fit:contain;content:"";pointer-events:none;position:absolute;width:100%;height:36px;margin-top:0px;margin-left:0px}.item-1BCeuB:not(:active)::after{transition:0s;opacity:.3;background-size:0%}.actionButton-1YKTU0.addButton-1_dZYu::after{transition:background-size .3s cubic-bezier(0, 0, 0.2, 1),opacity .6s cubic-bezier(0, 0, 0.2, 1);opacity:0;background-size:500%;background-image:radial-gradient(circle at calc(var(--clickX) + 50%) calc(var(--clickY) + 50%), var(--ripple-default) 24%, transparent 25%, transparent 100%);background-repeat:no-repeat;background-position:50% 50%;background-attachment:local;background-clip:padding-box;object-fit:contain;content:"";pointer-events:none;position:absolute;width:48px;height:48px;margin-top:0px;margin-left:0px}.actionButton-1YKTU0.addButton-1_dZYu:not(:active)::after{transition:0s;opacity:.3;background-size:0%}.autocompleteRowVertical-EA9dCg::after{transition:background-size .3s cubic-bezier(0, 0, 0.2, 1),opacity .6s cubic-bezier(0, 0, 0.2, 1);opacity:0;background-size:500%;background-image:radial-gradient(circle at calc(var(--clickX) + 50%) calc(var(--clickY) + 50%), var(--ripple-default) 24%, transparent 25%, transparent 100%);background-repeat:no-repeat;background-position:50% 50%;background-attachment:local;background-clip:padding-box;object-fit:contain;content:"";pointer-events:none;position:absolute;width:100%;height:32px;margin-top:-32px;margin-left:0px}.autocompleteRowVertical-EA9dCg:not(:active)::after{transition:0s;opacity:.3;background-size:0%}.theme-light .lookBlank-3eh9lL,.theme-light .lookLink-9FtZy-{box-shadow:none}.theme-dark .lookBlank-3eh9lL,.theme-dark .lookLink-9FtZy-{box-shadow:none}.button-1EGGcP.buttonColor-3bP3fX,.button-1EGGcP .buttonColor-3bP3fX{background-color:var(--accent);color:var(--accent-text)}.centerButton-1IShs7{border-radius:50%}.lookOutlined-3sRXeN.colorBrand-3pXr91{border-color:var(--accent);color:var(--accent)}.lookOutlined-3sRXeN.colorRed-1TFJan{border-color:var(--danger);color:var(--danger)}.side-2ur1Qk>.item-3XjbnG[data-item-id=logout]:not(.role-3pGE29)[style*="rgb(237, 66, 69)"]{color:var(--danger) !important}.theme-light .lookFilled-1Gx00P.colorGrey-2DXtkV{color:#fff}.colorDanger-3n-KnP,.colorDanger-3n-KnP .checkbox-hADx5o,.colorDanger-3n-KnP .radioSelection-1UHp0b,.button-3bklZh.dangerous-Y36ifs{color:var(--danger)}.colorable-3rVGna.green-3wkLbx,.lookFilled-1Gx00P.colorGreen-29iAKY{background-color:var(--online)}.lookFilled-1Gx00P.colorGreen-29iAKY:hover,.colorable-3rVGna.green-3wkLbx.active-3D763s,.colorable-3rVGna.green-3wkLbx:hover{background-color:var(--online-highlight)}.theme-dark .pruneLink-3V7wes,.theme-light .pruneLink-3V7wes{color:var(--danger)}.lookOutlined-3sRXeN.colorGreen-29iAKY{color:var(--online);border-color:var(--online)}.lookInverted-2D7oAl.colorBrand-3pXr91{background-color:var(--online);color:#fff}.actionButton-3-B2x-.actionDeny-1pQVuZ:hover{color:var(--danger) !important}.unread-2wipsx{background-color:var(--snackbar-bg);opacity:1;box-shadow:var(--snackbar-shadow);border-radius:var(--snackbar-radius)}.bar-2eAyLE,.container-1qIct8{height:var(--snackbar-height)}.input-2XRLou{left:0}.container-2nx-BQ{width:32px;height:14px;overflow:visible}.container-2nx-BQ[style*="background-color: hsl(219"]{background-color:transparent !important}.container-2nx-BQ[style*="background-color: hsl(219"]::before{content:"";display:inline-block;background-color:var(--accent) !important;opacity:.3;width:32px;height:14px;border-radius:14px;pointer-events:none}.container-2nx-BQ[style*="background-color: hsl(219"] .slider-32CRPX{background-color:var(--accent) !important;box-shadow:0 3px 4px 0 RGB(0 0 0/14%),0 3px 3px -2px RGB(0 0 0/20%),0 1px 8px 0 RGB(0 0 0/12%)}.container-2nx-BQ[style*="background-color: hsl(220"]{background-color:transparent !important}.container-2nx-BQ[style*="background-color: hsl(220"]::before{content:"";display:inline-block;background-color:var(--accent) !important;opacity:.3;width:32px;height:14px;border-radius:14px;pointer-events:none}.container-2nx-BQ[style*="background-color: hsl(220"] .slider-32CRPX{background-color:var(--accent) !important;box-shadow:0 3px 4px 0 RGB(0 0 0/14%),0 3px 3px -2px RGB(0 0 0/20%),0 1px 8px 0 RGB(0 0 0/12%)}.container-2nx-BQ[style*="background-color: hsl(221"]{background-color:transparent !important}.container-2nx-BQ[style*="background-color: hsl(221"]::before{content:"";display:inline-block;background-color:var(--accent) !important;opacity:.3;width:32px;height:14px;border-radius:14px;pointer-events:none}.container-2nx-BQ[style*="background-color: hsl(221"] .slider-32CRPX{background-color:var(--accent) !important;box-shadow:0 3px 4px 0 RGB(0 0 0/14%),0 3px 3px -2px RGB(0 0 0/20%),0 1px 8px 0 RGB(0 0 0/12%)}.container-2nx-BQ[style*="background-color: hsl(222"]{background-color:transparent !important}.container-2nx-BQ[style*="background-color: hsl(222"]::before{content:"";display:inline-block;background-color:var(--accent) !important;opacity:.3;width:32px;height:14px;border-radius:14px;pointer-events:none}.container-2nx-BQ[style*="background-color: hsl(222"] .slider-32CRPX{background-color:var(--accent) !important;box-shadow:0 3px 4px 0 RGB(0 0 0/14%),0 3px 3px -2px RGB(0 0 0/20%),0 1px 8px 0 RGB(0 0 0/12%)}.container-2nx-BQ[style*="background-color: hsl(223"]{background-color:transparent !important}.container-2nx-BQ[style*="background-color: hsl(223"]::before{content:"";display:inline-block;background-color:var(--accent) !important;opacity:.3;width:32px;height:14px;border-radius:14px;pointer-events:none}.container-2nx-BQ[style*="background-color: hsl(223"] .slider-32CRPX{background-color:var(--accent) !important;box-shadow:0 3px 4px 0 RGB(0 0 0/14%),0 3px 3px -2px RGB(0 0 0/20%),0 1px 8px 0 RGB(0 0 0/12%)}.container-2nx-BQ[style*="background-color: hsl(224"]{background-color:transparent !important}.container-2nx-BQ[style*="background-color: hsl(224"]::before{content:"";display:inline-block;background-color:var(--accent) !important;opacity:.3;width:32px;height:14px;border-radius:14px;pointer-events:none}.container-2nx-BQ[style*="background-color: hsl(224"] .slider-32CRPX{background-color:var(--accent) !important;box-shadow:0 3px 4px 0 RGB(0 0 0/14%),0 3px 3px -2px RGB(0 0 0/20%),0 1px 8px 0 RGB(0 0 0/12%)}.container-2nx-BQ[style*="background-color: hsl(225"]{background-color:transparent !important}.container-2nx-BQ[style*="background-color: hsl(225"]::before{content:"";display:inline-block;background-color:var(--accent) !important;opacity:.3;width:32px;height:14px;border-radius:14px;pointer-events:none}.container-2nx-BQ[style*="background-color: hsl(225"] .slider-32CRPX{background-color:var(--accent) !important;box-shadow:0 3px 4px 0 RGB(0 0 0/14%),0 3px 3px -2px RGB(0 0 0/20%),0 1px 8px 0 RGB(0 0 0/12%)}.container-2nx-BQ[style*="background-color: hsl(226"]{background-color:transparent !important}.container-2nx-BQ[style*="background-color: hsl(226"]::before{content:"";display:inline-block;background-color:var(--accent) !important;opacity:.3;width:32px;height:14px;border-radius:14px;pointer-events:none}.container-2nx-BQ[style*="background-color: hsl(226"] .slider-32CRPX{background-color:var(--accent) !important;box-shadow:0 3px 4px 0 RGB(0 0 0/14%),0 3px 3px -2px RGB(0 0 0/20%),0 1px 8px 0 RGB(0 0 0/12%)}.container-2nx-BQ[style*="background-color: hsl(227"]{background-color:transparent !important}.container-2nx-BQ[style*="background-color: hsl(227"]::before{content:"";display:inline-block;background-color:var(--accent) !important;opacity:.3;width:32px;height:14px;border-radius:14px;pointer-events:none}.container-2nx-BQ[style*="background-color: hsl(227"] .slider-32CRPX{background-color:var(--accent) !important;box-shadow:0 3px 4px 0 RGB(0 0 0/14%),0 3px 3px -2px RGB(0 0 0/20%),0 1px 8px 0 RGB(0 0 0/12%)}.container-2nx-BQ[style*="background-color: hsl(228"]{background-color:transparent !important}.container-2nx-BQ[style*="background-color: hsl(228"]::before{content:"";display:inline-block;background-color:var(--accent) !important;opacity:.3;width:32px;height:14px;border-radius:14px;pointer-events:none}.container-2nx-BQ[style*="background-color: hsl(228"] .slider-32CRPX{background-color:var(--accent) !important;box-shadow:0 3px 4px 0 RGB(0 0 0/14%),0 3px 3px -2px RGB(0 0 0/20%),0 1px 8px 0 RGB(0 0 0/12%)}.container-2nx-BQ[style*="background-color: hsl(229"]{background-color:transparent !important}.container-2nx-BQ[style*="background-color: hsl(229"]::before{content:"";display:inline-block;background-color:var(--accent) !important;opacity:.3;width:32px;height:14px;border-radius:14px;pointer-events:none}.container-2nx-BQ[style*="background-color: hsl(229"] .slider-32CRPX{background-color:var(--accent) !important;box-shadow:0 3px 4px 0 RGB(0 0 0/14%),0 3px 3px -2px RGB(0 0 0/20%),0 1px 8px 0 RGB(0 0 0/12%)}.container-2nx-BQ[style*="background-color: hsl(230"]{background-color:transparent !important}.container-2nx-BQ[style*="background-color: hsl(230"]::before{content:"";display:inline-block;background-color:var(--accent) !important;opacity:.3;width:32px;height:14px;border-radius:14px;pointer-events:none}.container-2nx-BQ[style*="background-color: hsl(230"] .slider-32CRPX{background-color:var(--accent) !important;box-shadow:0 3px 4px 0 RGB(0 0 0/14%),0 3px 3px -2px RGB(0 0 0/20%),0 1px 8px 0 RGB(0 0 0/12%)}.container-2nx-BQ[style*="background-color: hsl(231"]{background-color:transparent !important}.container-2nx-BQ[style*="background-color: hsl(231"]::before{content:"";display:inline-block;background-color:var(--accent) !important;opacity:.3;width:32px;height:14px;border-radius:14px;pointer-events:none}.container-2nx-BQ[style*="background-color: hsl(231"] .slider-32CRPX{background-color:var(--accent) !important;box-shadow:0 3px 4px 0 RGB(0 0 0/14%),0 3px 3px -2px RGB(0 0 0/20%),0 1px 8px 0 RGB(0 0 0/12%)}.container-2nx-BQ[style*="background-color: hsl(232"]{background-color:transparent !important}.container-2nx-BQ[style*="background-color: hsl(232"]::before{content:"";display:inline-block;background-color:var(--accent) !important;opacity:.3;width:32px;height:14px;border-radius:14px;pointer-events:none}.container-2nx-BQ[style*="background-color: hsl(232"] .slider-32CRPX{background-color:var(--accent) !important;box-shadow:0 3px 4px 0 RGB(0 0 0/14%),0 3px 3px -2px RGB(0 0 0/20%),0 1px 8px 0 RGB(0 0 0/12%)}.container-2nx-BQ[style*="background-color: hsl(233"]{background-color:transparent !important}.container-2nx-BQ[style*="background-color: hsl(233"]::before{content:"";display:inline-block;background-color:var(--accent) !important;opacity:.3;width:32px;height:14px;border-radius:14px;pointer-events:none}.container-2nx-BQ[style*="background-color: hsl(233"] .slider-32CRPX{background-color:var(--accent) !important;box-shadow:0 3px 4px 0 RGB(0 0 0/14%),0 3px 3px -2px RGB(0 0 0/20%),0 1px 8px 0 RGB(0 0 0/12%)}.container-2nx-BQ[style*="background-color: hsl(234"]{background-color:transparent !important}.container-2nx-BQ[style*="background-color: hsl(234"]::before{content:"";display:inline-block;background-color:var(--accent) !important;opacity:.3;width:32px;height:14px;border-radius:14px;pointer-events:none}.container-2nx-BQ[style*="background-color: hsl(234"] .slider-32CRPX{background-color:var(--accent) !important;box-shadow:0 3px 4px 0 RGB(0 0 0/14%),0 3px 3px -2px RGB(0 0 0/20%),0 1px 8px 0 RGB(0 0 0/12%)}.container-2nx-BQ[style*="background-color: hsl(235"]{background-color:transparent !important}.container-2nx-BQ[style*="background-color: hsl(235"]::before{content:"";display:inline-block;background-color:var(--accent) !important;opacity:.3;width:32px;height:14px;border-radius:14px;pointer-events:none}.container-2nx-BQ[style*="background-color: hsl(235"] .slider-32CRPX{background-color:var(--accent) !important;box-shadow:0 3px 4px 0 RGB(0 0 0/14%),0 3px 3px -2px RGB(0 0 0/20%),0 1px 8px 0 RGB(0 0 0/12%)}.container-2nx-BQ[style*="background-color: hsl(126"]{background-color:transparent !important}.container-2nx-BQ[style*="background-color: hsl(126"]::before{content:"";display:inline-block;background-color:var(--accent) !important;opacity:.3;width:32px;height:14px;border-radius:14px;pointer-events:none}.container-2nx-BQ[style*="background-color: hsl(126"] .slider-32CRPX{background-color:var(--accent) !important;box-shadow:0 3px 4px 0 RGB(0 0 0/14%),0 3px 3px -2px RGB(0 0 0/20%),0 1px 8px 0 RGB(0 0 0/12%)}.container-2nx-BQ[style*="background-color: hsl(127"]{background-color:transparent !important}.container-2nx-BQ[style*="background-color: hsl(127"]::before{content:"";display:inline-block;background-color:var(--accent) !important;opacity:.3;width:32px;height:14px;border-radius:14px;pointer-events:none}.container-2nx-BQ[style*="background-color: hsl(127"] .slider-32CRPX{background-color:var(--accent) !important;box-shadow:0 3px 4px 0 RGB(0 0 0/14%),0 3px 3px -2px RGB(0 0 0/20%),0 1px 8px 0 RGB(0 0 0/12%)}.container-2nx-BQ[style*="background-color: hsl(128"]{background-color:transparent !important}.container-2nx-BQ[style*="background-color: hsl(128"]::before{content:"";display:inline-block;background-color:var(--accent) !important;opacity:.3;width:32px;height:14px;border-radius:14px;pointer-events:none}.container-2nx-BQ[style*="background-color: hsl(128"] .slider-32CRPX{background-color:var(--accent) !important;box-shadow:0 3px 4px 0 RGB(0 0 0/14%),0 3px 3px -2px RGB(0 0 0/20%),0 1px 8px 0 RGB(0 0 0/12%)}.container-2nx-BQ[style*="background-color: hsl(129"]{background-color:transparent !important}.container-2nx-BQ[style*="background-color: hsl(129"]::before{content:"";display:inline-block;background-color:var(--accent) !important;opacity:.3;width:32px;height:14px;border-radius:14px;pointer-events:none}.container-2nx-BQ[style*="background-color: hsl(129"] .slider-32CRPX{background-color:var(--accent) !important;box-shadow:0 3px 4px 0 RGB(0 0 0/14%),0 3px 3px -2px RGB(0 0 0/20%),0 1px 8px 0 RGB(0 0 0/12%)}.container-2nx-BQ[style*="background-color: hsl(130"]{background-color:transparent !important}.container-2nx-BQ[style*="background-color: hsl(130"]::before{content:"";display:inline-block;background-color:var(--accent) !important;opacity:.3;width:32px;height:14px;border-radius:14px;pointer-events:none}.container-2nx-BQ[style*="background-color: hsl(130"] .slider-32CRPX{background-color:var(--accent) !important;box-shadow:0 3px 4px 0 RGB(0 0 0/14%),0 3px 3px -2px RGB(0 0 0/20%),0 1px 8px 0 RGB(0 0 0/12%)}.container-2nx-BQ[style*="background-color: hsl(131"]{background-color:transparent !important}.container-2nx-BQ[style*="background-color: hsl(131"]::before{content:"";display:inline-block;background-color:var(--accent) !important;opacity:.3;width:32px;height:14px;border-radius:14px;pointer-events:none}.container-2nx-BQ[style*="background-color: hsl(131"] .slider-32CRPX{background-color:var(--accent) !important;box-shadow:0 3px 4px 0 RGB(0 0 0/14%),0 3px 3px -2px RGB(0 0 0/20%),0 1px 8px 0 RGB(0 0 0/12%)}.container-2nx-BQ[style*="background-color: hsl(132"]{background-color:transparent !important}.container-2nx-BQ[style*="background-color: hsl(132"]::before{content:"";display:inline-block;background-color:var(--accent) !important;opacity:.3;width:32px;height:14px;border-radius:14px;pointer-events:none}.container-2nx-BQ[style*="background-color: hsl(132"] .slider-32CRPX{background-color:var(--accent) !important;box-shadow:0 3px 4px 0 RGB(0 0 0/14%),0 3px 3px -2px RGB(0 0 0/20%),0 1px 8px 0 RGB(0 0 0/12%)}.container-2nx-BQ[style*="background-color: hsl(133"]{background-color:transparent !important}.container-2nx-BQ[style*="background-color: hsl(133"]::before{content:"";display:inline-block;background-color:var(--accent) !important;opacity:.3;width:32px;height:14px;border-radius:14px;pointer-events:none}.container-2nx-BQ[style*="background-color: hsl(133"] .slider-32CRPX{background-color:var(--accent) !important;box-shadow:0 3px 4px 0 RGB(0 0 0/14%),0 3px 3px -2px RGB(0 0 0/20%),0 1px 8px 0 RGB(0 0 0/12%)}.container-2nx-BQ[style*="background-color: hsl(134"]{background-color:transparent !important}.container-2nx-BQ[style*="background-color: hsl(134"]::before{content:"";display:inline-block;background-color:var(--accent) !important;opacity:.3;width:32px;height:14px;border-radius:14px;pointer-events:none}.container-2nx-BQ[style*="background-color: hsl(134"] .slider-32CRPX{background-color:var(--accent) !important;box-shadow:0 3px 4px 0 RGB(0 0 0/14%),0 3px 3px -2px RGB(0 0 0/20%),0 1px 8px 0 RGB(0 0 0/12%)}.container-2nx-BQ[style*="background-color: hsl(135"]{background-color:transparent !important}.container-2nx-BQ[style*="background-color: hsl(135"]::before{content:"";display:inline-block;background-color:var(--accent) !important;opacity:.3;width:32px;height:14px;border-radius:14px;pointer-events:none}.container-2nx-BQ[style*="background-color: hsl(135"] .slider-32CRPX{background-color:var(--accent) !important;box-shadow:0 3px 4px 0 RGB(0 0 0/14%),0 3px 3px -2px RGB(0 0 0/20%),0 1px 8px 0 RGB(0 0 0/12%)}.container-2nx-BQ[style*="background-color: hsl(136"]{background-color:transparent !important}.container-2nx-BQ[style*="background-color: hsl(136"]::before{content:"";display:inline-block;background-color:var(--accent) !important;opacity:.3;width:32px;height:14px;border-radius:14px;pointer-events:none}.container-2nx-BQ[style*="background-color: hsl(136"] .slider-32CRPX{background-color:var(--accent) !important;box-shadow:0 3px 4px 0 RGB(0 0 0/14%),0 3px 3px -2px RGB(0 0 0/20%),0 1px 8px 0 RGB(0 0 0/12%)}.container-2nx-BQ[style*="background-color: hsl(137"]{background-color:transparent !important}.container-2nx-BQ[style*="background-color: hsl(137"]::before{content:"";display:inline-block;background-color:var(--accent) !important;opacity:.3;width:32px;height:14px;border-radius:14px;pointer-events:none}.container-2nx-BQ[style*="background-color: hsl(137"] .slider-32CRPX{background-color:var(--accent) !important;box-shadow:0 3px 4px 0 RGB(0 0 0/14%),0 3px 3px -2px RGB(0 0 0/20%),0 1px 8px 0 RGB(0 0 0/12%)}.container-2nx-BQ[style*="background-color: hsl(138"]{background-color:transparent !important}.container-2nx-BQ[style*="background-color: hsl(138"]::before{content:"";display:inline-block;background-color:var(--accent) !important;opacity:.3;width:32px;height:14px;border-radius:14px;pointer-events:none}.container-2nx-BQ[style*="background-color: hsl(138"] .slider-32CRPX{background-color:var(--accent) !important;box-shadow:0 3px 4px 0 RGB(0 0 0/14%),0 3px 3px -2px RGB(0 0 0/20%),0 1px 8px 0 RGB(0 0 0/12%)}.container-2nx-BQ[style*="background-color: hsl(139"]{background-color:transparent !important}.container-2nx-BQ[style*="background-color: hsl(139"]::before{content:"";display:inline-block;background-color:var(--accent) !important;opacity:.3;width:32px;height:14px;border-radius:14px;pointer-events:none}.container-2nx-BQ[style*="background-color: hsl(139"] .slider-32CRPX{background-color:var(--accent) !important;box-shadow:0 3px 4px 0 RGB(0 0 0/14%),0 3px 3px -2px RGB(0 0 0/20%),0 1px 8px 0 RGB(0 0 0/12%)}.container-2nx-BQ[style*="background-color: hsl(140"]{background-color:transparent !important}.container-2nx-BQ[style*="background-color: hsl(140"]::before{content:"";display:inline-block;background-color:var(--accent) !important;opacity:.3;width:32px;height:14px;border-radius:14px;pointer-events:none}.container-2nx-BQ[style*="background-color: hsl(140"] .slider-32CRPX{background-color:var(--accent) !important;box-shadow:0 3px 4px 0 RGB(0 0 0/14%),0 3px 3px -2px RGB(0 0 0/20%),0 1px 8px 0 RGB(0 0 0/12%)}.container-2nx-BQ[style*="background-color: hsl(141"]{background-color:transparent !important}.container-2nx-BQ[style*="background-color: hsl(141"]::before{content:"";display:inline-block;background-color:var(--accent) !important;opacity:.3;width:32px;height:14px;border-radius:14px;pointer-events:none}.container-2nx-BQ[style*="background-color: hsl(141"] .slider-32CRPX{background-color:var(--accent) !important;box-shadow:0 3px 4px 0 RGB(0 0 0/14%),0 3px 3px -2px RGB(0 0 0/20%),0 1px 8px 0 RGB(0 0 0/12%)}.container-2nx-BQ[style*="background-color: hsl(142"]{background-color:transparent !important}.container-2nx-BQ[style*="background-color: hsl(142"]::before{content:"";display:inline-block;background-color:var(--accent) !important;opacity:.3;width:32px;height:14px;border-radius:14px;pointer-events:none}.container-2nx-BQ[style*="background-color: hsl(142"] .slider-32CRPX{background-color:var(--accent) !important;box-shadow:0 3px 4px 0 RGB(0 0 0/14%),0 3px 3px -2px RGB(0 0 0/20%),0 1px 8px 0 RGB(0 0 0/12%)}.container-2nx-BQ[style*="background-color: hsl(143"]{background-color:transparent !important}.container-2nx-BQ[style*="background-color: hsl(143"]::before{content:"";display:inline-block;background-color:var(--accent) !important;opacity:.3;width:32px;height:14px;border-radius:14px;pointer-events:none}.container-2nx-BQ[style*="background-color: hsl(143"] .slider-32CRPX{background-color:var(--accent) !important;box-shadow:0 3px 4px 0 RGB(0 0 0/14%),0 3px 3px -2px RGB(0 0 0/20%),0 1px 8px 0 RGB(0 0 0/12%)}.container-2nx-BQ[style*="background-color: hsl(144"]{background-color:transparent !important}.container-2nx-BQ[style*="background-color: hsl(144"]::before{content:"";display:inline-block;background-color:var(--accent) !important;opacity:.3;width:32px;height:14px;border-radius:14px;pointer-events:none}.container-2nx-BQ[style*="background-color: hsl(144"] .slider-32CRPX{background-color:var(--accent) !important;box-shadow:0 3px 4px 0 RGB(0 0 0/14%),0 3px 3px -2px RGB(0 0 0/20%),0 1px 8px 0 RGB(0 0 0/12%)}.container-2nx-BQ[style*="background-color: hsl(145"]{background-color:transparent !important}.container-2nx-BQ[style*="background-color: hsl(145"]::before{content:"";display:inline-block;background-color:var(--accent) !important;opacity:.3;width:32px;height:14px;border-radius:14px;pointer-events:none}.container-2nx-BQ[style*="background-color: hsl(145"] .slider-32CRPX{background-color:var(--accent) !important;box-shadow:0 3px 4px 0 RGB(0 0 0/14%),0 3px 3px -2px RGB(0 0 0/20%),0 1px 8px 0 RGB(0 0 0/12%)}.container-2nx-BQ[style*="background-color: hsl(146"]{background-color:transparent !important}.container-2nx-BQ[style*="background-color: hsl(146"]::before{content:"";display:inline-block;background-color:var(--accent) !important;opacity:.3;width:32px;height:14px;border-radius:14px;pointer-events:none}.container-2nx-BQ[style*="background-color: hsl(146"] .slider-32CRPX{background-color:var(--accent) !important;box-shadow:0 3px 4px 0 RGB(0 0 0/14%),0 3px 3px -2px RGB(0 0 0/20%),0 1px 8px 0 RGB(0 0 0/12%)}.container-2nx-BQ[style*="background-color: hsl(147"]{background-color:transparent !important}.container-2nx-BQ[style*="background-color: hsl(147"]::before{content:"";display:inline-block;background-color:var(--accent) !important;opacity:.3;width:32px;height:14px;border-radius:14px;pointer-events:none}.container-2nx-BQ[style*="background-color: hsl(147"] .slider-32CRPX{background-color:var(--accent) !important;box-shadow:0 3px 4px 0 RGB(0 0 0/14%),0 3px 3px -2px RGB(0 0 0/20%),0 1px 8px 0 RGB(0 0 0/12%)}.container-2nx-BQ[style*="background-color: hsl(148"]{background-color:transparent !important}.container-2nx-BQ[style*="background-color: hsl(148"]::before{content:"";display:inline-block;background-color:var(--accent) !important;opacity:.3;width:32px;height:14px;border-radius:14px;pointer-events:none}.container-2nx-BQ[style*="background-color: hsl(148"] .slider-32CRPX{background-color:var(--accent) !important;box-shadow:0 3px 4px 0 RGB(0 0 0/14%),0 3px 3px -2px RGB(0 0 0/20%),0 1px 8px 0 RGB(0 0 0/12%)}.container-2nx-BQ[style*="background-color: hsl(149"]{background-color:transparent !important}.container-2nx-BQ[style*="background-color: hsl(149"]::before{content:"";display:inline-block;background-color:var(--accent) !important;opacity:.3;width:32px;height:14px;border-radius:14px;pointer-events:none}.container-2nx-BQ[style*="background-color: hsl(149"] .slider-32CRPX{background-color:var(--accent) !important;box-shadow:0 3px 4px 0 RGB(0 0 0/14%),0 3px 3px -2px RGB(0 0 0/20%),0 1px 8px 0 RGB(0 0 0/12%)}.container-2nx-BQ[style*="background-color: hsl(150"]{background-color:transparent !important}.container-2nx-BQ[style*="background-color: hsl(150"]::before{content:"";display:inline-block;background-color:var(--accent) !important;opacity:.3;width:32px;height:14px;border-radius:14px;pointer-events:none}.container-2nx-BQ[style*="background-color: hsl(150"] .slider-32CRPX{background-color:var(--accent) !important;box-shadow:0 3px 4px 0 RGB(0 0 0/14%),0 3px 3px -2px RGB(0 0 0/20%),0 1px 8px 0 RGB(0 0 0/12%)}.container-2nx-BQ[style*="background-color: hsl(151"]{background-color:transparent !important}.container-2nx-BQ[style*="background-color: hsl(151"]::before{content:"";display:inline-block;background-color:var(--accent) !important;opacity:.3;width:32px;height:14px;border-radius:14px;pointer-events:none}.container-2nx-BQ[style*="background-color: hsl(151"] .slider-32CRPX{background-color:var(--accent) !important;box-shadow:0 3px 4px 0 RGB(0 0 0/14%),0 3px 3px -2px RGB(0 0 0/20%),0 1px 8px 0 RGB(0 0 0/12%)}.container-2nx-BQ[style*="background-color: hsl(152"]{background-color:transparent !important}.container-2nx-BQ[style*="background-color: hsl(152"]::before{content:"";display:inline-block;background-color:var(--accent) !important;opacity:.3;width:32px;height:14px;border-radius:14px;pointer-events:none}.container-2nx-BQ[style*="background-color: hsl(152"] .slider-32CRPX{background-color:var(--accent) !important;box-shadow:0 3px 4px 0 RGB(0 0 0/14%),0 3px 3px -2px RGB(0 0 0/20%),0 1px 8px 0 RGB(0 0 0/12%)}.container-2nx-BQ[style*="background-color: hsl(153"]{background-color:transparent !important}.container-2nx-BQ[style*="background-color: hsl(153"]::before{content:"";display:inline-block;background-color:var(--accent) !important;opacity:.3;width:32px;height:14px;border-radius:14px;pointer-events:none}.container-2nx-BQ[style*="background-color: hsl(153"] .slider-32CRPX{background-color:var(--accent) !important;box-shadow:0 3px 4px 0 RGB(0 0 0/14%),0 3px 3px -2px RGB(0 0 0/20%),0 1px 8px 0 RGB(0 0 0/12%)}.container-2nx-BQ[style*="background-color: hsl(154"]{background-color:transparent !important}.container-2nx-BQ[style*="background-color: hsl(154"]::before{content:"";display:inline-block;background-color:var(--accent) !important;opacity:.3;width:32px;height:14px;border-radius:14px;pointer-events:none}.container-2nx-BQ[style*="background-color: hsl(154"] .slider-32CRPX{background-color:var(--accent) !important;box-shadow:0 3px 4px 0 RGB(0 0 0/14%),0 3px 3px -2px RGB(0 0 0/20%),0 1px 8px 0 RGB(0 0 0/12%)}.container-2nx-BQ[style*="background-color: hsl(155"]{background-color:transparent !important}.container-2nx-BQ[style*="background-color: hsl(155"]::before{content:"";display:inline-block;background-color:var(--accent) !important;opacity:.3;width:32px;height:14px;border-radius:14px;pointer-events:none}.container-2nx-BQ[style*="background-color: hsl(155"] .slider-32CRPX{background-color:var(--accent) !important;box-shadow:0 3px 4px 0 RGB(0 0 0/14%),0 3px 3px -2px RGB(0 0 0/20%),0 1px 8px 0 RGB(0 0 0/12%)}.container-2nx-BQ[style*="background-color: hsl(156"]{background-color:transparent !important}.container-2nx-BQ[style*="background-color: hsl(156"]::before{content:"";display:inline-block;background-color:var(--accent) !important;opacity:.3;width:32px;height:14px;border-radius:14px;pointer-events:none}.container-2nx-BQ[style*="background-color: hsl(156"] .slider-32CRPX{background-color:var(--accent) !important;box-shadow:0 3px 4px 0 RGB(0 0 0/14%),0 3px 3px -2px RGB(0 0 0/20%),0 1px 8px 0 RGB(0 0 0/12%)}.container-2nx-BQ[style*="background-color: hsl(157"]{background-color:transparent !important}.container-2nx-BQ[style*="background-color: hsl(157"]::before{content:"";display:inline-block;background-color:var(--accent) !important;opacity:.3;width:32px;height:14px;border-radius:14px;pointer-events:none}.container-2nx-BQ[style*="background-color: hsl(157"] .slider-32CRPX{background-color:var(--accent) !important;box-shadow:0 3px 4px 0 RGB(0 0 0/14%),0 3px 3px -2px RGB(0 0 0/20%),0 1px 8px 0 RGB(0 0 0/12%)}.container-2nx-BQ[style*="background-color: hsl(158"]{background-color:transparent !important}.container-2nx-BQ[style*="background-color: hsl(158"]::before{content:"";display:inline-block;background-color:var(--accent) !important;opacity:.3;width:32px;height:14px;border-radius:14px;pointer-events:none}.container-2nx-BQ[style*="background-color: hsl(158"] .slider-32CRPX{background-color:var(--accent) !important;box-shadow:0 3px 4px 0 RGB(0 0 0/14%),0 3px 3px -2px RGB(0 0 0/20%),0 1px 8px 0 RGB(0 0 0/12%)}.container-2nx-BQ[style*="background-color: hsl(159"]{background-color:transparent !important}.container-2nx-BQ[style*="background-color: hsl(159"]::before{content:"";display:inline-block;background-color:var(--accent) !important;opacity:.3;width:32px;height:14px;border-radius:14px;pointer-events:none}.container-2nx-BQ[style*="background-color: hsl(159"] .slider-32CRPX{background-color:var(--accent) !important;box-shadow:0 3px 4px 0 RGB(0 0 0/14%),0 3px 3px -2px RGB(0 0 0/20%),0 1px 8px 0 RGB(0 0 0/12%)}.container-2nx-BQ[style*="background-color: hsl(160"]{background-color:transparent !important}.container-2nx-BQ[style*="background-color: hsl(160"]::before{content:"";display:inline-block;background-color:var(--accent) !important;opacity:.3;width:32px;height:14px;border-radius:14px;pointer-events:none}.container-2nx-BQ[style*="background-color: hsl(160"] .slider-32CRPX{background-color:var(--accent) !important;box-shadow:0 3px 4px 0 RGB(0 0 0/14%),0 3px 3px -2px RGB(0 0 0/20%),0 1px 8px 0 RGB(0 0 0/12%)}.container-2nx-BQ[style*="background-color: hsl(161"]{background-color:transparent !important}.container-2nx-BQ[style*="background-color: hsl(161"]::before{content:"";display:inline-block;background-color:var(--accent) !important;opacity:.3;width:32px;height:14px;border-radius:14px;pointer-events:none}.container-2nx-BQ[style*="background-color: hsl(161"] .slider-32CRPX{background-color:var(--accent) !important;box-shadow:0 3px 4px 0 RGB(0 0 0/14%),0 3px 3px -2px RGB(0 0 0/20%),0 1px 8px 0 RGB(0 0 0/12%)}.container-2nx-BQ[style*="background-color: hsl(162"]{background-color:transparent !important}.container-2nx-BQ[style*="background-color: hsl(162"]::before{content:"";display:inline-block;background-color:var(--accent) !important;opacity:.3;width:32px;height:14px;border-radius:14px;pointer-events:none}.container-2nx-BQ[style*="background-color: hsl(162"] .slider-32CRPX{background-color:var(--accent) !important;box-shadow:0 3px 4px 0 RGB(0 0 0/14%),0 3px 3px -2px RGB(0 0 0/20%),0 1px 8px 0 RGB(0 0 0/12%)}.container-2nx-BQ[style*="background-color: hsl(163"]{background-color:transparent !important}.container-2nx-BQ[style*="background-color: hsl(163"]::before{content:"";display:inline-block;background-color:var(--accent) !important;opacity:.3;width:32px;height:14px;border-radius:14px;pointer-events:none}.container-2nx-BQ[style*="background-color: hsl(163"] .slider-32CRPX{background-color:var(--accent) !important;box-shadow:0 3px 4px 0 RGB(0 0 0/14%),0 3px 3px -2px RGB(0 0 0/20%),0 1px 8px 0 RGB(0 0 0/12%)}.container-2nx-BQ[style*="background-color: hsl(164"]{background-color:transparent !important}.container-2nx-BQ[style*="background-color: hsl(164"]::before{content:"";display:inline-block;background-color:var(--accent) !important;opacity:.3;width:32px;height:14px;border-radius:14px;pointer-events:none}.container-2nx-BQ[style*="background-color: hsl(164"] .slider-32CRPX{background-color:var(--accent) !important;box-shadow:0 3px 4px 0 RGB(0 0 0/14%),0 3px 3px -2px RGB(0 0 0/20%),0 1px 8px 0 RGB(0 0 0/12%)}.container-2nx-BQ[style*="background-color: hsl(165"]{background-color:transparent !important}.container-2nx-BQ[style*="background-color: hsl(165"]::before{content:"";display:inline-block;background-color:var(--accent) !important;opacity:.3;width:32px;height:14px;border-radius:14px;pointer-events:none}.container-2nx-BQ[style*="background-color: hsl(165"] .slider-32CRPX{background-color:var(--accent) !important;box-shadow:0 3px 4px 0 RGB(0 0 0/14%),0 3px 3px -2px RGB(0 0 0/20%),0 1px 8px 0 RGB(0 0 0/12%)}.container-2nx-BQ[style*="background-color: hsl(166"]{background-color:transparent !important}.container-2nx-BQ[style*="background-color: hsl(166"]::before{content:"";display:inline-block;background-color:var(--accent) !important;opacity:.3;width:32px;height:14px;border-radius:14px;pointer-events:none}.container-2nx-BQ[style*="background-color: hsl(166"] .slider-32CRPX{background-color:var(--accent) !important;box-shadow:0 3px 4px 0 RGB(0 0 0/14%),0 3px 3px -2px RGB(0 0 0/20%),0 1px 8px 0 RGB(0 0 0/12%)}.container-2nx-BQ[style*="background-color: hsl(167"]{background-color:transparent !important}.container-2nx-BQ[style*="background-color: hsl(167"]::before{content:"";display:inline-block;background-color:var(--accent) !important;opacity:.3;width:32px;height:14px;border-radius:14px;pointer-events:none}.container-2nx-BQ[style*="background-color: hsl(167"] .slider-32CRPX{background-color:var(--accent) !important;box-shadow:0 3px 4px 0 RGB(0 0 0/14%),0 3px 3px -2px RGB(0 0 0/20%),0 1px 8px 0 RGB(0 0 0/12%)}.container-2nx-BQ[style*="background-color: hsl(168"]{background-color:transparent !important}.container-2nx-BQ[style*="background-color: hsl(168"]::before{content:"";display:inline-block;background-color:var(--accent) !important;opacity:.3;width:32px;height:14px;border-radius:14px;pointer-events:none}.container-2nx-BQ[style*="background-color: hsl(168"] .slider-32CRPX{background-color:var(--accent) !important;box-shadow:0 3px 4px 0 RGB(0 0 0/14%),0 3px 3px -2px RGB(0 0 0/20%),0 1px 8px 0 RGB(0 0 0/12%)}.container-2nx-BQ[style*="background-color: hsl(169"]{background-color:transparent !important}.container-2nx-BQ[style*="background-color: hsl(169"]::before{content:"";display:inline-block;background-color:var(--accent) !important;opacity:.3;width:32px;height:14px;border-radius:14px;pointer-events:none}.container-2nx-BQ[style*="background-color: hsl(169"] .slider-32CRPX{background-color:var(--accent) !important;box-shadow:0 3px 4px 0 RGB(0 0 0/14%),0 3px 3px -2px RGB(0 0 0/20%),0 1px 8px 0 RGB(0 0 0/12%)}.container-2nx-BQ[style*="background-color: hsl(170"]{background-color:transparent !important}.container-2nx-BQ[style*="background-color: hsl(170"]::before{content:"";display:inline-block;background-color:var(--accent) !important;opacity:.3;width:32px;height:14px;border-radius:14px;pointer-events:none}.container-2nx-BQ[style*="background-color: hsl(170"] .slider-32CRPX{background-color:var(--accent) !important;box-shadow:0 3px 4px 0 RGB(0 0 0/14%),0 3px 3px -2px RGB(0 0 0/20%),0 1px 8px 0 RGB(0 0 0/12%)}.container-2nx-BQ[style*="background-color: hsl(171"]{background-color:transparent !important}.container-2nx-BQ[style*="background-color: hsl(171"]::before{content:"";display:inline-block;background-color:var(--accent) !important;opacity:.3;width:32px;height:14px;border-radius:14px;pointer-events:none}.container-2nx-BQ[style*="background-color: hsl(171"] .slider-32CRPX{background-color:var(--accent) !important;box-shadow:0 3px 4px 0 RGB(0 0 0/14%),0 3px 3px -2px RGB(0 0 0/20%),0 1px 8px 0 RGB(0 0 0/12%)}.container-2nx-BQ[style*="background-color: hsl(172"]{background-color:transparent !important}.container-2nx-BQ[style*="background-color: hsl(172"]::before{content:"";display:inline-block;background-color:var(--accent) !important;opacity:.3;width:32px;height:14px;border-radius:14px;pointer-events:none}.container-2nx-BQ[style*="background-color: hsl(172"] .slider-32CRPX{background-color:var(--accent) !important;box-shadow:0 3px 4px 0 RGB(0 0 0/14%),0 3px 3px -2px RGB(0 0 0/20%),0 1px 8px 0 RGB(0 0 0/12%)}.container-2nx-BQ[style*="background-color: hsl(173"]{background-color:transparent !important}.container-2nx-BQ[style*="background-color: hsl(173"]::before{content:"";display:inline-block;background-color:var(--accent) !important;opacity:.3;width:32px;height:14px;border-radius:14px;pointer-events:none}.container-2nx-BQ[style*="background-color: hsl(173"] .slider-32CRPX{background-color:var(--accent) !important;box-shadow:0 3px 4px 0 RGB(0 0 0/14%),0 3px 3px -2px RGB(0 0 0/20%),0 1px 8px 0 RGB(0 0 0/12%)}.container-2nx-BQ[style*="background-color: hsl(174"]{background-color:transparent !important}.container-2nx-BQ[style*="background-color: hsl(174"]::before{content:"";display:inline-block;background-color:var(--accent) !important;opacity:.3;width:32px;height:14px;border-radius:14px;pointer-events:none}.container-2nx-BQ[style*="background-color: hsl(174"] .slider-32CRPX{background-color:var(--accent) !important;box-shadow:0 3px 4px 0 RGB(0 0 0/14%),0 3px 3px -2px RGB(0 0 0/20%),0 1px 8px 0 RGB(0 0 0/12%)}.container-2nx-BQ[style*="background-color: hsl(175"]{background-color:transparent !important}.container-2nx-BQ[style*="background-color: hsl(175"]::before{content:"";display:inline-block;background-color:var(--accent) !important;opacity:.3;width:32px;height:14px;border-radius:14px;pointer-events:none}.container-2nx-BQ[style*="background-color: hsl(175"] .slider-32CRPX{background-color:var(--accent) !important;box-shadow:0 3px 4px 0 RGB(0 0 0/14%),0 3px 3px -2px RGB(0 0 0/20%),0 1px 8px 0 RGB(0 0 0/12%)}.container-2nx-BQ[style*="background-color: hsl(176"]{background-color:transparent !important}.container-2nx-BQ[style*="background-color: hsl(176"]::before{content:"";display:inline-block;background-color:var(--accent) !important;opacity:.3;width:32px;height:14px;border-radius:14px;pointer-events:none}.container-2nx-BQ[style*="background-color: hsl(176"] .slider-32CRPX{background-color:var(--accent) !important;box-shadow:0 3px 4px 0 RGB(0 0 0/14%),0 3px 3px -2px RGB(0 0 0/20%),0 1px 8px 0 RGB(0 0 0/12%)}.container-2nx-BQ[style*="background-color: hsl(177"]{background-color:transparent !important}.container-2nx-BQ[style*="background-color: hsl(177"]::before{content:"";display:inline-block;background-color:var(--accent) !important;opacity:.3;width:32px;height:14px;border-radius:14px;pointer-events:none}.container-2nx-BQ[style*="background-color: hsl(177"] .slider-32CRPX{background-color:var(--accent) !important;box-shadow:0 3px 4px 0 RGB(0 0 0/14%),0 3px 3px -2px RGB(0 0 0/20%),0 1px 8px 0 RGB(0 0 0/12%)}.container-2nx-BQ[style*="background-color: hsl(178"]{background-color:transparent !important}.container-2nx-BQ[style*="background-color: hsl(178"]::before{content:"";display:inline-block;background-color:var(--accent) !important;opacity:.3;width:32px;height:14px;border-radius:14px;pointer-events:none}.container-2nx-BQ[style*="background-color: hsl(178"] .slider-32CRPX{background-color:var(--accent) !important;box-shadow:0 3px 4px 0 RGB(0 0 0/14%),0 3px 3px -2px RGB(0 0 0/20%),0 1px 8px 0 RGB(0 0 0/12%)}.container-2nx-BQ[style*="background-color: hsl(179"]{background-color:var(--switch-slider-color) !important}.container-2nx-BQ[style*="background-color: hsl(179"] .slider-32CRPX{background-color:var(--switch-knob-color) !important;box-shadow:0 2px 2px 0 RGB(0 0 0/14%),0 3px 1px -2px RGB(0 0 0/20%),0 1px 5px 0 RGB(0 0 0/12%)}.container-2nx-BQ[style*="background-color: hsl(180"]{background-color:var(--switch-slider-color) !important}.container-2nx-BQ[style*="background-color: hsl(180"] .slider-32CRPX{background-color:var(--switch-knob-color) !important;box-shadow:0 2px 2px 0 RGB(0 0 0/14%),0 3px 1px -2px RGB(0 0 0/20%),0 1px 5px 0 RGB(0 0 0/12%)}.container-2nx-BQ[style*="background-color: hsl(181"]{background-color:var(--switch-slider-color) !important}.container-2nx-BQ[style*="background-color: hsl(181"] .slider-32CRPX{background-color:var(--switch-knob-color) !important;box-shadow:0 2px 2px 0 RGB(0 0 0/14%),0 3px 1px -2px RGB(0 0 0/20%),0 1px 5px 0 RGB(0 0 0/12%)}.container-2nx-BQ[style*="background-color: hsl(182"]{background-color:var(--switch-slider-color) !important}.container-2nx-BQ[style*="background-color: hsl(182"] .slider-32CRPX{background-color:var(--switch-knob-color) !important;box-shadow:0 2px 2px 0 RGB(0 0 0/14%),0 3px 1px -2px RGB(0 0 0/20%),0 1px 5px 0 RGB(0 0 0/12%)}.container-2nx-BQ[style*="background-color: hsl(183"]{background-color:var(--switch-slider-color) !important}.container-2nx-BQ[style*="background-color: hsl(183"] .slider-32CRPX{background-color:var(--switch-knob-color) !important;box-shadow:0 2px 2px 0 RGB(0 0 0/14%),0 3px 1px -2px RGB(0 0 0/20%),0 1px 5px 0 RGB(0 0 0/12%)}.container-2nx-BQ[style*="background-color: hsl(184"]{background-color:var(--switch-slider-color) !important}.container-2nx-BQ[style*="background-color: hsl(184"] .slider-32CRPX{background-color:var(--switch-knob-color) !important;box-shadow:0 2px 2px 0 RGB(0 0 0/14%),0 3px 1px -2px RGB(0 0 0/20%),0 1px 5px 0 RGB(0 0 0/12%)}.container-2nx-BQ[style*="background-color: hsl(185"]{background-color:var(--switch-slider-color) !important}.container-2nx-BQ[style*="background-color: hsl(185"] .slider-32CRPX{background-color:var(--switch-knob-color) !important;box-shadow:0 2px 2px 0 RGB(0 0 0/14%),0 3px 1px -2px RGB(0 0 0/20%),0 1px 5px 0 RGB(0 0 0/12%)}.container-2nx-BQ[style*="background-color: hsl(186"]{background-color:var(--switch-slider-color) !important}.container-2nx-BQ[style*="background-color: hsl(186"] .slider-32CRPX{background-color:var(--switch-knob-color) !important;box-shadow:0 2px 2px 0 RGB(0 0 0/14%),0 3px 1px -2px RGB(0 0 0/20%),0 1px 5px 0 RGB(0 0 0/12%)}.container-2nx-BQ[style*="background-color: hsl(187"]{background-color:var(--switch-slider-color) !important}.container-2nx-BQ[style*="background-color: hsl(187"] .slider-32CRPX{background-color:var(--switch-knob-color) !important;box-shadow:0 2px 2px 0 RGB(0 0 0/14%),0 3px 1px -2px RGB(0 0 0/20%),0 1px 5px 0 RGB(0 0 0/12%)}.container-2nx-BQ[style*="background-color: hsl(188"]{background-color:var(--switch-slider-color) !important}.container-2nx-BQ[style*="background-color: hsl(188"] .slider-32CRPX{background-color:var(--switch-knob-color) !important;box-shadow:0 2px 2px 0 RGB(0 0 0/14%),0 3px 1px -2px RGB(0 0 0/20%),0 1px 5px 0 RGB(0 0 0/12%)}.container-2nx-BQ[style*="background-color: hsl(189"]{background-color:var(--switch-slider-color) !important}.container-2nx-BQ[style*="background-color: hsl(189"] .slider-32CRPX{background-color:var(--switch-knob-color) !important;box-shadow:0 2px 2px 0 RGB(0 0 0/14%),0 3px 1px -2px RGB(0 0 0/20%),0 1px 5px 0 RGB(0 0 0/12%)}.container-2nx-BQ[style*="background-color: hsl(190"]{background-color:var(--switch-slider-color) !important}.container-2nx-BQ[style*="background-color: hsl(190"] .slider-32CRPX{background-color:var(--switch-knob-color) !important;box-shadow:0 2px 2px 0 RGB(0 0 0/14%),0 3px 1px -2px RGB(0 0 0/20%),0 1px 5px 0 RGB(0 0 0/12%)}.container-2nx-BQ[style*="background-color: hsl(191"]{background-color:var(--switch-slider-color) !important}.container-2nx-BQ[style*="background-color: hsl(191"] .slider-32CRPX{background-color:var(--switch-knob-color) !important;box-shadow:0 2px 2px 0 RGB(0 0 0/14%),0 3px 1px -2px RGB(0 0 0/20%),0 1px 5px 0 RGB(0 0 0/12%)}.container-2nx-BQ[style*="background-color: hsl(192"]{background-color:var(--switch-slider-color) !important}.container-2nx-BQ[style*="background-color: hsl(192"] .slider-32CRPX{background-color:var(--switch-knob-color) !important;box-shadow:0 2px 2px 0 RGB(0 0 0/14%),0 3px 1px -2px RGB(0 0 0/20%),0 1px 5px 0 RGB(0 0 0/12%)}.container-2nx-BQ[style*="background-color: hsl(193"]{background-color:var(--switch-slider-color) !important}.container-2nx-BQ[style*="background-color: hsl(193"] .slider-32CRPX{background-color:var(--switch-knob-color) !important;box-shadow:0 2px 2px 0 RGB(0 0 0/14%),0 3px 1px -2px RGB(0 0 0/20%),0 1px 5px 0 RGB(0 0 0/12%)}.container-2nx-BQ[style*="background-color: hsl(194"]{background-color:var(--switch-slider-color) !important}.container-2nx-BQ[style*="background-color: hsl(194"] .slider-32CRPX{background-color:var(--switch-knob-color) !important;box-shadow:0 2px 2px 0 RGB(0 0 0/14%),0 3px 1px -2px RGB(0 0 0/20%),0 1px 5px 0 RGB(0 0 0/12%)}.container-2nx-BQ[style*="background-color: hsl(195"]{background-color:var(--switch-slider-color) !important}.container-2nx-BQ[style*="background-color: hsl(195"] .slider-32CRPX{background-color:var(--switch-knob-color) !important;box-shadow:0 2px 2px 0 RGB(0 0 0/14%),0 3px 1px -2px RGB(0 0 0/20%),0 1px 5px 0 RGB(0 0 0/12%)}.container-2nx-BQ[style*="background-color: hsl(196"]{background-color:var(--switch-slider-color) !important}.container-2nx-BQ[style*="background-color: hsl(196"] .slider-32CRPX{background-color:var(--switch-knob-color) !important;box-shadow:0 2px 2px 0 RGB(0 0 0/14%),0 3px 1px -2px RGB(0 0 0/20%),0 1px 5px 0 RGB(0 0 0/12%)}.container-2nx-BQ[style*="background-color: hsl(197"]{background-color:var(--switch-slider-color) !important}.container-2nx-BQ[style*="background-color: hsl(197"] .slider-32CRPX{background-color:var(--switch-knob-color) !important;box-shadow:0 2px 2px 0 RGB(0 0 0/14%),0 3px 1px -2px RGB(0 0 0/20%),0 1px 5px 0 RGB(0 0 0/12%)}.container-2nx-BQ[style*="background-color: hsl(198"]{background-color:var(--switch-slider-color) !important}.container-2nx-BQ[style*="background-color: hsl(198"] .slider-32CRPX{background-color:var(--switch-knob-color) !important;box-shadow:0 2px 2px 0 RGB(0 0 0/14%),0 3px 1px -2px RGB(0 0 0/20%),0 1px 5px 0 RGB(0 0 0/12%)}.container-2nx-BQ[style*="background-color: hsl(199"]{background-color:var(--switch-slider-color) !important}.container-2nx-BQ[style*="background-color: hsl(199"] .slider-32CRPX{background-color:var(--switch-knob-color) !important;box-shadow:0 2px 2px 0 RGB(0 0 0/14%),0 3px 1px -2px RGB(0 0 0/20%),0 1px 5px 0 RGB(0 0 0/12%)}.container-2nx-BQ[style*="background-color: hsl(200"]{background-color:var(--switch-slider-color) !important}.container-2nx-BQ[style*="background-color: hsl(200"] .slider-32CRPX{background-color:var(--switch-knob-color) !important;box-shadow:0 2px 2px 0 RGB(0 0 0/14%),0 3px 1px -2px RGB(0 0 0/20%),0 1px 5px 0 RGB(0 0 0/12%)}.container-2nx-BQ[style*="background-color: hsl(201"]{background-color:var(--switch-slider-color) !important}.container-2nx-BQ[style*="background-color: hsl(201"] .slider-32CRPX{background-color:var(--switch-knob-color) !important;box-shadow:0 2px 2px 0 RGB(0 0 0/14%),0 3px 1px -2px RGB(0 0 0/20%),0 1px 5px 0 RGB(0 0 0/12%)}.container-2nx-BQ[style*="background-color: hsl(202"]{background-color:var(--switch-slider-color) !important}.container-2nx-BQ[style*="background-color: hsl(202"] .slider-32CRPX{background-color:var(--switch-knob-color) !important;box-shadow:0 2px 2px 0 RGB(0 0 0/14%),0 3px 1px -2px RGB(0 0 0/20%),0 1px 5px 0 RGB(0 0 0/12%)}.container-2nx-BQ[style*="background-color: hsl(203"]{background-color:var(--switch-slider-color) !important}.container-2nx-BQ[style*="background-color: hsl(203"] .slider-32CRPX{background-color:var(--switch-knob-color) !important;box-shadow:0 2px 2px 0 RGB(0 0 0/14%),0 3px 1px -2px RGB(0 0 0/20%),0 1px 5px 0 RGB(0 0 0/12%)}.container-2nx-BQ[style*="background-color: hsl(204"]{background-color:var(--switch-slider-color) !important}.container-2nx-BQ[style*="background-color: hsl(204"] .slider-32CRPX{background-color:var(--switch-knob-color) !important;box-shadow:0 2px 2px 0 RGB(0 0 0/14%),0 3px 1px -2px RGB(0 0 0/20%),0 1px 5px 0 RGB(0 0 0/12%)}.container-2nx-BQ[style*="background-color: hsl(205"]{background-color:var(--switch-slider-color) !important}.container-2nx-BQ[style*="background-color: hsl(205"] .slider-32CRPX{background-color:var(--switch-knob-color) !important;box-shadow:0 2px 2px 0 RGB(0 0 0/14%),0 3px 1px -2px RGB(0 0 0/20%),0 1px 5px 0 RGB(0 0 0/12%)}.container-2nx-BQ[style*="background-color: hsl(206"]{background-color:var(--switch-slider-color) !important}.container-2nx-BQ[style*="background-color: hsl(206"] .slider-32CRPX{background-color:var(--switch-knob-color) !important;box-shadow:0 2px 2px 0 RGB(0 0 0/14%),0 3px 1px -2px RGB(0 0 0/20%),0 1px 5px 0 RGB(0 0 0/12%)}.container-2nx-BQ[style*="background-color: hsl(207"]{background-color:var(--switch-slider-color) !important}.container-2nx-BQ[style*="background-color: hsl(207"] .slider-32CRPX{background-color:var(--switch-knob-color) !important;box-shadow:0 2px 2px 0 RGB(0 0 0/14%),0 3px 1px -2px RGB(0 0 0/20%),0 1px 5px 0 RGB(0 0 0/12%)}.container-2nx-BQ[style*="background-color: hsl(208"]{background-color:var(--switch-slider-color) !important}.container-2nx-BQ[style*="background-color: hsl(208"] .slider-32CRPX{background-color:var(--switch-knob-color) !important;box-shadow:0 2px 2px 0 RGB(0 0 0/14%),0 3px 1px -2px RGB(0 0 0/20%),0 1px 5px 0 RGB(0 0 0/12%)}.container-2nx-BQ[style*="background-color: hsl(209"]{background-color:var(--switch-slider-color) !important}.container-2nx-BQ[style*="background-color: hsl(209"] .slider-32CRPX{background-color:var(--switch-knob-color) !important;box-shadow:0 2px 2px 0 RGB(0 0 0/14%),0 3px 1px -2px RGB(0 0 0/20%),0 1px 5px 0 RGB(0 0 0/12%)}.container-2nx-BQ[style*="background-color: hsl(210"]{background-color:var(--switch-slider-color) !important}.container-2nx-BQ[style*="background-color: hsl(210"] .slider-32CRPX{background-color:var(--switch-knob-color) !important;box-shadow:0 2px 2px 0 RGB(0 0 0/14%),0 3px 1px -2px RGB(0 0 0/20%),0 1px 5px 0 RGB(0 0 0/12%)}.container-2nx-BQ[style*="background-color: hsl(211"]{background-color:var(--switch-slider-color) !important}.container-2nx-BQ[style*="background-color: hsl(211"] .slider-32CRPX{background-color:var(--switch-knob-color) !important;box-shadow:0 2px 2px 0 RGB(0 0 0/14%),0 3px 1px -2px RGB(0 0 0/20%),0 1px 5px 0 RGB(0 0 0/12%)}.container-2nx-BQ[style*="background-color: hsl(212"]{background-color:var(--switch-slider-color) !important}.container-2nx-BQ[style*="background-color: hsl(212"] .slider-32CRPX{background-color:var(--switch-knob-color) !important;box-shadow:0 2px 2px 0 RGB(0 0 0/14%),0 3px 1px -2px RGB(0 0 0/20%),0 1px 5px 0 RGB(0 0 0/12%)}.container-2nx-BQ[style*="background-color: hsl(213"]{background-color:var(--switch-slider-color) !important}.container-2nx-BQ[style*="background-color: hsl(213"] .slider-32CRPX{background-color:var(--switch-knob-color) !important;box-shadow:0 2px 2px 0 RGB(0 0 0/14%),0 3px 1px -2px RGB(0 0 0/20%),0 1px 5px 0 RGB(0 0 0/12%)}.container-2nx-BQ[style*="background-color: hsl(214"]{background-color:var(--switch-slider-color) !important}.container-2nx-BQ[style*="background-color: hsl(214"] .slider-32CRPX{background-color:var(--switch-knob-color) !important;box-shadow:0 2px 2px 0 RGB(0 0 0/14%),0 3px 1px -2px RGB(0 0 0/20%),0 1px 5px 0 RGB(0 0 0/12%)}.container-2nx-BQ[style*="background-color: hsl(215"]{background-color:var(--switch-slider-color) !important}.container-2nx-BQ[style*="background-color: hsl(215"] .slider-32CRPX{background-color:var(--switch-knob-color) !important;box-shadow:0 2px 2px 0 RGB(0 0 0/14%),0 3px 1px -2px RGB(0 0 0/20%),0 1px 5px 0 RGB(0 0 0/12%)}.container-2nx-BQ[style*="background-color: hsl(216"]{background-color:var(--switch-slider-color) !important}.container-2nx-BQ[style*="background-color: hsl(216"] .slider-32CRPX{background-color:var(--switch-knob-color) !important;box-shadow:0 2px 2px 0 RGB(0 0 0/14%),0 3px 1px -2px RGB(0 0 0/20%),0 1px 5px 0 RGB(0 0 0/12%)}.container-2nx-BQ[style*="background-color: hsl(217"]{background-color:var(--switch-slider-color) !important}.container-2nx-BQ[style*="background-color: hsl(217"] .slider-32CRPX{background-color:var(--switch-knob-color) !important;box-shadow:0 2px 2px 0 RGB(0 0 0/14%),0 3px 1px -2px RGB(0 0 0/20%),0 1px 5px 0 RGB(0 0 0/12%)}.container-2nx-BQ[style*="background-color: hsl(218"]{background-color:var(--switch-slider-color) !important}.container-2nx-BQ[style*="background-color: hsl(218"] .slider-32CRPX{background-color:var(--switch-knob-color) !important;box-shadow:0 2px 2px 0 RGB(0 0 0/14%),0 3px 1px -2px RGB(0 0 0/20%),0 1px 5px 0 RGB(0 0 0/12%)}.container-2nx-BQ .slider-32CRPX{width:20px;height:20px;top:-3px;margin:0;border-radius:50%;box-shadow:var(--shadow-2dp)}.container-2nx-BQ .slider-32CRPX rect,.container-2nx-BQ .slider-32CRPX svg{display:none}.container-2nx-BQ::after{transition:background-size .3s cubic-bezier(0, 0, 0.2, 1),opacity .6s cubic-bezier(0, 0, 0.2, 1);opacity:0;background-size:100%;background-image:radial-gradient(circle at calc(var(--clickX) + 50%) calc(var(--clickY) + 50%), var(--accent-highlight) 24%, transparent 25%, transparent 100%);background-repeat:no-repeat;background-position:50% 50%;background-attachment:local;background-clip:padding-box;object-fit:contain;content:"";pointer-events:none;position:absolute;width:256px;height:256px;top:-119px;left:-113px}.container-2nx-BQ:not(:active)::after{transition:0s;opacity:.3;background-size:0%}.container-2nx-BQ input#uid_4214.input-2XRLou{left:0}.menu-1QACrS{transition:opacity .2s cubic-bezier(0.4, 0, 0.2, 1),clip .3s cubic-bezier(0.4, 0, 0.2, 1)}.theme-light .menu-1QACrS{background-color:var(--card-8-bg);box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0,0,0,.12)}.theme-dark .menu-1QACrS{background-color:var(--card-8-bg)}.tooltipContent-Nejnvh{background-color:var(--tooltip-bg);border-radius:2px;padding:8px;line-height:14px;font-weight:500;color:var(--tooltip-text)}.theme-dark .tooltipPrimary-3qLMbS .tooltipPointer-3L49xb,.theme-light .tooltipPrimary-3qLMbS .tooltipPointer-3L49xb{border-top-color:var(--tooltip-bg)}.theme-dark .tooltipPrimary-3qLMbS,.theme-light .tooltipPrimary-3qLMbS{background-color:transparent}.guildNameText-74xXQn,.guildNameText-jBFbNC{color:var(--tooltip-text);font-weight:600}.theme-dark .tooltipGreen-oouJdx .tooltipContent-Nejnvh,.theme-light .tooltipGreen-oouJdx .tooltipContent-Nejnvh{background-color:var(--online)}.theme-dark .tooltipGreen-oouJdx .tooltipPointer-3L49xb,.theme-light .tooltipGreen-oouJdx .tooltipPointer-3L49xb{border-top-color:var(--online)}.theme-dark .tooltipRed-2z14Wl .tooltipContent-Nejnvh,.theme-light .tooltipRed-2z14Wl .tooltipContent-Nejnvh{background-color:var(--danger)}.theme-dark .tooltipRed-2z14Wl .tooltipPointer-3L49xb,.theme-light .tooltipRed-2z14Wl .tooltipPointer-3L49xb{border-top-color:var(--danger)}.container-1SX9VC,.inner-2pOSmK,.bd-search-wrapper,.inputWrapper-1YNMmM,.searchBar-zdmu7v,.searchBar-1YE5UV,.searchBar-2M9mRP,.searchBar-gJe8lY,.searchBar-1UNSCg,.searchBox-pyIJJj,.wrapper-1cBijl,.gameName-Uw4dbt,.phoneField-3NAPDv,.popoutListInput-1w4TxY,.searchBar-14YqL- .searchBarComponent-18D6hD,.searchContainer-2kJ46v,.container-2oNtJn.medium-2NClDM{position:relative;border-radius:0}.container-1SX9VC:after,.inner-2pOSmK:after,.bd-search-wrapper:after,.inputWrapper-1YNMmM:after,.searchBar-zdmu7v:after,.searchBar-1YE5UV:after,.searchBar-2M9mRP:after,.searchBar-gJe8lY:after,.searchBar-1UNSCg:after,.searchBox-pyIJJj:after,.wrapper-1cBijl:after,.gameName-Uw4dbt:after,.phoneField-3NAPDv:after,.popoutListInput-1w4TxY:after,.searchBar-14YqL- .searchBarComponent-18D6hD:after,.searchContainer-2kJ46v:after,.container-2oNtJn.medium-2NClDM:after{background-color:var(--accent);bottom:0;content:"";height:2px;position:absolute;left:calc(50% - 5px);transition-duration:.2s;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);visibility:hidden;width:10px}.container-1SX9VC:focus-within::after,.inner-2pOSmK:focus-within::after,.bd-search-wrapper:focus-within::after,.inputWrapper-1YNMmM:focus-within::after,.searchBar-zdmu7v:focus-within::after,.searchBar-1YE5UV:focus-within::after,.searchBar-2M9mRP:focus-within::after,.searchBar-gJe8lY:focus-within::after,.searchBar-1UNSCg:focus-within::after,.searchBox-pyIJJj:focus-within::after,.wrapper-1cBijl:focus-within::after,.gameName-Uw4dbt:focus-within::after,.phoneField-3NAPDv:focus-within::after,.popoutListInput-1w4TxY:focus-within::after,.searchBar-14YqL- .searchBarComponent-18D6hD:focus-within::after,.searchContainer-2kJ46v:focus-within::after,.container-2oNtJn.medium-2NClDM:focus-within::after{left:calc(0px);visibility:visible;width:100%}.slateTextArea-27tjG0{border-radius:0}.slateTextArea-27tjG0:after{background-color:var(--accent);bottom:0;content:"";height:2px;position:absolute;left:calc((100% + 90px) / 2 - 50px);transition-duration:.2s;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);visibility:hidden;width:10px}.slateTextArea-27tjG0:focus-within::after{left:-56px;visibility:visible;width:calc(100% + 90px)}.container-1SX9VC,.bd-search-wrapper,.scrollableContainer-15eg7h,.input-2g-os5,.searchBar-zdmu7v,.searchBar-1YE5UV,.searchBar-2M9mRP,.searchBar-gJe8lY,.wrapper-1cBijl,.container-2oNtJn,.searchBox-pyIJJj .inputWrapper-1YNMmM::after,.searchBar-3TnChZ .searchBarComponent-3N7dCG,.channelTextArea-1FufC0,.searchPage-3tt6dh .search-25t1e9 .searchBox-31Zv9h,.searchBar-14YqL- .searchBarComponent-18D6hD{background-color:transparent}.wrapper-1cBijl,.input-2g-os5,.input-2g-os5.focused-1AtTHC,.input-2g-os5:focus,.input-2g-os5:hover,.input-2g-os5.disabled-1MTS26,.theme-light .gameNameInput-3TuPuA:focus,.theme-light .gameNameInput-3TuPuA:hover,.theme-dark .gameNameInput-3TuPuA:focus,.theme-dark .gameNameInput-3TuPuA:hover,.searchPage-3tt6dh .search-25t1e9 .searchBox-31Zv9h:focus,.searchPage-3tt6dh .search-25t1e9 .searchBox-31Zv9h:focus-within{border-color:transparent}.search-25t1e9 .searchBox-31Zv9h:focus,.search-25t1e9 .searchBox-31Zv9h:focus-within,.theme-light .elevationLow-26BbEG,.theme-dark .elevationLow-26BbEG{-webkit-box-shadow:none;box-shadow:none;border-color:transparent}.libraryFilter-1nwg6T{transition:.25s}.search-25t1e9 .searchBox-31Zv9h,.scrollableContainer-15eg7h{border-radius:0}.searchBox-31Zv9h .size12-oc4dx4{font-weight:var(--header-weight)}.barFill-2Bh7CX{background-color:var(--accent)}.mini-2qY9iv .grabber-2GQyvM,.grabber-2GQyvM{width:12px;height:12px;border-radius:50%;background-color:var(--accent);border-color:transparent;transition:transform .18s cubic-bezier(0.4, 0, 0.2, 1),border .18s cubic-bezier(0.4, 0, 0.2, 1),box-shadow .18s cubic-bezier(0.4, 0, 0.2, 1),background .28s cubic-bezier(0.4, 0, 0.2, 1);margin-top:1px}.mini-2qY9iv .grabber-2GQyvM:active,.grabber-2GQyvM:active{transform:scale(1.5);background-color:var(--accent-highlight)}.bar-1Bhnl9,.mini-2qY9iv .bar-1Bhnl9{height:2px;border-radius:0}.grabber-2GQyvM{margin-top:-10px}.botTagRegular-kpctgU,.role-2TIOKu,.role-23oyrw,.akaBadge-3i7V3p{background:var(--chip);color:var(--chip-text);border:none;z-index:1}.px-MnE_OR.botTag-7aX5WZ,.role-2TIOKu,.role-23oyrw,.botTagRegular-kpctgU,.akaBadge-3i7V3p{height:var(--chip-height);line-height:var(--chip-height);border-radius:calc(var(--chip-height) * 0.5);padding:0 calc(var(--chip-height) * 0.5)}.nameAndDecorators-3ERwy2 .px-MnE_OR.botTag-7aX5WZ,.nameAndDecorators-3ERwy2 .role-2TIOKu,.nameAndDecorators-3ERwy2 .role-23oyrw,.nameAndDecorators-3ERwy2 .botTagRegular-kpctgU,.nameAndDecorators-3ERwy2 .akaBadge-3i7V3p{height:.9375rem;line-height:.9375rem;border-radius:.46875rem;padding:0 .46875rem}.headerTagNoNickname-3tGHj6 .px-MnE_OR.botTag-7aX5WZ,.headerTagNoNickname-3tGHj6 .role-2TIOKu,.headerTagNoNickname-3tGHj6 .role-23oyrw,.headerTagNoNickname-3tGHj6 .botTagRegular-kpctgU,.headerTagNoNickname-3tGHj6 .akaBadge-3i7V3p{margin-top:0 !important}.rem-3kT9wc.botTag-7aX5WZ{height:.9375rem;line-height:.9375rem;border-radius:.46875rem;padding:0 .46875rem}.cozy-VmLDNB .headerText-2z4IhQ .rem-3kT9wc.botTag-7aX5WZ{height:var(--chip-height);line-height:var(--chip-height);border-radius:calc(var(--chip-height) * 0.5);padding:0 calc(var(--chip-height) * 0.5)}.cozy-VmLDNB .username-h_Y3Us:not(:only-child){height:var(--chip-height);display:inline-block;line-height:var(--chip-height)}.roleColor-3cA0as,.roleCircle-1EgnFN{overflow:visible;width:var(--chip-height);height:var(--chip-height);margin-left:calc(var(--chip-height) * -0.5)}.roleRemoveIcon-387wKV{width:var(--chip-height);height:var(--chip-height);display:block;opacity:0;cursor:pointer;transition:opacity 140ms ease-in-out}.roleRemoveIcon-387wKV path[d="M18.4 4L12 10.4L5.6 4L4 5.6L10.4 12L4 18.4L5.6 20L12 13.6L18.4 20L20 18.4L13.6 12L20 5.6L18.4 4Z"]{d:path("M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z");fill:rgba(0,0,0,.87)}.roleRemoveIcon-387wKV:hover{opacity:1}.theme-light .actionButton-1YKTU0,.theme-dark .actionButton-1YKTU0{padding:0}.role-1adzi2:hover{background:var(--chip)}.addButton-1_dZYu{background-color:transparent;color:var(--chip)}.addButton-1_dZYu:hover{color:var(--chip-active)}.badgesChat-f_cbR8{top:-4px}.message-2CShn3 .ownerIcon-255uKo.icon-1dGlZy{top:-5px}.role-2TIOKu{position:relative;overflow:hidden}.role-2TIOKu::after{transition:transform .3s cubic-bezier(0, 0, 0.2, 1),width .3s cubic-bezier(0, 0, 0.2, 1),height .3s cubic-bezier(0, 0, 0.2, 1),opacity .6s cubic-bezier(0, 0, 0.2, 1);content:"";opacity:0;pointer-events:none;position:absolute;width:100%;height:100%;top:calc(0px + var(--clickY));left:calc(0px + var(--clickX));transform:scale(5);background:radial-gradient(circle at center, var(--ripple-default) 24%, transparent 25%, transparent 100%)}.role-2TIOKu:not(:active)::after{transition:0s;opacity:.3;transform:scale(0)}.tabBarContainer-1s1u-z{border-top:none}.tabBarItem-1b8RUP[aria-selected=false][style*="color: rgba(255, 255, 255, 0."]{color:#cacaca !important}.top-K_jibn .selected-g-kMVV.themed-2-lozF.item-3XjbnG,.top-K_jibn .selected-g-kMVV.themed-2-lozF.item-3XjbnG:hover,.top-K_jibn .themed-2-lozF.item-3XjbnG:active{border-color:var(--accent)}.top-K_jibn .themed-2-lozF.item-3XjbnG:hover{border-color:var(--accent-highlight)}.checkbox-f1HnKB svg{position:absolute;width:7.2px;height:14px;border-style:solid;border-top:none;border-left:none;border-right-width:calc(2/15 * var(--checkbox-size));border-bottom-width:calc(2/15 * var(--checkbox-size));border-color:var(--checkmark-color, white);transform-origin:9.4px 7.2px;box-sizing:content-box;transition:140ms;transform:scale(0, 0) rotate(0deg)}.checkbox-f1HnKB.checked-1pZh2h svg{transform:scale(1, 1) rotate(45deg)}.checkbox-f1HnKB path{d:path("") !important}.checkbox-f1HnKB.checked-1pZh2h{border-color:var(--accent) !important;background-color:var(--accent) !important}.checkbox-f1HnKB{-webkit-transition:background-color 140ms,border-color 140ms;transition:background-color 140ms,border-color 140ms;-webkit-transition-duration:var(--animation-duration, 140ms);transition-duration:var(--animation-duration, 140ms);overflow:hidden}.checkbox-f1HnKB::after{transition:transform .3s cubic-bezier(0, 0, 0.2, 1),width .3s cubic-bezier(0, 0, 0.2, 1),height .3s cubic-bezier(0, 0, 0.2, 1),opacity .6s cubic-bezier(0, 0, 0.2, 1);content:"";opacity:0;pointer-events:none;position:absolute;width:256px;height:256px;top:calc(-119px + var(--clickY));left:calc(-113px + var(--clickX));transform:scale(1);background:radial-gradient(circle at center, var(--accent-highlight) 24%, transparent 25%, transparent 100%)}.checkbox-f1HnKB:not(.checked-1pZh2h)::after{transition:0s;opacity:.3;transform:scale(0)}@-webkit-keyframes checkmark-expand{0%{-webkit-transform:scale(0, 0) rotate(45deg)}100%{-webkit-transform:scale(1, 1) rotate(45deg)}}@keyframes checkmark-expand{0%{transform:scale(0, 0) rotate(45deg)}100%{transform:scale(1, 1) rotate(45deg)}}.radioIconForeground-2BMavi{color:transparent}div[role=radiogroup] .item-2idW98[aria-checked=true] .radioBar-3w9XY->div:first-child{position:relative}div[role=radiogroup] .item-2idW98[aria-checked=true] .radioBar-3w9XY->div:first-child::after{transform:scale(1)}div[role=radiogroup] .item-2idW98[aria-checked=true] .radioBar-3w9XY- svg{color:var(--accent)}div[role=radiogroup] .item-2idW98{margin-bottom:0;position:relative}div[role=radiogroup] .item-2idW98 .radioBar-3w9XY->div:first-child{position:relative;display:inline-block;width:24px;height:24px}div[role=radiogroup] .item-2idW98 .radioBar-3w9XY->div:first-child::after{display:inline-block;position:absolute;content:"";left:calc(50% - 5px);top:calc(50% - 5px);width:10px;height:10px;background-color:var(--accent);border-radius:50%;transform:scale(0);transition-duration:.28s;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-property:transform;transition-property:transform,-webkit-transform}div[role=radiogroup] .item-2idW98 .radioBar-3w9XY-{border-left:none}div[role=radiogroup] .item-2idW98 .radioBar-3w9XY- .title-1yyp9V{color:var(--radio-bar-accent-color)}.item-2idW98[aria-checked=true],.item-2idW98,.item-2idW98:hover:not([aria-checked=true]){background-color:transparent}.radioBar-3w9XY-[style*="padding: 10px 10px 0 10px;"]{padding:10px 10px 0 10px !important}.colorDefault-CDqZdO[aria-checked=true] .icon-E4cW1l{color:var(--accent)}.colorDefault-CDqZdO[aria-checked=true].focused-3qFvc8 .icon-E4cW1l{color:var(--accent-text)}.sidebar-1tnWFu .container-1NXEtd{background-color:var(--navdrawer-color)}.clickable-28SzVr:hover .layout-1qmrhw{background-color:var(--navdrawer-hover)}.clickable-28SzVr:active .layout-1qmrhw,.selected-1-Z6gm .layout-1qmrhw{background-color:var(--accent-selected-highlight);color:var(--accent)}.modeSelected-3DmyhH .content-1gYQeQ,.modeSelected-3DmyhH:hover .content-1gYQeQ{background-color:var(--accent-selected-highlight)}.modeSelected-3DmyhH .content-1gYQeQ .actionIcon-2sw4Sl,.modeSelected-3DmyhH:hover .content-1gYQeQ .actionIcon-2sw4Sl{color:var(--accent)}.wrapper-NhbLHG:hover .icon-2W8DHg{color:var(--interactive-hover)}.scroller-WSmht3 .container-36u7Lw:not(:first-child)::before,.scroller-1ox3I2 .containerDefault-3TQ5YN:not(:nth-child(2))::before{content:"";height:1px;width:100%;background-color:var(--navdrawer-separator);position:absolute;margin-top:-8px;left:0}.content-1gYQeQ,.channel-1Shao0,.layout-1qmrhw{margin-left:0;border-radius:0}.content-1gYQeQ,.layout-1qmrhw{padding-left:16px}.container-36u7Lw,.wrapper-1S43wv{color:var(--title-color)}.modeSelected-3DmyhH .icon-2W8DHg,.modeSelected-3DmyhH:hover .icon-2W8DHg{color:var(--accent)}.icon-2W8DHg{color:var(--channels-default)}.modeUnread-3Cxepe .icon-2W8DHg,.modeUnread-3Cxepe:hover .icon-2W8DHg{color:var(--list-color)}.container-1oeRFJ,.wrapper-NhbLHG{padding:0}.layout-1qmrhw{height:44px}.content-1gYQeQ{padding-top:1px;padding-bottom:1px}.listRow-hutiT_{margin:0;padding:5px 8px 5px 16px}.listRow-hutiT_,.container-1oeRFJ{border-radius:0}.markup-eYLPri code{padding:24px 24px 24px 12px;border-radius:8px;border-color:var(--navdrawer-separator);background-color:var(--baseline)}.powercord-codeblock-lang{font-family:var(--font-header)}.powercord-codeblock-copy-btn{color:var(--channels-default);font-family:var(--font-header)}.theme-dark .powercord-codeblock-copy-btn{font-weight:800}.powercord-codeblock-table td:first-child,.powercord-codeblock-lang{border-color:var(--navdrawer-separator)}.textContainer-36wgKK,.modalTextContainer-1FUO2W{padding:24px 24px 12px 24px;border-radius:8px 8px 0 0;border-color:var(--navdrawer-separator);background-color:var(--baseline)}.footer-GXWBBp{padding:0 24px;border-radius:0 0 8px 8px;border-color:var(--navdrawer-separator);background-color:var(--baseline)}.codeView-12LUIl::-webkit-scrollbar-track,.modalTextContainer-1FUO2W::-webkit-scrollbar-track{background-color:var(--baseline)}.theme-light .codeView-12LUIl::-webkit-scrollbar-thumb,.theme-light .modalTextContainer-1FUO2W::-webkit-scrollbar-thumb{background-color:#dfdfdf}.theme-dark .codeView-12LUIl::-webkit-scrollbar-thumb,.theme-dark .modalTextContainer-1FUO2W::-webkit-scrollbar-thumb{background-color:var(--navdrawer-separator)}.formattedSize-1YbZww{font-weight:500;font-size:12.5px}.theme-light .formattedSize-1YbZww{color:#b7b7b7}.theme-dark .formattedSize-1YbZww{font-weight:700;color:#777}.theme-light .powercord-keybind,.theme-light .container-30qY7E{background-color:var(--card-4-bg);box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0,0,0,.12)}.theme-dark .powercord-keybind,.theme-dark .container-30qY7E{background-color:var(--card-4-bg)}.powercord-keybind-input{color:var(--header-primary) !important}.powercord-keybind-button{background:var(--background-modifier-selected) !important}.separator-2wx7h6,.divider-3LgWDL,.powercord-settings-item.powercord-category .powercord-settings-item-inner{border-color:var(--navdrawer-separator) !important}.popout-1KHNAq[role=listbox],.css-3vaxre-menu,.css-1x99fvh-menu{border-radius:4px;transform-origin:top;animation:pixelcord-spawn-anim .15s ease-in-out}.theme-light .popout-1KHNAq[role=listbox],.theme-light .css-3vaxre-menu,.theme-light .css-1x99fvh-menu{background-color:var(--card-4-bg);box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0,0,0,.12)}.theme-dark .popout-1KHNAq[role=listbox],.theme-dark .css-3vaxre-menu,.theme-dark .css-1x99fvh-menu{background-color:var(--card-4-bg)}.lookFilled-1GseHa.select-1Ia3hD.open-1FRZsK,.dropdown-2fxkrS .select-1Ia3hD.open-1FRZsK,.css-1ou54ee-control,.css-1ou54ee-control:hover,.css-6fzn47-control:hover,.css-6fzn47-control{position:relative;border-radius:4px;background-color:transparent;border:2px solid var(--accent);transition:border .1s ease-in}.lookFilled-1GseHa.select-1Ia3hD.open-1FRZsK .css-ku6vh5-indicatorContainer svg,.lookFilled-1GseHa.select-1Ia3hD.open-1FRZsK .css-myto3z-indicatorContainer svg,.dropdown-2fxkrS .select-1Ia3hD.open-1FRZsK .css-ku6vh5-indicatorContainer svg,.dropdown-2fxkrS .select-1Ia3hD.open-1FRZsK .css-myto3z-indicatorContainer svg,.css-1ou54ee-control .css-ku6vh5-indicatorContainer svg,.css-1ou54ee-control .css-myto3z-indicatorContainer svg,.css-1ou54ee-control:hover .css-ku6vh5-indicatorContainer svg,.css-1ou54ee-control:hover .css-myto3z-indicatorContainer svg,.css-6fzn47-control:hover .css-ku6vh5-indicatorContainer svg,.css-6fzn47-control:hover .css-myto3z-indicatorContainer svg,.css-6fzn47-control .css-ku6vh5-indicatorContainer svg,.css-6fzn47-control .css-myto3z-indicatorContainer svg{transform:rotate(180deg)}.css-4h5swf-singleValue,.css-1yg49vj-singleValue{position:absolute;left:8px}.select-1Ia3hD .icons-2dXYop,.css-ku6vh5-indicatorContainer svg,.css-myto3z-indicatorContainer svg{transform:rotate(0);transition:color 150ms ease 0s,transform 150ms ease 0s}.select-1Ia3hD.open-1FRZsK .icons-2dXYop{transform:rotate(180deg)}.select-1Ia3hD.open-1FRZsK .icons-2dXYop path[d="M7.41 16.0001L12 11.4201L16.59 16.0001L18 14.5901L12 8.59006L6 14.5901L7.41 16.0001Z"]{d:path("M16.59 8.59003L12 13.17L7.41 8.59003L6 10L12 16L18 10L16.59 8.59003Z")}.lookFilled-1GseHa.select-1Ia3hD,.lookFilled-1GseHa.select-1Ia3hD .dropdown-2fxkrS .select-1Ia3hD[aria-expanded=false],.css-x3hllb-control,.css-17e1tep-control,.css-gvi9bl-control{position:relative;border-radius:4px;background-color:transparent;border:1px solid var(--combobox-outline);transition:border .1s ease-in}.theme-light .theme-light .quickSelectPopout-2F0PXw,.theme-light .theme-dark .quickSelectPopout-2F0PXw{background-color:var(--card-4-bg);box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0,0,0,.12)}.theme-dark .theme-light .quickSelectPopout-2F0PXw,.theme-dark .theme-dark .quickSelectPopout-2F0PXw{background-color:var(--card-4-bg)}.search-1FM8Qc:not(.open-3y3yI_) .searchBar-zdmu7v{width:27px;transition:.25s;background-color:transparent}.search-1FM8Qc:not(.open-3y3yI_):hover .searchBar-zdmu7v{width:240px;transition:.25s;background-color:transparent}.search-1FM8Qc:not(.open-3y3yI_) .iconContainer-1RqWJj{transform:scale(1.2);transition:.25s}.search-1FM8Qc:not(.open-3y3yI_):hover .iconContainer-1RqWJj{transform:scale(1);transition:.25s}.icon-18rqoe{color:var(--interactive-normal)}.container-1qIct8{z-index:1}.container-1qIct8.unread-XRkyaQ{z-index:2}.container-YkUktl{position:relative}.panels-3wFtMD>.container-YkUktl>.flex-2S1XBF{position:absolute;flex-direction:column;bottom:var(--settings-padding);right:var(--settings-padding);z-index:12;padding:5px;border-radius:4px;max-height:32px;transition:max-height .2s ease-in-out,box-shadow .3s ease;box-shadow:none}.panels-3wFtMD>.container-YkUktl>.flex-2S1XBF:hover{max-height:500px}.theme-light .panels-3wFtMD>.container-YkUktl>.flex-2S1XBF:hover{background-color:var(--card-4-bg);box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0,0,0,.12)}.theme-dark .panels-3wFtMD>.container-YkUktl>.flex-2S1XBF:hover{background-color:var(--card-4-bg)}.panels-3wFtMD>.container-YkUktl>.flex-2S1XBF>:not(:last-child){height:0;opacity:0;transition:opacity .2s linear,height .2s ease-in-out}.panels-3wFtMD>.container-YkUktl>.flex-2S1XBF:hover>:not(:last-child){height:32px;opacity:1}.nameTag-sc-gpq{margin-right:25px}.layer-2aCOJ3.disabledPointerEvents-2AmYRc[style*="bottom: 54"][style^="position: absolute; left: 2"] .tooltip-14MtrL.tooltipTop-1wv5UJ.tooltipPrimary-3qLMbS.tooltipDisablePointerEvents-1huO19,.layer-2aCOJ3.disabledPointerEvents-2AmYRc[style*="bottom: 86"][style^="position: absolute; left: 2"] .tooltip-14MtrL.tooltipTop-1wv5UJ.tooltipPrimary-3qLMbS.tooltipDisablePointerEvents-1huO19,.layer-2aCOJ3.disabledPointerEvents-2AmYRc[style*="bottom: 118"][style^="position: absolute; left: 3"] .tooltip-14MtrL.tooltipTop-1wv5UJ.tooltipPrimary-3qLMbS.tooltipDisablePointerEvents-1huO19,.layer-2aCOJ3.disabledPointerEvents-2AmYRc[style*="bottom: 150"][style^="position: absolute; left: 2"] .tooltip-14MtrL.tooltipTop-1wv5UJ.tooltipPrimary-3qLMbS.tooltipDisablePointerEvents-1huO19{transform:translate(calc(-50% - 30px), 40px) !important}.layer-2aCOJ3.disabledPointerEvents-2AmYRc[style*="bottom: 54"][style^="position: absolute; left: 2"] .tooltip-14MtrL.tooltipTop-1wv5UJ.tooltipPrimary-3qLMbS.tooltipDisablePointerEvents-1huO19 .tooltipPointer-3L49xb,.layer-2aCOJ3.disabledPointerEvents-2AmYRc[style*="bottom: 86"][style^="position: absolute; left: 2"] .tooltip-14MtrL.tooltipTop-1wv5UJ.tooltipPrimary-3qLMbS.tooltipDisablePointerEvents-1huO19 .tooltipPointer-3L49xb,.layer-2aCOJ3.disabledPointerEvents-2AmYRc[style*="bottom: 118"][style^="position: absolute; left: 3"] .tooltip-14MtrL.tooltipTop-1wv5UJ.tooltipPrimary-3qLMbS.tooltipDisablePointerEvents-1huO19 .tooltipPointer-3L49xb,.layer-2aCOJ3.disabledPointerEvents-2AmYRc[style*="bottom: 150"][style^="position: absolute; left: 2"] .tooltip-14MtrL.tooltipTop-1wv5UJ.tooltipPrimary-3qLMbS.tooltipDisablePointerEvents-1huO19 .tooltipPointer-3L49xb{margin-left:-1px;left:unset;margin-top:-5px;left:100%;top:50%;border-right-width:5px;-webkit-transform:rotate(270deg);transform:rotate(270deg)}.actions-zk2vB_,.connection-3k9QeF{margin-right:var(--settings-padding)}.panels-3wFtMD{z-index:3}.jumpToPresentBar-1cEnH0{visibility:hidden;bottom:15px}.newMessagesBar-1hF-9G{visibility:hidden;top:15px}.barButtonBase-Sk2mdB{height:42px}.barButtonBase-Sk2mdB::after{transition:background-size .3s cubic-bezier(0, 0, 0.2, 1),opacity .6s cubic-bezier(0, 0, 0.2, 1);opacity:0;background-size:500%;background-image:radial-gradient(circle at calc(var(--clickX) + 50%) calc(var(--clickY) + 50%), var(--accent-highlight) 24%, transparent 25%, transparent 100%);background-repeat:no-repeat;background-position:50% 50%;background-attachment:local;background-clip:padding-box;object-fit:contain;content:"";pointer-events:none;position:absolute;width:64px;height:64px;top:-12px;right:0px}.barButtonBase-Sk2mdB:not(:active)::after{transition:0s;opacity:.3;background-size:0%}.barButtonBase-Sk2mdB::after{visibility:visible}.barButtonIcon-bMvzp2{visibility:visible;padding:11px;background-color:var(--accent);color:var(--accent-text);border-radius:50%;box-shadow:0px 3px 5px -1px rgba(0, 0, 0, 0.2),0px 6px 10px 0px rgba(0, 0, 0, 0.14),0px 1px 18px 0px rgba(0,0,0,.12)}[href="https://support.discord.com"]{display:none !important}[aria-label="Send en gave"],[aria-label="Ein Geschenk senden"],[aria-label="Send a gift"],[aria-label="Enviar un regalo"],[aria-label="Envoyer un cadeau"],[aria-label="Pošalji poklon"],[aria-label="Invia un regalo"],[aria-label="Siųsti dovaną"],[aria-label="Ajándék küldése"],[aria-label="Verstuur een cadeau"],[aria-label="Wyślij prezent"],[aria-label="Enviar um presente"],[aria-label="Trimite un cadou"],[aria-label="Lähetä lahja"],[aria-label="Skicka en gåva"],[aria-label="Tặng một món quà"],[aria-label="Bir hediye gönder"],[aria-label="Odeslat dárek"],[aria-label="Στείλτε ένα δώρο"],[aria-label="Изпрати подарък"],[aria-label="Отправить подарок"],[aria-label="Надіслати подарунок"],[aria-label=ส่งของขวัญ],[aria-label=发送礼物],[aria-label=ギフトを贈る],[aria-label=發送禮物],[aria-label="선물 보내기"]{display:none !important}[aria-label="Start videoopkald"],[aria-label="Videoanruf starten"],[aria-label="Start Video Call"],[aria-label="Iniciar videollamada"],[aria-label="Démarrer un appel vidéo"],[aria-label="Započni video poziv"],[aria-label="Avvia la videochiamata"],[aria-label="Pradėti vaizdo skambutį"],[aria-label="Videohívás indítása"],[aria-label="Videogesprek starten"],[aria-label="Start en videosamtale"],[aria-label="Rozpocznij rozmowę wideo"],[aria-label="Iniciar chamada de vídeo"],[aria-label="Începe un apel video"],[aria-label="Aloita videopuhelu"],[aria-label="Påbörja videosamtal"],[aria-label="Bắt Đầu Cuộc Gọi Video"],[aria-label="Görüntülü Arama Başlat"],[aria-label="Zahájit videohovor"],[aria-label="Έναρξη βιντεοκλήσης"],[aria-label="Започни видео обаждане"],[aria-label="Начать видеозвонок"],[aria-label="Розпочати відеовиклик"],[aria-label="वीडियो कॉल स्टार्ट करें"],[aria-label=เริ่มวิดีโอคอล],[aria-label=开始视频通话],[aria-label=ビデオ通話を開始],[aria-label=開始視訊通話],[aria-label="영상 통화 시작하기"]{display:none !important}.expression-picker-chat-input-button>button[*="gif" i]{position:fixed;visibility:hidden}.stickerButton-1-nFh2{position:fixed;visibility:hidden}path[d="M23.0212 1.67671C21.3107 0.879656 19.5079 0.318797 17.6584 0C17.4062 0.461742 17.1749 0.934541 16.9708 1.4184C15.003 1.12145 12.9974 1.12145 11.0283 1.4184C10.819 0.934541 10.589 0.461744 10.3368 0.00546311C8.48074 0.324393 6.67795 0.885118 4.96746 1.68231C1.56727 6.77853 0.649666 11.7538 1.11108 16.652C3.10102 18.1418 5.3262 19.2743 7.69177 20C8.22338 19.2743 8.69519 18.4993 9.09812 17.691C8.32996 17.3997 7.58522 17.0424 6.87684 16.6135C7.06531 16.4762 7.24726 16.3387 7.42403 16.1847C11.5911 18.1749 16.408 18.1749 20.5763 16.1847C20.7531 16.3332 20.9351 16.4762 21.1171 16.6135C20.41 17.0369 19.6639 17.3997 18.897 17.691C19.3052 18.4993 19.7718 19.2689 20.3021 19.9945C22.6677 19.2689 24.8929 18.1364 26.8828 16.6466H26.8893C27.43 10.9731 25.9665 6.04728 23.0212 1.67671ZM9.68041 13.6383C8.39754 13.6383 7.34085 12.4453 7.34085 10.994C7.34085 9.54272 8.37155 8.34973 9.68041 8.34973C10.9893 8.34973 12.0395 9.54272 12.0187 10.994C12.0187 12.4453 10.9828 13.6383 9.68041 13.6383ZM18.3161 13.6383C17.0332 13.6383 15.9765 12.4453 15.9765 10.994C15.9765 9.54272 17.0124 8.34973 18.3161 8.34973C19.6184 8.34973 20.6751 9.54272 20.6543 10.994C20.6543 12.4453 19.6184 13.6383 18.3161 13.6383Z"]{d:path("M22 0H6c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2zm0 14H8l-2 2V2h16v12z")}path[d="M 5.7066445,4.9022473 H 18.293275 c 1.595895,0 2.92046,1.2333283 3.034163,2.8251676 l 0.667683,9.3475611 c 0.0743,1.040197 -0.708715,1.943677 -1.748914,2.017977 -0.04477,0.0032 -0.08964,0.0048 -0.134531,0.0048 -1.191828,0 -2.230714,-0.811138 -2.519775,-1.96738 l -0.522119,-2.08848 H 6.930137 l -0.5221194,2.088478 c -0.2890608,1.156242 -1.3279463,1.96738 -2.5197742,1.96738 -1.0428481,0 -1.8882436,-0.845396 -1.8882436,-1.888243 0,-0.04488 0.0016,-0.08976 0.0048,-0.134532 L 2.6724812,7.7274149 C 2.7861841,6.1355756 4.1107494,4.9022473 5.7066445,4.9022473 Z m 8.8282265,5.0698223 c 0.839995,0 1.520947,-0.680951 1.520947,-1.5209465 0,-0.8399957 -0.680952,-1.5209468 -1.520947,-1.5209468 -0.839996,0 -1.520947,0.6809511 -1.520947,1.5209468 0,0.8399955 0.680951,1.5209465 1.520947,1.5209465 z m 4.055858,3.0418944 c 0.839996,0 1.520947,-0.680952 1.520947,-1.520947 0,-0.839995 -0.680951,-1.5209474 -1.520947,-1.5209474 -0.839996,0 -1.520947,0.6809524 -1.520947,1.5209474 0,0.839995 0.680951,1.520947 1.520947,1.520947 z M 5.9161725,8.9581056 H 3.8882434 v 2.0279294 h 2.0279291 v 2.027929 H 7.9441016 V 10.986035 H 9.9720304 V 8.9581056 H 7.9441016 V 6.9301763 H 5.9161725 Z"],path[d="M20.8,7.7c-0.6-1.2-1.8-1.9-3.1-1.9H6.3C5,5.7,3.8,6.5,3.2,7.6l-2.8,5.8c0,0,0,0,0,0C-0.3,15.1,0.4,17,2,17.8L2.3,18C4,18.7,5.9,18,6.7,16.4l0.1-0.3c0.3-0.6,0.9-1,1.6-1h7.1c0.7,0,1.3,0.4,1.6,1l0.1,0.3c0.8,1.6,2.7,2.4,4.4,1.6l0.3-0.1c1.6-0.8,2.3-2.7,1.6-4.4L20.8,7.7z M8.6,10.5c0,0.2-0.2,0.4-0.4,0.4H7.3c-0.2,0-0.4,0.2-0.4,0.4v0.9c0,0.2-0.2,0.4-0.4,0.4H5.7c-0.2,0-0.4-0.2-0.4-0.4v-0.9c0-0.2-0.2-0.4-0.4-0.4c0,0,0,0,0,0H4.1c-0.2,0-0.4-0.2-0.4-0.4V9.7c0-0.2,0.2-0.4,0.4-0.4h0.9c0.2,0,0.4-0.2,0.4-0.4c0,0,0,0,0,0V8.1c0-0.2,0.2-0.4,0.4-0.4h0.8C6.8,7.7,7,7.9,7,8.1V9c0,0.2,0.2,0.4,0.4,0.4h0.9c0.2,0,0.3,0.2,0.3,0.4V10.5z M15.6,10.9c-0.4,0-0.8-0.3-0.8-0.8c0-0.4,0.3-0.8,0.8-0.8c0,0,0,0,0,0c0.4,0,0.8,0.3,0.8,0.8C16.4,10.5,16.1,10.9,15.6,10.9z M17.2,7.7C17.2,7.7,17.2,7.7,17.2,7.7c0.4,0,0.8,0.3,0.8,0.8c0,0,0,0,0,0c0,0.4-0.4,0.8-0.8,0.8c-0.4,0-0.8-0.4-0.8-0.8S16.8,7.7,17.2,7.7z M18,11.7L18,11.7C18,11.7,18,11.7,18,11.7c0,0.4-0.3,0.8-0.8,0.8c-0.4,0-0.8-0.3-0.8-0.8c0-0.4,0.3-0.8,0.8-0.8c0,0,0,0,0,0C17.7,10.9,18,11.3,18,11.7C18,11.7,18,11.7,18,11.7L18,11.7C18,11.7,18,11.7,18,11.7C18,11.7,18,11.7,18,11.7z M18.9,10.9c-0.4,0-0.8-0.3-0.8-0.8c0-0.4,0.3-0.8,0.8-0.8c0,0,0,0,0,0c0.4,0,0.8,0.3,0.8,0.8C19.6,10.5,19.3,10.9,18.9,10.9z"]{d:path("M21 6H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 10H3V8h18v8zM6 15h2v-2h2v-2H8V9H6v2H4v2h2zM13 13.5A1 1 0 0016 13.5A1 1 0 0013 13.5M17 10.5A1 1 0 0020 10.5A1 1 0 0017 10.5")}path[d="m 5.707493,4.903746 c -1.5957556,0 -2.921198,1.232272 -3.0348909,2.823972 l -0.6679103,9.346058 c -0.0032,0.04477 -0.00469,0.09105 -0.00469,0.135925 0,0.286145 0.068875,0.553783 0.1827966,0.796805 L 7.1745522,13.014755 H 5.9160685 v -2.02951 H 3.8889021 V 8.958078 H 5.9160685 V 6.930913 H 7.943235 v 2.027165 h 2.0295102 v 1.258484 L 15.285561,4.903746 Z m 15.366625,1.832652 -4.813642,4.813642 -3.491882,3.491882 h 4.300405 l 0.522611,2.088099 c 0.289036,1.156141 1.327587,1.966233 2.519311,1.966233 0.04489,0 0.08882,-0.0014 0.133582,-0.0047 1.040108,-0.0743 1.824922,-0.977685 1.750628,-2.01779 l -0.66791,-9.346079 c -0.02519,-0.352659 -0.11926,-0.683371 -0.253103,-0.99132 z m -2.484157,3.236436 c 0.839921,0 1.52096,0.681039 1.52096,1.52096 0,0.839923 -0.681039,1.520961 -1.52096,1.520961 -0.839923,0 -1.520962,-0.681038 -1.520962,-1.520961 0,-0.839921 0.681039,-1.52096 1.520962,-1.52096 z M 7.943235,10.985245 v 1.260827 l 1.2608277,-1.260827 z"],path[d="M17.7,5.7h-0.8L4.4,18.1c1-0.2,1.9-0.8,2.3-1.8l0.1-0.3c0.3-0.6,0.9-1,1.6-1h1.9l4.7-4.6v0c-0.1-0.1-0.1-0.2-0.1-0.4c0-0.4,0.3-0.8,0.8-0.8c0,0,0,0,0,0c0.1,0,0.2,0,0.3,0.1l0.5-0.5c-0.1-0.1-0.1-0.2-0.1-0.4c0-0.4,0.3-0.8,0.8-0.8c0.1,0,0.3,0,0.4,0.1l1.7-1.7C18.8,5.8,18.3,5.7,17.7,5.7z M23.5,13.4l-2.8-5.8c0,0,0-0.1-0.1-0.1l-1.8,1.8c0.4,0,0.7,0.4,0.7,0.8c0,0.4-0.3,0.8-0.8,0.8c-0.4,0-0.8-0.3-0.8-0.7l-0.8,0.8c0.4,0,0.7,0.4,0.7,0.8c0,0.4-0.4,0.8-0.8,0.8c-0.4,0-0.8-0.3-0.8-0.7L13.1,15h2.4c0.7,0,1.3,0.4,1.6,1l0.1,0.3c0.8,1.6,2.7,2.3,4.4,1.6l0.3-0.1C23.6,17,24.3,15,23.5,13.4z M6.3,5.7C5,5.7,3.8,6.4,3.3,7.6l-2.8,5.8c0,0,0,0,0,0C-0.3,15,0.4,16.9,2,17.7L14,5.7H6.3z M8.2,10.8H7.3c-0.2,0-0.4,0.2-0.4,0.3v0.9c0,0.2-0.2,0.3-0.3,0.3H5.7c-0.2,0-0.3-0.2-0.3-0.3v-0.9c0-0.2-0.2-0.3-0.4-0.3H4.1c-0.2,0-0.4-0.2-0.4-0.4V9.6c0-0.2,0.2-0.4,0.4-0.4H5c0.2,0,0.4-0.2,0.4-0.4V8c0-0.2,0.2-0.4,0.4-0.4h0.8C6.8,7.7,7,7.8,7,8v0.9c0,0.2,0.2,0.4,0.4,0.4h0.9c0.2,0,0.3,0.2,0.3,0.4v0.8C8.6,10.7,8.4,10.8,8.2,10.8z"]{d:path("M17.5 9c.83 0 1.5.67 1.5 1.5S18.33 12 17.5 12S16 11.33 16 10.5S16.67 9 17.5 9zM10.83 8H20v8h-1.17l1.87 1.87C21.45 17.58 22 16.85 22 16V8c0-1.1-.9-2-2-2H8.83L10.83 8zM19.78 22.61 15.17 18H4c-1.1 0-2-.9-2-2V8c0-.85.55-1.58 1.3-1.87L1.39 4.22l1.41-1.41 18.38 18.38L19.78 22.61zM13.17 16l-3-3H9v2H7v-2H5v-2h2V9.83L5.17 8H4v8H13.17z")}polygon[points="22.6,2.7 22.6,2.8 19.3,6.1 16,9.3 16,9.4 15,10.4 15,10.4 10.3,15 2.8,22.5 1.4,21.1 21.2,1.3 "]{fill:transparent !important}path[d="M14.99 11C14.99 12.66 13.66 14 12 14C10.34 14 9 12.66 9 11V5C9 3.34 10.34 2 12 2C13.66 2 15 3.34 15 5L14.99 11ZM12 16.1C14.76 16.1 17.3 14 17.3 11H19C19 14.42 16.28 17.24 13 17.72V21H11V17.72C7.72 17.23 5 14.41 5 11H6.7C6.7 14 9.24 16.1 12 16.1ZM12 4C11.2 4 11 4.66667 11 5V11C11 11.3333 11.2 12 12 12C12.8 12 13 11.3333 13 11V5C13 4.66667 12.8 4 12 4Z"]{d:path("M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm-1-9c0-.55.45-1 1-1s1 .45 1 1v6c0 .55-.45 1-1 1s-1-.45-1-1V5zm6 6c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z")}path[d="M14.99 11C14.99 12.66 13.66 14 12 14C10.34 14 9 12.66 9 11V5C9 3.34 10.34 2 12 2C13.66 2 15 3.34 15 5L14.99 11ZM12 16.1C14.76 16.1 17.3 14 17.3 11H19C19 14.42 16.28 17.24 13 17.72V22H11V17.72C7.72 17.23 5 14.41 5 11H6.7C6.7 14 9.24 16.1 12 16.1Z"]{d:path("")}path[d="M11.7237 16.0927L10.9632 16.8531L10.2533 17.5688C10.4978 17.633 10.747 17.6839 11 17.72V22H13V17.72C16.28 17.23 19 14.41 19 11H17.3C17.3 14 14.76 16.1 12 16.1C11.9076 16.1 11.8155 16.0975 11.7237 16.0927Z"]{d:path("M10.8 4.9c0-.66.54-1.2 1.2-1.2s1.2.54 1.2 1.2l-.01 3.91L15 10.6V5c0-1.66-1.34-3-3-3-1.54 0-2.79 1.16-2.96 2.65l1.76 1.76V4.9zM19 11h-1.7c0 .58-.1 1.13-.27 1.64l1.27 1.27c.44-.88.7-1.87.7-2.91zM4.41 2.86L3 4.27l6 6V11c0 1.66 1.34 3 3 3 .23 0 .44-.03.65-.08l1.66 1.66c-.71.33-1.5.52-2.31.52-2.76 0-5.3-2.1-5.3-5.1H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c.91-.13 1.77-.45 2.55-.9l4.2 4.2 1.41-1.41L4.41 2.86z")}path[d="M21 4.27L19.73 3L3 19.73L4.27 21L8.46 16.82L9.69 15.58L11.35 13.92L14.99 10.28L21 4.27Z"],path[d="M9.01 11.085C9.015 11.1125 9.02 11.14 9.02 11.17L15 5.18V5C15 3.34 13.66 2 12 2C10.34 2 9 3.34 9 5V11C9 11.03 9.005 11.0575 9.01 11.085Z"],path[d="M6.7 11H5C5 12.19 5.34 13.3 5.9 14.28L7.13 13.05C6.86 12.43 6.7 11.74 6.7 11Z"]{d:path("")}path[d="M12 2.00305C6.486 2.00305 2 6.48805 2 12.0031V20.0031C2 21.1071 2.895 22.0031 4 22.0031H6C7.104 22.0031 8 21.1071 8 20.0031V17.0031C8 15.8991 7.104 15.0031 6 15.0031H4V12.0031C4 7.59105 7.589 4.00305 12 4.00305C16.411 4.00305 20 7.59105 20 12.0031V15.0031H18C16.896 15.0031 16 15.8991 16 17.0031V20.0031C16 21.1071 16.896 22.0031 18 22.0031H20C21.104 22.0031 22 21.1071 22 20.0031V12.0031C22 6.48805 17.514 2.00305 12 2.00305Z"]{d:path("M19 14v4h-2v-4h2M7 14v4H6c-.55 0-1-.45-1-1v-3h2m5-13c-4.97 0-9 4.03-9 9v7c0 1.66 1.34 3 3 3h3v-8H5v-2c0-3.87 3.13-7 7-7s7 3.13 7 7v2h-4v8h4v1h-7v2h6c1.66 0 3-1.34 3-3V10c0-4.97-4.03-9-9-9z")}path[d="M3.20101 23.6243L1.7868 22.2101L21.5858 2.41113L23 3.82535L3.20101 23.6243Z"]{d:path("M2.1 2.1.69 3.51l3.33 3.33C3.37 8.09 3 9.5 3 11v7c0 1.1.9 2 2 2h4v-8H5v-1c0-.94.19-1.83.52-2.65L15 17.83V20h2.17l1 1H12v2h7c.34 0 .65-.09.93-.24l.55.55 1.41-1.41L2.1 2.1zM7 14v4H5v-4H7z");color:inherit}path[d="M6.16204 15.0065C6.10859 15.0022 6.05455 15 6 15H4V12C4 7.588 7.589 4 12 4C13.4809 4 14.8691 4.40439 16.0599 5.10859L17.5102 3.65835C15.9292 2.61064 14.0346 2 12 2C6.486 2 2 6.485 2 12V19.1685L6.16204 15.0065Z"]{d:path("M12 4c3.87 0 7 3.13 7 7v1h-4v.17L16.83 14H19v2.17l2 2V11c0-4.97-4.03-9-9-9C9.98 2 8.12 2.67 6.62 3.8l1.43 1.43C9.17 4.45 10.53 4 12 4z")}path[d="M19.725 9.91686C19.9043 10.5813 20 11.2796 20 12V15H18C16.896 15 16 15.896 16 17V20C16 21.104 16.896 22 18 22H20C21.105 22 22 21.104 22 20V12C22 10.7075 21.7536 9.47149 21.3053 8.33658L19.725 9.91686Z"]{d:path("")}path[d="M19.738 10H22V14H19.739C19.498 14.931 19.1 15.798 18.565 16.564L20 18L18 20L16.565 18.564C15.797 19.099 14.932 19.498 14 19.738V22H10V19.738C9.069 19.498 8.203 19.099 7.436 18.564L6 20L4 18L5.436 16.564C4.901 15.799 4.502 14.932 4.262 14H2V10H4.262C4.502 9.068 4.9 8.202 5.436 7.436L4 6L6 4L7.436 5.436C8.202 4.9 9.068 4.502 10 4.262V2H14V4.261C14.932 4.502 15.797 4.9 16.565 5.435L18 3.999L20 5.999L18.564 7.436C19.099 8.202 19.498 9.069 19.738 10ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"]{d:path("M19.43 12.98c.04-.32.07-.64.07-.98 0-.34-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.09-.16-.26-.25-.44-.25-.06 0-.12.01-.17.03l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.06-.02-.12-.03-.18-.03-.17 0-.34.09-.43.25l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98 0 .33.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.09.16.26.25.44.25.06 0 .12-.01.17-.03l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.06.02.12.03.18.03.17 0 .34-.09.43-.25l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zm-1.98-1.71c.04.31.05.52.05.73 0 .21-.02.43-.05.73l-.14 1.13.89.7 1.08.84-.7 1.21-1.27-.51-1.04-.42-.9.68c-.43.32-.84.56-1.25.73l-1.06.43-.16 1.13-.2 1.35h-1.4l-.19-1.35-.16-1.13-1.06-.43c-.43-.18-.83-.41-1.23-.71l-.91-.7-1.06.43-1.27.51-.7-1.21 1.08-.84.89-.7-.14-1.13c-.03-.31-.05-.54-.05-.74s.02-.43.05-.73l.14-1.13-.89-.7-1.08-.84.7-1.21 1.27.51 1.04.42.9-.68c.43-.32.84-.56 1.25-.73l1.06-.43.16-1.13.2-1.35h1.39l.19 1.35.16 1.13 1.06.43c.43.18.83.41 1.23.71l.91.7 1.06-.43 1.27-.51.7 1.21-1.07.85-.89.7.14 1.13zM12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z")}path[d="M12 2.00098C6.486 2.00098 2 6.48698 2 12.001C2 17.515 6.486 22.001 12 22.001C17.514 22.001 22 17.515 22 12.001C22 6.48698 17.514 2.00098 12 2.00098ZM17 13.001H13V17.001H11V13.001H7V11.001H11V7.00098H13V11.001H17V13.001Z"],path[d="M20 11.1111H12.8889V4H11.1111V11.1111H4V12.8889H11.1111V20H12.8889V12.8889H20V11.1111Z"]{d:path("M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z")}.theme-light .actionButton-1YKTU0,.theme-dark .actionButton-1YKTU0{border-color:transparent}.addButtonIcon-3HZ_2f{width:var(--chip-height);height:var(--chip-height)}path[d="M22.031 12.665c-.923-.4338-1.9384-.665-2.9778-.665-.695 0-1.3663.1013-2 .29V11h-4V7h-2v4h-4v2h4v4h1.29c-.1887.6337-.29 1.305-.29 2 0 1.0394.2312 2.055.665 2.978-.2207.0146-.4424.022-.665.022-2.6522 0-5.1957-1.0536-7.071-2.929C3.1067 17.1958 2.053 14.6523 2.053 12c0-5.5228 4.4772-10 10-10 2.6522 0 5.1957 1.0536 7.071 2.929 1.8754 1.8753 2.929 4.4188 2.929 7.071 0 .2225-.0074.4443-.022.665zM15.4457 13c-.9793.59-1.8023 1.413-2.3924 2.3924V13h2.3924z"]{d:path("M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1 13 0 2c-5.52 0-10-4.48-10-10s4.48-10 10-10s10 4.48 10 10l-2 0c0-4.41-3.59-8-8-8s-8 3.59-8 8s3.59 8 8 8Z")}path[d="M56 50.6667V13.3333C56 10.4 53.6 8 50.6667 8H13.3333C10.4 8 8 10.4 8 13.3333V50.6667C8 53.6 10.4 56 13.3333 56H50.6667C53.6 56 56 53.6 56 50.6667ZM22.6667 36L29.3333 44.0267L38.6667 32L50.6667 48H13.3333L22.6667 36Z"]{d:path("M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4.86 8.86l-3 3.87L9 13.14 6 17h12l-3.86-5.14z")}.repliedTextContentIcon-1LQXRB path[d="M56 50.6667V13.3333C56 10.4 53.6 8 50.6667 8H13.3333C10.4 8 8 10.4 8 13.3333V50.6667C8 53.6 10.4 56 13.3333 56H50.6667C53.6 56 56 53.6 56 50.6667ZM22.6667 36L29.3333 44.0267L38.6667 32L50.6667 48H13.3333L22.6667 36Z"],.threadMessageAccessoryContentIcon-TRQY1x path[d="M56 50.6667V13.3333C56 10.4 53.6 8 50.6667 8H13.3333C10.4 8 8 10.4 8 13.3333V50.6667C8 53.6 10.4 56 13.3333 56H50.6667C53.6 56 56 53.6 56 50.6667ZM22.6667 36L29.3333 44.0267L38.6667 32L50.6667 48H13.3333L22.6667 36Z"]{d:path("M 50.6667 13.3333 v 37.3333 H 13.3333 V 13.3333 h 37.3333 m 0 -5.3333 H 13.3333 c -2.9333 0 -5.3333 2.4 -5.3333 5.3333 v 37.3333 c 0 2.9333 2.4 5.3333 5.3333 5.3333 h 37.3333 c 2.9333 0 5.3333 -2.4 5.3333 -5.3333 V 13.3333 c 0 -2.9333 -2.4 -5.3333 -5.3333 -5.3333 z m -12.96 23.6267 l -8 10.32 L 24 35.04 L 16 45.3333 h 32 l -10.2933 -13.7067 z")}path[d="M6,7 L2,7 L2,6 L6,6 L6,7 Z M8,5 L2,5 L2,4 L8,4 L8,5 Z M8,3 L2,3 L2,2 L8,2 L8,3 Z M8.88888889,0 L1.11111111,0 C0.494444444,0 0,0.494444444 0,1.11111111 L0,8.88888889 C0,9.50253861 0.497461389,10 1.11111111,10 L8.88888889,10 C9.50253861,10 10,9.50253861 10,8.88888889 L10,1.11111111 C10,0.494444444 9.5,0 8.88888889,0 Z"]{d:path("M 6 7 L 2 7 L 2 6 L 6 6 L 6 7 Z M 8 5 L 2 5 L 2 4 L 8 4 L 8 5 Z M 8 3 L 2 3 L 2 2 L 8 2 L 8 3 Z M 8.8889 0 L 1.1111 0 C 0.4944 0 0 0.4944 0 1.1111 L 0 8.8889 C 0 9.5025 0.4975 10 1.1111 10 L 8.8889 10 C 9.5025 10 10 9.5025 10 8.8889 L 10 1.1111 C 10 0.4944 9.5 0 8.8889 0 Z M 1 1 L 9 1 L 9 9 L 1 9")}path[d="M16.886 7.999H20C21.104 7.999 22 8.896 22 9.999V11.999H2V9.999C2 8.896 2.897 7.999 4 7.999H7.114C6.663 7.764 6.236 7.477 5.879 7.121C4.709 5.951 4.709 4.048 5.879 2.879C7.012 1.746 8.986 1.746 10.121 2.877C11.758 4.514 11.979 7.595 11.998 7.941C11.9991 7.9525 11.9966 7.96279 11.9941 7.97304C11.992 7.98151 11.99 7.98995 11.99 7.999H12.01C12.01 7.98986 12.0079 7.98134 12.0058 7.97287C12.0034 7.96282 12.0009 7.95286 12.002 7.942C12.022 7.596 12.242 4.515 13.879 2.878C15.014 1.745 16.986 1.746 18.121 2.877C19.29 4.049 19.29 5.952 18.121 7.121C17.764 7.477 17.337 7.764 16.886 7.999ZM7.293 5.707C6.903 5.316 6.903 4.682 7.293 4.292C7.481 4.103 7.732 4 8 4C8.268 4 8.519 4.103 8.707 4.292C9.297 4.882 9.641 5.94 9.825 6.822C8.945 6.639 7.879 6.293 7.293 5.707ZM14.174 6.824C14.359 5.941 14.702 4.883 15.293 4.293C15.481 4.103 15.732 4 16 4C16.268 4 16.519 4.103 16.706 4.291C17.096 4.682 17.097 5.316 16.707 5.707C16.116 6.298 15.057 6.642 14.174 6.824ZM3 13.999V19.999C3 21.102 3.897 21.999 5 21.999H11V13.999H3ZM13 13.999V21.999H19C20.104 21.999 21 21.102 21 19.999V13.999H13Z"]{d:path("M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 12 7.4l3.38 4.6L17 10.83 14.92 8H20v6z")}path[d="M12.0002 0.662583V5.40204C12.0002 6.83974 13.1605 7.99981 14.5986 7.99981H19.3393C19.9245 7.99981 20.222 7.29584 19.8055 6.8794L13.1209 0.196569C12.7043 -0.219868 12.0002 0.0676718 12.0002 0.662583ZM14.5759 10.0282C12.0336 10.0282 9.96986 7.96441 9.96986 5.42209V0.0583083H1.99397C0.897287 0.0583083 0 0.955595 0 2.05228V18.0041C0 19.1007 0.897287 19.998 1.99397 19.998H17.9457C19.0424 19.998 19.9397 19.1007 19.9397 18.0041V10.0282H14.5759ZM11.9998 12.2201C11.9998 13.3245 11.1046 14.2198 10.0002 14.2198C8.8958 14.2198 8.00052 13.3245 8.00052 12.2201H6.66742C6.66742 14.0607 8.15955 15.5529 10.0002 15.5529C11.8408 15.5529 13.3329 14.0607 13.3329 12.2201H11.9998ZM4.44559 13.331C4.44559 13.9446 3.94821 14.442 3.33467 14.442C2.72112 14.442 2.22375 13.9446 2.22375 13.331C2.22375 12.7175 2.72112 12.2201 3.33467 12.2201C3.94821 12.2201 4.44559 12.7175 4.44559 13.331ZM16.6657 14.442C17.2793 14.442 17.7766 13.9446 17.7766 13.331C17.7766 12.7175 17.2793 12.2201 16.6657 12.2201C16.0522 12.2201 15.5548 12.7175 15.5548 13.331C15.5548 13.9446 16.0522 14.442 16.6657 14.442Z"]{d:path("M 17 3 v 9 l -5 0 l 0 5 H 3 V 3 H 17 M 17 1 H 3 C 1.9 1 1 1.9 1 3 v 14 c 0 1.1 0.9 2 2 2 h 10 l 6 -6 V 3 C 19 1.9 18.1 1 17 1 z M 10 12 H 5 v -2 h 5 V 12 z M 15 8 H 5 V 6 h 10 V 8 z")}path[d="M12.0002 0.662583V5.40204C12.0002 6.83974 13.1605 7.99981 14.5986 7.99981H19.3393C19.9245 7.99981 20.222 7.29584 19.8055 6.8794L13.1209 0.196569C12.7043 -0.219868 12.0002 0.0676718 12.0002 0.662583ZM14.5759 10.0282C12.0336 10.0282 9.96986 7.96441 9.96986 5.42209V0.0583083H1.99397C0.897287 0.0583083 0 0.955595 0 2.05228V18.0041C0 19.1007 0.897287 19.998 1.99397 19.998H17.9457C19.0424 19.998 19.9397 19.1007 19.9397 18.0041V10.0282H14.5759ZM12 13H11.2H8.8H8C8 14.1046 8.89543 15 10 15C11.1046 15 12 14.1046 12 13ZM17.7766 13.331C17.7766 13.9446 17.2793 14.442 16.6657 14.442C16.0522 14.442 15.5548 13.9446 15.5548 13.331C15.5548 12.7175 16.0522 12.2201 16.6657 12.2201C17.2793 12.2201 17.7766 12.7175 17.7766 13.331ZM2 12.2361L2.53532 11L5.62492 12.7835C5.79161 12.8797 5.79161 13.1203 5.62492 13.2165L2.53532 15L2 13.7639L3.32339 13L2 12.2361Z"]{d:path("")}path[d="M2 2C0.895431 2 0 2.89543 0 4V20C0 21.1046 0.89543 22 2 22H22C23.1046 22 24 21.1046 24 20V4C24 2.89543 23.1046 2 22 2H2ZM9.76445 11.448V15.48C8.90045 16.044 7.88045 16.356 6.74045 16.356C4.11245 16.356 2.66045 14.628 2.66045 12.072C2.66045 9.504 4.23245 7.764 6.78845 7.764C7.80845 7.764 8.66045 8.004 9.32045 8.376L9.04445 10.164C8.42045 9.768 7.68845 9.456 6.83645 9.456C5.40845 9.456 4.71245 10.512 4.71245 12.06C4.71245 13.62 5.43245 14.712 6.86045 14.712C7.31645 14.712 7.64045 14.616 7.97645 14.448V12.972H6.42845V11.448H9.76445ZM11.5481 7.92H13.6001V16.2H11.5481V7.92ZM20.4724 7.92V9.636H17.5564V11.328H19.8604V13.044H17.5564V16.2H15.5164V7.92H20.4724Z"]{d:path("M 10.8571 8 H 12.7857 v 7.7143 h -1.9286 V 8 z M 7.6429 8 H 3.7857 c -0.7714 0 -1.2857 0.6429 -1.2857 1.2857 v 5.1429 c 0 0.6429 0.5143 1.2857 1.2857 1.2857 h 3.8571 c 0.7714 0 1.2857 -0.6429 1.2857 -1.2857 v -2.5714 H 7 v 1.9286 h -2.5714 v -3.8571 H 8.9286 V 9.2857 c 0 -0.6429 -0.5143 -1.2857 -1.2857 -1.2857 z m 12.8571 1.9286 V 8 h -5.7857 v 7.7143 H 16.6429 v -2.5714 h 2.5714 v -1.9286 h -2.5714 v -1.2857 h 3.8571 z")}.gifTag-1TvtGO{background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='29' height='22'%3E%3Cpath fill='%23202225' fill-opacity='.8' d='M10.857 8h1.929v7.714h-1.929V8zM7.643 8H3.786C3.014 8 2.5 8.643 2.5 9.286v5.143c0 .642.514 1.285 1.286 1.285h3.857c.771 0 1.286-.643 1.286-1.285v-2.572H7v1.929H4.429V9.929h4.5v-.643C8.929 8.643 8.414 8 7.643 8zM20.5 9.929V8h-5.786v7.714h1.929v-2.571h2.571v-1.929h-2.571V9.93H20.5z' fill-rule='evenodd'/%3E%3C/svg%3E")}.sprite-2lxwfc{filter:grayscale(100%) !important;background-image:none !important;background-size:24px !important;background-position:center !important;background-color:var(--interactive-normal);-webkit-mask-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24' fill='currentColor'%3E%3Cpath d='M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z'/%3E%3C/svg%3E");mask-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24' fill='currentColor'%3E%3Cpath d='M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z'/%3E%3C/svg%3E")}path[d="M21.707 20.293L16.314 14.9C17.403 13.504 18 11.799 18 10C18 7.863 17.167 5.854 15.656 4.344C14.146 2.832 12.137 2 10 2C7.863 2 5.854 2.832 4.344 4.344C2.833 5.854 2 7.863 2 10C2 12.137 2.833 14.146 4.344 15.656C5.854 17.168 7.863 18 10 18C11.799 18 13.504 17.404 14.9 16.314L20.293 21.706L21.707 20.293ZM10 16C8.397 16 6.891 15.376 5.758 14.243C4.624 13.11 4 11.603 4 10C4 8.398 4.624 6.891 5.758 5.758C6.891 4.624 8.397 4 10 4C11.603 4 13.109 4.624 14.242 5.758C15.376 6.891 16 8.398 16 10C16 11.603 15.376 13.11 14.242 14.243C13.109 15.376 11.603 16 10 16Z"]{d:path("M 18 15.2 h -0.948 l -0.336 -0.324 C 17.892 13.508 18.6 11.732 18.6 9.8 C 18.6 5.492 15.108 2 10.8 2 S 3 5.492 3 9.8 S 6.492 17.6 10.8 17.6 c 1.932 0 3.708 -0.708 5.076 -1.884 l 0.324 0.336 v 0.948 l 6 5.988 L 23.988 21.2 l -5.988 -6 z m -7.2 0 C 7.812 15.2 5.4 12.788 5.4 9.8 S 7.812 4.4 10.8 4.4 S 16.2 6.812 16.2 9.8 S 13.788 15.2 10.8 15.2 z")}path[d="M11 5V3C16.515 3 21 7.486 21 13H19C19 8.589 15.411 5 11 5ZM17 13H15C15 10.795 13.206 9 11 9V7C14.309 7 17 9.691 17 13ZM11 11V13H13C13 11.896 12.105 11 11 11ZM14 16H18C18.553 16 19 16.447 19 17V21C19 21.553 18.553 22 18 22H13C6.925 22 2 17.075 2 11V6C2 5.447 2.448 5 3 5H7C7.553 5 8 5.447 8 6V10C8 10.553 7.553 11 7 11H6C6.063 14.938 9 18 13 18V17C13 16.447 13.447 16 14 16Z"]{d:path("M6.54 5c.06.89.21 1.76.45 2.59l-1.2 1.2c-.41-1.2-.67-2.47-.76-3.79h1.51m9.86 12.02c.85.24 1.72.39 2.6.45v1.49c-1.32-.09-2.59-.35-3.8-.75l1.2-1.19M7.5 3H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.49c0-.55-.45-1-1-1-1.24 0-2.45-.2-3.57-.57-.1-.04-.21-.05-.31-.05-.26 0-.51.1-.71.29l-2.2 2.2c-2.83-1.45-5.15-3.76-6.59-6.59l2.2-2.2c.28-.28.36-.67.25-1.02C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1z")}.iconSize-Ai8Wtu[style*="/assets/7f75ab26bc5deb393cd8db44d9fe14e7.svg"]{background-color:var(--online);background-image:none !important;-webkit-mask-position-y:-3px;-webkit-mask-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24' fill='a'%3E%3Cpath fill='none' d='M0 0h24v24H0z'/%3E%3Cpath d='M6.54 5c.06.89.21 1.76.45 2.59l-1.2 1.2c-.41-1.2-.67-2.47-.76-3.79h1.51m9.86 12.02c.85.24 1.72.39 2.6.45v1.49c-1.32-.09-2.59-.35-3.8-.75l1.2-1.19M7.5 3H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.49c0-.55-.45-1-1-1-1.24 0-2.45-.2-3.57-.57a.84.84 0 00-.31-.05c-.26 0-.51.1-.71.29l-2.2 2.2a15.149 15.149 0 01-6.59-6.59l2.2-2.2c.28-.28.36-.67.25-1.02A11.36 11.36 0 018.5 4c0-.55-.45-1-1-1z'/%3E%3C/svg%3E");mask-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24' fill='a'%3E%3Cpath fill='none' d='M0 0h24v24H0z'/%3E%3Cpath d='M6.54 5c.06.89.21 1.76.45 2.59l-1.2 1.2c-.41-1.2-.67-2.47-.76-3.79h1.51m9.86 12.02c.85.24 1.72.39 2.6.45v1.49c-1.32-.09-2.59-.35-3.8-.75l1.2-1.19M7.5 3H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.49c0-.55-.45-1-1-1-1.24 0-2.45-.2-3.57-.57a.84.84 0 00-.31-.05c-.26 0-.51.1-.71.29l-2.2 2.2a15.149 15.149 0 01-6.59-6.59l2.2-2.2c.28-.28.36-.67.25-1.02A11.36 11.36 0 018.5 4c0-.55-.45-1-1-1z'/%3E%3C/svg%3E");height:24px;width:24px}path[d="M21.526 8.149C21.231 7.966 20.862 7.951 20.553 8.105L18 9.382V7C18 5.897 17.103 5 16 5H4C2.897 5 2 5.897 2 7V17C2 18.104 2.897 19 4 19H16C17.103 19 18 18.104 18 17V14.618L20.553 15.894C20.694 15.965 20.847 16 21 16C21.183 16 21.365 15.949 21.526 15.851C21.82 15.668 22 15.347 22 15V9C22 8.653 21.82 8.332 21.526 8.149Z"]{d:path("M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4zM15 16H5V8h10v8zm-6-1h2v-2h2v-2h-2V9H9v2H7v2h2z")}path[d="M22 12L12.101 2.10101L10.686 3.51401L12.101 4.92901L7.15096 9.87801V9.88001L5.73596 8.46501L4.32196 9.88001L8.56496 14.122L2.90796 19.778L4.32196 21.192L9.97896 15.536L14.222 19.778L15.636 18.364L14.222 16.95L19.171 12H19.172L20.586 13.414L22 12Z"]{d:path("M 14 5 v 5 c 0 1.12 0.37 2.16 1 3 H 9 c 0.65 -0.86 1 -1.9 1 -3 V 5 H 14 M 17 3 H 7 C 6.45 3 6 3.45 6 4 c 0 0.55 0.45 1 1 1 c 0 0 0 0 0 0 l 1 0 v 5 c 0 1.66 -1.34 3 -3 3 v 2 h 5.97 v 6 l 1 1 l 1 -1 v -6 H 19 v -2 c 0 0 0 0 0 0 c -1.66 0 -3 -1.34 -3 -3 V 5 l 1 0 c 0 0 0 0 0 0 c 0.55 0 1 -0.45 1 -1 C 18 3.45 17.55 3 17 3 L 17 3 z")}.icon-JRJzJz.iconSize-Ai8Wtu[style*="/assets/5da4cdab01d4d89c593c48c62ae0d937.svg"]{background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='none'%3E%3Cpath d='M14 5v5c0 1.12.37 2.16 1 3H9c.65-.86 1-1.9 1-3V5h4m3-2H7c-.55 0-1 .45-1 1s.45 1 1 1h1v5c0 1.66-1.34 3-3 3v2h5.97v6l1 1 1-1v-6H19v-2c-1.66 0-3-1.34-3-3V5h1c.55 0 1-.45 1-1s-.45-1-1-1z' fill='%23B9BBBE'/%3E%3C/svg%3E") !important;width:1.5rem;height:1.5rem;background-size:1.5rem;margin-top:-0.25rem}path[d="M21 3H24V5H21V8H19V5H16V3H19V0H21V3ZM10 12C12.205 12 14 10.205 14 8C14 5.795 12.205 4 10 4C7.795 4 6 5.795 6 8C6 10.205 7.795 12 10 12ZM10 13C5.289 13 2 15.467 2 19V20H18V19C18 15.467 14.711 13 10 13Z"]{d:path("M20,9V6h-2v3h-3v2h3v3h2v-3h3V9H20z M9,12c2.21,0,4-1.79,4-4c0-2.21-1.79-4-4-4S5,5.79,5,8C5,10.21,6.79,12,9,12z M9,6 c1.1,0,2,0.9,2,2c0,1.1-0.9,2-2,2S7,9.1,7,8C7,6.9,7.9,6,9,6z M15.39,14.56C13.71,13.7,11.53,13,9,13c-2.53,0-4.71,0.7-6.39,1.56 C1.61,15.07,1,16.1,1,17.22V20h16v-2.78C17,16.1,16.39,15.07,15.39,14.56z M15,18H3v-0.78c0-0.38,0.2-0.72,0.52-0.88 C4.71,15.73,6.63,15,9,15c2.37,0,4.29,0.73,5.48,1.34C14.8,16.5,15,16.84,15,17.22V18z")}path[d="M19 3H4.99C3.88 3 3.01 3.89 3.01 5L3 19C3 20.1 3.88 21 4.99 21H19C20.1 21 21 20.1 21 19V5C21 3.89 20.1 3 19 3ZM19 15H15C15 16.66 13.65 18 12 18C10.35 18 9 16.66 9 15H4.99V5H19V15Z"]{d:path("M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5v-3h3.56c.69 1.19 1.97 2 3.45 2s2.75-.81 3.45-2H19v3zm0-5h-4.99c0 1.1-.9 2-2 2s-2-.9-2-2H5V5h14v9z")}path[d="M0.5,0 L0.5,1.5 C0.5,5.65 2.71,9.28 6,11.3 L6,16 L21,16 L21,14 C21,11.34 15.67,10 13,10 C13,10 12.83,10 12.75,10 C8,10 4,6 4,1.5 L4,0 L0.5,0 Z M13,0 C10.790861,0 9,1.790861 9,4 C9,6.209139 10.790861,8 13,8 C15.209139,8 17,6.209139 17,4 C17,1.790861 15.209139,0 13,0 Z"]{d:path("M 15.89 8.11 C 15.5 7.72 14.83 7 13.53 7 c -0.21 0 -1.42 0 -2.54 0 C 8.24 6.99 6 4.75 6 2 H 4 c 0 3.16 2.11 5.84 5 6.71 V 22 h 2 v -6 h 2 v 6 h 2 V 10.05 L 18.95 14 l 1.41 -1.41 L 15.89 8.11 z M 10 4 A 1 1 0 0 0 14 4 A 1 1 0 0 0 10 4");transform:translate(0)}path[d="M17,13.6 L17.3999992,13.6 C19.0406735,13.6 20.496781,12.8097754 21.4084757,11.5891722 L21.8198761,18.8298199 C21.913864,20.4840062 20.6490733,21.9011814 18.994887,21.9951692 C18.9382174,21.9983891 18.8814679,22 18.8247069,22 L5.1752931,22 C3.51843885,22 2.1752931,20.6568542 2.1752931,19 C2.1752931,18.943239 2.17690401,18.8864895 2.18012387,18.8298199 L2.59152425,11.5891732 C3.503219,12.8097758 4.95932613,13.6 6.6,13.6 L7,13.6 L7,15 L9,15 L9,13.6 L15,13.6 L15,15 L17,15 L17,13.6 Z M7,16 L7,18 L9,18 L9,16 L7,16 Z M15,16 L17,16 L17,18 L15,18 L15,16 Z M15,11.6 L9,11.6 L9,9 L7,9 L7,11.6 L6.6,11.6 C4.94314575,11.6 3.6,10.2568542 3.6,8.6 L3.6,5 C3.6,3.34314575 4.94314575,2 6.6,2 L17.3999992,2 C19.0568535,2 20.3999992,3.34314575 20.3999992,5 L20.3999992,8.6 C20.3999992,10.2568542 19.0568535,11.6 17.3999992,11.6 L17,11.6 L17,9 L15,9 L15,11.6 Z"]{d:path("M13 4v2.67l-1 1-1-1V4h2m7 7v2h-2.67l-1-1 1-1H20M6.67 11l1 1-1 1H4v-2h2.67M12 16.33l1 1V20h-2v-2.67l1-1M15 2H9v5.5l3 3 3-3V2zm7 7h-5.5l-3 3 3 3H22V9zM7.5 9H2v6h5.5l3-3-3-3zm4.5 4.5l-3 3V22h6v-5.5l-3-3z")}path[d="M12 2C6.486 2 2 6.486 2 12C2 17.515 6.486 22 12 22C14.039 22 15.993 21.398 17.652 20.259L16.521 18.611C15.195 19.519 13.633 20 12 20C7.589 20 4 16.411 4 12C4 7.589 7.589 4 12 4C16.411 4 20 7.589 20 12V12.782C20 14.17 19.402 15 18.4 15L18.398 15.018C18.338 15.005 18.273 15 18.209 15H18C17.437 15 16.6 14.182 16.6 13.631V12C16.6 9.464 14.537 7.4 12 7.4C9.463 7.4 7.4 9.463 7.4 12C7.4 14.537 9.463 16.6 12 16.6C13.234 16.6 14.35 16.106 15.177 15.313C15.826 16.269 16.93 17 18 17L18.002 16.981C18.064 16.994 18.129 17 18.195 17H18.4C20.552 17 22 15.306 22 12.782V12C22 6.486 17.514 2 12 2ZM12 14.599C10.566 14.599 9.4 13.433 9.4 11.999C9.4 10.565 10.566 9.399 12 9.399C13.434 9.399 14.6 10.565 14.6 11.999C14.6 13.433 13.434 14.599 12 14.599Z"]{d:path("M12 1.95c-5.52 0-10 4.48-10 10s4.48 10 10 10h5v-2h-5c-4.34 0-8-3.66-8-8s3.66-8 8-8 8 3.66 8 8v1.43c0 .79-.71 1.57-1.5 1.57s-1.5-.78-1.5-1.57v-1.43c0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5c1.38 0 2.64-.56 3.54-1.47.65.89 1.77 1.47 2.96 1.47 1.97 0 3.5-1.6 3.5-3.57v-1.43c0-5.52-4.48-10-10-10zm0 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z")}path[d="M5.88657 21C5.57547 21 5.3399 20.7189 5.39427 20.4126L6.00001 17H2.59511C2.28449 17 2.04905 16.7198 2.10259 16.4138L2.27759 15.4138C2.31946 15.1746 2.52722 15 2.77011 15H6.35001L7.41001 9H4.00511C3.69449 9 3.45905 8.71977 3.51259 8.41381L3.68759 7.41381C3.72946 7.17456 3.93722 7 4.18011 7H7.76001L8.39677 3.41262C8.43914 3.17391 8.64664 3 8.88907 3H9.87344C10.1845 3 10.4201 3.28107 10.3657 3.58738L9.76001 7H15.76L16.3968 3.41262C16.4391 3.17391 16.6466 3 16.8891 3H17.8734C18.1845 3 18.4201 3.28107 18.3657 3.58738L17.76 7H21.1649C21.4755 7 21.711 7.28023 21.6574 7.58619L21.4824 8.58619C21.4406 8.82544 21.2328 9 20.9899 9H17.41L16.35 15H19.7549C20.0655 15 20.301 15.2802 20.2474 15.5862L20.0724 16.5862C20.0306 16.8254 19.8228 17 19.5799 17H16L15.3632 20.5874C15.3209 20.8261 15.1134 21 14.8709 21H13.8866C13.5755 21 13.3399 20.7189 13.3943 20.4126L14 17H8.00001L7.36325 20.5874C7.32088 20.8261 7.11337 21 6.87094 21H5.88657ZM9.41045 9L8.35045 15H14.3504L15.4104 9H9.41045Z"]{d:path("M20,10V8h-4V4h-2v4h-4V4H8v4H4v2h4v4H4v2h4v4h2v-4h4v4h2v-4h4v-2h-4v-4H20z M14,14h-4v-4h4V14z")}path[d="M14 8C14 7.44772 13.5523 7 13 7H9.76001L10.3657 3.58738C10.4201 3.28107 10.1845 3 9.87344 3H8.88907C8.64664 3 8.43914 3.17391 8.39677 3.41262L7.76001 7H4.18011C3.93722 7 3.72946 7.17456 3.68759 7.41381L3.51259 8.41381C3.45905 8.71977 3.69449 9 4.00511 9H7.41001L6.35001 15H2.77011C2.52722 15 2.31946 15.1746 2.27759 15.4138L2.10259 16.4138C2.04905 16.7198 2.28449 17 2.59511 17H6.00001L5.39427 20.4126C5.3399 20.7189 5.57547 21 5.88657 21H6.87094C7.11337 21 7.32088 20.8261 7.36325 20.5874L8.00001 17H14L13.3943 20.4126C13.3399 20.7189 13.5755 21 13.8866 21H14.8709C15.1134 21 15.3209 20.8261 15.3632 20.5874L16 17H19.5799C19.8228 17 20.0306 16.8254 20.0724 16.5862L20.2474 15.5862C20.301 15.2802 20.0655 15 19.7549 15H16.35L16.6758 13.1558C16.7823 12.5529 16.3186 12 15.7063 12C15.2286 12 14.8199 12.3429 14.7368 12.8133L14.3504 15H8.35045L9.41045 9H13C13.5523 9 14 8.55228 14 8Z"]{d:path("")}path[d="M21.025 5V4C21.025 2.88 20.05 2 19 2C17.95 2 17 2.88 17 4V5C16.4477 5 16 5.44772 16 6V9C16 9.55228 16.4477 10 17 10H19H21C21.5523 10 22 9.55228 22 9V5.975C22 5.43652 21.5635 5 21.025 5ZM20 5H18V4C18 3.42857 18.4667 3 19 3C19.5333 3 20 3.42857 20 4V5Z"]{d:path("M 4 8 V 10 H 8 V 14 H 4 V 16 H 8 V 20 H 10 V 16 H 14 V 20 H 16 V 16 H 20 V 14 H 16 V 12 V 12 H 14 V 14 H 10 V 10 H 12 V 8 H 10 V 4 H 8 V 8 H 4 M 18.0001 6.3333 h -0.3333 V 5.6667 c 0 -0.92 -0.7467 -1.6667 -1.6667 -1.6667 S 14.3334 4.7467 14.3334 5.6667 v 0.6667 H 14.0001 c -0.3667 0 -0.6667 0.3 -0.6667 0.6667 v 3.3333 c 0 0.3667 0.3 0.6667 0.6667 0.6667 h 4 c 0.3667 0 0.6667 -0.3 0.6667 -0.6667 V 7 c 0 -0.3667 -0.3 -0.6667 -0.6667 -0.6667 z m -2 3 c -0.3667 0 -0.6667 -0.3 -0.6667 -0.6667 s 0.3 -0.6667 0.6667 -0.6667 s 0.6667 0.3 0.6667 0.6667 s -0.3 0.6667 -0.6667 0.6667 z M 15.0001 6.3333 V 5.6667 c 0 -0.5533 0.4467 -1 1 -1 s 1 0.4467 1 1 v 0.6667 H 15.0001 z")}path[d="M19.8914 3.80204L22.2438 8.55654C22.5726 9.22119 22.0891 9.99999 21.3475 10L16.6179 10C15.8745 10 15.391 9.21769 15.7235 8.55279L18.1007 3.79829C18.4701 3.05951 19.5251 3.06172 19.8914 3.80204ZM18.4998 5H19.4999V7.5H18.4999L18.4998 5ZM18.4998 8.49887C18.4998 8.77589 18.7238 9 18.9998 9C19.2759 9 19.4999 8.77589 19.4999 8.49887C19.4999 8.22224 19.2759 7.99773 18.9998 7.99773C18.7238 7.99773 18.4998 8.22224 18.4998 8.49887Z"]{d:path("M 4 8 V 10 H 8 V 14 H 4 V 16 H 8 V 20 H 10 V 16 H 14 V 20 H 16 V 16 H 20 V 14 H 16 V 12 V 12 H 14 V 14 H 10 V 10 H 12 V 8 H 10 V 4 H 8 V 8 H 4 M 13.3295 11.1579 h 6.3411 c 0.6484 0 1.0526 -0.7032 0.7284 -1.2632 L 17.2284 4.4168 c -0.3242 -0.56 -1.1326 -0.56 -1.4568 0 L 12.6011 9.8947 c -0.3242 0.56 0.08 1.2632 0.7284 1.2632 z M 16.5 8.2105 c -0.2316 0 -0.4211 -0.1895 -0.4211 -0.4211 v -0.8421 c 0 -0.2316 0.1895 -0.4211 0.4211 -0.4211 s 0.4211 0.1895 0.4211 0.4211 v 0.8421 c 0 0.2316 -0.1895 0.4211 -0.4211 0.4211 z m 0.4211 1.6842 h -0.8421 v -0.8421 h 0.8421 v 0.8421 z")}path[d="M5.43309 21C5.35842 21 5.30189 20.9325 5.31494 20.859L5.99991 17H2.14274C2.06819 17 2.01168 16.9327 2.02453 16.8593L2.33253 15.0993C2.34258 15.0419 2.39244 15 2.45074 15H6.34991L7.40991 9H3.55274C3.47819 9 3.42168 8.93274 3.43453 8.85931L3.74253 7.09931C3.75258 7.04189 3.80244 7 3.86074 7H7.75991L8.45234 3.09903C8.46251 3.04174 8.51231 3 8.57049 3H10.3267C10.4014 3 10.4579 3.06746 10.4449 3.14097L9.75991 7H15.7599L16.4523 3.09903C16.4625 3.04174 16.5123 3 16.5705 3H18.3267C18.4014 3 18.4579 3.06746 18.4449 3.14097L17.7599 7H21.6171C21.6916 7 21.7481 7.06725 21.7353 7.14069L21.4273 8.90069C21.4172 8.95811 21.3674 9 21.3091 9H17.4099L17.0495 11.04H15.05L15.4104 9H9.41035L8.35035 15H10.5599V17H7.99991L7.30749 20.901C7.29732 20.9583 7.24752 21 7.18934 21H5.43309Z"]{d:path("M 4 16 V 14 H 8 V 10 H 4 V 8 H 8 V 4 H 10 V 8 H 14 V 4 H 16 V 8 H 20 V 10 H 16 V 12 V 12 H 14 V 10 H 10 V 14 H 12 V 16 H 10 V 20 H 8 V 16 H 4 z")}path[d="M15.44 6.99992C15.5725 6.99992 15.68 7.10737 15.68 7.23992V8.75992C15.68 8.89247 15.5725 8.99992 15.44 8.99992H9.41045L8.35045 14.9999H10.56V16.9999H8.00001L7.36325 20.5873C7.32088 20.826 7.11337 20.9999 6.87094 20.9999H5.88657C5.57547 20.9999 5.3399 20.7189 5.39427 20.4125L6.00001 16.9999H2.59511C2.28449 16.9999 2.04905 16.7197 2.10259 16.4137L2.27759 15.4137C2.31946 15.1745 2.52722 14.9999 2.77011 14.9999H6.35001L7.41001 8.99992H4.00511C3.69449 8.99992 3.45905 8.71969 3.51259 8.41373L3.68759 7.41373C3.72946 7.17448 3.93722 6.99992 4.18011 6.99992H7.76001L8.39677 3.41254C8.43914 3.17384 8.64664 2.99992 8.88907 2.99992H9.87344C10.1845 2.99992 10.4201 3.28099 10.3657 3.58731L9.76001 6.99992H15.44Z"]{d:path("M4 16V14H8V10H4V8H8V4H10V8H14V10H10V14H12V16H10V20H8V16H4z")}path[d="M22.545 4.91992V3.91992C22.545 2.79992 21.57 1.91992 20.52 1.91992C19.47 1.91992 18.52 2.79992 18.52 3.91992V4.91992H17.76C17.6275 4.91992 17.52 5.02737 17.52 5.15992V9.67992C17.52 9.81247 17.6275 9.91992 17.76 9.91992H23.28C23.4126 9.91992 23.52 9.81247 23.52 9.67992V5.15992C23.52 5.02737 23.4126 4.91992 23.28 4.91992H22.545ZM21.52 4.91992H19.52V3.91992C19.52 3.34849 19.9867 2.91992 20.52 2.91992C21.0533 2.91992 21.52 3.34849 21.52 3.91992V4.91992Z"]{d:path("M20.0001 6.3333h-.3333V5.6667c0-.92-.7467-1.6667-1.6667-1.6667S16.3334 4.7467 16.3334 5.6667v.6667H16.0001c-.3667 0-.6667.3-.6667.6667v3.3333c0 .3667.3.6667.6667.6667h4c.3667 0 .6667-.3.6667-.6667V7c0-.3667-.3-.6667-.6667-.6667zm-2 3c-.3667 0-.6667-.3-.6667-.6667s.3-.6667.6667-.6667s.6667.3.6667.6667s-.3.6667-.6667.6667zM17.0001 6.3333V5.6667c0-.5533.4467-1 1-1s1 .4467 1 1v.6667H17.0001z")}path[d="M11.383 3.07904C11.009 2.92504 10.579 3.01004 10.293 3.29604L6 8.00204H3C2.45 8.00204 2 8.45304 2 9.00204V15.002C2 15.552 2.45 16.002 3 16.002H6L10.293 20.71C10.579 20.996 11.009 21.082 11.383 20.927C11.757 20.772 12 20.407 12 20.002V4.00204C12 3.59904 11.757 3.23204 11.383 3.07904ZM14 5.00195V7.00195C16.757 7.00195 19 9.24595 19 12.002C19 14.759 16.757 17.002 14 17.002V19.002C17.86 19.002 21 15.863 21 12.002C21 8.14295 17.86 5.00195 14 5.00195ZM14 9.00195C15.654 9.00195 17 10.349 17 12.002C17 13.657 15.654 15.002 14 15.002V13.002C14.551 13.002 15 12.553 15 12.002C15 11.451 14.551 11.002 14 11.002V9.00195Z"]{d:path("M3 9v6h4l5 5V4L7 9H3zm7-.17v6.34L7.83 13H5v-2h2.83L10 8.83zM16.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77 0-4.28-2.99-7.86-7-8.77z")}path[d="M15 12C15 12.0007 15 12.0013 15 12.002C15 12.553 14.551 13.002 14 13.002V15.002C15.654 15.002 17 13.657 17 12.002C17 12.0013 17 12.0007 17 12H15ZM19 12C19 12.0007 19 12.0013 19 12.002C19 14.759 16.757 17.002 14 17.002V19.002C17.86 19.002 21 15.863 21 12.002C21 12.0013 21 12.0007 21 12H19ZM10.293 3.29604C10.579 3.01004 11.009 2.92504 11.383 3.07904C11.757 3.23204 12 3.59904 12 4.00204V20.002C12 20.407 11.757 20.772 11.383 20.927C11.009 21.082 10.579 20.996 10.293 20.71L6 16.002H3C2.45 16.002 2 15.552 2 15.002V9.00204C2 8.45304 2.45 8.00204 3 8.00204H6L10.293 3.29604Z"]{d:path("")}.item-2idW98:nth-child(2) [d="M21.025 5V4C21.025 2.88 20.05 2 19 2C17.95 2 17 2.88 17 4V5C16.4477 5 16 5.44772 16 6V9C16 9.55228 16.4477 10 17 10H19H21C21.5523 10 22 9.55228 22 9V5.975C22 5.43652 21.5635 5 21.025 5ZM20 5H18V4C18 3.42857 18.4667 3 19 3C19.5333 3 20 3.42857 20 4V5Z"],a[role=button] path[d="M21.025 5V4C21.025 2.88 20.05 2 19 2C17.95 2 17 2.88 17 4V5C16.4477 5 16 5.44772 16 6V9C16 9.55228 16.4477 10 17 10H19H21C21.5523 10 22 9.55228 22 9V5.975C22 5.43652 21.5635 5 21.025 5ZM20 5H18V4C18 3.42857 18.4667 3 19 3C19.5333 3 20 3.42857 20 4V5Z"],a[role=link]:not([href]) path[d="M21.025 5V4C21.025 2.88 20.05 2 19 2C17.95 2 17 2.88 17 4V5C16.4477 5 16 5.44772 16 6V9C16 9.55228 16.4477 10 17 10H19H21C21.5523 10 22 9.55228 22 9V5.975C22 5.43652 21.5635 5 21.025 5ZM20 5H18V4C18 3.42857 18.4667 3 19 3C19.5333 3 20 3.42857 20 4V5Z"]{d:path("M 3 9 V 15 H 7 L 12 20 V 4 L 7 9 H 3 Z M 10 8.83 V 15.17 L 7.83 13 H 5 V 11 H 7.83 L 10 8.83 Z M 16.5 12 L 14 12 V 16.02 C 15.48 15.29 16.5 13.77 16.5 12 Z M 19 12 C 19 15.17 16.89 17.85 14 18.71 V 20.77 C 18.01 19.86 21 16.28 21 12 Z M 18.9412 5.0588 h -0.3529 V 4.3529 c 0 -0.9741 -0.7906 -1.7647 -1.7647 -1.7647 S 15.0588 3.3788 15.0588 4.3529 v 0.7059 H 14.7059 c -0.3882 0 -0.7059 0.3176 -0.7059 0.7059 v 3.5294 c 0 0.3882 0.3176 0.7059 0.7059 0.7059 h 4.2353 c 0.3882 0 0.7059 -0.3176 0.7059 -0.7059 V 5.7647 c 0 -0.3882 -0.3176 -0.7059 -0.7059 -0.7059 z m -2.1176 3.1765 c -0.3882 0 -0.7059 -0.3176 -0.7059 -0.7059 s 0.3176 -0.7059 0.7059 -0.7059 s 0.7059 0.3176 0.7059 0.7059 s -0.3176 0.7059 -0.7059 0.7059 z M 15.7647 5.0588 V 4.3529 c 0 -0.5859 0.4729 -1.0588 1.0588 -1.0588 s 1.0588 0.4729 1.0588 1.0588 v 0.7059 H 15.7647 z")}path[d="M14 8.00598C14 10.211 12.206 12.006 10 12.006C7.795 12.006 6 10.211 6 8.00598C6 5.80098 7.794 4.00598 10 4.00598C12.206 4.00598 14 5.80098 14 8.00598ZM2 19.006C2 15.473 5.29 13.006 10 13.006C14.711 13.006 18 15.473 18 19.006V20.006H2V19.006Z"],path[d="M20.0001 20.006H22.0001V19.006C22.0001 16.4433 20.2697 14.4415 17.5213 13.5352C19.0621 14.9127 20.0001 16.8059 20.0001 19.006V20.006Z"],path[d="M14.8834 11.9077C16.6657 11.5044 18.0001 9.9077 18.0001 8.00598C18.0001 5.96916 16.4693 4.28218 14.4971 4.0367C15.4322 5.09511 16.0001 6.48524 16.0001 8.00598C16.0001 9.44888 15.4889 10.7742 14.6378 11.8102C14.7203 11.8418 14.8022 11.8743 14.8834 11.9077Z"]{d:path("")}path[d="M14 8.00598C14 10.211 12.206 12.006 10 12.006C7.795 12.006 6 10.211 6 8.00598C6 5.80098 7.794 4.00598 10 4.00598C12.206 4.00598 14 5.80098 14 8.00598ZM2 19.006C2 15.473 5.29 13.006 10 13.006C14.711 13.006 18 15.473 18 19.006V20.006H2V19.006Z"]{d:path("M9 13.75c-2.34 0-7 1.17-7 3.5V19h14v-1.75c0-2.33-4.66-3.5-7-3.5zM4.34 17c.84-.58 2.87-1.25 4.66-1.25s3.82.67 4.66 1.25H4.34zM9 12c1.93 0 3.5-1.57 3.5-3.5S10.93 5 9 5 5.5 6.57 5.5 8.5 7.07 12 9 12zm0-5c.83 0 1.5.67 1.5 1.5S9.83 10 9 10s-1.5-.67-1.5-1.5S8.17 7 9 7zm7.04 6.81c1.16.84 1.96 1.96 1.96 3.44V19h4v-1.75c0-2.02-3.5-3.17-5.96-3.44zM15 12c1.93 0 3.5-1.57 3.5-3.5S16.93 5 15 5c-.54 0-1.04.13-1.5.35.63.89 1 1.98 1 3.15s-.37 2.26-1 3.15c.46.22.96.35 1.5.35z")}path[d="M18 9V14C18 15.657 19.344 17 21 17V18H3V17C4.656 17 6 15.657 6 14V9C6 5.686 8.686 3 12 3C15.314 3 18 5.686 18 9ZM11.9999 21C10.5239 21 9.24793 20.19 8.55493 19H15.4449C14.7519 20.19 13.4759 21 11.9999 21Z"]{d:path("M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z")}path[d="M21.178 1.70703L22.592 3.12103L4.12103 21.593L2.70703 20.178L21.178 1.70703Z"],path[d="M18 10.5283L10.5287 18H21V17C19.344 17 18 15.657 18 14V10.5283Z"],path[d="M8.957 19.5718L9.52877 19H15.4449C14.7519 20.19 13.4759 21 11.9999 21C10.7748 21 9.68752 20.442 8.957 19.5718Z"]{d:path("")}path[d="M12 3C13.417 3 14.71 3.5 15.734 4.321L5.99805 14.058C5.99805 14.0479 5.99856 14.038 5.99907 14.0283C5.99956 14.0188 6.00005 14.0094 6.00005 14V9C6.00005 5.686 8.68605 3 12 3Z"]{d:path("M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm0-15.5c2.49 0 4 2.02 4 4.5v.1l2 2V11c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68c-.24.06-.47.15-.69.23l1.64 1.64c.18-.02.36-.05.55-.05zM5.41 3.35L4 4.76l2.81 2.81C6.29 8.57 6 9.74 6 11v5l-2 2v1h14.24l1.74 1.74 1.41-1.41L5.41 3.35zM16 17H8v-6c0-.68.12-1.32.34-1.9L16 16.76V17z")}path[d="M10.418 13L12.708 15.294L11.292 16.706L6.586 11.991L11.294 7.292L12.707 8.708L10.41 11H21.949C21.446 5.955 17.177 2 12 2C6.486 2 2 6.487 2 12C2 17.513 6.486 22 12 22C17.177 22 21.446 18.046 21.949 13H10.418Z"]{d:path("M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z")}path[d="M19.2929 9.8299L19.9409 9.18278C21.353 7.77064 21.353 5.47197 19.9409 4.05892C18.5287 2.64678 16.2292 2.64678 14.817 4.05892L14.1699 4.70694L19.2929 9.8299ZM12.8962 5.97688L5.18469 13.6906L10.3085 18.813L18.0201 11.0992L12.8962 5.97688ZM4.11851 20.9704L8.75906 19.8112L4.18692 15.239L3.02678 19.8796C2.95028 20.1856 3.04028 20.5105 3.26349 20.7337C3.48669 20.9569 3.8116 21.046 4.11851 20.9704Z"]{d:path("M14.06 9.02l.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z")}path[d="M12.2512 2.00309C12.1677 2.00104 12.084 2 12 2C6.477 2 2 6.477 2 12C2 17.522 6.477 22 12 22C17.523 22 22 17.522 22 12C22 11.916 21.999 11.8323 21.9969 11.7488C21.3586 11.9128 20.6895 12 20 12C15.5817 12 12 8.41828 12 4C12 3.31052 12.0872 2.6414 12.2512 2.00309ZM10 8C10 6.896 9.104 6 8 6C6.896 6 6 6.896 6 8C6 9.105 6.896 10 8 10C9.104 10 10 9.105 10 8ZM12 19C15.14 19 18 16.617 18 14V13H6V14C6 16.617 8.86 19 12 19Z"]{d:path("M7,9.5C7,8.67,7.67,8,8.5,8S10,8.67,10,9.5c0,0.83-0.67,1.5-1.5,1.5S7,10.33,7,9.5z M12,17.5c2.33,0,4.31-1.46,5.11-3.5 H6.89C7.69,16.04,9.67,17.5,12,17.5z M15.5,11c0.83,0,1.5-0.67,1.5-1.5C17,8.67,16.33,8,15.5,8S14,8.67,14,9.5 C14,10.33,14.67,11,15.5,11z M22,1h-2v2h-2v2h2v2h2V5h2V3h-2V1z M20,12c0,4.42-3.58,8-8,8s-8-3.58-8-8c0-4.42,3.58-8,8-8 c1.46,0,2.82,0.4,4,1.08V2.84C14.77,2.3,13.42,2,11.99,2C6.47,2,2,6.48,2,12c0,5.52,4.47,10,9.99,10C17.52,22,22,17.52,22,12 c0-1.05-0.17-2.05-0.47-3h-2.13C19.78,9.93,20,10.94,20,12z")}path[d="M21 3V0H19V3H16V5H19V8H21V5H24V3H21Z"]{d:path("")}path[d="M10 8.26667V4L3 11.4667L10 18.9333V14.56C15 14.56 18.5 16.2667 21 20C20 14.6667 17 9.33333 10 8.26667Z"]{d:path("M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z")}path[d="M10.59 13.41c.41.39.41 1.03 0 1.42-.39.39-1.03.39-1.42 0a5.003 5.003 0 0 1 0-7.07l3.54-3.54a5.003 5.003 0 0 1 7.07 0 5.003 5.003 0 0 1 0 7.07l-1.49 1.49c.01-.82-.12-1.64-.4-2.42l.47-.48a2.982 2.982 0 0 0 0-4.24 2.982 2.982 0 0 0-4.24 0l-3.53 3.53a2.982 2.982 0 0 0 0 4.24zm2.82-4.24c.39-.39 1.03-.39 1.42 0a5.003 5.003 0 0 1 0 7.07l-3.54 3.54a5.003 5.003 0 0 1-7.07 0 5.003 5.003 0 0 1 0-7.07l1.49-1.49c-.01.82.12 1.64.4 2.43l-.47.47a2.982 2.982 0 0 0 0 4.24 2.982 2.982 0 0 0 4.24 0l3.53-3.53a2.982 2.982 0 0 0 0-4.24.973.973 0 0 1 0-1.42z"]{d:path("M17 7h-4v2h4c1.65 0 3 1.35 3 3s-1.35 3-3 3h-4v2h4c2.76 0 5-2.24 5-5s-2.24-5-5-5zm-6 8H7c-1.65 0-3-1.35-3-3s1.35-3 3-3h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-2zm-3-4h8v2H8z")}path[d="M14 3H20C21 3 22.0001 4 22.0001 5V19.0003C22.0001 20 21 21 20 21H14C13 21 6 13 6 13H2V11H6C6 11 13 3 14 3Z"]{d:path("M12 6a9.77 9.77 0 018.82 5.5 9.647 9.647 0 01-2.41 3.12l1.41 1.41c1.39-1.23 2.49-2.77 3.18-4.53C21.27 7.11 17 4 12 4c-1.27 0-2.49.2-3.64.57l1.65 1.65C10.66 6.09 11.32 6 12 6zm-1.07 1.14L13 9.21c.57.25 1.03.71 1.28 1.28l2.07 2.07c.08-.34.14-.7.14-1.07C16.5 9.01 14.48 7 12 7c-.37 0-.72.05-1.07.14zM2.01 3.87l2.68 2.68A11.738 11.738 0 001 11.5C2.73 15.89 7 19 12 19c1.52 0 2.98-.29 4.32-.82l3.42 3.42 1.41-1.41L3.42 2.45 2.01 3.87zm7.5 7.5l2.61 2.61c-.04.01-.08.02-.12.02a2.5 2.5 0 01-2.5-2.5c0-.05.01-.08.01-.13zm-3.4-3.4l1.75 1.75a4.6 4.6 0 00-.36 1.78 4.507 4.507 0 006.27 4.14l.98.98c-.88.24-1.8.38-2.75.38a9.77 9.77 0 01-8.82-5.5c.7-1.43 1.72-2.61 2.93-3.53z")}path[d="M2.99805 4.8C2.99805 3.8055 3.80445 3 4.79805 3H19.198C20.1925 3 20.998 3.8055 20.998 4.8V15.6C20.998 16.5936 20.1925 17.4 19.198 17.4H11.098L7.49805 21V17.4H4.79805C3.80445 17.4 2.99805 16.5936 2.99805 15.6V4.8ZM11.5737 5.16264C11.7336 5.00375 11.9739 4.95652 12.183 5.04208C12.3921 5.12708 12.5279 5.33098 12.5279 5.55487V14.444C12.5279 14.669 12.3921 14.8718 12.183 14.9579C11.9739 15.0435 11.7336 14.9963 11.5737 14.8374L9.1739 12.2217H7.4969C7.18945 12.2217 6.9379 11.9717 6.9379 11.6662V8.33273C6.9379 8.02772 7.18945 7.77716 7.4969 7.77716H9.1739L11.5737 5.16264ZM13.6459 7.22159V6.11044C15.8037 6.11044 17.5589 7.85549 17.5589 9.99944C17.5589 12.1445 15.8037 13.8884 13.6459 13.8884V12.7773C15.1871 12.7773 16.4409 11.5312 16.4409 9.99944C16.4409 8.46829 15.1871 7.22159 13.6459 7.22159ZM15.3229 9.99944C15.3229 9.08108 14.5705 8.33273 13.6459 8.33273V9.44387C13.9539 9.44387 14.2049 9.69332 14.2049 9.99944C14.2049 10.3056 13.9539 10.555 13.6459 10.555V11.6662C14.5705 11.6662 15.3229 10.9189 15.3229 9.99944Z"]{d:path("M17 20c-.29 0-.56-.06-.76-.15-.71-.37-1.21-.88-1.71-2.38-.51-1.56-1.47-2.29-2.39-3-.79-.61-1.61-1.24-2.32-2.53C9.29 10.98 9 9.93 9 9c0-2.8 2.2-5 5-5s5 2.2 5 5h2c0-3.93-3.07-7-7-7S7 5.07 7 9c0 1.26.38 2.65 1.07 3.9.91 1.65 1.98 2.48 2.85 3.15.81.62 1.39 1.07 1.71 2.05.6 1.82 1.37 2.84 2.73 3.55A3.999 3.999 0 0021 18h-2c0 1.1-.9 2-2 2zM7.64 2.64L6.22 1.22C4.23 3.21 3 5.96 3 9s1.23 5.79 3.22 7.78l1.41-1.41C6.01 13.74 5 11.49 5 9s1.01-4.74 2.64-6.36zM11.5 9a2.5 2.5 0 005 0 2.5 2.5 0 00-5 0z")}path[d="M15 3.999V2H9V3.999H3V5.999H21V3.999H15Z"]{d:path("")}path[d="M5 6.99902V18.999C5 20.101 5.897 20.999 7 20.999H17C18.103 20.999 19 20.101 19 18.999V6.99902H5ZM11 17H9V11H11V17ZM15 17H13V11H15V17Z"]{d:path("M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z")}path[d="M33 34.5833V7.49998H35V36.6666H9C6.791 36.6666 5 34.801 5 32.5V7.49998C5 5.19894 6.791 3.33331 9 3.33331H31V30.4166H9C7.8955 30.4166 7 31.3485 7 32.5C7 33.6515 7.8955 34.5833 9 34.5833H33ZM23.9718 9.99998L15.8889 17.9915L12.7086 14.8441L10 17.5058L15.8885 23.3333L26.6667 12.6669L23.9718 9.99998Z"]{d:path("M 23.3333 3.3333 H 10 C 8.1667 3.3333 6.6833 4.8333 6.6833 6.6667 L 6.6667 33.3333 c 0 1.8333 1.4833 3.3333 3.3167 3.3333 H 30 c 1.8333 0 3.3333 -1.5 3.3333 -3.3333 V 13.3333 L 23.3333 3.3333 z M 30 33.3333 H 10 V 6.6667 h 11.6667 v 8.3333 h 8.3333 V 33.3333 z M 14.7 21.75 L 12.3333 24.1 L 18.2333 30 l 9.4333 -9.4333 l -2.35 -2.35 l -7.0667 7.0667 L 14.7 21.75 z")}path[d="M3.9 8.26H2V15.2941H3.9V8.26Z"]{d:path("")}path[d="M19.1 4V5.12659L4.85 8.26447V18.1176C4.85 18.5496 5.1464 18.9252 5.5701 19.0315L9.3701 19.9727C9.4461 19.9906 9.524 20 9.6 20C9.89545 20 10.1776 19.8635 10.36 19.6235L12.7065 16.5242L19.1 17.9304V19.0588H21V4H19.1ZM9.2181 17.9944L6.75 17.3826V15.2113L10.6706 16.0753L9.2181 17.9944Z"]{d:path("M18,11c0,0.67,0,1.33,0,2c1.2,0,2.76,0,4,0c0-0.67,0-1.33,0-2C20.76,11,19.2,11,18,11z M16,17.61c0.96,0.71,2.21,1.65,3.2,2.39c0.4-0.53,0.8-1.07,1.2-1.6c-0.99-0.74-2.24-1.68-3.2-2.4 C16.8,16.54,16.4,17.08,16,17.61z M20.4,5.6C20,5.07,19.6,4.53,19.2,4c-0.99,0.74-2.24,1.68-3.2,2.4c0.4,0.53,0.8,1.07,1.2,1.6 C18.16,7.28,19.41,6.35,20.4,5.6z M4,9c-1.1,0-2,0.9-2,2v2c0,1.1,0.9,2,2,2h1v4h2v-4h1l5,3V6L8,9H4z M9.03,10.71L11,9.53v4.94l-1.97-1.18L8.55,13H8H4v-2h4 h0.55L9.03,10.71z M15.5,12c0-1.33-0.58-2.53-1.5-3.35v6.69C14.92,14.53,15.5,13.33,15.5,12z")}path[d="M22.545 4.87988V5.87988H23.28C23.4126 5.87988 23.52 5.98733 23.52 6.11988V10.6399C23.52 10.7724 23.4126 10.8799 23.28 10.8799H17.76C17.6275 10.8799 17.52 10.7724 17.52 10.6399V6.11988C17.52 5.98733 17.6275 5.87988 17.76 5.87988H18.52V4.87988C18.52 3.75988 19.47 2.87988 20.52 2.87988C21.57 2.87988 22.545 3.75988 22.545 4.87988ZM19.52 5.87988H21.52V4.87988C21.52 4.30845 21.0534 3.87988 20.52 3.87988C19.9867 3.87988 19.52 4.30845 19.52 4.87988V5.87988Z"],path[d="M3.9 8.25981H2V15.2939H3.9V8.25981Z"]{d:path("")}path[d="M4.85 8.26429L15.84 5.84426V10.5599C15.84 11.6202 16.6996 12.4799 17.76 12.4799H21V19.0586H19.1V17.9302L12.7065 16.524L10.36 19.6233C10.1776 19.8633 9.89545 19.9998 9.6 19.9998C9.524 19.9998 9.4461 19.9904 9.3701 19.9725L5.5701 19.0313C5.1464 18.925 4.85 18.5495 4.85 18.1175V8.26429ZM9.2181 17.9942L6.75 17.3824V15.2111L10.6706 16.0751L9.2181 17.9942Z"]{d:path("M18 12v1h4v-1H18zM16 17.61c.96.71 2.21 1.65 3.2 2.39c.4-.53.8-1.07 1.2-1.6c-.99-.74-2.24-1.68-3.2-2.4C16.8 16.54 16.4 17.08 16 17.61zM4 9c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2h1v4h2v-4h1l5 3V6L8 9H4zM9.03 10.71 11 9.53v4.94l-1.97-1.18L8.55 13H8H4v-2h4h.55L9.03 10.71zM15.5 12h-1.5v3.345C14.92 14.53 15.5 13.33 15.5 12zM18.7001 6.3333h-.3333v-.6666c0-.92-.7467-1.6667-1.6667-1.6667s-1.6667.7467-1.6667 1.6667v.6667h-.3333c-.3667 0-.6667.3-.6667.6667v3.3333c0 .3667.3.6667.6667.6667h4c.3667 0 .6667-.3.6667-.6667v-3.3334c0-.3667-.3-.6667-.6667-.6667zm-2 3c-.3667 0-.6667-.3-.6667-.6667s.3-.6667.6667-.6667s.6667.3.6667.6667s-.3.6667-.6667.6667zm-1-3v-.6666c0-.5533.4467-1 1-1s1 .4467 1 1v.6667h-2z")}path[d="M5 2C3.34315 2 2 3.34315 2 5V19C2 20.6569 3.34315 22 5 22H19C20.6569 22 22 20.6569 22 19V5C22 3.34315 20.6569 2 19 2H5ZM8.79741 7.72V16H6.74541V7.72H8.79741ZM13.2097 7.72C16.0897 7.72 17.5897 9.388 17.5897 11.848C17.5897 14.308 16.0537 16 13.2577 16H10.3537V7.72H13.2097ZM13.1497 14.404C14.6137 14.404 15.5257 13.636 15.5257 11.86C15.5257 10.12 14.5537 9.316 13.1497 9.316H12.4057V14.404H13.1497Z"]{d:path("M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M19,19H5V5h14V19z M 9.052 7.72 V 16 H 7 V 7.72 H 9.052 z M 12.856 7.72 C 15.736 7.72 17.236 9.388 17.236 11.848 C 17.236 14.308 15.7 16 12.904 16 H 10 V 7.72 H 12.856 Z M 12.796 14.404 C 14.26 14.404 15.172 13.636 15.172 11.86 C 15.172 10.12 14.2 9.316 12.796 9.316 H 12.052 V 14.404 H 12.796 Z")}path[d="M7.02799 0.333252C3.346 0.333252 0.361328 3.31792 0.361328 6.99992C0.361328 10.6819 3.346 13.6666 7.02799 13.6666C10.71 13.6666 13.6947 10.6819 13.6947 6.99992C13.6947 3.31792 10.7093 0.333252 7.02799 0.333252ZM10.166 9.19525L9.22333 10.1379L7.02799 7.94325L4.83266 10.1379L3.89 9.19525L6.08466 6.99992L3.88933 4.80459L4.832 3.86259L7.02733 6.05792L9.22266 3.86259L10.1653 4.80459L7.97066 6.99992L10.166 9.19525Z"]{d:path("M 11.0833 3.7392 L 10.2608 2.9167 L 7 6.1775 L 3.7392 2.9167 L 2.9167 3.7392 L 6.1775 7 L 2.9167 10.2608 L 3.7392 11.0833 L 7 7.8225 L 10.2608 11.0833 L 11.0833 10.2608 L 7.8225 7 L 11.0833 3.7392 z")}.fa-times{width:24px;height:24px;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16'%3E%3Cpath fill='%23202225' fill-opacity='.8' d='M11.083 3.74l-.822-.823L7 6.177l-3.26-3.26-.823.822L6.177 7l-3.26 3.26.822.823L7 7.823l3.26 3.26.823-.822L7.823 7l3.26-3.26z' fill-rule='evenodd'/%3E%3C/svg%3E");background-size:24px}.fa-times::before{content:""}.notice-2HEN-u .closeButton-30b1gR{background-color:#fff;-webkit-mask-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 16 16'%3E%3Cpath fill='red' fill-opacity='.8' d='M11.083 3.74l-.822-.823L7 6.177l-3.26-3.26-.823.822L6.177 7l-3.26 3.26.822.823L7 7.823l3.26 3.26.823-.822L7.823 7l3.26-3.26z' fill-rule='evenodd'/%3E%3C/svg%3E");-webkit-mask-size:24px;-webkit-mask-position:50% 55%;-webkit-mask-repeat:no-repeat}path[d="M16.293 9.293L17.707 10.707L12 16.414L6.29297 10.707L7.70697 9.293L11 12.586V2H13V12.586L16.293 9.293ZM18 20V18H20V20C20 21.102 19.104 22 18 22H6C4.896 22 4 21.102 4 20V18H6V20H18Z"]{d:path("M18,15v3H6v-3H4v3c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2v-3H18z M17,11l-1.41-1.41L13,12.17V4h-2v8.17L8.41,9.59L7,11l5,5 L17,11z")}path[d="M21.1169 1.11603L22.8839 2.88403L19.7679 6.00003L22.8839 9.11603L21.1169 10.884L17.9999 7.76803L14.8839 10.884L13.1169 9.11603L16.2329 6.00003L13.1169 2.88403L14.8839 1.11603L17.9999 4.23203L21.1169 1.11603ZM18 22H13C6.925 22 2 17.075 2 11V6C2 5.447 2.448 5 3 5H7C7.553 5 8 5.447 8 6V10C8 10.553 7.553 11 7 11H6C6.063 14.938 9 18 13 18V17C13 16.447 13.447 16 14 16H18C18.553 16 19 16.447 19 17V21C19 21.553 18.553 22 18 22Z"]{d:path("M18.59 10.52c1.05.51 2.04 1.15 2.96 1.91l-1.07 1.07c-.58-.47-1.21-.89-1.88-1.27v-1.71m-13.2 0v1.7c-.65.37-1.28.79-1.87 1.27l-1.07-1.07c.91-.75 1.9-1.38 2.94-1.9M12 7C7.46 7 3.34 8.78.29 11.67c-.18.18-.29.43-.29.71s.11.53.29.7l2.48 2.48c.18.18.43.29.71.29.27 0 .52-.1.7-.28.79-.73 1.68-1.36 2.66-1.85.33-.16.56-.51.56-.9v-3.1C8.85 9.25 10.4 9 12 9s3.15.25 4.59.73v3.1c0 .4.23.74.56.9.98.49 1.88 1.11 2.67 1.85.18.17.43.28.7.28.28 0 .53-.11.71-.29l2.48-2.48c.18-.18.29-.43.29-.71s-.11-.53-.29-.71C20.66 8.78 16.54 7 12 7z")}.icon-JRJzJz.iconSize-Ai8Wtu[style*="/assets/d80d1fdc43a3c42134a31a39581160ac.svg"]{background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='none'%3E%3Cpath d='M18.59 10.52c1.05.51 2.04 1.15 2.96 1.91l-1.07 1.07c-.58-.47-1.21-.89-1.88-1.27v-1.71m-13.2 0v1.7c-.65.37-1.28.79-1.87 1.27l-1.07-1.07c.91-.75 1.9-1.38 2.94-1.9M12 7C7.46 7 3.34 8.78.29 11.67c-.18.18-.29.43-.29.71s.11.53.29.7l2.48 2.48c.18.18.43.29.71.29.27 0 .52-.1.7-.28.79-.73 1.68-1.36 2.66-1.85.33-.16.56-.51.56-.9v-3.1C8.85 9.25 10.4 9 12 9s3.15.25 4.59.73v3.1c0 .4.23.74.56.9.98.49 1.88 1.11 2.67 1.85.18.17.43.28.7.28.28 0 .53-.11.71-.29l2.48-2.48c.18-.18.29-.43.29-.71s-.11-.53-.29-.71A16.971 16.971 0 0012 7z' fill='%23B9BBBE'/%3E%3C/svg%3E") !important;width:1.5rem;height:1.5rem;background-size:1.5rem;margin-top:-0.25rem}path[d="M2 4.5C2 3.397 2.897 2.5 4 2.5H20C21.103 2.5 22 3.397 22 4.5V15.5C22 16.604 21.103 17.5 20 17.5H13V19.5H17V21.5H7V19.5H11V17.5H4C2.897 17.5 2 16.604 2 15.5V4.5ZM13.2 14.3375V11.6C9.864 11.6 7.668 12.6625 6 15C6.672 11.6625 8.532 8.3375 13.2 7.6625V5L18 9.6625L13.2 14.3375Z"]{d:path("M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.11-.9-2-2-2H4c-1.11 0-2 .89-2 2v10c0 1.1.89 2 2 2H0v2h24v-2h-4zM4 16V6h16v10.01L4 16zm9-6.87c-3.89.54-5.44 3.2-6 5.87 1.39-1.87 3.22-2.72 6-2.72v2.19l4-3.74L13 7v2.13z")}path[d="M4 2.5C2.897 2.5 2 3.397 2 4.5V15.5C2 16.604 2.897 17.5 4 17.5H11V19.5H7V21.5H17V19.5H13V17.5H20C21.103 17.5 22 16.604 22 15.5V4.5C22 3.397 21.103 2.5 20 2.5H4ZM14.5483 6L16 7.45174L13.4466 9.99485L16 12.5483L14.5483 14L12.0051 11.4466L9.45174 14L8 12.5483L10.5534 9.99485L8 7.45174L9.45174 6L12.0051 8.55341L14.5483 6Z"]{d:path("M21.79 18l2 2H24v-2h-2.21zM1.11 2.98l1.55 1.56c-.41.37-.66.89-.66 1.48V16c0 1.1.9 2 2.01 2H0v2h18.13l2.71 2.71 1.41-1.41L2.52 1.57 1.11 2.98zM4 6.02h.13l4.95 4.93C7.94 12.07 7.31 13.52 7 15c.96-1.29 2.13-2.08 3.67-2.46l3.46 3.48H4v-10zm16 0v10.19l1.3 1.3c.42-.37.7-.89.7-1.49v-10c0-1.11-.9-2-2-2H7.8l2 2H20zm-7.07 3.13l2.79 2.78 1.28-1.2L13 7v2.13l-.07.02z")}path[d="M10 0C4.486 0 0 4.486 0 10C0 15.515 4.486 20 10 20C15.514 20 20 15.515 20 10C20 4.486 15.514 0 10 0ZM9 4H11V11H9V4ZM10 15.25C9.31 15.25 8.75 14.691 8.75 14C8.75 13.31 9.31 12.75 10 12.75C10.69 12.75 11.25 13.31 11.25 14C11.25 14.691 10.69 15.25 10 15.25Z"]{d:path("M 9.1667 5.8333 h 1.6667 v 1.6667 h -1.6667 z m 0 3.3333 h 1.6667 v 5 h -1.6667 z m 0.8333 -7.5 C 5.4 1.6667 1.6667 5.4 1.6667 10 s 3.7333 8.3333 8.3333 8.3333 s 8.3333 -3.7333 8.3333 -8.3333 S 14.6 1.6667 10 1.6667 z m 0 15 c -3.675 0 -6.6667 -2.9917 -6.6667 -6.6667 s 2.9917 -6.6667 6.6667 -6.6667 s 6.6667 2.9917 6.6667 6.6667 s -2.9917 6.6667 -6.6667 6.6667 z")}path[d="M5,14H3v5a2,2,0,0,0,2,2h5V19H5Z"],path[d="M19,19H14v2h5a2,2,0,0,0,2-2V14H19Z"],path[d="M19,3H14V5h5v5h2V5A2,2,0,0,0,19,3Z"]{d:path("")}path[d="M3,5v5H5V5h5V3H5A2,2,0,0,0,3,5Z"]{d:path("M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z")}path[d="M14,16v5h2V16h5V14H16A2,2,0,0,0,14,16Z"],path[d="M8,8H3v2H8a2,2,0,0,0,2-2V3H8Z"],path[d="M8,14H3v2H8v5h2V16A2,2,0,0,0,8,14Z"]{d:path("")}path[d="M16,8V3H14V8a2,2,0,0,0,2,2h5V8Z"]{d:path("M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z")}path[d="M4 2.5C2.897 2.5 2 3.397 2 4.5V15.5C2 16.604 2.897 17.5 4 17.5H11V19.5H7V21.5H17V19.5H13V17.5H20C21.103 17.5 22 16.604 22 15.5V4.5C22 3.397 21.103 2.5 20 2.5H4ZM20 4.5V13.5H4V4.5H20Z"]{d:path("M21 2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7v2H8v2h8v-2h-2v-2h7c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H3V4h18v12z")}path[d="M10 5V3H5.375C4.06519 3 3 4.06519 3 5.375V18.625C3 19.936 4.06519 21 5.375 21H18.625C19.936 21 21 19.936 21 18.625V14H19V19H5V5H10Z"]{d:path("")}path[d="M21 2.99902H14V4.99902H17.586L9.29297 13.292L10.707 14.706L19 6.41302V9.99902H21V2.99902Z"]{d:path("M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z")}path[d="M4.79805 3C3.80445 3 2.99805 3.8055 2.99805 4.8V15.6C2.99805 16.5936 3.80445 17.4 4.79805 17.4H7.49805V21L11.098 17.4H19.198C20.1925 17.4 20.998 16.5936 20.998 15.6V4.8C20.998 3.8055 20.1925 3 19.198 3H4.79805Z"]{d:path("M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z")}path[d="M20.998 0V3H23.998V5H20.998V8H18.998V5H15.998V3H18.998V0H20.998ZM2.99805 20V24L8.33205 20H14.998C16.102 20 16.998 19.103 16.998 18V9C16.998 7.896 16.102 7 14.998 7H1.99805C0.894047 7 -0.00195312 7.896 -0.00195312 9V18C-0.00195312 19.103 0.894047 20 1.99805 20H2.99805Z"]{d:path("M 22 4 C 22 2.9 21.1 2 20 2 H 4 c -1.1 0 -2 0.9 -2 2 v 12 H 22 c 0 1.1 -0.9 2 -2 2 h -14 l -4 4 V 4 z H 6 h 14 v 12 L 22 16 L 22 4 L 22 16 z M 13 5 h -2 v 4 H 7 v 2 h 4 v 4 h 2 v -4 h 4 V 9 h -4 z m -11 -1 L 2 16 L 4 16 L 4 17 L 5 16 L 4 16 L 4 4")}path[d="M20.2949 0.298996L21.7089 1.713L19.4169 4.006L21.7089 6.299L20.2949 7.713L18.0019 5.42L15.7099 7.713L14.2949 6.299L16.5879 4.006L14.2949 1.713L15.7099 0.298996L18.0019 2.592L20.2949 0.298996ZM8.00195 13.006C10.207 13.006 12.002 11.211 12.002 9.006C12.002 6.801 10.207 5.006 8.00195 5.006C5.79695 5.006 4.00195 6.801 4.00195 9.006C4.00195 11.211 5.79695 13.006 8.00195 13.006ZM8.00195 14.006C3.29095 14.006 0.00195312 16.473 0.00195312 20.006V21.006H16.002V20.006C16.002 16.473 12.713 14.006 8.00195 14.006Z"]{d:path("M 14 8 c 0 -2.21 -1.79 -4 -4 -4 C 7.79 4 6 5.79 6 8 c 0 2.21 1.79 4 4 4 C 12.21 12 14 10.21 14 8 z M 12 8 c 0 1.1 -0.9 2 -2 2 c -1.1 0 -2 -0.9 -2 -2 s 0.9 -2 2 -2 C 11.1 6 12 6.9 12 8 z M 2 18 v 2 h 16 v -2 c 0 -2.66 -5.33 -4 -8 -4 C 7.33 14 2 15.34 2 18 z M 4 18 c 0.2 -0.71 3.3 -2 6 -2 c 2.69 0 5.77 1.28 6 2 H 4 z M 17 10 H 23 V 12 H 17 V 10")}path[d="M20 7H12L10.553 5.106C10.214 4.428 9.521 4 8.764 4H3C2.447 4 2 4.447 2 5V19C2 20.104 2.895 21 4 21H20C21.104 21 22 20.104 22 19V9C22 7.896 21.104 7 20 7ZM16 15H13V18H11V15H8V13H11V10H13V13H16V15Z"]{d:path("M20 6h-8l-2-2H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm0 12H4V6h5.17l2 2H20v10zm-8-4h2v2h2v-2h2v-2h-2v-2h-2v2h-2z")}path[d="M8.99991 16.17L4.82991 12L3.40991 13.41L8.99991 19L20.9999 7.00003L19.5899 5.59003L8.99991 16.17Z"]{d:path("M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z")}path[d="M18.4 4L12 10.4L5.6 4L4 5.6L10.4 12L4 18.4L5.6 20L12 13.6L18.4 20L20 18.4L13.6 12L20 5.6L18.4 4Z"]{d:path("M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z")}path[d="M19 6.00001C15.56 6.00001 12.826 2.43501 12.799 2.39801C12.421 1.89801 11.579 1.89801 11.201 2.39801C11.174 2.43501 8.44 6.00001 5 6.00001C4.447 6.00001 4 6.44801 4 7.00001V14C4 17.807 10.764 21.478 11.534 21.884C11.68 21.961 11.84 21.998 12 21.998C12.16 21.998 12.32 21.96 12.466 21.884C13.236 21.478 20 17.807 20 14V7.00001C20 6.44801 19.553 6.00001 19 6.00001ZM15 16L12 14L9 16L10 13L8 11H11L12 8.00001L13 11H16L14 13L15 16Z"]{d:path("M12,1L3,5v6c0,5.55,3.84,10.74,9,12c5.16-1.26,9-6.45,9-12V5L12,1z M19,11c0,1.85-0.51,3.65-1.38,5.21l-1.45-1.45 c1.29-1.94,1.07-4.58-0.64-6.29c-1.95-1.95-5.12-1.95-7.07,0c-1.95,1.95-1.95,5.12,0,7.07c1.71,1.71,4.35,1.92,6.29,0.64 l1.72,1.72c-1.19,1.42-2.73,2.51-4.47,3.04C7.98,19.69,5,15.52,5,11V6.3l7-3.11l7,3.11V11z M12,15c-1.66,0-3-1.34-3-3s1.34-3,3-3 s3,1.34,3,3S13.66,15,12,15z")}path[d="M12 10.9C11.39 10.9 10.9 11.39 10.9 12C10.9 12.61 11.39 13.1 12 13.1C12.61 13.1 13.1 12.61 13.1 12C13.1 11.39 12.61 10.9 12 10.9ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM14.19 14.19L6 18L9.81 9.81L18 6L14.19 14.19Z"]{d:path("M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z")}path[d="M7 10L12 15 17 10"]{d:path("M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z")}[aria-label=Gitter],[aria-label=Raster],[aria-label=Grid],[aria-label=Cuadrícula],[aria-label=Grille],[aria-label=Rešetka],[aria-label=Riquadri],[aria-label=Tinklelis],[aria-label="Osztott képernyő"],[aria-label=Rutenett],[aria-label=Siatka],[aria-label=Grade],[aria-label=Grilă],[aria-label=Ruudukko],[aria-label=Rutnät],[aria-label="Dạng lưới"],[aria-label="Karelere Ayır"],[aria-label=Mřížka],[aria-label=Πλέγμα],[aria-label=Решетка],[aria-label=Решётка],[aria-label=Плитка],[aria-label=ग्रिड],[aria-label=กริด],[aria-label=多人网格],[aria-label=グリッド],[aria-label=網格],[aria-label=그리드]{background-color:var(--interactive-normal);-webkit-mask-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath fill='none' d='M0 0h24v24H0z'/%3E%3Cpath d='M3 3v8h8V3H3zm6 6H5V5h4v4zm-6 4v8h8v-8H3zm6 6H5v-4h4v4zm4-16v8h8V3h-8zm6 6h-4V5h4v4zm-6 4v8h8v-8h-8zm6 6h-4v-4h4v4z'/%3E%3C/svg%3E");mask-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath fill='none' d='M0 0h24v24H0z'/%3E%3Cpath d='M3 3v8h8V3H3zm6 6H5V5h4v4zm-6 4v8h8v-8H3zm6 6H5v-4h4v4zm4-16v8h8V3h-8zm6 6h-4V5h4v4zm-6 4v8h8v-8h-8zm6 6h-4v-4h4v4z'/%3E%3C/svg%3E")}[aria-label=Gitter] svg,[aria-label=Raster] svg,[aria-label=Grid] svg,[aria-label=Cuadrícula] svg,[aria-label=Grille] svg,[aria-label=Rešetka] svg,[aria-label=Riquadri] svg,[aria-label=Tinklelis] svg,[aria-label="Osztott képernyő"] svg,[aria-label=Rutenett] svg,[aria-label=Siatka] svg,[aria-label=Grade] svg,[aria-label=Grilă] svg,[aria-label=Ruudukko] svg,[aria-label=Rutnät] svg,[aria-label="Dạng lưới"] svg,[aria-label="Karelere Ayır"] svg,[aria-label=Mřížka] svg,[aria-label=Πλέγμα] svg,[aria-label=Решетка] svg,[aria-label=Решётка] svg,[aria-label=Плитка] svg,[aria-label=ग्रिड] svg,[aria-label=กริด] svg,[aria-label=多人网格] svg,[aria-label=グリッド] svg,[aria-label=網格] svg,[aria-label=그리드] svg{color:transparent !important}[aria-label=Fokuseret],[aria-label=Zentriert],[aria-label=Focus],[aria-label=Centrar],[aria-label=Focalisation],[aria-label=Fokus],[aria-label="In primo piano"],[aria-label=Fokusavimas],[aria-label=Kiemelés],[aria-label=Fokus],[aria-label=Przybliżenie],[aria-label=Foco],[aria-label=Focalizare],[aria-label=Tarkenna],[aria-label=Fokusera],[aria-label="Dạng tiêu điểm"],[aria-label=Odakla],[aria-label=Zaostření],[aria-label=Εστίαση],[aria-label=Фокус],[aria-label=Фокусировка],[aria-label=Фокус],[aria-label=फोकस],[aria-label=โฟกัส],[aria-label=聚焦一人],[aria-label=フォーカス],[aria-label=專注模式],[aria-label=포커스]{background-color:var(--interactive-normal);-webkit-mask-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath fill='none' d='M0 0h24v24H0z'/%3E%3Cpath d='M2 4v16h20V4H2zm18 4.67h-2.5V6H20v2.67zm-2.5 2H20v2.67h-2.5v-2.67zM4 6h11.5v12H4V6zm13.5 12v-2.67H20V18h-2.5z'/%3E%3C/svg%3E");mask-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath fill='none' d='M0 0h24v24H0z'/%3E%3Cpath d='M2 4v16h20V4H2zm18 4.67h-2.5V6H20v2.67zm-2.5 2H20v2.67h-2.5v-2.67zM4 6h11.5v12H4V6zm13.5 12v-2.67H20V18h-2.5z'/%3E%3C/svg%3E")}[aria-label=Fokuseret] svg,[aria-label=Zentriert] svg,[aria-label=Focus] svg,[aria-label=Centrar] svg,[aria-label=Focalisation] svg,[aria-label=Fokus] svg,[aria-label="In primo piano"] svg,[aria-label=Fokusavimas] svg,[aria-label=Kiemelés] svg,[aria-label=Fokus] svg,[aria-label=Przybliżenie] svg,[aria-label=Foco] svg,[aria-label=Focalizare] svg,[aria-label=Tarkenna] svg,[aria-label=Fokusera] svg,[aria-label="Dạng tiêu điểm"] svg,[aria-label=Odakla] svg,[aria-label=Zaostření] svg,[aria-label=Εστίαση] svg,[aria-label=Фокус] svg,[aria-label=Фокусировка] svg,[aria-label=Фокус] svg,[aria-label=फोकस] svg,[aria-label=โฟกัส] svg,[aria-label=聚焦一人] svg,[aria-label=フォーカス] svg,[aria-label=專注模式] svg,[aria-label=포커스] svg{color:transparent !important}path[d="M13.5605 11L11.2646 8.706L12.6842 7.294L17.4023 12.009L12.6822 16.708L11.2656 15.292L13.5685 13H2C2.50429 18.045 6.7842 22 11.9744 22C17.5025 22 22 17.513 22 12C22 6.487 17.5025 2 11.9744 2C6.7842 2 2.50429 5.954 2 11H13.5605Z"]{d:path("M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z")}path[d="M21.3251 23.4001L19.1101 19.0301C18.8501 18.5201 18.2501 18.2851 17.7151 18.4851L12.3101 20.5101C12.0201 20.6201 11.7851 20.8451 11.6651 21.1351C11.5451 21.4251 11.5551 21.7501 11.6851 22.0301L12.3151 23.3951H21.3251V23.4001Z"]{d:path("")}path[d="M21.03 7.76998C20.955 7.60998 20.81 7.48998 20.635 7.44498C20.545 7.41998 20.445 7.39498 20.35 7.36998C19.805 7.22998 19.135 7.56498 18.85 8.11498L17.87 9.99998C17.585 10.55 17.225 10.51 17.07 9.90998L14.895 1.38498C14.74 0.779981 14.14 0.459981 13.55 0.664981C12.96 0.869981 12.595 1.52498 12.725 2.13498L13.995 7.95998C14.13 8.56998 14.075 9.11498 13.875 9.18498C13.675 9.25498 13.35 8.83498 13.15 8.24498L11.05 2.07498C10.85 1.48498 10.21 1.17498 9.62004 1.37998C9.03004 1.58498 8.71504 2.22998 8.91004 2.81998L10.97 8.99998C11.165 9.58998 11.165 10.125 10.965 10.195C10.765 10.265 10.385 9.86498 10.125 9.29998L7.77504 4.29998C7.51004 3.73998 6.82004 3.44498 6.23004 3.64998C5.64504 3.85498 5.37504 4.47498 5.64004 5.03998L8.60004 11.045C8.86004 11.61 8.91004 12.125 8.71004 12.195C8.51004 12.265 8.03004 11.93 7.64004 11.445L5.60504 8.82498C5.21504 8.33998 4.54004 8.07498 4.09504 8.22998C3.65504 8.38498 3.54004 8.94498 3.84504 9.48998L6.34504 13.865C6.40004 14.02 7.85504 16.8 7.96004 16.915C9.00004 18.565 10.645 19.51 12.73 18.79L14.91 18.035C16.145 17.605 17.095 16.735 17.63 15.7C17.64 15.69 20.15 10.205 21.03 8.28498C21.105 8.11498 21.105 7.92998 21.03 7.76998Z"]{d:path("M18 24h-6.55c-1.08 0-2.14-.45-2.89-1.23l-7.3-7.61 2.07-1.83c.62-.55 1.53-.66 2.26-.27L8 14.34V4.79c0-1.38 1.12-2.5 2.5-2.5.17 0 .34.02.51.05.09-1.3 1.17-2.33 2.49-2.33.86 0 1.61.43 2.06 1.09.29-.12.61-.18.94-.18 1.38 0 2.5 1.12 2.5 2.5v.28c.16-.03.33-.05.5-.05 1.38 0 2.5 1.12 2.5 2.5V20c0 2.21-1.79 4-4 4zM4.14 15.28l5.86 6.1c.38.39.9.62 1.44.62H18c1.1 0 2-.9 2-2V6.15c0-.28-.22-.5-.5-.5s-.5.22-.5.5V12h-2V3.42c0-.28-.22-.5-.5-.5s-.5.22-.5.5V12h-2V2.51c0-.28-.22-.5-.5-.5s-.5.22-.5.5V12h-2V4.79c0-.28-.22-.5-.5-.5s-.5.23-.5.5v12.87l-5.35-2.83-.51.45z")}path[d="M4,0 L4,3 L0,3 L0,0 L4,0 Z M12,4 L12,7 L8,7 L8,4 L12,4 Z M8,9 L12,9 L12,12 L8,12 L8,9.33333333 L8,9 Z M7,7 L3,7 L3,10 L7,10 L7,12 L3,12 L1,12 L1,4 L3,4 L3,5 L7,5 L7,7 Z"]{d:path("M22,11V3h-7v3H9V3H2v8h7V8h2v10h4v3h7v-8h-7v3h-2V8h2v3H22z M7,9H4V5h3V9z M17,15h3v4h-3V15z M17,5h3v4h-3V5z");transform:scale(0.6666666667)}path[d="M17 11V7C17 4.243 14.756 2 12 2C9.242 2 7 4.243 7 7V11C5.897 11 5 11.896 5 13V20C5 21.103 5.897 22 7 22H17C18.103 22 19 21.103 19 20V13C19 11.896 18.103 11 17 11ZM12 18C11.172 18 10.5 17.328 10.5 16.5C10.5 15.672 11.172 15 12 15C12.828 15 13.5 15.672 13.5 16.5C13.5 17.328 12.828 18 12 18ZM15 11H9V7C9 5.346 10.346 4 12 4C13.654 4 15 5.346 15 7V11Z"]{d:path("M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z")}path[d="M5.79335761,5 L18.2066424,5 C19.7805584,5 21.0868816,6.21634264 21.1990185,7.78625885 L21.8575059,17.0050826 C21.9307825,18.0309548 21.1585512,18.9219909 20.132679,18.9952675 C20.088523,18.9984215 20.0442685,19 20,19 C18.8245863,19 17.8000084,18.2000338 17.5149287,17.059715 L17,15 L7,15 L6.48507125,17.059715 C6.19999155,18.2000338 5.1754137,19 4,19 C2.97151413,19 2.13776159,18.1662475 2.13776159,17.1377616 C2.13776159,17.0934931 2.1393401,17.0492386 2.1424941,17.0050826 L2.80098151,7.78625885 C2.91311838,6.21634264 4.21944161,5 5.79335761,5 Z M14.5,10 C15.3284271,10 16,9.32842712 16,8.5 C16,7.67157288 15.3284271,7 14.5,7 C13.6715729,7 13,7.67157288 13,8.5 C13,9.32842712 13.6715729,10 14.5,10 Z M18.5,13 C19.3284271,13 20,12.3284271 20,11.5 C20,10.6715729 19.3284271,10 18.5,10 C17.6715729,10 17,10.6715729 17,11.5 C17,12.3284271 17.6715729,13 18.5,13 Z M6,9 L4,9 L4,11 L6,11 L6,13 L8,13 L8,11 L10,11 L10,9 L8,9 L8,7 L6,7 L6,9 Z"]{d:path("M21.58,16.09l-1.09-7.66C20.21,6.46,18.52,5,16.53,5H7.47C5.48,5,3.79,6.46,3.51,8.43l-1.09,7.66 C2.2,17.63,3.39,19,4.94,19h0c0.68,0,1.32-0.27,1.8-0.75L9,16h6l2.25,2.25c0.48,0.48,1.13,0.75,1.8,0.75h0 C20.61,19,21.8,17.63,21.58,16.09z M19.48,16.81C19.4,16.9,19.27,17,19.06,17c-0.15,0-0.29-0.06-0.39-0.16L15.83,14H8.17 l-2.84,2.84C5.23,16.94,5.09,17,4.94,17c-0.21,0-0.34-0.1-0.42-0.19c-0.08-0.09-0.16-0.23-0.13-0.44l1.09-7.66 C5.63,7.74,6.48,7,7.47,7h9.06c0.99,0,1.84,0.74,1.98,1.72l1.09,7.66C19.63,16.58,19.55,16.72,19.48,16.81z M9,8L8 8 8 10 6 10 6 11 8 11 8 13 9 13 9 11 11 11 11 10 9 10z M16,12a1,1 0 1,0 2,0a1,1 0 1,0 -2,0 M14,9a1,1 0 1,0 2,0a1,1 0 1,0 -2,0 z")}path[d="M19.396 3.29898C19.016 3.01598 18.524 2.93098 18.07 3.06498L8.07 6.06498C7.435 6.25498 7 6.83998 7 7.50298V15.054C6.835 15.03 6.671 15.003 6.5 15.003C4.566 15.003 3 16.571 3 18.503C3 20.434 4.566 22.003 6.5 22.003C8.434 22.003 10 20.434 10 18.503V8.61798L17 6.51798V13.054C16.835 13.03 16.671 13.003 16.5 13.003C14.566 13.003 13 14.571 13 16.503C13 18.434 14.566 20.003 16.5 20.003C18.434 20.003 20 18.434 20 16.503V4.50298C20 4.02698 19.775 3.58198 19.396 3.29898Z"]{d:path("M12 3l.01 10.55c-.59-.34-1.27-.55-2-.55C7.79 13 6 14.79 6 17s1.79 4 4.01 4S14 19.21 14 17V7h4V3h-6zm-1.99 16c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z")}path[d="M22.447 8.11002L12.447 3.11002C12.166 2.96902 11.834 2.96902 11.552 3.11002L1.552 8.11002C1.35 8.21002 1.197 8.38402 1.107 8.57302C1.046 8.69502 1 8.90202 1 9.00502V14.77C1 15.322 1.448 15.77 2 15.77C2.552 15.77 3 15.322 3 14.77V10.172L12.015 13.927L22.372 9.93302C22.737 9.78602 22.983 9.44002 22.999 9.04602C23.016 8.65202 22.799 8.28702 22.447 8.11002ZM12 16.005C11.869 16.005 11.738 15.979 11.615 15.928L5 13.172V16.185C5 16.564 5.214 16.91 5.553 17.08C5.7173 17.1621 5.88209 17.2461 6.04836 17.3308C7.61773 18.1306 9.31996 18.998 12 18.998C14.6812 18.998 16.3872 18.1284 17.956 17.3287C18.1208 17.2447 18.2842 17.1614 18.447 17.08C18.786 16.911 19 16.564 19 16.186V13.385L12.359 15.939C12.243 15.982 12.122 16.005 12 16.005ZM1 18.005C1 17.453 1.448 17.005 2 17.005C2.552 17.005 3 17.453 3 18.005V20.005C3 20.557 2.552 21.005 2 21.005C1.448 21.005 1 20.557 1 20.005V18.005Z"]{d:path("M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z")}path[d="M16.781 2.27293L14.081 5.7126H9.919L7.219 2.27293L8.781 1L12 5.10008L15.219 1L16.781 2.27293ZM4 6.73175H20C21.1 6.73175 22 7.649 22 8.77007V18.9617C22 20.0828 21.1 21 20 21H4C2.9 21 2 20.0828 2 18.9617V8.77007C2 7.649 2.9 6.73175 4 6.73175ZM4 18.9617H16V8.77007H4V18.9617ZM18 16.4138C18 16.9764 18.448 17.4329 19 17.4329C19.552 17.4329 20 16.9764 20 16.4138C20 15.8512 19.552 15.3946 19 15.3946C18.448 15.3946 18 15.8512 18 16.4138ZM18 11.318C18 11.8806 18.448 12.3371 19 12.3371C19.552 12.3371 20 11.8806 20 11.318C20 10.7554 19.552 10.2988 19 10.2988C18.448 10.2988 18 10.7554 18 11.318Z"]{d:path("M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.1-.9-2-2-2zm0 14H3V5h18v12z")}.userSettingsSecurity-3C5Hg5 .lockIcon-1FHuKP{width:10px;height:14px;padding-left:10px;-webkit-mask-size:14px 14px;-webkit-mask-position:center;-webkit-mask-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z'/%3E%3C/svg%3E");background-color:var(--online)}path[d="M21.924 8.61789C21.77 8.24489 21.404 8.00089 21 8.00089H15.618L12.894 2.55389C12.555 1.87689 11.444 1.87689 11.105 2.55389L8.38199 8.00089H2.99999C2.59599 8.00089 2.22999 8.24489 2.07599 8.61789C1.92199 8.99089 2.00699 9.42289 2.29299 9.70789L6.87699 14.2919L5.03899 20.7269C4.92399 21.1299 5.07199 21.5619 5.40999 21.8089C5.74999 22.0569 6.20699 22.0659 6.55399 21.8329L12 18.2029L17.445 21.8329C17.613 21.9449 17.806 22.0009 18 22.0009C18.207 22.0009 18.414 21.9369 18.59 21.8089C18.928 21.5619 19.076 21.1299 18.961 20.7269L17.123 14.2919L21.707 9.70789C21.993 9.42289 22.078 8.99089 21.924 8.61789Z"]{d:path("M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z")}path[d="M12 2C6.4764 2 2 6.4764 2 12C2 17.5236 6.4764 22 12 22C17.5236 22 22 17.5236 22 12C22 6.4764 17.5236 2 12 2ZM12 5.6C12.4422 5.6 12.8 5.95781 12.8 6.4V11.5376L16.5625 13.7126C16.9453 13.9329 17.0703 14.4173 16.85 14.8001C16.6297 15.183 16.1453 15.3079 15.7625 15.0876L11.6873 12.7376C11.656 12.7251 11.6279 12.7048 11.5998 12.6876C11.3607 12.5486 11.1998 12.2954 11.1998 12.0001V6.4001C11.1998 5.9579 11.5578 5.6 12 5.6Z"]{d:path("M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z")}path[d="M12 2C6.477 2 2 6.477 2 12C2 17.522 6.477 22 12 22C17.523 22 22 17.522 22 12C22 6.477 17.523 2 12 2ZM8 6C9.104 6 10 6.896 10 8C10 9.105 9.104 10 8 10C6.896 10 6 9.105 6 8C6 6.896 6.896 6 8 6ZM18 14C18 16.617 15.14 19 12 19C8.86 19 6 16.617 6 14V13H18V14ZM16 10C14.896 10 14 9.105 14 8C14 6.896 14.896 6 16 6C17.104 6 18 6.896 18 8C18 9.105 17.104 10 16 10Z"]{d:path("M 11.99,2 C 6.47,2 2,6.48 2,12 2,17.52 6.47,22 11.99,22 17.52,22 22,17.52 22,12 22,6.48 17.52,2 11.99,2 Z M 12,20 C 7.58,20 4,16.42 4,12 4,7.58 7.58,4 12,4 c 4.42,0 8,3.58 8,8 0,4.42 -3.58,8 -8,8 z m 0,-2 c 2.28,0 4.22,-1.66 5,-4 H 7 c 0.78,2.34 2.72,4 5,4 z M 10,9.5 A 1.5,1.5 0 0 1 8.5,11 1.5,1.5 0 0 1 7,9.5 1.5,1.5 0 0 1 8.5,8 1.5,1.5 0 0 1 10,9.5 Z m 7,0 A 1.5,1.5 0 0 1 15.5,11 1.5,1.5 0 0 1 14,9.5 1.5,1.5 0 0 1 15.5,8 1.5,1.5 0 0 1 17,9.5 Z")}path[d="M12 2C6.477 2 2 6.477 2 12C2 17.522 6.477 22 12 22C17.523 22 22 17.522 22 12C22 6.477 17.522 2 12 2ZM16.293 6.293L17.707 7.706L16.414 9L17.707 10.293L16.293 11.706L13.586 9L16.293 6.293ZM6.293 7.707L7.707 6.294L10.414 9L7.707 11.707L6.293 10.294L7.586 9L6.293 7.707ZM12 19C9.609 19 7.412 17.868 6 16.043L7.559 14.486C8.555 15.92 10.196 16.831 12 16.831C13.809 16.831 15.447 15.92 16.443 14.481L18 16.04C16.59 17.867 14.396 19 12 19Z"]{d:path("M10.25 13c0 .69-.56 1.25-1.25 1.25S7.75 13.69 7.75 13s.56-1.25 1.25-1.25 1.25.56 1.25 1.25zM15 11.75c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zm7 .25c0 5.52-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2s10 4.48 10 10zM10.66 4.12C12.06 6.44 14.6 8 17.5 8c.46 0 .91-.05 1.34-.12C17.44 5.56 14.9 4 12 4c-.46 0-.91.05-1.34.12zM4.42 9.47c1.71-.97 3.03-2.55 3.66-4.44C6.37 6 5.05 7.58 4.42 9.47zM20 12c0-.78-.12-1.53-.33-2.24-.7.15-1.42.24-2.17.24-3.13 0-5.92-1.44-7.76-3.69C8.69 8.87 6.6 10.88 4 11.86c.01.04 0 .09 0 .14 0 4.41 3.59 8 8 8s8-3.59 8-8z")}path[d="M6.814 8.982C4.539 11.674 4.656 15.591 6.931 18.153L4.034 21.579L5.561 22.87L8.463 19.437C9.569 20.127 10.846 20.513 12.161 20.513C14.231 20.513 16.183 19.607 17.516 18.027C20.069 15.01 20.771 6.945 21 3C17.765 3.876 9.032 6.356 6.814 8.982V8.982ZM8.935 17.331C6.826 15.548 6.56 12.382 8.342 10.272C9.592 8.793 14.904 6.845 18.764 5.698L8.935 17.331V17.331Z"]{d:path("M 13.49,10.51 C 13.06,10.08 12.55,9.78 12,9.58 V 8 H 11 V 9.38 C 10.89,9.37 10.77,9.35 10.66,9.35 c -1.02,0 -2.05,0.39 -2.83,1.17 -0.12,0.12 -0.3,0.3 -0.5,0.5 L 6,10.52 c -1.56,-0.55 -3.28,0.27 -3.83,1.82 0,0 0,0 0,0 -0.27,0.75 -0.23,1.57 0.12,2.29 0.23,0.48 0.58,0.87 1,1.16 -0.38,1.35 -0.06,2.85 1,3.91 0.78,0.78 1.8,1.17 2.83,1.17 0.37,0 0.73,-0.07 1.09,-0.17 0.29,0.42 0.68,0.77 1.16,1 0.41,0.2 0.84,0.3 1.28,0.3 0.34,0 0.68,-0.06 1.01,-0.17 0,0 0,0 0,0 1.56,-0.55 2.38,-2.27 1.82,-3.85 l -0.49,-1.3 c 0.2,-0.2 0.38,-0.38 0.5,-0.5 0.87,-0.87 1.24,-2.04 1.14,-3.17 H 16 v -1 h -1.59 c -0.19,-0.55 -0.49,-1.06 -0.92,-1.5 z m -5.91,8.31 c -0.15,0.04 -0.3,0.06 -0.46,0.06 -0.53,0 -1.04,-0.21 -1.41,-0.59 -0.38,-0.38 -0.59,-0.88 -0.59,-1.41 0,-0.16 0.03,-0.32 0.06,-0.47 0.14,0.01 0.28,0.03 0.42,0.03 0.85,0 1.68,-0.2 2.44,-0.48 -0.32,0.89 -0.54,1.87 -0.46,2.86 z M 4.67,14.29 C 4.42,14.2 4.22,14.02 4.1,13.78 3.98,13.54 3.97,13.27 4.06,13.02 4.25,12.5 4.82,12.23 5.32,12.41 l 3.16,1.19 c -1.15,0.6 -2.63,1.11 -3.81,0.69 z m 6.32,5.65 C 10.74,20.03 10.47,20.02 10.23,19.9 9.99,19.79 9.81,19.58 9.72,19.33 9.3,18.15 9.81,16.68 10.42,15.53 l 1.18,3.13 c 0.18,0.52 -0.09,1.1 -0.61,1.28 z M 12.2,14.6 11.59,12.99 c 0,-0.01 -0.01,-0.02 -0.02,-0.03 C 11.55,12.92 11.53,12.88 11.51,12.84 11.49,12.8 11.47,12.77 11.44,12.73 11.41,12.7 11.38,12.67 11.35,12.64 11.32,12.61 11.29,12.58 11.26,12.55 11.23,12.52 11.19,12.5 11.15,12.48 11.11,12.46 11.08,12.43 11.03,12.42 11.02,12.42 11.01,12.41 11,12.4 L 9.4,11.8 c 0.36,-0.29 0.79,-0.46 1.26,-0.46 0.53,0 1.04,0.21 1.41,0.59 0.73,0.73 0.77,1.88 0.13,2.67 z M 21.94,4.88 C 21.76,4.35 21.25,4 20.68,4 20.65,4 20.62,4 20.59,4 H 19.6 L 19.29,3.03 C 19.15,2.43 18.61,2 18,2 V 2 C 17.39,2 16.85,2.43 16.71,3.04 L 16.4,4 h -0.98 c -0.03,0 -0.06,0 -0.09,0 -0.57,0 -1.08,0.35 -1.26,0.88 -0.19,0.56 0.04,1.17 0.56,1.48 l 0.87,0.52 -0.4,1.24 c -0.23,0.58 -0.04,1.25 0.45,1.62 0.23,0.17 0.51,0.26 0.78,0.26 0.31,0 0.61,-0.11 0.86,-0.32 L 18,8.98 18.81,9.68 C 19.06,9.89 19.36,10 19.67,10 19.94,10 20.22,9.91 20.45,9.74 20.95,9.37 21.13,8.7 20.9,8.12 L 20.51,6.88 21.38,6.36 C 21.89,6.05 22.12,5.44 21.94,4.88 Z M 18,7 c -0.55,0 -1,-0.45 -1,-1 0,-0.55 0.45,-1 1,-1 0.55,0 1,0.45 1,1 0,0.55 -0.45,1 -1,1 z")}path[d="M12 2C8.822 2 7 4.187 7 8V16C7 16.552 7.447 17 8 17H16C16.553 17 17 16.552 17 16V8C17 4.187 15.178 2 12 2ZM11 14.001H10V5.001H11V14.001ZM14 14.001H13V5.001H14V14.001Z"]{d:path("M 20,3 H 4 v 10 c 0,2.21 1.79,4 4,4 h 6 c 2.21,0 4,-1.79 4,-4 v -3 h 2 c 1.11,0 2,-0.89 2,-2 V 5 C 22,3.89 21.11,3 20,3 Z m -4,10 c 0,1.1 -0.9,2 -2,2 H 8 C 6.9,15 6,14.1 6,13 V 5 H 9 V 6.4 L 7.19,7.85 C 7.07,7.94 7,8.09 7,8.24 V 12.5 C 7,12.78 7.22,13 7.5,13 h 4 C 11.78,13 12,12.78 12,12.5 V 8.24 C 12,8.09 11.93,7.94 11.81,7.85 L 10,6.4 V 5 h 6 z M 9.5,7.28 11,8.48 V 12 H 8 V 8.48 Z M 20,8 H 18 V 5 h 2 z M 2,19 h 18 v 2 H 2 Z")}path[d="M11 18H13V22H11V18Z"]{d:path("")}path[d="M5.66487 5H18.3351C19.9078 5 21.2136 6.21463 21.3272 7.78329L21.9931 16.9774C22.0684 18.0165 21.287 18.9198 20.248 18.9951C20.2026 18.9984 20.1572 19 20.1117 19C18.919 19 17.8785 18.1904 17.5855 17.0342L17.0698 15H6.93015L6.41449 17.0342C6.12142 18.1904 5.08094 19 3.88826 19C2.84645 19 2.00189 18.1554 2.00189 17.1136C2.00189 17.0682 2.00354 17.0227 2.00682 16.9774L2.67271 7.78329C2.78632 6.21463 4.0921 5 5.66487 5ZM14.5 10C15.3284 10 16 9.32843 16 8.5C16 7.67157 15.3284 7 14.5 7C13.6716 7 13 7.67157 13 8.5C13 9.32843 13.6716 10 14.5 10ZM18.5 13C19.3284 13 20 12.3284 20 11.5C20 10.6716 19.3284 10 18.5 10C17.6716 10 17 10.6716 17 11.5C17 12.3284 17.6716 13 18.5 13ZM6.00001 9H4.00001V11H6.00001V13H8.00001V11H10V9H8.00001V7H6.00001V9Z"]{d:path("M19,5h-2V3H7v2H5C3.9,5,3,5.9,3,7v1c0,2.55,1.92,4.63,4.39,4.94c0.63,1.5,1.98,2.63,3.61,2.96V19H7v2h10v-2h-4v-3.1 c1.63-0.33,2.98-1.46,3.61-2.96C19.08,12.63,21,10.55,21,8V7C21,5.9,20.1,5,19,5z M5,8V7h2v3.82C5.84,10.4,5,9.3,5,8z M12,14 c-1.65,0-3-1.35-3-3V5h6v6C15,12.65,13.65,14,12,14z M19,8c0,1.3-0.84,2.4-2,2.82V7h2V8z")}path[d="M22 17H19.725C19.892 16.529 20 16.029 20 15.5C20 13.015 17.985 11 15.5 11H13.5L12.276 8.553C12.107 8.214 11.761 8 11.382 8H7C6.448 8 6 8.447 6 9V11.051C3.753 11.302 2 13.186 2 15.5C2 17.986 4.015 20 6.5 20H15.5C16.563 20 17.527 19.616 18.297 19H22V17ZM6.5 16.75C5.81 16.75 5.25 16.19 5.25 15.5C5.25 14.81 5.81 14.25 6.5 14.25C7.19 14.25 7.75 14.81 7.75 15.5C7.75 16.19 7.19 16.75 6.5 16.75ZM11.5 16.75C10.81 16.75 10.25 16.19 10.25 15.5C10.25 14.81 10.81 14.25 11.5 14.25C12.19 14.25 12.75 14.81 12.75 15.5C12.75 16.19 12.19 16.75 11.5 16.75ZM16.5 16.75C15.81 16.75 15.25 16.19 15.25 15.5C15.25 14.81 15.81 14.25 16.5 14.25C17.19 14.25 17.75 14.81 17.75 15.5C17.75 16.19 17.19 16.75 16.5 16.75Z"]{d:path("m 5,19 h 2 v 2 H 5 Z m 0,-4 h 2 v 2 H 5 Z M 10,5 h 2 v 2 h -2 z m -5,6 h 2 v 2 H 5 Z M 7,8 H 2 V 21 H 3 V 9 H 8 V 4 h 6 v 5 h 1 V 3 H 7 Z m 13.57,2.66 C 20.43,10.26 20.05,10 19.6,10 h -7.19 c -0.46,0 -0.83,0.26 -0.98,0.66 l -1.43,4.11 0.01,5.51 c 0,0.38 0.31,0.72 0.69,0.72 h 0.62 C 11.7,21 12,20.62 12,20.24 V 19 h 8 v 1.24 c 0,0.38 0.31,0.76 0.69,0.76 h 0.61 c 0.38,0 0.69,-0.34 0.69,-0.72 L 22,18.91 V 14.77 Z M 12.41,11 h 7.19 l 1.03,3 H 11.38 Z M 12,17 c -0.55,0 -1,-0.45 -1,-1 0,-0.55 0.45,-1 1,-1 0.55,0 1,0.45 1,1 0,0.55 -0.45,1 -1,1 z m 8,0 c -0.55,0 -1,-0.45 -1,-1 0,-0.55 0.45,-1 1,-1 0.55,0 1,0.45 1,1 0,0.55 -0.45,1 -1,1 z")}path[d="M8 7H10C10 5.346 8.654 4 7 4H6V6H7C7.551 6 8 6.449 8 7Z"]{d:path("")}path[d="M18 5.999H17V4.999C17 4.448 16.553 3.999 16 3.999H4C3.447 3.999 3 4.448 3 4.999V12.999C3 14.488 3.47 15.865 4.265 16.999H15.722C16.335 16.122 16.761 15.105 16.92 13.999H18C20.205 13.999 22 12.205 22 9.999C22 7.794 20.205 5.999 18 5.999V5.999ZM18 12H17V8H18C19.104 8 20 8.897 20 10C20 11.102 19.104 12 18 12Z"]{d:path("m 11.985348,12.25526 -0.7071,-0.7071 2.121299,-2.1212997 0.707102,0.7071007 z m -2.5356995,-2.131459 0.7071005,-0.7071007 2.1213,2.1213007 -0.7071,0.7071 z m 1.8276025,1.41918 0.999999,-10e-7 v 3.000001 l -1,0 z M 11.77725,3.5429812 c -0.46,2e-7 -0.93,0.04 -1.4,0.1399997 C 7.6172503,4.212981 5.4172505,6.4429807 4.8972477,9.2029775 4.4172484,11.812978 5.3772482,14.212978 7.1172475,15.762978 c 0.4299966,0.380004 0.6600007,0.91 0.6599993,1.47 l 7e-7,2.31 c 7e-7,1.1 0.8999999,2.000001 1.9999999,2 h 0.2800006 c 0.35,0.6 0.980001,0.999999 1.72,1 0.74,0 1.38,-0.4 1.719998,-0.999999 l 0.280001,-10e-7 c 1.100001,0 2.000001,-0.9 2,-2 l 1e-6,-2.31 c 0,-0.55 0.22,-1.09 0.639999,-1.46 1.45,-1.28 2.360001,-3.15 2.360001,-5.23 -1e-6,-3.8700003 -3.13,-6.9999998 -7.000001,-6.9999995 z m 2.000001,13.9999998 -4.0000008,0 7e-7,-1 h 4.0000001 z m -4.0000008,2 v -1 l 4.0000008,-1e-6 -10e-7,1.000001 z m 5.3099968,-5.260004 c -0.09002,0.07998 -0.160002,0.179999 -0.240002,0.259999 l -6.1499993,0 C 8.6172662,14.452956 8.5472422,14.352979 8.457243,14.272978 7.1372396,13.092982 6.5472432,11.332978 6.867242,9.5729787 7.2272436,7.6329783 8.8272431,6.0229789 10.757246,5.6429808 c 0.34,-0.07 0.68,-0.1 1.019999,-0.1000002 2.760001,2e-7 5,2.2399998 5,5.0000004 3e-6,1.429998 -0.609997,2.789998 -1.689997,3.739997 z")}path[d="M2 18H18V20H2V18Z"]{d:path("")}path[d="M16 4.001C14.406 4.001 12.93 4.838 12 6.081C11.07 4.838 9.594 4.001 8 4.001C5.243 4.001 3 6.244 3 9.001C3 14.492 11.124 19.633 11.471 19.849C11.633 19.95 11.817 20.001 12 20.001C12.183 20.001 12.367 19.95 12.529 19.849C12.876 19.633 21 14.492 21 9.001C21 6.244 18.757 4.001 16 4.001V4.001Z"]{d:path("M 9.74,15.96 8.33,17.37 7.62,16.66 7.97,16.31 c 0.98,-0.98 0.98,-2.56 0,-3.54 -0.49,-0.49 -1.13,-0.73 -1.77,-0.73 -0.64,0 -1.28,0.24 -1.77,0.73 -0.98,0.98 -0.98,2.56 0,3.54 l 0.35,0.35 -1.06,1.06 c -0.98,0.98 -0.98,2.56 0,3.54 0.5,0.5 1.14,0.74 1.78,0.74 0.64,0 1.28,-0.24 1.77,-0.73 l 1.06,-1.06 1.41,1.41 1.41,-1.41 -1.41,-1.41 1.41,-1.41 z M 5.85,14.2 c 0.12,-0.12 0.26,-0.15 0.35,-0.15 0.09,0 0.23,0.03 0.35,0.15 0.19,0.2 0.19,0.51 0,0.71 L 6.2,15.26 5.85,14.9 c -0.19,-0.19 -0.19,-0.51 0,-0.7 z m 0,5.65 C 5.73,19.97 5.59,20 5.5,20 5.41,20 5.27,19.97 5.15,19.85 4.96,19.66 4.96,19.34 5.15,19.14 l 1.06,-1.06 0.71,0.71 z M 15.5,11 C 16.88,11 18,9.88 18,8.5 V 4 h 3 V 2 H 17 V 6.51 C 16.58,6.19 16.07,6 15.5,6 14.12,6 13,7.12 13,8.5 13,9.88 14.12,11 15.5,11 Z M 21,19.5 A 1.5,1.5 0 0 1 19.5,21 1.5,1.5 0 0 1 18,19.5 1.5,1.5 0 0 1 19.5,18 1.5,1.5 0 0 1 21,19.5 Z m -5,-5 A 1.5,1.5 0 0 1 14.5,16 1.5,1.5 0 0 1 13,14.5 1.5,1.5 0 0 1 14.5,13 1.5,1.5 0 0 1 16,14.5 Z m -3.59635,5.68185 7.7781,-7.7781 1.4142,1.4142 -7.7781,7.7781 z M 6,11 H 8 V 7 h 3 V 5 H 3 V 7 H 6 Z M 3,2 h 8 V 4 H 3 Z")}path[d="M20 6.002H14V3.002C14 2.45 13.553 2.002 13 2.002H4C3.447 2.002 3 2.45 3 3.002V22.002H5V14.002H10.586L8.293 16.295C8.007 16.581 7.922 17.011 8.076 17.385C8.23 17.759 8.596 18.002 9 18.002H20C20.553 18.002 21 17.554 21 17.002V7.002C21 6.45 20.553 6.002 20 6.002Z"]{d:path("M14,9l-1-2H7V5.72C7.6,5.38,8,4.74,8,4c0-1.1-0.9-2-2-2S4,2.9,4,4c0,0.74,0.4,1.38,1,1.72V21h2v-4h5l1,2h7V9H14z M18,17h-4 l-1-2H7V9h5l1,2h5V17z")}.headerIcon-2ra-HY[src*="/assets/b09888a1a6c74c8bb9af76ee61eb70e7.svg"]{width:0;height:24px;padding-left:24px;background-size:24px 24px;background-position:center;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' fill='none'%3E%3Crect width='32' height='32' rx='4' fill='%234F545C'/%3E%3Cpath d='M25.08 20.09l-1.09-7.66A3.996 3.996 0 0020.03 9h-9.06c-1.99 0-3.68 1.46-3.96 3.43l-1.09 7.66C5.7 21.63 6.89 23 8.44 23c.68 0 1.32-.27 1.8-.75L12.5 20h6l2.25 2.25c.48.48 1.13.75 1.8.75 1.56 0 2.75-1.37 2.53-2.91zm-2.1.72a.54.54 0 01-.42.19c-.15 0-.29-.06-.39-.16L19.33 18h-7.66l-2.84 2.84c-.1.1-.24.16-.39.16a.54.54 0 01-.42-.19.52.52 0 01-.13-.44l1.09-7.66c.15-.97 1-1.71 1.99-1.71h9.06c.99 0 1.84.74 1.98 1.72l1.09 7.66c.03.2-.05.34-.12.43zM12.5 12h-1v2h-2v1h2v2h1v-2h2v-1h-2zm7 4a1 1 0 102 0 1 1 0 10-2 0m-2-3a1 1 0 102 0 1 1 0 10-2 0z' fill='%23B9BBBE'/%3E%3C/svg%3E")}path[d="M12 2C6.485 2 2 6.485 2 12H5.33333C5.33333 8.32333 8.32333 5.33333 12 5.33333C15.6767 5.33333 18.6667 8.32333 18.6667 12C18.6667 15.6767 15.6767 18.6667 12 18.6667C10.2033 18.6667 8.55833 17.9333 7.315 16.6867L10.3333 13.6667H2V22L4.935 19.065C6.79833 20.94 9.30167 22 12 22C17.515 22 22 17.515 22 12C22 6.48667 17.515 2 12 2Z"]{d:path("M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z")}path[d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"]{d:path("M19 15v4H5v-4h14m1-2H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1zM7 18.5c-.82 0-1.5-.67-1.5-1.5s.68-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM19 5v4H5V5h14m1-2H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zM7 8.5c-.82 0-1.5-.67-1.5-1.5S6.18 5.5 7 5.5s1.5.68 1.5 1.5S7.83 8.5 7 8.5z")}.headerBarContainer-31FKNA.container-ZMc96U path[d="M12 5C5.648 5 1 12 1 12C1 12 5.648 19 12 19C18.352 19 23 12 23 12C23 12 18.352 5 12 5ZM12 16C9.791 16 8 14.21 8 12C8 9.79 9.791 8 12 8C14.209 8 16 9.79 16 12C16 14.21 14.209 16 12 16Z"],.privateChannels-oVe7HL path[d="M12 5C5.648 5 1 12 1 12C1 12 5.648 19 12 19C18.352 19 23 12 23 12C23 12 18.352 5 12 5ZM12 16C9.791 16 8 14.21 8 12C8 9.79 9.791 8 12 8C14.209 8 16 9.79 16 12C16 14.21 14.209 16 12 16Z"]{d:path("M7 14c-1.66 0-3 1.34-3 3 0 1.31-1.16 2-2 2 .92 1.22 2.49 2 4 2 2.21 0 4-1.79 4-4 0-1.66-1.34-3-3-3zm13.71-9.37l-1.34-1.34a.996.996 0 00-1.41 0L9 12.25 11.75 15l8.96-8.96a.996.996 0 000-1.41z")}.headerBarContainer-31FKNA.container-ZMc96U path[d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z"],.privateChannels-oVe7HL path[d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z"]{d:path("")}.headerBarContainer-31FKNA.container-ZMc96U path[d="M12.9297 3.25007C12.7343 3.05261 12.4154 3.05226 12.2196 3.24928L11.5746 3.89824C11.3811 4.09297 11.3808 4.40733 11.5739 4.60245L16.5685 9.64824C16.7614 9.84309 16.7614 10.1569 16.5685 10.3517L11.5739 15.3975C11.3808 15.5927 11.3811 15.907 11.5746 16.1017L12.2196 16.7507C12.4154 16.9477 12.7343 16.9474 12.9297 16.7499L19.2604 10.3517C19.4532 10.1568 19.4532 9.84314 19.2604 9.64832L12.9297 3.25007Z"],.privateChannels-oVe7HL path[d="M12.9297 3.25007C12.7343 3.05261 12.4154 3.05226 12.2196 3.24928L11.5746 3.89824C11.3811 4.09297 11.3808 4.40733 11.5739 4.60245L16.5685 9.64824C16.7614 9.84309 16.7614 10.1569 16.5685 10.3517L11.5739 15.3975C11.3808 15.5927 11.3811 15.907 11.5746 16.1017L12.2196 16.7507C12.4154 16.9477 12.7343 16.9474 12.9297 16.7499L19.2604 10.3517C19.4532 10.1568 19.4532 9.84314 19.2604 9.64832L12.9297 3.25007Z"]{d:path("M 8.75 3.75 c 0.2333 0 0.4167 0.1833 0.4167 0.4167 v 1.6667 h 5 v 5 h 1.6667 c 0.2333 0 0.4167 0.1833 0.4167 0.4167 s -0.1833 0.4167 -0.4167 0.4167 h -1.6667 v 5 h -1.7667 c -0.5667 -1.4583 -1.9917 -2.5 -3.65 -2.5 s -3.0833 1.0417 -3.65 2.5 H 3.3333 v -1.7667 c 1.4583 -0.5667 2.5 -1.9917 2.5 -3.65 c 0 -1.6583 -1.0333 -3.0833 -2.4917 -3.65 L 3.3333 5.8333 h 5 V 4.1667 c 0 -0.2333 0.1833 -0.4167 0.4167 -0.4167 m 0 -1.6667 A 2.0833 2.0833 90 0 0 6.6667 4.1667 H 3.3333 c -0.9167 0 -1.6583 0.75 -1.6583 1.6667 v 3.1667 h 0.2417 c 1.2417 0 2.25 1.0083 2.25 2.25 s -1.0083 2.25 -2.25 2.25 H 1.6667 V 16.6667 c 0 0.9167 0.75 1.6667 1.6667 1.6667 h 3.1667 v -0.25 c 0 -1.2417 1.0083 -2.25 2.25 -2.25 s 2.25 1.0083 2.25 2.25 v 0.25 H 14.1667 c 0.9167 0 1.6667 -0.75 1.6667 -1.6667 v -3.3333 a 2.0833 2.0833 90 0 0 0 -4.1667 V 5.8333 c 0 -0.9167 -0.75 -1.6667 -1.6667 -1.6667 h -3.3333 a 2.0833 2.0833 90 0 0 -2.0833 -2.0833 z")}.headerBarContainer-31FKNA.container-ZMc96U path[d="M8.42616 4.60245C8.6193 4.40733 8.61898 4.09297 8.42545 3.89824L7.78047 3.24928C7.58466 3.05226 7.26578 3.05261 7.07041 3.25007L0.739669 9.64832C0.5469 9.84314 0.546901 10.1568 0.739669 10.3517L7.07041 16.7499C7.26578 16.9474 7.58465 16.9477 7.78047 16.7507L8.42545 16.1017C8.61898 15.907 8.6193 15.5927 8.42616 15.3975L3.43155 10.3517C3.23869 10.1569 3.23869 9.84309 3.43155 9.64824L8.42616 4.60245Z"],.privateChannels-oVe7HL path[d="M8.42616 4.60245C8.6193 4.40733 8.61898 4.09297 8.42545 3.89824L7.78047 3.24928C7.58466 3.05226 7.26578 3.05261 7.07041 3.25007L0.739669 9.64832C0.5469 9.84314 0.546901 10.1568 0.739669 10.3517L7.07041 16.7499C7.26578 16.9474 7.58465 16.9477 7.78047 16.7507L8.42545 16.1017C8.61898 15.907 8.6193 15.5927 8.42616 15.3975L3.43155 10.3517C3.23869 10.1569 3.23869 9.84309 3.43155 9.64824L8.42616 4.60245Z"]{d:path("")}ul.tree-3agP2X:focus{outline-color:transparent}.bsi-clientStatuses svg,.bsi-statusIcon{color:inherit}html:not(.app-focused) .isUnread-3Lojb-{border-color:transparent}.isUnread-3Lojb-{transition:.2s}.theme-light .headerNormal-T_seeN .headerTag-2pZJzA{color:#848484}.bsi-clientStatuses svg,.bsi-statusIcon{margin-top:-4px}.theme-light .keybind-13vtq8,.theme-light .text-27cdrj,.theme-light .title-2CL_z0{color:var(--text-semidark)}.theme-light .lighten-1KubYe{opacity:.46}.theme-dark .gemWithoutLabel-1od40y{color:var(--text-muted)}.container-1oeRFJ[href*="/discovery"]{display:none}.container-1oeRFJ[href*="/store"]{display:none}.assetsLargeMaskVoiceChannel-3IlDCA{-webkit-mask-size:cover}.closeButton-PCZcma{-webkit-app-region:none}.buttonShine-p5V5TB{animation:none !important;visibility:hidden}.spinner-2RT7ZC:not(.spinningCircle-CmRLnP) .inner-26JK4f:not(.pulsingEllipsis-10G8Z6){background-color:var(--accent);-webkit-mask-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' style='-webkit-animation: spinner-spinning-circle-rotate-377lhj 2s linear infinite;animation: spinner-spinning-circle-rotate-377lhj 2s linear infinite;height: 100%25;width: 100%25;' viewBox='25 25 50 50'%3E%3Cstyle type='text/css'%3E:root%7B --accent: black;%0A%7D%0A@-webkit-keyframes spinner-spinning-circle-rotate-377lhj %7B to %7B -webkit-transform: rotate(1turn); transform: rotate(1turn) %7D%0A%7D @keyframes spinner-spinning-circle-rotate-377lhj %7B to %7B -webkit-transform: rotate(1turn); transform: rotate(1turn) %7D%0A%7D @-webkit-keyframes spinner-spinning-circle-dash-YaFg25 %7B 0%25 %7B stroke-dasharray: 1,200; stroke-dashoffset: 0 %7D 50%25 %7B stroke-dasharray: 130,200 %7D to %7B stroke-dasharray: 130,200; stroke-dashoffset: -124 %7D%0A%7D @keyframes spinner-spinning-circle-dash-YaFg25 %7B 0%25 %7B stroke-dasharray: 1,200; stroke-dashoffset: 0 %7D 50%25 %7B stroke-dasharray: 130,200 %7D to %7B stroke-dasharray: 130,200; stroke-dashoffset: -124 %7D%0A%7D%0A%3C/style%3E%3Ccircle cx='50' cy='50' r='20' style='-webkit-animation: spinner-spinning-circle-dash-YaFg25 2s ease-in-out infinite; animation: spinner-spinning-circle-dash-YaFg25 2s ease-in-out infinite; stroke-dasharray: 1,200; stroke-dashoffset: 0; fill: none; stroke-width: 6; stroke-miterlimit: 10; stroke-linecap: round; -webkit-animation-delay: .23s; animation-delay: .23s; stroke: var(--accent);'%3E%3C/circle%3E%3Ccircle cx='50' cy='50' r='20' style='-webkit-animation: spinner-spinning-circle-dash-YaFg25 2s ease-in-out infinite; animation: spinner-spinning-circle-dash-YaFg25 2s ease-in-out infinite; stroke-dasharray: 1,200; stroke-dashoffset: 0; fill: none; stroke-width: 6; stroke-miterlimit: 10; stroke-linecap: round; -webkit-animation-delay: .23s; animation-delay: .23s; stroke: var(--accent);'%3E%3C/circle%3E%3Ccircle cx='50' cy='50' r='20' style='-webkit-animation: spinner-spinning-circle-dash-YaFg25 2s ease-in-out infinite; animation: spinner-spinning-circle-dash-YaFg25 2s ease-in-out infinite; stroke-dasharray: 1,200; stroke-dashoffset: 0; fill: none; stroke-width: 6; stroke-miterlimit: 10; stroke-linecap: round; -webkit-animation-delay: .23s; animation-delay: .23s; stroke: var(--accent);'%3E%3C/circle%3E%3C/svg%3E");-webkit-mask-size:clamp(48px, 50%, 16px);-webkit-mask-repeat:no-repeat;width:48px;height:48px}.spinner-2RT7ZC:not(.spinningCircle-CmRLnP) .inner-26JK4f:not(.pulsingEllipsis-10G8Z6) .wanderingCubesItem-3Us-UG{display:none}.repliedTextContent-2hOYMB{padding-right:1px}.sidebarRegion-1VBisG{--settings-icon-color: currentColor;--settings-subscriptions: var(--accent);--settings-hypesquad: var(--idle);--settings-logout: var(--danger);--settings-alt-focused: var(--accent-text);--settings-guild-premium: var(--accent);--settings-guild-delete: var(--danger)}.side-2ur1Qk>.item-3XjbnG:not(.role-3pGE29),.sidebar-nqHbhN .ui-tab-bar-item{display:flex;align-items:center}.side-2ur1Qk>.item-3XjbnG:not(.role-3pGE29)::before,.sidebar-nqHbhN .ui-tab-bar-item::before{content:"";width:22px;height:22px;left:15px;margin-right:6px;margin-top:-2px;background:var(--settings-icon-color);-webkit-mask:var(--icon) center/contain no-repeat;mask:var(--icon) center/contain no-repeat;--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 447 447'%3E%3Cpath fill='%23fff' d='M182.5 78.6l70-70c11.9-11.9 31.2-11.9 43.1 0s11.9 31.2 0 43.1l-70 70zm91.7 91.7l70-70c11.9-11.9 31.2-11.9 43.1 0s11.9 31.2 0 43.1l-70 70zM303 257L138.9 92.9c-2.7-2.7-2.7-7 0-9.7L163 59.1c2.7-2.7 7-2.7 9.7 0l164.1 164.1c2.7 2.7 2.7 7 0 9.7L312.7 257c-2.7 2.7-7 2.7-9.7 0zm-146.6 75.4l-92.9-92.9c-17-17-17-44.6 0-61.6l85.1-85.1L303 247.4l-85 85c-17 17-44.7 17-61.6 0zm-61-2.9l-29-29c-2.7-2.7-2.7-7 0-9.7l29-29 38.7 38.7-29 29c-2.7 2.6-7 2.6-9.7 0zm48.3 115.8L81 382.6c-21.3-21.3-21.3-55.9 0-77.2l9.7 9.7c-16 16-16 42 0 57.9l62.8 62.8c2.7 2.7 2.7 7 0 9.7s-7.1 2.5-9.8-.2z'/%3E%3C/svg%3E");flex-shrink:0}.searchHeader-1r_ZSh .side-2ur1Qk>.item-3XjbnG:not(.role-3pGE29)::before,.searchHeader-1r_ZSh .sidebar-nqHbhN .ui-tab-bar-item::before{content:none}.background-Gjdjzm{display:none}.premiumLabel-3HPvdB>svg,.tabBarItemContainer-2HdIlr>svg{display:none}.page-15bX59 .side-2ur1Qk>.item-3XjbnG:not(.role-3pGE29)::before,.page-15bX59 .sidebar-nqHbhN .ui-tab-bar-item::before{content:none;width:0px;height:0px}.side-2ur1Qk>.item-3XjbnG[aria-controls=my-account-tab i]:not(.role-3pGE29)::before{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M12 6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0 10c2.7 0 5.8 1.29 6 2H6c.23-.72 3.31-2 6-2m0-12C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 10c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z'/%3E%3C/svg%3E")}.side-2ur1Qk>.item-3XjbnG[aria-controls=profile-customization-tab i]:not(.role-3pGE29)::before{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM7.07 18.28c.43-.9 3.05-1.78 4.93-1.78s4.51.88 4.93 1.78C15.57 19.36 13.86 20 12 20s-3.57-.64-4.93-1.72zm11.29-1.45c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33A7.95 7.95 0 014 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.49-1.64 4.83zM12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6zm0 5c-.83 0-1.5-.67-1.5-1.5S11.17 8 12 8s1.5.67 1.5 1.5S12.83 11 12 11z'/%3E%3C/svg%3E")}.side-2ur1Qk>.item-3XjbnG[aria-controls="privacy-&-safety-tab"i]:not(.role-3pGE29)::before,.side-2ur1Qk>.item-3XjbnG[aria-controls=moderation-tab i]:not(.role-3pGE29)::before{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z'/%3E%3C/svg%3E")}.side-2ur1Qk>.item-3XjbnG[aria-controls=authorized-apps-tab i]:not(.role-3pGE29)::before{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z'/%3E%3C/svg%3E")}.side-2ur1Qk>.item-3XjbnG[aria-controls=connections-tab i]:not(.role-3pGE29)::before{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M17 7h-4v2h4c1.65 0 3 1.35 3 3s-1.35 3-3 3h-4v2h4c2.76 0 5-2.24 5-5s-2.24-5-5-5zm-6 8H7c-1.65 0-3-1.35-3-3s1.35-3 3-3h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-2zm-3-4h8v2H8z'/%3E%3C/svg%3E")}.side-2ur1Qk>.item-3XjbnG[aria-controls=subscriptions-tab i]:not(.role-3pGE29)::before{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23fff' width='18' height='18'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z'/%3E%3C/svg%3E")}.side-2ur1Qk>.item-3XjbnG[aria-controls=billing-tab i]:not(.role-3pGE29)::before{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath fill='none' d='M0 0h24v24H0z'/%3E%3Cpath d='M19 14V6c0-1.1-.9-2-2-2H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zm-2 0H3V6h14v8zm-7-7c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm13 0v11c0 1.1-.9 2-2 2H4v-2h17V7h2z'/%3E%3C/svg%3E")}.side-2ur1Qk>.item-3XjbnG[aria-controls=discord-nitro-tab i]:not(.role-3pGE29)::before{--icon: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="24" height="24"%3E%3Cpath fill="%23000" d="M14 5a7 7 0 100 14 7 7 0 000-14zM3 11h1a1 1 0 100-2H1a1 1 0 110-2h5a1 1 0 100-2H3.5a1.5 1.5 0 010-3H14c5.523 0 10 4.477 10 10s-4.477 10-10 10c-5.185 0-9.449-3.947-9.95-9H3a1 1 0 010-2z"/%3E%3Cpath d="M14 17a5 5 0 110-10 5 5 0 010 10zm1.827-7.55a1 1 0 00-.835-.45h-1.926a1 1 0 00-.836.45l-1.315 2a1 1 0 000 1.1l1.315 2a1 1 0 00.836.45h1.926a1 1 0 00.835-.45l1.316-2a1 1 0 000-1.1l-1.316-2z"/%3E%3C/svg%3E')}.premiumLabel-V52REm>svg{display:none}.serverBoostTabItem-2hFTIN .icon-3Povsy{display:none}.side-2ur1Qk>.item-3XjbnG[aria-controls=guild_premium-tab i]:not(.role-3pGE29)::before{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 8 12' fill='none'%3E%3Cpath d='M4 0L0 4v4l4 4 4-4V4L4 0zm3 7.59l-3 3-3-3V4.41l3-3 3 3v3.18z' fill='currentColor'/%3E%3Cpath d='M2 4.83v2.34l2 2 2-2V4.83l-2-2-2 2z' fill='currentColor'/%3E%3C/svg%3E")}.side-2ur1Qk>.item-3XjbnG[aria-controls=library-inventory-tab i]:not(.role-3pGE29)::before{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M20 6h-2.18c.11-.31.18-.65.18-1a2.996 2.996 0 00-5.5-1.65l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 12 7.4l3.38 4.6L17 10.83 14.92 8H20v6z'/%3E%3C/svg%3E")}.side-2ur1Qk>.item-3XjbnG[aria-controls=nitro-server-boost-tab i]:not(.role-3pGE29)::before{--icon: url("data:image/svg+xml,%3Csvg fill='%23FFF' height='24' width='24' viewBox='0 0 8 12' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4 0L0 4v4l4 4 4-4V4L4 0zm3 7.59l-3 3-3-3V4.41l3-3 3 3v3.18z'/%3E%3Cpath d='M2 4.83v2.34l2 2 2-2V4.83l-2-2-2 2z'/%3E%3C/svg%3E")}.side-2ur1Qk>.item-3XjbnG[aria-controls=hypesquad-online-tab i]:not(.role-3pGE29)::before{--icon: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="34" height="32"%3E%3Cpath fill="%23white" d="M33.374.065L19.936 8.62c-.232.148-.42.353-.544.594L17.344 13.2a.398.398 0 01-.703 0l-2.05-3.985a1.54 1.54 0 00-.543-.594L.611.065C.274-.15-.138.208.045.556L5.616 11.16c.133.254-.056.554-.35.554H1.932c-.382 0-.54.475-.229.69l15.06 10.462a.404.404 0 00.458 0l15.06-10.461c.311-.216.154-.69-.228-.69h-3.334c-.294 0-.484-.301-.35-.555L33.938.556c.184-.348-.228-.706-.565-.491"/%3E%3C/svg%3E')}.side-2ur1Qk>.item-3XjbnG[aria-controls="voice-&-video-tab"i]:not(.role-3pGE29)::before{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M12 15c1.66 0 2.99-1.34 2.99-3L15 6c0-1.66-1.34-3-3-3S9 4.34 9 6v6c0 1.66 1.34 3 3 3zm-1.2-9.1c0-.66.54-1.2 1.2-1.2s1.2.54 1.2 1.2l-.01 6.2c0 .66-.53 1.2-1.19 1.2s-1.2-.54-1.2-1.2V5.9zm6.5 6.1c0 3-2.54 5.1-5.3 5.1S6.7 15 6.7 12H5c0 3.41 2.72 6.23 6 6.72V22h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z'/%3E%3C/svg%3E")}.side-2ur1Qk>.item-3XjbnG[aria-controls=overlay-tab i]:not(.role-3pGE29)::before{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23fff' width='18' height='18'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M19 19H5V5h7V3H5a2 2 0 00-2 2v14a2 2 0 002 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z'/%3E%3C/svg%3E")}.side-2ur1Qk>.item-3XjbnG[aria-controls=notifications-tab i]:not(.role-3pGE29)::before{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z'/%3E%3C/svg%3E")}.side-2ur1Qk>.item-3XjbnG[aria-controls=keybinds-tab i]:not(.role-3pGE29)::before{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M0 0h24v24H0V0zm0 0h24v24H0V0z' fill='none'/%3E%3Cpath d='M20 7v10H4V7h16m0-2H4c-1.1 0-1.99.9-1.99 2L2 17c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-9 3h2v2h-2zm0 3h2v2h-2zM8 8h2v2H8zm0 3h2v2H8zm-3 0h2v2H5zm0-3h2v2H5zm3 6h8v2H8zm6-3h2v2h-2zm0-3h2v2h-2zm3 3h2v2h-2zm0-3h2v2h-2z'/%3E%3C/svg%3E")}.side-2ur1Qk>.item-3XjbnG[aria-controls=game-activity-tab i]:not(.role-3pGE29)::before{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M13 4v2.67l-1 1-1-1V4h2m7 7v2h-2.67l-1-1 1-1H20M6.67 11l1 1-1 1H4v-2h2.67M12 16.33l1 1V20h-2v-2.67l1-1M15 2H9v5.5l3 3 3-3V2zm7 7h-5.5l-3 3 3 3H22V9zM7.5 9H2v6h5.5l3-3-3-3zm4.5 4.5l-3 3V22h6v-5.5l-3-3z'/%3E%3C/svg%3E")}.side-2ur1Qk>.item-3XjbnG[aria-controls="text-&-images-tab"i]:not(.role-3pGE29)::before{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M2 6H0v5h.01L0 20c0 1.1.9 2 2 2h18v-2H2V6zm5 9h14l-3.5-4.5-2.5 3.01L11.5 9zM22 4h-8l-2-2H6c-1.1 0-1.99.9-1.99 2L4 16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 12H6V4h5.17l1.41 1.41.59.59H22v10z'/%3E%3C/svg%3E")}.side-2ur1Qk>.item-3XjbnG[aria-controls=appearance-tab i]:not(.role-3pGE29)::before{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M14 6l-4.22 5.63 1.25 1.67L14 9.33 19 16h-8.46l-4.01-5.37L1 18h22L14 6zM5 16l1.52-2.03L8.04 16H5z'/%3E%3C/svg%3E")}.side-2ur1Qk>.item-3XjbnG[aria-controls=streamer-mode-tab i]:not(.role-3pGE29)::before{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M15 8v8H5V8h10m1-2H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4V7c0-.55-.45-1-1-1z'/%3E%3C/svg%3E")}.side-2ur1Qk>.item-3XjbnG[aria-controls=language-tab i]:not(.role-3pGE29)::before{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23fff' width='18' height='18'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95a15.65 15.65 0 00-1.38-3.56A8.03 8.03 0 0118.92 8zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56A7.987 7.987 0 015.08 16zm2.95-8H5.08a7.987 7.987 0 014.33-3.56A15.65 15.65 0 008.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a8.03 8.03 0 01-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z'/%3E%3C/svg%3E")}.side-2ur1Qk>.item-3XjbnG[aria-controls=linux-tab i]:not(.role-3pGE29)::before,.side-2ur1Qk>.item-3XjbnG[aria-controls=windows-tab i]:not(.role-3pGE29)::before{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23fff' width='18' height='18'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M21 2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7v2H8v2h8v-2h-2v-2h7c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H3V4h18v12z'/%3E%3C/svg%3E")}.side-2ur1Qk>.item-3XjbnG[aria-controls*="stream:transport:"i]:not(.role-3pGE29)::before,.side-2ur1Qk>.item-3XjbnG[aria-controls*="default:transport:"i]:not(.role-3pGE29)::before{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M17 4h3v16h-3V4zM5 14h3v6H5v-6zm6-5h3v11h-3V9z'/%3E%3C/svg%3E")}.side-2ur1Qk>.item-3XjbnG[aria-controls*="stream:outbound"i]:not(.role-3pGE29)::before,.side-2ur1Qk>.item-3XjbnG[aria-controls*="default:outbound:"i]:not(.role-3pGE29)::before{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath fill='none' d='M0 0h24v24H0z'/%3E%3Cpath d='M18.32 4.26A9.949 9.949 0 0013 2.05v2.02c1.46.18 2.79.76 3.9 1.62l1.42-1.43zM19.93 11h2.02c-.2-2.01-1-3.84-2.21-5.32L18.31 7.1a7.941 7.941 0 011.62 3.9zm-1.62 5.9l1.43 1.43a9.981 9.981 0 002.21-5.32h-2.02a7.945 7.945 0 01-1.62 3.89zM13 19.93v2.02c2.01-.2 3.84-1 5.32-2.21l-1.43-1.43c-1.1.86-2.43 1.44-3.89 1.62zm2.59-9.34L13 13.17V7h-2v6.17l-2.59-2.59L7 12l5 5 5-5-1.41-1.41zM11 19.93v2.02c-5.05-.5-9-4.76-9-9.95s3.95-9.45 9-9.95v2.02C7.05 4.56 4 7.92 4 12s3.05 7.44 7 7.93z'/%3E%3C/svg%3E")}.side-2ur1Qk>.item-3XjbnG[aria-controls=screenshare-tab i]:not(.role-3pGE29)::before{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M20 18c1.1 0 1.99-.9 1.99-2L22 6a2 2 0 00-2-2H4c-1.11 0-2 .89-2 2v10a2 2 0 002 2H0v2h24v-2h-4zM4 16V6h16v10.01L4 16zm9-6.87c-3.89.54-5.44 3.2-6 5.87 1.39-1.87 3.22-2.72 6-2.72v2.19l4-3.74L13 7v2.13z'/%3E%3C/svg%3E")}.side-2ur1Qk>.item-3XjbnG[aria-controls*="stream:0"i]:not(.role-3pGE29)::before,.side-2ur1Qk>.item-3XjbnG[aria-controls*="default:0"i]:not(.role-3pGE29)::before{content:none}.side-2ur1Qk>.item-3XjbnG[aria-controls*="stream:1"i]:not(.role-3pGE29)::before,.side-2ur1Qk>.item-3XjbnG[aria-controls*="default:1"i]:not(.role-3pGE29)::before{content:none}.side-2ur1Qk>.item-3XjbnG[aria-controls*="stream:2"i]:not(.role-3pGE29)::before,.side-2ur1Qk>.item-3XjbnG[aria-controls*="default:2"i]:not(.role-3pGE29)::before{content:none}.side-2ur1Qk>.item-3XjbnG[aria-controls*="stream:3"i]:not(.role-3pGE29)::before,.side-2ur1Qk>.item-3XjbnG[aria-controls*="default:3"i]:not(.role-3pGE29)::before{content:none}.side-2ur1Qk>.item-3XjbnG[aria-controls*="stream:4"i]:not(.role-3pGE29)::before,.side-2ur1Qk>.item-3XjbnG[aria-controls*="default:4"i]:not(.role-3pGE29)::before{content:none}.side-2ur1Qk>.item-3XjbnG[aria-controls*="stream:5"i]:not(.role-3pGE29)::before,.side-2ur1Qk>.item-3XjbnG[aria-controls*="default:5"i]:not(.role-3pGE29)::before{content:none}.side-2ur1Qk>.item-3XjbnG[aria-controls*="stream:6"i]:not(.role-3pGE29)::before,.side-2ur1Qk>.item-3XjbnG[aria-controls*="default:6"i]:not(.role-3pGE29)::before{content:none}.side-2ur1Qk>.item-3XjbnG[aria-controls*="stream:7"i]:not(.role-3pGE29)::before,.side-2ur1Qk>.item-3XjbnG[aria-controls*="default:7"i]:not(.role-3pGE29)::before{content:none}.side-2ur1Qk>.item-3XjbnG[aria-controls*="stream:8"i]:not(.role-3pGE29)::before,.side-2ur1Qk>.item-3XjbnG[aria-controls*="default:8"i]:not(.role-3pGE29)::before{content:none}.side-2ur1Qk>.item-3XjbnG[aria-controls*="stream:9"i]:not(.role-3pGE29)::before,.side-2ur1Qk>.item-3XjbnG[aria-controls*="default:9"i]:not(.role-3pGE29)::before{content:none}.side-2ur1Qk>.item-3XjbnG[aria-controls=gm-changelog-tab i]:not(.role-3pGE29)::before,.side-2ur1Qk>.item-3XjbnG[aria-controls=changelog-tab i]:not(.role-3pGE29)::before{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M14 17H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2zm2-6H5c-1.11 0-2 .89-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zM5 5h14v14H5'/%3E%3C/svg%3E")}.side-2ur1Qk>.item-3XjbnG[aria-controls=logout-tab i]:not(.role-3pGE29)::before{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M17 8l-1.41 1.41L17.17 11H9v2h8.17l-1.58 1.58L17 16l4-4-4-4zM5 5h7V3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h7v-2H5V5z'/%3E%3C/svg%3E");--settings-icon-color: var(--settings-logout)}.side-2ur1Qk>.item-3XjbnG[aria-controls=delete-tab i]:not(.role-3pGE29),.side-2ur1Qk>.item-3XjbnG[aria-controls=logout-tab i]:not(.role-3pGE29){color:var(--danger) !important}.item-3XjbnG[style^="color: hsl(0"][style*="background-color: hsl(359, "]{background-color:var(--danger) !important;color:#fff !important;--settings-guild-delete: currentColor}.side-2ur1Qk>.item-3XjbnG[aria-controls=advanced-tab i]:not(.role-3pGE29)::before{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M3 17v2h6v-2H3zM3 5v2h10V5H3zm10 16v-2h8v-2h-8v-2h-2v6h2zM7 9v2H3v2h4v2h2V9H7zm14 4v-2H11v2h10zm-6-4h2V7h4V5h-4V3h-2v6z'/%3E%3C/svg%3E")}.side-2ur1Qk>.item-3XjbnG[aria-controls=accessibility-tab i]:not(.role-3pGE29)::before{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18v2z'/%3E%3C/svg%3E")}.side-2ur1Qk>.item-3XjbnG[aria-controls=overview-tab i]:not(.role-3pGE29)::before{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM7.07 18.28c.43-.9 3.05-1.78 4.93-1.78s4.51.88 4.93 1.78C15.57 19.36 13.86 20 12 20s-3.57-.64-4.93-1.72zm11.29-1.45c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33A7.95 7.95 0 014 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.49-1.64 4.83zM12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6zm0 5c-.83 0-1.5-.67-1.5-1.5S11.17 8 12 8s1.5.67 1.5 1.5S12.83 11 12 11z'/%3E%3C/svg%3E")}.side-2ur1Qk>.item-3XjbnG[aria-controls=roles-tab i]:not(.role-3pGE29)::before{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M12.36 6l.4 2H18v6h-3.36l-.4-2H7V6h5.36M14 4H5v17h2v-7h5.6l.4 2h7V6h-5.6L14 4z'/%3E%3C/svg%3E")}.side-2ur1Qk>.item-3XjbnG[aria-controls=emoji-tab i]:not(.role-3pGE29)::before{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath fill='none' d='M0 0h24v24H0z'/%3E%3Ccircle cx='15.5' cy='9.5' r='1.5'/%3E%3Ccircle cx='8.5' cy='9.5' r='1.5'/%3E%3Cpath d='M12 18c2.28 0 4.22-1.66 5-4H7c.78 2.34 2.72 4 5 4z'/%3E%3Cpath d='M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z'/%3E%3C/svg%3E")}.side-2ur1Qk>.item-3XjbnG[aria-controls=stickers-tab i]:not(.role-3pGE29)::before{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath fill='none' d='M0 0h24v24H0z'/%3E%3Cpath d='M19 5v9h-5v5H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h10l6-6V5c0-1.1-.9-2-2-2zm-7 11H7v-2h5v2zm5-4H7V8h10v2z'/%3E%3C/svg%3E")}.side-2ur1Qk>.item-3XjbnG[aria-controls=audit_log-tab i]:not(.role-3pGE29)::before{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M19.5 3.5L18 2l-1.5 1.5L15 2l-1.5 1.5L12 2l-1.5 1.5L9 2 7.5 3.5 6 2v14H3v3c0 1.66 1.34 3 3 3h12c1.66 0 3-1.34 3-3V2l-1.5 1.5zM15 20H6c-.55 0-1-.45-1-1v-1h10v2zm4-1c0 .55-.45 1-1 1s-1-.45-1-1v-3H8V5h11v14z'/%3E%3Cpath d='M9 7h6v2H9zM16 7h2v2h-2zM9 10h6v2H9zM16 10h2v2h-2z'/%3E%3C/svg%3E")}.side-2ur1Qk>.item-3XjbnG[aria-controls=integrations-tab i]:not(.role-3pGE29)::before{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath fill='none' d='M0 0h24v24H0z'/%3E%3Ccircle cx='12' cy='3.5' fill='none' r='.75'/%3E%3Ccircle cx='12' cy='3.5' fill='none' r='.75'/%3E%3Cpath fill='none' d='M5 15v4h14V5H5z'/%3E%3Cpath d='M11 14.17L8.83 12 11 9.83 9.59 8.41 6 12l3.59 3.59zM14.41 15.59L18 12l-3.59-3.59L13 9.83 15.17 12 13 14.17z'/%3E%3Cpath d='M19 3h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-.14 0-.27.01-.4.04a2.008 2.008 0 00-1.44 1.19c-.1.23-.16.49-.16.77v14c0 .27.06.54.16.78s.25.45.43.64c.27.27.62.47 1.01.55.13.02.26.03.4.03h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7-.25c.41 0 .75.34.75.75s-.34.75-.75.75-.75-.34-.75-.75.34-.75.75-.75zM19 15v4H5V5h14v10z'/%3E%3C/svg%3E")}.side-2ur1Qk>.item-3XjbnG[aria-controls=widget-tab i]:not(.role-3pGE29)::before{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M16.66 4.52l2.83 2.83-2.83 2.83-2.83-2.83 2.83-2.83M9 5v4H5V5h4m10 10v4h-4v-4h4M9 15v4H5v-4h4m7.66-13.31L11 7.34 16.66 13l5.66-5.66-5.66-5.65zM11 3H3v8h8V3zm10 10h-8v8h8v-8zm-10 0H3v8h8v-8z'/%3E%3C/svg%3E")}.side-2ur1Qk>.item-3XjbnG[aria-controls=guild_templates-tab i]:not(.role-3pGE29)::before{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M22.61 18.99l-9.08-9.08c.93-2.34.45-5.1-1.44-7C9.79.61 6.21.4 3.66 2.26L7.5 6.11 6.08 7.52 2.25 3.69C.39 6.23.6 9.82 2.9 12.11c1.86 1.86 4.57 2.35 6.89 1.48l9.11 9.11c.39.39 1.02.39 1.41 0l2.3-2.3c.4-.38.4-1.01 0-1.41zm-3 1.6l-9.46-9.46c-.61.45-1.29.72-2 .82-1.36.2-2.79-.21-3.83-1.25C3.37 9.76 2.93 8.5 3 7.26l3.09 3.09 4.24-4.24-3.09-3.09c1.24-.07 2.49.37 3.44 1.31a4.469 4.469 0 011.24 3.96 4.35 4.35 0 01-.88 1.96l9.45 9.45-.88.89z'/%3E%3C/svg%3E")}.side-2ur1Qk>.item-3XjbnG[aria-controls=community-tab i]:not(.role-3pGE29)::before{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M9 13.75c-2.34 0-7 1.17-7 3.5V19h14v-1.75c0-2.33-4.66-3.5-7-3.5zM4.34 17c.84-.58 2.87-1.25 4.66-1.25s3.82.67 4.66 1.25H4.34zM9 12c1.93 0 3.5-1.57 3.5-3.5S10.93 5 9 5 5.5 6.57 5.5 8.5 7.07 12 9 12zm0-5c.83 0 1.5.67 1.5 1.5S9.83 10 9 10s-1.5-.67-1.5-1.5S8.17 7 9 7zm7.04 6.81c1.16.84 1.96 1.96 1.96 3.44V19h4v-1.75c0-2.02-3.5-3.17-5.96-3.44zM15 12c1.93 0 3.5-1.57 3.5-3.5S16.93 5 15 5c-.54 0-1.04.13-1.5.35.63.89 1 1.98 1 3.15s-.37 2.26-1 3.15c.46.22.96.35 1.5.35z'/%3E%3C/svg%3E")}.side-2ur1Qk>.item-3XjbnG[aria-controls=threads-tab i]:not(.role-3pGE29)::before{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath fill='none' d='M0 0h24v24H0z'/%3E%3Cpath d='M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16.77c.68 0 1.23-.56 1.23-1.23V8c0-1.1-.9-2-2-2zm0 12H4V6h5.17l2 2H20v10zm-2-6H6v-2h12v2zm-4 4H6v-2h8v2z'/%3E%3C/svg%3E")}.side-2ur1Qk>.item-3XjbnG[aria-controls=analytics-tab i]:not(.role-3pGE29)::before{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath fill='none' d='M0 0h24v24H0z'/%3E%3Cpath d='M21 8c-1.45 0-2.26 1.44-1.93 2.51l-3.55 3.56c-.3-.09-.74-.09-1.04 0l-2.55-2.55C12.27 10.45 11.46 9 10 9c-1.45 0-2.27 1.44-1.93 2.52l-4.56 4.55C2.44 15.74 1 16.55 1 18c0 1.1.9 2 2 2 1.45 0 2.26-1.44 1.93-2.51l4.55-4.56c.3.09.74.09 1.04 0l2.55 2.55C12.73 16.55 13.54 18 15 18c1.45 0 2.27-1.44 1.93-2.52l3.56-3.55c1.07.33 2.51-.48 2.51-1.93 0-1.1-.9-2-2-2z'/%3E%3Cpath d='M15 9l.94-2.07L18 6l-2.06-.93L15 3l-.92 2.07L12 6l2.08.93zM3.5 11L4 9l2-.5L4 8l-.5-2L3 8l-2 .5L3 9z'/%3E%3C/svg%3E")}.side-2ur1Qk>.item-3XjbnG[aria-controls=partner-tab i]:not(.role-3pGE29)::before{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' fill='none'%3E%3Cpath d='M23.663 11.14l-4.083 2.604c-.584.289-.875.289-1.459 0-.291-.29-.875-.579-1.166-.868-1.167-.29-2.042 0-2.917.578l-1.459.868-7.292 4.918c-1.75.868-3.791.579-4.666-1.157-1.167-1.446-.584-3.471.875-4.629l8.75-5.786c2.333-1.446 5.25-2.025 7.875-1.446 2.334.578 4.084 1.736 5.542 3.471.584.579.292 1.158 0 1.447zM32 16.218c0 1.15-.582 2.3-1.456 2.876l-9.028 5.752c-1.747 1.15-3.494 1.725-5.533 1.725-.873 0-1.456 0-2.33-.287-2.329-.575-4.076-1.726-5.532-3.451-.292-.576 0-1.15.29-1.438l4.078-2.589c.291-.287.873-.287 1.165 0 .582.288 1.165.576 1.456.863 1.165 0 2.038 0 2.912-.575l2.038-1.15 5.825-4.027.873-.575c1.456-.863 3.786-.575 4.66.863.582.863.582 1.438.582 2.013z' fill='currentColor'/%3E%3C/svg%3E")}.side-2ur1Qk>.item-3XjbnG[aria-controls=discovery-tab i]:not(.role-3pGE29)::before{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z'/%3E%3C/svg%3E")}.side-2ur1Qk>.item-3XjbnG[aria-controls=community_welcome-tab i]:not(.role-3pGE29)::before{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M21 3H3c-1.11 0-2 .89-2 2v14c0 1.11.89 2 2 2h18c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2zm0 16.02H3V4.98h18v14.04zM10 12H8l4-4 4 4h-2v4h-4v-4z'/%3E%3C/svg%3E")}.side-2ur1Qk>.item-3XjbnG[aria-controls=member_verification-tab i]:not(.role-3pGE29)::before{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M18 9l-1.41-1.42L10 14.17l-2.59-2.58L6 13l4 4zm1-6h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-.14 0-.27.01-.4.04a2.008 2.008 0 00-1.44 1.19c-.1.23-.16.49-.16.77v14c0 .27.06.54.16.78s.25.45.43.64c.27.27.62.47 1.01.55.13.02.26.03.4.03h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7-.25c.41 0 .75.34.75.75s-.34.75-.75.75-.75-.34-.75-.75.34-.75.75-.75zM19 19H5V5h14v14z'/%3E%3C/svg%3E")}.side-2ur1Qk>.item-3XjbnG[aria-controls=members-tab i]:not(.role-3pGE29)::before{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M12.5 10c0-1.65-1.35-3-3-3s-3 1.35-3 3 1.35 3 3 3 3-1.35 3-3zm-3 1c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm6.5 2c1.11 0 2-.89 2-2 0-1.11-.89-2-2-2-1.11 0-2.01.89-2 2 0 1.11.89 2 2 2zM11.99 2.01c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zM5.84 17.12c.68-.54 2.27-1.11 3.66-1.11.07 0 .15.01.23.01.24-.64.67-1.29 1.3-1.86A9.05 9.05 0 009.5 14c-1.3 0-3.39.45-4.73 1.43-.5-1.04-.78-2.2-.78-3.43 0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.2-.27 2.34-.75 3.37-1-.59-2.36-.87-3.24-.87-1.52 0-4.5.81-4.5 2.7v2.78a7.935 7.935 0 01-5.66-2.86z'/%3E%3C/svg%3E")}.side-2ur1Qk>.item-3XjbnG[aria-controls=instant_invites-tab i]:not(.role-3pGE29)::before{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M4.01 6.03l7.51 3.22-7.52-1 .01-2.22m7.5 8.72L4 17.97v-2.22l7.51-1M2.01 3L2 10l15 2-15 2 .01 7L23 12 2.01 3z'/%3E%3C/svg%3E")}.side-2ur1Qk>.item-3XjbnG[aria-controls=bans-tab i]:not(.role-3pGE29)::before{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M2.3 20.28l9.6-9.6-1.4-1.42-.72.71a.996.996 0 01-1.41 0l-.71-.71a.996.996 0 010-1.41l5.66-5.66a.996.996 0 011.41 0l.71.71c.39.39.39 1.02 0 1.41l-.71.69 1.42 1.43a.996.996 0 011.41 0c.39.39.39 1.03 0 1.42l1.41 1.41.71-.71c.39-.39 1.03-.39 1.42 0l.7.71c.39.39.39 1.03 0 1.42l-5.65 5.65c-.39.39-1.03.39-1.42 0l-.7-.7a.99.99 0 010-1.42l.7-.71-1.41-1.41-9.61 9.61a.996.996 0 01-1.41 0c-.39-.39-.39-1.03 0-1.42M20 19a2 2 0 012 2v1H12v-1a2 2 0 012-2h6z'/%3E%3C/svg%3E")}.side-2ur1Qk>.item-3XjbnG[aria-controls=delete-tab i]:not(.role-3pGE29)::before{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M14.12 10.47L12 12.59l-2.13-2.12-1.41 1.41L10.59 14l-2.12 2.12 1.41 1.41L12 15.41l2.12 2.12 1.41-1.41L13.41 14l2.12-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4zM6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9z'/%3E%3C/svg%3E");--settings-icon-color: var(--settings-guild-delete)}.side-2ur1Qk>.item-3XjbnG[aria-controls=delete-tab i][style*="color: rgb(255, 255, 255)"]::before{--settings-icon-color: var(--settings-alt-focused)}.side-2ur1Qk>.item-3XjbnG[aria-controls=permissions-tab i]:not(.role-3pGE29)::before{--icon: url("data:image/svg+xml,%3Csvg width='18' height='18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M13.267 8.467a3.733 3.733 0 000-7.467H4.733a3.733 3.733 0 000 7.467h8.534zM7.347 7.4h5.92a2.667 2.667 0 000-5.333h-5.92a3.722 3.722 0 011.12 2.666c0 1.045-.43 1.99-1.12 2.667zm-5.28-2.667a2.667 2.667 0 115.333 0 2.667 2.667 0 01-5.333 0zM4.733 9.533a3.733 3.733 0 000 7.467h8.534a3.733 3.733 0 000-7.467H4.733zm5.92 1.067h-5.92a2.667 2.667 0 000 5.333h5.92a3.722 3.722 0 01-1.12-2.666c0-1.045.43-1.99 1.12-2.667zm5.28 2.667a2.667 2.667 0 11-5.333 0 2.667 2.667 0 015.333 0z' fill='%23fff'/%3E%3Cpath d='M4.733 15.933a2.667 2.667 0 110-5.333h5.92a3.722 3.722 0 00-1.12 2.667c0 1.044.43 1.989 1.12 2.666h-5.92z' fill='%23fff'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M13.267 2.067a2.667 2.667 0 010 5.333h-5.92a3.722 3.722 0 001.12-2.667c0-1.044-.43-1.989-1.12-2.666h5.92zm-8.534 0a2.667 2.667 0 100 5.333 2.667 2.667 0 000-5.333zm11.2 11.2a2.667 2.667 0 11-5.333 0 2.667 2.667 0 015.333 0zm-2.666-4.8H4.733a3.733 3.733 0 010-7.467h8.534a3.733 3.733 0 010 7.467zM4.733 9.533h8.534a3.733 3.733 0 010 7.467H4.733a3.733 3.733 0 010-7.467z' fill='%23fff'/%3E%3C/svg%3E")}.side-2ur1Qk>.item-3XjbnG[aria-controls="gm-custom css-tab"i]:not(.role-3pGE29)::before,.side-2ur1Qk>.item-3XjbnG[aria-controls=customcss-tab i]:not(.role-3pGE29)::before{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M18 4V3c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V6h1v4H9v11c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-9h8V4h-3zm-2 2H6V4h10v2z'/%3E%3C/svg%3E")}.side-2ur1Qk>.item-3XjbnG[aria-controls=plugins-tab i]:not(.role-3pGE29)::before,.side-2ur1Qk>.item-3XjbnG[aria-controls=pluginrepo-tab i]:not(.role-3pGE29)::before,.side-2ur1Qk>.item-3XjbnG[data-item-id=pc-modulemanager-plugins i]:not(.role-3pGE29)::before{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M10.5 4.5c.28 0 .5.22.5.5v2h6v6h2c.28 0 .5.22.5.5s-.22.5-.5.5h-2v6h-2.12c-.68-1.75-2.39-3-4.38-3s-3.7 1.25-4.38 3H4v-2.12c1.75-.68 3-2.39 3-4.38 0-1.99-1.24-3.7-2.99-4.38L4 7h6V5c0-.28.22-.5.5-.5m0-2A2.5 2.5 0 008 5H4c-1.1 0-1.99.9-1.99 2v3.8h.29c1.49 0 2.7 1.21 2.7 2.7s-1.21 2.7-2.7 2.7H2V20c0 1.1.9 2 2 2h3.8v-.3c0-1.49 1.21-2.7 2.7-2.7s2.7 1.21 2.7 2.7v.3H17c1.1 0 2-.9 2-2v-4a2.5 2.5 0 000-5V7c0-1.1-.9-2-2-2h-4a2.5 2.5 0 00-2.5-2.5z'/%3E%3C/svg%3E")}.side-2ur1Qk>.item-3XjbnG[aria-controls=themes-tab i]:not(.role-3pGE29)::before,.side-2ur1Qk>.item-3XjbnG[aria-controls=themerepo-tab i]:not(.role-3pGE29)::before,.side-2ur1Qk>.item-3XjbnG[data-item-id=pc-modulemanager-themes i]:not(.role-3pGE29)::before{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24'%3E%3Cpath fill='currentColor' d='M7 14c-1.66 0-3 1.34-3 3 0 1.31-1.16 2-2 2 .92 1.22 2.49 2 4 2 2.21 0 4-1.79 4-4 0-1.66-1.34-3-3-3zm13.71-9.37l-1.34-1.34a.996.996 0 00-1.41 0L9 12.25 11.75 15l8.96-8.96a.996.996 0 000-1.41z'/%3E%3C/svg%3E")}.side-2ur1Qk>.item-3XjbnG[data-item-id=pc-updater i]:not(.role-3pGE29)::before{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23fff' width='18' height='18'%3E%3Cpath fill='none' d='M0 0h24v24H0z'/%3E%3Cpath d='M21 10.12h-6.78l2.74-2.82c-2.73-2.7-7.15-2.8-9.88-.1-2.73 2.71-2.73 7.08 0 9.79s7.15 2.71 9.88 0C18.32 15.65 19 14.08 19 12.1h2c0 1.98-.88 4.55-2.64 6.29-3.51 3.48-9.21 3.48-12.72 0-3.5-3.47-3.53-9.11-.02-12.58s9.14-3.47 12.65 0L21 3v7.12zM12.5 8v4.25l3.5 2.08-.72 1.21L11 13V8h1.5z'/%3E%3C/svg%3E")}.side-2ur1Qk>.item-3XjbnG[data-item-id=pc-labs i]:not(.role-3pGE29)::before{--icon: url("data:image/svg+xml,%3Csvg fill='%23FFF' width='24' height='24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6 22a3 3 0 01-3-3c0-.6.18-1.16.5-1.63L9 7.81V6a1 1 0 01-1-1V4a2 2 0 012-2h4a2 2 0 012 2v1a1 1 0 01-1 1v1.81l5.5 9.56c.32.47.5 1.03.5 1.63a3 3 0 01-3 3H6m-1-3a1 1 0 001 1h12a1 1 0 001-1c0-.21-.07-.41-.18-.57l-2.29-3.96L14 17l-5.07-5.07-3.75 6.5c-.11.16-.18.36-.18.57m8-9a1 1 0 00-1 1 1 1 0 001 1 1 1 0 001-1 1 1 0 00-1-1z'/%3E%3C/svg%3E")}.side-2ur1Qk>.item-3XjbnG[aria-controls=experiments-tab i]:not(.role-3pGE29)::before{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' fill='%23fff' width='24'%3E%3Cpath fill='none' d='M0 0h24v24H0z'/%3E%3Cpath d='M7 19c-1.1 0-2 .9-2 2h14c0-1.1-.9-2-2-2h-4v-2h3c1.1 0 2-.9 2-2h-8c-1.66 0-3-1.34-3-3 0-1.09.59-2.04 1.46-2.56C8.17 9.03 8 8.54 8 8c0-.21.04-.42.09-.62A5.01 5.01 0 005 12c0 2.76 2.24 5 5 5v2H7z'/%3E%3Cpath d='M10.56 5.51C11.91 5.54 13 6.64 13 8c0 .75-.33 1.41-.85 1.87l.59 1.62.94-.34.34.94 1.88-.68-.34-.94.94-.34-2.74-7.53-.94.34-.34-.94-1.88.68.34.94-.94.35.56 1.54z'/%3E%3Ccircle cx='10.5' cy='8' r='1.5'/%3E%3C/svg%3E")}.side-2ur1Qk>.item-3XjbnG[aria-controls=developer-options-tab i]:not(.role-3pGE29)::before{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' fill='%23fff' width='24'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M3 17v2h6v-2H3zM3 5v2h10V5H3zm10 16v-2h8v-2h-8v-2h-2v6h2zM7 9v2H3v2h4v2h2V9H7zm14 4v-2H11v2h10zm-6-4h2V7h4V5h-4V3h-2v6z'/%3E%3C/svg%3E")}.side-2ur1Qk>.item-3XjbnG[aria-controls=gm-settings-tab i]:not(.role-3pGE29)::before,.side-2ur1Qk>.item-3XjbnG[aria-controls=settings-tab i]:not(.role-3pGE29)::before,.side-2ur1Qk>.item-3XjbnG[data-item-id=pc-general i]:not(.role-3pGE29)::before{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M19.43 12.98c.04-.32.07-.64.07-.98 0-.34-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46a.5.5 0 00-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65A.488.488 0 0014 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1a.566.566 0 00-.18-.03c-.17 0-.34.09-.43.25l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98 0 .33.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46a.5.5 0 00.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.06.02.12.03.18.03.17 0 .34-.09.43-.25l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zm-1.98-1.71c.04.31.05.52.05.73 0 .21-.02.43-.05.73l-.14 1.13.89.7 1.08.84-.7 1.21-1.27-.51-1.04-.42-.9.68c-.43.32-.84.56-1.25.73l-1.06.43-.16 1.13-.2 1.35h-1.4l-.19-1.35-.16-1.13-1.06-.43c-.43-.18-.83-.41-1.23-.71l-.91-.7-1.06.43-1.27.51-.7-1.21 1.08-.84.89-.7-.14-1.13c-.03-.31-.05-.54-.05-.74s.02-.43.05-.73l.14-1.13-.89-.7-1.08-.84.7-1.21 1.27.51 1.04.42.9-.68c.43-.32.84-.56 1.25-.73l1.06-.43.16-1.13.2-1.35h1.39l.19 1.35.16 1.13 1.06.43c.43.18.83.41 1.23.71l.91.7 1.06-.43 1.27-.51.7 1.21-1.07.85-.89.7.14 1.13zM12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z'/%3E%3C/svg%3E")}.side-2ur1Qk>.item-3XjbnG[data-item-id=pc-clickableEdits i]:not(.role-3pGE29)::before{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23fff' width='18' height='18'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a.996.996 0 000-1.41l-2.34-2.34a.996.996 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z'/%3E%3C/svg%3E")}.side-2ur1Qk>.item-3XjbnG[aria-controls=vpc-shiki-tab i]:not(.role-3pGE29)::before{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z'/%3E%3C/svg%3E")}.side-2ur1Qk>.item-3XjbnG[data-item-id=pc-spotify i]:not(.role-3pGE29)::before{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24'%3E%3Cpath d='M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm4.059 14.406c-.192 0-.286-.093-.473-.187-1.41-.848-3.195-1.317-5.078-1.317-1.035 0-2.164.188-3.106.375-.187 0-.375.094-.468.094a.64.64 0 01-.657-.656c0-.38.188-.66.563-.66 1.223-.282 2.445-.47 3.762-.47 2.164 0 4.14.563 5.832 1.505.187.187.378.281.378.656-.19.473-.472.66-.753.66zm1.03-2.633c-.187 0-.374-.093-.562-.187-1.597-1.035-3.855-1.602-6.3-1.602-1.223 0-2.356.192-3.2.38-.187.093-.28.093-.468.093a.744.744 0 01-.754-.754c0-.469.187-.656.656-.848 1.129-.28 2.258-.562 3.86-.562 2.632 0 5.077.656 7.148 1.879.281.187.468.473.468.754-.093.469-.375.847-.847.847zm1.224-3.011c-.188 0-.282-.094-.563-.188-1.883-1.035-4.61-1.691-7.242-1.691-1.317 0-2.73.187-3.953.469-.188 0-.282.093-.563.093-.562.094-.941-.375-.941-.941 0-.563.281-.848.66-.941C7.215 7.188 8.812 7 10.508 7c2.914 0 5.926.656 8.277 1.883.281.187.563.469.563.937-.094.567-.47.942-1.035.942zm0 0' fill='%23fff'/%3E%3C/svg%3E")}.side-2ur1Qk>.item-3XjbnG[aria-controls=emotes-tab i]:not(.role-3pGE29)::before,.side-2ur1Qk>.item-3XjbnG[data-item-id=pc-emojiutility i]:not(.role-3pGE29)::before{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath fill='none' d='M0 0h24v24H0z'/%3E%3Ccircle cx='15.5' cy='9.5' r='1.5'/%3E%3Ccircle cx='8.5' cy='9.5' r='1.5'/%3E%3Cpath d='M12 18c2.28 0 4.22-1.66 5-4H7c.78 2.34 2.72 4 5 4z'/%3E%3Cpath d='M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z'/%3E%3C/svg%3E")}.side-2ur1Qk>.item-3XjbnG[data-item-id=bdcompat i]:not(.role-3pGE29)::before{--icon: url("data:image/svg+xml,%3Csvg width='18' height='18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.5 7.77l3.521 3.174.02-3.035.015-3.035h1.178c1.248 0 1.632.063 2.03.35.655.467.668 1.576.027 2.071-.397.3-.69.363-1.645.37h-.893v2.651h.865c1.199 0 1.7.196 2 .789.328.634.105 1.367-.522 1.758l-.342.21-6.254.041v2.853h3.019c1.66 0 3.284-.034 3.605-.07 2.112-.258 3.437-1.192 3.918-2.755.195-.621.21-1.863.035-2.526-.126-.488-.39-1.053-.655-1.402l-.168-.223.168-.23c.878-1.166 1.045-3.112.39-4.494-.314-.67-.927-1.255-1.68-1.618-1.179-.565-1.8-.635-5.648-.635H1.5V7.77zm9.461-5.477a4.46 4.46 0 011.813 2.512c.112.411.126.781.126 4.186 0 3.363-.014 3.774-.126 4.179a4.49 4.49 0 01-1.827 2.54l-.418.271.872-.034c2.726-.126 4.546-1.424 4.978-3.552.058-.276.095-1.13.111-2.146.013-.8.013-1.7 0-2.495-.015-.978-.05-1.8-.104-2.084-.195-1.019-.74-1.926-1.527-2.519-.914-.69-2.015-1.046-3.458-1.11L10.529 2l.432.293z' fill='%23fff'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M16.49 7.754v2.495c-.016 1.016-.053 1.87-.111 2.146-.432 2.128-2.252 3.426-4.978 3.552l-.872.034.418-.272a4.49 4.49 0 001.827-2.54c.112-.404.126-.816.126-4.178 0-3.405-.014-3.775-.126-4.186a4.46 4.46 0 00-1.813-2.512L10.53 2l.872.042c1.443.063 2.544.418 3.458 1.11.788.592 1.332 1.5 1.527 2.518.054.284.089 1.106.104 2.084zM1.5 13.114v2.853h3.019c1.66 0 3.284-.034 3.605-.07 2.112-.258 3.437-1.192 3.918-2.755.195-.621.21-1.863.035-2.526-.126-.488-.39-1.053-.655-1.402l-.168-.223.168-.23c.878-1.166 1.045-3.112.39-4.494-.314-.67-.927-1.255-1.68-1.618-1.179-.565-1.8-.635-5.648-.635H1.5V7.77l3.521 3.174.02-3.035.015-3.035h1.178c1.248 0 1.632.063 2.03.35.655.467.668 1.576.027 2.071-.397.3-.69.363-1.645.37h-.893v2.651h.865c1.199 0 1.7.196 2 .789.328.634.105 1.367-.522 1.758l-.342.21-6.254.041z' fill='%23fff'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M5.021 10.944l.02-3.035.015-3.035h1.178c1.248 0 1.632.063 2.03.35.655.467.668 1.576.027 2.071-.397.3-.69.363-1.645.37h-.893v2.651h.865c1.199 0 1.7.196 2 .789.328.634.105 1.367-.522 1.758l-.342.21-6.254.041v2.853h3.019c1.66 0 3.284-.034 3.605-.07 2.112-.258 3.437-1.192 3.918-2.755.195-.621.21-1.863.035-2.526-.126-.488-.39-1.053-.655-1.402l-.168-.223.168-.23c.878-1.166 1.045-3.112.39-4.494-.314-.67-.927-1.255-1.68-1.618-1.179-.565-1.8-.635-5.648-.635H1.5V7.77l3.521 3.174zm5.94-8.651a4.46 4.46 0 011.813 2.512c.112.411.126.781.126 4.186 0 3.363-.014 3.774-.126 4.179a4.49 4.49 0 01-1.827 2.54l-.418.271.872-.034c2.726-.126 4.546-1.424 4.978-3.552.058-.276.095-1.13.111-2.146.013-.8.013-1.7 0-2.495-.015-.978-.05-1.8-.104-2.084-.195-1.019-.74-1.926-1.527-2.519-.914-.69-2.015-1.046-3.458-1.11L10.529 2l.432.293z' fill='%23fff'/%3E%3C/svg%3E")}.side-2ur1Qk>.item-3XjbnG[data-item-id=dice-command i]:not(.role-3pGE29)::before{--icon: url("data:image/svg+xml,%3Csvg width='18' height='18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M15.8 7.4A1.2 1.2 0 0117 8.6v5.6a1.2 1.2 0 01-1.2 1.2h-5.6A1.2 1.2 0 019 14.2v-1.16l3.406-3.407a2.027 2.027 0 00.425-2.233H15.8zM7.468 2.96l4.373 4.372a1.227 1.227 0 010 1.736L7.467 13.44a1.227 1.227 0 01-1.734 0L1.359 9.067a1.227 1.227 0 010-1.735L5.733 2.96a1.227 1.227 0 011.735 0zM7.6 5a1 1 0 11-2 0 1 1 0 012 0zM3.4 9.2a1 1 0 110-2 1 1 0 010 2zm4.2 2.2a1 1 0 11-2 0 1 1 0 012 0zm2.2-2.2a1 1 0 100-2 1 1 0 000 2zm-2.2-1a1 1 0 11-2 0 1 1 0 012 0zm5.4 4.2a1 1 0 100-2 1 1 0 000 2z' fill='%23fff'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M15.8 7.4h-2.969c.318.74.178 1.63-.425 2.233L9 13.04v1.16a1.2 1.2 0 001.2 1.2h5.6a1.2 1.2 0 001.2-1.2V8.6a1.2 1.2 0 00-1.2-1.2zm-3.96-.068L7.469 2.96a1.227 1.227 0 00-1.735 0L1.359 7.332a1.227 1.227 0 000 1.735l4.373 4.374a1.227 1.227 0 001.735 0l4.374-4.373a1.227 1.227 0 000-1.736zM7.6 5a1 1 0 11-2 0 1 1 0 012 0zm-1 4.2a1 1 0 100-2 1 1 0 000 2zm-4.2-1a1 1 0 102 0 1 1 0 00-2 0zm4.2 4.2a1 1 0 100-2 1 1 0 000 2zm4.2-4.2a1 1 0 11-2 0 1 1 0 012 0zm2.2 4.2a1 1 0 100-2 1 1 0 000 2z' fill='%23fff'/%3E%3C/svg%3E")}.side-2ur1Qk>.item-3XjbnG[data-item-id=relaunch i]:not(.role-3pGE29)::before{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23fff' d='M371 133a168 168 0 00-278 82c-1 5-6 9-12 9H24c-7 0-13-7-12-14A248 248 0 01427 77l36-36c15-15 41-4 41 17v134c0 13-11 24-24 24H346c-21 0-32-26-17-41l42-42zM32 296h134c21 0 32 26 17 41l-42 42a168 168 0 00278-82c1-5 6-9 12-9h57c7 0 13 7 12 14A248 248 0 0185 435l-36 36c-15 15-41 4-41-17V320c0-13 11-24 24-24z'/%3E%3C/svg%3E")}.side-2ur1Qk>.item-3XjbnG[data-item-id=ian-settings i]:not(.role-3pGE29)::before{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='18.976' height='15.975" overflow="visible'%3E%3Cpath fill='%23fff' d='M17.192.5H1.785C1.075.5.5 1.076.5 1.784v7.372c0 .71.575 1.284 1.285 1.284h11.08l4.327 4.327V10.44c.71 0 1.284-.574 1.284-1.284V1.784c0-.708-.574-1.284-1.284-1.284z'/%3E%3C/svg%3E")}.side-2ur1Qk>.item-3XjbnG[data-item-id=alias i]:not(.role-3pGE29)::before{--icon: url("data:image/svg+xml,%3Csvg width='18' height='18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M3.5 12.5h-2a.5.5 0 00-.5.5v2a.5.5 0 00.5.5h2A.5.5 0 004 15v-2a.5.5 0 00-.5-.5zm0-10h-2A.5.5 0 001 3v2a.5.5 0 00.5.5h2A.5.5 0 004 5V3a.5.5 0 00-.5-.5zm0 5h-2A.5.5 0 001 8v2a.5.5 0 00.5.5h2A.5.5 0 004 10V8a.5.5 0 00-.5-.5zm13 5.5h-10a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h10a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5zm0-10h-10a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h10a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5zm0 5h-10a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h10a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5z' fill='%23fff'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M3.5 12.5h-2a.5.5 0 00-.5.5v2a.5.5 0 00.5.5h2A.5.5 0 004 15v-2a.5.5 0 00-.5-.5zm0-10h-2A.5.5 0 001 3v2a.5.5 0 00.5.5h2A.5.5 0 004 5V3a.5.5 0 00-.5-.5zm0 5h-2A.5.5 0 001 8v2a.5.5 0 00.5.5h2A.5.5 0 004 10V8a.5.5 0 00-.5-.5zm13 5.5h-10a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h10a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5zm0-10h-10a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h10a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5zm0 5h-10a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h10a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5z' fill='%23fff'/%3E%3C/svg%3E")}.side-2ur1Qk>.item-3XjbnG[data-item-id=game-activity-toggle i]:not(.role-3pGE29)::before{--icon: url("data:image/svg+xml,%3Csvg width='18' height='18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9.708 5.604V1.708h-4.25v3.896L7.583 7.73l2.125-2.125zM4.396 6.667H.5v4.25h3.896L6.52 8.792 4.396 6.667zm1.062 5.312v3.896h4.25v-3.896L7.583 9.854 5.458 11.98z' fill='%23fff'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M13.958 1a3.542 3.542 0 00-3.541 3.542v8.5a3.542 3.542 0 107.083 0v-8.5A3.542 3.542 0 0013.958 1zm0 6.198a2.48 2.48 0 100-4.958 2.48 2.48 0 000 4.958z' fill='%23fff'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M9.708 1.708v3.896L7.583 7.73 5.458 5.604V1.708h4.25zM.5 6.667h3.896L6.52 8.792l-2.125 2.125H.5v-4.25zm4.958 9.208v-3.896l2.125-2.125 2.125 2.125v3.896h-4.25zM17.5 4.542a3.542 3.542 0 00-7.083 0v8.5a3.542 3.542 0 107.083 0v-8.5zm-3.542 2.656a2.48 2.48 0 100-4.958 2.48 2.48 0 000 4.958z' fill='%23fff'/%3E%3C/svg%3E")}.side-2ur1Qk>.item-3XjbnG[data-item-id=itc-settings i]:not(.role-3pGE29)::before{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M14 6l-4.22 5.63 1.25 1.67L14 9.33 19 16h-8.46l-4.01-5.37L1 18h22L14 6zM5 16l1.52-2.03L8.04 16H5z'/%3E%3C/svg%3E")}.side-2ur1Qk>.item-3XjbnG[data-item-id=jssnippets i]:not(.role-3pGE29)::before{--icon: url("data:image/svg+xml,%3Csvg width='18' height='18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11.408 7.107c0 1.524-.895 2.22-2.199 2.22-1.178 0-1.86-.608-2.209-1.346l1.199-.723c.23.409.44.755.947.755.483 0 .79-.19.79-.927V2.084h1.472v5.023zm3.482 2.22c-1.367 0-2.251-.65-2.681-1.503l1.199-.692c.314.514.727.895 1.45.895.609 0 1-.304 1-.727 0-.504-.398-.682-1.073-.98l-.367-.157c-1.063-.45-1.765-1.02-1.765-2.22 0-1.104.842-1.943 2.153-1.943.937 0 1.608.325 2.09 1.178l-1.146.734c-.252-.45-.524-.63-.947-.63-.43 0-.703.274-.703.63 0 .44.273.619.905.895l.367.157c1.252.535 1.954 1.084 1.954 2.315 0 1.321-1.041 2.048-2.436 2.048z' fill='%23fff'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M11.408 7.107c0 1.524-.895 2.22-2.199 2.22-1.178 0-1.86-.608-2.209-1.346l1.199-.723c.23.409.44.755.947.755.483 0 .79-.19.79-.927V2.084h1.472v5.023zm3.482 2.22c-1.367 0-2.251-.65-2.681-1.503l1.199-.692c.314.514.727.895 1.45.895.609 0 1-.304 1-.727 0-.504-.398-.682-1.073-.98l-.367-.157c-1.063-.45-1.765-1.02-1.765-2.22 0-1.104.842-1.943 2.153-1.943.937 0 1.608.325 2.09 1.178l-1.146.734c-.252-.45-.524-.63-.947-.63-.43 0-.703.274-.703.63 0 .44.273.619.905.895l.367.157c1.252.535 1.954 1.084 1.954 2.315 0 1.321-1.041 2.048-2.436 2.048z' fill='%23fff'/%3E%3Cpath d='M6.164 10.836V6.235A.234.234 0 005.929 6c-.907 0-1.642.735-1.642 1.642v3.194h-.688a1.877 1.877 0 10-.223 1.877h.91v.91a1.877 1.877 0 101.877-.223v-.687h3.195c.907 0 1.642-.735 1.642-1.642a.234.234 0 00-.235-.235H6.164zm-3.845 1.19a.627.627 0 01-.884-.885.627.627 0 01.884.885zm3.54 3.54a.626.626 0 11-.885-.888.626.626 0 01.885.887z' fill='%23fff'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M.55 10.257c-.367.366-.55.846-.55 1.327a1.877 1.877 0 003.376 1.13h.91v.91a1.877 1.877 0 101.877-.223v-.688h3.195c.907 0 1.642-.735 1.642-1.642a.234.234 0 00-.235-.235H6.164V6.235A.234.234 0 005.929 6c-.907 0-1.642.735-1.642 1.642v3.194h-.688a1.877 1.877 0 00-3.05-.58zm10.858-3.15c0 1.524-.895 2.22-2.199 2.22-1.178 0-1.86-.608-2.209-1.346l1.199-.723c.23.409.44.755.947.755.483 0 .79-.19.79-.927V2.084h1.472v5.023zm3.482 2.22c-1.367 0-2.251-.65-2.681-1.503l1.199-.692c.314.514.727.895 1.45.895.609 0 1-.304 1-.727 0-.504-.398-.682-1.073-.98l-.367-.157c-1.063-.45-1.765-1.02-1.765-2.22 0-1.104.842-1.943 2.153-1.943.937 0 1.608.325 2.09 1.178l-1.146.734c-.252-.45-.524-.63-.947-.63-.43 0-.703.274-.703.63 0 .44.273.619.905.895l.367.157c1.252.535 1.954 1.084 1.954 2.315 0 1.321-1.041 2.048-2.436 2.048zm-12.57 2.7a.627.627 0 01-.885-.886.627.627 0 01.884.885zm2.654 3.538a.626.626 0 10.885-.887.626.626 0 00-.885.887z' fill='%23fff'/%3E%3C/svg%3E")}.side-2ur1Qk>.item-3XjbnG[data-item-id=mention-count i]:not(.role-3pGE29)::before{--icon: url("data:image/svg+xml,%3Csvg width='18' height='18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4.887 5A4.385 4.385 0 00.5 9.387a4.385 4.385 0 006.782 3.676.425.425 0 00.099-.626l-.18-.22a.423.423 0 00-.555-.09 3.259 3.259 0 01-5.013-2.74 3.259 3.259 0 013.254-3.255c1.772 0 3.255 1.02 3.255 2.83 0 .687-.373 1.411-1.029 1.481-.307-.008-.3-.227-.238-.531l.414-2.142a.425.425 0 00-.417-.506h-.795a.24.24 0 00-.238.212v.002c-.26-.317-.716-.385-1.061-.385-1.32 0-2.438 1.1-2.438 2.68 0 1.154.65 1.872 1.698 1.872.477 0 1.015-.277 1.327-.678.168.603.718.603 1.25.603 1.927 0 2.66-1.267 2.66-2.607C9.274 6.55 7.328 5 4.886 5zm-.383 5.385c-.394 0-.638-.276-.638-.72 0-.797.544-1.287 1.037-1.287.394 0 .63.27.63.72 0 .798-.6 1.287-1.03 1.287zM17.374 7.572l.123-.685a.206.206 0 00-.203-.242h-1.282l.25-1.403A.206.206 0 0016.06 5h-.696a.206.206 0 00-.202.17l-.264 1.475h-1.69l.25-1.403A.206.206 0 0013.256 5h-.696a.206.206 0 00-.203.17l-.263 1.475h-1.356a.206.206 0 00-.202.17l-.123.685a.206.206 0 00.203.242h1.282l-.392 2.193h-1.355a.206.206 0 00-.203.17l-.122.685a.206.206 0 00.202.242h1.282l-.25 1.404a.206.206 0 00.202.241h.697a.206.206 0 00.202-.17l.263-1.475h1.69l-.25 1.404a.206.206 0 00.203.241h.696a.205.205 0 00.202-.17l.264-1.475h1.355a.205.205 0 00.203-.17l.122-.685a.206.206 0 00-.202-.242h-1.282l.391-2.193h1.356a.206.206 0 00.202-.17zm-3.063 2.363h-1.69l.391-2.193h1.69l-.391 2.193z' fill='%23fff'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M4.887 5A4.385 4.385 0 00.5 9.387a4.385 4.385 0 006.782 3.676.425.425 0 00.099-.626l-.18-.22a.423.423 0 00-.555-.09 3.259 3.259 0 01-5.013-2.74 3.259 3.259 0 013.254-3.255c1.772 0 3.255 1.02 3.255 2.83 0 .687-.373 1.411-1.029 1.481-.307-.008-.3-.227-.238-.531l.414-2.142a.425.425 0 00-.417-.506h-.795a.24.24 0 00-.238.212v.002c-.26-.317-.716-.385-1.061-.385-1.32 0-2.438 1.1-2.438 2.68 0 1.154.65 1.872 1.698 1.872.477 0 1.015-.277 1.327-.678.168.603.718.603 1.25.603 1.927 0 2.66-1.267 2.66-2.607C9.274 6.55 7.328 5 4.886 5zm12.487 2.572l.123-.685a.206.206 0 00-.203-.242h-1.282l.25-1.403A.206.206 0 0016.06 5h-.696a.206.206 0 00-.202.17l-.264 1.475h-1.69l.25-1.403A.206.206 0 0013.256 5h-.696a.206.206 0 00-.203.17l-.263 1.475h-1.356a.206.206 0 00-.202.17l-.123.685a.206.206 0 00.203.242h1.282l-.392 2.193h-1.355a.206.206 0 00-.203.17l-.122.685a.206.206 0 00.202.242h1.282l-.25 1.404a.206.206 0 00.202.241h.697a.206.206 0 00.202-.17l.263-1.475h1.69l-.25 1.404a.206.206 0 00.203.241h.696a.205.205 0 00.202-.17l.264-1.475h1.355a.205.205 0 00.203-.17l.122-.685a.206.206 0 00-.202-.242h-1.282l.391-2.193h1.356a.206.206 0 00.202-.17zm-3.063 2.363h-1.69l.391-2.193h1.69l-.391 2.193zm-10.445-.27c0 .444.244.72.638.72.43 0 1.028-.49 1.028-1.286 0-.452-.235-.721-.63-.721-.492 0-1.037.49-1.037 1.286z' fill='%23fff'/%3E%3C/svg%3E")}.side-2ur1Qk>.item-3XjbnG[data-item-id=multitask i]:not(.role-3pGE29)::before{--icon: url("data:image/svg+xml,%3Csvg width='18' height='18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M2.286 4.286C1.576 4.286 1 4.862 1 5.57V15c0 .71.576 1.286 1.286 1.286h11.143c.71 0 1.285-.576 1.285-1.286v-.429H2.524V4.286h-.238z' fill='%23fff'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M15.714 2H4.571c-.71 0-1.285.576-1.285 1.286V14h12.428c.71 0 1.286-.576 1.286-1.286V3.286C17 2.576 16.424 2 15.714 2zM6.393 5.429a.322.322 0 00.321-.322V4.036a.322.322 0 00-.321-.322H5.32A.322.322 0 005 4.036v1.071c0 .177.145.322.321.322h1.072zm8.571 0a.322.322 0 00.322-.322V4.036a.322.322 0 00-.322-.322H8.321A.322.322 0 008 4.036v1.071c0 .177.145.322.321.322h6.643z' fill='%23fff'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M6.393 5.429a.322.322 0 00.321-.322V4.036a.322.322 0 00-.321-.322H5.32A.322.322 0 005 4.036v1.071c0 .177.145.322.321.322h1.072zm8.893-.322a.322.322 0 01-.322.322H8.321A.322.322 0 018 5.107V4.036c0-.177.145-.322.321-.322h6.643c.177 0 .322.145.322.322v1.071zm-13-.821C1.576 4.286 1 4.862 1 5.57V15c0 .71.576 1.286 1.286 1.286h11.143c.71 0 1.285-.576 1.285-1.286v-.429H2.524V4.286h-.238zM15.714 2H4.571c-.71 0-1.285.576-1.285 1.286V14h12.428c.71 0 1.286-.576 1.286-1.286V3.286C17 2.576 16.424 2 15.714 2z' fill='%23fff'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M2.286 4.286C1.576 4.286 1 4.862 1 5.57V15c0 .71.576 1.286 1.286 1.286h11.143c.71 0 1.285-.576 1.285-1.286v-.429H2.524V4.286h-.238zM15.714 2H4.571c-.71 0-1.285.576-1.285 1.286V14h12.428c.71 0 1.286-.576 1.286-1.286V3.286C17 2.576 16.424 2 15.714 2zm-9 3.107a.322.322 0 01-.321.322H5.32A.322.322 0 015 5.107V4.036c0-.177.145-.322.321-.322h1.072c.177 0 .321.145.321.322v1.071zm8.25.322a.322.322 0 00.322-.322V4.036a.322.322 0 00-.322-.322H8.321A.322.322 0 008 4.036v1.071c0 .177.145.322.321.322h6.643z' fill='%23fff'/%3E%3C/svg%3E")}.side-2ur1Qk>.item-3XjbnG[data-item-id=pc-hastebin i]:not(.role-3pGE29)::before{--icon: url("data:image/svg+xml,%3Csvg width='18' height='18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M2.84 3.02c-.144.017-.21.12-.233.36a2.19 2.19 0 01-.078.39c-.062.195-.14.633-.17.951-.01.1-.052.32-.093.488-.041.168-.095.49-.12.717-.025.227-.08.529-.12.672a5.417 5.417 0 00-.127.7 6.116 6.116 0 01-.112.671c-.096.364-.113.461-.114.679-.001.128-.03.293-.076.442-.073.232-.13.55-.2 1.138-.02.16-.06.36-.092.447a3.413 3.413 0 00-.104.55c-.049.41-.11.755-.185 1.047a3.012 3.012 0 00-.063.445 2.41 2.41 0 01-.06.41 5.06 5.06 0 00-.184.966 3.54 3.54 0 01-.122.64c-.05.154-.08.319-.085.46v.033c-.003.093-.005.155.023.196.057.083.234.083.767.084h.863l.092-.077c.05-.043.1-.1.109-.13.031-.099.108-.57.108-.667 0-.118.107-.669.17-.88.025-.083.055-.303.065-.488.013-.234.04-.39.087-.518.067-.18.087-.285.184-.99.026-.192.062-.376.08-.41.045-.083.116-.353.116-.44 0-.038.055-.156.122-.262.068-.106.123-.208.123-.226 0-.053.284-.341.413-.419.76-.456 1.895-.359 2.15.184a.836.836 0 00.081.14c.144.173.148.824.01 1.37a6 6 0 00-.106.662 4.208 4.208 0 01-.122.671c-.326 1.034-.13 1.948.487 2.273l.275.145c.074.038.23.05.8.058l.71.01.087-.088c.071-.07.096-.132.124-.315.02-.125.05-.29.068-.365.117-.503-.001-.705-.406-.697-.404.008-.5-.196-.35-.752.027-.1.065-.348.083-.55.022-.24.058-.433.107-.564.05-.134.094-.375.137-.747.097-.822.103-.98.047-1.195a1.565 1.565 0 01-.05-.305c0-.16-.076-.433-.146-.528a.576.576 0 01-.08-.17c-.055-.223-.756-.96-.914-.96-.016 0-.125-.05-.24-.11-.429-.221-1.38-.22-1.834.004a1.273 1.273 0 01-.262.106c-.108 0-.51.32-.83.66l-.174.184-.02-.104c-.022-.122-.003-.234.08-.462.033-.09.073-.3.088-.464a7.56 7.56 0 01.2-1.08c.023-.084.056-.314.072-.511.017-.197.046-.387.065-.423.039-.072.181-.871.182-1.02 0-.05.029-.214.063-.365.105-.456.145-.69.166-.946.01-.134.04-.31.066-.39.058-.183.01-.277-.165-.326-.108-.03-1.213-.037-1.434-.01zm9.117.008c-.204.048-.237.118-.29.616-.03.268-.073.51-.109.6-.036.094-.078.328-.106.605a5.27 5.27 0 01-.124.726 4.998 4.998 0 00-.12.656c-.024.21-.079.533-.122.717a7.713 7.713 0 00-.122.717 4.33 4.33 0 01-.09.534c-.056.186-.124.593-.171 1.021-.02.175-.062.388-.095.473a2.35 2.35 0 00-.091.46c-.031.3-.09.632-.21 1.204a2.97 2.97 0 00-.062.458 1.373 1.373 0 01-.03.275 6.42 6.42 0 00-.164.732c-.027.16-.057.379-.067.488-.01.11-.052.329-.092.488-.04.16-.093.475-.12.702-.05.44-.077.58-.135.703-.113.24.05.31.688.298.654-.013.67-.034.728-.97.032-.527.047-.612.1-.57a.949.949 0 01.267.316c.083.198.484.64.71.783a.89.89 0 01.156.122c.023.028.053.05.067.05.014 0 .126.05.248.11.27.133.346.157.61.196.113.016.292.06.397.096.217.075.636.054.848-.043.058-.027.196-.058.305-.07.142-.014.278-.058.48-.154.156-.074.298-.135.315-.135.017 0 .063-.032.102-.07a.636.636 0 01.174-.114c.118-.049.843-.764.912-.9.025-.049.09-.158.145-.242.054-.083.114-.2.134-.26a.855.855 0 01.102-.199c.037-.05.092-.18.121-.29a5.59 5.59 0 01.127-.392c.16-.426.172-1.897.02-2.232a3.242 3.242 0 01-.133-.396 1.412 1.412 0 00-.14-.357.408.408 0 01-.071-.127c0-.118-.668-.92-.765-.92a.37.37 0 01-.11-.072 2.34 2.34 0 00-.882-.402 3.212 3.212 0 01-.412-.095c-.234-.08-.625-.075-.882.01a2.33 2.33 0 01-.366.086 1.52 1.52 0 00-.387.124c-.12.058-.232.105-.25.105a.633.633 0 00-.162.1 3.744 3.744 0 01-.223.156 1.97 1.97 0 00-.275.25c-.262.276-.32.284-.32.046 0-.125.024-.247.075-.376a2.78 2.78 0 00.123-.572c.07-.543.128-.877.184-1.053.027-.084.057-.297.066-.473.01-.176.035-.355.057-.398.021-.043.06-.192.087-.33.027-.14.054-.263.061-.275a5.38 5.38 0 00.061-.478c.03-.281.072-.52.11-.621.037-.096.075-.3.092-.488.015-.178.05-.43.079-.56.057-.267.044-.305-.133-.379-.108-.045-.742-.052-.92-.01zm2.596 6.283c.406.067 1.036.476 1.186.77.033.064.071.117.085.117.034 0 .067.077.222.52l.133.38v.503c0 .461-.007.524-.08.748-.044.134-.103.34-.131.458a1.218 1.218 0 01-.125.32c-.04.059-.093.155-.119.213-.05.12-.454.55-.643.689a1.59 1.59 0 00-.137.108c-.039.047-.616.27-.777.3-1.18.217-2.044-.272-2.48-1.404l-.145-.379v-.599c0-.4.012-.612.036-.64a2.61 2.61 0 00.146-.374c.062-.182.152-.387.201-.454a.541.541 0 00.09-.16c0-.076.588-.687.662-.687a.277.277 0 00.088-.063c.29-.273 1.207-.46 1.788-.366z' fill='%23fff'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M2.607 3.38c.023-.24.09-.343.232-.36.221-.028 1.326-.02 1.434.01.175.048.223.142.165.325-.026.08-.055.256-.066.39-.02.256-.061.49-.166.946a2.662 2.662 0 00-.063.366c0 .148-.143.947-.182 1.019-.019.036-.048.226-.065.423-.016.197-.05.427-.073.51a7.56 7.56 0 00-.199 1.08 2.398 2.398 0 01-.088.465c-.083.228-.102.34-.08.462l.02.104.173-.183c.322-.34.723-.66.831-.661.026 0 .144-.048.262-.106.454-.223 1.405-.225 1.834-.003.115.06.224.109.24.109.158 0 .86.737.914.96a.601.601 0 00.08.17c.07.095.146.369.146.528 0 .065.023.202.05.305.056.216.05.373-.047 1.195-.043.372-.088.613-.137.747-.049.13-.085.324-.107.565a4.285 4.285 0 01-.083.549c-.15.556-.054.76.35.752.405-.008.523.194.406.697-.018.075-.048.24-.068.365-.028.183-.053.244-.124.315l-.088.088-.709-.01c-.57-.008-.726-.02-.8-.059l-.275-.144c-.617-.325-.813-1.24-.487-2.273.044-.138.095-.42.122-.671.026-.238.073-.537.105-.663.14-.545.135-1.196-.009-1.369a.836.836 0 01-.082-.14c-.254-.543-1.39-.64-2.149-.184-.13.078-.413.366-.413.42 0 .017-.055.119-.123.225-.067.106-.122.224-.122.262 0 .087-.071.357-.115.44a2.392 2.392 0 00-.081.41c-.097.705-.117.81-.184.99a1.764 1.764 0 00-.087.518 2.82 2.82 0 01-.065.489c-.063.21-.17.761-.17.879 0 .096-.077.568-.108.668a.408.408 0 01-.109.13l-.092.077-.768-.001h-.095c-.533 0-.71 0-.767-.084-.028-.041-.026-.103-.024-.196l.001-.034c.004-.14.035-.305.085-.459a3.54 3.54 0 00.122-.64 5.06 5.06 0 01.184-.966c.023-.076.05-.26.06-.41.01-.15.038-.35.063-.445.075-.292.136-.638.185-1.048.026-.216.072-.463.104-.549.031-.086.072-.287.092-.447.07-.588.127-.906.2-1.138.047-.15.075-.314.076-.442.001-.218.018-.315.114-.679.034-.126.085-.428.112-.671.028-.243.085-.558.126-.7.041-.143.096-.445.12-.672.026-.226.08-.549.121-.717.04-.167.082-.387.092-.488.03-.318.11-.756.171-.95a2.22 2.22 0 00.078-.391zm9.06.264c.053-.498.086-.568.29-.616.178-.042.812-.035.92.01.177.074.19.112.133.38a5.63 5.63 0 00-.08.559 2.217 2.217 0 01-.09.488c-.039.101-.081.34-.11.621a5.863 5.863 0 01-.062.478 2.553 2.553 0 00-.06.274c-.027.14-.067.288-.088.33-.022.044-.047.223-.057.4a2.447 2.447 0 01-.066.472c-.056.176-.115.51-.184 1.053a2.78 2.78 0 01-.123.572 1.01 1.01 0 00-.075.376c0 .238.058.23.32-.047.1-.106.224-.218.275-.25.05-.03.15-.1.223-.155a.633.633 0 01.163-.1c.016 0 .129-.047.249-.105a1.52 1.52 0 01.387-.124c.092-.011.257-.05.366-.086.258-.085.648-.09.882-.01.091.03.276.073.412.095.254.041.688.24.882.402a.37.37 0 00.11.072c.098 0 .765.802.765.92 0 .016.032.074.071.127.04.054.102.214.14.357.038.143.098.321.132.396.153.335.14 1.806-.02 2.232a5.58 5.58 0 00-.126.392c-.03.11-.084.24-.12.29a.855.855 0 00-.103.2c-.02.059-.08.176-.134.26a3.47 3.47 0 00-.145.242c-.07.135-.794.85-.912.899a.636.636 0 00-.174.113c-.039.04-.085.071-.102.071-.017 0-.159.06-.314.135-.203.096-.34.14-.481.154-.11.012-.247.043-.305.07-.212.097-.63.118-.848.043a2.592 2.592 0 00-.397-.096c-.264-.039-.34-.063-.61-.196a1.86 1.86 0 00-.248-.11c-.014 0-.044-.022-.067-.05a.846.846 0 00-.156-.122c-.226-.142-.627-.585-.71-.783a.944.944 0 00-.268-.317c-.052-.04-.067.044-.1.57-.056.937-.073.958-.727.971-.638.013-.801-.058-.688-.298.058-.123.085-.264.136-.703.026-.227.08-.542.12-.702.04-.16.08-.379.09-.488.01-.11.041-.329.068-.488.043-.262.073-.393.164-.732.016-.06.029-.183.03-.275 0-.092.028-.298.062-.458.12-.572.178-.905.21-1.205a2.35 2.35 0 01.091-.46c.033-.084.075-.297.095-.472.047-.428.115-.835.17-1.02.026-.084.067-.325.09-.535.025-.21.08-.532.123-.717a7.33 7.33 0 00.121-.717 5.22 5.22 0 01.12-.656 5.27 5.27 0 00.125-.726c.028-.277.07-.511.106-.604.036-.091.08-.333.108-.6zm4.072 6.437c-.15-.294-.78-.703-1.186-.77-.58-.095-1.498.093-1.788.366a.277.277 0 01-.088.063c-.074 0-.662.611-.662.688 0 .02-.04.09-.09.159-.049.067-.14.272-.2.454-.062.182-.128.35-.147.374-.024.028-.035.24-.036.64v.599l.145.379c.436 1.132 1.3 1.621 2.48 1.403.161-.03.738-.252.777-.3.008-.01.07-.058.137-.107.189-.138.592-.57.643-.688.026-.06.08-.155.119-.214.04-.059.096-.203.125-.32.028-.118.087-.324.131-.458.073-.224.08-.287.08-.748v-.503l-.133-.38c-.155-.443-.188-.52-.222-.52-.014 0-.052-.053-.085-.117z' fill='%23fff'/%3E%3C/svg%3E")}.side-2ur1Qk>.item-3XjbnG[data-item-id=powercord-jingle i]:not(.role-3pGE29)::before{--icon: url("data:image/svg+xml,%3Csvg width='18' height='18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M7.693 4.295L5.355 1.328 3.823 2.341l2.339 2.84 1.531-.886zM7.51 13.244l-1.531-.779-2.156 3.698 1.532 1.165 2.155-4.084zM.5 5.96l1-1.665 3.344 2.049-.89 1.531L.5 5.96zM4.464 10.934L1.5 13.244l-1-1.39L3.953 9.5l.51 1.434zM8.75 11.5c-4.082 0-4.085-5.481 0-5.481V11.5zM10.25 1.328v16l4-5.473h3.026V5.96H14.25l-4-4.632z' fill='%23fff'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M8.75 11.5c-4.082 0-4.085-5.481 0-5.481V11.5zM7.693 4.295L5.355 1.328 3.823 2.341l2.339 2.84 1.531-.886zm-.183 8.95l-1.531-.78-2.156 3.698 1.532 1.165 2.155-4.084zm-3.046-2.311L1.5 13.244l-1-1.39L3.953 9.5l.51 1.434zM.5 5.96l1-1.665 3.344 2.049-.89 1.531L.5 5.96zm9.75-4.632v16l4-5.473h3.026V5.96H14.25l-4-4.632z' fill='%23fff'/%3E%3C/svg%3E")}.side-2ur1Qk>.item-3XjbnG[data-item-id=powercord-message-tooltips i]:not(.role-3pGE29)::before{--icon: url("data:image/svg+xml,%3Csvg width='18' height='18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M15 1H3c-1.103 0-2 .897-2 2v8.999c0 1.103.897 2 2 2h3v2.625c0 .306.35.484.597.303L10.5 14H15c1.103 0 2-.897 2-2V3c0-1.102-.897-2-2-2zM1 11.625c0-.045.008-.09.024-.132l3.245-8.25A.375.375 0 014.621 3h1.008a.375.375 0 01.352.243l3.246 8.25a.375.375 0 01-.352.507h-.4a.376.376 0 01-.352-.243l-.94-2.382H3.068l-.939 2.382a.375.375 0 01-.352.243h-.401A.375.375 0 011 11.625zm4.126-7.463L3.512 8.25H6.74L5.126 4.162zM15.25 5.25h.375a.375.375 0 01.375.375v6a.375.375 0 01-.375.375h-.375a.375.375 0 01-.375-.375v-.3A2.973 2.973 0 0113 12a3 3 0 01-3-3v-.75a3 3 0 013-3c.713 0 1.36.26 1.875.675v-.3a.375.375 0 01.375-.375zM14.875 9a1.875 1.875 0 01-3.75 0v-.75a1.875 1.875 0 013.75 0V9z' fill='%23fff'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M5.843 3.066a.377.377 0 01.138.177l3.246 8.25a.375.375 0 01-.352.507h-.4a.376.376 0 01-.352-.243l-.94-2.382H3.068l-.939 2.382a.375.375 0 01-.352.243h-.401a.375.375 0 01-.352-.507l3.245-8.25A.375.375 0 014.621 3h1.008c.077 0 .151.023.214.066zM3.513 8.25l1.613-4.088L6.739 8.25H3.512zm12.112-3h-.375a.375.375 0 00-.375.375v.3A2.973 2.973 0 0013 5.25a3 3 0 00-3 3V9a3 3 0 003 3c.713 0 1.36-.26 1.875-.675v.3a.375.375 0 00.375.375h.375a.375.375 0 00.375-.375v-6a.375.375 0 00-.375-.375zm-1.3 5.076c.353-.352.55-.829.55-1.326v-.75a1.875 1.875 0 00-3.75 0V9a1.875 1.875 0 003.2 1.326zM15 1H3c-1.103 0-2 .897-2 2v8.999c0 1.103.897 2 2 2h3v2.625c0 .306.35.484.597.303L10.5 14H15c1.103 0 2-.897 2-2V3c0-1.102-.897-2-2-2z' fill='%23fff'/%3E%3C/svg%3E")}.side-2ur1Qk>.item-3XjbnG[data-item-id=quick-search i]:not(.role-3pGE29)::before{--icon: url("data:image/svg+xml,%3Csvg width='18' height='18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M16.781 14.834l-3.115-3.115a.749.749 0 00-.532-.219h-.509A6.468 6.468 0 0014 7.5 6.5 6.5 0 107.5 14c1.51 0 2.897-.512 4-1.375v.51c0 .2.078.39.219.53l3.115 3.116a.747.747 0 001.06 0l.884-.884a.753.753 0 00.003-1.063zM7.5 11.5c-2.21 0-4-1.787-4-4 0-2.21 1.787-4 4-4 2.21 0 4 1.787 4 4 0 2.21-1.787 4-4 4z' fill='%23fff'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M7.5 11.5c-2.21 0-4-1.787-4-4 0-2.21 1.787-4 4-4 2.21 0 4 1.787 4 4 0 2.21-1.787 4-4 4zm9.281 3.334l-3.115-3.115a.749.749 0 00-.532-.219h-.509A6.468 6.468 0 0014 7.5 6.5 6.5 0 107.5 14c1.51 0 2.897-.512 4-1.375v.51c0 .2.078.39.219.53l3.115 3.116a.747.747 0 001.06 0l.884-.884a.753.753 0 00.003-1.063z' fill='%23fff'/%3E%3C/svg%3E")}.side-2ur1Qk>.item-3XjbnG[data-item-id=smart-typers i]:not(.role-3pGE29)::before{--icon: url("data:image/svg+xml,%3Csvg width='18' height='18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M.5 12.81c.798 1.583 2.44 2.79 4.977 2.79 2.589 0 4.522-1.35 4.522-3.802 0-2.284-1.304-3.303-3.627-4.296l-.681-.292c-1.175-.512-1.68-.843-1.68-1.66 0-.663.505-1.169 1.303-1.169.786 0 1.292.331 1.759 1.168L9.2 4.187C8.306 2.603 7.06 2 5.321 2 2.888 2 1.324 3.557 1.324 5.608c0 2.225 1.304 3.283 3.277 4.12l.681.292c1.252.551 1.992.882 1.992 1.817 0 .785-.727 1.35-1.856 1.35-1.343 0-2.108-.708-2.692-1.662L.5 12.81zM17.5 3.383V2.32a.319.319 0 00-.315-.318C16.321 1.99 15.122 2 14.1 3.008c-1.002-.988-2.152-1.011-3.084-1.005a.319.319 0 00-.316.319v1.053c0 .177.145.32.323.319.69-.009 2.227.092 2.227 1.286v2.97h-.956a.319.319 0 00-.319.319V9.33c0 .176.143.319.319.319h.956v2.975c0 1.194-1.49 1.276-2.23 1.274a.319.319 0 00-.32.319v1.062c0 .174.14.316.315.318.864.011 2.063.002 3.085-1.006 1.002.988 2.152 1.011 3.084 1.005a.319.319 0 00.316-.319v-1.053a.319.319 0 00-.323-.319c-.69.009-2.227-.087-2.227-1.281V9.65h.956a.319.319 0 00.319-.319V8.27a.319.319 0 00-.319-.319h-.956V4.98c0-1.194 1.49-1.28 2.23-1.279.177 0 .32-.142.32-.318z' fill='%23fff'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M5.477 15.6C2.94 15.6 1.298 14.393.5 12.81l2.226-1.285c.584.954 1.35 1.661 2.692 1.661 1.13 0 1.856-.564 1.856-1.35 0-.934-.74-1.265-1.992-1.816l-.681-.292c-1.973-.837-3.277-1.895-3.277-4.12C1.324 3.558 2.888 2 5.321 2c1.739 0 2.985.603 3.88 2.187L7.073 5.549c-.467-.837-.973-1.168-1.759-1.168-.798 0-1.304.506-1.304 1.168 0 .818.506 1.149 1.68 1.661l.682.292C8.695 8.495 10 9.514 10 11.798 10 14.25 8.066 15.6 5.477 15.6zM17.5 3.383V2.32a.319.319 0 00-.315-.318C16.321 1.99 15.122 2 14.1 3.008c-1.002-.988-2.152-1.011-3.084-1.005a.319.319 0 00-.316.319v1.053c0 .177.145.32.323.319.69-.009 2.227.092 2.227 1.286v2.97h-.956a.319.319 0 00-.319.319V9.33c0 .176.143.319.319.319h.956v2.975c0 1.194-1.49 1.276-2.23 1.274a.319.319 0 00-.32.319v1.062c0 .174.14.316.315.318.864.011 2.063.002 3.085-1.006 1.002.988 2.152 1.011 3.084 1.005a.319.319 0 00.316-.319v-1.053a.319.319 0 00-.323-.319c-.69.009-2.227-.087-2.227-1.281V9.65h.956a.319.319 0 00.319-.319V8.27a.319.319 0 00-.319-.319h-.956V4.98c0-1.194 1.49-1.28 2.23-1.279.177 0 .32-.142.32-.318z' fill='%23fff'/%3E%3C/svg%3E")}.side-2ur1Qk>.item-3XjbnG[data-item-id=theme-toggler i]:not(.role-3pGE29)::before{--icon: url("data:image/svg+xml,%3Csvg width='18' height='18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M13.683 1.472c-1.832 0-3.317 1.496-3.317 3.34v8.02c0 1.845 1.485 3.34 3.317 3.34S17 14.677 17 12.832v-8.02c0-1.844-1.485-3.34-3.317-3.34zm0 5.847a2.33 2.33 0 002.322-2.34 2.33 2.33 0 00-2.322-2.338A2.33 2.33 0 0011.36 4.98a2.33 2.33 0 002.322 2.339z' fill='%23fff'/%3E%3Cpath d='M2.755 11.96a2.197 2.197 0 00-1.053 2.915c.402.868-.15 1.683-.702 1.943.98.524 2.251.556 3.244.09a2.932 2.932 0 001.404-3.887 2.168 2.168 0 00-2.893-1.06zM8.9 1.519l-1.293-.474a.721.721 0 00-.927.436l-3.145 8.704 2.652.972 3.145-8.704a.73.73 0 00-.432-.934z' fill='%23fff'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M17 12.831V4.813c0-1.845-1.485-3.341-3.317-3.341s-3.317 1.496-3.317 3.34v8.02c0 1.845 1.485 3.34 3.317 3.34S17 14.677 17 12.832zM1.702 14.875a2.197 2.197 0 011.053-2.914 2.168 2.168 0 012.893 1.06 2.932 2.932 0 01-1.404 3.886c-.993.467-2.265.435-3.244-.09.552-.259 1.104-1.074.702-1.942zm5.904-13.83l1.293.473a.73.73 0 01.432.934l-3.145 8.704-2.652-.972L6.679 1.48a.721.721 0 01.927-.436zm6.077 6.274a2.33 2.33 0 002.322-2.34 2.33 2.33 0 00-2.322-2.338A2.33 2.33 0 0011.36 4.98a2.33 2.33 0 002.322 2.339z' fill='%23fff'/%3E%3C/svg%3E")}.side-2ur1Qk>.item-3XjbnG[data-item-id=total-members i]:not(.role-3pGE29)::before{--icon: url("data:image/svg+xml,%3Csvg width='18' height='18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6.265 7.096C6.265 5.94 5.325 5 4.169 5c-1.157 0-2.097.94-2.097 2.096 0 1.157.94 2.097 2.097 2.097 1.156 0 2.096-.94 2.096-2.097zm.838 6.289c.407 0 .734-.281.734-.629v-.629c0-1.041-.986-1.886-2.201-1.886h-.164a3.38 3.38 0 01-2.607 0H2.7c-1.214-.001-2.2.845-2.2 1.886v.63c0 .347.328.628.734.628h5.87z' fill='%23fff'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M17.363 8.16l.133-.749a.225.225 0 00-.22-.264h-1.4l.273-1.533a.225.225 0 00-.221-.264h-.76a.224.224 0 00-.222.185l-.288 1.612h-1.846l.274-1.533a.225.225 0 00-.221-.264h-.76a.224.224 0 00-.222.185l-.288 1.612h-1.48a.225.225 0 00-.221.185l-.134.749a.225.225 0 00.221.264h1.4l-.428 2.396h-1.48a.225.225 0 00-.221.185l-.134.748v.002c0 .139 0 .204.033.235.03.028.084.028.188.028h1.4l-.273 1.532a.225.225 0 00.221.264h.76a.225.225 0 00.222-.185l.287-1.611h1.847l-.274 1.532a.225.225 0 00.221.264h.76a.224.224 0 00.222-.185l.287-1.611h1.48a.225.225 0 00.222-.186l.134-.748a.225.225 0 00-.221-.264h-1.4l.427-2.396h1.48a.224.224 0 00.222-.185zm-5.193 2.58h1.847l.427-2.395h-1.846l-.428 2.396z' fill='%23fff'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M6.265 7.096C6.265 5.94 5.325 5 4.169 5c-1.157 0-2.097.94-2.097 2.096 0 1.157.94 2.097 2.097 2.097 1.156 0 2.096-.94 2.096-2.097zm.838 6.29c.407 0 .734-.282.734-.63v-.629c0-1.041-.986-1.886-2.201-1.886h-.164a3.38 3.38 0 01-2.607 0H2.7c-1.214-.001-2.2.845-2.2 1.886v.63c0 .347.328.628.734.628h5.87zM17.496 7.41l-.133.749a.224.224 0 01-.221.185h-1.48l-.429 2.396h1.4c.14 0 .246.126.222.264l-.134.748a.225.225 0 01-.221.186h-1.48l-.288 1.611a.224.224 0 01-.221.185h-.761a.225.225 0 01-.221-.264l.274-1.532h-1.847l-.287 1.611a.225.225 0 01-.222.185h-.76a.225.225 0 01-.221-.264l.274-1.532h-1.4c-.105 0-.16 0-.189-.028-.033-.03-.033-.096-.033-.235v-.002l.134-.748a.225.225 0 01.221-.185h1.48l.428-2.396h-1.4a.225.225 0 01-.221-.264l.134-.749a.225.225 0 01.22-.185h1.481l.288-1.612a.224.224 0 01.221-.185h.76c.14 0 .246.126.222.264l-.274 1.533h1.846l.288-1.612a.224.224 0 01.221-.185h.76c.14 0 .246.126.222.264l-.274 1.533h1.4c.14 0 .246.126.221.264zm-5.326 3.33h1.847l.427-2.396h-1.846l-.428 2.396z' fill='%23fff'/%3E%3C/svg%3E")}.side-2ur1Qk>.item-3XjbnG[data-item-id=user-details i]:not(.role-3pGE29)::before{--icon: url("data:image/svg+xml,%3Csvg width='18' height='18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M15.667 3H2.333C1.597 3 1 3.597 1 4.333v9.778c0 .736.597 1.333 1.333 1.333h13.334c.736 0 1.333-.597 1.333-1.333V4.333C17 3.597 16.403 3 15.667 3zM5.889 5.667c.98 0 1.778.797 1.778 1.777a1.78 1.78 0 01-1.778 1.778A1.78 1.78 0 014.11 7.444c0-.98.797-1.777 1.778-1.777zM9 12.244c0 .295-.278.534-.622.534H3.4c-.344 0-.622-.24-.622-.534v-.533c0-.883.836-1.6 1.866-1.6h.14a2.876 2.876 0 002.21 0h.14c1.03 0 1.866.717 1.866 1.6v.533zm6.222-1.466c0 .122-.1.222-.222.222h-4a.223.223 0 01-.222-.222v-.445c0-.122.1-.222.222-.222h4c.122 0 .222.1.222.222v.445zm0-1.778c0 .122-.1.222-.222.222h-4A.223.223 0 0110.778 9v-.444c0-.123.1-.223.222-.223h4c.122 0 .222.1.222.223V9zm0-1.778c0 .122-.1.222-.222.222h-4a.223.223 0 01-.222-.222v-.444c0-.122.1-.222.222-.222h4c.122 0 .222.1.222.222v.444z' fill='%23fff'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M2.333 3h13.334C16.403 3 17 3.597 17 4.333v9.778c0 .736-.597 1.333-1.333 1.333H2.333A1.334 1.334 0 011 14.111V4.333C1 3.597 1.597 3 2.333 3zM15 7.444c.122 0 .222-.1.222-.222v-.444c0-.122-.1-.222-.222-.222h-4c-.122 0-.222.1-.222.222v.444c0 .122.1.222.222.222h4zM15.222 9c0 .122-.1.222-.222.222h-4A.223.223 0 0110.778 9v-.444c0-.123.1-.223.222-.223h4c.122 0 .222.1.222.223V9zM15 11c.122 0 .222-.1.222-.222v-.445c0-.122-.1-.222-.222-.222h-4c-.122 0-.222.1-.222.222v.445c0 .122.1.222.222.222h4zM5.889 5.667c.98 0 1.778.797 1.778 1.777a1.78 1.78 0 01-1.778 1.778A1.78 1.78 0 014.11 7.444c0-.98.797-1.777 1.778-1.777zm2.489 7.11c.344 0 .622-.238.622-.533v-.533c0-.883-.836-1.6-1.867-1.6h-.139a2.866 2.866 0 01-2.21 0h-.14c-1.03 0-1.866.717-1.866 1.6v.533c0 .295.278.534.622.534h4.978z' fill='%23fff'/%3E%3C/svg%3E")}.side-2ur1Qk>.item-3XjbnG[data-item-id=better-quoter i]:not(.role-3pGE29)::before{--icon: url("data:image/svg+xml,%3Csvg width='18' height='18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M1 13.74h2.107c1.159 0 2.293-.024 2.517-.049 1.474-.18 2.399-.833 2.735-1.923.136-.434.146-1.3.024-1.763a3.028 3.028 0 00-.457-.98l-.117-.155.117-.16c.613-.814.73-2.173.272-3.137-.219-.468-.647-.877-1.173-1.13C6.203 4.05 5.77 4 3.083 4H1v9.74zm2.482-7.743l-.01 2.118.01 3.617 1.884-.013.238-.146c.438-.273.594-.784.365-1.227-.21-.414-.56-.55-1.397-.55H3.97V7.944h.623c.667-.005.87-.049 1.148-.258.448-.346.438-1.12-.02-1.447-.277-.2-.544-.243-1.415-.243h-.823z' fill='%23fff'/%3E%3Cpath d='M15.969 3.305a.889.889 0 00-.817-1.239h-1.598a.889.889 0 00-.798.498l-2.574 5.243c-.12.244-.182.512-.182.783v6.81c0 .49.398.889.889.889h5.222a.89.89 0 00.889-.89V9.956a.889.889 0 00-.889-.889h-1.937a.444.444 0 01-.409-.62l2.204-5.14z' fill='%23fff'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M17 15.4V9.955a.889.889 0 00-.889-.889h-1.937a.444.444 0 01-.409-.62l2.204-5.14a.889.889 0 00-.817-1.24h-1.598a.889.889 0 00-.798.498l-2.574 5.243c-.12.244-.182.512-.182.783v6.81c0 .49.398.889.889.889h5.222a.89.89 0 00.889-.89z' fill='%23fff'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M15.969 3.305a.889.889 0 00-.817-1.239h-1.598a.889.889 0 00-.798.498l-2.574 5.243c-.12.244-.182.512-.182.783v6.81c0 .49.398.889.889.889h5.222a.89.89 0 00.889-.89V9.956a.889.889 0 00-.889-.889h-1.937a.444.444 0 01-.409-.62l2.204-5.14z' fill='%23fff'/%3E%3C/svg%3E")}.side-2ur1Qk>.item-3XjbnG[data-item-id=bot-tag-settings i]:not(.role-3pGE29)::before{--icon: url("data:image/svg+xml,%3Csvg width='18' height='18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M17.251 11.693l-2.398-2.396a1.7 1.7 0 00-1.204-.497h-2.106a.85.85 0 00-.85.85v2.104c0 .452.178.882.496 1.201l2.4 2.396a.851.851 0 001.202 0l2.458-2.457a.846.846 0 00.002-1.2zm-4.856-.558a.636.636 0 01-.637-.637c0-.353.284-.638.637-.638a.638.638 0 110 1.275zM6.45 8.798a3.4 3.4 0 100-6.8 3.4 3.4 0 000 6.8zm3.395 2.954V9.81a3.574 3.574 0 00-1.015-.165h-.443a4.63 4.63 0 01-3.873 0H4.07A3.575 3.575 0 00.5 13.218v1.105c0 .704.571 1.275 1.275 1.275h9.35c.412 0 .774-.2 1.007-.502l-1.54-1.54a2.534 2.534 0 01-.747-1.804z' fill='%23fff'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M14.853 9.297l2.398 2.396a.846.846 0 01-.002 1.2l-2.457 2.458a.851.851 0 01-1.204 0l-2.399-2.396a1.694 1.694 0 01-.496-1.2V9.65c0-.47.38-.85.85-.85h2.106a1.7 1.7 0 011.204.497zm-5.002-3.9a3.4 3.4 0 11-6.8.001 3.4 3.4 0 016.8 0zM9.845 9.81v1.942c0 .682.266 1.323.747 1.803l1.54 1.541a1.27 1.27 0 01-1.006.502h-9.35A1.275 1.275 0 01.5 14.323v-1.105c0-1.971 1.6-3.57 3.57-3.573h.444a4.63 4.63 0 003.873 0h.443c.354 0 .691.07 1.015.165zm1.913.688a.638.638 0 101.275 0 .638.638 0 00-1.275 0z' fill='%23fff'/%3E%3C/svg%3E")}.side-2ur1Qk>.item-3XjbnG[data-item-id=weather i]:not(.role-3pGE29)::before{--icon: url("data:image/svg+xml,%3Csvg width='18' height='18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M13.678 7.156h-.048c-.63-1.255-1.915-2.125-3.413-2.125-.054 0-.107.007-.158.014-.035.005-.069.01-.104.012C9.313 3.84 8.05 3 6.58 3a3.832 3.832 0 00-3.833 3.834c0 .218.03.428.064.636A3.822 3.822 0 00.58 11.754a3.824 3.824 0 003.743 3.052h9.356A3.821 3.821 0 0017.5 10.98a3.827 3.827 0 00-3.822-3.825z' fill='%23fff'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M13.678 7.156h-.048c-.63-1.255-1.915-2.125-3.413-2.125-.054 0-.107.007-.158.014-.035.005-.069.01-.104.012C9.313 3.84 8.05 3 6.58 3a3.832 3.832 0 00-3.833 3.834c0 .218.03.428.064.636A3.822 3.822 0 00.58 11.754a3.824 3.824 0 003.743 3.052h9.356A3.821 3.821 0 0017.5 10.98a3.827 3.827 0 00-3.822-3.825z' fill='%23fff'/%3E%3C/svg%3E")}.side-2ur1Qk>.item-3XjbnG[data-item-id=grammar-nazi i]:not(.role-3pGE29)::before{--icon: url("data:image/svg+xml,%3Csvg width='18' height='18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M16.8 10l-2-2-5 5-2.5-2.5-2 2L9.8 17l7-7z' fill='%23fff'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M14.8 8l2 2-7 7-4.5-4.5 2-2L9.8 13l5-5z' fill='%23fff'/%3E%3Cpath d='M3.899 7.662C3.817 5.47 5.523 3.6 7.715 3.52c.894 0 1.787.325 2.518.975L12.1 2.706C10.964 1.57 9.34 1 7.797 1 4.223 1 1.3 3.925 1.3 7.5c0 1.965.883 3.734 2.272 4.928l1.802-1.802c-.87-.691-1.429-1.746-1.475-2.963z' fill='%23fff'/%3E%3Cpath d='M7.715 6.281h6.091c.089.266.13.508.16.752L10 11l-.125-.125a3.358 3.358 0 001.414-2.156H7.715V6.28z' fill='%23fff'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M16.8 10l-2-2-5 5-2.5-2.5-2 2L9.8 17l7-7zM7.715 6.281h6.091c.089.266.13.508.16.752L10 11l-.125-.125a3.358 3.358 0 001.414-2.156H7.715V6.28zM3.9 7.662C3.817 5.47 5.523 3.6 7.715 3.52c.894 0 1.787.325 2.518.975L12.1 2.706C10.964 1.57 9.34 1 7.797 1 4.223 1 1.3 3.925 1.3 7.5c0 1.965.883 3.734 2.272 4.928l1.802-1.802c-.87-.691-1.429-1.746-1.475-2.963z' fill='%23fff'/%3E%3C/svg%3E")}.side-2ur1Qk>.item-3XjbnG[data-item-id=rich-quotes i]:not(.role-3pGE29)::before{--icon: url("data:image/svg+xml,%3Csvg width='18' height='18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M15.969 3.305a.889.889 0 00-.817-1.239h-1.598a.889.889 0 00-.798.498l-2.574 5.243c-.12.244-.182.512-.182.783v6.81c0 .49.398.889.889.889h5.222c.491 0 .889-.398.889-.89V9.956a.889.889 0 00-.889-.889h-1.937a.444.444 0 01-.409-.62l2.204-5.14z' fill='%23fff'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M17 15.4V9.955a.889.889 0 00-.889-.889h-1.937a.444.444 0 01-.409-.62l2.204-5.14a.889.889 0 00-.817-1.24h-1.598a.889.889 0 00-.798.498l-2.574 5.243c-.12.244-.182.512-.182.783v6.81c0 .49.398.889.889.889h5.222c.491 0 .889-.398.889-.89z' fill='%23fff'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M15.969 3.305a.889.889 0 00-.817-1.239h-1.598a.889.889 0 00-.798.498l-2.574 5.243c-.12.244-.182.512-.182.783v6.81c0 .49.398.889.889.889h5.222c.491 0 .889-.398.889-.89V9.956a.889.889 0 00-.889-.889h-1.937a.444.444 0 01-.409-.62l2.204-5.14z' fill='%23fff'/%3E%3Cpath d='M6.22 8.382l-2.954-.864a.806.806 0 01.227-1.58h1.813c.334 0 .662.1.935.287a.426.426 0 00.533-.055l.952-.93a.443.443 0 00-.05-.67 3.866 3.866 0 00-2.365-.82V2.437A.439.439 0 004.874 2h-.875a.439.439 0 00-.438.438V3.75h-.068a2.996 2.996 0 00-2.98 3.27C.628 8.28 1.59 9.306 2.804 9.662l2.803.82a.806.806 0 01-.227 1.58H3.567a1.67 1.67 0 01-.935-.287.426.426 0 00-.533.055l-.952.93a.443.443 0 00.05.67c.67.525 1.506.817 2.365.82v1.313c0 .24.196.437.437.437h.875c.24 0 .438-.197.438-.438v-1.317c1.274-.025 2.469-.782 2.89-1.988a3.003 3.003 0 00-1.983-3.875z' fill='%23fff'/%3E%3C/svg%3E")}.side-2ur1Qk>.item-3XjbnG[data-item-id=pc-lmgtfy]:not(.role-3pGE29)::before{--icon: url("data:image/svg+xml,%3Csvg width='18' height='18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M7.3 2.025c.178-.036.36-.03.538-.004l.086.008c.576.054 1.156.109 1.719.252.187.05.375.098.563.147.872.224 1.748.449 2.559.85.408.223.759.527 1.109.83.127.11.255.221.385.328.888.875 1.775 1.77 2.435 2.836.33.588.52 1.247.6 1.915.099.34.14.69.181 1.041l.025.205v.165c-.051.746-.268 1.508-.769 2.08-.382.476-.955.74-1.523.92-.57.148-1.087.425-1.604.7-.291.157-.583.313-.884.445-.746.353-1.553.555-2.37.66H9.186c-.598-.074-1.192-.195-1.746-.44.48.137 1.033-.17 1.148-.659.1-.36-.035-.736-.295-.992.7.014 1.399-.042 2.098-.098.345-.028.69-.056 1.036-.075.476-.026.89-.465.857-.948.02-.566-.556-1.014-1.102-.916-1.102.124-2.208.157-3.314.19-.69.021-1.38.042-2.068.085a5.856 5.856 0 00-.404-1.63c-.094-.236-.236-.465-.457-.6-.384-.261-.955-.152-1.227.219a.955.955 0 00-.106.975c.129.275.256.564.27.872a.932.932 0 01-.164.34c-.048.073-.097.147-.13.227a17.021 17.021 0 01-.513-.684c-.278-.384-.555-.768-.884-1.11C1.476 9.38.729 8.55.5 7.49v-.51c.034-.163.06-.326.087-.49.054-.338.109-.677.23-.999a2.93 2.93 0 01.206-.453c.049-.093.098-.186.14-.282.22-.539.603-.993 1.023-1.387.634-.555 1.367-1.032 2.196-1.226a1.734 1.734 0 01.487-.037c-.249.122-.505.224-.762.327a11.4 11.4 0 00-.752.322 1.007 1.007 0 00-.547.753.902.902 0 00.662.965c.267.094.547 0 .795-.107.642-.268 1.285-.532 1.93-.796.393.323.784.672 1.042 1.117.13.197.351.316.578.367.535.109 1.122-.37 1.064-.928 0-.421-.278-.764-.549-1.057-.154-.194-.336-.36-.518-.526-.179-.164-.358-.329-.512-.519zM5.785 3.998c-.421.055-.777.434-.782.862a.9.9 0 00.666.939c.54.188 1.181-.296 1.148-.868.043-.541-.497-1.033-1.032-.933zm6.284 1.122c-1.074.201-2.157.297-3.242.386-.476.07-.826.557-.748 1.03.044.533.605.881 1.11.805.125-.018.25-.03.376-.042.174-.017.349-.034.522-.068-.063.584.488 1.145 1.075 1.036.549-.086.96-.732.705-1.25.186-.065.381-.077.577-.088.157-.009.315-.018.468-.055.41-.1.693-.515.685-.928-.048-.316-.22-.645-.53-.773-.301-.141-.628-.1-.945-.06l-.053.007zM5.402 7.35c-.43.08-.78.49-.75.932-.018.478.41.887.877.904.721.177 1.425.414 2.13.652.307.104.616.208.925.307 2.17.815 4.38 1.524 6.596 2.2.199.06.414.078.616.026.413-.127.74-.566.65-1.007a.96.96 0 00-.673-.761c-.387-.123-.775-.243-1.163-.364a80.748 80.748 0 01-2.805-.908c-.516-.16-1.022-.347-1.528-.533-.358-.132-.715-.263-1.076-.386a52.475 52.475 0 00-3.15-1.001l-.099-.023c-.18-.041-.367-.085-.55-.037z' fill='%23fff'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M7.838 2.02a1.573 1.573 0 00-.538.005c.154.19.333.355.512.519.182.166.364.332.518.526.271.293.549.636.549 1.057.058.558-.529 1.037-1.064.928-.227-.051-.448-.17-.578-.367-.258-.445-.65-.794-1.043-1.116-.644.263-1.287.527-1.929.795-.248.106-.528.2-.795.107a.902.902 0 01-.662-.965c.04-.324.26-.605.547-.753.246-.12.499-.22.752-.322.257-.103.513-.205.762-.327h-.035c-.151 0-.304-.002-.452.037-.829.194-1.562.671-2.196 1.226-.42.394-.804.848-1.023 1.387-.042.096-.091.19-.14.282a2.93 2.93 0 00-.206.453c-.121.322-.176.66-.23.999-.027.164-.053.327-.087.49v.51c.23 1.06.976 1.89 1.684 2.667.329.343.606.727.884 1.11.167.232.334.463.513.685.033-.08.082-.153.13-.227a.932.932 0 00.165-.34c-.015-.308-.142-.597-.271-.872a.955.955 0 01.106-.975c.272-.371.843-.48 1.227-.218.221.134.363.363.457.599.211.52.35 1.07.404 1.63a65.442 65.442 0 012.068-.085c1.106-.033 2.212-.066 3.314-.19.546-.098 1.122.35 1.102.916.033.483-.381.922-.857.948-.346.019-.691.047-1.036.075-.699.056-1.398.112-2.098.098.26.256.396.631.295.992-.115.49-.668.796-1.148.659.554.245 1.148.366 1.746.44h1.166c.816-.105 1.623-.307 2.37-.66.3-.133.592-.288.883-.444.517-.276 1.034-.553 1.604-.7.568-.182 1.141-.445 1.523-.92.501-.573.718-1.335.769-2.08v-.166l-.025-.205c-.04-.35-.082-.7-.181-1.04a5.183 5.183 0 00-.6-1.916c-.66-1.067-1.547-1.961-2.435-2.836-.13-.107-.258-.217-.385-.328-.35-.303-.701-.607-1.11-.83-.81-.401-1.686-.626-2.558-.85a59.842 59.842 0 01-.563-.147c-.563-.143-1.143-.198-1.72-.252l-.085-.008zm.989 3.486c1.085-.089 2.168-.185 3.242-.386l.053-.007c.317-.04.644-.081.945.06.31.128.482.457.53.773.008.413-.274.828-.685.928-.153.038-.31.046-.468.055-.196.011-.391.023-.577.088.255.518-.156 1.164-.705 1.25-.587.109-1.138-.452-1.075-1.036a5.228 5.228 0 01-.522.068c-.125.012-.25.024-.375.042-.506.076-1.067-.272-1.11-.805-.08-.473.271-.96.747-1.03zM5.785 3.998c-.421.055-.777.434-.782.862a.9.9 0 00.666.939c.54.188 1.181-.296 1.148-.868.043-.541-.497-1.033-1.032-.933zM4.652 8.282c-.03-.443.32-.853.75-.931.183-.048.37-.004.55.037l.098.023c1.063.293 2.11.641 3.15 1.001.362.123.72.254 1.077.386.506.186 1.012.373 1.528.533.928.326 1.867.617 2.805.908.388.12.776.24 1.163.364a.96.96 0 01.673.76c.09.442-.237.88-.65 1.008a1.145 1.145 0 01-.616-.026c-2.217-.676-4.425-1.385-6.596-2.2-.31-.1-.618-.203-.926-.307-.704-.238-1.408-.475-2.129-.652-.466-.017-.895-.426-.877-.904z' fill='%23fff'/%3E%3C/svg%3E")}.side-2ur1Qk>.item-3XjbnG[data-item-id=owoifier i]:not(.role-3pGE29)::before{--icon: url("data:image/svg+xml,%3Csvg width='18' height='18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5.94 7.68l1.53 2.04L9 7.68l1.53 2.04 1.53-2.04m-7.48.68c0 .751-.913 1.36-2.04 1.36S.5 9.111.5 8.36C.5 7.609 1.413 7 2.54 7s2.04.609 2.04 1.36zm12.92 0c0 .751-.913 1.36-2.04 1.36s-2.04-.609-2.04-1.36c0-.751.913-1.36 2.04-1.36s2.04.609 2.04 1.36z" stroke="%23fff'/%3E%3C/svg%3E")}.side-2ur1Qk>.item-3XjbnG[data-item-id=notif-sound-changer i]:not(.role-3pGE29)::before{--icon: url("data:image/svg+xml,%3Csvg width='18' height='18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M13.974 1.328v16l-3.992-5.473H6.987V5.96h2.995l3.992-4.632z' fill='%23fff'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M13.974 1.328v16l-3.992-5.473H6.987V5.96h2.995l3.992-4.632z' fill='%23fff'/%3E%3Cpath d='M.5 9c0 1.38 1.117 2.5 2.495 2.5A2.498 2.498 0 005.49 9c0-1.38-1.117-2.5-2.495-2.5A2.498 2.498 0 00.5 9zM5.491 12.5H.501v5h4.99v-5zM5.49 5.5L2.995.5l-2.496 5h4.99zM14.74 6.237a1 1 0 011.356-.394A3.664 3.664 0 0118 9.046c0 1.328-.73 2.555-1.904 3.203a.998.998 0 01-1.356-.394 1.002 1.002 0 01.393-1.359c.537-.295.87-.851.87-1.45s-.333-1.155-.87-1.45a1.002 1.002 0 01-.393-1.36z' fill='%23fff'/%3E%3C/svg%3E")}.side-2ur1Qk>.item-3XjbnG[data-item-id=eval i]:not(.role-3pGE29)::before{--icon: url("data:image/svg+xml,%3Csvg width='18' height='18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M3 3.75h12v1.5h1.5v-3c0-.825-.675-1.492-1.5-1.492L3 .75c-.825 0-1.5.675-1.5 1.5v3H3v-1.5zm8.557 8.696L15 9.003l-3.443-3.442L10.5 6.626l2.377 2.377-2.377 2.378 1.057 1.065zM7.5 11.38L5.122 9.003 7.5 6.626 6.442 5.56 3 9.003l3.442 3.443L7.5 11.38zm7.5 2.872H3v-1.5H1.5v3c0 .825.675 1.5 1.5 1.5h12c.825 0 1.5-.675 1.5-1.5v-3H15v1.5z' fill='%23fff'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M3 3.75h12v1.5h1.5v-3c0-.825-.675-1.492-1.5-1.492L3 .75c-.825 0-1.5.675-1.5 1.5v3H3v-1.5zm8.557 8.696L15 9.003l-3.443-3.442L10.5 6.626l2.377 2.377-2.377 2.378 1.057 1.065zM7.5 11.38L5.122 9.003 7.5 6.626 6.442 5.56 3 9.003l3.442 3.443L7.5 11.38zm7.5 2.872H3v-1.5H1.5v3c0 .825.675 1.5 1.5 1.5h12c.825 0 1.5-.675 1.5-1.5v-3H15v1.5z' fill='%23fff'/%3E%3C/svg%3E")}.side-2ur1Qk>.item-3XjbnG[data-item-id=reddit-mentions i]:not(.role-3pGE29)::before{--icon: url("data:image/svg+xml,%3Csvg width='18' height='18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M17.5 9.171a1.867 1.867 0 00-3.154-1.278 9.074 9.074 0 00-4.914-1.57l.828-3.982 2.732.574a1.276 1.276 0 10.168-.78l-3.128-.625a.395.395 0 00-.473.301c0-.003 0 .003 0 0L8.617 6.24a9.149 9.149 0 00-4.978 1.577 1.861 1.861 0 00-2.633.082 1.861 1.861 0 00.583 2.97 4.146 4.146 0 000 .561c0 2.859 3.332 5.184 7.44 5.184 4.108 0 7.44-2.322 7.44-5.184a4.142 4.142 0 000-.561c.64-.32 1.043-.98 1.03-1.698zM4.737 10.45A1.28 1.28 0 016.015 9.17a1.28 1.28 0 011.279 1.279 1.28 1.28 0 01-1.279 1.278 1.283 1.283 0 01-1.278-1.278zm7.414 3.509a4.9 4.9 0 01-3.154.983 4.9 4.9 0 01-3.153-.983.344.344 0 01.485-.485 4.17 4.17 0 002.656.802 4.2 4.2 0 002.668-.777.36.36 0 01.504.006.36.36 0 01-.006.504v-.05zm-.229-2.186a1.28 1.28 0 01-1.278-1.279 1.28 1.28 0 011.278-1.278 1.28 1.28 0 011.279 1.278c.028.704-.574 1.25-1.279 1.279.023 0-.022 0 0 0z' fill='%23fff'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M15.568 7.376A1.867 1.867 0 0117.5 9.17a1.863 1.863 0 01-1.031 1.698c.012.187.012.374 0 .561 0 2.862-3.332 5.184-7.44 5.184-4.108 0-7.44-2.325-7.44-5.184a4.146 4.146 0 010-.561 1.861 1.861 0 01-.584-2.97 1.861 1.861 0 012.634-.082A9.149 9.149 0 018.617 6.24l.942-4.429a.395.395 0 01.473-.301l3.128.625a1.276 1.276 0 11-.168.78l-2.732-.574-.828 3.981a9.074 9.074 0 014.914 1.57 1.87 1.87 0 011.222-.516zM6.015 9.17a1.28 1.28 0 00-1.278 1.279c0 .704.57 1.272 1.278 1.278a1.28 1.28 0 001.279-1.278A1.28 1.28 0 006.015 9.17zm5.907 2.602a1.28 1.28 0 01-1.278-1.279 1.28 1.28 0 011.278-1.278 1.28 1.28 0 011.279 1.278c.028.704-.574 1.25-1.279 1.279zm-2.925 3.17a4.9 4.9 0 003.154-.984v.05a.36.36 0 00.006-.504.36.36 0 00-.504-.006 4.2 4.2 0 01-2.668.777 4.17 4.17 0 01-2.656-.803.344.344 0 00-.485.486 4.9 4.9 0 003.153.983z' fill='%23fff'/%3E%3C/svg%3E")}.side-2ur1Qk>.item-3XjbnG[data-item-id=better-folders i]:not(.role-3pGE29)::before{--icon: url("data:image/svg+xml,%3Csvg width='18' height='18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M1 13.74h2.107c1.159 0 2.293-.024 2.517-.049 1.474-.18 2.399-.833 2.735-1.923.136-.434.146-1.3.024-1.763a3.028 3.028 0 00-.457-.98l-.117-.155.117-.16c.613-.814.73-2.173.272-3.137-.219-.468-.647-.877-1.173-1.13C6.203 4.05 5.77 4 3.083 4H1v9.74zm2.482-7.743l-.01 2.118.01 3.617 1.884-.013.238-.146c.438-.273.594-.784.365-1.227-.21-.414-.56-.55-1.397-.55H3.97V7.944h.623c.667-.005.87-.049 1.148-.258.448-.346.438-1.12-.02-1.447-.277-.2-.544-.243-1.415-.243h-.823z' fill='%23fff'/%3E%3Cpath d='M14.83 3.393v1.326h1.385c.215 0 .39.175.39.393v3.867l1.368 1.44a.1.1 0 01.027.067v3.121a.391.391 0 01-.39.393h-7.22a.391.391 0 01-.39-.393V5.038c0-.16.096-.305.244-.365l4.049-1.645a.391.391 0 01.537.365zm2.292 9.723v-2.314l-1.395-1.468V5.603h-.898v6.26c0 .16-.096.305-.244.366l-2.185.887h4.722zm-6.244-7.8v7.518L14 11.566V4.046l-3.122 1.27z' fill='%23fff'/%3E%3C/svg%3E")}.side-2ur1Qk>.item-3XjbnG[data-item-id=show-all-activities i]:not(.role-3pGE29)::before{--icon: url("data:image/svg+xml,%3Csvg width='18' height='19' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9.708 6.589V2.693h-4.25v3.896l2.125 2.125 2.125-2.125zM4.396 7.65H.5v4.25h3.896L6.52 9.776 4.396 7.651zm1.062 5.313v3.895h4.25v-3.896L7.583 10.84l-2.125 2.124z' fill='%23fff'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M9.708 2.693v3.896L7.583 8.714 5.458 6.589V2.693h4.25zM.5 7.65h3.896L6.52 9.776l-2.125 2.125H.5v-4.25zm4.958 9.208v-3.896l2.125-2.124 2.125 2.124v3.896h-4.25z' fill='%23fff'/%3E%3Cpath d='M11.508 10c0 1.38 1.117 2.5 2.496 2.5a2.498 2.498 0 002.495-2.5c0-1.38-1.117-2.5-2.495-2.5a2.498 2.498 0 00-2.496 2.5zM16.5 13.5h-4.99v5h4.99v-5zM16.499 6.5l-2.496-5-2.495 5h4.99z' fill='%23fff'/%3E%3C/svg%3E")}.side-2ur1Qk>.item-3XjbnG[data-item-id=view-raw i]:not(.role-3pGE29)::before{--icon: url("data:image/svg+xml,%3Csvg width='18' height='18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4 2.7h1.4v1.4H4v3.5A1.4 1.4 0 012.6 9 1.4 1.4 0 014 10.4v3.5h1.4v1.4H4c-.749-.189-1.4-.63-1.4-1.4v-2.8a1.4 1.4 0 00-1.4-1.4H.5V8.3h.7a1.4 1.4 0 001.4-1.4V4.1A1.4 1.4 0 014 2.7zm9.8 0a1.4 1.4 0 011.4 1.4v2.8a1.4 1.4 0 001.4 1.4h.7v1.4h-.7a1.4 1.4 0 00-1.4 1.4v2.8a1.4 1.4 0 01-1.4 1.4h-1.4v-1.4h1.4v-3.5A1.4 1.4 0 0115.2 9a1.4 1.4 0 01-1.4-1.4V4.1h-1.4V2.7h1.4z' fill='%23fff'/%3E%3Cpath d='M8.9 7.367a1.618 1.618 0 00-.456.073.808.808 0 01-.398 1.148.808.808 0 01-.706-.043A1.63 1.63 0 108.9 7.366zm4.15 1.42C12.257 7.244 10.692 6.2 8.9 6.2c-1.793 0-3.359 1.045-4.15 2.587a.472.472 0 000 .426C5.543 10.756 7.108 11.8 8.9 11.8c1.793 0 3.359-1.045 4.15-2.587a.471.471 0 000-.426zM8.9 11.1c-1.439 0-2.758-.802-3.47-2.1.712-1.298 2.031-2.1 3.47-2.1s2.758.802 3.47 2.1c-.712 1.298-2.031 2.1-3.47 2.1z' fill='%23fff'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M5.4 2.7H4a1.4 1.4 0 00-1.4 1.4v2.8a1.4 1.4 0 01-1.4 1.4H.5v1.4h.7a1.4 1.4 0 011.4 1.4v2.8c0 .77.651 1.211 1.4 1.4h1.4v-1.4H4v-3.5A1.4 1.4 0 002.6 9 1.4 1.4 0 004 7.6V4.1h1.4V2.7zm9.39.41a1.4 1.4 0 00-.99-.41h-1.4v1.4h1.4v3.5A1.4 1.4 0 0015.2 9a1.4 1.4 0 00-1.4 1.4v3.5h-1.4v1.4h1.4a1.4 1.4 0 001.4-1.4v-2.8a1.4 1.4 0 011.4-1.4h.7V8.3h-.7a1.4 1.4 0 01-1.4-1.4V4.1a1.4 1.4 0 00-.41-.99zM8.9 6.2c1.793 0 3.358 1.044 4.15 2.587a.471.471 0 010 .426c-.791 1.542-2.357 2.587-4.15 2.587-1.793 0-3.358-1.044-4.15-2.587a.472.472 0 010-.426C5.542 7.245 7.108 6.2 8.9 6.2zM5.43 9c.712 1.298 2.031 2.1 3.47 2.1s2.758-.802 3.47-2.1c-.712-1.298-2.031-2.1-3.47-2.1S6.142 7.702 5.43 9zM8.9 7.367a1.618 1.618 0 00-.456.073.808.808 0 01-.398 1.148.808.808 0 01-.706-.043A1.63 1.63 0 108.9 7.366z' fill='%23fff'/%3E%3C/svg%3E")}.side-2ur1Qk>.item-3XjbnG[data-item-id=powerclock-settings i]:not(.role-3pGE29)::before{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M12.5 8H11v6l4.75 2.85.75-1.23-4-2.37zm4.837-6.19l4.607 3.845-1.28 1.535-4.61-3.843zm-10.674 0l1.282 1.536L3.337 7.19l-1.28-1.536zM12 4a9 9 0 10.001 18.001A9 9 0 0012 4zm0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7z'/%3E%3C/svg%3E")}.side-2ur1Qk>.item-3XjbnG[data-item-id=custom-activity i]:not(.role-3pGE29)::before{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M14 6V4h-4v2h4zM4 8v11h16V8H4zm16-2c1.11 0 2 .89 2 2v11c0 1.11-.89 2-2 2H4c-1.11 0-2-.89-2-2l.01-11c0-1.11.88-2 1.99-2h4V4c0-1.11.89-2 2-2h4c1.11 0 2 .89 2 2v2h4z'/%3E%3C/svg%3E")}.side-2ur1Qk>.item-3XjbnG[data-item-id=privacy-tab i]:not(.role-3pGE29)::before{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z'/%3E%3C/svg%3E")}.side-2ur1Qk>.item-3XjbnG[data-item-id=better-status-indicators i]:not(.role-3pGE29)::before{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M4 6h18V4H4c-1.1 0-2 .9-2 2v11H0v3h14v-3H4V6zm19 2h-6c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm-1 9h-4v-7h4v7z'/%3E%3C/svg%3E")}.side-2ur1Qk>.item-3XjbnG[aria-controls="custom volume range-tab"i]:not(.role-3pGE29)::before,.side-2ur1Qk>.item-3XjbnG[data-item-id=custom-volume-range-settings i]:not(.role-3pGE29)::before{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M10 20h4V4h-4v16zm-6 0h4v-8H4v8zM16 9v11h4V9h-4z'/%3E%3C/svg%3E")}.side-2ur1Qk>.item-3XjbnG[data-item-id=f8fix-settings i]:not(.role-3pGE29)::before{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M20 8h-2.81a5.985 5.985 0 00-1.82-1.96L17 4.41 15.59 3l-2.17 2.17C12.96 5.06 12.49 5 12 5s-.96.06-1.41.17L8.41 3 7 4.41l1.62 1.63C7.88 6.55 7.26 7.22 6.81 8H4v2h2.09c-.05.33-.09.66-.09 1v1H4v2h2v1c0 .34.04.67.09 1H4v2h2.81c1.04 1.79 2.97 3 5.19 3s4.15-1.21 5.19-3H20v-2h-2.09c.05-.33.09-.66.09-1v-1h2v-2h-2v-1c0-.34-.04-.67-.09-1H20V8zm-4 4v3c0 .22-.03.47-.07.7l-.1.65-.37.65c-.72 1.24-2.04 2-3.46 2s-2.74-.77-3.46-2l-.37-.64-.1-.65A4.27 4.27 0 018 15v-4c0-.23.03-.48.07-.7l.1-.65.37-.65c.3-.52.72-.97 1.21-1.31l.57-.39.74-.18a3.787 3.787 0 011.89 0l.68.16.61.42c.5.34.91.78 1.21 1.31l.38.65.1.65c.04.22.07.47.07.69v1zm-6 2h4v2h-4zm0-4h4v2h-4z'/%3E%3C/svg%3E")}.side-2ur1Qk>.item-3XjbnG[data-item-id=panikk i]:not(.role-3pGE29)::before{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath fill='none' d='M0 0h24v24H0z'/%3E%3Cpath d='M19 5v11.17l2 2V5c0-1.1-.9-2-2-2H5.83l2 2H19zM2.81 2.81L1.39 4.22 3 5.83V19c0 1.1.9 2 2 2h13.17l1.61 1.61 1.41-1.41L2.81 2.81zM5 19V7.83l7.07 7.07-.82 1.1L9 13l-3 4h8.17l2 2H5z'/%3E%3C/svg%3E")}.side-2ur1Qk>.item-3XjbnG[aria-controls="voicechat utilities-tab"i]:not(.role-3pGE29)::before,.side-2ur1Qk>.item-3XjbnG[aria-controls="voice chat utilities-tab"i]:not(.role-3pGE29)::before{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath fill='none' d='M0 0h24v24H0z'/%3E%3Cpath d='M9.22 7c.48-.53.78-1.23.78-2 0-1.66-1.34-3-3-3S4 3.34 4 5c0 .77.3 1.47.78 2h4.44z'/%3E%3Cpath d='M16 2c-2.21 0-4 1.79-4 4v12c0 1.1-.9 2-2 2s-2-.9-2-2h1l1-10H4l1 10h1c0 2.21 1.79 4 4 4s4-1.79 4-4V6c0-1.1.9-2 2-2s2 .9 2 2v16h2V6c0-2.21-1.79-4-4-4zM7.19 16h-.38l-.6-6h1.58l-.6 6z'/%3E%3C/svg%3E")}.side-2ur1Qk>.item-3XjbnG[data-item-id=local-nicknames i]:not(.role-3pGE29)::before{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath fill='none' d='M0 0h24v24H0z'/%3E%3Cpath d='M14 12h4v1.5h-4zM14 15h4v1.5h-4z'/%3E%3Cpath d='M20 7h-5V4c0-1.1-.9-2-2-2h-2c-1.1 0-2 .9-2 2v3H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm-9 0V4h2v5h-2V7zm9 13H4V9h5c0 1.1.9 2 2 2h2c1.1 0 2-.9 2-2h5v11z'/%3E%3Ccircle cx='9' cy='13.5' r='1.5'/%3E%3Cpath d='M11.08 16.18c-.64-.28-1.34-.43-2.08-.43s-1.44.15-2.08.43c-.56.24-.92.78-.92 1.39V18h6v-.43c0-.61-.36-1.15-.92-1.39z'/%3E%3C/svg%3E")}.side-2ur1Qk>.item-3XjbnG[data-item-id=cutecord i]:not(.role-3pGE29)::before{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6zM7.58 4.08L6.15 2.65C3.75 4.48 2.17 7.3 2.03 10.5h2a8.445 8.445 0 013.55-6.42zm12.39 6.42h2c-.15-3.2-1.73-6.02-4.12-7.85l-1.42 1.43a8.495 8.495 0 013.54 6.42z'/%3E%3C/svg%3E")}.side-2ur1Qk>.item-3XjbnG[aria-controls=gm-fucklytics-tab i]:not(.role-3pGE29)::before{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z'/%3E%3C/svg%3E")}.side-2ur1Qk>.item-3XjbnG[aria-controls="gm-visual tweaks-tab"i]:not(.role-3pGE29)::before{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath fill='none' d='M0 0h24v24H0z'/%3E%3Cpath d='M20 7l.94-2.06L23 4l-2.06-.94L20 1l-.94 2.06L17 4l2.06.94zM8.5 7l.94-2.06L11.5 4l-2.06-.94L8.5 1l-.94 2.06L5.5 4l2.06.94zM20 12.5l-.94 2.06-2.06.94 2.06.94.94 2.06.94-2.06L23 15.5l-2.06-.94zM17.71 9.12l-2.83-2.83c-.2-.19-.45-.29-.71-.29-.26 0-.51.1-.71.29L2.29 17.46a.996.996 0 000 1.41l2.83 2.83c.2.2.45.3.71.3s.51-.1.71-.29l11.17-11.17c.39-.39.39-1.03 0-1.42zm-3.54-.7l1.41 1.41L14.41 11 13 9.59l1.17-1.17zM5.83 19.59l-1.41-1.41L11.59 11 13 12.41l-7.17 7.18z'/%3E%3C/svg%3E")}.side-2ur1Qk>.item-3XjbnG[aria-controls="gm-custom sounds-tab"i]:not(.role-3pGE29)::before{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M7 18h2V6H7v12zm4 4h2V2h-2v20zm-8-8h2v-4H3v4zm12 4h2V6h-2v12zm4-8v4h2v-4h-2z'/%3E%3C/svg%3E")}.side-2ur1Qk>.item-3XjbnG[aria-controls="staff tags-tab"i]:not(.role-3pGE29)::before{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.97.89 1.66.89H22c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7.07L2.4 12l4.66-7H22v14z'/%3E%3Ccircle cx='9' cy='12' r='1.5'/%3E%3Ccircle cx='14' cy='12' r='1.5'/%3E%3Ccircle cx='19' cy='12' r='1.5'/%3E%3C/svg%3E")}.side-2ur1Qk>.item-3XjbnG[aria-controls=all-tab i]:not(.role-3pGE29)::before{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath fill='none' d='M0 0h24v24H0z'/%3E%3Cpath d='M21.9 8.89l-1.05-4.37c-.22-.9-1-1.52-1.91-1.52H5.05c-.9 0-1.69.63-1.9 1.52L2.1 8.89c-.24 1.02-.02 2.06.62 2.88.08.11.19.19.28.29V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-6.94c.09-.09.2-.18.28-.28.64-.82.87-1.87.62-2.89zm-2.99-3.9l1.05 4.37c.1.42.01.84-.25 1.17-.14.18-.44.47-.94.47-.61 0-1.14-.49-1.21-1.14L16.98 5l1.93-.01zM13 5h1.96l.54 4.52c.05.39-.07.78-.33 1.07-.22.26-.54.41-.95.41-.67 0-1.22-.59-1.22-1.31V5zM8.49 9.52L9.04 5H11v4.69c0 .72-.55 1.31-1.29 1.31-.34 0-.65-.15-.89-.41a1.42 1.42 0 01-.33-1.07zm-4.45-.16L5.05 5h1.97l-.58 4.86c-.08.65-.6 1.14-1.21 1.14-.49 0-.8-.29-.93-.47-.27-.32-.36-.75-.26-1.17zM5 19v-6.03c.08.01.15.03.23.03.87 0 1.66-.36 2.24-.95.6.6 1.4.95 2.31.95.87 0 1.65-.36 2.23-.93.59.57 1.39.93 2.29.93.84 0 1.64-.35 2.24-.95.58.59 1.37.95 2.24.95.08 0 .15-.02.23-.03V19H5z'/%3E%3C/svg%3E")}.side-2ur1Qk>.item-3XjbnG[aria-controls=featured-tab i]:not(.role-3pGE29)::before{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cg fill='none'%3E%3Cpath d='M0 0h24v24H0V0z'/%3E%3Cpath d='M0 0h24v24H0V0z'/%3E%3C/g%3E%3Cpath d='M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z'/%3E%3C/svg%3E")}.side-2ur1Qk>.item-3XjbnG[aria-controls=popular-tab i]:not(.role-3pGE29)::before{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath fill='none' d='M0 0h24v24H0z'/%3E%3Cpath d='M21 8c-1.45 0-2.26 1.44-1.93 2.51l-3.55 3.56c-.3-.09-.74-.09-1.04 0l-2.55-2.55C12.27 10.45 11.46 9 10 9c-1.45 0-2.27 1.44-1.93 2.52l-4.56 4.55C2.44 15.74 1 16.55 1 18c0 1.1.9 2 2 2 1.45 0 2.26-1.44 1.93-2.51l4.55-4.56c.3.09.74.09 1.04 0l2.55 2.55C12.73 16.55 13.54 18 15 18c1.45 0 2.27-1.44 1.93-2.52l3.56-3.55c1.07.33 2.51-.48 2.51-1.93 0-1.1-.9-2-2-2z'/%3E%3Cpath d='M15 9l.94-2.07L18 6l-2.06-.93L15 3l-.92 2.07L12 6l2.08.93zM3.5 11L4 9l2-.5L4 8l-.5-2L3 8l-2 .5L3 9z'/%3E%3C/svg%3E")}.side-2ur1Qk>.item-3XjbnG[aria-controls=anime-tab i]:not(.role-3pGE29)::before{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath fill='none' d='M0 0h24v24H0z'/%3E%3Cpath d='M19.66 14c-.66 1.92-2.24 3.54-4.4 4.39l-1.26.5V20h-4v-1.11l-1.27-.5c-2.16-.85-3.74-2.47-4.4-4.39h15.33M22 2L4 3.99V12H2c0 3.69 2.47 6.86 6 8.25V22h8v-1.75c3.53-1.39 6-4.56 6-8.25H10.5V8H22V6.5H10.5V4.78L22 3.51V2zM8 6.5V5.06l1-.11V6.5H8zm-2.5 0V5.34l1-.11V6.5h-1zM8 12V8h1v4H8zm-2.5 0V8h1v4h-1z'/%3E%3C/svg%3E")}.side-2ur1Qk>.item-3XjbnG[aria-controls=art-tab i]:not(.role-3pGE29)::before{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath fill='none' d='M0 0h24v24H0z'/%3E%3Cpath d='M12 22C6.49 22 2 17.51 2 12S6.49 2 12 2s10 4.04 10 9c0 3.31-2.69 6-6 6h-1.77c-.28 0-.5.22-.5.5 0 .12.05.23.13.33.41.47.64 1.06.64 1.67A2.5 2.5 0 0112 22zm0-18c-4.41 0-8 3.59-8 8s3.59 8 8 8c.28 0 .5-.22.5-.5a.54.54 0 00-.14-.35c-.41-.46-.63-1.05-.63-1.65a2.5 2.5 0 012.5-2.5H16c2.21 0 4-1.79 4-4 0-3.86-3.59-7-8-7z'/%3E%3Ccircle cx='6.5' cy='11.5' r='1.5'/%3E%3Ccircle cx='9.5' cy='7.5' r='1.5'/%3E%3Ccircle cx='14.5' cy='7.5' r='1.5'/%3E%3Ccircle cx='17.5' cy='11.5' r='1.5'/%3E%3C/svg%3E")}.side-2ur1Qk>.item-3XjbnG[aria-controls=chill-tab i]:not(.role-3pGE29)::before{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath fill='none' d='M0 0h24v24H0z'/%3E%3Ccircle cx='12' cy='4' r='2'/%3E%3Cpath d='M15.89 8.11C15.5 7.72 14.83 7 13.53 7h-2.54C8.24 6.99 6 4.75 6 2H4c0 3.16 2.11 5.84 5 6.71V22h2v-6h2v6h2V10.05L18.95 14l1.41-1.41-4.47-4.48z'/%3E%3C/svg%3E")}.side-2ur1Qk>.item-3XjbnG[aria-controls=community-tab i]:not(.role-3pGE29)::before{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath fill='none' d='M0 0h24v24H0z'/%3E%3Cpath d='M4 13c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm1.13 1.1c-.37-.06-.74-.1-1.13-.1-.99 0-1.93.21-2.78.58A2.01 2.01 0 000 16.43V18h4.5v-1.61c0-.83.23-1.61.63-2.29zM20 13c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm4 3.43c0-.81-.48-1.53-1.22-1.85A6.95 6.95 0 0020 14c-.39 0-.76.04-1.13.1.4.68.63 1.46.63 2.29V18H24v-1.57zm-7.76-2.78c-1.17-.52-2.61-.9-4.24-.9-1.63 0-3.07.39-4.24.9A2.988 2.988 0 006 16.39V18h12v-1.61c0-1.18-.68-2.26-1.76-2.74zM8.07 16c.09-.23.13-.39.91-.69.97-.38 1.99-.56 3.02-.56s2.05.18 3.02.56c.77.3.81.46.91.69H8.07zM12 8c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1m0-2c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z'/%3E%3C/svg%3E")}.side-2ur1Qk>.item-3XjbnG[aria-controls=fortnite-tab i]:not(.role-3pGE29)::before{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg" version="1.0' width='100' height='245' viewBox='0 0 180 441'%3E%3Cpath d='M0 220.5C0 341.8.3 441 .7 441c.6 0 82.1-15.1 92.1-17.1l5.2-1V261h62v-14.8c0-8.1.3-29.2.7-47l.6-32.2H98V96h36.5c20.1 0 36.5-.2 36.5-.5 0-1.1 8-86.5 8.5-90.8l.6-4.7H0v220.5z'/%3E%3C/svg%3E")}.side-2ur1Qk>.item-3XjbnG[aria-controls=fun-tab i]:not(.role-3pGE29)::before{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath fill='none' d='M0 0h24v24H0z'/%3E%3Cpath d='M2 22l14-5-9-9-5 14zm10.35-5.82L5.3 18.7l2.52-7.05 4.53 4.53zM14.53 12.53l5.59-5.59a1.25 1.25 0 011.77 0l.59.59 1.06-1.06-.59-.59a2.758 2.758 0 00-3.89 0l-5.59 5.59 1.06 1.06zM10.06 6.88l-.59.59 1.06 1.06.59-.59a2.758 2.758 0 000-3.89l-.59-.59-1.06 1.07.59.59c.48.48.48 1.28 0 1.76zM17.06 11.88l-1.59 1.59 1.06 1.06 1.59-1.59a1.25 1.25 0 011.77 0l1.61 1.61 1.06-1.06-1.61-1.61a2.758 2.758 0 00-3.89 0zM15.06 5.88l-3.59 3.59 1.06 1.06 3.59-3.59a2.758 2.758 0 000-3.89l-1.59-1.59-1.06 1.06 1.59 1.59c.48.49.48 1.29 0 1.77z'/%3E%3C/svg%3E")}.side-2ur1Qk>.item-3XjbnG[aria-controls=furry-tab i]:not(.role-3pGE29)::before{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Ccircle cx='4.5' cy='9.5' r='2.5'/%3E%3Ccircle cx='9' cy='5.5' r='2.5'/%3E%3Ccircle cx='15' cy='5.5' r='2.5'/%3E%3Ccircle cx='19.5' cy='9.5' r='2.5'/%3E%3Cpath d='M17.34 14.86c-.87-1.02-1.6-1.89-2.48-2.91-.46-.54-1.05-1.08-1.75-1.32-.11-.04-.22-.07-.33-.09-.25-.04-.52-.04-.78-.04s-.53 0-.79.05c-.11.02-.22.05-.33.09-.7.24-1.28.78-1.75 1.32-.87 1.02-1.6 1.89-2.48 2.91-1.31 1.31-2.92 2.76-2.62 4.79.29 1.02 1.02 2.03 2.33 2.32.73.15 3.06-.44 5.54-.44h.18c2.48 0 4.81.58 5.54.44 1.31-.29 2.04-1.31 2.33-2.32.31-2.04-1.3-3.49-2.61-4.8z'/%3E%3C/svg%3E")}.side-2ur1Qk>.item-3XjbnG[aria-controls=games-tab i]:not(.role-3pGE29)::before{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z'/%3E%3Ccircle cx='7.5' cy='16.5' r='1.5'/%3E%3Ccircle cx='7.5' cy='7.5' r='1.5'/%3E%3Ccircle cx='12' cy='12' r='1.5'/%3E%3Ccircle cx='16.5' cy='16.5' r='1.5'/%3E%3Ccircle cx='16.5' cy='7.5' r='1.5'/%3E%3C/svg%3E")}.side-2ur1Qk>.item-3XjbnG[aria-controls=gaming-tab i]:not(.role-3pGE29)::before{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M13 4v2.67l-1 1-1-1V4h2m7 7v2h-2.67l-1-1 1-1H20M6.67 11l1 1-1 1H4v-2h2.67M12 16.33l1 1V20h-2v-2.67l1-1M15 2H9v5.5l3 3 3-3V2zm7 7h-5.5l-3 3 3 3H22V9zM7.5 9H2v6h5.5l3-3-3-3zm4.5 4.5l-3 3V22h6v-5.5l-3-3z'/%3E%3C/svg%3E")}.side-2ur1Qk>.item-3XjbnG[aria-controls=hangout-tab i]:not(.role-3pGE29)::before{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17l-.59.59-.58.58V4h16v12zM6 12h2v2H6zm0-3h2v2H6zm0-3h2v2H6zm4 6h5v2h-5zm0-3h8v2h-8zm0-3h8v2h-8z'/%3E%3C/svg%3E")}.side-2ur1Qk>.item-3XjbnG[aria-controls=memes-tab i]:not(.role-3pGE29)::before{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath fill='currentColor' d='M15 4v7h-9.83l-1.17 1.17v-8.17h11m1-2h-13c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1v-9c0-.55-.45-1-1-1zm5 4h-2v9h-13v2c0 .55.45 1 1 1h11l4 4v-15c0-.55-.45-1-1-1zM12 5a1 1 0 000 2a1 1 0 000-2zM7 5a1 1 0 000 2a1 1 0 000-2zm-1 3h7q-3.5 4-7 0Z'/%3E%3C/svg%3E")}.side-2ur1Qk>.item-3XjbnG[aria-controls=minecraft-tab i]:not(.role-3pGE29)::before{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M22.5 16.305V7.695c0-1.08-.57-2.07-1.5-2.595l-7.5-4.32c-.465-.27-.975-.405-1.5-.405s-1.035.135-1.5.405L3 5.085c-.93.54-1.5 1.53-1.5 2.61v8.61c0 1.08.57 2.07 1.5 2.595l7.5 4.32c.465.27.975.405 1.5.405s1.035-.135 1.5-.405l7.5-4.32c.93-.525 1.5-1.515 1.5-2.595zm-12 3.45-6-3.45v-6.945l6 3.495v6.9zm1.5-9.495L6.06 6.795 12 3.375l5.94 3.42L12 10.26zm7.5 6.045-6 3.45v-6.9l6-3.495v6.945z'/%3E%3C/svg%3E")}.side-2ur1Qk>.item-3XjbnG[aria-controls=music-tab i]:not(.role-3pGE29)::before{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M12 3l.01 10.55c-.59-.34-1.27-.55-2-.55a4.001 4.001 0 100 8c2.22 0 3.99-1.79 3.99-4V7h4V3h-6zm-1.99 16c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z'/%3E%3C/svg%3E")}.side-2ur1Qk>.item-3XjbnG[aria-controls=nsfw-tab i]:not(.role-3pGE29)::before{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z'/%3E%3C/svg%3E")}.side-2ur1Qk>.item-3XjbnG[aria-controls=roblox-tab i]:not(.role-3pGE29)::before{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='55' height='55'%3E%3Cpath class='st1' d='M11.3 0L0 43.9l43.9 11.3 11.3-43.9L11.3 0zm19.5 33l-8.6-2.2 2.2-8.6 8.6 2.2-2.2 8.6z'/%3E%3C/svg%3E")}.side-2ur1Qk>.item-3XjbnG[aria-controls=roleplay-tab i]:not(.role-3pGE29)::before{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M15 4v7H5.17l-.59.59-.58.58V4h11m1-2H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm5 4h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1z'/%3E%3C/svg%3E")}.side-2ur1Qk>.item-3XjbnG[aria-controls=social-tab i]:not(.role-3pGE29)::before{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath fill='none' d='M0 0h24v24H0z'/%3E%3Cpath d='M4 13c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm1.13 1.1c-.37-.06-.74-.1-1.13-.1-.99 0-1.93.21-2.78.58A2.01 2.01 0 000 16.43V18h4.5v-1.61c0-.83.23-1.61.63-2.29zM20 13c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm4 3.43c0-.81-.48-1.53-1.22-1.85A6.95 6.95 0 0020 14c-.39 0-.76.04-1.13.1.4.68.63 1.46.63 2.29V18H24v-1.57zm-7.76-2.78c-1.17-.52-2.61-.9-4.24-.9-1.63 0-3.07.39-4.24.9A2.988 2.988 0 006 16.39V18h12v-1.61c0-1.18-.68-2.26-1.76-2.74zM8.07 16c.09-.23.13-.39.91-.69.97-.38 1.99-.56 3.02-.56s2.05.18 3.02.56c.77.3.81.46.91.69H8.07zM12 8c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1m0-2c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z'/%3E%3C/svg%3E")}.channelNotice-2bJINM{height:20px;margin:0;padding:16px;transition:.2s ease-in-out}.channelNotice-2bJINM .textBlock-2FWDjE{height:0;opacity:0;margin:0;transition:.3s ease-in-out}.channelNotice-2bJINM button{height:0;opacity:0;margin:0;padding:0;transition:.3s ease-in-out}.channelNotice-2bJINM:hover{height:152px}.channelNotice-2bJINM:hover .textBlock-2FWDjE{height:16px;margin:4px auto;opacity:1}.channelNotice-2bJINM:hover button{height:32px;margin:unset;padding:unset;opacity:1}@font-face{font-family:"No Dash";src:url(https://hyblocker.github.io/pixelcord/res/noDash.ttf) format("truetype"),url(https://hyblocker.github.io/pixelcord/res/noDash.woff2) format("woff2");unicode-range:U+002D}.sidebar-1tnWFu .mainContent-20q_Hp[href] .channelName-3KPsGw{font-family:"No Dash",var(--font-header)}.wrapper-1ZcZW-[class="wrapper-1ZcZW- mention interactive"]{font-family:"No Dash",var(--font-header)}.content-2a4AW9 .emptyChannelIcon-1YdEz2~.size32-5yOQel{font-family:"No Dash",var(--font-header)}.title-31SJ6t .iconWrapper-2awDjA[aria-label="Text Channel"]+.title-17SveM,.title-31SJ6t .iconWrapper-2awDjA[aria-label=文字频道]+.title-17SveM,.title-31SJ6t .iconWrapper-2awDjA[aria-label=文字頻道]+.title-17SveM,.title-31SJ6t .iconWrapper-2awDjA[aria-label="Textový kanál"]+.title-17SveM,.title-31SJ6t .iconWrapper-2awDjA[aria-label=Tekstkanal]+.title-17SveM,.title-31SJ6t .iconWrapper-2awDjA[aria-label=Tekstkanaal]+.title-17SveM,.title-31SJ6t .iconWrapper-2awDjA[aria-label="Salon textuel"]+.title-17SveM,.title-31SJ6t .iconWrapper-2awDjA[aria-label=Textkanal]+.title-17SveM,.title-31SJ6t .iconWrapper-2awDjA[aria-label="Κανάλι κειμένου"]+.title-17SveM,.title-31SJ6t .iconWrapper-2awDjA[aria-label=Szövegcsatorna]+.title-17SveM,.title-31SJ6t .iconWrapper-2awDjA[aria-label="Canale testuale"]+.title-17SveM,.title-31SJ6t .iconWrapper-2awDjA[aria-label=テキストチャンネル]+.title-17SveM,.title-31SJ6t .iconWrapper-2awDjA[aria-label="채팅 채널"]+.title-17SveM,.title-31SJ6t .iconWrapper-2awDjA[aria-label="Kanał tekstowy"]+.title-17SveM,.title-31SJ6t .iconWrapper-2awDjA[aria-label="Canal de texto"]+.title-17SveM,.title-31SJ6t .iconWrapper-2awDjA[aria-label="Текстовый канал"]+.title-17SveM,.title-31SJ6t .iconWrapper-2awDjA[aria-label="Metin Kanalı"]+.title-17SveM,.title-31SJ6t .iconWrapper-2awDjA[aria-label="Текстов канал"]+.title-17SveM,.title-31SJ6t .iconWrapper-2awDjA[aria-label="Текстовий канал"]+.title-17SveM,.title-31SJ6t .iconWrapper-2awDjA[aria-label=Tekstikanava]+.title-17SveM,.title-31SJ6t .iconWrapper-2awDjA[aria-label="Tekstualni kanal"]+.title-17SveM,.title-31SJ6t .iconWrapper-2awDjA[aria-label="Canal de text"]+.title-17SveM,.title-31SJ6t .iconWrapper-2awDjA[aria-label="Teksto Kanalas"]+.title-17SveM,.title-31SJ6t .iconWrapper-2awDjA[aria-label=ช่องข้อความ]+.title-17SveM,.title-31SJ6t .iconWrapper-2awDjA[aria-label="Kênh Văn Bản"]+.title-17SveM,.title-31SJ6t .iconWrapper-2awDjA[aria-label="टेक्स्ट चैनल"]+.title-17SveM{font-family:"No Dash",var(--font-header)}.title-31SJ6t+.content-1jQy2l .form-3gdLxP>div>div[aria-controls^=popout_] .placeholder-1_mJY1{font-family:"No Dash",var(--font-header)}#bd-pub-button:hover{background-color:var(--accent);color:var(--accent-text);overflow:hidden}#bd-pub-button:hover::after{transition:transform .3s cubic-bezier(0, 0, 0.2, 1),width .3s cubic-bezier(0, 0, 0.2, 1),height .3s cubic-bezier(0, 0, 0.2, 1),opacity .6s cubic-bezier(0, 0, 0.2, 1);content:"";opacity:0;pointer-events:none;position:absolute;width:100%;height:100%;top:calc(0px + var(--clickY));left:calc(0px + var(--clickX));transform:scale(5);background:radial-gradient(circle at center, var(--accent-highlight) 24%, transparent 25%, transparent 100%)}#bd-pub-button:hover:not(:active)::after{transition:0s;opacity:.3;transform:scale(0)}#bd-pub-button:active{background-color:var(--accent-highlight)}.bd-server-tag{background:var(--accent)}.bd-button{position:relative;background-color:var(--accent);color:var(--accent-text);overflow:hidden}.bd-button::after{transition:transform .3s cubic-bezier(0, 0, 0.2, 1),width .3s cubic-bezier(0, 0, 0.2, 1),height .3s cubic-bezier(0, 0, 0.2, 1),opacity .6s cubic-bezier(0, 0, 0.2, 1);content:"";opacity:0;pointer-events:none;position:absolute;width:100%;height:100%;top:calc(0px + var(--clickY));left:calc(0px + var(--clickX));transform:scale(5);background:radial-gradient(circle at center, var(--accent-highlight) 24%, transparent 25%, transparent 100%)}.bd-button:not(:active)::after{transition:0s;opacity:.3;transform:scale(0)}.bd-button::hover{background-color:var(--accent-highlight)}.bd-button.bd-button-danger{background-color:var(--danger);overflow:hidden}.bd-button.bd-button-danger::after{transition:transform .3s cubic-bezier(0, 0, 0.2, 1),width .3s cubic-bezier(0, 0, 0.2, 1),height .3s cubic-bezier(0, 0, 0.2, 1),opacity .6s cubic-bezier(0, 0, 0.2, 1);content:"";opacity:0;pointer-events:none;position:absolute;width:100%;height:100%;top:calc(0px + var(--clickY));left:calc(0px + var(--clickX));transform:scale(5);background:radial-gradient(circle at center, var(--danger-highlight) 24%, transparent 25%, transparent 100%)}.bd-button.bd-button-danger:not(:active)::after{transition:0s;opacity:.3;transform:scale(0)}.bd-button.bd-button-danger::hover{background-color:var(--danger-highlight)}.button-coQXfM{transition:150ms color ease-in-out,150ms background-color ease-in-out;position:relative}.button-coQXfM[style*="background-color: var(--bdfdb-blurple)"]{background-color:var(--accent) !important;color:var(--accent-text);overflow:hidden}.button-coQXfM[style*="background-color: var(--bdfdb-blurple)"]::after{transition:transform .3s cubic-bezier(0, 0, 0.2, 1),width .3s cubic-bezier(0, 0, 0.2, 1),height .3s cubic-bezier(0, 0, 0.2, 1),opacity .6s cubic-bezier(0, 0, 0.2, 1);content:"";opacity:0;pointer-events:none;position:absolute;width:100%;height:100%;top:calc(0px + var(--clickY));left:calc(0px + var(--clickX));transform:scale(5);background:radial-gradient(circle at center, var(--accent-highlight) 24%, transparent 25%, transparent 100%)}.button-coQXfM[style*="background-color: var(--bdfdb-blurple)"]:not(:active)::after{transition:0s;opacity:.3;transform:scale(0)}.button-coQXfM[style*="background-color: var(--bdfdb-blurple)"]::hover{background-color:var(--accent-highlight)}.button-coQXfM[style*="background-color: var(--bdfdb-green)"]{background-color:var(--online) !important;color:var(--accent-text);overflow:hidden}.button-coQXfM[style*="background-color: var(--bdfdb-green)"]::after{transition:transform .3s cubic-bezier(0, 0, 0.2, 1),width .3s cubic-bezier(0, 0, 0.2, 1),height .3s cubic-bezier(0, 0, 0.2, 1),opacity .6s cubic-bezier(0, 0, 0.2, 1);content:"";opacity:0;pointer-events:none;position:absolute;width:100%;height:100%;top:calc(0px + var(--clickY));left:calc(0px + var(--clickX));transform:scale(5);background:radial-gradient(circle at center, var(--online-highlight) 24%, transparent 25%, transparent 100%)}.button-coQXfM[style*="background-color: var(--bdfdb-green)"]:not(:active)::after{transition:0s;opacity:.3;transform:scale(0)}.button-coQXfM[style*="background-color: var(--bdfdb-green)"]::hover{background-color:var(--online-highlight)}.button-coQXfM[style*="background-color: var(--bdfdb-red)"]{background-color:var(--danger) !important;color:var(--accent-text);overflow:hidden}.button-coQXfM[style*="background-color: var(--bdfdb-red)"]::after{transition:transform .3s cubic-bezier(0, 0, 0.2, 1),width .3s cubic-bezier(0, 0, 0.2, 1),height .3s cubic-bezier(0, 0, 0.2, 1),opacity .6s cubic-bezier(0, 0, 0.2, 1);content:"";opacity:0;pointer-events:none;position:absolute;width:100%;height:100%;top:calc(0px + var(--clickY));left:calc(0px + var(--clickX));transform:scale(5);background:radial-gradient(circle at center, var(--danger-highlight) 24%, transparent 25%, transparent 100%)}.button-coQXfM[style*="background-color: var(--bdfdb-red)"]:not(:active)::after{transition:0s;opacity:.3;transform:scale(0)}.button-coQXfM[style*="background-color: var(--bdfdb-red)"]::hover{background-color:var(--danger-highlight)}.coverWrapper-J-mDGJ{background-size:cover}.theme-dark .coverWrapper-J-mDGJ{background-image:url(https://canary.discord.com/assets/d03d90cb6f12a7ea06274b278dfa4160.svg)}.theme-light .coverWrapper-J-mDGJ{background-image:url(https://canary.discord.com/assets/7b6ed225050df29a07cb5db712d35a73.svg)}.theme-light .bd-addon-list .bd-addon-card{background-color:var(--card-4-bg);box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0,0,0,.12)}.theme-dark .bd-addon-list .bd-addon-card{background-color:var(--card-4-bg)}.theme-light .bd-addon-list .bd-addon-header{background-color:var(--card-2-bg);box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 1px 5px 0px rgba(0,0,0,.12)}.theme-dark .bd-addon-list .bd-addon-header{background-color:var(--card-2-bg)}.theme-light .bd-emote-header{background-color:var(--card-2-bg)}.theme-dark .bd-emote-header{background-color:var(--card-2-bg)}.bd-emote-item:hover{background-color:var(--accent)}.theme-light .repoHeader-2KfNvH{background-color:var(--card-0-bg)}.theme-dark .repoHeader-2KfNvH{background-color:var(--card-0-bg)}.fixed-3zCC84{color:var(--danger)}.fixed-3zCC84::after{background-color:var(--danger)}.bd-sidebar-header .bd-changelog-button{height:16px;margin-right:10px}.theme-light .bd-addon-error{background-color:var(--card-4-bg);box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0,0,0,.12)}.theme-dark .bd-addon-error{background-color:var(--card-4-bg)}.theme-light .themedPopout-1TrfdI{background-color:var(--card-4-bg);box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0,0,0,.12)}.theme-dark .themedPopout-1TrfdI{background-color:var(--card-4-bg)}.bd-settings-group.collapsible .bd-settings-title.bd-settings-group-title{cursor:pointer}.bd-switch input{left:0}.bd-switch-body{width:32px;height:14px;overflow:visible;background-color:var(--switch-slider-color) !important}.bd-switch input:checked+.bd-switch-body{background-color:transparent !important}.bd-switch input:checked+.bd-switch-body::before{content:"";display:inline-block;background-color:var(--accent) !important;opacity:.3;width:32px;height:14px;border-radius:14px;pointer-events:none}.bd-switch input:checked+.bd-switch-body .bd-switch-slider{background-color:var(--accent) !important;box-shadow:0 3px 4px 0 RGB(0 0 0/14%),0 3px 3px -2px RGB(0 0 0/20%),0 1px 8px 0 RGB(0 0 0/12%)}.bd-switch-body .bd-switch-slider{width:20px;height:20px;top:-3px;margin:0;border-radius:50%;background-color:var(--switch-knob-color) !important;box-shadow:0 2px 2px 0 RGB(0 0 0/14%),0 3px 1px -2px RGB(0 0 0/20%),0 1px 5px 0 RGB(0 0 0/12%)}.bd-switch-body .bd-switch-slider rect,.bd-switch-body .bd-switch-slider svg{display:none}.bd-switch-body::after{transition:background-size .3s cubic-bezier(0, 0, 0.2, 1),opacity .6s cubic-bezier(0, 0, 0.2, 1);opacity:0;background-size:100%;background-image:radial-gradient(circle at calc(var(--clickX) + 50%) calc(var(--clickY) + 50%), var(--accent-highlight) 24%, transparent 25%, transparent 100%);background-repeat:no-repeat;background-position:50% 50%;background-attachment:local;background-clip:padding-box;object-fit:contain;content:"";pointer-events:none;position:absolute;width:256px;height:256px;top:-119px;left:-113px}.bd-switch-body:not(:active)::after{transition:0s;opacity:.3;background-size:0%}.PI-icon_desktop[style*="color: hsl(139,"],.PI-icon_mobile[style*="color: hsl(139,"],.PI-icon_web[style*="color: hsl(139,"]{color:var(--online) !important}.PI-icon_desktop[style*="color: hsl(38,"],.PI-icon_mobile[style*="color: hsl(38,"],.PI-icon_web[style*="color: hsl(38,"]{color:var(--idle) !important}.PI-icon_desktop[style*="color: hsl(359,"],.PI-icon_mobile[style*="color: hsl(359,"],.PI-icon_web[style*="color: hsl(359,"]{color:var(--danger) !important}.fixed-3zCC84:after{background-color:var(--danger)}.added-2hLRj3:after{background-color:var(--online)}.theme-light .card-x5zW6z .gifFavoriteButton-2IttKp{color:var(--header-primary)}.repoList-9JnAPs .toolsContainer-25FL6V{margin-top:0}.sidebar-nqHbhN .themed-2-lozF.selected-g-kMVV.item-3XjbnG[aria-controls=settings-tab i]::after{content:"Better Discord Settings"}.sidebar-nqHbhN .themed-2-lozF.selected-g-kMVV.item-3XjbnG[aria-controls=emotes-tab i]::after{content:"Emotes"}.sidebar-nqHbhN .themed-2-lozF.selected-g-kMVV.item-3XjbnG[aria-controls=customcss-tab i]::after{content:"Custom CSS"}.sidebar-nqHbhN .themed-2-lozF.selected-g-kMVV.item-3XjbnG[aria-controls=plugins-tab i]::after{content:"Plugins"}.sidebar-nqHbhN .themed-2-lozF.selected-g-kMVV.item-3XjbnG[aria-controls=themes-tab i]::after{content:"Themes"}.sidebar-nqHbhN .themed-2-lozF.selected-g-kMVV.item-3XjbnG[aria-controls=pluginrepo-tab i]::after{content:"Plugin Repository"}.sidebar-nqHbhN .themed-2-lozF.selected-g-kMVV.item-3XjbnG[aria-controls=themerepo-tab i]::after{content:"Theme Repository"}.bd-minimal .sidebarRegion-1VBisG{flex:none;max-width:256px}.bd-minimal .sidebarRegionScroller-FXiQOh{max-width:256px}.bd-minimal .sidebar-nqHbhN{width:calc(var(--settings-list-width) - 48px)}.gm-store-category>:nth-child(2){overflow-y:hidden}.theme-light #gm-settings-inject{background-color:var(--card-0-bg) !important}.theme-dark #gm-settings-inject{background-color:var(--card-0-bg) !important}#gm-settings-inject .gm-store-card>:nth-child(1){background-color:transparent}.gm-store-card .title-2dsDLn:nth-child(2){color:#ebebeb}.theme-light .gm-store-card{background-color:var(--card-4-bg);box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0,0,0,.12)}.theme-dark .gm-store-card{background-color:var(--card-4-bg)}.gm-store-card .gm-settings-note-markdown{max-height:110px}.gm-store-card .gm-settings-note-markdown::after{content:"";height:1rem;width:4rem;position:absolute;right:70px;bottom:58px}.theme-light .gm-store-card .gm-settings-note-markdown::after{background:linear-gradient(90deg, transparent, var(--card-4-bg))}.theme-dark .gm-store-card .gm-settings-note-markdown::after{background:linear-gradient(90deg, transparent, var(--card-4-bg))}.gm-store-card>img:first-child:not([src]){font-size:0;background-size:cover}.theme-dark .gm-store-card>img:first-child:not([src]){background-image:url(https://canary.discord.com/assets/d03d90cb6f12a7ea06274b278dfa4160.svg)}.theme-light .gm-store-card>img:first-child:not([src]){background-image:url(https://canary.discord.com/assets/7b6ed225050df29a07cb5db712d35a73.svg)}.gm-store-card>img:first-child[src]{cursor:pointer}.gm-store-card>:nth-child(5)>:nth-child(2){width:125% !important}.updateAvailable-3JeyBT{animation:1s linear 0s infinite normal none running spin-2wNkdY}#gm-home-plugins[style*="display: block;"],#gm-home-plugins[style*="display: none;"],#gm-home-themes[style*="display: block;"],#gm-home-themes[style*="display: none;"]{display:block !important;opacity:1;height:44px;transition:opacity .25s ease-in-out,height 150ms ease-in-out}#gm-home-plugins[style*="display: none;"],#gm-home-themes[style*="display: none;"]{height:0;opacity:0}.theme-light .gm-carousel-modal{background-color:var(--card-2-bg);box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 1px 5px 0px rgba(0,0,0,.12)}.theme-dark .gm-carousel-modal{background-color:var(--card-2-bg)}.theme-light .gm-carousel-modal .dotSelected-1F5kdR{background-color:#000}.theme-light .gm-carousel-modal .dotNormal-2l4rTV{background-color:dimgray}.theme-light .gm-carousel-modal .arrow-2PTaaz{color:#000}.theme-light .lookFilled-1Gx00P.colorPrimary-3b3xI6,.theme-light .defaultIndicator-2ndWks{color:#fff}.theme-light .paymentText-BPrx01{color:var(--text)}.theme-dark .premiumIndicator-22GgcZ,.theme-light .premiumIndicator-22GgcZ{background-color:var(--accent);color:#fff}.theme-light .bottomDivider-ZmTm-j{border-color:var(--navdrawer-separator)}.theme-light .gemIndicatorContainer-PqApbX{background-color:var(--card-0-bg)}.theme-dark .gemIndicatorContainer-PqApbX{background-color:var(--card-0-bg)}.wrapper-3nSjSv{color:#fff}.wrapper-3nSjSv .colorStandard-21JIj7,.wrapper-3nSjSv .base-21yXnu{color:var(--accent-text)}.bannerVisible-Vkyg1I .iconBackgroundTierOne-2OQMBY,.bannerVisible-Vkyg1I .iconBackgroundTierThree-FWlUL9,.bannerVisible-Vkyg1I .iconBackgroundTierTwo-Eab9L6,.iconTierOne-s_oiRb,.iconTierTwo-1JOWNK,.perkAvailabilityIcon-1FFCXW{color:#fff}.theme-light .css-4h5swf-singleValue{color:#2e3338}.theme-light .css-1yz4bi9-option{color:#2e3338}.theme-light .css-rzbxvl-option{color:#2e3338}.theme-light .css-1ba14n5-option{color:#2e3338}.ephemeral-2nDdnn.gm-deleted-message::before{background-color:var(--danger)}.h5-2RwDNl[id*=gm-settings-header]{cursor:pointer}.privateChannelsHeaderContainer-1UWASm .privateChannelRecipientsInviteButtonIcon-1ObKXK{transition:transform 150ms ease-in,left 150ms ease-in,top 150ms ease-in}.vertical-3aLnqW[style*="display: block;"],.vertical-3aLnqW[style=""],.vertical-3aLnqW[style*="display: none;"],.container-1zDvAE[style*="display: block;"],.container-1zDvAE[style=""],.container-1zDvAE[style*="display: none;"]{display:block !important;opacity:1;height:auto;max-height:100000px;transition:150ms ease-in-out}.vertical-3aLnqW[style*="display: none;"],.container-1zDvAE[style*="display: none;"]{height:0;opacity:0;margin-bottom:0}.sidebar-nqHbhN .themed-2-lozF.selected-g-kMVV.item-3XjbnG[aria-controls=gm-settings-tab i]::after{content:"Goosemod Settings"}.sidebar-nqHbhN .themed-2-lozF.selected-g-kMVV.item-3XjbnG[aria-controls=gm-changelog-tab i]::after{content:"Goosemod Changelog"}.sidebar-nqHbhN .themed-2-lozF.selected-g-kMVV.item-3XjbnG[aria-controls=gm-custom-css-tab i]::after{content:"Custom CSS"}.sidebar-nqHbhN .themed-2-lozF.selected-g-kMVV.item-3XjbnG[aria-controls=gm-fucklytics-tab i]::after{content:"Fucklytics"}.powercord-pc-icon::before{background:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 447 447'%3E%3Cpath fill='%23fff' d='M182.5 78.6l70-70c11.9-11.9 31.2-11.9 43.1 0s11.9 31.2 0 43.1l-70 70zm91.7 91.7l70-70c11.9-11.9 31.2-11.9 43.1 0s11.9 31.2 0 43.1l-70 70zM303 257L138.9 92.9c-2.7-2.7-2.7-7 0-9.7L163 59.1c2.7-2.7 7-2.7 9.7 0l164.1 164.1c2.7 2.7 2.7 7 0 9.7L312.7 257c-2.7 2.7-7 2.7-9.7 0zm-146.6 75.4l-92.9-92.9c-17-17-17-44.6 0-61.6l85.1-85.1L303 247.4l-85 85c-17 17-44.7 17-61.6 0zm-61-2.9l-29-29c-2.7-2.7-2.7-7 0-9.7l29-29 38.7 38.7-29 29c-2.7 2.6-7 2.6-9.7 0zm48.3 115.8L81 382.6c-21.3-21.3-21.3-55.9 0-77.2l9.7 9.7c-16 16-16 42 0 57.9l62.8 62.8c2.7 2.7 2.7 7 0 9.7s-7.1 2.5-9.8-.2z'/%3E%3C/svg%3E") left/contain no-repeat}.powercord-toast[data-toast-type=online] .icon{color:var(--online)}.powercord-toast[data-toast-type=idle] .icon{color:var(--idle)}.powercord-toast[data-toast-type=danger] .icon{color:var(--danger)}#F8settings #desc>strong{color:var(--danger) !important}.powercord-updater .icon path[fill="#f04747"]{fill:var(--danger)}.powercord-updater .icon path[fill="#7289da"]{fill:var(--accent)}.powercord-updater .icon path[fill="#43b581"]{fill:var(--online)}.powercord-toast[data-toast-type=danger] .icon{color:var(--danger) !important}.powercord-toast[data-toast-type=success] .icon{color:var(--online) !important}.theme-light .powercord-toast .contents .inner{background-color:var(--card-4-bg);box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0,0,0,.12)}.theme-dark .powercord-toast .contents .inner{background-color:var(--card-4-bg)}.h2-1EaYVL:first-child{font-size:20px;line-height:24px;font-weight:600;margin-bottom:20px;text-transform:capitalize}.theme-light .powercord-entities-manage-tabs{background-color:var(--card-4-bg);box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0,0,0,.12)}.theme-dark .powercord-entities-manage-tabs{background-color:var(--card-4-bg)}.theme-light .powercord-toast{background-color:var(--card-8-bg);box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0,0,0,.12)}.theme-dark .powercord-toast{background-color:var(--card-8-bg)}.theme-light .powercord-toast .header{box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 1px 5px 0px rgba(0,0,0,.12)}.theme-light .powercord-toast .contents .inner{box-shadow:0px 2px 1px -1px rgba(0, 0, 0, 0.2),0px 1px 1px 0px rgba(0, 0, 0, 0.14),0px 1px 3px 0px rgba(0,0,0,.12)}.theme-dark .powercord-toast .contents .inner{box-shadow:0 0 0 1px #333}.theme-light .modal-2RrUKJ{background-color:var(--card-4-bg);box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0,0,0,.12)}.theme-dark .modal-2RrUKJ{background-color:var(--card-4-bg)}.powercord-product-license-modal-data.conditions span:before{background-color:var(--accent) !important}.powercord-product-license-modal-data.limitations span:before{background-color:var(--danger) !important}.powercord-product-license-modal-data.permissions span:before{background-color:var(--online) !important}.ucbadge.numberBadge-37OJ3S{background-color:var(--accent) !important;margin-left:6px}.pronoundb-pronouns,.vpc-shiki-lang,.vpc-shiki-btns{user-select:none}.theme-dark .activityProfile-1712BN .content-tXPNDw,.theme-dark .activityProfile-1712BN .details-2-ciHo,.theme-dark .activityProfile-1712BN .headerText-3g1XK9,.theme-dark .activityProfile-1712BN .name-1-Q7l2,.theme-dark .activityUserPopout-2MzGCj .content-tXPNDw,.theme-dark .activityUserPopout-2MzGCj .details-2-ciHo,.theme-dark .activityUserPopout-2MzGCj .headerText-3g1XK9,.theme-dark .activityUserPopout-2MzGCj .name-1-Q7l2,.theme-light .activityProfile-1712BN .content-tXPNDw,.theme-light .activityProfile-1712BN .details-2-ciHo,.theme-light .activityProfile-1712BN .headerText-3g1XK9,.theme-light .activityProfile-1712BN .name-1-Q7l2,.theme-light .activityUserPopout-2MzGCj .content-tXPNDw,.theme-light .activityUserPopout-2MzGCj .details-2-ciHo,.theme-light .activityUserPopout-2MzGCj .headerText-3g1XK9,.theme-light .activityUserPopout-2MzGCj .name-1-Q7l2{color:var(--text-normal)}.theme-light .sessionCard-activity{background-color:var(--card-6-bg);box-shadow:0px 3px 5px -1px rgba(0, 0, 0, 0.2),0px 6px 10px 0px rgba(0, 0, 0, 0.14),0px 1px 18px 0px rgba(0,0,0,.12)}.theme-dark .sessionCard-activity{background-color:var(--card-6-bg)}.sessionCard-title .textBadge-1fdDPJ[style^="background-color: hsl(139, "]{background-color:var(--online) !important}.sidebar-nqHbhN .themed-2-lozF.selected-g-kMVV.item-3XjbnG[aria-controls=pc-general-tab i]::after{content:"Powercord Settings"}.sidebar-nqHbhN .themed-2-lozF.selected-g-kMVV.item-3XjbnG[aria-controls=pc-modulemanager-plugins-tab i]::after{content:"Plugins"}.sidebar-nqHbhN .themed-2-lozF.selected-g-kMVV.item-3XjbnG[aria-controls=pc-modulemanager-themes-tab i]::after{content:"Themes"}.sidebar-nqHbhN .themed-2-lozF.selected-g-kMVV.item-3XjbnG[aria-controls=pc-updater-tab i]::after{content:"Updater"}.sidebar-nqHbhN .themed-2-lozF.selected-g-kMVV.item-3XjbnG[aria-controls=pc-emojiutility-tab i]::after{content:"Emote Utility"}.sidebar-nqHbhN .themed-2-lozF.selected-g-kMVV.item-3XjbnG[aria-controls=theme-toggler-tab i]::after{content:"Theme Toggler"}.sidebar-nqHbhN .themed-2-lozF.selected-g-kMVV.item-3XjbnG[aria-controls=better-replies-tab i]::after{content:"Better Replies"}.sidebar-nqHbhN .themed-2-lozF.selected-g-kMVV.item-3XjbnG[aria-controls=better-status-indicators-tab i]::after{content:"Better Status Indicators"}.sidebar-nqHbhN .themed-2-lozF.selected-g-kMVV.item-3XjbnG[aria-controls=f8fix-settings-tab i]::after{content:"F8 Fix"}.sidebar-nqHbhN .themed-2-lozF.selected-g-kMVV.item-3XjbnG[aria-controls=game-activity-toggle-tab i]::after{content:"Game Activity Toggle	"}.sidebar-nqHbhN .themed-2-lozF.selected-g-kMVV.item-3XjbnG[aria-controls=powerclock-settings-tab i]::after{content:"Powerclock"}.sidebar-nqHbhN .themed-2-lozF.selected-g-kMVV.item-3XjbnG[aria-controls=powercord-message-tooltips-tab i]::after{content:"Message Tooltips"}.sidebar-nqHbhN .themed-2-lozF.selected-g-kMVV.item-3XjbnG[aria-controls=privacy-tab-tab i]::after{content:"Privacy Tab"}.sidebar-nqHbhN .themed-2-lozF.selected-g-kMVV.item-3XjbnG[aria-controls=user-details-tab i]::after{content:"User Details"}.sidebar-nqHbhN .themed-2-lozF.selected-g-kMVV.item-3XjbnG[aria-controls=vpc-shiki-tab i]::after{content:"Shiki Codeblocks"}.sidebar-nqHbhN .themed-2-lozF.selected-g-kMVV.item-3XjbnG[aria-controls=better-threads-tab i]::after{content:"Better Threads"}.sidebar-nqHbhN .themed-2-lozF.selected-g-kMVV.item-3XjbnG[aria-controls=cutecord-tab i]::after{content:"Cutecord"}.sidebar-nqHbhN .themed-2-lozF.selected-g-kMVV.item-3XjbnG[aria-controls=custom-rpc-tab i]::after{content:"Custom RPC"}.sidebar-nqHbhN .themed-2-lozF.selected-g-kMVV.item-3XjbnG[aria-controls=custom-activity-tab i]::after{content:"Custom Activities"}.menu-1QACrS{--icon-color: currentColor;--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 447 447'%3E%3Cpath fill='%23fff' d='M182.5 78.6l70-70c11.9-11.9 31.2-11.9 43.1 0s11.9 31.2 0 43.1l-70 70zm91.7 91.7l70-70c11.9-11.9 31.2-11.9 43.1 0s11.9 31.2 0 43.1l-70 70zM303 257L138.9 92.9c-2.7-2.7-2.7-7 0-9.7L163 59.1c2.7-2.7 7-2.7 9.7 0l164.1 164.1c2.7 2.7 2.7 7 0 9.7L312.7 257c-2.7 2.7-7 2.7-9.7 0zm-146.6 75.4l-92.9-92.9c-17-17-17-44.6 0-61.6l85.1-85.1L303 247.4l-85 85c-17 17-44.7 17-61.6 0zm-61-2.9l-29-29c-2.7-2.7-2.7-7 0-9.7l29-29 38.7 38.7-29 29c-2.7 2.6-7 2.6-9.7 0zm48.3 115.8L81 382.6c-21.3-21.3-21.3-55.9 0-77.2l9.7 9.7c-16 16-16 42 0 57.9l62.8 62.8c2.7 2.7 2.7 7 0 9.7s-7.1 2.5-9.8-.2z'/%3E%3C/svg%3E")}.item-1OdjEX::before{content:"";width:22px;height:22px;left:15px;margin-right:6px;margin-top:-2px;background:var(--icon-color);-webkit-mask:var(--icon) center/contain no-repeat;mask:var(--icon) center/contain no-repeat;flex-shrink:0}.layerContainer-2v_Sit>.layer-2aCOJ3>.styleFlexible-x0_sIC{min-width:224px}.submenuPaddingContainer-_k62dJ .item-1OdjEX::before,#status-picker .item-1OdjEX::before,#channel-attach .item-1OdjEX::before,.item-1OdjEX.hideInteraction-2jPGL_::before{content:none}.menu-1QACrS#message-actions .item-1OdjEX{flex-direction:row-reverse}.menu-1QACrS#message-actions .item-1OdjEX .iconContainer-1-SsTR,.menu-1QACrS#message-actions .item-1OdjEX .imageContainer-1wSPgI{margin-left:0}.menu-1QACrS#message-actions .item-1OdjEX .label-2gNW3x:not(:only-child){margin-left:8px}.menu-1QACrS#message-actions .item-1OdjEX::before{content:none}.menu-1QACrS#guild-header-popout .item-1OdjEX{flex-direction:row-reverse}.menu-1QACrS#guild-header-popout .item-1OdjEX .iconContainer-1-SsTR,.menu-1QACrS#guild-header-popout .item-1OdjEX .imageContainer-1wSPgI{margin-left:0}.menu-1QACrS#guild-header-popout .item-1OdjEX .label-2gNW3x:not(:only-child){margin-left:8px}.menu-1QACrS#guild-header-popout .item-1OdjEX::before{content:none}.menu-1QACrS#audio-device-context .item-1OdjEX{flex-direction:row-reverse}.menu-1QACrS#audio-device-context .item-1OdjEX .iconContainer-1-SsTR,.menu-1QACrS#audio-device-context .item-1OdjEX .imageContainer-1wSPgI{margin-left:0}.menu-1QACrS#audio-device-context .item-1OdjEX .label-2gNW3x:not(:only-child){margin-left:8px}.menu-1QACrS#audio-device-context .item-1OdjEX::before{content:none}.item-1OdjEX#user-settings-cog-My_Account{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M12 6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0 10c2.7 0 5.8 1.29 6 2H6c.23-.72 3.31-2 6-2m0-12C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 10c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z'/%3E%3C/svg%3E")}.item-1OdjEX#user-settings-cog-Profile_Customization{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM7.07 18.28c.43-.9 3.05-1.78 4.93-1.78s4.51.88 4.93 1.78C15.57 19.36 13.86 20 12 20s-3.57-.64-4.93-1.72zm11.29-1.45c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33A7.95 7.95 0 014 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.49-1.64 4.83zM12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6zm0 5c-.83 0-1.5-.67-1.5-1.5S11.17 8 12 8s1.5.67 1.5 1.5S12.83 11 12 11z'/%3E%3C/svg%3E")}.item-1OdjEX#user-settings-cog-Privacy___Safety{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z'/%3E%3C/svg%3E")}.item-1OdjEX#user-settings-cog-Authorized_Apps{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z'/%3E%3C/svg%3E")}.item-1OdjEX#user-settings-cog-Connections{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M17 7h-4v2h4c1.65 0 3 1.35 3 3s-1.35 3-3 3h-4v2h4c2.76 0 5-2.24 5-5s-2.24-5-5-5zm-6 8H7c-1.65 0-3-1.35-3-3s1.35-3 3-3h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-2zm-3-4h8v2H8z'/%3E%3C/svg%3E")}.item-1OdjEX#user-settings-cog-Subscriptions{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23fff' width='18' height='18'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z'/%3E%3C/svg%3E")}.item-1OdjEX#user-settings-cog-Discord_Nitro{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h24v24H0z'/%3E%3Cg fill='%2380A6FF'%3E%3Cpath fill-rule='nonzero' d='M14 5a7 7 0 100 14 7 7 0 000-14zM3 11h1a1 1 0 100-2H1a1 1 0 110-2h5a1 1 0 100-2H3.5a1.5 1.5 0 010-3H14c5.523 0 10 4.477 10 10s-4.477 10-10 10c-5.185 0-9.449-3.947-9.95-9H3a1 1 0 010-2z'/%3E%3Cpath d='M14 17a5 5 0 110-10 5 5 0 010 10zm1.827-7.55a1 1 0 00-.835-.45h-1.926a1 1 0 00-.836.45l-1.315 2a1 1 0 000 1.1l1.315 2a1 1 0 00.836.45h1.926a1 1 0 00.835-.45l1.316-2a1 1 0 000-1.1l-1.316-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")}.item-1OdjEX#user-settings-cog-Nitro_Server_Boost{--icon: url("data:image/svg+xml,%3Csvg fill='%23FFF' height='24' width='24' viewBox='0 0 8 12' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4 0L0 4v4l4 4 4-4V4L4 0zm3 7.59l-3 3-3-3V4.41l3-3 3 3v3.18z'/%3E%3Cpath d='M2 4.83v2.34l2 2 2-2V4.83l-2-2-2 2z'/%3E%3C/svg%3E")}.item-1OdjEX#user-settings-cog-Library_Inventory{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M20 6h-2.18c.11-.31.18-.65.18-1a2.996 2.996 0 00-5.5-1.65l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 12 7.4l3.38 4.6L17 10.83 14.92 8H20v6z'/%3E%3C/svg%3E")}.item-1OdjEX#user-settings-cog-Billing{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath fill='none' d='M0 0h24v24H0z'/%3E%3Cpath d='M19 14V6c0-1.1-.9-2-2-2H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zm-2 0H3V6h14v8zm-7-7c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm13 0v11c0 1.1-.9 2-2 2H4v-2h17V7h2z'/%3E%3C/svg%3E")}.item-1OdjEX#user-settings-cog-Appearance{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M14 6l-4.22 5.63 1.25 1.67L14 9.33 19 16h-8.46l-4.01-5.37L1 18h22L14 6zM5 16l1.52-2.03L8.04 16H5z'/%3E%3C/svg%3E")}.item-1OdjEX#user-settings-cog-Accessibility{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18v2z'/%3E%3C/svg%3E")}.item-1OdjEX#user-settings-cog-Voice___Video{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M12 15c1.66 0 2.99-1.34 2.99-3L15 6c0-1.66-1.34-3-3-3S9 4.34 9 6v6c0 1.66 1.34 3 3 3zm-1.2-9.1c0-.66.54-1.2 1.2-1.2s1.2.54 1.2 1.2l-.01 6.2c0 .66-.53 1.2-1.19 1.2s-1.2-.54-1.2-1.2V5.9zm6.5 6.1c0 3-2.54 5.1-5.3 5.1S6.7 15 6.7 12H5c0 3.41 2.72 6.23 6 6.72V22h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z'/%3E%3C/svg%3E")}.item-1OdjEX#user-settings-cog-Text___Images{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M2 6H0v5h.01L0 20c0 1.1.9 2 2 2h18v-2H2V6zm5 9h14l-3.5-4.5-2.5 3.01L11.5 9zM22 4h-8l-2-2H6c-1.1 0-1.99.9-1.99 2L4 16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 12H6V4h5.17l1.41 1.41.59.59H22v10z'/%3E%3C/svg%3E")}.item-1OdjEX#user-settings-cog-Notifications{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z'/%3E%3C/svg%3E")}.item-1OdjEX#user-settings-cog-Keybinds{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M0 0h24v24H0V0zm0 0h24v24H0V0z' fill='none'/%3E%3Cpath d='M20 7v10H4V7h16m0-2H4c-1.1 0-1.99.9-1.99 2L2 17c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-9 3h2v2h-2zm0 3h2v2h-2zM8 8h2v2H8zm0 3h2v2H8zm-3 0h2v2H5zm0-3h2v2H5zm3 6h8v2H8zm6-3h2v2h-2zm0-3h2v2h-2zm3 3h2v2h-2zm0-3h2v2h-2z'/%3E%3C/svg%3E")}.item-1OdjEX#user-settings-cog-Language{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23fff' width='18' height='18'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95a15.65 15.65 0 00-1.38-3.56A8.03 8.03 0 0118.92 8zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56A7.987 7.987 0 015.08 16zm2.95-8H5.08a7.987 7.987 0 014.33-3.56A15.65 15.65 0 008.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a8.03 8.03 0 01-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z'/%3E%3C/svg%3E")}.item-1OdjEX#user-settings-cog-Windows{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23fff' width='18' height='18'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M21 2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7v2H8v2h8v-2h-2v-2h7c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H3V4h18v12z'/%3E%3C/svg%3E")}.item-1OdjEX#user-settings-cog-Streamer_Mode{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M15 8v8H5V8h10m1-2H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4V7c0-.55-.45-1-1-1z'/%3E%3C/svg%3E")}.item-1OdjEX#user-settings-cog-Advanced{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M3 17v2h6v-2H3zM3 5v2h10V5H3zm10 16v-2h8v-2h-8v-2h-2v6h2zM7 9v2H3v2h4v2h2V9H7zm14 4v-2H11v2h10zm-6-4h2V7h4V5h-4V3h-2v6z'/%3E%3C/svg%3E")}.item-1OdjEX#user-settings-cog-Game_Activity{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M13 4v2.67l-1 1-1-1V4h2m7 7v2h-2.67l-1-1 1-1H20M6.67 11l1 1-1 1H4v-2h2.67M12 16.33l1 1V20h-2v-2.67l1-1M15 2H9v5.5l3 3 3-3V2zm7 7h-5.5l-3 3 3 3H22V9zM7.5 9H2v6h5.5l3-3-3-3zm4.5 4.5l-3 3V22h6v-5.5l-3-3z'/%3E%3C/svg%3E")}.item-1OdjEX#user-settings-cog-Overlay{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23fff' width='18' height='18'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M19 19H5V5h7V3H5a2 2 0 00-2 2v14a2 2 0 002 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z'/%3E%3C/svg%3E") }.item-1OdjEX#user-settings-cog-changelog{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M14 17H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2zm2-6H5c-1.11 0-2 .89-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zM5 5h14v14H5'/%3E%3C/svg%3E") }.item-1OdjEX#user-settings-cog-Hypesquad_Online{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='34' height='32'%3E%3Cdefs%3E%3Cpath id='a' d='M0 0h33.985v22.936H0z'/%3E%3C/defs%3E%3Cg fill='none' fill-rule='evenodd' transform='translate(0 5)'%3E%3Cmask id='b' fill='%23fff'%3E%3Cuse xlink:href='%23a'/%3E%3C/mask%3E%3Cpath fill='%23F8A532' d='M33.374.065L19.936 8.62c-.232.148-.42.353-.544.594L17.344 13.2a.398.398 0 01-.703 0l-2.05-3.985a1.54 1.54 0 00-.543-.594L.611.065C.274-.15-.138.208.045.556L5.616 11.16c.133.254-.056.554-.35.554H1.932c-.382 0-.54.475-.229.69l15.06 10.462a.404.404 0 00.458 0l15.06-10.461c.311-.216.154-.69-.228-.69h-3.334c-.294 0-.484-.301-.35-.555L33.938.556c.184-.348-.228-.706-.565-.491' mask='url(%23b)'/%3E%3C/g%3E%3C/svg%3E")}.item-1OdjEX#user-settings-cog-Experiments{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' fill='%23fff' width='24'%3E%3Cpath fill='none' d='M0 0h24v24H0z'/%3E%3Cpath d='M7 19c-1.1 0-2 .9-2 2h14c0-1.1-.9-2-2-2h-4v-2h3c1.1 0 2-.9 2-2h-8c-1.66 0-3-1.34-3-3 0-1.09.59-2.04 1.46-2.56C8.17 9.03 8 8.54 8 8c0-.21.04-.42.09-.62A5.01 5.01 0 005 12c0 2.76 2.24 5 5 5v2H7z'/%3E%3Cpath d='M10.56 5.51C11.91 5.54 13 6.64 13 8c0 .75-.33 1.41-.85 1.87l.59 1.62.94-.34.34.94 1.88-.68-.34-.94.94-.34-2.74-7.53-.94.34-.34-.94-1.88.68.34.94-.94.35.56 1.54z'/%3E%3Ccircle cx='10.5' cy='8' r='1.5'/%3E%3C/svg%3E")}.item-1OdjEX#user-settings-cog-Developer_Options{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' fill='%23fff' width='24'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M3 17v2h6v-2H3zM3 5v2h10V5H3zm10 16v-2h8v-2h-8v-2h-2v6h2zM7 9v2H3v2h4v2h2V9H7zm14 4v-2H11v2h10zm-6-4h2V7h4V5h-4V3h-2v6z'/%3E%3C/svg%3E")}.item-1OdjEX#textarea-context-sticker-suggestions{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M17 3v9h-5v5H3V3h14m0-2H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h10l6-6V3c0-1.1-.9-2-2-2zm-7 11H5v-2h5v2zm5-4H5V6h10v2z'/%3E%3C/svg%3E")}.item-1OdjEX#textarea-context-add-to-dictionary{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath fill='none' d='M0 0h24v24H0z'/%3E%3Cpath d='M17 19.22H5V7h7V5H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-7h-2v7.22z'/%3E%3Cpath d='M19 2h-2v3h-3c.01.01 0 2 0 2h3v2.99c.01.01 2 0 2 0V7h3V5h-3V2zM7 9h8v2H7zM7 12v2h8v-2h-3zM7 15h8v2H7z'/%3E%3C/svg%3E")}.item-1OdjEX#textarea-context-spellcheck{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M12.45 16h2.09L9.43 3H7.57L2.46 16h2.09l1.12-3h5.64l1.14 3zm-6.02-5L8.5 5.48 10.57 11H6.43zm15.16.59l-8.09 8.09L9.83 16l-1.41 1.41 5.09 5.09L23 13l-1.41-1.41z'/%3E%3C/svg%3E")}.item-1OdjEX#textarea-context-languages{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M12.87 15.07l-2.54-2.51.03-.03A17.52 17.52 0 0014.07 6H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z'/%3E%3C/svg%3E")}.item-1OdjEX[id|=textarea-context-correction]{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath fill='none' d='M0 0h24v24H0z'/%3E%3Cpath d='M16.81 8.94l-3.75-3.75L4 14.25V18h3.75l9.06-9.06zM6 16v-.92l7.06-7.06.92.92L6.92 16H6zM19.71 6.04a.996.996 0 000-1.41l-2.34-2.34a1.001 1.001 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83zM2 20h20v4H2z'/%3E%3C/svg%3E")}.item-1OdjEX[id*=copy]{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z'/%3E%3C/svg%3E")}.item-1OdjEX#textarea-context-paste{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M19 2h-4.18C14.4.84 13.3 0 12 0S9.6.84 9.18 2H5c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm7 18H5V4h2v3h10V4h2v16z'/%3E%3C/svg%3E")}.item-1OdjEX#textarea-context-cut{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M9.64 7.64c.23-.5.36-1.05.36-1.64 0-2.21-1.79-4-4-4S2 3.79 2 6s1.79 4 4 4c.59 0 1.14-.13 1.64-.36L10 12l-2.36 2.36C7.14 14.13 6.59 14 6 14c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4c0-.59-.13-1.14-.36-1.64L12 14l7 7h3v-1L9.64 7.64zM6 8c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2zm0 12c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2zm6-7.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5zM19 3l-6 6 2 2 7-7V3h-3z'/%3E%3C/svg%3E")}.item-1OdjEX#guild-context-mute-guild{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M0 15h2V9H0v6zm3 2h2V7H3v10zm19-8v6h2V9h-2zm-3 8h2V7h-2v10zM16.5 3h-9C6.67 3 6 3.67 6 4.5v15c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5v-15c0-.83-.67-1.5-1.5-1.5zM16 19H8V5h8v14z'/%3E%3C/svg%3E")}.item-1OdjEX#guild-context-unmute-guild{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6zM7.58 4.08L6.15 2.65C3.75 4.48 2.17 7.3 2.03 10.5h2a8.445 8.445 0 013.55-6.42zm12.39 6.42h2c-.15-3.2-1.73-6.02-4.12-7.85l-1.42 1.43a8.495 8.495 0 013.54 6.42z'/%3E%3C/svg%3E")}.item-1OdjEX#guild-context-invite-people{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M22 9V7h-2v2h-2v2h2v2h2v-2h2V9zM8 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zM8 13c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4zm6 5H2v-.99C2.2 16.29 5.3 15 8 15s5.8 1.29 6 2v1zM12.51 4.05C13.43 5.11 14 6.49 14 8s-.57 2.89-1.49 3.95C14.47 11.7 16 10.04 16 8s-1.53-3.7-3.49-3.95zM16.53 13.83C17.42 14.66 18 15.7 18 17v3h2v-3c0-1.45-1.59-2.51-3.47-3.17z'/%3E%3C/svg%3E")}.item-1OdjEX#guild-context-hide-muted-channels[aria-checked=true]{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M12 6a9.77 9.77 0 018.82 5.5C19.17 14.87 15.79 17 12 17s-7.17-2.13-8.82-5.5A9.77 9.77 0 0112 6m0-2C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4zm0 5a2.5 2.5 0 010 5 2.5 2.5 0 010-5m0-2c-2.48 0-4.5 2.02-4.5 4.5S9.52 16 12 16s4.5-2.02 4.5-4.5S14.48 7 12 7z'/%3E%3C/svg%3E")}.item-1OdjEX#guild-context-hide-muted-channels[aria-checked=false]{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M12 6a9.77 9.77 0 018.82 5.5 9.647 9.647 0 01-2.41 3.12l1.41 1.41c1.39-1.23 2.49-2.77 3.18-4.53C21.27 7.11 17 4 12 4c-1.27 0-2.49.2-3.64.57l1.65 1.65C10.66 6.09 11.32 6 12 6zm-1.07 1.14L13 9.21c.57.25 1.03.71 1.28 1.28l2.07 2.07c.08-.34.14-.7.14-1.07C16.5 9.01 14.48 7 12 7c-.37 0-.72.05-1.07.14zM2.01 3.87l2.68 2.68A11.738 11.738 0 001 11.5C2.73 15.89 7 19 12 19c1.52 0 2.98-.29 4.32-.82l3.42 3.42 1.41-1.41L3.42 2.45 2.01 3.87zm7.5 7.5l2.61 2.61c-.04.01-.08.02-.12.02a2.5 2.5 0 01-2.5-2.5c0-.05.01-.08.01-.13zm-3.4-3.4l1.75 1.75a4.6 4.6 0 00-.36 1.78 4.507 4.507 0 006.27 4.14l.98.98c-.88.24-1.8.38-2.75.38a9.77 9.77 0 01-8.82-5.5c.7-1.43 1.72-2.61 2.93-3.53z'/%3E%3C/svg%3E")}.item-1OdjEX#guild-context-guild-settings{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M19.43 12.98c.04-.32.07-.64.07-.98 0-.34-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46a.5.5 0 00-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65A.488.488 0 0014 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1a.566.566 0 00-.18-.03c-.17 0-.34.09-.43.25l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98 0 .33.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46a.5.5 0 00.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.06.02.12.03.18.03.17 0 .34-.09.43-.25l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zm-1.98-1.71c.04.31.05.52.05.73 0 .21-.02.43-.05.73l-.14 1.13.89.7 1.08.84-.7 1.21-1.27-.51-1.04-.42-.9.68c-.43.32-.84.56-1.25.73l-1.06.43-.16 1.13-.2 1.35h-1.4l-.19-1.35-.16-1.13-1.06-.43c-.43-.18-.83-.41-1.23-.71l-.91-.7-1.06.43-1.27.51-.7-1.21 1.08-.84.89-.7-.14-1.13c-.03-.31-.05-.54-.05-.74s.02-.43.05-.73l.14-1.13-.89-.7-1.08-.84.7-1.21 1.27.51 1.04.42.9-.68c.43-.32.84-.56 1.25-.73l1.06-.43.16-1.13.2-1.35h1.39l.19 1.35.16 1.13 1.06.43c.43.18.83.41 1.23.71l.91.7 1.06-.43 1.27-.51.7 1.21-1.07.85-.89.7.14 1.13zM12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z'/%3E%3C/svg%3E")}.item-1OdjEX#guild-context-notifications{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z'/%3E%3C/svg%3E")}.item-1OdjEX#guild-context-privacy{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M12,1L3,5v6c0,5.55,3.84,10.74,9,12c5.16-1.26,9-6.45,9-12V5L12,1z M19,11c0,1.85-0.51,3.65-1.38,5.21l-1.45-1.45 c1.29-1.94,1.07-4.58-0.64-6.29c-1.95-1.95-5.12-1.95-7.07,0c-1.95,1.95-1.95,5.12,0,7.07c1.71,1.71,4.35,1.92,6.29,0.64 l1.72,1.72c-1.19,1.42-2.73,2.51-4.47,3.04C7.98,19.69,5,15.52,5,11V6.3l7-3.11l7,3.11V11z M12,15c-1.66,0-3-1.34-3-3s1.34-3,3-3 s3,1.34,3,3S13.66,15,12,15z'/%3E%3C/svg%3E")}.item-1OdjEX#guild-context-change-nickname{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M14.06 9.02l.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z'/%3E%3C/svg%3E")}.item-1OdjEX#guild-context-create-channel{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z'/%3E%3C/svg%3E")}.item-1OdjEX#guild-context-create-category{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M20 6h-8l-2-2H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm0 12H4V6h5.17l2 2H20v10zm-8-4h2v2h2v-2h2v-2h-2v-2h-2v2h-2z'/%3E%3C/svg%3E")}.item-1OdjEX#guild-context-leave-guild{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z'/%3E%3C/svg%3E")}.item-1OdjEX#message-search-google{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M12.24 11.19v2.46h5.88c-.18 1.38-.64 2.39-1.34 3.1c-.86.86-2.2 1.8-4.54 1.8c-3.62 0-6.45-2.92-6.45-6.54s2.83-6.54 6.45-6.54c1.95 0 3.38.77 4.43 1.76L18.4 5.5C16.94 4.08 14.98 3 12.24 3C7.28 3 3.11 7.04 3.11 12s4.17 9 9.13 9c2.68 0 4.7-.88 6.28-2.52c1.62-1.62 2.13-3.91 2.13-5.75c0-.57-.04-1.1-.13-1.54H12.24z'/%3E%3C/svg%3E")}.item-1OdjEX#message-add-reaction{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M7 9.5C7 8.67 7.67 8 8.5 8s1.5.67 1.5 1.5S9.33 11 8.5 11 7 10.33 7 9.5zm5 8c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5zm3.5-6.5c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zM22 1h-2v2h-2v2h2v2h2V5h2V3h-2V1zm-2 11c0 4.42-3.58 8-8 8s-8-3.58-8-8 3.58-8 8-8c1.46 0 2.82.4 4 1.08V2.84A9.929 9.929 0 0011.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12c0-1.05-.17-2.05-.47-3H19.4c.38.93.6 1.94.6 3z'/%3E%3C/svg%3E")}.item-1OdjEX#message-reactions{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Ccircle cx='15.5' cy='9.5' r='1.5'/%3E%3Ccircle cx='8.5' cy='9.5' r='1.5'/%3E%3Cpath d='M12 18c2.28 0 4.22-1.66 5-4H7c.78 2.34 2.72 4 5 4z'/%3E%3Cpath d='M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z'/%3E%3C/svg%3E")}.item-1OdjEX#message-edit{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M14.06 9.02l.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z'/%3E%3C/svg%3E")}.item-1OdjEX#message-pin{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M 14 5 v 5 c 0 1.12 0.37 2.16 1 3 H 9 c 0.65 -0.86 1 -1.9 1 -3 V 5 H 14 M 17 3 H 7 C 6.45 3 6 3.45 6 4 c 0 0.55 0.45 1 1 1 c 0 0 0 0 0 0 l 1 0 v 5 c 0 1.66 -1.34 3 -3 3 v 2 h 5.97 v 6 l 1 1 l 1 -1 v -6 H 19 v -2 c 0 0 0 0 0 0 c -1.66 0 -3 -1.34 -3 -3 V 5 l 1 0 c 0 0 0 0 0 0 c 0.55 0 1 -0.45 1 -1 C 18 3.45 17.55 3 17 3 L 17 3 z'/%3E%3C/svg%3E")}.item-1OdjEX#message-unpin{--icon: url("data:image/svg+xml,%3Csvg height='24' width='24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 9H8c0 1.66-1.34 3-3 3v2h5.97v7l1 1 1-1v-9H9c.65-.86 1-1.9 1-3zM14 4v5c0 1.12.495 1.941 1.125 2.781L17.5 14H19v-2c-1.66 0-3-1.34-3-3V4h1c.55 0 1-.45 1-1s-.45-1-1-1m0 0H7c-.55 0-1 .45-1 1s.45 1 1 1h1v.991l2 1.818V4h4'/%3E%3Cpath d='M5.47 3.92L4.06 5.33l14.62 14.62 1.41-1.41L5.47 3.92z'/%3E%3C/svg%3E")}.item-1OdjEX#message-reply{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z'/%3E%3C/svg%3E")}.item-1OdjEX#message-thread{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='none'%3E%3Cpath fill='black' d='M4 16v-2h4v-4H4V8h4V4h2v4h4V4h2v4h4v2h-4v2h-2v-2h-4v4h2v2h-2v4H8v-4H4z'/%3E%3Cpath fill='black' d='M13.44 12.96a.96.96 0 00-.96.96v6.301c0 .53.43.96.96.96h.96a.24.24 0 01.24.24v2.039a.24.24 0 00.4.178l2.446-2.21a.96.96 0 01.643-.247h4.43a.96.96 0 00.96-.96V13.92a.96.96 0 00-.96-.96h-9.12z'/%3E%3C/svg%3E")}.item-1OdjEX#message-mark-unread{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M12 6a9.77 9.77 0 018.82 5.5 9.647 9.647 0 01-2.41 3.12l1.41 1.41c1.39-1.23 2.49-2.77 3.18-4.53C21.27 7.11 17 4 12 4c-1.27 0-2.49.2-3.64.57l1.65 1.65C10.66 6.09 11.32 6 12 6zm-1.07 1.14L13 9.21c.57.25 1.03.71 1.28 1.28l2.07 2.07c.08-.34.14-.7.14-1.07C16.5 9.01 14.48 7 12 7c-.37 0-.72.05-1.07.14zM2.01 3.87l2.68 2.68A11.738 11.738 0 001 11.5C2.73 15.89 7 19 12 19c1.52 0 2.98-.29 4.32-.82l3.42 3.42 1.41-1.41L3.42 2.45 2.01 3.87zm7.5 7.5l2.61 2.61c-.04.01-.08.02-.12.02a2.5 2.5 0 01-2.5-2.5c0-.05.01-.08.01-.13zm-3.4-3.4l1.75 1.75a4.6 4.6 0 00-.36 1.78 4.507 4.507 0 006.27 4.14l.98.98c-.88.24-1.8.38-2.75.38a9.77 9.77 0 01-8.82-5.5c.7-1.43 1.72-2.61 2.93-3.53z'/%3E%3C/svg%3E")}.item-1OdjEX#message-apps{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z'/%3E%3C/svg%3E")}.item-1OdjEX#message-copy-link{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M17 7h-4v2h4c1.65 0 3 1.35 3 3s-1.35 3-3 3h-4v2h4c2.76 0 5-2.24 5-5s-2.24-5-5-5zm-6 8H7c-1.65 0-3-1.35-3-3s1.35-3 3-3h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-2zm-3-4h8v2H8z'/%3E%3C/svg%3E")}.item-1OdjEX#message-save-image{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M19 12v7H5v-7H3v7c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7h-2zm-6 .67l2.59-2.58L17 11.5l-5 5-5-5 1.41-1.41L11 12.67V3h2v9.67z'/%3E%3C/svg%3E")}.item-1OdjEX#message-copy-native-link{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M17 7h-4v2h4c1.65 0 3 1.35 3 3s-1.35 3-3 3h-4v2h4c2.76 0 5-2.24 5-5s-2.24-5-5-5zm-6 8H7c-1.65 0-3-1.35-3-3s1.35-3 3-3h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-2zm-3-4h8v2H8z'/%3E%3C/svg%3E")}.item-1OdjEX#message-tts{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M17 20c-.29 0-.56-.06-.76-.15-.71-.37-1.21-.88-1.71-2.38-.51-1.56-1.47-2.29-2.39-3-.79-.61-1.61-1.24-2.32-2.53C9.29 10.98 9 9.93 9 9c0-2.8 2.2-5 5-5s5 2.2 5 5h2c0-3.93-3.07-7-7-7S7 5.07 7 9c0 1.26.38 2.65 1.07 3.9.91 1.65 1.98 2.48 2.85 3.15.81.62 1.39 1.07 1.71 2.05.6 1.82 1.37 2.84 2.73 3.55A3.999 3.999 0 0021 18h-2c0 1.1-.9 2-2 2zM7.64 2.64L6.22 1.22C4.23 3.21 3 5.96 3 9s1.23 5.79 3.22 7.78l1.41-1.41C6.01 13.74 5 11.49 5 9s1.01-4.74 2.64-6.36zM11.5 9a2.5 2.5 0 005 0 2.5 2.5 0 00-5 0z'/%3E%3C/svg%3E")}.item-1OdjEX#message-open-native-link{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M19 4H5a2 2 0 00-2 2v12a2 2 0 002 2h4v-2H5V8h14v10h-4v2h4c1.1 0 2-.9 2-2V6a2 2 0 00-2-2zm-7 6l-4 4h3v6h2v-6h3l-4-4z'/%3E%3C/svg%3E")}.item-1OdjEX#message-remove-reactions{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Ccircle cx='9' cy='13' r='1.25'/%3E%3Cpath d='M17.5 10c.75 0 1.47-.09 2.17-.24.21.71.33 1.46.33 2.24 0 1.22-.28 2.37-.77 3.4l1.49 1.49A9.981 9.981 0 0022 12c0-5.52-4.48-10-10-10-1.78 0-3.44.47-4.89 1.28l5.33 5.33c1.49.88 3.21 1.39 5.06 1.39zm-6.84-5.88c.43-.07.88-.12 1.34-.12 2.9 0 5.44 1.56 6.84 3.88-.43.07-.88.12-1.34.12-2.9 0-5.44-1.56-6.84-3.88zM1.89 3.72l2.19 2.19A9.958 9.958 0 002 12c0 5.52 4.48 10 10 10 2.29 0 4.4-.78 6.09-2.08l2.19 2.19 1.41-1.41L3.31 2.31 1.89 3.72zm14.77 14.77A7.91 7.91 0 0112 20c-4.41 0-8-3.59-8-8 0-.05.01-.1 0-.14a9.946 9.946 0 003.64-2.39l9.02 9.02zM6.23 8.06c-.53.55-1.14 1.03-1.81 1.41.26-.77.63-1.48 1.09-2.13l.72.72z'/%3E%3C/svg%3E")}.item-1OdjEX#message-delete{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z'/%3E%3C/svg%3E")}.item-1OdjEX#message-report-message-btn{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3zM19 14.9L14.9 19H9.1L5 14.9V9.1L9.1 5h5.8L19 9.1v5.8z'/%3E%3Ccircle cx='12' cy='16' r='1'/%3E%3Cpath d='M11 7h2v7h-2z'/%3E%3C/svg%3E")}.menu-1QACrS#message-actions .submenuContainer-3EVTeH>.item-1OdjEX{flex-direction:unset}.menu-1QACrS#message-actions .submenuContainer-3EVTeH>.item-1OdjEX .iconContainer-1-SsTR,.menu-1QACrS#message-actions .submenuContainer-3EVTeH>.item-1OdjEX .imageContainer-1wSPgI{margin-left:8px}.menu-1QACrS#message-actions .submenuContainer-3EVTeH>.item-1OdjEX .label-2gNW3x:not(:only-child){margin-left:0}.menu-1QACrS#message-actions .submenuContainer-3EVTeH>.item-1OdjEX::before{content:"";--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z'/%3E%3C/svg%3E")}.item-1OdjEX#image-context-save-image{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M19 12v7H5v-7H3v7c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7h-2zm-6 .67l2.59-2.58L17 11.5l-5 5-5-5 1.41-1.41L11 12.67V3h2v9.67z'/%3E%3C/svg%3E")}.item-1OdjEX#image-context-open-native-link{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M19 4H5a2 2 0 00-2 2v12a2 2 0 002 2h4v-2H5V8h14v10h-4v2h4c1.1 0 2-.9 2-2V6a2 2 0 00-2-2zm-7 6l-4 4h3v6h2v-6h3l-4-4z'/%3E%3C/svg%3E")}.item-1OdjEX[id*=mark][id$=read]{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M18 7l-1.41-1.41-6.34 6.34 1.41 1.41L18 7zm4.24-1.41L11.66 16.17 7.48 12l-1.41 1.41L11.66 19l12-12-1.42-1.41zM.41 13.41L6 19l1.41-1.41L1.83 12 .41 13.41z'/%3E%3C/svg%3E")}.item-1OdjEX#user-context-user-profile{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M12 6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0 10c2.7 0 5.8 1.29 6 2H6c.23-.72 3.31-2 6-2m0-12C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 10c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z'/%3E%3C/svg%3E")}.item-1OdjEX#user-context-mention{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M12 1.95c-5.52 0-10 4.48-10 10s4.48 10 10 10h5v-2h-5c-4.34 0-8-3.66-8-8s3.66-8 8-8 8 3.66 8 8v1.43c0 .79-.71 1.57-1.5 1.57s-1.5-.78-1.5-1.57v-1.43c0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5c1.38 0 2.64-.56 3.54-1.47.65.89 1.77 1.47 2.96 1.47 1.97 0 3.5-1.6 3.5-3.57v-1.43c0-5.52-4.48-10-10-10zm0 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z'/%3E%3C/svg%3E")}.item-1OdjEX#user-context-message-user{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M4 4h16v12H5.17L4 17.17V4m0-2c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H4zm2 10h8v2H6v-2zm0-3h12v2H6V9zm0-3h12v2H6V6z'/%3E%3C/svg%3E")}.item-1OdjEX#user-context-call{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M6.54 5c.06.89.21 1.76.45 2.59l-1.2 1.2c-.41-1.2-.67-2.47-.76-3.79h1.51m9.86 12.02c.85.24 1.72.39 2.6.45v1.49c-1.32-.09-2.59-.35-3.8-.75l1.2-1.19M7.5 3H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.49c0-.55-.45-1-1-1-1.24 0-2.45-.2-3.57-.57a.84.84 0 00-.31-.05c-.26 0-.51.1-.71.29l-2.2 2.2a15.149 15.149 0 01-6.59-6.59l2.2-2.2c.28-.28.36-.67.25-1.02A11.36 11.36 0 018.5 4c0-.55-.45-1-1-1z'/%3E%3C/svg%3E")}.item-1OdjEX#user-context-note{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath fill='none' d='M0 0h24v24H0z'/%3E%3Cpath d='M3 10h11v2H3v-2zm0-2h11V6H3v2zm0 8h7v-2H3v2zm15.01-3.13l.71-.71a.996.996 0 011.41 0l.71.71c.39.39.39 1.02 0 1.41l-.71.71-2.12-2.12zm-.71.71l-5.3 5.3V21h2.12l5.3-5.3-2.12-2.12z'/%3E%3C/svg%3E")}.item-1OdjEX#user-context-add-friend-nickname{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17l-.59.59-.58.58V4h16v12zm-9.5-2H18v-2h-5.5zm3.86-5.87c.2-.2.2-.51 0-.71l-1.77-1.77c-.2-.2-.51-.2-.71 0L6 11.53V14h2.47l5.89-5.87z'/%3E%3C/svg%3E")}.item-1OdjEX#user-context-close-dm{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z'/%3E%3C/svg%3E")}.item-1OdjEX#user-context-watch-stream{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M9 10v8l7-4zm12-4h-7.58l3.29-3.29L16 2l-4 4h-.03l-4-4-.69.71L10.56 6H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 14H3V8h18v12z'/%3E%3C/svg%3E")}.item-1OdjEX[id|=user-context-spotify-play]{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='32' width='32' viewBox='0 0 168 168'%3E%3Cpath fill='%231ED760' d='M83.837 20.21c-35.15 0-63.645 28.495-63.645 63.644 0 35.151 28.496 63.644 63.645 63.644 35.153 0 63.645-28.493 63.645-63.644 0-35.147-28.492-63.64-63.646-63.64l.001-.003zm29.187 91.793a3.965 3.965 0 01-5.457 1.315c-14.943-9.127-33.754-11.195-55.908-6.133a3.968 3.968 0 01-1.766-7.737c24.244-5.539 45.04-3.154 61.816 7.099a3.967 3.967 0 011.315 5.456zm7.79-17.33c-1.436 2.336-4.492 3.073-6.825 1.636-17.107-10.515-43.185-13.56-63.42-7.418a4.969 4.969 0 01-6.193-3.306 4.97 4.97 0 013.31-6.189c23.113-7.013 51.848-3.616 71.494 8.457 2.333 1.436 3.07 4.491 1.634 6.822v-.001zm.669-18.045c-20.513-12.183-54.355-13.303-73.94-7.36a5.952 5.952 0 11-3.456-11.392c22.482-6.825 59.855-5.506 83.471 8.514a5.946 5.946 0 012.083 8.157 5.948 5.948 0 01-8.155 2.081z'/%3E%3C/svg%3E")}.item-1OdjEX[id|=user-context-spotify-sync]{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath fill='none' d='M0 0h24v24H0z'/%3E%3Cpath d='M12 3a9 9 0 00-9 9v7c0 1.1.9 2 2 2h4v-8H5v-1c0-3.87 3.13-7 7-7s7 3.13 7 7v1h-4v8h4c1.1 0 2-.9 2-2v-7a9 9 0 00-9-9zM7 15v4H5v-4h2zm12 4h-2v-4h2v4z'/%3E%3C/svg%3E")}.item-1OdjEX#user-context-ask-to-join{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M11 7L9.6 8.4l2.6 2.6H2v2h10.2l-2.6 2.6L11 17l5-5-5-5zm9 12h-8v2h8c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-8v2h8v14z'/%3E%3C/svg%3E")}.item-1OdjEX#user-context-mute[aria-checked=false]{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M10.8 4.9c0-.66.54-1.2 1.2-1.2s1.2.54 1.2 1.2l-.01 3.91L15 10.6V5c0-1.66-1.34-3-3-3-1.54 0-2.79 1.16-2.96 2.65l1.76 1.76V4.9zM19 11h-1.7c0 .58-.1 1.13-.27 1.64l1.27 1.27c.44-.88.7-1.87.7-2.91zM4.41 2.86L3 4.27l6 6V11c0 1.66 1.34 3 3 3 .23 0 .44-.03.65-.08l1.66 1.66c-.71.33-1.5.52-2.31.52-2.76 0-5.3-2.1-5.3-5.1H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28a7.13 7.13 0 002.55-.9l4.2 4.2 1.41-1.41L4.41 2.86z'/%3E%3C/svg%3E")}.item-1OdjEX#user-context-mute[aria-checked=true]{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm-1-9c0-.55.45-1 1-1s1 .45 1 1v6c0 .55-.45 1-1 1s-1-.45-1-1V5zm6 6c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z'/%3E%3C/svg%3E")}.item-1OdjEX#user-context-deafen[aria-checked=false]{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M12 4c3.87 0 7 3.13 7 7v1h-4v.17L16.83 14H19v2.17l2 2V11a9 9 0 00-9-9c-2.02 0-3.88.67-5.38 1.8l1.43 1.43A6.878 6.878 0 0112 4zM2.1 2.1L.69 3.51l3.33 3.33A8.98 8.98 0 003 11v7c0 1.1.9 2 2 2h4v-8H5v-1c0-.94.19-1.83.52-2.65L15 17.83V20h2.17l1 1H12v2h7c.34 0 .65-.09.93-.24l.55.55 1.41-1.41L2.1 2.1zM7 14v4H5v-4h2z'/%3E%3C/svg%3E")}.item-1OdjEX#user-context-deafen[aria-checked=true]{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M19 14v4h-2v-4h2M7 14v4H6c-.55 0-1-.45-1-1v-3h2m5-13a9 9 0 00-9 9v7c0 1.66 1.34 3 3 3h3v-8H5v-2c0-3.87 3.13-7 7-7s7 3.13 7 7v2h-4v8h4v1h-7v2h6c1.66 0 3-1.34 3-3V10a9 9 0 00-9-9z'/%3E%3C/svg%3E")}.item-1OdjEX#user-context-disable-video[aria-checked=false]{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M9.56 8l-2-2-4.15-4.14L2 3.27 4.73 6H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.21 0 .39-.08.55-.18L19.73 21l1.41-1.41-8.86-8.86L9.56 8zM5 16V8h1.73l8 8H5zm10-8v2.61l6 6V6.5l-4 4V7c0-.55-.45-1-1-1h-5.61l2 2H15z'/%3E%3C/svg%3E")}.item-1OdjEX#user-context-disable-video[aria-checked=true]{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M15 8v8H5V8h10m1-2H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4V7c0-.55-.45-1-1-1z'/%3E%3C/svg%3E")}.item-1OdjEX#user-context-change-nickname{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M14.06 9.02l.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83a.996.996 0 000-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z'/%3E%3C/svg%3E")}.item-1OdjEX#user-context-apps{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z'/%3E%3C/svg%3E")}.item-1OdjEX#user-context-invite-to-server{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M22 9V7h-2v2h-2v2h2v2h2v-2h2V9zM8 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zM8 13c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4zm6 5H2v-.99C2.2 16.29 5.3 15 8 15s5.8 1.29 6 2v1zM12.51 4.05C13.43 5.11 14 6.49 14 8s-.57 2.89-1.49 3.95C14.47 11.7 16 10.04 16 8s-1.53-3.7-3.49-3.95zM16.53 13.83C17.42 14.66 18 15.7 18 17v3h2v-3c0-1.45-1.59-2.51-3.47-3.17z'/%3E%3C/svg%3E")}.item-1OdjEX#user-context-add-friend{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M20 9V6h-2v3h-3v2h3v3h2v-3h3V9h-3zM9 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm6.39 8.56C13.71 13.7 11.53 13 9 13s-4.71.7-6.39 1.56A2.97 2.97 0 001 17.22V20h16v-2.78c0-1.12-.61-2.15-1.61-2.66zM15 18H3v-.78c0-.38.2-.72.52-.88C4.71 15.73 6.63 15 9 15c2.37 0 4.29.73 5.48 1.34.32.16.52.5.52.88V18z'/%3E%3C/svg%3E")}.item-1OdjEX#user-context-remove-friend{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M14 8c0-2.21-1.79-4-4-4S6 5.79 6 8s1.79 4 4 4 4-1.79 4-4zm-2 0c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zM2 18v2h16v-2c0-2.66-5.33-4-8-4s-8 1.34-8 4zm2 0c.2-.71 3.3-2 6-2 2.69 0 5.77 1.28 6 2H4zM17 10h6v2h-6z'/%3E%3C/svg%3E")}.item-1OdjEX#user-context-block{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8 0-1.85.63-3.55 1.69-4.9L16.9 18.31A7.902 7.902 0 0112 20zm6.31-3.1L7.1 5.69A7.902 7.902 0 0112 4c4.42 0 8 3.58 8 8 0 1.85-.63 3.55-1.69 4.9z'/%3E%3C/svg%3E")}.item-1OdjEX#user-context-mute-channel{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M0 15h2V9H0v6zm3 2h2V7H3v10zm19-8v6h2V9h-2zm-3 8h2V7h-2v10zM16.5 3h-9C6.67 3 6 3.67 6 4.5v15c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5v-15c0-.83-.67-1.5-1.5-1.5zM16 19H8V5h8v14z'/%3E%3C/svg%3E")}.item-1OdjEX#user-context-remove{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z'/%3E%3C/svg%3E")}.item-1OdjEX#user-context-kick{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M20 17.17l-3.37-3.38c.64.22 1.23.48 1.77.76.97.51 1.58 1.52 1.6 2.62zm1.19 4.02l-1.41 1.41-2.61-2.6H4v-2.78c0-1.12.61-2.15 1.61-2.66 1.29-.66 2.87-1.22 4.67-1.45L1.39 4.22 2.8 2.81l18.39 18.38zM15.17 18l-3-3H12c-2.37 0-4.29.73-5.48 1.34-.32.16-.52.5-.52.88V18h9.17zM12 6c1.1 0 2 .9 2 2 0 .86-.54 1.59-1.3 1.87l1.48 1.48a3.999 3.999 0 10-5.53-5.53l1.48 1.48A1.99 1.99 0 0112 6z'/%3E%3C/svg%3E")}.item-1OdjEX#user-context-ban{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M2.3 20.28l9.6-9.6-1.4-1.42-.72.71a.996.996 0 01-1.41 0l-.71-.71a.996.996 0 010-1.41l5.66-5.66a.996.996 0 011.41 0l.71.71c.39.39.39 1.02 0 1.41l-.71.69 1.42 1.43a.996.996 0 011.41 0c.39.39.39 1.03 0 1.42l1.41 1.41.71-.71c.39-.39 1.03-.39 1.42 0l.7.71c.39.39.39 1.03 0 1.42l-5.65 5.65c-.39.39-1.03.39-1.42 0l-.7-.7a.99.99 0 010-1.42l.7-.71-1.41-1.41-9.61 9.61a.996.996 0 01-1.41 0c-.39-.39-.39-1.03 0-1.42M20 19a2 2 0 012 2v1H12v-1a2 2 0 012-2h6z'/%3E%3C/svg%3E")}.item-1OdjEX#user-context-voice-mute[aria-checked=false]{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M10.8 4.9c0-.66.54-1.2 1.2-1.2s1.2.54 1.2 1.2l-.01 3.91L15 10.6V5c0-1.66-1.34-3-3-3-1.54 0-2.79 1.16-2.96 2.65l1.76 1.76V4.9zM19 11h-1.7c0 .58-.1 1.13-.27 1.64l1.27 1.27c.44-.88.7-1.87.7-2.91zM4.41 2.86L3 4.27l6 6V11c0 1.66 1.34 3 3 3 .23 0 .44-.03.65-.08l1.66 1.66c-.71.33-1.5.52-2.31.52-2.76 0-5.3-2.1-5.3-5.1H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28a7.13 7.13 0 002.55-.9l4.2 4.2 1.41-1.41L4.41 2.86z'/%3E%3C/svg%3E")}.item-1OdjEX#user-context-voice-mute[aria-checked=true]{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm-1-9c0-.55.45-1 1-1s1 .45 1 1v6c0 .55-.45 1-1 1s-1-.45-1-1V5zm6 6c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z'/%3E%3C/svg%3E")}.item-1OdjEX#user-context-voice-deafen[aria-checked=false]{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M12 4c3.87 0 7 3.13 7 7v1h-4v.17L16.83 14H19v2.17l2 2V11a9 9 0 00-9-9c-2.02 0-3.88.67-5.38 1.8l1.43 1.43A6.878 6.878 0 0112 4zM2.1 2.1L.69 3.51l3.33 3.33A8.98 8.98 0 003 11v7c0 1.1.9 2 2 2h4v-8H5v-1c0-.94.19-1.83.52-2.65L15 17.83V20h2.17l1 1H12v2h7c.34 0 .65-.09.93-.24l.55.55 1.41-1.41L2.1 2.1zM7 14v4H5v-4h2z'/%3E%3C/svg%3E")}.item-1OdjEX#user-context-voice-deafen[aria-checked=true]{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M19 14v4h-2v-4h2M7 14v4H6c-.55 0-1-.45-1-1v-3h2m5-13a9 9 0 00-9 9v7c0 1.66 1.34 3 3 3h3v-8H5v-2c0-3.87 3.13-7 7-7s7 3.13 7 7v2h-4v8h4v1h-7v2h6c1.66 0 3-1.34 3-3V10a9 9 0 00-9-9z'/%3E%3C/svg%3E")}.item-1OdjEX#user-context-roles{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M12.36 6l.4 2H18v6h-3.36l-.4-2H7V6h5.36M14 4H5v17h2v-7h5.6l.4 2h7V6h-5.6L14 4z'/%3E%3C/svg%3E")}.item-1OdjEX#user-context-permissions{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M14 12h4v1.5h-4zM14 15h4v1.5h-4z'/%3E%3Cpath d='M20 7h-5V4c0-1.1-.9-2-2-2h-2c-1.1 0-2 .9-2 2v3H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm-9 0V4h2v5h-2V7zm9 13H4V9h5c0 1.1.9 2 2 2h2c1.1 0 2-.9 2-2h5v11z'/%3E%3Ccircle cx='9' cy='13.5' r='1.5'/%3E%3Cpath d='M11.08 16.18c-.64-.28-1.34-.43-2.08-.43s-1.44.15-2.08.43c-.56.24-.92.78-.92 1.39V18h6v-.43c0-.61-.36-1.15-.92-1.39z'/%3E%3C/svg%3E")}.item-1OdjEX#user-context-voice-move{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M19 15l-6 6-1.42-1.42L15.17 16H4V4h2v10h9.17l-3.59-3.58L13 9l6 6z'/%3E%3C/svg%3E")}.item-1OdjEX#user-context-leave-thread{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z'/%3E%3C/svg%3E")}.item-1OdjEX#gdm-context-change-icon{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M18 20H4V6h9V4H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-9h-2v9zm-7.79-3.17l-1.96-2.36L5.5 18h11l-3.54-4.71zM20 4V1h-2v3h-3c.01.01 0 2 0 2h3v2.99c.01.01 2 0 2 0V6h3V4h-3z'/%3E%3C/svg%3E");-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex;padding:6px 8px;min-height:32px}.item-1OdjEX#gdm-context-change-icon .labelContainer-2vJzYL{padding:0;min-height:0}.item-1OdjEX#gdm-context-remove-icon{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M19 5v11.17l2 2V5c0-1.1-.9-2-2-2H5.83l2 2H19zM2.81 2.81L1.39 4.22 3 5.83V19c0 1.1.9 2 2 2h13.17l1.61 1.61 1.41-1.41L2.81 2.81zM5 19V7.83l7.07 7.07-.82 1.1L9 13l-3 4h8.17l2 2H5z'/%3E%3C/svg%3E")}.item-1OdjEX#gdm-context-unmute-channel{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6zM7.58 4.08L6.15 2.65C3.75 4.48 2.17 7.3 2.03 10.5h2a8.445 8.445 0 013.55-6.42zm12.39 6.42h2c-.15-3.2-1.73-6.02-4.12-7.85l-1.42 1.43a8.495 8.495 0 013.54 6.42z'/%3E%3C/svg%3E")}.item-1OdjEX#gdm-context-leave-channel{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z'/%3E%3C/svg%3E")}.item-1OdjEX#guild-context-folder-settings{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M19.43 12.98c.04-.32.07-.64.07-.98 0-.34-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46a.5.5 0 00-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65A.488.488 0 0014 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1a.566.566 0 00-.18-.03c-.17 0-.34.09-.43.25l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98 0 .33.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46a.5.5 0 00.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.06.02.12.03.18.03.17 0 .34-.09.43-.25l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zm-1.98-1.71c.04.31.05.52.05.73 0 .21-.02.43-.05.73l-.14 1.13.89.7 1.08.84-.7 1.21-1.27-.51-1.04-.42-.9.68c-.43.32-.84.56-1.25.73l-1.06.43-.16 1.13-.2 1.35h-1.4l-.19-1.35-.16-1.13-1.06-.43c-.43-.18-.83-.41-1.23-.71l-.91-.7-1.06.43-1.27.51-.7-1.21 1.08-.84.89-.7-.14-1.13c-.03-.31-.05-.54-.05-.74s.02-.43.05-.73l.14-1.13-.89-.7-1.08-.84.7-1.21 1.27.51 1.04.42.9-.68c.43-.32.84-.56 1.25-.73l1.06-.43.16-1.13.2-1.35h1.39l.19 1.35.16 1.13 1.06.43c.43.18.83.41 1.23.71l.91.7 1.06-.43 1.27-.51.7 1.21-1.07.85-.89.7.14 1.13zM12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z'/%3E%3C/svg%3E")}.item-1OdjEX#guild-context-folder-collapse{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z'/%3E%3C/svg%3E")}.item-1OdjEX#spotify-toggle-no-accounts{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M15.18 10.94c.2-.44.32-.92.32-1.44C15.5 7.57 13.93 6 12 6c-.52 0-1 .12-1.44.32l4.62 4.62z'/%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM4 12c0-1.85.63-3.55 1.69-4.9l2.86 2.86a3.47 3.47 0 002.99 2.99l2.2 2.2c-.57-.1-1.15-.15-1.74-.15-2.32 0-4.45.8-6.14 2.12A7.957 7.957 0 014 12zm8 8c-1.74 0-3.34-.56-4.65-1.5C8.66 17.56 10.26 17 12 17s3.34.56 4.65 1.5c-1.31.94-2.91 1.5-4.65 1.5zm6.31-3.1L7.1 5.69A7.902 7.902 0 0112 4c4.42 0 8 3.58 8 8 0 1.85-.63 3.54-1.69 4.9z'/%3E%3C/svg%3E")}.item-1OdjEX#channel-context-hide-voice-names{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M12 6a9.77 9.77 0 018.82 5.5 9.647 9.647 0 01-2.41 3.12l1.41 1.41c1.39-1.23 2.49-2.77 3.18-4.53C21.27 7.11 17 4 12 4c-1.27 0-2.49.2-3.64.57l1.65 1.65C10.66 6.09 11.32 6 12 6zm-1.07 1.14L13 9.21c.57.25 1.03.71 1.28 1.28l2.07 2.07c.08-.34.14-.7.14-1.07C16.5 9.01 14.48 7 12 7c-.37 0-.72.05-1.07.14zM2.01 3.87l2.68 2.68A11.738 11.738 0 001 11.5C2.73 15.89 7 19 12 19c1.52 0 2.98-.29 4.32-.82l3.42 3.42 1.41-1.41L3.42 2.45 2.01 3.87zm7.5 7.5l2.61 2.61c-.04.01-.08.02-.12.02a2.5 2.5 0 01-2.5-2.5c0-.05.01-.08.01-.13zm-3.4-3.4l1.75 1.75a4.6 4.6 0 00-.36 1.78 4.507 4.507 0 006.27 4.14l.98.98c-.88.24-1.8.38-2.75.38a9.77 9.77 0 01-8.82-5.5c.7-1.43 1.72-2.61 2.93-3.53z'/%3E%3C/svg%3E")}.item-1OdjEX#channel-context-mute-channel{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M0 15h2V9H0v6zm3 2h2V7H3v10zm19-8v6h2V9h-2zm-3 8h2V7h-2v10zM16.5 3h-9C6.67 3 6 3.67 6 4.5v15c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5v-15c0-.83-.67-1.5-1.5-1.5zM16 19H8V5h8v14z'/%3E%3C/svg%3E")}.item-1OdjEX#channel-context-channel-notifications{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z'/%3E%3C/svg%3E")}.item-1OdjEX#channel-context-edit-channel{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M14.06 9.02l.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83a.996.996 0 000-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z'/%3E%3C/svg%3E")}.item-1OdjEX#channel-context-invite-people{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M22 9V7h-2v2h-2v2h2v2h2v-2h2V9zM8 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zM8 13c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4zm6 5H2v-.99C2.2 16.29 5.3 15 8 15s5.8 1.29 6 2v1zM12.51 4.05C13.43 5.11 14 6.49 14 8s-.57 2.89-1.49 3.95C14.47 11.7 16 10.04 16 8s-1.53-3.7-3.49-3.95zM16.53 13.83C17.42 14.66 18 15.7 18 17v3h2v-3c0-1.45-1.59-2.51-3.47-3.17z'/%3E%3C/svg%3E")}.item-1OdjEX#channel-context-clone-channel{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M18 2H9c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H9V4h9v12zM3 15v-2h2v2H3zm0-5.5h2v2H3v-2zM10 20h2v2h-2v-2zm-7-1.5v-2h2v2H3zM5 22c-1.1 0-2-.9-2-2h2v2zm3.5 0h-2v-2h2v2zm5 0v-2h2c0 1.1-.9 2-2 2zM5 6v2H3c0-1.1.9-2 2-2z'/%3E%3C/svg%3E")}.item-1OdjEX#channel-context-create-text-channel{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z'/%3E%3C/svg%3E")}.item-1OdjEX#channel-context-create-voice-channel{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z'/%3E%3C/svg%3E")}.item-1OdjEX#channel-context-delete-channel{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z'/%3E%3C/svg%3E")}.item-1OdjEX#channel-context-collapse-category{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z'/%3E%3C/svg%3E")}.item-1OdjEX#channel-context-collapse-all-categories{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M4 15h16v-2H4v2zm0 4h16v-2H4v2zm0-8h16V9H4v2zm0-6v2h16V5H4z'/%3E%3C/svg%3E")}.item-1OdjEX#user-profile-actions-user-remove{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M14 8c0-2.21-1.79-4-4-4S6 5.79 6 8s1.79 4 4 4 4-1.79 4-4zm-2 0c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zM2 18v2h16v-2c0-2.66-5.33-4-8-4s-8 1.34-8 4zm2 0c.2-.71 3.3-2 6-2 2.69 0 5.77 1.28 6 2H4zM17 10h6v2h-6z'/%3E%3C/svg%3E")}.item-1OdjEX#user-profile-actions-user-block{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8 0-1.85.63-3.55 1.69-4.9L16.9 18.31A7.902 7.902 0 0112 20zm6.31-3.1L7.1 5.69A7.902 7.902 0 0112 4c4.42 0 8 3.58 8 8 0 1.85-.63 3.55-1.69 4.9z'/%3E%3C/svg%3E")}.item-1OdjEX#user-profile-actions-user-message{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M4 4h16v12H5.17L4 17.17V4m0-2c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H4zm2 10h8v2H6v-2zm0-3h12v2H6V9zm0-3h12v2H6V6z'/%3E%3C/svg%3E")}.item-1OdjEX#thread-context-thread-notifications{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z'/%3E%3C/svg%3E")}.item-1OdjEX#thread-context-join-thread{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M11 7L9.6 8.4l2.6 2.6H2v2h10.2l-2.6 2.6L11 17l5-5-5-5zm9 12h-8v2h8c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-8v2h8v14z'/%3E%3C/svg%3E")}.item-1OdjEX#thread-context-leave-thread{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z'/%3E%3C/svg%3E")}.item-1OdjEX#thread-context-edit-thread{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M14.06 9.02l.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83a.996.996 0 000-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z'/%3E%3C/svg%3E")}.item-1OdjEX#thread-context-open{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M20 6v12h-5v-12h5m0-2h-5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5c1.1 0 2-.9 2-2v-12c0-1.1-.9-2-2-2zM9 6v12h-5v-12h5m0-2h-5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5c1.1 0 2-.9 2-2v-12c0-1.1-.9-2-2-2z'/%3E%3C/svg%3E")}.item-1OdjEX#thread-context-archive-thread{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M19 3H5c-1.1 0-2 .9-2 2v14a2 2 0 002 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5v-3h3.56c.69 1.19 1.97 2 3.45 2s2.75-.81 3.45-2H19v3zm0-5h-4.99c0 1.1-.9 2-2 2s-2-.9-2-2H5V5h14v9z'/%3E%3C/svg%3E")}.item-1OdjEX#thread-context-auto-archive-thread{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M20.54 5.23l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27zM6.24 5h11.52l.81.97H5.44l.8-.97zM5 19V8h14v11H5zm8.45-9h-2.9v3H8l4 4 4-4h-2.55z'/%3E%3C/svg%3E")}.item-1OdjEX#thread-context-unarchive-thread{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M17.65 6.35A7.958 7.958 0 0012 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0112 18c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z'/%3E%3C/svg%3E")}.item-1OdjEX#thread-context-delete-channel{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z'/%3E%3C/svg%3E")}.item-1OdjEX#friend-row-start-video-call{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M15 8v8H5V8h10m1-2H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4V7c0-.55-.45-1-1-1z'/%3E%3C/svg%3E")}.item-1OdjEX#friend-row-start-voice-call{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M6.54 5c.06.89.21 1.76.45 2.59l-1.2 1.2c-.41-1.2-.67-2.47-.76-3.79h1.51m9.86 12.02c.85.24 1.72.39 2.6.45v1.49c-1.32-.09-2.59-.35-3.8-.75l1.2-1.19M7.5 3H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.49c0-.55-.45-1-1-1-1.24 0-2.45-.2-3.57-.57a.84.84 0 00-.31-.05c-.26 0-.51.1-.71.29l-2.2 2.2a15.149 15.149 0 01-6.59-6.59l2.2-2.2c.28-.28.36-.67.25-1.02A11.36 11.36 0 018.5 4c0-.55-.45-1-1-1z'/%3E%3C/svg%3E")}.item-1OdjEX#friend-row-remove-friend{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M14 8c0-2.21-1.79-4-4-4S6 5.79 6 8s1.79 4 4 4 4-1.79 4-4zm-2 0c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zM2 18v2h16v-2c0-2.66-5.33-4-8-4s-8 1.34-8 4zm2 0c.2-.71 3.3-2 6-2 2.69 0 5.77 1.28 6 2H4zM17 10h6v2h-6z'/%3E%3C/svg%3E")}.item-1OdjEX[id|=now-playing-menu]::before{content:none}.item-1OdjEX#now-playing-menu-message::before,.item-1OdjEX[id|=now-playing-menu-join]::before,.item-1OdjEX[id|=now-playing-menu-play]::before,.item-1OdjEX[id|=now-playing-menu-spotify-play]::before,.item-1OdjEX#now-playing-menu-xbox-connect::before{content:"" !important}.item-1OdjEX#now-playing-menu-message{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M4 4h16v12H5.17L4 17.17V4m0-2c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H4zm2 10h8v2H6v-2zm0-3h12v2H6V9zm0-3h12v2H6V6z'/%3E%3C/svg%3E")}.item-1OdjEX[id|=now-playing-menu-join]{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M11 7L9.6 8.4l2.6 2.6H2v2h10.2l-2.6 2.6L11 17l5-5-5-5zm9 12h-8v2h8c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-8v2h8v14z'/%3E%3C/svg%3E")}.item-1OdjEX[id|=now-playing-menu-play]{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M21 6H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 10H3V8h18v8zM6 15h2v-2h2v-2H8V9H6v2H4v2h2z'/%3E%3Ccircle cx='14.5' cy='13.5' r='1.5'/%3E%3Ccircle cx='18.5' cy='10.5' r='1.5'/%3E%3C/svg%3E")}.item-1OdjEX[id|=now-playing-menu-spotify-play]{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='32' width='32' viewBox='0 0 168 168'%3E%3Cpath fill='%231ED760' d='M83.837 20.21c-35.15 0-63.645 28.495-63.645 63.644 0 35.151 28.496 63.644 63.645 63.644 35.153 0 63.645-28.493 63.645-63.644 0-35.147-28.492-63.64-63.646-63.64l.001-.003zm29.187 91.793a3.965 3.965 0 01-5.457 1.315c-14.943-9.127-33.754-11.195-55.908-6.133a3.968 3.968 0 01-1.766-7.737c24.244-5.539 45.04-3.154 61.816 7.099a3.967 3.967 0 011.315 5.456zm7.79-17.33c-1.436 2.336-4.492 3.073-6.825 1.636-17.107-10.515-43.185-13.56-63.42-7.418a4.969 4.969 0 01-6.193-3.306 4.97 4.97 0 013.31-6.189c23.113-7.013 51.848-3.616 71.494 8.457 2.333 1.436 3.07 4.491 1.634 6.822v-.001zm.669-18.045c-20.513-12.183-54.355-13.303-73.94-7.36a5.952 5.952 0 11-3.456-11.392c22.482-6.825 59.855-5.506 83.471 8.514a5.946 5.946 0 012.083 8.157 5.948 5.948 0 01-8.155 2.081z'/%3E%3C/svg%3E")}.item-1OdjEX#now-playing-menu-xbox-connect{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 788 444' width='32' height='32'%3E%3Cg transform='matrix(3 0 0 3 -790 -445)'%3E%3Cg fill='%23FFF'%3E%3Cpath d='M394 202.3c.1 0 .2.1.3.2 29.9 22.7 81 78.9 65.4 94.7-37.6 32.9-93.9 32.9-131.5 0-15.7-15.9 35.5-72.1 65.4-94.7.2-.1.3-.2.4-.2M446.1 136.7c-15.3-9.1-31.9-14.7-52.1-14.7-20.1 0-36.7 5.5-52.1 14.7-.2.1-.3.3-.2.5.1.2.3.2.5.2 19.3-4.2 48.8 12.6 51.5 14.2.1.1.3.1.4 0 2.8-1.7 32.1-18.4 51.5-14.2.2.1.4 0 .5-.2.2-.2.1-.4 0-.5M324.1 150.8c-.2.1-.3.2-.4.3-35.6 35.3-39.5 91.6-9.1 131.4.1.2.3.2.5.2.2-.1.2-.3.1-.5-7.6-23.5 31.3-80.6 51.5-104.5.1-.1.1-.2.1-.3 0-.1-.1-.3-.2-.3-30.4-30.4-40.8-27.2-42.5-26.3M421.4 177c-.1.1-.2.2-.2.3 0 .1.1.2.1.3 20 23.9 59 81 51.5 104.5-.1.2-.1.4.1.5.2.1.4 0 .5-.2 30.3-39.9 26.4-96-9.1-131.4-.1-.1-.3-.2-.4-.3-1.7-.8-12.1-4-42.5 26.3'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")}.item-1OdjEX[id|=video-device-context-video-device]{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M15 8v8H5V8h10m1-2H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4V7c0-.55-.45-1-1-1z'/%3E%3C/svg%3E")}.item-1OdjEX#video-device-context-report-stream-problem{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z'/%3E%3C/svg%3E")}.item-1OdjEX#rtc-channel-VOICE_ACTIVITY{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M9 13c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2zm0 8c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm-6 4c.22-.72 3.31-2 6-2c2.7 0 5.8 1.29 6 2H3zM15.08 7.05c.84 1.18.84 2.71 0 3.89l1.68 1.69c2.02-2.02 2.02-5.07 0-7.27l-1.68 1.69zM20.07 2l-1.63 1.63c2.77 3.02 2.77 7.56 0 10.74L20.07 16c3.9-3.89 3.91-9.95 0-14z'/%3E%3C/svg%3E")}.item-1OdjEX#rtc-channel-PUSH_TO_TALK{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M7 22h2v2H7zm5-9c1.66 0 3-1.34 3-3V4c0-1.66-1.34-3-3-3S9 2.34 9 4v6c0 1.66 1.34 3 3 3zm-1-9c0-.55.45-1 1-1s1 .45 1 1v6c0 .56-.44 1-1 1c-.55 0-1-.45-1-1V4zm0 18h2v2h-2zm4 0h2v2h-2zm4-12h-1.7c0 3-2.54 5.1-5.3 5.1S6.7 13 6.7 10H5c0 3.41 2.72 6.23 6 6.72V20h2v-3.28c3.28-.49 6-3.31 6-6.72z'/%3E%3C/svg%3E")}.item-1OdjEX#rtc-channel-show-voice-states[aria-checked=true]{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M12 6a9.77 9.77 0 018.82 5.5C19.17 14.87 15.79 17 12 17s-7.17-2.13-8.82-5.5A9.77 9.77 0 0112 6m0-2C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4zm0 5a2.5 2.5 0 010 5 2.5 2.5 0 010-5m0-2c-2.48 0-4.5 2.02-4.5 4.5S9.52 16 12 16s4.5-2.02 4.5-4.5S14.48 7 12 7z'/%3E%3C/svg%3E")}.item-1OdjEX#rtc-channel-show-voice-states[aria-checked=false]{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M12 6a9.77 9.77 0 018.82 5.5 9.647 9.647 0 01-2.41 3.12l1.41 1.41c1.39-1.23 2.49-2.77 3.18-4.53C21.27 7.11 17 4 12 4c-1.27 0-2.49.2-3.64.57l1.65 1.65C10.66 6.09 11.32 6 12 6zm-1.07 1.14L13 9.21c.57.25 1.03.71 1.28 1.28l2.07 2.07c.08-.34.14-.7.14-1.07C16.5 9.01 14.48 7 12 7c-.37 0-.72.05-1.07.14zM2.01 3.87l2.68 2.68A11.738 11.738 0 001 11.5C2.73 15.89 7 19 12 19c1.52 0 2.98-.29 4.32-.82l3.42 3.42 1.41-1.41L3.42 2.45 2.01 3.87zm7.5 7.5l2.61 2.61c-.04.01-.08.02-.12.02a2.5 2.5 0 01-2.5-2.5c0-.05.01-.08.01-.13zm-3.4-3.4l1.75 1.75a4.6 4.6 0 00-.36 1.78 4.507 4.507 0 006.27 4.14l.98.98c-.88.24-1.8.38-2.75.38a9.77 9.77 0 01-8.82-5.5c.7-1.43 1.72-2.61 2.93-3.53z'/%3E%3C/svg%3E")}.item-1OdjEX#subscription-context-apply{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M6.99 11L3 15l3.99 4v-3H14v-2H6.99v-3zM21 9l-3.99-4v3H10v2h7.01v3L21 9z'/%3E%3C/svg%3E")}.item-1OdjEX#subscription-context-cancel{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.59-13L12 10.59 8.41 7 7 8.41 10.59 12 7 15.59 8.41 17 12 13.41 15.59 17 17 15.59 13.41 12 17 8.41z'/%3E%3C/svg%3E")}.item-1OdjEX#stream-context-watch{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M9 10v8l7-4zm12-4h-7.58l3.29-3.29L16 2l-4 4h-.03l-4-4-.69.71L10.56 6H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 14H3V8h18v12z'/%3E%3C/svg%3E")}.item-1OdjEX#stream-context-mute[aria-checked=false]{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M10.8 4.9c0-.66.54-1.2 1.2-1.2s1.2.54 1.2 1.2l-.01 3.91L15 10.6V5c0-1.66-1.34-3-3-3-1.54 0-2.79 1.16-2.96 2.65l1.76 1.76V4.9zM19 11h-1.7c0 .58-.1 1.13-.27 1.64l1.27 1.27c.44-.88.7-1.87.7-2.91zM4.41 2.86L3 4.27l6 6V11c0 1.66 1.34 3 3 3 .23 0 .44-.03.65-.08l1.66 1.66c-.71.33-1.5.52-2.31.52-2.76 0-5.3-2.1-5.3-5.1H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28a7.13 7.13 0 002.55-.9l4.2 4.2 1.41-1.41L4.41 2.86z'/%3E%3C/svg%3E")}.item-1OdjEX#stream-context-mute[aria-checked=true]{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm-1-9c0-.55.45-1 1-1s1 .45 1 1v6c0 .55-.45 1-1 1s-1-.45-1-1V5zm6 6c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z'/%3E%3C/svg%3E")}.item-1OdjEX#channel-call-overflow-popout-no-video-hide[aria-checked=true],.item-1OdjEX#user-context-no-video-hide[aria-checked=true],.item-1OdjEX#stream-context-no-video-hide[aria-checked=true]{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M12 6a9.77 9.77 0 018.82 5.5C19.17 14.87 15.79 17 12 17s-7.17-2.13-8.82-5.5A9.77 9.77 0 0112 6m0-2C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4zm0 5a2.5 2.5 0 010 5 2.5 2.5 0 010-5m0-2c-2.48 0-4.5 2.02-4.5 4.5S9.52 16 12 16s4.5-2.02 4.5-4.5S14.48 7 12 7z'/%3E%3C/svg%3E")}.item-1OdjEX#channel-call-overflow-popout-no-video-hide[aria-checked=false],.item-1OdjEX#user-context-no-video-hide[aria-checked=false],.item-1OdjEX#stream-context-no-video-hide[aria-checked=false]{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M12 6a9.77 9.77 0 018.82 5.5 9.647 9.647 0 01-2.41 3.12l1.41 1.41c1.39-1.23 2.49-2.77 3.18-4.53C21.27 7.11 17 4 12 4c-1.27 0-2.49.2-3.64.57l1.65 1.65C10.66 6.09 11.32 6 12 6zm-1.07 1.14L13 9.21c.57.25 1.03.71 1.28 1.28l2.07 2.07c.08-.34.14-.7.14-1.07C16.5 9.01 14.48 7 12 7c-.37 0-.72.05-1.07.14zM2.01 3.87l2.68 2.68A11.738 11.738 0 001 11.5C2.73 15.89 7 19 12 19c1.52 0 2.98-.29 4.32-.82l3.42 3.42 1.41-1.41L3.42 2.45 2.01 3.87zm7.5 7.5l2.61 2.61c-.04.01-.08.02-.12.02a2.5 2.5 0 01-2.5-2.5c0-.05.01-.08.01-.13zm-3.4-3.4l1.75 1.75a4.6 4.6 0 00-.36 1.78 4.507 4.507 0 006.27 4.14l.98.98c-.88.24-1.8.38-2.75.38a9.77 9.77 0 01-8.82-5.5c.7-1.43 1.72-2.61 2.93-3.53z'/%3E%3C/svg%3E")}.item-1OdjEX#manage-streams-report-stream-problem,.item-1OdjEX#channel-call-overflow-popout-report-stream-problem,.item-1OdjEX#stream-context-report-stream-problem{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z'/%3E%3C/svg%3E")}.item-1OdjEX#user-context-focus-video{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14c1.1 0 2-.9 2-2V5a2 2 0 00-2-2zm0 16H5V7h14v12zm-7-8.5c1.84 0 3.48.96 4.34 2.5-.86 1.54-2.5 2.5-4.34 2.5s-3.48-.96-4.34-2.5c.86-1.54 2.5-2.5 4.34-2.5M12 9c-2.73 0-5.06 1.66-6 4 .94 2.34 3.27 4 6 4s5.06-1.66 6-4c-.94-2.34-3.27-4-6-4zm0 5.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z'/%3E%3C/svg%3E")}.item-1OdjEX#manage-streams-stream-settings{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zM7.5 13h2v2H11V9H9.5v2.5h-2V9H6v6h1.5zM18 14v-4c0-.55-.45-1-1-1h-4v6h4c.55 0 1-.45 1-1zm-1.5-.5h-2v-3h2v3z'/%3E%3C/svg%3E")}.item-1OdjEX#manage-streams-change-windows,.item-1OdjEX#manage-streams-stop-streaming{flex-direction:row-reverse}.item-1OdjEX#manage-streams-change-windows .iconContainer-1-SsTR,.item-1OdjEX#manage-streams-change-windows .imageContainer-1wSPgI,.item-1OdjEX#manage-streams-stop-streaming .iconContainer-1-SsTR,.item-1OdjEX#manage-streams-stop-streaming .imageContainer-1wSPgI{margin-left:0}.item-1OdjEX#manage-streams-change-windows .label-2gNW3x:not(:only-child),.item-1OdjEX#manage-streams-stop-streaming .label-2gNW3x:not(:only-child){margin-left:8px}.item-1OdjEX#manage-streams-change-windows::before,.item-1OdjEX#manage-streams-stop-streaming::before{content:none}.item-1OdjEX[id|=pc]::before{content:none}.item-1OdjEX[id|=bdfdb]::before{content:none}.item-1OdjEX#guild-context-cutecord-add-cute-guild,.item-1OdjEX#user-context-cutecord-add-cute-user{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M20 9V6h-2v3h-3v2h3v3h2v-3h3V9h-3zM9 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm6.39 8.56C13.71 13.7 11.53 13 9 13s-4.71.7-6.39 1.56A2.97 2.97 0 001 17.22V20h16v-2.78c0-1.12-.61-2.15-1.61-2.66zM15 18H3v-.78c0-.38.2-.72.52-.88C4.71 15.73 6.63 15 9 15c2.37 0 4.29.73 5.48 1.34.32.16.52.5.52.88V18z'/%3E%3C/svg%3E")}.item-1OdjEX#guild-context-cutecord-add-meanie-guild,.item-1OdjEX#user-context-cutecord-add-meanie-user{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M14 8c0-2.21-1.79-4-4-4S6 5.79 6 8s1.79 4 4 4 4-1.79 4-4zm-2 0c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zM2 18v2h16v-2c0-2.66-5.33-4-8-4s-8 1.34-8 4zm2 0c.2-.71 3.3-2 6-2 2.69 0 5.77 1.28 6 2H4zM17 10h6v2h-6z'/%3E%3C/svg%3E")}.item-1OdjEX#user-context-local-nicknames-edit{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M16.81 8.94l-3.75-3.75L4 14.25V18h3.75l9.06-9.06zM6 16v-.92l7.06-7.06.92.92L6.92 16H6zM19.71 6.04a.996.996 0 000-1.41l-2.34-2.34a1.001 1.001 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83zM2 20h20v4H2z'/%3E%3C/svg%3E")}.item-1OdjEX#user-context-local-nicknames-reset{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M14.06 9.02l.92.92-1.11 1.11 1.41 1.41 2.52-2.52-3.75-3.75-2.52 2.52 1.41 1.41 1.12-1.1zm6.65-1.98a.996.996 0 000-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29s-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83zM2.81 2.81L1.39 4.22l7.32 7.32L3 17.25V21h3.75l5.71-5.71 7.32 7.32 1.41-1.41L2.81 2.81zM5.92 19H5v-.92l5.13-5.13.92.92L5.92 19z'/%3E%3C/svg%3E")}.item-1OdjEX#message-item-0-0-1{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M18 2H9c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H9V4h9v12zM3 15v-2h2v2H3zm0-5.5h2v2H3v-2zM10 20h2v2h-2v-2zm-7-1.5v-2h2v2H3zM5 22c-1.1 0-2-.9-2-2h2v2zm3.5 0h-2v-2h2v2zm5 0v-2h2c0 1.1-.9 2-2 2zM5 6v2H3c0-1.1.9-2 2-2z'/%3E%3C/svg%3E")}.item-1OdjEX#message-item-0-0-2{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M19 12v7H5v-7H3v7c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7h-2zm-6 .67l2.59-2.58L17 11.5l-5 5-5-5 1.41-1.41L11 12.67V3h2v9.67z'/%3E%3C/svg%3E")}.item-1OdjEX#message-item-0-0-3{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M11 7L9.6 8.4l2.6 2.6H2v2h10.2l-2.6 2.6L11 17l5-5-5-5zm9 12h-8v2h8c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-8v2h8v14z'/%3E%3C/svg%3E")}.item-1OdjEX#message-item-0-0-4{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z'/%3E%3C/svg%3E")}.item-1OdjEX#message-PluginDownloaderContextLink{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M10.5 4.5c.28 0 .5.22.5.5v2h6v6h2c.28 0 .5.22.5.5s-.22.5-.5.5h-2v6h-2.12c-.68-1.75-2.39-3-4.38-3s-3.7 1.25-4.38 3H4v-2.12c1.75-.68 3-2.39 3-4.38 0-1.99-1.24-3.7-2.99-4.38L4 7h6V5c0-.28.22-.5.5-.5m0-2A2.5 2.5 0 008 5H4c-1.1 0-1.99.9-1.99 2v3.8h.29c1.49 0 2.7 1.21 2.7 2.7s-1.21 2.7-2.7 2.7H2V20c0 1.1.9 2 2 2h3.8v-.3c0-1.49 1.21-2.7 2.7-2.7s2.7 1.21 2.7 2.7v.3H17c1.1 0 2-.9 2-2v-4a2.5 2.5 0 000-5V7c0-1.1-.9-2-2-2h-4a2.5 2.5 0 00-2.5-2.5z'/%3E%3C/svg%3E")}.item-1OdjEX#message-ThemeDownloaderContextLink{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M18 4V3c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V6h1v4H9v11c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-9h8V4h-3zm-2 2H6V4h10v2z'/%3E%3C/svg%3E")}.powerclock{color:var(--logo-color) !important;font-kerning:none;letter-spacing:100%}.theme-light .powerclock.sticky{background-color:var(--card-6-bg);box-shadow:0 -4px var(--card-6-bg)}.theme-dark .powerclock.sticky{background-color:var(--card-6-bg);box-shadow:0 -4px var(--card-6-bg)}.powerclock:not(.sticky){position:fixed;top:0;left:50%;transform:translate(-50%, 5px);padding:0;font-size:1rem;z-index:3001;padding:0}.layer-86YKbF:first-child:not(:last-child){opacity:var(--opq) !important;transform:none !important;will-change:unset;z-index:1}.layer-86YKbF:first-child:not(:last-child)[style*="opacity: 0;"]{opacity:0 !important}.layer-86YKbF:last-child:not(:first-child){will-change:unset;z-index:100}.guilds-2JjMmN .scroller-3X7KbA{contain:unset}:root{--badge-size: 22px;--badge-margin: 1.5px;--badges-everywhere-size:15px}.userPopout-2j1gM4[aria-label=mr_miner] .headerText-1-WmDq::after{font-family:var(--font-header);font-weight:var(--subtitle-weight)}
/*
    VARIABLES
*/
[data-popout-root].newBrand,
html.newBrand,
:root {
  /* Rounded corners required for this setting to have effect */
  --window-roundedness: 12px;
  --snackbar-bg: #333;
  --snackbar-shadow: 0 3px 5px -1px rgb(0 0 0 / 20%), 0 6px 10px 0 rgb(0 0 0 / 14%), 0 1px 18px 0 rgb(0 0 0 / 12%);
  --snackbar-radius: 4px;
  --snackbar-height: 32px;
  --snackbar-padding: 14px 16px;
  --switch-knob-color: #ECECEC;
  --switch-slider-color: rgba(135, 135, 135,0.65);
  --button-radius: 4px;
  --background-blur-intensity: 10px;
  --chatbox-top-padding: 16px;
  --header-weight: 600;
  --subtitle-weight: 500;
  --section-weight: 900;
  --font-header: "Google Sans", "Migu 1M", sans-serif;
  --font-code: "Roboto Mono", monospace;
  --font-primary: var(--font-header);
  --font-secondary: var(--font-header);
  --font-display: var(--font-header);
  --card-padding: 12px;
  --channels-width: 300px;
  --pip-width: 320px;
  --pip-radius: 12px;
  --tooltip-bg: #2a2a2a;
  --tooltip-text: #ffffff;
  --checkbox-size: 15px;
  --settings-list-width: 316px;
  --settings-padding: 8px;
  --settings-header-height: 84px;
  --members-width: 240px;
  /* these are only used if you use the translucent module */
  --wallpaper: url("https://cdn.discordapp.com/attachments/861011844553244685/877485732783063050/1623950302486.jpg");
  --blur-strength: 4px;
  --window-border: 0px;
}

.theme-light {
  --accent: var(--primary-700);
  --accent-selected-highlight: rgba(28, 116, 233, 12%);
  --accent-highlight: var(--primary-500);
  --accent-text: white;
  --text-semidark: rgb(149, 149, 149);
  --baseline: #f8f9fa;
  --chip: #D7D7D7;
  --chip-active: #c7c7c7;
  --chip-text: rgb(53, 53, 53);
  --navdrawer-color: var(--card-2-bg);
  --navdrawer-hover: rgba(0, 0, 0, 0.05);
  --navdrawer-active: rgba(0, 0, 0, 0.1);
  --navdrawer-separator: rgba(0, 0, 0, 0.1);
  --separator: rgba(0, 0, 0, 0.18);
  --combobox-outline: rgba(0, 0, 0, 0.1);
  --title-color: #606060;
  --list-color: #202124;
  --logo-color: #202124;
  --header-color: #202124;
  --interactive-muted: #8f929c;
  --channels-default: #46494c;
  --ripple-default: rgba(0, 0, 0, 0.36);
  --danger: rgb(255, 70, 70);
  --danger-highlight: rgb(255, 118, 118);
  --online: #43b581;
  --online-highlight: #66c296;
  --idle: #faa61a;
  --dnd: var(--danger);
  --stream: #643da7;
  --offline: #636b75;
}

.callContainer-HtHELf,
.theme-dark {
  --accent: var(--primary-400);
  --accent-selected-highlight: rgba(52, 164, 255, 12%);
  --accent-highlight: var(--primary-200);
  --accent-text: white;
  --baseline: #272a2b;
  --chip: #595A5E;
  --chip-active: #737479;
  --chip-text: white;
  --navdrawer-color: var(--card-2-bg);
  --navdrawer-hover: rgba(255, 255, 255, 0.05);
  --navdrawer-active: rgba(255, 255, 255, 0.1);
  --navdrawer-separator: rgba(255, 255, 255, 0.1);
  --separator: rgba(255, 255, 255, 0.18);
  --combobox-outline: rgba(255, 255, 255, 0.1);
  --title-color: #aaa;
  --list-color: #fff;
  --logo-color: #fff;
  --header-color: #fff;
  --interactive-muted: #6b6b6b;
  --channels-default: #9b9fa5;
  --ripple-default: rgba(255, 255, 255, 0.36);
  --danger: rgb(207, 102, 121);
  --danger-highlight: rgb(255, 118, 118);
  --online: #66c296;
  --online-highlight: #43b581;
  --idle: #fbec52;
  --dnd: var(--danger);
  --stream: #9176c1;
  --offline: #868d96;
}

:root {
  --chip-height: 24px;
}

.theme-light {
  --card-0-bg: white;
  --card-1-bg: white;
  --card-2-bg: white;
  --card-3-bg: white;
  --card-4-bg: white;
  --card-5-bg: white;
  --card-6-bg: white;
  --card-7-bg: white;
  --card-8-bg: white;
  --card-9-bg: white;
  --card-10-bg: white;
  --card-11-bg: white;
  --card-12-bg: white;
  --card-13-bg: white;
  --card-14-bg: white;
  --card-15-bg: white;
  --card-16-bg: white;
  --card-17-bg: white;
  --card-18-bg: white;
  --card-19-bg: white;
  --card-20-bg: white;
  --card-21-bg: white;
  --card-22-bg: white;
  --card-23-bg: white;
  --card-24-bg: white;
}

.callContainer-HtHELf,
.theme-dark {
  --card-0-bg: #121212;
  --card-1-bg: #1D1D1D;
  --card-2-bg: #222222;
  --card-3-bg: #242424;
  --card-4-bg: #272727;
  --card-5-bg: #292828;
  --card-6-bg: #2C2C2C;
  --card-7-bg: #2C2C2D;
  --card-8-bg: #2D2D2D;
  --card-9-bg: #2E2E2D;
  --card-10-bg: #2E2F2F;
  --card-11-bg: #302F30;
  --card-12-bg: #313130;
  --card-13-bg: #323231;
  --card-14-bg: #333332;
  --card-15-bg: #333434;
  --card-16-bg: #353535;
  --card-17-bg: #353536;
  --card-18-bg: #363536;
  --card-19-bg: #363636;
  --card-20-bg: #363736;
  --card-21-bg: #363737;
  --card-22-bg: #373737;
  --card-23-bg: #373737;
  --card-24-bg: #373737;
}

:root {
  --verzjoni_0: none;
  --verzjoni_1: none;
}
`;
if (typeof GM_addStyle !== "undefined") {
  GM_addStyle(css);
} else {
  let styleNode = document.createElement("style");
  styleNode.appendChild(document.createTextNode(css));
  (document.querySelector("head") || document.documentElement).appendChild(styleNode);
}
})();

/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||| Chat Input Disabler ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
(function() {
    'use strict';
    var persist = true; // Remember selected mode across page refreshes and browser reloads

    // Modes (use menu to cycle between these):
    // "hover": Enable chat input only when the cursor is hovering over it
    // "strict": Disables chat input completely
    // "off": Keep chat input enabled.
    var modes = ["hover", "strict", "off"];
    var menuShortcut = 'm';
    var modeIndex;
    var menuId;

    const channelObserver = new MutationObserver(channelObserverCallback);
    const serverObserver = new MutationObserver(serverObserverCallback);
    const options = {childList:true, attributes:true};
    init();

    async function init() {
        // Will activate the mode of the next index (default: hover)
        const modeIndex_default = modes.length - 1;

        // Load stored value if available and persist is set to true
        if (persist) {
            var storedMode = await GM.getValue("mode", "hover");
            modeIndex = modes.indexOf(storedMode);
            if (modeIndex != -1) {
                modeIndex = (modeIndex - 1) % modes.length;
            } else { // Mode does not exist
                modeIndex = modeIndex_default;
            }
        } else {
            modeIndex = modeIndex_default;
        }
        start();
    }

    function start(){
        switchMode();
        addObserver(serverObserver,"div[class*='content-']");
        serverObserverCallback(); // Init
    }

    function serverObserverCallback(mutationList, observer) { // When changing servers
        //console.log("server callback");
        addObserver(channelObserver,"div[class*='chat-']", disable);
        addHoverFunc();
    }
    function channelObserverCallback(mutationList, observer) { // When changing channels
        //console.log("channel callback");
        disable();
        addHoverFunc();
    }

    function addObserver(observer, query, onSuccess = function(){}) {
        var q = $(query);
        if (!q.length) { setTimeout(function(){addObserver(observer, query, onSuccess)},100);}
        else {
            observer.observe(q[0], options);
            onSuccess();
        }
    }

    function switchMode() {
        modeIndex = (modeIndex + 1) % modes.length;
        if (persist) {GM.setValue("mode",modes[modeIndex]);}
        GM_unregisterMenuCommand(menuId);
        menuId = GM_registerMenuCommand("Switch mode [current: " + modes[modeIndex] + "]", switchMode, menuShortcut);
        switch (modes[modeIndex]){
            case "hover":
            case "strict":
                disable();
                break;
            case "off":
                enable();
                break;
            default:
                console.error("Disable Discord chat input: Unimplemented mode.");
                break;
        }
    }

    function disable() {
        if (modes[modeIndex] != "off") {
            //console.log("disabled!");
            var textareaQuery = $("div[class*='slateTextArea']");
            if (textareaQuery.length) {
                textareaQuery.attr("contenteditable","false");
                textareaQuery[0].style.removeProperty("-webkit-user-modify"); // Needed for Chrome
                textareaQuery.parent().parent()[0].style.setProperty("pointer-events","none"); // Disable mouse events
            } else {
                setTimeout(disable, 100);
            }
        }
    }

    function enable() {
        var textareaQuery = $("div[class*='slateTextArea']");
        if (textareaQuery.length) {
            textareaQuery.attr("contenteditable","true");
            textareaQuery[0].style.setProperty("-webkit-user-modify", "read-write-plaintext-only");
            textareaQuery.parent().parent()[0].style.removeProperty("pointer-events");
        } else {
            setTimeout(enable, 100);
        }
    }

    function addHoverFunc() {
        var textareaQuery = $("div[class*='scrollableContainer']");
        if (textareaQuery.length) {
            textareaQuery.hover(hoverEnter, hoverExit);
        } else {
            setTimeout(addHoverFunc, 100);
        }
    }

    function hoverEnter() {
        if (modes[modeIndex] == "hover"){
            enable();
        }
    }

    function hoverExit() {
        if (modes[modeIndex] == "hover"){
            disable();
        }
    }

})();

/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||| Side Bars Disabler |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/

var injCSS = `
div[class^=title][class*="container"] {
   z-index: 0;
}
body.reveal nav[class*="wrapper"][class*="guilds"] div>div[class*="scrollerWrapPolyfill"],
body.reveal nav[class*="wrapper"][class*="guilds"] {
    position: fixed;
    height: 100%;
    width: 70px;
    max-width: 70px;
    z-index: 5;
    left: -70px;
    -moz-transition: left ease-in-out 300ms;
    -webkit-transition: left ease-in-out 300ms;
    transition: left ease-in-out 300ms;
}
body.reveal div[class^="sidebar"] {
    position: fixed;
    height: 100%;
    left: -70px;
    width: 240px;
    z-index: 4;
    left: -240px;
    -moz-transition: left ease-in-out 300ms;
    -webkit-transition: left ease-in-out 300ms;
    transition: left ease-in-out 300ms;
}
body.reveal div[class*="base"] {
    position: fixed;
    height: 100%;
    width: 100%;
    left: 0px;
    -moz-transition: left ease-in-out 300ms;
    -webkit-transition: left ease-in-out 300ms;
    transition: left ease-in-out 300ms;
}
body.disclose aside[class^="membersWrap"] {
    position: fixed;
    height: 100%;
    width: 240px;
    z-index: 5;
    right: -240px;
    -moz-transition: right ease-in-out 300ms;
    -webkit-transition: right ease-in-out 300ms;
    transition: right ease-in-out 300ms;
}
body.mouse-active nav[class*="wrapper"][class*="guilds"] div>div[class*="scrollerWrapPolyfill"],
body.mouse-active nav[class*="wrapper"][class*="guilds"] {
    position: fixed;
    left: 0;
    height: 100%;
    z-index: 5;
    width: 70px;
    max-width: 70px;
    -moz-transition: left ease-in-out 300ms;
    -webkit-transition: left ease-in-out 300ms;
    transition: left ease-in-out 300ms;
}
body.mouse-active div[class^="sidebar"] {
    position: fixed;
    left: 70px;
    height: 100%;
    z-index: 4;
    width: 240px;
    -moz-transition: left ease-in-out 300ms;
    -webkit-transition: left ease-in-out 300ms;
    transition: left ease-in-out 300ms;
}
body.mouse-active div[class*="base"] {
    position: fixed;
    height: 100%;
    width: 100%;
    -moz-transition: left ease-in-out 300ms;
    -webkit-transition: left ease-in-out 300ms;
    transition: left ease-in-out 300ms;
}
body.mouse-moving aside[class^="membersWrap"] {
    position: fixed;
    right: 0px;
    height: 100%;
    z-index: 5;
    width: 240px;
    -moz-transition: right ease-in-out 300ms;
    -webkit-transition: right ease-in-out 300ms;
    transition: right ease-in-out 300ms;
}

body.reveal.disclose div[class*="iconWrapper"][class*="clickable"][class*="selected"],
body.reveal div[class*="iconWrapper"][class*="clickable"][class*="selected"],
body.disclose div[class*="iconWrapper"][class*="clickable"][class*="selected"] {
    display: none !important;
}
body:not(.disclose):not(.mouse-moving) aside[class^="membersWrap"],
body:not(.reveal):not(.mouse-active) div[class*="wrapper"][class*="guilds"]>div>div[class*="scrollerWrapPolyfill"],
body:not(.reveal):not(.mouse-active) nav[class*="wrapper"][class*="guilds"],
/*body:not(.reveal):not(.mouse-active) div[class*="base"],*/
body:not(.reveal):not(.mouse-active) div[class*="sidebar"] {
    height: 100%;
    margin-top: 0 !important;
    position: initial;
}
.btn-slide {
   background-color: var(--Mygray2) !important;
   border: 1px outset var(--Myback) !important;
   border-radius: 0px 3px 3px 0px !important;
   -moz-transition: background .2s, box-shadow .4s, border-color .2s !important;
   -webkit-transition: background .2s, box-shadow .4s, border-color .2s !important;
   transition: background .2s, box-shadow .4s, border-color .2s !important;
   transition-timing-function: linear !important;
}
.btn-slide:hover {
   box-shadow: inset 0px 2px 4px 0px var(--MyB) !important;
   border: 1px inset var(--Myback) !important;
   background-color: var(--Myback) !important;
   border-radius: 3px !important;
   -moz-transition: background .2s, box-shadow .4s, border-color .2s !important;
   -webkit-transition: background .2s, box-shadow .4s, border-color .2s !important;
   transition: background .2s, box-shadow .4s, border-color .2s !important;
   transition-timing-function: linear !important;
}
`;

function main() {
    var noBtn = $('#btn-slide').length == 0;
    if (noBtn) {
        $('section[class*="title"][class*="container"]').each(function() {
            $('<button>', {
                id: 'btn-slide',
                class: 'btn-slide',
                title: 'Slides the Guilds, channels and userlist on hover.',
                style: 'position:relative;height:28px;width:28px;margin-left:15px;color:#FFF;background-color:rgb(79, 79, 79);border:1px outset #000; background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgEAYAAAAj6qa3AAAgAElEQVRoBQEgIN/fAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD5+fn5+fkHcfn5+fn5+YdF+fn5+fn54X75+fn5+fl14/n5+fn5+QVcAAAAAAAAAAD5+fn5+fkAF/n5+fn5+QBa+fn5+fn5ACUBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPn5+fn5+RDrAAAAAAAA1J4AAAAAAAAbTgAAAAAAAMZzAAAAAAAAUj0AAAAAAADp7QAAAAAAACBRAAAAAAAARFkAAAAAAADMmgQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAhUAAAAAAAAJ/wAAAAAAAAAAAAAAAAAABLoAAAAAAAAEugAAAAAAAAi7AAAAAAAAhj4AAAAAAABQigAAAAAAAOLKBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPn5+fn5+QADAAAAAAAAAygAAAAAAAAE1QAAAAAAAAAzAAAAAAAAAAAAAAAAAAAGfwAAAAAAAAGCAAAAAAAAAH4AAAAAAAABjAAAAAAAAAblAAAAAAAAD8AAAAAAAAAajwAAAAAAAAlsAAAAAAAAJ+UBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPn5+fn5+QABAAAAAAAACjEAAAAAAABSuQAAAAAAADJWAAAAAAAAAb4AAAAAAAAAAAAAAAAAAAjgAAAAAAAAYUAAAAAAAAAH4AAAAAAAAOjyAAAAAAAAtOAAAAAAAAD8iAAAAAAAAEwgAAAAAAAAHIYAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+fn5+fn5AVoAAAAAAABINwAAAAAAAKL0AAAAAAAAFBIAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAcAAAAAAAAAWAAAAAAAAAAHAAAAAAAAAOoAAAAAAAAAugAAAAAAAAD8AAAAAAAAAEYAAAAAAAAAGgAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+fn5+fn5AAkAAAAAAAAUqQAAAAAAAKf9AAAAAAAARLAAAAAAAAD/4gAAAAAAAPcjAAAAAAAA/ZIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAABUgAAAAAAAAItAAAAAAAAAAIAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACDgAAAAAAAFjDAAAAAAAAPOwAAAAAAAAAOwAAAAAAANPwAAAAAAAAhDMAAAAAAADvAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT8AAAAAAAA9cwAAAAAAAH2OAAAAAAAAAHoAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD5+fn5+fkANwAAAAAAACVkAAAAAAAAZB8AAAAAAAAI6wAAAAAAAPcFAAAAAAAAl9kAAAAAAADJ9AAAAAAAAC56AAAAAAAABUIAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWgAAAAAAAAhJAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD5+fn5+fkAAQAAAAAAAAd9AAAAAAAAXw8AAAAAAAArNQAAAAAAAABgAAAAAAAAwEMAAAAAAAC7xgAAAAAAAIUiAAAAAAAAV/8AAAAAAAAF/wAAAAAAAAD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAADBAAAAAAAAAPkAAAAAAAAAcgAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAMj0AAAAAAABhbQAAAAAAAAQuAAAAAAAA7G8AAAAAAACVgwAAAAAAADUwAAAAAAAATl8AAAAAAAAFjQAAAAAAAADCAAAAAAAAADoAAAAAAAAABwAAAAAAAAD+AAAAAAAAAL0AAAAAAAAA5QAAAAAAAADmAAAAAAAAABoAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEM4AAAAAAABxtQAAAAAAABZfAAAAAAAA/hwAAAAAAAC0hgAAAAAAANg8AAAAAAAAbv0AAAAAAAAOWQAAAAAAAPuOAAAAAAAAt1sAAAAAAAD5IQAAAAAAAAAAAAAAAAAA/sMAAAAAAAC+8gAAAAAAAJkAAAAAAAAA5FAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+fn5+fn5AjYAAAAAAABESAAAAAAAAEXOAAAAAAAAAnUAAAAAAADhLwAAAAAAAJTcAAAAAAAAWOQAAAAAAAAy8gAAAAAAAAC8AAAAAAAAyxsAAAAAAAB+ZgAAAAAAADgBAAAAAAAABwAAAAAAAAAC6AAAAAAAABw7AAAAAAAAmmIAAAAAAAAqwgAAAAAAABwAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+fn5+fn5AAsAAAAAAAAXVgAAAAAAAK47AAAAAAAAOikAAAAAAAD70gAAAAAAAH/vAAAAAAAAvHoAAAAAAACj5AAAAAAAACfhAAAAAAAA9MgAAAAAAABpeQAAAAAAALcrAAAAAAAA2s4AAAAAAAASAAAAAAAAAAAAAAAAAAAA/8kAAAAAAADjxgAAAAAAAArUAAAAAAAAFJ0AAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAGGgAAAAAAAAM9EAAAAAAAAAHwAAAAAAAM4AAAAAAAAAsdcAAAAAAABp7wAAAAAAACX/AAAAAAAAAEIAAAAAAAC33QAAAAAAALFAAAAAAAAABTcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOYAAAAAAAABFgAAAAAAAB4zAAAAAAAAADQAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD5+fn5+fkATAAAAAAAACrGAAAAAAAAXrcAAAAAAAAHkwAAAAAAAPX7AAAAAAAAmGQAAAAAAAAbZgAAAAAAAFiWAAAAAAAAAu4AAAAAAADk7QAAAAAAAJVGAAAAAAAA8yoAAAAAAAAA/AAAAAAAAAAAAAAAAAAAAAAAAAAAAADldAAAAAAAANUmAAAAAAAA/Q4AAAAAAAAAPAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD5+fn5+fkAAQAAAAAAAAjMAAAAAAAAYaIAAAAAAAAn4wAAAAAAAADfAAAAAAAAu+oAAAAAAADB1gAAAAAAAHCmAAAAAAAAEyAAAAAAAAD82QAAAAAAAK5QAAAAAAAAyKoHBwcHBwcACQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAObsAAAAAAAAbC4AAAAAAAC6sAAAAAAAAP27AAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACcAAAAAAAAOVkAAAAAAABcdAAAAAAAAAIiAAAAAAAA5uUAAAAAAACVNwAAAAAAAD5oAAAAAAAAP/QAAAAAAAABPgAAAAAAANw8AAAAAAAAlJEAAAAAAAD5SQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEe4AAAAAAAD0hgAAAAAAAHRsAAAAAAAA1Q0AAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPn5+fn5+QAFAAAAAAAAFDAAAAAAAABzygAAAAAAABTvAAAAAAAA/UoAAAAAAACwHgAAAAAAAOLuAAAAAAAAbaIAAAAAAAALrAAAAAAAAPiTAAAAAAAAlMoAAAAAAADfTwcHBwcHBwDjAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiagAAAAAAAIkTAAAAAAAAEeoAAAAAAADucAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPn5+fn5+QAFAAAAAAAACpUAAAAAAABmXwAAAAAAAEL7AAAAAAAAAasAAAAAAADevAAAAAAAAJYcAAAAAAAAXC4AAAAAAAAuvgAAAAAAAACYAAAAAAAAyLIAAAAAAACuNgAAAAAAAPzuAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJiAAAAAAAAQIwAAAAAAACTQQAAAAAAABRuAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD5+fn5+fkACAAAAAAAAACuAAAAAAAAFeIAAAAAAABpLgAAAAAAAHMnAAAAAAAACaEAAAAAAAD0dAAAAAAAAI4BAAAAAAAAD5AAAAAAAABaTQAAAAAAAAV1AAAAAAAA8fQAAAAAAACTzQAAAAAAAOjxBwcHBwcHAP0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPAAAAAAAAACYwAAAAAAADAPAAAAAAAAADEAAAAAAAAAAAAAAAAAAAAABPn5+fn5+QLMAAAAAAAAB2YAAAAAAAABAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAABUgAAAAAAAAtCAAAAAAAAQdcAAAAAAABigQAAAAAAAD3LAAAAAAAACaEAAAAAAAD5ZgAAAAAAAKQCAAAAAAAAtE8AAAAAAACFQQAAAAAAACJyAAAAAAAA/wQAAAAAAACz0AAAAAAAALruAAAAAAAA//0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADuLQAAAAAAAPjAAAAAAAAAGQQAAAAAAAABDQAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAWPsAAAAAAABHGwAAAAAAAAnPAAAAAAAAAAAAAAAAAAAACQAAAAAAAAsbAAAAAAAAJmwAAAAAAAAargAAAAAAAAm1AAAAAAAAAfgAAAAAAADzkAAAAAAAAKEBAAAAAAAAiCwAAAAAAABXbQAAAAAAAFOKAAAAAAAAAdMAAAAAAADhFAAAAAAAAJPaAAAAAAAA9KcHBwcHBwcAvwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAN43AAAAAAAAjU4AAAAAAAB2YgAAAAAAADGPAAAAAAAAAOQAAAAAAAAAAAQAAAAAAACWvwAAAAAAAA9QAAAAAAAAAGgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA0AAAAAAAAAtgAAAAAAAAC0AAAAAAAA+WAAAAAAAADb5QAAAAAAAI/HAAAAAAAAtTkAAAAAAABMRAAAAAAAAHdLAAAAAAAAC/QAAAAAAAD3eQAAAAAAAJmlAAAAAAAAz5oHBwcHBwcAiQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB20AAAAAAADS+wAAAAAAAG5aAAAAAAAAnXAAAAAAAAAmAAAAAAAAAAAABAAAAAAAAA95AAAAAAAAAAAAAAAAAAD8uQAAAAAAAPWVAAAAAAAA/+AAAAAAAAD5qAAAAAAAAO8eAAAAAAAA4fYAAAAAAAC7AwAAAAAAAKx0AAAAAAAAAa4AAAAAAABtSwAAAAAAAGyeAAAAAAAAD6MAAAAAAAD75QAAAAAAAKrzAAAAAAAAlkoAAAAAAAD7XwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAApJgAAAAAAAHmWAAAAAAAAiuwAAAAAAADmNwAAAAAAACYAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAANTHAAAAAAAAf8EAAAAAAADzfAAAAAAAAPobAAAAAAAA8lgAAAAAAADqkgAAAAAAAAUiAAAAAAAAS6UAAAAAAABffQAAAAAAADMEAAAAAAAABtIAAAAAAAD6LgAAAAAAALCnAAAAAAAAfDoAAAAAAADxVQcHBwcHBwD5AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQXAAAAAAAAWMcAAAAAAAAT2wAAAAAAABksAAAAAAAAAPcAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAABdAAAAAAAAARqwAAAAAAAAbDAAAAAAAABv8AAAAAAAAdtgAAAAAAACvqAAAAAAAAO8oAAAAAAAAaqwAAAAAAAAiQAAAAAAAAAF4AAAAAAADwOAAAAAAAAKKAAAAAAAAAhjsAAAAAAADplwcHBwcHBwC5AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPsAAAAAAAAEswAAAAAAAEe7AAAAAAAAAL8AAAAAAAAAAAAAAAAAAAAAAfn5+fn5+f+NAAAAAAAAAHIAAAAAAAAA1QAAAAAAAACPAAAAAAAAAPUAAAAAAAAABwAAAAAAAAAeAAAAAAAAADAAAAAAAAAAPwAAAAAAAAAlAAAAAAAA+DcAAAAAAADPtQAAAAAAAI8bAAAAAAAAtroAAAAAAAD1PAcHBwcHBwDyAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD5+fn5+fkRygAAAAAAANtiAAAAAAAAE9EAAAAAAAD2VwAAAAAAAPziAAAAAAAADk8AAAAAAAAAegAAAAAAAAAAAAAAAAAAAAACAAAAAAAA4ZQAAAAAAAAAVgAAAAAAAACiAAAAAAAAABMAAAAAAAAAHgAAAAAAAAAXAAAAAAAAAOIAAAAAAAD1HQAAAAAAANuiAAAAAAAAs6EAAAAAAABt/gAAAAAAAFEJAAAAAAAArTEAAAAAAAD1MAcHBwcHBwDyAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPrXAAAAAAAAxQUAAAAAAADzNAAAAAAAAK38AAAAAAAAdIMAAAAAAADiwAAAAAAAAADSAAAAAAAAAAAAAAAAAAAAAAH5+fn5+fk83wAAAAAAADGOAAAAAAAAAz0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJsAAAAAAADzcwAAAAAAAOSiAAAAAAAA5TkAAAAAAADgMQAAAAAAAPTuAAAAAAAAAFgHBwcHBwcA9gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+fn5+fn5ATcAAAAAAAAeCAAAAAAAACUFAAAAAAAA2GcAAAAAAADnHAAAAAAAAFJGAAAAAAAAkKYAAAAAAAAaTAAAAAAAAAAAAfn5+fn5+QDLAAAAAAAAA3IAAAAAAAAAXQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA9AAAAAAAAP+QAAAAAAAA/vIHBwcHBwcA8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+fn5+fn5EOAAAAAAAACulwAAAAAAAEFiAAAAAAAA+14AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACK00gUAAAArSURBVAAAAAAAAAD5+fn5+fkDiPn5+fn5+W8L+fn5+fn54yn5+fn5+fmXv4lKesBGQ5QYAAAAAElFTkSuQmCC")',
            }).insertAfter('h3[class*="title"][class*="base"]');
            $('<style>')
                .prop('type', 'text/css')
                .html(injCSS)
                .appendTo('head');
        });
    }
}

// $(document).ready(
//    function blockRequest(e) {
//        return {
//            cancel: e.url.endsWith("/typing")
//        };
//    }
//    browser.webRequest.onBeforeRequest.addListener(
//        blockRequest, {
//            urls: ["https://discordapp.com/api/*"]
//        }, [
//            "blocking"
//        ]
//    )
// )

$(document).on('click', '#btn-slide', (function() {
    $('body').toggleClass('reveal');
    $('body').toggleClass('disclose');
    if ($('body.reveal').length > 0) {
        $(document).on('mousemove', function(event) {
            if ($('body.reveal').length > 0 && event.pageX < 40) {
                $('body').toggleClass('mouse-active').toggleClass('reveal');
            }
            if ($('body.mouse-active').length > 0 && event.pageX > 320) {
                $('body').toggleClass('mouse-active').toggleClass('reveal');
            }
        });
        if ($('body.disclose').length > 0) {
            $(document).on('mousemove', function(event) {
                if ($('body.disclose').length > 0 && event.pageX > $(window).width() - 40) {
                    $('body').toggleClass('mouse-moving').toggleClass('disclose');
                }
                if ($('body.mouse-moving').length > 0 && event.pageX < $(window).width() - 250) {
                    $('body').toggleClass('mouse-moving').toggleClass('disclose');
                }
            });
        } else {
            $(document).off('mousemove');
        }
    }
}));

var observer = new MutationObserver(function(mutations) {
    observer.disconnect();
    main();
    observer.observe(document, config);
});

var config = {
    attributes: true,
    subtree: true,
};

observer.observe(document, config);

/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||| Channels Disabler ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
(function() {
    'use strict';
    var hide = {
        serverSidebar : true,
        channelSidebar: true,
        memberSidebar : true // note: there is a "Member List" button in the top-right corner
    };

    // Can't use 'aria-label' to identify the Members List button as its value depends on your language settings,
    // so (part of) the icon will have to be used instead
    var memberIconPath = "M14 8.00598C14 10.211 12.206 12.006 10 12.006C7.795 12.006 6 10.211 6 8.00598C6 5.80098 7.794 4.00598 10 4.00598C12.206 4.00598 14 5.80098 14 8.00598ZM2 19.006C2 15.473 5.29 13.006 10 13.006C14.711 13.006 18 15.473 18 19.006V20.006H2V19.006Z";

    var serverSelector = "nav[class*='guilds']";
    var channelSelector = "div[class*='sidebar']";
    var memberSelector = "div[class*='membersWrap']";
    var memberIconSelector = "div[class*='clickable']:has(svg > path[d='" + memberIconPath + "'])"
    var baseSelector = "div[class*='base']"; // needed when hiding server sidebar

    var hideMenu = "Hide sidebars";
    var showMenu = "Show sidebars";
    var memberToggleMenu = "Toggle member sidebar"; // + " [current: (in)visible]"
    var hideSidebarMenuShortcut = 's';

    var hideSidebarMenuId;
    var memberToggleMenuId;
    var baseOffset; // e.g. "72px"

    var sidebarsHidden = false;
    var memberSidebarHidden; // from the "Member List" button
    var selectors = {
        serverSidebar: serverSelector,
        channelSidebar: channelSelector,
        memberSidebar: memberSelector
    };

    init();

    function init() {
        updateHideSidebarMenu();
    }

    function onHideSidebarMenuClick() {
        // Read state of "Member List" button
        memberSidebarHidden = $(memberIconSelector).filter("div[class *= 'selected']").length == 0;

        // Toggle visibility of sidebars
        for (var sidebar in selectors) {
            // hideMemberSidebar = memberSidebarHidden || sidebarsHidden
            if (sidebar == "memberSidebar" && memberSidebarHidden) {continue;}

            if (hide[sidebar]) {
                setSidebar(selectors[sidebar], sidebarsHidden);
            }
        }

        // Extra work is needed to properly hide the server sidebar
        if (hide.serverSidebar) {
            var base = $(baseSelector);
            if (sidebarsHidden) {
                base.css("left", baseOffset);
            } else {
                baseOffset = base[0].style.left;
                base.css("left", "0px");
            }
        }
        sidebarsHidden ^= true;

        // Update menu
        updateHideSidebarMenu();
    }

    function updateHideSidebarMenu() {
        GM_unregisterMenuCommand(hideSidebarMenuId);
        var menu = sidebarsHidden ? showMenu : hideMenu;
        hideSidebarMenuId = GM_registerMenuCommand(menu, onHideSidebarMenuClick, hideSidebarMenuShortcut);
    }

    function setSidebar(selector, boolValue) {
        if (boolValue) {
            showSidebar(selector);
        } else {
            hideSidebar(selector);
        }
    }

    function hideSidebar(selector) {
        var node = $(selector)[0];
        node.style.display = "none";
    }

    function showSidebar(selector) {
        var node = $(selector)[0];
        node.style.removeProperty("display");
    }

})();
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||| Experiments ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
(function() {
    'use strict';

    webpackChunkdiscord_app.push([
  ["wp_isdev_patch"],
  {},
  (e) => {
    for (let c in e.c)
      if (e.c[c].exports?.default?.isDeveloper === false)
        Object.defineProperty(e.c[c].exports.default, "isDeveloper", {
          get: () => true,
        });
  },
]);
})();
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||| Token Getter |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
// $(function() {
//  let o = localStorage.getItem("token").split('"').join("");
//  if (!0 === confirm("Do you want to see your Discord token? 1/3")) {
//    if (!0 === confirm("Do you want to see your Discord token? 2/3")) {
//      !0 === confirm("Do you want to see your Discord token? 3/3") ? (prompt("Your Discord token:", o), o = "") : o = ""
//    } else o = ""
//  } else o = ""
//});
//(function() {
//    'use strict';
//    document.addEventListener("visibilitychange", function() {
//        if (document.visibilityState == "visible") {
//            const box = document.getElementsByTagName("textarea")[0];
//            box.focus();
//        }
//    })
//})();

/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||| Video Stream Cycler ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
(function() {
    'use strict';
    const VIDEOICONSELECTOR = '.titleIcon-2eloVh';
    const VIDEOTITLESELECTOR = '.container-x-SnoF';
    const APPMOUNTSELECTOR = '#app-mount';
    let videoTargets = [];
    let videoTitleElement = null;
    let index = 0;

    function getVideoTargets() {
        videoTargets = Array.prototype.slice.call(document.querySelectorAll(VIDEOICONSELECTOR)).map(e => e.parentElement.parentElement.parentElement);
    }

    function removeChildElements(e) {
        while(e.firstChild) {
            e.removeChild(e.lastChild);
        }
    }

    function selectNext() {
        getVideoTargets();
        if(videoTargets.length > 1){
            index = (index + 1) % videoTargets.length;
            videoTargets[index].click();
            setVideoTitle();
        }
    }

    function setVideoTitle(title = document.querySelector(VIDEOTITLESELECTOR).innerText) {
        if(videoTitleElement == null){
            videoTitleElement = document.createElement('div');
            videoTitleElement.id = 'dvc-title';
            videoTitleElement.style.position = 'fixed';
            videoTitleElement.style.color = '#fff';
            videoTitleElement.style.fontSize = '46pt';
            videoTitleElement.style.top = videoTitleElement.style.left = '0.1em';
            videoTitleElement.style['z-index'] = 999;
            document.querySelector(APPMOUNTSELECTOR).appendChild(videoTitleElement);
        }
        removeChildElements(videoTitleElement);
        videoTitleElement.appendChild(document.createTextNode(title));
    }

    function registerMenuCommand() {
        let mcid = GM_registerMenuCommand('Cycle Through Video', () => {
            let intervalId = setInterval(selectNext, 10000);
            GM_unregisterMenuCommand(mcid);
            mcid = GM_registerMenuCommand('Stop Cycle', () => {
                removeChildElements(videoTitleElement);
                clearInterval(intervalId);
                GM_unregisterMenuCommand(mcid);
                registerMenuCommand();
            });
            getVideoTargets();
            setVideoTitle();
        });
    };

    registerMenuCommand();
})();

/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||| Nitro Bypass |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
(function() {

'use strict';

const BaseColor = "#0cf";

var Discord;
var Utils = {
    Log: (message) => { console.log(`%c[FreeEmojis] %c${message}`, `color:${BaseColor};font-weight:bold`, "") },
    Warn: (message) => { console.warn(`%c[FreeEmojis] %c${message}`, `color:${BaseColor};font-weight:bold`, "") },
    Error: (message) => { console.error(`%c[FreeEmojis] %c${message}`, `color:${BaseColor};font-weight:bold`, "") },
    Webpack: function() {
        if(this.cachedWebpack) return this.cachedWebpack;

        let webpackExports;

        if(typeof BdApi !== "undefined" && BdApi?.findModuleByProps && BdApi?.findModule) {
            return this.cachedWebpack = { findModule: BdApi.findModule, findModuleByUniqueProperties: (props) => BdApi.findModuleByProps.apply(null, props) };
        }
        else if(Discord.window.webpackChunkdiscord_app != null) {
            const ids = ['__extra_id__'];
            Discord.window.webpackChunkdiscord_app.push([
                ids,
                {},
                (req) => {
                    webpackExports = req;
                    ids.length = 0;
                }
            ]);
        }
        else if(Discord.window.webpackJsonp != null) {
            webpackExports = typeof(Discord.window.webpackJsonp) === 'function' ?
            Discord.window.webpackJsonp(
                [],
                { '__extra_id__': (module, _export_, req) => { _export_.default = req } },
                [ '__extra_id__' ]
            ).default :
            Discord.window.webpackJsonp.push([
                [],
                { '__extra_id__': (_module_, exports, req) => { _module_.exports = req } },
                [ [ '__extra_id__' ] ]
            ]);

            delete webpackExports.m['__extra_id__'];
            delete webpackExports.c['__extra_id__'];
        }
        else return null;

        const findModule = (filter) => {
            for(let i in webpackExports.c) {
                if(webpackExports.c.hasOwnProperty(i)) {
                    let m = webpackExports.c[i].exports;

                    if(!m) continue;

                    if(m.__esModule && m.default) m = m.default;

                    if(filter(m)) return m;
                }
            }

            return null;
        };

        const findModuleByUniqueProperties = (propNames) => findModule(module => propNames.every(prop => module[prop] !== undefined));

        return this.cachedWebpack = { findModule, findModuleByUniqueProperties };
    }
};


function Init(final)
{
    Discord = { window: (typeof(unsafeWindow) !== 'undefined') ? unsafeWindow : window };

    const webpackUtil = Utils.Webpack();
    if(webpackUtil == null) { if(final) Utils.Error("Webpack not found."); return 0; }
    const { findModule, findModuleByUniqueProperties } = webpackUtil;

    let emojisModule = findModuleByUniqueProperties([ 'getDisambiguatedEmojiContext', 'searchWithoutFetchingLatest' ]);
    if(emojisModule == null) { if(final) Utils.Error("emojisModule not found."); return 0; }

    let messageEmojiParserModule = findModuleByUniqueProperties([ 'parse', 'parsePreprocessor', 'unparse' ]);
    if(messageEmojiParserModule == null) { if(final) Utils.Error("messageEmojiParserModule not found."); return 0; }

    let emojiPickerModule = findModuleByUniqueProperties([ 'useEmojiSelectHandler' ]);
    if(emojiPickerModule == null) { if(final) Utils.Error("emojiPickerModule not found."); return 0; }

    const original_searchWithoutFetchingLatest = emojisModule.searchWithoutFetchingLatest;
    emojisModule.searchWithoutFetchingLatest = function() {
        let result = original_searchWithoutFetchingLatest.apply(this, arguments);
        result.unlocked.push(...result.locked);
        result.locked = [];
        return result;
    }

    function replaceEmoji(parseResult, emoji) {
        parseResult.content = parseResult.content.replace(`<${emoji.animated ? "a" : ""}:${emoji.originalName || emoji.name}:${emoji.id}>`, emoji.url.split("?")[0] + "?size=48");
    }

    const original_parse = messageEmojiParserModule.parse;
    messageEmojiParserModule.parse = function() {
        let result = original_parse.apply(this, arguments);

        if(result.invalidEmojis.length !== 0) {
            for(let emoji of result.invalidEmojis) {
                replaceEmoji(result, emoji);
            }
            result.invalidEmojis = [];
        }
        let validNonShortcutEmojis = result.validNonShortcutEmojis;
        for (let i = 0; i < validNonShortcutEmojis.length; i++) {
            const emoji = validNonShortcutEmojis[i];
            if(!emoji.available) {
                replaceEmoji(result, emoji);
                validNonShortcutEmojis.splice(i, 1);
                i--;
            }
        }

        return result;
    };

    const original_useEmojiSelectHandler = emojiPickerModule.useEmojiSelectHandler;
    emojiPickerModule.useEmojiSelectHandler = function(args) {
		const { onSelectEmoji, closePopout } = args;
		const originalHandler = original_useEmojiSelectHandler.apply(this, arguments);
		return function(data, state) {
			if(state.toggleFavorite)
				return originalHandler.apply(this, arguments);

			const emoji = data.emoji;
			if(emoji != null) {
				onSelectEmoji(emoji, state.isFinalSelection);
				if(state.isFinalSelection) closePopout();
			}
		};
    };

    Utils.Log("loaded");

    return 1;
}


var InitFails = 0;
function TryInit()
{
    if(Init() !== 0) return;

    window.setTimeout((++InitFails === 600) ? Init : TryInit, 100, true);
};


TryInit();

})();
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||| Spellcheck Enabler |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
(function() {
    //console.log("US:Utilities : ");
    console.log("US:Utilities : Entered Discord SpellCheck Function");
    'use strict';
    var persist = true; // Remember selected mode across page refreshes and browser reloads

    const channelObserver = new MutationObserver(channelObserverCallback);
    const serverObserver = new MutationObserver(serverObserverCallback);
    const options = {childList:true, attributes:true};
    init();

    async function init() {
        start();
    }

    function start(){
        addObserver(serverObserver,"div[class*='content-']");
        serverObserverCallback(); // Init
    }

    function serverObserverCallback(mutationList, observer) { // When changing servers
        addObserver(channelObserver,"div[class*='chat-']", SCenable);
    }

    function channelObserverCallback(mutationList, observer) { // When changing channels
        SCenable();
    }

    function addObserver(observer, query, onSuccess = function(){}) {
        var q = $(query);
        if (!q.length) { setTimeout(function(){addObserver(observer, query, onSuccess)},100);}
        else {
            observer.observe(q[0], options);
            onSuccess();
        }
    }

    function SCenable() {
        console.log("US:Utilities : SCenable() entry ");

            var textareaQuery = $("div[class*='slateTextArea']");
            if (textareaQuery.length) {
                console.log("US:Utilities : SCenable() before : " + textareaQuery.spellcheck + ":_");
                textareaQuery.attr("spellcheck","true");
                textareaQuery[0].style.removeProperty("-webkit-user-modify"); // Needed for Chrome
                console.log("US:Utilities : SCenable() after : " + textareaQuery.spellcheck + ":_");
                //textareaQuery.parent().parent()[0].style.setProperty("pointer-events","none"); // Disable mouse events
            } else {
                console.log("US:Utilities : SCenable() try again : " + textareaQuery.spellcheck + ":_");
              setTimeout(SCenable, 100);
            }
    }


})();
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||| ImageRes Fixer |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
    var url = document.URL;

if(url.includes("?")) {
                var newurl = url.substring(0, url.indexOf('?'));
                 location.replace(newurl);
                }

/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||| CodeBlock Line Numbers |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
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
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||| Friends Enhancer |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
(async function() {
    'use strict';
    var $ = window.$;
    const config = { attributes: true, childList: true, subtree: true };
    const callback = () => {
        var r = $($("div#pending-tab").children()[1]);
        var m = $(r.children()[0]);
        m.html(`On Hold ー <span class="item-3mHhwr item-3XjbnG themed-2-lozF" role="tab" aria-selected="false" aria-controls="pending-tab" aria-disabled="false" tabindex="-1"  id="all-approve-pending">Accept All</span> <span class="item-3mHhwr item-3XjbnG themed-2-lozF" role="tab" aria-selected="false" aria-controls="pending-tab" aria-disabled="false" tabindex="-1" id="all-decline-pending">Reject all</span>`);
        $("#all-approve-pending").on("click", async () => {
            window.dispatchEvent(new Event('beforeunload'));
            const ls = document.body.appendChild(document.createElement('iframe')).contentWindow.localStorage;
            const token = JSON.parse(localStorage.token);
            const _ = { headers: { Authorization: token, "Content-Type": "application/json" }};
            const __ = await (await fetch("https://discord.com/api/v9/users/@me/relationships", _)).json();
            const ___ = __.filter(x => x.type === 3);
            for (let i = 0; i < 50; i++) {
                if (!___.length) return alert("All Approved")
                const ____ = ___[i];
                await fetch("https://discord.com/api/v9/users/@me/relationships/" + ____.id, { ..._, method: "PUT", body: JSON.stringify({}) });
                console.log(`Successfully Approved: ${____.id}`);
            }
        });
        $("#all-decline-pending").on("click", async () => {
            window.dispatchEvent(new Event('beforeunload'));
            const ls = document.body.appendChild(document.createElement('iframe')).contentWindow.localStorage;
            const token = JSON.parse(localStorage.token);
            const _ = { headers: { Authorization: token }};
            const __ = await (await fetch("https://discord.com/api/v9/users/@me/relationships", _)).json();
            const ___ = __.filter(x => x.type === 3);
            for (let i = 0; i < 50; i++) {
                if (!___.length) return alert("All Declined")
                const ____ = ___[i];
                await fetch("https://discord.com/api/v9/users/@me/relationships/" + ____.id, { ..._, method: "DELETE",});
                console.log(`Successfully Declined: ${____.id}`);
            }
        })
    };/*
    const observer = new MutationObserver(callback);
    observer.observe(target, config);*/
    const observer = async () => new Promise((resolve, reject) => {
        if (document.getElementById("pending-tab")) resolve();
        setInterval(() => {
            if (document.getElementById("pending-tab")) resolve();
        }, 250);
    });
    const notObserver = async () => new Promise((resolve, reject) => {
        if (!document.getElementById("pending-tab")) resolve();
        setInterval(() => {
            if (!document.getElementById("pending-tab")) resolve();
        }, 250);
    });
    while (true) {
        await observer();
        callback();
        await notObserver();
    };
})();

/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||| GameStatus |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
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
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||| UnDiscord ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
(function () {
  'use strict';

  var version = "5.0.3";

  var discordStyles = (`
/* undiscord window */
#undiscord.browser {
    box-shadow: var(--elevation-stroke), var(--elevation-high);
    overflow: hidden;
}

#undiscord.container,
#undiscord .container {
    background-color: var(--background-secondary);
    border-radius: 8px;
    box-sizing: border-box;
    cursor: default;
    flex-direction: column;
}

#undiscord .header {
    background-color: var(--background-tertiary);
    height: 48px;
    align-items: center;
    min-height: 48px;
    padding: 0 16px;
    display: flex;
    color: var(--header-secondary);
}

#undiscord .header .icon {
    color: var(--interactive-normal);
    margin-right: 8px;
    flex-shrink: 0;
    width: 24;
    height: 24;
}

#undiscord .header .icon:hover {
    color: var(--interactive-hover);
}

#undiscord .header h3 {
    font-size: 16px;
    line-height: 20px;
    font-weight: 500;
    font-family: var(--font-display);
    color: var(--header-primary);
    flex-shrink: 0;
    margin-right: 16px;
}

#undiscord .header .spacer {
    flex-grow: 1;
}

#undiscord .header .vert-divider {
    width: 1px;
    height: 24px;
    background-color: var(--background-modifier-accent);
    margin-right: 16px;
    flex-shrink: 0;
}

#undiscord legend,
#undiscord label {
    display: block;
    width: 100%;
    color: var(--header-secondary);
    font-size: 12px;
    line-height: 16px;
    font-weight: 500;
    text-transform: uppercase;
    cursor: default;
    font-family: var(--font-display);
    margin-bottom: 8px;
}

#undiscord .multiInput {
    display: flex;
    align-items: center;
    font-size: 16px;
    box-sizing: border-box;
    width: 100%;
    border-radius: 3px;
    color: var(--text-normal);
    background-color: var(--input-background);
    border: none;
    transition: border-color 0.2s ease-in-out 0s;
}

#undiscord .multiInput :first-child {
    flex-grow: 1;
}

#undiscord .multiInput button:last-child {
    margin-right: 4px;
}

#undiscord .input {
    font-size: 16px;
    box-sizing: border-box;
    width: 100%;
    border-radius: 3px;
    color: var(--text-normal);
    background-color: var(--input-background);
    border: none;
    transition: border-color 0.2s ease-in-out 0s;

    padding: 10px;
    height: 40px;
}

#undiscord fieldset {
    margin-top: 16px;
}

#undiscord .input-wrapper {
    display: flex;
    align-items: center;
    font-size: 16px;
    box-sizing: border-box;
    width: 100%;
    border-radius: 3px;
    color: var(--text-normal);
    background-color: var(--input-background);
    border: none;
    transition: border-color 0.2s ease-in-out 0s;
}

#undiscord input[type="text"],
#undiscord input[type="search"],
#undiscord input[type="password"],
#undiscord input[type="datetime-local"],
#undiscord input[type="number"] {
    font-size: 16px;
    box-sizing: border-box;
    width: 100%;
    border-radius: 3px;
    color: var(--text-normal);
    background-color: var(--input-background);
    border: none;
    transition: border-color 0.2s ease-in-out 0s;
    padding: 10px;
    height: 40px;
}

#undiscord .divider,
#undiscord hr {
    border: none;
    margin-bottom: 24px;
    padding-bottom: 4px;
    border-bottom: 1px solid var(--background-modifier-accent);
}

#undiscord .sectionDescription {
    margin-bottom: 16px;
    color: var(--header-secondary);
    font-size: 14px;
    line-height: 20px;
    font-weight: 400;
}

#undiscord a {
    color: var(--text-link);
    text-decoration: none;
}

#undiscord .btn,
#undiscord button {
    position: relative;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    box-sizing: border-box;
    background: none;
    border: none;
    border-radius: 3px;
    font-size: 14px;
    font-weight: 500;
    line-height: 16px;
    padding: 2px 16px;
    user-select: none;

    /* sizeSmall */
    width: 60px;
    height: 32px;
    min-width: 60px;
    min-height: 32px;

    /* lookFilled colorPrimary */
    color: rgb(255, 255, 255);
    background-color: var(--button-secondary-background);
}

#undiscord .sizeMedium {
    width: 96px;
    height: 38px;
    min-width: 96px;
    min-height: 38px;
}

/* lookFilled colorPrimary */
#undiscord .accent {
    background-color: var(--brand-experiment);
}

#undiscord .danger {
    background-color: var(--button-danger-background);
}

#undiscord .positive {
    background-color: var(--button-positive-background);
}


#undiscord .info {
    font-size: 12px;
    line-height: 16px;
    padding: 8px 10px;
    color: var(--text-muted);
}

/* Scrollbar */
#undiscord .scroll::-webkit-scrollbar {
    width: 8px;
    height: 8px;
}

#undiscord .scroll::-webkit-scrollbar-corner {
    background-color: transparent;
}

#undiscord .scroll::-webkit-scrollbar-thumb {
    background-clip: padding-box;
    border: 2px solid transparent;
    border-radius: 4px;
    background-color: var(--scrollbar-thin-thumb);
    min-height: 40px;
}

#undiscord .scroll::-webkit-scrollbar-track {
    border-color: var(--scrollbar-thin-track);
    background-color: var(--scrollbar-thin-track);
    border: 2px solid var(--scrollbar-thin-track);
}

/* fade scrollbar */
#undiscord .scroll::-webkit-scrollbar-thumb,
#undiscord .scroll::-webkit-scrollbar-track {
    visibility: hidden;
}

#undiscord .scroll:hover::-webkit-scrollbar-thumb,
#undiscord .scroll:hover::-webkit-scrollbar-track {
    visibility: visible;
}
`);

  var undiscordStyles = (`
/**** Undiscord Button ****/
#undicord-btn {
    position: relative;
    width: auto;
    height: 24px;
    margin: 0 8px;
    cursor: pointer;
    color: var(--interactive-normal);
    flex: 0 0 auto;
}

#undicord-btn progress {
    position: absolute;
    top: 7px;
    left: 5px;
    width: 14px;
    height: 14px;
}

/**** Undiscord Interface ****/
#undiscord {
    position: fixed;
    z-index: 99;
    top: 44px;
    right: 10px;
    display: flex;
    flex-direction: column;
    width:800px;
    height: 80vh;
    min-width: 610px;
    max-width: 100vw;
    min-height: 448px;
    max-height: 100vh;
    color: var(--text-normal);
    border-radius: 4px;
    background-color: var(--background-secondary);
    box-shadow: var(--elevation-stroke), var(--elevation-high);
    will-change: top, left, width, height;
}

#undiscord .header .icon {
    cursor: pointer;
}

#undiscord .window-body {
    height: calc(100% - 48px);
}

#undiscord .sidebar {
    overflow: hidden scroll;
    overflow-y: auto;
    width: 270px;
    min-width: 250px;
    height: 100%;
    max-height: 100%;
    padding: 8px;
    background: var(--background-secondary);
}

#undiscord .main {
    display: flex;
    max-width: calc(100% - 250px);
    background-color: var(--background-primary);
    flex-grow: 1;
}

#undiscord #logArea {
    font-family: Consolas, Liberation Mono, Menlo, Courier, monospace;
    font-size: .75rem;
    overflow: auto;
    padding: 10px;
    user-select: text;
    flex-grow: 1;
    flex-grow: 1;
}

#undiscord .tbar {
    padding: 8px;
    background-color: var(--background-secondary-alt);
}

#undiscord .tbar button {
    margin-right: 4px;
    margin-bottom: 4px;
}

#undiscord .footer {
    cursor: se-resize;
}

/**** Elements ****/

#undiscord summary {
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    position: relative;
    overflow: hidden;
    margin-bottom: 2px;
    padding: 6px 10px;
    cursor: pointer;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: var(--interactive-normal);
    border-radius: 4px;
    flex-shrink: 0;
}

#undiscord fieldset {
    padding-left: 8px;
}

/* help link */
#undiscord legend a {
    float: right;
    text-transform: initial;
}

#undiscord progress {
    height: 8px;
    margin-top: 4px;
    flex-grow: 1;
    /* background-color: var(--background-primary);
    border-radius: 3px; */
}

/* #undiscord progress::-webkit-progress-value{
    background-color: var(--brand-experiment);
} */

/**** functional classes ****/

#undiscord.redact .priv {
    display: none !important;
}

#undiscord:not(.redact) .mask {
    display: none !important;
}

#undiscord.redact [priv] {
    -webkit-text-security: disc !important;
}

#undiscord :disabled {
    display: none;
}

/**** layout misc ****/

#undiscord,
#undiscord * {
    box-sizing: border-box;
}

#undiscord .col {
    display: flex;
    flex-direction: column;
}

#undiscord .row {
    display: flex;
    flex-direction: row;
    align-items: center;
}

#undiscord .mb1 {
    margin-bottom: 8px;
}
`);

  var buttonHtml = (`
<div id="undicord-btn" tabindex="0" role="button" aria-label="Delete Messages" title="Delete Messages with Undiscord">
    <svg aria-hidden="false" width="24" height="24" viewBox="0 0 24 24">
        <path fill="currentColor" d="M15 3.999V2H9V3.999H3V5.999H21V3.999H15Z"></path>
        <path fill="currentColor" d="M5 6.99902V18.999C5 20.101 5.897 20.999 7 20.999H17C18.103 20.999 19 20.101 19 18.999V6.99902H5ZM11 17H9V11H11V17ZM15 17H13V11H15V17Z"></path>
    </svg>
    <progress style="display:none;"></progress>
</div>
`);

  var undiscordTemplate = (`
<div id="undiscord" class="browser container redact" style="display:none;">
    <div class="header">
        <svg class="icon" aria-hidden="false" width="24" height="24" viewBox="0 0 24 24">
            <path fill="currentColor" d="M15 3.999V2H9V3.999H3V5.999H21V3.999H15Z"></path>
            <path fill="currentColor"
                d="M5 6.99902V18.999C5 20.101 5.897 20.999 7 20.999H17C18.103 20.999 19 20.101 19 18.999V6.99902H5ZM11 17H9V11H11V17ZM15 17H13V11H15V17Z">
            </path>
        </svg>
        <h3>Undiscord</h3>
        <div class="vert-divider"></div>
        <span> Bulk delete messages</span>
        <div class="spacer"></div>
        <div id="hide" class="icon" aria-label="Close" role="button" tabindex="0">
            <svg aria-hidden="false" width="24" height="24" viewBox="0 0 24 24">
                <path fill="currentColor"
                    d="M18.4 4L12 10.4L5.6 4L4 5.6L10.4 12L4 18.4L5.6 20L12 13.6L18.4 20L20 18.4L13.6 12L20 5.6L18.4 4Z">
                </path>
            </svg>
        </div>
    </div>
    <div class="window-body" style="display: flex; flex-direction: row;">
        <div class="sidebar scroll">
            <details open>
                <summary>General</summary>
                <fieldset>
                    <legend>
                        Author ID
                        <a href="{{WIKI}}/authorId" title="Help" target="_blank">help</a>
                    </legend>
                    <div class="multiInput">
                        <div class="input-wrapper">
                            <input class="input" id="authorId" type="text" priv>
                        </div>
                        <button id="getAuthor">me</button>
                    </div>
                </fieldset>
                <hr>
                <fieldset>
                    <legend>
                        Server ID
                        <a href="{{WIKI}}/guildId" title="Help" target="_blank">help</a>
                    </legend>
                    <div class="multiInput">
                        <div class="input-wrapper">
                            <input class="input" id="guildId" type="text" priv>
                        </div>
                        <button id="getGuild">current</button>
                    </div>
                </fieldset>
                <fieldset>
                    <legend>
                        Channel ID
                        <a href="{{WIKI}}/channelId" title="Help" target="_blank">help</a>
                    </legend>
                    <div class="multiInput mb1">
                        <div class="input-wrapper">
                            <input class="input" id="channelId" type="text" priv>
                        </div>
                        <button id="getChannel">current</button>
                    </div>
                    <div class="sectionDescription">
                        <label class="row"><input id="includeNsfw" type="checkbox">This is a NSFW channel</label>
                    </div>
                </fieldset>
            </details>
            <details>
                <summary>Import</summary>
                <fieldset>
                    <legend>
                        Import JSON
                        <a href="{{WIKI}}/importJson" title="Help" target="_blank">help</a>
                    </legend>
                    <div class="sectionDescription">
                        The import feature will be added back in the future.
                    </div>
                    <div class="">
                        <button id="importJson" disabled>Import</button>
                    </div>
                </fieldset>
            </details>
            <hr>
            <details>
                <summary>Filter</summary>
                <fieldset>
                    <legend>
                        Search
                        <a href="{{WIKI}}/filters" title="Help" target="_blank">help</a>
                    </legend>
                    <div class="input-wrapper">
                        <input id="search" type="text" placeholder="Containing text" priv>
                    </div>
                    <div class="sectionDescription">
                        Only delete messages that contain the text
                    </div>
                    <div class="sectionDescription">
                        <label><input id="hasLink" type="checkbox">has: link</label>
                    </div>
                    <div class="sectionDescription">
                        <label><input id="hasFile" type="checkbox">has: file</label>
                    </div>
                    <div class="sectionDescription">
                        <label><input id="includePinned" type="checkbox">Include pinned</label>
                    </div>
                </fieldset>
                <hr>
                <fieldset>
                    <legend>
                        Pattern
                        <a href="{{WIKI}}/pattern" title="Help" target="_blank">help</a>
                    </legend>
                    <div class="sectionDescription">
                        Delete messages that match the regular expression
                    </div>
                    <div class="input-wrapper">
                        <span class="info">/</span>
                        <input id="pattern" type="text" placeholder="regular expression" priv>
                        <span class="info">/</span>
                    </div>
                </fieldset>
            </details>
            <details>
                <summary>Messages interval</summary>
                <fieldset>
                    <legend>
                        Interval of messages
                        <a href="{{WIKI}}/messageId" title="Help" target="_blank">help</a>
                    </legend>
                    <div class="multiInput mb1">
                        <div class="input-wrapper">
                            <input id="minId" type="text" placeholder="After a message" priv>
                        </div>
                        <button id="pickMessageAfter">select</button>
                    </div>
                    <div class="multiInput">
                        <div class="input-wrapper">
                            <input id="maxId" type="text" placeholder="Before a message" priv>
                        </div>
                        <button id="pickMessageBefore">select</button>
                    </div>
                    <div class="sectionDescription">
                        Specify an interval to delete messages.
                    </div>
                </fieldset>
            </details>
            <details>
                <summary>Date</summary>
                <fieldset>
                    <legend>
                        After date
                        <a href="{{WIKI}}/dateRange" title="Help" target="_blank">help</a>
                    </legend>
                    <div class="input-wrapper mb1">
                        <input id="minDate" type="datetime-local" title="Messages posted AFTER this date">
                    </div>
                    <legend>
                        Before date
                        <a href="{{WIKI}}/dateRange" title="Help" target="_blank">help</a>
                    </legend>
                    <div class="input-wrapper">
                        <input id="maxDate" type="datetime-local" title="Messages posted BEFORE this date">
                    </div>
                    <div class="sectionDescription">
                        Delete messages that were posted between the two dates.
                    </div>
                    <div class="sectionDescription">
                        * Filtering by date doesn't work if you use the "Messages interval".
                    </div>
                </fieldset>
            </details>
            <hr>
            <details>
                <summary>Advanced settings</summary>
                <fieldset>
                    <legend>
                        Search delay
                        <a href="{{WIKI}}/delay" title="Help" target="_blank">help</a>
                    </legend>
                    <div class="input-wrapper">
                        <input id="searchDelay" type="number" value="100" step="100">
                    </div>
                </fieldset>
                <fieldset>
                    <legend>
                        Delete delay
                        <a href="{{WIKI}}/delay" title="Help" target="_blank">help</a>
                    </legend>
                    <div class="input-wrapper">
                        <input id="deleteDelay" type="number" value="1000" step="100">
                    </div>
                    <br>
                    <div class="sectionDescription">
                        This will affect the speed in which the messages are deleted.
                        Use the help link for more information.
                    </div>
                </fieldset>
            </details>
            <hr>
            <div></div>
            <div class="info">
                Undiscord {{VERSION}}
                <br> victornpb
            </div>
        </div>
        <div class="main col">
            <div class="tbar col">
                <div class="row">
                    <button id="start" class="sizeMedium accent">Start</button>
                    <button id="stop" class="sizeMedium danger" disabled>Stop</button>
                    <button id="clear" class="sizeMedium">Clear log</button>
                    <label class="row" title="Hide sensitive information on your screen for taking screenshots">
                        <input id="redact" type="checkbox" checked> Streamer mode
                    </label>
                </div>
                <div class="row">
                    <progress id="progressBar" value="-1"></progress>
                </div>
            </div>
            <pre id="logArea" class="logarea scroll">
                <center>
                    <div>Star <a href="{{HOME}}" target="_blank">this project</a> on GitHub!</div>
                    <div><a href="{{HOME}}/discussions" target="_blank">Issues or help</a></div>
                </center>
            </pre>
            <div class="tbar footer row">
                <label>
                    <input id="autoScroll" type="checkbox" checked> Auto scroll
                </label>
                <span id="progressPercent"></span>
            </div>
        </div>
    </div>
</div>

`);

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
   * @see https://github.com/victornpb/undiscord
   */
  async function deleteMessages(authToken, authorId, guildId, channelId, minId, maxId, content, hasLink, hasFile, includeNsfw, includePinned, pattern, searchDelay, deleteDelay, extLogger, stopHndl, onProgress) {
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
      debug() { return extLogger ? extLogger('debug', arguments) : console.debug.apply(console, arguments); },
      info() { return extLogger ? extLogger('info', arguments) : console.info.apply(console, arguments); },
      verb() { return extLogger ? extLogger('verb', arguments) : console.log.apply(console, arguments); },
      warn() { return extLogger ? extLogger('warn', arguments) : console.warn.apply(console, arguments); },
      error() { return extLogger ? extLogger('error', arguments) : console.error.apply(console, arguments); },
      success() { return extLogger ? extLogger('success', arguments) : console.info.apply(console, arguments); },
    };

    async function recurse() {
      let API_SEARCH_URL;
      if (guildId === '@me') {
        API_SEARCH_URL = `https://discord.com/api/v9/channels/${channelId}/messages/`; // DMs
      }
      else {
        API_SEARCH_URL = `https://discord.com/api/v9/guilds/${guildId}/messages/`; // Server
      }

      const headers = {
        'Authorization': authToken
      };

      if (onProgress) onProgress(-1, 1);

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
        const w = (await resp.json()).retry_after * 1000;
        throttledCount++;
        throttledTotalTime += w;
        log.warn(`This channel wasn't indexed, waiting ${w}ms for discord to index it...`);
        await wait(w);
        return await recurse();
      }

      if (!resp.ok) {
        // searching messages too fast
        if (resp.status === 429) {
          const w = (await resp.json()).retry_after * 1000;
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

      let regex;

      try {
        regex = new RegExp(pattern);
      } catch (e) {
        log.warn('Ignoring RegExp because pattern is malformed');
      }

      const data = await resp.json();
      const total = data.total_results;
      if (!grandTotal) grandTotal = total;
      const discoveredMessages = data.messages.map(convo => convo.find(message => message.hit === true));
      const messagesToDelete = discoveredMessages.filter(msg => {
        return (msg.type === 0 || (msg.type >= 6 && msg.type <= 21) || (msg.pinned && includePinned)) && (!regex || msg.content.match(regex));
      });
      const skippedMessages = discoveredMessages.filter(msg => !messagesToDelete.find(m => m.id === msg.id));

      const end = () => {
        log.success(`Ended at ${new Date().toLocaleString()}! Total time: ${msToHMS(Date.now() - start.getTime())}`);
        printDelayStats();
        log.verb(`Rate Limited: ${throttledCount} times. Total time throttled: ${msToHMS(throttledTotalTime)}.`);
        log.debug(`Deleted ${delCount} messages, ${failCount} failed.\n`);
      };

      const etr = msToHMS((searchDelay * Math.round(total / 25)) + ((deleteDelay + avgPing) * total));
      log.info(`Total messages found: ${data.total_results}`, `(Messages in current page: ${data.messages.length}, To be deleted: ${messagesToDelete.length}, System: ${skippedMessages.length})`, `offset: ${offset}`);
      printDelayStats();
      log.verb(`Estimated time remaining: ${etr}`);


      if (messagesToDelete.length > 0 || skippedMessages.length > 0) {

        if (++iterations < 1) {
          log.verb('Waiting for your confirmation...');
          if (!await ask(`Do you want to delete ~${total} messages?\nEstimated time: ${etr}\n\n---- Preview ----\n` +
                      messagesToDelete.map(m => `${m.author.username}#${m.author.discriminator}: ${m.attachments.length ? '[ATTACHMENTS]' : m.content}`).join('\n')))
            return end(log.error('Aborted by you!'));
          log.verb('OK');
        }

        for (let i = 0; i < messagesToDelete.length; i++) {
          const message = messagesToDelete[i];
          if (stopHndl && stopHndl()) return end(log.error('Stopped by you!'));

          log.debug(`${((delCount + 1) / grandTotal * 100).toFixed(2)}% (${delCount + 1}/${grandTotal})`,
            `Deleting ID:${redact(message.id)} <b>${redact(message.author.username + '#' + message.author.discriminator)} <small>(${redact(new Date(message.timestamp).toLocaleString())})</small>:</b> <i>${redact(message.content).replace(/\n/g, '↵')}</i>`,
            message.attachments.length ? redact(JSON.stringify(message.attachments)) : '');
          if (onProgress) onProgress(delCount + 1, grandTotal);

          let resp;
          try {
            const s = Date.now();
            const API_DELETE_URL = `https://discord.com/api/v9/channels/${message.channel_id}/messages/${message.id}`;
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
              const w = (await resp.json()).retry_after * 1000;
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

        if (stopHndl && stopHndl()) return end(log.error('Stopped by you!'));

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

  class Drag {
    /**
       * Make an element draggable/resizable
       * @param {Element} targetElm The element that will be dragged/resized
       * @param {Element} handleElm The element that will listen to events (handdle/grabber)
       * @param {object} [options] Options
       * @param {string} [options.mode="move"] Define the type of operation (move/resize)
       * @param {number} [options.minWidth=200] Minimum width allowed to resize
       * @param {number} [options.maxWidth=Infinity] Maximum width allowed to resize
       * @param {number} [options.minHeight=100] Maximum height allowed to resize
       * @param {number} [options.maxHeight=Infinity] Maximum height allowed to resize
       * @param {string} [options.draggingClass="drag"] Class added to targetElm while being dragged
       * @param {boolean} [options.useMouseEvents=true] Use mouse events
       * @param {boolean} [options.useTouchEvents=true] Use touch events
       *
       * @author Victor N. wwww.vitim.us
       */
    constructor(targetElm, handleElm, options) {
      this.options = Object.assign({
        mode: 'move',

        minWidth: 200,
        maxWidth: Infinity,
        minHeight: 100,
        maxHeight: Infinity,
        xAxis: true,
        yAxis: true,

        draggingClass: 'drag',

        useMouseEvents: true,
        useTouchEvents: true,
      }, options);

      // Public properties
      this.minWidth = this.options.minWidth;
      this.maxWidth = this.options.maxWidth;
      this.minHeight = this.options.minHeight;
      this.maxHeight = this.options.maxHeight;
      this.xAxis = this.options.xAxis;
      this.yAxis = this.options.yAxis;
      this.draggingClass = this.options.draggingClass;

      /** @private */
      this._targetElm = targetElm;
      /** @private */
      this._handleElm = handleElm;

      const moveOp = (x, y) => {
        let l = x - offLeft;
        if (x - offLeft < 0) l = 0; //offscreen <-
        else if (x - offRight > vw) l = vw - this._targetElm.clientWidth; //offscreen ->
        let t = y - offTop;
        if (y - offTop < 0) t = 0; //offscreen /\
        else if (y - offBottom > vh) t = vh - this._targetElm.clientHeight; //offscreen \/

        if(this.xAxis) this._targetElm.style.left = `${l}px`;
        if(this.yAxis) this._targetElm.style.top = `${t}px`;
        // NOTE: profilling on chrome translate wasn't faster than top/left as expected. And it also permanently creates a new layer, increasing vram usage.
        // this._targetElm.style.transform = `translate(${l}px, ${t}px)`;
      };

      const resizeOp = (x, y) => {
        let w = x - this._targetElm.offsetLeft - offRight;
        if (x - offRight > vw) w = Math.min(vw - this._targetElm.offsetLeft, this.maxWidth); //offscreen ->
        else if (x - offRight - this._targetElm.offsetLeft > this.maxWidth) w = this.maxWidth; //max width
        else if (x - offRight - this._targetElm.offsetLeft < this.minWidth) w = this.minWidth; //min width
        let h = y - this._targetElm.offsetTop - offBottom;
        if (y - offBottom > vh) h = Math.min(vh - this._targetElm.offsetTop, this.maxHeight); //offscreen \/
        else if (y - offBottom - this._targetElm.offsetTop > this.maxHeight) h = this.maxHeight; //max height
        else if (y - offBottom - this._targetElm.offsetTop < this.minHeight) h = this.minHeight; //min height

        if(this.xAxis) this._targetElm.style.width = `${w}px`;
        if(this.yAxis) this._targetElm.style.height = `${h}px`;
      };

      // define which operation is performed on drag
      const operation = this.options.mode === 'move' ? moveOp : resizeOp;

      // offset from the initial click to the target boundaries
      let offTop, offLeft, offBottom, offRight;

      let vw = window.innerWidth;
      let vh = window.innerHeight;


      function dragStartHandler(e) {
        const touch = e.type === 'touchstart';

        if ((e.buttons === 1 || e.which === 1) || touch) {
          e.preventDefault();

          const x = touch ? e.touches[0].clientX : e.clientX;
          const y = touch ? e.touches[0].clientY : e.clientY;

          const targetOffset = this._targetElm.getBoundingClientRect();

          //offset from the click to the top-left corner of the target (drag)
          offTop = y - targetOffset.y;
          offLeft = x - targetOffset.x;
          //offset from the click to the bottom-right corner of the target (resize)
          offBottom = y - (targetOffset.y + targetOffset.height);
          offRight = x - (targetOffset.x + targetOffset.width);

          vw = window.innerWidth;
          vh = window.innerHeight;

          if (this.options.useMouseEvents) {
            document.addEventListener('mousemove', this._dragMoveHandler);
            document.addEventListener('mouseup', this._dragEndHandler);
          }
          if (this.options.useTouchEvents) {
            document.addEventListener('touchmove', this._dragMoveHandler, {
              passive: false,
            });
            document.addEventListener('touchend', this._dragEndHandler);
          }

          this._targetElm.classList.add(this.draggingClass);
        }
      }

      function dragMoveHandler(e) {
        e.preventDefault();
        let x, y;

        const touch = e.type === 'touchmove';
        if (touch) {
          const t = e.touches[0];
          x = t.clientX;
          y = t.clientY;
        } else { //mouse

          // If the button is not down, dispatch a "fake" mouse up event, to stop listening to mousemove
          // This happens when the mouseup is not captured (outside the browser)
          if ((e.buttons || e.which) !== 1) {
            this._dragEndHandler();
            return;
          }

          x = e.clientX;
          y = e.clientY;
        }

        operation(x, y);
      }

      function dragEndHandler(e) {
        if (this.options.useMouseEvents) {
          document.removeEventListener('mousemove', this._dragMoveHandler);
          document.removeEventListener('mouseup', this._dragEndHandler);
        }
        if (this.options.useTouchEvents) {
          document.removeEventListener('touchmove', this._dragMoveHandler);
          document.removeEventListener('touchend', this._dragEndHandler);
        }
        this._targetElm.classList.remove(this.draggingClass);
      }

      // We need to bind the handlers to this instance and expose them to methods enable and destroy
      /** @private */
      this._dragStartHandler = dragStartHandler.bind(this);
      /** @private */
      this._dragMoveHandler = dragMoveHandler.bind(this);
      /** @private */
      this._dragEndHandler = dragEndHandler.bind(this);

      this.enable();
    }

    /**
     * Turn on the drag and drop of the instancea
     * @memberOf Drag
     */
    enable() {
      // this.destroy(); // prevent events from getting binded twice
      if (this.options.useMouseEvents) this._handleElm.addEventListener('mousedown', this._dragStartHandler);
      if (this.options.useTouchEvents) this._handleElm.addEventListener('touchstart', this._dragStartHandler, { passive: false });
    }
    /**
     * Teardown all events bound to the document and elements
     * You can resurrect this instance by calling enable()
     * @memberOf Drag
     */
    destroy() {
      this._targetElm.classList.remove(this.draggingClass);

      if (this.options.useMouseEvents) {
        this._handleElm.removeEventListener('mousedown', this._dragStartHandler);
        document.removeEventListener('mousemove', this._dragMoveHandler);
        document.removeEventListener('mouseup', this._dragEndHandler);
      }
      if (this.options.useTouchEvents) {
        this._handleElm.removeEventListener('touchstart', this._dragStartHandler);
        document.removeEventListener('touchmove', this._dragMoveHandler);
        document.removeEventListener('touchend', this._dragEndHandler);
      }
    }
  }

  function createElm(html) {
    const temp = document.createElement('div');
    temp.innerHTML = html;
    return temp.removeChild(temp.firstElementChild);
  }

  function insertCss(css) {
    const style = document.createElement('style');
    style.appendChild(document.createTextNode(css));
    document.head.appendChild(style);
    return style;
  }

  const messagePickerCss = `
body.undiscord-pick-message [data-list-id="chat-messages"] {
  background-color: var(--background-secondary-alt);
  box-shadow: inset 0 0 0px 2px var(--button-outline-brand-border);
}

body.undiscord-pick-message [id^="message-content-"]:hover {
  cursor: pointer;
  cursor: cell;
  background: var(--background-message-automod-hover);
}
body.undiscord-pick-message [id^="message-content-"]:hover::after {
  position: absolute;
  top: calc(50% - 11px);
  left: 4px;
  z-index: 1;
  width: 65px;
  height: 22px;
  line-height: 22px;
  font-family: var(--font-display);
  background-color: var(--button-secondary-background);
  color: var(--header-secondary);
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
  text-align: center;
  border-radius: 3px;
  content: 'This 👉';
}
body.undiscord-pick-message.before [id^="message-content-"]:hover::after {
  content: 'Before 👆';
}
body.undiscord-pick-message.after [id^="message-content-"]:hover::after {
  content: 'After 👇';
}
`;

  const messagePicker = {
    init() {
      insertCss(messagePickerCss);
    },
    grab(auxiliary) {
      return new Promise((resolve, reject) => {
        document.body.classList.add('undiscord-pick-message');
        if (auxiliary) document.body.classList.add(auxiliary);
        function clickHandler(e) {
          const message = e.target.closest('[id^="message-content-"]');
          if (message) {
            e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation();
            if (auxiliary) document.body.classList.remove(auxiliary);
            document.body.classList.remove('undiscord-pick-message');
            document.removeEventListener('click', clickHandler);
            try {
              resolve(message.id.match(/message-content-(\d+)/)[1]);
            } catch (e) {
              resolve(null);
            }
          }
        }
        document.addEventListener('click', clickHandler);
      });
    }
  };

  var messagePicker$1 = messagePicker;
  window.messagePicker = messagePicker;

  function getToken() {
    window.dispatchEvent(new Event('beforeunload'));
    const LS = document.body.appendChild(document.createElement('iframe')).contentWindow.localStorage;
    return JSON.parse(LS.token);
  }

  function getAuthorId() {
    const LS = document.body.appendChild(document.createElement('iframe')).contentWindow.localStorage;
    return JSON.parse(LS.user_id_cache);
  }

  function getGuildId() {
    const m = location.href.match(/channels\/([\w@]+)\/(\d+)/);
    if (m) return m[1];
    else alert('Could not the Guild ID!\nPlease make sure you are on a Server or DM.');
  }

  function getChannelId() {
    const m = location.href.match(/channels\/([\w@]+)\/(\d+)/);
    if (m) return m[2];
    else alert('Could not the Channel ID!\nPlease make sure you are on a Channel or DM.');
  }

  // ------------------------- User interface ------------------------------ //

  const HOME = 'https://github.com/victornpb/undiscord';
  const WIKI = 'https://github.com/victornpb/undiscord/wiki';

  const $ = s => undiscordWindow.querySelector(s);

  let undiscordWindow;
  let undiscordBtn;

  function initUI() {

    insertCss(discordStyles);
    insertCss(undiscordStyles);

    function replaceInterpolations(str, obj, removeMissing = false) {
      return str.replace(/\{\{([\w_]+)\}\}/g, (m, key) => obj[key] || (removeMissing ? '' : m));
    }

    const templateVariables = {
      VERSION: version,
      HOME,
      WIKI,
    };

    // create undiscord window
    const undiscordUI = replaceInterpolations(undiscordTemplate, templateVariables);
    undiscordWindow = createElm(undiscordUI);
    document.body.appendChild(undiscordWindow);

    new Drag(undiscordWindow, $('.header'), { mode: 'move' });
    new Drag(undiscordWindow, $('.footer'), { mode: 'resize' });

    // create undiscord button
    undiscordBtn = createElm(buttonHtml);
    undiscordBtn.onclick = toggleWindow;
    function mountBtn() {
      const toolbar = document.querySelector('#app-mount [class^=toolbar]');
      if (toolbar) toolbar.appendChild(undiscordBtn);
    }
    mountBtn();

    // watch for changes and re-mount button if necessary
    const discordElm = document.querySelector('#app-mount');
    let observerThrottle = null;
    const observer = new MutationObserver((_mutationsList, _observer) => {
      if (observerThrottle) return;
      observerThrottle = setTimeout(() => {
        observerThrottle = null;
        if (!discordElm.contains(undiscordBtn)) mountBtn(); // re-mount the button to the toolbar
      }, 3000);
    });
    observer.observe(discordElm, { attributes: false, childList: true, subtree: true });

    function toggleWindow() {
      if (undiscordWindow.style.display !== 'none') {
        undiscordWindow.style.display = 'none';
        undiscordBtn.style.color = 'var(--interactive-normal)';
      }
      else {
        undiscordWindow.style.display = '';
        undiscordBtn.style.color = 'var(--interactive-active)';
      }
    }

    messagePicker$1.init();

    // register event listeners
    $('#hide').onclick = toggleWindow;
    $('button#start').onclick = start;
    $('button#stop').onclick = stop;
    $('button#clear').onclick = () => $('#logArea').innerHTML = '';
    $('button#getAuthor').onclick = () => $('input#authorId').value = getAuthorId();
    $('button#getGuild').onclick = () => {
      const guildId = $('input#guildId').value = getGuildId();
      if (guildId === '@me') $('input#channelId').value = getChannelId();
    };
    $('button#getChannel').onclick = () => {
      $('input#channelId').value = getChannelId();
      $('input#guildId').value = getGuildId();
    };
    $('#redact').onchange = () => {
      const b = undiscordWindow.classList.toggle('redact');
      if (b) alert('This mode will attempt to hide personal information, so you can screen share / take screenshots.\nAlways double check you are not sharing sensitive information!');
    };

    $('#pickMessageAfter').onclick = async () => {
      // alert('Select a message on the chat.\nThe message below it will be deleted.');
      const id = await messagePicker$1.grab('after');
      if (id) $('input#minId').value = id;
    };
    $('#pickMessageBefore').onclick = async () => {
      // alert('Select a message on the chat.\nThe message above it will be deleted.');
      const id = await messagePicker$1.grab('before');
      if (id) $('input#maxId').value = id;
    };

    // const fileSelection = $('input#importJson');
    // fileSelection.onchange = () => {
    //   const files = fileSelection.files;
    //   const channelIdField = $('input#channelId');
    //   if (files.length > 0) {
    //     const file = files[0];
    //     file.text().then(text => {
    //       let json = JSON.parse(text);
    //       let channels = Object.keys(json);
    //       channelIdField.value = channels.join(',');
    //     });
    //   }
    // };

  }

  let _stopFlag = false;
  const stopHndl = () => _stopFlag;

  async function start() {
    console.log('start');
    _stopFlag = false;

    // general
    const authToken = getToken();
    const authorId = $('input#authorId').value.trim();
    const guildId = $('input#guildId').value.trim();
    const channelIds = $('input#channelId').value.trim().split(/\s*,\s*/);
    const includeNsfw = $('input#includeNsfw').checked;
    // filter
    const content = $('input#search').value.trim();
    const hasLink = $('input#hasLink').checked;
    const hasFile = $('input#hasFile').checked;
    const includePinned = $('input#includePinned').checked;
    const pattern = $('input#pattern').value;
    // message interval
    const minId = $('input#minId').value.trim();
    const maxId = $('input#maxId').value.trim();
    // date range
    const minDate = $('input#minDate').value.trim();
    const maxDate = $('input#maxDate').value.trim();
    //advanced
    const searchDelay = parseInt($('input#searchDelay').value.trim());
    const deleteDelay = parseInt($('input#deleteDelay').value.trim());

    // progress handler
    const progress = $('#progressBar');
    const progress2 = undiscordBtn.querySelector('progress');
    const percent = $('#progressPercent');
    const onProg = (value, max) => {
      if (value && max && value > max) max = value;
      progress.setAttribute('max', max);
      progress2.setAttribute('max', max);
      progress.value = value;
      progress2.value = value;
      progress.style.display = max ? '' : 'none';
      progress2.style.display = max ? '' : 'none';
      percent.style.display = value && max ? '' : 'none';
      percent.innerHTML = value >= 0 && max ? Math.round(value / max * 100) + '%' : '';
      // indeterminate progress bar
      if (value === -1) {
        progress.removeAttribute('value');
        progress2.removeAttribute('value');
        percent.innerHTML = '...';
      }
    };

    let logArea = $('#logArea');
    let autoScroll = $('#autoScroll');
    const logger = (type = '', args) => {
      const style = { '': '', info: 'color:#00b0f4;', verb: 'color:#72767d;', warn: 'color:#faa61a;', error: 'color:#f04747;', success: 'color:#43b581;' }[type];
      logArea.insertAdjacentHTML('beforeend', `<div style="${style}">${Array.from(args).map(o => typeof o === 'object' ? JSON.stringify(o, o instanceof Error && Object.getOwnPropertyNames(o)) : o).join('\t')}</div>`);
      if (autoScroll.checked) logArea.querySelector('div:last-child').scrollIntoView(false);
    };

    logArea.innerHTML = '';

    // validate input
    if (!authToken) return logger('error', ['Could not detect the authorization token!']) || logger('info', ['Please make sure Undiscord is up to date']);
    else if (!guildId) return logger('error', ['You must provide a Server ID!']);

    for (let i = 0; i < channelIds.length; i++) {
      $('#start').disabled = true;
      $('#stop').disabled = false;
      await deleteMessages(authToken, authorId, guildId, channelIds[i], minId || minDate, maxId || maxDate, content, hasLink, hasFile, includeNsfw, includePinned, pattern, searchDelay, deleteDelay, logger, stopHndl, onProg);
      stop(); // clear the running state
    }

  }

  function stop() {
    _stopFlag = true;
    $('#start').disabled = false;
    $('#stop').disabled = true;

    $('#progressBar').style.display = 'none';
    $('#progressPercent').style.display = 'none';
    undiscordBtn.querySelector('progress').style.display = 'none';
  }

  initUI();


  // ---- END Undiscord ----

})();

/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||| Image Zoom |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
(function() {
    'use strict';

    const targets = [ "avatar-3FKimL", "avatar-2e8lTP", "emoji" ];
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
}`;
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
        if (!zoom.naturalWidth) {
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
        if (!!element.src) return resizeImage(element.src)
        // situation 2: div with style
        else if (!!element.style.backgroundImage) return resizeImage(element.style.backgroundImage.split(/"/)[1])
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

    function resizeImage(url) {
        const index = url.indexOf("?")
        if (index === -1) return url
        return url.replace(url.substring(index), "")
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
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||| Channel List Toggle ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
(function(){
	'use strict';

	const toolbarSelector = '.toolbar-3_r2xA';
  const channelsSideBarSelector = '.sidebar-1tnWFu';
  const channelIconSVGSelector = '.title-31SJ6t .icon-2xnN2Y';
  const selectedIconClass = 'selected-29KTGM';

	const clickEvent = document.createEvent('Events');
	clickEvent.initEvent('click', true, false);


	// Discord has an connecting screen should you or it have network issues
	// The url and page title doesn't change during this
	// I think it's a good idea to listen for browser events, and start mutation observers
	const networkStatusChange = (e) => {
		findUI();
	}
	window.addEventListener('online', networkStatusChange);
	//window.addEventListener('offline', networkStatusChange);


	let lastLocation = window.location;
	const pageChange = () => {
    if (document.querySelector(toolbarSelector)) {
      // Recheck if we have a server UI, if not start the mutation handler for it
      findUI();
    }
	}
	new MutationObserver(pageChange).observe(
		document.head.querySelector('title'),
		{ subtree: true, characterData: true, childList: true }
	);


  let toolbarEle;
  let channelsPane;
  let channelsIcon;
  let toolbarButton;

  let initiallyActive = true;

  let findUIObserver;
  let findUITimer;

	const findUI = () => {
		stopUIObserver();

		const tmpCont = document.querySelector(toolbarSelector);
		if (tmpCont) {
			toolbarEle = tmpCont;
			doUIStuff();
			return;
		}

		findUIObserver = new MutationObserver(checkForUI);
    findUIObserver.observe(
			document.body/*getElementById("app-mount")*/,
			{ subtree: true, childList: true }
		);

		findUITimer = setTimeout(function() {
			// Give up waiting
			findUIObserver.disconnect();
		}, 10 * 1000);
	}

  const stopUIObserver = () => {
		if (findUIObserver) {
			findUIObserver.disconnect();
			findUIObserver = null;
		}
	}

	const checkForUI = () => {
		const tmpCont = document.querySelector(toolbarSelector);
		if (!tmpCont) { return; }

		toolbarEle = tmpCont;

		stopUIObserver();
    doUIStuff();
	}


  const doUIStuff = async () => {
    // What do we do here?
    // Get the current channel pane visibility and set the visibility of it.
    // Add, if needed, the button to the toolbar

    channelsPane = document.querySelector(channelsSideBarSelector);

    if (!channelsIcon) {
      // Try and find a text channel icon, if we can't find one use the first icon we can.
      channelsIcon = document.querySelector(channelIconSVGSelector).cloneNode(true)
    }

    if (!initiallyActive) {
      channelsPane.style.width = '0';
    }

    if (!toolbarButton) {
      toolbarButton = document.createElement('div');

      toolbarButton.append(channelsIcon.cloneNode(true));

      toolbarButton.setAttribute('class', 'iconWrapper-2OrFZ1 clickable-3rdHwn' + (initiallyActive ? ' ' + selectedIconClass : ''));
      toolbarButton.setAttribute('role', 'button');
      toolbarButton.setAttribute('aria-label', 'Channels');
      toolbarButton.setAttribute('tabindex', '0');

      toolbarEle.prepend(toolbarButton)

      toolbarButton.addEventListener('click', toggleChannelPane)
    } else if (toolbarButton.parentNode !== toolbarEle) {
      toolbarEle.prepend(toolbarButton)
    }

  }

  const toggleChannelPane = () => {
    const isActive = toolbarButton.classList.contains(selectedIconClass);

    toolbarButton.classList.toggle(selectedIconClass);
		channelsPane.style.width = isActive ? '0' : '';

    GM.setValue("showChannelPane", !isActive);
  }

  GM.getValue("showChannelPane", true).then(rVal => {
    initiallyActive = rVal;
  })


	findUI();

})()

/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||| Reaction Spammer |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
var token;
    window.onload = (function() {
        let popup;
        popup = window.open('');
        if (!popup) return alert('Popup blocked! Please allow popups and try again.');
        popup.document.write("Getting token...");
        window.dispatchEvent(new Event('beforeunload'));
        window.tkn = JSON.parse(popup.localStorage.token);
        popup.close();
        token = window.tkn;
    })();
setInterval(() => {
    function theBestSpammer(sec) {
        let emojiarray = ["😀","😁","😂","🤣","😃", "🥵", "🤑", "😎", "😲"]
        console.log(sec)
        let sec4 = parseInt(sec) * 4
        if (!sec) sec4 = 120
        let n = 1
        let emojiindex = 0;
        let msgid;
        let channel_id;
        let channel_url
        for (var i = 0; i<sec4; i++) {
            setTimeout(() => {
                try {
                    channel_id = (window.location.href.substring(
                    window.location.href.lastIndexOf("/") + 1,
                    window.location.href.length));
                    msgid = document.querySelectorAll(".contents-2MsGLg")[document.querySelectorAll(".contents-2MsGLg").length - n].lastChild.id.substr("message-content-".length)
                    channel_url = `https://discord.com/api/v9/channels/${channel_id}/messages/${msgid}/reactions/${emojiarray[emojiindex]}/%40me?location=Message`
                    request = new XMLHttpRequest();
                    request.withCredentials = true;
                    request.open("PUT", channel_url);
                    request.setRequestHeader("authorization", token);
                    request.setRequestHeader("accept", "/");
                    request.setRequestHeader("authority", "discord.com");
                    request.setRequestHeader("content-type", "application/json");
                    request.send(JSON.stringify({}));
                    if (emojiindex >= emojiarray.length - 1) {
                        n++
                        emojiindex = 0
                    }
                    emojiindex++
                } catch(err) {
                    console.error(err + "\nerror")
                }
            }, 250 * i)
        }
    }
    if (!document.querySelector(".hiddenclass")) {
        var buttonCollection = document.querySelector(".buttons-uaqb-5")
    var textArea = document.querySelector(".channelTextArea-1FufC0.channelTextArea-1VQBuV")
    var spamMenu = document.createElement("div")
    var spamInput = document.createElement("input")
    var spamButton = document.createElement("button")
    var spamEnter = document.createElement("button")
    spamButton.className = "hiddenclass buttonWrapper-3YFQGJ button-f2h6uQ colorBrand-I6CyqQ grow-2sR_-F noFocus-2C7BQj"
    spamButton.style = "letter-spacing: 0.4px; font-weight: bold; width: 50px; color: #CECECE; transition: all 0.2s ease-in;"
    spamButton.innerText = "Spam"
    spamButton.onmouseover = function() {this.style.color = "#FFFFFF"}
    spamButton.onmouseout = function() {if (this.classList.contains("active") != true) {this.style.color = "#CECECE"}}
    spamButton.onclick = function() {
        if (spamMenu.style.height === "0px") {
            spamMenu.style.display = "block"
            setTimeout(() => {
                spamMenu.style.height = "150px"
                spamMenu.style.boxShadow = "0 0 0 1px rgba(4,4,5,0.15), 0 8px 16px rgba(0,0,0,0.24)"
            }, 100);
            spamButton.classList.add("active")
        } else {
            spamMenu.style.height = "0px"
            spamMenu.style.boxShadow = "none"
            setTimeout(() => {
                spamMenu.style.display = "none"
            }, 200);
            spamButton.classList.remove("active")
        }
    }
    window.onclick = e => {
        if (e.target.classList.contains("hiddenclass") == false && spamMenu.style.height != "0px") {
            spamMenu.style.height = "0px"
            spamMenu.style.boxShadow = "none"
            setTimeout(() => {
                spamMenu.style.display = "none"
            }, 200);
            spamButton.classList.remove("active")
            spamButton.style.color = "#CECECE"
        }
    }
    spamMenu.classList.add("hiddenclass")
    spamInput.classList.add("hiddenclass")
    spamMenu.style = "border-radius: 8px; background-color: #2f3136; height: 0px; width: 250px; overflow: hidden; z-index: 1; position: absolute; right: 0; bottom: calc(100% + 8px); box-shadow: none; transition: all 0.2s;"
    spamInput.style = "padding: 2px; width: 150px; height: 30px; background: #40444B; color: #dcddde; border: none; border-radius: 8px; position: absolute; overflow: hidden; margin-left: 48px; margin-top: 35px;"
    spamInput.placeholder = "Seconds, e.g., 60"
    spamInput.style.placeholder = "color: #666971"
    spamInput.addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
            spamEnter.click();
        }
    })
    spamEnter.classList.add("hiddenclass")
    spamEnter.style = "background: #7289DA; color: white; border-radius: 8px; border: none; height: 32px; width: 60px; margin-top: 85px; margin-left: 95px;"
    spamEnter.innerText = "Spam!"
    spamEnter.onclick = () => {theBestSpammer(parseInt(document.querySelector("input[class=\"hiddenclass\"]").value)); spamButton.click()}
    buttonCollection.appendChild(spamButton)
    textArea.appendChild(spamMenu)
    spamMenu.appendChild(spamInput)
    spamMenu.appendChild(spamEnter)
    }
}, 50)
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||| Screenshare Audio ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
navigator.mediaDevices.chromiumGetDisplayMedia = navigator.mediaDevices.getDisplayMedia;

const getAudioDevice = async (nameOfAudioDevice) => {
  await navigator.mediaDevices.getUserMedia({
    audio: true
  });
  let devices = await navigator.mediaDevices.enumerateDevices();
  let audioDevice = devices.find(({
    label
  }) => label === nameOfAudioDevice);
  return audioDevice;
};

const getDisplayMedia = async () => {
  var id;
  try {
    let myDiscordAudioSink = await getAudioDevice('virtmic');
    id = myDiscordAudioSink.deviceId;
  }
  catch (error) {
    id = "default";
  }
  let captureSystemAudioStream = await navigator.mediaDevices.getUserMedia({
    audio: {
      // We add our audio constraints here, to get a list of supported constraints use navigator.mediaDevices.getSupportedConstraints();
      // We must capture a microphone, we use default since its the only deviceId that is the same for every Chromium user
      deviceId: {
        exact: id
      },
      // We want auto gain control, noise cancellation and noise suppression disabled so that our stream won't sound bad
      autoGainControl: false,
      echoCancellation: false,
      noiseSuppression: false
      // By default Chromium sets channel count for audio devices to 1, we want it to be stereo in case we find a way for Discord to accept stereo screenshare too
      //channelCount: 2,
      // You can set more audio constraints here, bellow are some examples
      //latency: 0,
      //sampleRate: 48000,
      //sampleSize: 16,
      //volume: 1.0
    }
  });
  let [track] = captureSystemAudioStream.getAudioTracks();
  const gdm = await navigator.mediaDevices.chromiumGetDisplayMedia({
    video: true,
    audio: true
  });
  gdm.addTrack(track);
  return gdm;
};
navigator.mediaDevices.getDisplayMedia = getDisplayMedia;
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||| Custom Nicknames |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
(function() {
    'use strict';
    let $ = jQuery;
    unsafeWindow.jQuery = jQuery;

    // Don't replace more often than this number of milliseconds.
    const DEBOUNCE_MS = 2000;

    const ELEMENT_PREFIX = "Discord-custom-nicknames-";
    const DIALOG_ID = ELEMENT_PREFIX + "dialog";
    const TEXTAREA_ID = ELEMENT_PREFIX + "textarea";
    const DIALOG_SELECTOR = "#" + DIALOG_ID;
    const TEXTAREA_SELECTOR = "#" + TEXTAREA_ID;

    const ORIG_ATTR = "data-Discord-orig-nickname";
    const STORAGE = "Discord_custom_nicknames_mapping";

    function get_nick_map_str() {
        let map_str = GM_getValue(STORAGE);
        return typeof(map_str) == "string" ? map_str : "";
    }
    unsafeWindow.get_nick_map_str = get_nick_map_str;

    function set_nick_map_str(new_value) {
        GM_setValue(STORAGE, new_value);
    }
    unsafeWindow.set_nick_map_str = set_nick_map_str;

    function get_nick_map() {
        return parse_map(get_nick_map_str());
    }
    unsafeWindow.get_nick_map = get_nick_map;

    // function serialise_map(map_obj) {
    //     return Object.entries(map_obj).map(e => e[0] + "=" + e[1]).join("\n");
    // }

    function parse_map(map_str) {
        let map_obj = {};
        for (const pair of map_str.split("\n")) {
            if (pair.indexOf("=") != -1) {
                let [k, v] = pair.split("=");
                map_obj[k] = v;
            }
        }
        return map_obj;
    }
    window.parse_map = parse_map;

    const PREFIX = "[Discord custom nicknames]";

    function debug(...args) {
        console.debug(PREFIX, ...args);
    }

    function log(...args) {
        console.log(PREFIX, ...args);
    }

    function replace_nick(nick_map, element) {
        // debug("replace", element);
        let orig_nick = element.getAttribute(ORIG_ATTR);
        let Discord_nick = orig_nick || element.innerText;
        let at = "";
        if (Discord_nick.startsWith("@")) {
            at = "@";
            Discord_nick = Discord_nick.slice(1);
        }
        let mapped_name = nick_map[Discord_nick];
        if (mapped_name) {
            mapped_name = at + mapped_name;
            debug(`${at}${Discord_nick} -> ${mapped_name}`);
            if (!orig_nick && element.tagName !== "TITLE") {
                // Back up the original to an attribute so that we can remap later
                // without reloading the page.
                //
                // FIXME: Figure out a way to make this work
                // flawlessly for <title>.  Currently it's slightly
                // broken because <title> can change values when
                // switching between DM pages, so we can't back up
                // the original username to an attribute on it.
                element.setAttribute(ORIG_ATTR, element.innerText)
            }
            element.innerText = mapped_name;
        }
        else {
            // debug(`no mapping found for ${element.innerText}`);
            // This is required in case a nick mapping is removed:
            if (orig_nick) {
                element.innerText = orig_nick;
            }
        }
    }

    function replace_css_elements(nick_map, query) {
        let matches = jQuery(query);
        // debug(`replacing ${query}`, matches);
        if (matches && matches.each) {
            matches.each((i, elt) => replace_nick(nick_map, elt));
        }
    }

    function replace_all() {
        debug("replace_all()");
        let nick_map = get_nick_map();
        debug("parsed:", nick_map);

        for (let selector of CSS_SELECTORS) {
            replace_css_elements(nick_map, selector);
        }
    }

    function dialog_html() {
        return `
            <div id="${DIALOG_ID}" title="Discord custom nicknames">
              <p>
                  Enter your mappings here, one on each line.
              </p>
              <textarea rows="10" cols="50" id="${TEXTAREA_ID}"
                        placeholder="nickname=Real Name"></textarea>
              <p>
                  Each mapping should look something like
              </p>
              <pre><code>nickname=Firstname Lastname</code></pre>
              <p>
                  where the left-hand side of the <code>=</code>
                  sign is the normal Discord nickname (excluding
                  the <code>#1234</code> suffix), and the
                  right-hand side is what you want to see instead.
              </p>
            </div>
        `;
    }

    function handle_dialog_save(dialog) {
        let map_str = $(TEXTAREA_SELECTOR).val();
        debug(`${TEXTAREA_SELECTOR} dialog save:`, map_str);
        GM_setValue(STORAGE, map_str || "");
        replace_all();
        $(dialog).dialog("close");
    }

    function handle_dialog_open(dialog) {
        let orig = get_nick_map_str();
        debug(`restoring ${TEXTAREA_SELECTOR} to`, orig);
        $(TEXTAREA_SELECTOR).val(orig);
    }

    unsafeWindow.GM_info = GM_info;

    function insert_CSS() {
        let CSS = GM_getResourceText("jQueryUI-css");
        for (let resource of GM_info.script.resources) {
            let image = resource.url.match(/images\/.+\.png/);
            if (!image) {
                continue;
            }
            let URL = GM_getResourceURL(resource.name);
            let rel_path = image[0];
            CSS = CSS.replaceAll(
                `url("${rel_path}")`,
                `url("${URL}")`,
            );
        }
        GM_addStyle(CSS);
    }

    function insert_dialog() {
        $("body").append(dialog_html());
        $(TEXTAREA_SELECTOR).val(get_nick_map_str());

        $(DIALOG_SELECTOR).dialog({
            minWidth: 300,
            width: 700,
            maxWidth: 300,
            buttons: [
                {
                    text: "Save",
                    click: function() {
                        handle_dialog_save(this);
                    }
                },
                {
                    text: "Cancel",
                    click: function() {
                        $(this).dialog("close");
                    }
                }
            ],
            open: handle_dialog_open,
        });
    }

    function display_dialog() {
        if ($(DIALOG_SELECTOR).length == 0) {
            insert_CSS();
            insert_dialog();
        }
        $(DIALOG_SELECTOR).dialog("open");
    }

    GM_registerMenuCommand("Nickname mapping", display_dialog);

    const CSS_SELECTORS = [
        "title",

        /////////////////////////////////////////////////////////
        // Channel pages

        // User list on right-hand side
        "div[class^=membersWrap] span[class^=roleColor]",

        // Attributions in main chat pane
        "span[class^=headerText] span[class^=username]",

        // Mentions within messages
        "div[class*=messageContent] span.mention",

        // When replying, name of user we're replying to
        "div[class^=replyBar] span[class^=name]",

        /////////////////////////////////////////////////////////
        // DM pages

        // DM list in left bar
        "div#private-channels div[class^=nameAndDecorators]",

        // Main friends list when "Friends" is clicked on
        "div[class^=peopleList] div[class^=userInfo] span[class^=username]",

        // Top of individual DM page
        "div[class^=chat] section[class^=title] h3[class*=title]",

        // h3 under individual DM large avatar
        "div[id^=chat-messages] h3[class^=header]"

        // N.B. deliberately not replacing
        //
        // "This is the beginning of your direct message history with"
        //
        // because that's a useful place to show the mapping with
        // the original username.
    ];

    function init() {
        let lastWaited = {};
        let nick_map = get_nick_map();
        for (let selector of CSS_SELECTORS) {
            waitForKeyElements(
                selector,
                () => {
                    debug("waitForKeyElements triggered for", selector);
                    let last = lastWaited[selector];
                    if (!last || (new Date() - last > DEBOUNCE_MS)) {
                        replace_css_elements(nick_map, selector);
                        lastWaited[selector] = new Date();
                    }
                }
            );
        }
        setInterval(replace_all, 5000);
    }

    init();
})();

/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||| File Name Replacer |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
// Which string to replace filename with.
const REPLACE_WITH = "InfiniteDiscord";
// Set to "whitelist" to only affect files with selected extensions, "blacklist" to affect all files but those ones.
const MODE = "blocklist";
// E.g. ["mp4", "gif"] will make the script ignore these files in blacklist mode.
const EXTENSIONS = [];

const _getFilename = Object.getOwnPropertyDescriptor(File.prototype, "name").get;

Object.defineProperty(File.prototype, "name", {
  get() {
    const filename = _getFilename.call(this);
    const extension = filename.split(".").slice(-1)[0];
    const isListed = EXTENSIONS.includes(extension);

    if (
      (MODE === "blacklist" && isListed) ||
      (MODE === "whitelist" && !isListed)
    ) {
      return filename;
    }

    return [REPLACE_WITH, extension].join(".");
  },
});
