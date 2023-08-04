import app from '~/app';

//@ts-ignore
if (import.meta.env.PROD || import.meta.env.PRODUCTION) {
    const APP_PORT = process.env.PORT || 3001;
    app.listen(APP_PORT);
    console.log('PetClinic API running at http://localhost:%s', APP_PORT);
}

export const nodeApp = app;
