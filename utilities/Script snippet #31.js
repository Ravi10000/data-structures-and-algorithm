const fare = [
    {
        "Currency": "INR",
        "PassengerType": 1,
        "PassengerCount": 2,
        "BaseFare": 9504,
        "Tax": 1458,
        "TaxBreakUp": [
            {
                "key": "YR",
                "value": 260
            },
            {
                "key": "K3",
                "value": 490
            },
            {
                "key": "OtherTaxes",
                "value": 708
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
        "BaseFare": 4752,
        "Tax": 729,
        "TaxBreakUp": [
            {
                "key": "YR",
                "value": 130
            },
            {
                "key": "K3",
                "value": 245
            },
            {
                "key": "OtherTaxes",
                "value": 354
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
        "BaseFare": 1300,
        "Tax": 202,
        "TaxBreakUp": [
            {
                "key": "YR",
                "value": 130
            },
            {
                "key": "K3",
                "value": 72
            }
        ],
        "YQTax": 0,
        "AdditionalTxnFeeOfrd": 0,
        "AdditionalTxnFeePub": 0,
        "PGCharge": 0,
        "SupplierReissueCharges": 0
    }
]

function calculateFare(fare){
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
  } = fare;
    BaseFare = BaseFare && BaseFare/PassengerCount;
    Tax = Tax && Tax/PassengerCount;
    OtherCharges = OtherCharges && OtherCharges/PassengerCount;
    ServiceFee = ServiceFee && ServiceFee/PassengerCount;
    AdditionalTxnFeePub = AdditionalTxnFeePub && AdditionalTxnFeePub/PassengerCount;
    AirlineTransFee = AirlineTransFee && AirlineTransFee/PassengerCount;
    CommissionEarned = CommissionEarned && CommissionEarned/PassengerCount;
    IncentiveEarned = IncentiveEarned && IncentiveEarned/PassengerCount;
    PLBEarned = PLBEarned && PLBEarned/PassengerCount;
    TdsOnIncentive = TdsOnIncentive && TdsOnIncentive/PassengerCount;
    TdsOnPLB = TdsOnPLB && TdsOnPLB/PassengerCount;
    TdsOnCommission = TdsOnCommission && TdsOnCommission/PassengerCount;
    
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
        "Currency": "INR",
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
        OfferedFare
    }
}


 // "Fare": {
 //        "Currency": "INR",
 //        "BaseFare": 4752,
 //        "Tax": 764,
 //        "YQTax": 0,
 //        "TransactionFee": 0,
 //        "AdditionalTxnFeeOfrd": 0,
 //        "AdditionalTxnFeePub": 0,
 //        "AirTransFee": 0,
 //        "OtherCharges": 0,
 //        "Discount": 0,
 //        "TdsOnCommission": 96.94,
 //        "TdsOnPLB": 45.96,
 //        "PublishedFare": 5516,
 //        "OfferedFare": 5373.1,
 //        "TdsOnIncentive": 0,
 //        "ServiceFee": 0
 //      }