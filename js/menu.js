exports.initMenu = function(config){
    var gui = global.gui;
    var win = gui.Window.get();

    var menubar = new gui.Menu({'type': 'menubar'});

    // Extend application menu for Mac OS
    if (process.platform == "darwin") {
        menubar.createMacBuiltin && menubar.createMacBuiltin(window.document.title);
    }

    var toolsMenu = new gui.MenuItem({label: 'Controls'});

    var toolsSubmenu = new gui.Menu();

    var notifMenu = new gui.MenuItem({type: 'checkbox', label: 'Notifications',
        click: function () {
            config.notificationSettingsListener(this.checked);
        }
    });

    notifMenu.checked = config.notificationsEnabled;

    toolsSubmenu.append(notifMenu);

    toolsSubmenu.append(new gui.MenuItem({ label: 'Show DevTools',
        click: function () {
            win.showDevTools();
        }
    }));

    toolsMenu.submenu = toolsSubmenu;
    menubar.append(toolsMenu);

    win.menu = menubar;
};

