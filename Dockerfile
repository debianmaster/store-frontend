FROM scratch

COPY caddy /caddy
COPY Caddyfile /Caddyfile

# Bundle app source
COPY ./dist/ /dist

EXPOSE 8080
CMD ["/caddy"]
