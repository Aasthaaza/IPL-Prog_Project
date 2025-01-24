import { OnInit } from "@angular/core";
import { Cricketer } from "../../types/Cricketer";

export class CricketerArrayComponent implements OnInit {
    cricketers: Cricketer[] = [];
    showCricketers: boolean = true;

    constructor() {}

    ngOnInit(): void {
        this.cricketers = [
            new Cricketer(1, 101, 'Virat Kohli', 32, 'Indian', 12, 'Batsman', 12000, 4),
            new Cricketer(2, 102, 'AB de Villiers', 37, 'South Africa', 15, 'Batsman', 9500, 1),
            new Cricketer(3, 103, 'Jasprit Bumrah', 28, 'Indian', 8, 'Bowler', 200, 250),
            new Cricketer(4, 104, 'Ben Stokes', 30, 'ENglish', 10, 'All-Rounder', 4500, 150)
        ];
        
        }
        toggleCricketers(): void {
            this.showCricketers = !this.showCricketers;
        }
    }
