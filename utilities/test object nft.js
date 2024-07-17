
const nftTypes = ["basic", "advance", "bronze", "silver", "gold", "rare", "vip"]
const roleTypes = ["batsman", "bowler", "keeper", "allRounder"];
const nft = [{type: "basic", qty: 1}];

function validateNftTypes(nftList) {
    if(!Array.isArray(nftList)){
        return ["nftTypes must be an array"]
    }
  const errors = [];
  nftList?.forEach?.((nft, index) => {
    if (!nftTypes.includes(nft?.type) || !(parseInt(nft?.qty) > 0)) {
      errors.push(`invalid nft at position ${index} ${!nftTypes.includes(nft?.type) ? `, received value ${nft?.type} for type field, valid values ${nftTypes.join(" | ")}` : ""} ${!(parseInt(nft?.qty) > 0) ? `, received value ${nft?.qty} for field qty, must be an integer greater than or equal to 1`: ""}`);
    }
  });
  return errors?.length ? errors : false;
}

function validateRoles(roleList) {
  if (!Array.isArray(roleList)) return ["roles must be an array"];

  const errors = [];
  roleList?.forEach?.((role, index) => {
    const invalidType = !roleTypes.includes(role?.role);
    const invalidQty = !(parseInt(role?.qty) > 0);
    if (invalidType || invalidQty) {
      errors.push(
        `invalid role at position ${index}${
          invalidType
            ? `, received value ${
                role?.role
              } for field role, valid values ${roleTypes.join(" | ")}`
            : ""
        } ${
          invalidQty
            ? `, received value ${role?.qty} for field qty must be an integer greater than or equal to 1`
            : ""
        }`
      );
    }
  });
  return errors?.length ? errors : false;
}

validateRoles([{role: "batsmans", qty: 2}])
// validateNftTypes(nft)