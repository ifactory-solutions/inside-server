<h2 align="center">Inside Server</h2>


<!-- Do not erase the blank line below -->
<p align="center">

[![GitHub Stars][github_stars_badge]][github_stars_link]
[![GitHub Issues][github_issues_badge]][github_issues_link]
[![GitHub Pull Requests][github_pr_badge]][github_pr_link]
[![Codacy][codacy_badge]][codacy_link]
[![Build Status][travis_status_badge]][travis_status_link]
[![Gitter][gitter_badge]][gitter_link]
[![PRs Welcome][pr_welcome_badge]][pr_welcome_link]
</p>

Inside is an open source platform to deal with all the intern process of a company related to its employees. Our goal is to make easy to keep a track and manage all information related to the people that work **inside** the company.

<!-- Do not erase the blank line below -->
<p align="center">

[![Inside Server Logo](img/inside-logo.png)]("")
</p>

## Getting Started

To get started you will need to get a copy of the project, insert the following commands (one by one) on your terminal.

```bash
git clone git@github.com:ifactory-solutions/inside-server.git
cd inside-server
npm install
```

You will get a clone of the project, navigate to it, and install its dependencies.

The project was initiated with the awesome facebook's cli for react (create-react-app). So you have all its default commands available, like:

```bash
npm run build
npm run test
npm start
```

### Prerequisites

You should have at least the LTS node version 6.11. We recommend you to use [nvm](https://github.com/creationix/nvm) it will make easy for you to switch between node/mpm versions.

### Running the project

At the end of both following processes, you'll have a working GraphQL server [running on the 5000 port](http://localhost:5000/)
(though you can change it by [setting the environment](.env.example)).

#### Manually

Run `npm start` (into the project folder) to run the application over a local server.

```bash
cd inside-server
npm start
```

#### Docker

Be sure to have installed [Docker][docker_link] and [docker-compose][docker_compose_link].

```bash
docker-compose up
```

## Built With

* [NodeJS](https://nodejs.org/en/) - A JavaScript runtime built on Chrome's V8 JavaScript engine.
* [MongoDB](https://www.mongodb.com/) - A document database.
* [KoaJS](http://koajs.com/) - A web framework.
* [GraphQL](http://graphql.org/) - A query language for APIs.
* [Jest](https://facebook.github.io/jest/) - A library for unit test javascript code

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Authors

Thanks goes to these wonderful people

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
| [<img src="https://avatars0.githubusercontent.com/u/20783450?v=4&s=460" width="100px;"/><br /><sub>Andre Luis Araujo Santos</sub>](https://github.com/andrelas1) | [<img src="https://avatars2.githubusercontent.com/u/32068056?v=4&s=460" width="100px;"/><br /><sub>Humberto Andrade</sub>](https://github.com/chumbertoandrade)<br /> | [<img src="https://avatars1.githubusercontent.com/u/11651330?v=4&s=460" width="100px;"/><br /><sub>Célio T. Paiva Junior</sub>](https://github.com/cjuniorr)<br /> | [<img src="https://avatars1.githubusercontent.com/u/7153429?v=4&s=460" width="100px;"/><br /><sub>Filipe Ivo</sub>](https://github.com/filipeivo10)<br /> | [<img src="https://avatars2.githubusercontent.com/u/6731006?v=4&s=460" width="100px;"/><br /><sub>Henrique Andrade</sub>](https://github.com/handrade)<br /> | [<img src="https://avatars2.githubusercontent.com/u/2815506?v=4&s=460" width="100px;"/><br /><sub>Igor Moura</sub>](https://github.com/igormoura)<br /> | [<img src="https://avatars3.githubusercontent.com/u/9323529?v=4&s=460" width="100px;"/><br /><sub>Italo Pessoa</sub>](https://github.com/italopessoa)<br /> |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| [<img src="https://avatars2.githubusercontent.com/u/13180987?v=4&s=460" width="100px;"/><br /><sub>Jefferson Matheus</sub>](https://github.com/Jefferson227)<br /> | [<img src="https://avatars3.githubusercontent.com/u/1559013?v=4&s=460" width="100px;"/><br /><sub>Jouderian Nobre Junior</sub>](https://github.com/jouderianjr)<br /> | [<img src="https://avatars2.githubusercontent.com/u/6227037?v=4&s=460" width="100px;"/><br /><sub>Jourdan Rodrigues</sub>](https://github.com/jourdanrodrigues)<br /> | [<img src="https://avatars2.githubusercontent.com/u/397790?v=4&s=460" width="100px;"/><br /><sub>Valter Júnior</sub>](https://github.com/jvcjunior)<br /> | [<img src="https://avatars0.githubusercontent.com/u/32167508?v=4&s=460" width="100px;"/><br /><sub>Ivan Kenji</sub>](https://github.com/kenjiivan)<br /> | [<img src="https://avatars0.githubusercontent.com/u/2501144?v=4&s=460" width="100px;"/><br /><sub>Daniel Laurindo</sub>](https://github.com/laurindo)<br /> | [<img src="https://avatars3.githubusercontent.com/u/2575262?v=4&s=460" width="100px;"/><br /><sub>Caroline da Silva Rodrigues</sub>](https://github.com/loracsilva)<br />
| [<img src="https://avatars3.githubusercontent.com/u/11963735?v=4&s=460" width="100px;"/><br /><sub>Lucas Azevedo</sub>](https://github.com/lucasazevedoqx)<br /> | [<img src="https://avatars3.githubusercontent.com/u/9358427?v=4&s=460" width="100px;"/><br /><sub>Paulo Gabriel</sub>](https://github.com/paulonotz0r)<br /> | [<img src="https://avatars0.githubusercontent.com/u/3047016?v=4&s=460" width="100px;"/><br /><sub>Wellyngton Amaral</sub>](https://github.com/wellyal)<br /> | [<img src="https://avatars2.githubusercontent.com/u/1671563?v=4&s=460" width="100px;"/><br /><sub>Yann Braga</sub>](https://github.com/yannbf)<br />
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors][contributors_link] specification.
Contributions of any kind are welcome!

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) site for details

## Acknowledgments

* Ifactory Team
* Coders
* All our loved users

[contributors_link]: https://github.com/kentcdodds/all-contributors
[docker_link]: https://www.docker.com/get-docker
[docker_compose_link]: https://docs.docker.com/compose/install/#install-compose

<!-- badges sources -->
[github_stars_badge]: https://img.shields.io/github/stars/ifactory-solutions/inside-server.svg?style=social&label=Star
[github_stars_link]: https://github.com/ifactory-solutions/inside-server/stargazers

[github_issues_badge]: https://img.shields.io/github/issues/ifactory-solutions/inside-server.svg?style=flat-square
[github_issues_link]: https://github.com/ifactory-solutions/inside-server/issues

[github_pr_badge]: https://img.shields.io/github/issues-pr-raw/ifactory-solutions/inside-server.svg?style=flat-square
[github_pr_link]: https://github.comifactory-solutions/inside-server/pulls

[codacy_badge]: https://api.codacy.com/project/badge/Grade/5d3d3292927b4b558d418999b135f5e6?branch=master
[codacy_link]: https://www.codacy.com/app/jourdan.rodrigues/inside-server?bid=5482373&utm_source=github.com&amp;utm_medium=referral&amp;utm_content=ifactory-solutions/inside-server&amp;utm_campaign=Badge_Grade

[travis_status_badge]: https://img.shields.io/travis/ifactory-solutions/inside-server.svg?style=flat-square
[travis_status_link]: https://travis-ci.org/ifactory-solutions/inside-server

[gitter_badge]: https://img.shields.io/gitter/room/nwjs/inside-server.svg?style=flat-square
[gitter_link]: https://gitter.im/ifactory-open-source/inside-server

[pr_welcome_badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square
[pr_welcome_link]: http://makeapullrequest.com
