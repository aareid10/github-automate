#!/bin/bash

mkdir docs

for src in $(find . -type f -wholename "./**/*.js"); do

  file=$(echo $src | sed 's/\.\///')
  title=$(echo $file | sed 's/^/# /')

  mkdir -p "docs/$(dirname $file)" && touch "docs/${file}.md"

  echo "$title" | sed -E 's/\w+\///' > "docs/${file}.md"
  echo "*https://github.com/aareid10/github-automate/blob/master/$file*" >> "docs/${file}.md"
  perl -0777nle 'print "\n\n### $2\n\n```js\n$1\n```\n" while(/((class\s(\w+\s)+|function\s\w+.*)\{(\n.*?)+?^\})/gm)' $file >> "docs/${file}.md"

done
