#cucumber tag
tag=$1

#run cucumber tests
yarn run cucumber --profile $tag || yarn run postcucumber
