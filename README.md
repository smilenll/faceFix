This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Project: Face Skin Product Recommender

Requirement:
1. Create Form:
Age
Skin Color
Oiliness
Thickness
2. Functionality:
  - Utilize an AI model to analyze input parameters and suggest an appropriate skincare product type.
  - Provide users with an explanation of why the suggested product type is recommended based on their input data.
3. Product Recommendation:
  - Present a selection of skincare products available in the market that align with the suggested product type.
  - Include links or information on where users can purchase the recommended products.

Technologies
- Next.js
- TailwindCSS

Tradeoffs - usually when I develop I always leave todos if needed
- Implement real Amazon api
- Implement dev mode to reduce unnecessary api calls during development
- Validation and error handling (zod)
- When services start become bigger API calls should be separated in other file
- Deeper research for finding better communication with AI. Language model is not relabel.
- Styling was not priority

Next steps
- Make it work with face picture and remove form
- Stabilize AI response
- Implement store(Amazon) api Connection
- If form stays use Actions and servers-side rendering
- Searching product by multiple categories
- Implement accounts
- Take pictures regular to measure effects from the product
- Change product if is needed
- Change AI versionkl
- Work with multiple stores and find the best price