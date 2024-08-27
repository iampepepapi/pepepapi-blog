import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision/'
import { schemaTypes } from './schemaTypes'
import { markdownSchema } from "sanity-plugin-markdown";
import { codeInput } from '@sanity/code-input'
import { CustomMarkdownInput } from './components/CustomMarkdownInput'

export default defineConfig({
  name: 'default',
  title: 'pepepapi-blog',

  projectId: 'ds7ckje4',
  dataset: 'production',

  plugins: [structureTool(), visionTool(), markdownSchema(), codeInput()],

  schema: {
    types: schemaTypes,
  },
})
