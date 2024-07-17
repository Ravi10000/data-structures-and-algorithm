const fares = {
    1: {},
    2: {},
    3: {},
  };

function distributeFare(fare) {
  let {
    BaseFare = 0,
    Tax = 0,
    OtherCharges = 0,
    ServiceFee = 0,
    AdditionalTxnFeePub = 0,
    AirlineTransFee = 0,
    CommissionEarned = 0,
    IncentiveEarned = 0,
    PLBEarned = 0,
    TdsOnIncentive = 0,
    TdsOnPLB = 0,
    TdsOnCommission = 0,
    YQTax = 0,
    TransactionFee = 0,
    AdditionalTxnFeeOfrd = 0,
    AirTransFee = 0,
    Discount = 0,
    PassengerCount,
  } = fare;

  BaseFare = BaseFare && BaseFare / PassengerCount;
  Tax = Tax && Tax / PassengerCount;
  OtherCharges = OtherCharges && OtherCharges / PassengerCount;
  ServiceFee = ServiceFee && ServiceFee / PassengerCount;
  AdditionalTxnFeePub =
    AdditionalTxnFeePub && AdditionalTxnFeePub / PassengerCount;
  AirlineTransFee = AirlineTransFee && AirlineTransFee / PassengerCount;
  CommissionEarned = CommissionEarned && CommissionEarned / PassengerCount;
  IncentiveEarned = IncentiveEarned && IncentiveEarned / PassengerCount;
  PLBEarned = PLBEarned && PLBEarned / PassengerCount;
  TdsOnIncentive = TdsOnIncentive && TdsOnIncentive / PassengerCount;
  TdsOnPLB = TdsOnPLB && TdsOnPLB / PassengerCount;
  TdsOnCommission = TdsOnCommission && TdsOnCommission / PassengerCount;
  YQTax = YQTax && YQTax / PassengerCount;
  TransactionFee = TransactionFee && TransactionFee / PassengerCount;
  AdditionalTxnFeeOfrd =
    AdditionalTxnFeeOfrd && AdditionalTxnFeeOfrd / PassengerCount;
  AirTransFee = AirTransFee && AirTransFee / PassengerCount;
  Discount = Discount && Discount / PassengerCount;

  const PublishedFare =
    BaseFare +
    Tax +
    OtherCharges +
    ServiceFee +
    AdditionalTxnFeePub +
    AirlineTransFee;
  const OfferedFare =
    PublishedFare -
    (CommissionEarned + IncentiveEarned + PLBEarned + AdditionalTxnFeePub);

  return {
    Currency: "INR",
    BaseFare,
    Tax,
    YQTax,
    TransactionFee,
    AdditionalTxnFeeOfrd,
    AdditionalTxnFeePub,
    AirTransFee,
    OtherCharges,
    Discount,
    TdsOnCommission,
    TdsOnPLB,
    TdsOnIncentive,
    ServiceFee,
    PublishedFare,
    OfferedFare,
  };
}

const breakdown =[
                {
                    "Currency": "INR",
                    "PassengerType": 1,
                    "PassengerCount": 1,
                    "BaseFare": 3269,
                    "Tax": 731,
                    "TaxBreakUp": [
                        {
                            "key": "YR",
                            "value": 170
                        },
                        {
                            "key": "INTax",
                            "value": 62
                        },
                        {
                            "key": "K3",
                            "value": 172
                        },
                        {
                            "key": "OtherTaxes",
                            "value": 327
                        }
                    ],
                    "YQTax": 0,
                    "AdditionalTxnFeeOfrd": 0,
                    "AdditionalTxnFeePub": 0,
                    "PGCharge": 0,
                    "SupplierReissueCharges": 0
                },
                {
                    "Currency": "INR",
                    "PassengerType": 3,
                    "PassengerCount": 1,
                    "BaseFare": 1500,
                    "Tax": 254,
                    "TaxBreakUp": [
                        {
                            "key": "YR",
                            "value": 170
                        },
                        {
                            "key": "K3",
                            "value": 84
                        }
                    ],
                    "YQTax": 0,
                    "AdditionalTxnFeeOfrd": 0,
                    "AdditionalTxnFeePub": 0,
                    "PGCharge": 0,
                    "SupplierReissueCharges": 0
                },
                {
                    "Currency": "INR",
                    "PassengerType": 2,
                    "PassengerCount": 1,
                    "BaseFare": 2943,
                    "Tax": 715,
                    "TaxBreakUp": [
                        {
                            "key": "YR",
                            "value": 170
                        },
                        {
                            "key": "INTax",
                            "value": 62
                        },
                        {
                            "key": "K3",
                            "value": 156
                        },
                        {
                            "key": "OtherTaxes",
                            "value": 327
                        }
                    ],
                    "YQTax": 0,
                    "AdditionalTxnFeeOfrd": 0,
                    "AdditionalTxnFeePub": 0,
                    "PGCharge": 0,
                    "SupplierReissueCharges": 0
                }
            ]


const passengers = [1, 2, 3]

function createBookRequestBody(breakDown) {
  const fares = {
    1: {},
    2: {},
    3: {},
  };
  breakDown?.forEach((fare) => {
    fares[fare.PassengerType] = distributeFare(fare);
  });
  return fares;
}

console.log(createBookRequestBody(breakdown));