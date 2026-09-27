# SchemeSaathi Prototype

A complete frontend prototype for the **SchemeSaathi** AI-Driven Scheme Matching application, developed for Smart India Hackathon (SIH26092).

## Quick Start

```bash
# Install dependencies
npm install

# Run the development server
npm run dev
```

Navigate to [http://localhost:3000](http://localhost:3000) in your browser.

## Prototype Flow for SIH Presentation

The application is structured to support a seamless 3-5 minute demonstration of the "Rahul Patil" scenario:

1. **Landing Page (`/`)**: Introduces the problem and solution. Click "Find My Schemes".
2. **Profile Creation (`/profile`)**: Form comes pre-filled with the Rahul Patil persona (SC, Food Processing, etc.). Click "Analyze My Eligibility".
3. **AI Analysis Simulation (`/analyzing`)**: Shows an engaging loading animation simulating the AI backend processing. Automatically transitions.
4. **Recommendations Dashboard (`/recommendations`)**: Displays the 92% match for NSFDC. Click "Why This Match?" for the modal, or "View Scheme".
5. **Scheme Comparison (`/scheme/compare`)**: Shows how NSFDC compares with PMEGP and PM-DAKSH.
6. **Scheme Details (`/scheme/nsfdc`)**: Detailed view of the NSFDC scheme and its benefits. Click "Continue to Documents".
7. **Document Checklist (`/documents`)**: Interactive checklist for the user to mark documents as prepared.
8. **Application Roadmap (`/roadmap`)**: A clean timeline of the end-to-end process.
9. **AI Assistant (`/assistant`)**: An interactive chatbot interface with predefined mock responses answering common user questions.

## Technology Stack

- **Framework**: Next.js (App Router)
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Design System**: "Honey Opal Sunset" custom color palette

## Notes on Architecture & Future Development

*This is a frontend prototype built with local state and mock data.*

**Where the mock AI/matching logic is located:**
- Matching results and comparison logic are hardcoded primarily in `src/app/recommendations/page.tsx` and `src/app/scheme/compare/page.tsx`.
- The AI Assistant mock responses are located in `src/app/assistant/page.tsx`.

**How real AI could be integrated later:**
1. **Database & API**: Replace local state forms with real API routes that save entrepreneur profiles to a database (e.g., PostgreSQL).
2. **Eligibility Rule Engine**: Implement a deterministic rules engine to filter down schemes based on strict criteria (Age, Category, Income).
3. **RAG (Retrieval-Augmented Generation)**: Store government scheme PDFs in a Vector Database (like Pinecone) to power the Assistant Chatbot using an LLM (like Gemini or OpenAI).
4. **Dynamic Scoring**: Replace the hardcoded `92%` with a real scoring function that weights profile relevance to the retrieved scheme criteria.
