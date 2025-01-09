import type { Collection } from 'tinacms';

const Projects: Collection = {
    name: 'projects',
    label: 'Projects',
    path: 'src/content/projects',
    fields: [
        {
            type: 'string',
            name: 'title',
            label: 'Title',
            required: true,
            isTitle: true
        },
        {
            type: 'string',
            name: 'description',
            label: 'Description'
        },
        {
            type: 'datetime',
            name: 'publishDate',
            label: 'Publish Date',
            required: true,
            ui: {
                dateFormat: 'YYYY-MM-DD',
                timeFormat: 'HH:mm'
            }
        },
        {
            type: 'boolean',
            name: 'isFeatured',
            label: 'Featured'
        },
        {
            type: 'rich-text',
            name: 'body',
            label: 'Body',
            isBody: true
        }
    ]
};

export default Projects;
