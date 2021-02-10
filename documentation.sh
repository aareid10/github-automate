#!/bin/bash

for src in $(find -type f -name *.js); do

  file=$(echo $src | sed 's/\.\///')
  title=$(echo $file | sed 's/^/# /')

  touch "${file}.md"
  echo "$title" >> "${file}.md"
  echo "$(pwd)/$src" >> "${file}.md"

  # IFS=$'\n'; for cn in $(perl -nle 'print "$1" while(/(class\s(\w+\s)+)/g)' bad_file_example.js); do echo "### $cn"; done
  # IFS=$'\n'; for fn in $(perl -nle 'print "$1" while(/(function\s(\w+\(\)))/g)' bad_file_example.js); do echo "### $fn"; done
  # perl -0777nle 'print "```js\n$1\n```\n" while(/((class\s(\w+\s)+|function\s\w+.*)\{(\n.*?)+?^\})/gm)' bad_file_example.js

  perl -0777nle 'print "\n\n###$2\n\n```js\n$1\n```\n" while(/((class\s(\w+\s)+|function\s\w+.*)\{(\n.*?)+?^\})/gm)' bad_file_example.js >> "${file}.md"

done
