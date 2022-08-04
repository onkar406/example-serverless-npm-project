# example-serverless-npm-project

[![Node.js CI](https://github.com/onkar406/example-serverless-npm-project/actions/workflows/build.yml/badge.svg?branch=main)](https://github.com/onkar406/example-serverless-npm-project/actions/workflows/build.yml) [![codecov](https://codecov.io/gh/onkar406/example-serverless-npm-project/branch/main/graph/badge.svg)](https://codecov.io/gh/onkar406/example-serverless-npm-project)

---

### Unit Test Report
Branch: testing/README-A
Commit SHA: #4aed48


``` text
<!-- Unit Tests Start -->

> example-serverless-npm-project@1.0.0 test
> mocha ./test/**



  times()
    ✔ should equal 10
    ✔ should equal 6
    ✔ should equal 25

  spell()
    ✔ should return "one"
    ✔ should return "two"
    ✔ should return "three"
    ✔ should return "four"
    ✔ should return "unknown"

  pow()
    ✔ should return 8

  combination of multiple functions
    ✔ sigma(3) === factorial(3)

  sigma()
    ✔ sigma(10) should return 55
    ✔ sigma(0) should return 0

  factorial()
    ✔ factorial(10) should return 3628800
    ✔ factorial(0) should return 1


  14 passing (7ms)

<!-- Unit Tests End -->
```

---

### Coverage Report
Branch: testing/README-A
Commit SHA: #4aed48

``` text
<!-- Code Coverage Start -->
----------|---------|----------|---------|---------|-------------------
File      | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
----------|---------|----------|---------|---------|-------------------
All files |   93.75 |       90 |     100 |   93.75 |                   
 calc.js  |   93.75 |       90 |     100 |   93.75 | 23                
----------|---------|----------|---------|---------|-------------------
<!-- Code Coverage End -->
```

An example project to get started with Serverless, Node.js and npm
