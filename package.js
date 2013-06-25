Package.describe({
    summary: 'GreenSock Animation Platform : Professional-Grade HTML5 Animation.'
});

Package.on_use(function (api) {
    var path = Npm.require('path');
    
    api.add_files(path.join('src/easing', 'EasePack.min.js'), 'client');

    api.add_files(path.join('src/plugins', 'AttrPlugin.min.js'), 'client');
    api.add_files(path.join('src/plugins', 'BezierPlugin.min.js'), 'client');
    api.add_files(path.join('src/plugins', 'ColorPropsPlugin.min.js'), 'client');
    api.add_files(path.join('src/plugins', 'CSSPlugin.min.js'), 'client');
    api.add_files(path.join('src/plugins', 'ACSSRulePlugin.min.js'), 'client');
    api.add_files(path.join('src/plugins', 'ADirectionalRotationPlugin.min.js'), 'client');
    api.add_files(path.join('src/plugins', 'EaselPlugin.min.js'), 'client');
    api.add_files(path.join('src/plugins', 'KineticPlugin.min.js'), 'client');
    api.add_files(path.join('src/plugins', 'RaphaelPlugin.min.js'), 'client');
    api.add_files(path.join('src/plugins', 'RoundPropsPlugin.min.js'), 'client');
    api.add_files(path.join('src/plugins', 'ScrollToPlugin.min.js'), 'client');
    api.add_files(path.join('src/plugins', 'TextPlugin.min.js'), 'client');

    api.add_files(path.join('src', 'jquery.gsap.min.js'), 'client');
    api.add_files(path.join('src', 'TimelineLite.min.js'), 'client');
    api.add_files(path.join('src', 'TimelineMax.min'), 'client');
    api.add_files(path.join('src', 'TweenLite.min.js'), 'client');
    api.add_files(path.join('src', 'TweenMax.min.js'), 'client');
});