# WARNING! under maintanance, will be released soon.

# tinypng-loader-cli

##Introduction
PNG is useful because it's the only widely supported format that can store partially transparent images.
When app moves to production stage, image compression is essential. However, according to my experience using
such as gulp-image, imagemin-webpack, most of them relied on optipng plugin. This compression algorithm only help reduce
around 5%-10%. [tinypng.com](https://tinypng.com) uses smart lossy compression techniques to reduce the file size of PNG/JP(E)G files
with around <b>60%-70%</b> file size reduction.

The tinypng-loader-cli is derived from my [tinypng-loader](https://github.com/jf3096/tinypng-loader).

### Compatible Image
* PNG
* JP(E)G

### Get Started
```bash
npm install tinypng-loader-cli -g
```

### How to use

Open your command line or shell and key in,

`tinypng-loader-cli -s <source of your images> -d <destination of your images>`

### Example

Assume your directory looks like the followings:
```sh
c:/demo              # project name
├── dist/            # destination of your outputs
└── images/          # target images you want to optimize
    ├── 1.png
    ├── 2.jpg
    ├── 3.jpg
```

open your sheel from demo and enter your command:

`tinypng-loader-cli -s images/**/* -d dist`

OR using absolute path,

`tinypng-loader-cli -s c:/demo/images/**/* -d c:/demo/dist`

it takes a minutes and your will see the progress in command.

Once finished:

```sh
c:/demo              # project name
├── dist/            # destination of your outputs
    ├── 1.png
    ├── 2.jpg
    ├── 3.jpg
└── images/          # target images you want to optimize
    ├── 1.png
    ├── 2.jpg
    ├── 3.jpg
```

### Screenshot
Here is a normal case if you use this library correctly
![alt tag](/git-img/success.png)
