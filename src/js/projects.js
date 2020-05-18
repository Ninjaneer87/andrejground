export const projects = [
    {
        title: 'Coinland',
        containerClass: 'portfolio1',
        linkClass: 'coinland',
        planning: false,
        image:'img/coinland-full.png',
        desc: 'Application for displaying prices and other data of top 100 cryptocurrencies, connected to <i>coinmarketcap.com</i> API, with some features like :',
        features:[
            'Search with instant results',
            'Portfolio & balances',
            'Currency converter',
            'Watchlist - favourites',
            'Night mode'
        ],
        technologies: ['HTML', 'CSS', 'Javascript', 'Node JS', 'Axios'],
        sourceCode: 'https://github.com/Ninjaneer87/coinland',
        liveDemo: 'https://ninjaneer87.github.io/coinland/'
    },
    {
        title: 'Share-it',
        containerClass: 'portfolio2',
        linkClass: 'shareIt',
        planning: true,
        image:'img/construction.png',
        desc: 'Simple social network, based on some features of twitter like:',
        features:[
            'Profiles',
            'Followers',
            'Posts',
            'Likes',
            'Comments'
        ],
        technologies: ['React', 'Node JS', 'MongoDB'],
        sourceCode: false,
        liveDemo: false
    }
];