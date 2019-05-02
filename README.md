# oauth-proxy

A simple proxy for OAUTH to hide the client secret. This can be useful if you develop a mobile app and don't want to ship the client secret with it.

## Usage

Set the two ENV variables:

- CLIENT_SECRET, i.e., `XXXXSECRET`
- HOSTNAME, i.e, `fragdenstaat.de`

```bash
npm start
```

## License

MIT.
