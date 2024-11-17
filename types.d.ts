declare type HTTPResponse<T> = {
  status: number;
  content: T;
};
declare namespace Nms {
  type Payload = {
    settings: {
      sort?: {
        ascending: boolean;
      };
      filter: {
        textSearch?: string;
        allowedCategoriesOnly?: boolean;
        tagIDs?: Array<any>;
        objectIDs?: Array<any>;
        brands?: Array<any>;
        imtID?: number;
        withPhoto: -1 | 0 | 1;
      };
      cursor: {
        updatedAt?: string;
        nmID?: number;
        limit: number;
      };
    };
  };
  type Query = {
    locale: "ru" | "en" | "zh";
  };
  type Response = {
    cards: Array<{
      nmID: number;
      imtID: number;
      nmUUID: string;
      subjectID: number;
      subjectName: string;
      vendorCode: string;
      brand: string;
      title: string;
      photos: Array<{
        big: string;
        c246x328: string;
        c516x688: string;
        square: string;
        tm: string;
      }>;
      video: string;
      dimensions: {
        length: number;
        width: number;
        height: number;
        isValid: boolean;
      };
      characteristics: Array<{
        id: number;
        name: string;
        value: Array<string>;
      }>;
      sizes: Array<{
        chrtID: number;
        techSize: string;
        skus: Array<string>;
      }>;
      tags?: Array<{
        id: number;
        name: string;
        color: string;
      }>;
      createdAt: string;
      updatedAt: string;
    }>;
    cursor: {
      updatedAt: string;
      nmID: number;
      total: number;
    };
  };
}
declare namespace Orders {
  type Query = {
    dateFrom: string;
    flag?: 0 | 1;
  };
  type Response = Array<{
    date: string;
    lastChangeDate: string;
    warehouseName: string;
    countryName: string;
    oblastOkrugName: string;
    regionName: string;
    supplierArticle: string;
    nmId: number;
    barcode: string;
    category: string;
    subject: string;
    brand: string;
    techSize: string;
    incomeID: number;
    isSupply: boolean;
    isRealization: boolean;
    totalPrice: number;
    discountPercent: number;
    spp: number;
    finishedPrice: number;
    priceWithDisc: number;
    isCancel: boolean;
    cancelDate: string;
    orderType: string;
    sticker: string;
    gNumber: string;
    srid: string;
  }>;
}
declare namespace Sales {
  type Query = Orders.Query;
  type Response = Array<{
    date: string;
    lastChangeDate: string;
    warehouseName: string;
    countryName: string;
    oblastOkrugName: string;
    regionName: string;
    supplierArticle: string;
    nmId: number;
    barcode: string;
    category: string;
    subject: string;
    brand: string;
    techSize: string;
    incomeID: number;
    isSupply: boolean;
    isRealization: boolean;
    totalPrice: number;
    discountPercent: number;
    spp: number;
    paymentSaleAmount: number;
    forPay: number;
    finishedPrice: number;
    priceWithDisc: number;
    saleID: string;
    orderType: string;
    sticker: string;
    gNumber: string;
    srid: string;
  }>;
}
declare namespace Stocks {
  type Query = {
    dateFrom: string;
  };
  type Response = Array<{
    lastChangeDate: string;
    warehouseName: string;
    supplierArticle: string;
    nmId: number;
    barcode: string;
    quantity: number;
    inWayToClient: number;
    inWayFromClient: number;
    quantityFull: number;
    category: string;
    subject: string;
    brand: string;
    techSize: string;
    Price: number;
    Discount: number;
    isSupply: boolean;
    isRealization: boolean;
    SCCode: string;
  }>;
}
declare namespace Products {
  type Query = {
    limit: number;
    offset?: number;
    filterNmID?: number | string;
  };
  type Response = {
    data: {
      listGoods: Array<{
        nmID: number;
        vendorCode: string;
        sizes: Array<{
          sizeID: number;
          price: number;
          discountedPrice: number;
          techSizeName: string;
        }>;
        currencyIsoCode4217: string;
        discount: number;
        editableSizePrice: boolean;
      }>;
    };
  };
}
declare namespace AdLists {
  type Response = {
    adverts: Array<{
      type: number;
      status: number;
      count: number;
      advert_list: Array<{
        advertId: number;
        changeTime: string;
      }>;
    }>;
    all: number;
  };
}
declare namespace AdInfo {
  type Query = {
    status?: -1 | 4 | 7 | 8 | 9 | 11;
    type?: 4 | 5 | 6 | 7 | 8 | 9;
    order?: "create" | "change" | "id";
    direction?: "desc" | "asc";
  };
  type Payload = Array<number>;
  type Response = Array<
    | {
        endTime: string;
        createTime: string;
        changeTime: string;
        startTime: string;
        name: string;
        params: Array<{
          intervals: Array<{
            begin: number;
            end: number;
          }>;
          price: number;
          subjectId: number;
          subjectName: string;
          nms: Array<{
            nm: number;
            active: boolean;
          }>;
          active: boolean;
        }>;
        dailyBudget: number;
        advertId: number;
        status: number;
        type: 4 | 5 | 6 | 7;
        paymentType: string;
        searchPluseState: boolean;
      }
    | {
        endTime: string;
        createTime: string;
        changeTime: string;
        startTime: string;
        autoParams: {
          subject: {
            name: string;
            id: number;
          };
          sets: Array<{
            name: string;
            id: number;
          }>;
          menus: Array<{
            id: number;
            name: string;
          }>;
          nms: Array<number>;
          active: {
            carousel: boolean;
            recom: boolean;
            booster: boolean;
          };
          nmCPM: Array<{
            nm: number;
            cpm: number;
          }>;
          cpm: number;
        };
        name: string;
        dailyBudget: number;
        advertId: number;
        status: number;
        type: 8;
        paymentType: string;
      }
    | {
        endTime: string;
        createTime: string;
        changeTime: string;
        startTime: string;
        searchPluseState: boolean;
        name: string;
        unitedParams: Array<{
          subject: {
            id: number;
            name: string;
          };
          menus: Array<{
            id: number;
            name: string;
          }>;
          nms: Array<number>;
          searchCPM: number;
          catalogCPM: number;
        }>;
        dailyBudget: number;
        advertId: number;
        status: number;
        type: 9;
        paymentType: string;
      }
  >;
}
declare namespace AdStats {
  namespace Payload {
    type WithDate = Array<{
      id: number;
      dates?: Array<string>;
    }>;
    type WithInterval = Array<{
      id: number;
      interval: {
        begin: string;
        end: string;
      };
    }>;
  }
  namespace Response {
    type WithDate = Array<{
      views: number;
      clicks: number;
      ctr: number;
      cpc: number;
      sum: number;
      atbs: number;
      orders: number;
      cr: number;
      shks: number;
      sum_price: number;
      dates: Array<string>;
      days: Array<{
        date: string;
        views: number;
        clicks: number;
        ctr: number;
        cpc: number;
        sum: number;
        atbs: number;
        orders: number;
        cr: number;
        shks: number;
        sum_price: number;
        apps: Array<{
          views: number;
          clicks: number;
          ctr: number;
          cpc: number;
          sum: number;
          atbs: number;
          orders: number;
          cr: number;
          shks: number;
          sum_price: number;
          nm: Array<{
            views: number;
            clicks: number;
            ctr: number;
            cpc: number;
            sum: number;
            atbs: number;
            orders: number;
            cr: number;
            shks: number;
            sum_price: number;
            name: string;
            nmId: number;
          }>;
          appType: number;
        }>;
      }>;
      boosterStats: Array<{
        date: string;
        nm: number;
        avg_position: number;
      }>;
      advertId: number;
    }>;
    type WithInterval = Array<{
      interval: {
        begin: string;
        end: string;
      };
      views: number;
      clicks: number;
      ctr: number;
      cpc: number;
      sum: number;
      atbs: number;
      orders: number;
      cr: number;
      shks: number;
      sum_price: number;
      days: Array<{
        date: string;
        views: number;
        clicks: number;
        ctr: number;
        cpc: number;
        sum: number;
        atbs: number;
        orders: number;
        cr: number;
        shks: number;
        sum_price: number;
        apps: Array<{
          views: number;
          clicks: number;
          ctr: number;
          cpc: number;
          sum: number;
          atbs: number;
          orders: number;
          cr: number;
          shks: number;
          sum_price: number;
          nm: Array<{
            views: number;
            clicks: number;
            ctr: number;
            cpc: number;
            sum: number;
            atbs: number;
            orders: number;
            cr: number;
            shks: number;
            sum_price: number;
            name: string;
            nmId: number;
          }>;
          appType: number;
        }>;
      }>;
      boosterStats: Array<{
        date: string;
        nm: number;
        avg_position: number;
      }>;
      advertId: number;
    }>;
  }
}
declare namespace PcStats {
  type Payload = {
    nmIDs: Array<number>;
    period: {
      begin: string;
      end: string;
    };
    timezone?: string;
    aggregationLevel?: string;
  };
  type Response = {
    data: Array<{
      nmID: number;
      imtName: string;
      vendorCode: string;
      history: Array<{
        dt: string;
        openCardCount: number;
        addToCartCount: number;
        ordersCount: number;
        ordersSumRub: number;
        buyoutsCount: number;
        buyoutsSumRub: number;
        buyoutPercent: number;
        addToCartConversion: number;
        cartToOrderConversion: number;
      }>;
    }>;
    error: boolean;
    errorText: string;
    additionalErrors: Array<{
      field: string;
      description: string;
    }>;
  };
}
declare interface UtilsInterface {
  request(
    url: "https://content-api.wildberries.ru/content/v2/get/cards/list",
    options: { query: Nms.Query; payload?: Nms.Payload }
  ): HTTPResponse<Nms.Response>;
  request(
    url: "https://statistics-api.wildberries.ru/api/v1/supplier/orders",
    options: { query: Orders.Query }
  ): HTTPResponse<Orders.Response>;
  request(
    url: "https://statistics-api.wildberries.ru/api/v1/supplier/sales",
    options: { query: Sales.Query }
  ): HTTPResponse<Sales.Response>;
  request(
    url: "https://statistics-api.wildberries.ru/api/v1/supplier/stocks",
    options: { query: Stocks.Query }
  ): HTTPResponse<Stocks.Response>;
  request(
    url: "https://discounts-prices-api.wildberries.ru/api/v2/list/goods/filter",
    options: { query: Products.Query }
  ): HTTPResponse<Products.Response>;
  request(
    url: "https://advert-api.wildberries.ru/adv/v1/promotion/count"
  ): HTTPResponse<AdLists.Response>;
  request(
    url: "https://advert-api.wildberries.ru/adv/v1/promotion/adverts",
    options: { query?: AdInfo.Query; payload: AdInfo.Payload }
  ): HTTPResponse<Nms.Response>;
  request(
    url: "https://advert-api.wildberries.ru/adv/v2/fullstats",
    options: { payload: AdStats.Payload.WithDate }
  ): HTTPResponse<AdStats.Response.WithDate>;
  request(
    url: "https://advert-api.wildberries.ru/adv/v2/fullstats",
    options: { payload: AdStats.Payload.WithInterval }
  ): HTTPResponse<AdStats.Response.WithInterval>;
  request(
    url: "https://seller-analytics-api.wildberries.ru/api/v2/nm-report/detail/history",
    options: { payload: PcStats.Payload }
  ): HTTPResponse<PcStats.Response>;
}
