#!/bin/bash

echo "yarn install react app"
yarn install

echo "start react app"
yarn start > /dev/null 2>&1 &

echo "navigate to our e2e folder"
cd e2e

echo "yarn install e2e"
yarn install

echo "Running $AUTOMATION_SUITE automation suite on $AUTOMATION_ENVIRONMENT"
./run_tests.sh $AUTOMATION_ENVIRONMENT $AUTOMATION_SUITE
