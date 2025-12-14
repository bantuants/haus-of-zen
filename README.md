# Haus of Zen - Botanical Wellness E-commerce Site

A modern, minimalist e-commerce website for Haus of Zen, featuring organic teas and botanicals designed for women's wellness. Built with React, TypeScript, and Vite, integrated with Shopify for product management and checkout.

## Features

- 🛍️ **Shopify Integration**: Real-time product fetching and checkout
- 🛒 **Shopping Cart**: Persistent cart with quantity controls
- 📱 **Responsive Design**: Mobile-first design with elegant aesthetics
- 🎨 **Minimalist UI**: Clean, stone-based color palette with botanical imagery
- 📖 **Content Pages**: About, services, and journal sections
- 🔄 **Dynamic Product Display**: Filterable product categories

## Tech Stack

- **Frontend**: React 19, TypeScript, Tailwind CSS
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **Build Tool**: Vite
- **E-commerce**: Shopify Storefront API
- **Styling**: Custom Tailwind with serif/sans font combinations

## Setup Instructions

### Prerequisites

- Node.js (v18 or higher)
- A Shopify store with Storefront API access

### 1. Clone and Install

```bash
git clone <your-repo-url>
cd haus-of-zen
npm install
```

### 2. Shopify Configuration

1. **Create a Shopify Storefront Access Token**:
   - Go to your Shopify admin panel
   - Navigate to Settings > Apps and sales channels
   - Click "Develop apps" (if not enabled, enable it)
   - Create a new app or select an existing one
   - In the API credentials section, click "Configure Storefront API scopes"
   - Enable the following scopes:
     - `read_products`
     - `read_content` (if using blog content)
   - Save and generate a Storefront access token

2. **Configure Environment Variables**:
   - Copy `.env.local` and update the Shopify credentials:
   ```env
   VITE_SHOPIFY_STORE_DOMAIN=your-store.myshopify.com
   VITE_SHOPIFY_ACCESS_TOKEN=your-generated-access-token
   ```

### 3. Run Development Server

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### 4. Build for Production

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Button.tsx      # Custom button component
│   ├── CartDrawer.tsx  # Shopping cart sidebar
│   ├── Navbar.tsx      # Navigation header
│   ├── ProductCard.tsx # Product display card
│   └── Footer.tsx      # Site footer
├── context/
│   └── CartContext.tsx # Shopping cart state management
├── pages/              # Route components
│   ├── Home.tsx        # Landing page
│   ├── Apothecary.tsx  # Shop/products page
│   ├── Blueprint.tsx   # Services page
│   ├── Foundation.tsx  # About page
│   └── Journal.tsx     # Blog/articles page
├── services/
│   └── shopify.ts      # Shopify API integration
├── types.ts           # TypeScript type definitions
└── App.tsx           # Main app component
```

## Shopify Integration Details

The app integrates with Shopify's Storefront API to:

- **Fetch Products**: Retrieves product catalog with variants, pricing, and images
- **Handle Checkout**: Creates Shopify checkout sessions for seamless purchasing
- **Product Variants**: Supports multiple product variants (sizes, options)
- **Real-time Updates**: Products update automatically from your Shopify store

## Customization

### Styling
- Colors are defined in Tailwind config (stone, sage palettes)
- Typography uses serif for headings, sans for body text
- Responsive breakpoints: mobile-first approach

### Content
- Update product descriptions and images in Shopify
- Modify static content in page components
- Add new pages by creating components and updating routes

### Features
- Extend cart functionality in `CartContext.tsx`
- Add new product filters in `Apothecary.tsx`
- Implement user accounts with Shopify Customer API

## Deployment

### Vercel (Recommended)
1. Connect your GitHub repo to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on push

### Netlify
1. Build command: `npm run build`
2. Publish directory: `dist`
3. Add environment variables in build settings

### Other Platforms
The built app in `dist/` can be deployed to any static hosting service.

## Contributing

1. Follow the existing code style and TypeScript types
2. Test Shopify integration with your store's test data
3. Ensure responsive design works on mobile devices
4. Update this README for any new features

## License

This project is private and proprietary to Haus of Zen.
