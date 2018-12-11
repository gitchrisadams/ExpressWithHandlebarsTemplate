## Install dependencies
cd to server directory
run:
```
npm install
```

### Run:
```
docker build -t dockerizedexpressapp:0.0.1 .
```

## Running locally:
```
npm start
```

### Run in foler where docker-compose.yml is located on server:
```
docker-compose up -d
```

## Deployment
Transfer new files over to server.

SSH to the server and location where the Dockerfile is located