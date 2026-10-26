# Scialdoni Realty — Version 13

Based on the *unchanged Version 12 ZIP* with only the authorized MLS PIN IDX search integration.

## What's changed

- Replaced coming-soon / placeholder property search behavior with Edward Scialdoni's public MLS PIN IDX URL:
  https://idx.mlspin.com/MLS.IDX/Search?AgentId=C9501243
- Website SEARCH navigation across all pages opens the live IDX search in a new tab.
- Homepage property search button opens the live IDX URL. The old unconnected text input is read-only so it does not pretend to filter real listings.
- Homepage category and town links open live MLS PIN IDX; visitors select town and property filters there because the provided URL does not document pre-filtered city or type parameters.
- Existing `search.html` bookmarks lead to a branded gateway with a working SEARCH LIVE MLS LISTINGS button, not the former 'coming soon' placeholder and nonfunctional filters.
- All previous photos, renderings 01–05, plans, styling, brokerage details, Calendly URL, other site sections, and assets remain unchanged.

## Deploy

Create a new GitHub Pages repository named `scialdoni-realty-v13`. Upload **the contents of this ZIP** into the repository root (all HTML, CSS, JS and image files). In Settings → Pages deploy from `main` / `/(root)`. The site URL will be `https://thaha3000.github.io/scialdoni-realty-v13/`.

## Notes

- Public MLS PIN page access requires Edward's IDX Search option to stay activated in Pinergy. The IDX destination opens in a new tab; this release does not embed the MLS PIN site or claim to synchronize MLS filters.
- The existing demo contact form is unchanged and does not deliver emails; same as Version 12.
