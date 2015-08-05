Package.describe({
  name: 'verron:jquery-dotdotdot',
  version: '1.7.4',
  // Brief, one-line summary of the package.
  summary: 'A jQuery plugin for advanced cross-browser ellipsis on multiple line content',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/DeDeSt/meteor-dotdotdot.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api, where) {
  api.versionsFrom('1.1.0.3');
  api.add_files('lib/jquery.dotdotdot.js', ['client']);
});
