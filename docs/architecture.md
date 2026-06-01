# Talibenah Multi-Source Weather Architecture

## Goal

Talibenah should not depend on a single weather API. The app will read one clean internal weather model while the backend collects, normalizes, compares, and caches data from multiple providers.

## Data Flow

1. Android app requests weather for a location.
2. Backend checks Redis and PostgreSQL/TimescaleDB cache.
3. If data is stale, provider adapters fetch fresh data.
4. Normalizer maps provider responses into Talibenah weather models.
5. Scoring layer calculates provider confidence for the location and forecast range.
6. API returns current weather, hourly forecast, daily forecast, alerts, air quality, and source metadata.

## First Providers

- Open-Meteo: free baseline forecast and archive-friendly data.
- MET Norway: strong global forecast fallback.
- WeatherAPI or OpenWeather: commercial backup and broader conditions metadata.
- RainViewer: precipitation radar layer.
- WAQI or AirNow: air quality, depending on region.
- Windy or EUMETSAT-backed provider: satellite imagery in production.

## Backend Modules

- `providers`: API adapters per source.
- `normalization`: shared units and weather condition mapping.
- `scoring`: confidence, freshness, and provider comparison.
- `cache`: Redis short-term cache and database persistence.
- `alerts`: severe weather and rain notifications.
- `locations`: geocoding, favorites, and nearby places.
- `maps`: radar, satellite, and future weather tile metadata.

## Android Modules

- `ui`: Jetpack Compose screens and widgets.
- `weather`: repository and use cases.
- `storage`: Room cache and DataStore settings.
- `location`: GPS and manual search.
- `i18n`: English, Persian RTL, and Romanian resources.
