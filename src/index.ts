import app from './server.js';
import { PORT } from './envConfig.js';

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
