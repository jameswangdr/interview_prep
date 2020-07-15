function solution() {
    const tables = document.querySelectorAll('table');
    const cells = Array.from(tables).map(table => table.querySelectorAll('td').length);
    const largest = Math.max(...cells);
    
    if (!tables) {
        return 0
    };
    
    return (largest);
} 

