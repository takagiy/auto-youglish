(()=>{
  const minSec = document.getElementById('minSec');
  chrome.storage.sync.get('minimumInterval', s => minSec.value = s.minimumInterval / 1000);
  minSec.addEventListener('input', () => {
    chrome.storage.sync.set({minimumInterval: 1000 * minSec.value});
  });
})();
