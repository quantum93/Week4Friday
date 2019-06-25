# Pizza Order System on Web

#### Ordering Pizza on Website program. 6/21/2019

#### By **Tae Lee**

## Description

Webpage that operates pizza order by size and topping choice.

### Specs
| Spec.                                                                    | Input                           | Output                                           |
| :----------------------------------------------------------------------- | :------------------------------ | :----------------------------------------------- |
| design pizza object with topping and size properties                     |                                 |                                                  |
| add price logic in prototype                                             |                                 |                                                  |
| add price logic for size and topping choice in prototype                 |                                 |                                                  |
| make a html page for basic pizza order system                            |                                 |                                                  |
| display the choice of size and topping in html but not work for price    | click order                     | display size and topping in html                 |
| display the result of price calculation on html                          | click order (medium, artichoke) | medium, artichoke, 10                            |
| make simpler logic for price calculation                                 | click order (medium, artichoke) | medium, artichoke, 13                            |
| some css style jobs                                                      |                                 |                                                  |
| add topping price variation with key-value                               | click order (medium, pepperoni) | medium, pepperoni, 13                            |
| add multiple choice of topping                                           | medium, cheese, pepperoni       | medium, cheese, pepperoni, 16                    |
| add a logic of price with different number of topping choice             | medium, cheese, pepperoni       | medium, cheese, pepperoni, 16                    |
| add a logic of price with different number of topping choice             | medium, cheese      | medium, cheese, You didn't choose the second topping, 13     |
| polishing order summary message                                          | medium, cheese | Your order details: Your pizza is small size with cheese and artichoke ~ |
| display the result of price calculation on html                          | click order (small, artichoke)  | small, artichoke, 10.4                           |
| fix price bug with takeout of orderId and                                | large, artichoke, cheese        | large, artichoke, cheese, 24                     |
| change summary expression with .text()                                   | large, artichoke, cheese        | Your order details: Your pizza is large size ~   |


## Setup/Installation Requirements

1. To run this program, clone repository from this GitHub.
2. Open file in a web browser such as Google Chrome.
3. add to do items
4. hit display when ready

## Known Bugs
* No known bugs at this time.

## Technologies Used
  * HTML
  * CSS (bootstrap 3.3.7 which is available in https://getbootstrap.com/docs/3.3/)
  * Javascript
  * jQuery-3.4.1 (https://jquery.com/download/)

## Support and contact details

If there are any questions, bugs or concerns, please contact taebumlee@gmail.com

### License

*{This software is licensed under the MIT license}*

Copyright (c) 2019 **Tae Lee**
