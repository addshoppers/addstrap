#!/bin/bash

set -e

gcloud auth activate-service-account --key-file "$KEY_FILE"
gsutil rsync -d -r dist/ "$BUCKET"
