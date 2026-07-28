import nbaOriginalResults from './results/models.json';
import nbaV2Results from './results/nba-v2.json';

export const tests = [
  {
    id: 'nba-original',
    number: '01',
    shortTitle: 'NBA bajnokötös',
    title: 'Ki rakja össze a bajnok ötöst?',
    headline: 'Melyik modell játssza a legjobb meccset?',
    description: '{modelCount} nyelvi modell ugyanazt a Hermes Agent feladatot kapta: kutassák fel minden idők legjobb NBA-játékosait, állítsanak össze egy bajnok kezdőötöst, majd készítsenek róluk látványos 9:16-os HyperFrames videót.',
    status: 'active',
    statusLabel: 'Aktív teszt',
    mainYoutubeId: 'xbNh8JzyNTg',
    experimentDate: '2026-06',
    results: nbaOriginalResults,
    taskHu: 'Kik a legjobb NBA játékosok all time? Ki lenne az az 5 játékos, akiből összeraknál egy leendő bajnok csapatot? Kutass utánuk az interneten, használj minden elérhető Hermes Agent skillt és eszközt, majd készíts az öt játékosról látványos, mozgalmas, fotókat is tartalmazó 9:16-os HyperFrames videót.',
    taskEn: 'Who are the best NBA players of all time? Who would be the 5 players you would put together for a future championship team? Search for them on the internet. Of course, there may be old players who are no longer playing. Use every Hermes Agent skill and tool you can to complete the task. Then make a hyperframe video of the 5 players. 9:16 aspect ratio. spectacular, moving effects. The video should also include their photo.',
  },
  {
    id: 'nba-v2',
    number: '02',
    shortTitle: 'NBA TTS challenge',
    title: 'NBA bajnokötös narrációval',
    headline: 'Ugyanazok a modellek. Egy új játékszabály.',
    description: 'A továbbfejlesztett NBA-prompt külön fordulóként érkezik. Saját videókat, pontszámokat és ranglistát kap, így az eredményei nem keverednek az eredeti teszttel.',
    status: 'active',
    statusLabel: 'Aktív teszt',
    mainYoutubeId: null,
    experimentDate: '2026-07',
    results: nbaV2Results,
    taskHu: `# Feladat: Minden idők NBA-kezdőötöse – HyperFrames-videó

Kutasd fel minden idők legnagyobb NBA-játékosait, majd állíts össze egy olyan ötfős kezdőcsapatot, amelyet kifejezetten arra építettél, hogy a mai kosárlabda körülményei között NBA-bajnokságot nyerjen.

A felállás legyen működőképes csapat, ne pusztán az öt legismertebb játékos listája. Értékeld:

* a posztbeli illeszkedést és a szerepek egyértelműségét;
* a dobást és a pályaszéthúzást;
* a labdás és labda nélküli játéképítést;
* a passzolást és döntéshozatalt;
* a periméter- és palánk alatti védekezést;
* a lepattanózást és gyűrűvédelmet;
* az atletikusságot és átmeneti játékot;
* a kémiát és a bővíthetőséget;
* a rájátszásbeli teljesítményt;
* az alkalmazkodóképességet a különböző korszakokhoz.

Minden választást röviden indokolj hiteles webes forrásokból ellenőrzött tényekkel és statisztikákkal.

---

## 1. Minimális skillhasználat

Csak a projekt elvégzéséhez szükséges legkisebb skill- és eszközkészletet használd.

Az elvárt készlet erre korlátozódik:

1. \`browser-use\` webes kutatáshoz, forrásellenőrzéshez és hiteles játékosfotók felkutatásához;
2. a \`hermes-tts-workflows\` skill hangklónozáshoz és narrációgeneráláshoz;
3. csak a videó inicializálásához, megvalósításához, linteléséhez, vizsgálatához, rendereléséhez és ellenőrzéséhez szükséges konkrét HyperFrames skillek.

Ne:

* tölts be vagy hívj meg nem kapcsolódó Hermes skilleket;
* sorold fel az összes telepített skillt;
* használj skilleket találgatás alapján;
* hívj meg skillt csak azért, mert elérhető;
* használj több, azonos funkciójú skillt;
* értelmezd a „releváns skilleket” engedélyként minden, potenciálisan kapcsolódó skill használatára.

Mielőtt elkezded a munkát, belsőleg határozd meg a legkisebb életképes eszközláncot. Skillt csak akkor hívj meg, ha az adott lépéshez szükséges.

Ha egy szükséges skill nem érhető el, jelentsd a hiányát, és állj le ahelyett, hogy nem kapcsolódó eszközzel helyettesítenéd.

---

## 2. Kötelező böngészőeszköz

Minden interaktív webes böngészéshez, kutatáshoz, oldalnavigációhoz és forrásellenőrzéshez a \`browser-use\` eszközt használd.

Ne használj helyette más böngészőautomatizálási skillt, autonóm böngészőügynököt vagy általános kutatási skillt.

Szokásos közvetlen HTTP-letöltő segédprogram csak egy konkrét média-URL letöltésére használható, miután azt a \`browser-use\` már megtalálta és ellenőrizte. Nem helyettesítheti a böngészős kutatást.

A narrációban vagy videóban szereplő minden tényhez vagy statisztikához rögzítsd:

* a forrás címét;
* a forrás URL-jét;
* a kiadót;
* a hozzáférés dátumát;
* a forrás által alátámasztott pontos tényt.

Részesítsd előnyben az olyan tekintélyes forrásokat, mint:

* NBA.com;
* Basketball Reference;
* a Naismith Memorial Basketball Hall of Fame;
* hivatalos csapat- vagy ligaarchívumok;
* egyértelmű statisztikai hivatkozásokkal dolgozó, megbízható sportkiadványok.

Elsődleges bizonyítékként ne támaszkodj forrás nélküli rangsorokra, rajongók által szerkesztett oldalakra, keresési találatok kivonataira vagy közösségimédia-állításokra.

Amikor ésszerű, ellenőrizd több forrásból a fontos statisztikákat.

---

## 3. Csak hiteles képek

Ne használj képgeneráló modellt vagy képgeneráló skillt.

Ne generálj:

* játékosportrékat;
* helyettesítő arcokat;
* szintetikus akciófotókat;
* MI által létrehozott arénákat;
* hamis történelmi képeket;
* generatív képvariációkat;
* generatív háttérkiterjesztéseket.

Ne használj képgenerálást tartalékmegoldásként, ha nehéz megfelelő fotót találni.

A \`browser-use\` segítségével keress hiteles, kiváló minőségű fényképeket a kiválasztott játékosokról, és a választott fájlokat töltsd le az új projektbe.

Előnyben részesítendők:

* hivatalos liga-, csapat- vagy sajtófotók;
* egyértelmű attribúcióval rendelkező Wikimedia Commons-képek;
* megbízható szerkesztőségi források;
* függőleges vágáshoz elegendő térrel rendelkező, nagy felbontású képek.

Ellenőrizd, hogy minden letöltött fénykép a megfelelő játékost ábrázolja. Ne bízz csak a fájlnévben.

Amennyiben lehet, minden kiválasztott játékosról szerezz legalább két vizuálisan eltérő fényképet, hogy a videó ne ugyanazt az állóképet animálja ismételten.

Ne használj:

* böngészőfelületet is tartalmazó képernyőképeket;
* a játékost eltakaró vízjeles bélyegképeket;
* hibásan címkézett képeket;
* rajongói montázsokat;
* online talált, MI által generált képeket;
* olyan képeket, amelyek eredete nem azonosítható.

Az assetmanifestben rögzítsd az eredeti oldal URL-jét, a közvetlen média-URL-t, ahol elérhető a fotóst vagy forrást, valamint a megadott licenc- vagy felhasználási információkat. Csak akkor állítsd egy képről, hogy jogdíjmentes, ha ezt a forrás kifejezetten kimondja.

Megengedett a szokásos, nem generatív szerkesztés, többek között a vágás, maszkolás, átméretezés, színkorrekció, kontrasztállítás és háttérleválasztás. Ne használj generatív kitöltést vagy olyan eljárást, amely vizuális tartalmat talál ki.

Engedélyezettek a programozott HyperFrames-grafikák, például tipográfia, részecskék, vonalak, gradiensek, diagramok, statisztikai grafikák és absztrakt mozgó hátterek. A tiltás a generált fényképes vagy illusztratív képekre vonatkozik.

---

## 4. Friss és elkülönített projekt

Hozz létre teljesen új, önálló HyperFrames-projektet egy friss, dedikált könyvtárban.

Megengedett a hivatalos HyperFrames-inicializálási folyamattal létrehozott üres projektsablon.

Ne:

* vizsgáld meg meglévő Hermes- vagy HyperFrames-projektek könyvtárait;
* másolj fájlokat korábbi projektből;
* importálj kódot korábbi videóból;
* használj újra régi médiaasseteket, generált narrációt, manifesteket, feliratokat, idősávokat, sablonokat vagy renderelt kimeneteket;
* folytass vagy írj felül régi projektet;
* módosíts fájlokat az új projektkönyvtáron kívül.

Használhatók a hivatalos HyperFrames-dokumentációk, telepített csomagok, keretrendszer-API-k, parancssori eszközök és egy tiszta hivatalos scaffold.

Ne használj bemutatóprojekteket, előre elkészített videósablonokat vagy példákat a kompozíció alapjaként.

Az egyetlen hozzáférhető külső helyi fájlok a felhasználó által kifejezetten biztosított hangreferenciafájlok. A szükséges referenciákat másold az új projekt megfelelő bemeneti könyvtárába, az eredeti fájlok megőrzésével.

Kezdetkor erősítsd meg és rögzítsd:

* az új projekt abszolút elérési útját;
* hogy a könyvtárban korábban nem volt projekt;
* a projekt inicializálási parancsát;
* a tiszta scaffold által kezdetben létrehozott fájlokat.

---

## 5. A hangklónozás kötelező

Minden hangklónozáshoz és klónozott hangú narráció generálásához a \`hermes-tts-workflows\` skillt használd.

Pontosan a felhasználó által adott hangreferenciafájlokat használd.

Ne:

* használd az általánosan beállított TTS-hangot;
* helyettesítsd másik klónozott hanggal;
* használj rendszerhangot;
* használj harmadik fél beszédgeneráló skillt az OmniVoice helyett;
* válts észrevétlenül másik hangra;
* rendereld a végső videót a kért klónozott hang nélkül.

A teljes narráció létrehozása előtt készíts rövid OmniVoice-tesztmondatot, és ellenőrizd, hogy:

* az OmniVoice sikeresen betöltötte a referenciafájlokat;
* a generált hang érthető;
* a kimenet nem az általánosan beállított hang;
* a hang érzékelhetően egyezik a referenciákkal;
* a fájlban nincs nyilvánvaló vágás, csonkolás vagy sérülés.

Ha a hangreferenciafájlok hiányoznak, olvashatatlanok, inkompatibilisek, vagy a hangklónozás sikertelen, azonnal állj le, és jelentsd a pontos problémát. Ne folytasd a végső renderelést helyettesítő hanggal.

Beszédgeneráláshoz OmniVoice-t használj. Ha az OmniVoice nem készít szószintű időbélyegeket, csak a legszükségesebb igazító segédprogrammal származtasd ezeket a végleges narrációból. Ne tölts be nem kapcsolódó beszéd-, hang- vagy audioskilleket.

---

## 6. Kutatás és kezdőötös kiválasztása

A kezdőötös véglegesítése előtt kutasd fel a jelölt játékosokat.

Ne válaszd ki előre a játékosokat, majd keress kizárólag az előre meghatározott döntéseket támogató bizonyítékokat.

Minden végső játékosnál határozd meg:

* az elsődleges posztját;
* támadó szerepét;
* védekező szerepét;
* konkrét okát annak, miért egészíti ki a másik négy játékost;
* egy vagy két ellenőrzött statisztikai vagy történelmi tényt;
* hogyan fordíthatók át képességei a modern NBA-be.

Térj ki kifejezetten a csapat:

* spacingjére;
* védekező matchupjaira és váltásaira;
* elsődleges és másodlagos játéképítésére;
* gyűrűtámadására;
* átmeneti támadására;
* félpályás támadására;
* lepattanózására;
* késői, meccsdöntő dobásgenerálására;
* lehetséges gyengeségeire.

Az átfedő posztokat egyértelműen meghatározott szerepekkel oldd fel.

Készíts tömör kutatási dokumentumot, amely tartalmazza:

* a végső kezdőötöst;
* a fő jelölteket;
* minden kiválasztott játékos kiválasztásának okát;
* a fő kompromisszumokat;
* az összes alátámasztó forrást.

Ne találj ki statisztikákat, díjakat, idézeteket vagy történelmi állításokat. Ha a források eltérnek, a leghitelesebb forrást használd, és dokumentáld az eltérést.

---

## 7. Videóformátum és történet

Készíts látványos, 9:16 képarányú függőleges videót.

Célhossz: körülbelül 55–75 másodperc.

A szerkezet tartalmazza:

1. azonnali nyitó horgot;
2. világos bajnokcsapat-építési premisszát;
3. fokozódó játékosfelfedéseket;
4. minden játékos szerepének tömör magyarázatát;
5. egy pillanatot, amely bemutatja, miért működik együtt az öt játékos;
6. emlékezetes bajnoki finálét.

A narráció legyen elég tömör ahhoz, hogy a vizuális elemeknek maradjon levegője.

Ne készíts egyszerű visszaszámlálást öt elszigetelt életrajzból. A videónak egy bajnokcsapat összeállításának történetét kell elmesélnie.

A felfedések sorrendjével teremts feszültséget: minden új játékos oldjon meg egy, az előző szakasz által felállított kosárlabdaigényt.

---

## 8. Vizuális irány

Használj filmes, sportmagazin-szerű látványvilágot az alábbiakkal:

* erőteljes, kosárlabda ihlette tipográfia;
* hiteles játékosfotók;
* rétegzett mélység;
* elő- és háttér elválasztása;
* kontrollált parallax;
* kameramozgás;
* dinamikus maszkolás;
* energikus statisztikai grafikák;
* változatos átmenetek;
* ízléses atmoszférikus részecskék és fényeffektek;
* az öt játékost egy csapattá összekötő vizuális motívumok.

Kerüld:

* az általános kártyarácsokat;
* a dashboard-szerű elrendezéseket;
* a weboldalszerű szakaszokat;
* az öt szinte azonos játékosdiát;
* az ismétlődő ráközelítő animációkat;
* a túlzott ragyogást;
* az olvashatatlanul kicsi statisztikákat;
* a narratív cél nélküli véletlenszerű mozgást;
* azt, hogy minden információ lekerekített téglalapokban legyen.

Minden felfedésnek legyen saját vizuális ritmusa, miközben egy egységes tervezési rendszer része marad.

Használj mobilbiztos margókat. A fontos nevek, feliratok és statisztikák telefonképernyőn is olvashatók maradjanak, és ne takarják el őket a közösségimédia-felületek szokásos elemei.

Ne nyújtsd vagy torzítsd a fényképeket. Tudatosan vágd őket 9:16 arányhoz.

---

## 9. Narráció, feliratok és időzítés

A végső narrációt csak a kezdőötös és az alátámasztó bizonyítékok ellenőrzése után írd meg.

A narrációt OmniVoice-szal generáld.

Szószintű időzítést a véglegesen generált narráció alapján hozz létre, ne becsült szkriptidőtartamból.

Pontosan szinkronizáld:

* az elhangzó szavakat;
* a feliratokat;
* a játékosneveket;
* a statisztikai kiemeléseket;
* a fényképcseréket;
* a felfedési átmeneteket;
* a végső csapatkompozíciót.

A feliratok kövessék a ténylegesen elhangzó hangot. Ne használj hozzávetőleges mondatszintű időzítést, ha szószintű elérhető.

Hosszú bekezdések helyett tömör feliratblokkokat használj.

Ellenőrizd, hogy:

* egyetlen felirat sem jelenik meg a hozzá tartozó beszéd előtt;
* egyetlen felirat sem marad látható a mondott rész vége után;
* a statisztikák akkor jelennek meg, amikor szóba kerülnek;
* a játékosnevek elég ideig láthatók az elolvasásukhoz;
* az átmenetek nem takarnak el lényeges információt;
* narráció nem vész el jelenethatárnál.

---

## 10. Asset- és forráskezelés

Minden projektspecifikus assetet az új projekten belül tárolj.

Véletlenszerű letöltött nevek helyett használj egyértelmű, determinisztikus fájlneveket.

Készíts assetmanifestet, amely fájlonként tartalmazza:

* a helyi fájlnevet;
* a játékost vagy célt;
* a forrásoldal URL-jét;
* ahol elérhető, a közvetlen média-URL-t;
* a kiadót vagy készítőt;
* a megadott licenc- vagy felhasználási információt;
* a letöltés dátumát;
* a kép méreteit;
* a fájltípust.

Minden letöltött fájlt ellenőrizz használat előtt:

* erősítsd meg, hogy tényleges kép, nem HTML-hibaoldal;
* erősítsd meg, hogy a fájl hibátlanul megnyílik;
* erősítsd meg a megfelelő felbontást;
* erősítsd meg az ábrázolt játékost;
* erősítsd meg, hogy fontos vízjel vagy fedvény nem teszi használhatatlanná.

A végső kompozícióban ne hotlinkelj külső asseteket. Helyi projektpéldányokat használj.

---

## 11. Megvalósítási követelmények

A videót valódi HyperFrames-kompozícióként építsd fel.

Használj szemantikus, karbantartható jelenetstruktúrát. Válaszd szét:

* a kutatási adatokat;
* a játékosok metaadatait;
* a narráció szkriptjét;
* az időzítési adatokat;
* az assetmetaadatokat;
* a jelenetek megvalósítását;
* az újrahasználható mozgáskomponenseket.

Ne kódolj minden animációt egyetlen monolitikus fájlba.

Olyan animációs technikákat használj, amelyek megfelelőek HyperFrameshez és böngészős rendereléshez. Kerüld a renderelés megbízhatóságát veszélyeztető, indokolatlanul nehéz effekteket.

Hangreaktív vagy ütemre szinkronizált mozgást csak akkor használj, ha javítja a történetmesélést, és szinkronban marad a narrációval.

Ízléses atmoszférikus hangot vagy zenét csak jogilag és technikailag megfelelő esetben használj. A zene nem nyomhatja el a narrációt.

Ne tölts le ellenőrizetlen, szerzői joggal védett zenét véletlenszerű weboldalakról. Előnyösebb a programozottan létrehozott vagy egyértelműen licencelt háttérzene.

---

## 12. Kötelező ellenőrzés befejezés előtt

Ne tekintsd a feladatot késznek pusztán azért, mert létrejött egy MP4-fájl.

A végső befejezés előtt:

1. ellenőrizd a projekt elkülönítettségét;
2. ellenőrizd, hogy nem használtál újra fájlokat meglévő projektekből;
3. ellenőrizd, hogy csak a szükséges skilleket hívtad meg;
4. ellenőrizd, hogy a \`browser-use\` végezte a webes kutatást;
5. ellenőrizd, hogy nem használtál képgeneráló eszközt;
6. ellenőrizd, hogy minden játékoskép hiteles és helyesen azonosított;
7. ellenőrizd a forrás- és assetmanifeste(ke)t;
8. ellenőrizd minden statisztikát a rögzített forrásával;
9. ellenőrizd, hogy az OmniVoice a megadott referenciafájlokat használta;
10. érzékelés alapján vizsgálj meg több narrációs mintát a hangazonosságért;
11. ellenőrizd a szószintű feliratidőzítést;
12. linteld a HyperFrames-projektet;
13. vizsgáld meg a kompozíciót és az idősávot;
14. rendereld a végső videót;
15. ellenőrizd a kimeneti felbontást és 9:16 képarányt;
16. ellenőrizd, hogy a videó hang- és videósávot is tartalmaz;
17. vizsgáld meg a nyitóhorog, minden játékosfelfedés és a finálé reprezentatív képkockáit;
18. nézd át a teljes renderelt videót hiányzó assetek, üres képkockák, hibás elrendezések, levágások, olvashatatlan szöveg vagy időzítési hibák szempontjából;
19. erősítsd meg, hogy a narráció teljes és nem csonkolódott;
20. erősítsd meg, hogy a zárókép és a hang vége szándékos.

Ha az ellenőrzés problémát tár fel, javítsd ki, és a befejezés előtt futtasd újra az érintett vizsgálatokat.

Ne állítsd, hogy egy elemet ellenőriztél, ha a hozzá tartozó vizsgálat ténylegesen nem történt meg.

---

## 13. Leállási feltételek

Ne renderelj helyettesítő eredményt, ha az alábbiak bármelyike előfordul:

* a \`browser-use\` nem érhető el;
* a hermes-tts-workflows skill nem érhető el;
* a megadott hangreferenciafájlok nem találhatók vagy nem olvashatók;
* a hangklónozás sikertelen;
* a generált hang egyértelműen az általánosan beállított hang;
* egy vagy több kiválasztott játékoshoz nem szerezhetők be hiteles, használható fényképek;
* egy szükséges ténybeli állítás nem ellenőrizhető;
* a HyperFrames nem tudja sikeresen renderelni a projektet.

Jelentsd:

* a pontosan hibázó lépést;
* a releváns parancsot vagy eszközt;
* a megfigyelt hibát;
* mely kimenetek készültek el;
* mi maradt befejezetlen.

Soha ne rejts el hibát, ne csökkentsd csendben a követelményeket, és ne cserélj le kötelező komponenst egy könnyebb alternatívára.

---

## 14. Kötelező átadandó elemek

Befejezéskor add át:

* az öt játékosból álló végső kezdőötöst;
* rövid magyarázatot arról, miért működik a felállás csapatként;
* az új, elkülönített projekt elérési útját;
* a végleges renderelt 9:16-os videót;
* a narráció szkriptjét;
* a szószintű felirat- vagy időzítési adatokat;
* a kutatási és forrásdokumentumot;
* a képi assetmanifestet;
* a ténylegesen meghívott skillek és eszközök tömör listáját;
* az ellenőrzési eredményeket;
* minden fennmaradó korlátot vagy bizonytalanságot.

A projekt csak akkor kész, ha létrejött és ellenőrzött a végső renderelt videó és minden szükséges kísérőfájl.
`,
    taskEn: `# Task: Create an All-Time NBA Starting Five HyperFrames Video

Research the greatest NBA players of all time and select a five-man starting lineup specifically built to win an NBA championship under modern basketball conditions.

The lineup must be constructed as a functional team, not merely as a list of the five most famous players. Evaluate:

* positional fit and role clarity;
* shooting and floor spacing;
* on-ball and off-ball creation;
* passing and decision-making;
* perimeter and interior defense;
* rebounding and rim protection;
* athleticism and transition play;
* chemistry and scalability;
* playoff performance;
* adaptability across eras.

Briefly justify every selection using verified facts and statistics from credible web sources.

---

## 1. Minimal Skill Usage

Use only the minimum set of skills and tools required to complete this project.

The expected skill set is limited to:

1. \`browser-use\` for web research, source verification, and locating authentic player photographs;
2. the \`hermes-tts-workflows\` skill for voice cloning and narration generation;
3. only the specific HyperFrames skills required to initialize, implement, lint, inspect, render, and validate the video.

Do not:

* load or invoke unrelated Hermes skills;
* enumerate every installed skill;
* use skills speculatively;
* invoke a skill merely because it is available;
* use multiple skills that perform the same function;
* interpret “relevant skills” as permission to use every potentially related skill.

Before beginning execution, determine the smallest viable toolchain internally. Invoke a skill only when it is necessary for the current step.

If a required skill is unavailable, report the missing skill and stop instead of substituting an unrelated tool.

---

## 2. Mandatory Browser Tool

Use \`browser-use\` for all interactive web browsing, research, page navigation, and source verification.

Do not use another browser automation skill, autonomous browsing agent, or general-purpose research skill instead of \`browser-use\`.

A standard direct HTTP download utility may be used only to download a specific media URL after that URL has already been located and verified with \`browser-use\`. It must not be used as a substitute for browser research.

For every factual claim or statistic used in the narration or video, record:

* the source title;
* source URL;
* publisher;
* access date;
* the exact fact supported by the source.

Prefer authoritative sources such as:

* NBA.com;
* Basketball Reference;
* the Naismith Memorial Basketball Hall of Fame;
* official team or league archives;
* reputable sports publications with clear statistical sourcing.

Do not rely on unsourced ranking articles, fan-edited pages, search-result snippets, or social-media claims as primary evidence.

Cross-check consequential statistics when practical.

---

## 3. Authentic Images Only

Do not use any image-generation model or image-generation skill.

Do not generate:

* player portraits;
* replacement faces;
* synthetic action photographs;
* AI-generated arenas;
* fake historical images;
* generative image variations;
* generative background extensions.

Do not use image generation as a fallback when a suitable photograph is difficult to find.

Use \`browser-use\` to find authentic, high-quality photographs of the selected players on the internet and download the chosen files into the new project.

Prefer:

* official league, team, or press photography;
* Wikimedia Commons images with clear attribution;
* reputable editorial sources;
* high-resolution images with sufficient space for vertical cropping.

Verify that every downloaded photograph depicts the correct player. Do not trust filenames alone.

Where possible, acquire at least two visually distinct photographs for each selected player so that the video does not repeatedly animate a single still image.

Do not use:

* screenshots containing website chrome;
* thumbnails with watermarks obscuring the player;
* mislabeled images;
* fan-made composites;
* AI-generated images found online;
* images whose provenance cannot be identified.

Record the original page URL, direct media URL, photographer or source when available, and stated license or usage information in an asset manifest. Do not claim that an image is royalty-free unless the source explicitly states this.

Normal non-generative editing is allowed, including cropping, masking, resizing, color grading, contrast adjustment, and background separation. Do not use generative fill or any process that invents visual content.

Programmatic HyperFrames graphics such as typography, particles, lines, gradients, diagrams, stat graphics, and abstract motion backgrounds are allowed. The prohibition applies to generated photographic or illustrative imagery.

---

## 4. Fresh and Isolated Project

Create a completely new, standalone HyperFrames project in a fresh dedicated directory.

A blank project scaffold created with the official HyperFrames initialization workflow is allowed.

Do not:

* inspect existing Hermes or HyperFrames project directories;
* copy files from a previous project;
* import code from an earlier video;
* reuse previous media assets;
* reuse generated narration;
* reuse manifests, captions, timelines, templates, or rendered outputs;
* continue or overwrite an existing project;
* modify files outside the new project directory.

Official HyperFrames documentation, installed packages, framework APIs, command-line tools, and a clean official scaffold may be used.

Do not import showcase projects, premade video templates, or examples as the basis of the composition.

The only external local files that may be accessed are the voice-reference files explicitly supplied by the user. Copy any required references into an appropriate input directory inside the new project while preserving the original files.

At the start, confirm and record:

* the absolute path of the new project;
* that the directory did not previously contain a project;
* the project initialization command;
* the files initially created by the clean scaffold.

---

## 5. Voice Cloning Is Mandatory

Use the \`hermes-tts-workflows\` skill for all voice cloning and cloned-voice narration generation.

Use the exact voice-reference files supplied by the user.

Do not:

* use the generic configured TTS voice;
* substitute another cloned voice;
* use a system voice;
* use a third-party speech-generation skill instead of OmniVoice;
* silently fall back to a different voice;
* render the final video without the requested cloned voice.

Before generating the complete narration, create a short OmniVoice test sentence and verify that:

* OmniVoice successfully loaded the supplied reference files;
* the generated audio is intelligible;
* the output is not the generic configured voice;
* the voice is perceptually consistent with the supplied references;
* the file contains no obvious clipping, truncation, or corruption.

If the voice-reference files are missing, unreadable, incompatible, or voice cloning fails, stop immediately and report the exact problem. Do not proceed to final rendering with substitute audio.

Use OmniVoice for speech generation. If OmniVoice does not produce word-level timestamps, use only the smallest necessary alignment utility to derive timestamps from the final narration. Do not load unrelated speech, voice, or audio skills.

---

## 6. Research and Lineup Selection

Research the candidate players before finalizing the lineup.

Do not select the players first and then search only for evidence that supports the predetermined choices.

For each final player, establish:

* primary lineup position;
* offensive role;
* defensive role;
* specific reason the player complements the other four;
* one or two verified statistical or historical facts;
* how the player’s skills translate to the modern NBA.

Explicitly address the lineup’s:

* spacing;
* defensive matchups and switching;
* primary and secondary creation;
* rim pressure;
* transition offense;
* half-court offense;
* rebounding;
* late-game shot creation;
* potential weaknesses.

Resolve positional overlap through clearly defined roles.

Create a concise research document containing:

* the final lineup;
* the main candidates considered;
* the reason each selected player was chosen;
* the principal trade-offs;
* all supporting sources.

Do not fabricate statistics, awards, quotations, or historical claims. When sources disagree, use the most authoritative source and document the discrepancy.

---

## 7. Video Format and Story

Produce a spectacular vertical video in a 9:16 aspect ratio.

Target duration: approximately 55–75 seconds.

The structure should contain:

1. an immediate opening hook;
2. a clear championship-building premise;
3. escalating player reveals;
4. concise explanations of each player’s role;
5. a moment showing why the five players work together;
6. a memorable championship finale.

The narration must be concise enough to leave visual breathing room.

Do not create a simple countdown of five isolated biographies. The video must tell the story of assembling a championship team.

Create tension through the order of the reveals. Each new player should solve a basketball need established by the preceding section.

---

## 8. Visual Direction

Use cinematic sports-editorial design with:

* bold basketball-inspired typography;
* authentic player photography;
* layered depth;
* foreground and background separation;
* controlled parallax;
* camera movement;
* dynamic masking;
* energetic statistical graphics;
* varied transitions;
* tasteful atmospheric particles and light effects;
* visual motifs that connect the five players into one team.

Avoid:

* generic card grids;
* dashboard-like layouts;
* webpage-style sections;
* five nearly identical player slides;
* repetitive zoom-in animations;
* excessive glow;
* unreadably small statistics;
* random motion without narrative purpose;
* placing all information inside rounded rectangular cards.

Each reveal should have a distinct visual rhythm while remaining part of one coherent design system.

Use mobile-safe margins. Important names, captions, and statistics must remain legible on a phone screen and must not be obscured by common social-media interface areas.

Do not stretch or distort photographs. Crop deliberately for 9:16.

---

## 9. Narration, Captions, and Timing

Write the final narration only after the lineup and supporting evidence have been verified.

Generate the narration with OmniVoice.

Create word-level timing based on the final generated narration, not on an estimated script duration.

Synchronize precisely:

* spoken words;
* captions;
* player names;
* statistical callouts;
* photograph changes;
* reveal transitions;
* final lineup composition.

Captions must follow the actual spoken audio. Do not use approximate sentence-level timing when word-level timing is available.

Use concise caption chunks rather than displaying long paragraphs.

Verify:

* no caption appears before the corresponding speech;
* no caption remains after the spoken phrase has ended;
* statistics appear while they are being discussed;
* player names remain visible long enough to read;
* transitions do not obscure essential information;
* no narration is cut off at a scene boundary.

---

## 10. Asset and Source Management

Store all project-specific assets inside the new project.

Use clear deterministic filenames rather than random downloaded names.

Create an asset manifest containing, for each file:

* local filename;
* player or purpose;
* source-page URL;
* direct media URL when available;
* publisher or creator;
* stated license or usage information;
* download date;
* image dimensions;
* file type.

Validate every downloaded file before using it:

* confirm it is an actual image rather than an HTML error page;
* confirm the file opens correctly;
* confirm adequate resolution;
* confirm the depicted player;
* confirm that no important watermark or overlay makes it unsuitable.

Do not hotlink external assets in the final composition. Use local project copies.

---

## 11. Implementation Requirements

Build the video as a proper HyperFrames composition.

Use semantic and maintainable scene structure. Separate:

* research data;
* player metadata;
* narration script;
* timing data;
* asset metadata;
* scene implementation;
* reusable motion components.

Do not hard-code every animation into one monolithic file.

Use animation techniques appropriate to HyperFrames and browser rendering. Avoid unnecessarily heavy effects that jeopardize rendering reliability.

Use audio-reactive or beat-synchronized motion only when it improves the storytelling and remains synchronized with narration.

Use tasteful ambient sound or music only when legally and technically appropriate. Music must not overpower the narration.

Do not download unverified copyrighted music from random websites. A programmatically created or clearly licensed background bed is preferable.

---

## 12. Mandatory Validation Before Completion

Do not consider the task complete merely because an MP4 file was created.

Before final completion:

1. verify project isolation;
2. verify that no files were reused from existing projects;
3. verify that only necessary skills were invoked;
4. verify that \`browser-use\` performed the web research;
5. verify that no image-generation tool was used;
6. verify that every player image is authentic and correctly identified;
7. verify source and asset manifests;
8. verify every statistic against its recorded source;
9. verify OmniVoice used the supplied reference files;
10. perceptually review multiple narration samples for voice consistency;
11. verify word-level caption timing;
12. lint the HyperFrames project;
13. inspect the composition and timeline;
14. render the final video;
15. verify the output resolution and 9:16 aspect ratio;
16. verify the video contains both audio and video streams;
17. inspect representative frames from the hook, every player reveal, and the finale;
18. inspect the complete rendered video for missing assets, blank frames, broken layouts, clipping, unreadable text, or timing errors;
19. confirm that the narration is complete and not truncated;
20. confirm that the final frame and audio ending are intentional.

If validation reveals a problem, fix it and rerun the affected checks before completion.

Do not claim that an item was verified unless the corresponding check was actually performed.

---

## 13. Stop Conditions

Stop without rendering a substitute result if any of the following occurs:

* \`browser-use\` is unavailable;
* the hermes-tts-workflows skill is unavailable;
* the supplied voice-reference files cannot be located or read;
* voice cloning fails;
* the generated voice is clearly the generic configured voice;
* authentic usable photographs cannot be acquired for one or more selected players;
* a required factual claim cannot be verified;
* HyperFrames cannot successfully render the project.

Report:

* the exact failing step;
* the relevant command or tool;
* the observed error;
* which outputs were completed;
* what remains incomplete.

Never hide an error, silently reduce the requirements, or replace a required component with an easier alternative.

---

## 14. Required Deliverables

At completion, provide:

* the final five-player lineup;
* a short explanation of why the lineup works as a team;
* the path to the new isolated project;
* the final rendered 9:16 video;
* the narration script;
* word-level caption or timing data;
* the research and source document;
* the image asset manifest;
* a concise list of the skills and tools actually invoked;
* the validation results;
* any remaining limitations or uncertainties.

The project is complete only when the final rendered video and all required supporting files have been created and validated.
`,
  },
];

export const hermesDescription = 'A Hermes Agent a Nous Research által fejlesztett nyílt forráskódú, autonóm mesterséges intelligencia rendszer. Interakciókból tanulhat, új készségeket hozhat létre, hosszú távú memóriát használhat, és összetett munkafolyamatokat automatizálhat.';
