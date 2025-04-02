First you need to set environment variables:  
```sh
export GH_USER="mars-rav"
export GH_TOKEN="YOUR_TOKEN"
export GH_IMAGE_NAME="greet"
export GH_VER="1.0.0"
export GH_TAG=ghcr.io/$GH_USER/$GH_IMAGE_NAME:$GH_VER
```

Then you need to login to GitHub through Docker:
```sh
echo $GH_TOKEN | docker login ghcr.io -u $GH_USER --password-stdin
```

Then you can give your image a tag:
```sh
docker tag $GH_IMAGE_NAME $GH_TAG
```

Now we finally push:
```sh
docker push $GH_TAG
```