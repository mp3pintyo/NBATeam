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

Modell-linkek:

- `providerUrl`: az OpenRouter-, API- vagy más szolgáltatói oldal.
- `huggingFaceUrl`: a letölthető modell Hugging Face-oldala.
- `openSource`: kötelező `true` vagy `false` érték.

Egy OpenRouteren futtatott, de letölthető modellnél mindkét URL kitölthető.
Az `openSource` mező nem a szolgáltatót, hanem a modell letölthetőségét jelzi.

Pontozáskor töltsd ki a `scores` nyolc mezőjét 0-10 közötti számmal, majd add
meg az `overallScore` értékét is. A dobogó kizárólag az `overallScore` alapján
épül fel, az oldal nem számol ki vagy talál ki pontokat.

Egy modell 9:16-os videójához a teljes YouTube URL helyett csak az azonosítót
add meg:

```json
"youtubeId": "dQw4w9WgXcQ"
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
