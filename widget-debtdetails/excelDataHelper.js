/* eslint-disable */
const moment = require("moment");
const _ = require("lodash");
const { capstructurePageLocationEnum, removeDashes } = require("../../common/commonUtils.js");

const capStructureHeaderText = "Capital Structure: ";

const dateToMonthAndYear = (date) => moment(date).format("DD MMM YYYY");

const checkNumeric = (value) => {
    if (!isNaN(value) && isFinite(value)) {
        return value;
    } else {
        return 0;
    }
};

const getMaturiyDate = (maturity) => {
    let date;
    date = (maturity === "--") ? maturity : (dateToMonthAndYear(maturity));
    return date;
};
const getFxRate = (CurrencyCode, debtCurrency, CurrencyCodeAndExchangeRatePairs) => {
    if (debtCurrency === CurrencyCode) {
        return Number(1);
    } else {
        if (Array.isArray(CurrencyCodeAndExchangeRatePairs) && CurrencyCodeAndExchangeRatePairs.length > 0) {
                const filteredCurrency = CurrencyCodeAndExchangeRatePairs.filter((obj) => {
                    return (obj.CurrencyCode === debtCurrency);
                });
            return filteredCurrency[0].ExchangeRate;
        }
    }
};
const getComments = (comments) => {
    let value;
    if (comments === "NULL") {
        value = "--";
    } else if (_.isArray(comments)) {
        value = _.join(_.map(comments, "CommentText"), " , ");
    } else {
        value = " ";
    }
    return value;
};
const getCoupon = (coupon) => {
    let value;
    if (coupon === "--") {
        value = "--";
    } else if (typeof (coupon) === "number") {
        value = coupon.toFixed(3);
    } else if (typeof (coupon) === "string") {
        value = coupon;
    } else {
        value = coupon;
    }
    return value;
};
const getCallSchedules = (callSchedules) => {
    const combinedValue = (data) => {
        return dateToMonthAndYear(data.Date.$date) + " — " + data.Price;
    };
    let value;
    if (callSchedules === "--") {
        value = callSchedules;
    } else if (_.isArray(callSchedules)) {
        value = _.map(callSchedules, combinedValue);
        value = value.join("\r\n");
    } else {
        value = " ";
    }
    return value;
};
const getGuarantors = (guarantors) => {
    const combinedValue = (data) => {
        return `${data.AmountGuaranteed}% — ${data.GuarantorEntity.EntityName}`;
    };
    let guarantor;
    if (guarantors === "NULL") {
        guarantor = "--";
    } else if (_.isArray(guarantors)) {
        guarantor = _.map(guarantors, combinedValue);
        guarantor = guarantor.join("\r\n");
    }
    return guarantor;
}
const getAmort = (amort) => {
    const { amortizationList } = amort;
    let value = [];
    if (Array.isArray(amortizationList)) {
        amortizationList.map((list) => {
            value.push(`${list.value}`);
        });
    }
    return value;
};
const getTotalAmort = (amort) => {
    const { amortizationList } = amort;
    let totalValue = 0;
    if (Array.isArray(amortizationList)) {
        amortizationList.map((list) => {
            if (list.value === "NULL" || list.value === "--" || isNaN(list.value)) {
                totalValue += 0;
            } else if (checkNumeric(list.value)) {
                totalValue += Number(list.value);
            } else {
                totalValue += 0;
            }
        });
    }
    return totalValue;
};
const getAmortInProfileCurrency = (amort) => {
    const { amortizationList } = amort;
    let value = [];
    if (Array.isArray(amortizationList)) {
        amortizationList.map((list) => {
            value.push(`${list.value}`);
        });
    }
    return value;
};
const getTotalAmortInProfileCurrency = (amort) => {
    const { amortizationList } = amort;
    let totalValue = 0;
    if (Array.isArray(amortizationList)) {
        amortizationList.map((list) => {
            if (list.value === "NULL" || list.value === "--" || isNaN(list.value)) {
                totalValue += 0;
            } else if (checkNumeric(list.value)) {
                totalValue += Number(list.value);
            } else {
                totalValue += 0;
            }
        });
    }
    return totalValue;
};
const getSourceDocInfo = (sourceDocs) => {
    let value;
    const combinedValue = function combinedValue(data) {
        return data.DocType + " — " + dateToMonthAndYear(data.DocDate.$date);
    };
    if (sourceDocs === "NULL" && !Array.isArray(sourceDocs)) {
        value = "--";
    } else if (Array.isArray(sourceDocs)) {
        value = _.map(sourceDocs, combinedValue);
        value = value.join("\r\n");;
    }
    return value;
};
const getSourceDocLink = (sourceDocs) => {
    let value;
    const combinedValue = (data) => { 
        return data.DocUrl 
    };
    if (sourceDocs === "NULL" && !Array.isArray(sourceDocs)) {
        value = "--";
    } else if (Array.isArray(sourceDocs)) {
        value = _.map(sourceDocs, combinedValue);
        value = value.join("\r\n");;
    } else {
        value = " — ";
    }
    return value;
};
const getMisCovenantQuality = (link) => {
    let linkValue;
    linkValue = (link === "NULL") ? "--" : link;

    return linkValue;
};
const getMaBondRating = (rating) => {
    let bondRating;
    bondRating = (rating.length === 0) ? "--" : rating;

    return bondRating;
};


const debtDetailsColumn = [
    "Notes",
    "Coupon (%)",
    "Maturity",
    "Debt Description",
    "Entity",
    "Currency\r\n(Issuance)",
    "Currency\r\n(Reporting)",
    "FX Rate\r\n(Issuance : Reporting)",
    "Issued Amount\r\n(Issuance)",
    "Issued Amount\r\n(Reporting)",
    "Outstanding Amount\r\n(Issuance)",
    "Outstanding Amount\r\n(Reporting)",
    "Drawable Amount\r\n(Issuance)",
    "Drawable Amount\r\n(Reporting)",
    "Call Schedule",
    "Amortization\r\n(Type)",
    "Priority Of Claim",
    "Debt Class",
    "Security",
    "Guarantors",
    "Source Document Info",
    "Source Document Link",
    "CUSIP",
    "ISIN",
    "MIS Covenant Quality Assessment",
    "MA Bond Implied Ratings"
];
// TODO refactor into small functions
const getDebtDetailsTable = function (props, capStructure) {
    const {
            originalDebts,
            debtMaturityAmortsTable,
            debtMaturityAmortYears,
            profileData
        } = props;

    const entityName = profileData.Entity.EntityName; // 1st row value
    const HeaderText = capStructureHeaderText + capstructurePageLocationEnum.debtDetails.display; // 2nd row value
    const asOfDate = `As of ${moment(profileData.AsOfDate.$date).format("Do MMM YYYY")}`; // 3rd row value
    const moneyUnit = "Amounts in Millions"; // 4th row value

    const headerColumn = Array(debtDetailsColumn.length).join(" ").split("");
    const emptyColumn = Array(debtDetailsColumn.length + 1).join(" ").split("");

    const firstColumn = [];
    firstColumn.push({name: entityName, value: entityName, metadata: { style: 1 } }, ...headerColumn);

    const secondColumn = [];
    secondColumn.push(HeaderText, ...headerColumn);

    const thirdColumn = [];
    thirdColumn.push(asOfDate, ...headerColumn);

    const fourthColumn = [];
    fourthColumn.push(moneyUnit, ...headerColumn);

    const CurrencyCodeAndExchangeRatePairs = [];
    const { CurrencyCode, ProfileCurrencies } = profileData;

    if (ProfileCurrencies && ProfileCurrencies !== "NULL") {
        ProfileCurrencies.forEach((currencyItem) => {
            CurrencyCodeAndExchangeRatePairs.push({
                CurrencyCode: currencyItem.CurrencyCode,
                ExchangeRate: currencyItem.ExchangeRate
            });
        });
    }
    const getAmortization = function (debt) {
        const colText = "Amrt (Issu)\r\n";
        const dataArray = [];
        const { amortization } = debt;
        const { amortizationList } = amortization;
        amortizationList.forEach((obj) => {
            dataArray.push(colText + obj.text);
        });
        dataArray.push("Amrt (Issu)\r\n Total");
        return dataArray;
    };
    const getAmortizationReporting = function (debt) {
        const colText = "Amrt (Rptg)\r\n";
        const dataArray = [];
        const { amortizationInProfileCurrency } = debt;
        const { amortizationList } = amortizationInProfileCurrency;
        amortizationList.forEach((obj) => {
            dataArray.push(colText + obj.text);
        });
        dataArray.push("Amrt (Rptg)\r\n Total");
        return dataArray;
    };
    const amortizationColumn = getAmortization(originalDebts[0]);
    const amortizationReportingColumn = getAmortizationReporting(originalDebts[0]);

    const debtDetailsAllColumns = [
        ...debtDetailsColumn,
        ...amortizationColumn,
        ...amortizationReportingColumn].map((col) => { 
                                            return {
                                                value: col,
                                                metadata: {
                                                    style: 1 
                                                }
                                            }
                                        });
    const data = [];
    data.push(firstColumn, secondColumn, thirdColumn, fourthColumn, emptyColumn, emptyColumn, debtDetailsAllColumns);
    const originalDebtsCopy = originalDebts.slice();
    //  Debt Details Tab: debt rows should be ordered by Priority of Claim with 1 at the top and ascending larger downwards. 
    /// Within duplicate Priority of Claim numbers, order by Maturity with the most recent maturity at the top
    originalDebtsCopy.sort((a, b) => {
        if (a.priorityOfClaimSort == b.priorityOfClaimSort) {
            if(a.maturity == "--"){
                return b.maturity =="--" ? 0 : 1;
            } else if(b.maturity == "--"){
                return a.maturity =="--" ? 0 : -1;
            } 
            return (a.maturity < b.maturity) ? 1 : (a.maturity > b.maturity) ? -1 : 0;
        } else {
            return (a.priorityOfClaimSort < b.priorityOfClaimSort) ? -1 : 1;
        }
    })

    originalDebtsCopy.forEach(function (debt) {
        const colData = [];
        colData.push(getComments(debt.comments));
        colData.push(getCoupon(debt.coupon));
        colData.push(getMaturiyDate(debt.maturity));
        colData.push(debt.debtDesc);
        colData.push(debt.entityName);
        colData.push(debt.currency);
        colData.push(debt.reportingCurrency);
        colData.push(getFxRate(CurrencyCode, debt.currency, CurrencyCodeAndExchangeRatePairs));
        colData.push(debt.amountsIssued);
        colData.push(debt.amountsIssuedInProfileCurrency);
        colData.push(debt.amountsOutstanding);
        colData.push(debt.amountsOutstandingInProfileCurrency);
        colData.push(debt.amountsDrawable);
        colData.push(debt.amountsDrawableInProfileCurrency);
        colData.push({ value: getCallSchedules(debt.callSchedules), metadata: { style: 2 } });
        colData.push(debt.amortization.amortizationDescription);
        colData.push(debt.priorityOfClaimSort);
        colData.push(debt.debtClassInWord);
        colData.push(debt.security);
        colData.push({ value: getGuarantors(debt.guarantors), metadata: { style: 2 } });
        colData.push({ value: getSourceDocInfo(debt.sourceDocs), metadata: { style: 2 } });
        colData.push({ value: getSourceDocLink(debt.sourceDocs), metadata: { style: 2 } });
        colData.push(debt.cusip);
        colData.push(debt.isin);
        colData.push(getMisCovenantQuality(debt.misCovenantQltyAsmt));
        colData.push(getMaBondRating(debt.maBondImpliedRating));
        colData.push(...getAmort(debt.amortization));
        colData.push(debt.amountsOutstanding); // Amort Total (Issu)
        colData.push(...getAmortInProfileCurrency(debt.amortizationInProfileCurrency));
        colData.push(debt.amountsOutstandingInProfileCurrency); // Amort Total (Rptg)

        data.push(colData);
    });
    return removeDashes(data);
};
// TODO refactor into small functions
const getDebtAmortTable = function (props, capStructure) {
    const {
            debts,
            amortizationTable,
            debtMaturityAmortYears,
            profileData,
            currencyCode
        } = props;
    const debtAmortColumn = [
        "Entity",
        "Debt Class",
        ...debtMaturityAmortYears
    ].map((col) => { return { value: col, metadata: { style: 1 } } });

    const entityName = profileData.Entity.EntityName; // 1st row value
    const HeaderText = capStructureHeaderText + capstructurePageLocationEnum.debtAmortization.display; // 2nd row value
    const asOfDate = `As of ${moment(profileData.AsOfDate.$date).format("Do MMM YYYY")}`; // 3rd row value
    const reportingCurrency = `Reporting Currency (${currencyCode})`; // 4th Row Value

    const moneyUnit = "Amounts in Millions"; // 5th row value

    const headerColumn = Array(debtAmortColumn.length).join(" ").split("");
    const emptyColumn = Array(debtAmortColumn.length + 1).join(" ").split(""); // which add empty rows

    const firstColumn = [];
    firstColumn.push({name: entityName, value: entityName, metadata: { style: 1 } }, ...headerColumn);

    const secondColumn = [];
    secondColumn.push(HeaderText, ...headerColumn);

    const thirdColumn = [];
    thirdColumn.push(asOfDate, ...headerColumn);

    const fourthColumn = [];
    fourthColumn.push(reportingCurrency, ...headerColumn);

    const fifthColumn = [];
    fifthColumn.push(moneyUnit, ...headerColumn);

    const data = [];
    data.push(firstColumn, secondColumn, thirdColumn, fourthColumn, fifthColumn, emptyColumn, emptyColumn, debtAmortColumn);

    amortizationTable.forEach(function (amorts) {
        const colData = [];
        const amortsTableData = [amorts.entityName, amorts.debtClass, amorts.y1Raw, amorts.y2Raw, amorts.y3Raw, amorts.y4Raw,
            amorts.y5Raw, amorts.y6Raw, amorts.y7Raw, amorts.y8Raw, amorts.y9Raw, amorts.y10Raw]
            .map((col) => { 
                return { 
                    value: col,
                    metadata: {
                        style: 2
                    }
                }
            });
        colData.push(...amortsTableData);
        data.push(colData);
    });
    return removeDashes(data);
};

const getOrgChartTable = function getOrgChartTable (props) {
    const { dataInfo } = props;
    const data = [];
    const asOfDate = moment(dataInfo.AsOfDate.$date).format("Do MMM YYYY"); // 3rd row value
    const moneyUnit = "Amounts in Millions"; // 4th row value
    data.push([dataInfo.Entity.EntityName]);
    data.push(["Capital Structure: Group Structure"]);
    data.push(["As of " + asOfDate]);
    data.push(["Reporting Currency (" + dataInfo.CurrencyCode + ")"]);
    data.push(["Amounts in Millions"]);
    return data;
}

// capStructure is the flag to know if it is "Debt Details" || "Debt Amortization" || "Org Chart"
const generateExcelData = (props, capStructure) => {
    if (capStructure.trim() === "Debt Details") {
        return getDebtDetailsTable(props, capStructure);
    } else if (capStructure.trim() === "Debt Amortization") {
        return getDebtAmortTable(props, capStructure);
    } else if (capStructure.trim() === "Org Chart") {
        return getOrgChartTable(props, capStructure);
    }
    return '';
};
module.exports = generateExcelData;
