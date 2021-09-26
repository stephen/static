#!/bin/bash

reflex -s -- sh -c "invalidate-devserver" &
watchexec -w "Caddyfile" -- "caddy run && invalidate-devserver"
