# Talibenah Support System

## Product Idea

The app stays free and ad-free. Users can optionally support development with small one-time contributions.

User-facing wording should use "Support Talibenah" instead of promising premium features. Supporters should not receive weather accuracy, alerts, or forecast features that non-supporters do not receive.

## Android Billing Model

For the Google Play version, use Google Play Billing one-time products:

- `support_small`
- `support_kind`
- `support_boost`

Google Play should provide the final localized price string for each product. The app should render that returned price instead of calculating exchange rates locally.

## Local Currency

Prototype behavior:

1. Detect market from IP when available.
2. Fall back to device locale and time zone.
3. Show three small local-currency amounts.

Production behavior:

1. Query `ProductDetails` from Google Play Billing.
2. Render `formattedPrice` from the billing response.
3. Let Google Play handle buyer currency, taxes, payment methods, refunds, and receipts.

## Backend Receipt Flow

1. Android app starts Google Play Billing checkout.
2. App receives purchase token.
3. App sends purchase token to Talibenah backend.
4. Backend verifies the token with the Google Play Developer API.
5. Backend stores a support event for analytics and thank-you history.

## UX Rules

- Do not block any weather feature behind support.
- Do not show aggressive popups.
- Keep the support section dismissible later if it becomes a repeated surface.
- Show a clear thank-you state after successful payment.
- Keep all support copy localized in English, Persian, and Romanian.
