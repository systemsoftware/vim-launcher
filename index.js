    const { app, dialog } = require('electron');
    const cp = require('child_process');

    app.setName('Vim Launcher');

    const command = (path) => {
        path = require('path').resolve(path);
        switch (process.platform) {
            case 'darwin':
                return `osascript -e 'tell application "Terminal" to do script "vim ${path}"'`;
            case 'win32':
                return `start cmd.exe /K vim '${path}"`; // This was built and tested on macOS, so I'm not sure if this works on Windows
            default:
                dialog.showErrorBox('Error', 'Unsupported platform');
        }
    }

    app.on('open-file', (event, filePath) => {
      event.preventDefault();
      cp.execSync(command(filePath));
      app.quit();
    });