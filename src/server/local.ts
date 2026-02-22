import { createFastifyApp } from '../createApp.js';

const app = await createFastifyApp();
app.listen({ port: 3000 }).then(() => {
  console.log('Server running on http://localhost:3000');
});