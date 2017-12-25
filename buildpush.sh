docker build -t "debianmaster/store-fe:v1" .
docker build -t "debianmaster/store-fe:latest" .
docker push debianmaster/store-fe:latest
docker push debianmaster/store-fe:v1
