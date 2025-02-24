## Getting Started

First, run the development server:

```bash
npm install (to install all dependencies)

npm run dev ( to run on your local )

npm run test (to run all tests on local)
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Task Overview
1. Framework: The project is built using Next.js 14 with the App Router.
2. SSR (Server-Side Rendering): Implemented server-side rendering for improved performance and SEO.
3. Languages and Styling: The project is developed with TypeScript and styled using Tailwind CSS.
4. Landing Page: On the homepage, I am displaying a list of GitHub repositories along with a search functionality to filter through the repos.
5. Repository Details: When a user clicks on a repository card, they are directed to a detailed view page, where information about the specific repository is displayed.
6. Virtualization: To optimize performance on the homepage, virtualization will be used for infinite scrolling. This ensures that only the visible items are rendered at any given time, reducing browser load. Although I have not implemented this part yet due to time constraints, I am familiar with the concept and plan to integrate it.
7. Testing: I am writing test cases to ensure the functionality and reliability of the application.