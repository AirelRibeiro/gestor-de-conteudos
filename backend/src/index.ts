import app from './app';
import 'dotenv/config';

const PORT = process.env.APP_PORT || 3001;

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}`));
