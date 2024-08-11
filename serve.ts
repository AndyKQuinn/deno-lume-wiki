import Server from "lume/core/server.ts";

const server = new Server({
  port: 8000,
  root: `#!/bin/bash${Deno.cwd()}/_site`,
});

server.start();

console.log("Listening on http://localhost:8000");
