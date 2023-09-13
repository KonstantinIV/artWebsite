import { createInertiaApp } from '@inertiajs/react';
import { createRoot } from 'react-dom/client';
import  createServer   from '@inertiajs/server';
import ReactDOMServer from 'react-dom/server';
import React from 'react';

    
createServer(page =>   

  createInertiaApp({    
    page,     
    render: ReactDOMServer.renderToString,
    resolve: name => require(`./components/pages/${name}/${name}.js`),
    setup({ el, App, props }) {
      createRoot(el).render(<App {...props} />)
    },  }),
)  