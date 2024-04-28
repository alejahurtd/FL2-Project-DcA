(()=>{"use strict";var t={576:(t,n,e)=>{e.d(n,{A:()=>r});var i=e(601),o=e.n(i),s=e(314),a=e.n(s)()(o());a.push([t.id,'.create-post-button {\n\twidth: 70px;\n\theight: 70px;\n\tborder-radius: 50%;\n\tbackground-color: #1a335bab;\n\tcolor: white;\n\tfont-size: 2.5rem;\n\tborder: none;\n\tcursor: pointer;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\n\tposition: fixed;\n\tbottom: 20px;\n\tright: 43px;\n\tbox-shadow: 0 2px 5px rgba(0, 0, 0, 0.25);\n\tz-index: 1000;\n}\n\n.modal-backdrop {\n\tposition: fixed;\n\ttop: 0;\n\tleft: 0;\n\twidth: 100vw;\n\theight: 100vh;\n\tbackground-color: rgba(0, 0, 0, 0.5);\n\tz-index: 1050;\n}\n\n.modal {\n\tposition: fixed;\n\tright: 4rem;\n\t/* top: 20px; */\n\tbottom: 90px;\n\tbackground-color: #2f60e9;\n\tcolor: white;\n\tpadding: 1rem;\n\tborder-radius: 20px;\n\tbox-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);\n\tz-index: 1100;\n\twidth: 200px;\n\theight: 150px;\n}\n\n.modal-content p {\n\tposition: relative;\n\tfont-size: 1.3rem;\n\tmargin-left: 10px;\n\tpadding-bottom: 10px;\n}\n\n.modal-content p::after {\n\tcontent: \'\';\n\tposition: absolute;\n\tleft: 0;\n\tbottom: 0;\n\twidth: 120px;\n\theight: 2px;\n\tbackground-color: white;\n}\n\n.modal-content p.new-post {\n\tmargin-bottom: 2rem; /* Separación hacia abajo para el párrafo "New Post" */\n}\n\n.modal-content p.new-tweet {\n\tmargin-top: 1rem; /* Separación hacia arriba para el párrafo "New Tweet" */\n}\n\n.close-modal {\n\tposition: absolute;\n\ttop: 0;\n\tright: 20px;\n\tfont-size: 1.7rem;\n\tcursor: pointer;\n\tmargin-top: 10px;\n}\n/* Responsive */\n\n@media (max-width: 768px) {\n\t.create-post-button {\n\t\twidth: 70px;\n\t\theight: 70px;\n\t\tfont-size: 2rem;\n\t\tbottom: 100px;\n\t\tright: 20px;\n\t}\n\n\t.modal {\n\t\twidth: 40%;\n\t\theight: auto;\n\t\tbottom: 170px;\n\t\tpadding: 0.5rem;\n\t\tright: 3rem;\n\t}\n\n\t.modal-content p {\n\t\tfont-size: 1rem;\n\t}\n}\n',""]);const r=a},559:(t,n,e)=>{e.d(n,{A:()=>r});var i=e(601),o=e.n(i),s=e(314),a=e.n(s)()(o());a.push([t.id,"* {\n\tpadding: 0;\n\tmargin: 0;\n}\n\n.menu-bar {\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n\tpadding: 3rem;\n\tbackground-color: #181818;\n}\n\n.icons img {\n\theight: 40px;\n\tmargin-right: 1rem;\n}\n\n.logo img {\n\theight: 35px;\n\tpadding-left: 7rem;\n}\n\n.search-box {\n\tflex-grow: 1;\n\theight: 35px;\n\tdisplay: flex;\n\tjustify-content: center;\n}\n\n.search-box-input {\n\twidth: 25%;\n\tpadding: 1rem 2rem;\n\ttext-align: center;\n\tbackground-color: #2f60e9;\n\tcolor: white;\n\tborder-radius: 20px;\n\tborder: none;\n\toutline: none;\n}\n\n.icons {\n\tdisplay: flex;\n\tjustify-content: space-between;\n\tmargin-right: 9rem;\n\twidth: 6rem;\n}\n\n.search-box-input::placeholder {\n\tcolor: white;\n}\n\n/* version responsive */\n\n@media (max-width: 768px) {\n\t.menu-bar {\n\t\tjustify-content: center;\n\t\tpadding: 2.5rem;\n\t\tpadding-bottom: 0.5rem;\n\t}\n\n\t.logo img {\n\t\theight: 35px;\n\t\tpadding-left: 1rem;\n\t}\n\t.search-box,\n\t.search-box-input,\n\t.icons {\n\t\tdisplay: none; /* Ocultar iconos y barra  */\n\t}\n}\n",""]);const r=a},503:(t,n,e)=>{e.d(n,{A:()=>r});var i=e(601),o=e.n(i),s=e(314),a=e.n(s)()(o());a.push([t.id,"* {\n\tpadding: 0;\n\tmargin: 0;\n}\n\n.menuphone-bar {\n\tdisplay: none;\n}\n\n@media (max-width: 768px) {\n\t.menuphone-bar {\n\t\tdisplay: flex;\n\t\tjustify-content: center;\n\t\talign-items: center;\n\t\twidth: 100%;\n\t\theight: 5%;\n\t\tpadding: 1rem 0.2rem;\n\t\tbackground-color: #3c3c3c;\n\t\tposition: fixed;\n\t\tbottom: 0;\n\t\tleft: 0;\n\t\tz-index: 1000;\n\t}\n\n\t.icons-menu img {\n\t\twidth: 50px;\n\t\tmargin: 0 2px;\n\t\theight: auto;\n\t}\n\t.icons-menu {\n\t\tdisplay: flex;\n\t\tjustify-content: space-between;\n\t\twidth: 80%;\n\t}\n}\n",""]);const r=a},195:(t,n,e)=>{e.d(n,{A:()=>g});var i=e(601),o=e.n(i),s=e(314),a=e.n(s),r=e(417),d=e.n(r),c=new URL(e(928),e.b),p=new URL(e(141),e.b),m=a()(o()),l=d()(c),h=d()(p);m.push([t.id,`.container {\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\twidth: 27rem;\n\theight: 36rem;\n\tborder-radius: 1.6rem;\n\tbackground: #2f60e9;\n\tmargin-bottom: 20px;\n}\n\n.imgContainer {\n\twidth: 90%;\n\theight: 85%;\n\tdisplay: flex;\n\tjustify-content: center;\n\toverflow: hidden;\n\tpadding-block: 1.5rem;\n}\n\n.img {\n\twidth: 100%;\n\theight: 100%;\n\tobject-fit: cover;\n\tborder-radius: 1.2rem;\n}\n\n.userContent {\n\twidth: 100%;\n\theight: 20%;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: flex-start;\n\tpadding-bottom: 1.5rem;\n}\n\n.iconContainer {\n\theight: 25%;\n\tdisplay: flex;\n\tjustify-content: flex-start;\n\tpadding-top: 1rem;\n\tpadding-left: 0.5rem;\n}\n\n.icon {\n\twidth: 100%;\n\theight: 100%;\n\tpadding-left: 1rem;\n\tmargin-top: -1.5rem;\n}\n\n.likeContainer {\n\tpadding-left: 1.7rem;\n\tmargin-top: -2rem;\n}\n\n.likes {\n\tcolor: #cbf900;\n\tfont-size: 1.2rem;\n\tfont-style: normal;\n\tfont-weight: 600;\n}\n\n.likes,\n.username,\n.description {\n\ttext-align: left;\n}\n\n.username-container {\n\tpadding-left: 1.5rem;\n\tmargin-top: -2rem;\n}\n\n.username {\n\tcolor: #fff;\n\tfont-size: 1.2rem;\n\tfont-weight: 600;\n}\n\n.description {\n\tcolor: #fff;\n\tfont-size: 1.2rem;\n\tfont-weight: 400;\n\tpadding-right: 1rem;\n}\n.dislike {\n\tbackground-image: URL(${l});\n\tbackground-size: cover;\n}\n.like {\n\tbackground-image: URL(${h});\n}\n\n@media (max-width: 768px) {\n\t.container {\n\t\twidth: 20rem;\n\t\theight: 27rem;\n\t}\n\n\t.imgContainer {\n\t\theight: 65%;\n\t\tpadding: 1rem 0;\n\t\twidth: 85%;\n\t\tdisplay: flex;\n\t\tjustify-content: center;\n\t\toverflow: hidden;\n\t}\n\n\t.iconContainer {\n\t\theight: 25%;\n\t\tdisplay: flex;\n\t\tjustify-content: flex-start;\n\t\tpadding-top: 0.3rem;\n\t\tpadding-left: 0.2rem;\n\t}\n\n\t.likeContainer {\n\t\tpadding-left: 1rem;\n\t\tmargin-top: -0.3rem;\n\t\tmargin-bottom: 0.2rem;\n\t}\n\t.userContent {\n\t\twidth: 100%;\n\t\theight: 20%;\n\t}\n\t.userContent,\n\t.likeContainer,\n\t.username-container {\n\t\tpadding-left: 1rem;\n\t}\n\n\t.icon {\n\t\tmargin-top: 0;\n\t}\n\n\t.likes,\n\t.username,\n\t.description {\n\t\tfont-size: 1rem;\n\t}\n}\n`,""]);const g=m},83:(t,n,e)=>{e.d(n,{A:()=>r});var i=e(601),o=e.n(i),s=e(314),a=e.n(s)()(o());a.push([t.id,".container {\n\tdisplay: flex;\n\tflex-direction: column;\n\twidth: 25rem;\n\theight: 10rem;\n\tborder-radius: 1.5rem;\n\tbackground: #cbf900;\n\tmargin: 10px;\n\tmargin-bottom: 25px;\n}\n\n.container__tweet-img {\n\theight: 40%;\n\tpadding-block: 2rem;\n\tpadding-inline: 1.5rem;\n\tdisplay: flex;\n\talign-items: center;\n\tflex-direction: row;\n}\n.tweet {\n\twidth: 60%;\n}\n\n.description {\n\tfont-size: 1.18rem;\n\tfont-style: normal;\n\tfont-weight: 500;\n\tcolor: #181818;\n}\n\n.img {\n\twidth: 50%;\n\tdisplay: flex;\n\tjustify-content: center;\n\tbox-sizing: content-box;\n}\n\n.img-container {\n\twidth: 5rem;\n\theight: 5rem;\n\tborder-radius: 50%;\n\toverflow: hidden;\n\tmargin-left: 5rem;\n}\n.img-post {\n\twidth: 100%;\n\theight: 100%;\n\tobject-fit: cover;\n}\n\n.infoUser {\n\theight: 25%;\n\tborder-radius: 0rem 0rem 1.5rem 1.5rem;\n\tbackground: #abda2f;\n\tdisplay: flex;\n\talign-items: flex-end;\n\tbox-sizing: border-box;\n\talign-items: center;\n\tpadding-inline: 1.7rem;\n}\n.username {\n\tcolor: #181818;\n\tfont-size: 1rem;\n\tfont-style: normal;\n\tfont-weight: 600;\n}\n\n/* Responsiveee */\n@media (max-width: 768px) {\n\t.container {\n\t\twidth: 20rem;\n\t\theight: auto;\n\t\tmargin-bottom: 2.5rem;\n\t\tmargin-top: -1rem;\n\t}\n\n\t.container__tweet-img {\n\t\tpadding: 1rem;\n\t\tdisplay: flex;\n\t\tflex-direction: row;\n\t\talign-items: center;\n\t\twidth: 35rem;\n\t\tpadding-top: 1rem;\n\t\tpadding-left: 1.2rem;\n\t}\n\n\t.tweet {\n\t\twidth: 35%;\n\t\tmargin-right: 0.4rem;\n\t\ttext-align: left;\n\t}\n\n\t.description {\n\t\tfont-size: 1.1rem;\n\t}\n\n\t.img-container {\n\t\tmargin: 0 auto;\n\t\twidth: 4rem;\n\t\theight: 4rem;\n\t\tmargin-left: 0.4rem;\n\t\t/* margin-bottom: 1rem;  */\n\t}\n\t.img {\n\t\tmargin: 0 1rem;\n\t\tmargin-left: 1rem;\n\t\t/* margin-bottom: 1rem;  */\n\t}\n\n\t.img-post {\n\t\twidth: 100%;\n\t\theight: 100%;\n\t\tobject-fit: cover;\n\t\tborder-radius: 50%;\n\t}\n\n\t.infoUser {\n\t\tpadding-left: 1rem;\n\t}\n\t.username {\n\t\ttext-align: left;\n\t}\n}\n",""]);const r=a},647:(t,n,e)=>{e.d(n,{A:()=>r});var i=e(601),o=e.n(i),s=e(314),a=e.n(s)()(o());a.push([t.id,"html,\nbody {\n\tmargin: 0;\n\tpadding: 0;\n\theight: 100%;\n\twidth: 100%;\n\tbackground-color: #181818;\n\tfont-family: 'Inter', sans-serif;\n\toverflow-x: hidden;\n}\n\n.container {\n\twidth: auto;\n\tdisplay: grid;\n\tgrid-template-columns: 1.3fr 1fr;\n\tgrid-template-rows: auto auto;\n\tmin-height: 100vh;\n}\n.container-post {\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: end;\n\tmargin-right: 8rem;\n\tmargin-top: 2rem;\n\tbox-sizing: border-box;\n}\n.container-tweet {\n\tdisplay: flex;\n\tflex-direction: column;\n\tbox-sizing: border-box;\n\tmargin-top: 1.5rem;\n}\n\n@media (max-width: 768px) {\n\t.container {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\talign-items: center;\n\t}\n\n\t.container-post,\n\t.container-tweet {\n\t\tmargin-right: 0;\n\t\talign-items: center;\n\t\twidth: 90%;\n\t}\n}\n",""]);const r=a},314:t=>{t.exports=function(t){var n=[];return n.toString=function(){return this.map((function(n){var e="",i=void 0!==n[5];return n[4]&&(e+="@supports (".concat(n[4],") {")),n[2]&&(e+="@media ".concat(n[2]," {")),i&&(e+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),e+=t(n),i&&(e+="}"),n[2]&&(e+="}"),n[4]&&(e+="}"),e})).join("")},n.i=function(t,e,i,o,s){"string"==typeof t&&(t=[[null,t,void 0]]);var a={};if(i)for(var r=0;r<this.length;r++){var d=this[r][0];null!=d&&(a[d]=!0)}for(var c=0;c<t.length;c++){var p=[].concat(t[c]);i&&a[p[0]]||(void 0!==s&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=s),e&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=e):p[2]=e),o&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=o):p[4]="".concat(o)),n.push(p))}},n}},417:t=>{t.exports=function(t,n){return n||(n={}),t?(t=String(t.__esModule?t.default:t),/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),n.hash&&(t+=n.hash),/["'() \t\n]|(%20)/.test(t)||n.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t):t}},601:t=>{t.exports=function(t){return t[1]}},928:(t,n,e)=>{t.exports=e.p+"250f14ae4d635326dee3.png"},141:(t,n,e)=>{t.exports=e.p+"11edfd98bd943d592db7.png"}},n={};function e(i){var o=n[i];if(void 0!==o)return o.exports;var s=n[i]={id:i,exports:{}};return t[i](s,s.exports,e),s.exports}e.m=t,e.n=t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return e.d(n,{a:n}),n},e.d=(t,n)=>{for(var i in n)e.o(n,i)&&!e.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:n[i]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),e.o=(t,n)=>Object.prototype.hasOwnProperty.call(t,n),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var n=e.g.document;if(!t&&n&&(n.currentScript&&(t=n.currentScript.src),!t)){var i=n.getElementsByTagName("script");if(i.length)for(var o=i.length-1;o>-1&&(!t||!/^http(s?):/.test(t));)t=i[o--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})(),e.b=document.baseURI||self.location.href,(()=>{var t=e(647),n=e(195);const i=e.p+"13c42b09bd85382f60650f26ecff8636.png",o=e.p+"10145f3ff0543ece7b1dd580b7a47d14.png",s=e.p+"7fefe267955724a4df33b3f3d0c2e4e5.png",a=e.p+"d5af511b1c82faddaa1ac8508465e54d.png";var r;!function(t){t.id="id",t.image="image",t.isLiked="isLiked",t.isSaved="isSaved",t.likescount="likescount",t.username="username",t.description="description"}(r||(r={}));class d extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get observedAttributes(){return Object.keys({id:null,image:null,isLiked:null,isSaved:null,likescount:null,username:null,description:null})}attributeChangedCallback(t,n,e){switch(t){case r.isLiked:this.isLiked="true"===e;break;case r.isSaved:this.isSaved="true"===e;break;default:this[t]=e}this.render()}connectedCallback(){this.render()}changeLikeState(){this.isLiked=!this.isLiked,this.render()}changeSaveState(){this.isSaved=!this.isSaved,this.render()}render(){if(this.shadowRoot){this.shadowRoot.innerHTML="",this.shadowRoot.innerHTML+=`\n\t\t\t\t\t\t <style> ${n.A}</style>\n\n             <section class="container">\n\t\t\t\t\t\t <div class="imgContainer">\n\t\t\t\t\t\t   <img class= "img" src="${this.image}" alt="Post image">\n\t\t\t\t\t\t </div>\n\t\t\t\t\t\t <div class="userContent">\n\t\t\t\t\t\t   <div class="iconContainer">\n\t\t\t\t\t\t\t    <img class= "icon" src="${this.isLiked?i:o}" alt="Like icon" id="likeBtn">\n\t\t\t\t\t\t\t   <img class= "icon" src="${this.isSaved?s:a}" alt="Save icon" id="saveBtn">\n\t\t\t\t\t\t\t </div>\n\t\t\t\t\t\t\t <div class= "likeContainer">\n\t\t\t\t\t\t\t <p class= "likes">${this.likescount} likes</p>\n\t\t\t\t\t\t\t </div>\n\t\t\t\t\t\t\t <div class= "username-container">\n\t\t\t\t\t\t\t <p\n\t\t\t\t\t\t\t   <span class= "username" >${this.username} </span>: <span class= "description"> ${this.description}</span>\n\t\t\t\t\t\t\t </p>\n\t\t\t\t\t\t\t </div>\n\n\n\n\t\t\t\t\t\t </div>\n            </section>\n        `;const t=this.shadowRoot.querySelector("#likeBtn"),e=this.shadowRoot.querySelector("#saveBtn");null==t||t.addEventListener("click",(()=>this.changeLikeState())),null==e||e.addEventListener("click",(()=>this.changeSaveState()))}}}customElements.define("post-image",d);var c,p=e(83);!function(t){t.image="image",t.description="description",t.username="username"}(c||(c={}));class m extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get observedAttributes(){return Object.keys({image:null,description:null,username:null})}attributeChangedCallback(t,n,e){this[t]=e,this.render()}connectedCallback(){this.render()}render(){this.shadowRoot&&(this.shadowRoot.innerHTML="",this.shadowRoot.innerHTML+=`\n\t\t\t\t\t\t <style> ${p.A}</style>\n      <section class="container">\n\t\t\t\t<div class="container__tweet-img">\n\t\t\t\t  <div class=tweet>\n\t\t\t\t\t <p class= "description"> ${this.description} </p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="img">\n\t\t\t\t\t <div class= "img-container">\n\t\t\t\t\t   <img class= "img-post" src="${this.image}" alt="Post image">\n\t\t\t\t   </div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class='infoUser'>\n\t\t\t\t <p class= "username"> ${this.username} </p>\n\t\t\t\t</div>\n\t\t\t</section>\n\n        `)}}customElements.define("post-tweet",m);var l=e(559);const h=e.p+"f450e5c2e01a158d6011adc7e4cf416e.png",g=e.p+"03d9e4e5609a75e81a6ad18845dd26f9.png",u=e.p+"15e1038488b41760e203e22f5bd84610.png",f=e.p+"689225dd223debf8fcfd8c571a84c868.png";class b extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.render()}render(){this.shadowRoot&&(this.shadowRoot.innerHTML="",this.shadowRoot.innerHTML+=`\n              <style>${l.A}</style>\n              <nav class="menu-bar">\n                  <div class="logo">\n                  <img src="${h}" alt="logo">\n                  </div>\n                  <div class="search-box">\n                      <input type="text" class="search-box-input"  placeholder="Search...">\n                  </div>\n                  <div class="icons">\n                    <img src="${g}" alt="Icono home">\n                    <img src="${u}" alt="Icono home">\n                    <img src="${f}" alt="Icono profile">\n                  </div>\n\n              </nav>\n              <div class="line-separator"></div>\n          `)}}customElements.define("menu-bar",b);var x=e(576);class w extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=`\n\t\t\t\t\t<style>${x.A}</style>\n\t\t\t\t\t<button id="createPostButton" class="create-post-button">+</button>\n\t\t\t`}connectedCallback(){this.shadowRoot.querySelector("#createPostButton").addEventListener("click",(()=>{this.openModal()}))}openModal(){const t=document.createElement("div");t.className="modal-backdrop";const n=document.createElement("div");n.className="modal",n.innerHTML='\n\t\t<span class="close-modal">&times;</span>\n\t\t<div class="modal-content">\n\t\t\t\t<p class= "new-post">New post</p>\n\t\t\t\t<p class= "new-tweet">New tweet</p>\n\t\t</div>\n\t\t',this.shadowRoot.appendChild(t),this.shadowRoot.appendChild(n),t.addEventListener("click",(()=>{t.remove(),n.remove()})),n.querySelector(".close-modal").addEventListener("click",(()=>{t.remove(),n.remove()}))}}customElements.define("create-post-button",w);var v=e(503);const y=e.p+"11bab7b91764f0f3c14609f055cd31f4.png",k=e.p+"14de03a274457481de4a07f2f64694eb.png",j=e.p+"5826cf32218b70a4144cb0a4a28dc33b.png",L=e.p+"61abe21eed1efe3040879fa85d90f150.png";class S extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.render()}render(){this.shadowRoot&&(this.shadowRoot.innerHTML="",this.shadowRoot.innerHTML+=`\n              <style>${v.A}</style>\n              <nav class="menuphone-bar">\n                  <div class="icons-menu">\n                    <img class= "icons-menu img" src="${y}" alt="search">\n                    <img class= "icons-menu img" src="${k}" alt="notification">\n                    <img class= "icons-menu img" src="${j}" alt="home">\n                    <img class= "icons-menu img" src="${L}" alt="profile">\n                  </div>\n\n              </nav>\n          `)}}customElements.define("menu-phone",S);const C=[{id:"1",image:"https://images.pexels.com/photos/11000413/pexels-photo-11000413.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",isLiked:!0,isSaved:!0,likesCount:"950",username:"@guti_santi",description:"Ready for the next marathons"},{id:"2",image:"https://i.pinimg.com/564x/8d/e2/53/8de253777f0974e37f142cadb822593b.jpg",isLiked:!0,isSaved:!1,likesCount:"590",username:"@alejah__",description:"Exercise: self-❤️  in motion"},{id:"3",image:"https://i.pinimg.com/564x/73/b2/cb/73b2cb44bafd88ef28423d8ecdf629f0.jpg",isLiked:!0,isSaved:!0,likesCount:"1300",username:"@ana_hillton",description:"Energy for the day ✨🥕"},{id:"4",image:"https://i.pinimg.com/564x/81/1d/ec/811dec8d7c02e6abfba458ece184d376.jpg",isLiked:!0,isSaved:!1,likesCount:"480",username:"@juanesv08",description:"Mastering the ropes 🔥"}],E=[{image:"https://images.pexels.com/photos/6577906/pexels-photo-6577906.jpeg?auto=compress&cs=tinysrgb&w=600",description:"Hydration is the key to a vibrant life 💧🔑",username:"@nata_ortiz"},{image:"https://images.pexels.com/photos/17895316/pexels-photo-17895316/free-photo-of-mujer-verano-modelo-rubia.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",description:"Nature walks are my therapy🌿❤️  #NatureHeals ",username:"@alejah__"},{image:"https://images.pexels.com/photos/6455804/pexels-photo-6455804.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",description:"🌊🌞 Beach day bliss. #SeaLove",username:"@davidhc__"},{image:"https://images.pexels.com/photos/16182644/pexels-photo-16182644/free-photo-of-hombre-en-pie-de-pie-joven.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",description:" Early run, best start. #MorningRun 🏃‍♂️",username:"@juanesv08"},{image:"https://images.pexels.com/photos/16182644/pexels-photo-16182644/free-photo-of-hombre-en-pie-de-pie-joven.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",description:"🏋️‍♀️💪 New PR on the deadlift! #StrengthGoals",username:"@juanesv08"},{image:"https://images.pexels.com/photos/6577906/pexels-photo-6577906.jpeg?auto=compress&cs=tinysrgb&w=600",description:"Post-workout smoothie 💪🌿",username:"@nata_ortiz"},{image:"https://images.pexels.com/photos/17538474/pexels-photo-17538474/free-photo-of-mujer-joven-sonriente-sonriendo.jpeg?auto=compress&cs=tinysrgb&w=600",description:"Snack time: veggies and hummus🥒🥕 #HealthySnacks",username:"@ana_hillton"},{image:"https://images.pexels.com/photos/4531700/pexels-photo-4531700.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",description:"📖✨ Found a gem of a book! #ReadingJoy",username:"@andreasv__"},{image:"https://images.pexels.com/photos/16182644/pexels-photo-16182644/free-photo-of-hombre-en-pie-de-pie-joven.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",description:"HIIT workout done. Who else loves the burn? 🤾‍♀️🔥",username:"@juanesv08"},{image:"https://images.pexels.com/photos/17895316/pexels-photo-17895316/free-photo-of-mujer-verano-modelo-rubia.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",description:"🤸‍♀️🧘‍♂️ Yoga and gymnastics fusion. Flexibility is key! ",username:"@alejah__"},{image:"https://images.pexels.com/photos/6455804/pexels-photo-6455804.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",description:"Boxing class was intense today 🥊🔥 ",username:"@davidhc__"},{image:"https://images.pexels.com/photos/17538474/pexels-photo-17538474/free-photo-of-mujer-joven-sonriente-sonriendo.jpeg?auto=compress&cs=tinysrgb&w=600",description:"Green tea kind of morning. #ZenStart 🍵",username:"@ana_hillton"}];class R extends HTMLElement{constructor(){super(),this.PostImageList=[],this.PostTweetList=[],this.attachShadow({mode:"open"}),C.forEach((t=>{const n=this.ownerDocument.createElement("post-image");n.setAttribute(r.image,t.image),n.setAttribute(r.isLiked,t.isLiked?"true":"false"),n.setAttribute(r.isSaved,t.isSaved?"true":"false"),n.setAttribute(r.likescount,t.likesCount),n.setAttribute(r.username,t.username),n.setAttribute(r.description,t.description),this.PostImageList.push(n),console.log("list",this.PostImageList)})),E.forEach((t=>{const n=this.ownerDocument.createElement("post-tweet");n.setAttribute(c.image,t.image),n.setAttribute(c.description,t.description),n.setAttribute(c.username,t.username),this.PostTweetList.push(n),console.log("list",this.PostTweetList)}))}connectedCallback(){this.render()}render(){var n;this.shadowRoot&&(this.shadowRoot.innerHTML+=`\n            <style>${t.A}</style>`);const e=this.ownerDocument.createElement("menu-bar");e.className="menubar";const i=this.ownerDocument.createElement("menu-phone");i.className="menuphone";const o=this.ownerDocument.createElement("section");o.className="container";const s=this.ownerDocument.createElement("div");s.className="container-post",this.PostImageList.forEach((t=>{s.appendChild(t)})),o.appendChild(s);const a=this.ownerDocument.createElement("div");a.className="container-tweet",this.PostTweetList.forEach((t=>{a.appendChild(t)})),o.appendChild(a);const r=this.ownerDocument.createElement("create-post-button");this.shadowRoot.appendChild(r),this.shadowRoot.appendChild(e),this.shadowRoot.appendChild(i),null===(n=this.shadowRoot)||void 0===n||n.appendChild(o)}}customElements.define("app-container",R)})()})();