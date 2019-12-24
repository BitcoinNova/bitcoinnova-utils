![image](https://camo.githubusercontent.com/98f307e50e222b95c1695c11208bd91565f8b7c7/687474703a2f2f706f6f6c2e626974636f696e6e2e62697a2f626974636f696e2d6e6f76612e706e67)

# Bitcoin Nova Javascript Utilities

[![NPM](https://nodei.co/npm/bitcoinnova-utils.png?downloads=true&stars=true)](https://nodei.co/npm/bitcoinnova-utils/)

#### Master Build Status

#### Development Build Status

This package contains code that wraps [bitcoinnova-crypto](https://github.com/BitcoinNova/bitcoinnova-crypto) primitives into an easier to use interface. This includes the ability to easily discover funds for a wallet, create transactions, sign transactions (ring signatures), create new wallets, verify addresses, and handful of other useful methods. These methods can then be wrapped into a Javascript-based wallet such as [bitcoinnova-wallet-backend-js](https://github.com/BitcoinNova/bitcoinnova-wallet-backend-js).

If you experience any issues with this library, the best way to address such situations is to submit a Pull Request to resolve the issue you are running into.

## Installation

```bash
npm install bitcoinnova-utils
```

## Initialization

### JavaScript

```javascript
const BitcoinNovaUtils = require('bitcoinnova-utils').CryptoNote
const coinUtils = new BitcoinNovaUtils()
```

### TypeScript

```typescript
import { CryptoNote } from 'bitcoinnova-utils'
const coinUtils = new CryptoNote()
```

You can find TypeScript type definitions [here](index.d.ts)

### Browser Support

When packing for the browser with a tool like [webpack](https://webpack.js.org/) we advise that you use the ready `event` of the webpacked module to determine when the Cryptographic methods are available.

```html
<script src="BitcoinNovaUtils.js"></script>
<script>
  BitcoinNovaUtils.on('ready', () => {
    const coinUtils = new BitcoinNovaUtils.CryptoNote()
  })
</script>
```
### Credits

Special thanks goes out to:

* Lucas Jones
* Paul Shapiro
* Luigi111
* [The MyMonero Project](https://github.com/mymonero/mymonero-app-js)
* The Masari Project: [gnock](https://github.com/gnock)
* The Plentum Project: [DaveLong](https://github.com/DaveLong)
