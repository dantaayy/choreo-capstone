# choreo-capstone

This project will be an API to grab all of a clients accounts and recent credit card transactions

## Competencies

- Understand the basic concepts of GraphQL and how to propersly set up a GraphQL server using Apollo and Apollo Playground.

- This project will help me understand the basics of GraphQL and how to set up a server on my local machine from scratch. I will learn how to set up the proper queries using dummy data that is locally stored. Utilizing the Apollo Playground I will learn how to use most of it's built in tools and how it works by intercting with my dummy data.

## Table of contents

- [Introduction](#introduction)
- [Technologies](#technologies)
- [Setup](#setup)
- [Features](#features)
- [Contact](#contact)

---

## Introduction

- The aim for this project is to be in the shoes of a credit card company
- The company would like to send out emails/mail to their clients regarding their accounts balances, and recent transactions
- By company standards if an account balance is at or above $2,500 the cleint will receive either a paper copy in the mail to pay their balance or by email depending on what they opt in to
- Those who do not have a balance over $2,500 will still get a paper copy/mail notifcation but it won't be an urgent message.

GraphQL will be very useful for this company because if they have thousands of clients, the company can easily query and filter out the accounts they want to take note of or get in contact with. GraphQL will do this in an efficient and fast way without having to over fecth data. GraphQL will also accomodate for under fetching and cut out the need to have multiple different endpoints that can in turn add weight to the website and slow the response down. CLients like to get their data fast and effieciently without any issues otherwise that can lost business/trust.

---

## Technologies

- JavaScript
- Apollo Server - version 3.10.1
- Node.js - version 12.11.1
- Nodemon - version 2.0.19
- Lodash - version 4.17.21

---

## Setup

To run this project, install it locally using npm:

```
$ cd ../choreo-capstone
$ npm install
$ npm start
```

---

## Features

- Get ALL Accounts
- Filter Accounts by id, name or email
- Get accounts OVER $2500 account balance
- Get accounts BELOW $2500 account balance
- Create a new Account/Client
- Update an existing Account/Client
- Delete an Account/Client by ID
- Add purchases to an account purchase list


---

## Contact

- Dante Zelaya
- dantaayy@gmail.com