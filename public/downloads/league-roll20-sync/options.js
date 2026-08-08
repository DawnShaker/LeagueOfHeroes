chrome.storage.local.get('leagueCabinetUrl').then(({ leagueCabinetUrl }) => {
  if (!leagueCabinetUrl) return;
  document.querySelector('#league-cabinet-link').href = leagueCabinetUrl;
});
