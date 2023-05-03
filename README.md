# [saul-goodman-quotes](https://www.npmjs.com/package/@ericnavar/saul-goodman-quotes)

- The only node package you will ever need
- Request up to almost ~~16~~ **52** unique quotes by Saul Goodman and Jimmy McGill

![billboard](https://user-images.githubusercontent.com/32403644/200190190-cbbd4f4a-6d43-40fd-883d-e98582b648fe.png)

## Usage

```
import { getQuote, getAllQuotes } from '@ericnavar/saul-goodman-quotes'

// returns all quotes 
// string[]
getAllQuotes()

// returns a random quote
// string
getQuote()

```

### Breaking chances from Version 1

Methods in Version 2 now return promises. In Version 2 they returned the resolved string or string array.

## API
- The Lambda code to power this amazing package is here: https://github.com/EricNavar/saul-quotes-serverless
- The API is also open to contributions

## Contributing

This project is open to PRs.
