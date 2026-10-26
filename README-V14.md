# Scialdoni Realty — Version 14

Built from Version 13. Only the MLS PIN property-search experience was changed.

## Updated
- All website Search and property-discovery links now lead to `search.html` on this website instead of sending visitors directly to MLS PIN.
- The Search page embeds Edward Scialdoni’s public IDX search inside a framed page, with a direct public link available for browsers that cannot show embedded content.
- The homepage’s read-only, fake search input and instruction text were removed and replaced with a polished search introduction linking to the live interactive search.
- The IDX search offers its own location, type, and price input fields. We do not invent or pass unverified search query parameters to MLS PIN.
- Added new CSS in `site-v14.css` scoped to the homepage property-discovery panel and Search page.

## Not changed
- All original Version 13 content, Brookview Heights house designs 01–05, elevations, renderings, floor plans, biographies, brokerage information, and Calendly booking.

## Integration details
- IDX public link: https://idx.mlspin.com/MLS.IDX/Search?AgentId=C9501243
- This is MLS PIN’s free link-based, frame-in method available to eligible subscribers. The IDX service must remain active in Pinergy.
- Because the IDX website is hosted by MLS PIN, its form controls, results and mobile behavior are controlled by MLS PIN.
- The iframe can be blocked by browser settings, provider security policies, or network restrictions. A visible direct link is provided above and below the iframe.
- Launch and check the live GitHub Pages page on desktop and mobile to verify MLS PIN appears and works in context.

## Publish
Upload the extracted ZIP contents (not the enclosing directory) to a NEW GitHub repository `scialdoni-realty-v14`, enable GitHub Pages from `main` / `(root)` to keep Version 13 as backup.
