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

## Project: Face Skin Product Recommender

### Requirement:
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

### Technologies
- Next.js
- TailwindCSS

### Time spend: ~ 20h

### Trade-offs
- **Use Real Amazon API:** Implement the official Amazon API for accurate data.
- **Dev Mode Optimization:** Implement a development mode to minimize unnecessary API calls.
- **Robust Validation and Error Handling:** Utilize Zod for data validation and error handling.
- **Modularize API Calls:** As services grow, separate API calls into different files for better organization.
- **Improve AI Communication:** Conduct in-depth research to enhance AI communication, acknowledging that the current language model may be unreliable.
- **Low Priority on Styling:** Focus on functionality over styling for initial development stages.

### Next Steps
- **Integrate Face Recognition:** Enable functionality with facial recognition and remove the form.
- **Stabilize AI Responses:** Enhance the consistency and reliability of AI responses.
- **Implement Amazon API Connection:** Establish a robust connection to the Amazon API.
- **Consider Form Alternatives:** If the form remains, use Actions and server-side rendering for better performance.
- **Multi-Category Product Search:** Enable product searches across multiple categories.
- **Account Implementation:** Introduce user accounts for a personalized experience.
- **Regular Product Evaluation:** Regularly take pictures to measure product effectiveness and adjust products as needed.
- **Update AI Version:** Allow users to change the AI version from the UI.
- **Multi-Store Price Comparison:** Work with multiple stores to find the best prices.