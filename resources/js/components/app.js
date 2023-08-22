

import React from 'react';
import { createRoot } from 'react-dom/client';



import { createInertiaApp } from '@inertiajs/react';
import { InertiaProgress } from '@inertiajs/progress';

InertiaProgress.init()

createInertiaApp({
    resolve: name => require(`./pages/${name}/${name}.js`),
    setup({ el, App, props }) {
        createRoot(el).render(<App {...props} />)
      },
  })
