#!/bin/bash

# reflex -s -- sh -c "invalidate-devserver" &
# watchexec -w "Caddyfile" -- "caddy run && invalidate-devserver" &

cd city-guide
./node_modules/.bin/next dev -p 80
