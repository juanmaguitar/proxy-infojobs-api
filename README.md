# Proxy Infojobs API

This project gets offers based on the https://api.infojobs.net/ API

It serves two keypoints 

### `/offer` 

Accepts all (query) parameters described here: https://developer.infojobs.net/documentation/operation/offer-list-1.xhtml

### `/offer/:id` 

Accepts all (query) parameters described here: https://developer.infojobs.net/documentation/operation/offer-get-1.xhtml

## Routes Examples

### Offers

    /offer
    /offers?contractType=indefinido
    /offers?contractType=indefinido&province=Murcia

### Details Offers

    /offer/70b97bdafc42e0b118fb417fb84570

## Production Examples

    https://boiling-plains-16324.herokuapp.com/offer
    https://boiling-plains-16324.herokuapp.com/offers?contractType=indefinido
    https://boiling-plains-16324.herokuapp.com/offers?contractType=indefinido&province=Murcia

    https://boiling-plains-16324.herokuapp.com/offer/70b97bdafc42e0b118fb417fb84570

## Installation

To run local server...

    PORT=8081 CLIENT_ID=XXXXXXXXX CLIENT_SECRET=XXXXXXXXXXX npm run dev

To run remotely (in heroku) the proper FOOD2FORK_API_KEY should be set before deploying...

    heroku config:set CLIENT_ID=XXXXXXXXX
    heroku config:set CLIENT_SECRET=XXXXXXXXXXX
