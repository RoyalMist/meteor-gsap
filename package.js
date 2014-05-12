Package.describe({
    summary: 'GreenSock Animation Platform : Professional-Grade HTML5 Animation.'
});

Package.on_use(function (api) {

    api.add_files([
        'vendor/GreenSock-JS/src/uncompressed/easing/EasePack.js',
        'vendor/GreenSock-JS/src/uncompressed/plugins/AttrPlugin.js',
        'vendor/GreenSock-JS/src/uncompressed/plugins/BezierPlugin.js',
        'vendor/GreenSock-JS/src/uncompressed/plugins/ColorPropsPlugin.js',
        'vendor/GreenSock-JS/src/uncompressed/plugins/CSSPlugin.js',
        'vendor/GreenSock-JS/src/uncompressed/plugins/CSSRulePlugin.js',
        'vendor/GreenSock-JS/src/uncompressed/plugins/DirectionalRotationPlugin.js',
        'vendor/GreenSock-JS/src/uncompressed/plugins/EaselPlugin.js',
        'vendor/GreenSock-JS/src/uncompressed/plugins/EndArrayPlugin.js',
        'vendor/GreenSock-JS/src/uncompressed/plugins/KineticPlugin.js',
        'vendor/GreenSock-JS/src/uncompressed/plugins/RaphaelPlugin.js',
        'vendor/GreenSock-JS/src/uncompressed/plugins/RoundPropsPlugin.js',
        'vendor/GreenSock-JS/src/uncompressed/plugins/ScrollToPlugin.js',
        'vendor/GreenSock-JS/src/uncompressed/plugins/TextPlugin.js',
        'vendor/GreenSock-JS/src/uncompressed/jquery.gsap.js',
        'vendor/GreenSock-JS/src/uncompressed/TimelineLite.js',
        'vendor/GreenSock-JS/src/uncompressed/TimelineMax.js',
        'vendor/GreenSock-JS/src/uncompressed/TweenLite.js',
        'vendor/GreenSock-JS/src/uncompressed/TweenMax.js',
        'vendor/GreenSock-JS/src/uncompressed/utils/Draggable.js'
        ], ['client', 'server']
    );
});
