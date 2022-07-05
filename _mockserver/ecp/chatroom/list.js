const faker = require("faker");

// module.exports = {
//     "pageCount": 1,
//     "_header_": {
//         "success": true,
//         "timeCost": 9
//     },
//     "pageIndex": 1,
//     "items": [{
//         "FId": "17e28f4e-7ec0-0ef1-1797-00155dae811f",
//         "FLastMessageTime": "2022-01-03 09:02:12.555",
//         "FIcon": "https://sprofile.line-scdn.net/0hbYZ98Z9bPXZ3QCrZ9VhDCQcQPhxUMWRkUy4gExZFZE4aJXMmXXF3FkIQYRRJJ3t3XSIiFRUVN0B7U0oQaRbBQnBwY0FOd3wnUy93kQ",
//         "FIsUnRead": false,
//         "FUserName": "吳苡澤",
//         "FBindStatus": "bind",
//         "FLastMessage": "傳出去"
//     }, {
//         "FId": "17e29087-9560-0ef1-1797-00155dae811f",
//         "FLastMessageTime": "2022-01-01 10:25:41.157",
//         "FIcon": "https://sprofile.line-scdn.net/0h_52b7cQ8ABofGy2fe2p-ZW9LA3A8alkIOnVHL3hJWytwe0VIMH4dLCkcDSxyeUIfYHoceS0SCSoTCHd8AU38LhgrXi0mLEFLO3RK_Q",
//         "FIsUnRead": false,
//         "FUserName": "楊家碩",
//         "FBindStatus": "service",
//         "FLastMessage": "test"
//     }, {
//         "FId": "17e29087-9560-0ef1-1797-00155dae811f",
//         "FLastMessageTime": "2022-01-01 10:25:41.157",
//         "FIcon": "https://sprofile.line-scdn.net/0h_52b7cQ8ABofGy2fe2p-ZW9LA3A8alkIOnVHL3hJWytwe0VIMH4dLCkcDSxyeUIfYHoceS0SCSoTCHd8AU38LhgrXi0mLEFLO3RK_Q",
//         "FIsUnRead": false,
//         "FUserName": "楊家碩2",
//         "FBindStatus": "unbind",
//         "FLastMessage": "test"
//     }]
// };

module.exports = {
    pageCount: 1,
    _header_: {
        success: true,
        timeCost: 100,
    },
    hasNextPage: false,
    recordCount: 100,
    items: makeChatList(100),
};

function makeChatList(recordNum = 10) {
    const list = [];
    for (let i = 0; i < recordNum; i++) {
        const idx = !((i + 1) % 7) ? 1 % 7 : (i + 1) % 7;
        const obj = {
            FId: faker.random.uuid(),
            FIcon: "https://bootdey.com/img/Content/avatar/avatar" + idx + ".png",
            FIsUnRead: faker.random.boolean(),
            FUserName: `[${i + 1}] ${faker.name.firstName()}`,
            FLastMessage: faker.commerce.productDescription(),
            FUpdateTime: +new Date(faker.date.past()),
        };

        if (i === 0) obj.FId = "17d6fe9f-8320-0932-4a23-00155dd13fcf";

        list.push(obj);
    }

    return list;
}
