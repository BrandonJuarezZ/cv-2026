import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Certificate } from '../models/certificates/certificates.model';
import { CertificatesService } from '../services/certificates-service/certificates.service';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrl: './certificates.component.css'
})
export class CertificatesComponent {
  certificates: Certificate[] = [];

  constructor(public certificatesService: CertificatesService) {
    this.certificatesService.getCertificates().snapshotChanges().pipe(
      map(changes => changes.map(c => ({ id: c.payload.doc.id, ...c.payload.doc.data() })))
    ).subscribe(data => {
      this.certificates = data;
    });
  }
}
