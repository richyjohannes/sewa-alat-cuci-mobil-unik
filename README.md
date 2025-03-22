
# MaxClean - Professional Car Wash Equipment

## Project Overview

MaxClean is a website for a car wash equipment business, offering both rental and purchase options for professional-grade equipment.

## Live Demo

The site is deployed at: https://jr-repository.github.io/febri-web/

## Tech Stack

- React
- TypeScript
- Tailwind CSS
- shadcn-ui
- Vite

## Development Setup

Follow these steps to set up the project locally:

```sh
# Clone the repository
git clone https://github.com/jr-repository/febri-web.git
cd febri-web

# Install dependencies
npm install

# Start development server
npm run dev
```

## Deployment to GitHub Pages

### Automatic Deployment

To deploy the site to GitHub Pages:

1. Run the deployment script:

```sh
# Make the script executable (on macOS/Linux)
chmod +x deploy.sh

# Run the deployment script
./deploy.sh
```

### Manual Deployment

If you prefer to deploy manually:

1. Build the project:

```sh
npm run build
```

2. Deploy the built files:

```sh
cd dist
git init
git checkout -b main
git add -A
git commit -m 'deploy'
git push -f https://github.com/jr-repository/febri-web.git main:gh-pages
cd -
```

### GitHub Repository Configuration

After deploying:

1. Go to your GitHub repository settings
2. Navigate to "Pages" section
3. Select the branch "gh-pages" as the source
4. Save the changes

Your site will be published at `https://jr-repository.github.io/febri-web/`

## Project Structure

- `/src/components` - Reusable UI components
- `/src/components/sections` - Page sections
- `/src/pages` - Main application pages
- `/src/hooks` - Custom React hooks
- `/src/lib` - Utility functions

## Customization

### Styling

This project uses Tailwind CSS for styling. The main configuration is in `tailwind.config.ts`.

### Adding Pages

To add a new page:

1. Create a new component in `/src/pages`
2. Add the route in your routing configuration

## License

This project is licensed under the MIT License.
