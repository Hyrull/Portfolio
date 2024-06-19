import P2Image from './../img/projects/P2.webp';
import P3Image from './../img/projects/P3.webp';
import P5Image from './../img/projects/P5.webp';
import P6Image from './../img/projects/P6.webp';
import P7Image from './../img/projects/P7.webp';
import PortfolioImage from './../img/projects/Portfolio.webp';
import ETSDupont from './../img/projects/etsdupont.webp';
import SargeCode from './../img/projects/Sarge_code.webp';

// Type
export interface ImageMap {
  "OC-P2": string
  "OC-P3": string
  "OC-P5": string
  "OC-P6": string
  "OC-P7": string
  "Portfolio": string
  "EtsDupont": string
  "SargeCode": string
}

const images = {
  "OC-P2": P2Image,
  "OC-P3": P3Image,
  "OC-P5": P5Image,
  "OC-P6": P6Image,
  "OC-P7": P7Image,
  "Portfolio": PortfolioImage,
  "EtsDupont": ETSDupont,
  "SargeCode": SargeCode
}

export default images