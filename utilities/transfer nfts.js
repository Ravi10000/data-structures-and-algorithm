async function transferNFTs() {
    if (typeof nftBookings === "string")
        nftBookings = await JSON.parse(nftBookings);
    try {
        // connect db
        await dbConnect();
        const bookingsLength = nftBookings.length;
        console.log({ bookingsLength });
        // loop over all users
        for (let i = 200; i < bookingsLength; i++) {
            const booking = nftBookings[i];
            console.log({ booking, i });
            // find an nft by teamName, nftType, role and originalOwner = 0
            const nft = await NFT.findOne({
                teamName: { $regex: new RegExp(booking.nft_team_name, "i") },
                nftType: booking.nft_level.toLocaleLowerCase(),
                role: booking.nft_role.toLocaleLowerCase(),
                originalOwner: 0
            });
            console.log({ nft, i });
            if (!nft) {
                errorCount++;
                await generateLog({ data: { ...booking, nft, error: "nft not found" } });
                continue;
            }
            // get userId from api
            let { data } = await axios.post(
                "https://caro11.com/caro11_admin/api/getUserId",
                {
                    email: booking?.email
                });
            const userId = data?.[0]?.userid;
            console.log({ userId, i });
            if (!userId) {
                errorCount++;
                await generateLog({ data: { ...booking, nft, error: "user not found" } });
                continue;
            }
            // get user wallet from db
            const wallet = await UserWallet.findOne({ userId });
            console.log({ wallet, i });
            if (!wallet) {
                errorCount++;
                await generateLog({ data: { ...booking, nft, error: "wallet not found" } });
                continue;
            }

            const { ownerAddress, ownerError } = await getOwner(nft.tokenId);
            console.log({ ownerAddress, walletAddress: wallet.walletAddress });
            if (ownerError) {
                await generateLog({ data: { ...booking, nft, wallet, message: "error while fetching owner address", error: "error while fetching owner of NFT found" } });
                continue;
            }

            if (ownerAddress === wallet?.walletAddress) {
                const nftLog = await NftLog.findOne({ tokenId: nft.tokenId, nftId: nft._id, currentOwner: userId });
                if (!nftLog) {
                    await saveLog({ nft, wallet });
                    nft.currentOwner = userId;
                    nft.originalOwner = userId;
                    await nft.save();
                }
                await generateLog({ data: { ...booking, nft, wallet, message: "NFT already transferred", }, type: "success" });
                successCount++;
                continue;
            } else if (ownerAddress !== process.env.contract_address) {
                await generateLog({ data: { ...booking, nft, wallet, ownerAddress, message: "NFT already transferred" }, type: "info" });
                continue;
            }


            // call contract function
            const { error, receipt } = await payableFunction({
                contractKey: "NFT",
                walletAddress: process.env.account_address,
                privateKey: process.env.private_key,
                functionName: "transferFrom",
                args: [
                    process.env.account_address,
                    wallet.walletAddress,
                    nft.tokenId
                ]
            });
            console.log({ receipt, i });
            if (error) {
                console.log({ error, i });
                errorCount++;
                await generateLog({ data: { ...booking, nft, error } });
                continue;
            }
            // save log
            await saveLog({ nft, wallet, receipt })
            await generateLog({ data: { ...booking, nft, wallet }, type: "success" });
            nft.currentOwner = userId;
            nft.originalOwner = userId;
            await nft.save();
            successCount++;
        }
    } catch (error) {
        console.log({ error });
        process.exit(1);
    } finally {
        console.log({ errorCount, successCount });
        process.exit(0);
    }
}

function newTransfer(bookings){
    try{
        for(let i = 0; i < booking.length; i++){
            // move to next iteration if booking id is in valid transfers list;
            // find nft
            // find owner
            // find wallet
            // find user
            // if nft.currentOwner === user.id push id to valid transfer list continue;
            // transfer nft - contract
            // save log
        }
    }catch(error){
        console.log({error});
    }
}