
# Yoga Companion App

Welcome to Yoga Companion, your personal guide to holistic well-being through the ancient wisdom of yoga. This application is designed to help users explore personalized routines, discover asanas, practice pranayama, and deepen their understanding of yogic philosophy.

## Core Features

*   **Personalized Routine Generation**: AI-powered generation of yoga routines tailored to user input like experience level, goals, and physical limitations.
*   **Asana Display**: Clear display of yoga asanas with detailed instructions and benefits.
*   **Guided Pranayama**: Interactive guided Pranayama sessions with visual and audio cues.
*   **Yoga Education**: Educational content on Mudras, Bandhas, Shatkarmas, Dhyana, and Kundalini.

## Tech Stack

This project is built with a modern web development stack:

*   **Framework**: [Next.js](https://nextjs.org/) (App Router)
*   **UI Library**: [React](https://reactjs.org/)
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
*   **UI Components**: [ShadCN UI](https://ui.shadcn.com/)
*   **AI Integration**: [Genkit (Firebase Genkit)](https://firebase.google.com/docs/genkit)

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

*   Node.js (v18 or later recommended)
*   npm or yarn

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/jaiveersingh23/yoga-companion/new/main?filename=README.md
    cd yoga-companion-app
    ```
2.  Install dependencies:
    ```bash
    npm install
    # or
    # yarn install
    ```

### Environment Variables
This project uses a `.env` file for environment variables. Currently, it's empty but can be used to store API keys or other configuration details if needed in the future. Create a `.env` file in the root of the project if you need to add any environment-specific variables:
```
# .env
# Add your environment variables here, for example:
# GOOGLE_API_KEY=your_google_api_key_for_genkit
```

### Running the Development Server

To start the Next.js development server:

```bash
npm run dev
# or
# yarn dev
```

This will typically start the app on `http://localhost:9002`.

### Running Genkit Developer UI

Genkit flows are used for AI-powered features. To start the Genkit developer UI (which allows you to inspect and test your flows):

```bash
npm run genkit:dev
# or
# yarn genkit:dev
```

This will start the Genkit developer UI, usually on `http://localhost:4000`. You can also use `npm run genkit:watch` to restart Genkit automatically when flow files change.

### Building for Production

To create a production build:

```bash
npm run build
# or
# yarn build
```

### Starting the Production Server

After building, you can start the production server:

```bash
npm run start
# or
# yarn start
```

## Project Structure

A brief overview of the key directories:

*   `src/app/`: Contains the Next.js pages and layouts using the App Router.
*   `src/components/`: Shared React components (UI elements, layout components, etc.).
    *   `src/components/ui/`: ShadCN UI components.
*   `src/lib/`: Utility functions, data sources (asanas, pranayama, education).
*   `src/ai/`: Genkit related code.
    *   `src/ai/flows/`: Genkit flows for AI functionalities.
    *   `src/ai/genkit.ts`: Genkit global configuration.
    *   `src/ai/dev.ts`: Entry point for Genkit development server.
*   `public/`: Static assets.
*   `styles/`: Global CSS styles.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue.
