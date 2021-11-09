FROM caddy:2.4.1
COPY ./Caddyfile /etc/caddy/Caddyfile
WORKDIR /
COPY ./src /src

CMD caddy run --config /etc/caddy/Caddyfile --adapter caddyfile
