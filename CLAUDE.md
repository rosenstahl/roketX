# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Frontend Development
- **Start development server**: `npm run dev` (Vite on port 5173)
- **Build for production**: `npm run build`
- **Lint code**: `npm run lint`
- **Preview production build**: `npm run preview`

### Backend Development
- **Start backend server**: `npm run server:dev` (Express on port 3000)
- **Start fullstack development**: `npm run dev:fullstack` (Both frontend + backend)

### Testing
- **Run tests**: `npm run test`
- **Run tests with coverage**: `npm run test:coverage`
- **Run tests with UI**: `npm run test:ui`

### Production Management
- **Start with PM2**: `npm run pm2:start`
- **Restart application**: `npm run pm2:restart`
- **Reload application**: `npm run pm2:reload` (zero-downtime)
- **Stop application**: `npm run pm2:stop`
- **View logs**: `npm run pm2:logs`
- **Check status**: `npm run pm2:status`
- **Health check**: `npm run health:check`

## Project Architecture

This is a **fullstack React + Node.js application** for RoketX, a digital marketing and web development company. The project combines a React frontend with an Express.js backend for enhanced functionality and automated deployment.

### Architecture Overview
- **Frontend**: React 18 + Vite (Development: port 5173)
- **Backend**: Express.js + Node.js (Production: port 3000)
- **Deployment**: GitHub Webhook → Git Pull → Auto Build → PM2 Restart
- **Proxy**: Nginx reverse proxy for production (port 80/443 → 3000)

### Key Technologies
- **Frontend**: React 18, Vite, React Router DOM
- **Backend**: Express.js, Node.js 18+
- **Process Management**: PM2 for production
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion, React Three Fiber
- **Internationalization**: i18next with German, English, and Turkish support
- **Testing**: Vitest with React Testing Library
- **Performance**: Code splitting with lazy loading, PWA support
- **Monitoring**: Sentry integration, Web Vitals tracking
- **Email Service**: FormSubmit.co proxy through backend API
- **Deployment**: GitHub Webhook automation with comprehensive logging

### Project Structure
#### Frontend (React)
- `src/components/` - Reusable UI components and page sections
  - `common/` - Shared components (Analytics, ErrorBoundary, CookieConsent)
  - `sections/` - Page sections (Hero, About, Contact, etc.)
  - `ui/` - Basic UI components (Button, FormInput, etc.)
- `src/pages/` - Legal pages (Impressum, Datenschutz, AGB, NotFound)
- `src/hooks/` - Custom React hooks
- `src/services/` - API services (emailService.js for backend communication)
- `src/utils/` - Utility functions for analytics, performance, error tracking
- `src/constants/` - Static data and configuration
- `src/i18n/` - Internationalization configuration
- `src/locales/` - Translation files (de, en, tr)
- `src/styles/` - Global CSS and font definitions

#### Backend (Node.js)
- `server.js` - Main Express application with API routes and webhook handler
- `deployment.js` - Automated deployment module with Git operations
- `ecosystem.config.js` - PM2 process management configuration
- `scripts/` - Server setup and deployment scripts
- `logs/` - Application and deployment logs (not in git)

### Import Paths
The project uses absolute imports with path aliases:
- `@/` - Points to src/
- `@components/` - Points to src/components/
- `@utils/` - Points to src/utils/
- `@hooks/` - Points to src/hooks/
- `@pages/` - Points to src/pages/
- `@assets/` - Points to public/

ESLint enforces absolute imports over relative paths for cleaner code.

### Design System
Custom Tailwind configuration with:
- **Color scheme**: 60/30/10 rule (base/main/accent colors)
- **Typography**: SF Pro Display font with semantic font sizes
- **Responsive design**: Mobile-first approach
- **Component styling**: Uses custom CSS classes and Tailwind utilities

### Performance Patterns
- **Lazy loading**: All page sections and routes are lazy-loaded
- **Code splitting**: Vendor, i18n, and animation chunks
- **Preloading**: Critical components (Hero, About, PackageComparison) are preloaded
- **Asset optimization**: Images optimized, CSS minified, console logs removed in production

### Component Patterns
- Components use `@/` imports for consistency
- Suspense boundaries with loading spinners for lazy components
- Error boundaries for robust error handling
- PropTypes for component validation
- Framer Motion for page transitions and animations

### Internationalization
- Default language: English (fallback)
- Supported languages: German (de), English (en), Turkish (tr)
- Translation files in `src/locales/[lang]/common.json`
- Browser language detection enabled

### Testing Setup
- Vitest with jsdom environment
- React Testing Library for component testing
- Test files should follow `*.test.jsx` or `*.spec.jsx` naming
- Coverage reports in text, JSON, and HTML formats
- Setup file at `src/test/setup.js`

### Build Configuration
- Development: Source maps enabled, console logs preserved
- Production: Console logs removed, assets optimized, CSS minified
- PWA configuration with service worker auto-update
- Asset organization by type (img/, js/, css/)

## Development Guidelines

When working with this codebase:
1. Use absolute imports with `@/` prefix instead of relative paths
2. Follow the existing component structure and naming conventions
3. Add new translations to all three language files when adding text content
4. Use the established color system from Tailwind config
5. Implement proper loading states for async operations
6. Add proper error boundaries for new features
7. Follow the lazy loading pattern for new pages/sections
8. Use Framer Motion for consistent animations
9. Test components with Vitest and React Testing Library