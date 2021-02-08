(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{m2mv:function(e,t,r){"use strict";r.r(t),r.d(t,"voiceOverKeyColumns",(function(){return s})),r.d(t,"getStartedRows",(function(){return o})),r.d(t,"navigationRows",(function(){return i})),r.d(t,"tableNavigationRows",(function(){return d})),r.d(t,"_frontmatter",(function(){return p})),r.d(t,"default",(function(){return c}));var n,l=r("+I+c"),a=(r("mXGw"),r("/FXl")),m=r("7XvJ"),s=["Funksjon","Taster"],o=[["Start/stopp VoiceOver","Command + F5"],["Global VoiceOver kombinasjon – Heretter kalt VO","Control + Option"],["Åpne Rotor","VO + U"],["Innstillinger (lydnivå, hastighet, stemme, etc.)","VO + Command + Høyre/Venstre piltast"]],i=[["Neste element","VO + Høyre piltast"],["Forrige element","VO + Venstre piltast"],["Navigere i en tabell","VO + Piltaster"],["Neste fokuserbare element","Tab / Shift + Tab"],["Neste lenke","VO + L"],["Neste overskrift","VO + H"],["Aktiver lenke eller skjemaelement","VO + Space"]],d=[["Lese kolonneoverskrift","VO + C"],["Les hel rad","VO + R"],["Les hel kolonne","VO + R + C"]],p={},k=(n="Table",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),Object(a.mdx)("div",e)}),u={voiceOverKeyColumns:s,navigationRows:i,tableNavigationRows:d,_frontmatter:p},b=m.a;function c(e){var t=e.components,r=Object(l.a)(e,["components"]);return Object(a.mdx)(b,Object.assign({},u,r,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("h1",null,"Skjermleser"),Object(a.mdx)("p",null,"Det er mange ulike skjermlesere hvor alle fungerer noe annerledes. Eksempler på populære alternativer er ",Object(a.mdx)("a",{parentName:"p",href:"https://www.nvaccess.org/"},"NVDA"),", ",Object(a.mdx)("a",{parentName:"p",href:"https://www.freedomscientific.com/products/software/jaws/"},"JAWS"),", ",Object(a.mdx)("a",{parentName:"p",href:"https://help.gnome.org/users/orca/stable/"},"ORCA"),", TalkBack på Android og den innebygde skjermleser på iphone. Husk at vi har de samme utfordringene med ulike skjermlesere som vi har med ulike nettlesere, selvom de baserer seg på samme standard, så vil det kunne være forskjeller på hvordan ulike skjermlesere forstår koden. Så skal du være helt sikker på kvalitet ved skjermleser bruk må man teste i ulike system."),Object(a.mdx)("p",null,"Jøkul-portalen er alltid voksende og vi inviterer alle til å bidra. Har du erfaring med skjermlesere på andre platformer og mulighet til å lage en tilsvarende guide så settes det stor pris på."),Object(a.mdx)("h2",null,"Skjermleser macOS"),Object(a.mdx)("p",null,"Denne guiden er skrevet fra en Mac og vil derfor omfatte bruk av VoiceOver. Av samme årsak vil snarveiene være mac-spesifikke."),Object(a.mdx)("h3",null,"Skjermleser i bruk"),Object(a.mdx)("p",null,"For VoiceOver på Mac gjelder følgende snarveier:"),Object(a.mdx)("p",null,Object(a.mdx)("em",{parentName:"p"},Object(a.mdx)("inlineCode",{parentName:"em"},"VO")," tilsvarer som standard ",Object(a.mdx)("inlineCode",{parentName:"em"},"control + option"),".")),Object(a.mdx)("h4",null,"Komme i gang"),Object(a.mdx)(k,{columns:s,rows:o,mdxType:"Table"}),Object(a.mdx)("h4",null,"Rotor"),Object(a.mdx)("p",null,"En av de viktigste funksjonene til en skjermleser er å gi et raskt overblikk over sidens innhold slik at man kan hoppe til det relevante innholdet uten å måtte lese gjennom hele sidens innhold."),Object(a.mdx)("p",null,"Bruk ",Object(a.mdx)("inlineCode",{parentName:"p"},"VO + U")," for å åpne rotoren. Bruk deretter ",Object(a.mdx)("inlineCode",{parentName:"p"},"Venstre/høyre piltast")," for å bytte mellom type element du ser etter, så ",Object(a.mdx)("inlineCode",{parentName:"p"},"Opp/ned piltast")," for å velge et enkelt element etterfulgt av ",Object(a.mdx)("inlineCode",{parentName:"p"},"Enter"),". ",Object(a.mdx)("inlineCode",{parentName:"p"},"Escape")," lukker rotoren."),Object(a.mdx)("h4",null,"Navigasjon"),Object(a.mdx)(k,{columns:s,rows:i,mdxType:"Table"}),Object(a.mdx)("h4",null,"Tabell"),Object(a.mdx)(k,{columns:s,rows:d,mdxType:"Table"}),Object(a.mdx)("p",null,"Hentet fra Deque university. For enda flere snarveier se deres guide om ",Object(a.mdx)("a",{parentName:"p",href:"https://dequeuniversity.com/screenreaders/voiceover-keyboard-shortcuts"},"VoiceOver keyboard shortcuts"),"."),Object(a.mdx)("h3",null,"Usynlige elementer"),Object(a.mdx)("p",null,"Test at elementer som skal være skjulte også er skjult for skjermleser. Et eksempel kan være en modal som ligger gjemt. Ved å navigere seg gjennom hele tjenesten med skjermleser vil dette oppdages."),Object(a.mdx)("h3",null,"Alt-attributt på bilder"),Object(a.mdx)("p",null,"Bruk navigasjonstastene beskrevet over. Marker gjerne tekst rett før bildet for å bruke det som en snarvei slik at du kun trenger å bruke VO + Høyre for å komme til neste element."),Object(a.mdx)("h3",null,"Dekorativt innhold"),Object(a.mdx)("p",null,"Dekorativt innhold skal ikke leses opp av skjermleser."),Object(a.mdx)("h3",null,"Ikoner"),Object(a.mdx)("p",null,"Ikoner skal hvis mulig ha en alt-attributt, men noen ikoner blir satt i CSS slik som kulepunktene i ",Object(a.mdx)("a",{parentName:"p",href:"https://jokul.fremtind.no/komponenter/list#lister-med-ikon"},"Jøkuls liste med ikoner"),". Test at ikonet gir mening med skjermleser uavhengig av om det har en alt-tekst."),Object(a.mdx)("h3",null,"Skjema"),Object(a.mdx)("p",null,"Et skjema er satt sammen av mange elementer. Alle inndataelementer skal ha ledetekst. Test at det er en tydelig sammenheng mellom ledeteksten og skjemaelementet."),Object(a.mdx)("p",null,"Test at alle knapper leses opp riktig."),Object(a.mdx)("h3",null,"Skjemavalidering"),Object(a.mdx)("p",null,'Ved validering i skjema skal bruker bli gjort oppmerksom på at feilmelding har dukket opp. Skjermleseren skal lese opp denne når den er synlig på skjermen. Test ved å fylle ut noe du vet gir feilmelding og trykk på "Send inn"-knappen eller en ekvivalens mens skjermleser er på.'),Object(a.mdx)("h3",null,"Lenker"),Object(a.mdx)("p",null,"Naviger deg mellom lenker med VO + Command + L (fremover) eller VO + Shift + Command + L (bakover)."),Object(a.mdx)("h3",null,"Lister"),Object(a.mdx)("p",null,"Naviger deg mellom lister med VO + Command + X (fremover) eller VO + Shift + Command + X (bakover). Bruk deretter VO + Venstre/høyre piltast for å velge forrige/neste element."),Object(a.mdx)("h3",null,"Tabell"),Object(a.mdx)("p",null,"Naviger deg mellom tabeller med VO + Command + T (fremover) eller VO + Shift + Command + T (bakover). Bruk deretter VO + Piltaster for å bevege deg i tabellen."),Object(a.mdx)("p",null,"Ytterligere snarveier for tabellnavigering finner du i tabellen på toppen av denne siden."),Object(a.mdx)("h3",null,"Modal/Dialog"),Object(a.mdx)("p",null,"Test at skjermleser får med seg at det dukker opp en modal/dialog. Bruker skal ikke måtte gjette seg frem til at noe har tatt over fokus på skjermen."),Object(a.mdx)("p",null,"Test at skjermleser leser opp elementene i modalen eller dialogen slik at det er tydelig hvordan man kommer seg ut."),Object(a.mdx)("h3",null,"Tidsbegrensning"),Object(a.mdx)("p",null,"Hvis tjenesten har en tidsbegrensning, ofte som følge av at man blir automatisk logget ut etter x antall minutter så må det testes at skjermleser får med seg nedtellingen."),Object(a.mdx)("h3",null,"Overskrifter og struktur"),Object(a.mdx)("p",null,"Åpne rotoren til VoiceOver ved å bruke VO + U. Naviger deg så mellom ulike typer elementer med piltastene og test at alle overskrifter og strukturelle elementer på siden blir lest opp."),Object(a.mdx)("p",null,"Med denne rotoren åpen er det en ypperlig anledning for å sjekke"),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("p",{parentName:"li"},"at overskriftsnivåer stemmer")),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("p",{parentName:"li"},"at landemerkene har et logisk oppsett")),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("p",{parentName:"li"},"at lenketekstene gir mening for seg selv"))))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-texts-universell-utforming-screen-reader-mdx-3fc08c2140004e1720de.js.map