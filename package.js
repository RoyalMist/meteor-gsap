Package.describe({
    summary: 'GreenSock Animation Platform : Professional-Grade HTML5 Animation.'
});

Package.on_use(function (api) {

    api.add_files([
        'header.js',
    ], 'server');

    api.add_files([
        'vendor/TweenMax_client.js'
    ], 'client');

    api.add_files([
        'vendor/TweenMax_server.js'
    ], 'server');

    api.add_files([
        'exports.js',
    ], 'server');

    // api.export('TweenLite', 'client');
    // api.export('TweenMax', 'client');
});
