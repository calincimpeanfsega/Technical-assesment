function encryption(s) {
    s = s.replace(/\s/g, ''); // Remove spaces from the text
    var L = s.length;
    // Calculate the number of rows and columns
    var row = Math.floor(Math.sqrt(L));
    var col = Math.ceil(Math.sqrt(L));

    if (row * col < L) {
        row = col;
    }

    var grid = Array(row).fill('');

    for (var i = 0; i < row; i++) {
        for (var j = 0; j < col; j++) {
            var index = i * col + j;
            if (index < L) {
                grid[i] += s.charAt(index);
            }
        }
    }

    var encrypted_text = grid.join('\n');
    return encrypted_text;
}

var s = "if man was meant to stay on the ground god would have given us roots.";
console.log(encryption(s));
