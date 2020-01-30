# CashFlow
Web app that makes managing expenses easier

[Live Version](https://cashflowv1.herokuapp.com/about)

### Installation:
1. Download following software:

  `Nodejs v10.15.2`

  `npm v6.13.6`

  `MongoDB v3.6.8`

2. Clone or download repo

  `git clone https://github.com/RaRhAeu/CashFlow.git`

2. Run following commands:

  `npm install`

  `npm run client-install`

3. Run server in dev mode by typing:

  `npm run dev`

### API endpoints:
___
### Events

`GET` /api/events/

`GET` /api/events/event_id

`POST` /api/events/

`DELETE` /api/events/event_id
___
### Expenses
`GET` /api/expenses/

`GET` /api/expenses/event_id

`POST` /api/expenses/

`DELETE` /api/expenses/expense_id
___
### Payments
`GET`     /api/payments/event_id
___
