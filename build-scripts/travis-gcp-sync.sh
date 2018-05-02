#!/bin/bash

set -e

gcloud auth activate-service-account --key-file "$KEY_FILE"
gsutil -m rsync -Rd dist/ "$BUCKET"
