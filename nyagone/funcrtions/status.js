exports.handler = async (event, context) => {
    return {
        statusCode: 410,
        body: 'Gone',
    };
};