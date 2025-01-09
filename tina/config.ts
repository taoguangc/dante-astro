import { defineConfig } from 'tinacms';
import Pages from './collections/pages';
import Posts from './collections/posts';
import Projects from './collections/projects';

export default defineConfig({
    clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
    branch:
        process.env.NEXT_PUBLIC_TINA_BRANCH || // custom branch env override
        process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF || // Vercel branch env
        process.env.HEAD, // Netlify branch env
    token: process.env.TINA_TOKEN,

    build: {
        outputFolder: 'admin',
        publicFolder: 'public'
    },
    media: {
        tina: {
            mediaRoot: '',
            publicFolder: 'public'
        }
    },
    // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
    schema: {
        collections: [Pages, Posts, Projects]
    }
});
