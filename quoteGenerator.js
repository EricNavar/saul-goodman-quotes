const axios = require('axios');

const getURI = (random) => {
    let uri = `https://6qme6dsq0i.execute-api.us-east-1.amazonaws.com/api/quotes`;
    if (random)
        uri = uri + '/random';
    return uri;
}

//TODO: add query param for random
const request = async (random) => {
    const url = getURI(random);
    return axios.get(url)
        .then(function (response) {
            if (response.data && response.data.message)
                return response.data.message;
            else
                return 'error'; //TODO add better error
        })
        .catch(function (error) {
            console.log(error);
        })
        .finally(function () {
            // always executed
        });
};

const getQuote = () => {
    return request(true);
};

const getAllQuotes = () => {
    return request(false);
};

module.exports = {getQuote, getAllQuotes};
