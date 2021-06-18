import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    // styles: ['./header.component.html']
})
export class HeaderComponent implements OnInit {

    ngOnInit(): void {
        console.log('Componente montado');
    }
}