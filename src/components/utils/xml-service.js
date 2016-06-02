import {service} from '../../config/decorators';

@service
export class XML {
  getCDATA(xml) {
    const document = new DOMParser()
      .parseFromString(`<div xmlns="http://www.w3.org/1999/xhtml">${xml}</div>`, 'text/xml')
      .documentElement;

    return document.childNodes[0].nodeValue;
  }
}
