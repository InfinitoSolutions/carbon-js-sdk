#!/usr/bin/env bash

set -eo pipefail

echo "Generating registry…"

TX_FILES=$(ls src/codec/*/tx.ts)
REGISTRY_FILE=src/codec/index.ts

echo "// GENERATED by scripts/generate-registry.sh" > $REGISTRY_FILE
ts-node ./scripts/generate-registry.ts $TX_FILES $PWD $REGISTRY_FILE >> $REGISTRY_FILE
