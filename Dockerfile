FROM denoland/deno

EXPOSE 8000

WORKDIR /app

ADD . /app

RUN deno cache serve.ts

CMD ["run", "--allow-net", "--allow-read", "serve.ts"]
