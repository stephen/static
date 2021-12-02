#!/bin/bash

# reflex -s -- sh -c "invalidate-devserver" &
# watchexec -w "Caddyfile" -- "caddy run && invalidate-devserver" &

cd travel
./node_modules/.bin/next dev -p 80
