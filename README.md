# Cucumber Playwright

<br/>

### Install application project

1. Install dependencies

```bash
yarn install
```

2. Run application

```bash
yarn start
```

<br/>

### Install E2E project

1. Open E2E project

```bash
cd e2e
```

2. Install dependencies

```bash
yarn install
```

3. Run tests on localhost with regression tag

```bash
./run_tests.sh localhost regression
```

4. Run tests on production with smoke tag

```bash
./run_tests.sh production smoke
```

<br/>

### Install API project

1. Open API project

```bash
cd api_e2e
```

2. Install dependencies

```bash
yarn install
```

3. Run tests

```bash
npm t
```
