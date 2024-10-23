# Vim Launcher

An Electron application that launches Vim in your system's terminal when opening files through your operating system's file associations.

![Example](https://media.discordapp.net/attachments/743201191936262234/1298444084851114044/vimlex.png?ex=671995c9&is=67184449&hm=cd17bc879c0327342921701cd8cb78e7e281ea7ea7b466c842a2465fc1b34464&=&format=webp&quality=lossless&width=500&height=300)

## Overview

Vim Launcher serves as a bridge between your operating system's file associations and Vim, allowing you to:
- Open files directly in Vim from your file explorer
- Maintain Vim as your default editor for specific file types
- Launch Vim in a new terminal window automatically

## Installation

1. Clone this repository:
```bash
git clone https://github.com/systemsofware/vim-launcher.git
cd vim-launcher
```

2. Install dependencies:
```bash
npm install
```

## Add File Associations
1. Open `package.json`
2. Add file types to the `fileAssociations` array:
```json
          "fileAssociations": [
            {
              "ext": [
                "txt", "md", ... // Add custom file extensions here
              ],
              "name": "Vim Supported Files",
              "role": "Editor"
            }
          ]
```

3. Build the application:
Use any Electron packager to build the application for your platform.

## System Configuration

### macOS

1. Right-click a file type you want to open with Vim
2. Select "Get Info"
3. Under "Open with:", select Vim Launcher
4. Click "Change All..." to apply to all files of this type

### Windows

1. Right-click a file type you want to open with Vim
2. Select "Open with" → "Choose another app"
3. Browse to and select Vim Launcher
4. Check "Always use this app"

## How It Works

The application:
1. Receives a file path from the operating system
2. Opens a new terminal window
3. Launches Vim with the specified file
4. Closes itself (but not the terminal or Vim)

## Platform Support

### macOS
Uses AppleScript to open Terminal.app with Vim:
```bash
osascript -e 'tell application "Terminal" to do script "vim [path]"'
```

### Windows
Opens Command Prompt with Vim:
```batch
start cmd.exe /k "vim [path]"
```

### Required Dependencies
- `electron`: Main framework
- `child_process`: Node.js module for executing commands
- `path`: Node.js module for path manipulation

## Troubleshooting

1. **Terminal doesn't open**
   - Ensure you have terminal access rights
   - Check if Vim is installed and accessible from PATH

2. **Application crashes**
   - Check console output for error messages
   - Verify file permissions
   - **Note:** The application is designed to close after launching Vim

## Contributing
Contributions are welcome! Feel free to submit a pull request or open an issue.

## Notes
- Tested primarily on macOS; Windows users should verify functionality
- Linux support could be added by implementing the default case in the platform switch


## License

MIT License