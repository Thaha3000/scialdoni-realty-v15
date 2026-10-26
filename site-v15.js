/* V15 search: MLS PIN supplies a public search link, not a documented custom
   API for sending a typed city/address directly to its result filters. Keep
   address input usable, copy the typed term if permission allows, and open
   the supported MLS PIN search as a real form submission. */
(function () {
  'use strict';
  var MLS = 'https://idx.mlspin.com/MLS.IDX/Search?AgentId=C9501243';
  function wireForm(formId, inputId, feedbackId) {
    var form = document.getElementById(formId);
    var input = document.getElementById(inputId);
    var feedback = document.getElementById(feedbackId);
    if (!form || !input || !feedback) return;
    form.action = MLS;
    form.addEventListener('submit', function () {
      var value = input.value.trim();
      feedback.hidden = false;
      if (!value) {
        feedback.textContent = 'Opening live MLS PIN listings in a new tab. Choose your preferred area and filters there.';
        return;
      }
      feedback.textContent = 'Opening MLS PIN. Enter “' + value + '” in its location or address filters.';
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(value).then(function () {
          feedback.textContent = 'Copied “' + value + '”. Paste it into the MLS PIN location or address search in the new tab.';
        }).catch(function () {
          /* A rejected clipboard permission does not affect the working external link. */
        });
      }
      /* Deliberately do NOT preventDefault: the native form opens MLS PIN
         directly, including when a user presses Enter or JS clipboard fails. */
    });
  }
  wireForm('home-mls-search', 'home-search-location', 'home-search-feedback');
  wireForm('page-mls-search', 'page-search-location', 'page-search-feedback');
  var valuationTab = document.getElementById('tab-sell');
  if (valuationTab) {
    valuationTab.addEventListener('click', function () {
      var contact = document.getElementById('contact');
      if (contact) contact.scrollIntoView({behavior:'smooth',block:'start'});
    });
  }
})();
