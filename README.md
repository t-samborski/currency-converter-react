# The app works as a currency calculator.
  ### Website address: [Adres](https://t-samborski.github.io/currency-converter-react/)
### The task of the application is to convert the exchange rate of the currency selected by the user. The user has the option of converting the exchange rate from PLN to 4 other available currencies.
![Widok aplikacji](/image/First.jpg)
## Mode of action
### In the first field, the user enters the amount in PLN that he wants to convert.
![Podanie kwoty](/image/second.jpg)
### In the second field, the user can choose from 4 available currencies. By selecting one of them and clicking the Recalculate button, the application will calculate the amount you can get for the given amount of PLN.
![Wybór waluty](/image/currency.jpg)

#### The application is designed in such a way that it is possible to add additional currencies with their Kurd at any time without having to rework the entire application. This is possible thanks to the use of a separate component in React, responsible only for storing data related to currencies and their kurd.

## Other uses in the application
### The application also has the current time, which is displayed properly in all places of the world. It is updated every second, so the clock works in real time.
![Zegar](/image/cllock.jpg)

## Technologies used in the application.
- HTML
- CSS
- Java Script
- Normalize CSS
- BEM convention
- React.js
## The application is created by styled-components. All sections of the website are in a separate directory, and the functions are in one hook. This makes the App.js file as transparent as possible.

