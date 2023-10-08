import { createInertiaApp } from '@inertiajs/react'
import createServer from '@inertiajs/react/server'
import ReactDOMServer from 'react-dom/server'

import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';


createServer((page) =>

  createInertiaApp({
    page,
    render: ReactDOMServer.renderToString, 
    resolve: (name) => resolvePageComponent(`./pages/${name}/${name}.jsx`, import.meta.glob('./pages/**/**/*.jsx')),
    setup: ({ App, props }) => <App {...props} />,
  }),
)  

/*
createServer((page) =>

  createInertiaApp({
    page,
    render: ReactDOMServer.renderToString, 
    resolve: (name) => require(`./pages/${name}/${name}.jsx`),
    setup: ({ App, props }) => <App {...props} />,
  }),
)  
*/
/*
createServer(page =>
  createInertiaApp({
    page,
    render: ReactDOMServer.renderToString,
    resolve: name => {
      const pages = import.meta.glob(`./pages/${name}/${name}.jsx`, { eager: true })
      return pages[`./pages/${name}/${name}.jsx`]
    },
    setup: ({ App, props }) => <App {...props} />,
  }),
)*/