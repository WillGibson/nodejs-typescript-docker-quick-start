# Node.js TypeScript Docker Quick Start

Just something to fire up a quick dev environment for playing around.

Has Ava ready to go for your TDDing and uses a Docker container so you just fire that up and jump in to a bash prompt to run your commands.

It is envisaged that you would copy the files into a new project/repository then start playing.

## Requirements

* Docker & Docker Compose (tested with Docker 19.03.8 and Docker Compose 1.25.4)

## Quick start

    ./scripts/dev.sh

That will leave you at a shell prompt in the container where you can run this one liner to get cracking...

    npm install && npm run build && npm run test && node .

## Exit and take down

Exit the container then....

    ./scripts/down.sh

## Installation

From shell prompt in the container...

    npm install
    
## Build

From shell prompt in the container...

    npm run build
    
## Run tests

From shell prompt in the container having run the build command...

    npm run test
    
## Run the app

From shell prompt in the container having run the build command...

    node .
