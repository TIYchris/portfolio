export default [
    {
        test: /\.(png|jpg|gif)$/,
        loader: "url",
        query: {
            limit: 8192
        }
    }
]
