# Review & Save

**Location:** `Step 14 - Review & Save`

This is the final numbered step in the wizard.

## What the Step Does

- Generates a preview of the current `robots.txt`
- Lets you refresh the preview
- Lets you copy the preview to the clipboard

## Important Detail

The preview is part of this step. There is no separate `robots.txt Preview` step in the sidebar.

## How Saving Works

The actual save action is handled by the sticky footer at the bottom of the page:

- `Save Changes`
- `Discard` when there are unsaved edits

The review step helps you verify the output before using that global save action.

## What to Check Before Saving

- Expected sitemap lines are present
- Expected bot blocks or allows are present
- Custom rules appear as expected
- The output still makes sense when consolidated by `User-agent`, if that option is enabled
