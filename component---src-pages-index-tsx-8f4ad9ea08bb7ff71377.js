(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{FEHE:function(e,t,a){"use strict";var n=a("X6VK"),r=a("Sp5b"),i=a("Alw5"),l="".startsWith;n(n.P+n.F*a("Fl7L")("startsWith"),"String",{startsWith:function(e){var t=i(this,e,"startsWith"),a=r(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),n=String(e);return l?l.call(t,n,a):t.slice(a,a+n.length)===n}})},QeBL:function(e,t,a){"use strict";a.r(t);var n=a("mXGw"),r=a.n(n),i=a("Nhdc"),l=(a("asZ9"),a("lQyR"),a("YhIr"),a("8Jek")),s=a.n(l),o=(a("tfWc"),a("Abof")),c=Object(n.forwardRef)((function(e,t){var a=e.onEnter,r=e.onLeave,i=e.render,l=e.threshold,s=void 0===l?[.7]:l,c=Object(n.useState)(!1),p=c[0],m=c[1],u=Object(n.useRef)(null),d=t||u,f={rootMargin:"0px",threshold:s};return Object(o.c)(d,(function(e){var t=e.some((function(e){return e.isIntersecting}));p&&!t&&r?r(e):p||t||!r?!p&&t&&a&&a(e):r(e),m(t)}),(function(){return console.log("IntersectionObserver not supported")}),f),i(d)}));c.displayName="VisibleDetector";var p=function(e){var t=e.text,a=e.delay,i=e.children,l=Object(n.useState)(-1),o=l[0],p=l[1],m=Object(n.useState)(!0),u=m[0],d=m[1],f=Object(n.useState)(0),h=f[0],g=f[1],v=Object(n.useState)(!1)[0],_=Array.from(new Array(t.length)).map((function(){return 500*Math.random()+250})),k=Object(n.useRef)(),j=Object(n.useMemo)((function(){return t.split("").filter((function(e,t){return t<=o}))}),[o,t]);Object(n.useEffect)((function(){j.length===t.length&&function(){var e=k.current;if(e){var t=e.parentElement,a=e.offsetHeight;a+=parseInt(window.getComputedStyle(e).getPropertyValue("margin-top")),a+=parseInt(window.getComputedStyle(e).getPropertyValue("margin-bottom")),a+=parseInt(window.getComputedStyle(e).getPropertyValue("padding-top")),a+=parseInt(window.getComputedStyle(e).getPropertyValue("margin-bottom"));var n={top:a+=parseInt(window.getComputedStyle(t).getPropertyValue("padding-top")),left:0,behavior:"smooth"};window.setTimeout((function(){window.scrollY>a/2||window.scrollTo(n)}),500)}}()}),[j,t]);var E=Math.random()*a+a/2;!function(e,t){var a=Object(n.useRef)();Object(n.useEffect)((function(){a.current=e})),Object(n.useEffect)((function(){if(null!==t){var e=setInterval((function(){a&&a.current&&a.current()}),t);return function(){return clearInterval(e)}}}),[t])}((function(){o>=t.length?d(!1):p(o+1)}),u?E<50?a:E:null);var S=s()("jkl-portal__delay-text",{"jkl-portal__delay-text--hidden":v}),w=s()("jkl-portal__delay-text__content","jkl-portal__delay-text__underscore",{"jkl-portal__delay-text__underscore--hidden":!u}),b=s()("jkl-portal__delay-text__content-text",{}),y=s()("jkl-portal__delay-text__children");return r.a.createElement(r.a.Fragment,null,r.a.createElement(c,{onLeave:function(){},threshold:[0],ref:k,render:function(e){return r.a.createElement("div",{ref:e,className:S},r.a.createElement("div",{className:w},j.map((function(e,t){return r.a.createElement("span",{key:e+t,className:b,style:{transitionDelay:_[t]+"ms"},onTransitionEnd:function(){return g(h+1)}},e)}))))}}),r.a.createElement("div",{className:y},i))},m=(a("HrjT"),a("r5nU"),a("pxef"),a("FEHE"),a("ScpY"),a("Wbzz")),u=(a("YIew"),function(e){var t=e.heading,a=e.link,n=e.children,i=a.startsWith("http")?"↗":"→";return r.a.createElement("button",{className:"jkl-portal-card",onClick:function(){return Object(m.b)(a)}},r.a.createElement("p",{className:"jkl-portal-card__heading"},t),r.a.createElement("div",{className:"jkl-portal-card__content"},n),r.a.createElement("div",{className:"jkl-portal-card__arrow"},i))}),d=(a("lzD/"),function(e){var t=e.children,a=e.vertical,n=s()("jkl-portal__card-list",{"jkl-portal__card-list--vertical":a});return r.a.createElement("div",{className:n},t)});function f(e){var t=e.className,a=e.width,n=e.height,i=e.contextRef;return r.a.createElement("canvas",{className:t,width:a,height:n,ref:function(e){return e?i(e.getContext("2d")):null}})}var h;a("mGGU");function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}!function(e){e[e.None=0]="None",e[e.Elevated=1]="Elevated",e[e.Movement=2]="Movement",e[e.Clarity=3]="Clarity"}(h||(h={}));var v=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).generateClasses=function(e){var t;return s()(e,((t={})[e+"--elevated"]=1===a.props.principleState,t[e+"--movement"]=2===a.props.principleState,t[e+"--clarity"]=3===a.props.principleState,t))},a.saveContext=a.saveContext.bind(g(a)),a.draw=a.draw.bind(g(a)),a.generateClasses=a.generateClasses.bind(g(a)),a.getScale=a.getScale.bind(g(a)),a.lastMinScale=0,a.lastMaxScale=0,a.updatedScaleAt=0,a.tileSize=0,a.tiles=7,a.ctx=null,a.size=[250,250],a}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var i=n.prototype;return i.componentDidMount=function(){this.lastMinScale=this.props.minScale,this.lastMaxScale=this.props.maxScale,this.updatedScaleAt=0},i.componentDidUpdate=function(e){this.props.minScale!==e.minScale&&(this.lastMinScale=this.props.minScale,this.updatedScaleAt=Date.now()),this.props.maxScale!==e.maxScale&&(this.lastMaxScale=this.props.maxScale,this.updatedScaleAt=Date.now()),this.draw()},i.componentWillUnmount=function(){this.animationTimeout&&window.clearTimeout(this.animationTimeout)},i.saveContext=function(e){e&&(this.ctx=e,this.size=[this.ctx.canvas.width,this.ctx.canvas.height],this.tileSize=this.size[0]/this.props.tiles,this.draw())},i.getScale=function(){var e,t=(Date.now()-this.updatedScaleAt)/150;return e=t>1?1:t,[this.lastMinScale+(this.props.minScale-this.lastMinScale)*e,this.lastMaxScale+(this.props.maxScale-this.lastMaxScale)*e]},i.draw=function(){var e=this,t=this.tileSize,a=this.ctx,n=this.size,r=this.props.tiles,i=n[0],l=n[1];a&&(a.clearRect(0,0,i,l),a.fillStyle="black");for(var s=Date.now(),o=this.getScale(),c=0;c<r;c++)for(var p=0;p<r;p++){var m=t,u=(Math.abs(Math.sin(.001*s+50*c+50*p))*(o[1]-o[0])+o[0])*t;a&&a.fillRect(c*m-u/2+t/2,p*m-u/2+t/2,u,u)}this.animationTimeout&&window.clearTimeout(this.animationTimeout),this.animationTimeout=window.setTimeout((function(){window.requestAnimationFrame(e.draw)}),1e3/30)},i.render=function(){return r.a.createElement(f,{className:this.generateClasses("jkl-portal-principle-diamond__"+this.props.type),contextRef:this.saveContext,height:250,width:250})},n}(r.a.Component);v.defaultProps={tiles:7,minScale:.2,maxScale:.8};t.default=function(e){var t=e.location,a=Object(n.useState)(0),l=a[0],s=a[1],o=function(e){s(e)},f=r.a.useRef(null),h=function(e){e===l&&s(0)},g=Object(n.useMemo)((function(){switch(l){case 2:return.2;case 3:return.1;default:return 1.1}}),[l]),_=Object(n.useMemo)((function(){switch(l){case 2:return.8;case 3:return.3;default:return 1.1}}),[l]);return r.a.createElement(i.c,{location:t,isFrontpage:!0},r.a.createElement(p,{ref:f,text:"Jøkul Designsystem",delay:100},r.a.createElement("div",{className:"jkl-portal-frontpage"},r.a.createElement("section",{className:"jkl-portal-frontpage__section-intro"},r.a.createElement("h2",{className:"jkl-title-small"},"Velkommen til Jøkul — designsystemet til Fremtind. Her har vi samlet alt du trenger for å lage løsninger i vår profil."),r.a.createElement("div",{className:"jkl-portal-frontpage__section-intro--content"},r.a.createElement("div",{className:"jkl-portal-frontpage__section-intro--image-container"},r.a.createElement("div",{className:"jkl-portal-frontpage__section-intro--image",style:{backgroundImage:"url("+Object(m.c)("assets/img/frontpage.jpg")+")"}})),r.a.createElement(d,{vertical:!0},r.a.createElement(u,{heading:"For utviklere",link:"/komigang/utvikling"},"Her får du vite det mest grunnlegende før du setter i gang å bruke Jøkul."),r.a.createElement(u,{heading:"For designere",link:"/komigang/design"},"Her får du vite det mest grunnlegende før du setter i gang å bruke Jøkul."),r.a.createElement(u,{heading:"Prosessen",link:"/komigang/prosessen"},"Hvordan du kan jobbe med designsystemet.")))),r.a.createElement("section",{className:"jkl-portal-frontpage__section-principles"},r.a.createElement("h2",{className:"jkl-title-small jkl-portal-frontpage__section-principles--heading"},"Hovedprinsipper du kan tenke på for å designe en løsning til vår profil på best mulig måte:"),r.a.createElement("div",{className:"jkl-portal-frontpage__section-principles__diamond-container"},r.a.createElement("div",{className:"jkl-portal-principle-diamond"},r.a.createElement(v,{principleState:l,minScale:g,maxScale:_,type:"diamond"}),r.a.createElement(v,{principleState:l,minScale:g,maxScale:_,type:"shadow"}))),r.a.createElement("div",{className:"jkl-portal-frontpage__section-principles__principle--container"},r.a.createElement(c,{onEnter:function(){return o(1)},onLeave:function(){return h(1)},render:function(e){return r.a.createElement("div",{ref:e,className:"jkl-portal-frontpage__section-principles__principle"},r.a.createElement("div",{className:"jkl-portal-frontpage__section-principles__principle--container"},r.a.createElement("h1",{className:"jkl-title-large"},"Elevasjon"),r.a.createElement("p",{className:"jkl-lead"},"Vi løfter det som er viktig og skaper et naturlig informasjonshierarki.")))}}),r.a.createElement(c,{onEnter:function(){return o(2)},onLeave:function(){return h(2)},render:function(e){return r.a.createElement("div",{ref:e,className:"jkl-portal-frontpage__section-principles__principle"},r.a.createElement("div",{className:"jkl-portal-frontpage__section-principles__principle--container"},r.a.createElement("h1",{className:"jkl-title-large"},"Bevegelse"),r.a.createElement("p",{className:"jkl-lead"},"Vi skal utforske, se fremover og være tilpasningsdyktige.")))}}),r.a.createElement(c,{onEnter:function(){return o(3)},onLeave:function(){return h(3)},render:function(e){return r.a.createElement("div",{ref:e,className:"jkl-portal-frontpage__section-principles__principle"},r.a.createElement("div",{className:"jkl-portal-frontpage__section-principles__principle--container"},r.a.createElement("h1",{className:"jkl-title-large"},"Klarhet"),r.a.createElement("p",{className:"jkl-lead"},"Vi skal fremstå som ærlig og klar, med en tydelig og varm stemme")))}}))),r.a.createElement("section",{className:"jkl-portal-frontpage__section-contribute"},r.a.createElement("div",{className:"jkl-portal-frontpage__section--wrapper"},r.a.createElement("h2",{className:"jkl-title-small"},"Bidra"),r.a.createElement("p",{className:"jkl-lead"},"Jøkul er et levende designsystem. For at vi skal holde det relevant, er det viktig at alle som bruker designsystemet og merkevareprofilen vår hjelper til med å forbedre det vi har. Send oss en mail eller bidra i GitHub."),r.a.createElement("p",{className:"jkl-lead"},"Finn oss i Teams kanalen “Support Designsystem” eller kom på åpent forum hver tirsdag 14 til 14.30. Her informerer vi om hva som skjer og tar imot innspill."))))))}},ScpY:function(e,t,a){"use strict";a("LEAW")("link",(function(e){return function(t){return e(this,"a","href",t)}}))}}]);
//# sourceMappingURL=component---src-pages-index-tsx-8f4ad9ea08bb7ff71377.js.map