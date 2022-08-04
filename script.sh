#!/usr/bin/env bash
set -x
sed -e '/<!-- Unit Tests Start -->/,/<!-- Unit Tests End -->/{/^<!--.*-->/!d}' \
      -e '/<!-- Unit Tests Start -->.*$/r unit-tests.txt' \
      -e '/<!-- Code Coverage Start -->/,/<!-- Code Coverage End -->/{/^<!--.*-->/!d}' \
      -e '/<!-- Code Coverage Start -->.*$/r ./coverage.txt' \
       ./README.md | sed --expression='s/BRANCH/\${{ github.ref_name }}/g' | sed --expression='s/SHA/\${{ github.sha }}/g' >README.md.bak
