'use strict';
let renderer = {
    render() {
        let map = "";
        for (let row = 0; row < config.rowsCount; row++) {

            for (let col = 0; col < config.colsCount; col++) {
                if (row == player.y && col == player.x) {
                    map += "o ";

                } else {
                    map += 'x ';
                }

            }
            map += '\n';
        }
        console.log(map);
    },
    clear() {
        this.map = "";
        console.clear();
        console.log(this.map);
    }
}