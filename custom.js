if (typeof AMOCRM !== 'undefined') {
  AMOCRM.plugins.load({
    init: function () {
      console.log('✅ Custom Product Modal loaded');
      observeForProductModal();
    }
  });

  function observeForProductModal() {
    new MutationObserver(() => {
      const std = document.querySelector('textarea[placeholder="Название, артикул или код товара"]');
      if (std && !document.getElementById('custom-wrapper')) {
        std.closest('.modal-overlay')?.remove();
        showCustom();
      }
    }).observe(document.body, { childList: true, subtree: true });
  }

  function showCustom() {
    const wrap = document.createElement('div');
    wrap.id = 'custom-wrapper';
    wrap.style = `
      position:fixed;top:60px;left:50%;transform:translateX(-50%);
      width:600px;background:#fff;padding:20px;z-index:10000;border:1px solid #ccc;`;
    wrap.innerHTML = `
      <h2>Выбор товаров</h2>
      <div>…здесь ваш интерфейс…</div>
    `;
    document.body.append(wrap);
  }
} else {
  console.warn('⚠️ AMOCRM not available. This script is designed to run inside amoCRM.');
}
