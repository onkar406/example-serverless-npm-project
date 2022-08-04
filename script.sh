#!/usr/bin/env bash
set -x
github_refname="$1"
github_sha="$2"

sed -e '/<!-- Unit Tests Start -->/,/<!-- Unit Tests End -->/{/^<!--.*-->/!d}' \
      -e '/<!-- Unit Tests Start -->.*$/r unit-tests.txt' \
      -e '/<!-- Code Coverage Start -->/,/<!-- Code Coverage End -->/{/^<!--.*-->/!d}' \
      -e '/<!-- Code Coverage Start -->.*$/r ./coverage.txt' \
       ./README.md | sed --expression="s/BRANCH/\$github_refname/g" | sed --expression="s/SHA/\$github_sha/g" >README.md.bak
