#!/usr/bin/env bash

curl  -X POST \
  'http://localhost:8080/api/items' \
  --header 'Accept: */*' \
  --header 'User-Agent: Thunder Client (https://www.thunderclient.com)' \
  --header 'Content-Type: application/json' \
  --data-raw '{
  "newItem": {
    "name": "Apple",
    "kcal": 52
  }
}'

curl  -X POST \
  'http://localhost:8080/api/items' \
  --header 'Accept: */*' \
  --header 'User-Agent: Thunder Client (https://www.thunderclient.com)' \
  --header 'Content-Type: application/json' \
  --data-raw '{
  "newItem": {
    "name": "Banana",
    "kcal": 89
  }
}'

curl  -X POST \
  'http://localhost:8080/api/items' \
  --header 'Accept: */*' \
  --header 'User-Agent: Thunder Client (https://www.thunderclient.com)' \
  --header 'Content-Type: application/json' \
  --data-raw '{
  "newItem": {
    "name": "White Onion",
    "kcal": 44 
  }
}'

curl  -X POST \
  'http://localhost:8080/api/items' \
  --header 'Accept: */*' \
  --header 'User-Agent: Thunder Client (https://www.thunderclient.com)' \
  --header 'Content-Type: application/json' \
  --data-raw '{
  "newItem": {
    "name": "Butter",
    "kcal": 34,
    "unit": "tsp"
  }
}'