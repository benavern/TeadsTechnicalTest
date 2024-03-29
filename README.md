# Teads development test

## Instructions

### Problem

Let's consider a second-price, sealed-bid auction:
* An object is for sale with a reserve price.
* We have several potential buyers, each one being able to place one or more bids.
* The buyer winning the auction is the one with the highest bid above or equal to the reserve price.
* The winning price is the highest bid price from a non-winning buyer above the reserve price (or the reserve price if none applies)

### Example

Consider 5 potential buyers (A, B, C, D, E) who compete to acquire an object with a reserve price set at 100 euros, bidding as follows:

A: 2 bids of 110 and 130 euros
B: 0 bid
C: 1 bid of 125 euros
D: 3 bids of 105, 115 and 90 euros
E: 3 bids of 132, 135 and 140 euros

The buyer E wins the auction at the price of 130 euros.

### Goal

The goal is to implement an algorithm for finding the winner and the winning price. Please implement the solution in the language of your choice. Tests should be separated from your algorithm. We sould be able to build and run your solution locally.

Be careful, the problem is non-deterministic on purpose. Be smart!

## How To

### Prerequisite

I made this project with nodeJs, you'll need to install `Node 10+` along with `npm` on your computer.

https://nodejs.org/en/

### Installation

To run the project, nothing more is required.

To run the tests you'll need to install the dependancy `jest` which is in the package.json

```
npm i
```

### Run

To run the project, just type

```
npm start
```
or
```
node index.js
```

### Tests

To run the tests, just type :

```
npm test
```
or
```
node_modules/.bin/jest
```

An lcov coverage report will land in the `tests/coverage` directory at the end of the execution.
