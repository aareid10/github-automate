#!/bin/bash

USER="aareid10"
PROJECT="Automation"
LABEL="enhancement"
MILESTONE="Automation v.1.0.0"


gh issue create \
--assignee "$USER" \
--label "$LABEL" \
--project "$PROJECT" \
--milestone "$MILESTONE" \
--title "First Issue" \
--body "First Issue."


gh issue create \
--assignee "$USER" \
--project "$PROJECT" \
--milestone "$MILESTONE" \
--title "Second Issue" \
--body "Second Issue."
