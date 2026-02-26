import { createFastifyApp } from '../createApp.js';

const app = await createFastifyApp();
app.listen({ port: 3001 }).then(() => {
  console.log('Server running on http://localhost:3001');
});