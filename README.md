# Talibenah Weather

Talibenah Weather is an Android-first weather app prototype inspired by the mountainous Talibenah region in Gilan.

## What is included

- Mobile weather home screen
- English, Persian, and Romanian UI
- RTL layout support for Persian
- Mock current weather, hourly forecast, daily forecast, and detailed metrics
- City search that changes the forecast background to a famous local landmark
- Curated city-to-landmark database (`data/landmarks.json`) with live Wikipedia imagery and credit, and an automatic image-search fallback for unlisted cities
- Live Open-Meteo geocoding and forecast data
- Live satellite map embed and RainViewer radar preview
- In-app support section with small localized contribution tiers
- Customizable home sections with saved visibility preferences
- Android-style weather widget preview
- Weather provider selector prepared for multi-source aggregation
- Project-local mountain background asset

## Run

Serve the folder over HTTP so the landmark database and live APIs load:

```
python3 -m http.server 8000
```

Then open `http://localhost:8000`. Opening `index.html` directly via `file://` works for the UI but some browsers block the data/API requests.

## Next development steps

1. Replace mock data with a weather service layer.
2. Replace prototype image search with a production image service and attribution model.
3. Connect support tiers to Google Play Billing one-time products.
4. Move Open-Meteo calls behind a production weather service layer.
5. Add a second provider adapter such as MET Norway.
6. Normalize provider responses into one internal weather model.
7. Replace prototype map embeds with native Android map layers.
8. Add customizable home sections inspired by the Weawow benchmark.
9. Add cache, favorites, location search, and Android packaging.
