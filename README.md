# MicroService Template
Build the component which requests other API's as a microservice. Use this as a base to build email services and SMS services that takes the details from main server and executes the job.

## Setup
### clone this repository
```shell
$ git clone https://github.com/sih-sosc/microservice-template.git
```
### Installing Dependencies
```shell
$ cd microservice-template
$ npm install
```
### Running the server
```shell
$ npm start
```
### Running the development server
```shell
$ npm run dev
```

# DEVELOPMENT
Add your microservice logic in the main route a.k.a indexroute ('/')

## Testing the route 
### Curl
```shell
$ curl -X POST -H "AUTH_KEY: AuthorizationKey" http://localhost:3000
```