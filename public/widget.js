(function () {
  // Widget initialization function
  function init(config) {
    // Ensure the config object is valid
    if (!config || typeof config !== 'object') {
      console.error('Invalid configuration provided for WhatsApp widget.');
      return;
    }

    // Create the widget container
    const widgetContainer = document.createElement('div');
    widgetContainer.id = 'whatsapp-widget-container';
    widgetContainer.style.position = 'fixed';
    widgetContainer.style.zIndex = config.zIndex || 9999;

    // Set widget position based on config
    const positionClasses = {
      'bottom-right': { bottom: '20px', right: '20px' },
      'bottom-left': { bottom: '20px', left: '20px' },
      'top-right': { top: '20px', right: '20px' },
      'top-left': { top: '20px', left: '20px' },
    };

    const position = positionClasses[config.position] || positionClasses['bottom-right'];
    Object.assign(widgetContainer.style, position);

    // Create the widget content based on layout
    let widgetContent;
    switch (config.layout) {
      case 'bubble':
        widgetContent = createBubbleLayout(config);
        break;
      case 'card':
        widgetContent = createCardLayout(config);
        break;
      case 'popup':
        widgetContent = createPopupLayout(config);
        break;
      case 'bar':
        widgetContent = createBarLayout(config);
        break;
      default:
        widgetContent = createBubbleLayout(config);
    }

    // Append the widget content to the container
    widgetContainer.innerHTML = widgetContent;
    document.body.appendChild(widgetContainer);

    // Add event listeners for behavior
    setupBehavior(config, widgetContainer);
  }

  // Function to create the bubble layout
  function createBubbleLayout(config) {
    return `
      <div 
        class="whatsapp-widget-bubble"
        style="
          background-color: ${config.buttonColor};
          color: ${config.textColor};
          width: 60px;
          height: 60px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        "
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12c0 1.85.49 3.65 1.41 5.22L2 22l4.78-1.41C8.35 21.51 10.15 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.66 0-3.26-.52-4.62-1.49l-.35-.2-3.77 1.01 1.01-3.77-.2-.35C4.52 15.26 4 13.66 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8zm4.5-8.5h-3v-3h-2v3h-3v2h3v3h2v-3h3v-2z"/>
        </svg>
      </div>
    `;
  }

  // Function to create the card layout
  function createCardLayout(config) {
    return `
      <div 
        class="whatsapp-widget-card"
        style="
          background-color: ${config.backgroundColor};
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          max-width: 300px;
          overflow: hidden;
        "
      >
        <div 
          class="widget-header"
          style="
            background-color: ${config.primaryColor};
            color: ${config.textColor};
            padding: 16px;
            display: flex;
            align-items: center;
            gap: 12px;
          "
        >
          ${config.showAvatar ? `
            <img 
              src="${config.avatar}"
              alt="Agent Avatar"
              style="
                width: 40px;
                height: 40px;
                border-radius: 50%;
                object-fit: cover;
              "
            />
          ` : ''}
          <div>
            ${config.showCompanyName ? `<div style="font-weight: bold;">${config.companyName}</div>` : ''}
            ${config.showAgentName ? `<div style="font-size: 0.875rem; opacity: 0.9;">${config.agentName}</div>` : ''}
          </div>
          ${config.showCloseButton ? `
            <button 
              class="close-button"
              style="
                margin-left: auto;
                background: none;
                border: none;
                cursor: pointer;
              "
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/>
              </svg>
            </button>
          ` : ''}
        </div>
        <div 
          class="widget-body"
          style="
            padding: 16px;
          "
        >
          <p style="color: #333; margin-bottom: 16px;">${config.welcomeMessage}</p>
          <button 
            class="whatsapp-button"
            style="
              background-color: ${config.buttonColor};
              color: ${config.textColor};
              width: 100%;
              padding: 8px 16px;
              border-radius: 4px;
              border: none;
              cursor: pointer;
              display: flex;
              align-items: center;
              justify-content: center;
              gap: 8px;
            "
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12c0 1.85.49 3.65 1.41 5.22L2 22l4.78-1.41C8.35 21.51 10.15 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.66 0-3.26-.52-4.62-1.49l-.35-.2-3.77 1.01 1.01-3.77-.2-.35C4.52 15.26 4 13.66 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8zm4.5-8.5h-3v-3h-2v3h-3v2h3v3h2v-3h3v-2z"/>
            </svg>
            <span>${config.buttonText}</span>
          </button>
        </div>
      </div>
    `;
  }

  // Function to handle widget behavior
  function setupBehavior(config, widgetContainer) {
    const widget = widgetContainer.querySelector('.whatsapp-widget-bubble, .whatsapp-widget-card');
    if (!widget) return;

    // Open WhatsApp on click
    widget.addEventListener('click', () => {
      const url = `https://wa.me/${config.phoneNumber}?text=${encodeURIComponent(config.message)}`;
      window.open(url, '_blank');
    });

    // Auto-open behavior
    if (config.behavior === 'auto' && config.autoOpenDelay > 0) {
      setTimeout(() => {
        const url = `https://wa.me/${config.phoneNumber}?text=${encodeURIComponent(config.message)}`;
        window.open(url, '_blank');
      }, config.autoOpenDelay * 1000);
    }
  }

  // Expose the init function globally
  window.KarzounWhatsAppWidget = { init };
})();

// <script>
//   (function() {
//     var script = document.createElement('script');
//     script.src = 'https://cdn.jsdelivr.net/gh/karzoun/whatsapp-widget/widget.js';
//     script.async = true;
//     script.onload = function() {
//       KarzounWhatsAppWidget.init({
//         phoneNumber: '966500000000',
//         message: 'مرحباً، أود الاستفسار عن خدماتكم',
//         welcomeMessage: 'مرحباً! كيف يمكنني مساعدتك اليوم؟',
//         theme: 'default',
//         layout: 'bubble',
//         position: 'bottom-right',
//         // Add other config options here
//       });
//     };
//     document.head.appendChild(script);
//   })();
// </script>