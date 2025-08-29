# JW Crypto Currency Asset Allocation Calculator

to run and start the demo project:
`npm install`
then
`npm run dev`

Running different version of node? Use Docker without interfering with your current environment!
_This will run production build of this demo app. Changing the code will not update the UI_.
Run `docker compose build` then `docker compose up`. After testing, remember to run `docker compose down`

This project supports multiple languages with i18n.
Default language is English in USD:
[http://localhost:3001](http://localhost:3001)

Use the following URL to access French UI and conversion rate in Euro:
[http://localhost:3001/?lang=fr&cur=EUR](http://localhost:3001/?lang=fr&cur=EUR)

You may also mix and match languages/currency with the params:
eg: `lang=fr&cur=USD` and `lang=en&cur=EUR`

Notes:

- Currency input field mirrors banking applications, auto formats and puts currency in front of the number.
- Currency input only allow numbers for input.
- ETH/BTC inputs are view only, unable to modify the displayed output.
- None UI-blocking `Loading...`, fetches the API quietly in the background. Only shows loading when user enters too fast in the beginning, or with populated query param for `amt`.
- Debounce added to query param for `amt` with 500 delay when typing in the currency input.
- Refreshing the page will not lose any data.
- Auto scaling font size depending on the screen width
- Breakpoints to handle multiple screen sizes, eg 480px width, 768px width and more.
- Mock API data is stored in the code in case of network/coinbase failure during demo.
- Dynamically load locales when needed except for English en.json, which is loaded by default.

Things to improve:

- Caching coinbase API results and only refetch after certain duration.
- Additional button/options to change language setting/currency setting.
- Better loading technic for locale json to avoid flickering.
- Unit test or acceptance test would be nice.
- aria-label or aria-description for certain elements.
- Auto copy to clipboard when click or tapped on BTC/ETH allocations.
- Add suport for docker development env.
- Lack monitoring tools.
