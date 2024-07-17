function calculateFare(fare) {
  if (!fare) return { publishedPrice: 0, offeredPrice: 0, netPayable: 0 };
  const {
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
  } = fare;
  const publishedPrice =
    BaseFare +
    Tax +
    OtherCharges +
    ServiceFee +
    AdditionalTxnFeePub +
    AirlineTransFee;
  const offeredPrice =
    publishedPrice -
    (CommissionEarned + IncentiveEarned + PLBEarned + AdditionalTxnFeePub);
  const netPayable = offeredPrice + TdsOnIncentive + TdsOnPLB + TdsOnCommission;

  return { publishedPrice, offeredPrice, netPayable };
}

calculateFare({
                "Currency": "INR",
                "BaseFare": 7712,
                "Tax": 1700,
                "TaxBreakup": [
                    {
                        "key": "K3",
                        "value": 412
                    },
                    {
                        "key": "YQTax",
                        "value": 0
                    },
                    {
                        "key": "YR",
                        "value": 510
                    },
                    {
                        "key": "PSF",
                        "value": 0
                    },
                    {
                        "key": "UDF",
                        "value": 0
                    },
                    {
                        "key": "INTax",
                        "value": 124
                    },
                    {
                        "key": "TransactionFee",
                        "value": 0
                    },
                    {
                        "key": "OtherTaxes",
                        "value": 654
                    }
                ],
                "YQTax": 0,
                "AdditionalTxnFeeOfrd": 0,
                "AdditionalTxnFeePub": 0,
                "PGCharge": 0,
                "OtherCharges": 0,
                "ChargeBU": [
                    {
                        "key": "TBOMARKUP",
                        "value": 0
                    },
                    {
                        "key": "GLOBALPROCUREMENTCHARGE",
                        "value": 0
                    },
                    {
                        "key": "CONVENIENCECHARGE",
                        "value": 0
                    },
                    {
                        "key": "OTHERCHARGE",
                        "value": 0
                    }
                ],
                "Discount": 0,
                "PublishedFare": 9412,
                "CommissionEarned": 25.47,
                "PLBEarned": 12.68,
                "IncentiveEarned": 0,
                "OfferedFare": 9373.85,
                "TdsOnCommission": 1.27,
                "TdsOnPLB": 0.63,
                "TdsOnIncentive": 0,
                "ServiceFee": 0,
                "TotalBaggageCharges": 0,
                "TotalMealCharges": 0,
                "TotalSeatCharges": 0,
                "TotalSpecialServiceCharges": 0
            })