var squares = document.querySelectorAll('.square');
squares.forEach(square => {
    square.addEventListener('click', e => {
        e.preventDefault();
        var firstPos = parseInt(e.target.dataset.pos);
        var empty = document.querySelector('.empty');
        var secondPos = parseInt(empty.dataset.pos);

        var top = secondPos - 4;
        var bottom = secondPos + 4;
        var left = secondPos - 1;
        var right = secondPos + 1;

        // Check if moving left is valid
        if (secondPos % 4 !== 0) {
            var possibilities = [left];
        }
        // Check if moving right is valid
        if ((secondPos + 1) % 4 !== 0) {
            possibilities.push(right);
        }
        // Check if moving up is valid
        if (top >= 0) {
            possibilities.push(top);
        }
        // Check if moving down is valid
        if (bottom <= 15) {
            possibilities.push(bottom);
        }

        // If the clicked square is adjacent to the empty square, swap positions
        if (possibilities.includes(firstPos)) {
            empty.dataset.pos = firstPos;
            e.target.dataset.pos = secondPos;
        }
    });
});
