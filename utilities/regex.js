const testLinks = ["http://", "https://"];

let isLink = testLinks[0].match(/https?/);
console.log({isLink})


const matched = testLinks.filter((link) => {
    const isLink = link.match(/https?:\/\//);
    return isLink ? true: false;
        });
console.log({matched});