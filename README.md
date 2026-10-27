# Aurelia Grand — Luxury Boutique Hotel & Suites

A modern, high-performance luxury hotel web application built with **React 19**, **Vite**, and **Lucide Icons**.

## Features

- **Hero & Story**: Immersive introduction with ambiance soundscape and currency toggle (INR / USD).
- **Accommodations**: Suite showcase with filtering, room detail modal, amenity highlights, and interactive booking inquiry.
- **Michelin-Caliber Dining**: Signature menus, chef specials, and table reservation previews.
- **Wellness & Spa**: Holistic spa treatments and booking inquiry.
- **Exclusive Offers & Packages**: Curated seasonal experiences and romantic getaways.
- **Location & Surroundings**: Nearby heritage attractions and interactive travel guidance.
- **Contact & Concierge**: Interactive concierge form with date selection and immediate confirmations.

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn / pnpm

### Installation

```bash
npm install
```

### Local Development

```bash
npm run dev
```

The application will be accessible at `http://localhost:5173/`.

### Production Build

```bash
npm run build
```

Preview production build:
```bash
npm run preview
```

## Deployment to Vercel

This project is pre-configured for seamless deployment to [Vercel](https://vercel.com):

1. Push your repository to GitHub:
   ```bash
   git push -u origin main
   ```
2. In your Vercel Dashboard, click **Add New...** > **Project**.
3. Import the `chayan-parmar/hotel` GitHub repository.
4. Framework preset will automatically detect **Vite** (Build command: `npm run build`, Output directory: `dist`).
5. Click **Deploy**.
