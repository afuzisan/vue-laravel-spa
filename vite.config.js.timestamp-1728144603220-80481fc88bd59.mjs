// vite.config.js
import { defineConfig } from "file:///C:/xampp/htdocs/vue-laravel-spa/node_modules/vite/dist/node/index.js";
import laravel from "file:///C:/xampp/htdocs/vue-laravel-spa/node_modules/laravel-vite-plugin/dist/index.js";
import vue from "file:///C:/xampp/htdocs/vue-laravel-spa/node_modules/@vitejs/plugin-vue/dist/index.mjs";
var vite_config_default = defineConfig({
  resolve: {
    alias: {
      "@": "/resources/js"
    }
  },
  build: {
    sourcemap: true
  },
  server: {
    port: 80
  },
  plugins: [
    laravel({
      input: ["resources/js/app.js"],
      refresh: true
      // detectTls: 'vue-laravel-spa.test',
    }),
    vue({
      template: {
        transformAssetUrls: {
          // The Vue plugin will re-write asset URLs, when referenced
          // in Single File Components, to point to the Laravel web
          // server. Setting this to `null` allows the Laravel plugin
          // to instead re-write asset URLs to point to the Vite
          // server instead.
          base: null,
          // The Vue plugin will parse absolute URLs and treat them
          // as absolute paths to files on disk. Setting this to
          // `false` will leave absolute URLs un-touched so they can
          // reference assets in the public directory as expected.
          includeAbsolute: false
        }
      }
    })
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFx4YW1wcFxcXFxodGRvY3NcXFxcdnVlLWxhcmF2ZWwtc3BhXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFx4YW1wcFxcXFxodGRvY3NcXFxcdnVlLWxhcmF2ZWwtc3BhXFxcXHZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi94YW1wcC9odGRvY3MvdnVlLWxhcmF2ZWwtc3BhL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcbmltcG9ydCBsYXJhdmVsIGZyb20gXCJsYXJhdmVsLXZpdGUtcGx1Z2luXCI7XG5pbXBvcnQgdnVlIGZyb20gXCJAdml0ZWpzL3BsdWdpbi12dWVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiB7XG4gICAgICBcIkBcIjogXCIvcmVzb3VyY2VzL2pzXCIsXG4gICAgfSxcbiAgfSxcbiAgYnVpbGQ6IHtcbiAgICBzb3VyY2VtYXA6IHRydWUsXG4gIH0sXG4gIHNlcnZlcjoge1xuICAgIHBvcnQ6IDgwLFxuICB9LFxuICBwbHVnaW5zOiBbXG4gICAgbGFyYXZlbCh7XG4gICAgICBpbnB1dDogW1wicmVzb3VyY2VzL2pzL2FwcC5qc1wiXSxcbiAgICAgIHJlZnJlc2g6IHRydWUsXG4gICAgICAvLyBkZXRlY3RUbHM6ICd2dWUtbGFyYXZlbC1zcGEudGVzdCcsXG4gICAgfSksXG4gICAgdnVlKHtcbiAgICAgIHRlbXBsYXRlOiB7XG4gICAgICAgIHRyYW5zZm9ybUFzc2V0VXJsczoge1xuICAgICAgICAgIC8vIFRoZSBWdWUgcGx1Z2luIHdpbGwgcmUtd3JpdGUgYXNzZXQgVVJMcywgd2hlbiByZWZlcmVuY2VkXG4gICAgICAgICAgLy8gaW4gU2luZ2xlIEZpbGUgQ29tcG9uZW50cywgdG8gcG9pbnQgdG8gdGhlIExhcmF2ZWwgd2ViXG4gICAgICAgICAgLy8gc2VydmVyLiBTZXR0aW5nIHRoaXMgdG8gYG51bGxgIGFsbG93cyB0aGUgTGFyYXZlbCBwbHVnaW5cbiAgICAgICAgICAvLyB0byBpbnN0ZWFkIHJlLXdyaXRlIGFzc2V0IFVSTHMgdG8gcG9pbnQgdG8gdGhlIFZpdGVcbiAgICAgICAgICAvLyBzZXJ2ZXIgaW5zdGVhZC5cbiAgICAgICAgICBiYXNlOiBudWxsLFxuXG4gICAgICAgICAgLy8gVGhlIFZ1ZSBwbHVnaW4gd2lsbCBwYXJzZSBhYnNvbHV0ZSBVUkxzIGFuZCB0cmVhdCB0aGVtXG4gICAgICAgICAgLy8gYXMgYWJzb2x1dGUgcGF0aHMgdG8gZmlsZXMgb24gZGlzay4gU2V0dGluZyB0aGlzIHRvXG4gICAgICAgICAgLy8gYGZhbHNlYCB3aWxsIGxlYXZlIGFic29sdXRlIFVSTHMgdW4tdG91Y2hlZCBzbyB0aGV5IGNhblxuICAgICAgICAgIC8vIHJlZmVyZW5jZSBhc3NldHMgaW4gdGhlIHB1YmxpYyBkaXJlY3RvcnkgYXMgZXhwZWN0ZWQuXG4gICAgICAgICAgaW5jbHVkZUFic29sdXRlOiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSksXG4gIF0sXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBdVIsU0FBUyxvQkFBb0I7QUFDcFQsT0FBTyxhQUFhO0FBQ3BCLE9BQU8sU0FBUztBQUVoQixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLO0FBQUEsSUFDUDtBQUFBLEVBQ0Y7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNMLFdBQVc7QUFBQSxFQUNiO0FBQUEsRUFDQSxRQUFRO0FBQUEsSUFDTixNQUFNO0FBQUEsRUFDUjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsUUFBUTtBQUFBLE1BQ04sT0FBTyxDQUFDLHFCQUFxQjtBQUFBLE1BQzdCLFNBQVM7QUFBQTtBQUFBLElBRVgsQ0FBQztBQUFBLElBQ0QsSUFBSTtBQUFBLE1BQ0YsVUFBVTtBQUFBLFFBQ1Isb0JBQW9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBTWxCLE1BQU07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBTU4saUJBQWlCO0FBQUEsUUFDbkI7QUFBQSxNQUNGO0FBQUEsSUFDRixDQUFDO0FBQUEsRUFDSDtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
