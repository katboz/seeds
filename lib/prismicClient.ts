import * as prismic from '@prismicio/client';

export const repositoryName = 'seeds';

export const client = prismic.createClient(repositoryName, {
  // Add fetch options here if needed later
});
