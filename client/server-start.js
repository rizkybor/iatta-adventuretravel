// client/server-start.js
(async () => {
  try {
    const m = await import('./.output/server/index.mjs');
    console.log('exports:', Object.keys(m));

    if (m.handler) {
      const http = await import('node:http');
      const port = Number(process.env.PORT || 3000);
      const host = process.env.NITRO_HOST || '0.0.0.0';
      const server = http.createServer(m.handler);
      server.listen(port, host, () => {
        console.log(`Nuxt (handler) listening on http://${host}:${port}`);
      });
      process.on('uncaughtException', err => {
        console.error('uncaughtException', err);
        process.exit(1);
      });
      process.on('unhandledRejection', err => {
        console.error('unhandledRejection', err);
        process.exit(1);
      });
      return;
    }

    if (m.listener) {
      await m.listener({ port: Number(process.env.PORT || 3000), hostname: process.env.NITRO_HOST || '0.0.0.0' });
      console.log('Nuxt listener started via listener()');
      setInterval(() => {}, 1e6);
      return;
    }

    console.error('No compatible export (handler/listener) found in .output/server/index.mjs');
    process.exit(1);
  } catch (e) {
    console.error('Failed to start server:', e);
    process.exit(1);
  }
})();