'use strict';
let move = {
    nextPoint: {
        x: player.x,
        y: player.y,
    },
    getNextPosition(position) {
        this.nextPoint.x = player.x;
        this.nextPoint.y = player.y;
        switch (position) {
            case 1:
                this.nextPoint.x--;
                this.nextPoint.y++;
                break;
            case 2:
                this.nextPoint.y++;
                break;
            case 3:
                this.nextPoint.x++;
                this.nextPoint.y++
                break;
            case 4:
                this.nextPoint.x--;
                break;
            case 6:
                this.nextPoint.x++;
                break;
            case 7:
                this.nextPoint.x--;
                this.nextPoint.y--;
                break;
            case 8:
                this.nextPoint.y--;
                break;
            case 9:
                this.nextPoint.y--;
                this.nextPoint.x++;
                break;
        }

        if (this.nextPoint.x >= 0 && this.nextPoint.x < config.colsCount && this.nextPoint.y >= 0 && this.nextPoint.y
            < config.rowsCount) {
            player.x = this.nextPoint.x;
            player.y = this.nextPoint.y;
        }


    }
}