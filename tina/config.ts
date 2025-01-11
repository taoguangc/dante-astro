import { defineConfig } from 'tinacms';

import Pages from './collections/pages';
import Posts from './collections/posts';
import Projects from './collections/projects';

const branch = process.env.HEAD || process.env.TINA_BRANCH || 'main';
const clientId = process.env.TINA_CLIENT_ID;
const token = process.env.TINA_TOKEN;

export default defineConfig({
    branch,
    clientId: clientId || '',
    token: token || '',

    build: {
        outputFolder: 'admin',
        publicFolder: 'public'
    },
    media: {
        tina: {
            mediaRoot: 'uploads',
            publicFolder: 'public'
        }
    },
    // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
    schema: {
        collections: [Pages, Posts, Projects]
    }
    // search: {
    //     tina: {
    //         indexerToken: process.env.TINA_TOKEN,
    //         stopwordLanguages: ['eng']
    //     }
    // }
});
