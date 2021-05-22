var tpl = "hello: <%= name %>";

var compiled = _.template(tpl);
compiled({name: 'Kevin'}); // "hello: Kevin"