requirejs.config({
    "baseUrl": "js/vendor",
    "paths": {
        "app": "../app",
        // CDN jQuery
        "jquery": "//ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min",
        // jQuery local file
        //jquery: "jquery-1.9.1.min",
        "raphael": "./raphael/raphael"
    }
});

// Load the main app module to start the app
requirejs(["app/main"]);