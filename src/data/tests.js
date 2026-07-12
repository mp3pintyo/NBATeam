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
    taskHu: 'Kutasd fel minden idők legjobb NBA-játékosait, majd állíts össze belőlük egy ötfős, minden korszakot átfogó kezdőcsapatot, amely a mai kosárlabdában is képes lenne bajnokságot nyerni. A választás során vedd figyelembe a posztokat, a dobóképességet, a védekezést, a játékszervezést, az atletikusságot, a csapatkémiát és a különböző korszakokhoz való alkalmazkodást - ne csak az egyéni hírnevet. Minden választást röviden indokolj hiteles internetes forrásokból ellenőrzött tényekkel és statisztikákkal. Hozz létre egy teljesen új, önálló HyperFrames-projektet egy friss, külön erre a feladatra létrehozott könyvtárban, majd készíts és renderelj egy látványos, 9:16 képarányú videót, amely bemutatja a végső ötöst. Ne vizsgálj meg, ne másolj, ne importálj, ne módosíts, ne hivatkozz és ne használj fel újra semmilyen fájlt, kódot, médiaanyagot, assetet, sablont, manifestet vagy generált kimenetet más meglévő vagy korábbi Hermes-projektekből. Ne folytass és ne írj felül régi projektet. A videó összes projektspecifikus assetjét ehhez a projekthez, az alapoktól szerezd be vagy generáld le. A Hermes és a HyperFrames skilljeit, eszközeit, telepített csomagjait és hivatalos keretrendszer-erőforrásait azonban használd. Vállalj kreatív irányítást: alakíts ki erős történetívet, azonnali figyelemfelkeltő kezdést, egyre fokozódó játékosbemutatásokat és emlékezetes bajnoki finálét. Minden játékosról használj hiteles, kiváló minőségű fényképet, filmszerű szerkesztőségi dizájnt, karakteres, kosárlabda ihlette tipográfiát, rétegzett vizuális mélységet, energikus statisztikai grafikákat, változatos átmeneteket, kameramozgásokat és ízléses atmoszférikus effekteket. Kerüld az általános kártyarácsokat, az ismétlődő animációkat és a weboldalszerű elrendezéseket. A tömör TTS-narrációhoz a saját klónozott hangomat és pontosan az általam megadott referenciafájlokat használd. Soha ne használd az általános beállított hangot, ne helyettesítsd más hanggal, és ne válts észrevétlenül tartalék hangra. Ha a referenciafájlok nem érhetők el, vagy a hangklónozás sikertelen, állj meg és jelezd a problémát ahelyett, hogy más hanggal renderelnéd a videót. A narrációt, a feliratokat, a játékosok neveit és a legfontosabb statisztikákat szóalapú időzítéssel, pontosan szinkronizáld. Használd az összes releváns Hermes- és HyperFrames-skillt. A befejezés előtt ellenőrizd az új projekt elkülönítését, a forrásokat, a médiaanyagokat, az olvashatóságot, az időzítést, az animációkat, a hang azonosságát és a végső renderelt videót.',
    taskEn: 'Research the greatest NBA players of all time, then select a five-man all-time starting lineup built to win a championship today. Balance positions, shooting, defense, playmaking, athleticism, chemistry, and era adaptability—not just individual fame. Briefly justify each choice with verified facts and statistics from credible web sources. Create a completely new, standalone HyperFrames project in a fresh dedicated directory, then produce and render a spectacular 9:16 video presenting the final five. Do not inspect, copy, import, modify, reference, or reuse files, code, media, assets, templates, manifests, or generated outputs from any existing or previous Hermes project. Do not continue or overwrite an old project. Acquire or generate every project-specific asset from scratch for this video. Hermes and HyperFrames skills, tools, installed packages, and official framework resources may and should still be used. Take creative ownership: develop a strong story arc, an immediate hook, escalating player reveals, and a memorable championship finale. Use authentic, high-quality photos of every player, cinematic editorial design, bold basketball-inspired typography, layered depth, energetic stat graphics, varied transitions, camera motion, and tasteful ambient effects. Avoid generic card grids, repetitive animations, and webpage-like layouts. Use my own cloned voice with the exact reference files I provided for concise TTS narration. Never use the generic configured voice, substitute another voice, or fall back silently. If the reference files are unavailable or voice cloning fails, stop and report the problem rather than rendering with a different voice. Synchronize narration, captions, player names, and key statistics precisely using word-level timing. Use all relevant Hermes and HyperFrames skills. Verify the new projects isolation, sources, media, readability, timing, animation, voice identity, and final rendered video before completing.',
  },
];

export const hermesDescription = 'A Hermes Agent a Nous Research által fejlesztett nyílt forráskódú, autonóm mesterséges intelligencia rendszer. Interakciókból tanulhat, új készségeket hozhat létre, hosszú távú memóriát használhat, és összetett munkafolyamatokat automatizálhat.';
