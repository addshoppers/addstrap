#!/bin/bash

set -e

gcloud auth activate-service-account --key-file "$KEY_FILE"

cd dist
gsutil -m cp -r -z "css,js" . "$BUCKET"
