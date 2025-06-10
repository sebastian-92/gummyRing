# gummyRing

gummyRing is a tool for simple, pretty, js-free, webrings

## Features

- Custom webring name
- Easy set up
- Completely server side
- Super cool

## Setup
### Requirements
- recent nodejs version
- recent npm version
- common sense

### Installation
```bash
git clone https://github.com/sebastian-92/gummyRing.git
cd gummyRing
npm i
```
### Configuration
You can configure pretty much everything in `config.json`.<br>
```json
{
    "links" : [
        "https://cbass92.org"
    ],
    "ringName" : "gummyring template",
    "joinURL" : "join.html"
}
```
links - links go here<br>
ringName - the name of your webring<br>
joinURL - optional, a link shown for users wanting to join your webring
#### Other vital config info
- In the ./public directory, there is join.html. you should probably change that or point `joinURL` in the config to something else
- The links thingy only works with full urls, with the protocol. 
### Startup
```bash
node server.js
```
## Usage
After setup, the service should be running on port 3000.<br>
All webring members need to do is add the following html to their website:
```html
<iframe src="YOURSITEHERE/ring?id=INDEX"></iframe>
```
`INDEX` should be the index of where their website is in the sitelist, starting with 0.

## Contributing

Contributions are welcome! Please open issues and submit pull requests!

## Credits
- [pico.css](https://picocss.com) used for the styling :)

## License

This project is licensed under the [MIT License](LICENSE), because open source & free software are so peak.
