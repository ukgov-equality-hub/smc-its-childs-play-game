const fs = require('fs');

// Make the "build" directory (if it doesn't exist)
const dir = './build';

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}

// Create example JS and CSS files
fs.writeFileSync('./build/SMC-interactive-game.js', '// Example JS code');
fs.writeFileSync('./build/SMC-interactive-game.css', '/* Example CSS code */');
