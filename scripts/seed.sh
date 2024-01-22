#!/usr/bin/env bash

curl  -X POST \
  'http://localhost:8080/api/items' \
  --header 'Accept: */*' \
  --header 'User-Agent: Thunder Client (https://www.thunderclient.com)' \
  --header 'Content-Type: application/json' \
  --data-raw '{
  "newItem": {
    "name": "Unsalted Butter",
    "kcal": 34,
    "unit": "tsp"
  }
}'

curl  -X POST \
  'http://localhost:8080/api/items' \
  --header 'Accept: */*' \
  --header 'User-Agent: Thunder Client (https://www.thunderclient.com)' \
  --header 'Content-Type: application/json' \
  --data-raw '{
  "newItem": {
    "name": "Salt",
    "kcal": 0,
    "unit": "tsp"
  }
}'

curl  -X POST \
  'http://localhost:8080/api/items' \
  --header 'Accept: */*' \
  --header 'User-Agent: Thunder Client (https://www.thunderclient.com)' \
  --header 'Content-Type: application/json' \
  --data-raw '{
  "newItem": {
    "name": "Spaghetti",
    "kcal": 2,
    "unit": "g"
  }
}'

curl  -X POST \
  'http://localhost:8080/api/items' \
  --header 'Accept: */*' \
  --header 'User-Agent: Thunder Client (https://www.thunderclient.com)' \
  --header 'Content-Type: application/json' \
  --data-raw '{
  "newItem": {
    "name": "salted butter",
    "kcal": 34,
    "unit": "tsp"
  }
}'

curl  -X POST \
  'http://localhost:8080/api/items' \
  --header 'Accept: */*' \
  --header 'User-Agent: Thunder Client (https://www.thunderclient.com)' \
  --header 'Content-Type: application/json' \
  --data-raw '{
  "newItem": {
    "name": "parmesan",
    "kcal": 22,
    "unit": "tbsp"
  }
}'
