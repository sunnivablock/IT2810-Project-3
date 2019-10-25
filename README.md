# The Barometer
**Se prosjektet**: http://it2810-09.idi.ntnu.no/prosjekt3/
**Se full database**: http://it2810-09.idi.ntnu.no:8000/api/persons
## Readme - Prosjekt 3 
I dette prosjektet har vi laget et barometer som rangerer mannlige kjendiser. 

Nettsiden består av fire hoveddeler: Et søkefelt, en tabell med data, et skjema for input, og en grafisk visning av dataene. 

I søkefeltet kan man søke på opptil fire attributter, samt filtrere og sortere personene i databasen på ønsket attributt og rekkefølge. Søk og/eller sortering vises ved å trykke på “apply”-knappen, og for å vise alle dataene igjen, trykker man på “show all”. Det er også en tabell for visning av dataene med mulighet for å bla mellom flere sider ved store resultatsett, velge antall elementer per side, samt se flere detaljer om hvert av objektene i databasen ved å trykke på navnet deres. Videre er det et brukerstyrt skjema (med egnet validering), der brukeren selv kan legge til nye personer, og gi de egen rangering. Det kan ikke postes før alle feltene er fylt ut. Disse dataene lagres i databasen, og vises med en gang i tabellen. Sist er det også en grafisk visning av de tre topprangerte kjendisene, som fortløpende oppdateres ved endringer blant objektene med høyest rangering i databasen.

### Teknologi
Vi har valgt å lage vår applikasjon med MERN-stacken, med mongodb som database, express.js og node.js for server og routing (back-end), og React som front-end-løsning. Under har vi argumentert for de valgene for teknologi vi har implementert. 

**React**: Vi har i større grad enn tidligere valgt å bruke funksjonelle komponenter, da det ikke alltid har vært nødvendig med klasser; eksempelvis table.js. Det forenkler koden vår og gjør den i praksis kortere enn ved unødvendig opprettelse av klasser i React. Vi har i tillegg valgt å lage flere dumme komponenter, så vi kan gjenbruke disse flere steder i koden vår i andre komponenter. 

**MongoDB**: Som nevnt har vi for databasen valgt å bruke MongoDB. Det er enkelt å installere og implementere, og bruker JSON-dokumenter til å lagre data, så vi kan lagre dataobjektene våre i egne dokumenter i en collection. Vi hadde ikke behov for en database med sammenhengende tabeller, og har kun en enkel databasemodell, som gjorde MongoDB til et godt valg til vårt bruk. I tillegg benyttet vi oss av MongoDB Compass for å enkelt holde oversikt over dataene våre, samt legge inn nye objekter i databasen. Databasen ligger tilgjengelig på virtuell maskin.

**Express.js(node.js) - REST API**: Vi bruker Express.js (serverside) for vårt REST API. REST API fungerer ved at vi gjennom express genererer metoder for hvordan vi ønsker at informasjon skal vises(json-fil). Deretter lager vi ressurser i form av routes for å bruke kommandoene GET, POST, PUT og DELETE og kunne hente frem objekter (personer) fra databasen vår. For vår applikasjon har vi kun en ren route som ligger på http://it2810-09.idi.ntnu.no:8000/api/persons. Vi kunne selvsagt ha hatt flere, men ettersom vår database kun håndterer samme type data(personer) og vi benytter queries -så vi ikke behov for ytterligere routes. Vi har valgt å implementere queries ved bruk av regex, for å bygge opp url strenger for søk og filtrering.
Dette gjør at vi kan finne alle med fornavn Chris ved legge til ?firstName=Chris etter lenken for databasen: http://it2810-09.idi.ntnu.no:8000/api/persons?firstName=Chris. Vi kan også legge til filtrerings attributter: http://it2810-09.idi.ntnu.no:8000/api/persons?firstName=Chris&sort=lastName&sortAsc=True
Dette er noe vi aktivt bruker frontend for å filtrere og søke gjennom tabellen vår, og for å finne de tre personene med høyest rating.

**Redux**:For å sikre en applikasjon som oppfører seg konsistent, og som lett kan aksessere state på tvers av klasser, har vi valgt å bruke redux. Vi lagrer eksempelvis data som er fetchet fra databasen i redux, dette gjør at vi lett kan hente ut og bruke dette både i table og graphContainer. I redux lagres all state i store - og vi skriver aldri direkte til state, vi lager heller et nytt objekt som endrer state. Dette er en veldig ryddig måte å håndtere state på.

### CI
I dette prosjektet har vi valgt å innføre CI, slik at vi får en automatisert build ved hver commit til master. Dette ble satt opp med GitLab sitt integrerte CI-verktøy, som pipeliner siste commit til master. Da kjøres automatisk build og deploy, og gir tilbakemelding på om oppsettet ble vellykket. 

### Responsivitet
Selv om dette ikke var et eksplisitt krav i dette prosjektet, har vi gjort nettsiden vår responsiv slik at den på en pen og fornuftig måte skalerer ved endring av nettsidens dimensjoner. Dette er testet på tre forskjellige enheter (en PC, et nettbrett og en iPhone 8+), i horisontal og vertikal visning. Jf. kravene fra forrige prosjekt, er det innført media queries, viewport, bilder som skalerer og flytende layout. 

### Testing
For både ende-til-ende-testing og enhetstesting har vi benyttet oss av Cypress, et Javascript testrammeverk. Det er enkelt å installere og bruke. Cypress åpnes og kjøres fra root i prosjektmappen med kommandoen `./node_modules/.bin/cypress open.` Disse må kjøres på localhost. Når Cypress launches, kan alle de individuelle testene kjøres herfra. Vi har skrevet tester for å sjekke hovedfunksjonaliteten på siden vår. Både table og graphChart er laget ut fra importerte komponenter, og det er derfor noe trøblete å kalle på feltene i disse komponentene. Vi tror likevel vi kom frem til en grei løsning for dette. Disse ligger under Cypress - integration. Disse ligger under Cypress - integration. 

Vi har også denne gangen brukt Jest som testverkøty. Her har vi laget testmetoder for å teste actorsReducer, i reducer-klassen, for å sjekke at den håndterer ulike actions. Da reducere inneholder initialstate og en switch som skal endre applikasjonens state ved ulike actions definert av oss, er det er viktig å vite at de fungerer som de skal. 

### Bruk av GIT/Koding
Vi har benyttet oss av git gjennom hele utviklingsprosessen. Vi har delt inn utviklingen i issues på GitLab, og issues inn i mindre tasks der det har vært hensiktsmessig. Issues har i stor grad bidratt til at vi har holdt god oversikt over utviklingen underveis, og vet hva som foreligger av arbeid. I tillegg har issues blitt assignet til de ulike gruppemedlemmene. Ved commits har disse blitt merket med hvilken issue de enten løser eller bidrar til. Det branches alltid ut ved nye versjoner, og versjonskontroll er overholdt. Øvrige git-konvensjoner har også forsøkt blitt opprettholdt (herunder språk). 

Vi har hatt som mål å følge de ulike konvensjonene som gjelder for de ulike teknologiene vi har benyttet oss av, og har i tillegg forsøkt å holde koden ryddig og mest mulig lettleselig. Kommentarer er også lagt inn for å forklare kode der det har føltes nødvendig. 

### Ressurser og tredjepartskomponenter
https://canvasjs.com/javascript-charts/bar-chart-axis-scale-break/
For grafisk visning av dataene har vi benyttet oss av canvasjs.com sin bar chart, og modifisert og tilpasset denne til vårt bruk. Her bruker vi REST APIet til å hente frem de aktuelle dataene, i stedet for fikserte datapunkter slik som i eksempelet. 
https://material-ui.com/components/tables/
Tabellen vår har vi basert på tabellkomponenten og tilhørende andre komponenter fra material-ui.com. Dette for å plassere dataene i en tabell, bla mellom de ulike tabellsidene, samt utvide enkelte rader for å vise detaljert informasjon. I tillegg har vi hentet input-komponentene i søkebaren vår fra material-ui, ettersom dette var en tredjepartskomponent som ser bra ut i vårt grensesnitt. Dog er ulempen ved å bruke slike komponenter at vi måtte overkjøre en del stilistiske attributt for å få disse til å passe inn i vår. 
https://www.codementor.io/blizzerand/building-forms-using-react-everything-you-need-to-know-iz3eyoq4y
Det brukerstyrte skjemaet vårt er bygd opp ved hjelp av dumme komponenter (Input, Button etc.) og en container-komponent (FormContainer), som foreslått i ovennevnte kilde. Å lage dumme komponenter bidrar til god gjenbruk, mens FormContainer kan holde på tilstandene til de ulike komponentene (her input fra brukeren). 


### Videre utvikling
Utviklingsprosjekter vil alltid ha potensiale for forbedring, og vi ser flere forbedringspunkt for vårt prosjekt. Eksempelvis ville vi ved videre arbeid lagt inn funksjonalitet for å kontrollere at det ikke legges til duplikater i databasen. I tillegg ville vi håndtert en bug som gjør at man ikke automatisk sendes tilbake til første side i tabellen ved endring i søk. 



## For å kjøre prosjektet:
Stå i mappen du vil ha prosjektet i og kjør følgende kommandoer
1. `git clone https://gitlab.stud.idi.ntnu.no/IT2810-H19/teams/team-9/webprosjekt3.git`
2. `npm install`
3. `npm start`
3. Siden skal automatisk kjøre i nettleser med url http://localhost:3000/ 


##### For å kjøre testene:
Jesttest:
Stå i webprosjekt3 mappen og kjør:
1. `npm test tests/actorsReducer.test.js `
2. Testen kjøres og resultatet kommer opp i terminal

##### cypress:
Stå i webprosjekt3 mappen og kjør:
1. `./node_modules/.bin/cypress open`
2. Åpner cypress, og trykker på de aktuelle testene for å kjøre de
3. Testene kommer opp og kjører i eget vindu

