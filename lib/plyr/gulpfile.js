// ==========================================================================
// Gulp build script
// ==========================================================================
<<<<<<< HEAD
/*global require, __dirname*/
=======
/*global require, __dirname,Buffer*/
>>>>>>> b59888b35be9fbcd2b1e966395eb66cc2f7f38d8
/*jshint -W079 */

var fs          = require("fs"),
    path        = require("path"),
    gulp        = require("gulp"),
    gutil       = require("gulp-util"),
    concat      = require("gulp-concat"),
    uglify      = require("gulp-uglify"),
    less        = require("gulp-less"),
    sass        = require("gulp-sass"),
<<<<<<< HEAD
    minify      = require("gulp-minify-css"),
=======
    cleanCSS    = require("gulp-clean-css"),
>>>>>>> b59888b35be9fbcd2b1e966395eb66cc2f7f38d8
    run         = require("run-sequence"),
    prefix      = require("gulp-autoprefixer"),
    svgstore    = require("gulp-svgstore"),
    svgmin      = require("gulp-svgmin"),
    rename      = require("gulp-rename"),
    s3          = require("gulp-s3"),
<<<<<<< HEAD
    gzip        = require("gulp-gzip"),
    replace     = require("gulp-replace"),
    open        = require("gulp-open"),
    size        = require("gulp-size");
=======
    replace     = require("gulp-replace"),
    open        = require("gulp-open"),
    size        = require("gulp-size"),
    through     = require("through2");
>>>>>>> b59888b35be9fbcd2b1e966395eb66cc2f7f38d8

var root = __dirname,
paths = {
    plyr: {
        // Source paths
        src: {
            less:       path.join(root, "src/less/**/*"),
<<<<<<< HEAD
            sass:       path.join(root, "src/sass/**/*"),
=======
            scss:       path.join(root, "src/scss/**/*"),
>>>>>>> b59888b35be9fbcd2b1e966395eb66cc2f7f38d8
            js:         path.join(root, "src/js/**/*"),
            sprite:     path.join(root, "src/sprite/*.svg")
        },
        // Output paths
        output:         path.join(root, "dist/")
    },
<<<<<<< HEAD
    docs: {
        // Source paths
        src: {
            less:       path.join(root, "docs/src/less/**/*"),
            js:         path.join(root, "docs/src/js/**/*")
        },
        // Output paths
        output:         path.join(root, "docs/dist/"),
        // Docs
        root:           path.join(root, "docs/")
    },
    upload: [path.join(root, "dist/**"), path.join(root, "docs/dist/**")]
=======
    demo: {
        // Source paths
        src: {
            less:       path.join(root, "demo/src/less/**/*"),
            js:         path.join(root, "demo/src/js/**/*"),
            sprite:     path.join(root, "demo/src/sprite/**/*")
        },
        // Output paths
        output:         path.join(root, "demo/dist/"),
        // Demo
        root:           path.join(root, "demo/")
    },
    upload: [path.join(root, "dist/**"), path.join(root, "demo/dist/**")]
>>>>>>> b59888b35be9fbcd2b1e966395eb66cc2f7f38d8
},

// Task arrays
tasks = {
    less:   [],
<<<<<<< HEAD
    sass:   [],
    js:     []
=======
    scss:   [],
    js:     [],
    sprite: []
>>>>>>> b59888b35be9fbcd2b1e966395eb66cc2f7f38d8
},

// Fetch bundles from JSON
bundles = loadJSON(path.join(root, "bundles.json")),
package = loadJSON(path.join(root, "package.json"));

// Load json
function loadJSON(path) {
    try {
        return JSON.parse(fs.readFileSync(path));
    }
    catch(err) {
        return {};
    }
}

<<<<<<< HEAD
=======
// Create a file from a string
// http://stackoverflow.com/questions/23230569/how-do-you-create-a-file-from-a-string-in-gulp
function createFile(filename, string) {
    var src = require('stream').Readable({ 
        objectMode: true 
    });
    src._read = function () {
        this.push(new gutil.File({ 
            cwd: "", 
            base: "", 
            path: filename, 
            contents: new Buffer(string),
            // stats also required for some functions
            // https://nodejs.org/api/fs.html#fs_class_fs_stats
            stat: {
                size: string.length
            } 
        }));
        this.push(null);
    }
    return src
}

>>>>>>> b59888b35be9fbcd2b1e966395eb66cc2f7f38d8
var build = {
    js: function (files, bundle) {
        for (var key in files) {
            (function(key) {
                var name = "js-" + key;
                tasks.js.push(name);

                gulp.task(name, function () {
                    return gulp
                        .src(bundles[bundle].js[key])
                        .pipe(concat(key))
                        .pipe(uglify())
                        .pipe(gulp.dest(paths[bundle].output));
                });
            })(key);
        }
    },
    less: function(files, bundle) {
        for (var key in files) {
            (function (key) {
                var name = "less-" + key;
                tasks.less.push(name);

                gulp.task(name, function () {
                    return gulp
                        .src(bundles[bundle].less[key])
                        .pipe(less())
                        .on("error", gutil.log)
                        .pipe(concat(key))
                        .pipe(prefix(["last 2 versions"], { cascade: true }))
<<<<<<< HEAD
                        .pipe(minify())
=======
                        .pipe(cleanCSS())
>>>>>>> b59888b35be9fbcd2b1e966395eb66cc2f7f38d8
                        .pipe(gulp.dest(paths[bundle].output));
                });
            })(key);
        }
    },
<<<<<<< HEAD
    sass: function(files, bundle) {
        for (var key in files) {
            (function (key) {
                var name = "sass-" + key;
                tasks.sass.push(name);

                gulp.task(name, function () {
                    return gulp
                        .src(bundles[bundle].sass[key])
=======
    scss: function(files, bundle) {
        for (var key in files) {
            (function (key) {
                var name = "scss-" + key;
                tasks.scss.push(name);

                gulp.task(name, function () {
                    return gulp
                        .src(bundles[bundle].scss[key])
>>>>>>> b59888b35be9fbcd2b1e966395eb66cc2f7f38d8
                        .pipe(sass())
                        .on("error", gutil.log)
                        .pipe(concat(key))
                        .pipe(prefix(["last 2 versions"], { cascade: true }))
<<<<<<< HEAD
                        .pipe(minify())
=======
                        .pipe(cleanCSS())
>>>>>>> b59888b35be9fbcd2b1e966395eb66cc2f7f38d8
                        .pipe(gulp.dest(paths[bundle].output));
                });
            })(key);
        }
    },
<<<<<<< HEAD
    sprite: function() {
        // Process Icons
        gulp.task("sprite", function () {
            return gulp
                .src(paths.plyr.src.sprite)
=======
    sprite: function(bundle) {
        var name = "sprite-" + bundle;
        tasks.sprite.push(name);

        // Process Icons
        gulp.task(name, function () {
            return gulp
                .src(paths[bundle].src.sprite)
>>>>>>> b59888b35be9fbcd2b1e966395eb66cc2f7f38d8
                .pipe(svgmin({
                    plugins: [{
                        removeDesc: true
                    }]
                }))
                .pipe(svgstore())
<<<<<<< HEAD
                .pipe(gulp.dest(paths.plyr.output));
=======
                .pipe(rename({ basename: bundle }))
                .pipe(gulp.dest(paths[bundle].output));
>>>>>>> b59888b35be9fbcd2b1e966395eb66cc2f7f38d8
        });
    }
};

// Plyr core files
build.js(bundles.plyr.js, "plyr");
build.less(bundles.plyr.less, "plyr");
<<<<<<< HEAD
build.sass(bundles.plyr.sass, "plyr");
build.sprite();

// Docs files
build.less(bundles.docs.less, "docs");
build.js(bundles.docs.js, "docs");
=======
build.scss(bundles.plyr.scss, "plyr");
build.sprite("plyr");

// Demo files
build.less(bundles.demo.less, "demo");
build.js(bundles.demo.js, "demo");
build.sprite("demo");
>>>>>>> b59888b35be9fbcd2b1e966395eb66cc2f7f38d8

// Build all JS
gulp.task("js", function(){
    run(tasks.js);
});

<<<<<<< HEAD
// Build SASS (for testing, default is LESS)
gulp.task("sass", function(){
    run(tasks.sass);
=======
// Build SCSS (for testing, default is LESS)
gulp.task("scss", function(){
    run(tasks.scss);
>>>>>>> b59888b35be9fbcd2b1e966395eb66cc2f7f38d8
});

// Watch for file changes
gulp.task("watch", function () {
    // Plyr core
    gulp.watch(paths.plyr.src.js, tasks.js);
    gulp.watch(paths.plyr.src.less, tasks.less);
<<<<<<< HEAD
    gulp.watch(paths.plyr.src.sprite, ["sprite"]);

    // Docs
    gulp.watch(paths.docs.src.js, tasks.js);
    gulp.watch(paths.docs.src.less, tasks.less);
=======
    gulp.watch(paths.plyr.src.sprite, tasks.sprite);

    // Demo
    gulp.watch(paths.demo.src.js, tasks.js);
    gulp.watch(paths.demo.src.less, tasks.less);
    gulp.watch(paths.demo.src.sprite, tasks.sprite);
>>>>>>> b59888b35be9fbcd2b1e966395eb66cc2f7f38d8
});

// Default gulp task
gulp.task("default", function(){
<<<<<<< HEAD
    run(tasks.js, tasks.less, "sprite", "watch");
});

// Publish a version to CDN and docs
=======
    run(tasks.js, tasks.less, tasks.sprite, "watch");
});

// Publish a version to CDN and demo
>>>>>>> b59888b35be9fbcd2b1e966395eb66cc2f7f38d8
// --------------------------------------------

// Some options
var aws = loadJSON(path.join(root, "aws.json")),
version = package.version,
maxAge  = 31536000, // seconds 1 year
options = {
    cdn: {
        headers: {
            "Cache-Control": "max-age=" + maxAge,
            "Vary": "Accept-Encoding"
<<<<<<< HEAD
        },
        gzippedOnly: true
    },
    docs: {
        headers: {
            "Cache-Control": "public, must-revalidate, proxy-revalidate, max-age=0",
            "Vary": "Accept-Encoding"
        },
        gzippedOnly: true
=======
        }
    },
    demo: {
        headers: {
            "Cache-Control": "no-cache, no-store, must-revalidate, max-age=0",
            "Vary": "Accept-Encoding"
        }
    },
    symlinks: function(version, filename) {
        return {
            headers: {
                // http://stackoverflow.com/questions/2272835/amazon-s3-object-redirect
                "x-amz-website-redirect-location": "/" + version + "/" + filename,
                "Cache-Control": "no-cache, no-store, must-revalidate, max-age=0"
            }
        }
>>>>>>> b59888b35be9fbcd2b1e966395eb66cc2f7f38d8
    }
};

// If aws is setup
if("cdn" in aws) {
<<<<<<< HEAD
    var cdnpath = new RegExp(aws.cdn.bucket + "\/(\\d+\\.)?(\\d+\\.)?(\\*|\\d+)","gi");
=======
    var regex       = "(?:0|[1-9][0-9]*)\\.(?:0|[1-9][0-9]*)\.(?:0|[1-9][0-9]*)(?:-[\\da-z\\-]+(?:\.[\\da-z\\-]+)*)?(?:\\+[\\da-z\\-]+(?:\.[\\da-z\\-]+)*)?",
    cdnpath         = new RegExp(aws.cdn.domain + "\/" + regex, "gi"),
    semver          = new RegExp("v" + regex, "gi"),
    localPath       = new RegExp("(\.\.\/)?dist", "gi"),
    versionPath     = "https://" + aws.cdn.domain + "/" + version;
>>>>>>> b59888b35be9fbcd2b1e966395eb66cc2f7f38d8
}

// Publish version to CDN bucket
gulp.task("cdn", function () {
<<<<<<< HEAD
    console.log("Uploading " + version + " to " + aws.cdn.bucket);

    // Upload to CDN
    gulp.src(paths.upload)
=======
    console.log("Uploading " + version + " to " + aws.cdn.domain + "...");

    // Upload to CDN
    return gulp.src(paths.upload)
>>>>>>> b59888b35be9fbcd2b1e966395eb66cc2f7f38d8
        .pipe(size({
            showFiles: true,
            gzip: true
        }))
        .pipe(rename(function (path) {
            path.dirname = path.dirname.replace(".", version);
        }))
<<<<<<< HEAD
        .pipe(gzip())
        .pipe(s3(aws.cdn, options.cdn));
});

// Publish to Docs bucket
gulp.task("docs", function () {
    console.log("Uploading " + version + " docs to " + aws.docs.bucket);

    // Replace versioned files in readme.md
    gulp.src([root + "/readme.md"])
        .pipe(replace(cdnpath, aws.cdn.bucket + "/" + version))
        .pipe(gulp.dest(root));

    // Replace versioned files in *.html
    gulp.src([paths.docs.root + "*.html"])
        .pipe(replace(cdnpath, aws.cdn.bucket + "/" + version))
        .pipe(gulp.dest(paths.docs.root))
        .pipe(gzip())
        .pipe(s3(aws.docs, options.docs));

    // Upload error.html to cdn using docs options
    gulp.src([paths.docs.root + "error.html"])
        .pipe(gzip())
        .pipe(s3(aws.cdn, options.docs));
});

// Open the docs site to check it's sweet
gulp.task("open", function () {
    console.log("Opening " + aws.docs.bucket + "...");
=======
        .pipe(replace(localPath, versionPath))
        .pipe(s3(aws.cdn, options.cdn));
});

// Publish to demo bucket
gulp.task("demo", function () {
    console.log("Uploading " + version + " demo to " + aws.demo.domain + "...");

    // Replace versioned files in readme.md
    gulp.src([root + "/readme.md"])
        .pipe(replace(cdnpath, aws.cdn.domain + "/" + version))
        .pipe(gulp.dest(root));

    // Replace versioned files in plyr.js
    gulp.src(path.join(root, "src/js/plyr.js"))
        .pipe(replace(semver, "v" + version))
        .pipe(replace(cdnpath, aws.cdn.domain + "/" + version))
        .pipe(gulp.dest(path.join(root, "src/js/")));

    // Replace local file paths with remote paths in demo HTML
    // e.g. "../dist/plyr.js" to "https://cdn.plyr.io/x.x.x/plyr.js"
    gulp.src([paths.demo.root + "*.html"])
        .pipe(replace(localPath, versionPath))
        .pipe(s3(aws.demo, options.demo));

    // Upload error.html to cdn (as well as demo site)
    return gulp.src([paths.demo.root + "error.html"])
        .pipe(replace(localPath, versionPath))
        .pipe(s3(aws.cdn, options.demo));
});

// Open the demo site to check it's sweet
gulp.task("symlinks", function () {
    console.log("Updating symlinks...");

    return gulp.src(paths.upload)
        .pipe(through.obj(function (chunk, enc, callback) {
            if (chunk.stat.isFile()) {
                // Get the filename
                var filename = chunk.path.split("/").reverse()[0];

                // Create the 0 byte redirect files to upload
                createFile(filename, "")
                    .pipe(rename(function (path) {
                        path.dirname = path.dirname.replace(".", "latest");
                    }))
                    // Upload to S3 with correct headers
                    .pipe(s3(aws.cdn, options.symlinks(version, filename)));
            }

            callback(null, chunk);
        }));
});

// Open the demo site to check it's sweet
gulp.task("open", function () {
    console.log("Opening " + aws.demo.domain + "...");
>>>>>>> b59888b35be9fbcd2b1e966395eb66cc2f7f38d8

    // A file must be specified or gulp will skip the task
    // Doesn't matter which file since we set the URL above
    // Weird, I know...
<<<<<<< HEAD
    gulp.src([paths.docs.root + "index.html"])
        .pipe(open("", {
            url: "http://" + aws.docs.bucket
=======
    return gulp.src([paths.demo.root + "index.html"])
        .pipe(open("", {
            url: "http://" + aws.demo.domain
>>>>>>> b59888b35be9fbcd2b1e966395eb66cc2f7f38d8
        }));
});

// Do everything
gulp.task("publish", function () {
<<<<<<< HEAD
    run(tasks.js, tasks.less, "sprite", "cdn", "docs");
=======
    run(tasks.js, tasks.less, tasks.sprite, "cdn", "demo", "symlinks");
>>>>>>> b59888b35be9fbcd2b1e966395eb66cc2f7f38d8
});
