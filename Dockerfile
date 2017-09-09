FROM scratch

COPY caddy /caddy
COPY Caddyfile /Caddyfile

# Bundle app source
COPY ./dist/ /

EXPOSE 8080
CMD ["/caddy"]
