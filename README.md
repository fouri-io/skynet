
## Running locally
```
node ./bin/www // Now hit http://localhost:4000/ping
```

## Docker Commands
```
docker build -t fouri/skynet .
docker images
docker run -p 4000:4000 -d fouri/skynet
// Can hit it with localhost now
// Look at running process and dump logs
docker ps // get process id
docker logs <container-id>
```

## Docker Prod Build
Auto-builds from `build.sh` once git commit is pushed

## Links
- [Query Dynamo from Node](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/GettingStarted.NodeJs.04.html)
- [Dockerize Node app](https://nodejs.org/en/docs/guides/nodejs-docker-webapp/)
