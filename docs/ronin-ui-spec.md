# Rōnin — specifica visiva (riferimento per il port in Svelte)

Estratta dal progetto Next/React `ronin-character-generator` prima della dismissione.
Serve a ricostruire in Svelte la **stessa UI**, non a modificarla.

## Tema (token)

`src/app/globals.css` (HSL, classe `.dark`) + `tailwind.config.ts`:

| Token | Valore | Note |
|---|---|---|
| background | `20 12% 12%` (#242220) | sfondo |
| foreground | `0 0% 98%` | testo |
| card | `20 12% 15%` | superfici |
| primary / accent | `48 96% 54%` (#EACD2E) | accento giallo |
| secondary | `0 0% 25%` | |
| muted / muted-foreground | `0 0% 25%` / `0 0% 63.9%` | |
| border / input | `0 0% 30%` | |
| ring | `48 96% 54%` | |
| destructive | `0 62.8% 30.6%` | disonore |

Font:
- body: `"IM Fell English"`, serif
- headline: `Cinzel`, serif
- special: `"Noto Sans JP"`, sans-serif

Caricati da Google Fonts in `[locale]/layout.tsx`:
`Cinzel:wght@400;700` + `IM+Fell+English:ital@0;1` (Noto Sans JP non è nell'URL attuale).

Layout: `<html class="dark">`, body `font-body`, immagine `public/img/compwith_ronin.png` in alto a destra
(`.ronin-img-topright`: `top:18vh; right:5vw; width:15vw; rotate(25deg); z-index:10`).

## Struttura pagina (`CharacterGenerator.tsx`)

Contenitore: `min-h-screen bg-background text-foreground font-body p-4 sm:p-6 md:p-8`;
`main` a `max-w-4xl mx-auto space-y-6`.

1. **Header** (testo centrato): titolo `RŌNIN: {page.title}` in `font-headline` con sottolineatura SVG
   (path curva, `stroke=currentColor`, `strokeWidth=2`), poi `page.lastWarrior` e i due bottoni
   **Onore** / **Disonore** (variant `default` / `destructive` quando attivi).
2. **Bottone genera**: cerchio `w-40 h-40`, `rounded-full`, `border-2 border-foreground/50`,
   `hover:bg-primary/10`, dentro tre righe (`page.click`, `page.forNew`, `page.warrior`),
   `font-headline text-lg font-bold`.
3. **CharacterHeader**: `page.youAre`, nome `text-4xl font-headline font-bold text-primary`,
   nickname inglese (italic), kanji (`text-2xl`), giapponese (`text-xl`), `page.the`, classe `text-3xl`.
4. `Separator` (`my-8`).
5. **StatsDisplay** (flex justify-around, wrap): PF, Virtù (+ dadi), Onore (+ stato), Ryo.
6. `Separator`.
7. **AttributesDisplay**: griglia 5 colonne. Sinistra (md:col-span-3): `page.attributes` +
   Corpi Infranti / Cronache Oscure / Cattive Abitudini / Afflizioni. Destra (md:col-span-2):
   `page.abilities` con lista Swiftness/Spirit/Vigor/Resilience.
8. `Separator`.
9. **HonourTenetsDisplay** (centrato): `page.youMustFollow`, titolo precetto `text-2xl font-headline`,
   lista tenet uniti con ` • `.
10. `Separator`.
11. **EquipmentDisplay**: due blocchi a griglia. (Armi | Armatura stile/tier/descrizione) e
    (Equipaggiamento | Feature titolo/descrizione). Usa `list-disc list-inside`.
12. **TextsDisplay** (solo se presenti testi): due colonne centrate separate da una linea verticale.
    Titolo `page.unseenText` / `page.shintaiText`, badge titolo in `font-special tracking-[0.5em]
    bg-stone-700/50 rounded-sm`, descrizione muted.
13. Bottone download: **commentato/disabled** nel sorgente — non portarlo.

## Footer (`Footer.tsx`)

`text-center text-xs text-gray-500 py-6 border-t`, tre paragrafi:
licenza Rōnin Third Party (Marco Tondi / Slightly Reckless Games LTD), copyright,
`v.{version} • <GitHub svg + link>`.
