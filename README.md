# JW Crypto Currency Asset Allocation Calculator

to run and start the demo project:
`npm install`
then
`npm run dev`

This project supports multiple languages with i18n.
Default language is English in USD:
[http://localhost:5173](http://localhost:5173)

Use the following URL to access French UI and conversion rate in Euro:
[http://localhost:5173/?amt=122&lang=fr&cur=EUR](http://localhost:5173/?amt=122&lang=fr&cur=EUR)

You may also mix and match languages/currency with the params:
eg: `lang=fr&cur=USD` and `lang=en&cur=EUR`

Notes:

- Currency input field mirrors banking applications, auto formats and puts currency in front of the number.
- Currency input only allow numbers for input.
- ETH/BTC inputs are view only, unable to modify the displayed output.
- None UI-blocking `Loading...`, fetches the API quietly in the background. Only shows loading when user enters too fast in the beginning, or with populated query param for `amt`.
- Auto scaling font size depending on the screen width
- breakpoints to handle multiple screen sizes, eg 480px width, 768px width and more.

Things to improve:

- additional button/options to change language setting/currency setting
- auto copy to clipboard when click or tapped on BTC/ETH allocations
- aria labels or descriptions for certain elements
