# CashFlow
Web app that makes managing expenses easier

[Live Version](https://cashflowv1.herokuapp.com/about)

### Instalation:
1. Clone or download repo
`git clone https://github.com/RaRhAeu/CashFlow.git`

2. Run install.sh
`cd CashFlow && chmod u+x ./install.sh && sudo ./install.sh`

3. Run server by typing:
`npm start`

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
