# Talibenah app icons

All assets are generated from `assets/logo talibena.png`, refined for Android:
the white rounded corners were removed, the artwork sits on a full-bleed navy
gradient, and the water-drop is scaled into the adaptive-icon safe zone so phone
launcher masks (circle / squircle / teardrop) never clip it.

## Web / PWA (used by `index.html` + `manifest.webmanifest`)
- `favicon-16.png`, `favicon-32.png` — browser tab icon
- `apple-touch-icon-180.png` — iOS home screen + in-app brand mark
- `icon-192.png`, `icon-512.png` — PWA icons (full bleed)
- `icon-maskable-512.png` — PWA maskable icon (safe-zone)

## Android launcher
Adaptive icon layers (in `../android/`):
- `ic_launcher_background.png` — navy gradient background layer (108dp)
- `ic_launcher_foreground.png` — transparent foreground, drop in safe zone (108dp)
- `mipmap-*/ic_launcher.png` and `ic_launcher_round.png` — legacy density buckets
  (mdpi 48 · hdpi 72 · xhdpi 96 · xxhdpi 144 · xxxhdpi 192)

In Android Studio, copy `../android/mipmap-*` into `app/src/main/res/`, put the
two layers into `res/drawable/`, and add
`res/mipmap-anydpi-v26/ic_launcher.xml`:

```xml
<adaptive-icon xmlns:android="http://schemas.android.com/apk/res/android">
    <background android:drawable="@drawable/ic_launcher_background" />
    <foreground android:drawable="@drawable/ic_launcher_foreground" />
</adaptive-icon>
```

Play Store listing icon: use `icon-512.png` (512×512).

## Branding
- `splash-talibenah.png` — 1080×1080 splash screen (navy + drop + TALiBENAH)
- `wordmark-talibenah-light.png` — drop + "TALiBENAH" white text (for dark backgrounds)
- `wordmark-talibenah-dark.png` — same in dark ink (for light backgrounds)
- `droplet.png` — the isolated water-drop on transparent (source for the above)
