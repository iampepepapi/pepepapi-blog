import { defineType } from 'sanity';

export default defineType({
  title: 'Markdown Content',
  name: 'markdownContent',
  type: 'object', // Use 'object' type to encapsulate the markdown field
  fields: [
    {
      name: 'body',
      title: 'Body',
      type: 'markdown', // Set the field type to markdown
      options: {
        // Optional: Provide any additional options for the markdown editor
        imageUrl: (imageAsset) => `${imageAsset.url}?w=400&h=400`, // Example of image URL customization
      },
    },
  ],
});
