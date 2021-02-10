#!/bin/bash

for src in $(find -type f -name *.js); do

  file=$(echo $src | sed 's/\.\///')
  title=$(echo $file | sed 's/^/# /')

  touch "${file}.md"
  echo "$title" > "${file}.md"
  echo "$(pwd)/$src" >> "${file}.md"

  perl -0777nle 'print "\n\n### $2\n\n```js\n$1\n```\n" while(/((class\s(\w+\s)+|function\s\w+.*)\{(\n.*?)+?^\})/gm)' bad_file_example.js >> "${file}.md"

done
