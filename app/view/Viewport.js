Ext.define('AppName.view.Viewport', {
  extend: 'Ext.container.Viewport',
  requires: [
    'Ext.layout.container.Fit',
    'AppName.view.Main'
  ],

  layout: {
    type: 'fit'
  },

  items: [{
    xtype: 'app-main'
  }]
});
