# Hermes Model League

Magyar, Arena stílusú összehasonlító oldal a 17 Hermes Agent modellteszthez.

## Helyi futtatás

```bash
npm install
npm run dev
```

Ellenőrzés:

```bash
npm test -- --run
npm run lint
npm run build
```

## Adatok szerkesztése

A modellek a `src/data/models.json` fájlban vannak. A hiányzó érték maradjon
`null`; az oldal ezt `Nincs adat` formában jeleníti meg.

### Általános szabályok

- A fájl egy JSON-tömb, amelyben minden elem egy modell futását írja le.
- A JSON nem enged meg megjegyzéseket és záró vesszőt.
- Az ismeretlen adat értéke `null`, nem üres szöveg, `0` vagy `false`.
- A `0` csak ténylegesen ismert nulla értéket jelent, például ingyenes futást.
- A boolean mezők értéke idézőjel nélküli `true` vagy `false`.
- Az URL-ek teljes, `https://` kezdetű címek legyenek.

### Azonosítás és megjelenítés

| Mező | Típus | Jelentés |
| --- | --- | --- |
| `id` | `string` | Egyedi, stabil technikai azonosító. Kisbetűs, kötőjeles forma ajánlott, például `qwen-3-6-27b`. Ne legyen két azonos `id`. |
| `name` | `string` | A felületen megjelenő rövid modellnév. |
| `variant` | `string` | A pontos modellváltozat, quantizáció vagy szolgáltatói modellazonosító. |
| `provider` | `string \| null` | A futtatás módja vagy szolgáltatója. Jelenlegi formák például `Helyi`, `Helyi · llama.cpp`, `OpenRouter`, `OpenRouter · ingyenes`. Nem programozott enum, új szöveg is megadható. |
| `summary` | `string` | Rövid, ember által írt értékelés a futás legfontosabb eredményeiről és hibáiról. |

### Linkek és elérhetőség

| Mező | Típus | Jelentés |
| --- | --- | --- |
| `providerUrl` | `string \| null` | Az OpenRouter-, API- vagy más szolgáltatói oldal, amelyen keresztül a modellt használtad. |
| `huggingFaceUrl` | `string \| null` | A letölthető modell vagy az alkalmazott változat Hugging Face-oldala. |
| `openSource` | `boolean` | `true`, ha a modell letölthető/nyílt modellként elérhető; egyébként `false`. Nem azt jelzi, hogy a szolgáltató nyílt forráskódú-e. |
| `projectPath` | `string \| null` | A futás helyi projektkönyvtárának Windows elérési útja. JSON-ban a `\` karaktert duplázni kell, például `C:\\Users\\user\\project`. |

Egy OpenRouteren futtatott, de letölthető modellnél a `providerUrl` és a
`huggingFaceUrl` egyszerre is kitölthető.

### Futási állapot

| Mező | Típus | Engedélyezett érték / jelentés |
| --- | --- | --- |
| `status` | `string` enum | Csak az alább felsorolt öt technikai érték egyike. |
| `statusLabel` | `string` | A kártyán megjelenő rövid, szabadon megfogalmazható címke, például `Jó videó` vagy `Leállítva`. |

A `status` engedélyezett értékei:

| Érték | Jelentés |
| --- | --- |
| `success` | A feladat érdemben és jó eredménnyel elkészült. |
| `partial` | Készült használható eredmény, de fontos követelmény hiányzik vagy hibás. |
| `failed` | A futás befejeződött, de nem adott használható eredményt. |
| `stopped` | A futást idő vagy elakadás miatt kézzel le kellett állítani. |
| `coming-soon` | Helyőrző rekord; az adatok később érkeznek. |

### Idő, token és költség

| Mező | Típus | Mértékegység és jelentés |
| --- | --- | --- |
| `durationMinutes` | `number \| null` | A teljes futási idő percben. Egész és tört szám is megadható. |
| `tokensMillions` | `number \| null` | A szolgáltató vagy mérés szerinti tokenmennyiség millió tokenben. Például `3.54` = 3,54 millió token. |
| `displayedTokensThousands` | `number \| null` | A Hermes felületén kijelzett tokenérték ezer tokenben, ha eltért a szolgáltatói adattól. Például `89.5` = 89 500 token. |
| `costUsd` | `number \| null` | Tényleges költség amerikai dollárban. `0` = biztosan ingyenes, `null` = nem ismert. |
| `costHuf` | `number \| null` | A futáskor feljegyzett hozzávetőleges költség forintban. `0` = ingyenes, `null` = nem ismert. |

### Elkészült elemek és megfelelés

| Mező | Típus | Jelentés |
| --- | --- | --- |
| `hasVideo` | `boolean` | Elkészült-e bármilyen videó. |
| `hasAudio` | `boolean` | Tartalmaz-e a videó hangot vagy narrációt. |
| `hasImages` | `boolean \| null` | `true`: megfelelő képek rendelkezésre álltak; `false`: nem; `null`: nincs biztos adat. |
| `usedSkills` | `boolean` | Használt-e a modell Hermes Agent skilleket. Ez nem feltétlenül jelenti azt, hogy helyesen használta őket. |
| `verticalCompliant` | `boolean \| null` | `true`: megfelel a kért 9:16 aránynak; `false`: nem felel meg; `null`: nem ellenőrzött vagy nincs értékelhető videó. |
| `youtubeId` | `string \| null` | Csak a YouTube-videó azonosítója, nem a teljes URL. Például a `https://youtu.be/dQw4w9WgXcQ` linkből `dQw4w9WgXcQ`. |

### Pontozás

| Mező | Típus | Jelentés |
| --- | --- | --- |
| `scores` | `object` | A nyolc részpontszámot tartalmazó objektum. Mind a nyolc kulcs maradjon benne. |
| `overallScore` | `number \| null` | Kézzel megadott összpontszám 0 és 10 között. A dobogó ezt használja; az oldal nem számolja ki automatikusan a részpontszámokból. |

A `scores` objektum minden értéke `0` és `10` közötti `number`, vagy
pontozás előtt `null`:

| Kulcs | Jelentés |
| --- | --- |
| `skills` | A megfelelő skillek felismerése és helyes használata. |
| `instruction` | Az eredeti feladat és minden konkrét követelmény követése. |
| `research` | Az internetes kutatás minősége és megbízhatósága. |
| `images` | A játékosfotók beszerzése és felhasználása. |
| `video` | A kész videó vizuális minősége. |
| `audio` | A hang, narráció és az előírt TTS-megoldás minősége. |
| `technical` | Technikai megfelelés, például projektstruktúra, ellenőrzés és 9:16 képarány. |
| `impression` | Az eredmény teljes, szubjektív összbenyomása. |

Példa egy rekord releváns részére:

```json
{
  "providerUrl": "https://openrouter.ai/example/model",
  "huggingFaceUrl": "https://huggingface.co/example/model",
  "openSource": true,
  "durationMinutes": 12,
  "tokensMillions": 2.4,
  "costUsd": 0.18,
  "hasVideo": true,
  "hasAudio": false,
  "hasImages": null,
  "verticalCompliant": true,
  "youtubeId": "dQw4w9WgXcQ",
  "scores": {
    "skills": 8,
    "instruction": 7,
    "research": 9,
    "images": 6,
    "video": 8,
    "audio": 0,
    "technical": 8,
    "impression": 7.5
  },
  "overallScore": 7.4
}
```

A fő videó azonosítója a `src/data/site.json` fájl `mainYoutubeId` mezőjébe
kerül.

## 17. modell

A `model-17` rekord helyőrző. Amikor megérkeznek az adatok, ugyanebben a
rekordban írd át a nevet, státuszt és mérőszámokat.

## Render telepítés

1. Töltsd fel a repót GitHubra.
2. A Render Dashboardban válaszd a **New > Blueprint** lehetőséget.
3. Kapcsold össze a repót.
4. A Render a `render.yaml` alapján futtatja az `npm ci && npm run build`
   parancsot, majd a `dist` mappát publikálja.

Az oldal statikus, ezért nem igényel adatbázist vagy titkos környezeti
változót.
