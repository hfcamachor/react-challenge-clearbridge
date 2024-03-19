## Library Api

I created this page based on designs from various library websites. I chose a simple green color palette and divided each component for better readability and scalability.

I used Material UI for some components to expedite the process, and I also employed React Query for handling API data and global context for global state management.

The information for each item changes when the search of the api is used. For example, the category_titles do not appear during the search, so the filter in these cases remains with only the 'All' option. Similarly, the images change; when searching, the image_id is not included, so in those cases, I use the thumbnail image


This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


# react-coding-challenge
# Delivery React Coding Challenge

## 1. Goal

Your goal is to build a react app that displays a list of books. We will provide guidelines and feature requests below, but ultimately the design and functionality of your app is up to you. Keep in mind functionality and code quality is more important than asthetic design.  The code you write should be maintanable and easy to understand.

## 2. Instructions

Please read through the rest of the requirements and additional info before working on your app.

You can use third party libraries, but the more code you write yourself, the better.

You have **1 day** to submit your code, however we want to be respectful of your time and do **not** expect you to work for more than **2 hours** on this challenge.

When you are finished please submit a pull request.

## 3. Basic Requirements

- Create a single page react application using responsive design (the application should render properly on a desktop and mobile device).
- The application should use the [following](https://api.artic.edu/docs/#quick-start) API to retrieve a set of artwork
- The artworks should be listed 10/page with pagination
- Each item title and thumbnail should be clickable to bring up the artwork detail page
- Display details about the item on a separate page and have a back button to return to the list page and display the page the user was on
- List the following items on the detail page: _title,artist_display,date_display,main_reference_number, thubnail, dimensions_
- Implement the ability to search the artwork by title and the ability to filter the results by category
- Document your design decisions
- You can create components from scratch or you can use a component library but the more code you write yourself, the better
- Create a comments form to demonstrate data validation, the form does not need to make an API call to persist the data.
- using TypeScript is a bonus but not required

## Evaluation Criteria

- Understanding of core Javascript concepts
- Optimized and performant code
- Understanding of the React library
- Code and component reuse/extensibility
- Code design
- Ability to write clear documentation
