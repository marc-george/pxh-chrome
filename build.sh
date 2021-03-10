BUILD=$1
PREFIX=$(node -p "require('./package.json').version")
VERSION=$PREFIX.$BUILD

export http_proxy=http://sjc1intproxy01.crd.ge.com:8080
export https_proxy=$http_proxy
export all_proxy=$http_proxy
export no_proxy="localhost, 127.0.0.1, *.ge.com"

# Set uppercase versions of these variables (needed by cdnify.js at time of writing).
export HTTP_PROXY=$http_proxy
export HTTPS_PROXY=$http_proxy
export ALL_PROXY=$http_proxy
export NO_PROXY="$no_proxy"

echo ---------------------------
echo Environment Variables START
echo ---------------------------
env
echo -------------------------
echo Environment Variables END
echo -------------------------

export NVM_DIR=~/.nvm
source ~/.nvm/nvm.sh

echo ----------------
echo Versions of nvm:
echo ----------------
nvm --version

echo
echo -------------------------------
echo Use latest 6.x version of node:
echo -------------------------------
nvm use v6.9.1

echo
rm -rf /root/.npm/*.lock.STALE
rm -rf node_modules
echo
echo -------------
echo Node version:
node -v
echo -------------
echo ''
echo ------------
echo npm version:
npm -v
echo ------------

echo -----------------
echo NPM INSTALL START
echo -----------------
npm install
echo -----------------
echo NPM INSTALL END
echo -----------------

echo ----------------------
echo BOWER cach clean START
echo ----------------------
bower cache clean
echo --------------------
echo BOWER cach clean END
echo --------------------

echo -------------------
echo BOWER INSTALL START
echo -------------------
bower install --force-latest
echo -----------------
echo BOWER INSTALL END
echo -----------------


# Copy static assets to CDN and change template strings
# echo -----------------
# echo Running cdnify.js
# echo -----------------
# node cdnify.js -v $VERSION

# Generate /dist for Jenkins
echo ------------------
echo RUNNING GULP
echo ------------------
gulp

cd dist
# Create zip file for artifactory (and Jenkins)
zip -r ../bxjoc-pxh-chrome-$VERSION.zip *
cd ..
ls -lrtR
