#!/bin/bash

yarn build

# find . -type f -name "*.map" -delete
# cp -a ./build/index.html ./build/404.html
cp -a ./build/index.html ./build/index.html.bk.html

sed -i -e 's%<link href="/static/css/main.*.css" rel="stylesheet">%%' ./build/index.html
sed -i -e 's%<script defer="defer" src="/static/js/main.*.js"></script>%%' ./build/index.html

sed -i -e "s%</head>%\n<style>\nPLACEHOLDER_FOR_MAIN_CSS\n\n</style>\n</head>%" ./build/index.html
sed -i -e "s%</body>%\n<script>\nPLACEHOLDER_FOR_MAIN_JS\n\n</script>\n</body>%" ./build/index.html

sed -i -e "/PLACEHOLDER_FOR_MAIN_CSS/r $(ls ./build/static/css/main.*.css)" ./build/index.html
sed -i -e "/PLACEHOLDER_FOR_MAIN_JS/r $(ls ./build/static/js/main.*.js)" ./build/index.html

sed -i -e "/PLACEHOLDER_FOR_MAIN_CSS/d" ./build/index.html
sed -i -e "/PLACEHOLDER_FOR_MAIN_JS/d" ./build/index.html
