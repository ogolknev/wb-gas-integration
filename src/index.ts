//============== state ==============

let TABS = 0;
const TAB = " ✦ ";
const templates = {
  nms: {
    name: "API ☍ Артикулы",
    template: [
      [
        "Артикул WB",
        "ID карточки товара",
        "Внутренний технический ID товара",
        "ID предмета",
        "Артикул продавца",
        "Название предмета",
        "Бренд",
        "Наименование товара",
        "URL фото",
        "URL видео",
        "Габариты. Длина, см",
        "Габариты. Ширина, см",
        "Габариты. Высота, см",
        "Габариты. Валидность",
        "Характеристики",
        "Размеры товара",
        "Теги",
        "Дата создания",
        "Дата изменения",
      ],
    ],
  },
  orders: {
    name: "API ☍ Заказы",
    template: [
      [
        "Дата и время заказа",
        "Дата и время обновления информации в сервисе.",
        "Склад отгрузки",
        "Страна",
        "Округ",
        "Регион",
        "Артикул продавца",
        "Артикул WB",
        "Баркод",
        "Категория",
        "Предмет",
        "Бренд",
        "Размер товара",
        "Номер поставки",
        "Договор поставки",
        "Договор реализации",
        "Цена без скидок",
        "Скидка продавца",
        "Скидка WB",
        "Цена с учетом всех скидок, кроме суммы по WB Кошельку",
        "Цена со скидкой продавца",
        "Отмена заказа",
        "Дата и время отмены заказа",
        "Тип заказа",
        "ID стикера",
        "Номер заказа",
        "Уникальный ID заказа",
      ],
    ],
  },
  sales: {
    name: "API ☍ Продажи",
    template: [
      [
        "Дата и время продажи",
        "Дата и время обновления информации в сервисе",
        "Склад отгрузки",
        "Страна",
        "Округ",
        "Регион",
        "Артикул продавца",
        "Артикул WB",
        "Баркод",
        "Категория",
        "Предмет",
        "Бренд",
        "Размер товара",
        "Номер поставки",
        "Договор поставки",
        "Договор реализации",
        "Цена без скидок",
        "Скидка продавца",
        "Скидка WB",
        "Оплачено с WB Кошелька",
        "К перечислению продавцу",
        "Фактическая цена с учетом всех скидок (к взиманию с покупателя)",
        "Цена со скидкой продавца",
        "Уникальный ID продажи/возврата",
        "Тип заказа",
        "ID стикера",
        "Номер заказа",
        "Уникальный ID заказа",
      ],
    ],
  },
  stocks: {
    name: "API ☍ Остатки",
    template: [
      [
        "Дата и время обновления информации в сервисе",
        "Название склада",
        "Артикул продавца",
        "Артикул WB",
        "Баркод",
        "Количество, доступное для продажи",
        "В пути к клиенту",
        "В пути от клиента",
        "Полное (непроданное) количество",
        "Категория",
        "Предмет",
        "Бренд",
        "Размер",
        "Цена",
        "Скидка",
        "Договор поставки (внутренние технологические данные)",
        "Договор реализации (внутренние технологические данные)",
        "Код контракта (внутренние технологические данные)",
      ],
    ],
  },
  products: {
    name: "API ☍ Продукты",
    template: [
      [
        "Артикул WB",
        "Артикул продавца",
        "ID размера",
        "Цена",
        "Цена со скидкой",
        "Размер товара",
        "Валюта, по стандарту ISO 4217",
        "Скидка, %",
        "Можно ли устанавливать цены отдельно для разных размеров",
      ],
    ],
  },
  adLists: {
    name: "API ☍ Список РК",
    template: [
      [
        "Тип кампании",
        "Статус кампании",
        "Количество кампаний",
        "ID кампании",
        "Дата и время последнего изменения кампании",
      ],
    ],
  },
  adInfoType8: {
    name: "API ☍ РК инфо. Авто",
    template: [
      [
        "Дата завершения кампании",
        "Дата создания кампании",
        "Дата последнего изменения кампании",
        "Дата последнего запуска кампании",
        "ID предмета",
        "Название предмета",
        "Внутренняя (системная) сущность (пол + предмет)",
        "Меню",
        "Карточка товара",
        "Рекомендации на главной",
        "Аукцион",
        "Артикул WB",
        "Ставка",
        "Артикулы WB",
        "Ставка, указанная при создании кампании. Поле актуально только для кампаний, созданных через API.",
        "Название кампании",
        "Ежедневный бюджет. Не используется",
        "ID кампании",
        "Статус кампании",
        "Тип кампании",
        "Модель оплаты"
      ],
    ],
  },
  adInfoType9: {
    name: "API ☍ РК инфо. Аукцион",
    template: [
      [
        "Дата завершения кампании",
        "Дата создания кампании",
        "Дата последнего изменения кампании",
        "Дата последнего запуска кампании",
        "Активность фиксированных фраз",
        "Название кампании",
        "ID предмета",
        "Название предмета",
        "Меню",
        "Артикул WB",
        "Ставка в поиске",
        "Ставка в Каталоге, при наличии",
        "Ежедневный бюджет. Не используется",
        "ID кампании",
        "Статус кампании",
        "Модель оплаты",
        "Тип кампании",
      ],
    ],
  },
  adInfoDeprecated: {
    name: "API ☍ РК инфо. Устаревшие",
    template: [
      [
        "Дата завершения кампании",
        "Время создания кампании",
        "Время последнего изменения кампании",
        "Дата последнего запуска кампании",
        "Название кампании",
        "Название предметной группы",
        "Флаг активности предметной группы",
        "Интервалы часов показа кампании",
        "Текущая ставка",
        "ID меню, где размещается кампания",
        "ID предметной группы",
        "ID сочетания предмета и пола",
        "Сочетание предмета и пола",
        "Название меню, где размещается кампания",
        "Числовой ID номенклатуры WB",
        "Состояние номенклатуры",
        "Дневной бюджет",
        "ID кампании",
        "Статус кампании",
        "Тип кампании",
        "Модель оплаты",
        "searchPluseState",
      ],
    ],
  },
  adStats: {
    name: "API ☍ РК статистика",
    template: [[
      "ID кампании",
      "Дата, за которую представлены данные",
      "Количество просмотров",
      "Количество кликов",
      "Показатель кликабельности, отношение числа кликов к количеству показов, %",
      "Средняя стоимость клика, ₽.",
      "Затраты, ₽.",
      "Количество добавлений товаров в корзину",
      "Количество заказов",
      "CR(conversion rate) — это отношение количества заказов к общему количеству посещений кампании",
      "Количество заказанных товаров, шт.",
      "Заказов на сумму, ₽",
      "Название товара",
      "ID артикула WB"
    ]]
  },
  pcStats: {
    name: "API ☍ КТ статистика",
    template: [[
      "Артикул WB",
      "Наименование карточки товара",
      "Артикул продавца",
      "Дата",
      "Количество переходов в карточку товара",
      "Положили в корзину, штук",
      "Заказали товаров, шт",
      "Заказали на сумму, руб.",
      "Выкупили товаров, шт.",
      "Выкупили на сумму, руб.",
      "Процент выкупа, %",
      "Конверсия в корзину, %",
      "Конверсия в заказ, %"
    ]]
  }
};
class ScriptProps {
  static Prop = class <T> {
    constructor(name: string, options?: { default?: T }) {
      this.name = name
      this.props = PropertiesService.getScriptProperties();
    }
    name: string
    default?: T
    props: GoogleAppsScript.Properties.Properties
    get(): T {
      let result = JSON.parse(this.props.getProperty(this.name) ?? "null");
      if (this.default !== undefined && !result) result = this.default
      return result
    }
    set(value: T) {
      this.props.setProperty(this.name, JSON.stringify(value))
    }
    del() {
      this.props.deleteProperty(this.name)
    }
  }
  static disposableTriggers = new this.Prop<string[]>("disposableTriggers", { default: [] })
  static accessToken = new this.Prop<string>("accessToken")
  static nmIDsOffsetPcStats = new this.Prop<number>("nmIDsOffsetPcStats", { default: 0 })
}
class ScriptCache {
  static props = CacheService.getScriptCache();
}


//============== tests ==============

function execTest() {
  getPcStats({ begin: "2024-11-10", end: "2024-11-17" })
}


//============== actions ==============

function getNms(
  fields = {
    nmID: true,
    imtID: false,
    nmUUID: false,
    subjectID: false,
    vendorCode: false,
    subjectName: false,
    brand: false,
    title: true,
    photos: true,
    video: false,
    dimensions_length: false,
    dimensions_width: false,
    dimensions_height: false,
    dimensions_isValid: false,
    characteristics: false,
    sizes: false,
    tags: false,
    createdAt: false,
    updatedAt: false,
  }
) {
  const toSheetData = (content: Nms.Response) => {
    Utils.log('LOG', `Formatting response to sheet data.`)
    let data: any[][] = [];
    content.cards.forEach((card) => {
      let line = [
        card.nmID,
        card.imtID,
        card.nmUUID,
        card.subjectID,
        card.vendorCode,
        card.subjectName,
        card.brand,
        card.title,
        card.photos[0].big,
        card.video,
        card.dimensions.length,
        card.dimensions.width,
        card.dimensions.height,
        card.dimensions.isValid,
        JSON.stringify(card.characteristics),
        JSON.stringify(card.sizes),
        JSON.stringify(card.tags),
        card.createdAt,
        card.updatedAt,
      ];
      data.push(Utils.data.pickFields(line, fields))
    });
    return data;
  };
  try {
    Utils.log('START', "getNms.")
    let query: Nms.Query = { locale: "ru" };
    const limit = 100;
    let payload: Nms.Payload = {
      settings: { filter: { withPhoto: -1 }, cursor: { limit } },
    };
    let response = API.getNms(payload, query);
    Utils.sheet.put(templates.nms.name, toSheetData(response.content), 0, 1, {
      template: Utils.data.pickFields(templates.nms.template, fields), clear: true
    });
    while (response.content.cursor.total >= limit) {
      payload = {
        settings: {
          filter: { withPhoto: -1 },
          cursor: {
            limit,
            updatedAt: response.content.cursor.updatedAt,
            nmID: response.content.cursor.nmID,
          },
        },
      };
      response = API.getNms(payload, query);
      Utils.sheet.put(templates.nms.name, toSheetData(response.content), 0, 1, {
        template: Utils.data.pickFields(templates.nms.template, fields), clear: true
      });
    }
    Utils.sheet.removeEmptyCells(templates.nms.name)
    Utils.log('SUCCESS', "getNms.")
  } catch (error: unknown) {
    switch ((error as HTTPExeption).status) {
      case HTTPExeptions.TooManyRequests:
        Utils.triggers.after("getNms", 1000 * 60);
      default:
        throw error;
    }
  }
}
function getOrders(
  dateFrom: string = Utils.date.toString(new Date()),
  flag: 1 | 0 = 1,
  fields = {
    date: false,
    lastChangeDate: false,
    warehouseName: false,
    countryName: false,
    oblastOkrugName: false,
    regionName: false,
    supplierArticle: false,
    nmId: false,
    barcode: false,
    category: false,
    subject: false,
    brand: false,
    techSize: false,
    incomeID: false,
    isSupply: false,
    isRealization: false,
    totalPrice: false,
    discountPercent: false,
    spp: false,
    finishedPrice: false,
    priceWithDisc: false,
    isCancel: false,
    cancelDate: false,
    orderType: false,
    sticker: false,
    gNumber: false,
    srid: false,
  },
) {
  const toSheetData = (content: Orders.Response) => {
    Utils.log('LOG', `Formatting response to sheet data.`)
    let data: any[][] = [];
    content.forEach((order) => {
      const line = [
        order.date,
        order.lastChangeDate,
        order.warehouseName,
        order.countryName,
        order.oblastOkrugName,
        order.regionName,
        order.supplierArticle,
        order.nmId,
        order.barcode,
        order.category,
        order.subject,
        order.brand,
        order.techSize,
        order.incomeID,
        order.isSupply,
        order.isRealization,
        order.totalPrice,
        order.discountPercent,
        order.spp,
        order.finishedPrice,
        order.priceWithDisc,
        order.isCancel,
        order.cancelDate,
        order.orderType,
        order.sticker,
        order.gNumber,
        order.srid,
      ];
      data.push(Utils.data.pickFields(data, fields))
    });
    return data;
  };
  try {
    Utils.log('START', "getOrders.")
    let query: Orders.Query = { dateFrom, flag };
    let response = API.getOrders(query);
    Utils.sheet.put(
      templates.orders.name,
      toSheetData(response.content),
      0,
      1,
      {
        template: Utils.data.pickFields(templates.orders.template, fields),
      }
    );
    Utils.log('SUCCESS', "getOrders.")
  } catch (error: unknown) {
    switch ((error as HTTPExeption).status) {
      case HTTPExeptions.TooManyRequests:
        Utils.triggers.after("getOrders", 1000 * 60);
        break;
      default:
        throw error;
    }
  }
}
function getSales(
  dateFrom: string = Utils.date.toString(new Date()),
  flag: 1 | 0 = 1,
  fields = {
    date: true,
    lastChangeDate: true,
    warehouseName: true,
    countryName: true,
    oblastOkrugName: true,
    regionName: true,
    supplierArticle: true,
    nmId: true,
    barcode: true,
    category: true,
    subject: true,
    brand: true,
    techSize: true,
    incomeID: true,
    isSupply: true,
    isRealization: true,
    totalPrice: true,
    discountPercent: true,
    spp: true,
    paymentSaleAmount: true,
    forPay: true,
    finishedPrice: true,
    priceWithDisc: true,
    saleID: true,
    orderType: true,
    sticker: true,
    gNumber: true,
    srid: true,
  },
) {
  const toSheetData = (content: Sales.Response) => {
    Utils.log('LOG', `Formatting response to sheet data.`)
    const data: any[][] = [];
    content.forEach((sale) => {
      const line = [
        sale.date,
        sale.lastChangeDate,
        sale.warehouseName,
        sale.countryName,
        sale.oblastOkrugName,
        sale.regionName,
        sale.supplierArticle,
        sale.nmId,
        sale.barcode,
        sale.category,
        sale.subject,
        sale.brand,
        sale.techSize,
        sale.incomeID,
        sale.isSupply,
        sale.isRealization,
        sale.totalPrice,
        sale.discountPercent,
        sale.spp,
        sale.paymentSaleAmount,
        sale.forPay,
        sale.finishedPrice,
        sale.priceWithDisc,
        sale.saleID,
        sale.orderType,
        sale.sticker,
        sale.gNumber,
        sale.srid,
      ];
      data.push(Utils.data.pickFields(line, fields))
    });
    return data;
  };
  try {
    Utils.log('START', 'getSales.')
    let query: Sales.Query = { dateFrom, flag };
    let response = API.getSales(query);
    Utils.sheet.put(templates.sales.name, toSheetData(response.content), 0, 1, {
      template: Utils.data.pickFields(templates.sales.template, fields),
    });
    Utils.log('SUCCESS', 'getSales.')
  } catch (error) {
    switch ((error as HTTPExeption).status) {
      case HTTPExeptions.TooManyRequests:
        Utils.triggers.after("getSales", 1000 * 60);
        break;
      default:
        throw error;
    }
  }
}
function getStocks(
  dateFrom: string = Utils.date.toString(new Date()),
  fields = {
    lastChangeDate: false,
    warehouseName: false,
    supplierArticle: false,
    nmId: false,
    barcode: false,
    quantity: false,
    inWayToClient: false,
    inWayFromClient: false,
    quantityFull: false,
    category: false,
    subject: false,
    brand: false,
    techSize: false,
    Price: false,
    Discount: false,
    isSupply: false,
    isRealization: false,
    SCCode: false,
  },
) {
  const toSheetData = (content: Stocks.Response) => {
    Utils.log('LOG', `Formatting response to sheet data.`)
    const data: any[][] = [];
    content.forEach((stocks) => {
      const line = [
        stocks.lastChangeDate,
        stocks.warehouseName,
        stocks.supplierArticle,
        stocks.nmId,
        stocks.barcode,
        stocks.quantity,
        stocks.inWayToClient,
        stocks.inWayFromClient,
        stocks.quantityFull,
        stocks.category,
        stocks.subject,
        stocks.brand,
        stocks.techSize,
        stocks.Price,
        stocks.Discount,
        stocks.isSupply,
        stocks.isRealization,
        stocks.SCCode,
      ];
      data.push(Utils.data.pickFields(line, fields))
    });
    return data;
  };
  try {
    Utils.log('START', 'getStocks.')
    let query: Stocks.Query = { dateFrom };
    let response = API.getStocks(query);
    Utils.sheet.put(
      templates.stocks.name,
      toSheetData(response.content),
      0, 1,
      {
        template: Utils.data.pickFields(templates.stocks.template, fields)
      }
    );
    Utils.log('SUCCESS', 'getStocks.')
  } catch (error) {
    switch ((error as HTTPExeption).status) {
      case HTTPExeptions.TooManyRequests:
        Utils.triggers.after("getStocks", 1000 * 60);
        break;
      default:
        throw error;
    }
  }
}
function getProducts(
  query: Products.Query = {
    limit: 1000,
    offset: 0,
  },
  fields = {
    nmID: false,
    vendorCode: false,
    sizeID: false,
    price: false,
    discountedPrice: false,
    techSizeName: false,
    currencyIsoCode4217: false,
    discount: false,
    editableSizePrice: false,
  },
) {
  const toSheetData = (content: Products.Response) => {
    Utils.log('LOG', `Formatting response to sheet data.`)
    const data: any[][] = [];
    content.data.listGoods.forEach((product) => {
      product.sizes.forEach((size) => {
        const line = [
          product.nmID,
          product.vendorCode,
          size.sizeID,
          size.price,
          size.discountedPrice,
          size.techSizeName,
          product.currencyIsoCode4217,
          product.discount,
          product.editableSizePrice,
        ];
        data.push(Utils.data.pickFields(line, fields))
      });
    });
    return data;
  };
  try {
    Utils.log('START', 'getProducts.')
    let response = API.getProducts(query);
    Utils.sheet.put(
      templates.products.name,
      toSheetData(response.content),
      0,
      1,
      {
        template: Utils.data.pickFields(templates.products.template, fields)
      }
    );
    while (response.content.data.listGoods.length >= 1000) {
      query.offset += 1000;
      let response = API.getProducts(query);
      Utils.sheet.put(
        templates.products.name,
        toSheetData(response.content),
        0,
        1,
        {
          template: Utils.data.pickFields(templates.products.template, fields)
        }
      );
    }
    Utils.log('SUCCESS', 'getProducts.')
  } catch (error) {
    switch ((error as HTTPExeption).status) {
      case HTTPExeptions.TooManyRequests:
        Utils.triggers.after("getProducts", 1000 * 60);
        break;
      default:
        throw error;
    }
  }
}
function getAdLists(fields = {
  type: true,
  status: true,
  count: false,
  advertId: true,
  changeTime: false,
}) {
  const toSheetData = (content: AdLists.Response) => {
    Utils.log('LOG', `Formatting response to sheet data.`)
    const data: any[][] = [];
    content.adverts.forEach((adList) => {
      adList.advert_list.forEach((ad) => {
        const line = [
          adList.type,
          adList.status,
          adList.count,
          ad.advertId,
          ad.changeTime,
        ];
        data.push(Utils.data.pickFields(line, fields))
      });
    });
    return data;
  };
  try {
    let response = API.getAdLists();
    Utils.sheet.put(
      templates.adLists.name,
      toSheetData(response.content),
      0,
      1,
      { clear: true, template: Utils.data.pickFields(templates.adLists.template, fields) }
    );
  } catch (error) {
    switch ((error as HTTPExeption).status) {
      case HTTPExeptions.TooManyRequests:
        Utils.triggers.after("getAdLists", 1000 * 60);
        break;
      default:
        throw error;
    }
  }
}
function getAdInfoType8(
  adIds?: number[],
  query: AdInfo.Query = {},
  fields = {
    endTime: false,
    createTime: false,
    changeTime: false,
    startTime: false,
    subject_id: false,
    subject_name: false,
    sets: false,
    menus: false,
    carousel: false,
    recom: false,
    booster: false,
    nm: true,
    nm_cpm: true,
    nms: false,
    cpm: true,
    name: true,
    dailyBudget: false,
    advertId: true,
    status: true,
    type: false,
    paymentType: false
  },
) {
  if (!adIds) {
    Utils.log('LOG', "Receiving adIds from adLists.")
    const sheet = Utils.sheet.get(templates.adLists.name);
    let adIdsIndex = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues().flat().findIndex(value => value === "ID кампании") + 1
    adIds = sheet
      .getRange(2, adIdsIndex, sheet.getLastRow() - 1, 1)
      .getValues()
      .flat();
    let typesIndex = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues().flat().findIndex(value => value === "Тип кампании") + 1
    let types = sheet
      .getRange(2, typesIndex, sheet.getLastRow() - 1, 1)
      .getValues()
      .flat();
    let statusIndex = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues().flat().findIndex(value => value === "Статус кампании") + 1
    let status = sheet
      .getRange(2, statusIndex, sheet.getLastRow() - 1, 1)
      .getValues()
      .flat();
    adIds = adIds.filter((_, index) => {
      return types[index] === 8 && (status[index] === 9 || status[index] === 11)
    })
  }
  const toSheetData = (content: AdInfo.Response.Type8) => {
    const data: any[][] = []
    content.forEach(advert => {
      advert.autoParams.nmCPM?.forEach(nm => {
        const line = [
          advert.endTime,
          advert.createTime,
          advert.changeTime,
          advert.startTime,
          advert.autoParams.subject.id,
          advert.autoParams.subject.name,
          JSON.stringify(advert.autoParams.sets),
          JSON.stringify(advert.autoParams.menus),
          advert.autoParams.active.carousel,
          advert.autoParams.active.recom,
          advert.autoParams.active.booster,
          nm.nm,
          nm.cpm,
          JSON.stringify(advert.autoParams.nms),
          advert.autoParams.cpm,
          advert.name,
          advert.dailyBudget,
          advert.advertId,
          advert.status,
          advert.type,
          advert.paymentType
        ]
        data.push(Utils.data.pickFields(line, fields))
      })
    })
    return data
  }
  try {
    Utils.log('START', 'getAdInfoType8.')
    if (adIds.length) {
      let payload: AdInfo.Payload = adIds
      let response = API.getAdInfo(payload, query)
      Utils.sheet.put(
        templates.adInfoType8.name, toSheetData((response.content as AdInfo.Response.Type8)),
        -1, 1, {
        clear: true,
        template: Utils.data.pickFields(templates.adInfoType8.template, fields)
      })
    } else {
      Utils.log('WARN', 'No relevant adIds.')
    }
    Utils.log('SUCCESS', 'getAdInfoType8.')
  } catch (error) {
    switch ((error as HTTPExeption).status) {
      case HTTPExeptions.TooManyRequests:
        Utils.triggers.after("getAdInfoType8", 1000 * 60);
        break;
      default:
        throw error;
    }
  }
}
function getAdInfoType9(
  adIds?: number[],
  query: AdInfo.Query = {},
  fields = {
    endTime: false,
    createTime: false,
    changeTime: false,
    startTime: false,
    searchPluseState: false,
    name: true,
    subject_id: false,
    subject_name: false,
    menus: false,
    nm: true,
    searchCPM: true,
    catalogCPM: true,
    dailyBudget: false,
    advertId: true,
    status: true,
    paymentType: false,
    type: false
  },
) {
  if (!adIds) {
    Utils.log('LOG', "Receiving adIds from adLists.")
    const sheet = Utils.sheet.get(templates.adLists.name);
    let adIdsIndex = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues().flat().findIndex(value => value === "ID кампании") + 1
    adIds = sheet
      .getRange(2, adIdsIndex, sheet.getLastRow() - 1, 1)
      .getValues()
      .flat();
    let typesIndex = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues().flat().findIndex(value => value === "Тип кампании") + 1
    let types = sheet
      .getRange(2, typesIndex, sheet.getLastRow() - 1, 1)
      .getValues()
      .flat();
    let statusIndex = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues().flat().findIndex(value => value === "Статус кампании") + 1
    let status = sheet
      .getRange(2, statusIndex, sheet.getLastRow() - 1, 1)
      .getValues()
      .flat();
    adIds = adIds.filter((_, index) => {
      return types[index] === 9 && (status[index] === 9 || status[index] === 11)
    })
  }
  const toSheetData = (content: AdInfo.Response.Type9) => {
    const data: any[][] = []
    content.forEach(advert => {
      advert.unitedParams.forEach(param => {
        param.nms.forEach(nm => {
          const line = [
            advert.endTime,
            advert.createTime,
            advert.changeTime,
            advert.startTime,
            advert.searchPluseState,
            advert.name,
            param.subject.id,
            param.subject.name,
            JSON.stringify(param.menus),
            nm,
            param.searchCPM,
            param.catalogCPM,
            advert.dailyBudget,
            advert.advertId,
            advert.status,
            advert.paymentType,
            advert.type
          ]
          data.push(Utils.data.pickFields(line, fields))
        })
      })
    })
    return data
  }
  try {
    Utils.log('START', 'getAdInfoType9.')
    if (adIds.length) {
      let payload: AdInfo.Payload = adIds
      let response = API.getAdInfo(payload, query)
      Utils.sheet.put(
        templates.adInfoType9.name, toSheetData((response.content as AdInfo.Response.Type9)),
        -1, 1, {
        clear: true,
        template: Utils.data.pickFields(templates.adInfoType9.template, fields)
      })
    } else {
      Utils.log('WARN', 'No relevant adIds.')
    }
    Utils.log('SUCCESS', 'getAdInfoType9.')
  } catch (error) {
    switch ((error as HTTPExeption).status) {
      case HTTPExeptions.TooManyRequests:
        Utils.triggers.after("getAdInfoType9", 1000 * 60);
        break;
      default:
        throw error;
    }
  }
}
function getAdInfoDeprecated(
  adIds?: number[],
  query: AdInfo.Query = {},
  fields = {
    endTime: false,
    createTime: false,
    changeTime: false,
    startTime: false,
    name: true,
    subjectName: false,
    active: true,
    intervals: false,
    price: true,
    menuId: false,
    subjectId: false,
    setId: false,
    setName: false,
    menuName: false,
    nm: true,
    nm_active: true,
    dailyBudget: false,
    advertId: true,
    status: true,
    type: true,
    paymentType: false,
    searchPluseState: false
  },
) {
  if (!adIds) {
    Utils.log('LOG', "Receiving adIds from adLists.")
    const sheet = Utils.sheet.get(templates.adLists.name);
    let adIdsIndex = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues().flat().findIndex(value => value === "ID кампании") + 1
    adIds = sheet
      .getRange(2, adIdsIndex, sheet.getLastRow() - 1, 1)
      .getValues()
      .flat();
    let typesIndex = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues().flat().findIndex(value => value === "Тип кампании") + 1
    let types = sheet
      .getRange(2, typesIndex, sheet.getLastRow() - 1, 1)
      .getValues()
      .flat();
    let statusIndex = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues().flat().findIndex(value => value === "Статус кампании") + 1
    let status = sheet
      .getRange(2, statusIndex, sheet.getLastRow() - 1, 1)
      .getValues()
      .flat();
    adIds = adIds.filter((_, index) => {
      return types[index] !== 8 && types[index] !== 9 && (status[index] === 9 || status[index] === 11)
    })
  }
  const toSheetData = (content: AdInfo.Response.Deprecated) => {
    Utils.log('LOG', `Formatting response to sheet data.`)
    const data: any[][] = [];
    content.forEach(advert => {
      advert.params.forEach(param => {
        param.nms.forEach(nm => {
          const line = [
            advert.endTime,
            advert.createTime,
            advert.changeTime,
            advert.startTime,
            advert.name,
            param.subjectName,
            param.active,
            JSON.stringify(param.intervals),
            param.price,
            param.menuId,
            param.subjectId,
            param.setId,
            param.setName,
            param.menuName,
            nm.nm,
            nm.active,
            advert.dailyBudget,
            advert.advertId,
            advert.status,
            advert.type,
            advert.paymentType,
            advert.searchPluseState
          ]
          data.push(Utils.data.pickFields(line, fields))
        })
      })

    })

    return data
  }
  try {
    Utils.log('START', 'getAdInfoDeprecated.')
    if (adIds.length) {
      let payload: AdInfo.Payload = adIds
      let response = API.getAdInfo(payload, query)
      Utils.sheet.put(
        templates.adInfoDeprecated.name, toSheetData((response.content as AdInfo.Response.Deprecated)),
        -1, 1, {
        clear: true,
        template: Utils.data.pickFields(templates.adInfoDeprecated.template, fields)
      })

    } else {
      Utils.log('WARN', 'No relevant adIds.')
    }
    Utils.log('SUCCESS', 'getAdInfoDeprecated.')
  } catch (error) {
    switch ((error as HTTPExeption).status) {
      case HTTPExeptions.TooManyRequests:
        Utils.triggers.after("getAdInfoDeprecated", 1000 * 60);
        break;
      default:
        throw error;
    }
  }
}
function getAdStats(
  dates: string[],
  adIds?: number[],
  fields?: {
    advertId: boolean,
    date: boolean,
    views: boolean,
    clicks: boolean,
    ctr: boolean,
    cpc: boolean,
    sum: boolean,
    atbs: boolean,
    orders: boolean,
    cr: boolean,
    shks: boolean,
    sum_price: boolean,
    name: boolean,
    nmId: boolean
  },
): void
function getAdStats(
  interval: { begin: string, end: string },
  adIds?: number[],
  fields?: {
    advertId: boolean,
    date: boolean,
    views: boolean,
    clicks: boolean,
    ctr: boolean,
    cpc: boolean,
    sum: boolean,
    atbs: boolean,
    orders: boolean,
    cr: boolean,
    shks: boolean,
    sum_price: boolean,
    name: boolean,
    nmId: boolean
  },
): void
function getAdStats(
  datesOrInterval: string[] | { begin: string, end: string },
  adIds?: number[],
  fields = {
    advertId: true,
    date: true,
    views: true,
    clicks: true,
    ctr: true,
    cpc: true,
    sum: true,
    atbs: true,
    orders: true,
    cr: true,
    shks: true,
    sum_price: true,
    name: true,
    nmId: true
  },
) {
  if (!adIds) {
    Utils.log('LOG', "Receiving adIds from adLists.")
    const sheet = Utils.sheet.get(templates.adLists.name);
    let adIdsIndex = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues().flat().findIndex(value => value === "ID кампании") + 1
    adIds = sheet
      .getRange(2, adIdsIndex, sheet.getLastRow() - 1, 1)
      .getValues()
      .flat();
    let statusIndex = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues().flat().findIndex(value => value === "Статус кампании") + 1
    let status = sheet
      .getRange(2, statusIndex, sheet.getLastRow() - 1, 1)
      .getValues()
      .flat();
    adIds = adIds.filter((_, index) => {
      return status[index] === 9 || status[index] === 11
    })
  }
  const toSheetData = (content: AdStats.Response.WithDate | AdStats.Response.WithInterval) => {
    Utils.log('LOG', `Formatting response to sheet data.`)
    let line: (string | number | boolean)[]
    const data: any[][] = []
    content.forEach((ad: AdStats.Response.WithDate[number] | AdStats.Response.WithInterval[number]) => {
      ad.days.forEach(day => {
        day.apps.forEach(app => {
          app.nm.forEach(nm => {
            const line = [
              ad.advertId,
              day.date,
              nm.views,
              nm.clicks,
              nm.ctr,
              nm.cpc,
              nm.sum,
              nm.atbs,
              nm.orders,
              nm.cr,
              nm.shks,
              nm.sum_price,
              nm.name,
              nm.nmId
            ]
            data.push(Utils.data.pickFields(line, fields))
          })
        })
      })
    })
    return data
  }
  try {
    Utils.log('START', 'getAdStats.')
    let payload: AdStats.Payload.WithDate | AdStats.Payload.WithInterval
    if (Array.isArray(datesOrInterval)) {
      payload = adIds.map(id => {
        return {
          id,
          dates: datesOrInterval
        }
      })
    } else {
      payload = adIds.map(id => {
        return {
          id,
          interval: datesOrInterval
        }
      })
    }
    const response = API.getAdStats(payload)
    if (response.content) {
      Utils.sheet.put(
        templates.adStats.name,
        toSheetData(response.content),
        0, 1,
        { template: Utils.data.pickFields(templates.adStats.template, fields) }
      )
    }
    Utils.log('SUCCESS', 'getAdStats.')
  } catch (error) {
    switch ((error as HTTPExeption).status) {
      case HTTPExeptions.TooManyRequests:
        Utils.triggers.after("getAdStats", 1000 * 60);
        break;
      default:
        throw error;
    }
  }
}
function getPcStats(
  period: { begin: string, end: string },
  nmIDs?: number[],
  fields = {
    nmID: false,
    imtName: false,
    vendorCode: false,
    dt: false,
    openCardCount: false,
    addToCartCount: false,
    ordersCount: false,
    ordersSumRub: false,
    buyoutsCount: false,
    buyoutsSumRub: false,
    buyoutPercent: false,
    addToCartConversion: false,
    cartToOrderConversion: false
  },
) {
  if (!nmIDs) {
    Utils.log('LOG', "Receiving nmIds from nms.")
    const sheet = Utils.sheet.get(templates.nms.name)
    nmIDs = sheet
      .getRange(2, 1, sheet.getLastRow() - 1, 1)
      .getValues()
      .flat()
  }
  const toSheetData = (content: PcStats.Response) => {
    Utils.log('LOG', `Formatting response to sheet data.`)
    let data: any[][] = [];
    content.data.forEach(row => {
      row.history.forEach(day => {
        const line = [
          row.nmID,
          row.imtName,
          row.vendorCode,
          day.dt,
          day.openCardCount,
          day.addToCartCount,
          day.ordersCount,
          day.ordersSumRub,
          day.buyoutsCount,
          day.buyoutsSumRub,
          day.buyoutPercent,
          day.addToCartConversion,
          day.cartToOrderConversion
        ]
        data.push(Utils.data.pickFields(line, fields))
      })
    })
    return data;
  };
  try {
    Utils.log('START', "getPcStats.")
    let offset = ScriptProps.nmIDsOffsetPcStats.get()
    let payload: PcStats.Payload = { nmIDs: nmIDs.slice(offset, offset + 20), period }
    offset += 20
    let response = API.getPcStats(payload)
    Utils.sheet.put(templates.pcStats.name, toSheetData(response.content), 0, 1, {
      template: Utils.data.pickFields(templates.pcStats.template, fields),
    });
    ScriptProps.nmIDsOffsetPcStats.set(offset)
    while (nmIDs.length > offset) {
      payload = { nmIDs: nmIDs.slice(offset, offset + 20), period }
      offset += 20
      response = API.getPcStats(payload)
      Utils.sheet.put(templates.pcStats.name, toSheetData(response.content), 0, 1, {
        template: Utils.data.pickFields(templates.pcStats.template, fields)
      });
      ScriptProps.nmIDsOffsetPcStats.set(offset)
    }
    ScriptProps.nmIDsOffsetPcStats.del()
    Utils.log('SUCCESS', "getPcStats.")
  } catch (error: unknown) {
    switch ((error as HTTPExeption).status) {
      case HTTPExeptions.TooManyRequests:
        Utils.triggers.after("getPcStats", 1000 * 60);
      default:
        throw error;
    }
  }
}


//============== simple triggers ==============

function onOpen() {
  const ui = SpreadsheetApp.getUi()
  ui.createMenu('API')
    .addItem('Проверить подключение', 'checkConnection')
    .addToUi()
}


//============== utils ==============

class Utils {
  static log = (
    type: "START" | "LOG" | "SUCCESS" | "WARN" | "ERROR" | "UNSUCCESS",
    message: string
  ) => {
    if (type === "SUCCESS" || type === "ERROR" || type === "UNSUCCESS") TABS--;
    if (type === "WARN" || type === "UNSUCCESS") console.warn(TAB.repeat(TABS) + `[${type}] ` + message);
    else if (type === "ERROR") console.error(TAB.repeat(TABS) + `[${type}] ` + message)
    else Logger.log(TAB.repeat(TABS) + `[${type}] ` + message);
    if (type === "START") TABS++;
  };
  static date = {
    toString: (date: Date, div: "." | "-" | "/" = "-") => {
      return `${date.getFullYear()}${div}${String(date.getMonth() + 1).padStart(
        2,
        "0"
      )}${div}${String(date.getDate()).padStart(2, "0")}`;
    },
    format: (date: string, div: "." | "-" | "/" = "-") => {
      return `${date.slice(0, 4)}${div}${date.slice(5, 7)}${div}${date.slice(
        8,
        10
      )}`;
    },
  };
  static sheet = {
    get: (sheetName: string) => {
      Utils.log("START", `Receiving sheet "${sheetName}".`);
      let sheet =
        SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName);
      if (!sheet) {
        Utils.log("LOG", `Creating sheet "${sheetName}".`);
        SpreadsheetApp.getActiveSpreadsheet().insertSheet(sheetName);
        sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName);
      }
      if (sheet) {
        Utils.log("SUCCESS", `Receiving sheet "${sheetName}" completed.`);
        return sheet;
      }
      Utils.log('ERROR', `Sheet "${sheetName}" don't received.`);
      throw new Error(`Sheet "${sheetName}" don't received.`)
    },
    put: (
      sheetName: string,
      data: any[][],
      row: number,
      column: number,
      options?: {
        clear?: boolean;
        template?: any[][];
      }
    ) => {
      Utils.log("START", `Transfering data to a sheet "${sheetName}".`);
      const sheet = Utils.sheet.get(sheetName);
      if (options) {
        if (options.clear) {
          Utils.log("LOG", `Clearing the sheet "${sheetName}".`);
          sheet.clear();
        }
        if (options.template) {
          Utils.log("LOG", `Applying a template to a sheet "${sheetName}".`);
          Utils.sheet.put(sheetName, options.template, 1, 1);
        }
      }
      if (row < 1) row = sheet.getLastRow() + 1;
      if (column < 1) column = sheet.getLastColumn() + 1;
      if (data.length > 0) sheet.getRange(row, column, data.length, data[0].length).setValues(data);
      Utils.log(
        "SUCCESS",
        `Transfering data(${data.length} records) to a sheet "${sheetName}" completed.`
      );
    },
    removeEmptyCells: (sheetName: string) => {
      const sheet = Utils.sheet.get(sheetName)

      if (sheet.getMaxRows() > sheet.getLastRow()) {
        sheet.deleteRows(sheet.getLastRow() + 1, sheet.getMaxRows() - sheet.getLastRow())
      }
      if (sheet.getMaxColumns() > sheet.getLastColumn()) {
        sheet.deleteColumns(sheet.getLastColumn() + 1, sheet.getMaxColumns() - sheet.getLastColumn())
      }
    }
  };
  static triggers = {
    after: (functionName: string, ms: number) => {
      Utils.log("START", `Creating trigger for ${functionName}.`);
      const trigger = ScriptApp.newTrigger(functionName)
        .timeBased()
        .after(ms)
        .create();
      Utils.log("SUCCESS", `Creating trigger for ${functionName} completed.`);
      Utils.log("START", `Adding trigger to "disposableTriggers".`);
      let disposableTriggers = ScriptProps.disposableTriggers.get();
      disposableTriggers.push(trigger.getUniqueId());
      ScriptProps.disposableTriggers.set(disposableTriggers);
      Utils.log("SUCCESS", `Adding trigger to "disposableTriggers" completed.`);
    },
    clear: (functionName?: string, disposable: boolean = true) => {
      Utils.log("START", `Clear disposable triggers.`);
      let disposableTriggers = ScriptProps.disposableTriggers.get();
      ScriptApp.getProjectTriggers().forEach((trigger) => {
        if (trigger.getUniqueId() in disposableTriggers || !disposable) {
          if (functionName && functionName === trigger.getHandlerFunction())
            ScriptApp.deleteTrigger(trigger);
          Utils.log(
            "LOG",
            `Trigger "${trigger.getHandlerFunction()} removed."`
          );
        }
      });
      Utils.log("SUCCESS", `Clear disposable triggers completed.`);
    },
  };
  static ui = {
    prompt: (title: string, text: string, buttonSet: 'OK_CANCEL' | 'OK' | 'YES_NO' | 'YES_NO_CANCEL') => {
      const ui = SpreadsheetApp.getUi()
      return ui.prompt(title, text, ui.ButtonSet[buttonSet])
    }
  }
  static data = {
    pickFields(data: (string | number | boolean)[] | (string | number | boolean)[][], fields: { [key: string]: boolean }) {
      let result = []
      if (Array.isArray(data[0])) {
        for (let line of data as (string | number | boolean)[][]) {
          result.push(Utils.data.pickFields(line, fields))
        }
      }
      else {
        result = (data as (string | number | boolean)[]).filter((_, index) => {
          return Object.values(fields)[index]
        })
      }
      return result
    }
  }
}
class API {
  private static access = getAccess({ overwrite: false })
  static request = (
    url: string,
    params: GoogleAppsScript.URL_Fetch.URLFetchRequestOptions,
    query?: object
  ) => {
    const setQuery = (url: string, query: object) => {
      const queryString = Object.keys(query)
        .map((key) => {
          if (query[key] !== undefined) return key + "=" + query[key];
          return ""
        })
        .join("&");
      if (queryString) {
        url += "?" + queryString;
      }
      return url;
    };
    if (query) url = setQuery(url, query);
    Utils.log("START", `Request to ${url}.`);
    params = {
      ...{
        muteHttpExceptions: true,
        headers: {
          Authorization: this.access,
          "content-type": "application/json",
        },
      },
      ...params,
    };
    if (params.payload) {
      params.payload = JSON.stringify(params.payload);
      Utils.log("LOG", `Payload: ${params.payload}`);
    }
    let attempt = 0;
    let response = UrlFetchApp.fetch(url, params);
    while (!response) {
      attempt++;
      Utils.log(
        "WARN",
        `Response of ${url} didn't received. Attempt: ${attempt}.`
      );
      response = UrlFetchApp.fetch(url, params);
    }
    let status = response.getResponseCode();
    let content: any;
    try {
      content = JSON.parse(response.getContentText());
    } catch (error) {
      content = response.getContentText();
    }
    if (status >= 200 && status < 300) {
      Utils.log(
        "SUCCESS",
        `Response of ${url} received. Attempts: ${attempt}.`
      );
      return { status, content };
    }
    throw new HTTPExeption(status, JSON.stringify(content));
  };
  static getNms(
    payload: Nms.Payload,
    query: Nms.Query
  ): HTTPResponse<Nms.Response> {
    Utils.log('LOG', "Receiving https://content-api.wildberries.ru/content/v2/get/cards/list.")
    return this.request(
      "https://content-api.wildberries.ru/content/v2/get/cards/list",
      {
        method: "post",
        payload,
      },
      query
    );
  }
  static getOrders(query: Orders.Query): HTTPResponse<Orders.Response> {
    Utils.log('LOG', "Receiving https://statistics-api.wildberries.ru/api/v1/supplier/orders.")
    return this.request(
      "https://statistics-api.wildberries.ru/api/v1/supplier/orders",
      { method: "get" },
      query
    );
  }
  static getSales(query: Sales.Query): HTTPResponse<Sales.Response> {
    Utils.log('LOG', "Receiving https://statistics-api.wildberries.ru/api/v1/supplier/sales.")
    return this.request(
      "https://statistics-api.wildberries.ru/api/v1/supplier/sales",
      { method: "get" },
      query
    );
  }
  static getStocks(query: Stocks.Query): HTTPResponse<Stocks.Response> {
    Utils.log('LOG', "Receiving https://statistics-api.wildberries.ru/api/v1/supplier/stocks.")
    return this.request(
      "https://statistics-api.wildberries.ru/api/v1/supplier/stocks",
      { method: "get" },
      query
    );
  }
  static getProducts(query: Products.Query): HTTPResponse<Products.Response> {
    Utils.log('LOG', "Receiving https://discounts-prices-api.wildberries.ru/api/v2/list/goods/filter.")
    return this.request(
      "https://discounts-prices-api.wildberries.ru/api/v2/list/goods/filter",
      { method: "get" },
      query
    );
  }
  static getAdLists(): HTTPResponse<AdLists.Response> {
    Utils.log('LOG', "Receiving https://advert-api.wildberries.ru/adv/v1/promotion/count.")
    return this.request(
      "https://advert-api.wildberries.ru/adv/v1/promotion/count",
      { method: "get" }
    );
  }
  static getAdInfo(
    payload: AdInfo.Payload,
    query: AdInfo.Query
  ): HTTPResponse<AdInfo.Response.Type8 | AdInfo.Response.Type9 | AdInfo.Response.Deprecated> {
    Utils.log('LOG', "Receiving https://advert-api.wildberries.ru/adv/v1/promotion/adverts.")
    return this.request(
      "https://advert-api.wildberries.ru/adv/v1/promotion/adverts",
      { method: "post", payload },
      query
    );
  }
  static getAdStats(
    payload: AdStats.Payload.WithDate
  ): HTTPResponse<AdStats.Response.WithDate>;
  static getAdStats(
    payload: AdStats.Payload.WithInterval
  ): HTTPResponse<AdStats.Response.WithInterval>;
  static getAdStats(
    payload: AdStats.Payload.WithDate | AdStats.Payload.WithInterval
  ):
    | HTTPResponse<AdStats.Response.WithDate>
    | HTTPResponse<AdStats.Response.WithInterval> {
    Utils.log('LOG', "Receiving https://advert-api.wildberries.ru/adv/v2/fullstats.")
    return this.request("https://advert-api.wildberries.ru/adv/v2/fullstats", {
      method: "post",
      payload,
    });
  }
  static getPcStats(payload: PcStats.Payload): HTTPResponse<PcStats.Response> {
    Utils.log('LOG', "Receiving https://seller-analytics-api.wildberries.ru/api/v2/nm-report/detail/history.")
    return this.request(
      "https://seller-analytics-api.wildberries.ru/api/v2/nm-report/detail/history",
      { payload }
    );
  }
}
class HTTPExeption extends Error {
  constructor(status: number, message: string) {
    super(message);
    this.status = status;
    Object.setPrototypeOf(this, new.target.prototype);
  }
  status: number;
}
enum HTTPExeptions {
  BadRequest = 400,
  Unauthorized = 401,
  AccessDenied = 403,
  UnprocessableEntity = 422,
  TooManyRequests = 429,
}
function getAccess(options = { overwrite: true }) {
  if (options.overwrite) ScriptProps.accessToken.del()
  let access = ScriptProps.accessToken.get()
  if (!access) {
    let response = Utils.ui.prompt("Авторизация", "Необходимо ввести токен доступа!\nГде его взять https://dev.wildberries.ru/openapi/api-information#tag/Avtorizaciya", 'OK_CANCEL')
    if (response.getSelectedButton() === SpreadsheetApp.getUi().Button.OK) {
      access = response.getResponseText()
      ScriptProps.accessToken.set(access)
    }
  }
  return access
}
function checkConnection() {

  Utils.log("START", "checkConnection.")

  const connection = []
  const categories = [
    "https://content-api.wildberries.ru/ping",
    "https://seller-analytics-api.wildberries.ru/ping",
    "https://discounts-prices-api.wildberries.ru/ping",
    "https://marketplace-api.wildberries.ru/ping",
    "https://statistics-api.wildberries.ru/ping",
    "https://advert-api.wildberries.ru/ping",
    "https://feedbacks-api.wildberries.ru/ping",
    "https://buyer-chat-api.wildberries.ru/ping",
    "https://supplies-api.wildberries.ru/ping",
    "https://returns-api.wildberries.ru/ping",
    "https://documents-api.wildberries.ru/ping",
    "https://common-api.wildberries.ru/ping"
  ]

  for (let category of categories) {

    Utils.log('LOG', `Checking connection to ${category}`)

    try {
      const response = API.request(category, { method: 'get' })
      connection.push(category + " - " + response.content.Status)

      Utils.log('LOG', `Status "${response.content.Status}".`)

    } catch (error) {
      switch ((error as HTTPExeption).status) {
        case HTTPExeptions.TooManyRequests:
          connection.push(category + " - " + "To many requests.")

          Utils.log('UNSUCCESS', "To many requests.")

          break;
        case HTTPExeptions.Unauthorized:
          connection.push(category + " - " + "Unauthorized.")

          Utils.log('UNSUCCESS', "Unauthorized.")

          break;
        default:
          throw error;
      }
    }
  }
  SpreadsheetApp.getUi().alert(connection.join('\n'))

  Utils.log("SUCCESS", "checkConnection.")

}
function hideSheets() {
  for (let template in templates) {
    Utils.sheet.get(templates[template].name).hideSheet()
  }
}