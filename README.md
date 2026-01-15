# Traducteur Jargon (Grandmother GPT)

A Next.js application designed to translate complex technical developer jargon into simple, everyday language that anyone—even your grandmother—can understand. Powered by LangChain and OpenAI.

## Features

- **Jargon Translation**: Enter technical terms or sentences, and get a simplified explanation.
- **AI-Powered**: Uses OpenAI's GPT-3.5-turbo via LangChain to generate human-friendly explanations.
- **Modern UI**: Built with Next.js 16, React 19, and styled with Tailwind CSS 4.

## Tech Stack

- [Next.js 16](https://nextjs.org/) (App Router)
- [React 19](https://react.dev/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [LangChain](https://js.langchain.com/) for AI integration
- [OpenAI API](https://openai.com/)

## Getting Started

### Prerequisites

- Node.js installed on your machine.
- An OpenAI API Key.

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd traducteur-jargon
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root directory and add your OpenAI API key:
   ```env
   OPENAI_API_KEY=your_openai_api_key_here
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Usage

1. Type or paste technical jargon into the text area (e.g., "I just pushed a commit to the main branch after fixing a merge conflict").
2. Click the **Translate** button.
3. Read the simplified explanation below.

## Project Structure

- `app/page.tsx`: The main user interface.
- `app/actions.ts`: Server-side actions handling the LangChain logic and OpenAI interaction.

## License

Distributed under the MIT License. Copyright (c) 2026 GATOUX Arthur.
