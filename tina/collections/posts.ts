import type { Collection } from 'tinacms';

const Posts: Collection = {
    label: 'Blog Posts',
    name: 'posts',
    path: 'src/content/posts',
    fields: [
        {
            type: 'string',
            name: 'title',
            label: 'Title',
            isTitle: true,
            required: true
        },
        {
            type: 'string',
            name: 'excerpt',
            label: 'Excerpt'
        },
        {
            type: 'datetime',
            name: 'publishDate',
            label: 'Publish Date',
            ui: {
                dateFormat: 'MMMM DD YYYY',
                timeFormat: 'hh:mm A'
            }
        },
        {
            type: 'rich-text',
            label: 'Body',
            name: 'body',
            isBody: true
        }
    ]
};

export default Posts;
