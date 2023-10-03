import React from 'react';

import ReactDOMServer from 'react-dom/server';
import createServer from '@inertiajs/react/server';
import { createInertiaApp } from '@inertiajs/react';
//import  createServer   from '@inertiajs/server';


createServer((page) =>

  createInertiaApp({
    page,
    render: ReactDOMServer.renderToString,
    resolve: name => require(`./pages/${name}/${name}.jsx`),
    setup: ({ App, props }) => <App {...props} />,
  }),
)  