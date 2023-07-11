import app from './server';

const port = app.get('port');
app.listen(port, () => {
    console.log(`Find the server at: http://localhost:${port}/`);
});