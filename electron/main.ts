import { app, BrowserWindow, screen, Tray, Menu, ipcMain, Notification } from 'electron';
import * as path from 'path';
import * as fs from 'fs';
const AutoLaunch = require('auto-launch');
const appAutoLauncher = new AutoLaunch({
  name: 'bilddit 0.0.1',
  path: app.getPath('exe'),
});
let win: BrowserWindow | null = null;
var CloseApp: Boolean = false;
const args = process.argv.slice(1),
  serve = args.some(val => val === '--serve');
function createWindow(): BrowserWindow {
  const size = screen.getPrimaryDisplay().workAreaSize;
  win = new BrowserWindow({
    x: 0,
    y: 0,
    width: size.width,
    height: size.height,
    minWidth: 425,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });
  
  win.on('close', (event) => {
    if (CloseApp) {
      app.quit();
    } else {
      event.preventDefault();
      win?.hide();
    }
  });

  if (serve) {
    const debug = require('electron-debug');
    debug();

    require('electron-reloader')(module);
    win.loadURL('http://localhost:4200');
  } else {
    let pathIndex = './index.html';
    if (fs.existsSync(path.join(__dirname, '../dist/index.html'))) {
      pathIndex = '../dist/index.html';
    }
    const url = new URL(path.join('file:', __dirname, pathIndex));
    win.loadURL(url.href);
  }
  win.on('closed', () => {
    win = null;
  });
  return win;
}
let tray: Tray | null = null
try {
  app.setLoginItemSettings({
    openAtLogin: true,
    openAsHidden: true,
  });
  app.on('ready', () => {
    setTimeout(createWindow, 400)
    tray = new Tray(path.join(__dirname, '../dist/assets/icons/favicon-16x16.png'));
    const contextMenu = Menu.buildFromTemplate([
      { label: 'Add New Products' },
      { type: 'separator' },
      {
        label: 'Close Application',
        click: () => {
          CloseApp = true;
          win?.close(); // Set CloseApp to true and close the window
        },
      },
    ])
    tray.on('click', () => {
      win?.isVisible() ? win.hide() : win?.show();
    })
    tray.setToolTip('Bilddit Application')
    tray.setContextMenu(contextMenu)
  });

  app.on('before-quit', () => {
    if (tray) {
      tray.destroy();
    }
  });
  app.on('before-quit', () => {
    if (tray) {
      tray.destroy();
      tray = null;
    }
  });

  ipcMain.on('show-notification', (event, args) => {
    const notification = new Notification({
      title: args.title,
      body: args.body,
      icon: path.join(__dirname, '../dist/assets/icons/icon-72x72.png'),
    });
    notification.show();
  });


  appAutoLauncher.enable();
  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit();
    }
  });
  app.on('activate', () => {
    if (win === null) {
      createWindow();
    }
  });

  if (process.platform === 'win32') {
    app.setAppUserModelId(app.name);
  }
} catch (e) {
  // throw e;
}
