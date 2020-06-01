import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
    user: string;
    @Output() sidenavToggle = new EventEmitter<void>();

    constructor() { }

    ngOnInit() {
      this.user = "pejner"
    }

    onSidenavToggle() {
        this.sidenavToggle.emit();
    }
}