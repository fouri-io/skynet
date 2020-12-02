set -ex

VERSION=1.0
USERNAME=fouri
IMAGE=skynet
GIT_COMMIT=$(git rev-parse --short HEAD)

docker build -t $USERNAME/$IMAGE:latest -t $USERNAME/$IMAGE:$VERSION.$GIT_COMMIT --label git-commit=$GIT_COMMIT .
echo $VERSION.$GIT_COMMIT > VERSION