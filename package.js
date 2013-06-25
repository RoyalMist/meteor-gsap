Package.describe({
    summary: 'GreenSock Animation Platform : Professional-Grade HTML5 Animation.'
});

Package.on_use(function (api) {

    api.add_files([
        'src/easing/EasePack.min.js',
        'src/plugins/AttrPlugin.min.js',
        'src/plugins/BezierPlugin.min.js',
        'src/plugins/ColorPropsPlugin.min.js',
        'src/plugins/CSSPlugin.min.js',
        'src/plugins/ACSSRulePlugin.min.js',
        'src/plugins/ADirectionalRotationPlugin.min.js',
        'src/plugins/EaselPlugin.min.js',
        'src/plugins/KineticPlugin.min.js',
        'src/plugins/RaphaelPlugin.min.js',
        'src/plugins/RoundPropsPlugin.min.js',
        'src/plugins/ScrollToPlugin.min.js',
        'src/plugins/TextPlugin.min.js',
        'src/jquery.gsap.min.js',
        'src/TimelineLite.min.js',
        'src/TimelineMax.min.js',
        'src/TweenLite.min.js',
        'src/TweenMax.min.js'
        ], 'client'
    );