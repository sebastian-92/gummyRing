# gummyRing

gummyRing is a tool for simple, pretty, js-free, webrings

## Features

- Custom webring name
- Easy set up
- Completely server side
- Super cool

## Setup
### Requirements
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
ringName - the name of your webring
joinURL - optional, a link shown for users wanting to join your webring
### Other tips
- In the ./public directory, there is join.html. you should probably change that or point `joinURL` in the config to something else
## Contributing

Contributions are welcome! Please open issues and submit pull requests!

## License

This project is licensed under the [MIT License](LICENSE), because open source & free software are so peak.