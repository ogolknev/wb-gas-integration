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
  adInfo8: {
    name: "API ☍ РК инфо. Авто",
    template: [
      [
        "Дата завершения кампании",
        "Время создания кампании",
        "Время последнего изменения кампании",
        "Дата последнего запуска кампании",
        "Название кампании",
        "Дневной бюджет",
        "ID кампании",
        "Статус кампании",
        "Тип кампании",
        "Модель оплаты",
        "Авто. ID предмета",
        "Авто. Название предмета",
        "Авто. Внутренняя (системная) сущность (пол + предмет)",
        "Авто. Меню",
        "Авто. Зоны показов. Карточка товара",
        "Авто. Зоны показов. Рекомендации на главной",
        "Авто. Зоны показов. Аукцион",
        "Авто. Массив номенклатур кампании",
        "Авто. Артикул WB",
        "Авто. Ставка",
        "Авто. Ставка, указанная при создании кампании."
      ],
    ],
  },
  adInfo9: {
    name: "API ☍ РК инфо. Аукцион",
    template: [
      [
        "Дата завершения кампании",
        "Время создания кампании",
        "Время последнего изменения кампании",
        "Дата последнего запуска кампании",
        "Название кампании",
        "Дневной бюджет",
        "ID кампании",
        "Статус кампании",
        "Тип кампании",
        "Модель оплаты",
        "Аукцион. ID предмета",
        "Аукцион. Название предмета",
        "Аукцион. Меню",
        "Аукцион. Массив номенклатур кампании",
        "Аукцион. Ставка в поиске",
        "Аукцион. Ставка в Каталоге",
        "Аукцион. Активность фиксированных фраз",
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
        "Дневной бюджет",
        "ID кампании",
        "Статус кампании",
        "Тип кампании",
        "Модель оплаты",
        "Устаревшие типы. Название предметной группы",
        "Устаревшие типы. ID предметной группы",
        "Устаревшие типы. Флаг активности предметной группы",
        "Устаревшие типы. Интервалы часов показа кампании",
        "Устаревшие типы. Текущая ставка",
        "Устаревшие типы. Массив номенклатур кампании",
        "Устаревшие типы. Активность фиксированных фраз",
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
  }
};
enum HTTPExeptions {
  BadRequest = 400,
  Unauthorized = 401,
  AccessDenied = 403,
  UnprocessableEntity = 422,
  TooManyRequests = 429,
}
class ScriptProps {
  static props = PropertiesService.getScriptProperties();
  static getDisposableTriggers() {
    let disposableTriggers: string[] = JSON.parse(
      this.props.getProperty("disposableTriggers") ?? "null"
    );
    if (!disposableTriggers) disposableTriggers = [];
    return disposableTriggers;
  }
  static setDisposableTriggers(value: string[]) {
    this.props.setProperty("disposableTriggers", JSON.stringify(value));
  }
}
class ScriptCache {
  static props = CacheService.getScriptCache();
}

function execTest() {
  getAdStats({ begin: "2024-11-01", end: "2024-11-10" })
}

function checkConnection() {
  Utils.log("START", "checkConnection.")
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
      Utils.log('LOG', `Status "${response.content.Status}".`)
    } catch (error) {
      switch ((error as HTTPExeption).status) {
        case HTTPExeptions.TooManyRequests:
          Utils.log('WARN', "To many requests.")
          break;
        case HTTPExeptions.Unauthorized:
          Utils.log('WARN', "Unauthorized.")
          break;
        default:
          throw error;
      }
    }
  }
  Utils.log("SUCCESS", "checkConnection.")
}
function hideSheets() {
  for (let template in templates) {
    Utils.sheet.get(templates[template].name).hideSheet()
  }
}

function getNms() {
  const toSheetData = (content: Nms.Response) => {
    Utils.log('LOG', `Formatting response to sheet data.`)
    let data: any[][] = [];
    content.cards.forEach((card) => {
      data.push([
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
      ]);
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
      template: templates.nms.template,
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
    }
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
  flag: 1 | 0 = 1
) {
  const toSheetData = (content: Orders.Response) => {
    Utils.log('LOG', `Formatting response to sheet data.`)
    let data: any[][] = [];
    content.forEach((order) => {
      data.push([
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
      ]);
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
        template: templates.orders.template,
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
  flag: 1 | 0 = 1
) {
  const toSheetData = (content: Sales.Response) => {
    Utils.log('LOG', `Formatting response to sheet data.`)
    const data: any[][] = [];
    content.forEach((sale) => {
      data.push([
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
      ]);
    });
    return data;
  };
  try {
    Utils.log('START', 'getSales.')
    let query: Sales.Query = { dateFrom, flag };
    let response = API.getSales(query);
    Utils.sheet.put(templates.sales.name, toSheetData(response.content), 0, 1, {
      template: templates.sales.template,
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
function getStocks(dateFrom: string = Utils.date.toString(new Date())) {
  const toSheetData = (content: Stocks.Response) => {
    Utils.log('LOG', `Formatting response to sheet data.`)
    const data: any[][] = [];
    content.forEach((stocks) => {
      data.push([
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
      ]);
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
      0,
      1,
      {
        template: templates.stocks.template,
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
  limit: number = 1000,
  offset: number = 0,
  filterNmID?: number
) {
  const toSheetData = (content: Products.Response) => {
    Utils.log('LOG', `Formatting response to sheet data.`)
    const data: any[][] = [];
    content.data.listGoods.forEach((product) => {
      product.sizes.forEach((size) => {
        data.push([
          product.nmID,
          product.vendorCode,
          size.sizeID,
          size.price,
          size.discountedPrice,
          size.techSizeName,
          product.currencyIsoCode4217,
          product.discount,
          product.editableSizePrice,
        ]);
      });
    });
    return data;
  };
  try {
    Utils.log('START', 'getProducts.')
    let query: Products.Query = { limit, offset, filterNmID };
    let response = API.getProducts(query);
    Utils.sheet.put(
      templates.products.name,
      toSheetData(response.content),
      0,
      1,
      {
        template: templates.products.template,
      }
    );
    while (response.content.data.listGoods.length >= 1000) {
      offset += 1000;
      let query: Products.Query = { limit, offset, filterNmID };
      let response = API.getProducts(query);
      Utils.sheet.put(
        templates.products.name,
        toSheetData(response.content),
        0,
        1,
        {
          template: templates.products.template,
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
function getAdLists() {
  const toSheetData = (content: AdLists.Response) => {
    Utils.log('LOG', `Formatting response to sheet data.`)
    const data: any[][] = [];
    content.adverts.forEach((adList) => {
      adList.advert_list.forEach((ad) => {
        data.push([
          adList.type,
          adList.status,
          adList.count,
          ad.advertId,
          ad.changeTime,
        ]);
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
      { clear: true, template: templates.adLists.template }
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
function getAdInfo(adIds?: number[], query: AdInfo.Query = {}) {
  if (!adIds) {
    Utils.log('LOG', "No adIds in args. Receiving it from adLists.")
    const sheet = Utils.sheet.get(templates.adLists.name);
    adIds = sheet
      .getRange(2, 4, sheet.getLastRow() - 1, 1)
      .getValues()
      .flat();
  }
  const toSheetData = (content: AdInfo.Response) => {
    Utils.log('LOG', `Formatting response to sheet data.`)
    const dataDeprecated: any[][] = [];
    const dataType8: any[][] = []
    const dataType9: any[][] = []
    content.forEach((ad, index) => {
      try {
        const line: (number | string | boolean)[] = [
          ad.endTime,
          ad.createTime,
          ad.changeTime,
          ad.startTime,
          ad.name,
          ad.dailyBudget,
          ad.advertId,
          ad.status,
          ad.type,
          ad.paymentType
        ]
        switch (ad.type) {
          case 8:
            if (ad.autoParams.nmCPM) {
              ad.autoParams.nmCPM.forEach(nm => {
                dataType8.push(line.concat([
                  ad.autoParams.subject.id,
                  ad.autoParams.subject.name,
                  JSON.stringify(ad.autoParams.sets),
                  JSON.stringify(ad.autoParams.menus),
                  ad.autoParams.active.carousel,
                  ad.autoParams.active.recom,
                  ad.autoParams.active.booster,
                  JSON.stringify(ad.autoParams.nms),
                  nm.nm,
                  nm.cpm,
                  ad.autoParams.cpm
                ]))
              })
            }
            break;
          case 9:
            ad.unitedParams.forEach(param => {
              dataType9.push(line.concat([
                param.subject.id,
                param.subject.name,
                JSON.stringify(param.menus),
                JSON.stringify(param.nms),
                param.searchCPM,
                param.catalogCPM,
                ad.searchPluseState
              ]))
            })
            break;
          default:
            ad.params.forEach(param => {
              dataDeprecated.push(line.concat([
                param.subjectName,
                param.subjectId,
                param.active,
                JSON.stringify(param.intervals),
                param.price,
                JSON.stringify(param.nms),
                ad.searchPluseState
              ]))
            })

        }
      } catch (error) {
        Utils.log("WARN", `On line ${index + 1}:\n` + JSON.stringify(ad));
      }
    });
    return {
      dataType8,
      dataType9,
      dataDeprecated
    };
  };
  try {
    Utils.log('START', 'getAdInfo.')
    let payload: AdInfo.Payload = adIds;
    let response = API.getAdInfo(payload, query);
    const { dataType8, dataType9, dataDeprecated } = toSheetData(response.content)
    Utils.sheet.put(
      templates.adInfo8.name,
      dataType8,
      0,
      1,
      { clear: true, template: templates.adInfo8.template }
    );
    Utils.sheet.put(
      templates.adInfo9.name,
      dataType9,
      0,
      1,
      { clear: true, template: templates.adInfo9.template }
    );
    Utils.sheet.put(
      templates.adInfoDeprecated.name,
      dataDeprecated,
      0,
      1,
      { clear: true, template: templates.adInfoDeprecated.template }
    );
    Utils.log('SUCCESS', 'getAdInfo.')
  } catch (error) {
    switch ((error as HTTPExeption).status) {
      case HTTPExeptions.TooManyRequests:
        Utils.triggers.after("getAdInfo", 1000 * 60);
        break;
      default:
        throw error;
    }
  }
}
function getAdStats(dates: string[], adIds?: number[]): void
function getAdStats(interval: { begin: string, end: string }, adIds?: number[]): void
function getAdStats(datesOrInterval: string[] | { begin: string, end: string }, adIds?: number[]) {
  if (!adIds) {
    Utils.log('LOG', "No adIds in args. Receiving it from adLists.")
    const sheet = Utils.sheet.get(templates.adLists.name);
    adIds = sheet
      .getRange(2, 4, sheet.getLastRow() - 1, 1)
      .getValues()
      .flat();
  }
  const toSheetData = (content: AdStats.Response.WithDate | AdStats.Response.WithInterval) => {
    Utils.log('LOG', `Formatting response to sheet data.`)
    let line: (string | number | boolean)[]
    const data: any[][] = []
    content.forEach((ad: AdStats.Response.WithDate[number] | AdStats.Response.WithInterval[number]) => {
      ad.days.forEach(day => {
        day.apps.forEach(app => {
          app.nm.forEach(nm => {
            data.push([
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
            ])
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
        { template: templates.adStats.template }
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
function getPcStats() {

}

///////////////////// utils /////////////////////
class Utils {
  static log = (
    type: "START" | "LOG" | "SUCCESS" | "WARN" | "ERROR",
    message: string
  ) => {
    if (type === "SUCCESS" || type === "ERROR") TABS--;
    if (type === "WARN") console.warn(TAB.repeat(TABS) + `[${type}] ` + message);
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
      let disposableTriggers = ScriptProps.getDisposableTriggers();
      disposableTriggers.push(trigger.getUniqueId());
      ScriptProps.setDisposableTriggers(disposableTriggers);
      Utils.log("SUCCESS", `Adding trigger to "disposableTriggers" completed.`);
    },
    clear: (functionName?: string, disposable: boolean = true) => {
      Utils.log("START", `Clear disposable triggers.`);
      let disposableTriggers = ScriptProps.getDisposableTriggers();
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
}
class API {
  private static access = (() => {
    {
      return "eyJhbGciOiJFUzI1NiIsImtpZCI6IjIwMjQwOTA0djEiLCJ0eXAiOiJKV1QifQ.eyJlbnQiOjEsImV4cCI6MTc0MjQ1NzE3NiwiaWQiOiIwMTkyMDZiMS1lYTY3LTc3NTgtOTZkMS1jYjM3MGFmNTE2MTAiLCJpaWQiOjk5NjcyODgyLCJvaWQiOjEwNjUzOSwicyI6MTA3Mzc0NTQwNiwic2lkIjoiNmEyMTI2NTctZDY2YS01YzdkLWI0ZGMtM2ExZTk5NTljMzI5IiwidCI6ZmFsc2UsInVpZCI6OTk2NzI4ODJ9.t3Z4UMkqr1Ag7EFcpIS2FdbUp2z90uTCI01fIoAXR679eje8-qQP9VjINS5cqkOabhy7PkcbULRiZdYEMiWd0A";
    }
  })();
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
  ): HTTPResponse<AdInfo.Response> {
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
