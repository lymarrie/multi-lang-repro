export interface Address {
  line1: string;
  line2?: string;
  line3?: string;
  sublocality?: string;
  city: string;
  region?: string;
  postalCode: string;
  extraDescription?: string;
  countryCode: string;
}

export interface Interval {
  start: any;
  end: any;
}

export interface DayHour {
  openIntervals?: Interval[];
  isClosed?: boolean;
}

export interface HolidayHours {
  date: string;
  openIntervals?: Interval[];
  isClosed?: boolean;
  isRegularHours?: boolean;
}

export interface Hours {
  monday?: DayHour;
  tuesday?: DayHour;
  wednesday?: DayHour;
  thursday?: DayHour;
  friday?: DayHour;
  saturday?: DayHour;
  sunday?: DayHour;
  holidayHours?: HolidayHours[];
  reopenDate?: string;
}

export interface ImageThumbnail {
  url: string;
  width: number;
  height: number;
}

export interface Image {
  url: string;
  width: number;
  height: number;
  thumbnails?: ImageThumbnail[];
  alternateText?: string;
}

export interface ComplexImage {
  image: Image;
  details?: string;
  description?: string;
  clickthroughUrl?: string;
}

export enum PaymentOptions {
  AFTERPAY = "Afterpay",
  ALIPAY = "AliPay",
  AMERICANEXPRESS = "American Express",
  ANDROIDPAY = "Google Pay",
  APPLEPAY = "Apple Pay",
  ATM = "ATM",
  ATMQUICK = "ATM Quick",
  BACS = "BACS",
  BANCONTACT = "Bancontact",
  BANKDEPOSIT = "Bank Deposit",
  BANKPAY = "Bank Pay",
  BGO = "Bank/Giro Overschrijving",
  BITCOIN = "Bitcoin",
  Bar = "Bargeld",
  CARTASI = "CartaSi",
  CASH = "Cash",
  CCS = "CCS",
  CHECK = "Check",
  CONB = "Contactloos betalen",
  CONTACTLESSPAYME = "Contactless Payment",
  CVVV = "Cadeaubon/VVV bon",
  DEBITNOTE = "Debit Note",
  DINERSCLUB = "Diners Club",
  DIRECTDEBIT = "Direct Debit",
  DISCOVER = "Discover",
  ECKARTE = "Girokarte",
  ECOCHEQUE = "EcoCheque",
  EKENA = "E-kena",
  EMV = "Elektronische Maaltijdcheques",
  FINANCING = "Financing",
  GOPAY = "GoPay",
  HAYAKAKEN = "Hayakaken",
  HEBAG = "He-Bag",
  IBOD = "iBOD",
  ICCARDS = "IC Cards",
  ICOCA = "Icoca",
  ID = "iD",
  IDEAL = "iDeal",
  INCA = "Incasso",
  INVOICE = "Invoice",
  JCB = "JCB",
  JCoinPay = "J−Coin Pay",
  JKOPAY = "JKO Pay",
  KITACA = "Kitaca",
  KLA = "Klantenkaart",
  KLARNA = "Klarna",
  LINEPAY = "LINE Pay",
  MAESTRO = "Maestro",
  MANACA = "Manaca",
  MASTERCARD = "MasterCard",
  MIPAY = "Mi Pay",
  MONIZZE = "Monizze",
  MPAY = "MPay",
  Manuelle_Lastsch = "Manuelle Lastschrift",
  Merpay = "メルPay",
  NANACO = "nanaco",
  NEXI = "Nexi",
  NIMOCA = "Nimoca",
  OREM = "Onder Rembours",
  PASMO = "Pasmo",
  PAYBACKPAY = "Payback Pay",
  PAYBOX = "Paybox",
  PAYCONIQ = "Payconiq",
  PAYPAL = "PayPal",
  PAYPAY = "PayPay",
  PAYSEC = "PaySec",
  PIN = "PIN",
  POSTEPAY = "Postepay",
  QRCODE = "QR Code Payment",
  QUICPAY = "QUICPay",
  RAKUTENEDY = "Rakuten Edy",
  RakutenPay = "楽天Pay",
  SAMSUNGPAY = "Samsung Pay",
  SODEXO = "Sodexo",
  SUGOCA = "Sugoca",
  SUICA = "Suica",
  SWISH = "Swish",
  TICKETRESTAURANT = "Ticket Restaurant",
  TOICA = "Toica",
  TRAVELERSCHECK = "Traveler's Check",
  TSCUBIC = "TS CUBIC",
  TWINT = "Twint",
  UNIONPAY = "China UnionPay",
  VEV = "Via een verzekering",
  VISA = "Visa",
  VISAELECTRON = "Visa Electron",
  VOB = "Vooruit betalen",
  VOUCHER = "Voucher",
  VPAY = "V PAY",
  WAON = "WAON",
  WECHATPAY = "WeChat Pay",
  WIRETRANSFER = "Wire Transfer",
  Yucho_Pay = "ゆうちょPay",
  ZELLE = "Zelle",
  AuPay = "auPay",
  DBarai = "d払い",
  Überweisung = "Banküberweisung",
}

export interface Coordinate {
  latitude?: number;
  longitude?: number;
}

export enum C_backgroundColor {
  AZURE = "Azure",
  WHITE = "White",
  FLORAL_WHITE = "Floral White",
  LIGHT_YELLOW = "Light Yellow",
  HONEY_DEW = "Honey Dew",
  LAVENDER_BLUSH = "Lavender Blush",
}

export interface C_featuredProducts {
  name?: string;
  primaryPhoto?: ComplexImage;
  richTextDescriptionV2?: any;
}

export interface C_faqs {
  question: string;
  answerV2: any;
}

export default interface Location {
  id: string;
  uid: string;
  meta: {
    entityType: { id: string; uid: number };
    locale: string;
  };
  name: string;
  address: Address;
  c_tagline: string;
  mainPhone: any;
  description: string;
  hours: Hours;
  slug: string;
  logo: ComplexImage;
  services: string[];
  photoGallery: ComplexImage[];
  paymentOptions: PaymentOptions[];
  emails: string[];
  yextDisplayCoordinate: Coordinate;
  c_backgroundColor: C_backgroundColor;
  c_featuredProducts: C_featuredProducts[];
  c_faqs: C_faqs[];
}

export interface Product {
  name: string;
  primaryPhoto: ComplexImage;
}

export default interface HelpArticle {
  id: string;
  uid: string;
  meta: {
    entityType: { id: string; uid: number };
    locale: string;
  };
  name: string;
  bodyV2: any;
  shortDescriptionV2: any;
  keywords: string[];
  description: string;
  hours: Hours;
  slug: string;
}

export interface C_helpArticles {
  name: string;
}

export default interface AllHelpArticles {
  id: string;
  uid: string;
  meta: {
    entityType: { id: string; uid: number };
    locale: string;
  };
  c_helpArticles: C_helpArticles[]; 
  slug: string;
}