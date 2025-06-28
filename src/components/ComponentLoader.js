// ComponentLoader.js
export class ComponentLoader {
  static loadedCSS = new Set();
  static loadedJS = new Set();

  /**
   * Load a component with auto-discovery of CSS and JS files
   * @param {string} targetId - The ID of the placeholder div
   * @param {string} componentPath - Path to the component (e.g., '/components/nav' or '/components/nav/nav.html')
   * @param {Object} [options] - Optional overrides
   * @param {string|boolean} [options.css] - CSS path override, or false to skip
   * @param {string|boolean} [options.js] - JS path override, or false to skip
   * @param {Function} [options.onLoad] - Callback after component loads
   * @returns {Promise<void>}
   */
  static async loadComponent(targetId, componentPath, options = {}) {
    const target = document.getElementById(targetId);
    if (!target) {
      console.warn(`ComponentLoader: Target ID "${targetId}" not found.`);
      return;
    }

    try {
      // Parse component path to determine base paths
      const paths = this._parseComponentPath(componentPath);

      // 1. Load the HTML content
      const htmlPath = options.html || paths.html;
      const response = await fetch(htmlPath);
      if (!response.ok) throw new Error(`Failed to load ${htmlPath}`);
      const html = await response.text();
      target.innerHTML = html;

      // 2. Load CSS (auto-discover or use override)
      const cssPath = options.css === false ? null : (options.css || paths.css);
      if (cssPath && !this.loadedCSS.has(cssPath)) {
        const cssExists = await this._fileExists(cssPath);
        if (cssExists) {
          const link = document.createElement('link');
          link.rel = 'stylesheet';
          link.href = cssPath;
          document.head.appendChild(link);
          this.loadedCSS.add(cssPath);
        }
      }

      // 3. Load JS (auto-discover or use override)
      const jsPath = options.js === false ? null : (options.js || paths.js);
      if (jsPath && !this.loadedJS.has(jsPath)) {
        const jsExists = await this._fileExists(jsPath);
        if (jsExists) {
          await this._loadScript(jsPath);
          this.loadedJS.add(jsPath);
        }
      }

      // 4. Call optional onLoad callback
      if (typeof options.onLoad === 'function') {
        options.onLoad();
      }

      // 5. Dispatch event
      target.dispatchEvent(new CustomEvent('componentLoaded', {
        detail: { id: targetId, paths }
      }));

    } catch (err) {
      console.error(`ComponentLoader: Error loading component`, err);
    }
  }

  /**
   * Parse component path and generate conventional paths
   * @param {string} componentPath - e.g., '/components/nav' or '/components/nav/nav.html'
   * @returns {Object} paths object with html, css, js properties
   */
  static _parseComponentPath(componentPath) {
    let basePath, componentName;

    if (componentPath.endsWith('.html')) {
      // Path like '/components/nav/nav.html'
      basePath = componentPath.substring(0, componentPath.lastIndexOf('/'));
      componentName = componentPath.substring(componentPath.lastIndexOf('/') + 1, componentPath.lastIndexOf('.'));
    } else {
      // Path like '/components/nav'
      basePath = componentPath;
      componentName = componentPath.substring(componentPath.lastIndexOf('/') + 1);
    }

    return {
      html: `${basePath}/${componentName}.html`,
      css: `${basePath}/${componentName}.css`,
      js: `${basePath}/${componentName}.js`,
      basePath,
      componentName
    };
  }

  /**
   * Check if a file exists
   * @param {string} url - File URL to check
   * @returns {Promise<boolean>}
   */
  static async _fileExists(url) {
    try {
      const response = await fetch(url, { method: 'HEAD' });
      return response.ok;
    } catch {
      return false;
    }
  }

  /**
   * Load a script dynamically
   * @param {string} src - Script source URL
   * @returns {Promise<void>}
   */
  static _loadScript(src) {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = src;
      script.onload = resolve;
      script.onerror = reject;
      document.body.appendChild(script);
    });
  }
}
