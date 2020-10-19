(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"5K7j":function(e,a,t){},JqLM:function(e,a,t){"use strict";t.r(a),t.d(a,"_frontmatter",(function(){return g})),t.d(a,"default",(function(){return y}));var n=t("+I+c"),l=t("mXGw"),r=t.n(l),s=t("/FXl"),i=t("7XvJ");t("5K7j");var c,o=["component-spacing--xxs","component-spacing--xs","component-spacing--small","component-spacing--medium","component-spacing--large","component-spacing--xl","component-spacing--xxl","component-spacing--giant"],p=["layout-spacing--small","layout-spacing--medium","layout-spacing--large","layout-spacing--xl","layout-spacing--xxl"],m=function(e){var a=e.spacing,t=Object(l.useState)("N/A"),n=t[0],s=t[1],i="N/A"!==n?parseInt(n)/16:n;return r.a.createElement("tr",{className:"jkl-portal-spacing-example-table__row"},r.a.createElement("td",{"data-header":"Spacing:",className:"jkl-portal-spacing-example-table__data"},r.a.createElement("div",{className:"jkl-"+a+"-top",style:{display:"none"},ref:function(e){s(function(e,a){var t,n;return e&&(null===(t=window)||void 0===t||null===(n=t.getComputedStyle(e))||void 0===n?void 0:n.getPropertyValue(a))||"N/A"}(e,"margin-top"))}}),r.a.createElement("div",{"aria-label":a+",  "+n,style:{backgroundColor:"currentColor",width:i+"rem",height:i+"rem"},title:n})),r.a.createElement("td",{"data-header":"Variabel:",className:"jkl-portal-spacing-example-table__data"},r.a.createElement("code",{className:"jkl-portal-inline-code"},"$",a)),r.a.createElement("td",{"data-header":"Klasse:",className:"jkl-portal-spacing-example-table__data"},r.a.createElement("code",{className:"jkl-portal-inline-code"},".jkl-"+a+"-<top|right|bottom|left|all>")))},b=function(e){var a=e.values;return r.a.createElement("table",{className:"jkl-portal-spacing-example-table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{className:"jkl-portal-spacing-example-table__header"},"Spacing"),r.a.createElement("th",{className:"jkl-portal-spacing-example-table__header"},"Variabel"),r.a.createElement("th",{className:"jkl-portal-spacing-example-table__header"},"Klasse"))),r.a.createElement("tbody",null,a.map((function(e,a){return r.a.createElement(m,{key:a,spacing:e})}))))},u=function(){return r.a.createElement(b,{values:o})},d=function(){return r.a.createElement(b,{values:p})},g={},k=(c="Ingress",function(e){return console.warn("Component "+c+" was not imported, exported, or provided by MDXProvider as global scope"),Object(s.b)("div",e)}),j={_frontmatter:g},v=i.a;function y(e){var a=e.components,t=Object(n.a)(e,["components"]);return Object(s.b)(v,Object.assign({},j,t,{components:a,mdxType:"MDXLayout"}),Object(s.b)(k,{mdxType:"Ingress"},"Vi tilbyr Sass-variabler og utility-klasser for verdiene i spacing-skalaene til Jøkul."),Object(s.b)("h2",null,"Bruk"),Object(s.b)("p",null,"Det er to spacing-skalaer i Jøkul; en til bruk innad i komponenter og en til bruk i layout og flyt. Du kan bruke skalaene ved hjelp av Sass-variabler du kan sette inn i ditt eget stilark, eller bruke hjelpeklassene direkte på elementer i koden."),Object(s.b)("p",null,"Variablene importerer du fra ",Object(s.b)("inlineCode",{parentName:"p"},"@fremtind/jkl-core/variables/_spacing.scss"),". Husk å bruke riktig importsyntaks for byggverktøyet ditt når du importerer. De kan da brukes slik:"),Object(s.b)("pre",null,Object(s.b)("code",Object.assign({parentName:"pre"},{className:"language-scss"}),'@import "~@fremtind/jkl-core/variables/_spacing.scss";\n\n.jkl-your-component {\n    padding-left: $component-spacing--medium;\n}\n')),Object(s.b)("p",null,"Utility-klassene setter en verdi fra spacingskalaene som margin på elementet som har klassen. Det finnes varianter for å sette margin på ",Object(s.b)("inlineCode",{parentName:"p"},"top"),", ",Object(s.b)("inlineCode",{parentName:"p"},"right"),", ",Object(s.b)("inlineCode",{parentName:"p"},"bottom")," og ",Object(s.b)("inlineCode",{parentName:"p"},"left"),", samt for ",Object(s.b)("inlineCode",{parentName:"p"},"all"),"e sider. Klassene kan brukes slik:"),Object(s.b)("pre",null,Object(s.b)("code",Object.assign({parentName:"pre"},{className:"language-html"}),'<div class="jkl-layout-spacing--xl-all">\n    <span class="jkl-layout-spacing--small-right">Hallo</span>\n    verden\n</div>\n')),Object(s.b)("div",{className:"jkl-layout-spacing--xl-top"}),Object(s.b)("h3",null,"Komponentskala"),Object(s.b)(u,{mdxType:"ComponentSpacingTable"}),Object(s.b)("h3",null,"Layoutskala"),Object(s.b)(d,{mdxType:"LayoutSpacingTable"}))}y.isMDXComponent=!0}}]);
//# sourceMappingURL=component---packages-core-documentation-spacing-mdx-42b7b05c54607ea3b348.js.map