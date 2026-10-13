// Ung dung tinh shim can chinh Rim - Face. Nguoi tao: Le Duy Nam - Truong Cao dang Dau khi
const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');
function createWindow() {
  const win = new BrowserWindow({
    width: 1180, height: 860, minWidth: 380,
    title: 'Căn chỉnh Shim – Lê Duy Nam',
    icon: path.join(__dirname, 'icon.png'),
    webPreferences: { contextIsolation: true }
  });
  Menu.setApplicationMenu(null);
  win.loadFile(path.join(__dirname, 'index.html'));
}
app.whenReady().then(createWindow);
app.on('window-all-closed', () => app.quit());
