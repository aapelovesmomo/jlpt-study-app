# JLPT Study App

A clean, minimalist web application for Japanese Language Proficiency Test (JLPT) preparation. Practice grammar, vocabulary, and test-taking skills for N5 through N1 levels.

## Features

- **Level-based Learning**: Organized by JLPT levels (N5-N1)
- **Grammar Study**: Clear explanations with examples and usage notes
- **Interactive Exercises**: Fill-in-blank and translation exercises
- **Vocabulary Practice**: Flashcards and quiz modes
- **Progress Tracking**: Simple progress tracking with local storage
- **Clean Design**: Minimalist, mobile-responsive interface

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone or download this project
2. Navigate to the project directory:
   ```bash
   cd jlpt-study-app
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and visit `http://localhost:5173`

## How to Use

1. **Choose Your Level**: Start by selecting your JLPT level (N5-N1) from the home page
2. **Study Grammar**: Learn grammar concepts with detailed explanations and examples
3. **Practice Exercises**: Test your knowledge with interactive typing exercises
4. **Study Vocabulary**: Use flashcards or take quizzes to learn vocabulary
5. **Track Progress**: Monitor your learning progress across all levels

## Project Structure

```
src/
├── components/          # React components
│   ├── HomePage.tsx    # Level selection page
│   ├── LevelPage.tsx   # Level overview page
│   ├── GrammarPage.tsx # Grammar study page
│   ├── ExercisePage.tsx # Exercise practice page
│   ├── VocabularyPage.tsx # Vocabulary study page
│   ├── ProgressPage.tsx # Progress tracking page
│   └── Navigation.tsx  # Navigation component
├── data/
│   └── jlptData.ts     # JLPT content data
├── styles/
│   └── index.css       # Global styles
├── App.tsx             # Main app component
└── main.tsx           # App entry point
```

## Content Structure

The app includes sample content for N5 and N4 levels. Each level contains:

- **Grammar Points**: Essential grammar patterns with explanations and examples
- **Exercises**: Fill-in-blank and translation exercises
- **Vocabulary**: Essential vocabulary with readings and example sentences

## Customization

### Adding Content

To add more content, edit `src/data/jlptData.ts`:

1. Add grammar points to the `grammar` array
2. Add exercises to the `exercises` array  
3. Add vocabulary to the `vocabulary` array

### Styling

The app uses Tailwind CSS for styling. Modify `tailwind.config.js` to customize the design.

## Technologies Used

- **React 18** with TypeScript
- **React Router** for navigation
- **Tailwind CSS** for styling
- **Vite** for build tooling

## Future Enhancements

- More comprehensive content for all JLPT levels
- Audio pronunciation for vocabulary
- Spaced repetition system
- User accounts and cloud sync
- Mobile app version

## License

This project is open source and available under the MIT License.
