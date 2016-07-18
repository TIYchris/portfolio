import express from "express";
import config from "app-config-chain";
import http from "http";
import request from "request";

const app = express();

app.disable("x-powered-by");

// middleware stack
app.use(require("./middleware/errors"))
app.use(require("./middleware/spa"))

if (config.env === "development") {
    app.use(require("./middleware/webpack"))
} else {
    app.use(express.static(config.paths.dist))
}

const server = http.createServer(app);

require("./socket")(server);

var bodyParser = require("body-parser");
app.use(bodyParser.json()); // for parsing application/json

app.post("/api/email", function(req, res) {
    const url = "https://api.sendgrid.com/v3/mail/send";

    const json = {
        personalizations: [
            {
                to: [
                    {
                        email: "chrisbergstromis@gmail.com"
                    }
                ],
                subject: "Portfolio Contact"
            }
        ],
        from: {
            email: req.body.email
        },
        content: [
            {
                type: "text/plain",
                value: `
                    name: ${req.body.name}
                    email: ${req.body.email}
                    number: ${req.body.number}
                    webSite: ${req.body.webSite}
                    description: ${req.body.description}`
            }
        ]
    };

    request.post({
        url,
        json,
        auth: {
            sendImmediately: true,
            bearer: "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"
        }
    }, function(err, result, body) {
        console.log("Result of sending email: ", JSON.stringify({
            err,
            result,
            body
        }, null, 2));

        if (err) {
            return res.send({
                error: err.toString()
            });
        }

        return res.send({});
    });
});


export default server;
