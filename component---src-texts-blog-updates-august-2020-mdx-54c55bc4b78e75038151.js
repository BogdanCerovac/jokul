(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{dMKw:function(e,t,r){"use strict";r.r(t),r.d(t,"_frontmatter",(function(){return a})),r.d(t,"default",(function(){return o}));var n=r("+I+c"),l=(r("mXGw"),r("/FXl")),i=r("7XvJ"),a={},m={_frontmatter:a},d=i.a;function o(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(l.mdx)(d,Object.assign({},m,r,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"Dette er første oppdateringspost fra Jøkul. Planen er at det kommer flere av disse med jevne mellomrom, så blir det forhåpentligvis lettere å følge med på hva som skjer med Jøkul."),Object(l.mdx)("h2",null,"📰 Oppdateringer"),Object(l.mdx)("p",null,"Før fellesferien tok oss ut til Prekestolen, Loen og Lofoten med bil, hadde vi en sprint med fokus på portalen. Målet var å få på plass dokumentasjon av alle nøkkelverdier som ikke var dokumentert tidligere. Bildebruk, bevegelse, spacing og typografi har fått både bruk og variabler dokumentert. Både for utviklere og designere. "),Object(l.mdx)("p",null,"For pakkene våre har det ikke skjedd de største endringene, men det er gjort en del forbedringer og optimaliseringer. Eneste breaking change iløpet av siste periode er at det er lagt til forwardRef for checkbox, gitt at man ikke har gjort noe spesielt med checkbox komponenten, så innebærer det ingen endring. Men det betyr at man nå kan sette referanse på checkbox, og det vil peke på det riktige input-elementet. "),Object(l.mdx)("h2",null,"🌱 Releaser"),Object(l.mdx)("h3",null,"Pakker"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("a",{parentName:"li",href:"https://github.com/fremtind/jokul/pull/1140"},"💡 Mindre pakkestørrelser"),Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Simen gjorde et grundig stykke arbeid graving i byggingen av både portal og pakkene våre. Ved å optimalisere byggprosessen ble pakkestørrelsen redusert med 15-40%. Også portalens bundle ble redusert med ca 30%."))),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("a",{parentName:"li",href:"https://github.com/fremtind/jokul/pull/1103"},"✏️ Støtte for ref i checkbox"),Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Er breaking change fordi checkbox komponenten nå blir pakket inn i en forwardRef, for de fleste vil det fortsatt virke som normalt."))),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("a",{parentName:"li",href:"https://github.com/fremtind/jokul/pull/1093"},"✏️ Farger som utility klasser"),Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Både spacing og farger er nå tilgjengelige som utilityklasser, så de enkleste stilene kan nå oppnåes uten å måtte skrive egen css.")))),Object(l.mdx)("h3",null,"Portalen"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("a",{parentName:"li",href:"https://github.com/fremtind/jokul/pull/1078"},"🧪 Itegrasjonstester i portalen")),Object(l.mdx)("li",{parentName:"ul"},"📚 Dokumentasjon av farger"),Object(l.mdx)("li",{parentName:"ul"},"📚 Dokumentasjon av spacing"),Object(l.mdx)("li",{parentName:"ul"},"📚 Dokumentasjon av typografi"),Object(l.mdx)("li",{parentName:"ul"},"📚 Ny bildebruk side"),Object(l.mdx)("li",{parentName:"ul"},"💅 Responsiv meny"),Object(l.mdx)("li",{parentName:"ul"},"💅 Sideoverganger og animasjoner")),Object(l.mdx)("h2",null,"🔮 Kommende"),Object(l.mdx)("p",null,"I perioden fremover ligger det enkelte forbedringer i pakkene, oppdatering av design til nyeste stilen og bugfixer. Det jobbes også med en mer robust hosting løsning via Vercel som feks også vil vi preview av PR, som vil gjøre det mye enklere for designere å verifisere endringer i kode."),Object(l.mdx)("h3",null,"Pakker"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("a",{parentName:"li",href:"https://github.com/fremtind/jokul/pull/1139"},"🦽 Hook for reduced motion"),Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Løser bug ved reduced motion for komponenter som bruker useAnimation hooken, og tilgjengeliggjør reduced motion OS-settingen for oss i js-kontekst. Brukes feks til å fjerne paralax effekt og andre større animasjoner for brukere som ikke ønsker det. Blir viktig for kundefacing applikasjoner som benytter seg av animasjoner og fortsatt bevare god brukeropplevelse for alle brukere."))),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("a",{parentName:"li",href:"https://github.com/fremtind/jokul/pull/1153"},"⚰️ Fjerne divider line"),Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Divider line fant seg aldri plass i Figma, så dermed ble den aldri ordentlig tatt i bruk heller. Så for nå blir den fjernet.  "))),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("a",{parentName:"li",href:"https://github.com/fremtind/jokul/pull/1154"},"💅 Oppdatert design Accordion"),Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Accordion med tidlig utgave av designet får et løft og darkmode støtte"))),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("a",{parentName:"li",href:"https://github.com/fremtind/jokul/issues/1167"},"💅 Oppdatert design på lenker"),Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Lenker med tidlig utgave av designet får et løft og darkmode støtte")))),Object(l.mdx)("h3",null,"Portalen"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("a",{parentName:"li",href:"https://github.com/fremtind/jokul/pull/1142"},"Grupering i sidemenyen"),Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Nå som både utilityklasser, hooks og valideringsregler dokumenteres under komponentersiden, så begynner det bli vanskelig å holde oversikten.")))))}o.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-texts-blog-updates-august-2020-mdx-54c55bc4b78e75038151.js.map