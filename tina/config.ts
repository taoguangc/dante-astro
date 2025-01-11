import { defineConfig } from 'tinacms';

import Pages from './collections/pages';
import Posts from './collections/posts';
import Projects from './collections/projects';

const clientId = process.env.TINA_CLIENT_ID;
const token = process.env.TINA_TOKEN;
const branch = process.env.TINA_BRANCH;

if (!clientId || !token || !branch) {
    throw new Error('Missing required environment variables TINA_BRANCH, TINA_CLIENT_ID, or TINA_TOKEN');
}

export default defineConfig({
    clientId,
    token,
    branch,

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
});
