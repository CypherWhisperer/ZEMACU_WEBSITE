import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  // Set src as the root directory
  root: 'src',

  // Public directory for static assets
  publicDir: '../public',

  // Build configuration
  build: {
    outDir: '../dist',
    emptyOutDir: true,

    // Multi-page application setup
    rollupOptions: {
      input: {
        // Main pages
        main: resolve(__dirname, 'src/pages/index.html'),
        home: resolve(__dirname, 'src/pages/home.html'),
        resources: resolve(__dirname, 'src/pages/resources.html'),
        leaders: resolve(__dirname, 'src/pages/leaders.html'),
        support: resolve(__dirname, 'src/pages/support.html'),
        weekly: resolve(__dirname, 'src/pages/weekly.html')
      },

      // Output configuration
      output: {
        // Organize assets in the dist folder
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.')
          const extType = info[info.length - 1]

          // Organize by file type
          if (['png', 'jpg', 'jpeg', 'svg', 'gif', 'webp', 'ico'].includes(extType)) {
            return `assets/images/[name]-[hash][extname]`
          }
          if (['woff', 'woff2', 'eot', 'ttf', 'otf'].includes(extType)) {
            return `assets/fonts/[name]-[hash][extname]`
          }
          if (extType === 'css') {
            return `assets/css/[name]-[hash][extname]`
          }
          return `assets/[name]-[hash][extname]`
        },

        // JavaScript chunks
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js'
      }
    },

    // Asset handling
    assetsDir: 'assets',

    // Enable source maps for debugging
    sourcemap: false,

    // Minification
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
  },

  // Development server configuration
  server: {
    port: 3000,
    host: true, // Allow external connections
    open: '/pages/home.html', // Opens your main page

    // CORS configuration for component loading
    cors: true,

    // Hot Module Replacement
    hmr: {
      overlay: true
    }
  },

  // Preview server (for testing production build)
  preview: {
    port: 4173,
    host: true,
    open: '/pages/index.html'
  },

  // CSS configuration
  css: {
    devSourcemap: true,

    // CSS preprocessing options
    preprocessorOptions: {
      // If you decide to use Sass/SCSS later
      scss: {
        additionalData: '@import "assets/css/base/variables.scss";'
      }
    }
  },

  // Resolve configuration
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@assets': resolve(__dirname, 'src/assets'),
      '@components': resolve(__dirname, 'src/components'),
      '@pages': resolve(__dirname, 'src/pages'),
      '@js': resolve(__dirname, 'src/assets/js'),
      '@css': resolve(__dirname, 'src/assets/css'),
      '@images': resolve(__dirname, 'public/images')
    }
  },

  // Optimization
  optimizeDeps: {
    include: [
      // Add any dependencies you want to pre-bundle
    ]
  },

  // Plugin configuration (can add plugins later)
  plugins: [
    // You can add plugins here as needed
    // For example: legacy browser support, PWA, etc.
  ],

  // Base URL configuration (useful for deployment)
  base: './', // Relative paths for easier deployment

  // Environment variables
  define: {
    __APP_VERSION__: JSON.stringify(process.env.npm_package_version || '1.0.0')
  }
})
