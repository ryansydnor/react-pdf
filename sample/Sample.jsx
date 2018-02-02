import React, { Component } from 'react';
import { render } from 'react-dom';
import { Document, Page, setOptions } from 'react-pdf/dist/entry.webpack';
import 'react-pdf/dist/Page/AnnotationLayer.css';

import './Sample.less';

const urls = [
  'https://preview.teacherspayteachers.com/0/968/968647/1472240265_demowinterkindergartenpreviewmoffattgirlspdf.pdf?h-cbpb-2wtmgJxnJrGIwQvHQreTcHQeF48TU54Ibl-wHw22I_rL7WYIIxwz-2ll7&file_name=demowinterkindergartenpreviewmoffattgirlspdf.pdf',
  'https://preview.teacherspayteachers.com/1/1563/1563281/1472231909_demo2ndgradedecembertptpreviewpdf.pdf?qsI6uuLD2ur6MpnlnGZSj4WI1m7bRW1O97xbSPD_KwoN5h8CVCuO-1HYUimUTRea&file_name=demo2ndgradedecembertptpreviewpdf.pdf',
  'https://preview.teacherspayteachers.com/0/998/998189/1472234935_demopreview1stgradenoprepdecemberpdf.pdf?1ABSyCqpZHZIOvmG87qNuDm5-P1bS2Il2SNHHE3MY0vq2IGPZ30MaVCFIfts-zaY&file_name=demopreview1stgradenoprepdecemberpdf.pdf'
];

setOptions({
  cMapUrl: 'cmaps/',
  cMapPacked: true,
});

class Sample extends Component {
  state = { numPages: null }

  onDocumentLoadSuccess = ({ numPages }) => this.setState({ numPages })

  render() {
    const { url } = this.props;
    const { numPages } = this.state;

    return (
      <div className="Example__container">
        <div className="Example__container__document">
          <Document
            file={url}
            onLoadSuccess={this.onDocumentLoadSuccess}
          >
            {
              Array.from(new Array(numPages),
                (el, index) => (
                  <Page
                    key={`page_${index + 1}`}
                    pageNumber={index + 1}
                  />
                )
              )
            }
          </Document>
        </div>
      </div>
    );
  }
}

class Omg extends Component {

  render() {
    return(
      <div className="Example">
        <header>
          <h1>react-pdf sample page</h1>
        </header>  
        { urls.map((url) => <Sample url={ url } />) }
      </div>
    );
  }
}

render(<Omg />, document.getElementById('react-container'));
