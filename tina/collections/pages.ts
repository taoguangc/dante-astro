import type { Collection } from 'tinacms';

const Pages: Collection = {
    label: 'Pages',
    name: 'pages',
    path: 'src/content/pages',
    // format: 'mdx',
    // defaultItem: () => ({
    //     title: '新页面',
    //     body: 'Start writing here...'
    // }),
    fields: [
        {
            type: 'string',
            name: 'title',
            label: 'Title',
            isTitle: true,
            required: true
        },
        {
            type: 'object',
            name: 'seo',
            label: 'SEO Settings',
            fields: [
                {
                    type: 'string',
                    name: 'description',
                    label: 'Meta Description',
                    description: 'This is the meta description that will appear in search engines'
                },
                {
                    type: 'image',
                    name: 'ogImage',
                    label: 'Open Graph Image',
                    description: 'This is the image that will appear when shared on social media'
                },
                {
                    type: 'string',
                    name: 'keywords',
                    label: 'Keywords',
                    description: 'Comma separated keywords for SEO'
                }
            ]
        },
        {
            type: 'rich-text' as const,
            label: 'Body',
            name: 'body',
            isBody: true,
            templates: [
                {
                    name: 'hero',
                    label: 'Hero Section',
                    fields: [
                        {
                            type: 'string',
                            name: 'heading',
                            label: 'Heading'
                        },
                        {
                            type: 'string',
                            name: 'subheading',
                            label: 'Subheading'
                        },
                        {
                            type: 'image',
                            name: 'image',
                            label: 'Hero Image'
                        }
                    ]
                }
            ]
        }
    ]
};

export default Pages;
