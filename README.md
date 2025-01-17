# PokeTeamBuilder
A web application that allows users to build, analyze, store, and compare their pokemon teams, designed to help players better understand their team's strengths and weaknesses.

**Live Demo**: <poke-team-builder-omega.vercel.app>

### Key Features
---
- **Team Analysis** : Analyze your team's weaknesses and strengths against various pokemon types.
- **Team Comparison** : Compare two stored pokemon teams side-by-side with dynamic, color-coded bars with hovering effects to see numerical representation.
- **Advanced Search** : For users who may not remember a name, they can use advanced search to look up a pokemon based on certain attributes such as type, generation, and color.
- **Persistent Team Storage/Management** : Save and persist teams locally for future access, modifications, and comparison.

### Quick Start
1. Clone the repository:
   ```bash
   git clone https://github.com/amyvgs/PokeTeamBuilder.git
   ```
2. Install Dependencies:
   ```bash
   npm install
   ```
3. Run the program:
   ```bash
   npm run dev
   ```

### Built With
---
**Tech Stack** : React, Vite, TailwindCSS, Local Storage
**API** : PokeAPI

**Why?**
React combined with TailwindCSS facilitate customizable and interactive components, creating an engaging user interface featuring animations and dynamic colors. Local storage allows for users to save up to 6 teams, enabling future comparisons, edits, and revisting stored teams.

### Future Optimzations
--- 
- Improve Media Queries for smaller devices
- Create an additional view for team comparison
- Implement caching for faster data fetching



