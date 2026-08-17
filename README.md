# EclatTech Technologies

A modern React + TypeScript + Vite company web application built with Framer Motion and styled with CSS.

## Deployment & CI/CD

This repository is configured for automatic deployment on **Vercel** with **GitHub Actions**.

- **Vercel Configuration**: `vercel.json` configured for Vite framework and SPA routing rewrites.
- **CI/CD Pipeline**: `.github/workflows/deploy.yml` runs automated linting (`oxlint`), type checking & building on every push and pull request to `main`. On push to `main`, it triggers a production deployment to Vercel.

### Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Run linter
npm run lint

# Build for production
npm run build
```
