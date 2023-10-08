import React from 'react';
import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { InertiaProgress } from '@inertiajs/progress';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
//Shows the progressbar when page loads
InertiaProgress.init()



createInertiaApp({
    resolve: name => {
      const pages = import.meta.glob('./pages/**/**/*.jsx', { eager: true })
      return pages[`./pages/${name}/${name}.jsx`] 
    },
    setup({ el, App, props }) {
      createRoot(el).render(<App {...props} />)
    }, 
  })

