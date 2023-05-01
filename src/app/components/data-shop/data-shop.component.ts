import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';
import { HttpClient } from '@angular/common/http';
import { DATADABE_ZOO_PRODUKT } from 'src/app/constants/constants';

@Component({
  selector: 'app-data-shop',
  templateUrl: './data-shop.component.html',
  styleUrls: ['./data-shop.component.scss'],
})
export default class DataShopComponent implements OnInit {
  dataBase = [];

  dataBaseLength = [];

  items = [
    'Корма',
    'Консервы',
    'Лакомства',
    'Миски',
    'Ошейники',
    'Поводки',
    'Шампуни',
    'Наполнители',
    'Капли',
    'Спреи',
    'Другое',
  ];

  id_section = 0;

  pageSize = 6;

  currentPage = 0;

  prevPage() {
    this.currentPage -= 1;
    this.loadElements();
  }

  nextPage() {
    if (this.dataBase.length === this.pageSize) {
      this.currentPage += 1;
      this.loadElements();
    }
  }

  selectProduct() {
    this.currentPage = 0;
    this.readExcelFile();
  }

  aroundCost(n: number) {
    return typeof n === 'number' ? n.toFixed(2) : n;
  }

  loadElements() {
    const end = (this.currentPage + 1) * this.pageSize;
    const start = this.currentPage * this.pageSize;
    const part = this.dataBaseLength.slice(start, end);

    this.dataBase = part;
  }

  ngOnInit() {
    this.readExcelFile();
  }

  constructor(private http: HttpClient) {}

  getImgPath(id: number): string {
    const path = `../../../assets/korm/${id}.jpg`;
    return path;
  }

  aroundDescription(str: string): string {
    return str.length >= 50 && window.screen.width <= 500
      ? `${str.slice(0, 50)}...`
      : str;
  }

  readExcelFile() {
    this.http
      .get(DATADABE_ZOO_PRODUKT, { responseType: 'arraybuffer' })
      .subscribe((response) => {
        const data = new Uint8Array(response);
        const workbook = XLSX.read(data, { type: 'array' });
        const sheetName = workbook.SheetNames[this.id_section];
        const worksheet = workbook.Sheets[sheetName];

        this.dataBase = XLSX.utils.sheet_to_json(worksheet, {
          header: 1,
          range: 1,
        });
        this.dataBaseLength = XLSX.utils.sheet_to_json(worksheet, {
          header: 1,
          range: 1,
        });
        this.loadElements();
      });
  }
}
