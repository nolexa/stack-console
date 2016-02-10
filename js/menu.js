exports.initMenu = function(){
    var gui = global.gui;
    var win = gui.Window.get();

    var menubar = new gui.Menu({'type': 'menubar'});

    // Extend application menu for Mac OS
    if (process.platform == "darwin") {
        menubar.createMacBuiltin && menubar.createMacBuiltin(window.document.title);
    }

    var toolsMenu = new gui.MenuItem({label: 'Tools'});

    var toolsSubmenu = new gui.Menu();
    toolsSubmenu.append(new gui.MenuItem({ label: 'Show DevTools',
        click: function () {
            win.showDevTools();
        }
    }));
    toolsMenu.submenu = toolsSubmenu;
    menubar.append(toolsMenu);

    win.menu = menubar;
};

