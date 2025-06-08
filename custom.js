AMOCRM.plugins.load({
  init: function () {
    console.log('✅ Custom Product Modal loaded');
    observeForProductModal();
  }
});

function observeForProductModal() {
  const observer = new MutationObserver(() => {
    const searchInput = document.querySelector('textarea[placeholder="Название, артикул или код товара"]');

    if (searchInput && !document.getElementById('custom-wrapper')) {
      const modalOverlay = searchInput.closest('.modal-overlay');
      if (modalOverlay) modalOverlay.remove();
      showCustomModal();
    }
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
}

function showCustomModal() {
  const wrapper = document.createElement('div');
  wrapper.id = 'custom-wrapper';
  wrapper.style = `
    position: fixed;
    top: 60px;
    left: 50%;
    transform: translateX(-50%);
    width: 600px;
    background: #ffffff;
    padding: 20px;
    z-index: 10000;
    border: 1px solid #cccccc;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  `;

  wrapper.innerHTML = `
    <h2 style="margin-top:0;">Выбор товаров</h2>
    <p>Здесь будет ваш кастомный интерфейс</p>
  `;

  document.body.appendChild(wrapper);
}
