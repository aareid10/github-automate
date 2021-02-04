# Github Automate

![AUTOMATION_PROJECT_BUGS](https://github.com/aareid10/github-automate/workflows/AUTOMATION_PROJECT_BUGS/badge.svg)

![AUTOMATION_PROJECT_ISSUES](https://github.com/aareid10/github-automate/workflows/AUTOMATION_PROJECT_ISSUES/badge.svg)


## [Running GitHub Actions for Certain Commit Messages](https://ryangjchandler.co.uk/articles/running-github-actions-for-certain-commit-messages)
A quick look at how you can configure your GitHub Actions workflows to only run when a certain phrase is present in the commit message.


### Tooling GitHub Actions
I'm going to be honest with you all for a second. I write a lot of wip commits. These commits are normally small changes that I want to push up to GitHub so that:

I don't lose things if anything goes wrong and my backup hasn't picked it up.
If I can't describe the change I have just made.
If I'm demonstrating something to somebody on a pull-request.
The problem is, my actions are setup to run on push, so every single wip commit gets run through the CI process, whether it be running tests, linting or formatting.

After doing some research, I found a way of preventing these from running on every single commit.

jobs:
  format:
    runs-on: ubuntu-latest
    if: "! contains(github.event.head_commit.message, 'wip')"
Now, whenever I push a wip commit or any commit that contains the word wip, it will be marked as skipped inside of GitHub actions.

You could also flip the logic and perhaps do something like:

jobs:
  format:
    runs-on: ubuntu-latest
    if: "contains(github.event.head_commit.message, '[build]')"
Any commit that contains [build] will now trigger these jobs, everything else will be skipped.
